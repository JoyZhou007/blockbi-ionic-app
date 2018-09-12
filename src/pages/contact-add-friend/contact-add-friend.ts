import {Component, Inject} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import * as UserConfig from '../../share/config/user.config';
import {NotificationService} from "../../share/service/common/notification.service";
import {NotificationConfig} from "../../share/config/notification.config";
import {NotificationEntity} from "../../share/entity/notification-entity";
import {Subscription} from "rxjs/Subscription";

/**
 * Generated class for the ContactAddFriendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-friend',
  templateUrl: 'contact-add-friend.html',
})
export class ContactAddFriendPage {
  public friend: any;
  public friendType: number; //1 私人 2 工作
  public remark: string;
  private subscription: Subscription;


  constructor(public navCtrl: NavController,
              @Inject('app.config') public config: any,
              @Inject(NotificationService) public notificationService: NotificationService,
              @Inject('im.service') public imService: any,
              public navParams: NavParams) {
    if (this.navParams.data && this.navParams.data.data) {
      this.friend = this.navParams.data.data;
      if (this.navParams.data.hasOwnProperty('friendType')) {
        this.friendType = this.navParams.data.friendType;
      }
    }
    this.subscription = this.notificationService.getNotification().subscribe(
      (message: any) => {
        this.dealWebSocketNotification(message);
      });
  }

  ionViewDidLoad() {

  }

  /**
   * 页面销毁
   */
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  /**
   * IM通知处理
   */
  dealWebSocketNotification(message: NotificationEntity) {
    switch (message.act) {
      case NotificationConfig.ACT_USER_REQUEST_ADD_FRIEND:  //删除群成员
        if (message.status == 1 && message.hasOwnProperty('data') && message.data.sent == 1) {
          this.navCtrl.pop();
        }
        break;
    }
  }


  /**
   * 发送申请好友im
   */
  sendTo() {
    let data: any = {
      friend: {
        uuid: this.friendType == parseInt(UserConfig.USER_FORM_PERSONAL) ? this.friend.uuid : '',
        psid: this.friendType == parseInt(UserConfig.USER_FORM_COMPANY) ? this.friend.psid : '',
      },
      remark: this.remark,  //请求留言信息
      user_relation: [this.friendType],  //好友关系
      company_name: this.friendType == parseInt(UserConfig.USER_FORM_PERSONAL) ? '' : this.friend.company_name  //公司名称
    };
    this.imService.doApplyFriend(data)
  }
}
