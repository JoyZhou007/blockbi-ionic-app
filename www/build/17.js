webpackJsonp([17],{

/***/ 338:
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
const personal_register_1 = __webpack_require__(396);
const ionic_angular_1 = __webpack_require__(6);
const shared_module_1 = __webpack_require__(58);
let PersonalRegisterModule = class PersonalRegisterModule {
};
PersonalRegisterModule = __decorate([
    core_1.NgModule({
        declarations: [personal_register_1.PersonalRegisterComponent],
        imports: [
            ionic_angular_1.IonicPageModule.forChild(personal_register_1.PersonalRegisterComponent),
            shared_module_1.SharedModule,
        ]
    })
], PersonalRegisterModule);
exports.PersonalRegisterModule = PersonalRegisterModule;
//# sourceMappingURL=personal-register.module.js.map

/***/ }),

/***/ 396:
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
const forbidden_username_directive_1 = __webpack_require__(110);
const user_model_service_1 = __webpack_require__(57);
/**
 * Generated class for the PersonalRegisterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
let PersonalRegisterComponent = class PersonalRegisterComponent {
    constructor(fb, loadingCtrl, nav, userModelService, userService, userStoreService) {
        this.fb = fb;
        this.loadingCtrl = loadingCtrl;
        this.nav = nav;
        this.userModelService = userModelService;
        this.userService = userService;
        this.userStoreService = userStoreService;
        this.code_error = {};
        this.isRegister = false;
        this.userData_alert = {};
        //错区消息提示
        this.confirmPwd_alert = {};
        this.phone_alert = {};
        this.tplAuthCodeList = ['', '', '', '', '', ''];
        this.authCodeLength = 0;
        this.currentTab = -1;
        console.log('Hello PersonalRegisterComponent Component');
    }
    get username() {
        return this.rForm.get('username');
    }
    get email() {
        return this.rForm.get('email');
    }
    get phone() {
        return this.rForm.get('phone');
    }
    //
    // get authCode() {
    //   return this.rForm.get('authCode');
    // }
    get password() {
        return this.rForm.get('password');
    }
    get confirmPwd() {
        return this.rForm.get('confirmPwd');
    }
    ngOnInit() {
        this.initForm();
        this.userData = {
            module: 0,
            pid: '',
            work_name: '',
            email: '',
            profile: '',
            password: '',
            phone: '',
            code: '',
            confirm_password: '',
            lang: this.userService.getLanguageNum()
        };
    }
    /**
     * 初始化form表单验证器
     */
    initForm() {
        let regEmail = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
        let regPhone = /^1\d{10}$/;
        // let regCode = /^[A-Za-z0-9_]{6}$/;
        this.rForm = this.fb.group({
            'username': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(12)])],
            'email': [null, forms_1.Validators.compose([forbidden_username_directive_1.forbiddenValidator(regEmail)])],
            'phone': [null, forms_1.Validators.compose([forms_1.Validators.required, forbidden_username_directive_1.forbiddenValidator(regPhone)])],
            'password': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(8), forms_1.Validators.maxLength(20)])],
            'confirmPwd': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(8), forms_1.Validators.maxLength(20)])],
        });
    }
    /**
     * 返回前一页
     * @param {MouseEvent} event
     */
    clickToPrevPage(event) {
        event.stopPropagation();
        if (this.slides.getActiveIndex() !== 0) {
            this.slides.slidePrev();
        }
        else {
            this.nav.pop();
        }
    }
    /**
     * 下一页
     * @param {any} event
     * @param email
     */
    clickToNextPage(event, email) {
        event.stopPropagation();
        if (event.keyCode === 13) {
            // this.slides.slideNext();
        }
        else if (event instanceof MouseEvent) {
            this.slides.slideNext();
        }
    }
    /**
     * 注册
     * @param {FormGroup} form
     */
    doRegister(form) {
        this.checkValid(form);
        if (form.valid) {
            console.log(1);
            this.userService.register(this.userData, (res) => {
                //注册成功
                if (res.status === 1) {
                    this.isRegister = true;
                }
                else {
                    this.userData_alert.text = res.message;
                    switch (res.data) {
                        case 0:
                            this.userData_alert.show = true;
                            this.userData_alert.text = 'code is incorrect.';
                            break;
                        case 1:
                            this.userData_alert.show = true;
                            this.userData_alert.text = res.message;
                            break;
                        case 2:
                            this.userData_alert.show = true;
                            this.userData_alert.text = res.message;
                            break;
                        case 3:
                            this.userData_alert.show = true;
                            this.userData_alert.text = res.message;
                            break;
                        case 5:
                            this.userData_alert.show = true;
                            this.userData_alert.text = res.message;
                            break;
                        case 6:
                            this.userData_alert.show = true;
                            this.userData_alert.text = res.message;
                            break;
                    }
                }
            }, 5000);
        }
    }
    /**
     * 点击获取手机验证码
     * @param {MouseEvent} event
     */
    clickSendAuthCode(event) {
        event.stopPropagation();
        if (!this.num) {
            this.userModelService.fetchRegisterCode({
                data: { means: this.userData.phone }
            }, (res) => {
                if (res.status === 1) {
                    this.num = 60;
                    let timer = setInterval(() => {
                        this.num--;
                        if (this.num == -1) {
                            clearInterval(timer);
                            this.num = 0;
                        }
                    }, 1000);
                    this.phone_alert.show = false;
                }
                else {
                    this.phone_alert.show = true;
                    this.phone_alert.text = 'send phone code failed! ';
                    setTimeout(() => {
                        this.phone_alert.show = false;
                    }, 1000);
                }
            });
        }
    }
    /**
     * 监听再次确认密码的输入值
     */
    compareOldPwd() {
        this.confirmPwd_alert.show = this.userData.password !== this.userData.confirm_password;
        this.confirmPwd_alert.text = 'password mismatch.';
    }
    /**
     * 注册前检查错误信息
     * @param {FormGroup} form
     */
    checkValid(form) {
        let errList = [];
        this.userData_alert.show = false;
        if (form.controls.username.invalid) {
            errList.push('username');
            this.userData_alert.show = true;
        }
        if (form.controls.email.invalid) {
            errList.push('email');
            this.userData_alert.show = true;
        }
        if (form.controls.phone.invalid) {
            errList.push('phone');
            this.userData_alert.show = true;
        }
        if (form.controls.password.invalid) {
            errList.push('password');
            this.userData_alert.show = true;
        }
        if (form.controls.confirmPwd.invalid) {
            errList.push('password');
            this.userData_alert.show = true;
        }
        // if (form.controls.authCode.invalid) {
        //   errList.push('auth code');
        //   this.userData_alert.show = true;
        // }
        if (!this.authCodeBlur()) {
            errList.push('auth code');
            this.userData_alert.show = true;
        }
        this.userData_alert.text = errList.join(',') + ' has error.';
    }
    /**
     * loading
     */
    presentLoading() {
        let loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
    }
    /**
     * 自动聚焦到下一个
     * @param event
     * @param i
     * @param input
     */
    autoTab(event, i, input) {
        if (event.keyCode === 8 && input.value === '') {
            if (i >= 1) {
                this.codeInput.toArray()[i - 1].nativeElement.focus();
                this.codeInput.toArray()[i - 1].nativeElement.select();
                if (this.authCodeLength > 0) {
                    this.authCodeLength--;
                }
            }
        }
        else if (input.value) {
            if (input.value.length > 1) {
                input.value = input.value.slice(0, 1);
            }
            let maxLength = this.codeInput.length;
            let totalLen = 0;
            if (maxLength) {
                let next;
                this.currentTab = i;
                this.codeInput.toArray().forEach((item, index) => {
                    if (i === index && i < (maxLength - 1) && !next) {
                        next = index + 1;
                    }
                    if (item.nativeElement.value != '') {
                        totalLen++;
                    }
                    if (index === next) {
                        item.nativeElement.focus();
                    }
                });
            }
            this.authCodeLength = totalLen;
        }
    }
    /**
     * 获取auth code 输入框的值
     * @returns {string}
     */
    fetchAuthCode() {
        let inputList = this.codeInput.toArray();
        let codeArr = [];
        for (let val of inputList) {
            codeArr.push(val.nativeElement.value);
        }
        this.userData.code = codeArr.join('');
        return codeArr.join('');
    }
    /**
     * 验证auth code
     * @returns {boolean}
     */
    authCodeBlur() {
        let code = this.fetchAuthCode();
        if (!code) {
            this.code_error.isShow = true;
            this.code_error.text = 'code is required.';
        }
        else if (code.length !== 6) {
            this.code_error.isShow = true;
            this.code_error.text = 'code is incorrect.';
        }
        else {
            this.code_error.isShow = false;
            return true;
        }
    }
};
__decorate([
    core_1.ViewChild(ionic_angular_1.Slides),
    __metadata("design:type", ionic_angular_1.Slides)
], PersonalRegisterComponent.prototype, "slides", void 0);
__decorate([
    core_1.ViewChildren('codeInput'),
    __metadata("design:type", core_1.QueryList)
], PersonalRegisterComponent.prototype, "codeInput", void 0);
PersonalRegisterComponent = __decorate([
    core_1.Component({template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/personal-register/personal-register.html"*/'<ion-header class="g-header register-header g-header-icon">\n  <ion-navbar>\n    <span class="bi-icon-arrow back-but" (click)="clickToPrevPage($event)"></span>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="register-content">\n  <form novalidate [formGroup]="rForm" *ngIf="!isRegister">\n    <ion-slides pager #Slides (ionChange)="checkValid($event, rForm)">\n      <!--work name-->\n      <ion-slide>\n        <div ion-text class="f9-f absolute register-title">SIGN UP YOUR ACCOUNT</div>\n        <ion-item class="item-input-style">\n          <ion-label class="work-name" floating>WORK NAME</ion-label>\n          <ion-input type="text" formControlName="username" [(ngModel)]="userData.work_name" class="f49-f"></ion-input>\n        </ion-item>\n        <div *ngIf="username.invalid && (username.dirty || username.touched)" text-left class="input-error-msg default-error-padding">\n          <div *ngIf="username.errors.required">name is required.</div>\n          <div *ngIf="username.errors.minlength || username.errors.maxlength">The length of the name must be between 2 and 12.</div>\n        </div>\n        <button class="next-but" (click)="clickToNextPage($event)">\n          <span class="bi-icon-arrow2 work-name"></span>\n        </button>\n      </ion-slide>\n\n      <!--phone-->\n      <ion-slide>\n        <div ion-text class="f9-f absolute register-title">SIGN UP YOUR ACCOUNT</div>\n        <ion-item class="item-input-style">\n          <ion-label class="personal-phone" floating>PERSONAL PHONE</ion-label>\n          <ion-input type="phone" formControlName="phone" [(ngModel)]="userData.phone" class="f49-f"></ion-input>\n        </ion-item>\n        <!--<ion-item>-->\n          <!--<ion-input placeholder="auth code" clearInput-->\n                     <!--[(ngModel)]="userData.code"-->\n                     <!--formControlName="authCode"-->\n\n          <!--&gt;</ion-input>-->\n        <!--</ion-item>-->\n        <ion-grid class="code-lst">\n          <ion-row>\n            <ion-col col-2 *ngFor="let num of tplAuthCodeList; let i=index;">\n              <input  #codeInput (keyup)="autoTab($event, i, codeInput)" (focus)="currentTab=i" maxlength="1" class="item-code-input" type="text">\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <div *ngIf="phone.invalid && (phone.dirty || phone.touched)" text-left class="input-error-msg default-error-padding">\n          <div *ngIf="phone.errors.required" color="danger">\n            phone is required.\n          </div>\n          <div *ngIf="phone.errors.forbidden" color="danger">\n            phone is not correct.\n          </div>\n        </div>\n\n        <div ion-text text-left padding color="danger" *ngIf="phone_alert.show">\n          {{phone_alert.text}}\n        </div>\n        <button class="next-but" (click)="clickToNextPage($event)">\n          <span class="bi-icon-arrow2 personal-phone"></span>\n        </button>\n        <div padding *ngIf="phone.valid">\n          <button ion-button disabled="{{num}}" clear block (click)="clickSendAuthCode($event)">\n            {{num? num +\' s\' : \'send auth code\'}}\n          </button>\n        </div>\n      </ion-slide>\n\n      <!--email-->\n      <ion-slide>\n        <div ion-text class="f9-f absolute register-title">SIGN UP YOUR ACCOUNT</div>\n        <ion-item class="item-input-style">\n          <ion-label class="personal-mail" floating>PERSONAL EMAIl</ion-label>\n          <ion-input type="email" formControlName="email" [(ngModel)]="userData.email" class="f49-f"></ion-input>\n        </ion-item>\n        <div *ngIf="email.invalid && (email.dirty || email.touched)"\n             class="alert alert-danger">\n          <!--<div *ngIf="email.errors.required" ion-text text-left padding color="danger">-->\n          <!--email is required.-->\n          <!--</div>-->\n          <div *ngIf="email.errors.forbidden" ion-text text-left padding color="danger">\n            Email is not correct.\n          </div>\n        </div>\n        <button class="next-but" (click)="clickToNextPage($event)">\n          <span class="bi-icon-arrow2 personal-mail"></span>\n        </button>\n      </ion-slide>\n\n      <!--password-->\n      <ion-slide>\n        <div ion-text class="f9-f absolute register-title">SIGN UP YOUR ACCOUNT</div>\n        <ion-item class="item-input-style">\n          <ion-label class="password" floating>PASSWORD</ion-label>\n          <ion-input type="password" [(ngModel)]="userData.password" formControlName="password" class="f49-f"></ion-input>\n        </ion-item>\n        <ion-item class="item-again item-input-style">\n          <ion-label floating class="again-item" floating>Again</ion-label>\n          <ion-input  type="password" formControlName="confirmPwd" [(ngModel)]="userData.confirm_password" (keyup)="compareOldPwd()" class="f49-f"></ion-input>\n          <span class="bi-icon-arrow2 password" (click)="clickToNextPage($event)"></span>\n        </ion-item>\n\n        <div *ngIf="password.invalid && (password.dirty || password.touched)" text-left class="input-error-msg default-error-padding">\n          <div *ngIf="password.errors.required" color="danger">password is required.</div>\n          <div *ngIf="password.errors.minlength || password.errors.maxlength">The length of the password must be between 8 and 20.</div>\n        </div>\n        <div text-left class="input-error-msg default-error-padding" *ngIf="confirmPwd_alert.show">{{confirmPwd_alert.text}}</div>\n          <button class="next-but password-but" (click)="clickToNextPage($event)">\n              <span class="bi-icon-arrow2 password"></span>\n          </button>\n      </ion-slide>\n\n\n      <ion-slide>\n        <div ion-text class="f9-f absolute register-title">SIGN UP YOUR ACCOUNT</div>\n          <ion-label class="register-phone item-photo" text-start floating>YOUR PHOTO</ion-label>\n          <ion-card padding>\n              <ion-card-content><img src="assets/icon/bi-logo.png" alt="" style="width: 100%;"></ion-card-content>\n          </ion-card>\n          <div text-left class="input-error-msg default-error-padding" *ngIf="userData_alert.show">{{userData_alert.text}}</div>\n          <button ion-button round outline (click)="doRegister(rForm)" class="register-phone item-photo-but">JUMP IT</button>\n      </ion-slide>\n    </ion-slides>\n  </form>\n\n  <div *ngIf="isRegister">\n    <ion-card padding>\n      <ion-card-content><img src="assets/image/monkey-icon1.png" alt=""></ion-card-content>\n    </ion-card>\n    <div padding ion-text text-center color="primary">Congratulation !!!</div>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/personal-register/personal-register.html"*/
    }),
    __param(4, core_1.Inject('user.service')),
    __param(5, core_1.Inject('user-store.service')),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        ionic_angular_1.LoadingController,
        ionic_angular_1.NavController,
        user_model_service_1.UserModelService, Object, Object])
], PersonalRegisterComponent);
exports.PersonalRegisterComponent = PersonalRegisterComponent;
//# sourceMappingURL=personal-register.js.map

/***/ })

});
//# sourceMappingURL=17.js.map