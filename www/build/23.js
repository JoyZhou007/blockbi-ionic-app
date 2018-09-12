webpackJsonp([23],{

/***/ 322:
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
const chat_set_channel_1 = __webpack_require__(351);
let ChatSetChannelPageModule = class ChatSetChannelPageModule {
};
ChatSetChannelPageModule = __decorate([
    core_1.NgModule({
        declarations: [
            chat_set_channel_1.ChatSetChannelComponent,
        ],
        imports: [
            ionic_angular_1.IonicPageModule.forChild(chat_set_channel_1.ChatSetChannelComponent),
        ],
    })
], ChatSetChannelPageModule);
exports.ChatSetChannelPageModule = ChatSetChannelPageModule;
//# sourceMappingURL=chat-set-channel.module.js.map

/***/ }),

/***/ 351:
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
const notification_config_1 = __webpack_require__(56);
const index_1 = __webpack_require__(212);
/**
 * Generated class for the ChatSetChannelComponent page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let ChatSetChannelComponent = class ChatSetChannelComponent {
    constructor(navCtrl, imService, notificationService, events, navParams) {
        this.navCtrl = navCtrl;
        this.imService = imService;
        this.notificationService = notificationService;
        this.events = events;
        this.navParams = navParams;
        this.currentChannelName = '';
        this.originalChannelName = '';
    }
    ionViewDidLoad() {
        this.channelInfo = this.navParams.data.channelInfo;
        this.menuInfo = this.navParams.data.menuInfo;
        this.currentChannelName = this.channelInfo.name;
        this.originalChannelName = this.channelInfo.name;
        this.isAllowInvite = (this.channelInfo.invited_member == 1);
        this.subscription = this.notificationService.getNotification().subscribe((message) => {
            this.dealWebSocketNotification(message);
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    dealWebSocketNotification(message) {
        //修改群信息IM返回
        switch (message.act) {
            case notification_config_1.NotificationConfig.ACT_NOTICE_GROUP_NAME_MODIFY:
                if (message.status == 1) {
                    this.channelInfo.name = this.currentChannelName;
                    this.channelInfo.invited_member = this.isAllowInvite ? 1 : 0;
                    this.menuInfo.name = this.currentChannelName;
                    this.navCtrl.pop();
                }
                break;
        }
    }
    /**
     * 确认设置
     */
    confirmSetChannel(event) {
        event.stopPropagation();
        if (!this.currentChannelName)
            return;
        let sendData = {
            gid: this.channelInfo.gid,
            name: this.currentChannelName,
            topic: this.channelInfo.topic,
            form: this.channelInfo.form,
            invited_member: this.isAllowInvite ? 1 : 0
        };
        this.imService.sendModifyChannelInfo(sendData);
    }
};
ChatSetChannelComponent = __decorate([
    core_1.Component({
        selector: 'page-chat-set-channel',template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/chat-set-channel/chat-set-channel.html"*/'<ion-header>\n    <ion-navbar class="g-header clearfix">\n        <span class="bi-icon-down back" navPop></span>\n        <span class="g-header-title">SET CHAT CHANNEL</span>\n        <span class="send send-done" (click)="confirmSetChannel($event)">DONE</span>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="chat-set-content">\n    <ion-item no-padding no-lines>\n        <ion-label stacked>CHANNEL NAME</ion-label>\n        <ion-input type="text" [(ngModel)]="currentChannelName"></ion-input>\n    </ion-item>\n    <div *ngIf="!currentChannelName" text-left\n         class="input-error-msg ">\n        Channel Name cannot be empty!\n    </div>\n    <ion-item no-padding no-lines class="chat-set-invite">\n        <ion-label>\n            <div>INVITATION PERMISSION</div>\n            <div>Allow person who is not the host invite others</div>\n        </ion-label>\n        <ion-toggle color="secondary" [(ngModel)]="isAllowInvite"></ion-toggle>\n    </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/chat-set-channel/chat-set-channel.html"*/,
    }),
    __param(1, core_1.Inject('im.service')),
    __param(2, core_1.Inject(index_1.NotificationService)),
    __metadata("design:paramtypes", [ionic_angular_1.NavController, Object, index_1.NotificationService,
        ionic_angular_1.Events,
        ionic_angular_1.NavParams])
], ChatSetChannelComponent);
exports.ChatSetChannelComponent = ChatSetChannelComponent;
//# sourceMappingURL=chat-set-channel.js.map

/***/ })

});
//# sourceMappingURL=23.js.map