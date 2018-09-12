/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/21.
 */
import {AfterViewInit, Component, Inject, Input, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {Events, Menu, Slides, ModalController} from "ionic-angular";
import {UserCompanyEntity, UserEntity} from "../../entity/user-entity";
import {PersonalSwitchCompanyPage} from "../../../pages/personal-switch-company/personal-switch-company";


@Component({
  selector: 'bi-side-menu',
  templateUrl: `bi-side-menu.html`
})
export class BiSideMenuComponent implements AfterViewInit, OnInit, OnDestroy {


  private _mainContent: any;
  @ViewChild('slides') public slides: Slides;
  @ViewChild('sideMenu') public sideMenu: Menu;

  private menuHasOpened: boolean = false;
  private contactListInit: boolean = false;

  @Input() set myContent(data: any) {
    this._mainContent = data;
  }

  get myContent() {
    return this._mainContent;
  }

  public userInfo: UserEntity;
  public userCompanyInfo: UserCompanyEntity;
  public settingGroup = {
    'privacy': ['account', 'password'],
    'pushing': ['gps', 'chat', 'structure-workflow', 'attention', 'folder', 'mission', ''],
    'support': ['about-us', 'contact-us', 'qa']
  };
  public contactList: {
    Internal: Array<UserCompanyEntity>,
    Cooperator: Array<UserCompanyEntity>,
    Friend: Array<UserEntity>
  } = {
    Internal: [],
    Cooperator: [],
    Friend: []
  };
  public originContactList = {
    Internal: [],
    Cooperator: [],
    Friend: []
  };
  public contactListKeys = ['Internal', 'Cooperator', 'Friend'];
  public searchResult = [];

  constructor(private event: Events,
              public modalCtrl: ModalController,
              @Inject('user.service') public userService: any) {
    this.event.subscribe('contact-is-ready', () => {
      this.prepareContact();
    });
    this.event.subscribe('setting-is-ready', () => {
      this.prepareContact();
    });

  }

  ngOnInit(): void {
    this.prepareUserInfo();
  }

  ngOnDestroy(): void {
    this.event.unsubscribe('contact-is-ready');
    this.event.unsubscribe('setting-is-ready');
  }

  prepareSettingList() {

  }

  prepareContact() {
    if (!this.contactListInit) {
      // 获取contact list
      this.userService.getContactList((staffList: any) => {
        // 备份数据
        for (let g in staffList) {
          this.contactList[g] = staffList[g];
          this.originContactList[g] = staffList[g];
        }
        this.contactListInit = true;
      });
    }
  }

  /**
   * 准备用户信息，联系人列表
   */
  prepareUserInfo() {
    if (!this.userInfo) {
      // 获取本人信息
      this.userService.fetchCurrentUserInfo((userInfo: any, companyInfo: any) => {
        if (companyInfo) {
          this.userCompanyInfo = companyInfo;
        }
        this.userInfo = userInfo;
      });
    }
  }

  /**
   * 跳转到contact list
   */
  openContactList() {
    if (this.slides) {
      this.slides.slideTo(1);
    }
  }


  mainMenuOpened() {
    this.menuHasOpened = true;
    if (this.slides) {
      if (typeof this.slides.clickedSlide === 'undefined' && this.slides.getActiveIndex() === 0) {
        this.slides.update();
      }
    }
  }

  settingMenuOpened() {

  }


  /**
   * 查找筛选
   * @param ev
   */
  filterContactList(ev: any) {
    // set val to the value of the search bar
    let val = ev.target.value;
    // if the value is an empty string don't filter the items
    let findArr = [];
    if (val && val.trim() != '') {
      for (let group in this.contactList) {
        let self = this.contactList[group];
        findArr[group] = [];
        this.contactList[group].find(function (value, index) {
          if (self && self[index].hasOwnProperty('work_name')) {
            let toFind: string = self[index].work_name.toLowerCase();
            let find = toFind.indexOf(val.toLowerCase());
            if (find !== -1) {
              findArr[group].push(self[index]);
            }
          } else {
            console.error('this.contactList[k] error, no work_name', self[index]);
          }
        });
        this.contactList[group] = findArr[group];
      }
    } else {
      for (let k in this.originContactList) {
        this.contactList[k] = this.originContactList[k];
      }
      this.searchResult = [];
    }

    console.log('findArr', findArr);
    // TODO: filter via API
  }

  ngAfterViewInit(): void {

  }


  slideChanged(event: any) {

  }


  /**
   * 切换公司
   */
  switchCompany(event: any) {
    event.stopPropagation();
    let modal = this.modalCtrl.create(PersonalSwitchCompanyPage);
    modal.present();
  }


}