/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/15.
 */
import {Inject, Injectable} from "@angular/core";
import {NotificationConfig} from "../../config/notification.config";
import {Events, Platform} from "ionic-angular";
import {NotificationEntity} from "../../entity/notification-entity";
import {EventNameConfig} from "../../config/event-name.config";
import {NotificationService} from "./notification.service";

@Injectable()
export class ImService {
  static socketService: WebSocket;
  private module = 'chat';
  static connectStatus: boolean = false;
  static unsendMessageCache: Array<any> = [];
  static keepOnlineInterval: any;
  static lastSentMessageTime: number = 0;

  constructor(public plt: Platform,
              public event: Events,
              @Inject(NotificationService) public notificationService: NotificationService,
              @Inject('app.config') private appConfig: any,
              @Inject('user-store.service') private userStoreService: any) {
  }

  /**
   * 初始化登录
   */
  initSocket() {
    console.log('initSocket');
    ImService.socketService = new WebSocket(this.appConfig.socketDomain + this.module);
    ImService.socketService.onopen = ((event: MessageEvent) => {
      console.log('socket service open');
      ImService.connectStatus = true;
      // socket 连接后执行登录操作
      this.loginToWebSocket();
      //心跳保持
      ImService.keepOnlineInterval = setInterval(() => {
        this.keepOnline();
      }, 1000);
      //this.onOpen(event, option.openEvent);
    });
    ImService.socketService.onerror = ((event: ErrorEvent) => {
      console.error('Socket error:', event);
      this.closeSocket(true);
    });
    ImService.socketService.onmessage = ((event: MessageEvent) => {
      console.info('@Socket receive new message!', event.data);
      this.onMessage(event);
    });
    ImService.socketService.onclose = ((event: CloseEvent) => {
      console.log('socket close', event);
      this.closeSocket();
    });


  }

  /**
   * 执行登录
   */
  loginToWebSocket() {
    if (ImService.connectStatus) {
      let uuid, psid, session_id;
      Promise.all([
        this.userStoreService.getSessionId(v => session_id = v),
        this.userStoreService.getCurrentUUID(v => uuid = v),
        this.userStoreService.getCurrentPSID(v => psid = v)
      ]).then(() => {
        console.log('send login message to im service');
        this.send({
          act: NotificationConfig.ACT_SYSTEM_IM_LOGIN,
          data: {
            uuid: uuid,
            psid: psid,
            session_id: session_id
          }
        });
      });
    }
  }

  /**
   * 发送消息
   * @param message
   */
  send(message: any) {
    let sendData;
    if (typeof message === 'object') {
      sendData = JSON.stringify(message);
    } else {
      sendData = message;
    }
    ImService.socketService = ImService.socketService ? ImService.socketService : new WebSocket(this.appConfig.socketDomain + this.module);
    ImService.socketService.send(sendData);
    ImService.lastSentMessageTime = 0;
    console.log('send message', sendData);
  }

  /**
   * 接受消息
   * @param event MessageEvent
   */
  onMessage(event: MessageEvent) {
    let message: any = JSON.parse(event.data);
    if (message && message.hasOwnProperty('status') && message.hasOwnProperty('act')) {
      let param: NotificationEntity = {
        act: message.act,
        status: message.status,
        data: message.data
      };
      switch (param.act) {
        case NotificationConfig.ACT_USER_SESSION_EXPIRED:
        case NotificationConfig.ACT_SYSTEM_IM_LOGIN:
          this.event.publish(EventNameConfig.NOTIFICATION_GLOBAL, param);
          break;
        default:
          this.notificationService.postNotification(param);
      }
    } else {
      //console.error('message.status error', message);
    }
  }

  /**
   * 关闭socket
   */
  closeSocket(reconnect?: boolean) {
    // 移除循环心跳保持事件

    if (ImService.socketService && ImService.connectStatus) {
      ImService.socketService.close();
      ImService.connectStatus = false;
      delete ImService.socketService;
    }

    if (ImService.keepOnlineInterval) {
      clearInterval(ImService.keepOnlineInterval);
    }


    if (reconnect) {
      this.initSocket();
    }

  }

  /**
   * 在线上,心跳连接
   */
  keepWebSocketOnline() {
    console.log('keep online', ImService.connectStatus);
    if (ImService.connectStatus) {
      let uuid, psid, session_id;
      Promise.all([
        this.userStoreService.getSessionId(v => session_id = v),
        this.userStoreService.getCurrentUUID(v => uuid = v),
        this.userStoreService.getCurrentPSID(v => psid = v)
      ]).then(() => {
        console.log('send keep online message to im service');
        this.send({
          act: NotificationConfig.ACT_SYSTEM_IM_KEEP_ONLINE,
          data: {
            uuid: uuid,
            psid: psid,
            session_id: session_id
          }
        });
      });
    } else {
      console.log('not connected, try re-login');
      this.loginToWebSocket();
    }
  }


  /**
   * 心跳保持
   */
  keepOnline() {
    if (ImService.lastSentMessageTime <= this.appConfig.socket.KEEP_ONLINE_TIME) {
      ImService.lastSentMessageTime++;
      //console.warn('check leave time', ImService.messageLeaveTime[module]);
    } else {
      this.keepWebSocketOnline();
      ImService.lastSentMessageTime = 0;
    }
  }

  /**
   * 底层IM消息数据
   */
  preparePublicData(message: any): Promise<any> {
    message['app_version'] = (this.plt.is('ios') ? 'i' : 'a') + this.appConfig.appVersion;
    if (message.data) {
      return this.userStoreService.getSessionId((v) => {
        message.data.session_id = v
      });
    }
  }

  /**
   * 用户消息数据
   */
  prepareMemberPublicData(message: any): Promise<any> {
    if (message.data) {
      return this.preparePublicData(message).then(() => {
        if (!message.data.hasOwnProperty('owner')) {
          let uuid, psid, cid;
          Promise.all([
            this.userStoreService.getCurrentCID(v => cid = v),
            this.userStoreService.getCurrentUUID(v => uuid = v),
            this.userStoreService.getCurrentPSID(v => psid = v)
          ]).then(() => {
            message.data.owner = {
              psid: psid,
              uuid: uuid,
              cid: cid
            };
            this.send(message);
          });
        }
      });
    }
  }


  /**
   * 发送用户相关消息
   * @param message
   */
  sendMemberMessage(message: any) {
    this.prepareMemberPublicData(message).then(() => {
      console.log('sendMemberMessage');
    });
  }

  /**
   * 发送聊天消息
   * @param message
   */
  sendCommonMessage(message: any) {
    this.preparePublicData(message).then(() => {
      console.log('sendCommonMessage', message);
      this.send(message);
    });
  }

  /**
   * 好友申请
   */
  doApplyFriend(data: any) {
    this.sendMemberMessage({
      act: NotificationConfig.ACT_USER_REQUEST_ADD_FRIEND,
      data: {
        friend: data.friend,
        remark: data.remark,  //请求留言信息
        relation: data.user_relation,  //好友关系
        company_name: data.company_name  //公司名称
      }
    });
  }


  /**
   * 拒绝好友申请
   * @param data
   */
  refuseApplyFriend(data: any) {
    this.sendMemberMessage({
      act: NotificationConfig.ACT_USER_NOTICE_REFUSE_ADD_FRIEND,
      data: {
        friend: data.friend,
        request_id: data.request_id,
        feedback: data.feedback
      }
    });
  }

  /**
   * 接收好友申请
   * @param data
   */
  acceptApplyFriend(data: any) {
    this.sendMemberMessage({
      act: NotificationConfig.ACT_USER_NOTICE_ACCEPT_ADD_FRIEND,
      data: {
        friend: data.friend,
        relation: data.friend_relation,
        request_id: data.request_id,
        feedback: data.feedback
      }
    });
  }









  /**
   * 建立群组
   */
  sendCreateGroup(data: any) {
    this.sendCommonMessage({
      act: NotificationConfig.ACT_CHAT_NOTICE_GROUP_CREATE,
      data: {
        name: data.name,
        topic: data.topic,
        members: data.members,
        form: data.form
      }
    });
  }

  /**
   * 修改群名称和修改群主题
   */
  sendModifyChannelInfo(data: any) {
    this.sendCommonMessage({
      act: NotificationConfig.ACT_NOTICE_GROUP_NAME_MODIFY,
      data: {
        gid: data.gid,
        name: data.name,
        topic: data.topic,
        form: data.form,
        invited_member: data.invited_member
      }
    });
  }


  /**
   * 删除群成员
   */
  sendDeleteChannelMember(data: any) {
    this.sendCommonMessage({
      act: NotificationConfig.ACT_NOTICE_MASTER_DELETE_GROUP_USER,
      data: {
        gid: data.gid,
        name: data.name,
        friend: data.friend,
        form: data.form
      }
    });
  }

  /**
   * 群主邀请新人进去 （直接进群）
   */
  inviteByHost(data: any) {
    this.sendCommonMessage({
      act: NotificationConfig.ACT_NOTICE_MASTER_GROUP_INVITE,
      data: {
        gid: data.gid,
        invited_member: data.invited_member,
        is_host: data.is_host,
        name: data.name,
        members: data.members,
        form: data.form
      }
    });
  }


  /**
   *非群主邀请 （根据invited_member 决定是否要群主同意）
   * invited_member=0 需要
   * invited_member=1 不需要
   */
  inviteByCommonMember(data: any) {
    this.sendCommonMessage({
      act: NotificationConfig.ACT_REQUEST_MEMBER_GROUP_INVITE,
      data: {
        gid: data.gid,
        invited_member: data.invited_member,
        is_host: data.is_host,
        name: data.name,
        members: data.members,
        form: data.form
      }
    });
  }

  /**
   * 被邀请人接受进群
   */
  newMemberAcceptInvite(data: any) {
    this.sendCommonMessage({
      act: NotificationConfig.ACT_NOTICE_MEMBER_GROUP_INVITE_ACCEPT,
      data: {
        form: data.form,
        gid: data.gid,
        name: data.name,
        request_id: data.request_id
      }
    });
  }

  /**
   * 被邀请人拒绝入群
   */
  newMemberRefuseInvite(data: any) {
    this.sendCommonMessage({
      act: NotificationConfig.ACT_NOTICE_MEMBER_GROUP_INVITE_REFUSE,
      data: {
        friend: data.friend,
        gid: data.gid,
        form: data.form,
        name: data.name,
        request_id: data.request_id
      }
    });
  }

  /**
   * 非群主邀請后群主同意
   */
  masterAcceptInvite(data: any) {
    this.sendCommonMessage({
      act: NotificationConfig.ACT_NOTICE_MEMBER_GROUP_INVITE_MASTER_ACCEPT,
      data: {
        gid: data.gid,
        name: data.name,
        introducer: data.introducer,
        members: data.members,
        form: data.form,
        request_id: data.request_id
      }
    });
  }


  /**
   * 非群主邀請后群主拒绝
   */
  masterRefuseInvite(data: any) {
    this.sendCommonMessage({
      act: NotificationConfig.ACT_NOTICE_MEMBER_GROUP_INVITE_MASTER_REFUSE,
      data: {
        gid: data.gid,
        name: data.name,
        introducer: data.introducer,
        members: data.members,
        form: data.form,
        request_id: data.request_id
      }
    });
  }


  /**
   * 删除群组
   */
  sendDeleteTheChannel(data: any) {
    this.sendCommonMessage({
      act: NotificationConfig.ACT_NOTICE_GROUP_DELETE,
      data: {
        form: data.form,
        gid: data.gid,
        name: data.name,
      }
    });
  }


  /**
   * 退出当前群
   * @param data
   */
  sendQuitTheChannel(data: any) {
    this.sendCommonMessage({
      act: NotificationConfig.ACT_NOTICE_USER_EXIT_GROUP,
      data: {
        form: data.form,
        gid: data.gid,
        //name: data.name
      }
    })
  }

  /**
   * 发送个人消息
   */
  sendPersonalMessage(data: any) {
    this.sendCommonMessage({
      act: NotificationConfig.ACT_CHAT_SEND_MESSAGE,
      data: {
        friend: data.friend,
        form: data.form,
        identity: data.identity,
        type: data.type,
        token: data.token,
        msg: data.msg,
        detail: data.detail ? data.detail : {},
      }
    });
  }


  /**
   * 发送群组消息
   * @param data
   */
  sendGroupMessage(data: any) {
    this.sendCommonMessage({
      act: NotificationConfig.ACT_CHAT_SEND_MESSAGE,
      data: {
        gid: data.gid,
        form: data.form,
        identity: data.identity,
        type: data.type,
        token: data.token,
        msg: data.msg,
        detail: data.detail ? data.detail : {},
      }
    });
  }


  /**
   * 撤回群组消息
   * @param data
   */
  revokeGroupMessage(data: any) {
    this.sendCommonMessage({
      act: NotificationConfig.ACT_CHAT_MESSAGE_REVOKE,
      data: {
        gid: data.gid,
        form: data.form,
        msg_id: data.msg_id,
        identity: data.identity,
      }
    });
  }

  /**
   * 撤回个人消息
   * @param data
   */
  revokePersonalMessage(data: any) {
    this.sendCommonMessage({
      act: NotificationConfig.ACT_CHAT_MESSAGE_REVOKE,
      data: {
        friend: data.friend,
        form: data.form,
        msg_id: data.msg_id,
        identity: data.identity,
      }
    });
  }

}
