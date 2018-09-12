import {Component, Inject} from '@angular/core';
import {IonicPage, NavController, NavParams, Events, ModalController} from 'ionic-angular';
import {EventNameConfig} from "../../share/config/event-name.config";
import {NotificationEntity} from "../../share/entity/notification-entity";
import {NotificationConfig} from "../../share/config/notification.config";
import {ChatMenu} from "../../share/entity/chat-entity";
import {ChatInviteMemberComponent} from "../chat-invite-member/chat-invite-member";
import {Subscription} from "rxjs/Subscription";
import {NotificationService} from "../../share/service/common/notification.service";

/**
 * Generated class for the ChatChannelMemberComponent page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-channel-member',
  templateUrl: 'chat-channel-member.html',
})
export class ChatChannelMemberComponent {

  public channelInfo: any;
  public channelMemberArr: Array<any> = [];
  private deleteMember: any;
  private menuInfo: ChatMenu;
  private currentUUID: any;
  private currentPSID: any;
  private subscription: Subscription;

  constructor(public navCtrl: NavController,
              public events: Events,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              @Inject('app.config') public appConfig,
              @Inject('im.service') public imService,
              @Inject(NotificationService) public notificationService: NotificationService,
              @Inject('user-store.service') public userStoreService: any,
              @Inject('dialog.service') public dialogService) {
  }

  ionViewDidLoad() {
    this.channelInfo = this.navParams.data.channelInfo;
    this.menuInfo = this.navParams.data.menuInfo;
    this.channelMemberArr = this.channelInfo.info;
    this.getCurrentUserInfo();
    this.dealEvent();
    this.subscription = this.notificationService.getNotification().subscribe(
      (message: any) => {
        this.dealWebSocketNotification(message);
      });
  }


  /**
   * 获取当前登录用户信息
   */
  getCurrentUserInfo() {
    Promise.all([
      this.userStoreService.getCurrentUUID((v) => this.currentUUID = v),
      this.userStoreService.getCurrentPSID((v) => this.currentPSID = v)
    ]).then(() => {

    })
  }

  /**
   * 页面销毁
   */
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.events.unsubscribe(EventNameConfig.REFRESH_CHAT_CHANNEL_INFO);
  }


  /**
   * 事件处理
   */
  dealEvent() {
    this.events.subscribe(EventNameConfig.REFRESH_CHAT_CHANNEL_INFO, (params: any) => {
      if (params.data) {
        this.channelInfo = params.data;
        this.channelMemberArr = this.channelInfo.info;
      }
    });
  }


  /**
   * IM通知处理
   */
  dealWebSocketNotification(message: NotificationEntity) {
    switch (message.act) {
      case NotificationConfig.ACT_NOTICE_MASTER_DELETE_GROUP_USER:
        if (message.status == 1 && message.data) {
          if (message.data.sent) { //群主本人收到消息
            for (let i in this.channelInfo.info) {
              if (this.channelInfo.info[i] && this.channelInfo.info[i].uid == this.deleteMember.uid) {
                this.channelInfo.info.splice(parseInt(i), 1);
              }
            }
          } else if (message.data.owner && message.data.gid == this.channelInfo.gid) {
            if (message.data.frd_type == 4) { //
              for (let i in this.channelInfo.info) {
                if (this.channelInfo.info[i] && this.channelInfo.info[i].uid == message.data.friend) {
                  this.channelInfo.info.splice(parseInt(i), 1);
                }
              }
            }
          }
        }
        break;
    }
  }


  /**
   * 点击删除成员
   */
  deleteTeamMember(event: any, member: any) {
    event.stopPropagation();
    this.deleteMember = member;
    this.dialogService.showConfirm('Delete it', 'That is undone!', () => {
      let sendData: any = {
        gid: this.channelInfo.gid,
        name: this.channelInfo.name,
        friend: member.uid,
        form: this.channelInfo.form
      };
      this.imService.sendDeleteChannelMember(sendData);
    });
  }

  /**
   * 邀请更多成员
   */
  inviteMoreMember() {
    event.stopPropagation();
    let modal = this.modalCtrl.create(ChatInviteMemberComponent, {
      channelInfo: this.channelInfo,
      menuInfo: this.menuInfo
    });
    modal.present()
  }

}
