webpackJsonp([7],{

/***/ 320:
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
const chat_forward_dialog_1 = __webpack_require__(353);
let ChatForwardDialogComponentModule = class ChatForwardDialogComponentModule {
};
ChatForwardDialogComponentModule = __decorate([
    core_1.NgModule({
        declarations: [
            chat_forward_dialog_1.ChatForwardDialogComponent,
        ],
        imports: [
            ionic_angular_1.IonicPageModule.forChild(chat_forward_dialog_1.ChatForwardDialogComponent),
        ],
    })
], ChatForwardDialogComponentModule);
exports.ChatForwardDialogComponentModule = ChatForwardDialogComponentModule;
//# sourceMappingURL=chat-forward-dialog.module.js.map

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

/***/ })

});
//# sourceMappingURL=7.js.map