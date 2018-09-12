import {Component, Inject} from '@angular/core';
import {IonicPage, NavController, NavParams, ActionSheetController, ModalController} from 'ionic-angular';
import {ChatMessage, ChatMenu} from "../../share/entity/chat-entity";
import {ChatConfig} from "../../share/config/chat.config";
import {NotificationConfig} from "../../share/config/notification.config";
import {NotificationEntity} from "../../share/entity/notification-entity";
import {Subscription} from "rxjs/Subscription";
import {NotificationService} from "../../share/service/common/notification.service";
import {AlarmModelService} from "../../share/service/model/alarm-model.service";
import * as alarmConfig from '../../share/config/alarm.config';
import {ChatModelService} from "../../share/service/model/chat-model.service";
import {ChatForwardDialogComponent} from "../chat-forward-dialog/chat-forward-dialog";
import {ChatShareDialogPage} from "../chat-share-dialog/chat-share-dialog";


/**
 * Generated class for the ChatContentMessageDetailComponent page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-content-message-detail',
  templateUrl: 'chat-content-message-detail.html',
  providers: [AlarmModelService, ChatModelService]
})
export class ChatContentMessageDetailComponent {

  public messageObj: ChatMessage;
  public chatConfig: any = ChatConfig;
  public currentMessageType: number;
  public isShowMoreButton: boolean;
  private isFriend: boolean;
  private chatMenuItem: ChatMenu;
  private identity: string;
  private subscription: Subscription;
  private isCanRevoke: boolean;
  private chatChannelInfo: any = {};
  private allMessageOwnerInfo: any;

  constructor(public navCtrl: NavController,
              @Inject('dialog.service') public dialogService,
              @Inject('im.service') public imService,
              public actionSheetCtrl: ActionSheetController,
              public modalCtrl: ModalController,
              public alarmModelService: AlarmModelService,
              public chatModelService: ChatModelService,
              @Inject('user-store.service') private userStoreService: any,
              @Inject(NotificationService) public notificationService: NotificationService,
              public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.messageObj = this.navParams.data.message;
    this.isFriend = this.navParams.data.isFriend;
    this.chatMenuItem = this.navParams.data.chatMenuItem;
    this.chatChannelInfo = this.navParams.data.chatChannelInfo;
    this.allMessageOwnerInfo = this.navParams.data.allMessageOwnerInfo;
    this.identity = this.navParams.data.identity;
    this.currentMessageType = this.messageObj.type;
    this.judgeCanDownLoad();
    this.judgeCanRevoke();
    this.subscription = this.notificationService.getNotification().subscribe(
      (message: any) => {
        this.dealWebSocketNotification(message);
      });
  }


  /**
   * IM通知处理
   */
  dealWebSocketNotification(message: NotificationEntity) {
    switch (message.act) {
      case NotificationConfig.ACT_CHAT_MESSAGE_REVOKE:  //删除群成员
        if (message.status == 1) {
          if (message.data && message.data.sent == 1) {
            this.navCtrl.pop();
          } else if (message.data && message.data.owner) {
            this.dialogService.showAlert('Warnning', 'The Message has been revoke!', () => {
              this.navCtrl.pop();
            })
          }
        } else {
          this.dialogService.showAlert('Revoke Failed!');
        }
        break;
    }
  }


  /**
   * 页面销毁
   */
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  /**
   * 判断是否可以下载和分享
   */
  judgeCanDownLoad() {
    if (this.currentMessageType == this.chatConfig.CHAT_MESSAGE_TYPE_IMG
      || this.currentMessageType == this.chatConfig.CHAT_MESSAGE_TYPE_POST
      || this.currentMessageType == this.chatConfig.CHAT_MESSAGE_TYPE_FILE
    ) {
      this.isShowMoreButton = true;
    } else if (this.currentMessageType == this.chatConfig.CHAT_MESSAGE_TYPE_FORWARD) {
      // if(this.)
      let originalMsgType: number = this.messageObj.detail.original_msg.type;
      if (originalMsgType == this.chatConfig.CHAT_MESSAGE_TYPE_IMG
        || originalMsgType == this.chatConfig.CHAT_MESSAGE_TYPE_POST
        || originalMsgType == this.chatConfig.CHAT_MESSAGE_TYPE_FILE
      ) {
        this.isShowMoreButton = true;
      } else {
        this.isShowMoreButton = false;
      }
    } else if (this.currentMessageType == this.chatConfig.CHAT_MESSAGE_TYPE_SHARE) {
      let share_file_type: number = this.messageObj.detail.share_file_type;
      if (share_file_type == this.chatConfig.CHAT_MESSAGE_TYPE_IMG
        || share_file_type == this.chatConfig.CHAT_MESSAGE_TYPE_POST
        || share_file_type == this.chatConfig.CHAT_MESSAGE_TYPE_FILE
      ) {
        this.isShowMoreButton = true;
      } else {
        this.isShowMoreButton = false;
      }
    } else {
      this.isShowMoreButton = false;
    }

  }


  /**
   * 判断是否可以撤回
   */
  judgeCanRevoke() {
    let uuid: string;
    let psid: string;
    Promise.all([
      this.userStoreService.getCurrentUUID(v => uuid = v),
      this.userStoreService.getCurrentPSID(v => psid = v),
    ]).then(() => {
      if (this.chatMenuItem.is_host == 1
        || this.messageObj.owner == uuid
        || this.messageObj.owner == psid
      ) {
        this.isCanRevoke = true;
      } else {
        this.isCanRevoke = false;
      }
    });
  }


  /**
   * 下载
   */
  downloadMessage(event: any) {
    event.stopPropagation();
    console.log('下载下载')

  }

  /**
   * 分享
   */
  shareMessage(event: any) {
    event.stopPropagation();
    console.log('分享分享');;
    let componentData: any = {
      chatMenuItem: this.chatMenuItem,
      isFriend: this.isFriend,
      messageObj: this.messageObj
    };
    let modal = this.modalCtrl.create(ChatShareDialogPage, componentData);
    modal.present();
  }

  /**
   * 消息提醒
   * @param event
   */
  remindMessage(event: any) {
    event.stopPropagation();
    let buttons: Array<any>;
    if (this.messageObj.has_alarm) {
      buttons = [
        {
          text: 'Cancel Alarm',
          handler: () => {
            sendDeleteAlarmFunction();
          }
        },
        {
          text: '3 Days',
          handler: () => {
            sendSetAlarmFunction(6);
          }
        }, {
          text: '1 Days',
          handler: () => {
            sendSetAlarmFunction(5);
          }
        }, {
          text: '6 Hours',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: '1 Hours',
          handler: () => {
            sendSetAlarmFunction(4);
          }
        },
        {
          text: '30 Minutes',
          handler: () => {
            sendSetAlarmFunction(3);
          }
        },
        {
          text: '10 Minutes',
          handler: () => {
            sendSetAlarmFunction(2);
          }
        },
        {
          text: '5 Minutes',
          handler: () => {
            sendSetAlarmFunction(1);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ];
    } else {
      buttons = [
        {
          text: '3 Days',
          handler: () => {
            sendSetAlarmFunction(7);
          }
        }, {
          text: '1 Days',
          handler: () => {
            sendSetAlarmFunction(6);
          }
        }, {
          text: '6 Hours',
          handler: () => {
            sendSetAlarmFunction(5);
          }
        },
        {
          text: '1 Hours',
          handler: () => {
            sendSetAlarmFunction(4);
          }
        },
        {
          text: '30 Minutes',
          handler: () => {
            sendSetAlarmFunction(3);
          }
        },
        {
          text: '10 Minutes',
          handler: () => {
            sendSetAlarmFunction(2);
          }
        },
        {
          text: '5 Minutes',
          handler: () => {
            sendSetAlarmFunction(1);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Archive clicked');
          }
        }
      ];
    }
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Set Alarm',
      buttons: buttons
    });
    actionSheet.present();

    let sendSetAlarmFunction = (param: number) => {
      let now = new Date();
      now.setSeconds(0);
      let sendTime: any;
      switch (param) {
        // 5 Minutes
        case 1:
          sendTime = now.getTime() + 5 * 60 * 1000;
          break;
        // 10 Minutes
        case 2:
          sendTime = now.getTime() + 10 * 60 * 1000;
          break;
        // 30 Minutes
        case 3:
          sendTime = now.getTime() + 30 * 60 * 1000;
          break;
        // 1 Hour
        case 4:
          sendTime = now.getTime() + 60 * 60 * 1000;
          break;
        // 6 Hours
        case 5:
          sendTime = now.getTime() + 6 * 60 * 60 * 1000;
          break;
        // 1 Day
        case 6:
          sendTime = new Date(now.setDate(now.getDate() + 1)).setHours(9, 0, 0, 0);
          break;
        // 3 Days
        case 7:
          sendTime = new Date(now.setDate(now.getDate() + 3)).setHours(9, 0, 0, 0);
          break;
        // 1 Week
        case 8:
          let day = now.getDay();
          sendTime = new Date(now.getTime() + (8 - day) * 24 * 60 * 60 * 1000).setHours(9, 0, 0, 0);
          break;
      }
      let sendData: any = {
        uid: this.messageObj.owner,
        form: alarmConfig.FORM_CHAT,
        rid: this.messageObj.msg_id,
        effective_time: Math.floor(sendTime / 1000),
        mode: alarmConfig.MODE_FIX
      };
      if (this.messageObj.has_alarm) {
        sendData.alarm_id = this.messageObj.alarm_id
      }
      if (!this.messageObj.has_alarm) {
        //调用添加闹钟接口
        this.alarmModelService.alarmAdd({data: sendData}, (response) => {
          if (response.status == 1) {
            this.messageObj.has_alarm = 1;
            this.messageObj.alarm_id = response.data.alarm_id;
            this.messageObj.alarm_id = response.data.id;
            this.messageObj.effective_time = sendData.effective_time;
          }
        });
      } else {
        //调用修改闹钟接口
        this.alarmModelService.alarmUpdate({data: sendData}, (response) => {
          if (response.status == 1) {
            this.messageObj.has_alarm = 1;
            this.messageObj.alarm_id = response.data.id;
            this.messageObj.effective_time = sendData.effective_time;
          }
        });
      }
    };
    //删除闹钟
    let sendDeleteAlarmFunction = () => {
      this.alarmModelService.alarmDelete({data: {alarm_id: this.messageObj.alarm_id, mode: '2'}}, (response: any) => {
        if (response.status == 1) {
          this.messageObj.has_alarm = 0;
          this.messageObj.alarm_id = 0;
        }
      })
    };
  }


  /**
   * 转发消息
   * @param event
   */
  forwardMessage(event: any) {
    event.stopPropagation();
    let componentData: any = {
      chatMenuItem: this.chatMenuItem,
      isFriend: this.isFriend,
      messageObj: this.messageObj
    };
    let modal = this.modalCtrl.create(ChatForwardDialogComponent, componentData);
    modal.present();
  }

  /**
   * Pin这条消息
   * @param event
   * @constructor
   */
  pinMessage(event: any) {
    event.stopPropagation();
    if (this.messageObj.pinned) {
      let requestData = {
        msg_id: this.messageObj.msg_id,
        form: this.chatMenuItem.form
      };
      if (this.isFriend) {
        requestData['friend'] = this.chatMenuItem.uid;
      } else {
        requestData['gid'] = this.chatMenuItem.gid;
      }
      this.chatModelService.setDeleteMsgPin({data: requestData}, (response: any) => {
        if (response.status === 1) {
          this.messageObj.pinned = 0;
        }
      });
    } else {
      let requestData = {
        msg_id: this.messageObj.msg_id,
        form: this.chatMenuItem.form
      };
      requestData['msg_time'] = this.messageObj.time;
      if (this.isFriend) {
        requestData['friend'] = this.chatMenuItem.uid;
      } else {
        requestData['gid'] = this.chatMenuItem.gid;
      }
      this.chatModelService.setInsertMsgPin({data: requestData}, (response: any) => {
        if (response.status === 1) {
          this.messageObj.pinned = 1;
        }
      });
    }
  }


  /**
   * 撤回消息
   * @param event
   */
  revokeMessage(event: any) {
    event.stopPropagation();
    this.dialogService.showConfirm('Revoke Message', 'That is undone!', () => {
      if (this.isFriend) {
        this.imService.revokePersonalMessage({
          form: this.chatMenuItem.form,
          friend: this.chatMenuItem.uid,
          msg_id: this.messageObj.msg_id,
          identity: this.identity,
        });
      } else {
        this.imService.revokeGroupMessage({
          form: this.chatMenuItem.form,
          gid: this.chatMenuItem.gid,
          msg_id: this.messageObj.msg_id,
          identity: this.identity,
        });
      }
    })
  }

}