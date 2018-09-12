import {Component, Inject} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController, Events} from 'ionic-angular';
import {ContactsList} from "../../share/entity/user-entity";
import {selectSettings, selectOptionModel} from "../../share/entity/select-entity";
import {PublicSelectComponent} from "../public-select/public-select";
import {EventNameConfig} from "../../share/config/event-name.config";
import {ChatMenu} from "../../share/entity/chat-entity";
import {NotificationConfig} from "../../share/config/notification.config";
import {Subscription} from "rxjs/Subscription";
import {NotificationService} from "../../share/service/common/notification.service";

/**
 * Generated class for the ChatInviteMemberComponent page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-invite-member',
  templateUrl: 'chat-invite-member.html',
})
export class ChatInviteMemberComponent {

  public selectedPeopleArray: Array<any> = [];
  private contactList: {Cooperator: Array<ContactsList>; Friend: Array<ContactsList>; Internal: Array<ContactsList>};
  public channelInfo: any;
  private currentMemberArray: Array<any> = [];
  private currentForm: number;
  private inviteDropDownObj: {groupObj: {}; settings: {}};
  private menuInfo: ChatMenu;
  private hasClickOnSend: boolean;
  private subscription: Subscription;


  constructor(public navCtrl: NavController,
              private modalCtrl: ModalController,
              private events: Events,
              @Inject('user.service') private  userService: any,
              @Inject(NotificationService) public notificationService: NotificationService,
              @Inject('im.service') private  imService: any,
              @Inject('dialog.service') private  dialogService: any,
              @Inject('app.config') public  appConfig: any,
              private navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.channelInfo = this.navParams.data.channelInfo;
    this.menuInfo = this.navParams.data.menuInfo;
    this.currentForm = this.channelInfo.form;
    this.currentMemberArray = this.channelInfo.info;
    this.getContactList();
    this.dealEvent();
    this.subscription = this.notificationService.getNotification().subscribe(
      (message: any) => {
        this.dealWebSocketNotification(message);
      });
  }


  ngOnDestroy(): void {
    this.events.unsubscribe(EventNameConfig.PUBLIC_SELECT);
    this.subscription.unsubscribe();
  }


  /**
   * 事件处理
   */
  dealEvent() {
    //选择事件

    this.events.subscribe(EventNameConfig.PUBLIC_SELECT, (params: any) => {
      let componentName = params.param;
      switch (componentName) {
        case 'chat-invite-member' :
          this.selectedPeopleArray = params.data;
          break;
      }
    });
  }

  /**
   * 处理IM返回消息
   */
  dealWebSocketNotification(message) {
    //新建群IM返回
    switch (message.act) {
      case NotificationConfig.ACT_REQUEST_MEMBER_GROUP_INVITE:
      case NotificationConfig.ACT_NOTICE_MASTER_GROUP_INVITE:
        if (message.status == 1) {
          if(message.data.sent && message.data.gid == this.channelInfo.gid) {
            this.navCtrl.pop();
          }
        } else {
          this.dialogService.showAlert('Invite Failed!', message.error_msg)
        }
        break;
    }
  }


  /**
   * 实例选择设置对象
   * @returns {{enableSearch: boolean, isMultiple: boolean, group: Array, childGroup: Array, readonly: boolean, searchPH: string}}
   */
  initSelectSettings() {
    return {
      enableSearch: true,
      isMultiple: true,
      group: [],
      childGroup: [],
      readonly: false,
      searchPH: 'Search',
    };
  }

  /**
   * 实例选择项对象
   * @returns {{id: string, isCurrent: boolean, hasFiltered: boolean, key: string, label: string, imageLabel: string, desc: string, group: string, childGroup: string, disabled: boolean, isAbleRemove: boolean}}
   */
  initSelectModel() {
    return {
      id: '', // 唯一标识
      isCurrent: false,
      hasFiltered: false,
      key: '',
      label: '',
      imageLabel: '',   // '' - 空值，不显示 | 'http://XXXX.png' 显示小图片 | 'NaN' 显示首字母
      desc: '',
      group: '',
      childGroup: '',
      disabled: false,
      isAbleRemove: true,
    };
  }


  /**
   * 获取联系人列表
   */
  getContactList() {
    this.userService.getContactList((contactList: {
      Cooperator: Array<ContactsList>,
      Friend: Array<ContactsList>,
      Internal: Array<ContactsList>
    }) => {
      if (contactList) {
        this.contactList = contactList;
        this.removeInChannelMember();
      }
    })
  }


  /**
   * 去除已经在群组的成员
   */
  removeInChannelMember() {
    let newContactList: {Cooperator: Array<ContactsList>; Friend: Array<ContactsList>; Internal: Array<ContactsList>} = {
      Cooperator: [],
      Friend: [],
      Internal: []
    };
    for (let key in this.contactList) {
      for (let i in this.contactList[key]) {
        let flag: boolean = false;
        for (let j in this.currentMemberArray) {
          if (this.currentMemberArray[j].uid == this.contactList[key][i].uuid
            || this.currentMemberArray[j].uid == this.contactList[key][i].psid) {
            flag = true;
          }
        }
        if (!flag) {
          newContactList[key].push(this.contactList[key][i]);
        }
      }
    }
    this.buildForDropDownData(newContactList)
  }


  /**
   * 生成dropDown数据对象
   */
  buildForDropDownData(newContactList: any) {
    this.inviteDropDownObj = {
      groupObj: {},
      settings: {},
    };
    let settings: selectSettings = this.initSelectSettings();
    if (this.currentForm == 1) {
      //friend
      settings.group.push({key: 'friend', 'title': 'Friend'});
      let inviteFriendList: Array<selectOptionModel> = [];
      newContactList['Friend'].forEach((item: any) => {
        let tmp: selectOptionModel = this.initSelectModel();
        tmp.id = item.uuid;
        tmp.group = 'friend';
        tmp.key = item.work_name ? item.work_name : item.p_name ? item.p_name : '';
        tmp.label = item.work_name ? item.work_name : item.p_name;
        tmp.desc = (item.company_name ? item.company_name : '') + ' ' + (item.p_name ? item.p_name : '');
        tmp.imageLabel = item.user_profile_path ? item.user_profile_path : 'NaN';
        inviteFriendList.push(tmp);
      });
      this.inviteDropDownObj.groupObj['friend'] = inviteFriendList;
      this.inviteDropDownObj.settings = settings;
    } else if (this.currentForm == 2) {
      //Internal
      settings.group.push({key: 'internal', 'title': 'Internal'});
      let inviteInternalList: Array<selectOptionModel> = [];
      newContactList['Internal'].forEach((item: any) => {
        let tmp: selectOptionModel = this.initSelectModel();
        tmp.id = item.psid;
        tmp.group = 'internal';
        tmp.key = item.work_name ? item.work_name : item.p_name ? item.p_name : '';
        tmp.label = item.work_name ? item.work_name : item.p_name;
        tmp.desc = (item.company_name ? item.company_name : '') + ' ' + (item.p_name ? item.p_name : '');
        tmp.imageLabel = item.user_profile_path ? item.user_profile_path : 'NaN';
        inviteInternalList.push(tmp);
      });
      this.inviteDropDownObj.groupObj['internal'] = inviteInternalList;
      //cooperator
      settings.group.push({key: 'cooperator', 'title': 'Cooperator'});
      let inviteCooperatorList: Array<selectOptionModel> = [];
      newContactList['Cooperator'].forEach((item: any) => {
        let tmp: selectOptionModel = this.initSelectModel();
        tmp.id = item.psid;
        tmp.group = 'cooperator';
        tmp.key = item.work_name ? item.work_name : item.p_name ? item.p_name : '';
        tmp.label = item.work_name ? item.work_name : item.p_name;
        tmp.desc = (item.company_name ? item.company_name : '') + ' ' + (item.p_name ? item.p_name : '');
        tmp.imageLabel = item.user_profile_path ? item.user_profile_path : 'NaN';
        inviteCooperatorList.push(tmp);
      });
      this.inviteDropDownObj.groupObj['cooperator'] = inviteCooperatorList;
      this.inviteDropDownObj.settings = settings;
    }
  }


  /**
   * 点击选人
   */
  showPublicSelect(event: any) {
    event.stopPropagation();
    let modal = this.modalCtrl.create(PublicSelectComponent, {
      data: this.inviteDropDownObj,
      componentName: 'chat-invite-member',
      selectedArray: this.selectedPeopleArray
    });
    modal.present();
  }


  /**
   * 删除选中项
   */
  deleteSelected(event: any, item: any) {
    event.stopPropagation();
    item.isCurrent = false;
    for (let i in this.selectedPeopleArray) {
      if (this.selectedPeopleArray[i].id == item.id) {
        this.selectedPeopleArray.splice(parseInt(i), 1);
      }
    }
  }

  /**
   * 调用IM
   */
  confirmInviteMember(event: any) {
    event.stopPropagation();
    this.hasClickOnSend = true;
    if (!this.selectedPeopleArray.length) return false;
    let selectedMember: Array<any> = [];
    for (let i in this.selectedPeopleArray) {
      let obj = {
        uid: this.selectedPeopleArray[i].id
      };
      selectedMember.push(obj)
    }
    let sendData: any = {
      gid: this.menuInfo.gid,
      invited_member: this.menuInfo.invited_member,
      is_host: this.menuInfo.is_host,
      name: this.menuInfo.name,
      members: selectedMember,
      form: this.menuInfo.form
    };
    if (this.menuInfo.is_host == 1) {
      this.imService.inviteByHost(sendData);
    } else {
      this.imService.inviteByCommonMember(sendData);
    }

  }


}
