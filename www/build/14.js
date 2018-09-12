webpackJsonp([14],{

/***/ 340:
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
const public_albums_1 = __webpack_require__(357);
let PublicAlbumsComponentModule = class PublicAlbumsComponentModule {
};
PublicAlbumsComponentModule = __decorate([
    core_1.NgModule({
        declarations: [
            public_albums_1.PublicAlbumsComponent,
        ],
        imports: [
            ionic_angular_1.IonicPageModule.forChild(public_albums_1.PublicAlbumsComponent),
        ],
    })
], PublicAlbumsComponentModule);
exports.PublicAlbumsComponentModule = PublicAlbumsComponentModule;
//# sourceMappingURL=public-albums.module.js.map

/***/ }),

/***/ 357:
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
const photo_library_1 = __webpack_require__(358);
/**
 * Generated class for the PublicAlbumsComponent page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let PublicAlbumsComponent = class PublicAlbumsComponent {
    constructor(navCtrl, photoLibrary, navParams) {
        this.navCtrl = navCtrl;
        this.photoLibrary = photoLibrary;
        this.navParams = navParams;
        this.imageArray = [];
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad PublicAlbumsComponent');
        this.photoLibrary.requestAuthorization().then(() => {
            this.photoLibrary.getLibrary().subscribe({
                next: library => {
                    console.log('&&&&&&&&&&&&&', library);
                    this.imageArray = library;
                },
                error: err => {
                    console.log('could not get photos');
                },
                complete: () => {
                    console.log('done getting photos');
                }
            });
        })
            .catch(err => console.log('permissions weren\'t granted'));
    }
};
PublicAlbumsComponent = __decorate([
    core_1.Component({
        selector: 'page-public-albums',template:/*ion-inline-start:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/public-albums/public-albums.html"*/'<!--\n  Generated template for the PublicAlbumsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>public-albums</ion-title>\n    <span class="bi-icon-arrow" navPop></span>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngFor = "let img of imageArray">\n    <img src={{img.photoURL}} alt="" style="width: 40px;height: 40px">\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/zhouhuan/Documents/work/blockbi-app/src/pages/public-albums/public-albums.html"*/,
        providers: [photo_library_1.PhotoLibrary]
    }),
    __metadata("design:paramtypes", [ionic_angular_1.NavController,
        photo_library_1.PhotoLibrary,
        ionic_angular_1.NavParams])
], PublicAlbumsComponent);
exports.PublicAlbumsComponent = PublicAlbumsComponent;
//# sourceMappingURL=public-albums.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["CordovaFiniteObservable"] = CordovaFiniteObservable;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoLibrary", function() { return PhotoLibrary; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_core__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * @hidden
 *
 * Wraps method that returns an observable that can be completed. Provided opts.resultFinalPredicate dictates when the observable completes.
 */
function CordovaFiniteObservable(opts) {
    if (opts === void 0) { opts = {}; }
    opts.observable = true;
    return function (target, methodName, descriptor) {
        return {
            value: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var wrappedObservable = Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["e" /* wrap */])(this, methodName, opts).apply(this, args);
                return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
                    var wrappedSubscription = wrappedObservable.subscribe({
                        next: function (x) {
                            observer.next(opts.resultTransform ? x[opts.resultTransform] : x);
                            if (opts.resultFinalPredicate && x[opts.resultFinalPredicate]) {
                                observer.complete();
                            }
                        },
                        error: function (err) { observer.error(err); },
                        complete: function () { observer.complete(); }
                    });
                    return function () {
                        wrappedSubscription.unsubscribe();
                    };
                });
            },
            enumerable: true
        };
    };
}
/**
 * @name Photo Library
 * @description
 * The PhotoLibrary plugin allows access to photos from device by url. So you can use plain img tag to display photos and their thumbnails, and different 3rd party libraries as well.
 * Saving photos and videos to the library is also supported.
 * cdvphotolibrary urls should be trusted by Angular. See plugin homepage to learn how.
 *
 * @usage
 * ```typescript
 * import { PhotoLibrary } from '@ionic-native/photo-library';
 *
 * constructor(private photoLibrary: PhotoLibrary) { }
 *
 * this.photoLibrary.requestAuthorization().then(() => {
 *   this.photoLibrary.getLibrary().subscribe({
 *     next: library => {
 *       library.forEach(function(libraryItem) {
 *         console.log(libraryItem.id);          // ID of the photo
 *         console.log(libraryItem.photoURL);    // Cross-platform access to photo
 *         console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
 *         console.log(libraryItem.fileName);
 *         console.log(libraryItem.width);
 *         console.log(libraryItem.height);
 *         console.log(libraryItem.creationDate);
 *         console.log(libraryItem.latitude);
 *         console.log(libraryItem.longitude);
 *         console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
 *       });
 *     },
 *     error: err => { console.log('could not get photos'); },
 *     complete: () => { console.log('done getting photos'); }
 *   });
 * })
 * .catch(err => console.log('permissions weren\'t granted'));
 *
 * ```
 */
var PhotoLibrary = (function (_super) {
    __extends(PhotoLibrary, _super);
    function PhotoLibrary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieves library items. Library item contains photo metadata like width and height, as well as photoURL and thumbnailURL.
     * @param options {GetLibraryOptions} Optional, like thumbnail size and chunks settings.
     * @return {Observable<LibraryItem[]>} Returns library items. If appropriate option was set, will be returned by chunks.
     */
    PhotoLibrary.prototype.getLibrary = function (options) { return; };
    /**
     * Asks user permission to access photo library.
     * @param options {RequestAuthorizationOptions} Optional, like whether only read access needed or read/write.
     * @return { Promise<void>} Returns a promise that resolves when permissions are granted, and fails when not.
     */
    PhotoLibrary.prototype.requestAuthorization = function (options) { return; };
    /**
     * Returns list of photo albums on device.
     * @return {Promise<AlbumItem[]>} Resolves to list of albums.
     */
    PhotoLibrary.prototype.getAlbums = function () { return; };
    /**
     * Provides means to request URL of thumbnail, with specified size or quality.
     * @param photo {string | LibraryItem} Id of photo, or LibraryItem.
     * @param options {GetThumbnailOptions} Options, like thumbnail size or quality.
     * @return {Promise<string>} Resolves to URL of cdvphotolibrary schema.
     */
    PhotoLibrary.prototype.getThumbnailURL = function (photo, options) { return; };
    /**
     * Provides means to request photo URL by id.
     * @param photo {string | LibraryItem} Id or LibraryItem.
     * @param options {GetPhotoOptions} Optional options.
     * @return {Promise<string>} Resolves to URL of cdvphotolibrary schema.
     */
    PhotoLibrary.prototype.getPhotoURL = function (photo, options) { return; };
    /**
     * Returns thumbnail as Blob.
     * @param photo {string | LibraryItem} Id or LibraryItem.
     * @param options {GetThumbnailOptions} Options, like thumbnail size or quality.
     * @return {Promise<Blob>} Resolves requested thumbnail as blob.
     */
    PhotoLibrary.prototype.getThumbnail = function (photo, options) { return; };
    /**
     * Returns photo as Blob.
     * @param photo {string | LibraryItem} Id or LibraryItem.
     * @param options {GetPhotoOptions} Optional options.
     * @return {Promise<Blob>} Resolves requested photo as blob.
     */
    PhotoLibrary.prototype.getPhoto = function (photo, options) { return; };
    /**
     * Saves image to specified album. Album will be created if not exists.
     * LibraryItem that represents saved image is returned.
     * @param url {string} URL of a file, or DataURL.
     * @param album {AlbumItem | string} Name of an album or AlbumItem object.
     * @param options {GetThumbnailOptions} Options, like thumbnail size for resulting LibraryItem.
     * @return {Promise<LibraryItem>} Resolves to LibraryItem that represents saved image.
     */
    PhotoLibrary.prototype.saveImage = function (url, album, options) { return; };
    /**
     * Saves video to specified album. Album will be created if not exists.
     * @param url {string} URL of a file, or DataURL.
     * @param album {AlbumItem | string} Name of an album or AlbumItem object.
     * @return {Promise<void>} Resolves when save operation completes.
     */
    PhotoLibrary.prototype.saveVideo = function (url, album) { return; };
    PhotoLibrary.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    PhotoLibrary.ctorParameters = function () { return []; };
    __decorate([
        CordovaFiniteObservable({
            callbackOrder: 'reverse',
            resultFinalPredicate: 'isLastChunk',
            resultTransform: 'library'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"])
    ], PhotoLibrary.prototype, "getLibrary", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["a" /* Cordova */])({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], PhotoLibrary.prototype, "requestAuthorization", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["a" /* Cordova */])({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], PhotoLibrary.prototype, "getAlbums", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["a" /* Cordova */])({
            successIndex: 1,
            errorIndex: 2
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], PhotoLibrary.prototype, "getThumbnailURL", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["a" /* Cordova */])({
            successIndex: 1,
            errorIndex: 2
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], PhotoLibrary.prototype, "getPhotoURL", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["a" /* Cordova */])({
            successIndex: 1,
            errorIndex: 2
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], PhotoLibrary.prototype, "getThumbnail", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["a" /* Cordova */])({
            successIndex: 1,
            errorIndex: 2
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], PhotoLibrary.prototype, "getPhoto", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["a" /* Cordova */])({
            successIndex: 2,
            errorIndex: 3
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, Object]),
        __metadata("design:returntype", Promise)
    ], PhotoLibrary.prototype, "saveImage", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["a" /* Cordova */])({
            successIndex: 2,
            errorIndex: 3
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], PhotoLibrary.prototype, "saveVideo", null);
    PhotoLibrary = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["d" /* Plugin */])({
            pluginName: 'PhotoLibrary',
            plugin: 'cordova-plugin-photo-library',
            pluginRef: 'cordova.plugins.photoLibrary',
            repo: 'https://github.com/terikon/cordova-plugin-photo-library',
            install: 'ionic cordova plugin add cordova-plugin-photo-library --variable PHOTO_LIBRARY_USAGE_DESCRIPTION="To choose photos"',
            installVariables: ['PHOTO_LIBRARY_USAGE_DESCRIPTION'],
            platforms: ['Android', 'Browser', 'iOS']
        })
    ], PhotoLibrary);
    return PhotoLibrary;
}(__WEBPACK_IMPORTED_MODULE_0__ionic_native_core__["c" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=14.js.map