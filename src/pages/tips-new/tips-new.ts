import {Component, ViewChild, Inject} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController, Events, AlertController} from 'ionic-angular';
import {PublicSelectComponent} from "../public-select/public-select";
import {UserModelService} from "../../share/service/model/user-model.service"
import {ContactsList} from "../../share/entity/user-entity";
import {selectSettings, selectOptionModel} from "../../share/entity/select-entity";
import {EventNameConfig} from "../../share/config/event-name.config";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {AlarmModelService} from '../../share/service/model/alarm-model.service';
import * as AlarmConfig from '../../share/config/alarm.config';
/**
 * Generated class for the NewTipsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'new-tips',
  segment: 'new-tips',
})
@Component({
  selector: 'page-new-tips',
  templateUrl: 'tips-new.html',
  providers: [AlarmModelService]
})
export class NewTipsPage {
  public content: string = '';
  @ViewChild('goBack') public goBack: any;
  @ViewChild('time') public time: any;
  private optionData: any;
  private contactList: {Cooperator: Array<ContactsList>; Friend: Array<ContactsList>; Internal: Array<ContactsList>};
  private inviteDropDownObj: any;
  private updateTips: boolean = false;
  private currentIndex: number = -1;
  private selectedArr: Array<any> = [];
  private shareToArr: Array<string> = [];
  private fGroup: FormGroup;
  public hasClickOnSend: boolean;
  public alarmTime: string;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public alertCtrl: AlertController,
              public formBuilder: FormBuilder,
              @Inject('user.service') public  userService: any,
              public navParams: NavParams,
              private event: Events,
              @Inject('app.config') public config: any,
              @Inject('date.service') public dateService: any,
              public alarmModelService: AlarmModelService,
              public userModelService: UserModelService) {
    this.optionData = this.navParams.data;
    /* {
     updateTips: true,
     data: tips,
     currentIndex: index
     }*/
    console.log('new tips data::', this.optionData);
    if (this.optionData.hasOwnProperty('tipData') && this.optionData.tipData.updateTips) {
      this.updateTips = true;
      this.currentIndex = this.optionData.tipData.currentIndex;
      this.content = this.optionData.tipData.data.content;
      //初始化dropdown
      this.optionData.tipData.data.sharedToInfoList.forEach((item: any) => {
        let tmp: selectOptionModel = this.initDropDownModel();
        tmp.id = item.uid;
        tmp.group = '';
        tmp.childGroup = '';
        tmp.isCurrent = true;
        tmp.key = item.work_name ? item.work_name : item.p_name ? item.p_name : '';
        tmp.label = item.work_name ? item.work_name : item.p_name;
        tmp.desc = (item.company_name ? item.company_name : '') + ' ' + (item.p_name ? item.p_name : '');
        tmp.imageLabel = item.user_profile_path ? item.user_profile_path : 'NaN';
        this.selectedArr.push(tmp);
      });

    } else {
      this.updateTips = false;
    }
    this.initForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewTipsPage');
    this.getContactList();
    this.dealEvent();
  }

  /**
   * 点击选择分享人
   * @param event
   */
  showPublicSelect(event: any) {
    if (event) {
      event.stopPropagation();
    }
    let modal = this.modalCtrl.create(PublicSelectComponent, {
      data: this.inviteDropDownObj,
      componentName: 'new-tips',
      selectedArray: this.selectedArr
    });
    modal.present();
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
        console.log('从本地缓存获取联系人列表', this.contactList);
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
    let settings: selectSettings = this.initDropDownSetting();
    settings.group.push({key: 'personal', 'title': 'Personal'}, {key: 'business', 'title': 'Business'});
    settings.childGroup.push({key: 'friend', 'title': 'Friend', parentKey: 'personal'});
    let inviteFriendList: Array<selectOptionModel> = [];
    this.dealDropdownObj('Friend', 'personal', 'friend', inviteFriendList);
    settings.childGroup.push({key: 'cooperator', 'title': 'Cooperator', parentKey: 'business'});
    let cooperatorList: Array<selectOptionModel> = [];
    this.dealDropdownObj('Cooperator', 'business', 'cooperator', cooperatorList);
    settings.childGroup.push({key: 'internal', 'title': 'Internal', parentKey: 'business'});
    let internalList: Array<selectOptionModel> = [];
    this.dealDropdownObj('Internal', 'business', 'internal', internalList);
    this.inviteDropDownObj.groupObj['friend'] = inviteFriendList;
    this.inviteDropDownObj.groupObj['cooperator'] = cooperatorList;
    this.inviteDropDownObj.groupObj['internal'] = internalList;
    this.inviteDropDownObj.settings = settings;
    console.log('传进来的参数', this.inviteDropDownObj);
  }

  /**
   * 生成dropdown 对象
   * @param key
   * @param group
   * @param childGroup
   * @param listObj
   */
  dealDropdownObj(key: string, group: string, childGroup: string, listObj: any) {
    console.log('生成dropdown 对象', this.contactList);
    this.contactList[key].forEach((item: any) => {
      let tmp: selectOptionModel = this.initDropDownModel();
      tmp.id = item.psid || item.uuid;
      tmp.group = group;
      tmp.childGroup = childGroup;
      tmp.key = item.work_name ? item.work_name : item.p_name ? item.p_name : '';
      tmp.label = item.work_name ? item.work_name : item.p_name;
      tmp.desc = (item.company_name ? item.company_name : '') + ' ' + (item.p_name ? item.p_name : '');
      tmp.imageLabel = item.user_profile_path ? item.user_profile_path : 'NaN';
      listObj.push(tmp);
    });
  }

  /**
   * 新建tips接口
   * @param event
   */
  sendTo() {
    this.hasClickOnSend = true;
    if (!this.fGroup.valid) {
      return;
    }
    if (!this.updateTips) {
      this.addTips();
    } else {
      this.editTips();
    }
  }

  /**
   * 修改tips
   */
  editTips() {
    console.log(this.optionData, 'update tips');
    if (this.updateTips && this.optionData.tipData.data) {
      console.log(this.optionData.tipData.data, 'tips');
      this.optionData.tipData.data.content = this.content;
      let sendObj = {
        content: this.content,
        tip_id: this.optionData.tipData.data.rid
      };
      this.userModelService.updateTips({data: sendObj}, (response) => {
        console.log(response, "update tips response");
        if (response && response.status == 1) {
          let alert = this.alertCtrl.create({
            title: 'EDIT TIPS SUCCESS',
            subTitle: '点击回到tips 详情页',
            buttons: [
              {
                text: 'OK',
                handler: () => {
                  this.goBack.nativeElement.click();
                  console.log('update clicked');
                  //事件传出数据
                  this.event.publish(EventNameConfig.UPDATE_TIPS, {
                    param: 'update-tips',
                    data: {tips: this.optionData.tipData.data, currentIndex: this.currentIndex}
                  });
                }
              }
            ]
          });
          alert.present();
        } else {
          alert('update fail');
        }
      })
    }
  }

  /**
   * 添加tips
   */
  addTips() {
    let sendObj = {
      'content': this.content,
      'type': 1,
      'shared_to': this.shareToArr,
      'promoted': true,  //是否在桌面显示
      'created': new Date().getTime(),
      'rid': ''
    };
    console.log(sendObj, 'send to new tips');
    this.userModelService.newTips({data: sendObj}, (response) => {
      if (response && response.hasOwnProperty('status') && response.status == 1) {
        if (response.hasOwnProperty('data')) {
          sendObj.rid = response.data;
          this.goBack.nativeElement.click();
          console.log(response, "tips add");
          //事件传出数据
          this.event.publish(EventNameConfig.ADD_TIPS, {param: 'home-tips', data: sendObj});
        }
      } else {
        //todo:新建tips失败
      }
    });
  }

  /**
   * 接受事件
   */
  dealEvent() {
    // this.event.subscribe(EventNameConfig.PUBLIC_SELECT, (params: any) => {
    //   let param = params.param;
    //   switch (param) {
    //     case 'new-tips' :
    //       this.selectedArr = params.data;
    //       this.shareToArr = [];
    //       for (let i = 0; i < this.selectedArr.length; i++) {
    //         this.shareToArr.push(this.selectedArr[i].id);
    //       }
    //
    //       break;
    //   }
    // });
  }

  initDropDownSetting() {
    return {
      enableSearch: true,
      isMultiple: true,
      group: [],
      childGroup: [],
      readonly: this.updateTips ? true : false,
      searchPH: 'Search',
    };
  }

  initDropDownModel() {
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
   * 删除share to
   * @param event
   * @param index
   */
  onDeleteShareTo(event: any, index: number) {
    if (event) {
      event.stopPropagation();
    }
    this.shareToArr.splice(index, 1);
    this.selectedArr.splice(index, 1);
  }

  initForm() {
    this.fGroup = this.formBuilder.group({
      'fContent': [null, Validators.compose([Validators.required, Validators.maxLength(200)])],
    });
  }

  get fContent() {
    return this.fGroup.get('fContent');
  }

  /**
   * 选人发生变化
   */
  selectedChange(data: Array<selectOptionModel>) {
    this.selectedArr = data;
    this.shareToArr = [];
    for (let i = 0; i < this.selectedArr.length; i++) {
      this.shareToArr.push(this.selectedArr[i].id);
    }
  }

  initAlarmTime() {
   /* let now = new Date();*/
    this.dateService.getNowUTCString('YYYY-MM-DDTHH:mmTZD');
  }

  /**
   * 设置tips闹钟
   */
  setTipsAlarm() {
/*    let time = new Date(this.alarmTime).getTime();
    let data = {
      "uid": '',
      "form": AlarmConfig.FORM_TIPS,
      "rid": this.optionData.tipData.data.rid,
      "effective_time": time / 1000,
      "mode": AlarmConfig.MODE_FIX
    };
    console.log(new Date(time), "*****");*/
 /*   this.alarmModelService.alarmAdd({data: data}, (v) => {
      if(v && v.status == 1){
        //todo:设置闹钟成功
      }else{
        //todo：设置闹钟失败
      }
    })*/
  }
}
