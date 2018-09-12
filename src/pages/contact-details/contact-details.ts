import {Component, Inject, ViewChild} from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  SegmentButton,
  Slides,
  ViewController,
  ModalController,
  Events
} from "ionic-angular";
import {UserModelService} from "../../share/service/model/user-model.service";
import {ChatContentComponent} from "../chat-content/chat-content";
import * as userConfig from "../../share/config/user.config";
import {EditProfilePage} from "../edit-profile/edit-profile";
import {EventNameConfig} from "../../share/config/event-name.config";
import {ContactAddFriendPage} from "../contact-add-friend/contact-add-friend";
/**
 * Generated class for the ContactDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name: 'contact-details',
  segment: 'contact-details/:contactId'
})
@Component({
  selector: 'page-contact-details',
  templateUrl: 'contact-details.html',
  //encapsulation: ViewEncapsulation.Native
})
export class ContactDetailsPage {
  public contact: any;
  public currentUid: any;
  public bigSizeProfileImage: string = '';
  public activeModule: string = '';
  public slideActiveNum;

  // 权限相关
  // 有好友关系
  public hasRelationship: boolean = false;
  // 可以雇佣
  public couldHire: boolean = false;
  // 可以添加好友关系
  public couldAddRelation: boolean = false;
  public isOwner: boolean = false;

  public menuArr: Array<{
    key: string,
    api: string,
    title: string,
    access: boolean
  }>;
  @ViewChild('slides') public slides: Slides;
  private isPersonal: boolean;

  /*contact = {
   'user_profile_path':'',
   'work_name':'',
   'online':'',
   'p_name':'',
   'uid':''
   }*/
  constructor(public navCtrl: NavController,
              public events: Events,
              public navParams: NavParams,
              private viewCtrl: ViewController,
              public userModelService: UserModelService,
              public modalCtrl: ModalController,
              @Inject('user-store.service') public userStoreService: any,
              @Inject('app.config') public appConfig: any,
              @Inject('user.service') public userService: any,
              @Inject('file.service') public fileService: any) {
    this.menuArr = [];
    this.activeModule = 'general';
    if (this.navParams.data) {
      console.log('contact detail::', this.navParams.data);
      this.currentUid = this.navParams.data.contactId;
      this.initAccess();

      //判断是否是当前用户
      if(this.userService.isCompanyID(this.currentUid)){  //是psid
        //判断好友关系
        //如果是internal  ——》 私人好友 ， 否则工作好友
       this.isInternal(this.currentUid);
       if(!this.isPersonal){
         this.isPersonal = false;
       }
        this.userStoreService.getCurrentPSID((v) => {
          if (this.currentUid == v) {
            this.isOwner = true;
          } else {
            this.isOwner = false;
          }
        }).then().catch();
      }else{
        //判断好友关系
        //如果是uuid 头部图标加私人好友，公司列表前，加工作好友
        this.userStoreService.getCurrentUUID((v) => {  //是uuid
          if (this.currentUid == v) {
            this.isOwner = true;
          }else{
            this.isOwner = false;
          }
        }).then().catch();
      }
    } else {
    }
    //console.log(this.qrScanner);
  }

  ionViewDidLoad() {
    this.dealEvent();
    console.log('ionViewDidLoad ContactDetailsPage');
  }

  dealEvent() {
    this.events.subscribe(EventNameConfig.EDIT_PROFILE, (param: any) => {
      if (param.hasOwnProperty('param') && param.param == 'edit-profile') {
        this.contact.work_name = param.data && param.data.work_name;
        this.contact = Object.assign({}, this.contact);
      }
    })
  }


  isInternal(id: string){
    this.userService.getContactList((v) => {
      if(v && v.hasOwnProperty('Internal')){
        let internal = v.Internal;
        for(let key in internal){
          if(internal[key].psid == id){
            this.isPersonal = true;
            break;
          }
        }
      }
    });
  }
  initAccess() {
    let menu = this.initTabMenu();
    this.userService.fetchContactPermission(this.currentUid, (res: any) => {
      let num = 0;
      let relation = res.data.hasOwnProperty('relation') ? res.data['relation'] : {company: 0, person: 0};
      let couldHire = (res.data.hasOwnProperty('hired') && res.data['hired'] === 1);
      let couldAddRelation = relation.person != 0 || relation.company != 0;

      this.couldHire = couldHire;
      this.couldAddRelation = couldAddRelation;
      this.hasRelationship = !(relation.person != 0 && relation.company != 0);

      console.log(
        'relation', relation,
        'couldHire', couldHire,
        'couldAddRelation', this.couldAddRelation, 'hasRelationship', this.hasRelationship);
      let newMenuArr = [];
      for (let i = 0; i < menu.length; i++) {
        let search = menu[i].api;
        if (res.data.hasOwnProperty(search) && res.data[search] != 1) {
          menu[i].access = false;
        }
        newMenuArr.push(menu[i]);
      }
      this.menuArr = newMenuArr;

      if (this.couldHire) {
        num++;
      }
      if (this.couldAddRelation) {
        num += 1;
      }
      if (this.hasRelationship) {
        num += 3;
      }
      this.slideActiveNum = num;
      if (this.slides) {
        this.slides.update();
      }

      console.log(' this.menuArr ', this.menuArr, this.slideActiveNum);
      // let couldShowCommonFriend = false;
      // let couldRemoveRelation = false;
      // let couldForward: boolean = false;
      this.getContactDetail();
    });
  }

  /**
   *
   * @param event
   */
  switchTabMenu(event: SegmentButton) {
    console.log(event.value, this.activeModule);
    if (event.value != this.activeModule) {
      this.activeModule = event.value;
      console.log('module', this.activeModule);
    }
  }

  /**
   * 根据是公司还是个人初始化菜单
   */
  initTabMenu() {
    let tmp = [];
    // 如果是psid 只显示公司相关信息
    if (!isNaN(this.currentUid)) {
      tmp = [
        {
          key: 'intro',
          api: 'introduction',
          title: 'Business information',
          access: true
        },
        {
          key: 'company-analysis',
          api: 'company_analysis',
          title: 'Business analysis',
          access: true
        },
      ];
    } else {
      //如果是uuid 显示个人相关
      tmp = [
        {
          key: 'resume',
          api: 'resume',
          title: 'Resume',
          access: true
        },
        {
          key: 'ability',
          api: 'analysis',
          title: 'Analysis',
          access: true
        }
      ];
    }
    return tmp;
  }

  getContactDetail() {
    /**
     * 有传进来的contact信息
     */
    if (this.navParams.data.hasOwnProperty('contact')) {
      this.contact = this.navParams.data.contact;
      this.initContact();
      this.bigSizeProfileImage = this.contact.user_profile_path ?
        this.appConfig.resourceDomain + this.fileService.getImagePath(380, this.contact.user_profile_path) : '';
    }

    //查看在线状态 0 -> offline , 1 -> offline
    this.userModelService.getOnlineStatus({uid: this.contact.uid}, (response) => {
      if (response && response.status == 1) {
        if (response.hasOwnProperty('data')) {
          this.contact.online = response.data.online;
        }
      }
    })

    /**
     * TODO:是否在联系人列表中再次检查 检查是否有好友关系
     */
    this.userService.fetchContactDetailInfo(this.currentUid, this.activeModule, (res: any) => {
      console.log('this.contact', res, this.contact);
    });


    // load general information
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(true);
  }


  /**
   * 点击聊天图标
   * @param event
   */
  onClickChat(event: any) {
    event.stopPropagation();
    this.contact.is_Friend = true;
    this.contact.form = !isNaN(this.contact.uid) ? userConfig.USER_FORM_COMPANY : userConfig.USER_FORM_PERSONAL;
    let modal = this.modalCtrl.create(ChatContentComponent, {data: this.contact});
    modal.present();
  }

  /**
   *
   * @param event
   */
  onClickRecommend(event: any) {
    event.stopPropagation();
    console.log('推荐好友');
  }

  /**
   * 编辑个人profile
   * @param event
   */
  editProfile(event: any) {
    event.stopPropagation();
    let modal = this.modalCtrl.create(EditProfilePage, {data: this.clone(this.contact)});
    modal.present();
  }

  /**
   * 克隆对象 (解决对象绑定值遇到数据引用类型的问题)
   * @param obj
   * @returns {any}
   */
  clone(obj: any): any {
    if (obj === null || typeof(obj) !== 'object' || 'isActiveClone' in obj) {
      return obj;
    }

    let cloneObj: any = new obj.constructor;
    for (let attr in obj) {
      if (typeof obj[attr] === 'object' && attr !== 'timer') {
        cloneObj[attr] = this.clone(obj[attr]);
      } else {
        cloneObj[attr] = obj[attr];
      }
    }
    return cloneObj;
  }

  /**
   *加好友弹框
   */
  addFriend(comp?:boolean){
    let type:number;
    if(this.couldAddRelation){
      if(this.userService.isCompanyID(this.currentUid)){
        if(this.isPersonal){
          type = 1;   //加私人好友
        }else if(this.isPersonal == false){
          type = 2;   //加工作好友
        }
      }else{
        if(comp){
          type = 2; //uuid 点击公司列表加工作好友
        }else{
          type = 1; //uuid 点击头部图标加私人好友
        }
      }
      let modal = this.modalCtrl.create(ContactAddFriendPage, {data: this.contact,friendType:type});
      modal.present();
    }
  }

  /**
   *  添加uid字段
   */
  initContact(){
    if(!this.contact.hasOwnProperty('uid')){
        if(this.contact.hasOwnProperty('psid')){
          this.contact.uid = this.contact.psid;
        }else if(this.contact.hasOwnProperty('uuid')){
          this.contact.uid = this.contact.uuid;
        }
    }
  }
}
