import {Component, Inject, OnInit, Input} from "@angular/core";
import {UserModelService} from "../../../../share/service/model/user-model.service";

import {Events, NavController, ModalController} from "ionic-angular";
import {ContactsList, Tips, TipsMission, UserEntity, TipsUserData} from "../../../../share/entity/user-entity";
import {TipsDetailPage} from "../../../tips-detail/tips-detail";
import {EventNameConfig} from "../../../../share/config/event-name.config";
import * as MissionConfig from "../../../../share/config/mission.config";
/**
 * Generated class for the HomeTipsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'home-tips',
  templateUrl: 'home-tips.html'
})
export class HomeTipsComponent implements OnInit {

  public TIP_TYPE_NORMAL: string = '3';
  public pageNumber: number = 1;
  private tipsList: Array<Tips | TipsMission> = [];
  private contactList: any = [];
  private currentContactList: Array<ContactsList> = [];
  private searchArr: Array<string> = [];
  private currentUserInfo: UserEntity;

  constructor(public navCtrl: NavController,
              public events: Events,
              public modalCtrl: ModalController,
              @Inject('user.service') private userService: any,
              @Inject('date.service') public dateService: any,
              @Inject('user-store.service') public userStoreService: any,
              @Inject('app.config') public config: any,
              public userModelService: UserModelService,) {
  }

  @Input('refresh')
  set refresh(data: {
    isRefresh: true,
    refreshObj: any
  }) {
    if (data && data.hasOwnProperty('isRefresh') && data.isRefresh) {
      setTimeout(() => {
        this.pageNumber = 1;
        this.tipsList = [];
        this.downLoadTips();
        data.refreshObj.complete();
      }, 500);
    }
  }

  ngOnInit(): void {
    this.getTipsList();
    this.dealEvent();
  }

  ngOnDestroy(): void {
    this.events.unsubscribe(EventNameConfig.ADD_TIPS);
    // this.events.unsubscribe(EventNameConfig.EDIT_PROFILE);
  }

  /**
   * 接收事件
   */
  dealEvent() {
    //接收消息
   /* this.events.subscribe(EventNameConfig.EDIT_PROFILE,(param:any) => {
       console.log('>>>>>>>123edit profile',param);
    });*/

    this.events.subscribe(EventNameConfig.ADD_TIPS, (param: any) => {
      let data = param.param;
      switch (data) {
        case 'home-tips' :  //新建tips成功传来的数据
          if (param.data) {
            param.data.form = 3;
            param.data.createDetailTime = this.dateService.dateFormat(new Date(param.data.created), 'hh:mm yyyy/MM/dd');
            param.data.owner = this.currentUserInfo ? this.currentUserInfo.uuid : '';
            param.data.ownerInfo = {
              work_name: this.currentUserInfo ? this.currentUserInfo.work_name : '',
              user_profile_path: this.currentUserInfo ? this.currentUserInfo.user_profile_path : '',
              uid:this.currentUserInfo ? this.currentUserInfo.uuid : ''
            };
            let tips = this.addTipAttribute(param.data);
            this.tipsList.unshift(tips);
          }
          break;
      }
    });
  }

  /**
   * 获取tips列表
   */
  getTipsList() {
    this.userModelService.getHomepageDashboard({data: {page: this.pageNumber, order: 1}}, (response: any) => {
      if (response.status == 1 && response.hasOwnProperty('data')) {
        let tipsData: Array<Tips> = [];
        if (Array.isArray(response.data)) {
          tipsData = response.data;
        }
        //获取缓存
        this.userService.getContactList((contactList: {
          Cooperator: Array<ContactsList>,
          Friend: Array<ContactsList>,
          Internal: Array<ContactsList>
        }) => {
          this.contactList = contactList;
          this.currentContactList = this.currentContactList.concat(this.contactList.Friend, this.contactList.Cooperator, this.contactList.Internal);
          //将当前用户信息添加
          this.userStoreService.getUserInfo((v) => {
            this.currentUserInfo = v;
            this.currentContactList.unshift(v);
            this.dealFindUserList(tipsData);
          }).then().catch();
        })
      } else {
        //TODO: 弹出错误提示
        alert('请求失败');
      }
    })
  }

  /**
   * 循环tips列表，查找要搜索的用户
   * @param tipsData
   */
  dealFindUserList(tipsData: Array<Tips>) {
    if (tipsData) {
      for (let i = 0; i < tipsData.length; i++) {
        //如果是tips
        if (tipsData[i].hasOwnProperty('form') && tipsData[i].form === this.TIP_TYPE_NORMAL) {
          //查找不在contact list 里的用户uid列变
          this.findUserList(tipsData[i]);
        }
      }
      //如果有要搜索的用户
      if (this.searchArr && this.searchArr.length != 0) {
        this.userModelService.getUserInfo({multi: this.searchArr}, (response) => {
          if (response.status == 1 && response.hasOwnProperty('data')) {
            this.currentContactList = this.currentContactList.concat(response.data);
            this.searchArr = [];  //请求完成清空搜索
            this.dealTips(tipsData);
          }
        });
      } else {
        //如果没有要搜索的用户
        this.dealTips(tipsData);
      }
    }
  }

  /**
   * init tips 模板数据
   * @param tipsObj 接口返回的对象
   */

  findUserList(tipsObj: any) {
    if (this.currentContactList) {
      let tplTips: Tips = tipsObj;
      tplTips.createDetailTime = this.dateService.dateFormat(new Date(tplTips.created * 1000), 'hh:mm yyyy/MM/dd');
      let flag = 1;
      for (let i = 0; i < this.currentContactList.length; i++) {
        //owner是否在contact list里
        if (tplTips.owner == (this.currentContactList[i].uuid || this.currentContactList[i].psid || this.currentContactList[i].uid)) {
          flag = 0;
        }
      }
      //如果owner不在缓存中，则加入要搜素的列表中
      if (flag && this.searchArr.indexOf(tplTips.owner) == -1 && tplTips.owner) {
        this.searchArr.push(tplTips.owner);
      }
      let shareFlag = 1;
      //share to是否在contact list里
      if (tplTips.shared_to && tplTips.shared_to.length) {
        for (let j = 0; j < tplTips.shared_to.length; j++) {
          for (let i = 0; i < this.currentContactList.length; i++) {
            if (tplTips.shared_to[j] == (this.currentContactList[i].uuid || this.currentContactList[i].psid || this.currentContactList[i].uid)) {
              shareFlag = 0;
            }
          }
          //如果share to不在缓存中，则加入要搜素的列表中
          if (shareFlag && this.searchArr.indexOf(tplTips.shared_to[j]) == -1 && tplTips.shared_to[j]) {
            this.searchArr.push(tplTips.shared_to[j]);
          }
        }
      }
    }
  }

  /**
   * 添加显示字段
   */
  dealTips(tipsData: Array<Tips>) {
    if (tipsData) {
      for (let i = 0; i < tipsData.length; i++) {
        let tips = tipsData[i];
        //如果是tips
        if (tips.hasOwnProperty('form')) {
          tips = this.addTipAttribute(tips);
          this.tipsList.push(tips);
        } else {
          //如果是mission
          let missionObj: TipsMission = this.initTipsMission();
          this.dealMission(missionObj, tips);
          this.tipsList.push(missionObj);
        }
      }
    }

  }

  /**
   * tips添加显示字段
   * @param tips
   * @returns {Tips}
   */
  addTipAttribute(tips: Tips): Tips {

    if(tips.has_alarm == 1){
      tips.effective_time_display = this.dateService.dateFormat(new Date(tips.effective_time*1000),'hh:mm DD/MM/YYYY');
      console.log("tips:::",tips.effective_time_display);
    }
    tips.sharedToInfoList = [];
    if (tips.hasOwnProperty('owner')) {
      if (tips.owner == this.currentUserInfo.uuid) {
        tips.couldEdit = true;
      } else {
        tips.couldEdit = false;
      }
    }
    for (let j in this.currentContactList) {
      //添加owner信息
      if (tips.hasOwnProperty('owner') && tips.owner ==
        (this.currentContactList[j].psid || this.currentContactList[j].uuid || this.currentContactList[j].uid)) {
        tips.ownerInfo = {
          work_name: this.currentContactList[j].work_name,
          user_profile_path: this.currentContactList[j].user_profile_path,
          uid: tips.owner
        }
      }
      if (tips.hasOwnProperty('shared_to')) {
        //添加share to 列表
        for (let k = 0; k < tips.shared_to.length; k++) {
          if (tips.shared_to[k] == (this.currentContactList[j].psid || this.currentContactList[j].uuid || this.currentContactList[j].uid)) {
            if (!tips.sharedToInfoList) {
              tips.sharedToInfoList = [];
            }
            let shareToObj: TipsUserData = {
              work_name: this.currentContactList[j].work_name,
              user_profile_path: this.currentContactList[j].user_profile_path,
              uid: tips.shared_to[k]
            };
            if (tips.sharedToInfoList.indexOf(shareToObj) == -1) {
              tips.sharedToInfoList.push(shareToObj);
            }

          }
        }
      }

    }
    return tips;
  }

  /**
   *前端用tips mission 对象
   * @param missionObj
   * @param tipsObj
   * @returns {TipsMission}
   */
  dealMission(missionObj: TipsMission, tipsObj: any): void {
    Object.assign(missionObj, tipsObj);

    missionObj.createDetailTime = this.dateService.dateFormat(new Date(missionObj.created_timestamp * 1000), 'hh:mm yyyy/MM/dd');
    missionObj.missionType = this.getTypeTitle(missionObj.type);
    this.calculateProgress(missionObj);
  }

  /**
   * 计算要绘制的进度条, 开始时间, 结束时间
   * todo状态
   * @param tplObj
   */
  calculateProgress(tplObj: any) {
    // 对于开始时间，首先检查是否有连接其他mission
    let lInfo = tplObj.link_info;
    //如果有, 开始时间为连接到该mission的link
    if (Array.isArray(lInfo.before) && lInfo.hasOwnProperty('0') && (typeof lInfo.before[0] !== 'undefined')) {
      let beforeMission = lInfo.before[0];
      tplObj.startIsLink = true;
      tplObj.initStartLinkInfo(beforeMission);
    } else {
      let startTime: number = 0;
      // 对于 doing和done的开始时间应该检查实际开始时间
      // todo无real_start时间
      switch (tplObj.mission_status) {
        case MissionConfig.MISSION_STATUS_DONE:
          startTime = tplObj.real_start_timestamp;
          break;
        case MissionConfig.MISSION_STATUS_DOING:

        case MissionConfig.MISSION_STATUS_PAUSE:
          startTime = tplObj.real_start_timestamp;
          break;
        case MissionConfig.MISSION_STATUS_RESET:
          tplObj.endIsPending = true;
          break;
        case MissionConfig.MISSION_STATUS_TODO:
        case MissionConfig.MISSION_STATUS_PENDING:
        default:
          startTime = tplObj.start_timestamp;
          break;
      }
      tplObj.startShow.day = this.dateService.dateFormat(new Date(startTime * 1000), 'dd');
      tplObj.startShow.month = this.dateService.dateFormat(new Date(startTime * 1000), 'MMM yyyy');
      tplObj.startShow.hour = this.dateService.dateFormat(new Date(startTime * 1000), 'hh:mm ddd');
    }
    // 对于结束时间，只看有没有设置时间
    // 如果有，显示具体数值
    // 如果没有，显示pending
    if ((tplObj.end === MissionConfig.MISSION_TIME_NULL || tplObj.end === '')
      && tplObj.mission_status !== MissionConfig.MISSION_STATUS_DONE
      && tplObj.mission_status !== MissionConfig.MISSION_STATUS_STORAGE
    ) {
      tplObj.endIsPending = true;
    } else {
      tplObj.endIsPending = false;
      let endTime = tplObj.end_timestamp;
      switch (tplObj.mission_status) {
        case MissionConfig.MISSION_STATUS_DONE:
          endTime = tplObj.real_end_timestamp;
          break;
        case MissionConfig.MISSION_STATUS_TODO:
        case MissionConfig.MISSION_STATUS_PENDING:
        case MissionConfig.MISSION_STATUS_DOING:
        case MissionConfig.MISSION_STATUS_RESET:
        case MissionConfig.MISSION_STATUS_PAUSE:
        default:
          endTime = tplObj.end_timestamp;
          break;
      }
      tplObj.endShow.day = this.dateService.dateFormat(new Date(endTime * 1000), 'dd');
      tplObj.endShow.month = this.dateService.dateFormat(new Date(endTime * 1000), 'MMM yyyy');
      tplObj.endShow.hour = this.dateService.dateFormat(new Date(endTime * 1000), 'hh:mm ddd');
    }
    /**
     * 计算进度文字
     */
    switch (tplObj.mission_status) {
      // 对于todo状态只要有开始或者结束时间的任一为不确定，则进度时间为?
      case MissionConfig.MISSION_STATUS_TODO:
      case MissionConfig.MISSION_STATUS_RESET:
      case MissionConfig.MISSION_STATUS_PENDING:
        if (tplObj.endIsPending || tplObj.startIsLink) {
          tplObj.todoProgressTime = MissionConfig.MISSION_PROGRESS_TIME_DEFAULT;
        } else {
          let diffInfo = this.dateDiff(tplObj.end, tplObj.start);
          tplObj.todoProgressTime = diffInfo.gapTime + diffInfo.diffUnit;
        }
        break;
      // 对于done状态, 取的是实际开始与实际结束结束时间作为进度条
      case MissionConfig.MISSION_STATUS_DONE:
      case MissionConfig.MISSION_STATUS_STORAGE:
        let diffInfo = this.dateDiff(tplObj.real_end ? tplObj.real_end : tplObj.real_end_timestamp, tplObj.real_start);
        tplObj.doneProgressTime = diffInfo.gapTime + diffInfo.diffUnit;
        break;
      // 对于doing状态，取的是实际开始时间到当前时间为doing状态
      // 如果结束为pending 无透明部分
      case MissionConfig.MISSION_STATUS_DOING:
      case MissionConfig.MISSION_STATUS_PAUSE:

        let nowDate = this.dateService.getNowUTCString();
        let endDate = tplObj.end ? tplObj.end : nowDate;
        if (tplObj.endIsPending) {
          let diffInfo = this.dateDiff(nowDate, tplObj.real_start);
          tplObj.doingProgressTime = diffInfo.gapTime + diffInfo.diffUnit;
        } else {
          // 那么取
          let diffInfoDoing = this.dateDiff(nowDate, tplObj.real_start);
          tplObj.doingProgressTime = diffInfoDoing.gapTime + diffInfoDoing.diffUnit;
          let diffInfoTodo = this.dateDiff(endDate, tplObj.real_start);
          tplObj.todoProgressTime = diffInfoTodo.gapTime + diffInfoTodo.diffUnit;
          let p = diffInfoDoing.gapTime / diffInfoTodo.gapTime * 100;
          if (p < 0) {
            p = 0;
          } else if (p > 100) {
            // 如果状态仍然是doing, 但是今天已经超过了设置的end时间, 只显示100%
            p = 100;
          }
          tplObj.fillLengthDoing = p.toString();
        }
    }
  }

  /**
   * 时间差, 允许显示单位为mo - 月, h - 小时, d - 天
   * @param d2 timestamp 结束时间
   * @param d1 timestamp 开始时间
   * @returns {{gapTime: number, diffUnit: string}}
   */
  public dateDiff(d2: string, d1: string) {
    if (typeof d1 === 'string') {
      d1 = d1.replace(/-/g, '/');
    }
    if (typeof d2 === 'string') {
      d2 = d2.replace(/-/g, '/');
    }
    let D1 = new Date(d1);
    let D2 = new Date(d2);
    let gapTime = (Date.parse(d2) - Date.parse(d1)) / 1000;
    let diffStatus = 'hour';
    let diffUnit = '';
    if (gapTime > (3600 * 24 * 30 * 12)) {
      diffStatus = 'year';
    } else if (gapTime > (3600 * 24 * 30)) {
      diffStatus = 'month';
    } else if (gapTime > (3600 * 24)) {
      diffStatus = 'day';
    } else if (gapTime < 3600) {
      diffStatus = 'minute';
    }
    switch (diffStatus) {
      case 'minute':
        diffUnit = 'm';
        gapTime = gapTime / 60;
        break;
      case 'hour':
        diffUnit = 'h';
        gapTime = gapTime / (24 * 3600 * 30);
        break;
      case 'month':
        let d1Y = D1.getFullYear();
        let d2Y = D2.getFullYear();
        let d1M = D1.getMonth();
        let d2M = D2.getMonth();
        diffUnit = 'mo';
        gapTime = (d2M + 12 * d2Y) - ( d1M + 12 * d1Y);
        break;
      case 'year':
        diffUnit = 'y';
        gapTime = D2.getFullYear() - D1.getFullYear();
        break;
      case 'day':
      default:
        diffUnit = 'd';
        gapTime = gapTime / (24 * 3600);
        break;
    }
    let gapTimeStr = Math.ceil(gapTime);
    return {
      gapTime: gapTimeStr.toString() !== 'NaN' ? gapTimeStr : -1,
      diffUnit: diffUnit
    }
  };

  /**
   * 滚动加载
   * @param infiniteScroll
   * @returns {Promise<T>}
   */
  doInfinite(infiniteScroll: any) {
    if (infiniteScroll._content.directionY == 'down') {
      return new Promise(() => {
        this.pageNumber++;
        this.downLoadTips(infiniteScroll);
      })
    } else {
      infiniteScroll.complete();
    }
  }

  /**
   * 下拉加载tips
   * @param infiniteScroll
   */
  downLoadTips(infiniteScroll?: any) {

    this.userModelService.getHomepageDashboard({data: {page: this.pageNumber, order: 1}}, (response: any) => {
      if (response.status == 1 && response.hasOwnProperty('data')) {
        let tipsData: Array<Tips> = [];
        if (Array.isArray(response.data)) {
          tipsData = response.data;
        } else {
          if (infiniteScroll) {
            infiniteScroll.enable();
          }
        }
        this.dealFindUserList(tipsData);

      } else {
        //todo: 错误提示

      }
      if (infiniteScroll) {
        infiniteScroll.complete();
      }
    })
  }

  /**
   * 初始化mission
   * @returns {TipsMission}
   */
  initTipsMission(): TipsMission {
    let obj: TipsMission = {
        created_timestamp: 0, //创建时间timestamp
        createDetailTime: '', //显示用
        has_alarm: 0, // 1 or 0
        alarm_id: '',
        type: '', // 1 个人 2公司
        effective_time: '',
        effective_time_display: '',
        creator_info: { //创建mission信息
          user_info: {
            work_name: '',
            user_profile_path: '',
            uid: ''
          }
        },
        name: '',
        status: '',
        id: '',
        real_start_timestamp: 0, //开始时间
        real_end_timestamp: 0, //结束时间
        level: '',
        startShow: {  //显示开始时间
          day: '',
          month: '',
          hour: ''
        },
        endShow: {  //显示开始时间
          day: '',
          month: '',
          hour: ''
        },
        missionType: '',
        description: '',
        endIsPending: false,
        // 时间进度条相关信息
        todoProgressTime: '', //项目跨度时间长度(透明部分)
        doingProgressTime: '',//项目跨度时间长度(正在进行部分)
        doneProgressTime: '',//项目跨度时间长度(已经完成部分)
        fillLengthTodo: '100',
        fillLengthDoing: '100',
        fillLengthDone: '100',
        fillColorTodo: 'rgba(94, 102, 209, .6)',
        fillColorDoing: '#5E66D1',
        fillColorDone: '#4C4B63',
        fillColorLink: '#9193AB',
        fillColorDoneAppli: '#4C4B63',
        fillColorProAppli: '#8EE3F5',
        fillColorWhite: "#fff",
        FillColorLine: '#FBFBFE'
      };
    return obj;
  }

  /**
   * 获取mission类型
   * @param type
   * @param useForClass
   * @returns {string}
   */
  getTypeTitle(type: any, useForClass?: boolean): string {
    let title = '';
    let c = (typeof useForClass !== 'undefined');
    if (typeof type !== 'undefined' && type !== '') {
      switch (type) {
        case MissionConfig.MISSION_TYPE_APPLICATION:
          title = MissionConfig.MISSION_TYPE_APPLICATION_TEXT;
          break;
        case MissionConfig.MISSION_TYPE_TASK:
          title = MissionConfig.MISSION_TYPE_TASK_TEXT;
          break;
        case MissionConfig.MISSION_TYPE_MEETING:
          title = MissionConfig.MISSION_TYPE_MEETING_TEXT;
          break;
        case MissionConfig.MISSION_TYPE_ASSIGNMENT:
          title = MissionConfig.MISSION_TYPE_ASSIGNMENT_TEXT;
          break;
        case MissionConfig.MISSION_TYPE_PROJECT:
          title = MissionConfig.MISSION_TYPE_PROJECT_TEXT;
          break;
      }
    }
    if (c) {
      //去空格 转小写
      title = title.toLowerCase().replace(/(^\s+)|(\s+$)/g, "");
    }
    return title;
  }

  /**
   * 点击tips
   * @param event
   */
  onClickTips(event: any, index: number) {
    if (event) {
      event.stopPropagation();
    }
    let tipsData: any = {
      isShowChannel: false,
      tipData: {   //这里传入数据
        tipsList: this.tipsList,
        current: index
      }
    };
    let modal = this.modalCtrl.create(TipsDetailPage, tipsData);
    modal.present();
  }

  /**
   * 查看人物详情
   */
  openProfileDetail(event: any, contact: any, type?: any) {
    event.stopPropagation();
    let contactObj;
    if (type) {  //mission or tips 的 owner
      if (type == 'mission') {
        contactObj = contact.creator_info && contact.creator_info.user_info;
        contactObj.uid = contactObj.psid;
        contactObj.work_name = contactObj.name;
      } else {
        contactObj = contact.ownerInfo;
      }
      this.events.publish(EventNameConfig.ROUTER_TO, {
        toUrl: 'contact-details',
        data: {'contact': contactObj}
      });
    } else {
      this.events.publish(EventNameConfig.ROUTER_TO, {
        toUrl: 'contact-details',
        data: {'contact': this.clone(contact)}
      });
    }
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
}
