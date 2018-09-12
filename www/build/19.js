webpackJsonp([19],{

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/11.
 */
const core_1 = __webpack_require__(0);
const ionic_angular_1 = __webpack_require__(6);
const mission_list_1 = __webpack_require__(392);
const shared_module_1 = __webpack_require__(58);
let MissionListPageModule = class MissionListPageModule {
};
MissionListPageModule = __decorate([
    core_1.NgModule({
        declarations: [
            mission_list_1.MissionListPage,
        ],
        imports: [
            ionic_angular_1.IonicPageModule.forChild(mission_list_1.MissionListPage),
            shared_module_1.SharedModule
        ]
    })
], MissionListPageModule);
exports.MissionListPageModule = MissionListPageModule;
//# sourceMappingURL=mission-list.module.js.map

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(0);
const ionic_angular_1 = __webpack_require__(6);
const mission_model_service_1 = __webpack_require__(216);
const MissionConfig = __webpack_require__(214);
let MissionListPage = class MissionListPage {
    constructor(navCtrl, missionModelService, loadingCtrl, config, dateService) {
        this.navCtrl = navCtrl;
        this.missionModelService = missionModelService;
        this.loadingCtrl = loadingCtrl;
        this.config = config;
        this.dateService = dateService;
        //类型选择
        this.missionType = 'all';
        //状态选择
        this.missionStatus = 'all';
        this.missionObjList = [];
        //mission的type
        this.filterMissionTypeDefault = MissionConfig.MISSION_TYPE_ALL;
        //删选自己
        this.filterIsSelfDefault = '-1';
        this.currentTypeIdx = -1; //-1是all
        //搜索mission
        this.missionKeywords = '';
        this.progress = 'all';
    }
    ngOnInit() {
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
    initTplFilter() {
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
    segmentChanged(progress) {
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
    clickSwitchType(event, slide, i) {
        event.stopPropagation();
        if (this.currentTypeIdx === i) {
            this.currentTypeIdx = -1;
        }
        else {
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
    presentLoading(content, spinner) {
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
    dismissLoading() {
        this.loading.dismiss();
    }
    /**
     * 请求mission list接口
     */
    fetchMissionListInterface(refresher) {
        this.presentLoading();
        let request = () => {
            return new Promise((resolve, reject) => {
                this.missionModelService.getMissionList({
                    data: {
                        mode: MissionConfig.MISSION_MODE_SCHEDULE,
                        filter: this.tplFilterData,
                        search_keyword: this.missionKeywords ? this.missionKeywords : ''
                    }
                }, (response) => {
                    this.dismissLoading();
                    if (response.status === 1) {
                        return resolve(response);
                    }
                    else {
                        return reject(new Error(response.message));
                    }
                });
            });
        };
        request().then((response) => {
            if (response.hasOwnProperty('data') && response.data.hasOwnProperty('missions_schedule')) {
                let resData = response.data;
                this.missionObjList = [];
                let missionObjList = [];
                for (let j in resData.missions_schedule) {
                    if (resData.missions_schedule.hasOwnProperty(j)) {
                        let missionObj = this.initTipsMission();
                        this.dealMission(missionObj, resData.missions_schedule[j]);
                        missionObjList.push(missionObj);
                    }
                }
                this.missionObjList = this.missionObjList.concat(missionObjList);
            }
            if (refresher) {
                refresher.complete();
            }
        }).catch((error) => {
            console.log(error);
        });
    }
    /**
     * 初始化mission
     * @returns {TipsMission}
     */
    initTipsMission() {
        let obj = {
            created_timestamp: 0,
            createDetailTime: '',
            has_alarm: 0,
            alarm_id: '',
            type: '',
            effective_time: '',
            effective_time_display: '',
            creator_info: {
                user_info: {
                    work_name: '',
                    user_profile_path: '',
                    uid: ''
                }
            },
            name: '',
            status: '',
            id: '',
            real_start_timestamp: 0,
            real_end_timestamp: 0,
            level: '',
            startShow: {
                day: '',
                month: '',
                hour: ''
            },
            endShow: {
                day: '',
                month: '',
                hour: ''
            },
            missionType: '',
            description: '',
            endIsPending: false,
            // 时间进度条相关信息
            todoProgressTime: '',
            doingProgressTime: '',
            doneProgressTime: '',
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
        };
        return obj;
    }
    /**
     *前端用tips mission 对象
     * @param missionObj
     * @param tipsObj
     * @returns {TipsMission}
     */
    dealMission(missionObj, tipsObj) {
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
    calculateProgress(tplObj) {
        // 对于开始时间，首先检查是否有连接其他mission
        let lInfo = tplObj.link_info;
        //如果有, 开始时间为连接到该mission的link
        if (lInfo.hasOwnProperty('before') && Array.isArray(lInfo.before) && lInfo.hasOwnProperty('0') && (typeof lInfo.before[0] !== 'undefined')) {
            let beforeMission = lInfo.before[0];
            tplObj.startIsLink = true;
            tplObj.initStartLinkInfo(beforeMission);
        }
        else {
            let startTime = 0;
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
            && tplObj.mission_status !== MissionConfig.MISSION_STATUS_STORAGE) {
            tplObj.endIsPending = true;
        }
        else {
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
                }
                else {
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
                }
                else {
                    // 那么取
                    let diffInfoDoing = this.dateDiff(nowDate, tplObj.real_start);
                    tplObj.doingProgressTime = diffInfoDoing.gapTime + diffInfoDoing.diffUnit;
                    let diffInfoTodo = this.dateDiff(endDate, tplObj.real_start);
                    tplObj.todoProgressTime = diffInfoTodo.gapTime + diffInfoTodo.diffUnit;
                    let p = diffInfoDoing.gapTime / diffInfoTodo.gapTime * 100;
                    if (p < 0) {
                        p = 0;
                    }
                    else if (p > 100) {
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
    dateDiff(d2, d1) {
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
        }
        else if (gapTime > (3600 * 24 * 30)) {
            diffStatus = 'month';
        }
        else if (gapTime > (3600 * 24)) {
            diffStatus = 'day';
        }
        else if (gapTime < 3600) {
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
                gapTime = (d2M + 12 * d2Y) - (d1M + 12 * d1Y);
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
        };
    }
    ;
    /**
     * 获取mission类型
     * @param type
     * @param useForClass
     * @returns {string}
     */
    getTypeTitle(type, useForClass) {
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
    doInfinite(infiniteScroll) {
        console.log('Begin async operation', infiniteScroll);
        return new Promise(() => {
            this.tplFilterData.page_no_schedule = (parseInt(this.tplFilterData.page_no_schedule) + 1).toString();
            this.loadingMore(infiniteScroll);
        });
    }
    /**
     * 加载更多的mission
     * @param {InfiniteScroll} infiniteScroll
     */
    loadingMore(infiniteScroll) {
        let request = () => {
            return new Promise((resolve, reject) => {
                this.missionModelService.getMissionPagerList({
                    data: {
                        mode: MissionConfig.MISSION_MODE_SCHEDULE,
                        filter: this.tplFilterData,
                        search_keyword: this.missionKeywords ? this.missionKeywords : '',
                        filter_status: ''
                    }
                }, (response) => {
                    if (response.status === 1) {
                        return resolve(response);
                    }
                    else {
                        reject(new Error(response.message));
                    }
                });
            });
        };
        request().then((response) => {
            if (response.hasOwnProperty('data') && Array.isArray(response.data)) {
                let resData = response.data;
                let missionObjList = [];
                for (let j in resData) {
                    if (resData.hasOwnProperty(j)) {
                        let missionObj = this.initTipsMission();
                        this.dealMission(missionObj, resData[j]);
                        missionObjList.push(missionObj);
                    }
                }
                this.missionObjList = this.missionObjList.concat(missionObjList);
            }
            else {
                infiniteScroll.enable(false);
            }
            infiniteScroll.complete();
        }).catch((error) => {
            console.log(error);
        });
    }
    /**
     * 向上拉 刷新页面
     * @param refresher
     */
    doRefresh(refresher) {
        // console.log('Begin async operation', refresher);
        return new Promise(() => {
            this.initTplFilter();
            this.fetchMissionListInterface(refresher);
        });
    }
    /**
     * filter mission 的类型
     * @param slide
     */
    filterType(slide) {
        if (this.currentTypeIdx === -1) {
            this.missionType = 'all';
        }
        else {
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
};
MissionListPage = __decorate([
    core_1.Component({template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/mission/mission-list.html"*/'<ion-header>\n  <ion-navbar>\n    <bi-logo></bi-logo>\n    <bi-notice></bi-notice>\n    <bi-search></bi-search>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="mission-content">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n  <!--progress-->\n  <ion-segment [(ngModel)]="progress" color="primary" (ionChange)="segmentChanged($event)">\n    <ion-segment-button value="todo" class="mission-progress">\n      <span class="bi-icon-to-do"></span>\n      <div class="mission-progress-tit">TO DO</div>\n    </ion-segment-button>\n    <ion-segment-button value="doing" class="mission-progress">\n      <span class="bi-icon-doing"></span>\n      <div class="mission-progress-tit">\n        DOING\n      </div>\n    </ion-segment-button>\n    <ion-segment-button value="done" class="mission-progress">\n      <span class="bi-icon-done"></span>\n      <div class="mission-progress-tit">\n        DONE\n      </div>\n    </ion-segment-button>\n  </ion-segment>\n\n\n  <!--type-->\n  <ion-slides slidesPerView="4" class="type-menu">\n    <ion-slide class="type-slide"\n               *ngFor="let slide of typeSlides; let i=index;"\n               [class.type-slide-active]="currentTypeIdx===i"\n               (click)="clickSwitchType($event,slide,i)"\n    >\n      <span class="bi-icon-ctrl bi-icon-resume"></span>\n      <div class="mission-progress-tit">\n        {{slide.name}}\n      </div>\n    </ion-slide>\n\n  </ion-slides>\n\n  <!--mission card-->\n\n  <div *ngFor="let missionObj of missionObjList">\n    <div *ngIf="missionObj.type===missionType || missionType===\'all\'">\n      <ion-card class="tips-item"\n                *ngIf="missionObj.status === missionStatus || missionStatus===\'all\'"\n      >\n        <!--mission start-->\n        <ion-item>\n          <ion-avatar item-start>\n            <img src="{{config.resourceDomain}}{{missionObj.creator_info && missionObj.creator_info.user_info\n                    &&  missionObj.creator_info.user_info.user_profile_path}}">\n          </ion-avatar>\n          <p>{{missionObj.name}}</p>\n          <p>\n            <ion-icon name="thumbs-up"></ion-icon>\n            <span class="tips-title">{{missionObj.missionType}}</span>\n            <span class="tips-title">{{missionObj.createDetailTime}}</span>\n          </p>\n        </ion-item>\n        <ion-item>\n          <!--mission 进度条-->\n          <div class="clearfix">\n            <bi-mission-progress class="mission-progress" [eleData]="missionObj"></bi-mission-progress>\n          </div>\n          <ion-row>\n            <ion-col left>\n              <p>Begin it from</p>\n              <h2 class="time-day">{{missionObj.startShow.day}}</h2>\n              <div class="time-hour">\n                <p>{{missionObj.startShow.month}}</p>\n                <p>{{missionObj.startShow.hour}}</p>\n              </div>\n            </ion-col>\n            <div text-center class="time-icon">\n              <span class="bi-icon-arrow3"></span>\n            </div>\n            <ion-col right>\n              <p>End</p>\n              <div *ngIf="!missionObj.endIsPending">\n                <h2 class="time-day">{{missionObj.endShow.day}}</h2>\n                <div class="time-hour">\n                  <p>{{missionObj.endShow.month}}</p>\n                  <p>{{missionObj.endShow.hour}}</p>\n                </div>\n              </div>\n              <div *ngIf="missionObj.endIsPending">\n                PENDING\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n        <!--mission end-->\n      </ion-card>\n    </div>\n\n  </div>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content\n      loadingSpinner="bubbles">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/mission/mission-list.html"*/
    }),
    __param(3, core_1.Inject('app.config')),
    __param(4, core_1.Inject('date.service')),
    __metadata("design:paramtypes", [ionic_angular_1.NavController,
        mission_model_service_1.MissionModelService,
        ionic_angular_1.LoadingController, Object, Object])
], MissionListPage);
exports.MissionListPage = MissionListPage;
//# sourceMappingURL=mission-list.js.map

/***/ })

});
//# sourceMappingURL=19.js.map