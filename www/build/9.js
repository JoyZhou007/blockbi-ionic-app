webpackJsonp([9],{

/***/ 329:
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
const folder_1 = __webpack_require__(385);
const ionic_angular_1 = __webpack_require__(6);
const shared_module_1 = __webpack_require__(58);
const folder_content_1 = __webpack_require__(386);
let FolderPageModule = class FolderPageModule {
};
FolderPageModule = __decorate([
    core_1.NgModule({
        declarations: [folder_1.FolderPage, folder_content_1.FolderContentComponent],
        imports: [ionic_angular_1.IonicPageModule.forChild(folder_1.FolderPage), shared_module_1.SharedModule],
    })
], FolderPageModule);
exports.FolderPageModule = FolderPageModule;
//# sourceMappingURL=folder.module.js.map

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

/***/ 385:
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
const folder_model_service_1 = __webpack_require__(348);
const ionic_angular_2 = __webpack_require__(6);
const event_name_config_1 = __webpack_require__(15);
let FolderPage = class FolderPage {
    constructor(navCtrl, alertCtrl, events, actionSheetCtrl, folderModelService) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.actionSheetCtrl = actionSheetCtrl;
        this.folderModelService = folderModelService;
        this.isTopFolder = true;
        this.currentForm = 1;
    }
    ngOnInit() {
        this.selectedObj = {
            fileArray: [],
            folderArray: [],
            fileIdArray: [],
            folderIdArray: []
        };
    }
    ngAfterViewInit() {
        this.dealEvent();
    }
    ngOnDestroy() {
        this.events.unsubscribe(event_name_config_1.EventNameConfig.UPLOAD_FILE);
    }
    dealEvent() {
        this.events.subscribe(event_name_config_1.EventNameConfig.UPLOAD_FILE, (params) => {
            let param = params.param;
            switch (param) {
                case 'upload-file':
                    this.presentActionSheet();
                    break;
            }
        });
    }
    /**
     * 进入文件夹
     * @param data
     */
    enterTheFolder(data) {
        this.parentFileObj = data[0];
        this.currentFileObj = data[1];
        this.currentForm = data[1].type;
        this.isTopFolder = this.currentFileObj.chn == -1;
    }
    switchFolderType(event, form) {
        event.stopPropagation();
        if (this.currentForm != form) {
            this.currentForm = form;
            this.folderContent.switchFolderType(event, form);
        }
    }
    switchViewType(event) {
        event.stopPropagation();
        this.folderContent.switchViewType(event);
    }
    switchEditModel(event) {
        this.folderContent.switchEditModel(event);
    }
    /**
     * 点击回退回到上一层目录
     */
    backUpperFolder() {
        this.folderContent.fetchFolderList(this.currentForm, this.parentFileObj.id);
    }
    /**
     * 显示或者隐藏操作按钮
     */
    showOpBtn(array) {
        this.isShowOpBtn = array.length ? true : false;
        this.selectedFileArray = array;
        this.differFileOrFolder();
    }
    /**
     * 区分选择的文件还是文件夹
     */
    differFileOrFolder() {
        this.selectedObj = {
            fileArray: [],
            folderArray: [],
            fileIdArray: [],
            folderIdArray: []
        };
        for (let i in this.selectedFileArray) {
            if (this.selectedFileArray[i].is_dir == 1) {
                this.selectedObj.folderArray.push(this.selectedFileArray[i]);
                this.selectedObj.folderIdArray.push(this.selectedFileArray[i].id);
            }
            else {
                this.selectedObj.fileArray.push(this.selectedFileArray[i]);
                this.selectedObj.fileIdArray.push(this.selectedFileArray[i].id);
            }
        }
    }
    /**
     * 删除文件
     */
    deleteTheFile(event) {
        event.stopPropagation();
        if (!this.selectedFileArray.length)
            return;
        let confirmDelete = () => {
            this.folderModelService.deleteFolder({
                form: this.currentForm,
                did: this.selectedObj.folderIdArray,
                fid: this.selectedObj.fileIdArray,
            }, (res) => {
                if (res.status == 1) {
                    this.folderContent.fetchFolderList(this.currentForm, this.currentFileObj.id);
                    this.clearData();
                }
                else {
                    this.showBasicAlert('Delete Failed', res.message);
                }
            });
        };
        let confirm = this.alertCtrl.create({
            title: 'Delete it',
            message: 'That is undone!',
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
                        confirmDelete();
                    }
                }
            ]
        });
        confirm.present();
    }
    /**
     * 给文件夹/文件打PIN
     */
    pinTheFile(event) {
        event.stopPropagation();
        if (!this.selectedFileArray.length)
            return;
        let count = 0;
        let way;
        for (let i in this.selectedObj.folderArray) {
            if (this.selectedObj.folderArray[i].is_starred == 1) {
                count++;
            }
        }
        if (count === this.selectedObj.folderArray.length) {
            way = 'del';
        }
        else {
            way = 'add';
        }
        this.folderModelService.folderStarred({
            form: this.currentForm,
            did: this.selectedObj.folderIdArray,
            way: way
        }, (res) => {
            if (res.status === 1) {
                this.folderContent.dealPinOperation(this.selectedObj.folderIdArray, way);
                this.clearData();
            }
            else {
                this.showBasicAlert('FAILED', 'Pin file failed');
            }
        });
    }
    /**
     * 清空数据对象
     */
    clearData() {
        this.selectedFileArray = [];
        this.selectedObj = {
            fileArray: [],
            folderArray: [],
            fileIdArray: [],
            folderIdArray: []
        };
        this.folderContent.clearData();
    }
    /**
     * basic 基础警告框
     */
    showBasicAlert(title, subTitle) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['OK']
        });
        alert.present();
    }
    presentActionSheet() {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Choose channel',
            buttons: [
                {
                    text: 'iCloud Driver',
                    handler: () => {
                        console.log('Destructive clicked');
                    }
                }, {
                    text: 'BI',
                    handler: () => {
                        console.log('Archive clicked');
                    }
                }, {
                    text: 'More',
                    handler: () => {
                        console.log('Archive clicked');
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
     * 上拉刷新
     */
    /**
     * 上拉刷新
     * @param event
     */
    doRefresh(event) {
        this.isRefresh = {
            isRefresh: true,
            refreshObj: event
        };
    }
};
__decorate([
    core_1.ViewChild('folderContent'),
    __metadata("design:type", Object)
], FolderPage.prototype, "folderContent", void 0);
FolderPage = __decorate([
    core_1.Component({template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/folder/folder.html"*/'<ion-header class="folder-header">\n    <ion-navbar  class="g-header clearfix">\n        <bi-logo *ngIf="isTopFolder"></bi-logo>\n        <span class="bi-icon-down back" navPop\n              *ngIf="!isTopFolder"\n              (click)="backUpperFolder($event)">\n        </span>\n        <span class="g-header-title"> {{ isTopFolder? (currentForm == 1? \'PERSONAL\' : \'BUSINESS\'):currentFileObj.name}}</span>\n    </ion-navbar>\n    <ion-segment class="folder-type" *ngIf="isTopFolder">\n        <ion-segment-button class="folder-type-btn" [class.active]="currentForm == 1"\n                            (click)="switchFolderType($event,1)">\n            <div class="bi-icon-personal"></div>\n            <div class="f3-f">Personal</div>\n        </ion-segment-button>\n        <ion-segment-button class="folder-type-btn" [class.active]="currentForm == 2"\n                            (click)="switchFolderType($event,2)">\n            <div class="bi-icon-business"></div>\n            <div class="f3-f">Business</div>\n        </ion-segment-button>\n    </ion-segment>\n\n    <!--菜单栏部分-->\n    <ion-row class="folder-ion-row" margin-top>\n        <ion-col (click)="switchEditModel($event)">\n            <ion-buttons start>\n                <div class="folder-create">\n                     <span class="bi-icon-active-tab"></span>\n                </div>\n            </ion-buttons>\n        </ion-col>\n        <ion-col col-8>\n            <ion-segment>\n                <ion-segment-button value="new" checked>\n                    Last updated\n                </ion-segment-button>\n                <ion-segment-button value="hot">\n                    Last updated\n                </ion-segment-button>\n            </ion-segment>\n        </ion-col>\n        <ion-col>\n            <ion-buttons end (click)="switchViewType($event)">\n                <div class="folder-lis folder-create">\n                    <span class="bi-icon-general"></span>\n                </div>\n            </ion-buttons>\n        </ion-col>\n    </ion-row>\n</ion-header>\n<ion-content padding [class.not-top]="!isTopFolder" class="folder-content">\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content\n                pullingIcon="arrow-dropdown"\n                pullingText="Pull to refresh"\n                refreshingSpinner="circles"\n                refreshingText="Refreshing...">\n        </ion-refresher-content>\n    </ion-refresher>\n    <folder-content\n            #folderContent\n            [refresh]="isRefresh"\n            (outputShowOpBtn)="showOpBtn($event)"\n            (outputEnterFolder)="enterTheFolder($event)">\n    </folder-content>\n</ion-content>\n\n\n<ion-footer class="folder-footer" [class.active]="isShowOpBtn">\n    <ion-toolbar class="folder-footer-toobar">\n        <ion-row margin-left margin-right text-center>\n            <ion-col col-2>\n                <ion-icon name="albums"></ion-icon>\n                <span>transfer</span>\n            </ion-col>\n            <ion-col col-2>\n                <ion-icon name="appstore"></ion-icon>\n                <span>share</span>\n            </ion-col>\n            <ion-col col-2>\n                <ion-icon name="bookmark"></ion-icon>\n                <span>copy</span>\n            </ion-col>\n            <ion-col col-2>\n                <ion-icon name="build"></ion-icon>\n                <span>move</span>\n            </ion-col>\n            <ion-col col-2 (click)="pinTheFile($event)">\n                <ion-icon name="call"></ion-icon>\n                <span>pin</span>\n            </ion-col>\n            <ion-col col-2 (click)="deleteTheFile($event)">\n                <ion-icon name="clipboard"></ion-icon>\n                <span>delete</span>\n            </ion-col>\n        </ion-row>\n    </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/folder/folder.html"*/,
        providers: [folder_model_service_1.FolderModelService]
    }),
    __metadata("design:paramtypes", [ionic_angular_1.NavController,
        ionic_angular_2.AlertController,
        ionic_angular_1.Events,
        ionic_angular_1.ActionSheetController,
        folder_model_service_1.FolderModelService])
], FolderPage);
exports.FolderPage = FolderPage;
//# sourceMappingURL=folder.js.map

/***/ }),

/***/ 386:
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
const folder_model_service_1 = __webpack_require__(348);
const event_name_config_1 = __webpack_require__(15);
/**
 * Generated class for the FolderContentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
let FolderContentComponent = class FolderContentComponent {
    constructor(platform, loadingCtrl, folderModelService, event, config, navCtrl) {
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.folderModelService = folderModelService;
        this.event = event;
        this.config = config;
        this.navCtrl = navCtrl;
        this.isAndroid = false;
        this.fileList = [];
        this.currentForm = 1;
        this.outputEnterFolder = new core_1.EventEmitter();
        this.outputShowOpBtn = new core_1.EventEmitter();
        this.selectFileArray = [];
        this.isAndroid = platform.is('android');
        this.currentFileObj = this.initFileModel();
        this.parentFileObj = this.initFileModel();
        this.currentFileObj.chn == -1;
    }
    /**
     * 页面初始化
     */
    ngOnInit() {
        this.fetchFolderList(this.currentForm);
    }
    set refresh(data) {
        if (data && data.hasOwnProperty('isRefresh') && data.isRefresh) {
            this.fetchFolderList(this.currentForm, this.currentFileObj.id);
            setTimeout(() => {
                data.refreshObj.complete();
            }, 1000);
        }
    }
    /**
     * 从API获取文件列表
     * @param form
     * @param pdid
     */
    fetchFolderList(form, pdid) {
        if (this.isLoading)
            return;
        this.isLoading = true;
        this.presentLoading();
        this.folderModelService.folderLists({
            form: form,
            pdid: pdid ? pdid : 0
        }, (res) => {
            if (res.status = 1) {
                this.event.publish(event_name_config_1.EventNameConfig.TOGGLE_TABS_BUTTON, { param: 'show-icon-tabs', data: {} });
                this.bindFileData(res.data);
                this.dismissLoading();
            }
            else {
            }
        });
    }
    /**
     * 加载器
     * 开始加载
     * @param content 内容
     * @param spinner
     */
    presentLoading(content, spinner) {
        if (!content) {
            content = 'Loading...';
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
    initFileModel() {
        let obj = {
            child: 0,
            chn: -1,
            created: '',
            id: 0,
            did: 0,
            email: '',
            ext_type: '',
            is_dir: 0,
            is_starred: 0,
            is_my_share: 0,
            last: '',
            name: '',
            op: '',
            owner: '',
            parent_uid: '',
            path: '',
            pdid: 0,
            perm_created: '',
            perm_id: '',
            perm_updated: '',
            privilege_type: '',
            profile: '',
            received: '',
            share_to_me: '',
            status: 0,
            size: '',
            thumb_l: '',
            thumb_s: '',
            type: 0,
            updated: '',
            work_name: '',
            fid: 0,
            rid: 0,
            parent_user_info: {},
            special_dir_top: 0,
            ext: '',
            is_selected: false
        };
        return obj;
    }
    /**
     *绑定文件对象
     */
    bindFileData(data) {
        this.isLoading = false;
        this.isEditModel = false;
        this.fileList = [];
        if (Array.isArray(data.sub)) {
            for (let i in data.sub) {
                let fileObj = this.initFileModel();
                Object.assign(fileObj, data.sub[i]);
                this.fileList.push(fileObj);
            }
        }
        Object.assign(this.currentFileObj, data.current);
        Object.assign(this.parentFileObj, data.parent);
        this.outputEnterFolder.emit([this.parentFileObj, this.currentFileObj]);
    }
    /**
     * 切换文件类型
     * @param event
     * @param form
     */
    switchFolderType(event, form) {
        event.stopPropagation();
        if (this.currentForm != form) {
            this.currentForm = form;
            this.fetchFolderList(form);
        }
    }
    /**
     * 进入文件夹
     */
    enterTheFolder(event, file) {
        event.stopPropagation();
        if (this.isEditModel) {
            file.is_selected = !file.is_selected;
            this.countSelectedFile(file);
        }
        else {
            if (file.is_dir) {
                this.fetchFolderList(file.type, file.id);
            }
        }
    }
    /**
     * 切换视图
     */
    switchViewType(event) {
        event.stopPropagation();
        this.isListView = !this.isListView;
    }
    /**
     * 切换到编辑模式
     */
    switchEditModel(event) {
        event.stopPropagation();
        this.isEditModel = !this.isEditModel;
        if (!this.isEditModel) {
            this.event.publish(event_name_config_1.EventNameConfig.TOGGLE_TABS_BUTTON, { param: 'show-icon-tabs', data: {} });
            for (let i in this.selectFileArray) {
                this.selectFileArray[i].is_selected = false;
            }
        }
    }
    /**
     * 统计选择文件的个数
     */
    countSelectedFile(file) {
        if (file.is_selected) {
            this.selectFileArray.push(file);
        }
        else {
            for (let i in this.selectFileArray) {
                if (this.selectFileArray[i].id == file.id) {
                    this.selectFileArray.splice(parseInt(i), 1);
                }
            }
        }
        if (this.selectFileArray.length) {
            this.event.publish(event_name_config_1.EventNameConfig.TOGGLE_TABS_BUTTON, { param: 'hide-icon-tabs', data: {} });
            this.outputShowOpBtn.emit(this.selectFileArray);
        }
        else {
            this.event.publish(event_name_config_1.EventNameConfig.TOGGLE_TABS_BUTTON, { param: 'show-icon-tabs', data: {} });
            this.outputShowOpBtn.emit(this.selectFileArray);
        }
    }
    /**
     * 处理PIN后续操作
     */
    dealPinOperation(data, way) {
        for (let i in data) {
            for (let k in this.fileList) {
                if (this.fileList[k].is_dir == 1 && this.fileList[k].id == data[i]) {
                    if (way == 'add') {
                        this.fileList[k].is_starred = 1;
                    }
                    else if (way == 'del') {
                        this.fileList[k].is_starred = 0;
                    }
                }
            }
        }
    }
    /**
     * 清空数据对象
     */
    clearData() {
        this.selectFileArray = [];
        for (let i in this.fileList) {
            this.fileList[i].is_selected = false;
        }
    }
};
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FolderContentComponent.prototype, "outputEnterFolder", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FolderContentComponent.prototype, "outputShowOpBtn", void 0);
__decorate([
    core_1.Input('refresh'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], FolderContentComponent.prototype, "refresh", null);
FolderContentComponent = __decorate([
    core_1.Component({
        selector: 'folder-content',template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/folder/folder-content/folder-content.html"*/'<!----文件列表部分----->\n<ion-list  *ngIf="isListView">\n    <div ion-item *ngFor="let file of fileList"\n            class="list-file-view"\n            (click)="enterTheFolder($event,file)">\n        <span *ngIf="file.ext_type !=\'image\'">\n                                <span *ngIf="file.chn == 0 || file.chn == -1"\n                                      class="list-file-icon icon-file-s-{{file.ext_type}}"></span>\n                                <span *ngIf="file.chn == 1 && file.is_dir == 1"\n                                      class="list-file-icon icon-file-s-share"></span>\n                                <span *ngIf="file.chn == 2 && file.is_dir == 1 "\n                                      class="list-file-icon icon-file-s-chat"></span>\n                                <span *ngIf="file.chn == 3 && file.is_dir == 1"\n                                      class="list-file-icon icon-file-s-mission"></span>\n        </span>\n        <img *ngIf="file.ext_type ==\'image\'" class="file-image selectBtn"\n             src="{{file.thumb_l ? config.resourceFolderDomain + file.thumb_s : \'\'}}">\n        <ion-icon class="icon-starred"  name="star" *ngIf="file.is_starred"></ion-icon>\n        <div class="file-name">\n            <p class="file-list-name f5-f"> {{file.name}}</p>\n            <p class="file-child-list f27-f4" *ngIf="file.is_dir">{{file.child}} files</p>\n            <p class="file-child-list f27-f4" *ngIf="!file.is_dir">{{file.size}}</p>\n        </div>\n        <b class="select-radio"  [class.active]="file.is_selected" *ngIf="isEditModel"></b>\n    </div>\n</ion-list>\n\n<ion-row margin-left *ngIf="!isListView">\n    <ion-col col-4 *ngFor="let file of fileList"\n             (click)="enterTheFolder($event,file)"\n             col-sm-2 col-md-2 col-lg-2 col-xl-3\n             ion-text text-center>\n        <div class="block-view-file">\n            <span *ngIf="file.ext_type !=\'image\'">\n                                <span *ngIf="file.chn == 0 || file.chn == -1"\n                                      class="file-icon icon-file-l-{{file.ext_type}}"></span>\n                                <span *ngIf="file.chn == 1 && file.is_dir == 1"\n                                      class="file-icon icon-file-l-share"></span>\n                                <span *ngIf="file.chn == 2 && file.is_dir == 1 "\n                                      class="file-icon icon-file-l-chat"></span>\n                                <span *ngIf="file.chn == 3 && file.is_dir == 1"\n                                      class="file-icon icon-file-l-mission"></span>\n            </span>\n            <img *ngIf="file.ext_type ==\'image\'" class="file-image selectBtn"\n                 src="{{file.thumb_l ? config.resourceFolderDomain + file.thumb_l : \'\'}}">\n            <ion-icon class="icon-starred"  name="star" *ngIf="file.is_starred"></ion-icon>\n            <b class="select-radio"  [class.active]="file.is_selected" *ngIf="isEditModel"></b>\n            <h3 class="f5-f" title="{{file.name}}">{{file.name}}</h3>\n            <span class="file-child f27-f4" *ngIf="file.is_dir">{{file.child}} files</span>\n            <span class="file-child f27-f4" *ngIf="!file.is_dir">{{file.size}}</span>\n        </div>\n    </ion-col>\n</ion-row>\n\n\n\n\n\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/folder/folder-content/folder-content.html"*/
    }),
    __param(4, core_1.Inject('app.config')),
    __metadata("design:paramtypes", [ionic_angular_1.Platform,
        ionic_angular_1.LoadingController,
        folder_model_service_1.FolderModelService,
        ionic_angular_1.Events, Object, ionic_angular_1.NavController])
], FolderContentComponent);
exports.FolderContentComponent = FolderContentComponent;
//# sourceMappingURL=folder-content.js.map

/***/ })

});
//# sourceMappingURL=9.js.map