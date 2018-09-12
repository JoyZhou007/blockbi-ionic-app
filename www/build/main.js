webpackJsonp([29],{

/***/ 109:
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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(0);
const Subject_1 = __webpack_require__(33);
/**
 * Created by allen shan(allen.shan@blockbi.com)
 * on 2017/11/9.
 */
let NotificationService = class NotificationService {
    constructor() {
        this.initNotification();
    }
    initNotification() {
        if (!this.notificationSource) {
            this.notificationSource = new Subject_1.Subject();
            this.notification = this.notificationSource.asObservable();
        }
    }
    getNotification() {
        return this.notification;
    }
    /**
     * 发送异步消息
     * @param message
     */
    postNotification(message) {
        if (typeof this.notificationSource !== 'undefined') {
            this.notificationSource.next(message);
        }
    }
};
NotificationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], NotificationService);
exports.NotificationService = NotificationService;
//# sourceMappingURL=notification.service.js.map

/***/ }),

/***/ 110:
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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/23.
 */
const forms_1 = __webpack_require__(12);
const core_1 = __webpack_require__(0);
/**
 * 合法登录名验证， 手机或者邮箱
 * @return {(control:FormControl)=>{[p: string]: any}}
 */
let ForbiddenUsernameValidator = class ForbiddenUsernameValidator {
    constructor() {
        let regEmail = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
        let regPhone = /^1\d{10}$/;
        this.validator = forbiddenUsernameValidator(regPhone, regEmail);
    }
    validate(c) {
        return this.validator(c);
    }
};
ForbiddenUsernameValidator = __decorate([
    core_1.Directive({
        selector: '[forbiddenUsername][ngModel],[forbiddenUsername][formControl]',
        providers: [
            {
                provide: forms_1.NG_VALIDATORS,
                useValue: forbiddenUsernameValidator,
                multi: true
            }
        ]
    }),
    __metadata("design:paramtypes", [])
], ForbiddenUsernameValidator);
exports.ForbiddenUsernameValidator = ForbiddenUsernameValidator;
function forbiddenUsernameValidator(regPhone, regEmail) {
    return (control) => {
        //为空或者过短时候不检查
        const forbidden = (control.value && control.value.length >= 5)
            && (!regPhone.test(control.value) && !regEmail.test(control.value));
        return forbidden ? { 'forbidden': true } : null;
    };
}
exports.forbiddenUsernameValidator = forbiddenUsernameValidator;
function forbiddenValidator(reg) {
    return (control) => {
        //为空或者过短时候不检查
        const forbidden = (control.value)
            && (!reg.test(control.value));
        return forbidden ? { 'forbidden': true } : null;
    };
}
exports.forbiddenValidator = forbiddenValidator;
//# sourceMappingURL=forbidden-username.directive.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/10/31.
 */
exports.EventNameConfig = {
    CHAT_IS_LOAD: 'chat-is-load',
    USER_LOGIN: 'user-login',
    CONTACT_IS_READY: 'contact-is-ready',
    USER_LOGOUT: 'user-logout',
    NOTIFICATION: 'notification',
    NOTIFICATION_GLOBAL: 'notification_global',
    ROUTER_TO: 'router-to',
    NEW_CHANNEL: 'new-channel',
    UPLOAD_FILE: 'upload-file',
    PUBLIC_SELECT: 'public_select',
    TAB_PAGE_ENTERED: 'tab-page-entered',
    TOGGLE_TABS_BUTTON: 'toggle-tabs-button',
    REFRESH_CHAT_LIST: 'refresh_chat_list',
    REFRESH_CHAT_CHANNEL_INFO: 'refresh_chat_channel_info',
    //tips
    NEW_TIPS: 'new-tips',
    ADD_TIPS: 'add-tips',
    UPDATE_TIPS: 'update-tips',
    //personal profile
    EDIT_PROFILE: 'edit-profile',
    //chat
    FORWARD_MESSAGE: 'forward_message',
    SHARE_MESSAGE: 'share_message',
    //notification
    CHANGE_NOTIFICATION_STATUS: 'change_notification_status'
};
//# sourceMappingURL=event-name.config.js.map

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat-channel-member/chat-channel-member.module": [
		316,
		13
	],
	"../pages/chat-channel-more/chat-channel-more.module": [
		317,
		4
	],
	"../pages/chat-content-message-detail/chat-content-message-detail.module": [
		318,
		1
	],
	"../pages/chat-content/chat-content.module": [
		315,
		2
	],
	"../pages/chat-edit-topic/chat-edit-topic.module": [
		319,
		26
	],
	"../pages/chat-forward-dialog/chat-forward-dialog.module": [
		320,
		7
	],
	"../pages/chat-invite-member/chat-invite-member.module": [
		321,
		25
	],
	"../pages/chat-new-channel/chat-new-channel.module": [
		323,
		24
	],
	"../pages/chat-set-channel/chat-set-channel.module": [
		322,
		23
	],
	"../pages/chat-share-dialog/chat-share-dialog.module": [
		324,
		10
	],
	"../pages/chat/chat.module": [
		325,
		3
	],
	"../pages/contact-add-friend/contact-add-friend.module": [
		326,
		12
	],
	"../pages/contact-details/contact-details.module": [
		327,
		0
	],
	"../pages/edit-profile/edit-profile.module": [
		328,
		6
	],
	"../pages/folder/folder.module": [
		329,
		9
	],
	"../pages/forget-password/forget-password.module": [
		330,
		28
	],
	"../pages/guide/guide.module": [
		331,
		22
	],
	"../pages/home/home.module": [
		332,
		5
	],
	"../pages/invite-people/invite-people.module": [
		333,
		21
	],
	"../pages/login/login.module": [
		168
	],
	"../pages/logout/logout.module": [
		334,
		20
	],
	"../pages/mission/mission-list.module": [
		335,
		19
	],
	"../pages/notification-message/notification-message.module": [
		336,
		8
	],
	"../pages/personal-profile/personal-profile.module": [
		337,
		18
	],
	"../pages/personal-register/personal-register.module": [
		338,
		17
	],
	"../pages/personal-switch-company/personal-switch-company.module": [
		339,
		16
	],
	"../pages/public-albums/public-albums.module": [
		340,
		14
	],
	"../pages/public-select/public-select.module": [
		341,
		27
	],
	"../pages/tabs-page/tabs-page.module": [
		169
	],
	"../pages/tips-detail/tips-detail.module": [
		342,
		11
	],
	"../pages/tips-new/tips-new.module": [
		343,
		15
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const biConfig = __webpack_require__(264);
const actEnv = biConfig.env + 'Config';
const APP_VERSION = biConfig[actEnv].APP_VERSION;
const domain = biConfig[actEnv].domain;
const resourceDomain = biConfig[actEnv].resourceDomain;
const resourceFolderDomain = biConfig[actEnv].resourceFolderDomain;
const resourceContactUsDomain = biConfig[actEnv].resourceContactUsDomain;
const apiDomain = biConfig[actEnv].apiDomain;
const socketDomain = biConfig[actEnv].socketDomain;
const requestByDomain = biConfig[actEnv].requestByDomain;
const debug = biConfig[actEnv].debug;
const apiPrefix = biConfig[actEnv].apiPrefix;
const backendDomain = biConfig[actEnv].backendDomain;
exports.AppConfig = {
    env: biConfig.env,
    loadChatFragment: 'load-chat',
    appVersion: APP_VERSION,
    debug: debug,
    locale: 'zh-CHS',
    domain: domain,
    apiDomain: apiDomain,
    socketDomain: socketDomain,
    resourceDomain: resourceDomain,
    resourceFolderDomain: resourceFolderDomain,
    resourceContactUsDomain: resourceContactUsDomain,
    uploadUrl: '/api/file-save',
    uploadFileUrl: '/api/file-image-save',
    uploadFolderUrl: '/api/folder/file-upload',
    requestByDomain: requestByDomain,
    userDefaultAvatar: '/assets/images/upload-file-icon.jpg',
    licenceUrl: '/assets/images/company-cert.png',
    uploadImgSize: 2,
    notificationShowTime: 10000,
    chatMergeMessageTime: 30000,
    apiPrefix: apiPrefix,
    socket: {
        REPEAT_CONNECT: 5,
        MAX_REPEAT_NUMBER: 3,
        KEEP_ONLINE_TIME: 25 //用户没活跃(心跳保持时间,秒)
    },
    backendDomain: backendDomain,
    duplicateEntry: 1062,
    noLoginUrl: ['user/about', 'user/reset-psd', 'user/product']
};
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/22.
 */
__export(__webpack_require__(285));
__export(__webpack_require__(286));
__export(__webpack_require__(287));
__export(__webpack_require__(289));
__export(__webpack_require__(290));
__export(__webpack_require__(166));
__export(__webpack_require__(291));
__export(__webpack_require__(292));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 166:
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
const event_name_config_1 = __webpack_require__(15);
const ionic_angular_1 = __webpack_require__(6);
/**
 * Generated class for the BiProfileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
let BiProfileComponent = class BiProfileComponent {
    constructor(event, appConfig) {
        this.event = event;
        this.appConfig = appConfig;
    }
    set group(data) {
        this._group = data;
    }
    set contact(data) {
        this._contact = data;
    }
    get contact() {
        return this._contact;
    }
    get group() {
        return this._group;
    }
    /**
     * 查看人物详情
     */
    openProfileDetail(contact) {
        // 关闭菜单
        //this.sideMenu.close();
        console.log('openProfileDetail', contact);
        this.event.publish(event_name_config_1.EventNameConfig.ROUTER_TO, { toUrl: 'contact-details', data: { contact: contact } });
    }
};
__decorate([
    core_1.Input('group'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], BiProfileComponent.prototype, "group", null);
__decorate([
    core_1.Input('contact'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], BiProfileComponent.prototype, "contact", null);
BiProfileComponent = __decorate([
    core_1.Component({
        selector: 'bi-profile',template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/share/component/bi-profile/bi-profile.html"*/'<ion-item no-lines (click)="openProfileDetail(contact)">\n  <ion-avatar item-start>\n    <img style="width:60px; height:60px;"\n         src="{{contact.user_profile_path ? appConfig.resourceDomain + contact.user_profile_path : \'\'}}" alt="{{contact.work_name}}"/>\n  </ion-avatar>\n  <h2>{{contact.work_name}}</h2>\n  <p *ngIf="group === \'Internal\' || group === \'Cooperator\'">{{contact.p_name}}</p>\n  <p *ngIf="group === \'Cooperator\'">{{contact.company_name}}</p>\n</ion-item>'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/share/component/bi-profile/bi-profile.html"*/
    }),
    __param(1, core_1.Inject('app.config')),
    __metadata("design:paramtypes", [ionic_angular_1.Events, Object])
], BiProfileComponent);
exports.BiProfileComponent = BiProfileComponent;
//# sourceMappingURL=bi-profile.js.map

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/23.
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(110));
__export(__webpack_require__(293));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 168:
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
const login_1 = __webpack_require__(295);
const ionic_angular_1 = __webpack_require__(6);
const shared_module_1 = __webpack_require__(58);
const forms_1 = __webpack_require__(12);
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = __decorate([
    core_1.NgModule({
        declarations: [
            login_1.LoginPage,
        ],
        imports: [
            shared_module_1.SharedModule,
            forms_1.FormsModule,
            ionic_angular_1.IonicPageModule.forChild(login_1.LoginPage),
            forms_1.ReactiveFormsModule,
        ]
    })
], LoginPageModule);
exports.LoginPageModule = LoginPageModule;
//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/25.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const tabs_page_1 = __webpack_require__(296);
const shared_module_1 = __webpack_require__(58);
const ionic_angular_1 = __webpack_require__(6);
const core_1 = __webpack_require__(0);
let TabsPageModule = class TabsPageModule {
};
TabsPageModule = __decorate([
    core_1.NgModule({
        declarations: [tabs_page_1.TabsPage],
        imports: [
            shared_module_1.SharedModule,
            ionic_angular_1.IonicPageModule.forChild(tabs_page_1.TabsPage)
        ]
    })
], TabsPageModule);
exports.TabsPageModule = TabsPageModule;
//# sourceMappingURL=tabs-page.module.js.map

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * base service
 */
__export(__webpack_require__(260));
__export(__webpack_require__(261));
__export(__webpack_require__(265));
__export(__webpack_require__(274));
__export(__webpack_require__(275));
__export(__webpack_require__(277));
__export(__webpack_require__(279));
__export(__webpack_require__(109));
/**
 * storage
 */
__export(__webpack_require__(51));
__export(__webpack_require__(283));
__export(__webpack_require__(284));
/**
 * api
 */
__export(__webpack_require__(30));
/**
 * api model service
 */
__export(__webpack_require__(43));
__export(__webpack_require__(57));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 213:
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
const event_name_config_1 = __webpack_require__(15);
/**
 * Generated class for the PublicSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let PublicSelectComponent = class PublicSelectComponent {
    constructor(navCtrl, navParams, event, appConfig) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = event;
        this.appConfig = appConfig;
        this.selectOptionArr = []; //选择的数组
        this.childTabArray = []; //父级的选择tab 数组
        this.parentTabArray = []; //子级的选择tab 数组
        this.selectOptionArr = this.navParams.data.selectedArray ? this.navParams.data.selectedArray : [];
        this.optionData = this.navParams.data.data;
        this.callBackComponentName = this.navParams.data.componentName;
    }
    ngOnInit() {
        if (!this.optionData)
            return;
        //判断如果没有childGroup 则只有一层分组 否则两层分组
        if (this.optionData.settings.childGroup.length) {
            this.isHasChildrenGroup = true;
            this.parentTabArray = this.optionData.settings.group;
            this.childTabArray = this.optionData.settings.childGroup;
            this.allDropDownOptionObj = this.optionData.groupObj;
            this.doShowChildTab(this.parentTabArray[0]); //子集tab 默认显示父级的第一个子集数组
        }
        else {
            this.isHasChildrenGroup = false;
            this.childTabArray = this.optionData.settings.group;
            this.displayChildTabArr = this.childTabArray;
            this.allDropDownOptionObj = this.optionData.groupObj;
            this.doShowSelectOption(this.childTabArray[0]);
        }
        this.getSelectedOption();
    }
    /**
     * 遍历选中的人
     */
    getSelectedOption() {
        for (let i in this.selectOptionArr) {
            for (let key in this.allDropDownOptionObj) {
                for (let j in this.allDropDownOptionObj[key]) {
                    if (this.allDropDownOptionObj[key][j].id == this.selectOptionArr[i].id) {
                        Object.assign(this.allDropDownOptionObj[key][j], this.selectOptionArr[i]);
                        break;
                    }
                }
            }
        }
    }
    /**
     * 选择item
     */
    selectTheItem(event, item) {
        event.stopPropagation();
        if (item.disabled)
            return;
        item.isCurrent = !item.isCurrent;
        if (item.isCurrent) {
            this.selectOptionArr.push(item);
        }
        else {
            for (let i in this.selectOptionArr) {
                if (this.selectOptionArr[i].id == item.id) {
                    this.selectOptionArr.splice(parseInt(i), 1);
                }
            }
        }
        if (this.isHasChildrenGroup) {
            this.changeDisabled();
        }
    }
    /**
     * 确认选择
     */
    confirmSelection(event) {
        event.stopPropagation();
        this.event.publish(event_name_config_1.EventNameConfig.PUBLIC_SELECT, { param: this.callBackComponentName, data: this.selectOptionArr });
    }
    /**
     * 切换父级tab
     */
    switchParentTab(event, item) {
        event.stopPropagation();
        this.doShowChildTab(item);
    }
    /**
     * 切换子Tab
     */
    switchChildTab(event, item) {
        event.stopPropagation();
        this.doShowSelectOption(item);
    }
    /**
     * 显示的子集tab
     */
    doShowChildTab(parentGroup) {
        if (!parentGroup)
            return;
        for (let i in this.parentTabArray) {
            this.parentTabArray[i]['isActive'] = false;
        }
        parentGroup['isActive'] = true;
        this.displayChildTabArr = [];
        for (let i in this.childTabArray) {
            if (this.childTabArray[i].parentKey == parentGroup.key) {
                this.displayChildTabArr.push(this.childTabArray[i]);
            }
        }
        this.doShowSelectOption(this.displayChildTabArr[0]);
    }
    /**
     * 如果选择了personal 则business 所有option的 disabled 变为true 反之一样;
     */
    changeDisabled() {
        if (this.selectOptionArr.length) {
            for (let key in this.allDropDownOptionObj) {
                for (let i in this.allDropDownOptionObj[key]) {
                    if (this.allDropDownOptionObj[key][i].group != this.selectOptionArr[0].group) {
                        this.allDropDownOptionObj[key][i].disabled = true;
                    }
                }
            }
        }
        else {
            for (let key in this.allDropDownOptionObj) {
                for (let i in this.allDropDownOptionObj[key]) {
                    this.allDropDownOptionObj[key][i].disabled = false;
                }
            }
        }
    }
    /**
     * 显示每个分组的数据
     */
    doShowSelectOption(group) {
        if (!group)
            return;
        for (let i in this.childTabArray) {
            this.childTabArray[i]['isActive'] = false;
        }
        group['isActive'] = true;
        this.currentDisplayGroupKey = group.key;
    }
};
PublicSelectComponent = __decorate([
    core_1.Component({
        selector: 'page-public-select',template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/public-select/public-select.html"*/'<ion-header>\n        <ion-navbar class="g-header clearfix">\n            <span class="bi-icon-down back" navPop></span>\n            <span class="g-header-title">SELECT PEOPLE</span>\n            <span class="send send-done" navPop (click)="confirmSelection($event)">DONE</span>\n        </ion-navbar>\n    <ion-segment class="select-div" *ngIf="isHasChildrenGroup">\n        <ion-segment-button class="select-div-parent" *ngFor="let tab of parentTabArray"\n                            (click)=switchParentTab($event,tab)\n                            [class.active]=tab.isActive>\n            {{tab.title}}\n        </ion-segment-button>\n    </ion-segment>\n    <ion-segment class="select-div">\n        <ion-segment-button *ngFor="let tab of displayChildTabArr"\n                            (click)=switchChildTab($event,tab)\n                            [class.active]=tab.isActive>\n            {{tab.title}}\n        </ion-segment-button>\n    </ion-segment>\n</ion-header>\n\n<ion-content padding>\n    <ion-list class="select-people-list" *ngFor="let group of childTabArray">\n        <ion-item *ngFor="let item of allDropDownOptionObj[group.key]"\n                  (click)=selectTheItem($event,item)\n                  [class.hide]="group.key != this.currentDisplayGroupKey">\n            <div>\n                <div>\n                    <ion-avatar item-start>\n                        <img src="{{item?.imageLabel? appConfig?.resourceDomain + item?.imageLabel :\'\'}}">\n                    </ion-avatar>\n                    <div class="select-people-title">\n                        <p>{{item?.label}}</p>\n                        <p>\n                            <span class="tips-title">{{item?.desc}}</span>\n                        </p>\n                    </div>\n                </div>\n                <b class="select-radio" [class.current]=item.isCurrent *ngIf="!item.disabled"></b>\n            </div>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/public-select/public-select.html"*/,
    }),
    __param(3, core_1.Inject('app.config')),
    __metadata("design:paramtypes", [ionic_angular_1.NavController,
        ionic_angular_1.NavParams,
        ionic_angular_1.Events, Object])
], PublicSelectComponent);
exports.PublicSelectComponent = PublicSelectComponent;
//# sourceMappingURL=public-select.js.map

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/1/4.
 * Mission相关的常量定义
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 显示模式
 */
exports.MISSION_MODE_DEFAULT = "2";
exports.MISSION_MODE_SCHEDULE = "1";
exports.MISSION_MODE_CALENDAR = "2";
/**
 * Mission的五种类型模型
 */
exports.MISSION_TYPE_ALL = "-1";
exports.MISSION_TYPE_APPLICATION = "1";
exports.MISSION_TYPE_ASSIGNMENT = "2";
exports.MISSION_TYPE_MEETING = "3";
exports.MISSION_TYPE_PROJECT = "4";
exports.MISSION_TYPE_TASK = "5";
exports.MISSION_TYPE_ALL_TEXT = 'All Types';
exports.MISSION_TYPE_APPLICATION_TEXT = 'Application';
exports.MISSION_TYPE_ASSIGNMENT_TEXT = 'Assignment';
exports.MISSION_TYPE_MEETING_TEXT = 'Meeting';
exports.MISSION_TYPE_PROJECT_TEXT = 'Project';
exports.MISSION_TYPE_TASK_TEXT = 'Task';
/**
 * Mission七种功能方法
 */
exports.MISSION_FUNCTION_OBSERVER = "1";
exports.MISSION_FUNCTION_MEMO_RECORDER = "2";
exports.MISSION_FUNCTION_IMPORTANCE = "3";
exports.MISSION_FUNCTION_TRACKING = "4";
exports.MISSION_FUNCTION_BIDDING = "5";
exports.MISSION_FUNCTION_EXPENSE = "6";
exports.MISSION_FUNCTION_TARGET = "7";
/**
 * Mission Filter
 **/
exports.MISSION_FILTER_ISSELF_DEFAULT = "-1";
exports.MISSION_FILTER_ISSELF_ALL = "-1";
exports.MISSION_FILTER_ISSELF_SELF = "0";
exports.MISSION_FILTER_ISSELF_OTHER = "1";
exports.MISSION_FILTER_ISSELF_DEFAULT_TEXT = 'From All';
exports.MISSION_FILTER_ISSELF_ALL_TEXT = "From All";
exports.MISSION_FILTER_ISSELF_SELF_TEXT = "Yours";
exports.MISSION_FILTER_ISSELF_OTHER_TEXT = "Others";
/**
 * Mission Priority level
 */
exports.MISSION_PRIORITY_LEVEL_FIRST = "1";
exports.MISSION_PRIORITY_LEVEL_SECOND = "2";
exports.MISSION_PRIORITY_LEVEL_THIRD = "3";
/**
 * Mission User Identity
 **/
exports.MISSION_USER_IDENTITY_PUBLISHER = '1'; //发布者
exports.MISSION_USER_IDENTITY_APPROVER = '2'; //同意者
exports.MISSION_USER_IDENTITY_OPERATOR = '3'; //执行者
exports.MISSION_USER_IDENTITY_BIDDER = '4'; //竞标者
exports.MISSION_USER_IDENTITY_VOTER = '5'; //竞标投票者
exports.MISSION_USER_IDENTITY_CONFEREE = '6'; //参加会议者
exports.MISSION_USER_IDENTITY_OBSERVER = '7'; //抄送者
exports.MISSION_USER_IDENTITY_MEMO = '8'; //会议记录者
exports.MISSION_USER_IDENTITY_WORKFLOW_APPROVER = '9'; //WORKFLOW的同意者
/**
 * mission user operator status
 */
exports.MISSION_USER_OPERATOR_PENDING = '0';
exports.MISSION_USER_OPERATOR_ACCEPT = '1';
exports.MISSION_USER_OPERATOR_REFUSE = '2';
exports.MISSION_USER_OPERATOR_COMPLETE = '3';
exports.MISSION_USER_OPERATOR_APPROVOR = '4'; //workflow 专用
/**
 * Mission status
 * */
exports.MISSION_STATUS_DELETE = '0'; //被删除的
exports.MISSION_STATUS_TODO = '1'; //准备进行的
exports.MISSION_STATUS_PENDING = '2'; // 延期
exports.MISSION_STATUS_RESET = '3'; // 重置时间
exports.MISSION_STATUS_DOING = '4'; // 正在进行的
exports.MISSION_STATUS_PAUSE = '5';
exports.MISSION_STATUS_CANCEL = '6'; //取消
exports.MISSION_STATUS_DONE = '7';
exports.MISSION_STATUS_STORAGE = '8';
/**
 * 货币常量
 * ISO代码 - 符号
 */
exports.MISSION_CURRENCY_CNY = '￥';
exports.MISSION_CURRENCY_CNY_ISO = 'CNY';
exports.MISSION_CURRENCY_USD = '$';
exports.MISSION_CURRENCY_USD_ISO = 'USD';
exports.MISSION_CURRENCY_EUR = '€';
exports.MISSION_CURRENCY_EUR_ISO = 'EUR';
exports.MISSION_CURRENCY_JPY = '￥';
exports.MISSION_CURRENCY_JPY_ISO = 'JPY';
/**
 *Mission ACT
 **/
exports.MISSION_ACT_CREATE = 1;
exports.MISSION_ACT_EDIT = 2;
// mission detail 详情显示用按钮
exports.MISSION_BTN_UPLOAD = 'upload';
exports.MISSION_BTN_CANCEL = 'cancel';
exports.MISSION_BTN_ACCEPT = 'accept';
exports.MISSION_BTN_REFUSE = 'refuse';
exports.MISSION_BTN_VOTE = 'vote';
exports.MISSION_BTN_TARGET_UPLOAD = 'target_upload';
exports.MISSION_BTN_COMPLETE = 'complete';
exports.MISSION_BTN_CHECK = 'check';
exports.MISSION_BTN_RESTART = 'restart';
/**
 * 模板用常量
 */
exports.MISSION_LOADING_CLASS = 'ball-scale-multiple'; //'m-calendar-loading-show';
exports.MISSION_LOADING_PAGE_CLASS = 'ball-scale-ripple-multiple'; //'m-calendar-loading-show';
exports.MISSION_LOADING_SECONDS = 1500;
exports.MISSION_PROGRESS_TIME_DEFAULT = '?';
exports.MISSION_DATABASE_DATE_FORMAT = 'yyyy-mm-dd HH:MM:ss';
exports.MISSION_TIME_NULL = '0000-00-00 00:00:00';
exports.MISSION_PAGER_ENDING = '-1';
//获取token的常量
exports.MISSION_CREATE_PROJECT_TOKEN = '2';
exports.MISSION_GENERAL_TOKEN = '1';
//unit单位常量
exports.MISSION_UNIT_MEASUREMENT_MM = 'mm';
exports.MISSION_UNIT_MEASUREMENT_CM = 'cm';
exports.MISSION_UNIT_MEASUREMENT_IM = 'im';
exports.MISSION_UNIT_MEASUREMENT_M = 'm';
exports.MISSION_UNIT_MEASUREMENT_kM = 'km';
exports.MISSION_UNIT_WEIGHT_G = 'g';
exports.MISSION_UNIT_WEIGHT_KG = 'kg';
exports.MISSION_UNIT_WEIGHT_TON = 'ton';
exports.MISSION_UNIT_WEIGHT_IB = 'lb';
exports.MISSION_UNIT_TIMING_YEAR = 'year';
exports.MISSION_UNIT_TIMING_MONTH = 'month';
exports.MISSION_UNIT_TIMING_WEEK = 'week';
exports.MISSION_UNIT_TIMING_DAY = 'day';
exports.MISSION_UNIT_TIMING_HOUR = 'hour';
exports.MISSION_UNIT_TIMING_MINUTE = 'minute';
exports.MISSION_UNIT_TIMING_SECOND = 'second';
exports.MISSION_UNIT_CURRENCY_CNY = '￥';
exports.MISSION_UNIT_CURRENCY_USD = '$';
exports.MISSION_UNIT_CURRENCY_JPY = '円';
exports.MISSION_UNIT_ARER_MM2 = 'mm²';
exports.MISSION_UNIT_ARER_CM2 = 'cm²';
exports.MISSION_UNIT_ARER_IM2 = 'im²';
exports.MISSION_UNIT_ARER_M2 = 'm²';
exports.MISSION_UNIT_ARER_KM2 = 'km²';
exports.MISSION_UNIT_VOLUMETER_MM3 = 'mm³';
exports.MISSION_UNIT_VOLUMETER_CM3 = 'cm³';
exports.MISSION_UNIT_VOLUMETER_IM3 = 'im³';
exports.MISSION_UNIT_VOLUMETER_M3 = 'm3';
exports.MISSION_UNIT_VOLUMETER_KM3 = 'km³';
exports.MISSION_UNIT_VOLUMETER_ML = 'ml';
exports.MISSION_UNIT_VOLUMETER_I = 'i';
exports.MISSION_UNIT_OTHER_PERCENT = '%';
exports.MISSION_UNIT_OTHER_CENTIGRADE = '℃';
exports.MISSION_UNIT_OTHER_FAHRENHEIT = '℉';
exports.DATE_UNIT_MONTH = 'Months';
exports.DATE_UNIT_WEEK = 'Weeks';
exports.DATE_UNIT_DAY = 'Days';
exports.DATE_UNIT_HOUR = 'Hours';
/**
 * 延迟常量
 */
exports.MISSION_DIFFER_TIME = 10 * 60 * 1000; //mission 实际开始与结束如果有10分钟的差距判断有延迟或者提前
//# sourceMappingURL=mission.config.js.map

/***/ }),

/***/ 215:
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
const notification_model_service_1 = __webpack_require__(288);
const notification_config_1 = __webpack_require__(56);
const event_name_config_1 = __webpack_require__(15);
/**
 * Generated class for the NotificationMessageComponent page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let NotificationMessageComponent = class NotificationMessageComponent {
    constructor(navCtrl, notificationModelService, events, notificationStoreService, typeService, navParams) {
        this.navCtrl = navCtrl;
        this.notificationModelService = notificationModelService;
        this.events = events;
        this.notificationStoreService = notificationStoreService;
        this.typeService = typeService;
        this.navParams = navParams;
        this.notificationDisplayArray = [];
        this.noticeDisplayArray = [];
        this.requestDisplayArray = [];
    }
    ionViewDidLoad() {
        this.currentNotificationType = 'notice';
        this.currentNotificationTypeNum = 1;
        this.currentNotificationForm = 'personal';
        this.notificationConfig = notification_config_1.NotificationConfig;
        this.fetchNotice();
        this.dealEvent();
    }
    /**
     * 页面销毁
     */
    ngOnDestroy() {
        this.events.unsubscribe(event_name_config_1.EventNameConfig.CHANGE_NOTIFICATION_STATUS);
    }
    /**
     * 事件处理
     */
    dealEvent() {
        this.events.subscribe(event_name_config_1.EventNameConfig.CHANGE_NOTIFICATION_STATUS, (data) => {
            if (data) {
                let handleData = data.handleData;
                if (handleData.notification_form == 'personal') {
                    let notificationData;
                    //将缓存这条request_id  handled 改为 1
                    this.notificationStoreService.getPersonalRequest((v) => {
                        if (v) {
                            notificationData = v;
                            for (let i in notificationData) {
                                if (notificationData[i].data.request_id == handleData.request_id) {
                                    notificationData[i].data.handled = 1;
                                }
                            }
                            this.notificationStoreService.setPersonalRequest(notificationData);
                        }
                    });
                }
                else if (handleData.notification_form == 'company') {
                }
            }
        });
    }
    /**
     * type notice/request/inMail
     * @param type
     */
    switchNotificationType(event, type, num) {
        event.stopPropagation();
        if (this.currentNotificationTypeNum != num) {
            this.currentNotificationTypeNum = num;
            this.notificationDisplayArray = [];
            if (type == 'notice') {
                this.fetchNotice();
            }
            else if (type == 'request') {
                this.fetchRequest();
            }
        }
    }
    /**
     * form: personal/company
     * @param form
     */
    switchNotificationForm(event, form) {
        event.stopPropagation();
        this.currentNotificationForm = form;
    }
    /**
     * 获取notice
     */
    fetchNotice(last_doc_id) {
        // this.fetchNoticeFromApi();
    }
    /**
     * 从api 获取 notice
     */
    fetchNoticeFromApi(last_doc_id) {
        let requestData = {
            last_doc_id: last_doc_id ? last_doc_id : '',
            form: (this.currentNotificationForm == 'personal') ? 1 : 2
        };
        this.notificationModelService.fetchNotice({ data: requestData }, (res) => {
            if (res.status == 1) {
                this.buildDataForTemplate(res.data);
            }
        });
    }
    /**
     * 获取request
     */
    fetchRequest() {
        //先从本地缓存 获取 request
        this.notificationStoreService.getPersonalRequest((v) => {
            if (!v) {
                this.fetchRequestFromApi();
            }
            else {
                this.notificationDisplayArray = v;
            }
        });
    }
    /**
     * 从api接口获取
     */
    fetchRequestFromApi(last_doc_id) {
        let requestData = {
            last_doc_id: last_doc_id ? last_doc_id : '',
            form: (this.currentNotificationForm == 'personal') ? 1 : 2
        };
        this.notificationModelService.fetchRequest({ data: requestData }, (res) => {
            if (res.status === 1) {
                this.buildDataForTemplate(res.data);
            }
        });
    }
    /**
     *  将数据做成与在线一样的格式 NotificationEntity
     *  data:{
          act:'',
          data:{},
          status:''
        }
     */
    buildDataForTemplate(notificationArray) {
        let allId = { user: [], mission: [], file: [], group: [], tips: [] };
        let tmpArr = [];
        for (let i in notificationArray) {
            let notificationData = {};
            notificationArray[i].notification_form = this.currentNotificationForm; //将当前消息属于个人/公司分组 存到对象中
            notificationData.act = notificationArray[i].act;
            notificationData.status = notificationArray[i].status;
            delete notificationArray[i].status;
            delete notificationArray[i].act;
            notificationData.data = notificationArray[i];
            this.getAllId(notificationData.data, allId);
            tmpArr.push(notificationData);
        }
        //去掉重复的群组/人员id
        let newAllId = { user: [], mission: [], file: [], group: [], tips: [] };
        for (let key in allId) {
            newAllId[key] = this.typeService.RemoveDuplicateData(allId[key]);
        }
        this.getNotificationSummaryFromApi(newAllId, tmpArr);
    }
    /**
     * 获取列表中所有的用户id/ 群组gid /mission id /tips id /folder id 请求summary 接口
     */
    getAllId(notificationData, allId) {
        //user 目前 可能为 owner /introduce / receiver / friend / owner.uuid / friend.uuid
        //如果存在owner
        if (notificationData.hasOwnProperty('owner')) {
            if (Object.prototype.toString.apply(notificationData.owner) === '[object Object]') {
                if (notificationData.owner.uuid) {
                    allId.user.push(notificationData.owner.uuid);
                }
                else if (notificationData.owner.uid) {
                    allId.user.push(notificationData.owner.uid);
                }
                else if (notificationData.owner.psid) {
                    allId.user.push(notificationData.owner.psid);
                }
            }
            else {
                allId.user.push(notificationData.owner);
            }
        }
        //如果存在friend
        if (notificationData.hasOwnProperty('friend')) {
            if (Object.prototype.toString.apply(notificationData.owner) === '[object Object]') {
                allId.user.push(notificationData.friend.uuid);
            }
            else {
                allId.user.push(notificationData.friend);
            }
        }
        //如果存在introducer
        if (notificationData.hasOwnProperty('introducer')) {
            allId.user.push(notificationData.introducer);
        }
        //如果存在receiver
        if (notificationData.hasOwnProperty('receiver')) {
            allId.user.push(notificationData.receiver);
        }
        //邀请好友进群有 members
        if (notificationData.hasOwnProperty('members')) {
            for (let member in notificationData.members) {
                allId.user.push(notificationData.members[member].uid);
            }
        }
        //gid
        if (notificationData.hasOwnProperty('gid')) {
            allId.group.push(notificationData.gid);
        }
        //mid
        if (notificationData.hasOwnProperty('mid')) {
            allId.mission.push(notificationData.mid);
        }
    }
    /**
     * 获取summary接口
     */
    getNotificationSummaryFromApi(newAllId, notificationArray) {
        this.notificationModelService.fetchNotificationFetchSummary(newAllId, (res) => {
            if (res.status == 1) {
                for (let i in notificationArray) {
                    notificationArray[i]['summaryObj'] = res.data;
                    this.notificationDisplayArray.push(notificationArray[i]);
                }
                this.notificationStoreService.setPersonalRequest(this.notificationDisplayArray);
            }
        });
    }
    ;
};
__decorate([
    core_1.ViewChild('slides'),
    __metadata("design:type", ionic_angular_1.Slides)
], NotificationMessageComponent.prototype, "slides", void 0);
NotificationMessageComponent = __decorate([
    core_1.Component({
        selector: 'page-notification-message',template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/notification-message/notification-message.html"*/'<!--\n  Generated template for the NotificationMessageComponent page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="notification-message-header">\n    <ion-navbar>\n        <span class="bi-icon-arrow rotate90" navPop></span>\n        <span class="bi-icon-esc" navPop></span>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="notification-message-content">\n    <ion-row class="tips-detail-menu">\n        <ion-col col-12>\n            <ion-segment [(ngModel)]="currentNotificationType">\n                <ion-segment-button value=\'notice\' (click)="switchNotificationType($event,\'notice\',1)">\n                    NOTICE\n                </ion-segment-button>\n                <ion-segment-button value=\'request\' (click)="switchNotificationType($event,\'request\',2)">\n                    REQUEST\n                </ion-segment-button>\n                <ion-segment-button value=\'inMail\' (click)="switchNotificationType($event,\'inMail\',3)">\n                    IN MAIL\n                </ion-segment-button>\n            </ion-segment>\n        </ion-col>\n    </ion-row>\n    <ion-row *ngIf="currentNotificationType != 3">\n        <ion-col>\n            <ion-segment [(ngModel)]="currentNotificationForm">\n                <ion-segment-button col-5 value="personal" checked (click)="switchNotificationForm($event,\'personal\')">\n                    PERSONAL\n                </ion-segment-button>\n                <ion-segment-button col-5 value="company" (click)="switchNotificationForm($event,\'company\')">\n                    COMPANY\n                </ion-segment-button>\n            </ion-segment>\n        </ion-col>\n    </ion-row>\n\n    <!--notification content-->\n    <!--<ion-card>-->\n    <ion-slides #slides>\n        <ion-slide class="notification-ion-slide" *ngFor="let notification of notificationDisplayArray">\n            <div class="height100" [ngSwitch]="notification.act">\n                <!--群组加人-->\n                <ng-template [ngSwitchCase]="notificationConfig.ACT_REQUEST_MEMBER_GROUP_INVITE">\n                    <notification-chat-invite [setNotification]="notification"></notification-chat-invite>\n                </ng-template>\n                <ng-template [ngSwitchCase]="notificationConfig.ACT_REQUEST_MEMBER_GROUP_INVITE_RECEIVER">\n                    <notification-chat-invite [setNotification]="notification"></notification-chat-invite>\n                </ng-template>\n                <ng-template [ngSwitchCase]="notificationConfig.ACT_NOTICE_MEMBER_GROUP_INVITE_MASTER_ACCEPT">\n                    <notification-chat-invite [setNotification]="notification"></notification-chat-invite>\n                </ng-template>\n                <!--加好友-->\n                <ng-template [ngSwitchCase]="notificationConfig.ACT_USER_REQUEST_ADD_FRIEND">\n                    <notification-new-contact [setNotification]="notification"></notification-new-contact>\n                </ng-template>\n\n                <ng-template ngSwitchDefault>\n                       <div>new-notice</div>\n                </ng-template>\n            </div>\n            <!--</ion-card>-->\n        </ion-slide>\n    </ion-slides>\n    <!--</ion-card>-->\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/notification-message/notification-message.html"*/,
        providers: [notification_model_service_1.NotificationModelService]
    }),
    __param(3, core_1.Inject('notification-store.service')),
    __param(4, core_1.Inject('type.service')),
    __metadata("design:paramtypes", [ionic_angular_1.NavController,
        notification_model_service_1.NotificationModelService,
        ionic_angular_1.Events, Object, Object, ionic_angular_1.NavParams])
], NotificationMessageComponent);
exports.NotificationMessageComponent = NotificationMessageComponent;
//# sourceMappingURL=notification-message.js.map

/***/ }),

/***/ 216:
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
/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/1/5.
 */
const core_1 = __webpack_require__(0);
const base_model_service_1 = __webpack_require__(43);
const MissionConstant = __webpack_require__(214);
const api_service_1 = __webpack_require__(30);
core_1.Injectable();
let MissionModelService = class MissionModelService extends base_model_service_1.BaseModelService {
    constructor(api) {
        super(api);
        this.api = api;
    }
    /**
     * mission列表
     * @param data
     * @param callback
     * @returns {any}
     */
    getMissionList(data, callback) {
        return this.getData('missionList', data, callback);
    }
    getMissionPagerList(data, callback) {
        return this.getData('missionPagerList', data, callback);
    }
    missionUpload(data, callback) {
        if (data.data.mission.detail.hasOwnProperty('conferee')) {
            for (let i in data.data.mission.detail.conferee) {
                delete data.data.mission.detail.conferee[i].name;
                delete data.data.mission.detail.conferee[i].user_profile_path;
            }
        }
        if (data.data.mission.detail.hasOwnProperty('operator')) {
            for (let i in data.data.mission.detail.operator) {
                delete data.data.mission.detail.operator[i].name;
                delete data.data.mission.detail.operator[i].user_profile_path;
            }
        }
        if (data.data.mission.detail.hasOwnProperty('approver')) {
            for (let i in data.data.mission.detail.approver) {
                delete data.data.mission.detail.approver[i].name;
                delete data.data.mission.detail.approver[i].user_profile_path;
            }
        }
        if (data.data.mission.fns.hasOwnProperty(MissionConstant.MISSION_FUNCTION_TRACKING)) {
            for (let i in data.data.mission.fns[MissionConstant.MISSION_FUNCTION_TRACKING].user_info) {
                delete data.data.mission.fns[MissionConstant.MISSION_FUNCTION_TRACKING].user_info[i].name;
                delete data.data.mission.fns[MissionConstant.MISSION_FUNCTION_TRACKING].user_info[i].user_profile_path;
            }
        }
        if (data.data.mission.fns.hasOwnProperty(MissionConstant.MISSION_FUNCTION_OBSERVER)) {
            for (let i in data.data.mission.fns[MissionConstant.MISSION_FUNCTION_OBSERVER].user_info) {
                delete data.data.mission.fns[MissionConstant.MISSION_FUNCTION_OBSERVER].user_info[i].name;
                delete data.data.mission.fns[MissionConstant.MISSION_FUNCTION_OBSERVER].user_info[i].user_profile_path;
            }
        }
        if (data.data.mission.fns.hasOwnProperty(MissionConstant.MISSION_FUNCTION_BIDDING)) {
            for (let i in data.data.mission.fns[MissionConstant.MISSION_FUNCTION_BIDDING].user_info) {
                delete data.data.mission.fns[MissionConstant.MISSION_FUNCTION_BIDDING].user_info[i].name;
                delete data.data.mission.fns[MissionConstant.MISSION_FUNCTION_BIDDING].user_info[i].user_profile_path;
            }
        }
        return this.getData('missionUpload', data, callback);
    }
    //missionCommonList
    missionUserInfoList(data, callback) {
        return this.getData('missionUserInfoList', data, callback);
    }
    //missionFetchSubordinate
    missionFetchSubordinate(data, callback) {
        return this.getData('missionFetchSubordinate', data, callback);
    }
    //missionExpenseList
    missionExpenseList(data, callback) {
        return this.getData('missionExpenseList', data, callback);
    }
    //missionGetToken
    missionGetToken(data, callback) {
        return this.getData('missionGetToken', data, callback);
    }
    //removeProjectChild
    removeProjectChild(data, callback) {
        return this.getData('removeProjectChild', data, callback);
    }
    //removeProjectChild
    fetchLinkList(data, callback) {
        return this.getData('fetchLinkList', data, callback);
    }
    missionMapPin(data, callback) {
        return this.getData('missionMapPin', data, callback);
    }
    missionMapPinList(data, callback) {
        return this.getData('missionMapPinList', data, callback);
    }
    removeMapPin(data, callback) {
        return this.getData('removeMapPin', data, callback);
    }
    applicationWorkflowList(data, callback) {
        return this.getData('applicationWorkflowList', data, callback);
    }
    biddingVote(data, callback) {
        return this.getData('biddingVote', data, callback);
    }
    /**
     *
     * @param data
     * {mid:27}
     * @param callback
     * @returns {any}
     */
    projectScheduleDetail(data, callback) {
        return this.getData('projectScheduleDetail', data, callback);
    }
    /**
     * Mission详情
     * @param data
     * @param callback
     */
    missionDetail(data, callback) {
        return this.getData('missionDetail', data, callback);
    }
    /**
     * mission按钮的操作
     */
    missionCommonOperation(data, callback) {
        return this.getData('missionCommonOperation', data, callback);
    }
    missionApplicationApprove(data, callback) {
        return this.getData('missionApplicationApprove', data, callback);
    }
    missionComplete(data, callback) {
        return this.getData('missionComplete', data, callback);
    }
    missionDelete(data, callback) {
        return this.getData('missionDelete', data, callback);
    }
    missionTransfer(data, callback) {
        return this.getData('missionTransfer', data, callback);
    }
    missionStatusChange(data, callback) {
        return this.getData('missionStatusChange', data, callback);
    }
    targetUpload(data, callback) {
        return this.getData('targetUpload', data, callback);
    }
    meetingRecord(data, callback) {
        return this.getData('meetingRecord', data, callback);
    }
    missionCheck(data, callback) {
        return this.getData('missionCheck', data, callback);
    }
    /**
     *
     * @param data
     * {
        identifier: "",
        general_token : "",
        mid:10,
        description : "test",
        shared : 1,
        pin_time : "2017-02-27 14:24:06"
       }
     * @param callback
     * @returns {any}
     */
    missionCalendarPinAdd(data, callback) {
        return this.getData('missionCalendarPinAdd', data, callback);
    }
    /**
     *
     * @param data
     * {
        general_token: "",
        identifier: "02bd306501c94aea3727f040aec4296c"
       }
     * @param callback
     * @returns {any}
     */
    missionCalendarPinDelete(data, callback) {
        return this.getData('missionCalendarPinDelete', data, callback);
    }
    /**
     *
     * @param data
     * {
        identifier: "",
        general_token : "",
        mid:10,
        description : "test",
        shared : 1,
        pin_time : "2017-02-27 14:24:06"
       }
     * @param callback
     * @returns {any}
     */
    missionCalendarPinUpdate(data, callback) {
        return this.getData('missionCalendarPinUpdate', data, callback);
    }
    /**
     * mission搜索
     */
    missionSearchKeywords(data, callback) {
        return this.getData('missionSearch', data, callback);
    }
    /**
     * 根据mission id得到对应聊天群组信息
     * @param data
     *  {
     *   mission_id: "1",
     *   type: "1"
     *  }
     *  关于type @see mission.config.ts
     * @param callback
     * @return {any}
     */
    missionGetChatGroup(data, callback) {
        return this.getData('missionGetChatGroup', data, callback);
    }
};
MissionModelService = __decorate([
    __param(0, core_1.Inject(api_service_1.ApiService)),
    __metadata("design:paramtypes", [api_service_1.ApiService])
], MissionModelService);
exports.MissionModelService = MissionModelService;
//# sourceMappingURL=mission-model.service.js.map

/***/ }),

/***/ 217:
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
const forbidden_username_directive_1 = __webpack_require__(110);
const user_model_service_1 = __webpack_require__(57);
/**
 * Generated class for the ForgetPasswordComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
let ForgetPasswordComponent = class ForgetPasswordComponent {
    constructor(fb, userModelService, loadingCtrl, userService) {
        this.fb = fb;
        this.userModelService = userModelService;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        //显示打开email的页面
        this.showEmailLink = false;
        //显示完成页
        this.showComplete = false;
        this.code_error = {};
        this.email_error = {};
        //显示邮件输入框还是电话输入框
        this.showEmail = true;
        this.phone_alert = {};
        //错区消息提示
        this.confirmPwd_alert = {};
        this.resetData = {
            password: '',
            confirm_password: ''
        };
        this.tplAuthCodeList = ['', '', '', '', '', ''];
        this.authCodeLength = 0;
        this.currentTab = -1;
        console.log('Hello ForgetPasswordComponent Component');
    }
    get password() {
        return this.resetForm.get('password');
    }
    get confirmPwd() {
        return this.resetForm.get('confirmPwd');
    }
    get email() {
        return this.emailForm.get('email');
    }
    ngOnInit() {
        this.initEmailForm();
        // this.initPhoneForm();
        //使slides按钮不能点
        this.slides.lockSwipes(true);
        this.initResetForm();
    }
    clickSendEmail(event) {
        event.stopPropagation();
        this.showEmail = true;
    }
    clickSendPhone(event) {
        event.stopPropagation();
        this.showEmail = false;
    }
    /**
     * 初始化 email form表单验证器
     */
    initEmailForm() {
        let regEmail = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
        this.emailForm = this.fb.group({
            'email': [null, forms_1.Validators.compose([forms_1.Validators.required, forbidden_username_directive_1.forbiddenValidator(regEmail)])],
        });
    }
    /**
     * 初始化 phone form表单验证器
     */
    initPhoneForm() {
        let regPhone = /^1\d{10}$/;
        let regCode = /^[A-Za-z0-9_]{6}$/;
        this.phoneForm = this.fb.group({
            'phone': [null, forms_1.Validators.compose([forms_1.Validators.required, forbidden_username_directive_1.forbiddenValidator(regPhone)])],
            'authCode': [null, forms_1.Validators.compose([forms_1.Validators.required, forbidden_username_directive_1.forbiddenValidator(regCode)])],
        });
    }
    /**
     * 发送email
     * @param {MouseEvent} event
     */
    sendEmail(event) {
        event.stopPropagation();
        let data = {
            data: {
                means: this.email.value,
                lang: this.userService.getLanguageNum()
            }
        };
        this.presentLoading();
        this.userModelService.sendPhoneOrEmail(data, (response) => {
            this.dismissLoading();
            if (response.status === 1) {
                this.slides.lockSwipes(false);
                this.slides.slideNext();
                this.slides.lockSwipes(true);
                this.showEmailLink = true;
            }
            else {
                this.email_error.show = true;
                this.email_error.text = 'email is not find';
                setTimeout(() => {
                    this.email_error.show = false;
                }, 1000);
            }
        });
    }
    /**
     * 点击获取手机验证码
     * @param {MouseEvent} event
     */
    clickSendAuthCode(event) {
        event.stopPropagation();
        if (!this.num) {
            this.userModelService.sendPhoneOrEmail({
                data: {
                    means: this.phoneValue,
                    lang: this.userService.getLanguageNum()
                }
            }, (res) => {
                if (res.status === 1) {
                    this.num = 60;
                    let timer = setInterval(() => {
                        this.num--;
                        if (this.num == -1) {
                            clearInterval(timer);
                            this.num = 0;
                        }
                    }, 1000);
                    this.phone_alert.show = false;
                }
                else {
                    this.phone_alert.show = true;
                    this.phone_alert.text = 'send phone code failed! ';
                    setTimeout(() => {
                        this.phone_alert.show = false;
                    }, 1000);
                }
            });
        }
    }
    /**
     * 自动聚焦到下一个
     * @param event
     * @param i
     * @param input
     */
    autoTab(event, i, input) {
        if (event.keyCode === 8 && input.value === '') {
            if (i >= 1) {
                this.codeInput.toArray()[i - 1].nativeElement.focus();
                this.codeInput.toArray()[i - 1].nativeElement.select();
                if (this.authCodeLength > 0) {
                    this.authCodeLength--;
                }
            }
        }
        else if (input.value) {
            if (input.value.length > 1) {
                input.value = input.value.slice(0, 1);
            }
            let maxLength = this.codeInput.length;
            let totalLen = 0;
            if (maxLength) {
                let next;
                this.currentTab = i;
                this.codeInput.toArray().forEach((item, index) => {
                    if (i === index && i < (maxLength - 1) && !next) {
                        next = index + 1;
                    }
                    if (item.nativeElement.value != '') {
                        totalLen++;
                    }
                    if (index === next) {
                        item.nativeElement.focus();
                    }
                });
            }
            this.authCodeLength = totalLen;
        }
    }
    /**
     * 获取auth code 输入框的值
     * @returns {string}
     */
    fetchAuthCode() {
        let inputList = this.codeInput.toArray();
        let codeArr = [];
        for (let val of inputList) {
            codeArr.push(val.nativeElement.value);
        }
        this.codeValue = codeArr.join('');
        return codeArr.join('');
    }
    /**
     * 验证auth code
     * @returns {boolean}
     */
    authCodeBlur() {
        let code = this.fetchAuthCode();
        if (!code) {
            this.code_error.show = true;
            this.code_error.text = 'code is required.';
        }
        else if (code.length !== 6) {
            this.code_error.show = true;
            this.code_error.text = 'code is incorrect.';
        }
        else {
            this.code_error.show = false;
            return true;
        }
    }
    /**
     * 验证验证码
     * @param {MouseEvent} event
     */
    resetPwdByPhone(event) {
        event.stopPropagation();
        if (this.authCodeBlur()) {
            this.userModelService.validateToken({
                data: {
                    token: this.fetchAuthCode()
                }
            }, (response) => {
                if (response.status === 1) {
                    this.slides.lockSwipes(false);
                    this.slides.slideNext();
                    this.slides.lockSwipes(true);
                }
                else {
                    this.code_error.show = true;
                    this.code_error.text = response.message;
                    setTimeout(() => {
                        this.code_error.show = false;
                    }, 1000);
                }
            });
        }
    }
    /**
     * 初始化reset-pwd的表单验证
     */
    initResetForm() {
        this.resetForm = this.fb.group({
            'password': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(8), forms_1.Validators.maxLength(20)])],
            'confirmPwd': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(8), forms_1.Validators.maxLength(20)])],
        });
    }
    /**
     * 监听再次确认密码的输入值
     */
    compareOldPwd() {
        this.confirmPwd_alert.show = this.resetData.password !== this.resetData.confirm_password;
        this.confirmPwd_alert.text = 'password mismatch.';
    }
    /**
     * 点击按钮确认修改密码
     * @param {MouseEvent} event
     */
    clickResetPassword(event) {
        event.stopPropagation();
        if (this.resetForm.valid) {
            let dataInfo = {
                data: {
                    password: this.resetData.password,
                    confirm_password: this.resetData.confirm_password,
                    token: this.fetchAuthCode()
                }
            };
            this.userModelService.resetPassword(dataInfo, (response) => {
                if (response.status === 1) {
                    // this.nav.push('login');
                    // this.presentLoading();
                    this.showComplete = true;
                }
                else {
                    this.confirmPwd_alert.show = true;
                    this.confirmPwd_alert.text = response.message;
                    setTimeout(() => {
                        this.confirmPwd_alert.show = false;
                    }, 1000);
                }
            });
        }
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
};
__decorate([
    core_1.ViewChild(ionic_angular_1.Slides),
    __metadata("design:type", ionic_angular_1.Slides)
], ForgetPasswordComponent.prototype, "slides", void 0);
__decorate([
    core_1.ViewChildren('codeInput'),
    __metadata("design:type", core_1.QueryList)
], ForgetPasswordComponent.prototype, "codeInput", void 0);
ForgetPasswordComponent = __decorate([
    core_1.Component({template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/forget-password/forget-password.html"*/'<!-- Generated template for the ForgetPasswordComponent component -->\n<ion-header class="g-header register-header">\n  <ion-navbar></ion-navbar>\n</ion-header>\n\n<ion-content class="register-content forget-content">\n  <ion-slides pager #Slides [hidden]="showComplete" class="forget-margin">\n    <ion-slide class="forget-item">\n      <div ion-text class="f9-f absolute register-title">SELECT WAY TO RESET YOUR PASSWORD</div>\n      <p ion-text text-left class="forget-tit padding-left25">PERSONAL</p>\n      <ion-row>\n        <ion-col col-4 ion-text text-left padding-left class="padding-left25">\n          <a class="choose-btn" [class.choose-btn-active]="showEmail" (click)="clickSendEmail($event)">EMAIL</a>\n        </ion-col>\n        <ion-col col-4 class="forget-or">OR</ion-col>\n        <ion-col col-4 ion-text text-right class="padding-right25">\n          <a class="choose-btn" [class.choose-btn-active]="!showEmail" (click)="clickSendPhone($event)">PHONE</a>\n        </ion-col>\n      </ion-row>\n      <form novalidate [formGroup]="emailForm" *ngIf="showEmail" class="form-email">\n        <ion-item class="item-input-style">\n          <ion-input type="email" placeholder="email" formControlName="email" class="f49-f"></ion-input>\n          <span class="bi-icon-arrow2 personal-mail input-right-icon" item-end *ngIf="email.valid" (click)="sendEmail($event)"></span>\n        </ion-item>\n        <div *ngIf="showEmail && email.invalid && (email.dirty || email.touched)" text-left class="input-error-msg default-error-padding">\n          <div *ngIf="email.errors.required">email is required.</div>\n          <div *ngIf="email.errors.forbidden">email is not correct.</div>\n        </div>\n        <div text-left class="input-error-msg default-error-padding" *ngIf="email_error?.show">{{email_error.text}}</div>\n      </form>\n\n      <form *ngIf="!showEmail" class="form-email">\n        <ion-item class="item-input-style">\n          <ion-input type="number" [(ngModel)]="phoneValue" placeholder="phone" name="phone" #phone="ngModel" required pattern="1[0-9]{10}" class="f49-f"></ion-input>\n          <span class="bi-icon-arrow2 personal-mail input-right-icon" item-end [hidden]="phone.invalid" (click)="resetPwdByPhone($event)"></span>\n        </ion-item>\n        <ion-grid class="code-lst" [hidden]="phone.invalid">\n          <ion-row>\n            <ion-col col-2 *ngFor="let num of tplAuthCodeList; let i=index;">\n              <input #codeInput (keyup)="autoTab($event, i, codeInput)" (focus)="currentTab=i" maxlength="1" class="item-code-input" type="text">\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <div *ngIf="!showEmail && phone.invalid && (phone.dirty || phone.touched)" text-left class="input-error-msg default-error-padding">\n          <div *ngIf="phone.errors.required">phone is required.</div>\n          <div *ngIf="phone.errors.pattern">phone is not correct.</div>\n        </div>\n        <div text-left class="input-error-msg default-error-padding" *ngIf="phone_alert.show">{{phone_alert.text}}</div>\n        <div text-left class="input-error-msg default-error-padding" *ngIf="code_error.show">{{code_error.text}}</div>\n        <div *ngIf="phone.valid">\n          <button ion-button clear block (click)="clickSendAuthCode($event)">\n            {{num? num +\' s\' : \'send auth code\'}}\n          </button>\n        </div>\n      </form>\n    </ion-slide>\n\n\n    <!--第二页-->\n    <ion-slide class="forget-item">\n      <!--reset-pwd-->\n      <form novalidate [formGroup]="resetForm" [hidden]="showEmailLink" class="forget-phone">\n        <div ion-text class="f9-f absolute register-title">SET YOUR NEW PASSWORD</div>\n        <ion-item class="item-input-style">\n          <ion-label class="personal-phone" floating>NEW PASSWORD</ion-label>\n          <ion-input type="password" [(ngModel)]="resetData.password" formControlName="password" class="f49-f"></ion-input>\n        </ion-item>\n        <ion-item class="item-input-style">\n          <ion-label floating class="again-item">AGAIN</ion-label>\n          <ion-input type="password" formControlName="confirmPwd" [(ngModel)]="resetData.confirm_password" (keyup)="compareOldPwd()" class="f49-f"></ion-input>\n          <span class="bi-icon-arrow2 personal-phone input-right-icon" item-end (click)="clickResetPassword($event)"></span>\n        </ion-item>\n\n        <div *ngIf="password.invalid && (password.dirty || password.touched)" text-left class="input-error-msg default-error-padding">\n          <div *ngIf="password.errors.required">password is required.</div>\n          <div *ngIf="password.errors.minlength || password.errors.maxlength">The length of the password must be between 8 and 20.</div>\n        </div>\n        <div text-left class="input-error-msg default-error-padding" *ngIf="confirmPwd_alert.show">{{confirmPwd_alert.text}}</div>\n      </form>\n\n      <div [hidden]="!showEmailLink">\n        <div text-center class="forget-email-monkey">\n          <img src="../assets/image/monkey-icon2.png" />\n        </div>\n        <div text-center class="forget-email-text">\n          We have send a link to your\n          personal email\n        </div>\n        <button ion-button outline block class="forget-open-email f23-f">open email</button>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n  <!--complete 页面-->\n  <div [hidden]="!showComplete">\n    <h3>Completed setting!!!</h3>\n    <button ion-button outline block [navPush]="\'login\'"> BEGIN</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/forget-password/forget-password.html"*/
    }),
    __param(3, core_1.Inject('user.service')),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        user_model_service_1.UserModelService,
        ionic_angular_1.LoadingController, Object])
], ForgetPasswordComponent);
exports.ForgetPasswordComponent = ForgetPasswordComponent;
//# sourceMappingURL=forget-password.js.map

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_dynamic_1 = __webpack_require__(219);
const app_module_1 = __webpack_require__(237);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_1 = __webpack_require__(27);
const core_1 = __webpack_require__(0);
const ionic_angular_1 = __webpack_require__(6);
const splash_screen_1 = __webpack_require__(209);
const status_bar_1 = __webpack_require__(210);
const app_component_1 = __webpack_require__(314);
const http_1 = __webpack_require__(161);
const storage_1 = __webpack_require__(42);
const shared_module_1 = __webpack_require__(58);
const tabs_page_module_1 = __webpack_require__(169);
const login_module_1 = __webpack_require__(168);
const barcode_scanner_1 = __webpack_require__(211);
const forms_1 = __webpack_require__(12);
const BuildConfig = {
    preloadModules: true,
    modalEnter: 'modal-slide-in',
    modalLeave: 'modal-slide-out',
    tabsPlacement: 'bottom',
    pageTransition: 'none'
};
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.MyApp
        ],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            tabs_page_module_1.TabsPageModule,
            login_module_1.LoginPageModule,
            shared_module_1.SharedModule.forRoot(),
            storage_1.IonicStorageModule.forRoot(),
            ionic_angular_1.IonicModule.forRoot(app_component_1.MyApp, BuildConfig, {
                links: [
                    { loadChildren: '../pages/chat-channel-member/chat-channel-member.module#ChatChannelMemberComponentModule', name: 'ChatChannelMemberComponent', segment: 'chat-channel-member', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat-channel-more/chat-channel-more.module#ChatChannelMoreComponentModule', name: 'ChatChannelMoreComponent', segment: 'chat-channel-more', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat-content-message-detail/chat-content-message-detail.module#ChatContentMessageDetailComponentModule', name: 'ChatContentMessageDetailComponent', segment: 'chat-content-message-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat-content/chat-content.module#ChatContentPageModule', name: 'ChatContentComponent', segment: 'chat-content', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat-edit-topic/chat-edit-topic.module#ChatEditTopicComponentModule', name: 'ChatEditTopicComponent', segment: 'chat-edit-topic', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat-forward-dialog/chat-forward-dialog.module#ChatForwardDialogComponentModule', name: 'ChatForwardDialogComponent', segment: 'chat-forward-dialog', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat-invite-member/chat-invite-member.module#ChatInviteMemberComponentModule', name: 'ChatInviteMemberComponent', segment: 'chat-invite-member', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat-set-channel/chat-set-channel.module#ChatSetChannelPageModule', name: 'ChatSetChannelComponent', segment: 'chat-set-channel', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat-new-channel/chat-new-channel.module#ChatNewChannelPageModule', name: 'chat-new-channel', segment: 'chat-new-channel', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat-share-dialog/chat-share-dialog.module#ChatShareDialogPageModule', name: 'ChatShareDialogPage', segment: 'chat-share-dialog', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'chat', segment: 'chat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/contact-add-friend/contact-add-friend.module#ContactAddFriendPageModule', name: 'ContactAddFriendPage', segment: 'contact-add-friend', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/contact-details/contact-details.module#ContactDetailsPageModule', name: 'contact-details', segment: 'contact-details/:contactId', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/folder/folder.module#FolderPageModule', name: 'folder', segment: 'folder', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/forget-password/forget-password.module#ComponentsModule', name: 'forget-password', segment: 'forget-password', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/guide/guide.module#GuideModule', name: 'guide', segment: 'guide', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'home', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/invite-people/invite-people.module#InvitePeopleModule', name: 'invite-people', segment: 'invite-people', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'login', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/logout/logout.module#LogoutPageModule', name: 'logout', segment: 'logout', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/mission/mission-list.module#MissionListPageModule', name: 'mission-list', segment: 'mission-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notification-message/notification-message.module#NotificationMessageComponentModule', name: 'NotificationMessageComponent', segment: 'notification-message', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/personal-profile/personal-profile.module#PersonalProfilePageModule', name: 'PersonalProfilePage', segment: 'personal-profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/personal-register/personal-register.module#PersonalRegisterModule', name: 'personal-register', segment: 'personal-register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/personal-switch-company/personal-switch-company.module#PersonalSwitchCompanyPageModule', name: 'PersonalSwitchCompanyPage', segment: 'personal-switch-company', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/public-albums/public-albums.module#PublicAlbumsComponentModule', name: 'PublicAlbumsComponent', segment: 'public-albums', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs-page/tabs-page.module#TabsPageModule', name: 'tabs-page', segment: 'tabs-page', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/public-select/public-select.module#PublicSelectPageModule', name: 'PublicSelectComponent', segment: 'public-select', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tips-detail/tips-detail.module#TipsDetailPageModule', name: 'TipsDetailPage', segment: 'tips-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tips-new/tips-new.module#NewTipsPageModule', name: 'new-tips', segment: 'new-tips', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [ionic_angular_1.IonicApp],
        entryComponents: [
            app_component_1.MyApp
        ],
        providers: [
            status_bar_1.StatusBar,
            splash_screen_1.SplashScreen,
            { provide: core_1.ErrorHandler, useClass: ionic_angular_1.IonicErrorHandler },
            { provide: barcode_scanner_1.BarcodeScanner, useClass: barcode_scanner_1.BarcodeScanner }
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 260:
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
/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/15.
 */
const core_1 = __webpack_require__(0);
const notification_config_1 = __webpack_require__(56);
const ionic_angular_1 = __webpack_require__(6);
const event_name_config_1 = __webpack_require__(15);
const notification_service_1 = __webpack_require__(109);
let ImService = ImService_1 = class ImService {
    constructor(plt, event, notificationService, appConfig, userStoreService) {
        this.plt = plt;
        this.event = event;
        this.notificationService = notificationService;
        this.appConfig = appConfig;
        this.userStoreService = userStoreService;
        this.module = 'chat';
    }
    /**
     * 初始化登录
     */
    initSocket() {
        console.log('initSocket');
        ImService_1.socketService = new WebSocket(this.appConfig.socketDomain + this.module);
        ImService_1.socketService.onopen = ((event) => {
            console.log('socket service open');
            ImService_1.connectStatus = true;
            // socket 连接后执行登录操作
            this.loginToWebSocket();
            //心跳保持
            ImService_1.keepOnlineInterval = setInterval(() => {
                this.keepOnline();
            }, 1000);
            //this.onOpen(event, option.openEvent);
        });
        ImService_1.socketService.onerror = ((event) => {
            console.error('Socket error:', event);
            this.closeSocket(true);
        });
        ImService_1.socketService.onmessage = ((event) => {
            console.info('@Socket receive new message!', event.data);
            this.onMessage(event);
        });
        ImService_1.socketService.onclose = ((event) => {
            console.log('socket close', event);
            this.closeSocket();
        });
    }
    /**
     * 执行登录
     */
    loginToWebSocket() {
        if (ImService_1.connectStatus) {
            let uuid, psid, session_id;
            Promise.all([
                this.userStoreService.getSessionId(v => session_id = v),
                this.userStoreService.getCurrentUUID(v => uuid = v),
                this.userStoreService.getCurrentPSID(v => psid = v)
            ]).then(() => {
                console.log('send login message to im service');
                this.send({
                    act: notification_config_1.NotificationConfig.ACT_SYSTEM_IM_LOGIN,
                    data: {
                        uuid: uuid,
                        psid: psid,
                        session_id: session_id
                    }
                });
            });
        }
    }
    /**
     * 发送消息
     * @param message
     */
    send(message) {
        let sendData;
        if (typeof message === 'object') {
            sendData = JSON.stringify(message);
        }
        else {
            sendData = message;
        }
        ImService_1.socketService = ImService_1.socketService ? ImService_1.socketService : new WebSocket(this.appConfig.socketDomain + this.module);
        ImService_1.socketService.send(sendData);
        ImService_1.lastSentMessageTime = 0;
        console.log('send message', sendData);
    }
    /**
     * 接受消息
     * @param event MessageEvent
     */
    onMessage(event) {
        let message = JSON.parse(event.data);
        if (message && message.hasOwnProperty('status') && message.hasOwnProperty('act')) {
            let param = {
                act: message.act,
                status: message.status,
                data: message.data
            };
            switch (param.act) {
                case notification_config_1.NotificationConfig.ACT_USER_SESSION_EXPIRED:
                case notification_config_1.NotificationConfig.ACT_SYSTEM_IM_LOGIN:
                    this.event.publish(event_name_config_1.EventNameConfig.NOTIFICATION_GLOBAL, param);
                    break;
                default:
                    this.notificationService.postNotification(param);
            }
        }
        else {
            //console.error('message.status error', message);
        }
    }
    /**
     * 关闭socket
     */
    closeSocket(reconnect) {
        // 移除循环心跳保持事件
        if (ImService_1.socketService && ImService_1.connectStatus) {
            ImService_1.socketService.close();
            ImService_1.connectStatus = false;
            delete ImService_1.socketService;
        }
        if (ImService_1.keepOnlineInterval) {
            clearInterval(ImService_1.keepOnlineInterval);
        }
        if (reconnect) {
            this.initSocket();
        }
    }
    /**
     * 在线上,心跳连接
     */
    keepWebSocketOnline() {
        console.log('keep online', ImService_1.connectStatus);
        if (ImService_1.connectStatus) {
            let uuid, psid, session_id;
            Promise.all([
                this.userStoreService.getSessionId(v => session_id = v),
                this.userStoreService.getCurrentUUID(v => uuid = v),
                this.userStoreService.getCurrentPSID(v => psid = v)
            ]).then(() => {
                console.log('send keep online message to im service');
                this.send({
                    act: notification_config_1.NotificationConfig.ACT_SYSTEM_IM_KEEP_ONLINE,
                    data: {
                        uuid: uuid,
                        psid: psid,
                        session_id: session_id
                    }
                });
            });
        }
        else {
            console.log('not connected, try re-login');
            this.loginToWebSocket();
        }
    }
    /**
     * 心跳保持
     */
    keepOnline() {
        if (ImService_1.lastSentMessageTime <= this.appConfig.socket.KEEP_ONLINE_TIME) {
            ImService_1.lastSentMessageTime++;
            //console.warn('check leave time', ImService.messageLeaveTime[module]);
        }
        else {
            this.keepWebSocketOnline();
            ImService_1.lastSentMessageTime = 0;
        }
    }
    /**
     * 底层IM消息数据
     */
    preparePublicData(message) {
        message['app_version'] = (this.plt.is('ios') ? 'i' : 'a') + this.appConfig.appVersion;
        if (message.data) {
            return this.userStoreService.getSessionId((v) => {
                message.data.session_id = v;
            });
        }
    }
    /**
     * 用户消息数据
     */
    prepareMemberPublicData(message) {
        if (message.data) {
            return this.preparePublicData(message).then(() => {
                if (!message.data.hasOwnProperty('owner')) {
                    let uuid, psid, cid;
                    Promise.all([
                        this.userStoreService.getCurrentCID(v => cid = v),
                        this.userStoreService.getCurrentUUID(v => uuid = v),
                        this.userStoreService.getCurrentPSID(v => psid = v)
                    ]).then(() => {
                        message.data.owner = {
                            psid: psid,
                            uuid: uuid,
                            cid: cid
                        };
                        this.send(message);
                    });
                }
            });
        }
    }
    /**
     * 发送用户相关消息
     * @param message
     */
    sendMemberMessage(message) {
        this.prepareMemberPublicData(message).then(() => {
            console.log('sendMemberMessage');
        });
    }
    /**
     * 发送聊天消息
     * @param message
     */
    sendCommonMessage(message) {
        this.preparePublicData(message).then(() => {
            console.log('sendCommonMessage', message);
            this.send(message);
        });
    }
    /**
     * 好友申请
     */
    doApplyFriend(data) {
        this.sendMemberMessage({
            act: notification_config_1.NotificationConfig.ACT_USER_REQUEST_ADD_FRIEND,
            data: {
                friend: data.friend,
                remark: data.remark,
                relation: data.user_relation,
                company_name: data.company_name //公司名称
            }
        });
    }
    /**
     * 拒绝好友申请
     * @param data
     */
    refuseApplyFriend(data) {
        this.sendMemberMessage({
            act: notification_config_1.NotificationConfig.ACT_USER_NOTICE_REFUSE_ADD_FRIEND,
            data: {
                friend: data.friend,
                request_id: data.request_id,
                feedback: data.feedback
            }
        });
    }
    /**
     * 接收好友申请
     * @param data
     */
    acceptApplyFriend(data) {
        this.sendMemberMessage({
            act: notification_config_1.NotificationConfig.ACT_USER_NOTICE_ACCEPT_ADD_FRIEND,
            data: {
                friend: data.friend,
                relation: data.friend_relation,
                request_id: data.request_id,
                feedback: data.feedback
            }
        });
    }
    /**
     * 建立群组
     */
    sendCreateGroup(data) {
        this.sendCommonMessage({
            act: notification_config_1.NotificationConfig.ACT_CHAT_NOTICE_GROUP_CREATE,
            data: {
                name: data.name,
                topic: data.topic,
                members: data.members,
                form: data.form
            }
        });
    }
    /**
     * 修改群名称和修改群主题
     */
    sendModifyChannelInfo(data) {
        this.sendCommonMessage({
            act: notification_config_1.NotificationConfig.ACT_NOTICE_GROUP_NAME_MODIFY,
            data: {
                gid: data.gid,
                name: data.name,
                topic: data.topic,
                form: data.form,
                invited_member: data.invited_member
            }
        });
    }
    /**
     * 删除群成员
     */
    sendDeleteChannelMember(data) {
        this.sendCommonMessage({
            act: notification_config_1.NotificationConfig.ACT_NOTICE_MASTER_DELETE_GROUP_USER,
            data: {
                gid: data.gid,
                name: data.name,
                friend: data.friend,
                form: data.form
            }
        });
    }
    /**
     * 群主邀请新人进去 （直接进群）
     */
    inviteByHost(data) {
        this.sendCommonMessage({
            act: notification_config_1.NotificationConfig.ACT_NOTICE_MASTER_GROUP_INVITE,
            data: {
                gid: data.gid,
                invited_member: data.invited_member,
                is_host: data.is_host,
                name: data.name,
                members: data.members,
                form: data.form
            }
        });
    }
    /**
     *非群主邀请 （根据invited_member 决定是否要群主同意）
     * invited_member=0 需要
     * invited_member=1 不需要
     */
    inviteByCommonMember(data) {
        this.sendCommonMessage({
            act: notification_config_1.NotificationConfig.ACT_REQUEST_MEMBER_GROUP_INVITE,
            data: {
                gid: data.gid,
                invited_member: data.invited_member,
                is_host: data.is_host,
                name: data.name,
                members: data.members,
                form: data.form
            }
        });
    }
    /**
     * 被邀请人接受进群
     */
    newMemberAcceptInvite(data) {
        this.sendCommonMessage({
            act: notification_config_1.NotificationConfig.ACT_NOTICE_MEMBER_GROUP_INVITE_ACCEPT,
            data: {
                form: data.form,
                gid: data.gid,
                name: data.name,
                request_id: data.request_id
            }
        });
    }
    /**
     * 被邀请人拒绝入群
     */
    newMemberRefuseInvite(data) {
        this.sendCommonMessage({
            act: notification_config_1.NotificationConfig.ACT_NOTICE_MEMBER_GROUP_INVITE_REFUSE,
            data: {
                friend: data.friend,
                gid: data.gid,
                form: data.form,
                name: data.name,
                request_id: data.request_id
            }
        });
    }
    /**
     * 非群主邀請后群主同意
     */
    masterAcceptInvite(data) {
        this.sendCommonMessage({
            act: notification_config_1.NotificationConfig.ACT_NOTICE_MEMBER_GROUP_INVITE_MASTER_ACCEPT,
            data: {
                gid: data.gid,
                name: data.name,
                introducer: data.introducer,
                members: data.members,
                form: data.form,
                request_id: data.request_id
            }
        });
    }
    /**
     * 非群主邀請后群主拒绝
     */
    masterRefuseInvite(data) {
        this.sendCommonMessage({
            act: notification_config_1.NotificationConfig.ACT_NOTICE_MEMBER_GROUP_INVITE_MASTER_REFUSE,
            data: {
                gid: data.gid,
                name: data.name,
                introducer: data.introducer,
                members: data.members,
                form: data.form,
                request_id: data.request_id
            }
        });
    }
    /**
     * 删除群组
     */
    sendDeleteTheChannel(data) {
        this.sendCommonMessage({
            act: notification_config_1.NotificationConfig.ACT_NOTICE_GROUP_DELETE,
            data: {
                form: data.form,
                gid: data.gid,
                name: data.name,
            }
        });
    }
    /**
     * 退出当前群
     * @param data
     */
    sendQuitTheChannel(data) {
        this.sendCommonMessage({
            act: notification_config_1.NotificationConfig.ACT_NOTICE_USER_EXIT_GROUP,
            data: {
                form: data.form,
                gid: data.gid,
            }
        });
    }
    /**
     * 发送个人消息
     */
    sendPersonalMessage(data) {
        this.sendCommonMessage({
            act: notification_config_1.NotificationConfig.ACT_CHAT_SEND_MESSAGE,
            data: {
                friend: data.friend,
                form: data.form,
                identity: data.identity,
                type: data.type,
                token: data.token,
                msg: data.msg,
                detail: data.detail ? data.detail : {},
            }
        });
    }
    /**
     * 发送群组消息
     * @param data
     */
    sendGroupMessage(data) {
        this.sendCommonMessage({
            act: notification_config_1.NotificationConfig.ACT_CHAT_SEND_MESSAGE,
            data: {
                gid: data.gid,
                form: data.form,
                identity: data.identity,
                type: data.type,
                token: data.token,
                msg: data.msg,
                detail: data.detail ? data.detail : {},
            }
        });
    }
    /**
     * 撤回群组消息
     * @param data
     */
    revokeGroupMessage(data) {
        this.sendCommonMessage({
            act: notification_config_1.NotificationConfig.ACT_CHAT_MESSAGE_REVOKE,
            data: {
                gid: data.gid,
                form: data.form,
                msg_id: data.msg_id,
                identity: data.identity,
            }
        });
    }
    /**
     * 撤回个人消息
     * @param data
     */
    revokePersonalMessage(data) {
        this.sendCommonMessage({
            act: notification_config_1.NotificationConfig.ACT_CHAT_MESSAGE_REVOKE,
            data: {
                friend: data.friend,
                form: data.form,
                msg_id: data.msg_id,
                identity: data.identity,
            }
        });
    }
};
ImService.connectStatus = false;
ImService.unsendMessageCache = [];
ImService.lastSentMessageTime = 0;
ImService = ImService_1 = __decorate([
    core_1.Injectable(),
    __param(2, core_1.Inject(notification_service_1.NotificationService)),
    __param(3, core_1.Inject('app.config')),
    __param(4, core_1.Inject('user-store.service')),
    __metadata("design:paramtypes", [ionic_angular_1.Platform,
        ionic_angular_1.Events,
        notification_service_1.NotificationService, Object, Object])
], ImService);
exports.ImService = ImService;
var ImService_1;
//# sourceMappingURL=im.service.js.map

/***/ }),

/***/ 261:
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
const event_name_config_1 = __webpack_require__(15);
/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/15.
 */
let UserService = class UserService {
    constructor(userModelService, events, appConfig, userStoreService, notificationStoreService, imService) {
        this.userModelService = userModelService;
        this.events = events;
        this.appConfig = appConfig;
        this.userStoreService = userStoreService;
        this.notificationStoreService = notificationStoreService;
        this.imService = imService;
    }
    /**
     * 检测用户是否登录
     */
    checkIsLogin(deal) {
        this.userStoreService.getSessionId(deal).then(() => {
            this.setLoginServiceData();
        });
    }
    /**
     * psid为纯数字, uuid为字符串
     * e.g
     *  123        true
     * '123'       true
     * 'AAAAAAAA'  false
     * @param uid
     * @returns {boolean}
     */
    isCompanyID(uid) {
        return !isNaN(uid);
    }
    /**
     * 用户登录
     * @param data
     * @param callback
     */
    loginViaAPI(data, callback) {
        this.userModelService.login(data, (res) => {
            if (res.status == 1 && res.hasOwnProperty('data')) {
                // session, user, company
                // 通知app.component路由跳转
                this.userStoreService.setUserLoginData(res.data['session_id'], res.data['user'], res.data['companies_information']).then(() => {
                    // TODO: set other service data;
                    if (callback) {
                        callback(res);
                    }
                    this.setLoginServiceData();
                });
            }
            else if (callback) {
                callback(res);
            }
        });
    }
    /**
     * 用户登出
     * @param callback
     */
    logoutViaAPI(callback) {
        this.userModelService.logout((res) => {
            if (res.status == 1 || res.status == -10001) {
                if (callback) {
                    callback(res);
                }
                this.setLogoutServiceData();
            }
        });
    }
    /**
     * 用户注册
     * @param data
     * @param callback
     * @param timer 定时器
     */
    register(data, callback, timer) {
        this.userModelService.register(data, (res) => {
            if (res.status === 1) {
                this.events.publish(event_name_config_1.EventNameConfig.USER_LOGIN);
                this.userStoreService.setUserLoginData(res.data['session_id'], res.data['user'], res.data['companies_information']).then(() => {
                    this.imService.initSocket();
                    // TODO: set other service data;
                    if (callback) {
                        callback(res);
                    }
                });
            }
            else {
                if (callback) {
                    callback(res);
                }
            }
        });
    }
    /**
     * 从缓存拿contact list, 不然请求接口并且刷新缓存
     * @param deal
     */
    getContactList(deal) {
        this.userStoreService.getContactList((v) => {
            if (!v) {
                this.fetchContactList((nv) => {
                    if (deal) {
                        deal(nv);
                    }
                });
            }
            else {
                if (deal) {
                    deal(v);
                }
            }
        });
    }
    /**
     * 从API获取联系人列表, 并且更新缓存
     * @param callback
     */
    fetchContactList(callback) {
        this.userModelService.getContactList({ form: 0, group: 0 }, (res) => {
            if (res.status === 1 && res.hasOwnProperty('data') && res.data.hasOwnProperty('staff')) {
                let staffList = res.data['staff'];
                let resArr = {
                    Cooperator: [],
                    Friend: [],
                    Internal: []
                };
                for (let key in resArr) {
                    if (staffList.hasOwnProperty(key)) {
                        for (let i in staffList[key]) {
                            if (staffList[key].hasOwnProperty(i)) {
                                let tmpData = staffList[key][i];
                                let tmpInfo;
                                if (key == 'Cooperator' || key == 'Internal') {
                                    tmpData.psid = tmpData.uid;
                                }
                                else if (key == 'Friend') {
                                    tmpData.uuid = tmpData.uid;
                                }
                                delete tmpData.uid;
                                tmpInfo = tmpData;
                                resArr[key].push(tmpInfo);
                            }
                        }
                    }
                }
                this.userStoreService.setContactList(resArr);
                callback(resArr);
            }
            else {
            }
        });
    }
    /**
     * 登陆后初始化相关数据
     */
    setLoginServiceData() {
        this.imService.initSocket();
        this.events.publish(event_name_config_1.EventNameConfig.USER_LOGIN);
        this.fetchContactList(() => {
            this.events.publish(event_name_config_1.EventNameConfig.CONTACT_IS_READY);
        });
    }
    /**
     * 退出后相关数据清除
     */
    setLogoutServiceData() {
        // 通知app.component路由跳转
        this.events.publish(event_name_config_1.EventNameConfig.USER_LOGOUT);
        this.imService.closeSocket();
        this.userStoreService.removeUserLoginData().then(() => {
            console.log('user login data cleaned');
        });
        this.notificationStoreService.removeAllNotificationData().then(() => {
            console.log('user notification cleaned');
        });
    }
    /**
     *
     * @param uid 根据uuid或者psid查找用户信息
     * @param deal
     */
    searchOtherInfoInContactList(uid, deal) {
        // flag 是否为用户本人
        let isSelf = false;
        Promise.all([
            this.userStoreService.getCurrentUUID((v) => isSelf = uid == v),
            this.userStoreService.getCurrentPSID((v) => isSelf = isSelf || uid == v)
        ]).then(() => {
            if (isSelf) {
                this.userStoreService.getUserInfo((v) => {
                    if (deal) {
                        deal(isSelf, {
                            work_name: v.work_name,
                            user_profile_path: v.user_profile_path
                        });
                    }
                });
            }
            else {
                this.getContactList((contactList) => {
                    let find;
                    for (let key in contactList) {
                        for (let i = 0; i < contactList[key].length; i++) {
                            if (contactList[key][i].psid == uid || contactList[key][i].uuid == uid) {
                                find = contactList[key][i];
                                console.log('find in contact list', find, key);
                                break;
                            }
                        }
                    }
                    if (deal) {
                        if (find) {
                            deal(isSelf, {
                                work_name: find.work_name,
                                user_profile_path: find.user_profile_path
                            });
                        }
                        else {
                            deal(isSelf, false);
                        }
                    }
                });
            }
        });
    }
    /**
     * 当前登录用户数据
     * @param callback
     */
    fetchCurrentUserInfo(callback) {
        let companyInfo, userInfo;
        let userData, companyData;
        Promise.all([
            this.userStoreService.getUserInfo((v) => userData = v),
            this.userStoreService.getUserCurrentCompany((v) => companyData = v)
        ]).then(() => {
            if (!(companyData && companyData.hasOwnProperty('cid') && companyData.cid != '')) {
                companyInfo = null;
            }
            else {
                // 现阶段API没有返回work_name, 默认使用私人name
                companyData.work_name = userData ? userData.work_name : '';
                companyData.company_name = companyData.name;
                delete companyData.name;
                companyInfo = companyData;
            }
            if (userData && userData.hasOwnProperty('user_profile_path') && userData.user_profile_path != '') {
                userData.user_profile_path = userData.user_profile_path;
            }
            userInfo = userData;
            if (callback) {
                callback(userInfo, companyInfo);
            }
        });
    }
    /**
     * 根据uid和分类查看contact detail详情
     */
    fetchContactDetailInfo(uid, module, callback) {
        this.userModelService.fetchFriendInfo({ uid: uid, personal_module: module }, (res) => {
            if (res.status == 1) {
                callback(res.data);
            }
            else {
                console.error(res);
            }
        });
    }
    /**
     * 查看另一个uid时候可以执行的权限操作
     * @param uid
     * @param callback
     */
    fetchContactPermission(uid, callback) {
        this.userModelService.authorizationAccessInfo({ data: { uid: uid } }, (res) => {
            if (res.status === 1 && res.hasOwnProperty('data')) {
                callback(res);
            }
        });
    }
    /**
     * 获得语言设置对应的数字
     * @return {any}
     */
    getLanguageNum() {
        //todo 语言设置
        //中文简体
        const CN = 'zh-Hans';
        //中文繁体
        // const TW_CN = 'zh-Hant';
        //英文
        const EN = 'en_US';
        let num = 'en';
        switch (num) {
            case 'zh-cn':
                num = CN;
                break;
            case 'en':
                num = EN;
                break;
        }
        return num;
    }
};
UserService = __decorate([
    core_1.Injectable(),
    __param(2, core_1.Inject('app.config')),
    __param(3, core_1.Inject('user-store.service')),
    __param(4, core_1.Inject('notification-store.service')),
    __param(5, core_1.Inject('im.service')),
    __metadata("design:paramtypes", [user_model_service_1.UserModelService,
        ionic_angular_1.Events, Object, Object, Object, Object])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/18.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const app_config_1 = __webpack_require__(162);
/**
 * API请求
 */
exports.BlockBiRequest = {
    IS_REQUEST_BY_DOMAIN: app_config_1.AppConfig.requestByDomain,
    TARGET_DOMAIN: app_config_1.AppConfig.apiDomain,
    PROXY_DATA_PREFIX: app_config_1.AppConfig.apiPrefix,
    PROXY_DATA: {
        //上传
        upload: 'file-save',
        //用户操作
        login: 'user/login-check',
        logout: 'user/logout',
        register: 'user/register',
        switchCompany: 'user/switch-company',
        contact: 'user/contact-us',
        resetPsd: 'user/reset-pwd-by-token',
        resetPassword: 'user/reset-pwd',
        recoverPsd: 'user/find-password',
        sendEmailOrPhone: 'user/apply-reset-pwd',
        checkToken: 'user/check-rp-token',
        getRegisterCode: 'user/get-register-code',
        resetPermission: 'user/reset-permission',
        //个人信息
        //personalInfo: 'get/user-info',		//个人信息
        userInformations: 'user/informations',
        userSaveBaseInfo: 'user/save-base-info',
        banksList: 'user/banks-list',
        areaCountry: 'user/area-country',
        saveEducations: 'user/save-educations',
        languageLevels: 'user/language-levels',
        saveSkill: 'user/save-skill',
        skillPoint: 'user/skill-point',
        contactPermission: 'user/personal-permission',
        contactPermissionSave: 'user/personal-permission-save',
        viewContact: 'user/dynamic-info',
        genderList: 'user/gender-list',
        languageList: 'user/language-list',
        contactsPermission: 'user/personal-permission',
        saveContactsPermission: 'user/personal-permission-save',
        modifyProfile: 'user/modify-profile',
        //查看好友信息
        fetchFriendInfo: 'user/fetch-friend-informations',
        getInCommon: 'contact/in-common',
        userInfo: 'contact/get-user-info',
        saveOccupation: 'contact/occupation-save',
        fetchOccupation: 'contact/fetch-occupation',
        authorizationAccessInfo: 'user/authorization-access-info',
        checkRelation: 'chat/check-relation',
        contactDisplay: 'contact/display',
        contactSearch: 'contact/search',
        checkIsOccupation: 'contact/check-is-occupation',
        fetchUserCompany: 'contact/fetch-user-company',
        //examineContact:'user/examine-contact',
        userAllocatedPrivilege: 'user/allocated-privilege',
        userGrantPrivilege: 'user/grant-privilege',
        //公司操作
        companyGeneral: 'company/profile-display',
        upDateCompanyGeneral: 'company/profile-update',
        companyIndustry: 'company/industries',
        companyRegister: 'company/register',
        generalSave: 'company/general-save',
        permissionSave: 'company/permission-save',
        permission: 'company/permission',
        companySearch: 'company/search',
        companyAccount: 'company/account',
        companyAnalysis: 'company/analysis',
        updateCompanyCeo: 'company/update-company-ceo',
        searchCeoCandidates: 'company/search_ceo_candidates',
        getCurrentCeo: 'company/get_current_ceo',
        searchAdminCandidates: 'company/search-admin-candidates',
        getAllCompany: 'company/get-all-company',
        getAllStaff: 'company/get-all-staff',
        getRecruitment: 'company/get-recruitment',
        getUnverifiedCompany: 'company/get-unverified-company',
        isHireUsers: 'contact/is-hire-user',
        showVacationUsage: 'company/show-vacation-usage',
        updateVacation: 'company/update-vacation',
        getVacationSetting: 'company/show-vacation-setting',
        updateVacationSetting: 'company/update-vacation-setting',
        //组织架构
        groupStructure: 'structure/group-structure',
        companyStructure: 'structure/company-structure',
        deptStructure: 'structure/department-structure',
        structurePosition: 'structure/search-position',
        structurePositionTitle: 'structure/search-position-title',
        structureStaff: 'structure/search-staff',
        structureCompany: 'structure/search-company',
        structureDept: 'structure/search-department',
        allStructure: 'structure/all-structure',
        getPending: 'structure/pending',
        uploadStructure: 'structure/upload-structure',
        checkPosition: 'structure/check-position',
        checkRecommendRelation: 'chat/check-recommend-friend-relation',
        //聊天
        groupList: 'chat/get-group-list',
        fileImageSave: 'file-image-save',
        fetchGroupInfo: 'chat/fetch-group-info',
        groupChat: 'chat/group-chat',
        groupCreate: 'chat/group-create',
        groupRename: 'chat/group-rename-topic',
        groupAddFriend: 'chat/group-add-friend',
        groupRemoveFriend: 'chat/group-remove-friend',
        groupDrop: 'chat/group-drop',
        removeFriends: 'chat/remove-friends',
        enshrineInfo: 'chat/enshrine',
        cancelEnshrine: 'chat/enshrine-drop',
        insertMsgPin: 'chat/insert-msg-pin',
        deleteMsgPin: 'chat/delete-msg-pin',
        getMsgPinList: 'chat/get-msgpin-list',
        // 用户在线状态
        getOnlineStatus: 'chat/check-is-online',
        // 对公司用户
        initCompanyUserDialog: 'chat/init-dialog',
        getFrontAndBackMessage: 'chat/msg-transmit',
        getSingleMessage: 'chat/get-single-msg',
        //开发机
        chatimgcomments: 'chat/image-comments',
        fetchImageComments: 'chat/fetch-image-comments',
        searchChatRecords: 'chat/search-chat-records',
        //notification
        offlineNotification: 'fetch-offLine-notification',
        offlinePersonalMessage: 'fetch-offLine-notification',
        offlineGroupMessage: 'fetch-offLine-notification',
        notificationFetchSummary: 'notification/fetch-general-summary',
        fetchNotice: 'notification/fetch-notice',
        fetchRequest: 'notification/fetch-request',
        fetchOffLineMessage: 'notification/fetch-offline-message',
        notificationUpdatedRequest: 'notification/update-request',
        //用户消息
        userMessage: 'chat/get-user-msg',
        //群组聊天消息
        userGroupMessage: 'chat/get-group-msg',
        //获取整个离线消息包
        getPackageMsg: 'chat/get-package-msg',
        getOfflineCount: 'chat/get-offLine-count',
        //收藏
        imagePoint: 'chat/image-point',
        //收藏个数
        imageEnshrine: 'chat/image-enshrine',
        //聊天图片打tag
        chatImgTag: 'chat/image-diagram-add',
        //获取图片tag
        fetchChatImgTags: 'chat/image-diagram-show',
        //删除图片的tag
        deleteImgTag: 'chat/image-diagram-remove',
        //编辑图片的tag
        updateImgTag: 'chat/image-diagram-update',
        //获取图片的评论列表
        fetchImageComment: 'chat/image-comment-show',
        //发送图片评论
        // image-comment-add
        addImageComment: 'chat/image-comment-add',
        //删除评论
        removeImageComment: 'chat/image-comment-remove',
        //查看图片点赞数量
        fetchImageLike: 'chat/image-like-show',
        //图片点赞  image-like-update
        imageLikeUpdate: 'chat/image-like-update',
        //查看post的信息
        postDetails: 'chat/post-details',
        //新建存取信息到draft
        addPostDraft: 'chat/post-add',
        //查看模式的post
        getDetailPostContent: 'chat/post-show',
        //请求draft-list
        fetchDraftList: 'chat/post-draft-fetch-list',
        //更新draft
        updateDraftDetail: 'chat/post-update',
        //upload chatPost 直接上传
        uploadChatPostMsg: 'chat/post-direct-upload',
        //upload chatPost 草稿箱上传
        uploadChatPostMsgByDraft: 'chat/post-upload',
        //delete draft
        removeDraft: 'chat/post-delete',
        //delete draft
        appendChatComment: 'chat/post-comment-add',
        //show comments list
        displayComments: 'chat/post-comment-show',
        //draftAttachmentInfo
        draftAttachmentInfo: 'chat/draft-attachment-info',
        //delete post comment
        deletePostComment: 'chat/post-comment-remove',
        //search chat message
        chatSearchInfo: 'chat/search-chat-records',
        //文件管理器
        //初始化文件目录
        folderInit: 'folder/init',
        //获取文件列表
        folderLists: 'folder/lists',
        //创建文件夹
        folderCreate: 'folder/create',
        //删除文件或者文件夹
        deleteFolder: 'folder/delete',
        //移动文件或者文件夹
        modifyFolder: 'folder/modify',
        //下载文件
        downloadFile: 'folder/download-file',
        //上传文件
        uploadFile: 'folder/file-upload',
        //获取全部文件夹列表
        folderDirList: 'folder/dir-list',
        //获取上层文件列表
        folderTopLists: 'folder/top-lists',
        //复制文件
        folderCopy: 'folder/copy',
        //文件加标记/删除标记
        folderStarred: 'folder/starred',
        //文件或者文件夹重命名
        folderRename: 'folder/rename',
        //文件转让
        folderTransfer: 'folder/transfer',
        //文件下载
        folderDownloadFile: 'folder/download-file',
        //文件分享
        folderShare: 'folder/share',
        //文件上传
        fileUpload: 'folder/file-upload',
        //文件搜索
        fileSearch: 'folder/search',
        //文件转发
        fileForward: 'folder/forward',
        //文件下载
        fileDownLoad: 'folder/download-file',
        //获取share列表
        fileShareList: 'folder/share-list',
        //file-import
        fileImport: 'folder/import',
        //获取文件空间
        folderDisk: 'folder/disk',
        //员工空间  /api/folder/staff-space
        staffSpace: 'folder/staff-space',
        //workflow工作流
        // 申请人列表
        workflowApplicantList: 'workflow/applicantList',
        // 审批人列表
        workflowApproverList: 'workflow/approverList',
        // 新建&更新
        workflowUpload: 'workflow/upload',
        // 删除
        workflowDelete: 'workflow/delete',
        // 所有工作流列表
        workflowLists: 'workflow/list',
        // 工作流详情
        workflowDetail: 'workflow/details',
        //已经存在workflow的列表
        workflowExistList: 'workflow/exist-list',
        // workflow 通过连接人查询公司列表
        workflowCooperatorCompany: 'workflow/get-cooperator-company',
        // 通过连接的workflow查询内部可选的连接人 （简称连接外部人员）
        workflowExternalCooperator: 'workflow/get-internal-cooperator',
        // workflow 查询当前公司所有部门
        workflowDepartmentList: 'workflow/department-list',
        //mission
        missionList: 'mission/list',
        // mission分页列表
        missionPagerList: 'mission/list-pager',
        // mission详情
        missionDetail: 'mission/showDetails',
        //	新建Mission
        missionUpload: 'mission/upload',
        //获取 下拉列表人员
        missionUserInfoList: 'mission/user-info-list',
        //  获取
        //    mission/fetch-subordinate
        missionFetchSubordinate: 'mission/fetch-subordinate',
        //  获取支付的Mission列表
        missionExpenseList: 'mission/expense-list',
        //  获取mission的token
        missionGetToken: 'mission/get-token',
        //  删除project的子 mission
        removeProjectChild: 'mission/remove-project-child',
        // 加link /api/mission/fetch-link-list
        fetchLinkList: 'mission/fetch-link-list',
        //  地图加ping
        missionMapPin: 'mission/map-pin',
        missionMapPinList: 'mission/map-pin-list',
        //  地图删除ping
        removeMapPin: 'mission/remove-map-pin',
        //mission下的workflow
        applicationWorkflowList: 'workflow/application-workflow-list',
        // mission日历pin修改
        missionCalendarPinAdd: 'mission/mission-pin-add',
        missionCalendarPinDelete: 'mission/mission-pin-remove',
        missionCalendarPinUpdate: 'mission/mission-pin-update',
        // mission的普通操作
        //  api/mission/common/operation (accept/refuse/approve)
        missionCommonOperation: 'mission/common/operation',
        //application/approve
        missionApplicationApprove: 'mission/application/approve',
        // complete
        missionComplete: 'mission/complete',
        //删除mission
        missionDelete: 'mission/delete',
        //转让这个mission
        missionTransfer: 'mission/transfer',
        //mission 状态变化
        missionStatusChange: 'mission/status/change',
        //target_upload
        targetUpload: 'mission/target/upload',
        //  会议记录者更新记录内容
        ///api/mission/+meeting-record
        meetingRecord: 'mission/+meeting-record',
        //  check这个mission
        missionCheck: 'mission/check',
        // bidding vote
        //     mission/bidding/vote
        biddingVote: 'mission/bidding/vote',
        //projectScheduleDetail
        projectScheduleDetail: 'mission/get-schedule',
        //mission搜索框搜索mission
        missionSearch: 'mission/search',
        //mission聊天组
        missionGetChatGroup: 'chat/get-mission-group',
        //添加meeting room
        meetingRoom: 'other/conference-room-upload',
        //得到meeting room 列表
        getMeetingRoomList: 'other/conference-room-list',
        //修改meeting room
        updateMeetingRoom: 'other/conference-room-upload',
        //删除meeting room
        deleteMeetingRoom: 'other/conference-room-delete',
        //预定会议室添加，列表，修改
        addMeetingPresere: 'other/conference-room-booking',
        meetingPresere: 'other/conference-room-booking-list',
        updateMeetingPresere: 'other/conference-room-booking',
        //会议室搜索
        searchMeeting: 'other/search-meeting-list',
        //  http://devapi-debug.blockbi.com/?url=/api/other/in-mail-send
        inMailSend: 'other/in-mail-send',
        //  other/fetch-in-mail-channel
        fetchInMailChannel: 'other/fetch-in-mail-channel',
        //tips
        getHomeDashboard: 'other/promoted-show',
        //闹钟
        alarmAdd: 'other/alarm-add',
        //闹钟删除
        alarmDelete: 'other/alarm-delete',
        //闹钟修改
        alarmUpdate: 'other/alarm-update',
        //new tips
        createTips: 'other/tips-add',
        //update tips
        modificationTips: 'other/tips-update',
        //removeTips
        removeTips: 'other/tips-delete',
        //showTipsDetailApi
        showTipsDetailApi: 'other/tips-detail',
        //聊天生成shareid
        generateShareId: 'chat/share-add',
        userGetSettingNote: 'user/get-setting-note',
        userSetSettingNote: 'user/set-setting-note',
        importStructure: 'structure/import-initialization',
        achieveTimeLine: 'homepage/timeline-show',
        spaceManage: 'folder/staff-space',
        //全局搜索 /api/homepage/search-general
        searchGeneral: 'homepage/search-general',
        //invite people
        invitePeople: 'other/invite',
        //
        applicationVacationUsage: 'company/vacation-usage',
        //  /api/company/attention
        companyAttention: 'company/attention',
        //  company/attention-attendance-list
        attentionList: 'company/attention-attendance-list',
        //  company/out-office
        outOffice: 'company/out-office',
        //vacation list
        getVacationList: 'company/attention-vacation-list',
        //
        remainingVacationDays: 'company/remaining-vacation-days',
        containNationalHoliday: 'company/contain-national-holiday',
        createNationalHoliday: 'company/create-national-holiday',
        showNationalHoliday: 'company/show-national-holiday',
        deleteNationalHoliday: 'company/delete-national-holiday',
        updateNationalHoliday: 'company/update-national-holiday',
        showWorKTime: 'company/show-work-time',
        createWorKTime: 'company/create-work-time',
        updateWorKTime: 'company/update-work-time',
        showAttendance: 'company/show-attendance' //显示考勤列表
    }
};
//# sourceMappingURL=api.config.js.map

/***/ }),

/***/ 264:
/***/ (function(module, exports) {

exports.env = 'local';

exports.localConfig = {
  APP_VERSION: '0.0.1',
  domain: 'http://localhost/',
  apiPrefix:'api',
  resourceDomain: 'http://devapi.blockbi.com/',
  resourceFolderDomain:  'http://devapi.blockbi.com/',
  resourceContactUsDomain:  'http://devadmin.blockbi.com/',
  socketDomain:'ws://192.168.1.100:9988/',
  requestByDomain: false,
  apiDomain : 'http://devapi.blockbi.com',
  debug: true,

};

exports.devConfig = {
  APP_VERSION: '0.0.1',
  domain: 'http://devapi.blockbi.com/',
  apiPrefix:'api',
  resourceDomain: 'http://devapi.blockbi.com/',
  resourceFolderDomain:  'http://devapi.blockbi.com/',
  resourceContactUsDomain:  'http://devadmin.blockbi.com/',
  socketDomain:'ws://192.168.1.100:9988/',
  requestByDomain: true,
  apiDomain : 'http://devapi.blockbi.com',
  debug: true
};

exports.uatConfig = {
  APP_VERSION: '0.0.1',
  domain: 'https://uatwww.blockbi.com/',
  apiPrefix:'api',
  resourceDomain: 'https://uatapi.blockbi.com/',
  resourceFolderDomain:  'https://uatapi.blockbi.com/',
  resourceContactUsDomain:  'http://uatadmin.blockbi.com/',
  socketDomain:'wss://uatapi.blockbi.com/',
  requestByDomain: true,
  apiDomain : 'https://uatapi.blockbi.com',
  debug: false
};

// exports.prodConfig = {
//   APP_VERSION: '0.0.1',
//   domain: 'http://localhost/',
//   apiPrefix:'api',
//   resourceDomain: 'http://devapi.blockbi.com/',
//   resourceFolderDomain:  'http://devapi.blockbi.com/',
//   socketDomain:'ws://dev-bi-im.blockbi.com:9988/',
//   requestByDomain: true,
//   apiDomain : 'http://devapi.blockbi.com',
//   debug: false
// };


/***/ }),

/***/ 265:
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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/15.
 */
const dialogs_1 = __webpack_require__(163);
const core_1 = __webpack_require__(0);
const ionic_angular_1 = __webpack_require__(6);
let DialogService = class DialogService {
    constructor(dialogs, alertCtrl) {
        this.dialogs = dialogs;
        this.alertCtrl = alertCtrl;
    }
    /**
     * alert框
     * @return {Promise<void>}
     */
    alert(text) {
        return this.dialogs.alert(text)
            .then(() => console.log('Dialog alert dismissed'))
            .catch(e => console.log('Error displaying dialog', e));
    }
    confirm() {
        this.dialogs.confirm('confirm!')
            .then(() => console.log('Dialog confirm dismissed'))
            .catch(e => console.log('Error displaying dialog', e));
    }
    /**
     * basic 基础警告框
     */
    showAlert(title, subTitle, callback) {
        let alert = this.alertCtrl.create({
            title: title ? title : 'warning',
            subTitle: subTitle ? subTitle : '',
            buttons: [{
                    text: 'OK',
                    handler: () => {
                        if (callback) {
                            callback();
                        }
                    }
                }]
        });
        alert.present();
    }
    showConfirm(title, message, callback) {
        let confirm = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'Cancel',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: () => {
                        if (callback) {
                            callback();
                        }
                    }
                }
            ]
        });
        confirm.present();
    }
};
DialogService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [dialogs_1.Dialogs,
        ionic_angular_1.AlertController])
], DialogService);
exports.DialogService = DialogService;
//# sourceMappingURL=dialog.service.js.map

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/30.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(0);
let FileService = class FileService {
    constructor() {
        this.sizeConfig = [20, 36, 80, 230, 300, 380];
        this.defaultSize = 80;
    }
    /**
     * 可用尺寸数组
     * @return {any}
     */
    getAvilableSize() {
        return this.sizeConfig;
    }
    /**
     * 重新获取图片地址
     * @param size
     * @param imgPath
     * @returns {string}
     */
    getImagePath(size, imgPath) {
        let imgSize = this.defaultSize;
        if (size > 0) {
            if (this.sizeConfig.indexOf(size) !== -1) {
                imgSize = size;
            }
        }
        let imgSizeStr = '_' + imgSize + '_' + imgSize;
        for (let perKey in this.sizeConfig) {
            let sizeStr = '_' + this.sizeConfig[perKey] + '_' + this.sizeConfig[perKey];
            if (imgPath && imgPath.indexOf(sizeStr) !== -1) {
                imgPath = imgPath.replace(sizeStr, imgSizeStr);
                break;
            }
        }
        return imgPath;
    }
};
FileService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], FileService);
exports.FileService = FileService;
//# sourceMappingURL=file.service.js.map

/***/ }),

/***/ 275:
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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by christine
 * on 2017/10/24.
 */
const core_1 = __webpack_require__(0);
const dateFormat = __webpack_require__(276);
let DateService = class DateService {
    constructor() {
        this.defaultFormat = 'HH:MM ddS mmm yyyy';
        this.dateWord = {
            //月份
            month: ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'],
            monthSmall: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            //周
            week: ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
                'Thursday', 'Friday', 'Saturday'],
            weekSmall: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thurs.', 'Fri.', 'Sat.']
        };
    }
    /**
     *日期的非UTC字符串
     * @param date 需要格式化的日期对象
     * @param sFormat 输出格式,默认为yyyy-MM-dd                        年：y，月：M，日：d，时：h，分：m，秒：s
     * @example  dateFormat(new Date())                               "2017-02-28"
     * @example  dateFormat(new Date(),'yyyy-MM-dd')                  "2017-02-28"
     * @example  dateFormat(new Date(),'yyyy-MM-dd HH:mm:ss')         "2017-02-28 13:24:00"   ps:HH:24小时制
     * @example  dateFormat(new Date(),'yyyy-MM-dd hh:mm:ss')         "2017-02-28 01:24:00"   ps:hh:12小时制
     * @example  dateFormat(new Date(),'hh:mm')                       "09:24"
     * @example  dateFormat(new Date(),'yyyy-MM-ddTHH:mm:ss+08:00')   "2017-02-28T13:24:00+08:00"
     * @example  dateFormat(new Date('2017-02-28 13:24:00'),'yyyy-MM-ddTHH:mm:ss+08:00')   "2017-02-28T13:24:00+08:00"
     * @returns {string}
     */
    dateFormat(date, sFormat) {
        if (!sFormat) {
            sFormat = 'yyyy-MM-dd HH:mm:ss';
        }
        let time = {
            Year: 0,
            TYear: '0',
            Month: 0,
            TMonth: '0',
            SMonth: '0',
            LMonth: '0',
            Day: 0,
            TDay: '0',
            SDay: '0',
            LDay: '0',
            Hour: 0,
            THour: '0',
            hour: 0,
            Thour: '0',
            Minute: 0,
            TMinute: '0',
            Second: 0,
            TSecond: '0',
            Millisecond: 0
        };
        time.Year = date.getFullYear();
        time.TYear = String(time.Year).substr(2);
        time.Month = date.getMonth() + 1;
        time.TMonth = time.Month < 10 ? "0" + time.Month : String(time.Month);
        time.SMonth = this.dateWord.monthSmall[date.getMonth()];
        time.LMonth = this.dateWord.month[date.getMonth()];
        time.Day = date.getDate();
        time.TDay = time.Day < 10 ? "0" + time.Day : String(time.Day);
        time.SDay = this.dateWord.weekSmall[date.getDay()];
        time.LDay = this.dateWord.week[date.getDay()];
        time.Hour = date.getHours();
        time.THour = time.Hour < 10 ? "0" + time.Hour : String(time.Hour);
        time.hour = time.Hour < 13 ? time.Hour : time.Hour - 12;
        time.Thour = time.hour < 10 ? "0" + time.hour : String(time.hour);
        time.Minute = date.getMinutes();
        time.TMinute = time.Minute < 10 ? "0" + time.Minute : String(time.Minute);
        time.Second = date.getSeconds();
        time.TSecond = time.Second < 10 ? "0" + time.Second : String(time.Second);
        time.Millisecond = date.getMilliseconds();
        return sFormat
            .replace(/dddd/ig, time.LDay)
            .replace(/ddd/ig, time.SDay)
            .replace(/dd/ig, time.TDay)
            .replace(/MMMM/g, time.LMonth)
            .replace(/MMM/g, time.SMonth)
            .replace(/MM/g, time.TMonth)
            .replace(/yyyy/ig, String(time.Year))
            .replace(/yy/ig, time.TYear)
            .replace(/HH/ig, time.THour)
            .replace(/hh/ig, time.Thour)
            .replace(/mm/g, time.TMinute)
            .replace(/ss/ig, time.TSecond)
            .replace(/fff/ig, String(time.Millisecond));
    }
    /**
     * 当前时间的UTC时间字符串
     * @param date
     * @param sFormat
     * @returns {string}
     */
    getNowUTCString(sFormat) {
        let date = new Date();
        if (!sFormat) {
            sFormat = 'yyyy-MM-dd HH:mm:ss';
        }
        let dateStr = this.formatUTC(date, sFormat);
        return dateStr;
    }
    /**
     * 将UTC时间转化为非UTC时间
     * @param date
     * @param formatString
     * @returns {string}
     */
    formatWithTimezone(date, formatString) {
        if (typeof date === 'string') {
            date = date.replace(/-/g, '/');
            date = new Date(date);
        }
        if (!formatString) {
            formatString = 'yyyy-MM-dd HH:mm:ss';
        }
        //本地时间和utc时间相差的毫秒数
        let offsetTime = new Date().getTimezoneOffset() * 60 * 1000;
        let localTime = date.getTime() - offsetTime;
        return this.dateFormat(new Date(localTime), formatString);
    }
    /**
     * 非utc时间转化为utc时间
     * @param date
     * @param formatString
     * @returns {string}
     */
    getUTCString(date, formatString) {
        if (typeof date === 'string') {
            date = date.replace(/-/g, '/');
            date = new Date(date);
        }
        if (!formatString) {
            formatString = 'yyyy-MM-dd HH:mm:ss';
        }
        //本地时间和utc时间相差的毫秒数
        let offsetTime = new Date().getTimezoneOffset() * 60 * 1000;
        let utcTime = date.getTime() + offsetTime;
        return this.dateFormat(new Date(utcTime), formatString);
    }
    /**
     * 得到UTC字符串
     * @param date
     * @param sFormat
     * @returns {string}
     */
    formatUTC(date, sFormat) {
        let time = {
            Year: 0,
            TYear: '0',
            Month: 0,
            TMonth: '0',
            SMonth: '0',
            LMonth: '0',
            Day: 0,
            TDay: '0',
            SDay: '0',
            LDay: '0',
            Hour: 0,
            THour: '0',
            hour: 0,
            Thour: '0',
            Minute: 0,
            TMinute: '0',
            Second: 0,
            TSecond: '0',
            Millisecond: 0
        };
        time.Year = date.getUTCFullYear();
        time.TYear = String(time.Year).substr(2);
        time.Month = date.getUTCMonth() + 1;
        time.TMonth = time.Month < 10 ? "0" + time.Month : String(time.Month);
        time.SMonth = this.dateWord.monthSmall[date.getUTCMonth()];
        time.LMonth = this.dateWord.month[date.getUTCMonth()];
        time.Day = date.getUTCDate();
        time.TDay = time.Day < 10 ? "0" + time.Day : String(time.Day);
        time.SDay = this.dateWord.weekSmall[date.getUTCDay()];
        time.LDay = this.dateWord.week[date.getUTCDay()];
        time.Hour = date.getUTCHours();
        time.THour = time.Hour < 10 ? "0" + time.Hour : String(time.Hour);
        time.hour = time.Hour < 13 ? time.Hour : time.Hour - 12;
        time.Thour = time.hour < 10 ? "0" + time.hour : String(time.hour);
        time.Minute = date.getUTCMinutes();
        time.TMinute = time.Minute < 10 ? "0" + time.Minute : String(time.Minute);
        time.Second = date.getUTCSeconds();
        time.TSecond = time.Second < 10 ? "0" + time.Second : String(time.Second);
        time.Millisecond = date.getUTCMilliseconds();
        return sFormat
            .replace(/dddd/ig, time.LDay)
            .replace(/ddd/ig, time.SDay)
            .replace(/dd/ig, time.TDay)
            .replace(/MMMM/g, time.LMonth)
            .replace(/MMM/g, time.SMonth)
            .replace(/MM/g, time.TMonth)
            .replace(/yyyy/ig, String(time.Year))
            .replace(/yy/ig, time.TYear)
            .replace(/HH/ig, time.THour)
            .replace(/hh/ig, time.Thour)
            .replace(/mm/g, time.TMinute)
            .replace(/ss/ig, time.TSecond)
            .replace(/fff/ig, String(time.Millisecond));
    }
    /**
     * 将日期转为指定格式,非utc时间
     * @param date
     * @param formatString
     * @returns string
     */
    formatLocal(date, formatString) {
        let format = this.defaultFormat;
        if (typeof formatString !== 'undefined') {
            format = formatString;
        }
        if (typeof date === 'string') {
            date = date.replace(/-/g, '/');
        }
        return dateFormat(date, format, false);
    }
};
DateService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], DateService);
exports.DateService = DateService;
//# sourceMappingURL=date.service.js.map

/***/ }),

/***/ 277:
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
const D3 = __webpack_require__(278);
let D3Service = class D3Service {
    /**
     * 初始化对象
     * @returns {any}
     */
    getInstance() {
        return D3;
    }
};
D3Service = __decorate([
    core_1.Injectable()
], D3Service);
exports.D3Service = D3Service;
//# sourceMappingURL=d3.service.js.map

/***/ }),

/***/ 279:
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
let TypeService = class TypeService {
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
    /**
     * 数组去重
     */
    RemoveDuplicateData(arr) {
        let ret = [];
        for (let i = 0, j = arr.length; i < j; i++) {
            if (ret.indexOf(arr[i]) === -1) {
                ret.push(arr[i]);
            }
        }
        return ret;
    }
    /**
     * 判断是字符串还是数字
     * e.g
     *  123         true
     * '123'       true
     * 'AAAAAAAA'  false
     * @param val
     * @returns {boolean}
     */
    isNumber(val) {
        return !isNaN(val);
    }
};
TypeService = __decorate([
    core_1.Injectable()
], TypeService);
exports.TypeService = TypeService;
//# sourceMappingURL=type.service.js.map

/***/ }),

/***/ 283:
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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/15.
 */
const core_1 = __webpack_require__(0);
const storage_1 = __webpack_require__(42);
const store_service_1 = __webpack_require__(51);
let UserStoreService = UserStoreService_1 = class UserStoreService extends store_service_1.StoreService {
    constructor(storage) {
        super(storage);
        this.storage = storage;
    }
    /**
     * 将api login-check接口的数据放入缓存
     * @param data
     */
    setUserInfo(data) {
        // user
        return this.storage.set(UserStoreService_1.STORE_KEY_USER_INFO, data).then().catch();
    }
    /**
     * 设置session_id
     * @param data
     * @return {Promise<any>}
     */
    setSessionId(data) {
        // session_id
        return this.storage.set(UserStoreService_1.STORE_KEY_SESSION_ID, data).then().catch();
    }
    /**
     * 设置公司列表
     * @param data
     * @return {Promise<any>}
     */
    setUserCompanyList(data) {
        //companies_information
        if (data.length > 0) {
            return Promise.all([
                this.setUserCurrentCompany(data[0]),
                this.storage.set(UserStoreService_1.STORE_KEY_COMPANY_LIST, data)
            ]).then();
        }
        else {
            return this.storage.set(UserStoreService_1.STORE_KEY_COMPANY_LIST, data).then();
        }
    }
    /**
     * 设置当前公司
     * @param data
     * @return {Promise<any>}
     */
    setUserCurrentCompany(data) {
        // companies_information[0]
        return this.storage.set(UserStoreService_1.STORE_KEY_COMPANY_CURRENT, data).then().catch();
    }
    /**
     * 获取登录用户数据
     * {name: string, email: string, work_name: string, work_email: string, uuid: string}
     * @param deal
     * @return {Promise<any>}
     */
    getUserInfo(deal) {
        return this.storage.get(UserStoreService_1.STORE_KEY_USER_INFO).then((v) => {
            deal(v);
        }).catch();
    }
    /**
     * 获取登录session id
     * @param deal
     * @return {Promise<any>}
     */
    getSessionId(deal) {
        return this.storage.get(UserStoreService_1.STORE_KEY_SESSION_ID).then((v) => deal(v)).catch();
    }
    /**
     * 获取所有可用公司列表
     * @param deal
     * @return {Promise<any>}
     */
    getUserCompanyList(deal) {
        return this.storage.get(UserStoreService_1.STORE_KEY_COMPANY_LIST).then((v) => deal(v)).catch();
    }
    /**
     * 获取当前公司信息
     * @param deal
     * @return {Promise<any>}
     */
    getUserCurrentCompany(deal) {
        return this.storage.get(UserStoreService_1.STORE_KEY_COMPANY_CURRENT).then((v) => deal(v)).catch();
    }
    /**
     * 获取当前公司CID
     * @param deal
     * @return {Promise<any>}
     */
    getCurrentCID(deal) {
        return this.storage.get(UserStoreService_1.STORE_KEY_COMPANY_CURRENT).then((v) => {
            if (v && v.hasOwnProperty('cid')) {
                deal(v.cid);
            }
            else {
                deal('');
            }
        }).catch();
    }
    /**
     * 获取当前用户uuid
     * @param deal
     * @return {Promise<any>}
     */
    getCurrentUUID(deal) {
        return this.storage.get(UserStoreService_1.STORE_KEY_USER_INFO).then((v) => {
            if (v && v.hasOwnProperty('uuid')) {
                deal(v.uuid);
            }
            else {
                deal('');
            }
        }).catch();
    }
    /**
     * 获取当前用户psid
     * @param deal
     * @return {Promise<any>}
     */
    getCurrentPSID(deal) {
        return this.storage.get(UserStoreService_1.STORE_KEY_COMPANY_CURRENT).then((v) => {
            if (v && v.hasOwnProperty('psid')) {
                deal(v.psid);
            }
            else {
                deal('');
            }
        }).catch();
    }
    /**
     * 当前用户姓名
     * @param deal
     * @return {Promise<any>}
     */
    getCurrentUserName(deal) {
        return this.storage.get(UserStoreService_1.STORE_KEY_USER_INFO).then((v) => {
            if (v && v.hasOwnProperty('work_name')) {
                deal(v.work_name);
            }
            else {
                deal('');
            }
        }).catch();
    }
    /**
     * 当前用户私人邮箱
     * @param deal
     * @return {Promise<any>}
     */
    getCurrentUserEmail(deal) {
        return this.storage.get(UserStoreService_1.STORE_KEY_USER_INFO).then((v) => {
            if (v && v.hasOwnProperty('email')) {
                deal(v.email);
            }
            else {
                deal('');
            }
        }).catch();
    }
    /**
     * 清除登录用户相关数据
     * @return {Promise<any>}
     */
    removeUserLoginData() {
        return Promise.all([
            this.storage.remove(UserStoreService_1.STORE_KEY_SESSION_ID),
            this.storage.remove(UserStoreService_1.STORE_KEY_CONTACT_LIST),
            this.storage.remove(UserStoreService_1.STORE_KEY_USER_INFO),
            this.storage.remove(UserStoreService_1.STORE_KEY_COMPANY_LIST),
            this.storage.remove(UserStoreService_1.STORE_KEY_COMPANY_CURRENT),
        ]).then().catch();
    }
    /**
     * 初始登录用户相关数据
     * @return {Promise<any>}
     */
    setUserLoginData(session_id, user_info, company_all) {
        return Promise.all([
            this.setSessionId(session_id),
            this.setUserInfo(user_info),
            this.setUserCompanyList(company_all)
        ]).then().catch();
    }
    /**
     * 存储contact_list
     */
    setContactList(data) {
        // contact_list
        return this.storage.set(UserStoreService_1.STORE_KEY_CONTACT_LIST, data).then().catch();
    }
    /**
     * 获取联系人列表
     */
    getContactList(deal) {
        return this.storage.get(UserStoreService_1.STORE_KEY_CONTACT_LIST).then((v) => {
            deal(v);
        }).catch();
    }
    /**
     * 删除联系人列表
     * @return {Promise<T>}
     */
    removeContactList() {
        return this.storage.remove(UserStoreService_1.STORE_KEY_CONTACT_LIST).then().catch();
    }
};
UserStoreService.STORE_KEY_USER_INFO = 'user';
UserStoreService.STORE_KEY_SESSION_ID = 'session_id';
UserStoreService.STORE_KEY_COMPANY_LIST = 'company_list';
UserStoreService.STORE_KEY_COMPANY_CURRENT = 'company_current';
UserStoreService.STORE_KEY_CONTACT_LIST = 'contact_list';
UserStoreService = UserStoreService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [storage_1.Storage])
], UserStoreService);
exports.UserStoreService = UserStoreService;
var UserStoreService_1;
//# sourceMappingURL=user-store.service.js.map

/***/ }),

/***/ 284:
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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by allen shan(allen.shan@blockbi.com)
 * on 2017/11/1.
 */
const core_1 = __webpack_require__(0);
const storage_1 = __webpack_require__(42);
const store_service_1 = __webpack_require__(51);
let ChatStoreService = ChatStoreService_1 = class ChatStoreService extends store_service_1.StoreService {
    constructor(storage) {
        super(storage);
        this.storage = storage;
    }
    /**
     * 存储chat-list
     */
    setChatChannelList(data) {
        return this.storage.set(ChatStoreService_1.STORE_KEY_CHAT_CHANNEL_LIST, data).then().catch();
    }
    /**
     * 获取chat-list
     */
    getChatChannelList(deal) {
        return this.storage.get(ChatStoreService_1.STORE_KEY_CHAT_CHANNEL_LIST).then((v) => deal(v)).catch();
    }
    /**
     * 从缓存删除chat-list
     */
    removeChatChannelList() {
        return this.storage.remove(ChatStoreService_1.STORE_KEY_CHAT_CHANNEL_LIST).then().catch();
    }
};
ChatStoreService.STORE_KEY_CHAT_CHANNEL_LIST = 'chat_channel_list';
ChatStoreService = ChatStoreService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [storage_1.Storage])
], ChatStoreService);
exports.ChatStoreService = ChatStoreService;
var ChatStoreService_1;
//# sourceMappingURL=chat-store.service.js.map

/***/ }),

/***/ 285:
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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/11.
 */
const core_1 = __webpack_require__(0);
const ionic_angular_1 = __webpack_require__(6);
const event_name_config_1 = __webpack_require__(15);
let BiFabBtnsComponent = class BiFabBtnsComponent {
    constructor(nav, event, view, renderer, modalCtrl, plt) {
        this.nav = nav;
        this.event = event;
        this.view = view;
        this.renderer = renderer;
        this.modalCtrl = modalCtrl;
        this.plt = plt;
        this.tabHome = 'home';
        this.tabChat = 'chat';
        this.tabFolder = 'folder';
        this.tabMission = 'mission';
        this.buttons = [];
        this.currentUrl = '';
    }
    initButtons(tabs) {
        this.currentUrl = this.nav.getActive() ? this.nav.getActive().id : '';
        switch (tabs.root) {
            case this.tabChat:
                this.buttons = [
                    { label: 'NEW CHAT CHANNEL', key: '2-1' },
                    { label: 'NEW POST', key: '2-2' },
                ];
                break;
            case this.tabFolder:
                this.buttons = [
                    { label: 'NEW FOLDER', key: '3-1' },
                    { label: 'UPLOAD FILES', key: '3-2' },
                ];
                break;
            case this.tabMission:
                this.buttons = [
                    { label: 'NEW MEETING', key: '4-1' },
                    { label: 'NEW ASSIGNMENT', key: '4-2' },
                    { label: 'NEW PROJECT', key: '4-3' },
                    { label: 'NEW APPLICATION', key: '4-4' },
                    { label: 'NEW TASK', key: '4-5' },
                ];
                break;
            case this.tabHome:
            default:
                this.buttons = [
                    { label: 'invite people', key: '1-1' },
                    { label: 'application of leave', key: '1-2' },
                    { label: 'out of office', key: '1-3' },
                    { label: 'clocking in', key: '1-4' },
                    { label: 'new tips', key: '1-5' }
                ];
                break;
        }
        console.log(' this.buttons ', this.buttons);
    }
    /**
     * adding a transition when pushing a new page
     * @param url
     */
    navTo(url) {
        let currentUrl = this.nav.getActive().id;
        if (currentUrl !== url) {
            this.nav.push(url).then(() => {
                const index = this.view.index;
                this.nav.remove(index);
            });
        }
    }
    expandPlusByRouter(event) {
        event.stopPropagation();
        console.log('event', event);
    }
    /**
     *
     */
    clickOnButtons(btn, fab) {
        this.addBtn.nativeElement.click();
        switch (btn.key) {
            case '2-1':
                this.event.publish(event_name_config_1.EventNameConfig.NEW_CHANNEL, { param: 'new-channel' });
                break;
            case '3-2':
                this.event.publish(event_name_config_1.EventNameConfig.UPLOAD_FILE, { param: 'upload-file', data: {} });
                break;
            case '1-5':
                this.event.publish(event_name_config_1.EventNameConfig.NEW_TIPS, { param: 'new-tips' });
                break;
            case '1-1':
                this.nav.push('invite-people');
                break;
        }
        fab.close();
    }
    /**
     * 点击添加
     */
    clickAdd() {
        let global = document.querySelector('.global-tab');
        let className = global.className;
        if (className.indexOf('filter') == -1) {
            this.renderer.setElementClass(global, 'filter', true);
        }
        else {
            this.renderer.setElementClass(global, 'filter', false);
        }
    }
};
__decorate([
    core_1.ViewChild('addBtn'),
    __metadata("design:type", Object)
], BiFabBtnsComponent.prototype, "addBtn", void 0);
BiFabBtnsComponent = __decorate([
    core_1.Component({
        selector: 'bi-fab-btns',template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/share/component/bi-footer/bi-fab-btns.html"*/'<div class="g-fab">\n    <ion-fab class="g-footer" center bottom #fab>\n        <button ion-fab (click)="clickAdd()">\n            <div #addBtn>\n                <ion-icon name="add"></ion-icon>\n            </div>\n        </button>\n        <ion-fab-list side="top" *ngIf="buttons.length">\n            <div ion-fab class="fab-detail" (click)="clickOnButtons(btn,fab)"\n                 *ngFor="let btn of buttons">\n                <span class="bi-icon-new-tips ion-fab-icon" *ngIf="btn.label == \'new tips\'"></span>\n                <span class="bi-icon-clocking-in ion-fab-icon" *ngIf="btn.label == \'clocking in\'"></span>\n                <span class="bi-icon-out-of-office ion-fab-icon" *ngIf="btn.label == \'out of office\'"></span>\n                <span class="bi-icon-application-of-leave ion-fab-icon" *ngIf="btn.label == \'application of leave\'"></span>\n                <span class="bi-icon-invite-people ion-fab-icon" *ngIf="btn.label == \'invite people\'"></span>\n                <span class="bi-icon-new-post ion-fab-icon" *ngIf="btn.label == \'NEW POST\'"></span>\n                <span class="bi-icon-new-chat-channel ion-fab-icon" *ngIf="btn.label == \'NEW CHAT CHANNEL\'"></span>\n                <span class="bi-icon-import-files ion-fab-icon" *ngIf="btn.label == \'UPLOAD FILES\'"></span>\n                <span class="bi-icon-new-folder ion-fab-icon" *ngIf="btn.label == \'NEW FOLDER\'"></span>\n                <i class="fab-title f23-f">{{btn.label.split(\' \')[0] | uppercase}} {{(btn.label.split(\' \')[2] ? btn.label.split(\' \')[1] : \'\') | uppercase}}</i>\n                <i class="fab-title f23-f">{{(btn.label.split(\' \')[2] ? btn.label.split(\' \')[2] : btn.label.split(\' \')[1]) | uppercase}}</i>\n               <!-- {{btn.label}}-->\n            </div>\n        </ion-fab-list>\n    </ion-fab>\n</div>\n\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/share/component/bi-footer/bi-fab-btns.html"*/
    }),
    __metadata("design:paramtypes", [ionic_angular_1.NavController,
        ionic_angular_1.Events,
        ionic_angular_1.ViewController,
        core_1.Renderer,
        ionic_angular_1.ModalController,
        ionic_angular_1.Platform])
], BiFabBtnsComponent);
exports.BiFabBtnsComponent = BiFabBtnsComponent;
//# sourceMappingURL=bi-fab-btns.component.js.map

/***/ }),

/***/ 286:
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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/11.
 */
const core_1 = __webpack_require__(0);
const ionic_angular_1 = __webpack_require__(6);
const event_name_config_1 = __webpack_require__(15);
let BiLogoComponent = class BiLogoComponent {
    constructor(event) {
        this.event = event;
    }
    goToHomepage() {
        this.event.publish(event_name_config_1.EventNameConfig.ROUTER_TO, { toUrl: 'homepage' });
    }
};
BiLogoComponent = __decorate([
    core_1.Component({
        selector: 'bi-logo',
        template: `<img src="/assets/icon/bi-logo.png" (click)="goToHomepage()"/>`
    }),
    __metadata("design:paramtypes", [ionic_angular_1.Events])
], BiLogoComponent);
exports.BiLogoComponent = BiLogoComponent;
//# sourceMappingURL=bi-logo.component.js.map

/***/ }),

/***/ 287:
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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(0);
const ionic_angular_1 = __webpack_require__(6);
const notification_message_1 = __webpack_require__(215);
/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/16.
 */
let BiNoticeComponent = class BiNoticeComponent {
    constructor(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    /**
     * 显示通知
     */
    showNotificationMessage(event) {
        event.stopPropagation();
        let modal = this.modalCtrl.create(notification_message_1.NotificationMessageComponent, {});
        modal.present();
    }
};
BiNoticeComponent = __decorate([
    core_1.Component({
        selector: 'bi-notice',
        template: `<div (click)="showNotificationMessage($event)"><span class="bi-icon-bell"></span></div>`,
    }),
    __metadata("design:paramtypes", [ionic_angular_1.NavController,
        ionic_angular_1.ModalController])
], BiNoticeComponent);
exports.BiNoticeComponent = BiNoticeComponent;
//# sourceMappingURL=bi-notice.component.js.map

/***/ }),

/***/ 288:
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
const base_model_service_1 = __webpack_require__(43);
const core_1 = __webpack_require__(0);
const api_service_1 = __webpack_require__(30);
//import {UserModelService} from "./user-model.service";
/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/4/21.
 */
let NotificationModelService = class NotificationModelService extends base_model_service_1.BaseModelService {
    constructor(api) {
        super(api);
        this.api = api;
    }
    /**
     * 批量获取通知需要显示用的详情，包括用户，任务，文件
     * user 可传psid和uuid
     * mission mid
     * file fid
     * {
     *  data:{
     *   user:[143,"1c496f1b2bd0aa14eeedb20990f66731"],
     *   mission:[346],
     *   file:[588],
     *   group: [12],
     *   tips: [12]
     *  }
     * }
     * @param data
     * @param callback
     */
    fetchNotificationFetchSummary(data, callback) {
        this.getData('notificationFetchSummary', { data: data }, callback);
    }
    /**
     * notification notice 数据
     * @param data
     * @param callBack
     */
    fetchNotice(data, callBack) {
        this.getData('fetchNotice', data, callBack);
    }
    /**
     * notification request 数据
     * @param data
     * @param callBack
     */
    fetchRequest(data, callBack) {
        this.getData('fetchRequest', data, callBack);
    }
    notificationUpdatedRequest(data, callBack) {
        this.getData('notificationUpdatedRequest', data, callBack);
    }
    /**
     * notification request 数据
     * @param callBack
     */
    fetchOffLineMessage(data, callBack) {
        this.getData('fetchOffLineMessage', null, callBack);
    }
};
NotificationModelService = __decorate([
    __param(0, core_1.Inject(api_service_1.ApiService)),
    __metadata("design:paramtypes", [api_service_1.ApiService])
], NotificationModelService);
exports.NotificationModelService = NotificationModelService;
//# sourceMappingURL=notification-model.service.js.map

/***/ }),

/***/ 289:
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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(0);
const ionic_angular_1 = __webpack_require__(6);
/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/16.
 */
let BiSearchComponent = class BiSearchComponent {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
};
BiSearchComponent = __decorate([
    core_1.Component({
        selector: 'bi-search',
        template: `
      <div>search</div>`
    }),
    __metadata("design:paramtypes", [ionic_angular_1.NavController])
], BiSearchComponent);
exports.BiSearchComponent = BiSearchComponent;
//# sourceMappingURL=bi-search.component.js.map

/***/ }),

/***/ 290:
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
/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/21.
 */
const core_1 = __webpack_require__(0);
const ionic_angular_1 = __webpack_require__(6);
const personal_switch_company_1 = __webpack_require__(397);
let BiSideMenuComponent = class BiSideMenuComponent {
    constructor(event, modalCtrl, userService) {
        this.event = event;
        this.modalCtrl = modalCtrl;
        this.userService = userService;
        this.menuHasOpened = false;
        this.contactListInit = false;
        this.settingGroup = {
            'privacy': ['account', 'password'],
            'pushing': ['gps', 'chat', 'structure-workflow', 'attention', 'folder', 'mission', ''],
            'support': ['about-us', 'contact-us', 'qa']
        };
        this.contactList = {
            Internal: [],
            Cooperator: [],
            Friend: []
        };
        this.originContactList = {
            Internal: [],
            Cooperator: [],
            Friend: []
        };
        this.contactListKeys = ['Internal', 'Cooperator', 'Friend'];
        this.searchResult = [];
        this.event.subscribe('contact-is-ready', () => {
            this.prepareContact();
        });
        this.event.subscribe('setting-is-ready', () => {
            this.prepareContact();
        });
    }
    set myContent(data) {
        this._mainContent = data;
    }
    get myContent() {
        return this._mainContent;
    }
    ngOnInit() {
        this.prepareUserInfo();
    }
    ngOnDestroy() {
        this.event.unsubscribe('contact-is-ready');
        this.event.unsubscribe('setting-is-ready');
    }
    prepareSettingList() {
    }
    prepareContact() {
        if (!this.contactListInit) {
            // 获取contact list
            this.userService.getContactList((staffList) => {
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
            this.userService.fetchCurrentUserInfo((userInfo, companyInfo) => {
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
    filterContactList(ev) {
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
                        let toFind = self[index].work_name.toLowerCase();
                        let find = toFind.indexOf(val.toLowerCase());
                        if (find !== -1) {
                            findArr[group].push(self[index]);
                        }
                    }
                    else {
                        console.error('this.contactList[k] error, no work_name', self[index]);
                    }
                });
                this.contactList[group] = findArr[group];
            }
        }
        else {
            for (let k in this.originContactList) {
                this.contactList[k] = this.originContactList[k];
            }
            this.searchResult = [];
        }
        console.log('findArr', findArr);
        // TODO: filter via API
    }
    ngAfterViewInit() {
    }
    slideChanged(event) {
    }
    /**
     * 切换公司
     */
    switchCompany(event) {
        event.stopPropagation();
        let modal = this.modalCtrl.create(personal_switch_company_1.PersonalSwitchCompanyPage);
        modal.present();
    }
};
__decorate([
    core_1.ViewChild('slides'),
    __metadata("design:type", typeof (_a = typeof ionic_angular_1.Slides !== "undefined" && ionic_angular_1.Slides) === "function" && _a || Object)
], BiSideMenuComponent.prototype, "slides", void 0);
__decorate([
    core_1.ViewChild('sideMenu'),
    __metadata("design:type", typeof (_b = typeof ionic_angular_1.Menu !== "undefined" && ionic_angular_1.Menu) === "function" && _b || Object)
], BiSideMenuComponent.prototype, "sideMenu", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], BiSideMenuComponent.prototype, "myContent", null);
BiSideMenuComponent = __decorate([
    core_1.Component({
        selector: 'bi-side-menu',template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/share/component/bi-side-menu/bi-side-menu.html"*/'\n<!-- 左侧菜单 -->\n<ion-menu #sideMenu [content]="myContent" (ionOpen)="mainMenuOpened()">\n    <ion-slides #slides zoom="false" pager="true" *ngIf="menuHasOpened" (ionSlideDidChange)="slideChanged($event)">\n        <!-- 主菜单 -->\n        <ion-slide id="slide-nav">\n            <ion-list-header class="bi-list-header" *ngIf="userInfo">\n                <ion-avatar item-start>\n                    <img style="width:60px; height:60px;"\n                         src="{{userInfo.user_profile_path}}" alt="{{userInfo.work_name}}"/>\n                </ion-avatar>\n                <h2>{{userInfo.work_name}}</h2>\n                <p *ngIf="userCompanyInfo">{{userCompanyInfo.p_name}}</p>\n                <p *ngIf="userCompanyInfo" (click)="switchCompany($event)">{{userCompanyInfo.company_name}}</p>\n            </ion-list-header>\n            <ion-list class="bi-list">\n                <button ion-item no-lines>\n                    <ion-icon name="leaf" item-start></ion-icon>\n                    PERSONAL PROFILE\n                </button>\n                <button ion-item no-lines>\n                    <ion-icon name="leaf" item-start></ion-icon>\n                    ATTENTION\n                </button>\n            </ion-list>\n            <ion-list class="bi-list">\n                <button ion-item no-lines (click)="openContactList()">\n                    <ion-icon name="leaf" item-start></ion-icon>\n                    CONTACT LIST\n                </button>\n                <button ion-item no-lines>\n                    <ion-icon name="leaf" item-start></ion-icon>\n                    LANGUAGE\n                </button>\n            </ion-list>\n            <ion-list class="bi-list">\n                <button ion-item no-lines>\n                    <ion-icon name="leaf" item-start></ion-icon>\n                    BUSINESS PROFILE\n                </button>\n                <button ion-item no-lines>\n                    <ion-icon name="leaf" item-start></ion-icon>\n                    BUSINESS FUNCTION\n                </button>\n                <button ion-item no-lines>\n                    <ion-icon name="leaf" item-start></ion-icon>\n                    CREATE BUSINESS\n                </button>\n            </ion-list>\n            <ion-list class="bi-list">\n                <button ion-item no-lines>\n                    <ion-icon name="leaf" item-start></ion-icon>\n                    SETTING\n                </button>\n            </ion-list>\n        </ion-slide>\n        <!-- 联系人列表 -->\n        <ion-slide id="slide-contact-list" *ngIf="contactListInit">\n            <ion-header>\n                <ion-navbar>\n                    <ion-searchbar (ionInput)="filterContactList($event)"></ion-searchbar>\n                </ion-navbar>\n            </ion-header>\n            <ion-content style="height:100vh;">\n                <ion-list *ngFor="let groupKey of contactListKeys">\n                    <ion-item-divider>{{groupKey}}({{contactList[groupKey].length}})</ion-item-divider>\n                    <bi-profile *ngFor="let contact of contactList[groupKey]" [contact]="contact" [group]="groupKey"></bi-profile>\n                </ion-list>\n            </ion-content>\n        </ion-slide>\n        <!-- 待招聘列表 -->\n        <ion-slide id="slide-hire-list">\n            <h1 style="width: auto;max-width: 100%;">Slide 3</h1>\n        </ion-slide>\n\n    </ion-slides>\n</ion-menu>\n\n<!-- 右侧菜单 全局设置 -->\n<ion-menu side="right" [content]="myContent" (ionOpen)="settingMenuOpened()">\n    <p>settings</p>\n</ion-menu>'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/share/component/bi-side-menu/bi-side-menu.html"*/
    }),
    __param(2, core_1.Inject('user.service')),
    __metadata("design:paramtypes", [typeof (_c = typeof ionic_angular_1.Events !== "undefined" && ionic_angular_1.Events) === "function" && _c || Object, typeof (_d = typeof ionic_angular_1.ModalController !== "undefined" && ionic_angular_1.ModalController) === "function" && _d || Object, Object])
], BiSideMenuComponent);
exports.BiSideMenuComponent = BiSideMenuComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=bi-side-menu.component.js.map

/***/ }),

/***/ 291:
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
/**
 * Generated class for the MissionProgressComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
let BiMissionProgressComponent = class BiMissionProgressComponent {
    constructor(D3Service) {
        this.D3Service = D3Service;
        this.hasInit = false;
        this.eleId = 'progress-svg-el';
        this.d3 = this.D3Service.getInstance();
    }
    set componentName(data) {
        if (data) {
            this.cpName = data;
        }
    }
    get componentName() {
        return this.cpName;
    }
    ngAfterViewChecked() {
        if (typeof this.eleData !== 'undefined' && !this.hasInit) {
            if (this.eleData.data) {
                this.eleData = this.eleData.data;
            }
            this.hasInit = true;
            this.drawCalendarProgress();
        }
    }
    /**
     *
     * @param ele
     */
    drawCalendarProgress() {
        /*    console.log('mission progress');*/
        let painter;
        if (this.cpName) {
            painter = this.d3.select(this.cpName).select('#' + this.eleId + '-' + this.eleData.mid);
        }
        else {
            painter = this.d3.select('#' + this.eleId + '-' + this.eleData.mid);
        }
        if (this.hasInit) {
            let g = painter.insert('svg').append('g').attr('class', 'progress-canvas');
            // 未完成条
            let text = '';
            if (this.eleData.todoProgressTime !== '') {
                text = this.eleData.todoProgressTime;
                g.append('rect').attr('width', this.eleData.fillLengthTodo + '%').attr('height', '12').attr('rx', 7)
                    .attr('style', 'fill:' + this.eleData.fillColorTodo);
            }
            // 进行条
            if (this.eleData.doingProgressTime !== '') {
                text = this.eleData.doingProgressTime;
                g.append('rect').attr('width', this.eleData.fillLengthDoing + '%').attr('height', '12').attr('rx', 7)
                    .attr('style', 'fill:' + this.eleData.fillColorDoing);
            }
            // 完成条
            if (this.eleData.doneProgressTime !== '') {
                text = this.eleData.doneProgressTime;
                g.append('rect').attr('width', this.eleData.fillLengthDone + '%').attr('height', '12').attr('rx', 7)
                    .attr('style', 'fill:' + this.eleData.fillColorDone);
            }
            // 同时存在进行中和未完成条
            let textPos = 50;
            if (this.eleData.doingProgressTime !== '' && this.eleData.todoProgressTime !== '') {
                // textPos = parseInt(this.eleData.fillLengthDoing) / 2 - 5.5;
                textPos = parseInt(this.eleData.fillLengthDoing) / 2;
            }
            let textNode = g.append('text').attr('x', textPos + '%')
                .attr('y', '10').text(text).attr('style', 'font-size:12px;fill:#fff;');
            textNode.attr('transform', `translate(${-textNode.node().getBBox().width / 2},0)`);
            // 如果是Application, 同意人时间节点条
            this.eleData.hasDrawed = true;
        }
    }
};
__decorate([
    core_1.Input('eleData'),
    __metadata("design:type", Object)
], BiMissionProgressComponent.prototype, "eleData", void 0);
__decorate([
    core_1.Input('componentName'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], BiMissionProgressComponent.prototype, "componentName", null);
BiMissionProgressComponent = __decorate([
    core_1.Component({
        selector: 'bi-mission-progress',template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/share/component/bi-mission-progress/bi-mission-progress.html"*/'<!-- Generated template for the MissionProgressComponent component -->\n<div class="progress-svg-el" id="{{eleId + \'-\' + eleData?.mid}}">\n</div>\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/share/component/bi-mission-progress/bi-mission-progress.html"*/
    }),
    __param(0, core_1.Inject('d3.service')),
    __metadata("design:paramtypes", [Object])
], BiMissionProgressComponent);
exports.BiMissionProgressComponent = BiMissionProgressComponent;
//# sourceMappingURL=bi-mission-progress.js.map

/***/ }),

/***/ 292:
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
const event_name_config_1 = __webpack_require__(15);
/**
 * Generated class for the PublicSelectInterfaceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
let PublicSelectInterfaceComponent = class PublicSelectInterfaceComponent {
    constructor(modalCtrl, events, appConfig) {
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.appConfig = appConfig;
        this.selectItemArray = [];
        this.outPutSelectChange = new core_1.EventEmitter();
        this.dealEvent();
    }
    set dropDownOption(param) {
        if (param) {
            this.publicDropDownObj = param;
            this.readOnly = this.publicDropDownObj.settings.readonly;
        }
    }
    set selectedOption(param) {
        if (param) {
            this.selectItemArray = param;
        }
    }
    ngOnDestroy() {
        this.events.unsubscribe(event_name_config_1.EventNameConfig.PUBLIC_SELECT);
    }
    /**
     * 处理事件
     */
    dealEvent() {
        //选择事件
        this.events.subscribe(event_name_config_1.EventNameConfig.PUBLIC_SELECT, (params) => {
            this.selectItemArray = params.data;
            this.outPutSelectChange.emit(this.selectItemArray);
        });
    }
    /**
     * 点击选择
     */
    showPublicSelect(event) {
        event.stopPropagation();
        if (this.readOnly)
            return;
        let modal = this.modalCtrl.create(public_select_1.PublicSelectComponent, {
            data: this.publicDropDownObj,
            selectedArray: this.selectItemArray
        });
        modal.present();
    }
    /**
     * 删除选中项
     */
    deleteSelected(event, item) {
        event.stopPropagation();
        if (this.readOnly)
            return;
        item.isCurrent = false;
        for (let i in this.selectItemArray) {
            if (this.selectItemArray[i].id == item.id) {
                this.selectItemArray.splice(parseInt(i), 1);
            }
        }
        this.outPutSelectChange.emit(this.selectItemArray);
    }
};
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PublicSelectInterfaceComponent.prototype, "outPutSelectChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], PublicSelectInterfaceComponent.prototype, "dropDownOption", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], PublicSelectInterfaceComponent.prototype, "selectedOption", null);
PublicSelectInterfaceComponent = __decorate([
    core_1.Component({
        selector: 'public-select-interface',template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/share/component/public-select-interface/public-select-interface.html"*/'<!-- Generated template for the PublicSelectInterfaceComponent component -->\n<div class="g-title-content" (click)="showPublicSelect($event)">\n  <div class="choose-people-wrap" *ngFor="let item of selectItemArray">\n    <img src="{{item.imageLabel? appConfig.resourceDomain + item.imageLabel:\'\'}}" alt="">\n    <div class="choose-people-name">{{item.label}}</div>\n    <span class="bi-icon-esc" (click)="deleteSelected($event,item)"></span>\n  </div>\n  <span class="bi-icon-down" *ngIf="!readOnly"></span>\n</div>\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/share/component/public-select-interface/public-select-interface.html"*/
    }),
    __param(2, core_1.Inject('app.config')),
    __metadata("design:paramtypes", [ionic_angular_1.ModalController,
        ionic_angular_1.Events, Object])
], PublicSelectInterfaceComponent);
exports.PublicSelectInterfaceComponent = PublicSelectInterfaceComponent;
//# sourceMappingURL=public-select-interface.js.map

/***/ }),

/***/ 293:
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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(0);
const ionic_angular_1 = __webpack_require__(6);
let SlidesSkillDirective = class SlidesSkillDirective {
    constructor() {
    }
    ngOnInit() {
        if (this.prev) {
            this.prev.nativeElement.onclick = () => {
                this.slides.slidePrev();
            };
        }
        if (this.next) {
            this.next.nativeElement.onclick = () => {
                this.slides.slideNext();
            };
        }
    }
};
__decorate([
    core_1.ContentChild('slides'),
    __metadata("design:type", ionic_angular_1.Slides)
], SlidesSkillDirective.prototype, "slides", void 0);
__decorate([
    core_1.ContentChild('prev'),
    __metadata("design:type", Object)
], SlidesSkillDirective.prototype, "prev", void 0);
__decorate([
    core_1.ContentChild('next'),
    __metadata("design:type", Object)
], SlidesSkillDirective.prototype, "next", void 0);
SlidesSkillDirective = __decorate([
    core_1.Directive({
        selector: '[slidesSkill]'
    }),
    __metadata("design:paramtypes", [])
], SlidesSkillDirective);
exports.SlidesSkillDirective = SlidesSkillDirective;
//# sourceMappingURL=slides-skill.directive.js.map

/***/ }),

/***/ 294:
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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by allen shan(allen.shan@blockbi.com)
 * on 2017/11/8.
 */
/**
 * Created by allen shan(allen.shan@blockbi.com)
 * on 2017/11/1.
 */
const core_1 = __webpack_require__(0);
const storage_1 = __webpack_require__(42);
const store_service_1 = __webpack_require__(51);
let NotificationStoreService = NotificationStoreService_1 = class NotificationStoreService extends store_service_1.StoreService {
    constructor(storage) {
        super(storage);
        this.storage = storage;
    }
    /**
     * 存储个人类型 的 request 消息
     */
    setPersonalRequest(data) {
        return this.storage.set(NotificationStoreService_1.STORE_KEY_NOTIFICATION_PERSONAL_REQUEST, data).then().catch();
    }
    /**
     * 获取个人类型 的 request 消息
     */
    getPersonalRequest(deal) {
        return this.storage.get(NotificationStoreService_1.STORE_KEY_NOTIFICATION_PERSONAL_REQUEST).then((v) => deal(v)).catch();
    }
    /**
     * 从缓存删除个人类型 的 request 消息
     */
    removePersonalRequest() {
        return this.storage.remove(NotificationStoreService_1.STORE_KEY_NOTIFICATION_PERSONAL_REQUEST).then().catch();
    }
    /**
     * 清除所有notification相关数据
     * @returns {Promise<TResult|Promise<any>[]>|Promise<Promise<any>[]>}
     */
    removeAllNotificationData() {
        return Promise.all([
            this.storage.remove(NotificationStoreService_1.STORE_KEY_NOTIFICATION_PERSONAL_REQUEST)
        ]).then().catch();
    }
};
NotificationStoreService.STORE_KEY_NOTIFICATION_PERSONAL_REQUEST = 'notification_personal_request';
NotificationStoreService.STORE_KEY_NOTIFICATION_COMPANY_REQUEST = 'notification_company_request';
NotificationStoreService = NotificationStoreService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [storage_1.Storage])
], NotificationStoreService);
exports.NotificationStoreService = NotificationStoreService;
var NotificationStoreService_1;
//# sourceMappingURL=notification-store.service.js.map

/***/ }),

/***/ 295:
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
const _1 = __webpack_require__(167);
const forget_password_1 = __webpack_require__(217);
let LoginPage = class LoginPage {
    constructor(view, fb, loadingCtrl, modalCtrl, userService) {
        this.view = view;
        this.fb = fb;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.userService = userService;
        this.errorMsg = {};
        this.initForm();
    }
    get username() {
        return this.rForm.get('username');
    }
    get password() {
        return this.rForm.get('password');
    }
    ngOnDestroy() {
    }
    initForm() {
        let regEmail = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
        let regPhone = /^1\d{10}$/;
        this.rForm = this.fb.group({
            'username': [null, forms_1.Validators.compose([forms_1.Validators.required, _1.forbiddenUsernameValidator(regPhone, regEmail)])],
            'password': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(8), forms_1.Validators.maxLength(20)])],
            'validate': ''
        });
    }
    /**
     * 登录
     * @param form
     */
    doLogin(form) {
        if (this.rForm.valid) {
            this.presentLoading();
            this.userService.loginViaAPI({ username: form.username, password: form.password }, (res) => {
                this.dismissLoading();
                if (res.status === 1) {
                }
                else {
                    this.errorMsg.show = true;
                    this.errorMsg.text = res.message;
                    setTimeout(() => {
                        this.errorMsg.show = false;
                    }, 2000);
                }
            });
        }
    }
    clickOpenForgetPassword(event) {
        event.stopPropagation();
        let modal = this.modalCtrl.create(forget_password_1.ForgetPasswordComponent);
        modal.present();
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
};
LoginPage = __decorate([
    core_1.Component({template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/login/login.html"*/'<ion-content class="login-content">\n  <ion-title text-center>\n    <div class="bi-icon-logo login-log"></div>\n  </ion-title>\n  <form novalidate *ngIf="!isLogin && rForm" [formGroup]="rForm" (ngSubmit)="doLogin(rForm.value)">\n    <ion-list>\n\n      <ion-item class="item-input-style">\n        <ion-label floating class="f52-f">PERSONAL EMAIL OR PHONE</ion-label>\n        <ion-input type=\'text\' formControlName="username" class="f49-f" clearInput></ion-input>\n      </ion-item>\n      <div *ngIf="!username.valid && (username.dirty || username.touched)" text-left class="input-error-msg default-error-padding">\n        <div *ngIf="username.errors.required">\n          Email or phone is required.\n        </div>\n        <div *ngIf="username.errors.forbidden">\n          Email or phone is not correct.\n        </div>\n      </div>\n      <ion-item class="item-input-style">\n        <ion-label floating class="f52-f">PASSWORD</ion-label>\n        <ion-input type=\'password\' formControlName="password" class="f49-f" clearInput></ion-input>\n      </ion-item>\n      <div *ngIf="!password.valid && (password.dirty || password.touched)" text-left class="input-error-msg default-error-padding">\n        <div *ngIf="password.errors.required">\n          Password is required.\n        </div>\n        <div *ngIf="password.errors.minlength || password.errors.maxlength" >\n          The length of the password must be between 8 and 20.\n        </div>\n      </div>\n      <div class="input-error-msg default-error-padding" ion-text text-left  color="danger" *ngIf="errorMsg?.show">\n        {{errorMsg.text}}\n      </div>\n      <div class="login-but">\n        <button padding type="submit" ion-button block class="but-shadow">Login</button>\n      </div>\n  </ion-list>\n  </form>\n\n</ion-content>\n\n<ion-footer>\n    <div class="login-footer">\n      <button [navPush]="\'personal-register\'" float-left class="f9-f">SIGN UP NOW</button>\n      <button [navPush]="\'guide\'" float-left class="f9-f">guide</button>\n      <button float-right class="f9-f" [navPush]="\'forget-password\'">Forget password?</button>\n    </div>\n</ion-footer>\n\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/login/login.html"*/,
    }),
    __param(4, core_1.Inject('user.service')),
    __metadata("design:paramtypes", [ionic_angular_1.ViewController,
        forms_1.FormBuilder,
        ionic_angular_1.LoadingController,
        ionic_angular_1.ModalController, Object])
], LoginPage);
exports.LoginPage = LoginPage;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 296:
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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(0);
const ionic_angular_1 = __webpack_require__(6);
const index_1 = __webpack_require__(165);
const event_name_config_1 = __webpack_require__(15);
let TabsPage = class TabsPage {
    constructor(navParams, events) {
        this.navParams = navParams;
        this.events = events;
        // set the root pages for each tab
        this.tab1Root = 'home';
        this.tab2Root = 'chat';
        this.tab3Root = 'folder';
        this.tab4Root = 'mission-list';
        this.mySelectedIndex = this.navParams.data.tabIndex || 0;
    }
    ionViewWillEnter() {
        console.log('tab page ionViewWillEnter');
        this.events.publish(event_name_config_1.EventNameConfig.TAB_PAGE_ENTERED);
        this.dealEvent();
    }
    ionViewWillUnload() {
        console.log('tab page ionViewWillUnload');
    }
    ionViewDidLeave() {
        console.log('tab page ionViewDidLeave');
        if (this.events) {
            this.events.unsubscribe(event_name_config_1.EventNameConfig.TOGGLE_TABS_BUTTON);
        }
    }
    /**
     * 处理事件通知
     */
    dealEvent() {
        this.events.subscribe(event_name_config_1.EventNameConfig.TOGGLE_TABS_BUTTON, (params) => {
            let param = params.param;
            switch (param) {
                case 'hide-icon-tabs':
                    this.isHideTabs = true;
                    break;
                case 'show-icon-tabs':
                    this.isHideTabs = false;
                    break;
            }
        });
    }
    rebuildButtons(tabs) {
        this.BiFooter.initButtons(tabs);
    }
};
__decorate([
    core_1.ViewChild('BiFooter'),
    __metadata("design:type", index_1.BiFabBtnsComponent)
], TabsPage.prototype, "BiFooter", void 0);
__decorate([
    core_1.ViewChild('tabs'),
    __metadata("design:type", ionic_angular_1.Tabs)
], TabsPage.prototype, "tabs", void 0);
TabsPage = __decorate([
    core_1.Component({template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/tabs-page/tabs-page.html"*/'<bi-fab-btns #BiFooter [class.hide]="isHideTabs"></bi-fab-btns>\n<div class="global-tab">\n    <ion-tabs #tabs (ionChange)="rebuildButtons($event)" [selectedIndex]="mySelectedIndex" name="conference" [class.hide-tabs]="isHideTabs">\n        <ion-tab [root]="tab1Root" tabTitle="HOME" tabIcon="home" tabUrlPath="home"></ion-tab>\n        <ion-tab [root]="tab2Root" tabTitle="CHAT" tabIcon="contacts" tabUrlPath="chat"></ion-tab>\n        <ion-tab [root]="tab3Root" tabTitle="FOLDER" tabIcon="map" tabUrlPath="folder"></ion-tab>\n        <ion-tab [root]="tab4Root" tabTitle="MISSION" tabIcon="information-circle" tabUrlPath="mission"></ion-tab>\n    </ion-tabs>\n</div>\n\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/tabs-page/tabs-page.html"*/
    }),
    __metadata("design:paramtypes", [ionic_angular_1.NavParams,
        ionic_angular_1.Events])
], TabsPage);
exports.TabsPage = TabsPage;
//# sourceMappingURL=tabs-page.js.map

/***/ }),

/***/ 30:
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
/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/14.
 */
__webpack_require__(262);
const core_1 = __webpack_require__(0);
const http_1 = __webpack_require__(161);
const Observable_1 = __webpack_require__(9);
const api_config_1 = __webpack_require__(263);
const ionic_angular_1 = __webpack_require__(6);
const event_name_config_1 = __webpack_require__(15);
let ApiService = ApiService_1 = class ApiService {
    constructor(http, plt, event, appConfig, userStoreService, dialogService) {
        this.http = http;
        this.plt = plt;
        this.event = event;
        this.appConfig = appConfig;
        this.userStoreService = userStoreService;
        this.dialogService = dialogService;
        this.responseDataType = 'json';
        this.USER_SESSION_ID = 'session_id';
        this.httpHeader = new http_1.Headers();
        this.httpHeader.append('Content-Type', 'application/x-www-form-urlencoded');
        this.initSession();
    }
    initSession() {
        return this.userStoreService.getSessionId((v) => {
            this.sessionId = v;
        });
    }
    /**
     *
     * @param apiName
     */
    setRequestUrl(apiName) {
        let requestUrl = '';
        if (api_config_1.BlockBiRequest.IS_REQUEST_BY_DOMAIN) {
            requestUrl = api_config_1.BlockBiRequest.TARGET_DOMAIN;
        }
        if (api_config_1.BlockBiRequest.PROXY_DATA[apiName]) {
            requestUrl += '/' + api_config_1.BlockBiRequest.PROXY_DATA_PREFIX
                + '/' + api_config_1.BlockBiRequest.PROXY_DATA[apiName];
        }
        else {
            //console.error('API NAME IS ERROR!');
        }
        return requestUrl;
    }
    /**
     * 设置请求参数
     * @param d
     * @param then
     */
    setRequestData(d, then) {
        let requestData = '';
        //初始化Session
        let func = (data, requestFunc) => {
            let urlSearchParams = new http_1.URLSearchParams();
            if (data !== null && data) {
                for (let key in data) {
                    //let value: any = '';
                    if (data.hasOwnProperty(key)) {
                        if (typeof data[key] === 'object') {
                            urlSearchParams.append(key, JSON.stringify(data[key]));
                        }
                        else {
                            urlSearchParams.append(key, data[key]);
                        }
                    }
                }
            }
            if (this.sessionId) {
                urlSearchParams.append(this.USER_SESSION_ID, this.sessionId);
            }
            urlSearchParams.append('app_version', (this.plt.is('ios') ? 'i' : 'a') + this.appConfig.appVersion);
            requestData = urlSearchParams.toString();
            requestFunc(requestData);
        };
        this.initSession().then(() => { func(d, then); });
        //console.log('body>>>>>>>>>>>>>>>>', urlSearchParams, body);
    }
    /**
     * 发送GET请求
     * @param apiName
     * @param data
     * @param callback
     * @param responseDataType
     * @returns {any}
     */
    get(apiName, data, callback, responseDataType) {
        let requestUrl = this.setRequestUrl(apiName);
        let requestFunc = (requestData) => {
            //返回的数据类型
            if (responseDataType) {
                this.responseDataType = responseDataType;
            }
            if (requestData !== '') {
                requestUrl += '?' + requestData;
            }
            let response = this.response(this.http.get(requestUrl));
            if (typeof callback === 'function') {
                response.subscribe((data) => {
                    console.log('api service response1', data);
                    this.dealPageCommonStatus(data, callback);
                });
            }
            else {
                console.log('api service response2', data);
                return response;
            }
        };
        //请求发送的数据
        this.setRequestData(data, requestFunc);
    }
    /**
     *
     * @param apiName
     * @param data
     * @param callback
     */
    download(apiName, data, callback) {
    }
    /**
     * 发送POST请求
     * @param apiName
     * @param data
     * @param callback
     * @param responseDataType
     * @returns {*}
     */
    post(apiName, data, callback, responseDataType) {
        let requestUrl = this.setRequestUrl(apiName);
        //请求发送的数据
        let requestFunc = (requestData) => {
            //返回的数据类型
            if (responseDataType) {
                this.responseDataType = responseDataType;
            }
            let response = this.response(this.http.post(requestUrl, requestData, {
                headers: this.httpHeader
            }));
            console.info('**request api:' + requestUrl + '**, param: ', data);
            //如果是回调函数
            response.subscribe((data) => {
                //添加调试参数
                this.dealPageCommonStatus(data, callback);
            }, err => {
                this._serverError(err, requestUrl);
            });
        };
        this.setRequestData(data, requestFunc);
    }
    /**
     * 处理公用状态
     */
    dealPageCommonStatus(data, callback) {
        let loadCallback = true;
        if (data.hasOwnProperty('status')) {
            switch (data.status) {
                case ApiService_1.ERROR_CODE_NO_ACCESS:
                    loadCallback = false;
                    this.event.publish(event_name_config_1.EventNameConfig.ROUTER_TO, { toUrl: 'home' });
                    break;
                case ApiService_1.ERROR_CODE_NO_LOGIN:
                    loadCallback = false;
                    this.event.publish(event_name_config_1.EventNameConfig.USER_LOGOUT);
                    break;
                case ApiService_1.ERROR_CODE_SESSION_EXPIRED:
                    loadCallback = false;
                    this.event.publish(event_name_config_1.EventNameConfig.NOTIFICATION_GLOBAL, { act: ApiService_1.ERROR_CODE_SESSION_EXPIRED });
                    break;
                default:
                    loadCallback = true;
            }
        }
        else {
        }
        if (loadCallback && callback) {
            callback(data);
        }
    }
    /**
     * 处理返回数据的类型
     * @param httpRequest 请求实例
     */
    response(httpRequest) {
        let response;
        if (this.responseDataType === 'json') {
            response = httpRequest.map(res => res.json()); // could raise an error if invalid JSON
        }
        else if (this.responseDataType === 'text') {
            response = httpRequest.map(res => res.text()); // could raise an error if invalid text
            //response = httpRequest.map((res: any) => res.text());
        }
        else if (this.responseDataType === 'file') {
            response = httpRequest;
        }
        return response;
    }
    /**
     * 处理接口错误数据
     * @param err
     * @returns {any}
     * @private
     */
    _serverError(err, requestUrl) {
        if (err instanceof http_1.Response) {
            this.dialogService.alert({
                simpleContent: 'request: <b>' + requestUrl + '</b> failed. <br> Status:' + err.status + ', Error Msg:' + err.statusText
            });
            return Observable_1.Observable.throw('backend server error, ' + 'error: ' + err.status + ', errorMsg:' + err.statusText);
            // if you're using lite-server, use the following line
            // instead of the line above:
            //return Observable.throw(err.text() || 'backend server error');
        }
        else if (err instanceof SyntaxError) {
            this.dialogService.alert({
                simpleContent: 'request: <b>' + requestUrl + '</b> failed. <br> Detail:' + err.message
            });
            return Observable_1.Observable.throw(err.message || 'backend server error');
        }
        return Observable_1.Observable.throw(err || 'backend server error');
    }
    /**
     * 模拟表单提交
     * @param apiName
     * @param requestData
     * @param callback
     */
    ajaxFormSend(apiName, requestData, callback) {
        let url = this.setRequestUrl(apiName);
        let request = new XMLHttpRequest();
        let self = this;
        request.onreadystatechange = function () {
            if (request.readyState == XMLHttpRequest.DONE) {
                if (callback) {
                    if (ApiService_1.IsJsonString(request.responseText)) {
                        callback(JSON.parse(request.responseText));
                    }
                    else {
                        self.dialogService.alert({
                            simpleContent: 'request: <b>' + url + '</b> failed.'
                        });
                    }
                }
            }
        };
        request.open("POST", url);
        requestData.append(this.USER_SESSION_ID, this.sessionId);
        request.send(requestData);
    }
    /**
     * 是否为合法JSON字符串
     * @param str
     * @return {boolean}
     * @constructor
     */
    static IsJsonString(str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    }
};
ApiService.ERROR_CODE_NO_LOGIN = -10001;
ApiService.ERROR_CODE_NO_ACCESS = 400;
ApiService.ERROR_CODE_SESSION_EXPIRED = 501;
ApiService = ApiService_1 = __decorate([
    core_1.Injectable(),
    __param(3, core_1.Inject('app.config')),
    __param(4, core_1.Inject('user-store.service')),
    __param(5, core_1.Inject('dialog.service')),
    __metadata("design:paramtypes", [http_1.Http,
        ionic_angular_1.Platform,
        ionic_angular_1.Events, Object, Object, Object])
], ApiService);
exports.ApiService = ApiService;
var ApiService_1;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ 314:
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
const status_bar_1 = __webpack_require__(210);
const splash_screen_1 = __webpack_require__(209);
const notification_config_1 = __webpack_require__(56);
const api_service_1 = __webpack_require__(30);
const barcode_scanner_1 = __webpack_require__(211);
const event_name_config_1 = __webpack_require__(15);
let MyApp = class MyApp {
    constructor(platform, statusBar, events, splashScreen, modalCtrl, barcodeScanner, dialogService, userService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.events = events;
        this.splashScreen = splashScreen;
        this.modalCtrl = modalCtrl;
        this.barcodeScanner = barcodeScanner;
        this.dialogService = dialogService;
        this.userService = userService;
        this.tabHasInit = false;
        this.loginStatus = false;
        this.platformReady();
        this.platformResume();
    }
    platformResume() {
        this.platform.resume.subscribe(e => {
            this.onResume();
        });
    }
    platformReady() {
        this.dealEvent();
        this.dealWebSocketNotification();
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.userService.checkIsLogin((v) => {
                console.log('app init check login ?', v);
            });
        });
    }
    onResume() {
        console.log('resuming');
    }
    scanTest2() {
        this.barcodeScanner.scan({
            showFlipCameraButton: true,
            prompt: "Place a qrcode inside the scan area",
            formats: "QR_CODE",
            showTorchButton: true,
            resultDisplayDuration: 0,
            disableSuccessBeep: true
        }).then((barcodeData) => {
            // Success! Barcode data is here
            console.log('barcodeData', barcodeData);
        }, (err) => {
            // An error occurred
        });
    }
    /**
     * 自定义通知处理
     */
    dealEvent() {
        //用户退出登录
        this.events.subscribe(event_name_config_1.EventNameConfig.TAB_PAGE_ENTERED, () => {
            this.tabHasInit = true;
        });
        this.events.subscribe(event_name_config_1.EventNameConfig.USER_LOGOUT, () => {
            this.loginStatus = false;
            this.tabHasInit = false;
            this.nav.setRoot('login');
        });
        //用户登录
        this.events.subscribe(event_name_config_1.EventNameConfig.USER_LOGIN, () => {
            if (!this.loginStatus) {
                this.loginStatus = true;
            }
            if (this.nav.root != 'tab-page' && !this.tabHasInit) {
                //this.nav.setRoot('tabs-page');
                this.nav.setRoot('tabs-page');
            }
        });
        //跳转
        this.events.subscribe(event_name_config_1.EventNameConfig.ROUTER_TO, (param) => {
            let url = param.toUrl;
            console.log('dealEvent routerTo ' + url + ' param');
            switch (url) {
                case 'contact-details':
                    if (param && param.hasOwnProperty('data') && param.data.hasOwnProperty('contact')) {
                        let contact = param.data.contact;
                        let contactId = contact.hasOwnProperty('psid') ? contact.psid : contact.uuid;
                        if (typeof contactId == 'undefined' && contact.hasOwnProperty('uid')) {
                            contactId = contact.uid;
                        }
                        let profileModal = this.modalCtrl.create('contact-details', { contactId: contactId, contact: contact }, { showBackdrop: true });
                        profileModal.present();
                    }
                    break;
                case 'homepage':
                default:
                    if (this.nav.getActiveChildNavs().length) {
                        this.nav.getActiveChildNavs()[0].select(0);
                    }
            }
        });
    }
    /**
     * IM通知处理
     */
    dealWebSocketNotification() {
        this.events.subscribe(event_name_config_1.EventNameConfig.NOTIFICATION_GLOBAL, (param) => {
            if (param) {
                switch (param.act) {
                    case notification_config_1.NotificationConfig.ACT_USER_SESSION_EXPIRED:
                    case api_service_1.ApiService.ERROR_CODE_SESSION_EXPIRED:
                        this.loginStatus = false;
                        this.dialogService.alert('Your Session has been expired, please re login').then(this.userService.logoutViaAPI());
                        break;
                    case notification_config_1.NotificationConfig.ACT_SYSTEM_IM_LOGIN:
                        if (param.status === 1) {
                            console.log('im 登录成功 需要读取在线状态');
                        }
                        break;
                }
            }
        });
    }
};
__decorate([
    core_1.ViewChild('appContent'),
    __metadata("design:type", Object)
], MyApp.prototype, "appContent", void 0);
__decorate([
    core_1.ViewChild(ionic_angular_1.Nav),
    __metadata("design:type", ionic_angular_1.Nav)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    core_1.Component({template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/app/app.html"*/'<bi-side-menu *ngIf="loginStatus" [myContent]="appContent"></bi-side-menu>\n<ion-nav [root]="rootPage" #appContent style="background: none transparent;"></ion-nav>\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/app/app.html"*/
    }),
    __param(6, core_1.Inject('dialog.service')),
    __param(7, core_1.Inject('user.service')),
    __metadata("design:paramtypes", [ionic_angular_1.Platform,
        status_bar_1.StatusBar,
        ionic_angular_1.Events,
        splash_screen_1.SplashScreen,
        ionic_angular_1.ModalController,
        barcode_scanner_1.BarcodeScanner, Object, Object])
], MyApp);
exports.MyApp = MyApp;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 397:
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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(0);
const ionic_angular_1 = __webpack_require__(6);
/**
 * Generated class for the PersonalSwitchCompanyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let PersonalSwitchCompanyPage = class PersonalSwitchCompanyPage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad PersonalSwitchCompanyPage');
    }
};
PersonalSwitchCompanyPage = __decorate([
    core_1.Component({
        selector: 'page-personal-switch-company',template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/personal-switch-company/personal-switch-company.html"*/'<!--\n  Generated template for the PersonalSwitchCompanyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>switch-company</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/personal-switch-company/personal-switch-company.html"*/,
    }),
    __metadata("design:paramtypes", [ionic_angular_1.NavController, ionic_angular_1.NavParams])
], PersonalSwitchCompanyPage);
exports.PersonalSwitchCompanyPage = PersonalSwitchCompanyPage;
//# sourceMappingURL=personal-switch-company.js.map

/***/ }),

/***/ 43:
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
/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/15.
 */
const core_1 = __webpack_require__(0);
const api_service_1 = __webpack_require__(30);
let BaseModelService = class BaseModelService {
    constructor(api) {
        this.api = api;
        this.DEFAULT_METHOD = 'post';
    }
    /**
     * post 请求
     * @param apiName API名称
     * @param data  参数数据
     * @param callback 回调方法
     */
    post(apiName, data, callback) {
        return this.api.post(apiName, data, callback);
    }
    /**
     * get 请求
     * @param apiName API名称
     * @param data    参数数据
     * @param callback  回调方法
     */
    get(apiName, data, callback) {
        return this.api.get(apiName, data, callback);
    }
    /**
     * 获取远程数据
     * @param apiName
     * @param data
     * @param callback
     * @param method 提交方式
     */
    getData(apiName, data, callback, method) {
        method = (method ? method : this.DEFAULT_METHOD).toLocaleLowerCase();
        if (method === 'post') {
            return this.post(apiName, data, callback);
        }
        else if (method === 'get') {
            return this.get(apiName, data, callback);
        }
    }
};
BaseModelService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(api_service_1.ApiService)),
    __metadata("design:paramtypes", [api_service_1.ApiService])
], BaseModelService);
exports.BaseModelService = BaseModelService;
//# sourceMappingURL=base-model.service.js.map

/***/ }),

/***/ 51:
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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/14.
 */
const core_1 = __webpack_require__(0);
const storage_1 = __webpack_require__(42);
let StoreService = class StoreService {
    constructor(storage) {
        this.storage = storage;
    }
    /**
     * Get
     * @param key
     * @param successCallback 成功后，通常为赋值函数
     * @param failCallback
     */
    get(key, successCallback, failCallback) {
        this.storage.get(key)
            .then((v) => { successCallback(v); })
            .catch((err) => {
            console.error('error get key ' + key + ': ' + err);
            if (failCallback) {
                failCallback();
            }
        });
    }
    /**
     * Get
     * @param key
     * @param value
     * @param callback
     */
    set(key, value, callback) {
        this.storage.set(key, value)
            .then(() => {
            console.log('success set key');
            if (callback) {
                callback();
            }
        }).catch((err) => { console.log('error set key' + key + ': ', err); });
    }
    /**
     * 删除key
     * @param key
     * @param callback
     */
    remove(key, callback) {
        this.storage.remove(key)
            .then(() => {
            console.log('success remove key');
            if (callback) {
                callback();
            }
        }).catch((err) => { console.log('error remove key', err); });
    }
};
StoreService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [storage_1.Storage])
], StoreService);
exports.StoreService = StoreService;
//# sourceMappingURL=store.service.js.map

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/18.
 */
/**
 * 所有notification通讯数字长度为7位
 * 占位 AA BB CCC
 * AA位  1~99 设备号/渠道号 目前只有PC端
 *       99 - 模块间通讯
 1  -PC
 * BB位  01~99 模块
 01 - ACCOUNT   账户相关 (添加删除推荐好友)
 02 - CHAT      聊天相关
 03 - COMPANY   组织架构、公司相关 （招聘离职、权限变更、owner/builder更改、link to parent）
 04 - FOLDER    文件相关
 05 - WORKFLOW  工作流程相关
 06 - MISSION   任务相关
 07 - OTHER FUMCTION 其他功能
 99 - SYSTEM    其他（如站内信）

 * CCC位 001~999 行为号，不同用户行为身份操作排列组合为号
 * 如:
 *  1 01 001 代表IM通知PC端用户添加私人好友
 *  1 01 002 代表IM通知PC端用户接受私人好友
 *  1 01 003 代表IM通知PC端用户拒绝私人好友
 *  99 06 103 mission function track开启关闭
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationConfig = {
    ACTION_WINDOW_RESIZE: 50003,
    ACTION_GLOBAL_COMPONENT_SHOW: 50006,
    ACTION_GLOBAL_COMPONENT_CLOSE: 50008,
    /**---模块间通讯 开始 ---**/
    // Socket连接报错
    ACT_COMPONENT_IM_CONNECT_ERROR: 9901000,
    //切换公司
    ACT_COMPONENT_SWITCH_COMPANY: 9901001,
    //重新读取contact list
    ACT_COMPONENT_CONTACT_LIST_RELOAD: 9901002,
    //contact search result
    ACT_COMPONENT_CONTACT_SEARCH_RESULT: 9901003,
    //添加会议室
    ACT_COMPONENT_MEETING_ADD_ROOM: 9901004,
    //修改会议室
    ACT_COMPONENT_MEETING_UPDATE_ROOM: 9901005,
    //预定会议室
    ACT_COMPONENT_MEETING_ADD_BOOKING_ROOM: 9901006,
    ACT_COMPONENT_MEETING_UPDATE_BOOKING_ROOM: 9901007,
    //展开全屏聊天
    ACT_COMPONENT_CHAT_OPEN_FULL_DIALOG: 9902001,
    //收起全屏聊天
    ACT_COMPONENT_CHAT_CLOSE_FULL_DIALOG: 9902002,
    //点击聊天菜单中 某个私人聊天/群组聊天/任务聊天/收藏/最近
    ACT_COMPONENT_CHAT_MENU_CLICK: 9902003,
    //用户收藏/取消收藏组, 私人聊天
    ACT_COMPONENT_CHAT_ENSHRINE_OR_NOT: 9902004,
    //具体某个人聊天
    ACT_COMPONENT_CHAT_SPECIFIC_PEOPLE: 9902005,
    //打开创建群弹窗
    ACT_COMPONENT_CHAT_OPEN_CREATE_NEW_GROUP: 9902006,
    // CHAT POST设置Share to
    ACT_COMPONENT_CHAT_POST_SET_SHARETO: 9902007,
    // 聊天窗内展开某个用户详情
    ACT_COMPONENT_CHAT_SHOW_MEMBER_DETAIL: 9902008,
    // 点击过聊天菜单之后刷新读取的min,max时间
    ACT_COMPONENT_CHAT_MENU_UPDATE_TIME: 9902009,
    // CHAT content message input 点击加号后新建post
    ACT_COMPONENT_CHAT_CONTENT_MESSAGE_INPUT_NEW_POST: 9902010,
    // CHAT设置 chat post Share to 为空
    //清除全局模式的post share to后再点击 有currentGroup后无法选中
    ACT_COMPONENT_CHAT_POST_SET_SHARETO_NULL: 9902011,
    //刷新pin列表
    ACT_COMPONENT_CHAT_PIN_REFRESH: 9902012,
    //个人聊天半屏聊天数据同步
    ACT_SYNCHRONIZATION_PERSONAL_MESSAGE: 9902013,
    //新建tips
    ACT_COMPONENT_OTHER_TIPS: 9902014,
    ACT_SYNCHRONIZATION_PERSONAL_MESSAGE_MINI: 9902015,
    //post通知聊天模块转发
    ACT_COMPONENT_CHAT_FORWARD: 9902016,
    //删除群成员
    // ACT_COMPONENT_CHAT_DELETE_PERSONAL: 9902017,
    //修改tips
    ACT_COMPONENT_OTHER_UPDATE_TIPS: 9902018,
    //contact list加载完毕
    ACT_COMPONENT_OTHER_CONTACT_LOADED: 9902019,
    //向聊天发送post
    ACT_COMPONENT_CHAT_POST_SEND_POST: 9902020,
    //闹钟提示框 点击 向tips 传送当前tip的id
    ACT_COMPONENT_ALARM_SEND_TIPS: 9902021,
    //notification 通知到左侧
    //ACT_COMPONENT_UPDATE_COMPANY_OWNER: 9902022,
    //获取用户首页设置最大弹出框个数
    ACT_COMPONENT_SETTING_SEND_DIALOG: 9902023,
    //图片打PIN
    ACT_COMPONENT_IMAGE_PIN: 9902024,
    //content-message-post发送给post read的settings
    ACT_COMPONENT_CHAT_CONTENT_MESSAGE_POST_SEND_SETTINGS: 9902025,
    //未读消息提示
    ACT_COMPONENT_CHAT_HAS_UNREAD_MESSAGE: 9902026,
    //图片评论
    ACT_COMPONENT_IMAGE_COMMENT: 9902027,
    //打开图片
    ACT_COMPONENT_OPEN_IMAGE_DIALOG: 9902028,
    ACT_COMPONENT_CLOSE_IMAGE_DIALOG: 9902029,
    //同步图片like
    ACT_COMPONENT_IMAGE_LIKE: 9902030,
    ACT_COMPONENT_IMAGE_DIALOG_REMOVE_MESSAGE: 9902031,
    //chat message search
    ACT_COMPONENT_CHAT_MESSAGE_SEARCH: 9902032,
    //search
    ACT_COMPONENT_SEARCH_CLOSE: 9902033,
    //post评论
    ACT_COMPONENT_CHAT_POST_COMMENT: 9902034,
    // 确认共享文件
    ACT_COMPONENT_CHAT_SHARE_FILE: 9902035,
    // tips列表刷新
    ACT_COMPONENT_TIPS_RELOAD: 9902036,
    // chat菜单刷新
    ACT_COMPONENT_CHAT_MENU_RELOAD: 9902037,
    // @用户
    ACT_COMPONENT_CHAT_AT_USER: 9902038,
    //点击打开聊天窗口
    ACT_COMPONENT_CHAT_SEARCH_OPEN_CHAT_GROUP: 9902039,
    ACT_COMPONENT_CHAT_PIN_OPEN_MESSAGE: 9902040,
    ACT_COMPONENT_NOTIFICATION_SELF_MESSAGE: 9902041,
    ACT_COMPONENT_NOTIFICATION_UPDATE_SHARE_HOLDER: 9902042,
    ACT_COMPONENT_NOTIFICATION_UPDATE_OWNER: 9902043,
    ACT_COMPONENT_CHAT_POST_REVOKE: 9902044,
    ACT_COMPONENT_IMAGE_DIALOG_FORWARD_MESSAGE: 9902045,
    ACT_COMPONENT_IMPORT_BI_FILE: 9902046,
    ACT_COMPONENT_REMOVE_MESSAGE_FROM_PIN_LIST: 9902047,
    ACT_COMPONENT_CHAT_FILE_UPLOAD: 9902048,
    ACT_COMPONENT_IMPORT_FILE_TO_POST: 9902049,
    ACT_COMPONENT_SYNCHRONIZATION_GROUP_MESSAGE: 9902050,
    // 离线Notification通知
    ACT_COMPONENT_NOTIFICATION_READ_OFFLINE: 9999001,
    ACT_COMPONENT_NOTIFICATION_PUSH_DATA: 9999002,
    ACT_COMPONENT_NOTIFICATION_DELETE_FRIEND: 9999003,
    ACT_COMPONENT_NOTIFICATION_HANDLED_STATUS: 9999004,
    ACT_COMPONENT_NOTIFICATION_SELF_OFFLINE_STATUS: 9999005,
    ACT_NOTIFICATION_ADD_FRIEND: 9999006,
    ACT_NOTIFICATION_AGREE_HIRE: 9999007,
    ACT_NOTIFICATION_GROUP_NAME_MODIFY: 9999008,
    ACT_NOTIFICATION_COMPANY_CEO_MODIFY: 9999009,
    //folder
    ACTION_NEW_FOLDER: 990401,
    ACTION_UPLOAD_FILE: 990402,
    ACTION_DELETE_FILE: 990403,
    ACTION_COPY_FILE: 990405,
    ACTION_RENAME_FILE: 990406,
    ACTION_TRANSFER_FILE: 990407,
    ACTION_MOVE_FILE: 990408,
    ACTION_STARRED_FILE: 990409,
    ACTION_FILE_CHOOSE_CHANGE: 990410,
    ACTION_PASTE_FILE: 990411,
    //mission模块
    ACTION_MEETING_ATTENDEE_CHANGE: 990601,
    ACTION_ASSIGNMENT_OPERATOR_CHANGE: 990602,
    ACTION_TASk_OPERATOR_CHANGE: 990603,
    ACTION_TASK_APPROVER_CHANGE: 990604,
    ACTION_TASK_BIDDER_CHANGE: 990605,
    ACTION_TASK_PUBLISHER_IDENTITY_CHANGE: 990606,
    ACTION_TASK_INIT_TARGET: 990607,
    ACTION_ASSIGNMENT_INIT_TARGET: 990608,
    //mission function 的开启关闭
    ACTION_MISSION_FUNCTION_PARTICIPANT: 990609,
    ACTION_MISSION_FUNCTION_RECORDER: 990610,
    ACTION_MISSION_FUNCTION_IMPORTANCE: 990611,
    ACTION_MISSION_FUNCTION_TRACK: 990612,
    ACTION_MISSION_FUNCTION_TARGET: 990613,
    ACTION_MISSION_FUNCTION_BIDDING: 990614,
    ACTION_MISSION_FUNCTION_EXPENSE: 990615,
    //mission folder
    ACT_COMPONENT_MISSION_FOLDER_CREATE: 990620,
    ACT_COMPONENT_MISSION_FOLDER_DELETE: 990621,
    ACT_COMPONENT_MISSION_FILE_UPLOAD: 990622,
    ACT_COMPONENT_MISSION_IMPORT_FILE: 990623,
    //日历添加pin
    ACT_COMPONENT_MISSION_CALENDAR_ADD_PIN: 990624,
    //日历修改pin
    ACT_COMPONENT_MISSION_CALENDAR_UPDATE_PIN: 990625,
    //打开dialog
    ACT_COMPONENT_USER_ACCOUNT_RESET_PWD: 9901008,
    ACT_COMPONENT_USER_ACCOUNT_RESET_ACCOUNT: 9901009,
    //dialog 发送当前position
    ACT_DIALOG_SERVICE_POSITION: 9903001,
    //更新vacation天数
    ACT_COMPONENT_VACATION_UPDATE_VACATION: 990701,
    //更新国家法定假日
    ACT_COMPONENT_UPDATE_NATIONAL_HOLIDAY: 990702,
    //账户email修改
    ACT_COMPONENT_ACCOUNT_RESET_EMAIL: 9901010,
    /**---模块间通讯 结束 ---**/
    /**---IM间通讯 开始 ---**/
    //保持IM心跳
    ACT_SYSTEM_IM_KEEP_ONLINE: -1,
    //登陆IM
    ACT_SYSTEM_IM_LOGIN: 199001,
    //退出IM
    ACT_SYSTEM_IM_LOGOUT: 199002,
    //用户权限变更, 非静默通知，强制退出，解雇/辞职
    ACT_USER_PERMISSION_CHANGED: 199003,
    //用户登录状态过期
    ACT_USER_SESSION_EXPIRED: 199004,
    // 用户权限冻结, psid变为pending
    ACT_USER_PERMISSION_FREEZE: 199005,
    // 静默权限变更。 pending变为psid, 权限新增, 后期psid平移
    ACT_USER_PERMISSION_CHANGED_IN_SILENCE: 199006,
    //站内信
    ACT_IN_MAIL: 199010,
    //小闹钟
    ACT_SYSTEM_ALARM: 199020,
    //联系人
    ACT_USER_REQUEST_ADD_FRIEND: 101001,
    ACT_USER_NOTICE_ACCEPT_ADD_FRIEND: 101002,
    ACT_USER_NOTICE_REFUSE_ADD_FRIEND: 101003,
    ACT_USER_NOTICE_USER_DELETE_FRIEND: 101004,
    ACT_USER_REQUEST_RECOMMEND_USER: 101005,
    ACT_USER_REQUEST_RECOMMEND_ADD_FRIEND: 101006,
    ACT_USER_NOTICE_RECOMMEND_ACCEPT_ADD_FRIEND: 101007,
    ACT_USER_NOTICE_RECOMMEND_REFUSE_ADD_FRIEND: 101008,
    ACT_USER_NOTICE_REFUSE_RECOMMEND_ADD_FRIEND: 101009,
    // 群主邀请用户(被邀请用户收到)
    ACT_NOTICE_MASTER_GROUP_INVITE: 102002,
    ACT_REQUEST_MEMBER_GROUP_INVITE_RECEIVER: 102003,
    ACT_REQUEST_MEMBER_GROUP_INVITE: 102005,
    ACT_NOTICE_MEMBER_GROUP_INVITE_MASTER_ACCEPT: 102006,
    ACT_NOTICE_MEMBER_GROUP_INVITE_MASTER_REFUSE: 102007,
    ACT_NOTICE_MEMBER_GROUP_INVITE_ACCEPT: 102008,
    ACT_NOTICE_MEMBER_GROUP_INVITE_REFUSE: 102009,
    // 组织架构并行用户
    ACT_NOTICE_STRUCTURE_CONCURRENCY: 103001,
    // 工作流程并行用户
    ACT_NOTICE_WORKFLOW_CONCURRENCY: 103002,
    ACT_REQUEST_COMPANY_RELATIONSHIP: 103003,
    ACT_REQUEST_HIRE: 103004,
    ACT_NOTICE_HIRE_ACCEPT: 103005,
    ACT_NOTICE_HIRE_REFUSE: 103006,
    // 切换公司
    ACT_NOTICE_SWITCH_COMPANY: 103007,
    ACT_NOTICE_COMPANY_RELATIONSHIP_ACCEPT: 103008,
    ACT_NOTICE_COMPANY_RELATIONSHIP_REFUSE: 103009,
    //组织架构模块
    ACT_STRUCTURE_NOTICE_STRUCTURE_CHANGE: 103010,
    ACT_REQUEST_SET_COMPANY_ADMIN: 103020,
    ACT_REQUEST_SET_COMPANY_STRUCTURE_ADMIN: 103021,
    ACT_REQUEST_SHAREHOLDER_APPROVE: 103022,
    ACT_REQUEST_SHAREHOLDER_DISAPPROVE: 103023,
    ACT_REQUEST_SHAREHOLDER_APPROVE_STRUCTURE_ADMIN: 103024,
    ACT_REQUEST_SHAREHOLDER_DISAPPROVE_STRUCTURE_ADMIN: 103025,
    ACT_REQUEST_COMPANY_ADMIN_ACCEPT: 103026,
    ACT_REQUEST_COMPANY_ADMIN_REFUSE: 103027,
    ACT_REQUEST_COMPANY_STRUCTURE_ADMIN_ACCEPT: 103028,
    ACT_REQUEST_COMPANY_STRUCTURE_ADMIN_REFUSE: 103029,
    ACT_NOTICE_ADMIN_CHANGE: 103030,
    ACT_REQUEST_OUT_OFFICE_APPLY: 103043,
    ACT_NOTICE_OUT_OFFICE_ACCEPT: 103044,
    ACT_NOTICE_OUT_OFFICE_REFUSE: 103045,
    //用户切换聊天状态
    ACT_NOTICE_CHAT_USER_ONLINE_STATUS: 102015,
    //获取单个用户在线状态
    ACT_CHAT_USER_GET_STATUS: 102016,
    //修改群信息
    ACT_NOTICE_GROUP_NAME_MODIFY: 102010,
    //发送聊天消息
    ACT_CHAT_SEND_MESSAGE: 102000,
    //创建群
    ACT_CHAT_NOTICE_GROUP_CREATE: 102001,
    //删除群
    ACT_NOTICE_GROUP_DELETE: 102014,
    //退出群
    ACT_NOTICE_USER_EXIT_GROUP: 102011,
    //删除群成员
    ACT_NOTICE_MASTER_DELETE_GROUP_USER: 102012,
    //群组转让
    ACT_NOTICE_GROUP_TRANSFER: 102013,
    ACT_CHAT_MESSAGE_REVOKE: 102030,
    // mission
    ACT_MISSION_CREATED: 106001,
    ACT_MISSION_MODIFY: 106002,
    ACT_MISSION_RESET: 106003,
    ACT_MISSION_DOING: 106004,
    ACT_MISSION_PAUSE: 106005,
    ACT_MISSION_RESTART: 106006,
    ACT_MISSION_CANCEL: 106007,
    ACT_MISSION_DONE: 106008,
    ACT_MISSION_STORAGE: 106009,
    ACT_MISSION_DELETED: 106010,
    ACT_MISSION_AP_APPROVED: 106020,
    ACT_MISSION_AP_REFUSE: 106021,
    ACT_MISSION_AP_NEXT_STEP: 106022,
    ACT_MISSION_ACCEPTED: 106030,
    ACT_MISSION_REFUSE: 106031,
    ACT_MISSION_ALL_ACCEPTED: 106032,
    ACT_MISSION_OP_ACCEPTED: 106033,
    ACT_MISSION_OP_REFUSE: 106034,
    ACT_MISSION_OP_ALL_ACCEPTED: 106035,
    ACT_MISSION_OP_COMPLETE: 106036,
    ACT_MISSION_OP_ALL_COMPLETE: 106037,
    ACT_MISSION_BIDDING_PERIOD_START: 106040,
    ACT_MISSION_BIDDING_PERIOD_END: 106041,
    ACT_MISSION_VOTED: 106042,
    ACT_MISSION_ALL_VOTED: 106043,
    ACT_MISSION_ADD_MISSION_MEMBER: 106050,
    ACT_MISSION_DELETE_MISSION_MEMBER: 106051,
    //vacation 通知
    ACT_USER_VACATION_APPLY: 103040,
    ACT_USER_VACATION_APPLY_ACCEPT: 103041,
    ACT_USER_VACATION_APPLY_REFUSE: 103042
};
//# sourceMappingURL=notification.config.js.map

/***/ }),

/***/ 57:
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
/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/15.
 */
const core_1 = __webpack_require__(0);
const base_model_service_1 = __webpack_require__(43);
const api_service_1 = __webpack_require__(30);
let UserModelService = class UserModelService extends base_model_service_1.BaseModelService {
    constructor(api) {
        super(api);
        this.api = api;
    }
    /**
     * 登录
     * @param data
     * {
     *  username: string,
     *  password: string
     * }
     * @param callback
     */
    login(data, callback) {
        this.getData('login', data, callback);
    }
    /**
     * 登出
     * @param callback
     */
    logout(callback) {
        this.getData('logout', {}, callback);
    }
    /**
     * 注册
     * @param data
     * {
     *  profile: string, // 头像文件
     *  work_name: string,  // 个人姓名
     *  email: string,      // 邮箱
     *  phone: string,      // 手机
     *  password: string,   // 密码
     *  confirm_password: string, // 重复密码
     *  code: string,       // 手机验证码
     *  token?: string      // 推荐人推荐码
     * }
     * @param callback
     */
    register(data, callback) {
        this.getData('register', data, callback);
    }
    /**
     * 切换公司
     * @param data
     * {
     *  cid: string
     * }
     * @param callback
     */
    switchCompany(data, callback) {
        this.getData('switchCompany', data, callback);
    }
    /**
     * 重设权限
     * @param callBack
     */
    resetPermission(callBack) {
        this.getData('resetPermission', null, callBack);
    }
    /**
     * 联系我们表单
     * @param data
     * @param callBack
     */
    contactUs(data, callBack) {
        this.getData('contact', data, callBack);
    }
    //reset-password by token
    resetPassword(data, callBack) {
        this.getData('resetPsd', data, callBack);
    }
    /**
     * 重设密码
     * @param data
     * @param callBack
     */
    resetPwd(data, callBack) {
        this.getData('resetPassword', data, callBack);
    }
    //recover-password
    recoverPassword(data, callBack) {
        this.getData('recoverPsd', data, callBack);
    }
    //发送手机号获取验证码
    sendPhoneOrEmail(data, callBack) {
        this.getData('sendEmailOrPhone', data, callBack);
    }
    validateToken(data, callBack) {
        this.getData('checkToken', data, callBack);
    }
    /**
     * 检查用户在线状态
     * @param data {uid}
     * @param callback
     */
    getOnlineStatus(data, callback) {
        this.getData('getOnlineStatus', data, callback);
    }
    /**
     *
     * @param data
     * {
     *   data: {page: number}
     * }
     * @param callback
     */
    getHomepageDashboard(data, callback) {
        this.getData('getHomeDashboard', data, callback);
    }
    /**
     * new tips
     */
    newTips(data, callBack) {
        this.getData('createTips', data, callBack);
    }
    /**
     * update tips
     * data
     * {
     *
     * }
     */
    updateTips(data, callBack) {
        this.getData('modificationTips', data, callBack);
    }
    /**
     * delete tips
     */
    deleteTips(data, callBack) {
        this.getData('removeTips', data, callBack);
    }
    /**
     * since rid to show tips detail
     */
    showTipsDetail(data, callBack) {
        this.getData('showTipsDetailApi', data, callBack);
    }
    /**
     * 获取用户个人设置中心，权限、通知等相关设置   *
     * return
     * {
     *  'general':1,
     *  'contact':1,
     *  'chat':1,
     *  'mission':1,
     *  'file':1,
     *  'sound':1,
     *  'quantity':1
     * }
     * @param callback
     */
    getSettingNote(callback) {
        this.getData('userGetSettingNote', null, callback);
    }
    /**
     * 设置用户个人设置中心，权限、通知等相关设置
     * @param data
     *  {
     *  'general':1,
     *  'contact':1,
     *  'chat':1,
     *  'mission':1,
     *  'file':1,
     *  'sound':1,
     *  'quantity':1
     *  }
     * @param callback
     */
    setSettingNote(data, callback) {
        this.getData('userSetSettingNote', data, callback);
    }
    getTimeLine(data, callback) {
        this.getData('achieveTimeLine', data, callback);
    }
    /**
     * 查看权限
     * @param data
     * @param callback
     */
    allocatedPrivilege(data, callback) {
        this.getData('userAllocatedPrivilege', data, callback);
    }
    /**
     * 设置权限
     * @param data
     * @param callback
     */
    grantPrivilege(data, callback) {
        this.getData('userGrantPrivilege', data, callback);
    }
    /**
     * 邀请人注册
     * @param data
     * @param callback
     */
    invitePeoples(data, callback) {
        this.getData('invitePeople', data, callback);
    }
    companyAttention(data, callback) {
        this.getData('companyAttention', data, callback);
    }
    attentionList(data, callback) {
        this.getData('attentionList', data, callback);
    }
    outOffice(data, callback) {
        this.getData('outOffice', data, callback);
    }
    /**
     *
     * @param data
     * @param callback
     */
    vacationList(data, callback) {
        this.getData('getVacationList', data, callback);
    }
    /**
     *
     * @param data
     * @param callback
     */
    vacationUsage(data, callback) {
        this.getData('applicationVacationUsage', data, callback);
    }
    /**
     *
     * @param data
     * @param callback
     */
    vacationDays(data, callback) {
        this.getData('remainingVacationDays', data, callback);
    }
    checkContainNationalHoliday(data, callback) {
        this.getData('containNationalHoliday', data, callback);
    }
    //  添加国家法定假日
    createNationalHoliday(data, callback) {
        this.getData('createNationalHoliday', data, callback);
    }
    //查看法定假日列表
    showNationalHoliday(data, callback) {
        this.getData('showNationalHoliday', data, callback);
    }
    //删除国家法定假日
    deleteNationalHoliday(data, callback) {
        this.getData('deleteNationalHoliday', data, callback);
    }
    //更新公司考勤时间
    updateNationalHoliday(data, callback) {
        this.getData('updateNationalHoliday', data, callback);
    }
    //查看公司设置的时间
    showWorKTime(data, callback) {
        this.getData('showWorKTime', data, callback);
    }
    //新建公司考勤时间
    createWorKTime(data, callback) {
        this.getData('createWorKTime', data, callback);
    }
    //更新公司考勤时间
    updateWorKTime(data, callback) {
        this.getData('updateWorKTime', data, callback);
    }
    //  显示员工考勤列表
    showAttendance(data, callback) {
        this.getData('showAttendance', data, callback);
    }
    //显示员工详情
    showAttendanceDetail(data, callback) {
        this.getData('showAttendanceDetail', data, callback);
    }
    //验证 验证码
    verifyAuthCode(data, callback) {
        this.getData('testAuthCode', data, callback);
    }
    //申请更换邮箱 发送验证码
    applyChangeEmail(data, callback) {
        this.getData('applyUpdateEmail', data, callback);
    }
    //申请更换邮箱
    changeEmail(data, callback) {
        this.getData('updateEmail', data, callback);
    }
    //获取手机注册验证码
    fetchRegisterCode(data, callback) {
        this.getData('getRegisterCode', data, callback);
    }
    //验证注册手机验证码
    verifyRegisterAuthCode(data, callback) {
        this.getData('verifyRegisterCode', data, callback);
    }
    // 原contact model
    /**
     *
     * @param data
     * {
     * data: {uid: number}
     * }
     * @param callback
     */
    authorizationAccessInfo(data, callback) {
        this.getData('authorizationAccessInfo', data, callback);
    }
    /**
     * 获取联系人列表
     * @param data
     * {
     * form: 0,
     * group: 0}
     * @param callback
     */
    getContactList(data, callback) {
        this.getData('contactDisplay', data, callback);
    }
    contactSearch(data, callback) {
        this.getData('contactSearch', data, callback);
    }
    contactPermission(callback) {
        this.getData('contactPermission', null, callback);
    }
    contactPermissionSave(data, callback) {
        this.getData('contactPermissionSave', data, callback);
    }
    /**
     *
     * @param data {
       * uid,
       * multi
     * }
     * @param callback
     */
    getUserInfo(data, callback) {
        this.getData('userInfo', data, callback);
    }
    //查看两人之间的关系
    checkRelation(data, callback) {
        this.getData('checkRelation', data, callback);
    }
    /**
     * 查看联系人
     */
    viewContact(data) {
        this.getData('viewContact', data);
    }
    /**
     * 获取被推荐人可以加什么类型好友
     * 0 => 加任何类型好友 1 => 加私人好友 2 => 加工作类型的好友
     * @param data
     * @param callback
     */
    checkRecommendRelation(data, callback) {
        this.getData('checkRecommendRelation', data, callback);
    }
    /**
     * 获取好友信息
     * @param data
     * @param callback
     */
    getInCommon(data, callback) {
        this.getData('getInCommon', data, callback);
    }
    /**
     * 删除好友
     * @param data
     * @param callback
     */
    removeFriends(data, callback) {
        this.getData('removeFriends', data, callback);
    }
    /**
     * 获取招聘信息
     * @param data
     * @param callback
     */
    fetchOccupation(data, callback) {
        this.getData('fetchOccupation', data, callback);
    }
    /**
     * 保存招聘
     * @param data
     * @param callback
     */
    saveOccupation(data, callback) {
        this.getData('saveOccupation', data, callback);
    }
    /**
     * 查看好友信息
     * @param data
     * {
     *  uid: string,
     *  personal_module: string  general|introduction|company_analysis|resume|analysis
     * }
     * @param callback
     */
    fetchFriendInfo(data, callback) {
        this.getData('fetchFriendInfo', { data: data }, callback);
    }
    /**
     * 查看个人信息
     * @param data
     * @param callback
     */
    userInfo(data, callback) {
        this.getData('userInfo', data, callback);
    }
    /**
     * 检测是否已被招聘
     * @param data
     * @param callback
     */
    checkIsOccupation(data, callback) {
        this.getData('checkIsOccupation', data, callback);
    }
    /**
     * 用户所有公司列表
     * @param data
     * @param callback
     */
    fetchUserCompany(data, callback) {
        this.getData('fetchUserCompany', data, callback);
    }
    /**
     * 查看是否有hire权限 isHireUsers
     */
    isHireUsers(data, callback) {
        this.getData('isHireUsers', data, callback);
    }
    /**
     * 匹配是否是本人的操作
     * uid
     * user 本地存储的用户数据
     */
    isSelf(uid, userData) {
        return userData.user.uuid === uid || parseInt(userData.locationCompany.psid) === parseInt(uid);
    }
};
UserModelService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(api_service_1.ApiService)),
    __metadata("design:paramtypes", [api_service_1.ApiService])
], UserModelService);
exports.UserModelService = UserModelService;
//# sourceMappingURL=user-model.service.js.map

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by Summer Yang(summer.yang@blockbi.com)
 * on 2017/8/14.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(0);
const app_config_1 = __webpack_require__(162);
const index_1 = __webpack_require__(212);
const dialogs_1 = __webpack_require__(163);
const index_2 = __webpack_require__(165);
const index_3 = __webpack_require__(167);
const ionic_angular_1 = __webpack_require__(6);
const bi_profile_1 = __webpack_require__(166);
const mission_model_service_1 = __webpack_require__(216);
const notification_store_service_1 = __webpack_require__(294);
let SharedModule = SharedModule_1 = class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule_1,
            providers: [
                { provide: 'app.config', useValue: app_config_1.AppConfig },
                { provide: 'store.service', useClass: index_1.StoreService },
                { provide: 'user-store.service', useClass: index_1.UserStoreService },
                { provide: 'chat-store.service', useClass: index_1.ChatStoreService },
                { provide: 'notification-store.service', useClass: notification_store_service_1.NotificationStoreService },
                { provide: index_1.NotificationService, useClass: index_1.NotificationService },
                { provide: index_1.ApiService, useClass: index_1.ApiService },
                { provide: 'user.service', useClass: index_1.UserService },
                { provide: 'dialog.service', useClass: index_1.DialogService },
                { provide: 'im.service', useClass: index_1.ImService },
                { provide: 'type.service', useClass: index_1.TypeService },
                { provide: 'file.service', useClass: index_1.FileService },
                { provide: 'date.service', useClass: index_1.DateService },
                { provide: 'd3.service', useClass: index_1.D3Service },
            ]
        };
    }
};
SharedModule = SharedModule_1 = __decorate([
    core_1.NgModule({
        declarations: [
            index_2.BiFabBtnsComponent,
            index_2.BiLogoComponent,
            index_2.BiSearchComponent,
            index_2.BiNoticeComponent,
            index_2.BiSideMenuComponent,
            bi_profile_1.BiProfileComponent,
            index_2.BiMissionProgressComponent,
            index_3.ForbiddenUsernameValidator,
            index_3.SlidesSkillDirective,
            index_2.PublicSelectInterfaceComponent
        ],
        imports: [
            ionic_angular_1.IonicModule
        ],
        exports: [
            index_2.BiFabBtnsComponent,
            index_2.BiLogoComponent,
            index_2.BiSearchComponent,
            index_2.BiNoticeComponent,
            index_2.BiSideMenuComponent,
            bi_profile_1.BiProfileComponent,
            index_2.BiMissionProgressComponent,
            index_3.ForbiddenUsernameValidator,
            index_3.SlidesSkillDirective,
            index_2.PublicSelectInterfaceComponent
        ],
        providers: [
            dialogs_1.Dialogs,
            index_1.UserModelService,
            mission_model_service_1.MissionModelService
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
var SharedModule_1;
//# sourceMappingURL=shared.module.js.map

/***/ })

},[218]);
//# sourceMappingURL=main.js.map