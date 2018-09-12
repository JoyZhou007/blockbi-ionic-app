import {Component, Inject} from '@angular/core';
import {IonicPage, NavController, NavParams, Events} from 'ionic-angular';
import {NotificationEntity} from "../../share/entity/notification-entity";
import {NotificationConfig} from "../../share/config/notification.config";
import {ChatMenu} from "../../share/entity/chat-entity";
import {NotificationService} from "../../share/service/index";
import {Subscription} from "rxjs/Subscription";

/**
 * Generated class for the ChatSetChannelComponent page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-set-channel',
  templateUrl: 'chat-set-channel.html',
})
export class ChatSetChannelComponent {

  public currentChannelName: string = '';
  public originalChannelName: string = '';
  private channelInfo: any;
  public isAllowInvite: boolean;
  private menuInfo: ChatMenu;
  private subscription: Subscription;

  constructor(public navCtrl: NavController,
              @Inject('im.service') public imService: any,
              @Inject(NotificationService) private notificationService: NotificationService,
              public events: Events,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.channelInfo = this.navParams.data.channelInfo;
    this.menuInfo = this.navParams.data.menuInfo;
    this.currentChannelName = this.channelInfo.name;
    this.originalChannelName = this.channelInfo.name;
    this.isAllowInvite = (this.channelInfo.invited_member == 1);
    this.subscription = this.notificationService.getNotification().subscribe(
      (message: any) => {
        this.dealWebSocketNotification(message);
      });
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  dealWebSocketNotification(message: NotificationEntity) {
    //修改群信息IM返回
    switch (message.act) {
      case NotificationConfig.ACT_NOTICE_GROUP_NAME_MODIFY:
        if (message.status == 1) {
          this.channelInfo.name = this.currentChannelName;
          this.channelInfo.invited_member = this.isAllowInvite ? 1 : 0;
          this.menuInfo.name = this.currentChannelName;
          this.navCtrl.pop()
        }
        break;
    }
  }


  /**
   * 确认设置
   */
  confirmSetChannel(event: any) {
    event.stopPropagation();
    if (!this.currentChannelName) return;
    let sendData: any = {
      gid: this.channelInfo.gid,
      name: this.currentChannelName,
      topic: this.channelInfo.topic,
      form: this.channelInfo.form,
      invited_member: this.isAllowInvite ? 1 : 0
    };
    this.imService.sendModifyChannelInfo(sendData);
  }

}
