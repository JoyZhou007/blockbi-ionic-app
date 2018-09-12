webpackJsonp([11],{

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(0);
const ionic_angular_1 = __webpack_require__(6);
const tips_detail_1 = __webpack_require__(376);
const shared_module_1 = __webpack_require__(58);
let TipsDetailPageModule = class TipsDetailPageModule {
};
TipsDetailPageModule = __decorate([
    core_1.NgModule({
        declarations: [
            tips_detail_1.TipsDetailPage,
        ],
        imports: [
            ionic_angular_1.IonicPageModule.forChild(tips_detail_1.TipsDetailPage),
            shared_module_1.SharedModule,
        ],
    })
], TipsDetailPageModule);
exports.TipsDetailPageModule = TipsDetailPageModule;
//# sourceMappingURL=tips-detail.module.js.map

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

/***/ })

});
//# sourceMappingURL=11.js.map