import {Component, OnInit, Inject} from '@angular/core';
import {ChatModelService} from "../../../share/service/model/chat-model.service";
import {ChatMenu} from "../../../share/entity/chat-entity";
import {NavController, Events, ModalController} from "ionic-angular";
import {EventNameConfig} from "../../../share/config/event-name.config";
import {NotificationConfig} from "../../../share/config/notification.config";
import {NotificationEntity} from "../../../share/entity/notification-entity";
import {ChatContentComponent} from "../../chat-content/chat-content";
import {NotificationService} from "../../../share/service/common/notification.service";
import {Subscription} from "rxjs/Subscription";

/**
 * Generated class for the ChatMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chat-menu',
  templateUrl: 'chat-menu.html',
  providers: [ChatModelService],
})
export class ChatMenuComponent implements OnInit {

  private slideActiveNum: number;
  private chatMenuList: Array<{channelType: string, channelIcon: string}>;
  private currentTypeChannelList: Array<ChatMenu> = [];
  private channelObj: any;
  private contactList: any;
  private currentChannelType: number;
  private subscription: Subscription;

  constructor(public chatModelService: ChatModelService,
              public nav: NavController,
              public modalCtrl: ModalController,
              public events: Events,
              @Inject('app.config') public appConfig: any,
              @Inject(NotificationService) public notificationService: NotificationService,
              @Inject('chat-store.service') public chatStoreService: any,
              @Inject('user-store.service') private userStoreService: any) {
  }


  ionViewDidLoad() {
  }

  /**
   *
   */
  ngOnInit() {
    this.chatMenuList = [
      {
        channelType: 'Starred',
        channelIcon: ''
      },
      {
        channelType: 'Recent',
        channelIcon: ''
      },
      {
        channelType: 'In private',
        channelIcon: ''
      },
      {
        channelType: 'Business',
        channelIcon: ''
      },
      {
        channelType: 'Mission',
        channelIcon: ''
      }
    ];
    this.slideActiveNum = 4;
    this.fetchChannelList();
    this.getContactList();
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
    this.subscription.unsubscribe();
  }


  /**
   * 处理IM消息
   */
  dealWebSocketNotification(message: NotificationEntity) {
    switch (message.act) {
      case NotificationConfig.ACT_CHAT_NOTICE_GROUP_CREATE:  //创建群组
        if (message.status == 1) {
          this.fetchChannelList();
        }
        break;
      case NotificationConfig.ACT_NOTICE_GROUP_NAME_MODIFY: //群信息修改
        if (message.status == 1) {
          this.fetchChannelList();
        }
        break;
      case NotificationConfig.ACT_NOTICE_MASTER_DELETE_GROUP_USER: //群成员删除
        if (message.status == 1 && message.data
          && message.data.owner && message.data.frd_type == 3) { //被删除的人刷新群列表
          this.fetchChannelList();
        }
        break;
      case NotificationConfig.ACT_NOTICE_MASTER_GROUP_INVITE: //群主直接添加成员
        if (message.status == 1 && message.data && message.data.owner) {
          this.fetchChannelList();
        }
        break;
      case NotificationConfig.ACT_NOTICE_GROUP_DELETE:
        if (message.status == 1) {
          this.fetchChannelList();
        }
        break;
      case NotificationConfig.ACT_NOTICE_USER_EXIT_GROUP:
        if (message.status == 1 && message.data && message.data.sent == 1) {
            this.fetchChannelList();
        }
        break;
    }
  }

  /**
   * 事件处理
   */
  dealEvent() {
    this.events.subscribe(EventNameConfig.REFRESH_CHAT_LIST, (param: any) => {
      if (param) {
        this.fetchChannelList();
      }
    })
  }


  /**
   * 获取群组接口
   * @param type
   */
  fetchChannelList() {
    this.chatModelService.getGroupList((res: any) => {
      if (res.status == 1) {
        this.channelObj = res.data;
        this.chatStoreService.setChatChannelList(this.channelObj);
        this.showCurrentGroupList(this.currentChannelType);
      }
    });
  }

  /**
   * 显示当前类型的群组列表
   * @param type
   */
  showCurrentGroupList(type?: number) {
    if (!this.channelObj || typeof type == 'undefined') return;
    this.currentChannelType = type;
    switch (type) {
      case 0:
        this.currentTypeChannelList = this.channelObj['STARRED'];
        break;
      case 1:
        this.currentTypeChannelList = this.channelObj['RECENT'];
        break;
      case 2:
        this.currentTypeChannelList = this.channelObj['PRIVATE'];
        break;
      case 3:
        this.currentTypeChannelList = this.channelObj['WORK'];
        break;
      case 4:
        this.currentTypeChannelList = this.channelObj['MISSION'];
        break;
    }
    if (this.contactList) {
      this.fetchUserProfile();
    }
  }

  /**
   * 从缓存中获取联系人列表
   */
  getContactList() {
    this.userStoreService.getContactList((v) => {
      this.contactList = v;
    }).then().catch();
  }

  /**
   * 获取用户头像信息
   */
  fetchUserProfile() {
    for (let i in  this.currentTypeChannelList) {
      if (this.currentTypeChannelList[i].uid) {
        this.currentTypeChannelList[i].is_Friend = true;
        if (this.currentTypeChannelList[i].form == 1) {
          for (let k in this.contactList['Friend']) {
            if (this.contactList['Friend'][k].uuid == this.currentTypeChannelList[i].uid) {
              this.currentTypeChannelList[i].user_profile_path = this.contactList['Friend'][k].user_profile_path;
            }
          }
        } else if (this.currentTypeChannelList[i].form == 2) {
          for (let k in this.contactList['Cooperator']) {
            if (this.contactList['Cooperator'][k].psid == this.currentTypeChannelList[i].uid) {
              this.currentTypeChannelList[i].user_profile_path = this.contactList['Friend'][k].user_profile_path;
            }
          }
          for (let k in this.contactList['Internal']) {
            if (this.contactList['Internal'][k].psid == this.currentTypeChannelList[i].uid) {
              this.currentTypeChannelList[i].user_profile_path = this.contactList['Friend'][k].user_profile_path;
            }
          }
        }
      }
    }
  }


  /**
   * 切换不同类型的分组
   * @param index
   */
  switchChannel(index: number) {
    this.showCurrentGroupList(index);
  }


  /**
   * 打开menu
   * @param item
   */
  openChanelByMenu(item: ChatMenu) {
    let modal = this.modalCtrl.create(ChatContentComponent, {data: item});
    modal.present();
  }


}

