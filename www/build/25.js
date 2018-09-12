webpackJsonp([25],{

/***/ 321:
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
const chat_invite_member_1 = __webpack_require__(346);
let ChatInviteMemberComponentModule = class ChatInviteMemberComponentModule {
};
ChatInviteMemberComponentModule = __decorate([
    core_1.NgModule({
        declarations: [
            chat_invite_member_1.ChatInviteMemberComponent,
        ],
        imports: [
            ionic_angular_1.IonicPageModule.forChild(chat_invite_member_1.ChatInviteMemberComponent),
        ],
    })
], ChatInviteMemberComponentModule);
exports.ChatInviteMemberComponentModule = ChatInviteMemberComponentModule;
//# sourceMappingURL=chat-invite-member.module.js.map

/***/ }),

/***/ 346:
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
const notification_config_1 = __webpack_require__(56);
const notification_service_1 = __webpack_require__(109);
/**
 * Generated class for the ChatInviteMemberComponent page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let ChatInviteMemberComponent = class ChatInviteMemberComponent {
    constructor(navCtrl, modalCtrl, events, userService, notificationService, imService, dialogService, appConfig, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.userService = userService;
        this.notificationService = notificationService;
        this.imService = imService;
        this.dialogService = dialogService;
        this.appConfig = appConfig;
        this.navParams = navParams;
        this.selectedPeopleArray = [];
        this.currentMemberArray = [];
    }
    ionViewDidLoad() {
        this.channelInfo = this.navParams.data.channelInfo;
        this.menuInfo = this.navParams.data.menuInfo;
        this.currentForm = this.channelInfo.form;
        this.currentMemberArray = this.channelInfo.info;
        this.getContactList();
        this.dealEvent();
        this.subscription = this.notificationService.getNotification().subscribe((message) => {
            this.dealWebSocketNotification(message);
        });
    }
    ngOnDestroy() {
        this.events.unsubscribe(event_name_config_1.EventNameConfig.PUBLIC_SELECT);
        this.subscription.unsubscribe();
    }
    /**
     * 事件处理
     */
    dealEvent() {
        //选择事件
        this.events.subscribe(event_name_config_1.EventNameConfig.PUBLIC_SELECT, (params) => {
            let componentName = params.param;
            switch (componentName) {
                case 'chat-invite-member':
                    this.selectedPeopleArray = params.data;
                    break;
            }
        });
    }
    /**
     * 处理IM返回消息
     */
    dealWebSocketNotification(message) {
        //新建群IM返回
        switch (message.act) {
            case notification_config_1.NotificationConfig.ACT_REQUEST_MEMBER_GROUP_INVITE:
            case notification_config_1.NotificationConfig.ACT_NOTICE_MASTER_GROUP_INVITE:
                if (message.status == 1) {
                    if (message.data.sent && message.data.gid == this.channelInfo.gid) {
                        this.navCtrl.pop();
                    }
                }
                else {
                    this.dialogService.showAlert('Invite Failed!', message.error_msg);
                }
                break;
        }
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
     * 获取联系人列表
     */
    getContactList() {
        this.userService.getContactList((contactList) => {
            if (contactList) {
                this.contactList = contactList;
                this.removeInChannelMember();
            }
        });
    }
    /**
     * 去除已经在群组的成员
     */
    removeInChannelMember() {
        let newContactList = {
            Cooperator: [],
            Friend: [],
            Internal: []
        };
        for (let key in this.contactList) {
            for (let i in this.contactList[key]) {
                let flag = false;
                for (let j in this.currentMemberArray) {
                    if (this.currentMemberArray[j].uid == this.contactList[key][i].uuid
                        || this.currentMemberArray[j].uid == this.contactList[key][i].psid) {
                        flag = true;
                    }
                }
                if (!flag) {
                    newContactList[key].push(this.contactList[key][i]);
                }
            }
        }
        this.buildForDropDownData(newContactList);
    }
    /**
     * 生成dropDown数据对象
     */
    buildForDropDownData(newContactList) {
        this.inviteDropDownObj = {
            groupObj: {},
            settings: {},
        };
        let settings = this.initSelectSettings();
        if (this.currentForm == 1) {
            //friend
            settings.group.push({ key: 'friend', 'title': 'Friend' });
            let inviteFriendList = [];
            newContactList['Friend'].forEach((item) => {
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
            newContactList['Internal'].forEach((item) => {
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
            newContactList['Cooperator'].forEach((item) => {
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
     * 点击选人
     */
    showPublicSelect(event) {
        event.stopPropagation();
        let modal = this.modalCtrl.create(public_select_1.PublicSelectComponent, {
            data: this.inviteDropDownObj,
            componentName: 'chat-invite-member',
            selectedArray: this.selectedPeopleArray
        });
        modal.present();
    }
    /**
     * 删除选中项
     */
    deleteSelected(event, item) {
        event.stopPropagation();
        item.isCurrent = false;
        for (let i in this.selectedPeopleArray) {
            if (this.selectedPeopleArray[i].id == item.id) {
                this.selectedPeopleArray.splice(parseInt(i), 1);
            }
        }
    }
    /**
     * 调用IM
     */
    confirmInviteMember(event) {
        event.stopPropagation();
        this.hasClickOnSend = true;
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
            gid: this.menuInfo.gid,
            invited_member: this.menuInfo.invited_member,
            is_host: this.menuInfo.is_host,
            name: this.menuInfo.name,
            members: selectedMember,
            form: this.menuInfo.form
        };
        if (this.menuInfo.is_host == 1) {
            this.imService.inviteByHost(sendData);
        }
        else {
            this.imService.inviteByCommonMember(sendData);
        }
    }
};
ChatInviteMemberComponent = __decorate([
    core_1.Component({
        selector: 'page-chat-invite-member',template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/chat-invite-member/chat-invite-member.html"*/'<ion-header>\n  <ion-navbar class="g-header clearfix">\n    <span class="bi-icon-down back" navPop></span>\n    <span class="g-header-title">INVITE MEMBER TO JOIN</span>\n    <span class="send " (click)="confirmInviteMember($event)">SEND</span>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="chat-invite-content">\n    <ion-list no-padding>\n      <ion-item no-padding>\n        <div class="chat-invites-lab">INVITEES</div>\n        <div class="chat-invites-div">\n          <div class="invite-people" *ngFor="let item of selectedPeopleArray">\n            <img src="{{item.imageLabel? appConfig.resourceDomain + item.imageLabel:\'\'}}" alt="">\n            <span class="selected-people-name">{{item?.label}}</span>\n            <span class="selected-delete bi-icon-esc" (click)="deleteSelected($event,item)"></span>\n          </div>\n        </div>\n        <!--<ion-icon name="arrow-forward" (click)="showPublicSelect($event)" item-end></ion-icon>-->\n        <span class="bi-icon-arrow" (click)="showPublicSelect($event)"></span>\n      </ion-item>\n      <div *ngIf="!selectedPeopleArray.length && hasClickOnSend" text-left\n           class="input-error-msg ">\n        Must select at least one member!\n      </div>\n    </ion-list>\n</ion-content>\n\n<script type="text/javascript">\n\n  var arr = new Array(6)\n  arr[0] = "10"\n  arr[1] = "5"\n  arr[2] = "40"\n  arr[3] = "25"\n  arr[4] = "1000"\n  arr[5] = "1"\n\n  document.write(arr + "<br />")\n  document.write(arr.sort())\n\n</script>'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/chat-invite-member/chat-invite-member.html"*/,
    }),
    __param(3, core_1.Inject('user.service')),
    __param(4, core_1.Inject(notification_service_1.NotificationService)),
    __param(5, core_1.Inject('im.service')),
    __param(6, core_1.Inject('dialog.service')),
    __param(7, core_1.Inject('app.config')),
    __metadata("design:paramtypes", [ionic_angular_1.NavController,
        ionic_angular_1.ModalController,
        ionic_angular_1.Events, Object, notification_service_1.NotificationService, Object, Object, Object, ionic_angular_1.NavParams])
], ChatInviteMemberComponent);
exports.ChatInviteMemberComponent = ChatInviteMemberComponent;
//# sourceMappingURL=chat-invite-member.js.map

/***/ })

});
//# sourceMappingURL=25.js.map