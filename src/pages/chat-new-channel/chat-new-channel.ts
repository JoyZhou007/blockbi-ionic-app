import {Component, OnInit, Inject} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController, Events} from 'ionic-angular';
import {ContactsList} from "../../share/entity/user-entity";
import {selectSettings, selectOptionModel} from "../../share/entity/select-entity";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {NotificationEntity} from "../../share/entity/notification-entity";
import {NotificationConfig} from "../../share/config/notification.config";
import {NotificationService} from "../../share/service/index";
import {Subscription} from "rxjs/Subscription";

/**
 * Generated class for the NewChannelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'chat-new-channel',
  segment: 'chat-new-channel',
})
@Component({
  templateUrl: 'chat-new-channel.html',
  selector: 'page-chat-new-channel',
})
export class ChatNewChannelComponent implements OnInit {

  public currentForm: number;
  private contactList: {Cooperator: Array<ContactsList>; Friend: Array<ContactsList>; Internal: Array<ContactsList>};
  private inviteDropDownObj: any;
  public selectedPeopleArray: Array<selectOptionModel> = [];
  private channelName: string = '';
  private channelTopic: string = '';
  private fGroup: FormGroup;
  private hasClickOnSend: boolean;
  private subscription: Subscription;

  constructor(public navCtrl: NavController,
              public formBuilder: FormBuilder,
              public modalCtrl: ModalController,
              public events: Events,
              @Inject('user.service') public  userService: any,
              @Inject(NotificationService) public  notificationService: NotificationService,
              @Inject('app.config') public  appConfig: any,
              @Inject('im.service') public  imService: any,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.subscription = this.notificationService.getNotification().subscribe(
      (message: any) => {
        this.dealWebSocketNotification(message);
      });
  }


  ngOnInit(): void {
    this.currentForm = 1;
    this.getContactList();
    this.initForm();
  }

  ngAfterViewInit() {

  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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
   * 处理IM返回消息
   */
  dealWebSocketNotification(message: NotificationEntity) {
    //新建群IM返回
    switch (message.act) {
      case NotificationConfig.ACT_CHAT_NOTICE_GROUP_CREATE:
        if (message.status == 1) {
          this.navCtrl.pop()
        }
        break;
    }
  }


  /**
   * 切换新建群组的类型
   */
  switchNewChannelType(event: any, form: number) {
    event.stopPropagation();
    if (this.currentForm != form) {
      this.currentForm = form;
      this.selectedPeopleArray = [];
      this.buildForDropDownData();
    }
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
        this.buildForDropDownData();
      }
      //将当前用户信息添加
    })
  }


  /**
   * 生成dropDown数据对象
   */
  buildForDropDownData() {
    this.inviteDropDownObj = {
      groupObj: {},
      settings: {},
    };
    let settings: selectSettings = this.initSelectSettings();
    if (this.currentForm == 1) {
      //friend
      settings.group.push({key: 'friend', 'title': 'Friend'});
      let inviteFriendList: Array<selectOptionModel> = [];
      this.contactList['Friend'].forEach((item: any) => {
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
      this.contactList['Internal'].forEach((item: any) => {
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
      this.contactList['Cooperator'].forEach((item: any) => {
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
   * 选人发生变化
   */
  selectedChange(data: Array<selectOptionModel>) {
    this.selectedPeopleArray = data;
  }


  /**
   * 确认建群 向IM发送
   */
  confirmCreate(event: any) {
    event.stopPropagation();
    this.hasClickOnSend = true;
    if (!this.fGroup.valid) {
      return;
    }
    if (!this.selectedPeopleArray.length) return false;
    let selectedMember: Array<any> = [];
    for (let i in this.selectedPeopleArray) {
      let obj = {
        uid: this.selectedPeopleArray[i].id
      };
      selectedMember.push(obj)
    }
    let sendData: any = {
      name: this.channelName,
      topic: this.channelTopic,
      members: selectedMember,
      form: this.currentForm
    };
    this.imService.sendCreateGroup(sendData);
  }


  /**
   * 表单验证
   */
  initForm() {
    this.fGroup = this.formBuilder.group({
      'channelNameReg': [null, Validators.compose([Validators.required])],
    });
  }

  get channelNameReg() {
    return this.fGroup.get('channelNameReg');
  }


}
