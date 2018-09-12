import {Component, Inject, ViewChild, ElementRef} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController, Events, InfiniteScroll, Content} from 'ionic-angular';
import {ChatMenu, ChatMessage} from "../../share/entity/chat-entity";
import {ChatModelService} from "../../share/service/model/chat-model.service";
import {ChatChannelMoreComponent} from "../chat-channel-more/chat-channel-more";
import {EventNameConfig} from "../../share/config/event-name.config";
import {NotificationEntity} from "../../share/entity/notification-entity";
import {NotificationConfig} from "../../share/config/notification.config";
import {UserModelService} from "../../share/service/model/user-model.service";
import {NotificationService} from "../../share/service/common/notification.service";
import {Subscription} from "rxjs/Subscription";
import {ChatConfig} from "../../share/config/chat.config";
import {ChatContentInputComponent} from "./chat-content-input/chat-content-input";
import {ChatContentMessageDetailComponent} from "../chat-content-message-detail/chat-content-message-detail";


/**
 * Generated class for the ChatContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-content',
  templateUrl: 'chat-content.html',
  providers: [ChatModelService, UserModelService]
})
export class ChatContentComponent {

  public chatMenuItem: ChatMenu;
  public isFriend: boolean;
  public chatChannelInfo: any = {};
  public isMission: any;
  private subscription: Subscription;
  private currentMessageArray: Array<ChatMessage> = [];
  public chatConfig: any = ChatConfig;
  private allMessageOwnerInfo: any;
  private maxTime: any;
  private minTime: any;
  private refreshObj: any;
  private hasMoreHistoryMessage: boolean = true;
  private hasMoreNewMessage: boolean = true;
  private sendMessageList: Array<any> = [];
  private currentUUID: string;
  private currentPSID: string;
  private currentUserInfo: string;

  @ViewChild('chatMessageInput') chatMessageInput: ChatContentInputComponent;
  @ViewChild('chatMessageContent') chatMessageContent: ElementRef;
  @ViewChild(Content) content: Content;
  private friendIdentity: {identity: string; friend_identity: string};

  constructor(public navCtrl: NavController,
              public chatModelService: ChatModelService,
              public userModelService: UserModelService,
              public modalCtrl: ModalController,
              @Inject(NotificationService) public notificationService: NotificationService,
              @Inject('user-store.service') private userStoreService: any,
              @Inject('date.service') private dateService: any,
              @Inject('im.service') public imService: any,
              public events: Events,
              @Inject('dialog.service') public dialogService,
              @Inject('app.config') public appConfig,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.getCurrentUserInfo();
    this.chatMenuItem = this.navParams.data.data;
    this.isFriend = this.chatMenuItem.is_Friend ? true : false;
    if (!this.isFriend) {
      this.isMission = (this.chatMenuItem.is_mission == 1)
    }
    this.fetchChannelInfo();
    this.loadChatMessageByMenuItem();
    this.initMessageObj();
    this.subscription = this.notificationService.getNotification().subscribe(
      (message: any) => {
        this.dealWebSocketNotification(message);
      });
    this.dealEvent();
  }


  /**
   * 页面销毁
   */
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.events.unsubscribe(EventNameConfig.FORWARD_MESSAGE);
    this.events.unsubscribe(EventNameConfig.SHARE_MESSAGE);
  }


  /**
   * 时间处理
   */
  dealEvent(): void {
    this.events.subscribe(EventNameConfig.FORWARD_MESSAGE, (param: any) => {
      this.sendForwardMessage(param.data.originalMsg, param.data.forwardItem);
    });
    this.events.subscribe(EventNameConfig.SHARE_MESSAGE, (param: any) => {
      this.sendShareMessage(param.data.shareMessage, param.data.shareItem);
    })
  }


  /**
   * IM通知处理
   */
  dealWebSocketNotification(message: NotificationEntity) {
    switch (message.act) {
      case NotificationConfig.ACT_NOTICE_MASTER_DELETE_GROUP_USER:  //删除群成员
        if (message.status == 1 && message.data
          && message.data.owner && message.data.gid == this.chatMenuItem.gid
          && message.data.frd_type == 3
        ) { //被删的人收的消息;
          this.dialogService.showAlert('Delete Member!', 'You are be deleted from current channel!', () => {
            this.navCtrl.popAll()
          });
        }
        break;
      case NotificationConfig.ACT_NOTICE_MASTER_GROUP_INVITE: //群主直接添加成员
        if (message.status == 1 && message.data && message.data.sent && this.chatChannelInfo.gid == message.data.gid) {
          this.fetchChannelInfo(true);
        }
        break;
      case NotificationConfig.ACT_NOTICE_GROUP_DELETE: //删除群
        if (message.status == 1) {
          if (message.data && message.data.sent == 1 && message.data.gid == this.chatChannelInfo.gid) {
            this.navCtrl.popAll();
          } else if (message.data && message.data.owner && message.data.gid == this.chatChannelInfo.gid) {
            this.dialogService.showAlert('Warning', 'The channel has been deleted!', () => {
              this.navCtrl.popAll()
            })
          }
        } else {
          this.dialogService.showAlert('Delete Failed!')
        }
        break;
      case NotificationConfig.ACT_NOTICE_USER_EXIT_GROUP: //退出群
        if (message.status == 1) {
          if (message.data && message.data.sent == 1 && message.data.gid == this.chatChannelInfo.gid) {
            this.navCtrl.popAll();
          } else if (message.data && message.data.owner && message.data.gid == this.chatChannelInfo.gid) {
            this.fetchChannelInfo(true)
          }
        } else {
          this.dialogService.showAlert('Quit Failed!')
        }
        break;

      case NotificationConfig.ACT_CHAT_SEND_MESSAGE: //退出群
        if (message.hasOwnProperty('status') && message.status == 1) {
          this.pendingNewMessage(message.data);
        } else {
          console.log('消息发送失败');
        }
        break;
    }
  }

  /**
   * 获取当前用户信息
   */
  getCurrentUserInfo() {
    let uuid: string;
    let psid: string;
    let userInfo: any;
    Promise.all([
      this.userStoreService.getCurrentUUID(v => uuid = v),
      this.userStoreService.getCurrentPSID(v => psid = v),
      this.userStoreService.getUserInfo(v => userInfo = v)
    ]).then(() => {
      this.currentUUID = uuid;
      this.currentPSID = psid;
      this.currentUserInfo = userInfo;
      let owner = (this.chatMenuItem.form == 1 ) ? this.currentUUID : this.currentPSID;
      if (this.isFriend) {
        this.friendIdentity = this.initPersonalIdentity(this.chatMenuItem.form, this.chatMenuItem.uid, owner);
      }
    });
  }


  /**
   *  从api接口 获取 聊天信息 和 channel info
   */
  fetchChannelInfo(bool?: boolean) {
    if (this.isFriend) {
      this.userModelService.getUserInfo({uid: this.chatMenuItem.uid}, (response) => {
        if (response.status == 1 && response.hasOwnProperty('data')) {
          this.chatChannelInfo = response.data;
        }
      });
    } else {
      this.chatModelService.fetchGroupInfo({im_data: {gid: this.chatMenuItem.gid}}, (res: any) => {
        if (res.status == 1) {
          this.chatChannelInfo = res.data;
          if (bool) {
            this.events.publish(EventNameConfig.REFRESH_CHAT_CHANNEL_INFO, {data: this.chatChannelInfo});
          }
        } else {
          alert('获取失败')
        }
      });
    }
  }


  /**
   * 进去channel读取消息
   */
  loadChatMessageByMenuItem() {
    if (this.isFriend) {
      this.getPersonalMessageFromApi(ChatConfig.CHAT_SORT_UP, '', '');
    } else {
      this.getGroupMessageFromApi(ChatConfig.CHAT_SORT_UP, '', '');
    }
  }


  /**
   * 从api获取群组的聊天记录
   */
  getGroupMessageFromApi(sort: number, max_time: any, min_time: any, isLoadingMore?: boolean) {
    let requestData: any = {
      is_mission: this.chatMenuItem.is_mission,
      gid: parseInt(this.chatMenuItem.gid),
      form: this.chatMenuItem.form,
      sort: sort,
      min_time: max_time,
      max_time: min_time,
    };
    this.chatModelService.getUserGroupMessage({data: requestData}, (res: any) => {
      if (res.status == 1) {
        this.allMessageOwnerInfo = res.data.users_info;
        if (sort == 1 && res.data.msg) {  //如果向上
          this.currentMessageArray = res.data.msg.concat(this.currentMessageArray);
        } else if (sort == -1 && res.data.msg) { //如果向下拉

        }
        this.buildMessageArrForDisplay(isLoadingMore);
        this.refreshTime(res.data);
        this.judgeCanLoadMore(sort, res.data);
        if (isLoadingMore) {
          this.refreshObj.complete()
        }
      } else {
        this.dialogService.showAlert('Loading failed!')
      }
    });
  }


  /**
   * 从Api获取个人聊天消息
   */
  getPersonalMessageFromApi(sort: number, max_time: any, min_time: any, isLoadingMore?: boolean) {
    let requestData: any = {
      friend: this.chatMenuItem.uid,
      form: this.chatMenuItem.form,
      sort: sort,
      min_time: max_time,
      max_time: min_time
    };
    this.chatModelService.getUserMessage({data: requestData}, (res: any) => {
      if (res.status == 1) {
        this.allMessageOwnerInfo = res.data.users_info;
        if (sort == 1 && res.data.msg) {  //如果向上
          this.currentMessageArray = res.data.msg.concat(this.currentMessageArray);
        } else if (sort == -1 && res.data.msg) { //如果向下拉

        }
        this.buildMessageArrForDisplay(isLoadingMore);
        this.refreshTime(res.data);
        this.judgeCanLoadMore(sort, res.data);
        if (isLoadingMore) {
          this.refreshObj.complete()
        }
      } else {
        this.dialogService.showAlert('Loading failed!')
      }
    });
  }


  /**
   * 将数据做成模板显示的格式
   */
  buildMessageArrForDisplay(bool: boolean) {
    for (let i in this.currentMessageArray) {
      this.currentMessageArray[i]['date_time'] = this.dateService.formatLocal(this.currentMessageArray[i]['time'], 'HH:MM dd/mm/yyyy');
      this.getMessageOwnerInfo(this.currentMessageArray[i]);
      if (this.currentMessageArray[i].owner == this.currentUUID
        || this.currentMessageArray[i].owner == this.currentPSID) {
        this.currentMessageArray[i].isSelf = true
      } else {
        this.currentMessageArray[i].isSelf = false
      }
    }
    if (!bool) {  //第一次从menu进去聊天 拉取消息
      setTimeout(() => {
        this.content.scrollToBottom();
      }, 100);
    }
  }

  /**
   * 获取消息owner的详细信息
   */
  getMessageOwnerInfo(message: any) {
    for (let key in this.allMessageOwnerInfo) {
      if (key == message.owner) {
        message.user_info = this.allMessageOwnerInfo[key];
        break;
      }
    }
  }


  /**
   * 点击more 查看群组更多信息
   */
  showMoreChannelInfo() {
    let componentData: any = {
      chatChannelInfo: this.chatChannelInfo,
      menu: this.chatMenuItem
    };
    let modal = this.modalCtrl.create(ChatChannelMoreComponent, componentData);
    modal.present();
  }


  /**
   * 向下滚动加载
   * @param infiniteScroll
   * @returns {Promise<T>}
   */
  doInfinite(infiniteScroll: InfiniteScroll) {

  }


  /**
   * 上拉加载更多消息
   */
  doRefresh(event: any) {
    this.refreshObj = event;
    if (this.isFriend) {
      this.getPersonalMessageFromApi(ChatConfig.CHAT_SORT_UP, '', this.minTime, true);
    } else {
      this.getGroupMessageFromApi(ChatConfig.CHAT_SORT_UP, '', this.minTime, true);
    }
  }


  /**
   * 刷新时间
   */
  refreshTime(data: any) {
    this.maxTime = data.max_time;
    this.minTime = data.min_time;
  }


  /**
   * 判断是否还有消息可以拉取
   */
  judgeCanLoadMore(sort: number, data: any) {
    if (sort === ChatConfig.CHAT_SORT_UP) {
      this.hasMoreHistoryMessage = data.msg.length ? true : false;
    } else if (sort === ChatConfig.CHAT_SORT_DOWN) {
      this.hasMoreNewMessage = data.msg.length ? true : false;
    }
  }

  /**
   * 发送消息
   */
  sendMessage(data: any) {
    let token: string = 'tmsg_' + this.makeToken(); //生成token
    let owner = (this.chatMenuItem.form == 1 ) ? this.currentUUID : this.currentPSID;
    if (this.isFriend) {
      let newMessageObj: any = {
        form: this.chatMenuItem.form,
        detail: {},
        msg: data.msg,
        token: token,
        type: data.type,
        identity: this.friendIdentity.identity,
        owner: owner,
        friend: this.chatMenuItem.uid
      };
      this.sendMessageList.push(newMessageObj);
      this.imService.sendPersonalMessage(newMessageObj);
    } else {
      let newMessageObj: any = {
        form: this.chatMenuItem.form,
        detail: {},
        msg: data.msg,
        token: token,
        type: data.type,
        identity: this.initGroupIdentity(this.chatMenuItem.form, this.chatMenuItem.gid),
        owner: owner,
        gid: this.chatMenuItem.gid
      };
      this.sendMessageList.push(newMessageObj);
      this.imService.sendGroupMessage(newMessageObj);

    }
    this.chatMessageInput.messageData = '';
  }

  /**
   * 发送转发消息
   */
  sendForwardMessage(originalMsg: any, item: any) {
    let token: string = 'tmsg_' + this.makeToken(); //生成token
    let owner = (this.chatMenuItem.form == 1 ) ? this.currentUUID : this.currentPSID;
    if (item.gid) {
      let newMessageObj: any = {
        form: this.chatMenuItem.form,
        detail: originalMsg,
        msg: originalMsg.original_msg.msg,
        token: token,
        type: ChatConfig.CHAT_MESSAGE_TYPE_FORWARD,
        identity: this.initGroupIdentity(this.chatMenuItem.form, item.gid),
        owner: owner,
        gid: item.gid
      };
      this.sendMessageList.push(newMessageObj);
      this.imService.sendGroupMessage(newMessageObj);
    } else {
      let uid: string = item.uuid || item.psid;
      let newMessageObj: any = {
        form: this.chatMenuItem.form,
        detail: originalMsg,
        msg: originalMsg.original_msg.msg,
        token: token,
        type: ChatConfig.CHAT_MESSAGE_TYPE_FORWARD,
        identity: this.initPersonalIdentity(this.chatMenuItem.form, uid, owner).identity,
        owner: owner,
        friend: uid
      };
      this.sendMessageList.push(newMessageObj);
      this.imService.sendPersonalMessage(newMessageObj);
    }
  }


  /**
   * 发送分享消息
   */
  sendShareMessage(shareMessage: any, item: any) {
    let token: string = 'tmsg_' + this.makeToken(); //生成token
    let owner = (this.chatMenuItem.form == 1 ) ? this.currentUUID : this.currentPSID;
    if (item.gid) {
      let newMessageObj: any = {
        form: this.chatMenuItem.form,
        detail: shareMessage,
        msg: shareMessage.file_name || shareMessage.post_name,
        token: token,
        type: ChatConfig.CHAT_MESSAGE_TYPE_SHARE,
        identity: this.initGroupIdentity(this.chatMenuItem.form, item.gid),
        owner: owner,
        gid: item.gid
      };
      this.sendMessageList.push(newMessageObj);
      this.imService.sendGroupMessage(newMessageObj);
    } else {
      let uid: string = item.uuid || item.psid;
      let newMessageObj: any = {
        form: this.chatMenuItem.form,
        detail: shareMessage,
        msg: shareMessage.file_name || shareMessage.post_name,
        token: token,
        type: ChatConfig.CHAT_MESSAGE_TYPE_SHARE,
        identity: this.initPersonalIdentity(this.chatMenuItem.form, uid, owner).identity,
        owner: owner,
        friend: uid
      };
      this.sendMessageList.push(newMessageObj);
      this.imService.sendPersonalMessage(newMessageObj);
    }
  }


  /**
   * 收到新消息
   */
  pendingNewMessage(message: any) {
    if (this.isFriend) {
      if (message.hasOwnProperty('sent') && message.sent == 1 && message.identity == this.friendIdentity.identity) {  //本人本Tab发送
        this.sendMessageList.forEach((item: any, index: number) => {
          if (item.token === message.token) {
            let messageData = {
              time: message.time,
              type: message.type,
              msg_id: message.msg_id,
              status: 1,
              msg: item.msg,
              owner: item.owner,
              detail: item.detail,
              isSelf: true,
              user_info: this.currentUserInfo,
              date_time: this.dateService.formatLocal(message.time, 'HH:MM dd/mm/yyyy')
            };
            this.sendMessageList.splice(index, 1);
            let newMessageObj: ChatMessage = this.initMessageObj();
            Object.assign(newMessageObj, messageData);
            this.currentMessageArray.push(newMessageObj);
            setTimeout(() => {
              this.content.scrollToBottom();
            });
          }
        })
      } else if (message.hasOwnProperty('owner')) {
        // 字段中有owner 有两种情况 1收到本人在其他tab的消息 2.好友发的消息
        let isSelf: boolean = (message.owner == this.currentUUID || message.owner == this.currentPSID);

        if ((isSelf && message.identity == this.friendIdentity.identity) ||
          (!isSelf && message.identity == this.friendIdentity.friend_identity)
        ) {
          //获取该消息ownerInfo
          let ownerInfo: any = isSelf ? this.currentUserInfo : this.chatChannelInfo;
          let messageData = {
            time: message.time,
            type: message.type,
            msg_id: message.msg_id,
            status: 1,
            msg: message.msg,
            owner: message.owner,
            detail: message.detail,
            user_info: ownerInfo,
            isSelf: (message.owner == this.currentUUID || message.owner == this.currentPSID),
            date_time: this.dateService.formatLocal(message.time, 'HH:MM dd/mm/yyyy')
          };
          let newMessageObj: ChatMessage = this.initMessageObj();
          Object.assign(newMessageObj, messageData);
          this.currentMessageArray.push(newMessageObj);
          let scrollHeight: number = this.content.getContentDimensions().scrollHeight;
          let contentHeight: number = this.content.getContentDimensions().contentHeight;
          let scrollTop: number = this.content.getContentDimensions().scrollTop;
          //如果接收者的消息停留在底部 就向下滚动 否则不滚动
          if (contentHeight + scrollTop >= scrollHeight) {
            setTimeout(() => {
              this.content.scrollToBottom();
            });
          }
        }
      }
    } else {
      if (message.hasOwnProperty('sent') && message.sent == 1 && message.gid == this.chatMenuItem.gid) {  //本人本Tab发送
        if (message.hasOwnProperty('token') && this.sendMessageList.length) {
          this.sendMessageList.forEach((item: any, index: number) => {
            if (item.token === message.token) {
              let messageData = {
                time: message.time,
                type: message.type,
                msg_id: message.msg_id,
                status: 1,
                msg: item.msg,
                owner: item.owner,
                detail: item.detail,
                isSelf: true,
                user_info: this.currentUserInfo,
                date_time: this.dateService.formatLocal(message.time, 'HH:MM dd/mm/yyyy')
              };
              this.sendMessageList.splice(index, 1);
              let newMessageObj: ChatMessage = this.initMessageObj();
              Object.assign(newMessageObj, messageData);
              this.currentMessageArray.push(newMessageObj);
              setTimeout(() => {
                this.content.scrollToBottom();
              });
            }
          })
        }
      } else if (message.hasOwnProperty('owner') && message.gid == this.chatMenuItem.gid) {
        //获取该消息ownerInfo
        let ownerInfo: any = this.getNewMessageOwnerInfo(message);
        let messageData = {
          time: message.time,
          type: message.type,
          msg_id: message.msg_id,
          status: 1,
          msg: message.msg,
          owner: message.owner,
          detail: message.detail,
          user_info: ownerInfo,
          isSelf: (message.owner == this.currentUUID || message.owner == this.currentPSID),
          date_time: this.dateService.formatLocal(message.time, 'HH:MM dd/mm/yyyy')
        };
        let newMessageObj: ChatMessage = this.initMessageObj();
        Object.assign(newMessageObj, messageData);
        this.currentMessageArray.push(newMessageObj);
        let scrollHeight: number = this.content.getContentDimensions().scrollHeight;
        let contentHeight: number = this.content.getContentDimensions().contentHeight;
        let scrollTop: number = this.content.getContentDimensions().scrollTop;
        //如果接收者的消息停留在底部 就向下滚动 否则不滚动
        if (contentHeight + scrollTop >= scrollHeight) {
          setTimeout(() => {
            this.content.scrollToBottom();
          });
        }
      }
    }
  }


  /**
   * 获取新消息的ownerInfo
   */
  getNewMessageOwnerInfo(message: any) {
    let ownerInfo: any;
    for (let i  in this.chatChannelInfo.info) {
      if (this.chatChannelInfo.info[i].uid == message.owner) {
        ownerInfo = this.chatChannelInfo.info[i];
        break;
      }
    }
    return ownerInfo;
  }


  /**
   * 初始化消息对象
   */
  initMessageObj() {
    let messageObj: ChatMessage = {
      alarm_id: 0,
      detail: {},
      effective_time: 0,
      has_alarm: 0,
      msg: '',
      msg_id: '',
      owner: '',
      pin_id: '',
      pinned: 0,
      revoke_by: '',
      status: 0,
      time: 0,
      type: 0,
      dayInfo: '',
      minuteInfo: '',
      isMerge: false,
      isSelf: false,
      user_info: {},
      date_time: '',
      safeMsg: ''
    };
    return messageObj;
  }


  /**
   * 生成message Token
   */
  makeToken() {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 7; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  /**
   * 生成群组聊天的identity
   */
  initGroupIdentity(form: any, id: any) {
    return 'group_' + 'form:' + form.toString() + 'id:' + id.toString();
  }

  /**
   * 生成个人聊天的identity
   */
  initPersonalIdentity(form: any, uid: any, selfID: any) {
    return {
      identity: 'friend_' + 'form:' + form.toString() + 'id:' + uid.toString(),
      friend_identity: 'friend_' + 'form:' + form.toString() + 'id:' + selfID.toString()
    }
  }

  /**
   * 点击消息
   */
  clickOnMessage(event: any, message: ChatMessage) {
    event.stopPropagation();
    let componentData: any = {
      message: message,
      isFriend: this.isFriend,
      chatMenuItem: this.chatMenuItem,
      identity: this.isFriend ? this.friendIdentity.identity : this.initGroupIdentity(this.chatMenuItem.form, this.chatMenuItem.gid),
      chatChannelInfo: this.chatChannelInfo,
      allMessageOwnerInfo: this.allMessageOwnerInfo
    };
    let modal = this.modalCtrl.create(ChatContentMessageDetailComponent, componentData);
    modal.present();
  }


}
