webpackJsonp([26],{

/***/ 319:
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
const chat_edit_topic_1 = __webpack_require__(350);
let ChatEditTopicComponentModule = class ChatEditTopicComponentModule {
};
ChatEditTopicComponentModule = __decorate([
    core_1.NgModule({
        declarations: [
            chat_edit_topic_1.ChatEditTopicComponent,
        ],
        imports: [
            ionic_angular_1.IonicPageModule.forChild(chat_edit_topic_1.ChatEditTopicComponent),
        ],
    })
], ChatEditTopicComponentModule);
exports.ChatEditTopicComponentModule = ChatEditTopicComponentModule;
//# sourceMappingURL=chat-edit-topic.module.js.map

/***/ }),

/***/ 350:
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
 * Generated class for the ChatEditTopicComponent page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let ChatEditTopicComponent = class ChatEditTopicComponent {
    constructor(navCtrl, imService, notificationService, events, dialogService, navParams) {
        this.navCtrl = navCtrl;
        this.imService = imService;
        this.notificationService = notificationService;
        this.events = events;
        this.dialogService = dialogService;
        this.navParams = navParams;
        this.currentTopic = '';
        this.originalTopic = '';
    }
    ionViewDidLoad() {
        this.channelInfo = this.navParams.data.channelInfo;
        this.currentTopic = this.channelInfo.topic;
        this.originalTopic = this.channelInfo.topic;
        this.subscription = this.notificationService.getNotification().subscribe((message) => {
            this.dealWebSocketNotification(message);
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * 处理IM返回通知
     * @param message
     */
    dealWebSocketNotification(message) {
        //新建群IM返回
        switch (message.act) {
            case notification_config_1.NotificationConfig.ACT_NOTICE_GROUP_NAME_MODIFY:
                if (message.status == 1) {
                    this.channelInfo.topic = this.currentTopic;
                    this.navCtrl.pop();
                }
                break;
        }
    }
    /**
     *确认修改TOPIC
     */
    confirmEditTopic(event) {
        event.stopPropagation();
        if (this.currentTopic == this.originalTopic) {
            this.dialogService.showAlert('Warning', 'Topic has no changed!');
            return;
        }
        else {
            let sendData = {
                gid: this.channelInfo.gid,
                name: this.channelInfo.name,
                topic: this.currentTopic,
                form: this.channelInfo.form,
                invited_member: this.channelInfo.invited_member
            };
            this.imService.sendModifyChannelInfo(sendData);
        }
    }
};
ChatEditTopicComponent = __decorate([
    core_1.Component({
        selector: 'page-chat-edit-topic',template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/chat-edit-topic/chat-edit-topic.html"*/'<ion-header>\n    <ion-navbar class="g-header clearfix">\n        <span class="bi-icon-down back" navPop></span>\n        <span class="g-header-title">EDIT TOPIC</span>\n        <span class="send send-done" (click)="confirmEditTopic($event)">DONE</span>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="edit-topic-content">\n    <ion-item no-padding no-lines>\n        <ion-label stacked>CHANNEL TOPIC</ion-label>\n        <ion-input type="text" [(ngModel)]="currentTopic">\n        </ion-input>\n    </ion-item>\n</ion-content>\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/chat-edit-topic/chat-edit-topic.html"*/,
    }),
    __param(1, core_1.Inject('im.service')),
    __param(2, core_1.Inject(index_1.NotificationService)),
    __param(4, core_1.Inject('dialog.service')),
    __metadata("design:paramtypes", [ionic_angular_1.NavController, Object, index_1.NotificationService,
        ionic_angular_1.Events, Object, ionic_angular_1.NavParams])
], ChatEditTopicComponent);
exports.ChatEditTopicComponent = ChatEditTopicComponent;
//# sourceMappingURL=chat-edit-topic.js.map

/***/ })

});
//# sourceMappingURL=26.js.map