webpackJsonp([28],{

/***/ 330:
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
const forget_password_1 = __webpack_require__(217);
const ionic_angular_1 = __webpack_require__(6);
const shared_module_1 = __webpack_require__(58);
let ComponentsModule = class ComponentsModule {
};
ComponentsModule = __decorate([
    core_1.NgModule({
        declarations: [forget_password_1.ForgetPasswordComponent],
        imports: [
            ionic_angular_1.IonicPageModule.forChild(forget_password_1.ForgetPasswordComponent),
            shared_module_1.SharedModule,
        ],
        exports: [forget_password_1.ForgetPasswordComponent]
    })
], ComponentsModule);
exports.ComponentsModule = ComponentsModule;
//# sourceMappingURL=forget-password.module.js.map

/***/ })

});
//# sourceMappingURL=28.js.map