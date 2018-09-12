webpackJsonp([8],{

/***/ 336:
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
const notification_message_1 = __webpack_require__(215);
const notification_chat_invite_1 = __webpack_require__(393);
const notification_new_contact_1 = __webpack_require__(394);
let NotificationMessageComponentModule = class NotificationMessageComponentModule {
};
NotificationMessageComponentModule = __decorate([
    core_1.NgModule({
        declarations: [
            notification_message_1.NotificationMessageComponent,
            notification_chat_invite_1.NotificationChatInviteComponent,
            notification_new_contact_1.NotificationNewContactComponent
        ],
        // entryComponents:[
        //   NotificationMessageComponent,
        // ],
        imports: [
            ionic_angular_1.IonicPageModule.forChild(notification_message_1.NotificationMessageComponent),
        ],
    })
], NotificationMessageComponentModule);
exports.NotificationMessageComponentModule = NotificationMessageComponentModule;
//# sourceMappingURL=notification-message.module.js.map

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

/***/ 393:
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
const notification_config_1 = __webpack_require__(56);
const event_name_config_1 = __webpack_require__(15);
const ionic_angular_1 = __webpack_require__(6);
const index_1 = __webpack_require__(212);
/**
 * Generated class for the NotificationChatInviteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
let NotificationChatInviteComponent = class NotificationChatInviteComponent {
    constructor(appConfig, events, notificationService, imService) {
        this.appConfig = appConfig;
        this.events = events;
        this.notificationService = notificationService;
        this.imService = imService;
    }
    set setNotification(param) {
        this.notificationObj = param;
        this.notificationData = param.data;
        this.summaryObj = this.notificationObj.summaryObj;
        if (!this.notificationData || !this.summaryObj)
            return;
        this.getSendOwnerInfo();
        this.getInviteInfo();
        this.setNotificationMessage();
        this.subscription = this.notificationService.getNotification().subscribe((message) => {
            this.dealWebSocketNotification(message);
        });
    }
    /**
     * 页面销毁
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * 处理IM消息返回
     */
    dealWebSocketNotification(message) {
        switch (message.act) {
            case notification_config_1.NotificationConfig.ACT_NOTICE_MEMBER_GROUP_INVITE_ACCEPT:
            case notification_config_1.NotificationConfig.ACT_NOTICE_MEMBER_GROUP_INVITE_REFUSE:
            case notification_config_1.NotificationConfig.ACT_REQUEST_MEMBER_GROUP_INVITE:
                if (message.status == 1 && message.data
                    && message.data.sent == 1 && message.data.request_id == this.notificationData.request_id) {
                    this.notificationData.handled = 1;
                    let handleData = {
                        request_id: this.notificationData.request_id,
                        notification_form: this.notificationData.notification_form
                    };
                    this.events.publish(event_name_config_1.EventNameConfig.CHANGE_NOTIFICATION_STATUS, { handleData });
                }
                break;
        }
    }
    /**
     * 获取notification owner 信息
     */
    getSendOwnerInfo() {
        for (let i in this.summaryObj.user) {
            if (this.summaryObj.user[i].uid == this.notificationData.owner) {
                this.sendInfo = this.summaryObj.user[i];
                break;
            }
        }
    }
    /**
     * 获取邀请人信息
     */
    getInviteInfo() {
        for (let i in this.summaryObj.user) {
            if (this.summaryObj.user[i].uid == this.notificationData.introducer) {
                this.introducerInfo = this.summaryObj.user[i];
                break;
            }
        }
    }
    /**
     * 设置显示消息内容
     */
    setNotificationMessage() {
        //兼容旧数据 (没有 introducer 字段)
        this.introducerInfo = this.introducerInfo ? this.introducerInfo : this.sendInfo;
        switch (this.notificationObj.act) {
            case notification_config_1.NotificationConfig.ACT_REQUEST_MEMBER_GROUP_INVITE_RECEIVER:
                //被邀请人收到
                this.notificationMessage = this.introducerInfo.work_name + ' invite you to join the chat group named ' + this.notificationData.name;
                break;
            case notification_config_1.NotificationConfig.ACT_REQUEST_MEMBER_GROUP_INVITE:
                //群主收到
                this.introducerInfo = this.introducerInfo ? this.introducerInfo : this.sendInfo;
                let newInviteMemberArray = [];
                let inviteMemberString = '';
                for (let i in this.notificationData.members) {
                    for (let j in this.summaryObj.user) {
                        if (this.summaryObj.user[j].uid == this.notificationData.members[i].uid) {
                            inviteMemberString += this.summaryObj.user[j].work_name + ',';
                            newInviteMemberArray.push(this.summaryObj.user[j]);
                            break;
                        }
                    }
                }
                inviteMemberString = inviteMemberString.substring(0, inviteMemberString.length - 1);
                this.notificationMessage =
                    this.introducerInfo.work_name + ' invite ' + inviteMemberString + ' to join the chat group named ' + this.notificationData.name;
                break;
            case notification_config_1.NotificationConfig.ACT_NOTICE_MEMBER_GROUP_INVITE_MASTER_ACCEPT:
                //非群主邀请 群主同意后被邀请人收到
                this.notificationMessage =
                    'The master ' + this.sendInfo.work_name + ' accept ' +
                        this.introducerInfo.work_name + ' invite you to join the chat group named ' + this.notificationData.name;
                break;
        }
    }
    /**
     *同意邀请
     */
    acceptInvite(event) {
        event.stopPropagation();
        if (this.notificationObj.act == notification_config_1.NotificationConfig.ACT_REQUEST_MEMBER_GROUP_INVITE_RECEIVER) {
            //被邀请人操作  为非群主邀请并且跳过群主同意
            let sendData = {
                form: this.notificationData.form,
                gid: this.notificationData.gid,
                name: this.notificationData.name,
                request_id: this.notificationData.request_id,
            };
            this.imService.newMemberAcceptInvite(sendData);
        }
        else if (this.notificationObj.act == notification_config_1.NotificationConfig.ACT_REQUEST_MEMBER_GROUP_INVITE) {
            //群主同意其他成员的邀请
            let sendData = {
                form: this.notificationData.form,
                gid: this.notificationData.gid,
                name: this.notificationData.name,
                request_id: this.notificationData.request_id,
                introducer: this.notificationData.introducer,
                members: this.notificationData.members
            };
            this.imService.masterAcceptInvite(sendData);
        }
        else if (this.notificationObj.act == notification_config_1.NotificationConfig.ACT_NOTICE_MEMBER_GROUP_INVITE_MASTER_ACCEPT) {
            let sendData = {
                form: this.notificationData.form,
                gid: this.notificationData.gid,
                name: this.notificationData.name,
                request_id: this.notificationData.request_id,
            };
            this.imService.newMemberAcceptInvite(sendData);
        }
    }
    /**
     * 拒绝邀请
     */
    refuseInvite(event) {
        event.stopPropagation();
        if (this.notificationObj.act == notification_config_1.NotificationConfig.ACT_REQUEST_MEMBER_GROUP_INVITE_RECEIVER) {
            //被邀请人操作  为非群主邀请并且跳过群主同意
            let sendData = {
                form: this.notificationData.form,
                gid: this.notificationData.gid,
                name: this.notificationData.name,
                request_id: this.notificationData.request_id,
                friend: this.notificationData.introducer ? this.notificationData.introducer : this.notificationData.owner //兼容旧数据
            };
            this.imService.newMemberRefuseInvite(sendData);
        }
        else if (this.notificationObj.act == notification_config_1.NotificationConfig.ACT_REQUEST_MEMBER_GROUP_INVITE) {
            let sendData = {
                form: this.notificationData.form,
                gid: this.notificationData.gid,
                name: this.notificationData.name,
                request_id: this.notificationData.request_id,
                introducer: this.notificationData.introducer,
                members: this.notificationData.members
            };
            this.imService.masterRefuseInvite(sendData);
        }
        else if (this.notificationObj.act == notification_config_1.NotificationConfig.ACT_NOTICE_MEMBER_GROUP_INVITE_MASTER_ACCEPT) {
            let sendData = {
                form: this.notificationData.form,
                gid: this.notificationData.gid,
                name: this.notificationData.name,
                request_id: this.notificationData.request_id,
                friend: this.notificationData.introducer ? this.notificationData.introducer : this.notificationData.owner //兼容旧数据
            };
            this.imService.newMemberRefuseInvite(sendData);
        }
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NotificationChatInviteComponent.prototype, "setNotification", null);
NotificationChatInviteComponent = __decorate([
    core_1.Component({
        selector: 'notification-chat-invite',template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/notification-message/notification-chat-invite/notification-chat-invite.html"*/'<ion-card>\n    <ion-item><span item-end class="bi-icon-remove"></span></ion-item>\n    <div class="notification-ion-title">INVITE NEW TEAM MEMBER</div>\n    <ion-item>\n        <ion-avatar item-start>\n            <img src="{{sendInfo?.user_profile_path? appConfig?.resourceDomain + sendInfo?.user_profile_path :\'\'}}">\n        </ion-avatar>\n        <h2>{{sendInfo?.work_name}}</h2>\n        <p>{{sendInfo?.p_name}}</p>\n    </ion-item>\n    <ion-card-content class="notification-message">\n        <p>MESSAGE</p>\n        <p>{{notificationMessage}}</p>\n    </ion-card-content>\n    <div *ngIf="!notificationData?.handled">\n        <button ion-button class="notification-button-type3" (click)="refuseInvite($event)">REFUSE</button>\n        <button ion-button class="notification-button-type4" (click)="acceptInvite($event)">ACCEPT</button>\n    </div>\n</ion-card>'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/notification-message/notification-chat-invite/notification-chat-invite.html"*/
    }),
    __param(0, core_1.Inject('app.config')),
    __param(2, core_1.Inject(index_1.NotificationService)),
    __param(3, core_1.Inject('im.service')),
    __metadata("design:paramtypes", [Object, ionic_angular_1.Events,
        index_1.NotificationService, Object])
], NotificationChatInviteComponent);
exports.NotificationChatInviteComponent = NotificationChatInviteComponent;
//# sourceMappingURL=notification-chat-invite.js.map

/***/ }),

/***/ 394:
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
const notification_config_1 = __webpack_require__(56);
const event_name_config_1 = __webpack_require__(15);
const UserConfig = __webpack_require__(347);
const ionic_angular_1 = __webpack_require__(6);
const index_1 = __webpack_require__(212);
/**
 * Generated class for the NotificationNewContactComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
let NotificationNewContactComponent = class NotificationNewContactComponent {
    constructor(appConfig, events, notificationService, imService) {
        this.appConfig = appConfig;
        this.events = events;
        this.notificationService = notificationService;
        this.imService = imService;
        this.contactFeedback = '';
    }
    set setNotification(param) {
        this.notificationObj = param;
        this.notificationData = param.data;
        this.remarkMessage = this.notificationData.remark;
        this.summaryObj = this.notificationObj.summaryObj;
        if (!this.notificationData || !this.summaryObj)
            return;
        this.getSendOwnerInfo();
        this.getNewRelation();
        this.subscription = this.notificationService.getNotification().subscribe((message) => {
            this.dealWebSocketNotification(message);
        });
    }
    /**
     * 页面销毁
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * 处理IM消息返回
     */
    dealWebSocketNotification(message) {
        switch (message.act) {
            case notification_config_1.NotificationConfig.ACT_USER_NOTICE_ACCEPT_ADD_FRIEND:
            case notification_config_1.NotificationConfig.ACT_USER_NOTICE_REFUSE_ADD_FRIEND:
                if (message.status == 1 && message.data
                    && message.data.sent == 1
                    && message.data.request_id == this.notificationData.request_id) {
                    this.notificationData.handled = 1;
                    let handleData = {
                        request_id: this.notificationData.request_id,
                        notification_form: this.notificationData.notification_form
                    };
                    this.events.publish(event_name_config_1.EventNameConfig.CHANGE_NOTIFICATION_STATUS, { handleData });
                }
                break;
        }
    }
    /**
     * 获取notification owner 信息
     */
    getSendOwnerInfo() {
        for (let i in this.summaryObj.user) {
            if (this.summaryObj.user[i].uid == this.notificationData.owner.uuid
                || this.summaryObj.user[i].uid == this.notificationData.owner.psid) {
                this.sendInfo = this.summaryObj.user[i];
                break;
            }
        }
    }
    /**
     * 获取新好友的关系
     */
    getNewRelation() {
        let relation = this.notificationData.relation[0];
        if (relation == parseInt(UserConfig.USER_FORM_COMPANY)) {
            this.relationType = 'Cooperator';
        }
        else if (relation == parseInt(UserConfig.USER_FORM_PERSONAL)) {
            this.relationType = 'Friend';
        }
    }
    /**
     * 拒绝新好友
     * @param event
     */
    refuseNewFriend(event) {
        event.stopPropagation();
        this.imService.refuseApplyFriend({
            friend: {
                uuid: this.notificationData.owner.uuid,
                psid: this.notificationData.owner.psid
            },
            feedback: this.contactFeedback,
            request_id: this.notificationData.request_id
        });
    }
    ;
    /**
     * 同意加
     * @param event
     */
    acceptNewFriend(event) {
        event.stopPropagation();
        this.imService.acceptApplyFriend({
            friend: {
                uuid: this.notificationData.owner.uuid,
                psid: this.notificationData.owner.psid
            },
            feedback: this.contactFeedback,
            friend_relation: this.notificationData.relation,
            request_id: this.notificationData.request_id
        });
    }
    ;
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NotificationNewContactComponent.prototype, "setNotification", null);
NotificationNewContactComponent = __decorate([
    core_1.Component({
        selector: 'notification-new-contact',template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/notification-message/notification-new-contact/notification-new-contact.html"*/'<ion-card>\n    <ion-item><span item-end class="bi-icon-remove"></span></ion-item>\n    <div class="notification-ion-title">NEW CONTACT</div>\n    <ion-item>\n        <ion-avatar item-start>\n            <img src="{{sendInfo?.user_profile_path? appConfig?.resourceDomain + sendInfo?.user_profile_path :\'\'}}">\n        </ion-avatar>\n        <h2>{{sendInfo?.work_name}}</h2>\n        <p>{{sendInfo?.p_name}}</p>\n    </ion-item>\n    <ion-item class="notification-desc">\n        <p>RELATION</p>\n        <p>{{relationType}}</p>\n    </ion-item>\n    <ion-card-content class="notification-message">\n        <p>MESSAGE</p>\n        <p>{{remarkMessage}}</p>\n        <!--<div *ngIf="!notificationData?.handled">-->\n            <!--<p class="new-contact-feedback">FEEDBACK</p>-->\n            <!--<div  class="text-div">-->\n                <!--<textarea maxlength="100" [(ngModel)]="contactFeedback"></textarea>-->\n            <!--</div>-->\n            <!--<p class="g-margin-top5">Maximum 100 characters can be entered!</p>-->\n        <!--</div>-->\n    </ion-card-content>\n    <div *ngIf="!notificationData?.handled">\n        <button ion-button class="notification-button-type3" (click)="refuseNewFriend($event)">REFUSE</button>\n        <button ion-button class="notification-button-type4" (click)="acceptNewFriend($event)">ACCEPT</button>\n    </div>\n</ion-card>\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/notification-message/notification-new-contact/notification-new-contact.html"*/
    }),
    __param(0, core_1.Inject('app.config')),
    __param(2, core_1.Inject(index_1.NotificationService)),
    __param(3, core_1.Inject('im.service')),
    __metadata("design:paramtypes", [Object, ionic_angular_1.Events,
        index_1.NotificationService, Object])
], NotificationNewContactComponent);
exports.NotificationNewContactComponent = NotificationNewContactComponent;
//# sourceMappingURL=notification-new-contact.js.map

/***/ })

});
//# sourceMappingURL=8.js.map