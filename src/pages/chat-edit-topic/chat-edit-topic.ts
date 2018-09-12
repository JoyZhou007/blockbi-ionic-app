import {Component, Inject} from '@angular/core';
import {IonicPage, NavController, NavParams, Events} from 'ionic-angular';
import {NotificationEntity} from "../../share/entity/notification-entity";
import {NotificationConfig} from "../../share/config/notification.config";
import {NotificationService} from "../../share/service/index";
import {Subscription} from "rxjs";

/**
 * Generated class for the ChatEditTopicComponent page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-edit-topic',
  templateUrl: 'chat-edit-topic.html',
})
export class ChatEditTopicComponent {

  public channelInfo: any;
  public currentTopic: string = '';
  public originalTopic: string = '';
  private subscription: Subscription;

  constructor(public navCtrl: NavController,
              @Inject('im.service') public imService: any,
              @Inject(NotificationService) public notificationService: NotificationService,
              public events: Events,
              @Inject('dialog.service') public dialogService: any,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.channelInfo = this.navParams.data.channelInfo;
    this.currentTopic = this.channelInfo.topic;
    this.originalTopic = this.channelInfo.topic;
    this.subscription = this.notificationService.getNotification().subscribe(
      (message: any) => {
        this.dealWebSocketNotification(message);
      });
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  /**
   * 处理IM返回通知
   * @param message
   */
  dealWebSocketNotification(message: NotificationEntity) {
    //新建群IM返回
    switch (message.act) {
      case NotificationConfig.ACT_NOTICE_GROUP_NAME_MODIFY:
        if (message.status == 1) {
          this.channelInfo.topic = this.currentTopic;
          this.navCtrl.pop()
        }
        break;
    }
  }

  /**
   *确认修改TOPIC
   */
  confirmEditTopic(event: any) {
    event.stopPropagation();
    if (this.currentTopic == this.originalTopic) {
      this.dialogService.showAlert('Warning', 'Topic has no changed!');
      return;
    } else {
      let sendData: any = {
        gid: this.channelInfo.gid,
        name: this.channelInfo.name,
        topic: this.currentTopic,
        form: this.channelInfo.form,
        invited_member: this.channelInfo.invited_member
      };
      this.imService.sendModifyChannelInfo(sendData);
    }
  }


}
