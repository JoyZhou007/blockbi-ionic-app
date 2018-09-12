///<reference path="../chat-set-channel/chat-set-channel.ts"/>
import {Component, Inject} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController, Events} from 'ionic-angular';
import {ChatMenu} from "../../share/entity/chat-entity";
import {ChatEditTopicComponent} from "../chat-edit-topic/chat-edit-topic";
import {ChatSetChannelComponent} from "../chat-set-channel/chat-set-channel";
import {ChatChannelMemberComponent} from "../chat-channel-member/chat-channel-member";
import {ChatModelService} from "../../share/service/model/chat-model.service";
import {EventNameConfig} from "../../share/config/event-name.config";
import {ChatInviteMemberComponent} from "../chat-invite-member/chat-invite-member";
import {NotificationService} from "../../share/service/index";
import {Subscription} from "rxjs/Subscription";
import {NotificationEntity} from "../../share/entity/notification-entity";


/**
 * Generated class for the ChatChannelMoreComponent page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-content-more',
  templateUrl: 'chat-channel-more.html',
  providers: [ChatModelService]
})
export class ChatChannelMoreComponent {

  public optionData: any;
  public channelInfo: any;
  public menuInfo: ChatMenu;
  private subscription: Subscription;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              @Inject('chat-store.service') public chatStoreService: any,
              @Inject('im.service') public imService: any,
              @Inject(NotificationService) public notificationService: NotificationService,
              @Inject('dialog.service') public dialogService: any,
              public chatModelService: ChatModelService,
              public events: Events,
              public navParams: NavParams) {
    this.optionData = this.navParams.data;
  }

  ionViewDidLoad() {
    this.channelInfo = this.optionData.chatChannelInfo;
    this.menuInfo = this.optionData.menu;
    this.judgeIsBeenStarred();
    this.dealEvent();
    this.subscription = this.notificationService.getNotification().subscribe(
      (message: any) => {
        this.dealWebSocketNotification(message);
      });
  }


  /**
   * 页面销毁
   */
  ngOnDestroy(): void {
    this.events.unsubscribe(EventNameConfig.REFRESH_CHAT_CHANNEL_INFO);
    this.subscription.unsubscribe();
  }

  /**
   * IM通知处理
   */
  dealWebSocketNotification(message: NotificationEntity) {

  }


  /**
   * 事件处理
   */
  dealEvent() {
    this.events.subscribe(EventNameConfig.REFRESH_CHAT_CHANNEL_INFO, (params: any) => {
      if (params.data) {
        this.channelInfo = params.data;
      }
    });
  }


  /**
   * 点击编辑群topic
   */
  editChannelTopic(event: any) {
    event.stopPropagation();
    let modal = this.modalCtrl.create(ChatEditTopicComponent, {channelInfo: this.channelInfo});
    modal.present()
  }

  /**
   * set chat channel
   */
  setChatChannel(event: any) {
    event.stopPropagation();
    let modal = this.modalCtrl.create(ChatSetChannelComponent, {
      channelInfo: this.channelInfo,
      menuInfo: this.menuInfo
    });
    modal.present()
  }

  /**
   * 查看群成员
   */
  showTeamMember(event: any) {
    event.stopPropagation();
    let modal = this.modalCtrl.create(ChatChannelMemberComponent, {
      channelInfo: this.channelInfo,
      menuInfo: this.menuInfo
    });
    modal.present()
  }

  /**
   * 收藏聊天组/人
   */
  judgeIsBeenStarred() {
    let chatChannelList: any;
    let starredList: any;
    this.chatStoreService.getChatChannelList((v) => {
      chatChannelList = v;
      starredList = chatChannelList['STARRED'];
      for (let i in starredList) {
        if (!this.menuInfo.is_Friend) { //群组
          if (this.menuInfo.gid == starredList[i].gid) {
            this.menuInfo['is_starred'] = true;
            break;
          }
        } else { //好友
          if (this.menuInfo.uid == starredList[i].uid) {
            this.menuInfo['is_starred'] = true;
            break;
          }
        }
      }
    }).then().catch();
  }


  //判断当前聊天组/人是否被收藏
  starredOrCancelChatChannel(event: any) {
    event.stopPropagation();
    let requestData: any = {};
    if (this.menuInfo.is_Friend) {
      requestData.form = this.menuInfo.form;
      requestData.uid = this.menuInfo.uid;
    } else {
      requestData.form = this.menuInfo.form;
      requestData.gid = this.menuInfo.gid;
    }
    if (this.menuInfo['is_starred']) { //收藏调用取消收藏接口
      this.chatModelService.cancelTheEnshrine({remove: requestData}, (data: any) => {
        if (data.status === 1) {
          this.events.publish(EventNameConfig.REFRESH_CHAT_LIST, {param: 'remove-starred'});
          this.menuInfo['is_starred'] = false;
        }
      });
    } else {// 未收藏调用收藏接口
      this.chatModelService.getEnshrineInfo({data: requestData}, (data: any) => {
        if (data.status === 1) {
          this.events.publish(EventNameConfig.REFRESH_CHAT_LIST, {param: 'add-starred'});
          this.menuInfo['is_starred'] = true;
        }
      });
    }
  }


  /**
   * 点击邀请新成员进组
   */
  inviteMoreMember(event: any) {
    event.stopPropagation();
    let modal = this.modalCtrl.create(ChatInviteMemberComponent, {
      channelInfo: this.channelInfo,
      menuInfo: this.menuInfo
    });
    modal.present()
  }

  /**
   * 退出该群
   */
  quitTheChannel(event: any) {
    event.stopPropagation();
    this.dialogService.showConfirm('Quit Channel', 'That is undone!', () => {
      this.imService.sendQuitTheChannel({
        form: this.channelInfo.form,
        gid: this.channelInfo.gid,
      });
    });
  }


  /**
   * 删除该群
   */
  deleteTheChannel(event: any) {
    event.stopPropagation();
    this.dialogService.showConfirm('Delete Channel', 'That is undone!', () => {
      this.imService.sendDeleteTheChannel({
        form: this.channelInfo.form,
        gid: this.channelInfo.gid,
        name: this.channelInfo.name,
      });
    });
  }


}
