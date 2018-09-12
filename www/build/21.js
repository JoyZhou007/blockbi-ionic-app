webpackJsonp([21],{

/***/ 333:
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
const invite_people_1 = __webpack_require__(390);
let InvitePeopleModule = class InvitePeopleModule {
};
InvitePeopleModule = __decorate([
    core_1.NgModule({
        declarations: [invite_people_1.InvitePeopleComponent],
        imports: [
            ionic_angular_1.IonicPageModule.forChild(invite_people_1.InvitePeopleComponent)
        ],
    })
], InvitePeopleModule);
exports.InvitePeopleModule = InvitePeopleModule;
//# sourceMappingURL=invite-people.module.js.map

/***/ }),

/***/ 390:
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
const user_model_service_1 = __webpack_require__(57);
/**
 * Generated class for the InvitePeopleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
let InvitePeopleComponent = class InvitePeopleComponent {
    constructor(userModelService, nav, loadingCtrl, userService) {
        this.userModelService = userModelService;
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.inviteList = [{ email: '', errorText: '' }];
        this.emailList = [];
        this.email_error = {};
        //显示send按钮
        this.showSendBtn = false;
        console.log('Hello InvitePeopleComponent Component');
    }
    ngOnInit() {
        this.slides.lockSwipes(true);
    }
    /**
     * 点击添加邀请人输入框
     * @param {MouseEvent} event
     */
    clickAddInvitees(event) {
        event.stopPropagation();
        this.inviteList.push({ email: '', errorText: '' });
    }
    /**
     *  点击删除邀请人框
     * @param {MouseEvent} event
     * @param {number} i
     */
    clickDeleteInput(event, i) {
        event.stopPropagation();
        if (this.inviteList.hasOwnProperty(i)) {
            this.inviteList.splice(i, 1);
        }
    }
    /**
     * 点击发送
     */
    sendData(event) {
        event.stopPropagation();
        if (!this.checkValid()) {
            return false;
        }
        else {
            this.removeRepeat();
            let formData = [];
            formData = this.emailList.map((value) => {
                return { email: value };
            });
            this.userModelService.invitePeoples({
                data: formData,
                lang: this.userService.getLanguageNum()
            }, (response) => {
                if (response.status === 1) {
                    // this.inviteList = [{email: '', errorText: ''}];
                    this.presentLoading();
                    this.emailList = [];
                    this.showSendBtn = false;
                    this.nav.pop();
                }
                else {
                    // this.inviteList = [{email: '', errorText: ''}];
                    this.emailList = [];
                    this.email_error.show = true;
                    this.email_error.text = response.message;
                    setTimeout(() => {
                        this.email_error.show = false;
                    }, 1000);
                }
            });
        }
    }
    inputBlur(email) {
        let regEmail = /^[a-zA-Z0-9]+([._\\-]*[a-zA-Z0-9])*@([a-zA-Z0-9]+[-a-zA-Z0-9]*[a-zA-Z0-9]+.){1,63}[a-zA-Z0-9]+$/;
        if (!email) {
            return {
                valid: false,
                errorText: 'email is required'
            };
        }
        else if (!regEmail.test(email)) {
            return {
                valid: false,
                errorText: 'email is invalid'
            };
        }
        else {
            return {
                valid: true,
                errorText: ''
            };
        }
    }
    /**
     * 验证文本框正确性
     * @returns {boolean}
     */
    checkValid() {
        let result = true;
        let arr = [];
        this.inviteList.forEach((value, index, array) => {
            if (value.email) {
                arr.push(value);
            }
        });
        if (!arr.length) {
            arr = [{ email: '', errorText: '' }];
            result = false;
        }
        this.inviteList = arr;
        this.inviteList.forEach((value, index, array) => {
            if (!this.inputBlur(value.email.trim()).valid) {
                result = false;
                value.errorText = this.inputBlur(value.email).errorText;
            }
        });
        return result;
    }
    /**
     * 去掉重复的email
     */
    removeRepeat() {
        //去掉 重复
        this.emailList = this.inviteList.map((value) => {
            return value.email.trim();
        });
        this.emailList = this.emailList.filter((value, index, array) => {
            return array.indexOf(value) === index;
        });
    }
    /**
     * 点击按钮跳转到发送email页面
     * @param {MouseEvent} event
     */
    clickTurnEmail(event) {
        event.stopPropagation();
        this.slides.lockSwipes(false);
        this.slides.slideTo(1);
        this.slides.lockSwipes(true);
        this.showSendBtn = true;
    }
    /**
     * 加载器
     * 开始加载
     * @param content 内容
     * @param spinner
     */
    presentLoading(content) {
        if (!content) {
            content = 'Send Success';
        }
        this.loading = this.loadingCtrl.create({
            content: content,
            spinner: 'hide',
            duration: 500
        });
        this.loading.present();
    }
    clickTurnContact(event) {
        event.stopPropagation();
        // let contact: Contact = this.contacts.create();
        //
        // contact.name = new ContactName(null, 'Smith', 'John');
        // contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
        // contact.save().then(
        //   () => console.log('Contact saved!', contact),
        //   (error: any) => console.error('Error saving contact.', error)
        // );
    }
    /**
     * 返回前一页
     * @param {MouseEvent} event
     */
    clickToPrevPage(event) {
        event.stopPropagation();
        if (this.slides.getActiveIndex() !== 0) {
            this.slides.lockSwipes(false);
            this.slides.slidePrev();
            this.slides.lockSwipes(true);
        }
        else {
            this.nav.pop();
        }
    }
};
__decorate([
    core_1.ViewChild(ionic_angular_1.Slides),
    __metadata("design:type", ionic_angular_1.Slides)
], InvitePeopleComponent.prototype, "slides", void 0);
InvitePeopleComponent = __decorate([
    core_1.Component({
        selector: 'invite-people',template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/invite-people/invite-people.html"*/'<ion-header>\n  <ion-title class="g-header" text-center>\n    <button  float-start (click)="clickToPrevPage($event)">\n      <span class="bi-icon-arrow rotate90"></span>\n    </button>\n    INVITE PEOPLE\n    <a float-end (click)="sendData($event)" *ngIf="showSendBtn">send</a>\n  </ion-title>\n</ion-header>\n<ion-content class="invite-content">\n  <div text-left padding>INVITEE</div>\n  <ion-slides #slides>\n    <ion-slide>\n      <div text-left padding class="invite-tit">Type an email or phone number to invite</div>\n      <ion-list >\n        <ion-item-group>\n          <ion-item-divider color="light">\n            Select more way to invite people\n          </ion-item-divider>\n          <button ion-item>\n            <div class="bi-icon-from-contacts" item-start (click)="clickTurnContact($event)"></div>\n            From contacts\n          </button>\n          <button ion-item (click)="clickTurnEmail($event)">\n            <div class="bi-icon-share-a-link" item-start></div>\n            Share Links\n          </button>\n        </ion-item-group>\n      </ion-list>\n    </ion-slide>\n    <ion-slide>\n      <div *ngFor="let invite of inviteList;let i = index;" class="relative">\n        <ion-item >\n          <ion-input  type="text" value="" float-left\n                      [(ngModel)]="invite.email"\n                      placeholder="Fill in email"\n          ></ion-input>\n          <ion-icon class="bi-icon-delete" item-end *ngIf="inviteList.length > 1" (click)="clickDeleteInput($event, i)"></ion-icon>\n        </ion-item>\n        <div text-left class="input-error-msg default-error-padding"\n             [hidden]="!invite.errorText">{{invite.errorText}}\n        </div>\n      </div>\n\n      <div text-left class="input-error-msg default-error-padding"\n           *ngIf="email_error.show">{{email_error.text}}\n      </div>\n      <div text-left padding class="invite-tit">Type an email or phone number to invite</div>\n      <button ion-button block clear (click)="clickAddInvitees($event)">MORE INVITED PERSON</button>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/invite-people/invite-people.html"*/
    }),
    __param(3, core_1.Inject('user.service')),
    __metadata("design:paramtypes", [user_model_service_1.UserModelService,
        ionic_angular_1.NavController,
        ionic_angular_1.LoadingController, Object])
], InvitePeopleComponent);
exports.InvitePeopleComponent = InvitePeopleComponent;
//# sourceMappingURL=invite-people.js.map

/***/ })

});
//# sourceMappingURL=21.js.map