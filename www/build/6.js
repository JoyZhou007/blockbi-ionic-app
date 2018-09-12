webpackJsonp([6],{

/***/ 328:
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
const edit_profile_1 = __webpack_require__(374);
const shared_module_1 = __webpack_require__(58);
let EditProfilePageModule = class EditProfilePageModule {
};
EditProfilePageModule = __decorate([
    core_1.NgModule({
        declarations: [
            edit_profile_1.EditProfilePage,
        ],
        imports: [
            ionic_angular_1.IonicPageModule.forChild(edit_profile_1.EditProfilePage),
            shared_module_1.SharedModule
        ],
    })
], EditProfilePageModule);
exports.EditProfilePageModule = EditProfilePageModule;
//# sourceMappingURL=edit-profile.module.js.map

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

/***/ 364:
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
let PersonalModelService = class PersonalModelService extends base_model_service_1.BaseModelService {
    constructor(api) {
        super(api);
        this.api = api;
    }
    //personal profile
    //personalInfo(data : any, callback? : any) {
    //    this.getData('personalInfo', data, callback);
    //}
    //教育经历保存
    saveEducations(data, callback) {
        this.getData('saveEducations', data, callback);
    }
    //contacts
    //职业读取
    contactsPermission(data, callback) {
        this.getData('contactsPermission', data, callback);
    }
    //获取用户所有页面数据
    getUserInfo(data, callback) {
        this.getData('userInformations', data, callback);
    }
    //银行列表接口
    banksList(callback) {
        this.getData('banksList', null, callback);
    }
    //国家名字接口
    areaCountry(callback) {
        this.getData('areaCountry', null, callback);
    }
    //个人信息保存接口
    userSaveBaseInfo(data, callback) {
        this.getData('userSaveBaseInfo', data, callback);
    }
    //语言级别
    languageLevels(callback) {
        this.getData('languageLevels', null, callback);
    }
    //语言列表
    languageList(callback) {
        this.getData('languageList', null, callback);
    }
    //技能保存
    saveSkill(data, callback) {
        this.getData('saveSkill', data, callback);
    }
    //技能点赞
    skillPoint(data, callback) {
        this.getData('skillPoint', data, callback);
    }
    /**
     * 公司行业
     * @param callback
     */
    // getCompanyIndustry(callback?: any) {
    //   this.getData('companyIndustry', null, callback);
    // }
    //获取所有公司
    getAllCompany(callback) {
        this.getData('getAllCompany', null, callback);
    }
    //skill list
    //queryJson(callback? : any) {
    //    this.getData('assets/json/skill.json', null, callback, 'get');
    //}
    /**
     * 请求json文件
     */
    queryJson(type, url, data, success, failed) {
        //创建ajax对象
        let xhr = null;
        //XMLHttpRequest主流浏览器AJAX请求方法
        xhr = new XMLHttpRequest();
        //转换 type 类型 不区分大小写
        let typeCase = type.toUpperCase();
        //随机数 每次请求生成新的随机数
        let random = Math.random();
        //把对象转成字符串
        if (typeof data === 'object') {
            let str = '';
            for (let key in data) {
                str += key + '=' + data[key] + '&';
            }
            data = str.replace(/&$/, '');
        }
        //GET请求方法
        if (typeCase == 'GET') {
            if (data) {
                xhr.open('GET', url + '?' + data, true);
            }
            else {
                //random每次请求接口 防止缓存
                xhr.open('GET', url + '?t=' + random, true);
            }
            xhr.send();
            //POST请求方法
        }
        else if (typeCase == 'POST') {
            xhr.open('POST', url, true);
            // 如果需要像 html 表单那样 POST 数据，请使用 setRequestHeader() 来添加 http 头。
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8");
            xhr.send(data);
        }
        //请求成功处理方法
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    //成功返回并且转化对象
                    if (xhr.responseText && typeof xhr.responseText === 'string') {
                        let text = JSON.parse(xhr.responseText);
                        success(text);
                    }
                    else {
                        success(0);
                    }
                }
                else {
                    //失败返回
                    if (failed) {
                        failed(xhr.status);
                    }
                }
            }
        };
    }
    ;
};
PersonalModelService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(api_service_1.ApiService)),
    __metadata("design:paramtypes", [api_service_1.ApiService])
], PersonalModelService);
exports.PersonalModelService = PersonalModelService;
//# sourceMappingURL=personal-model.service.js.map

/***/ }),

/***/ 374:
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
const personal_model_service_1 = __webpack_require__(364);
const const_interface_service_1 = __webpack_require__(375);
const userConfig = __webpack_require__(347);
const event_name_config_1 = __webpack_require__(15);
const forms_1 = __webpack_require__(12);
/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let EditProfilePage = class EditProfilePage {
    constructor(navCtrl, event, alertCtrl, actionSheetCtrl, formBuilder, userStoreService, dateService, constInterFaceService, config, personalModelService, navParams) {
        this.navCtrl = navCtrl;
        this.event = event;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.formBuilder = formBuilder;
        this.userStoreService = userStoreService;
        this.dateService = dateService;
        this.constInterFaceService = constInterFaceService;
        this.config = config;
        this.personalModelService = personalModelService;
        this.navParams = navParams;
        this.tabType = 'general';
        this.currentCountry = ''; //当前选择的国家
        this.educationData = [];
        this.experienceData = [];
        this.clickIcon = false;
        this.female = userConfig.USER_GENDER_FEMALE;
        this.male = userConfig.USER_GENDER_MALE;
        this.other = userConfig.USER_GENDER_OTHER;
        this.hasClickOnSend = false;
        this.clicked = false;
        if (this.navParams.data) {
            this.userInfo = this.navParams.data.data;
        }
        this.clicked = false;
        this.initForm();
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad EditProfilePage');
        this.personalModelService.getUserInfo({ personal_module: 'general' }, (response) => {
            if (response && response.status == 1) {
                if (response.hasOwnProperty('data')) {
                    if (response.data.hasOwnProperty('personal_information')) {
                        this.userInfo = Object.assign(this.userInfo, response.data.personal_information);
                        //国家初始化
                        let countryType = this.userInfo.country ? this.userInfo.country : 'CN';
                        this.constInterFaceService.initCountry(countryType, (data, list) => {
                            this.currentCountry = data;
                            this.areaCountry = list.setData;
                            console.log('country::', this.currentCountry, this.areaCountry);
                        });
                    }
                }
            }
        });
        //初始化send obj
        this.initSendUserInfo();
    }
    /**
     * 切换general / resume
     * @param type
     */
    onClickTab(type) {
        if (type) {
            this.tabType = 'resume';
            if (!this.clicked) {
                this.personalModelService.getUserInfo({ personal_module: 'resume' }, (response) => {
                    if (response && response.status == 1) {
                        this.clicked = true;
                        if (response.hasOwnProperty('data')) {
                            let newArray = [];
                            this.educationData = newArray.concat(response.data.educations);
                            this.experienceData = newArray.concat(response.data.experiences);
                            console.log('resume data::', this.educationData, this.experienceData);
                        }
                    }
                });
            }
        }
        else {
            this.tabType = 'general';
        }
    }
    /**
     * 保存personal general
     */
    saveBaseInfo() {
        //如果是general
        if (this.tabType == 'general') {
            this.hasClickOnSend = true;
            if (!this.formGroup.valid) {
                return;
            }
            //赋值，调用接口
            this.sendUserInfo = Object.assign(this.sendUserInfo, this.userInfo);
            this.personalModelService.userSaveBaseInfo(this.sendUserInfo, (response) => {
                if (response && response.status == 1) {
                    //修改成功
                    let alert = this.alertCtrl.create({
                        title: 'SUCCESS',
                        subTitle: 'update info success',
                        buttons: ['OK']
                    });
                    alert.present();
                    //事件传出数据
                    this.event.publish(event_name_config_1.EventNameConfig.EDIT_PROFILE, {
                        param: 'edit-profile',
                        data: this.sendUserInfo
                    });
                    //更新缓存
                    this.userStoreService.getUserInfo((response) => {
                        let userStore = response;
                        userStore.work_name = this.sendUserInfo.work_name;
                        this.userStoreService.setUserInfo(userStore);
                    }).then().catch();
                }
                else {
                    //修改失败
                    let alert = this.alertCtrl.create({
                        title: 'FAILED',
                        subTitle: 'update info failed',
                        buttons: ['OK']
                    });
                    alert.present();
                }
            });
        }
        else if (this.tabType == 'resume') {
            if (this.checkEduExp()) {
                let resumeData = {
                    'user_educations': this.educationData,
                    'user_experiences': this.experienceData
                };
                this.personalModelService.saveEducations({ 'user_edu_exp': resumeData }, (response) => {
                    if (response && response.status == 1) {
                        //修改成功
                        let alert = this.alertCtrl.create({
                            title: 'SUCCESS',
                            subTitle: 'update info success',
                            buttons: ['OK']
                        });
                        alert.present();
                    }
                    else {
                        //修改失败
                        let alert = this.alertCtrl.create({
                            title: 'FAILED',
                            subTitle: 'update info failed',
                            buttons: ['OK']
                        });
                        alert.present();
                    }
                });
            }
        }
    }
    /**
     * 检测education experience的合法性
     */
    checkEduExp() {
        let flag = 1;
        for (let i = 0; i < this.educationData.length; i++) {
            if (this.educationData[i].school == '' && this.educationData[i].operation != -1) {
                this.educationData[i].schoolError = true;
                flag = 0;
            }
            else {
                this.educationData[i].schoolError = false;
            }
        }
        for (let i = 0; i < this.experienceData.length; i++) {
            if (this.experienceData[i].company == '' && this.experienceData[i].operation != -1) {
                this.experienceData[i].companyError = true;
                flag = 0;
            }
            else {
                this.experienceData[i].companyError = false;
            }
        }
        return flag;
    }
    /**
     *点击添加
     */
    onClickIcon() {
        this.clickIcon = !this.clickIcon;
    }
    /**
     * 删除 education ， experience
     * @param education
     * @param index
     * @param type  0: education  1: experience
     */
    removeResume(education, index, type) {
        //confirm 弹框
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Remove the experience',
            buttons: [
                {
                    text: 'Delete it',
                    handler: () => {
                        if (type) {
                            education.operation = -1;
                            console.log(this.experienceData, "delete <<<<<");
                        }
                        else {
                            education.operation = -1;
                            console.log(this.educationData, "delete <<<<<");
                        }
                    }
                },
                {
                    text: 'Just clear it',
                    handler: () => {
                        console.log('clear it');
                    }
                },
                {
                    text: 'No, Thanks',
                }
            ]
        });
        actionSheet.present();
    }
    /**
     * 添加education
     */
    onAddEducation() {
        this.fabBtn.nativeElement.click();
        let edu = this.initEducation();
        edu.operation = 1;
        this.educationData.push(edu);
    }
    /**
     * 添加experience
     */
    onAddExperience() {
        this.fabBtn.nativeElement.click();
        let exp = this.initExperience();
        exp.operation = 1;
        this.experienceData.push(exp);
    }
    /**
     * 初始换用户信息
     */
    initSendUserInfo() {
        let sendObj = {
            birthday: '',
            country: '',
            first_name: '',
            last_name: '',
            gender: '',
            home_address: '',
            nation: '',
            work_name: '',
            bank_type: '',
            identity_card: '',
            wage_card: 'gre',
            passport: ''
        };
        this.sendUserInfo = sendObj;
    }
    /**
     * 初始化education对象
     * @returns {{description: string, end_date: string, id: string, major: string, school: string, start_date: string, operation: number}}
     */
    initEducation() {
        let str = this.dateService.dateFormat(new Date(), 'yyyy-MM-dd');
        console.log(str, 'data->');
        let education = {
            description: '',
            end_date: str,
            id: 0,
            major: '',
            school: '',
            start_date: str,
            operation: 0,
            schoolError: false,
            timeError: false
        };
        return education;
    }
    /**
     * 初始化experience对象
     * @returns {{company: string, description: string, end_date: string, finial_position: string, id: string, initial_position: string, start_date: string, operation: number}}
     */
    initExperience() {
        let str = this.dateService.dateFormat(new Date(), 'yyyy-MM-dd');
        let experience = {
            company: '',
            description: '',
            end_date: str,
            finial_position: '',
            company_id: 0,
            id: 0,
            tag: 1,
            initial_position: '',
            start_date: str,
            operation: 0,
            companyError: false,
            timeError: false
        };
        return experience;
    }
    initForm() {
        this.formGroup = this.formBuilder.group({
            'workName': [null, forms_1.Validators.compose([forms_1.Validators.required])],
        });
        this.sGroup = this.formBuilder.group({
            'school': [null, forms_1.Validators.compose([forms_1.Validators.required])],
        });
    }
    get workName() {
        return this.formGroup.get('workName');
    }
    get school() {
        return this.sGroup.get('school');
    }
};
__decorate([
    core_1.ViewChild('fabBtn'),
    __metadata("design:type", Object)
], EditProfilePage.prototype, "fabBtn", void 0);
EditProfilePage = __decorate([
    core_1.Component({
        selector: 'page-edit-profile',template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/edit-profile/edit-profile.html"*/'<!--\n  Generated template for the EditProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<div [class.filter]="clickIcon" class="filter-wrap">\n    <ion-header class="g-header clearfix">\n            <ion-navbar>\n                <span class="bi-icon-down back" navPop></span>\n                <span class="g-header-title">EDIT PROFILE</span>\n                <span class="send" (click)="saveBaseInfo()">SEND</span>\n            </ion-navbar>\n\n        <!--头像 名字-->\n        <div class="edit-profile-name clearfix">\n            <div>\n                <img src="{{config.resourceDomain}}{{userInfo.user_profile_path}}" alt="">\n            </div>\n            <div>\n                <div class="f9-f" style="text-align: left;">WORK NAME</div>\n                <form [formGroup]="formGroup">\n                    <input class="f20-f" [(ngModel)]="userInfo.work_name" placeholder="WORK NAME"\n                           formControlName="workName">\n                    <div *ngIf="workName.invalid && (workName.dirty || workName.touched || hasClickOnSend)"\n                         text-left\n                         class="input-error-msg">\n                        <div *ngIf="workName.errors.required">work name is required.</div>\n                    </div>\n                </form>\n                <input class="f20-f first-name" [(ngModel)]="userInfo.first_name" placeholder="FIRST NAME">\n                <input class="f20-f last-name" [(ngModel)]="userInfo.last_name"  placeholder="LAST NAME">\n            </div>\n        </div>\n        <!--列表切换-->\n        <ion-segment class="edit-profile-tab" [ngModel]="tabType">\n            <ion-segment-button value="general" (click)="onClickTab(0)">\n                <span class="bi-icon-general"></span>\n                <div class="f3-f"> General</div>\n            </ion-segment-button>\n            <ion-segment-button value="resume" (click)="onClickTab(1)">\n                <span class="bi-icon-resume"></span>\n                <div class="f3-f">Resume</div>\n            </ion-segment-button>\n        </ion-segment>\n    </ion-header>\n\n    <ion-content padding>\n        <!--出生日期-->\n        <div class="edit-profile-general" *ngIf="tabType == \'general\'">\n            <div class="edit-profile-title f9-f">BIRTHDAY</div>\n            <div class="edit-profile-input">\n                <ion-datetime displayFormat="DD/MM/YYYY" class="f19-f" [(ngModel)]="userInfo.birthday"></ion-datetime>\n            </div>\n            <!--性别-->\n            <div class="edit-profile-country">\n                <div class="edit-profile-title f9-f">GENDER</div>\n                <div class="edit-profile-input f19-f">\n                    <ion-select [(ngModel)]="userInfo.gender" interface="action-sheet">\n                        <ion-option value="{{female}}">Female</ion-option>\n                        <ion-option value={{male}}>Male</ion-option>\n                        <ion-option value="{{other}}">Other</ion-option>\n                    </ion-select>\n                    <!--  <input type="text" [(ngModel)]="userInfo.genderType">-->\n                </div>\n            </div>\n            <!--国家-->\n            <div class="edit-profile-country">\n                <div class="edit-profile-title f9-f">COUNTRY</div>\n                <div class="edit-profile-input f19-f">\n                    <!-- <input type="text" [(ngModel)]="currentCountry">-->\n                    <ion-select [(ngModel)]="userInfo.country">\n                        <ion-option *ngFor="let area of areaCountry" value="{{area.code}}">{{area.chs}}</ion-option>\n                    </ion-select>\n                </div>\n            </div>\n        </div>\n        <div class="edit-profile-resume" *ngIf="tabType == \'resume\'">\n            <div class="resume-education-title f7-f">EDUCATION</div>\n            <div *ngFor="let education of educationData;let i = index">\n                <div *ngIf="education?.operation != -1">\n                    <!--education 日期-->\n                    <div class="edit-profile-country">\n                        <div class="edit-profile-title f9-f">PERIOD</div>\n                        <div class="edit-profile-input g-time-input-wrap clearfix">\n                            <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="education.start_date"\n                                          class="f19-f"></ion-datetime>\n                            <span class="bi-icon-arrow3"></span>\n                            <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="education.end_date"\n                                          class="f19-f"></ion-datetime>\n                        </div>\n                    </div>\n                    <!--education 学校-->\n                    <div class="edit-profile-country">\n                        <div class="edit-profile-title f9-f">SCHOOL</div>\n                        <div class="edit-profile-input">\n                            <input type="text" class="f19-f" [(ngModel)]="education.school">\n                            <div *ngIf="education?.schoolError"\n                                 text-left\n                                 class="input-error-msg">\n                                school is required.\n                            </div>\n                        </div>\n                    </div>\n                    <!--education 主修-->\n                    <div class="edit-profile-country">\n                        <div class="edit-profile-title f9-f">MARJOR</div>\n                        <div class="edit-profile-input">\n                            <input type="text" class="f19-f" [(ngModel)]="education.major">\n                        </div>\n                    </div>\n                    <!--education 描述-->\n                    <div class="edit-profile-country">\n                        <div class="edit-profile-title f9-f">SPECIFICATION</div>\n                        <div class="edit-profile-input">\n                            <input type="text" class="f19-f" [(ngModel)]="education.description">\n                        </div>\n                    </div>\n                    <!--education 删除按钮-->\n                    <div class="edit-profile-country">\n                        <div class="g-remove-btn" (click)="removeResume(education,i,0)">REMOVE THIS EDUCATION</div>\n                    </div>\n                </div>\n            </div>\n            <div class="resume-education-title">EXPERIENCE</div>\n            <div margin-top *ngFor="let experience of experienceData; let i = index">\n                <div *ngIf="experience?.operation != -1">\n                    <!--experience 日期-->\n                    <div class="edit-profile-country">\n                        <div class="edit-profile-title f9-f">PERIOD</div>\n                        <div class="edit-profile-input g-time-input-wrap clearfix">\n                            <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="experience.start_date"\n                                          class="f19-f"></ion-datetime>\n                            <span class="bi-icon-arrow3"></span>\n                            <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="experience.end_date"\n                                          class="f19-f"></ion-datetime>\n                        </div>\n                    </div>\n                    <!--experience 公司-->\n                    <div class="edit-profile-country">\n                        <div class="edit-profile-title f9-f">COMPANY</div>\n                        <div class="edit-profile-input">\n                            <input type="text" class="f19-f" [(ngModel)]="experience.company">\n                            <div *ngIf="experience?.companyError"\n                                 text-left\n                                 class="input-error-msg">\n                                company is required.\n                            </div>\n                        </div>\n                    </div>\n                    <!--experience 开始职位-->\n                    <div class="edit-profile-country">\n                        <div class="edit-profile-title f9-f">INITIAL POSITION</div>\n                        <div class="edit-profile-input">\n                            <input type="text" class="f19-f" [(ngModel)]="experience.initial_position">\n                        </div>\n                    </div>\n                    <!--experience 结束职位-->\n                    <div class="edit-profile-country">\n                        <div class="edit-profile-title f9-f">LAST POSITION</div>\n                        <div class="edit-profile-input">\n                            <input type="text" class="f19-f" [(ngModel)]="experience.finial_position">\n                        </div>\n                    </div>\n                    <!--experience 描述-->\n                    <div class="edit-profile-country">\n                        <div class="edit-profile-title f9-f">SPECIFICATION</div>\n                        <div class="edit-profile-input">\n                            <input type="text" class="f19-f" [(ngModel)]="experience.description">\n                        </div>\n                    </div>\n                    <!--experience 删除按钮-->\n                    <div class="edit-profile-country">\n                        <div class="g-remove-btn" (click)="removeResume(experience,i,1)">REMOVE THIS EXPERIENCE</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </ion-content>\n</div>\n\n<div class="g-right-fab" *ngIf="tabType == \'resume\'">\n    <ion-fab right bottom>\n        <button ion-fab color="light" (click)="onClickIcon()">\n            <span #fabBtn>+</span>\n        </button>\n        <ion-fab-list side="top">\n            <button ion-fab (click)="onAddExperience()">\n                <span class="bi-icon-new-experience ion-fab-icon"></span>\n                <i class="fab-title f23-f">NEW</i>\n                <i class="fab-title f23-f">EXPERIENCE</i>\n            </button>\n            <button ion-fab (click)="onAddEducation()">\n                <span class="bi-icon-new-education ion-fab-icon"></span>\n                <i class="fab-title f23-f">NEW</i>\n                <i class="fab-title f23-f">EDUCATION</i>\n\n            </button>\n        </ion-fab-list>\n    </ion-fab>\n</div>\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/edit-profile/edit-profile.html"*/,
        providers: [personal_model_service_1.PersonalModelService, const_interface_service_1.ConstInterFaceService]
    }),
    __param(5, core_1.Inject('user-store.service')),
    __param(6, core_1.Inject('date.service')),
    __param(8, core_1.Inject('app.config')),
    __metadata("design:paramtypes", [ionic_angular_1.NavController,
        ionic_angular_1.Events,
        ionic_angular_1.AlertController,
        ionic_angular_1.ActionSheetController,
        forms_1.FormBuilder, Object, Object, const_interface_service_1.ConstInterFaceService, Object, personal_model_service_1.PersonalModelService,
        ionic_angular_1.NavParams])
], EditProfilePage);
exports.EditProfilePage = EditProfilePage;
//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 375:
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
const personal_model_service_1 = __webpack_require__(364);
// import { AllCompanyInfo } from "../../entity/company-entity";
const api_service_1 = __webpack_require__(30);
let ConstInterFaceService = class ConstInterFaceService extends personal_model_service_1.PersonalModelService {
    constructor(api, typeService, storeService, dialogService, config) {
        super(api);
        this.api = api;
        this.typeService = typeService;
        this.storeService = storeService;
        this.dialogService = dialogService;
        this.config = config;
        this.COUNTRY_LIST = 'country_list';
        this.INDUSTRY_LIST = 'industry_list';
        this.BANK_LIST = 'bank_list';
    }
    /**
     * 设置数据缓存
     * @param key
     * @param data
     */
    setStoreData(key, data) {
        this.storeService.set(key, data);
    }
    /**
     * 清楚缓存
     * @param key
     */
    removeStoreData(key) {
        this.storeService.getInstance().remove(key);
    }
    /**
     * 银行初始化
     * @param type
     * @param callBack
     */
    initBank(type, callBack) {
        // let storeBankList: any = this.storeService.getInstance().get(this.BANK_LIST);
        // if (storeBankList) {
        //   this.bankDataList(type, storeBankList, callBack);
        // } else {
        //
        // }
        this.banksList((data) => {
            if (data.status === 1) {
                this.setStoreData(this.BANK_LIST, data.data);
                this.bankDataList(type, data.data, callBack);
            }
        });
    }
    bankDataList(type, data, callBack) {
        let shortName;
        let bankList = [];
        for (let key in data) {
            bankList.push(data[key]);
            if (parseInt(data[key].id) === type) {
                shortName = data[key].short_name;
            }
        }
        if (callBack) {
            callBack(shortName, bankList);
        }
    }
    /**
     * 国家初始化
     * @param type
     * @param callBack
     */
    initCountry(type, callBack) {
        let domain;
        if (this.config.env != 'local') {
            domain = this.config.domain;
        }
        else {
            domain = '';
        }
        this.queryJson('GET', domain + 'assets/json/country.json', '', (data) => {
            this.setStoreData(this.COUNTRY_LIST, data);
            this.countryDataList(type, data, callBack);
        });
    }
    countryDataList(type, data, callBack) {
        let countryArr = { chs: [], en: [] };
        let currChs;
        countryArr['setData'] = data;
        for (let key in data) {
            countryArr.chs.push(data[key].chs);
            countryArr.en.push(data[key].en);
            if (data[key].code === type) {
                currChs = data[key].chs;
                /* if (this.translate.lan == 'zh-cn') {
                   currChs = data[key].chs;
                 } else if (this.translate.lan == 'en') {
                   currChs = data[key].en;
                 }*/
            }
        }
        if (callBack) {
            callBack(currChs, countryArr);
        }
    }
    /**
     * 性别初始化
     * @param type
     */
    transformGender(type) {
        let gender;
        switch (type) {
            case 1:
                gender = 'MALE';
                break;
            case 2:
                gender = 'FEMALE';
                break;
            default:
                gender = 'OTHER';
                break;
        }
        return gender;
    }
    /**
     * 公司行业
     * @param type
     * @param callBack
     */
    companyIndustry(type, callBack) {
        // let storeIndustryList: any = this.storeService.getInstance().get(this.INDUSTRY_LIST);
        // if (storeIndustryList) {
        //   this.industryDataList(type, storeIndustryList, callBack);
        // } else {
        //
        // }
        this.queryJson('GET', this.config.staticResourceDomain + 'assets/json/industry.json', '', (data) => {
            this.setStoreData(this.INDUSTRY_LIST, data);
            this.industryDataList(type, data, callBack);
        });
    }
    industryDataList(type, data, callBack) {
        let industryArr = data;
        let industry = data[type - 1];
        if (callBack) {
            callBack(industry, industryArr);
        }
    }
};
ConstInterFaceService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(api_service_1.ApiService)),
    __param(1, core_1.Inject('type.service')),
    __param(2, core_1.Inject('store.service')),
    __param(3, core_1.Inject('dialog.service')),
    __param(4, core_1.Inject('app.config')),
    __metadata("design:paramtypes", [api_service_1.ApiService, Object, Object, Object, Object])
], ConstInterFaceService);
exports.ConstInterFaceService = ConstInterFaceService;
//# sourceMappingURL=const-interface.service.js.map

/***/ })

});
//# sourceMappingURL=6.js.map