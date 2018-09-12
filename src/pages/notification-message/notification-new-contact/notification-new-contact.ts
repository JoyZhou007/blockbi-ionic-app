import {Component, Input, Inject} from '@angular/core';
import {NotificationEntity} from "../../../share/entity/notification-entity";
import {UserCompanyEntity} from "../../../share/entity/user-entity";
import {NotificationConfig} from "../../../share/config/notification.config";
import {EventNameConfig} from "../../../share/config/event-name.config";
import * as UserConfig from '../../../share/config/user.config';
import {Events} from "ionic-angular";
import {Subscription} from "rxjs/Subscription";
import {NotificationService} from "../../../share/service/index";

/**
 * Generated class for the NotificationNewContactComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'notification-new-contact',
  templateUrl: 'notification-new-contact.html'
})
export class NotificationNewContactComponent {

  public notificationObj: NotificationEntity;
  public notificationData: any;
  public summaryObj: any;
  public sendInfo: UserCompanyEntity;
  private subscription: Subscription;
  private relationType: string;
  public remarkMessage: string;
  private contactFeedback: string = '';

  constructor(@Inject('app.config') public appConfig,
              private events: Events,
              @Inject(NotificationService) private notificationService: NotificationService,
              @Inject('im.service') public imService) {
  }


  @Input() set setNotification(param: any) {
    this.notificationObj = param;
    this.notificationData = param.data;
    this.remarkMessage = this.notificationData.remark;
    this.summaryObj = this.notificationObj.summaryObj;
    if (!this.notificationData || !this.summaryObj) return;
    this.getSendOwnerInfo();
    this.getNewRelation();
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
      case NotificationConfig.ACT_USER_NOTICE_ACCEPT_ADD_FRIEND:
      case NotificationConfig.ACT_USER_NOTICE_REFUSE_ADD_FRIEND:
        if (message.status == 1 && message.data
          && message.data.sent == 1
          && message.data.request_id == this.notificationData.request_id) {
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
      if (this.summaryObj.user[i].uid == this.notificationData.owner.uuid
        || this.summaryObj.user[i].uid == this.notificationData.owner.psid
      ) {
        this.sendInfo = this.summaryObj.user[i];
        break;
      }
    }
  }

  /**
   * 获取新好友的关系
   */
  getNewRelation() {
    let relation: number = this.notificationData.relation[0];
    if (relation == parseInt(UserConfig.USER_FORM_COMPANY)) {
      this.relationType = 'Cooperator';
    } else if (relation == parseInt(UserConfig.USER_FORM_PERSONAL)) {
      this.relationType = 'Friend';
    }
  }

  /**
   * 拒绝新好友
   * @param event
   */
  refuseNewFriend(event: any) {
    event.stopPropagation();
    this.imService.refuseApplyFriend({
      friend: {
        uuid: this.notificationData.owner.uuid,
        psid: this.notificationData.owner.psid
      },
      feedback: this.contactFeedback,
      request_id: this.notificationData.request_id
    });
  };


  /**
   * 同意加
   * @param event
   */
  acceptNewFriend(event: any) {
    event.stopPropagation();
    this.imService.acceptApplyFriend({
      friend: {
        uuid: this.notificationData.owner.uuid,
        psid: this.notificationData.owner.psid
      },
      feedback: this.contactFeedback,
      friend_relation: this.notificationData.relation,
      request_id: this.notificationData.request_id
    });
  };


}
