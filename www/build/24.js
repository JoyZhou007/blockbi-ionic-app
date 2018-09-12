webpackJsonp([24],{

/***/ 323:
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
const chat_new_channel_1 = __webpack_require__(373);
const shared_module_1 = __webpack_require__(58);
let ChatNewChannelPageModule = class ChatNewChannelPageModule {
};
ChatNewChannelPageModule = __decorate([
    core_1.NgModule({
        declarations: [
            chat_new_channel_1.ChatNewChannelComponent,
        ],
        imports: [
            shared_module_1.SharedModule,
            ionic_angular_1.IonicPageModule.forChild(chat_new_channel_1.ChatNewChannelComponent)
        ],
    })
], ChatNewChannelPageModule);
exports.ChatNewChannelPageModule = ChatNewChannelPageModule;
//# sourceMappingURL=chat-new-channel.module.js.map

/***/ }),

/***/ 373:
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
const forms_1 = __webpack_require__(12);
const notification_config_1 = __webpack_require__(56);
const index_1 = __webpack_require__(212);
/**
 * Generated class for the NewChannelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let ChatNewChannelComponent = class ChatNewChannelComponent {
    constructor(navCtrl, formBuilder, modalCtrl, events, userService, notificationService, appConfig, imService, navParams) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.userService = userService;
        this.notificationService = notificationService;
        this.appConfig = appConfig;
        this.imService = imService;
        this.navParams = navParams;
        this.selectedPeopleArray = [];
        this.channelName = '';
        this.channelTopic = '';
    }
    ionViewDidLoad() {
        this.subscription = this.notificationService.getNotification().subscribe((message) => {
            this.dealWebSocketNotification(message);
        });
    }
    ngOnInit() {
        this.currentForm = 1;
        this.getContactList();
        this.initForm();
    }
    ngAfterViewInit() {
    }
    ngOnDestroy() {
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
     * 处理IM返回消息
     */
    dealWebSocketNotification(message) {
        //新建群IM返回
        switch (message.act) {
            case notification_config_1.NotificationConfig.ACT_CHAT_NOTICE_GROUP_CREATE:
                if (message.status == 1) {
                    this.navCtrl.pop();
                }
                break;
        }
    }
    /**
     * 切换新建群组的类型
     */
    switchNewChannelType(event, form) {
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
        this.userService.getContactList((contactList) => {
            if (contactList) {
                this.contactList = contactList;
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
        let settings = this.initSelectSettings();
        if (this.currentForm == 1) {
            //friend
            settings.group.push({ key: 'friend', 'title': 'Friend' });
            let inviteFriendList = [];
            this.contactList['Friend'].forEach((item) => {
                let tmp = this.initSelectModel();
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
        }
        else if (this.currentForm == 2) {
            //Internal
            settings.group.push({ key: 'internal', 'title': 'Internal' });
            let inviteInternalList = [];
            this.contactList['Internal'].forEach((item) => {
                let tmp = this.initSelectModel();
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
            settings.group.push({ key: 'cooperator', 'title': 'Cooperator' });
            let inviteCooperatorList = [];
            this.contactList['Cooperator'].forEach((item) => {
                let tmp = this.initSelectModel();
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
    selectedChange(data) {
        this.selectedPeopleArray = data;
    }
    /**
     * 确认建群 向IM发送
     */
    confirmCreate(event) {
        event.stopPropagation();
        this.hasClickOnSend = true;
        if (!this.fGroup.valid) {
            return;
        }
        if (!this.selectedPeopleArray.length)
            return false;
        let selectedMember = [];
        for (let i in this.selectedPeopleArray) {
            let obj = {
                uid: this.selectedPeopleArray[i].id
            };
            selectedMember.push(obj);
        }
        let sendData = {
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
            'channelNameReg': [null, forms_1.Validators.compose([forms_1.Validators.required])],
        });
    }
    get channelNameReg() {
        return this.fGroup.get('channelNameReg');
    }
};
ChatNewChannelComponent = __decorate([
    core_1.Component({template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/chat-new-channel/chat-new-channel.html"*/'<ion-header class="chat-new-channel-header g-header">\n    <ion-navbar class="g-header clearfix">\n        <span class="bi-icon-down back" navPop></span>\n        <span class="g-header-title">CHAT NEW CHANNEL</span>\n        <span class="send send-done" (click)="confirmCreate($event,formGroup)">SEND</span>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="new-channel-content">\n    <form [formGroup]="fGroup">\n        <ion-segment class="channel-type g-ion-segment">\n            <ion-segment-button\n                    [class.active]="currentForm ==1"\n                    (click)="switchNewChannelType($event,1)">\n                <div class="bi-icon-business1"></div>\n                <div class="f3-f">In Private</div>\n            </ion-segment-button>\n            <ion-segment-button\n                    [class.active]="currentForm ==2"\n                    (click)="switchNewChannelType($event,2)">\n                <div class="bi-icon-business1"></div>\n                <div class="f3-f">Business</div>\n            </ion-segment-button>\n        </ion-segment>\n\n        <div class="g-title g-margin-top20 f9-f">CHANNEL NAME</div>\n        <div class="g-title-content">\n            <ion-input type="text" class="f19-f" [(ngModel)]="channelName" formControlName="channelNameReg"></ion-input>\n        </div>\n        <div *ngIf="channelNameReg.invalid && (channelNameReg.dirty || channelNameReg.touched || hasClickOnSend)"\n             text-left\n             class="input-error-msg ">\n            <div *ngIf="channelNameReg.errors.required">channel name is required.</div>\n        </div>\n    </form>\n    <div class="g-title g-margin-top20 f9-f">INVITEES</div>\n    <public-select-interface\n            (outPutSelectChange)=selectedChange($event)\n            [selectedOption]=selectedPeopleArray\n            [dropDownOption]="inviteDropDownObj">\n    </public-select-interface>\n    <div *ngIf="!selectedPeopleArray.length && hasClickOnSend" text-left\n         class="input-error-msg ">\n        Must select at least one member!\n    </div>\n    <div class="g-title g-margin-top20 f9-f">TOPIC</div>\n    <div class="g-title-content">\n        <ion-input type="text" [(ngModel)]="channelTopic" class="f19-f"></ion-input>\n    </div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/chat-new-channel/chat-new-channel.html"*/,
        selector: 'page-chat-new-channel',
    }),
    __param(4, core_1.Inject('user.service')),
    __param(5, core_1.Inject(index_1.NotificationService)),
    __param(6, core_1.Inject('app.config')),
    __param(7, core_1.Inject('im.service')),
    __metadata("design:paramtypes", [ionic_angular_1.NavController,
        forms_1.FormBuilder,
        ionic_angular_1.ModalController,
        ionic_angular_1.Events, Object, index_1.NotificationService, Object, Object, ionic_angular_1.NavParams])
], ChatNewChannelComponent);
exports.ChatNewChannelComponent = ChatNewChannelComponent;
//# sourceMappingURL=chat-new-channel.js.map

/***/ })

});
//# sourceMappingURL=24.js.map