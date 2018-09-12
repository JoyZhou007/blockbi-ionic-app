webpackJsonp([18],{

/***/ 337:
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
const personal_profile_1 = __webpack_require__(395);
let PersonalProfilePageModule = class PersonalProfilePageModule {
};
PersonalProfilePageModule = __decorate([
    core_1.NgModule({
        declarations: [
            personal_profile_1.PersonalProfilePage,
        ],
        imports: [
            ionic_angular_1.IonicPageModule.forChild(personal_profile_1.PersonalProfilePage),
        ],
    })
], PersonalProfilePageModule);
exports.PersonalProfilePageModule = PersonalProfilePageModule;
//# sourceMappingURL=personal-profile.module.js.map

/***/ }),

/***/ 395:
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
/**
 * Generated class for the PersonalProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
let PersonalProfilePage = class PersonalProfilePage {
    constructor(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad PersonalProfilePage');
    }
};
PersonalProfilePage = __decorate([
    core_1.Component({
        selector: 'page-personal-profile',template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/personal-profile/personal-profile.html"*/'<!--\n  Generated template for the PersonalProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>personal-profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/personal-profile/personal-profile.html"*/,
    }),
    __metadata("design:paramtypes", [ionic_angular_1.NavController, ionic_angular_1.NavParams])
], PersonalProfilePage);
exports.PersonalProfilePage = PersonalProfilePage;
//# sourceMappingURL=personal-profile.js.map

/***/ })

});
//# sourceMappingURL=18.js.map