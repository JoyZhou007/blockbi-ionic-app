webpackJsonp([22],{

/***/ 331:
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
const guide_1 = __webpack_require__(387);
const ionic_angular_1 = __webpack_require__(6);
let GuideModule = class GuideModule {
};
GuideModule = __decorate([
    core_1.NgModule({
        declarations: [guide_1.GuideComponent],
        imports: [
            ionic_angular_1.IonicPageModule.forChild(guide_1.GuideComponent),
        ],
        exports: [guide_1.GuideComponent]
    })
], GuideModule);
exports.GuideModule = GuideModule;
//# sourceMappingURL=guide.module.js.map

/***/ }),

/***/ 387:
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
/**
 * Generated class for the GuideComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
let GuideComponent = class GuideComponent {
    constructor() {
        console.log('Hello GuideComponent Component');
        this.text = 'Hello World';
    }
};
GuideComponent = __decorate([
    core_1.Component({template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/guide/guide.html"*/'\n<ion-content>\n  <ion-slides>\n    <ion-slide>\n      <div ion-text color="primary" padding text-left>… …\n        Hi!  that is great to help you to improve efficiency.\n        we can always track our task in everywhere.\n        Let us to save more time to travel…</div>\n      <ion-card>\n        <ion-card-content>\n          <div class="bi-icon-logo login-log"></div>\n        </ion-card-content>\n      </ion-card>\n    </ion-slide>\n    <ion-slide>\n      <ion-card>\n        <ion-card-content>\n          <div class="bi-icon-logo login-log"></div>\n        </ion-card-content>\n      </ion-card>\n      <div ion-text color="primary" padding text-left>I don\'t want my business colleague or cooperator to see my personal moments, we need to separate work and life… now i finally find it to solve it </div>\n    </ion-slide>\n    <ion-slide>\n      <div ion-text color="primary" padding text-left>Oost saving !!!\n        everyting in my control, you dont need to\n        hire more staff, it will analyze what is reasonable arragment.\n      </div>\n      <ion-card>\n        <ion-card-content>\n          <div class="bi-icon-logo login-log"></div>\n        </ion-card-content>\n      </ion-card>\n      <button ion-button outline block round [navPush]="\'login\'">BEGIN</button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/guide/guide.html"*/
    }),
    __metadata("design:paramtypes", [])
], GuideComponent);
exports.GuideComponent = GuideComponent;
//# sourceMappingURL=guide.js.map

/***/ })

});
//# sourceMappingURL=22.js.map