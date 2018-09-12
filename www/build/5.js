webpackJsonp([5],{

/***/ 332:
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
//home.module.ts
const core_1 = __webpack_require__(0);
const home_1 = __webpack_require__(388);
const shared_module_1 = __webpack_require__(58);
const ionic_angular_1 = __webpack_require__(6);
const home_tips_1 = __webpack_require__(389);
let HomePageModule = class HomePageModule {
};
HomePageModule = __decorate([
    core_1.NgModule({
        declarations: [home_1.HomePage, home_tips_1.HomeTipsComponent],
        imports: [
            shared_module_1.SharedModule,
            ionic_angular_1.IonicPageModule.forChild(home_1.HomePage),
        ]
    })
], HomePageModule);
exports.HomePageModule = HomePageModule;
//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 360:
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
const base_model_service_1 = __webpack_require__(43);
const api_service_1 = __webpack_require__(30);
core_1.Injectable();
let AlarmModelService = class AlarmModelService extends base_model_service_1.BaseModelService {
    constructor(api) {
        super(api);
        this.api = api;
    }
    //添加闹钟
    alarmAdd(data, callback) {
        return this.getData('alarmAdd', data, callback);
    }
    //删除闹钟
    alarmDelete(data, callback) {
        return this.getData('alarmDelete', data, callback);
    }
    //修改闹钟
    alarmUpdate(data, callback) {
        return this.getData('alarmUpdate', data, callback);
    }
};
AlarmModelService = __decorate([
    __param(0, core_1.Inject(api_service_1.ApiService)),
    __metadata("design:paramtypes", [api_service_1.ApiService])
], AlarmModelService);
exports.AlarmModelService = AlarmModelService;
//# sourceMappingURL=alarm-model.service.js.map

/***/ }),

/***/ 365:
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
const public_select_1 = __webpack_require__(213);
const user_model_service_1 = __webpack_require__(57);
const event_name_config_1 = __webpack_require__(15);
const forms_1 = __webpack_require__(12);
const alarm_model_service_1 = __webpack_require__(360);
/**
 * Generated class for the NewTipsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let NewTipsPage = class NewTipsPage {
    constructor(navCtrl, modalCtrl, alertCtrl, formBuilder, userService, navParams, event, config, dateService, alarmModelService, userModelService) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.navParams = navParams;
        this.event = event;
        this.config = config;
        this.dateService = dateService;
        this.alarmModelService = alarmModelService;
        this.userModelService = userModelService;
        this.content = '';
        this.updateTips = false;
        this.currentIndex = -1;
        this.selectedArr = [];
        this.shareToArr = [];
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
            this.optionData.tipData.data.sharedToInfoList.forEach((item) => {
                let tmp = this.initDropDownModel();
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
        }
        else {
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
    showPublicSelect(event) {
        if (event) {
            event.stopPropagation();
        }
        let modal = this.modalCtrl.create(public_select_1.PublicSelectComponent, {
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
        this.userService.getContactList((contactList) => {
            if (contactList) {
                this.contactList = contactList;
                console.log('从本地缓存获取联系人列表', this.contactList);
                this.buildForDropDownData();
            }
            //将当前用户信息添加
        });
    }
    /**
     * 生成dropDown数据对象
     */
    buildForDropDownData() {
        this.inviteDropDownObj = {
            groupObj: {},
            settings: {},
        };
        let settings = this.initDropDownSetting();
        settings.group.push({ key: 'personal', 'title': 'Personal' }, { key: 'business', 'title': 'Business' });
        settings.childGroup.push({ key: 'friend', 'title': 'Friend', parentKey: 'personal' });
        let inviteFriendList = [];
        this.dealDropdownObj('Friend', 'personal', 'friend', inviteFriendList);
        settings.childGroup.push({ key: 'cooperator', 'title': 'Cooperator', parentKey: 'business' });
        let cooperatorList = [];
        this.dealDropdownObj('Cooperator', 'business', 'cooperator', cooperatorList);
        settings.childGroup.push({ key: 'internal', 'title': 'Internal', parentKey: 'business' });
        let internalList = [];
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
    dealDropdownObj(key, group, childGroup, listObj) {
        console.log('生成dropdown 对象', this.contactList);
        this.contactList[key].forEach((item) => {
            let tmp = this.initDropDownModel();
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
        }
        else {
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
            this.userModelService.updateTips({ data: sendObj }, (response) => {
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
                                    this.event.publish(event_name_config_1.EventNameConfig.UPDATE_TIPS, {
                                        param: 'update-tips',
                                        data: { tips: this.optionData.tipData.data, currentIndex: this.currentIndex }
                                    });
                                }
                            }
                        ]
                    });
                    alert.present();
                }
                else {
                    alert('update fail');
                }
            });
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
            'promoted': true,
            'created': new Date().getTime(),
            'rid': ''
        };
        console.log(sendObj, 'send to new tips');
        this.userModelService.newTips({ data: sendObj }, (response) => {
            if (response && response.hasOwnProperty('status') && response.status == 1) {
                if (response.hasOwnProperty('data')) {
                    sendObj.rid = response.data;
                    this.goBack.nativeElement.click();
                    console.log(response, "tips add");
                    //事件传出数据
                    this.event.publish(event_name_config_1.EventNameConfig.ADD_TIPS, { param: 'home-tips', data: sendObj });
                }
            }
            else {
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
            id: '',
            isCurrent: false,
            hasFiltered: false,
            key: '',
            label: '',
            imageLabel: '',
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
    onDeleteShareTo(event, index) {
        if (event) {
            event.stopPropagation();
        }
        this.shareToArr.splice(index, 1);
        this.selectedArr.splice(index, 1);
    }
    initForm() {
        this.fGroup = this.formBuilder.group({
            'fContent': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(200)])],
        });
    }
    get fContent() {
        return this.fGroup.get('fContent');
    }
    /**
     * 选人发生变化
     */
    selectedChange(data) {
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
};
__decorate([
    core_1.ViewChild('goBack'),
    __metadata("design:type", Object)
], NewTipsPage.prototype, "goBack", void 0);
__decorate([
    core_1.ViewChild('time'),
    __metadata("design:type", Object)
], NewTipsPage.prototype, "time", void 0);
NewTipsPage = __decorate([
    core_1.Component({
        selector: 'page-new-tips',template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/tips-new/tips-new.html"*/'<!--\n  Generated template for the NewTipsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar class="g-header clearfix">\n            <span class="bi-icon-down back" navPop #goBack></span>\n            <span class="g-header-title">{{updateTips ? \'EDIT TIPS\' : \'NEW TIPS\'}}</span>\n            <span class="send" (click)="sendTo($event)">SEND</span>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="new-tips">\n    <form [formGroup]="fGroup">\n        <div class="g-title f9-f">SHARE TO</div>\n\n        <public-select-interface\n                (outPutSelectChange) = selectedChange($event)\n                [selectedOption] = selectedArr\n                [dropDownOption]="inviteDropDownObj">\n        </public-select-interface>\n        <div class="g-title f9-f g-margin-top20">CONTENT</div>\n        <div class="g-title-content">\n            <ion-input type="text" [(ngModel)]="content" class="f19-f" formControlName="fContent"></ion-input>\n        </div>\n        <div *ngIf="fContent.invalid && (fContent.dirty || fContent.touched || hasClickOnSend)"\n             text-left\n             class="input-error-msg">\n            <div *ngIf="fContent.errors.required">content is required.</div>\n            <div *ngIf="fContent.errors.maxlength" >\n                The length of the content must be between 1 and 200.\n            </div>\n        </div>\n    </form>\n        <div class="g-remove-btn g-margin-top20 g-background-b2-c">SET ALARM</div>\n        <div class="alarm-wrap">\n            <ion-datetime displayFormat="YYYY-MM-DD HH:mm" class="f19-f" [(ngModel)]="alarmTime" (ngModelChange)="setTipsAlarm()"></ion-datetime>\n        </div>\n        <div class="g-remove-btn g-margin-top20 tip-detail-remove" *ngIf="updateTips">REMOVE TIPS</div>\n</ion-content>\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/tips-new/tips-new.html"*/,
        providers: [alarm_model_service_1.AlarmModelService]
    }),
    __param(4, core_1.Inject('user.service')),
    __param(7, core_1.Inject('app.config')),
    __param(8, core_1.Inject('date.service')),
    __metadata("design:paramtypes", [typeof (_a = typeof ionic_angular_1.NavController !== "undefined" && ionic_angular_1.NavController) === "function" && _a || Object, typeof (_b = typeof ionic_angular_1.ModalController !== "undefined" && ionic_angular_1.ModalController) === "function" && _b || Object, typeof (_c = typeof ionic_angular_1.AlertController !== "undefined" && ionic_angular_1.AlertController) === "function" && _c || Object, typeof (_d = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _d || Object, Object, typeof (_e = typeof ionic_angular_1.NavParams !== "undefined" && ionic_angular_1.NavParams) === "function" && _e || Object, typeof (_f = typeof ionic_angular_1.Events !== "undefined" && ionic_angular_1.Events) === "function" && _f || Object, Object, Object, typeof (_g = typeof alarm_model_service_1.AlarmModelService !== "undefined" && alarm_model_service_1.AlarmModelService) === "function" && _g || Object, typeof (_h = typeof user_model_service_1.UserModelService !== "undefined" && user_model_service_1.UserModelService) === "function" && _h || Object])
], NewTipsPage);
exports.NewTipsPage = NewTipsPage;
var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=tips-new.js.map

/***/ }),

/***/ 376:
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
const user_model_service_1 = __webpack_require__(57);
const tips_new_1 = __webpack_require__(365);
const event_name_config_1 = __webpack_require__(15);
/**
 * Generated class for the TipsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let TipsDetailPage = class TipsDetailPage {
    constructor(navCtrl, userModelService, events, config, modalCtrl, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.userModelService = userModelService;
        this.events = events;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.tipsList = [];
        this.currentIndex = -1;
        this.tab = 'all';
        this.noData = false;
        if (this.navParams.data && this.navParams.data.tipData) {
            if (this.navParams.data.tipData.hasOwnProperty('tipsList')) {
                this.tipsList = this.navParams.data.tipData.tipsList;
            }
            if (this.navParams.data.tipData.hasOwnProperty('current')) {
                this.currentIndex = this.navParams.data.tipData.current;
                this.currentTips = this.tipsList[this.currentIndex];
            }
        }
    }
    ionViewDidLoad() {
        this.slides.coverflow.rotate = 10;
        console.log('ionViewDidLoad TipsDetailPage');
        this.dealEvent();
    }
    /**
     * 处理接受事件
     */
    dealEvent() {
        //接收消息
        this.events.subscribe(event_name_config_1.EventNameConfig.UPDATE_TIPS, (param) => {
            let data = param.param;
            switch (data) {
                case 'update-tips':
                    this.tipsList[param.data.currentIndex].content = param.data.tips.content;
                    console.log('update tips::', this.tipsList[param.data.currentIndex].content, param.data);
                    break;
            }
        });
    }
    ngOnDestroy() {
        this.events.unsubscribe(event_name_config_1.EventNameConfig.UPDATE_TIPS);
    }
    /**
     * 滑动下一个
     */
    clickNext() {
        if (this.currentIndex < this.tipsList.length - 1) {
            this.currentIndex++;
        }
    }
    /**
     * 滑动上一个
     */
    clickPre() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        }
    }
    /**
     * 点击tip
     * @param event
     */
    onClickTips(event, type) {
        if (event) {
            event.stopPropagation();
        }
        //
        if (type == 'tips') {
            this.tab = 'tips';
            this.slides.slideTo(0);
            this.currentIndex = this.findFirstIndex('tips');
            if (this.findFirstIndex('tips') == -1) {
                this.noData = true;
            }
            else {
                this.noData = false;
            }
            this.slides.slideTo(0);
        }
        else if (type == 'all') {
            this.tab = 'all';
        }
        else if (type == 'mission') {
            this.tab = 'mission';
            this.slides.slideTo(0);
            this.currentIndex = this.findFirstIndex('mission');
            if (this.findFirstIndex('mission') == -1) {
                this.noData = true;
            }
            else {
                this.noData = false;
            }
        }
    }
    /**
     * 查找第一个tips ， mission所在的索引
     * @param type
     * @returns {number}
     */
    findFirstIndex(type) {
        //是tips true ， mission false
        if (this.tipsList[0]) {
            let first = this.tipsList[0].hasOwnProperty('form');
            if (first) {
                if (type == 'tips') {
                    return 0;
                }
                else {
                    for (let i = 0; i < this.tipsList.length; i++) {
                        if (!this.tipsList[i].hasOwnProperty('form')) {
                            return i;
                        }
                    }
                    return -1;
                }
            }
            else {
                if (type == 'mission') {
                    return 0;
                }
                else {
                    for (let i = 0; i < this.tipsList.length; i++) {
                        if (this.tipsList[i].hasOwnProperty('form')) {
                            return i;
                        }
                    }
                    return -1;
                }
            }
        }
        else {
            return -1;
        }
    }
    /**
     * 删除tips
     * @param tips
     * @param index
     */
    onDeleteTips(tips, index) {
        //弹出confirm框
        let confirm = this.alertCtrl.create({
            title: 'confirm delete tip',
            message: 'Do you want to delete this tip?',
            buttons: [
                {
                    text: 'CANCEL',
                },
                {
                    text: 'DELETE',
                    handler: () => {
                        this.userModelService.deleteTips({ data: { tip_id: tips.rid } }, (response) => {
                            if (response && response.status == 1) {
                                this.tipsList.splice(index, 1);
                                if (index == this.tipsList.length) {
                                    if (this.tipsList.length == 0) {
                                        this.noData = true;
                                        this.slides.slideTo(0);
                                    }
                                    else {
                                        this.slides.slidePrev();
                                    }
                                }
                            }
                        });
                    }
                }
            ]
        });
        confirm.present();
    }
    /**
     * todo:owner是本人可以修改，增加couldEdit
     * @param event
     * @param tips
     * @param index
     */
    onEditTips(event, tips, index) {
        if (event) {
            event.stopPropagation();
        }
        let tipsData = {
            isShowChannel: false,
            tipData: {
                updateTips: true,
                data: tips,
                currentIndex: index
            }
        };
        let modal = this.modalCtrl.create(tips_new_1.NewTipsPage, tipsData);
        modal.present();
    }
    /**
     * 查看人物详情
     */
    openProfileDetail(contact, type) {
        let contactObj;
        if (type) {
            if (type == 'mission') {
                contactObj = contact.creator_info && contact.creator_info.user_info;
                /* contactObj.uid = contactObj.psid;*/
            }
            else {
                contactObj = contact.ownerInfo;
            }
            this.events.publish(event_name_config_1.EventNameConfig.ROUTER_TO, {
                toUrl: 'contact-details',
                data: { 'contactId': contactObj.uid, 'contact': contactObj }
            });
        }
        else {
            this.events.publish(event_name_config_1.EventNameConfig.ROUTER_TO, {
                toUrl: 'contact-details',
                data: { 'contactId': contact.uid, 'contact': contact }
            });
        }
    }
    /**
     * 点击向上一个翻
     * @param event
     */
    onClickPre(event) {
        event.stopPropagation();
        if (!this.slides.isBeginning()) {
            this.slides.slidePrev();
        }
    }
    /**
     * 点击向下一个翻
     * @param event
     */
    onClickNext(event) {
        event.stopPropagation();
        if (!this.slides.isEnd()) {
            this.slides.slideNext();
        }
    }
};
__decorate([
    core_1.ViewChild('mySlides'),
    __metadata("design:type", ionic_angular_1.Slides)
], TipsDetailPage.prototype, "slides", void 0);
TipsDetailPage = __decorate([
    core_1.Component({
        selector: 'page-tips-detail',template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/tips-detail/tips-detail.html"*/'<!--\n  Generated template for the TipsDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="g-header clearfix g-header-dark">\n        <ion-navbar class="g-header clearfix">\n            <span class="bi-icon-down back" navPop></span>\n            <span class="g-header-title">TIPS DETAIL</span>\n            <span class="bi-icon-esc g-header-esc"></span>\n        </ion-navbar>\n</ion-header>\n<ion-content>\n    <!--菜单栏部分-->\n    <ion-row class="tips-detail-menu" margin-right margin-left margin-top>\n        <ion-col col-12>\n            <ion-segment [(ngModel)]="tab">\n                <ion-segment-button value="tips" checked (click)="onClickTips($event,\'tips\')">\n                    Tips\n                </ion-segment-button>\n                <ion-segment-button  value="all" (click)="onClickTips($event,\'all\')">\n                    All\n                </ion-segment-button>\n                <ion-segment-button value="mission" (click)="onClickTips($event,\'mission\')">\n                    Mission\n                </ion-segment-button>\n            </ion-segment>\n        </ion-col>\n    </ion-row>\n    <!--<span class="tips-detail-slides tips-detail-slides-left"></span>-->\n    <!--<span class="tips-detail-slides tips-detail-slides-right"></span>-->\n    <ion-slides initialSlide="{{currentIndex}}" effect="slide" spaceBetween="-40" (ionSlideNextStart)="clickNext()" (ionSlidePrevStart)="clickPre()" #mySlides>\n        <div *ngFor="let tips of tipsList;let j = index">\n            <!--tips start-->\n            <ion-slide class="tips-detail-content" *ngIf="tips.hasOwnProperty(\'form\') && tab!=\'mission\'">\n                <div class="tips-detail-content-warp">\n                    <!--删除tips-->\n                    <span class="bi-icon-remove tips-delete-icon" (click)="onDeleteTips(tips,j)"></span>\n                    <!--显示闹钟-->\n                    <span class="tips-alarm f5-f2">Alarm:11:02 20/02/2017</span>\n                    <!--message-->\n                    <div class="tips-detail-title">\n                        <span class="f34-f">TIPS</span>\n                        <span class="bi-icon-new-tips tips-detail-icon"></span>\n                    </div>\n                    <ion-item class="tips-detail-user">\n                        <ion-avatar item-start (click)="openProfileDetail(tips,\'owner\')">\n                            <img class="g-user-profile34" src="{{config.resourceDomain}}{{tips.ownerInfo && tips.ownerInfo.user_profile_path}}">\n                        </ion-avatar>\n                        <p class="f19-f g-color-b8-c">{{tips.ownerInfo && tips.ownerInfo.work_name}}</p>\n                        <p class="f3-f">\n                            tips\n                        </p>\n                    </ion-item>\n                    <div class="tips-detail-message f9-f">MESSAGE</div>\n                    <div class="tips-detail-message-content f19-f">\n                        {{tips.content}}\n                    </div>\n                    <!--share to-->\n                    <ion-item class="tips-detail-share-to" *ngIf="tips.couldEdit">\n                        <ion-row>\n                            <p class="f19-f2 g-margin-bottom5">SHARE TO</p>\n                        </ion-row>\n                        <ion-row>\n                            <div *ngFor="let share of tips.sharedToInfoList" (click)="openProfileDetail(share)" class="g-margin-right10">\n                                <img class="g-user-profile24" src="{{config.resourceDomain}}{{share?.user_profile_path}}" alt="" title="">\n                            </div>\n                        </ion-row>\n                        <div *ngIf="(tips.sharedToInfoList && tips.sharedToInfoList.length === 0) || !tips.sharedToInfoList">\n                            <span class="bi-icon-share-to"></span>\n                            <span class="tips-no-share f9-f3">NO ONE</span>\n                        </div>\n                    </ion-item>\n                    <!--buttom-->\n                    <button ion-button class="edit-tips g-remove-btn" (click)="onEditTips($event,tips,j)" *ngIf="tips.couldEdit">EDIT</button>\n                </div>\n            </ion-slide>\n            <!--tips end-->\n            <!--mission start-->\n            <ion-slide class="tips-detail-content g-mission-time" *ngIf="!tips.hasOwnProperty(\'form\') && tab!= \'tips\'">\n                <div class="tips-detail-content-warp">\n                    <span class="bi-icon-remove tips-delete-icon"></span>\n                    <!--message-->\n                    <div class="tips-detail-title">\n                        <span class="f34-f">MISSION</span>\n                        <ion-icon name="cafe" class="tips-detail-icon"></ion-icon>\n                    </div>\n                    <ion-item class="tips-detail-user">\n                        <ion-avatar item-start (click)="openProfileDetail(tips,\'mission\')">\n                            <img class="g-user-profile34" src="{{config.resourceDomain}}{{tips.creator_info && tips.creator_info.user_info\n                    &&  tips.creator_info.user_info.user_profile_path}}">\n                        </ion-avatar>\n                        <p class="f19-f g-color-b8-c">{{tips.name}}</p>\n                        <p class="f3-f">\n                            <ion-icon name="thumbs-up"></ion-icon>\n                            <span class="tips-title">{{tips.missionType}}</span>\n                            <span class="tips-title">{{tips.createDetailTime}}</span>\n                        </p>\n                    </ion-item>\n                    <div class="tips-detail-message f9-f">DESCRIPTION</div>\n                    <div class="tips-detail-message-content f19-f">\n                        {{tips.description}}\n                    </div>\n                    <ion-item class="progress-item">\n                        <!--mission 进度条-->\n                        <div class="clearfix">\n                            <bi-mission-progress [componentName]="\'page-tips-detail\'"  class="mission-progress" [eleData]="tips"></bi-mission-progress>\n                        </div>\n                        <ion-row>\n                            <ion-col col-5 left>\n                                <p class="f13-f">Begin it from</p>\n                                <h2 class="time-day f49-f">{{tips.startShow.day}}</h2>\n                                <div>\n                                    <p class="f32-f">{{tips.startShow.month}}</p>\n                                    <p class="f27-f">{{tips.startShow.hour}}</p>\n                                </div>\n                            </ion-col>\n                            <ion-col col-2 text-center class="time-icon">\n                                <span class="bi-icon-arrow3"></span>\n                            </ion-col>\n                            <ion-col right col-5>\n                                <p class="f13-f">End</p>\n                                <div *ngIf="!tips.endIsPending">\n                                    <h2 class="time-day f49-f">{{tips.endShow.day}}</h2>\n                                    <div class="time-hour">\n                                        <p class="f32-f">{{tips.endShow.month}}</p>\n                                        <p class="f27-f">{{tips.endShow.hour}}</p>\n                                    </div>\n                                </div>\n                                <div *ngIf="tips.endIsPending">\n                                    PENDING\n                                </div>\n                            </ion-col>\n                        </ion-row>\n                    </ion-item>\n                </div>\n            </ion-slide>\n            <!--mission end-->\n            <!--no data-->\n        </div>\n\n        <ion-slide class="tips-detail-content" *ngIf="noData">\n            NO DATA\n        </ion-slide>\n    </ion-slides>\n    <div class="bottom-btns">\n        <div (click)="onClickPre($event)">\n            <span class="bi-icon-next"></span>\n            <em>Previous</em>\n        </div>\n        <div (click)="onClickNext($event)">\n            <em>Next</em>\n            <span class="bi-icon-next"></span>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/tips-detail/tips-detail.html"*/,
    }),
    __param(3, core_1.Inject('app.config')),
    __metadata("design:paramtypes", [ionic_angular_1.NavController,
        user_model_service_1.UserModelService,
        ionic_angular_1.Events, Object, ionic_angular_1.ModalController,
        ionic_angular_1.AlertController,
        ionic_angular_1.NavParams])
], TipsDetailPage);
exports.TipsDetailPage = TipsDetailPage;
//# sourceMappingURL=tips-detail.js.map

/***/ }),

/***/ 388:
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
const tips_new_1 = __webpack_require__(365);
const event_name_config_1 = __webpack_require__(15);
let HomePage = class HomePage {
    constructor(app, events, modalCtrl, userService, userStoreService) {
        this.app = app;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.userService = userService;
        this.userStoreService = userStoreService;
        this.initDashBoard = false;
        if (!this.currentUser) {
            this.userStoreService.getCurrentUserName((v) => {
                this.currentUser = v;
            }).then().catch();
        }
    }
    ngAfterViewInit() {
        this.newTip();
    }
    newTip() {
        this.events.subscribe(event_name_config_1.EventNameConfig.NEW_TIPS, (param) => {
            let url = param.param;
            switch (url) {
                case 'new-tips':
                    console.log('home::', param);
                    let modal = this.modalCtrl.create(tips_new_1.NewTipsPage, { tips: 45454 });
                    modal.present();
                    break;
            }
        });
    }
    ngOnDestroy() {
        this.events.unsubscribe(event_name_config_1.EventNameConfig.NEW_TIPS);
    }
    ionViewDidEnter() {
        this.events.subscribe('contact-is-ready', () => {
            this.initDashBoard = true;
        });
        this.app.setTitle('Homepage');
    }
    doLogout() {
        this.userService.logoutViaAPI();
    }
    /**
     * 上拉刷新
     * @param event
     */
    doRefresh(event) {
        this.isRefresh = {
            isRefresh: true,
            refreshObj: event
        };
    }
};
__decorate([
    core_1.ViewChild('tipComponent'),
    __metadata("design:type", Object)
], HomePage.prototype, "tipComponent", void 0);
HomePage = __decorate([
    core_1.Component({template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n        <bi-logo></bi-logo>\n        <bi-notice></bi-notice>\n        <bi-search></bi-search>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n                pullingIcon="arrow-dropdown"\n                pullingText="Pull to refresh"\n                refreshingSpinner="circles"\n                refreshingText="Refreshing...">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    Welcome: {{currentUser}}\n\n    <div *ngIf="currentUser">\n        <button ion-button color="light" (click)="doLogout()">logout</button>\n    </div>\n    <button ion-button menuToggle>Toggle Menu</button>\n    <home-tips #tipComponent [refresh]="isRefresh"></home-tips>\n</ion-content>\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/home/home.html"*/
    }),
    __param(3, core_1.Inject('user.service')),
    __param(4, core_1.Inject('user-store.service')),
    __metadata("design:paramtypes", [ionic_angular_1.App,
        ionic_angular_1.Events,
        ionic_angular_1.ModalController, Object, Object])
], HomePage);
exports.HomePage = HomePage;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 389:
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
const user_model_service_1 = __webpack_require__(57);
const ionic_angular_1 = __webpack_require__(6);
const tips_detail_1 = __webpack_require__(376);
const event_name_config_1 = __webpack_require__(15);
const MissionConfig = __webpack_require__(214);
/**
 * Generated class for the HomeTipsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
let HomeTipsComponent = class HomeTipsComponent {
    constructor(navCtrl, events, modalCtrl, userService, dateService, userStoreService, config, userModelService) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.userService = userService;
        this.dateService = dateService;
        this.userStoreService = userStoreService;
        this.config = config;
        this.userModelService = userModelService;
        this.TIP_TYPE_NORMAL = '3';
        this.pageNumber = 1;
        this.tipsList = [];
        this.contactList = [];
        this.currentContactList = [];
        this.searchArr = [];
    }
    set refresh(data) {
        if (data && data.hasOwnProperty('isRefresh') && data.isRefresh) {
            setTimeout(() => {
                this.pageNumber = 1;
                this.tipsList = [];
                this.downLoadTips();
                data.refreshObj.complete();
            }, 500);
        }
    }
    ngOnInit() {
        this.getTipsList();
        this.dealEvent();
    }
    ngOnDestroy() {
        this.events.unsubscribe(event_name_config_1.EventNameConfig.ADD_TIPS);
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
        this.events.subscribe(event_name_config_1.EventNameConfig.ADD_TIPS, (param) => {
            let data = param.param;
            switch (data) {
                case 'home-tips':
                    if (param.data) {
                        param.data.form = 3;
                        param.data.createDetailTime = this.dateService.dateFormat(new Date(param.data.created), 'hh:mm yyyy/MM/dd');
                        param.data.owner = this.currentUserInfo ? this.currentUserInfo.uuid : '';
                        param.data.ownerInfo = {
                            work_name: this.currentUserInfo ? this.currentUserInfo.work_name : '',
                            user_profile_path: this.currentUserInfo ? this.currentUserInfo.user_profile_path : '',
                            uid: this.currentUserInfo ? this.currentUserInfo.uuid : ''
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
        this.userModelService.getHomepageDashboard({ data: { page: this.pageNumber, order: 1 } }, (response) => {
            if (response.status == 1 && response.hasOwnProperty('data')) {
                let tipsData = [];
                if (Array.isArray(response.data)) {
                    tipsData = response.data;
                }
                //获取缓存
                this.userService.getContactList((contactList) => {
                    this.contactList = contactList;
                    this.currentContactList = this.currentContactList.concat(this.contactList.Friend, this.contactList.Cooperator, this.contactList.Internal);
                    //将当前用户信息添加
                    this.userStoreService.getUserInfo((v) => {
                        this.currentUserInfo = v;
                        this.currentContactList.unshift(v);
                        this.dealFindUserList(tipsData);
                    }).then().catch();
                });
            }
            else {
                //TODO: 弹出错误提示
                alert('请求失败');
            }
        });
    }
    /**
     * 循环tips列表，查找要搜索的用户
     * @param tipsData
     */
    dealFindUserList(tipsData) {
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
                this.userModelService.getUserInfo({ multi: this.searchArr }, (response) => {
                    if (response.status == 1 && response.hasOwnProperty('data')) {
                        this.currentContactList = this.currentContactList.concat(response.data);
                        this.searchArr = []; //请求完成清空搜索
                        this.dealTips(tipsData);
                    }
                });
            }
            else {
                //如果没有要搜索的用户
                this.dealTips(tipsData);
            }
        }
    }
    /**
     * init tips 模板数据
     * @param tipsObj 接口返回的对象
     */
    findUserList(tipsObj) {
        if (this.currentContactList) {
            let tplTips = tipsObj;
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
    dealTips(tipsData) {
        if (tipsData) {
            for (let i = 0; i < tipsData.length; i++) {
                let tips = tipsData[i];
                //如果是tips
                if (tips.hasOwnProperty('form')) {
                    tips = this.addTipAttribute(tips);
                    this.tipsList.push(tips);
                }
                else {
                    //如果是mission
                    let missionObj = this.initTipsMission();
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
    addTipAttribute(tips) {
        if (tips.has_alarm == 1) {
            tips.effective_time_display = this.dateService.dateFormat(new Date(tips.effective_time * 1000), 'hh:mm DD/MM/YYYY');
            console.log("tips:::", tips.effective_time_display);
        }
        tips.sharedToInfoList = [];
        if (tips.hasOwnProperty('owner')) {
            if (tips.owner == this.currentUserInfo.uuid) {
                tips.couldEdit = true;
            }
            else {
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
                };
            }
            if (tips.hasOwnProperty('shared_to')) {
                //添加share to 列表
                for (let k = 0; k < tips.shared_to.length; k++) {
                    if (tips.shared_to[k] == (this.currentContactList[j].psid || this.currentContactList[j].uuid || this.currentContactList[j].uid)) {
                        if (!tips.sharedToInfoList) {
                            tips.sharedToInfoList = [];
                        }
                        let shareToObj = {
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
        if (Array.isArray(lInfo.before) && lInfo.hasOwnProperty('0') && (typeof lInfo.before[0] !== 'undefined')) {
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
     * 滚动加载
     * @param infiniteScroll
     * @returns {Promise<T>}
     */
    doInfinite(infiniteScroll) {
        if (infiniteScroll._content.directionY == 'down') {
            return new Promise(() => {
                this.pageNumber++;
                this.downLoadTips(infiniteScroll);
            });
        }
        else {
            infiniteScroll.complete();
        }
    }
    /**
     * 下拉加载tips
     * @param infiniteScroll
     */
    downLoadTips(infiniteScroll) {
        this.userModelService.getHomepageDashboard({ data: { page: this.pageNumber, order: 1 } }, (response) => {
            if (response.status == 1 && response.hasOwnProperty('data')) {
                let tipsData = [];
                if (Array.isArray(response.data)) {
                    tipsData = response.data;
                }
                else {
                    if (infiniteScroll) {
                        infiniteScroll.enable();
                    }
                }
                this.dealFindUserList(tipsData);
            }
            else {
                //todo: 错误提示
            }
            if (infiniteScroll) {
                infiniteScroll.complete();
            }
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
     * 点击tips
     * @param event
     */
    onClickTips(event, index) {
        if (event) {
            event.stopPropagation();
        }
        let tipsData = {
            isShowChannel: false,
            tipData: {
                tipsList: this.tipsList,
                current: index
            }
        };
        let modal = this.modalCtrl.create(tips_detail_1.TipsDetailPage, tipsData);
        modal.present();
    }
    /**
     * 查看人物详情
     */
    openProfileDetail(event, contact, type) {
        event.stopPropagation();
        let contactObj;
        if (type) {
            if (type == 'mission') {
                contactObj = contact.creator_info && contact.creator_info.user_info;
                contactObj.uid = contactObj.psid;
                contactObj.work_name = contactObj.name;
            }
            else {
                contactObj = contact.ownerInfo;
            }
            this.events.publish(event_name_config_1.EventNameConfig.ROUTER_TO, {
                toUrl: 'contact-details',
                data: { 'contact': contactObj }
            });
        }
        else {
            this.events.publish(event_name_config_1.EventNameConfig.ROUTER_TO, {
                toUrl: 'contact-details',
                data: { 'contact': this.clone(contact) }
            });
        }
    }
    /**
     * 克隆对象 (解决对象绑定值遇到数据引用类型的问题)
     * @param obj
     * @returns {any}
     */
    clone(obj) {
        if (obj === null || typeof (obj) !== 'object' || 'isActiveClone' in obj) {
            return obj;
        }
        let cloneObj = new obj.constructor;
        for (let attr in obj) {
            if (typeof obj[attr] === 'object' && attr !== 'timer') {
                cloneObj[attr] = this.clone(obj[attr]);
            }
            else {
                cloneObj[attr] = obj[attr];
            }
        }
        return cloneObj;
    }
};
__decorate([
    core_1.Input('refresh'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], HomeTipsComponent.prototype, "refresh", null);
HomeTipsComponent = __decorate([
    core_1.Component({
        selector: 'home-tips',template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/home/components/home-tips/home-tips.html"*/'<!-- Generated template for the HomeTipsComponent component -->\n\n<ion-list>\n    <div *ngFor="let tips of tipsList;let i = index">\n        <ion-card class="tips-item" *ngIf="tips.hasOwnProperty(\'form\')" (click)="onClickTips($event,i)">\n            <!--tips start-->\n            <div class="clearfix">\n                <ion-item>\n                    <ion-avatar class="tip-owner-profile" item-start (click)="openProfileDetail($event,tips,\'owner\')">\n                        <img class="g-user-profile36" src="{{config.resourceDomain}}{{tips.ownerInfo && tips.ownerInfo.user_profile_path}}">\n                    </ion-avatar>\n                    <p class="f15-f">{{tips.content}}</p>\n                    <p>\n                        <span class="bi-icon-tips home-tips-icon"></span>\n                        <span class="tips-title f5-f2">Tips</span>\n                        <span class="tips-title f5-f2">{{tips.createDetailTime}}</span>\n                    </p>\n                </ion-item>\n                <!--share to-->\n                <ion-item *ngIf="tips.couldEdit">\n                    <ion-row>\n                        <p class="f9-f2 g-margin-bottom5">SHARE TO</p>\n                    </ion-row>\n                    <ion-row>\n                        <div *ngFor="let share of tips.sharedToInfoList" class="g-margin-right10">\n                            <img class="g-user-profile20" src="{{config.resourceDomain}}{{share?.user_profile_path}}" alt=""\n                                 title="{{share?.work_name}}" (click)="openProfileDetail($event,share)">\n                        </div>\n                    </ion-row>\n                    <div *ngIf="(tips.sharedToInfoList && tips.sharedToInfoList.length === 0) || !tips.sharedToInfoList">\n                        <span class="bi-icon-share-to"></span>\n                        <span class="tips-no-share f9-f3">NO ONE</span>\n                    </div>\n                </ion-item>\n            </div>\n            <!--tips end-->\n        </ion-card>\n        <ion-card class="tips-item g-mission-time" *ngIf="!tips.hasOwnProperty(\'form\')" (click)="onClickTips($event,i)">\n            <!--mission start-->\n            <ion-item class="tips-detail-user">\n                <ion-avatar item-start (click)="openProfileDetail($event,tips,\'mission\')">\n                    <img class="g-user-profile34" src="{{config.resourceDomain}}{{tips.creator_info && tips.creator_info.user_info\n                    &&  tips.creator_info.user_info.user_profile_path}}">\n                </ion-avatar>\n                <p class="f19-f g-color-b8-c">{{tips.name}}</p>\n                <p class="f3-f">\n                    <ion-icon name="thumbs-up"></ion-icon>\n                    <span class="tips-title">{{tips.missionStatus}}</span>\n                    <span class="tips-title">{{tips.createDetailTime}}</span>\n                </p>\n            </ion-item>\n            <ion-item class="progress-item">\n                <!--mission 进度条-->\n                <div class="clearfix">\n                    <bi-mission-progress class="mission-progress" [eleData]="tips"></bi-mission-progress>\n                </div>\n                <ion-row>\n                    <ion-col left>\n                        <p class="f13-f">Begin it from</p>\n                        <h2 class="time-day f49-f">{{tips.startShow.day}}</h2>\n                        <div class="time-hour">\n                            <p class="f32-f">{{tips.startShow.month}}</p>\n                            <p class="f27-f">{{tips.startShow.hour}}</p>\n                        </div>\n                    </ion-col>\n                    <div text-center class="time-icon">\n                        <span class="bi-icon-arrow3"></span>\n                    </div>\n                    <ion-col right>\n                        <p class="f13-f">End</p>\n                        <div *ngIf="!tips.endIsPending">\n                            <h2 class="time-day f49-f">{{tips.endShow.day}}</h2>\n                            <div class="time-hour">\n                                <p class="f32-f">{{tips.endShow.month}}</p>\n                                <p class="f27-f">{{tips.endShow.hour}}</p>\n                            </div>\n                        </div>\n                        <div *ngIf="tips.endIsPending">\n                            PENDING\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-item>\n            <!--mission end-->\n        </ion-card>\n    </div>\n    <!--下拉加载-->\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content loadingSpinner="bubbles"\n                                     loadingText="Loading more data...">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-list>\n\n<div class="\"></div>\n\n\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/home/components/home-tips/home-tips.html"*/
    }),
    __param(3, core_1.Inject('user.service')),
    __param(4, core_1.Inject('date.service')),
    __param(5, core_1.Inject('user-store.service')),
    __param(6, core_1.Inject('app.config')),
    __metadata("design:paramtypes", [typeof (_a = typeof ionic_angular_1.NavController !== "undefined" && ionic_angular_1.NavController) === "function" && _a || Object, typeof (_b = typeof ionic_angular_1.Events !== "undefined" && ionic_angular_1.Events) === "function" && _b || Object, typeof (_c = typeof ionic_angular_1.ModalController !== "undefined" && ionic_angular_1.ModalController) === "function" && _c || Object, Object, Object, Object, Object, typeof (_d = typeof user_model_service_1.UserModelService !== "undefined" && user_model_service_1.UserModelService) === "function" && _d || Object])
], HomeTipsComponent);
exports.HomeTipsComponent = HomeTipsComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=home-tips.js.map

/***/ })

});
//# sourceMappingURL=5.js.map