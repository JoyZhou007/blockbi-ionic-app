webpackJsonp([10],{

/***/ 324:
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
const chat_share_dialog_1 = __webpack_require__(355);
let ChatShareDialogPageModule = class ChatShareDialogPageModule {
};
ChatShareDialogPageModule = __decorate([
    core_1.NgModule({
        declarations: [
            chat_share_dialog_1.ChatShareDialogPage,
        ],
        imports: [
            ionic_angular_1.IonicPageModule.forChild(chat_share_dialog_1.ChatShareDialogPage),
        ],
    })
], ChatShareDialogPageModule);
exports.ChatShareDialogPageModule = ChatShareDialogPageModule;
//# sourceMappingURL=chat-share-dialog.module.js.map

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

/***/ })

});
//# sourceMappingURL=10.js.map