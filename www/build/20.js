webpackJsonp([20],{

/***/ 334:
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
const ionic_angular_1 = __webpack_require__(6);
const logout_1 = __webpack_require__(391);
const shared_module_1 = __webpack_require__(58);
let LogoutPageModule = class LogoutPageModule {
};
LogoutPageModule = __decorate([
    core_1.NgModule({
        declarations: [logout_1.LogoutPage],
        imports: [ionic_angular_1.IonicPageModule.forChild(logout_1.LogoutPage), shared_module_1.SharedModule]
    })
], LogoutPageModule);
exports.LogoutPageModule = LogoutPageModule;
//# sourceMappingURL=logout.module.js.map

/***/ }),

/***/ 391:
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
let LogoutPage = class LogoutPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
};
LogoutPage = __decorate([
    core_1.Component({template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/logout/logout.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            USER LOGOUT\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    logout\n</ion-content>\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/logout/logout.html"*/
    }),
    __metadata("design:paramtypes", [ionic_angular_1.NavController])
], LogoutPage);
exports.LogoutPage = LogoutPage;
//# sourceMappingURL=logout.js.map

/***/ })

});
//# sourceMappingURL=20.js.map