import {Component, Inject, OnInit} from "@angular/core";
import {InfiniteScroll, IonicPage, Loading, LoadingController, NavController, Segment, Refresher} from "ionic-angular";
import {MissionModelService} from "../../share/service/model/mission-model.service";
import * as MissionConfig from "../../share/config/mission.config";
import {MissionDetail, MissionListFilter} from "../../share/entity/mission-entity";
import {TipsMission} from "../../share/entity/user-entity";

@IonicPage({
  name: 'mission-list',
  segment: 'mission-list'
})
@Component({
  templateUrl: 'mission-list.html'
})
export class MissionListPage implements OnInit {
  //类型选择
  missionType: string = 'all';
  //状态选择
  missionStatus: string = 'all';
  missionObjList: TipsMission[] = [];
  //mission的type
  filterMissionTypeDefault: string = MissionConfig.MISSION_TYPE_ALL;
  //删选自己
  filterIsSelfDefault: string = '-1';
  loading: Loading;
  currentTypeIdx: number = -1; //-1是all
  //搜索mission
  public missionKeywords: string = '';

  public progress: string = 'all';

  public typeSlides: Array<{
    name: string,
    cls: string
  }>;

  // filter相关
  public tplFilterData: MissionListFilter;

  constructor(public navCtrl: NavController,
              public missionModelService: MissionModelService,
              public loadingCtrl: LoadingController,
              @Inject('app.config') public config: any,
              @Inject('date.service') public dateService: any,) {

  }

  ngOnInit(): void {
    this.typeSlides = [
      {
        name: 'Project',
        cls: ''
      },
      {
        name: 'Application',
        cls: ''
      },
      {
        name: 'Task',
        cls: ''
      },
      {
        name: 'Assignment',
        cls: ''
      },
      {
        name: 'Meeting',
        cls: ''
      },
    ];

    this.initTplFilter();
    this.fetchMissionListInterface();
  }

  private initTplFilter(): void {
    this.filterMissionTypeDefault = MissionConfig.MISSION_TYPE_ALL;
    this.filterIsSelfDefault = '-1';
    this.progress = 'all';
    this.currentTypeIdx = -1;
    this.tplFilterData = {
      type: [this.filterMissionTypeDefault],
      is_self: this.filterIsSelfDefault,
      page_no_todo: '1',
      page_no_doing: '1',
      page_no_done: '1',
      page_no_storage: '1',
      page_no_schedule: '1',
      current_date: new Date().toUTCString(),
      page_no_pause: '1',
    };
  }

  public segmentChanged(progress: Segment): void {
    switch (progress.value) {
      case 'all':
        this.missionStatus = 'all';
        break;
      case 'todo':
        this.missionStatus = MissionConfig.MISSION_STATUS_TODO;
        break;
      case 'doing':
        this.missionStatus = MissionConfig.MISSION_STATUS_DOING;
        break;
      case 'done':
        this.missionStatus = MissionConfig.MISSION_STATUS_DONE;
        break;
    }
    //重置status filter
    this.currentTypeIdx = -1;
    this.missionType = 'all';
    this.progress = 'all';
  }

  /**
   * 设置filter mission type
   * @param event
   * @param data
   */
  // setFilterMissionType(event: any, data: string) {
  //   event.stopPropagation();
  //   if (data != this.tplFilterData.type[0]) {
  //     this.filterHasChanged = true;
  //     this.resetFilter();
  //   }
  //   this.tplFilterData.type = [data];
  //   this.setFilterTypeTitle();
  //   if (this.showMissionListTable) {
  //     this.fetchMissionTableInterface();
  //   } else {
  //     this.initMission();
  //   }
  // }

  /**
   *
   * @param {MouseEvent} event
   * @param slide
   * @param {number} i
   */
  public clickSwitchType(event: MouseEvent, slide: {
    name: string,
    cls: string
  }, i: number): void {
    event.stopPropagation();
    if (this.currentTypeIdx === i) {
      this.currentTypeIdx = -1;
    } else {
      this.currentTypeIdx = i;
    }
    this.filterType(slide);
  }


  /**
   * 加载器
   * 开始加载
   * @param content 内容
   * @param spinner
   */
  public presentLoading(content?: string, spinner?: string): void {
    if (!content) {
      content = 'Please Wait...';
    }
    if (!spinner) {
      spinner = 'bubbles';
    }
    this.loading = this.loadingCtrl.create({
      content: content,
      spinner: spinner
    });

    this.loading.present();
  }

  /**
   * 结束加载
   */
  public dismissLoading(): void {
    this.loading.dismiss();
  }

  /**
   * 请求mission list接口
   */
  private fetchMissionListInterface(refresher?: Refresher): void {
    this.presentLoading();
    let request = () => {
      return new Promise((resolve, reject) => {
        this.missionModelService.getMissionList({
          data: {
            mode: MissionConfig.MISSION_MODE_SCHEDULE,
            filter: this.tplFilterData,
            search_keyword: this.missionKeywords ? this.missionKeywords : ''
          }
        }, (response: any) => {
          this.dismissLoading();
          if (response.status === 1) {
            return resolve(response);
          } else {
            return reject(new Error(response.message));
          }
        });
      });
    };
    request().then((response: any) => {
      if (response.hasOwnProperty('data') && response.data.hasOwnProperty('missions_schedule')) {
        let resData = response.data;
        this.missionObjList = [];
        let missionObjList = [];
        for (let j in resData.missions_schedule) {
          if (resData.missions_schedule.hasOwnProperty(j)) {

            let missionObj: MissionDetail = this.initTipsMission();
            this.dealMission(missionObj, resData.missions_schedule[j]);
            missionObjList.push(missionObj);
          }
        }
        this.missionObjList = this.missionObjList.concat(missionObjList);
      }
      if (refresher) {
        refresher.complete();
      }
    }).catch((error: Error) => {
      console.log(error);
    })

  }


  /**
   * 初始化mission
   * @returns {TipsMission}
   */
  public initTipsMission(): TipsMission {
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
        FillColorLine: '#FBFBFE',
      }
    ;
    return obj;
  }

  /**
   *前端用tips mission 对象
   * @param missionObj
   * @param tipsObj
   * @returns {TipsMission}
   */
  public dealMission(missionObj: TipsMission, tipsObj: any): void {
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
    if (lInfo.hasOwnProperty('before') && Array.isArray(lInfo.before) && lInfo.hasOwnProperty('0') && (typeof lInfo.before[0] !== 'undefined')) {
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
          startTime = parseInt(tplObj.start_timestamp);
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
   * 获取mission类型
   * @param type
   * @param useForClass
   * @returns {string}
   */
  public getTypeTitle(type: any, useForClass?: boolean): string {
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
   * 向下滚动加载
   * @param {InfiniteScroll} infiniteScroll
   * @returns {Promise<any>}
   */
  public doInfinite(infiniteScroll: InfiniteScroll) {
    console.log('Begin async operation', infiniteScroll);
    return new Promise(() => {
      this.tplFilterData.page_no_schedule = (parseInt(this.tplFilterData.page_no_schedule) + 1).toString();

      this.loadingMore(infiniteScroll);
    })


  }

  /**
   * 加载更多的mission
   * @param {InfiniteScroll} infiniteScroll
   */
  private loadingMore(infiniteScroll: InfiniteScroll): void {
    let request = () => {
      return new Promise((resolve, reject) => {
        this.missionModelService.getMissionPagerList({
          data: {
            mode: MissionConfig.MISSION_MODE_SCHEDULE,
            filter: this.tplFilterData,
            search_keyword: this.missionKeywords ? this.missionKeywords : '',
            filter_status: ''
          }
        }, (response: any) => {
          if (response.status === 1) {
            return resolve(response);
          } else {
            reject(new Error(response.message));
          }

        })
      })
    };

    request().then((response: any) => {
      if (response.hasOwnProperty('data') && Array.isArray(response.data)) {
        let resData = response.data;
        let missionObjList = [];
        for (let j in resData) {
          if (resData.hasOwnProperty(j)) {
            let missionObj: MissionDetail = this.initTipsMission();
            this.dealMission(missionObj, resData[j]);
            missionObjList.push(missionObj);
          }
        }
        this.missionObjList = this.missionObjList.concat(missionObjList);
      } else {
        infiniteScroll.enable(false);
      }
      infiniteScroll.complete();
    }).catch((error: Error) => {
      console.log(error)
    })
  }


  /**
   * 向上拉 刷新页面
   * @param refresher
   */
  public doRefresh(refresher): Promise<any> {
    // console.log('Begin async operation', refresher);
    return new Promise(() => {
      this.initTplFilter();
      this.fetchMissionListInterface(refresher);
    })

  }


  /**
   * filter mission 的类型
   * @param slide
   */
  private filterType(slide: { name: string; cls: string }): void {
    if (this.currentTypeIdx === -1) {
      this.missionType = 'all';
    } else {
      switch (slide.name) {
        case 'Project':
          this.missionType = MissionConfig.MISSION_TYPE_PROJECT;
          break;
        case 'Application':
          this.missionType = MissionConfig.MISSION_TYPE_APPLICATION;
          break;
        case 'Task':
          this.missionType = MissionConfig.MISSION_TYPE_TASK;
          break;
        case 'Assignment':
          this.missionType = MissionConfig.MISSION_TYPE_ASSIGNMENT;
          break;
        case 'Meeting':
          this.missionType = MissionConfig.MISSION_TYPE_MEETING;
          break;
      }
    }

  }
}
