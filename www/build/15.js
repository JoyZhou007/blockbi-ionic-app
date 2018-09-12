webpackJsonp([15],{

/***/ 343:
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
const tips_new_1 = __webpack_require__(365);
const shared_module_1 = __webpack_require__(58);
let NewTipsPageModule = class NewTipsPageModule {
};
NewTipsPageModule = __decorate([
    core_1.NgModule({
        declarations: [
            tips_new_1.NewTipsPage,
        ],
        imports: [
            shared_module_1.SharedModule,
            ionic_angular_1.IonicPageModule.forChild(tips_new_1.NewTipsPage),
        ],
    })
], NewTipsPageModule);
exports.NewTipsPageModule = NewTipsPageModule;
//# sourceMappingURL=tips-new.module.js.map

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

/***/ })

});
//# sourceMappingURL=15.js.map