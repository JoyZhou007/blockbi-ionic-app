import {Component, Input, Inject} from '@angular/core';
import {NotificationEntity} from "../../../share/entity/notification-entity";
import {UserCompanyEntity} from "../../../share/entity/user-entity";
import {NotificationConfig} from "../../../share/config/notification.config";
import {EventNameConfig} from "../../../share/config/event-name.config";
import {Events} from "ionic-angular";
import {Subscription} from "rxjs/Subscription";
import {NotificationService} from "../../../share/service/index";

/**
 * Generated class for the NotificationChatInviteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'notification-chat-invite',
  templateUrl: 'notification-chat-invite.html'
})
export class NotificationChatInviteComponent {

  public notificationObj: NotificationEntity;
  public notificationData: any;
  public notificationMessage: string;
  public summaryObj: any;
  public sendInfo: UserCompanyEntity;
  private introducerInfo: UserCompanyEntity;
  private subscription: Subscription;

  constructor(@Inject('app.config') public appConfig,
              private events: Events,
              @Inject(NotificationService) private notificationService: NotificationService,
              @Inject('im.service') public imService) {
  }

  @Input() set setNotification(param: any) {
    this.notificationObj = param;
    this.notificationData = param.data;
    this.summaryObj = this.notificationObj.summaryObj;
    if (!this.notificationData || !this.summaryObj) return;
    this.getSendOwnerInfo();
    this.getInviteInfo();
    this.setNotificationMessage();
    this.subscription = this.notificationService.getNotification().subscribe(
      (message: any) => {
        this.dealWebSocketNotification(message);
      });
  }


  /**
   * 页面销毁
   */
  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }


  /**
   * 处理IM消息返回
   */
  dealWebSocketNotification(message: NotificationEntity) {
        switch (message.act) {
          case NotificationConfig.ACT_NOTICE_MEMBER_GROUP_INVITE_ACCEPT:
          case NotificationConfig.ACT_NOTICE_MEMBER_GROUP_INVITE_REFUSE:
          case NotificationConfig.ACT_REQUEST_MEMBER_GROUP_INVITE:
            if (message.status == 1 && message.data
              && message.data.sent == 1 && message.data.request_id == this.notificationData.request_id) {
              this.notificationData.handled = 1;
              let handleData: any = {
                request_id: this.notificationData.request_id,
                notification_form: this.notificationData.notification_form
              };
              this.events.publish(EventNameConfig.CHANGE_NOTIFICATION_STATUS, {handleData});
            }
            break;
        }
  }


  /**
   * 获取notification owner 信息
   */
  getSendOwnerInfo() {
    for (let i in this.summaryObj.user) {
      if (this.summaryObj.user[i].uid == this.notificationData.owner) {
        this.sendInfo = this.summaryObj.user[i];
        break;
      }
    }
  }

  /**
   * 获取邀请人信息
   */
  getInviteInfo() {
    for (let i in this.summaryObj.user) {
      if (this.summaryObj.user[i].uid == this.notificationData.introducer) {
        this.introducerInfo = this.summaryObj.user[i];
        break;
      }
    }
  }


  /**
   * 设置显示消息内容
   */
  setNotificationMessage() {
    //兼容旧数据 (没有 introducer 字段)
    this.introducerInfo = this.introducerInfo ? this.introducerInfo : this.sendInfo;
    switch (this.notificationObj.act) {
      case NotificationConfig.ACT_REQUEST_MEMBER_GROUP_INVITE_RECEIVER :
        //被邀请人收到
        this.notificationMessage = this.introducerInfo.work_name + ' invite you to join the chat group named ' + this.notificationData.name;
        break;
      case NotificationConfig.ACT_REQUEST_MEMBER_GROUP_INVITE :
        //群主收到
        this.introducerInfo = this.introducerInfo ? this.introducerInfo : this.sendInfo;
        let newInviteMemberArray: Array<string> = [];
        let inviteMemberString: string = '';
        for (let i in this.notificationData.members) {
          for (let j in this.summaryObj.user) {
            if (this.summaryObj.user[j].uid == this.notificationData.members[i].uid) {
              inviteMemberString += this.summaryObj.user[j].work_name + ','
              newInviteMemberArray.push(this.summaryObj.user[j]);
              break;
            }
          }
        }
        inviteMemberString = inviteMemberString.substring(0, inviteMemberString.length - 1)
        this.notificationMessage =
          this.introducerInfo.work_name + ' invite ' + inviteMemberString + ' to join the chat group named ' + this.notificationData.name;
        break;
      case NotificationConfig.ACT_NOTICE_MEMBER_GROUP_INVITE_MASTER_ACCEPT :
        //非群主邀请 群主同意后被邀请人收到
        this.notificationMessage =
          'The master ' + this.sendInfo.work_name + ' accept ' +
          this.introducerInfo.work_name + ' invite you to join the chat group named ' + this.notificationData.name;
        break;
    }
  }

  /**
   *同意邀请
   */
  acceptInvite(event: any) {
    event.stopPropagation();
    if (this.notificationObj.act == NotificationConfig.ACT_REQUEST_MEMBER_GROUP_INVITE_RECEIVER) {
      //被邀请人操作  为非群主邀请并且跳过群主同意
      let sendData: any = {
        form: this.notificationData.form,
        gid: this.notificationData.gid,
        name: this.notificationData.name,
        request_id: this.notificationData.request_id,
      };
      this.imService.newMemberAcceptInvite(sendData);
    } else if (this.notificationObj.act == NotificationConfig.ACT_REQUEST_MEMBER_GROUP_INVITE) {
      //群主同意其他成员的邀请
      let sendData: any = {
        form: this.notificationData.form,
        gid: this.notificationData.gid,
        name: this.notificationData.name,
        request_id: this.notificationData.request_id,
        introducer: this.notificationData.introducer,
        members: this.notificationData.members
      };
      this.imService.masterAcceptInvite(sendData);
    } else if (this.notificationObj.act == NotificationConfig.ACT_NOTICE_MEMBER_GROUP_INVITE_MASTER_ACCEPT) {
      let sendData: any = {
        form: this.notificationData.form,
        gid: this.notificationData.gid,
        name: this.notificationData.name,
        request_id: this.notificationData.request_id,
      };
      this.imService.newMemberAcceptInvite(sendData);
    }
  }


  /**
   * 拒绝邀请
   */
  refuseInvite(event: any) {
    event.stopPropagation();
    if (this.notificationObj.act == NotificationConfig.ACT_REQUEST_MEMBER_GROUP_INVITE_RECEIVER) {
      //被邀请人操作  为非群主邀请并且跳过群主同意
      let sendData: any = {
        form: this.notificationData.form,
        gid: this.notificationData.gid,
        name: this.notificationData.name,
        request_id: this.notificationData.request_id,
        friend: this.notificationData.introducer ? this.notificationData.introducer : this.notificationData.owner  //兼容旧数据
      };
      this.imService.newMemberRefuseInvite(sendData);
    } else if (this.notificationObj.act == NotificationConfig.ACT_REQUEST_MEMBER_GROUP_INVITE) {   //群主拒绝其他成员的邀请
      let sendData: any = {
        form: this.notificationData.form,
        gid: this.notificationData.gid,
        name: this.notificationData.name,
        request_id: this.notificationData.request_id,
        introducer: this.notificationData.introducer,
        members: this.notificationData.members
      };
      this.imService.masterRefuseInvite(sendData);
    } else if (this.notificationObj.act == NotificationConfig.ACT_NOTICE_MEMBER_GROUP_INVITE_MASTER_ACCEPT) {
      let sendData: any = {
        form: this.notificationData.form,
        gid: this.notificationData.gid,
        name: this.notificationData.name,
        request_id: this.notificationData.request_id,
        friend: this.notificationData.introducer ? this.notificationData.introducer : this.notificationData.owner  //兼容旧数据
      };
      this.imService.newMemberRefuseInvite(sendData);
    }
  }


}
