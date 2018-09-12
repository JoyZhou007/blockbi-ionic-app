webpackJsonp([12],{

/***/ 326:
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
const contact_add_friend_1 = __webpack_require__(366);
let ContactAddFriendPageModule = class ContactAddFriendPageModule {
};
ContactAddFriendPageModule = __decorate([
    core_1.NgModule({
        declarations: [
            contact_add_friend_1.ContactAddFriendPage,
        ],
        imports: [
            ionic_angular_1.IonicPageModule.forChild(contact_add_friend_1.ContactAddFriendPage),
        ],
    })
], ContactAddFriendPageModule);
exports.ContactAddFriendPageModule = ContactAddFriendPageModule;
//# sourceMappingURL=contact-add-friend.module.js.map

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//判断是属于个人/公司
exports.USER_FORM_PERSONAL = "1";
exports.USER_FORM_COMPANY = "2";
exports.USER_GENDER_FEMALE = "2";
exports.USER_GENDER_MALE = "1";
exports.USER_GENDER_OTHER = "3";
exports.USER_SHOW_STATE_IN_WORKING = 1;
exports.USER_SHOW_STATE_IN_MEETING = 2;
exports.USER_SHOW_STATE_VACATION = 3;
exports.USER_SHOW_STATE_BUSINESS_TRAVEL = 4;
//# sourceMappingURL=user.config.js.map

/***/ }),

/***/ 366:
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
const UserConfig = __webpack_require__(347);
const notification_service_1 = __webpack_require__(109);
const notification_config_1 = __webpack_require__(56);
/**
 * Generated class for the ContactAddFriendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let ContactAddFriendPage = class ContactAddFriendPage {
    constructor(navCtrl, config, notificationService, imService, navParams) {
        this.navCtrl = navCtrl;
        this.config = config;
        this.notificationService = notificationService;
        this.imService = imService;
        this.navParams = navParams;
        if (this.navParams.data && this.navParams.data.data) {
            this.friend = this.navParams.data.data;
            if (this.navParams.data.hasOwnProperty('friendType')) {
                this.friendType = this.navParams.data.friendType;
            }
        }
        this.subscription = this.notificationService.getNotification().subscribe((message) => {
            this.dealWebSocketNotification(message);
        });
    }
    ionViewDidLoad() {
    }
    /**
     * 页面销毁
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * IM通知处理
     */
    dealWebSocketNotification(message) {
        switch (message.act) {
            case notification_config_1.NotificationConfig.ACT_USER_REQUEST_ADD_FRIEND:
                if (message.status == 1 && message.hasOwnProperty('data') && message.data.sent == 1) {
                    this.navCtrl.pop();
                }
                break;
        }
    }
    /**
     * 发送申请好友im
     */
    sendTo() {
        let data = {
            friend: {
                uuid: this.friendType == parseInt(UserConfig.USER_FORM_PERSONAL) ? this.friend.uuid : '',
                psid: this.friendType == parseInt(UserConfig.USER_FORM_COMPANY) ? this.friend.psid : '',
            },
            remark: this.remark,
            user_relation: [this.friendType],
            company_name: this.friendType == parseInt(UserConfig.USER_FORM_PERSONAL) ? '' : this.friend.company_name //公司名称
        };
        this.imService.doApplyFriend(data);
    }
};
ContactAddFriendPage = __decorate([
    core_1.Component({
        selector: 'page-add-friend',template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/contact-add-friend/contact-add-friend.html"*/'<!--\n  Generated template for the ContactAddFriendPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="g-header clearfix">\n        <ion-navbar>\n            <span class="bi-icon-down back" navPop></span>\n            <span class="g-header-title">ADD FRIEND</span>\n            <span class="send" (click)="sendTo()">SEND</span>\n        </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <div class="add-friend-wrap">\n        <div class="add-friend-info">\n            <ion-item>\n                <ion-avatar class="tip-owner-profile" item-start>\n                    <img class="g-user-profile34"\n                         src="{{config.resourceDomain}}{{friend?.user_profile_path}}">\n                </ion-avatar>\n                <p class="f19-f">{{friend?.work_name}}</p>\n                <p *ngIf="friendType == 2">\n                    <span class="f3-f">{{friend?.p_name}}</span>\n                    <!--<span class="level">L2</span>-->\n                </p>\n            </ion-item>\n        </div>\n\n        <div class="company">\n            <p class="f19-f">RELATION</p>\n            <p class="f5-f" *ngIf="friendType == 2">Cooperator <span>|</span> {{friend?.company_name}}</p>\n            <p class="f5-f" *ngIf="friendType == 1">PERSONAL FRIEND</p>\n        </div>\n\n        <div class="g-title g-margin-top20 f9-f">MESSAGE</div>\n        <div class=\'g-title-content\'>\n            <ion-input type="text" class="f19-f" [(ngModel)]="remark"></ion-input>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/contact-add-friend/contact-add-friend.html"*/,
    }),
    __param(1, core_1.Inject('app.config')),
    __param(2, core_1.Inject(notification_service_1.NotificationService)),
    __param(3, core_1.Inject('im.service')),
    __metadata("design:paramtypes", [ionic_angular_1.NavController, Object, notification_service_1.NotificationService, Object, ionic_angular_1.NavParams])
], ContactAddFriendPage);
exports.ContactAddFriendPage = ContactAddFriendPage;
//# sourceMappingURL=contact-add-friend.js.map

/***/ })

});
//# sourceMappingURL=12.js.map