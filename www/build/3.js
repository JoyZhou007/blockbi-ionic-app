webpackJsonp([3],{

/***/ 325:
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
const chat_1 = __webpack_require__(377);
const shared_module_1 = __webpack_require__(58);
const chat_menu_1 = __webpack_require__(378);
let ChatPageModule = class ChatPageModule {
    constructor() {
    }
};
ChatPageModule = __decorate([
    core_1.NgModule({
        declarations: [
            chat_1.ChatPage,
            chat_menu_1.ChatMenuComponent
        ],
        imports: [ionic_angular_1.IonicPageModule.forChild(chat_1.ChatPage), shared_module_1.SharedModule],
    }),
    __metadata("design:paramtypes", [])
], ChatPageModule);
exports.ChatPageModule = ChatPageModule;
//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by allen shan(allen.shan@blockbi.com)
 * on 2017/11/10.
 */
exports.ChatConfig = {
    CHAT_MESSAGE_TYPE_AT_SYMBOL: '@',
    //message 文本类型
    CHAT_MESSAGE_TYPE_TEXT: 1,
    //图片消息
    CHAT_MESSAGE_TYPE_IMG: 2,
    //文件消息
    CHAT_MESSAGE_TYPE_FILE: 3,
    //post消息
    CHAT_MESSAGE_TYPE_POST: 4,
    //系统消息, 如用户加入，退出群，修改群名，群话题
    CHAT_MESSAGE_TYPE_SYSTEM: 5,
    //share文件消息
    CHAT_MESSAGE_TYPE_SHARE: 6,
    //转发消息
    CHAT_MESSAGE_TYPE_FORWARD: 7,
    MESSAGE_TYPE_FRIEND: 1,
    MESSAGE_TYPE_GROUP: 2,
    MESSAGE_TYPE_PRIVATE: 1,
    MESSAGE_TYPE_WORK: 2,
    //chat-post draft分页没有更多数据
    CHATPOST_PAGER_ENDING: -1,
    //chat-post forward copy or update
    CHAT_POST_FORWARD_COPY: '2',
    CHAT_POST_FORWARD_UPDATE: '1',
    //chat-post draft分页没有更多数据
    CHAT_POST_COMMENT_PAGER_ENDING: -1,
    //quill editor 字数限制
    CHAT_POST_QUILL_EDITOR_LIMIT: 9000,
    CHAT_SORT_UP: 1,
    CHAT_SORT_DOWN: -1
};
//# sourceMappingURL=chat.config.js.map

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

/***/ 348:
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
let FolderModelService = class FolderModelService extends base_model_service_1.BaseModelService {
    constructor(api) {
        super(api);
        this.api = api;
    }
    //初始化文件管理器
    folderInit(data, callback) {
        this.getData('folderInit', data, callback);
    }
    //  获取文件列表
    folderLists(data, callback) {
        this.getData('folderLists', data, callback);
    }
    //  创建文件夹
    folderCreate(data, callback) {
        this.getData('folderCreate', data, callback);
    }
    //  删除文件或者文件夹
    deleteFolder(data, callback) {
        this.getData('deleteFolder', data, callback);
    }
    //  移动文件或者文件夹
    modifyFolder(data, callback) {
        this.getData('modifyFolder', data, callback);
    }
    //  下载文件
    downloadFile(data, callback) {
        this.getData('downloadFile', data, callback);
    }
    //  上传文件
    uploadFile(data, callback) {
        this.getData('uploadFile', data, callback);
    }
    //  获取全部文件夹列表
    folderDirList(data, callback) {
        this.getData('folderDirList', data, callback);
    }
    //  获取上层文件列表
    folderTopLists(data, callback) {
        this.getData('folderTopLists', data, callback);
    }
    //  复制文件
    folderCopy(data, callback) {
        this.getData('folderCopy', data, callback);
    }
    //给文件增加或者删除标记
    folderStarred(data, callback) {
        this.getData('folderStarred', data, callback);
    }
    //文件重命名
    folderRename(data, callback) {
        this.getData('folderRename', data, callback);
    }
    //  转让文件owner
    folderTransfer(data, callback) {
        this.getData('folderTransfer', data, callback);
    }
    //文件分享
    folderShare(data, callback) {
        this.getData('folderShare', data, callback);
    }
    //  文件上传
    fileUpload(data, callback) {
        this.getData('fileUpload', data, callback);
    }
    // 文件搜索
    fileSearch(data, callback) {
        this.getData('fileSearch', data, callback);
    }
    // 文件转发
    fileForward(data, callback) {
        this.getData('fileForward', data, callback);
    }
    // 获取文件share
    fileShareList(data, callback) {
        this.getData('fileShareList', data, callback);
    }
    // fileImport
    fileImport(data, callback) {
        this.getData('fileImport', data, callback);
    }
    //  folderDisk
    folderDisk(data, callback) {
        this.getData('folderDisk', data, callback);
    }
    //  staffSpace
    staffSpace(data, callback) {
        this.getData('staffSpace', data, callback);
    }
    //分享文件列表
    shareFolderList(data, callback) {
        this.getData('shareFolderList', data, callback);
    }
    //获取搜索的全路径
    folderFullPath(data, callback) {
        this.getData('folderFullPath', data, callback);
    }
};
FolderModelService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(api_service_1.ApiService)),
    __metadata("design:paramtypes", [api_service_1.ApiService])
], FolderModelService);
exports.FolderModelService = FolderModelService;
//# sourceMappingURL=folder-model.service.js.map

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

/***/ }),

/***/ 353:
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
const chat_config_1 = __webpack_require__(344);
const event_name_config_1 = __webpack_require__(15);
const folder_model_service_1 = __webpack_require__(348);
const folderConfig = __webpack_require__(354);
/**
 * Generated class for the ChatForwardDialogComponent page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let ChatForwardDialogComponent = class ChatForwardDialogComponent {
    constructor(navCtrl, userService, chatStoreService, dialogService, appConfig, event, folderModelService, navParams) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.chatStoreService = chatStoreService;
        this.dialogService = dialogService;
        this.appConfig = appConfig;
        this.event = event;
        this.folderModelService = folderModelService;
        this.navParams = navParams;
        this.currentList = [];
        this.currentForm = this.navParams.data.chatMenuItem.form;
        this.messageObj = this.navParams.data.messageObj;
    }
    ionViewDidLoad() {
        this.getContactList();
        this.getGroupList();
        this.initOriginalMsg();
        this.judgeIsCommonMessage();
    }
    /**
     * 切换channel
     */
    switchNewChannelType(event, type) {
        event.stopPropagation();
        if (this.currentType != type) {
            this.currentType = type;
            switch (type) {
                case 1:
                    this.isFriend = true;
                    this.currentList = this.contactList['Internal'];
                    break;
                case 2:
                    this.isFriend = true;
                    this.currentList = this.contactList['Cooperator'];
                    break;
                case 3:
                    this.isFriend = false;
                    this.currentList = this.chatChannelList['WORK'];
                    break;
                case 4:
                    this.isFriend = false;
                    this.currentList = this.chatChannelList['MISSION'];
                    break;
                case 5:
                    this.isFriend = true;
                    this.currentList = this.contactList['Friend'];
                    break;
                case 6:
                    this.isFriend = false;
                    this.currentList = this.chatChannelList['PRIVATE'];
                    break;
            }
        }
    }
    /**
     * 从本地缓存获取contact_list
     */
    getContactList() {
        this.userService.getContactList((contactList) => {
            if (contactList) {
                this.contactList = contactList;
            }
        });
    }
    /**
     * 从本地缓存获取channel_list
     */
    getGroupList() {
        this.chatStoreService.getChatChannelList((v) => {
            this.chatChannelList = v;
        }).then().catch();
    }
    /**
     * 判断是否是普通文本消息
     */
    judgeIsCommonMessage() {
        if (this.messageObj.type == chat_config_1.ChatConfig.CHAT_MESSAGE_TYPE_FORWARD && this.messageObj.detail.original_msg.type == 1) {
            this.isCommonMessage = true;
        }
        else if (this.messageObj.type == chat_config_1.ChatConfig.CHAT_MESSAGE_TYPE_TEXT) {
            this.isCommonMessage = true;
        }
        else {
            this.isCommonMessage = false;
        }
        if (this.messageObj.type == chat_config_1.ChatConfig.CHAT_MESSAGE_TYPE_FORWARD) {
            this.isForwardMessage = true;
        }
        else {
            this.isForwardMessage = false;
        }
        if (this.messageObj.type == chat_config_1.ChatConfig.CHAT_MESSAGE_TYPE_SHARE) {
            this.isShareMessage = true;
        }
        else {
            this.isShareMessage = false;
        }
    }
    /**
     * forwardToTheChannel
     */
    forwardToTheChannel(item) {
        this.dialogService.showConfirm('Forward it', 'Are you sure ?', () => {
            this.confirmForwardMsg(item);
            this.navCtrl.pop();
        });
    }
    /**
     * 确认转发该消息
     */
    confirmForwardMsg(item) {
        //如果是普通文本类型消息 直接转发
        let moduleType;
        if (!item.gid) {
            item.uid = item.uuid || item.pisd;
            moduleType = folderConfig.MODULE_CHAT_FRIEND_TYPE;
        }
        else {
            moduleType = folderConfig.MODULE_CHAT_GROUP_TYPE;
        }
        let forwardMessage = this.isForwardMessage ? this.messageObj.detail.original_msg : this.messageObj;
        if (this.isCommonMessage) {
            // this.originalMsg =
            this.originalMsg = {
                original_msg: {
                    detail: forwardMessage.detail,
                    msg: forwardMessage.msg,
                    msg_id: this.messageObj.msg_id,
                    type: this.messageObj.type,
                    owner: forwardMessage.owner,
                    userInfo: {
                        form: this.currentForm,
                        uid: this.messageObj.user_info.uid,
                        work_name: this.messageObj.user_info.work_name
                    }
                }
            };
            this.event.publish(event_name_config_1.EventNameConfig.FORWARD_MESSAGE, {
                data: {
                    originalMsg: this.originalMsg,
                    forwardItem: item
                }
            });
        }
        else {
            this.folderModelService.fileForward({
                id: item.gid || item.uid,
                moduleType: moduleType,
                form: this.currentForm,
                fid: forwardMessage.detail.fid
            }, (res) => {
                // 获取成功
                if (res.status == 1) {
                    this.dealSpecialMessageForward(res.data, item, forwardMessage);
                }
            });
        }
    }
    /**
     * 处理非文本消息的转发
     */
    dealSpecialMessageForward(data, item, forwardMessage) {
        let detail;
        let originalMsgType;
        switch (forwardMessage.type) {
            case chat_config_1.ChatConfig.CHAT_MESSAGE_TYPE_POST:
                detail = this.initPostDetail();
                originalMsgType = chat_config_1.ChatConfig.CHAT_MESSAGE_TYPE_POST;
                Object.assign(detail, forwardMessage.detail);
                break;
            case chat_config_1.ChatConfig.CHAT_MESSAGE_TYPE_FILE:
                detail = this.initFileDetail();
                originalMsgType = chat_config_1.ChatConfig.CHAT_MESSAGE_TYPE_FILE;
                Object.assign(detail, forwardMessage.detail);
                break;
            case chat_config_1.ChatConfig.CHAT_MESSAGE_TYPE_IMG:
                detail = this.initImageDetail();
                originalMsgType = chat_config_1.ChatConfig.CHAT_MESSAGE_TYPE_IMG;
                Object.assign(detail, forwardMessage.detail);
                break;
            case chat_config_1.ChatConfig.CHAT_MESSAGE_TYPE_SHARE:
                originalMsgType = forwardMessage.detail.share_file_type;
                switch (forwardMessage.detail.share_file_type) {
                    case chat_config_1.ChatConfig.CHAT_MESSAGE_TYPE_POST:
                        detail = this.initPostDetail();
                        Object.assign(detail, forwardMessage.detail);
                        break;
                    case chat_config_1.ChatConfig.CHAT_MESSAGE_TYPE_FILE:
                        detail = this.initFileDetail();
                        Object.assign(detail, forwardMessage.detail);
                        break;
                    case chat_config_1.ChatConfig.CHAT_MESSAGE_TYPE_IMG:
                        detail = this.initImageDetail();
                        Object.assign(detail, forwardMessage.detail);
                        break;
                }
                break;
        }
        detail.fid = data.fid; //将消息里面的fid 换为 新 的fid
        detail.file_name = data.name; //将消息里面的name 换为 新的name
        this.originalMsg = {
            original_msg: {
                detail: detail,
                msg: forwardMessage.msg,
                msg_id: this.messageObj.msg_id,
                type: originalMsgType,
                owner: forwardMessage.owner,
                userInfo: {
                    form: this.currentForm,
                    uid: this.messageObj.user_info.uid,
                    work_name: this.messageObj.user_info.work_name
                }
            }
        };
        this.event.publish(event_name_config_1.EventNameConfig.FORWARD_MESSAGE, {
            data: {
                originalMsg: this.originalMsg,
                forwardItem: item
            }
        });
    }
    /**
     * 初始化转发的原始消息
     */
    initOriginalMsg() {
        this.originalMsg = {
            original_msg: {
                detail: {},
                msg: '',
                msg_id: '',
                owner: '',
                type: 1,
                userInfo: {}
            }
        };
    }
    initPostDetail() {
        let detail = {
            attachments: 0,
            fid: 0,
            first_attachment: {},
            post_id: '',
            post_name: '',
            updated: 0
        };
        return detail;
    }
    initImageDetail() {
        let detail = {
            ext: '',
            fid: '',
            file_name: '',
            file_type: '',
            file_path: ''
        };
        return detail;
    }
    initFileDetail() {
        let detail = {
            ext: '',
            fid: '',
            file_name: '',
            file_type: '',
            updated: ''
        };
        return detail;
    }
};
ChatForwardDialogComponent = __decorate([
    core_1.Component({
        selector: 'page-chat-forward-dialog',template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/chat-forward-dialog/chat-forward-dialog.html"*/'<ion-header class="g-header">\n    <ion-navbar class="g-header clearfix">\n        <span class="bi-icon-down back" navPop></span>\n        <span class="g-header-title">FORWARD</span>\n    </ion-navbar>\n    <ion-segment class="g-ion-segment g-margin-top10"\n                 *ngIf="currentForm == 1">\n        <ion-segment-button\n                [class.active]="currentType == 5"\n                (click)="switchNewChannelType($event,5)">\n            <div class=" bi-icon-friend"></div>\n            <div class="f3-f">Friend</div>\n        </ion-segment-button>\n        <ion-segment-button\n                [class.active]="currentType == 6"\n                (click)="switchNewChannelType($event,6)">\n            <div class=" bi-icon-in-private"></div>\n            <div class="f3-f">In private</div>\n        </ion-segment-button>\n    </ion-segment>\n    <ion-segment class="g-ion-segment g-margin-top10" *ngIf="currentForm == 2">\n        <ion-segment-button\n                [class.active]="currentType == 1"\n                (click)="switchNewChannelType($event,1)">\n            <div class=" bi-icon-internal"></div>\n            <div class="f3-f">Internal</div>\n        </ion-segment-button>\n        <ion-segment-button\n                [class.active]="currentType == 2"\n                (click)="switchNewChannelType($event,2)">\n            <div class=" bi-icon-cooperator"></div>\n            <div class="f3-f">Cooperator</div>\n        </ion-segment-button>\n        <ion-segment-button\n                [class.active]="currentType == 3"\n                (click)="switchNewChannelType($event,3)">\n            <div class="bi-icon-business1"></div>\n            <div class="f3-f">Business</div>\n        </ion-segment-button>\n        <ion-segment-button\n                [class.active]="currentType == 4"\n                (click)="switchNewChannelType($event,4)">\n            <div class=" bi-icon-mission"></div>\n            <div class="f3-f">Mission</div>\n        </ion-segment-button>\n    </ion-segment>\n</ion-header>\n\n\n<ion-content padding>\n    <div class="g-list54">\n        <ion-list>\n            <ion-item *ngFor="let item of currentList;let i = index"\n                      (click)="forwardToTheChannel(item)"\n                      class="group-list" no-padding>\n                <img class="g-user-profile34"\n                     src="{{appConfig.resourceDomain + item.user_profile_path}}"\n                     *ngIf="isFriend">\n                <p class="icon-mission" *ngIf="!isFriend && item.is_mission == 1 ">M</p>\n                <p class="icon-private" *ngIf="!isFriend && item.is_mission == 0 && item.form == 1">P</p>\n                <p class="icon-business" *ngIf="!isFriend && item.is_mission == 0 && item.form == 2">B</p>\n                <h2 margin-left>{{isFriend? item.work_name : item.name}}</h2>\n                <span>{{item.p_name? item.p_name : \'\'}}</span>\n            </ion-item>\n        </ion-list>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/chat-forward-dialog/chat-forward-dialog.html"*/,
        providers: [folder_model_service_1.FolderModelService]
    }),
    __param(1, core_1.Inject('user.service')),
    __param(2, core_1.Inject('chat-store.service')),
    __param(3, core_1.Inject('dialog.service')),
    __param(4, core_1.Inject('app.config')),
    __metadata("design:paramtypes", [ionic_angular_1.NavController, Object, Object, Object, Object, ionic_angular_1.Events,
        folder_model_service_1.FolderModelService,
        ionic_angular_1.NavParams])
], ChatForwardDialogComponent);
exports.ChatForwardDialogComponent = ChatForwardDialogComponent;
//# sourceMappingURL=chat-forward-dialog.js.map

/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * folder相关的常量定义
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FOLDER_TYPE_All = 'All';
exports.FOLDER_TYPE_FOLDER = 'Folder';
exports.FOLDER_TYPE_INFORMATION = 'Information';
exports.FOLDER_TYPE_ANALYSIS = 'Analysis';
exports.FOLDER_TYPE_POST = 'Post';
exports.FOLDER_TYPE_EXCEL = 'Excel';
exports.FOLDER_TYPE_WORD = 'Word';
exports.FOLDER_TYPE_PPT = 'Ppt';
exports.FOLDER_TYPE_PDF = 'Pdf';
exports.FOLDER_TYPE_IMAGE = 'Image';
exports.FOLDER_TYPE_PIN = 'Pin';
exports.FOLDER_TYPE_OTHER = 'Other';
exports.FOLDER_TYPE_PERSONAL_SHARE = 'PersonalShare';
exports.FOLDER_TYPE_BUSINESS_SHARE = 'BusinessShare';
/**
 *permission列表
 */
exports.PERMISSION_FOLDER_READ = 'Read';
exports.PERMISSION_FOLDER_READ_ID = '1';
exports.PERMISSION_FOLDER_WRITE = 'Write';
exports.PERMISSION_FOLDER_WRITE_ID = '2';
exports.PERMISSION_FOLDER_CONTROL = 'Control';
exports.PERMISSION_FOLDER_CONTROL_ID = '3';
/**
 * 文件的类型
 */
exports.FILE_TYPE_WORD = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
exports.FILE_TYPE_EXCEL = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
exports.FILE_TYPE_EXCEL_1 = "type application/vnd.ms-excel";
exports.FILE_TYPE_PPT = "application/vnd.openxmlformats-officedocument.presentationml.presentation";
exports.FILE_TYPE_PPT_1 = "application/vnd.ms-powerpoint";
exports.FILE_TYPE_PDF = "application/pdf";
exports.FILE_TYPE_IMAGE = "image";
exports.FILE_TYPE_POST = 'post';
/**
 * 文件上传的模块module
 */
exports.MODULE_MISSION_TYPE = 1;
exports.MODULE_CHAT_GROUP_TYPE = 2;
exports.MODULE_CHAT_FRIEND_TYPE = 3;
exports.MODULE_INFORMATION_TYPE = 4;
/**
 * 页数每页文件最大数常量
 */
exports.FOLDER_PAGE_SIZE = 100;
//# sourceMappingURL=folder.config.js.map

/***/ }),

/***/ 355:
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
///<reference path="../../share/config/chat.config.ts"/>
const core_1 = __webpack_require__(0);
const ionic_angular_1 = __webpack_require__(6);
const chat_config_1 = __webpack_require__(344);
const chat_model_service_1 = __webpack_require__(345);
const event_name_config_1 = __webpack_require__(15);
/**
 * Generated class for the ChatShareDialogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let ChatShareDialogPage = class ChatShareDialogPage {
    constructor(navCtrl, chatStoreService, imService, chatModelService, dialogService, appConfig, event, navParams) {
        this.navCtrl = navCtrl;
        this.chatStoreService = chatStoreService;
        this.imService = imService;
        this.chatModelService = chatModelService;
        this.dialogService = dialogService;
        this.appConfig = appConfig;
        this.event = event;
        this.navParams = navParams;
        this.currentList = [];
        this.currentForm = this.navParams.data.chatMenuItem.form;
        this.messageObj = this.navParams.data.messageObj;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad ChatShareDialogPage');
        this.getGroupList();
    }
    /**
     * 切换channel
     */
    switchNewChannelType(event, type) {
        event.stopPropagation();
        if (this.currentType != type) {
            this.currentType = type;
            switch (type) {
                case 1:
                    this.currentList = this.chatChannelList['WORK'];
                    break;
                case 2:
                    this.currentList = this.chatChannelList['MISSION'];
                    break;
            }
        }
    }
    /**
     * 从本地缓存获取channel_list
     */
    getGroupList() {
        this.chatStoreService.getChatChannelList((v) => {
            this.chatChannelList = v;
            if (this.currentForm == 1) {
                this.currentList = this.chatChannelList['PRIVATE'];
            }
        }).then().catch();
    }
    /**
     * 确认分享
     */
    shareToTheChannel(item) {
        this.dialogService.showConfirm('Share it!', 'Are you be sure ? they also be share comments as well', () => {
            let shareMessage;
            let resource_id;
            switch (this.messageObj.type) {
                case chat_config_1.ChatConfig.CHAT_MESSAGE_TYPE_FORWARD:
                    let originalMsgType = this.messageObj.detail.original_msg.detail.type;
                    resource_id = this.messageObj.detail.original_msg.detail.fid;
                    if (originalMsgType == chat_config_1.ChatConfig.CHAT_MESSAGE_TYPE_POST) {
                        shareMessage = this.initSharePostMessage();
                    }
                    else {
                        shareMessage = this.initShareMessage();
                    }
                    resource_id = this.messageObj.detail.original_msg.detail.fid;
                    Object.assign(shareMessage, this.messageObj.detail.original_msg.detail);
                    break;
                case chat_config_1.ChatConfig.CHAT_MESSAGE_TYPE_SHARE:
                    if (this.messageObj.detail.share_file_type == chat_config_1.ChatConfig.CHAT_MESSAGE_TYPE_POST) {
                        shareMessage = this.initSharePostMessage();
                    }
                    else {
                        shareMessage = this.initShareMessage();
                    }
                    resource_id = this.messageObj.detail.fid;
                    Object.assign(shareMessage, this.messageObj.detail);
                    break;
                case chat_config_1.ChatConfig.CHAT_MESSAGE_TYPE_IMG:
                case chat_config_1.ChatConfig.CHAT_MESSAGE_TYPE_FILE:
                    shareMessage = this.initShareMessage();
                    resource_id = this.messageObj.detail.fid;
                    Object.assign(shareMessage, this.messageObj.detail);
                    shareMessage.share_file_type = this.messageObj.type;
                    break;
                case chat_config_1.ChatConfig.CHAT_MESSAGE_TYPE_POST:
                    resource_id = this.messageObj.detail.fid;
                    shareMessage = this.initSharePostMessage();
                    Object.assign(shareMessage, this.messageObj.detail);
                    shareMessage.share_file_type = this.messageObj.type;
                    break;
            }
            //从api获取 share_id
            let getShareIdFun = (item) => {
                this.chatModelService.generateShareId({
                    data: {
                        gid: item.gid,
                        resource_id: resource_id,
                        form: this.currentForm
                    }
                }, (response) => {
                    if (response.status === 1) {
                        let shareId = response.data.share_id;
                        if (shareId) {
                            shareMessage.share_id = shareId;
                            this.event.publish(event_name_config_1.EventNameConfig.SHARE_MESSAGE, {
                                data: {
                                    shareMessage: shareMessage,
                                    shareItem: item
                                }
                            });
                        }
                    }
                });
            };
            getShareIdFun(item);
        });
    }
    /**
     * 初始化share的消息对象
     * @returns {ChatMessageShare}
     */
    initShareMessage() {
        let detail = {
            ext: '',
            fid: '',
            file_name: '',
            file_path: '',
            file_type: '',
            share_file_type: 0,
            share_id: ''
        };
        return detail;
    }
    /**
     * 初始化 share post 对象
     * @returns {ChatMessageSharePost}
     */
    initSharePostMessage() {
        let detail = {
            first_attachment: '',
            fid: '',
            post_name: '',
            post_id: '',
            share_file_type: 0,
            share_id: '',
            summary: '',
            updated: '',
        };
        return detail;
    }
};
ChatShareDialogPage = __decorate([
    core_1.Component({
        selector: 'page-chat-share-dialog',template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/chat-share-dialog/chat-share-dialog.html"*/'<ion-header>\n    <ion-navbar class="g-header clearfix">\n        <span class="bi-icon-down back" navPop></span>\n        <span class="g-header-title">SHARE</span>\n    </ion-navbar>\n    <ion-segment class="g-ion-segment g-margin-top10" *ngIf="currentForm == 2">\n        <ion-segment-button\n                [class.active]="currentType == 1"\n                (click)="switchNewChannelType($event,2)">\n            <div class="bi-icon-business1"></div>\n            <div class="f3-f">Business</div>\n        </ion-segment-button>\n        <ion-segment-button\n                [class.active]="currentType == 2"\n                (click)="switchNewChannelType($event,2)">\n            <div class=" bi-icon-mission"></div>\n            <div class="f3-f">Mission</div>\n        </ion-segment-button>\n    </ion-segment>\n</ion-header>\n\n\n<ion-content padding>\n    <div class="g-list54">\n        <ion-list>\n            <ion-item *ngFor="let item of currentList;let i = index"\n                      (click)="shareToTheChannel(item)"\n                      class="group-list" no-padding>\n                <p class="icon-mission" *ngIf="item.is_mission == 1 ">M</p>\n                <p class="icon-private" *ngIf="item.is_mission == 0 && item.form == 1">P</p>\n                <p class="icon-business" *ngIf="item.is_mission == 0 && item.form == 2">B</p>\n                <h2 margin-left>{{item.name}}</h2>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/chat-share-dialog/chat-share-dialog.html"*/,
        providers: [chat_model_service_1.ChatModelService]
    }),
    __param(1, core_1.Inject('chat-store.service')),
    __param(2, core_1.Inject('im.service')),
    __param(4, core_1.Inject('dialog.service')),
    __param(5, core_1.Inject('app.config')),
    __metadata("design:paramtypes", [ionic_angular_1.NavController, Object, Object, chat_model_service_1.ChatModelService, Object, Object, ionic_angular_1.Events,
        ionic_angular_1.NavParams])
], ChatShareDialogPage);
exports.ChatShareDialogPage = ChatShareDialogPage;
//# sourceMappingURL=chat-share-dialog.js.map

/***/ }),

/***/ 356:
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
const chat_config_1 = __webpack_require__(344);
const camera_1 = __webpack_require__(363);
const ionic_angular_1 = __webpack_require__(6);
const public_albums_1 = __webpack_require__(357);
/**
 * Generated class for the ChatContentInputComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
let ChatContentInputComponent = class ChatContentInputComponent {
    constructor(appConfig, nav, modalCtrl, actionSheetCtrl, camera) {
        this.appConfig = appConfig;
        this.nav = nav;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.outSendMessage = new core_1.EventEmitter();
        this.isShowAtList = false;
    }
    ngOnInit() {
        this.messageData = '';
    }
    //聊天组消息
    set setChannelInfo(param) {
        this.channelInfo = param;
        this.atUserList = this.channelInfo.info;
    }
    //聊天组消息
    set setIsFriend(bool) {
        this.isFriend = bool;
    }
    // setIsFriend
    /**
     * 键盘UP 事件
     * @param event
     */
    keyUpEvent(event) {
        if (event.keyCode == 13) {
            this.sendMessage(event);
        }
        else {
            if (!this.isFriend) {
                this.detectIsOpenAtList();
            }
        }
    }
    /**
     * 粘贴事件
     */
    pasteEvent() {
        if (!this.isFriend) {
            this.detectIsOpenAtList();
        }
    }
    /**
     * focusEvent
     */
    focusEvent(event) {
        event.stopPropagation();
        this.isShowMoreIcons = false;
    }
    /**
     * 发送消息
     */
    sendMessage(event) {
        event.stopPropagation();
        if (this.messageData.length != 0) {
            //是否要替换@用户
            if (this.atUserList && !this.isFriend) {
                this.atUserList.forEach((user) => {
                    let toFind = new RegExp('(@' + user.work_name + ') {1}', "g"); //注意work_name后的空格，如果去除，匹配中文结尾会有问题
                    let replace = '<@USER|' + user.uid + '>  ';
                    this.messageData = this.messageData.replace(toFind, replace);
                });
            }
            let data = {
                msg: this.messageData,
                type: chat_config_1.ChatConfig.CHAT_MESSAGE_TYPE_TEXT,
            };
            this.outSendMessage.emit(data);
        }
    }
    /**
     * 判断最后一个字母是否是@
     */
    detectIsOpenAtList() {
        let lastCode = this.messageData.substring(this.messageData.length - 1, this.messageData.length);
        if (lastCode === '@') {
            this.isShowAtList = true;
        }
        else {
            this.isShowAtList = false;
        }
    }
    /**
     * 点击显示@人员列表
     */
    showAtList(event) {
        event.stopPropagation();
        this.messageData = this.messageData + '@';
        this.detectIsOpenAtList();
    }
    keyDownEvent(event) {
        event.stopPropagation();
    }
    /**
     * atClickPerson
     */
    atClickPerson(event, item, input) {
        event.stopPropagation();
        this.messageData = this.messageData + item.work_name + ' ';
        this.isShowAtList = false;
        input.focus();
    }
    /**
     * 显示更多图标
     */
    showMoreIcons(event) {
        event.stopPropagation();
        this.isShowMoreIcons = !this.isShowMoreIcons;
    }
    /**
     * 调用手机相册/或者相机
     */
    showPhonePic() {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Upload Image',
            buttons: [
                {
                    text: 'Camera',
                    handler: () => {
                        this.showCamera();
                    }
                }, {
                    text: 'Albums',
                    handler: () => {
                        this.showAlbums();
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }
    /**
     * 调用摄像头
     */
    showCamera() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            console.log('imageData', imageData);
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            // let base64Image = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            // Handle error
        });
    }
    showAlbums() {
        let modal = this.modalCtrl.create(public_albums_1.PublicAlbumsComponent);
        modal.present();
    }
};
__decorate([
    core_1.Output('outSendMessage'),
    __metadata("design:type", Object)
], ChatContentInputComponent.prototype, "outSendMessage", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ChatContentInputComponent.prototype, "setChannelInfo", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], ChatContentInputComponent.prototype, "setIsFriend", null);
ChatContentInputComponent = __decorate([
    core_1.Component({
        selector: 'chat-content-input',template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/chat-content/chat-content-input/chat-content-input.html"*/'<!-- Generated template for the ChatContentInputComponent component -->\n<div class="chat-content-footer" [class.show_more]="isShowMoreIcons">\n    <div class="chat-at-list" *ngIf="isShowAtList && !isFriend">\n        <ul>\n            <li *ngFor="let item of atUserList">\n                <button (click)="atClickPerson($event,item,input)">\n                    <img src="{{item?.user_profile_path? appConfig.resourceDomain+item?.user_profile_path:\'\'}}">\n                    <span class="pull-left f32-f">{{item?.work_name}}</span>\n                </button>\n            </li>\n        </ul>\n    </div>\n    <textarea placeholder="Message in here"\n              #input\n              (focus)="focusEvent($event)"\n              (paste)="pasteEvent($event,input)"\n              (keydown)="keyDownEvent($event)"\n              (keyup)="keyUpEvent($event)"\n              [(ngModel)]="messageData">\n    </textarea>\n    <span class="send-message"  (click)="sendMessage($event)">SEND</span>\n    <div class="footer-function-top">\n        <div class="footer-function-icons">\n            <span class="bi-icon-at" (click)="showAtList($event)"> </span>\n            <span class="bi-icon-pic" (click)="showPhonePic($event)"></span>\n            <span class="bi-icon-smile"></span>\n            <span class="bi-icon-more" (click)="showMoreIcons($event)"></span>\n        </div>\n        <div class="function-speak">\n            <b class="bi-icon-attention"></b>\n            <b class="function-text">SPEAK</b>\n        </div>\n    </div>\n    <div class="footer-function-bottom" *ngIf="isShowMoreIcons">\n        <span class="bi-icon-import-files"> </span>\n        <span class="bi-icon-new-post"></span>\n        <span class="bi-icon-location"></span>\n        <span></span>\n    </div>\n</div>\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/chat-content/chat-content-input/chat-content-input.html"*/,
        providers: [camera_1.Camera]
    }),
    __param(0, core_1.Inject('app.config')),
    __metadata("design:paramtypes", [Object, ionic_angular_1.NavController,
        ionic_angular_1.ModalController,
        ionic_angular_1.ActionSheetController,
        camera_1.Camera])
], ChatContentInputComponent);
exports.ChatContentInputComponent = ChatContentInputComponent;
//# sourceMappingURL=chat-content-input.js.map

/***/ }),

/***/ 357:
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
const photo_library_1 = __webpack_require__(358);
/**
 * Generated class for the PublicAlbumsComponent page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let PublicAlbumsComponent = class PublicAlbumsComponent {
    constructor(navCtrl, photoLibrary, navParams) {
        this.navCtrl = navCtrl;
        this.photoLibrary = photoLibrary;
        this.navParams = navParams;
        this.imageArray = [];
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad PublicAlbumsComponent');
        this.photoLibrary.requestAuthorization().then(() => {
            this.photoLibrary.getLibrary().subscribe({
                next: library => {
                    console.log('&&&&&&&&&&&&&', library);
                    this.imageArray = library;
                },
                error: err => {
                    console.log('could not get photos');
                },
                complete: () => {
                    console.log('done getting photos');
                }
            });
        })
            .catch(err => console.log('permissions weren\'t granted'));
    }
};
PublicAlbumsComponent = __decorate([
    core_1.Component({
        selector: 'page-public-albums',template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/public-albums/public-albums.html"*/'<!--\n  Generated template for the PublicAlbumsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>public-albums</ion-title>\n    <span class="bi-icon-arrow" navPop></span>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngFor = "let img of imageArray">\n    <img src={{img.photoURL}} alt="" style="width: 40px;height: 40px">\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/public-albums/public-albums.html"*/,
        providers: [photo_library_1.PhotoLibrary]
    }),
    __metadata("design:paramtypes", [ionic_angular_1.NavController,
        photo_library_1.PhotoLibrary,
        ionic_angular_1.NavParams])
], PublicAlbumsComponent);
exports.PublicAlbumsComponent = PublicAlbumsComponent;
//# sourceMappingURL=public-albums.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["CordovaFiniteObservable"] = CordovaFiniteObservable;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoLibrary", function() { return PhotoLibrary; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_core__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * @hidden
 *
 * Wraps method that returns an observable that can be completed. Provided opts.resultFinalPredicate dictates when the observable completes.
 */
function CordovaFiniteObservable(opts) {
    if (opts === void 0) { opts = {}; }
    opts.observable = true;
    return function (target, methodName, descriptor) {
        return {
            value: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var wrappedObservable = Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["e" /* wrap */])(this, methodName, opts).apply(this, args);
                return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
                    var wrappedSubscription = wrappedObservable.subscribe({
                        next: function (x) {
                            observer.next(opts.resultTransform ? x[opts.resultTransform] : x);
                            if (opts.resultFinalPredicate && x[opts.resultFinalPredicate]) {
                                observer.complete();
                            }
                        },
                        error: function (err) { observer.error(err); },
                        complete: function () { observer.complete(); }
                    });
                    return function () {
                        wrappedSubscription.unsubscribe();
                    };
                });
            },
            enumerable: true
        };
    };
}
/**
 * @name Photo Library
 * @description
 * The PhotoLibrary plugin allows access to photos from device by url. So you can use plain img tag to display photos and their thumbnails, and different 3rd party libraries as well.
 * Saving photos and videos to the library is also supported.
 * cdvphotolibrary urls should be trusted by Angular. See plugin homepage to learn how.
 *
 * @usage
 * ```typescript
 * import { PhotoLibrary } from '@ionic-native/photo-library';
 *
 * constructor(private photoLibrary: PhotoLibrary) { }
 *
 * this.photoLibrary.requestAuthorization().then(() => {
 *   this.photoLibrary.getLibrary().subscribe({
 *     next: library => {
 *       library.forEach(function(libraryItem) {
 *         console.log(libraryItem.id);          // ID of the photo
 *         console.log(libraryItem.photoURL);    // Cross-platform access to photo
 *         console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
 *         console.log(libraryItem.fileName);
 *         console.log(libraryItem.width);
 *         console.log(libraryItem.height);
 *         console.log(libraryItem.creationDate);
 *         console.log(libraryItem.latitude);
 *         console.log(libraryItem.longitude);
 *         console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
 *       });
 *     },
 *     error: err => { console.log('could not get photos'); },
 *     complete: () => { console.log('done getting photos'); }
 *   });
 * })
 * .catch(err => console.log('permissions weren\'t granted'));
 *
 * ```
 */
var PhotoLibrary = (function (_super) {
    __extends(PhotoLibrary, _super);
    function PhotoLibrary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves library items. Library item contains photo metadata like width and height, as well as photoURL and thumbnailURL.
     * @param options {GetLibraryOptions} Optional, like thumbnail size and chunks settings.
     * @return {Observable<LibraryItem[]>} Returns library items. If appropriate option was set, will be returned by chunks.
     */
    PhotoLibrary.prototype.getLibrary = function (options) { return; };
    /**
     * Asks user permission to access photo library.
     * @param options {RequestAuthorizationOptions} Optional, like whether only read access needed or read/write.
     * @return { Promise<void>} Returns a promise that resolves when permissions are granted, and fails when not.
     */
    PhotoLibrary.prototype.requestAuthorization = function (options) { return; };
    /**
     * Returns list of photo albums on device.
     * @return {Promise<AlbumItem[]>} Resolves to list of albums.
     */
    PhotoLibrary.prototype.getAlbums = function () { return; };
    /**
     * Provides means to request URL of thumbnail, with specified size or quality.
     * @param photo {string | LibraryItem} Id of photo, or LibraryItem.
     * @param options {GetThumbnailOptions} Options, like thumbnail size or quality.
     * @return {Promise<string>} Resolves to URL of cdvphotolibrary schema.
     */
    PhotoLibrary.prototype.getThumbnailURL = function (photo, options) { return; };
    /**
     * Provides means to request photo URL by id.
     * @param photo {string | LibraryItem} Id or LibraryItem.
     * @param options {GetPhotoOptions} Optional options.
     * @return {Promise<string>} Resolves to URL of cdvphotolibrary schema.
     */
    PhotoLibrary.prototype.getPhotoURL = function (photo, options) { return; };
    /**
     * Returns thumbnail as Blob.
     * @param photo {string | LibraryItem} Id or LibraryItem.
     * @param options {GetThumbnailOptions} Options, like thumbnail size or quality.
     * @return {Promise<Blob>} Resolves requested thumbnail as blob.
     */
    PhotoLibrary.prototype.getThumbnail = function (photo, options) { return; };
    /**
     * Returns photo as Blob.
     * @param photo {string | LibraryItem} Id or LibraryItem.
     * @param options {GetPhotoOptions} Optional options.
     * @return {Promise<Blob>} Resolves requested photo as blob.
     */
    PhotoLibrary.prototype.getPhoto = function (photo, options) { return; };
    /**
     * Saves image to specified album. Album will be created if not exists.
     * LibraryItem that represents saved image is returned.
     * @param url {string} URL of a file, or DataURL.
     * @param album {AlbumItem | string} Name of an album or AlbumItem object.
     * @param options {GetThumbnailOptions} Options, like thumbnail size for resulting LibraryItem.
     * @return {Promise<LibraryItem>} Resolves to LibraryItem that represents saved image.
     */
    PhotoLibrary.prototype.saveImage = function (url, album, options) { return; };
    /**
     * Saves video to specified album. Album will be created if not exists.
     * @param url {string} URL of a file, or DataURL.
     * @param album {AlbumItem | string} Name of an album or AlbumItem object.
     * @return {Promise<void>} Resolves when save operation completes.
     */
    PhotoLibrary.prototype.saveVideo = function (url, album) { return; };
    PhotoLibrary.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    PhotoLibrary.ctorParameters = function () { return []; };
    __decorate([
        CordovaFiniteObservable({
            callbackOrder: 'reverse',
            resultFinalPredicate: 'isLastChunk',
            resultTransform: 'library'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"])
    ], PhotoLibrary.prototype, "getLibrary", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["a" /* Cordova */])({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], PhotoLibrary.prototype, "requestAuthorization", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["a" /* Cordova */])({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], PhotoLibrary.prototype, "getAlbums", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["a" /* Cordova */])({
            successIndex: 1,
            errorIndex: 2
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], PhotoLibrary.prototype, "getThumbnailURL", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["a" /* Cordova */])({
            successIndex: 1,
            errorIndex: 2
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], PhotoLibrary.prototype, "getPhotoURL", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["a" /* Cordova */])({
            successIndex: 1,
            errorIndex: 2
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], PhotoLibrary.prototype, "getThumbnail", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["a" /* Cordova */])({
            successIndex: 1,
            errorIndex: 2
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], PhotoLibrary.prototype, "getPhoto", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["a" /* Cordova */])({
            successIndex: 2,
            errorIndex: 3
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, Object]),
        __metadata("design:returntype", Promise)
    ], PhotoLibrary.prototype, "saveImage", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["a" /* Cordova */])({
            successIndex: 2,
            errorIndex: 3
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], PhotoLibrary.prototype, "saveVideo", null);
    PhotoLibrary = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["d" /* Plugin */])({
            pluginName: 'PhotoLibrary',
            plugin: 'cordova-plugin-photo-library',
            pluginRef: 'cordova.plugins.photoLibrary',
            repo: 'https://github.com/terikon/cordova-plugin-photo-library',
            install: 'ionic cordova plugin add cordova-plugin-photo-library --variable PHOTO_LIBRARY_USAGE_DESCRIPTION="To choose photos"',
            installVariables: ['PHOTO_LIBRARY_USAGE_DESCRIPTION'],
            platforms: ['Android', 'Browser', 'iOS']
        })
    ], PhotoLibrary);
    return PhotoLibrary;
}(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["c" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 359:
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
const chat_config_1 = __webpack_require__(344);
const notification_config_1 = __webpack_require__(56);
const notification_service_1 = __webpack_require__(109);
const alarm_model_service_1 = __webpack_require__(360);
const alarmConfig = __webpack_require__(361);
const chat_model_service_1 = __webpack_require__(345);
const chat_forward_dialog_1 = __webpack_require__(353);
const chat_share_dialog_1 = __webpack_require__(355);
/**
 * Generated class for the ChatContentMessageDetailComponent page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let ChatContentMessageDetailComponent = class ChatContentMessageDetailComponent {
    constructor(navCtrl, dialogService, imService, actionSheetCtrl, modalCtrl, alarmModelService, chatModelService, userStoreService, notificationService, navParams) {
        this.navCtrl = navCtrl;
        this.dialogService = dialogService;
        this.imService = imService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.alarmModelService = alarmModelService;
        this.chatModelService = chatModelService;
        this.userStoreService = userStoreService;
        this.notificationService = notificationService;
        this.navParams = navParams;
        this.chatConfig = chat_config_1.ChatConfig;
        this.chatChannelInfo = {};
    }
    ionViewDidLoad() {
        this.messageObj = this.navParams.data.message;
        this.isFriend = this.navParams.data.isFriend;
        this.chatMenuItem = this.navParams.data.chatMenuItem;
        this.chatChannelInfo = this.navParams.data.chatChannelInfo;
        this.allMessageOwnerInfo = this.navParams.data.allMessageOwnerInfo;
        this.identity = this.navParams.data.identity;
        this.currentMessageType = this.messageObj.type;
        this.judgeCanDownLoad();
        this.judgeCanRevoke();
        this.subscription = this.notificationService.getNotification().subscribe((message) => {
            this.dealWebSocketNotification(message);
        });
    }
    /**
     * IM通知处理
     */
    dealWebSocketNotification(message) {
        switch (message.act) {
            case notification_config_1.NotificationConfig.ACT_CHAT_MESSAGE_REVOKE:
                if (message.status == 1) {
                    if (message.data && message.data.sent == 1) {
                        this.navCtrl.pop();
                    }
                    else if (message.data && message.data.owner) {
                        this.dialogService.showAlert('Warnning', 'The Message has been revoke!', () => {
                            this.navCtrl.pop();
                        });
                    }
                }
                else {
                    this.dialogService.showAlert('Revoke Failed!');
                }
                break;
        }
    }
    /**
     * 页面销毁
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * 判断是否可以下载和分享
     */
    judgeCanDownLoad() {
        if (this.currentMessageType == this.chatConfig.CHAT_MESSAGE_TYPE_IMG
            || this.currentMessageType == this.chatConfig.CHAT_MESSAGE_TYPE_POST
            || this.currentMessageType == this.chatConfig.CHAT_MESSAGE_TYPE_FILE) {
            this.isShowMoreButton = true;
        }
        else if (this.currentMessageType == this.chatConfig.CHAT_MESSAGE_TYPE_FORWARD) {
            // if(this.)
            let originalMsgType = this.messageObj.detail.original_msg.type;
            if (originalMsgType == this.chatConfig.CHAT_MESSAGE_TYPE_IMG
                || originalMsgType == this.chatConfig.CHAT_MESSAGE_TYPE_POST
                || originalMsgType == this.chatConfig.CHAT_MESSAGE_TYPE_FILE) {
                this.isShowMoreButton = true;
            }
            else {
                this.isShowMoreButton = false;
            }
        }
        else if (this.currentMessageType == this.chatConfig.CHAT_MESSAGE_TYPE_SHARE) {
            let share_file_type = this.messageObj.detail.share_file_type;
            if (share_file_type == this.chatConfig.CHAT_MESSAGE_TYPE_IMG
                || share_file_type == this.chatConfig.CHAT_MESSAGE_TYPE_POST
                || share_file_type == this.chatConfig.CHAT_MESSAGE_TYPE_FILE) {
                this.isShowMoreButton = true;
            }
            else {
                this.isShowMoreButton = false;
            }
        }
        else {
            this.isShowMoreButton = false;
        }
    }
    /**
     * 判断是否可以撤回
     */
    judgeCanRevoke() {
        let uuid;
        let psid;
        Promise.all([
            this.userStoreService.getCurrentUUID(v => uuid = v),
            this.userStoreService.getCurrentPSID(v => psid = v),
        ]).then(() => {
            if (this.chatMenuItem.is_host == 1
                || this.messageObj.owner == uuid
                || this.messageObj.owner == psid) {
                this.isCanRevoke = true;
            }
            else {
                this.isCanRevoke = false;
            }
        });
    }
    /**
     * 下载
     */
    downloadMessage(event) {
        event.stopPropagation();
        console.log('下载下载');
    }
    /**
     * 分享
     */
    shareMessage(event) {
        event.stopPropagation();
        console.log('分享分享');
        ;
        let componentData = {
            chatMenuItem: this.chatMenuItem,
            isFriend: this.isFriend,
            messageObj: this.messageObj
        };
        let modal = this.modalCtrl.create(chat_share_dialog_1.ChatShareDialogPage, componentData);
        modal.present();
    }
    /**
     * 消息提醒
     * @param event
     */
    remindMessage(event) {
        event.stopPropagation();
        let buttons;
        if (this.messageObj.has_alarm) {
            buttons = [
                {
                    text: 'Cancel Alarm',
                    handler: () => {
                        sendDeleteAlarmFunction();
                    }
                },
                {
                    text: '3 Days',
                    handler: () => {
                        sendSetAlarmFunction(6);
                    }
                }, {
                    text: '1 Days',
                    handler: () => {
                        sendSetAlarmFunction(5);
                    }
                }, {
                    text: '6 Hours',
                    handler: () => {
                        console.log('Archive clicked');
                    }
                },
                {
                    text: '1 Hours',
                    handler: () => {
                        sendSetAlarmFunction(4);
                    }
                },
                {
                    text: '30 Minutes',
                    handler: () => {
                        sendSetAlarmFunction(3);
                    }
                },
                {
                    text: '10 Minutes',
                    handler: () => {
                        sendSetAlarmFunction(2);
                    }
                },
                {
                    text: '5 Minutes',
                    handler: () => {
                        sendSetAlarmFunction(1);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ];
        }
        else {
            buttons = [
                {
                    text: '3 Days',
                    handler: () => {
                        sendSetAlarmFunction(7);
                    }
                }, {
                    text: '1 Days',
                    handler: () => {
                        sendSetAlarmFunction(6);
                    }
                }, {
                    text: '6 Hours',
                    handler: () => {
                        sendSetAlarmFunction(5);
                    }
                },
                {
                    text: '1 Hours',
                    handler: () => {
                        sendSetAlarmFunction(4);
                    }
                },
                {
                    text: '30 Minutes',
                    handler: () => {
                        sendSetAlarmFunction(3);
                    }
                },
                {
                    text: '10 Minutes',
                    handler: () => {
                        sendSetAlarmFunction(2);
                    }
                },
                {
                    text: '5 Minutes',
                    handler: () => {
                        sendSetAlarmFunction(1);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Archive clicked');
                    }
                }
            ];
        }
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Set Alarm',
            buttons: buttons
        });
        actionSheet.present();
        let sendSetAlarmFunction = (param) => {
            let now = new Date();
            now.setSeconds(0);
            let sendTime;
            switch (param) {
                // 5 Minutes
                case 1:
                    sendTime = now.getTime() + 5 * 60 * 1000;
                    break;
                // 10 Minutes
                case 2:
                    sendTime = now.getTime() + 10 * 60 * 1000;
                    break;
                // 30 Minutes
                case 3:
                    sendTime = now.getTime() + 30 * 60 * 1000;
                    break;
                // 1 Hour
                case 4:
                    sendTime = now.getTime() + 60 * 60 * 1000;
                    break;
                // 6 Hours
                case 5:
                    sendTime = now.getTime() + 6 * 60 * 60 * 1000;
                    break;
                // 1 Day
                case 6:
                    sendTime = new Date(now.setDate(now.getDate() + 1)).setHours(9, 0, 0, 0);
                    break;
                // 3 Days
                case 7:
                    sendTime = new Date(now.setDate(now.getDate() + 3)).setHours(9, 0, 0, 0);
                    break;
                // 1 Week
                case 8:
                    let day = now.getDay();
                    sendTime = new Date(now.getTime() + (8 - day) * 24 * 60 * 60 * 1000).setHours(9, 0, 0, 0);
                    break;
            }
            let sendData = {
                uid: this.messageObj.owner,
                form: alarmConfig.FORM_CHAT,
                rid: this.messageObj.msg_id,
                effective_time: Math.floor(sendTime / 1000),
                mode: alarmConfig.MODE_FIX
            };
            if (this.messageObj.has_alarm) {
                sendData.alarm_id = this.messageObj.alarm_id;
            }
            if (!this.messageObj.has_alarm) {
                //调用添加闹钟接口
                this.alarmModelService.alarmAdd({ data: sendData }, (response) => {
                    if (response.status == 1) {
                        this.messageObj.has_alarm = 1;
                        this.messageObj.alarm_id = response.data.alarm_id;
                        this.messageObj.alarm_id = response.data.id;
                        this.messageObj.effective_time = sendData.effective_time;
                    }
                });
            }
            else {
                //调用修改闹钟接口
                this.alarmModelService.alarmUpdate({ data: sendData }, (response) => {
                    if (response.status == 1) {
                        this.messageObj.has_alarm = 1;
                        this.messageObj.alarm_id = response.data.id;
                        this.messageObj.effective_time = sendData.effective_time;
                    }
                });
            }
        };
        //删除闹钟
        let sendDeleteAlarmFunction = () => {
            this.alarmModelService.alarmDelete({ data: { alarm_id: this.messageObj.alarm_id, mode: '2' } }, (response) => {
                if (response.status == 1) {
                    this.messageObj.has_alarm = 0;
                    this.messageObj.alarm_id = 0;
                }
            });
        };
    }
    /**
     * 转发消息
     * @param event
     */
    forwardMessage(event) {
        event.stopPropagation();
        let componentData = {
            chatMenuItem: this.chatMenuItem,
            isFriend: this.isFriend,
            messageObj: this.messageObj
        };
        let modal = this.modalCtrl.create(chat_forward_dialog_1.ChatForwardDialogComponent, componentData);
        modal.present();
    }
    /**
     * Pin这条消息
     * @param event
     * @constructor
     */
    pinMessage(event) {
        event.stopPropagation();
        if (this.messageObj.pinned) {
            let requestData = {
                msg_id: this.messageObj.msg_id,
                form: this.chatMenuItem.form
            };
            if (this.isFriend) {
                requestData['friend'] = this.chatMenuItem.uid;
            }
            else {
                requestData['gid'] = this.chatMenuItem.gid;
            }
            this.chatModelService.setDeleteMsgPin({ data: requestData }, (response) => {
                if (response.status === 1) {
                    this.messageObj.pinned = 0;
                }
            });
        }
        else {
            let requestData = {
                msg_id: this.messageObj.msg_id,
                form: this.chatMenuItem.form
            };
            requestData['msg_time'] = this.messageObj.time;
            if (this.isFriend) {
                requestData['friend'] = this.chatMenuItem.uid;
            }
            else {
                requestData['gid'] = this.chatMenuItem.gid;
            }
            this.chatModelService.setInsertMsgPin({ data: requestData }, (response) => {
                if (response.status === 1) {
                    this.messageObj.pinned = 1;
                }
            });
        }
    }
    /**
     * 撤回消息
     * @param event
     */
    revokeMessage(event) {
        event.stopPropagation();
        this.dialogService.showConfirm('Revoke Message', 'That is undone!', () => {
            if (this.isFriend) {
                this.imService.revokePersonalMessage({
                    form: this.chatMenuItem.form,
                    friend: this.chatMenuItem.uid,
                    msg_id: this.messageObj.msg_id,
                    identity: this.identity,
                });
            }
            else {
                this.imService.revokeGroupMessage({
                    form: this.chatMenuItem.form,
                    gid: this.chatMenuItem.gid,
                    msg_id: this.messageObj.msg_id,
                    identity: this.identity,
                });
            }
        });
    }
};
ChatContentMessageDetailComponent = __decorate([
    core_1.Component({
        selector: 'page-chat-content-message-detail',template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/chat-content-message-detail/chat-content-message-detail.html"*/'<ion-header>\n    <ion-navbar class="g-header clearfix">\n        <span class="bi-icon-down back" navPop></span>\n        <span class="g-header-title">MESSAGE</span>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding *ngIf="messageObj">\n    <chat-content-message-img\n            [setMessage]=messageObj\n            *ngIf="messageObj.type == chatConfig.CHAT_MESSAGE_TYPE_IMG">\n    </chat-content-message-img>\n\n    <chat-content-message-post\n            [setMessage]=messageObj\n            *ngIf="messageObj.type == chatConfig.CHAT_MESSAGE_TYPE_POST">\n    </chat-content-message-post>\n\n    <chat-content-message-text\n            [setMessage]=messageObj\n            [setChannelInfo] = chatChannelInfo\n            [setAllUserInfo]=allMessageOwnerInfo\n            *ngIf="messageObj.type == chatConfig.CHAT_MESSAGE_TYPE_TEXT">\n    </chat-content-message-text>\n\n    <chat-content-message-file\n            [setMessage]=messageObj\n            *ngIf="messageObj.type == chatConfig.CHAT_MESSAGE_TYPE_FILE">\n    </chat-content-message-file>\n\n    <chat-content-message-system\n            [setMessage]=messageObj\n            *ngIf="messageObj.type == chatConfig.CHAT_MESSAGE_TYPE_SYSTEM">\n    </chat-content-message-system>\n\n    <div *ngIf="messageObj.type == chatConfig.CHAT_MESSAGE_TYPE_FORWARD">\n        <chat-content-message-text\n                [setMessage]=messageObj\n                [setAllUserInfo]=allMessageOwnerInfo\n                [setChannelInfo] = chatChannelInfo\n                [setIsForward]=true\n                *ngIf="messageObj?.detail?.original_msg?.type == chatConfig.CHAT_MESSAGE_TYPE_TEXT">\n        </chat-content-message-text>\n        <chat-content-message-img\n                [setMessage]=messageObj\n                [setAllUserInfo]=allMessageOwnerInfo\n                [setIsForward]=true\n                *ngIf="messageObj?.detail?.original_msg?.type == chatConfig.CHAT_MESSAGE_TYPE_IMG">\n        </chat-content-message-img>\n        <chat-content-message-file\n                [setMessage]=messageObj\n                [setAllUserInfo]=allMessageOwnerInfo\n                [setIsForward]=true\n                *ngIf="messageObj?.detail?.original_msg?.type == chatConfig.CHAT_MESSAGE_TYPE_FILE">\n        </chat-content-message-file>\n        <chat-content-message-post\n                [setMessage]=messageObj\n                [setAllUserInfo]=allMessageOwnerInfo\n                [setIsForward]=true\n                *ngIf="messageObj?.detail?.original_msg?.type == chatConfig.CHAT_MESSAGE_TYPE_POST">\n        </chat-content-message-post>\n    </div>\n\n    <div *ngIf="messageObj.type == chatConfig.CHAT_MESSAGE_TYPE_SHARE">\n        <chat-content-message-img\n                [setMessage]=messageObj\n                [setAllUserInfo]=allMessageOwnerInfo\n                [setIsShare]=true\n                *ngIf="messageObj?.detail?.share_file_type == chatConfig.CHAT_MESSAGE_TYPE_IMG">\n        </chat-content-message-img>\n        <chat-content-message-file\n                [setMessage]=messageObj\n                [setAllUserInfo]=allMessageOwnerInfo\n                [setIsShare]=true\n                *ngIf="messageObj?.detail?.share_file_type == chatConfig.CHAT_MESSAGE_TYPE_FILE">\n        </chat-content-message-file>\n        <chat-content-message-post\n                [setMessage]=messageObj\n                [setAllUserInfo]=allMessageOwnerInfo\n                [setIsShare]=true\n                *ngIf="messageObj?.detail?.share_file_type == chatConfig.CHAT_MESSAGE_TYPE_POST">\n        </chat-content-message-post>\n    </div>\n\n</ion-content>\n\n\n<ion-footer>\n    <div class="chat-detail-function">\n        <div *ngIf="isShowMoreButton" (click)="downloadMessage($event)">\n            <b class="bi-icon-download"></b>\n            <span class="f6-f">Download</span>\n        </div>\n        <div *ngIf="isShowMoreButton" (click)="shareMessage($event)">\n            <b class="bi-icon-share"></b>\n            <span class="f6-f">Share</span>\n        </div>\n        <div>\n            <b class="bi-icon-remind" (click)="remindMessage($event)"></b>\n            <span class="f6-f">Remind</span>\n        </div>\n        <div>\n            <b class="bi-icon-forward" (click)="forwardMessage($event)"></b>\n            <span class="f6-f">Forward</span>\n        </div>\n        <div>\n            <b class=" bi-icon-pin" (click)="pinMessage($event)"></b>\n            <span class="f6-f">{{messageObj?.pinned?\'UNPIN\':\'PIN\'}}</span>\n        </div>\n        <div *ngIf="isCanRevoke">\n            <b class=" bi-icon-remove" (click)="revokeMessage($event)"></b>\n            <span class="f6-f">Delete</span>\n        </div>\n    </div>\n</ion-footer>\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/chat-content-message-detail/chat-content-message-detail.html"*/,
        providers: [alarm_model_service_1.AlarmModelService, chat_model_service_1.ChatModelService]
    }),
    __param(1, core_1.Inject('dialog.service')),
    __param(2, core_1.Inject('im.service')),
    __param(7, core_1.Inject('user-store.service')),
    __param(8, core_1.Inject(notification_service_1.NotificationService)),
    __metadata("design:paramtypes", [ionic_angular_1.NavController, Object, Object, ionic_angular_1.ActionSheetController,
        ionic_angular_1.ModalController,
        alarm_model_service_1.AlarmModelService,
        chat_model_service_1.ChatModelService, Object, notification_service_1.NotificationService,
        ionic_angular_1.NavParams])
], ChatContentMessageDetailComponent);
exports.ChatContentMessageDetailComponent = ChatContentMessageDetailComponent;
//# sourceMappingURL=chat-content-message-detail.js.map

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

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MODE_FIX = 2;
exports.MODE_REPEAT = 1;
exports.FORM_TIPS = '3';
exports.FORM_MISSION = '1';
exports.FORM_CHAT = '2';
//# sourceMappingURL=alarm.config.js.map

/***/ }),

/***/ 362:
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
const chat_model_service_1 = __webpack_require__(345);
const chat_channel_more_1 = __webpack_require__(352);
const event_name_config_1 = __webpack_require__(15);
const notification_config_1 = __webpack_require__(56);
const user_model_service_1 = __webpack_require__(57);
const notification_service_1 = __webpack_require__(109);
const chat_config_1 = __webpack_require__(344);
const chat_content_input_1 = __webpack_require__(356);
const chat_content_message_detail_1 = __webpack_require__(359);
/**
 * Generated class for the ChatContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let ChatContentComponent = class ChatContentComponent {
    constructor(navCtrl, chatModelService, userModelService, modalCtrl, notificationService, userStoreService, dateService, imService, events, dialogService, appConfig, navParams) {
        this.navCtrl = navCtrl;
        this.chatModelService = chatModelService;
        this.userModelService = userModelService;
        this.modalCtrl = modalCtrl;
        this.notificationService = notificationService;
        this.userStoreService = userStoreService;
        this.dateService = dateService;
        this.imService = imService;
        this.events = events;
        this.dialogService = dialogService;
        this.appConfig = appConfig;
        this.navParams = navParams;
        this.chatChannelInfo = {};
        this.currentMessageArray = [];
        this.chatConfig = chat_config_1.ChatConfig;
        this.hasMoreHistoryMessage = true;
        this.hasMoreNewMessage = true;
        this.sendMessageList = [];
    }
    ionViewDidLoad() {
        this.getCurrentUserInfo();
        this.chatMenuItem = this.navParams.data.data;
        this.isFriend = this.chatMenuItem.is_Friend ? true : false;
        if (!this.isFriend) {
            this.isMission = (this.chatMenuItem.is_mission == 1);
        }
        this.fetchChannelInfo();
        this.loadChatMessageByMenuItem();
        this.initMessageObj();
        this.subscription = this.notificationService.getNotification().subscribe((message) => {
            this.dealWebSocketNotification(message);
        });
        this.dealEvent();
    }
    /**
     * 页面销毁
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.events.unsubscribe(event_name_config_1.EventNameConfig.FORWARD_MESSAGE);
        this.events.unsubscribe(event_name_config_1.EventNameConfig.SHARE_MESSAGE);
    }
    /**
     * 时间处理
     */
    dealEvent() {
        this.events.subscribe(event_name_config_1.EventNameConfig.FORWARD_MESSAGE, (param) => {
            this.sendForwardMessage(param.data.originalMsg, param.data.forwardItem);
        });
        this.events.subscribe(event_name_config_1.EventNameConfig.SHARE_MESSAGE, (param) => {
            this.sendShareMessage(param.data.shareMessage, param.data.shareItem);
        });
    }
    /**
     * IM通知处理
     */
    dealWebSocketNotification(message) {
        switch (message.act) {
            case notification_config_1.NotificationConfig.ACT_NOTICE_MASTER_DELETE_GROUP_USER:
                if (message.status == 1 && message.data
                    && message.data.owner && message.data.gid == this.chatMenuItem.gid
                    && message.data.frd_type == 3) {
                    this.dialogService.showAlert('Delete Member!', 'You are be deleted from current channel!', () => {
                        this.navCtrl.popAll();
                    });
                }
                break;
            case notification_config_1.NotificationConfig.ACT_NOTICE_MASTER_GROUP_INVITE:
                if (message.status == 1 && message.data && message.data.sent && this.chatChannelInfo.gid == message.data.gid) {
                    this.fetchChannelInfo(true);
                }
                break;
            case notification_config_1.NotificationConfig.ACT_NOTICE_GROUP_DELETE:
                if (message.status == 1) {
                    if (message.data && message.data.sent == 1 && message.data.gid == this.chatChannelInfo.gid) {
                        this.navCtrl.popAll();
                    }
                    else if (message.data && message.data.owner && message.data.gid == this.chatChannelInfo.gid) {
                        this.dialogService.showAlert('Warning', 'The channel has been deleted!', () => {
                            this.navCtrl.popAll();
                        });
                    }
                }
                else {
                    this.dialogService.showAlert('Delete Failed!');
                }
                break;
            case notification_config_1.NotificationConfig.ACT_NOTICE_USER_EXIT_GROUP:
                if (message.status == 1) {
                    if (message.data && message.data.sent == 1 && message.data.gid == this.chatChannelInfo.gid) {
                        this.navCtrl.popAll();
                    }
                    else if (message.data && message.data.owner && message.data.gid == this.chatChannelInfo.gid) {
                        this.fetchChannelInfo(true);
                    }
                }
                else {
                    this.dialogService.showAlert('Quit Failed!');
                }
                break;
            case notification_config_1.NotificationConfig.ACT_CHAT_SEND_MESSAGE:
                if (message.hasOwnProperty('status') && message.status == 1) {
                    this.pendingNewMessage(message.data);
                }
                else {
                    console.log('消息发送失败');
                }
                break;
        }
    }
    /**
     * 获取当前用户信息
     */
    getCurrentUserInfo() {
        let uuid;
        let psid;
        let userInfo;
        Promise.all([
            this.userStoreService.getCurrentUUID(v => uuid = v),
            this.userStoreService.getCurrentPSID(v => psid = v),
            this.userStoreService.getUserInfo(v => userInfo = v)
        ]).then(() => {
            this.currentUUID = uuid;
            this.currentPSID = psid;
            this.currentUserInfo = userInfo;
            let owner = (this.chatMenuItem.form == 1) ? this.currentUUID : this.currentPSID;
            if (this.isFriend) {
                this.friendIdentity = this.initPersonalIdentity(this.chatMenuItem.form, this.chatMenuItem.uid, owner);
            }
        });
    }
    /**
     *  从api接口 获取 聊天信息 和 channel info
     */
    fetchChannelInfo(bool) {
        if (this.isFriend) {
            this.userModelService.getUserInfo({ uid: this.chatMenuItem.uid }, (response) => {
                if (response.status == 1 && response.hasOwnProperty('data')) {
                    this.chatChannelInfo = response.data;
                }
            });
        }
        else {
            this.chatModelService.fetchGroupInfo({ im_data: { gid: this.chatMenuItem.gid } }, (res) => {
                if (res.status == 1) {
                    this.chatChannelInfo = res.data;
                    if (bool) {
                        this.events.publish(event_name_config_1.EventNameConfig.REFRESH_CHAT_CHANNEL_INFO, { data: this.chatChannelInfo });
                    }
                }
                else {
                    alert('获取失败');
                }
            });
        }
    }
    /**
     * 进去channel读取消息
     */
    loadChatMessageByMenuItem() {
        if (this.isFriend) {
            this.getPersonalMessageFromApi(chat_config_1.ChatConfig.CHAT_SORT_UP, '', '');
        }
        else {
            this.getGroupMessageFromApi(chat_config_1.ChatConfig.CHAT_SORT_UP, '', '');
        }
    }
    /**
     * 从api获取群组的聊天记录
     */
    getGroupMessageFromApi(sort, max_time, min_time, isLoadingMore) {
        let requestData = {
            is_mission: this.chatMenuItem.is_mission,
            gid: parseInt(this.chatMenuItem.gid),
            form: this.chatMenuItem.form,
            sort: sort,
            min_time: max_time,
            max_time: min_time,
        };
        this.chatModelService.getUserGroupMessage({ data: requestData }, (res) => {
            if (res.status == 1) {
                this.allMessageOwnerInfo = res.data.users_info;
                if (sort == 1 && res.data.msg) {
                    this.currentMessageArray = res.data.msg.concat(this.currentMessageArray);
                }
                else if (sort == -1 && res.data.msg) {
                }
                this.buildMessageArrForDisplay(isLoadingMore);
                this.refreshTime(res.data);
                this.judgeCanLoadMore(sort, res.data);
                if (isLoadingMore) {
                    this.refreshObj.complete();
                }
            }
            else {
                this.dialogService.showAlert('Loading failed!');
            }
        });
    }
    /**
     * 从Api获取个人聊天消息
     */
    getPersonalMessageFromApi(sort, max_time, min_time, isLoadingMore) {
        let requestData = {
            friend: this.chatMenuItem.uid,
            form: this.chatMenuItem.form,
            sort: sort,
            min_time: max_time,
            max_time: min_time
        };
        this.chatModelService.getUserMessage({ data: requestData }, (res) => {
            if (res.status == 1) {
                this.allMessageOwnerInfo = res.data.users_info;
                if (sort == 1 && res.data.msg) {
                    this.currentMessageArray = res.data.msg.concat(this.currentMessageArray);
                }
                else if (sort == -1 && res.data.msg) {
                }
                this.buildMessageArrForDisplay(isLoadingMore);
                this.refreshTime(res.data);
                this.judgeCanLoadMore(sort, res.data);
                if (isLoadingMore) {
                    this.refreshObj.complete();
                }
            }
            else {
                this.dialogService.showAlert('Loading failed!');
            }
        });
    }
    /**
     * 将数据做成模板显示的格式
     */
    buildMessageArrForDisplay(bool) {
        for (let i in this.currentMessageArray) {
            this.currentMessageArray[i]['date_time'] = this.dateService.formatLocal(this.currentMessageArray[i]['time'], 'HH:MM dd/mm/yyyy');
            this.getMessageOwnerInfo(this.currentMessageArray[i]);
            if (this.currentMessageArray[i].owner == this.currentUUID
                || this.currentMessageArray[i].owner == this.currentPSID) {
                this.currentMessageArray[i].isSelf = true;
            }
            else {
                this.currentMessageArray[i].isSelf = false;
            }
        }
        if (!bool) {
            setTimeout(() => {
                this.content.scrollToBottom();
            }, 100);
        }
    }
    /**
     * 获取消息owner的详细信息
     */
    getMessageOwnerInfo(message) {
        for (let key in this.allMessageOwnerInfo) {
            if (key == message.owner) {
                message.user_info = this.allMessageOwnerInfo[key];
                break;
            }
        }
    }
    /**
     * 点击more 查看群组更多信息
     */
    showMoreChannelInfo() {
        let componentData = {
            chatChannelInfo: this.chatChannelInfo,
            menu: this.chatMenuItem
        };
        let modal = this.modalCtrl.create(chat_channel_more_1.ChatChannelMoreComponent, componentData);
        modal.present();
    }
    /**
     * 向下滚动加载
     * @param infiniteScroll
     * @returns {Promise<T>}
     */
    doInfinite(infiniteScroll) {
    }
    /**
     * 上拉加载更多消息
     */
    doRefresh(event) {
        this.refreshObj = event;
        if (this.isFriend) {
            this.getPersonalMessageFromApi(chat_config_1.ChatConfig.CHAT_SORT_UP, '', this.minTime, true);
        }
        else {
            this.getGroupMessageFromApi(chat_config_1.ChatConfig.CHAT_SORT_UP, '', this.minTime, true);
        }
    }
    /**
     * 刷新时间
     */
    refreshTime(data) {
        this.maxTime = data.max_time;
        this.minTime = data.min_time;
    }
    /**
     * 判断是否还有消息可以拉取
     */
    judgeCanLoadMore(sort, data) {
        if (sort === chat_config_1.ChatConfig.CHAT_SORT_UP) {
            this.hasMoreHistoryMessage = data.msg.length ? true : false;
        }
        else if (sort === chat_config_1.ChatConfig.CHAT_SORT_DOWN) {
            this.hasMoreNewMessage = data.msg.length ? true : false;
        }
    }
    /**
     * 发送消息
     */
    sendMessage(data) {
        let token = 'tmsg_' + this.makeToken(); //生成token
        let owner = (this.chatMenuItem.form == 1) ? this.currentUUID : this.currentPSID;
        if (this.isFriend) {
            let newMessageObj = {
                form: this.chatMenuItem.form,
                detail: {},
                msg: data.msg,
                token: token,
                type: data.type,
                identity: this.friendIdentity.identity,
                owner: owner,
                friend: this.chatMenuItem.uid
            };
            this.sendMessageList.push(newMessageObj);
            this.imService.sendPersonalMessage(newMessageObj);
        }
        else {
            let newMessageObj = {
                form: this.chatMenuItem.form,
                detail: {},
                msg: data.msg,
                token: token,
                type: data.type,
                identity: this.initGroupIdentity(this.chatMenuItem.form, this.chatMenuItem.gid),
                owner: owner,
                gid: this.chatMenuItem.gid
            };
            this.sendMessageList.push(newMessageObj);
            this.imService.sendGroupMessage(newMessageObj);
        }
        this.chatMessageInput.messageData = '';
    }
    /**
     * 发送转发消息
     */
    sendForwardMessage(originalMsg, item) {
        let token = 'tmsg_' + this.makeToken(); //生成token
        let owner = (this.chatMenuItem.form == 1) ? this.currentUUID : this.currentPSID;
        if (item.gid) {
            let newMessageObj = {
                form: this.chatMenuItem.form,
                detail: originalMsg,
                msg: originalMsg.original_msg.msg,
                token: token,
                type: chat_config_1.ChatConfig.CHAT_MESSAGE_TYPE_FORWARD,
                identity: this.initGroupIdentity(this.chatMenuItem.form, item.gid),
                owner: owner,
                gid: item.gid
            };
            this.sendMessageList.push(newMessageObj);
            this.imService.sendGroupMessage(newMessageObj);
        }
        else {
            let uid = item.uuid || item.psid;
            let newMessageObj = {
                form: this.chatMenuItem.form,
                detail: originalMsg,
                msg: originalMsg.original_msg.msg,
                token: token,
                type: chat_config_1.ChatConfig.CHAT_MESSAGE_TYPE_FORWARD,
                identity: this.initPersonalIdentity(this.chatMenuItem.form, uid, owner).identity,
                owner: owner,
                friend: uid
            };
            this.sendMessageList.push(newMessageObj);
            this.imService.sendPersonalMessage(newMessageObj);
        }
    }
    /**
     * 发送分享消息
     */
    sendShareMessage(shareMessage, item) {
        let token = 'tmsg_' + this.makeToken(); //生成token
        let owner = (this.chatMenuItem.form == 1) ? this.currentUUID : this.currentPSID;
        if (item.gid) {
            let newMessageObj = {
                form: this.chatMenuItem.form,
                detail: shareMessage,
                msg: shareMessage.file_name || shareMessage.post_name,
                token: token,
                type: chat_config_1.ChatConfig.CHAT_MESSAGE_TYPE_SHARE,
                identity: this.initGroupIdentity(this.chatMenuItem.form, item.gid),
                owner: owner,
                gid: item.gid
            };
            this.sendMessageList.push(newMessageObj);
            this.imService.sendGroupMessage(newMessageObj);
        }
        else {
            let uid = item.uuid || item.psid;
            let newMessageObj = {
                form: this.chatMenuItem.form,
                detail: shareMessage,
                msg: shareMessage.file_name || shareMessage.post_name,
                token: token,
                type: chat_config_1.ChatConfig.CHAT_MESSAGE_TYPE_SHARE,
                identity: this.initPersonalIdentity(this.chatMenuItem.form, uid, owner).identity,
                owner: owner,
                friend: uid
            };
            this.sendMessageList.push(newMessageObj);
            this.imService.sendPersonalMessage(newMessageObj);
        }
    }
    /**
     * 收到新消息
     */
    pendingNewMessage(message) {
        if (this.isFriend) {
            if (message.hasOwnProperty('sent') && message.sent == 1 && message.identity == this.friendIdentity.identity) {
                this.sendMessageList.forEach((item, index) => {
                    if (item.token === message.token) {
                        let messageData = {
                            time: message.time,
                            type: message.type,
                            msg_id: message.msg_id,
                            status: 1,
                            msg: item.msg,
                            owner: item.owner,
                            detail: item.detail,
                            isSelf: true,
                            user_info: this.currentUserInfo,
                            date_time: this.dateService.formatLocal(message.time, 'HH:MM dd/mm/yyyy')
                        };
                        this.sendMessageList.splice(index, 1);
                        let newMessageObj = this.initMessageObj();
                        Object.assign(newMessageObj, messageData);
                        this.currentMessageArray.push(newMessageObj);
                        setTimeout(() => {
                            this.content.scrollToBottom();
                        });
                    }
                });
            }
            else if (message.hasOwnProperty('owner')) {
                // 字段中有owner 有两种情况 1收到本人在其他tab的消息 2.好友发的消息
                let isSelf = (message.owner == this.currentUUID || message.owner == this.currentPSID);
                if ((isSelf && message.identity == this.friendIdentity.identity) ||
                    (!isSelf && message.identity == this.friendIdentity.friend_identity)) {
                    //获取该消息ownerInfo
                    let ownerInfo = isSelf ? this.currentUserInfo : this.chatChannelInfo;
                    let messageData = {
                        time: message.time,
                        type: message.type,
                        msg_id: message.msg_id,
                        status: 1,
                        msg: message.msg,
                        owner: message.owner,
                        detail: message.detail,
                        user_info: ownerInfo,
                        isSelf: (message.owner == this.currentUUID || message.owner == this.currentPSID),
                        date_time: this.dateService.formatLocal(message.time, 'HH:MM dd/mm/yyyy')
                    };
                    let newMessageObj = this.initMessageObj();
                    Object.assign(newMessageObj, messageData);
                    this.currentMessageArray.push(newMessageObj);
                    let scrollHeight = this.content.getContentDimensions().scrollHeight;
                    let contentHeight = this.content.getContentDimensions().contentHeight;
                    let scrollTop = this.content.getContentDimensions().scrollTop;
                    //如果接收者的消息停留在底部 就向下滚动 否则不滚动
                    if (contentHeight + scrollTop >= scrollHeight) {
                        setTimeout(() => {
                            this.content.scrollToBottom();
                        });
                    }
                }
            }
        }
        else {
            if (message.hasOwnProperty('sent') && message.sent == 1 && message.gid == this.chatMenuItem.gid) {
                if (message.hasOwnProperty('token') && this.sendMessageList.length) {
                    this.sendMessageList.forEach((item, index) => {
                        if (item.token === message.token) {
                            let messageData = {
                                time: message.time,
                                type: message.type,
                                msg_id: message.msg_id,
                                status: 1,
                                msg: item.msg,
                                owner: item.owner,
                                detail: item.detail,
                                isSelf: true,
                                user_info: this.currentUserInfo,
                                date_time: this.dateService.formatLocal(message.time, 'HH:MM dd/mm/yyyy')
                            };
                            this.sendMessageList.splice(index, 1);
                            let newMessageObj = this.initMessageObj();
                            Object.assign(newMessageObj, messageData);
                            this.currentMessageArray.push(newMessageObj);
                            setTimeout(() => {
                                this.content.scrollToBottom();
                            });
                        }
                    });
                }
            }
            else if (message.hasOwnProperty('owner') && message.gid == this.chatMenuItem.gid) {
                //获取该消息ownerInfo
                let ownerInfo = this.getNewMessageOwnerInfo(message);
                let messageData = {
                    time: message.time,
                    type: message.type,
                    msg_id: message.msg_id,
                    status: 1,
                    msg: message.msg,
                    owner: message.owner,
                    detail: message.detail,
                    user_info: ownerInfo,
                    isSelf: (message.owner == this.currentUUID || message.owner == this.currentPSID),
                    date_time: this.dateService.formatLocal(message.time, 'HH:MM dd/mm/yyyy')
                };
                let newMessageObj = this.initMessageObj();
                Object.assign(newMessageObj, messageData);
                this.currentMessageArray.push(newMessageObj);
                let scrollHeight = this.content.getContentDimensions().scrollHeight;
                let contentHeight = this.content.getContentDimensions().contentHeight;
                let scrollTop = this.content.getContentDimensions().scrollTop;
                //如果接收者的消息停留在底部 就向下滚动 否则不滚动
                if (contentHeight + scrollTop >= scrollHeight) {
                    setTimeout(() => {
                        this.content.scrollToBottom();
                    });
                }
            }
        }
    }
    /**
     * 获取新消息的ownerInfo
     */
    getNewMessageOwnerInfo(message) {
        let ownerInfo;
        for (let i in this.chatChannelInfo.info) {
            if (this.chatChannelInfo.info[i].uid == message.owner) {
                ownerInfo = this.chatChannelInfo.info[i];
                break;
            }
        }
        return ownerInfo;
    }
    /**
     * 初始化消息对象
     */
    initMessageObj() {
        let messageObj = {
            alarm_id: 0,
            detail: {},
            effective_time: 0,
            has_alarm: 0,
            msg: '',
            msg_id: '',
            owner: '',
            pin_id: '',
            pinned: 0,
            revoke_by: '',
            status: 0,
            time: 0,
            type: 0,
            dayInfo: '',
            minuteInfo: '',
            isMerge: false,
            isSelf: false,
            user_info: {},
            date_time: '',
            safeMsg: ''
        };
        return messageObj;
    }
    /**
     * 生成message Token
     */
    makeToken() {
        let text = "";
        const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 7; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
    /**
     * 生成群组聊天的identity
     */
    initGroupIdentity(form, id) {
        return 'group_' + 'form:' + form.toString() + 'id:' + id.toString();
    }
    /**
     * 生成个人聊天的identity
     */
    initPersonalIdentity(form, uid, selfID) {
        return {
            identity: 'friend_' + 'form:' + form.toString() + 'id:' + uid.toString(),
            friend_identity: 'friend_' + 'form:' + form.toString() + 'id:' + selfID.toString()
        };
    }
    /**
     * 点击消息
     */
    clickOnMessage(event, message) {
        event.stopPropagation();
        let componentData = {
            message: message,
            isFriend: this.isFriend,
            chatMenuItem: this.chatMenuItem,
            identity: this.isFriend ? this.friendIdentity.identity : this.initGroupIdentity(this.chatMenuItem.form, this.chatMenuItem.gid),
            chatChannelInfo: this.chatChannelInfo,
            allMessageOwnerInfo: this.allMessageOwnerInfo
        };
        let modal = this.modalCtrl.create(chat_content_message_detail_1.ChatContentMessageDetailComponent, componentData);
        modal.present();
    }
};
__decorate([
    core_1.ViewChild('chatMessageInput'),
    __metadata("design:type", chat_content_input_1.ChatContentInputComponent)
], ChatContentComponent.prototype, "chatMessageInput", void 0);
__decorate([
    core_1.ViewChild('chatMessageContent'),
    __metadata("design:type", core_1.ElementRef)
], ChatContentComponent.prototype, "chatMessageContent", void 0);
__decorate([
    core_1.ViewChild(ionic_angular_1.Content),
    __metadata("design:type", ionic_angular_1.Content)
], ChatContentComponent.prototype, "content", void 0);
ChatContentComponent = __decorate([
    core_1.Component({
        selector: 'page-chat-content',template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/chat-content/chat-content.html"*/'<ion-header>\n    <ion-navbar class="chat-content-header">\n        <span class="bi-icon-arrow" navPop></span>\n        <span *ngIf="!isFriend">\n          <span *ngIf="isMission" class="channel-icon icon-mission">M</span>\n          <span *ngIf="chatMenuItem?.form == 1" class="channel-icon icon-private">P</span>\n          <span *ngIf="chatMenuItem?.form == 2 && !isMission" class="channel-icon icon-business">B</span>\n        </span>\n        <div class="channel-text" *ngIf="!isFriend">\n            <span class="channel-name">{{chatChannelInfo?.name}}</span>\n            <p class="channel-topic">{{chatChannelInfo?.topic}}</p>\n        </div>\n        <img src="{{chatMenuItem?.user_profile_path? appConfig?.resourceDomain + chatMenuItem?.user_profile_path : \'\'}}"\n             *ngIf="isFriend">\n        <div class="channel-text" *ngIf="isFriend">\n            <span class="channel-name">{{chatChannelInfo?.work_name?chatChannelInfo?.work_name:\'\'}}</span>\n            <p class="channel-topic">{{chatChannelInfo?.p_name?chatChannelInfo?.p_name:\'\'}}</p>\n        </div>\n        <span class="bi-icon-combined-shape2"></span>\n        <span class="bi-icon-more" (click)="showMoreChannelInfo($event)"></span>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding #chatMessageContent>\n    <ion-refresher (ionRefresh)="doRefresh($event)" *ngIf="hasMoreHistoryMessage">\n        <ion-refresher-content\n                pullingIcon="arrow-dropdown"\n                pullingText="Pull to refresh"\n                refreshingSpinner="circles"\n                refreshingText="Loading more...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <div no-lines *ngFor="let message of currentMessageArray"\n         (click)="clickOnMessage($event,message)">\n        <chat-content-message-img\n                [setMessage]=message\n                *ngIf="message.type == chatConfig.CHAT_MESSAGE_TYPE_IMG">\n        </chat-content-message-img>\n\n        <chat-content-message-post\n                [setMessage]=message\n                *ngIf="message.type == chatConfig.CHAT_MESSAGE_TYPE_POST">\n        </chat-content-message-post>\n\n        <chat-content-message-text\n                [setMessage]=message\n                [setChannelInfo]=chatChannelInfo\n                [setAllUserInfo]=allMessageOwnerInfo\n                *ngIf="message.type == chatConfig.CHAT_MESSAGE_TYPE_TEXT">\n        </chat-content-message-text>\n\n        <chat-content-message-file\n                [setMessage]=message\n                *ngIf="message.type == chatConfig.CHAT_MESSAGE_TYPE_FILE">\n        </chat-content-message-file>\n\n        <chat-content-message-system\n                [setMessage]=message\n                *ngIf="message.type == chatConfig.CHAT_MESSAGE_TYPE_SYSTEM">\n        </chat-content-message-system>\n\n        <div *ngIf="message.type == chatConfig.CHAT_MESSAGE_TYPE_FORWARD">\n            <chat-content-message-text\n                    [setMessage]=message\n                    [setAllUserInfo]=allMessageOwnerInfo\n                    [setChannelInfo]=chatChannelInfo\n                    [setIsForward]=true\n                    *ngIf="message?.detail?.original_msg?.type == chatConfig.CHAT_MESSAGE_TYPE_TEXT">\n            </chat-content-message-text>\n            <chat-content-message-img\n                    [setMessage]=message\n                    [setAllUserInfo]=allMessageOwnerInfo\n                    [setIsForward]=true\n                    *ngIf="message?.detail?.original_msg?.type == chatConfig.CHAT_MESSAGE_TYPE_IMG">\n            </chat-content-message-img>\n            <chat-content-message-file\n                    [setMessage]=message\n                    [setAllUserInfo]=allMessageOwnerInfo\n                    [setIsForward]=true\n                    *ngIf="message?.detail?.original_msg?.type == chatConfig.CHAT_MESSAGE_TYPE_FILE">\n            </chat-content-message-file>\n            <chat-content-message-post\n                    [setMessage]=message\n                    [setAllUserInfo]=allMessageOwnerInfo\n                    [setIsForward]=true\n                    *ngIf="message?.detail?.original_msg?.type == chatConfig.CHAT_MESSAGE_TYPE_POST">\n            </chat-content-message-post>\n        </div>\n\n        <div *ngIf="message.type == chatConfig.CHAT_MESSAGE_TYPE_SHARE">\n            <chat-content-message-img\n                    [setMessage]=message\n                    [setAllUserInfo]=allMessageOwnerInfo\n                    [setIsShare]=true\n                    *ngIf="message?.detail?.share_file_type == chatConfig.CHAT_MESSAGE_TYPE_IMG">\n            </chat-content-message-img>\n            <chat-content-message-file\n                    [setMessage]=message\n                    [setAllUserInfo]=allMessageOwnerInfo\n                    [setIsShare]=true\n                    *ngIf="message?.detail?.share_file_type == chatConfig.CHAT_MESSAGE_TYPE_FILE">\n            </chat-content-message-file>\n            <chat-content-message-post\n                    [setMessage]=message\n                    [setAllUserInfo]=allMessageOwnerInfo\n                    [setIsShare]=true\n                    *ngIf="message?.detail?.share_file_type == chatConfig.CHAT_MESSAGE_TYPE_POST">\n            </chat-content-message-post>\n        </div>\n    </div>\n</ion-content>\n\n<ion-footer>\n    <chat-content-input\n            #chatMessageInput\n            [setIsFriend]=isFriend\n            [setChannelInfo]=chatChannelInfo\n            (outSendMessage)="sendMessage($event)">\n    </chat-content-input>\n</ion-footer>\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/chat-content/chat-content.html"*/,
        providers: [chat_model_service_1.ChatModelService, user_model_service_1.UserModelService]
    }),
    __param(4, core_1.Inject(notification_service_1.NotificationService)),
    __param(5, core_1.Inject('user-store.service')),
    __param(6, core_1.Inject('date.service')),
    __param(7, core_1.Inject('im.service')),
    __param(9, core_1.Inject('dialog.service')),
    __param(10, core_1.Inject('app.config')),
    __metadata("design:paramtypes", [ionic_angular_1.NavController,
        chat_model_service_1.ChatModelService,
        user_model_service_1.UserModelService,
        ionic_angular_1.ModalController,
        notification_service_1.NotificationService, Object, Object, Object, ionic_angular_1.Events, Object, Object, ionic_angular_1.NavParams])
], ChatContentComponent);
exports.ChatContentComponent = ChatContentComponent;
//# sourceMappingURL=chat-content.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationType", function() { return DestinationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncodingType", function() { return EncodingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaType", function() { return MediaType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureSourceType", function() { return PictureSourceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverArrowDirection", function() { return PopoverArrowDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return Direction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(44);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DestinationType;
(function (DestinationType) {
    DestinationType[DestinationType["DATA_URL"] = 0] = "DATA_URL";
    DestinationType[DestinationType["FILE_URL"] = 1] = "FILE_URL";
    DestinationType[DestinationType["NATIVE_URI"] = 2] = "NATIVE_URI";
})(DestinationType || (DestinationType = {}));
var EncodingType;
(function (EncodingType) {
    EncodingType[EncodingType["JPEG"] = 0] = "JPEG";
    EncodingType[EncodingType["PNG"] = 1] = "PNG";
})(EncodingType || (EncodingType = {}));
var MediaType;
(function (MediaType) {
    MediaType[MediaType["PICTURE"] = 0] = "PICTURE";
    MediaType[MediaType["VIDEO"] = 1] = "VIDEO";
    MediaType[MediaType["ALLMEDIA"] = 2] = "ALLMEDIA";
})(MediaType || (MediaType = {}));
var PictureSourceType;
(function (PictureSourceType) {
    PictureSourceType[PictureSourceType["PHOTOLIBRARY"] = 0] = "PHOTOLIBRARY";
    PictureSourceType[PictureSourceType["CAMERA"] = 1] = "CAMERA";
    PictureSourceType[PictureSourceType["SAVEDPHOTOALBUM"] = 2] = "SAVEDPHOTOALBUM";
})(PictureSourceType || (PictureSourceType = {}));
var PopoverArrowDirection;
(function (PopoverArrowDirection) {
    PopoverArrowDirection[PopoverArrowDirection["ARROW_UP"] = 1] = "ARROW_UP";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_DOWN"] = 2] = "ARROW_DOWN";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_LEFT"] = 3] = "ARROW_LEFT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_RIGHT"] = 4] = "ARROW_RIGHT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_ANY"] = 5] = "ARROW_ANY";
})(PopoverArrowDirection || (PopoverArrowDirection = {}));
var Direction;
(function (Direction) {
    Direction[Direction["BACK"] = 0] = "BACK";
    Direction[Direction["FRONT"] = 1] = "FRONT";
})(Direction || (Direction = {}));
/**
 * @name Camera
 * @description
 * Take a photo or capture video.
 *
 * Requires and the Cordova plugin: `cordova-plugin-camera`. For more info, please see the [Cordova Camera Plugin Docs](https://github.com/apache/cordova-plugin-camera).
 *
 * @usage
 * ```typescript
 * import { Camera, CameraOptions } from '@ionic-native/camera';
 *
 * constructor(private camera: Camera) { }
 *
 * ...
 *
 *
 * const options: CameraOptions = {
 *   quality: 100,
 *   destinationType: this.camera.DestinationType.DATA_URL,
 *   encodingType: this.camera.EncodingType.JPEG,
 *   mediaType: this.camera.MediaType.PICTURE
 * }
 *
 * this.camera.getPicture(options).then((imageData) => {
 *  // imageData is either a base64 encoded string or a file URI
 *  // If it's base64:
 *  let base64Image = 'data:image/jpeg;base64,' + imageData;
 * }, (err) => {
 *  // Handle error
 * });
 * ```
 * @interfaces
 * CameraOptions
 * CameraPopoverOptions
 */
var Camera = (function (_super) {
    __extends(Camera, _super);
    function Camera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constant for possible destination types
         */
        _this.DestinationType = {
            /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
            DATA_URL: 0,
            /** Return file uri (content://media/external/images/media/2 for Android) */
            FILE_URI: 1,
            /** Return native uri (eg. asset-library://... for iOS) */
            NATIVE_URI: 2
        };
        /**
         * Convenience constant
         */
        _this.EncodingType = {
            /** Return JPEG encoded image */
            JPEG: 0,
            /** Return PNG encoded image */
            PNG: 1
        };
        /**
         * Convenience constant
         */
        _this.MediaType = {
            /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
            PICTURE: 0,
            /** Allow selection of video only, ONLY RETURNS URL */
            VIDEO: 1,
            /** Allow selection from all media types */
            ALLMEDIA: 2
        };
        /**
         * Convenience constant
         */
        _this.PictureSourceType = {
            /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
            PHOTOLIBRARY: 0,
            /** Take picture from camera */
            CAMERA: 1,
            /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
            SAVEDPHOTOALBUM: 2
        };
        /**
         * Convenience constant
         */
        _this.PopoverArrowDirection = {
            ARROW_UP: 1,
            ARROW_DOWN: 2,
            ARROW_LEFT: 4,
            ARROW_RIGHT: 8,
            ARROW_ANY: 15
        };
        /**
         * Convenience constant
         */
        _this.Direction = {
            /** Use the back-facing camera */
            BACK: 0,
            /** Use the front-facing camera */
            FRONT: 1
        };
        return _this;
    }
    /**
     * Take a picture or video, or load one from the library.
     * @param {CameraOptions} [options] Options that you want to pass to the camera. Encoding type, quality, etc. Platform-specific quirks are described in the [Cordova plugin docs](https://github.com/apache/cordova-plugin-camera#cameraoptions-errata-).
     * @returns {Promise<any>} Returns a Promise that resolves with Base64 encoding of the image data, or the image file URI, depending on cameraOptions, otherwise rejects with an error.
     */
    Camera.prototype.getPicture = function (options) { return; };
    /**
     * Remove intermediate image files that are kept in temporary storage after calling camera.getPicture.
     * Applies only when the value of Camera.sourceType equals Camera.PictureSourceType.CAMERA and the Camera.destinationType equals Camera.DestinationType.FILE_URI.
     * @returns {Promise<any>}
     */
    Camera.prototype.cleanup = function () { return; };
    ;
    Camera.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    Camera.ctorParameters = function () { return []; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Camera.prototype, "getPicture", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Camera.prototype, "cleanup", null);
    Camera = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* Plugin */])({
            pluginName: 'Camera',
            plugin: 'cordova-plugin-camera',
            pluginRef: 'navigator.camera',
            repo: 'https://github.com/apache/cordova-plugin-camera',
            platforms: ['Android', 'BlackBerry 10', 'Browser', 'Firefox OS', 'iOS', 'Ubuntu', 'Windows', 'Windows Phone 8']
        })
    ], Camera);
    return Camera;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

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

/***/ }),

/***/ 377:
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
const chat_new_channel_1 = __webpack_require__(373);
const event_name_config_1 = __webpack_require__(15);
let ChatPage = class ChatPage {
    constructor(navCtrl, modalCtrl, events) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.testMsg = '';
    }
    ngAfterViewInit() {
        this.dealEvent();
    }
    closeSocket() {
    }
    dealEvent() {
        this.events.subscribe(event_name_config_1.EventNameConfig.NEW_CHANNEL, (params) => {
            let param = params.param;
            switch (param) {
                case 'new-channel':
                    let modal = this.modalCtrl.create(chat_new_channel_1.ChatNewChannelComponent);
                    modal.present();
                    break;
            }
        });
    }
    ngOnDestroy() {
        this.events.unsubscribe(event_name_config_1.EventNameConfig.NEW_CHANNEL);
    }
};
ChatPage = __decorate([
    core_1.Component({template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/chat/chat.html"*/'<ion-header>\n    <ion-navbar>\n        <bi-logo></bi-logo>\n        <bi-notice></bi-notice>\n        <bi-search></bi-search>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <!--chat-->\n    <chat-menu></chat-menu>\n    <!--<button (click)="closeSocket()" ion-button color="light"> close socket to test reconnect</button>-->\n</ion-content>'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/chat/chat.html"*/
    }),
    __metadata("design:paramtypes", [ionic_angular_1.NavController,
        ionic_angular_1.ModalController,
        ionic_angular_1.Events])
], ChatPage);
exports.ChatPage = ChatPage;
//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 378:
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
const chat_model_service_1 = __webpack_require__(345);
const ionic_angular_1 = __webpack_require__(6);
const event_name_config_1 = __webpack_require__(15);
const notification_config_1 = __webpack_require__(56);
const chat_content_1 = __webpack_require__(362);
const notification_service_1 = __webpack_require__(109);
/**
 * Generated class for the ChatMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
let ChatMenuComponent = class ChatMenuComponent {
    constructor(chatModelService, nav, modalCtrl, events, appConfig, notificationService, chatStoreService, userStoreService) {
        this.chatModelService = chatModelService;
        this.nav = nav;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.appConfig = appConfig;
        this.notificationService = notificationService;
        this.chatStoreService = chatStoreService;
        this.userStoreService = userStoreService;
        this.currentTypeChannelList = [];
    }
    ionViewDidLoad() {
    }
    /**
     *
     */
    ngOnInit() {
        this.chatMenuList = [
            {
                channelType: 'Starred',
                channelIcon: ''
            },
            {
                channelType: 'Recent',
                channelIcon: ''
            },
            {
                channelType: 'In private',
                channelIcon: ''
            },
            {
                channelType: 'Business',
                channelIcon: ''
            },
            {
                channelType: 'Mission',
                channelIcon: ''
            }
        ];
        this.slideActiveNum = 4;
        this.fetchChannelList();
        this.getContactList();
        this.dealEvent();
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
     * 处理IM消息
     */
    dealWebSocketNotification(message) {
        switch (message.act) {
            case notification_config_1.NotificationConfig.ACT_CHAT_NOTICE_GROUP_CREATE:
                if (message.status == 1) {
                    this.fetchChannelList();
                }
                break;
            case notification_config_1.NotificationConfig.ACT_NOTICE_GROUP_NAME_MODIFY:
                if (message.status == 1) {
                    this.fetchChannelList();
                }
                break;
            case notification_config_1.NotificationConfig.ACT_NOTICE_MASTER_DELETE_GROUP_USER:
                if (message.status == 1 && message.data
                    && message.data.owner && message.data.frd_type == 3) {
                    this.fetchChannelList();
                }
                break;
            case notification_config_1.NotificationConfig.ACT_NOTICE_MASTER_GROUP_INVITE:
                if (message.status == 1 && message.data && message.data.owner) {
                    this.fetchChannelList();
                }
                break;
            case notification_config_1.NotificationConfig.ACT_NOTICE_GROUP_DELETE:
                if (message.status == 1) {
                    this.fetchChannelList();
                }
                break;
            case notification_config_1.NotificationConfig.ACT_NOTICE_USER_EXIT_GROUP:
                if (message.status == 1 && message.data && message.data.sent == 1) {
                    this.fetchChannelList();
                }
                break;
        }
    }
    /**
     * 事件处理
     */
    dealEvent() {
        this.events.subscribe(event_name_config_1.EventNameConfig.REFRESH_CHAT_LIST, (param) => {
            if (param) {
                this.fetchChannelList();
            }
        });
    }
    /**
     * 获取群组接口
     * @param type
     */
    fetchChannelList() {
        this.chatModelService.getGroupList((res) => {
            if (res.status == 1) {
                this.channelObj = res.data;
                this.chatStoreService.setChatChannelList(this.channelObj);
                this.showCurrentGroupList(this.currentChannelType);
            }
        });
    }
    /**
     * 显示当前类型的群组列表
     * @param type
     */
    showCurrentGroupList(type) {
        if (!this.channelObj || typeof type == 'undefined')
            return;
        this.currentChannelType = type;
        switch (type) {
            case 0:
                this.currentTypeChannelList = this.channelObj['STARRED'];
                break;
            case 1:
                this.currentTypeChannelList = this.channelObj['RECENT'];
                break;
            case 2:
                this.currentTypeChannelList = this.channelObj['PRIVATE'];
                break;
            case 3:
                this.currentTypeChannelList = this.channelObj['WORK'];
                break;
            case 4:
                this.currentTypeChannelList = this.channelObj['MISSION'];
                break;
        }
        if (this.contactList) {
            this.fetchUserProfile();
        }
    }
    /**
     * 从缓存中获取联系人列表
     */
    getContactList() {
        this.userStoreService.getContactList((v) => {
            this.contactList = v;
        }).then().catch();
    }
    /**
     * 获取用户头像信息
     */
    fetchUserProfile() {
        for (let i in this.currentTypeChannelList) {
            if (this.currentTypeChannelList[i].uid) {
                this.currentTypeChannelList[i].is_Friend = true;
                if (this.currentTypeChannelList[i].form == 1) {
                    for (let k in this.contactList['Friend']) {
                        if (this.contactList['Friend'][k].uuid == this.currentTypeChannelList[i].uid) {
                            this.currentTypeChannelList[i].user_profile_path = this.contactList['Friend'][k].user_profile_path;
                        }
                    }
                }
                else if (this.currentTypeChannelList[i].form == 2) {
                    for (let k in this.contactList['Cooperator']) {
                        if (this.contactList['Cooperator'][k].psid == this.currentTypeChannelList[i].uid) {
                            this.currentTypeChannelList[i].user_profile_path = this.contactList['Friend'][k].user_profile_path;
                        }
                    }
                    for (let k in this.contactList['Internal']) {
                        if (this.contactList['Internal'][k].psid == this.currentTypeChannelList[i].uid) {
                            this.currentTypeChannelList[i].user_profile_path = this.contactList['Friend'][k].user_profile_path;
                        }
                    }
                }
            }
        }
    }
    /**
     * 切换不同类型的分组
     * @param index
     */
    switchChannel(index) {
        this.showCurrentGroupList(index);
    }
    /**
     * 打开menu
     * @param item
     */
    openChanelByMenu(item) {
        let modal = this.modalCtrl.create(chat_content_1.ChatContentComponent, { data: item });
        modal.present();
    }
};
ChatMenuComponent = __decorate([
    core_1.Component({
        selector: 'chat-menu',template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/chat/chat-menu/chat-menu.html"*/'<!-- Generated template for the ChatMenuComponent component -->\n<div class="chat-menu">\n    <ion-slides #slides slidesPerView="{{slideActiveNum}}" *ngIf="slideActiveNum > 3" class="chat-menu-header">\n        <ion-slide  class="ion-slide" margin-right *ngFor="let channel of chatMenuList;let i = index" (click)="switchChannel(i)">\n            <ion-icon name="star-outline"></ion-icon>\n            {{channel.channelType}}\n        </ion-slide>\n    </ion-slides>\n\n    <div margin-top class="g-list54">\n        <ion-list >\n            <ion-item *ngFor="let channel of currentTypeChannelList;let i = index"\n                      (click)="openChanelByMenu(channel)"\n                      class="group-list" no-padding>\n                    <img  class="g-user-profile34" src="{{appConfig.resourceDomain + channel.user_profile_path}}" *ngIf="channel.uid">\n                    <p class="icon-mission" *ngIf="!channel.uid && channel.is_mission == 1 ">M</p>\n                    <p class="icon-private" *ngIf="!channel.uid && channel.is_mission == 0 && channel.form == 1">P</p>\n                    <p class="icon-business" *ngIf="!channel.uid && channel.is_mission == 0 && channel.form == 2">B</p>\n                <h2 margin-left>{{channel.name}}</h2>\n            </ion-item>\n        </ion-list>\n    </div>\n\n\n</div>\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/chat/chat-menu/chat-menu.html"*/,
        providers: [chat_model_service_1.ChatModelService],
    }),
    __param(4, core_1.Inject('app.config')),
    __param(5, core_1.Inject(notification_service_1.NotificationService)),
    __param(6, core_1.Inject('chat-store.service')),
    __param(7, core_1.Inject('user-store.service')),
    __metadata("design:paramtypes", [chat_model_service_1.ChatModelService,
        ionic_angular_1.NavController,
        ionic_angular_1.ModalController,
        ionic_angular_1.Events, Object, notification_service_1.NotificationService, Object, Object])
], ChatMenuComponent);
exports.ChatMenuComponent = ChatMenuComponent;
//# sourceMappingURL=chat-menu.js.map

/***/ })

});
//# sourceMappingURL=3.js.map