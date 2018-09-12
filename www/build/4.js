webpackJsonp([4],{

/***/ 317:
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
const chat_channel_more_1 = __webpack_require__(352);
let ChatChannelMoreComponentModule = class ChatChannelMoreComponentModule {
};
ChatChannelMoreComponentModule = __decorate([
    core_1.NgModule({
        declarations: [
            chat_channel_more_1.ChatChannelMoreComponent,
        ],
        imports: [
            ionic_angular_1.IonicPageModule.forChild(chat_channel_more_1.ChatChannelMoreComponent),
        ],
    })
], ChatChannelMoreComponentModule);
exports.ChatChannelMoreComponentModule = ChatChannelMoreComponentModule;
//# sourceMappingURL=chat-channel-more.module.js.map

/***/ }),

/***/ 345:
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
let ChatModelService = class ChatModelService extends base_model_service_1.BaseModelService {
    constructor(api) {
        super(api);
        this.api = api;
    }
    /**
     * 获取用户消息 (离线/历史消息)
     * @param data
     * @param callback
     */
    getUserMessage(data, callback) {
        this.getData('userMessage', data, callback);
    }
    /**
     * 获取用户群组消息 (离线/历史消息)
     * @param data
     * {"gid":19,"min_time":"","max_time":"","sort":"1","form":2}
     * @param callback
     */
    getUserGroupMessage(data, callback) {
        this.getData('userGroupMessage', data, callback);
    }
    /**
     * 获取一个消息所在包的所有消息
     * @param callback
     */
    getPackageMsg(data, callback) {
        this.getData('getPackageMsg', data, callback);
    }
    //群组列表
    getGroupList(callback) {
        this.getData('groupList', null, callback);
    }
    //群聊天
    groupChat(data, callback) {
        this.getData('groupChat', data, callback);
    }
    fetchGroupInfo(data, callback) {
        this.getData('fetchGroupInfo', data, callback);
    }
    //创建群组
    createGroup(data, callback) {
        this.getData('groupCreate', data, callback);
    }
    //群组重命名
    groupRename(data, callback) {
        this.getData('groupRename', data, callback);
    }
    //添加群组好友
    addGroupFriend(data, callback) {
        this.getData('groupAddFriend', data, callback);
    }
    //移除群组好友
    removeGroupFriend(data, callback) {
        this.getData('groupRemoveFriend', data, callback);
    }
    //删除群组
    dropGroup(data, callback) {
        this.getData('groupDrop', data, callback);
    }
    //收藏
    getEnshrineInfo(data, callback) {
        this.post('enshrineInfo', data, callback);
    }
    //取消收藏
    cancelTheEnshrine(data, callback) {
        this.post('cancelEnshrine', data, callback);
    }
    //图片加tag
    chatImgTag(data, callback) {
        this.post('chatImgTag', data, callback);
    }
    //图片点赞/取消点赞
    imageLikeUpdate(data, callback) {
        this.post('imageLikeUpdate', data, callback);
    }
    //查看图片点赞数量
    fetchImageLike(data, callback) {
        this.post('fetchImageLike', data, callback);
    }
    // fetchImageComment removeImageComment imageLikeUpdate
    //获取图片评论
    fetchImageComment(data, callback) {
        this.post('fetchImageComment', data, callback);
    }
    //获取图片评论
    addImageComment(data, callback) {
        this.post('addImageComment', data, callback);
    }
    //删除图片评论
    removeImageComment(data, callback) {
        this.post('removeImageComment', data, callback);
    }
    //获取图片tags
    fetchChatImgTags(data, callback) {
        this.post('fetchChatImgTags', data, callback);
    }
    //删除图片的tag
    deleteImgTag(data, callback) {
        this.post('deleteImgTag', data, callback);
    }
    //删除图片的tag
    updateImgTag(data, callback) {
        this.post('updateImgTag', data, callback);
    }
    //updateImgTag
    //聊天图片评论
    chatImgcomments(data, callback) {
        this.post('chatImgcomments', data, callback);
    }
    //获取聊天图片评论
    fetchImageComments(data, callback) {
        this.post('fetchImageComments', data, callback);
    }
    //图片文件上传
    //新接口
    fileImageSave(data, callback) {
        this.post('fileImageSave', data, callback);
    }
    //聊天图片评论收藏
    imagePoint(data, callback) {
        this.post('imagePoint', data, callback);
    }
    //聊天图片评论收藏人数
    imageEnshrine(data, callback) {
        this.post('imageEnshrine', data, callback);
    }
    //聊天内容搜索接口
    searchChatRecords(data, callback) {
        this.post('searchChatRecords', data, callback);
    }
    //获取离线数量
    getOfflineCount(callback) {
        this.post('getOfflineCount', null, callback);
    }
    //聊天加pin
    setInsertMsgPin(data, callback) {
        this.post('insertMsgPin', data, callback);
    }
    /**
     * 删除pin消息
     * @param data
     * {
     *  data: {
          msg_id: string,
          form: number,
          friend?: any, //好友传
          gid?: any, //群组传
        }
     * }
     * 或者单纯根据pin_id删除
     * {
     *  data: {
          pin_id: any
        }
     * }
     * @param callback
     */
    setDeleteMsgPin(data, callback) {
        this.post('deleteMsgPin', data, callback);
    }
    //获取pin消息列表
    getMsgPinList(data, callback) {
        this.post('getMsgPinList', data, callback);
    }
    //创建post
    createPost(data, callback) {
        this.post('createPost', data, callback);
    }
    //查看post的信息
    postDetails(data, callback) {
        this.post('postDetails', data, callback);
    }
    //post新建草稿箱 addDraft
    addPostDraftInfo(data, callback) {
        this.post('addPostDraft', data, callback);
    }
    //post 查看模式
    getDetailPost(data, callback) {
        this.post('getDetailPostContent', data, callback);
    }
    //请求draft_list
    requestDraftList(data, callback) {
        this.post('fetchDraftList', data, callback);
    }
    //更新draft
    updateDraft(data, callback) {
        this.post('updateDraftDetail', data, callback);
    }
    //upload chat-post 直接上传
    uploadChatPost(data, callback) {
        this.post('uploadChatPostMsg', data, callback);
    }
    //upload chat-post 草稿箱上传
    uploadChatPostByDraft(data, callback) {
        this.post('uploadChatPostMsgByDraft', data, callback);
    }
    //draft delete
    deleteDraft(data, callback) {
        this.post('removeDraft', data, callback);
    }
    //chatPost comments
    addChatPostComment(data, callback) {
        this.post('appendChatComment', data, callback);
    }
    //delete post comments
    removeChatPostComment(data, callback) {
        this.post('deletePostComment', data, callback);
    }
    //show chatPost comments list
    showChatCommentsList(data, callback) {
        this.post('displayComments', data, callback);
    }
    //draft-attachment-info
    getDraftAttachmentInfo(data, callback) {
        this.post('draftAttachmentInfo', data, callback);
    }
    //inMailSend
    inMailSend(data, callback) {
        this.post('inMailSend', data, callback);
    }
    //  fetchInMailChannel
    fetchInMailChannel(data, callback) {
        this.post('fetchInMailChannel', data, callback);
    }
    /**
     * 共享文件前生成share id
     * data
     {
       "resource_id":2048,
       "form":1
     }
     */
    generateShareId(data, callback) {
        this.getData('generateShareId', data, callback);
    }
    //chat search message
    chatSearchMessage(data, callback) {
        this.getData('chatSearchInfo', data, callback);
    }
    //chat search message
    getFrontAndBackMsg(data, callback) {
        this.getData('getFrontAndBackMessage', data, callback);
    }
    //查询图片的前后5条信息
    findBeforeAndAfterImg(data, callback) {
        this.getData('queryBeforeAndAfterImg', data, callback);
    }
    //查询图片前10条或者后10条信息
    queryBeforeOrAfterImg(data, callback) {
        this.getData('findBeforeOrAfterImg', data, callback);
    }
    //查询某一个组的post
    getPostByChatGroup(data, callback) {
        this.getData('fetchPostByChatGroup', data, callback);
    }
};
ChatModelService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(api_service_1.ApiService)),
    __metadata("design:paramtypes", [api_service_1.ApiService])
], ChatModelService);
exports.ChatModelService = ChatModelService;
//# sourceMappingURL=chat-model.service.js.map

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

/***/ }),

/***/ 349:
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
const notification_config_1 = __webpack_require__(56);
const chat_invite_member_1 = __webpack_require__(346);
const notification_service_1 = __webpack_require__(109);
/**
 * Generated class for the ChatChannelMemberComponent page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let ChatChannelMemberComponent = class ChatChannelMemberComponent {
    constructor(navCtrl, events, navParams, modalCtrl, appConfig, imService, notificationService, userStoreService, dialogService) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.appConfig = appConfig;
        this.imService = imService;
        this.notificationService = notificationService;
        this.userStoreService = userStoreService;
        this.dialogService = dialogService;
        this.channelMemberArr = [];
    }
    ionViewDidLoad() {
        this.channelInfo = this.navParams.data.channelInfo;
        this.menuInfo = this.navParams.data.menuInfo;
        this.channelMemberArr = this.channelInfo.info;
        this.getCurrentUserInfo();
        this.dealEvent();
        this.subscription = this.notificationService.getNotification().subscribe((message) => {
            this.dealWebSocketNotification(message);
        });
    }
    /**
     * 获取当前登录用户信息
     */
    getCurrentUserInfo() {
        Promise.all([
            this.userStoreService.getCurrentUUID((v) => this.currentUUID = v),
            this.userStoreService.getCurrentPSID((v) => this.currentPSID = v)
        ]).then(() => {
        });
    }
    /**
     * 页面销毁
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.events.unsubscribe(event_name_config_1.EventNameConfig.REFRESH_CHAT_CHANNEL_INFO);
    }
    /**
     * 事件处理
     */
    dealEvent() {
        this.events.subscribe(event_name_config_1.EventNameConfig.REFRESH_CHAT_CHANNEL_INFO, (params) => {
            if (params.data) {
                this.channelInfo = params.data;
                this.channelMemberArr = this.channelInfo.info;
            }
        });
    }
    /**
     * IM通知处理
     */
    dealWebSocketNotification(message) {
        switch (message.act) {
            case notification_config_1.NotificationConfig.ACT_NOTICE_MASTER_DELETE_GROUP_USER:
                if (message.status == 1 && message.data) {
                    if (message.data.sent) {
                        for (let i in this.channelInfo.info) {
                            if (this.channelInfo.info[i] && this.channelInfo.info[i].uid == this.deleteMember.uid) {
                                this.channelInfo.info.splice(parseInt(i), 1);
                            }
                        }
                    }
                    else if (message.data.owner && message.data.gid == this.channelInfo.gid) {
                        if (message.data.frd_type == 4) {
                            for (let i in this.channelInfo.info) {
                                if (this.channelInfo.info[i] && this.channelInfo.info[i].uid == message.data.friend) {
                                    this.channelInfo.info.splice(parseInt(i), 1);
                                }
                            }
                        }
                    }
                }
                break;
        }
    }
    /**
     * 点击删除成员
     */
    deleteTeamMember(event, member) {
        event.stopPropagation();
        this.deleteMember = member;
        this.dialogService.showConfirm('Delete it', 'That is undone!', () => {
            let sendData = {
                gid: this.channelInfo.gid,
                name: this.channelInfo.name,
                friend: member.uid,
                form: this.channelInfo.form
            };
            this.imService.sendDeleteChannelMember(sendData);
        });
    }
    /**
     * 邀请更多成员
     */
    inviteMoreMember() {
        event.stopPropagation();
        let modal = this.modalCtrl.create(chat_invite_member_1.ChatInviteMemberComponent, {
            channelInfo: this.channelInfo,
            menuInfo: this.menuInfo
        });
        modal.present();
    }
};
ChatChannelMemberComponent = __decorate([
    core_1.Component({
        selector: 'page-chat-channel-member',template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/chat-channel-member/chat-channel-member.html"*/'<ion-header>\n    <!--<ion-navbar class="chat-channel-member-title">-->\n        <!--<span class="bi-icon-arrow" navPop></span>-->\n        <!--<span>TEAM MEMBER</span>-->\n        <!--<button class="chat-member-invite"-->\n                <!--(click)="inviteMoreMember($event)"-->\n                <!--*ngIf="menuInfo?.is_mission == 0">-->\n            <!--INVITE-->\n        <!--</button>-->\n    <!--</ion-navbar>-->\n    <ion-navbar class="g-header clearfix">\n        <span class="bi-icon-down back" navPop></span>\n        <span class="g-header-title">TEAM MEMBER</span>\n        <span class="send"\n              *ngIf="menuInfo?.is_mission == 0"\n              (click)="inviteMoreMember($event)">INVITE</span>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <ion-content>\n        <ion-list class="chat-member-list">\n            <ion-item *ngFor="let item of channelMemberArr" no-lines>\n                <ion-avatar item-start no-margin no-padding>\n                    <img src="{{item?.user_profile_path? appConfig?.resourceDomain + item?.user_profile_path :\'\'}}">\n                    <b [class.status-online]="item.online ==1"\n                       [class.status-offline]="item.online ==0">\n                    </b>\n                </ion-avatar>\n                <p class="chat-member-work-name">{{item.work_name}}</p>\n                <p class="chat-member-p-name">{{item?.p_name}}</p>\n                <span item-end class="bi-icon-delete"\n                      *ngIf="menuInfo?.is_host == 1 && menuInfo?.is_mission == 0 &&(item?.uid != currentUUID && item?.uid != currentPSID)"\n                      (click)="deleteTeamMember($event,item)"></span>\n            </ion-item>\n        </ion-list>\n    </ion-content>\n</ion-content>\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/chat-channel-member/chat-channel-member.html"*/,
    }),
    __param(4, core_1.Inject('app.config')),
    __param(5, core_1.Inject('im.service')),
    __param(6, core_1.Inject(notification_service_1.NotificationService)),
    __param(7, core_1.Inject('user-store.service')),
    __param(8, core_1.Inject('dialog.service')),
    __metadata("design:paramtypes", [ionic_angular_1.NavController,
        ionic_angular_1.Events,
        ionic_angular_1.NavParams,
        ionic_angular_1.ModalController, Object, Object, notification_service_1.NotificationService, Object, Object])
], ChatChannelMemberComponent);
exports.ChatChannelMemberComponent = ChatChannelMemberComponent;
//# sourceMappingURL=chat-channel-member.js.map

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

/***/ }),

/***/ 352:
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
///<reference path="../chat-set-channel/chat-set-channel.ts"/>
const core_1 = __webpack_require__(0);
const ionic_angular_1 = __webpack_require__(6);
const chat_edit_topic_1 = __webpack_require__(350);
const chat_set_channel_1 = __webpack_require__(351);
const chat_channel_member_1 = __webpack_require__(349);
const chat_model_service_1 = __webpack_require__(345);
const event_name_config_1 = __webpack_require__(15);
const chat_invite_member_1 = __webpack_require__(346);
const index_1 = __webpack_require__(212);
/**
 * Generated class for the ChatChannelMoreComponent page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let ChatChannelMoreComponent = class ChatChannelMoreComponent {
    constructor(navCtrl, modalCtrl, chatStoreService, imService, notificationService, dialogService, chatModelService, events, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.chatStoreService = chatStoreService;
        this.imService = imService;
        this.notificationService = notificationService;
        this.dialogService = dialogService;
        this.chatModelService = chatModelService;
        this.events = events;
        this.navParams = navParams;
        this.optionData = this.navParams.data;
    }
    ionViewDidLoad() {
        this.channelInfo = this.optionData.chatChannelInfo;
        this.menuInfo = this.optionData.menu;
        this.judgeIsBeenStarred();
        this.dealEvent();
        this.subscription = this.notificationService.getNotification().subscribe((message) => {
            this.dealWebSocketNotification(message);
        });
    }
    /**
     * 页面销毁
     */
    ngOnDestroy() {
        this.events.unsubscribe(event_name_config_1.EventNameConfig.REFRESH_CHAT_CHANNEL_INFO);
        this.subscription.unsubscribe();
    }
    /**
     * IM通知处理
     */
    dealWebSocketNotification(message) {
    }
    /**
     * 事件处理
     */
    dealEvent() {
        this.events.subscribe(event_name_config_1.EventNameConfig.REFRESH_CHAT_CHANNEL_INFO, (params) => {
            if (params.data) {
                this.channelInfo = params.data;
            }
        });
    }
    /**
     * 点击编辑群topic
     */
    editChannelTopic(event) {
        event.stopPropagation();
        let modal = this.modalCtrl.create(chat_edit_topic_1.ChatEditTopicComponent, { channelInfo: this.channelInfo });
        modal.present();
    }
    /**
     * set chat channel
     */
    setChatChannel(event) {
        event.stopPropagation();
        let modal = this.modalCtrl.create(chat_set_channel_1.ChatSetChannelComponent, {
            channelInfo: this.channelInfo,
            menuInfo: this.menuInfo
        });
        modal.present();
    }
    /**
     * 查看群成员
     */
    showTeamMember(event) {
        event.stopPropagation();
        let modal = this.modalCtrl.create(chat_channel_member_1.ChatChannelMemberComponent, {
            channelInfo: this.channelInfo,
            menuInfo: this.menuInfo
        });
        modal.present();
    }
    /**
     * 收藏聊天组/人
     */
    judgeIsBeenStarred() {
        let chatChannelList;
        let starredList;
        this.chatStoreService.getChatChannelList((v) => {
            chatChannelList = v;
            starredList = chatChannelList['STARRED'];
            for (let i in starredList) {
                if (!this.menuInfo.is_Friend) {
                    if (this.menuInfo.gid == starredList[i].gid) {
                        this.menuInfo['is_starred'] = true;
                        break;
                    }
                }
                else {
                    if (this.menuInfo.uid == starredList[i].uid) {
                        this.menuInfo['is_starred'] = true;
                        break;
                    }
                }
            }
        }).then().catch();
    }
    //判断当前聊天组/人是否被收藏
    starredOrCancelChatChannel(event) {
        event.stopPropagation();
        let requestData = {};
        if (this.menuInfo.is_Friend) {
            requestData.form = this.menuInfo.form;
            requestData.uid = this.menuInfo.uid;
        }
        else {
            requestData.form = this.menuInfo.form;
            requestData.gid = this.menuInfo.gid;
        }
        if (this.menuInfo['is_starred']) {
            this.chatModelService.cancelTheEnshrine({ remove: requestData }, (data) => {
                if (data.status === 1) {
                    this.events.publish(event_name_config_1.EventNameConfig.REFRESH_CHAT_LIST, { param: 'remove-starred' });
                    this.menuInfo['is_starred'] = false;
                }
            });
        }
        else {
            this.chatModelService.getEnshrineInfo({ data: requestData }, (data) => {
                if (data.status === 1) {
                    this.events.publish(event_name_config_1.EventNameConfig.REFRESH_CHAT_LIST, { param: 'add-starred' });
                    this.menuInfo['is_starred'] = true;
                }
            });
        }
    }
    /**
     * 点击邀请新成员进组
     */
    inviteMoreMember(event) {
        event.stopPropagation();
        let modal = this.modalCtrl.create(chat_invite_member_1.ChatInviteMemberComponent, {
            channelInfo: this.channelInfo,
            menuInfo: this.menuInfo
        });
        modal.present();
    }
    /**
     * 退出该群
     */
    quitTheChannel(event) {
        event.stopPropagation();
        this.dialogService.showConfirm('Quit Channel', 'That is undone!', () => {
            this.imService.sendQuitTheChannel({
                form: this.channelInfo.form,
                gid: this.channelInfo.gid,
            });
        });
    }
    /**
     * 删除该群
     */
    deleteTheChannel(event) {
        event.stopPropagation();
        this.dialogService.showConfirm('Delete Channel', 'That is undone!', () => {
            this.imService.sendDeleteTheChannel({
                form: this.channelInfo.form,
                gid: this.channelInfo.gid,
                name: this.channelInfo.name,
            });
        });
    }
};
ChatChannelMoreComponent = __decorate([
    core_1.Component({
        selector: 'page-chat-content-more',template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/chat-channel-more/chat-channel-more.html"*/'<ion-header>\n    <ion-navbar class="chat-content-more-title">\n        <span text-center>More</span>\n        <span class="bi-icon-esc" navPop></span>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="chat-more-content" padding-left="0" padding-right="0">\n    <ion-list>\n        <button ion-item text-center\n                (click)="inviteMoreMember($event)"\n                *ngIf="!menuInfo?.is_Friend && (menuInfo?.is_mission != 1)"\n        >\n            INVITE MEMBER TO JOIN\n        </button>\n        <button ion-item text-center (click)="setChatChannel($event)"\n                *ngIf="menuInfo?.is_host == 1 && !menuInfo?.is_Friend && (menuInfo?.is_mission != 1)">\n            SETTING\n        </button>\n        <button ion-item text-center\n                *ngIf="!menuInfo?.is_Friend"\n                (click)="editChannelTopic($event)">\n            EDIT TOPIC\n        </button>\n        <button ion-item text-center class="hide">\n            CLEAR MESSAGE\n        </button>\n        <button  ion-item text-center\n                 (click)="quitTheChannel($event)"\n                 *ngIf="menuInfo?.is_host == 0 && !menuInfo?.is_Friend && (menuInfo?.is_mission != 1)">\n            QUIT CHANNEL\n        </button>\n        <button\n                (click)="deleteTheChannel($event)"\n                ion-item text-center  *ngIf="menuInfo?.is_host == 1 && !menuInfo?.is_Friend && (menuInfo?.is_mission != 1)">\n            DELETE CHANNEL\n        </button>\n        <button ion-item text-center\n                *ngIf="!menuInfo?.is_Friend"\n                (click)="showTeamMember($event)">\n            TEAM MEMBER\n        </button>\n        <button ion-item text-center (click)="starredOrCancelChatChannel($event)">\n            {{menuInfo?.is_starred?\'CANCEL STARRED\':\'STARRED\'}}\n        </button>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/chat-channel-more/chat-channel-more.html"*/,
        providers: [chat_model_service_1.ChatModelService]
    }),
    __param(2, core_1.Inject('chat-store.service')),
    __param(3, core_1.Inject('im.service')),
    __param(4, core_1.Inject(index_1.NotificationService)),
    __param(5, core_1.Inject('dialog.service')),
    __metadata("design:paramtypes", [ionic_angular_1.NavController,
        ionic_angular_1.ModalController, Object, Object, index_1.NotificationService, Object, chat_model_service_1.ChatModelService,
        ionic_angular_1.Events,
        ionic_angular_1.NavParams])
], ChatChannelMoreComponent);
exports.ChatChannelMoreComponent = ChatChannelMoreComponent;
//# sourceMappingURL=chat-channel-more.js.map

/***/ })

});
//# sourceMappingURL=4.js.map