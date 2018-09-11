webpackJsonp([3],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chefs_fridge_chefs_fridge__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_sign_in_sign_in__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, chefsFridge) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chefsFridge = chefsFridge;
        this.user = {};
    }
    SignupPage.prototype.signUp = function (user) {
        this.chefsFridge.SignUp(user.email, user.password, user.name, user.surname);
    };
    SignupPage.prototype.backToSignInPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_sign_in_sign_in__["a" /* SignInPage */]);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\mmakh\Desktop\chefsFridgeProject\chefsfridge\src\pages\signup\signup.html"*/'<ion-content padding >\n\n <!--  <div class="forms">\n\n  <img src="../../assets/imgs/logo1.png" alt="blank">\n\n  <ion-item class="list">\n\n    <ion-input type="text" placeholder="Name" [(ngModel)]="user.name"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item class="list">\n\n    <ion-input type="text" placeholder="Surname" [(ngModel)]="user.surname"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item class="list">\n\n      <ion-input type="text" placeholder="Email" [(ngModel)]="user.email"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item class="list">\n\n      <ion-input type="password" placeholder="Password" [(ngModel)]="user.password"></ion-input>\n\n  </ion-item>\n\n\n\n  <button ion-button block class="btn" (click)="signUp(user)">Sign Up</button>\n\n\n\n\n\n  <div>\n\n      <button class="privacy" ion-button clear>Privacy Policy</button>\n\n  </div>\n\n</div> -->\n\n\n\n<ion-content>\n\n  <div class="myHeader">\n\n      <img src="../../assets/imgs/signUplogo.PNG" class="myLogo1" (click)="backToSignInPage()">\n\n    </div>\n\n    \n\n    <div class="mySection1">\n\n        <ion-card class="mySignInCard">\n\n            <ion-card-header style="background-color:rgb(236, 170, 38); color:whitesmoke;font-weight:bold">\n\n              Sign up\n\n            </ion-card-header>\n\n            <ion-card-content style="position:relative;">\n\n                <ion-list>\n\n                    <ion-item>\n\n                      <ion-input type="text" placeholder="Name" [(ngModel)]="user.name"></ion-input>\n\n                    </ion-item>\n\n\n\n                    <ion-item>\n\n                          <ion-input type="text" placeholder="Surname"  [(ngModel)]="user.surname"></ion-input>\n\n                        </ion-item>\n\n\n\n                        <ion-item>\n\n                              <ion-input type="text" placeholder="Username"></ion-input>\n\n                            </ion-item>\n\n\n\n                        <ion-item>\n\n                              <ion-input type="text" placeholder="Email address"  [(ngModel)]="user.email"></ion-input>\n\n                            </ion-item>\n\n\n\n                            <ion-list>\n\n                                  <ion-item>\n\n                                    <ion-label>Gender</ion-label>\n\n                                    <ion-select [(ngModel)]="category">\n\n                                      <ion-option value="nes">Female</ion-option>\n\n                                      <ion-option value="n64">Male</ion-option>\n\n                                    </ion-select>\n\n                                  </ion-item>\n\n                                </ion-list>\n\n                                  <ion-list>\n\n                                          <ion-item>\n\n                                            <ion-label>Category</ion-label>\n\n                                            <ion-select [(ngModel)]="category">\n\n                                              <ion-option value="nes">Vegan</ion-option>\n\n                                              <ion-option value="n64">Vegetarien</ion-option>\n\n                                              <ion-option value="ps">Meat Lovers</ion-option>\n\n                                              \n\n                                            </ion-select>\n\n                                          </ion-item>\n\n                                        </ion-list>\n\n                               \n\n\n\n                    <ion-item>\n\n                      <ion-input type="password" placeholder="Password"  [(ngModel)]="user.password"></ion-input>\n\n                    </ion-item>\n\n\n\n                    <ion-item>\n\n                          <ion-input type="password" placeholder="Confirm password"></ion-input>\n\n                        </ion-item>\n\n                    <ion-item>\n\n                        <button ion-button block class="mySignInButton" (click)="signUp(user)">Sign up</button>                        \n\n                      </ion-item> \n\n                     \n\n                  </ion-list>\n\n            </ion-card-content>\n\n          </ion-card>\n\n      </div>\n\n      <div class="myFooter">\n\n         \n\n          <img src="../../assets/imgs/below.jpg" class="belowImage">\n\n        </div>\n\n       \n\n     \n\n</ion-content>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\mmakh\Desktop\chefsFridgeProject\chefsfridge\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_chefs_fridge_chefs_fridge__["a" /* ChefsFridgeProvider */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin/admin.module": [
		278,
		2
	],
	"../pages/sign-in/sign-in.module": [
		279,
		1
	],
	"../pages/signup/signup.module": [
		280,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminPage = /** @class */ (function () {
    function AdminPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AdminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminPage');
    };
    AdminPage.prototype.uploadImg = function () {
    };
    AdminPage.prototype.addRecipe = function () {
        firebase.database().ref('recipes/').push({
            category: "Meat Lover",
            sub_category: "Dinner",
            name: "Pan lasagne",
            image: this.image,
            ingredients: ['1 tbsp olive oil', '1 onion, finely sliced', '500g lean beef mince', '500g tomato and basil pasta sauce', 'large bunch basil, roughly chopped', '500g ricotta', '50g Parmesan, grated', '1 medium egg, beaten', '5 to 6 large lasagne sheets', '75g grated mozzarella'],
            directions: ['In a deep, ovenproof frying pan (about 23cm across the base), heat oil and fry onion and mince for 5 minutes until mince is brown and onion is soft. Stir in pasta sauce and half the fresh basil; simmer for 1 minute. Meanwhile, in a medium bowl, mix ricotta, Parmesan and egg, and some seasoning.', 'Scoop two-thirds of the mince mixture out of the pan into a bowl. Lay a single layer of lasagne sheets over the mince mixture in the pan (break sheets if needed). Spoon over one-third of ricotta mixture and a sprinkling of mozzarella. Repeat the layering twice more (using mince from bowl), finishing with ricotta on top and a sprinkling of grated mozzarella. Cover pan with a lid or baking tray, and simmer for 10 to 12 minutes. Preheat grill to high.', 'Once pasta is tender, put pan under grill for 3 to 5 minutes until golden. Sprinkle over remaining basil and some freshly ground pepper; serve.']
        });
    };
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin',template:/*ion-inline-start:"C:\Users\mmakh\Desktop\chefsFridgeProject\chefsfridge\src\pages\admin\admin.html"*/'<!--\n\n  Generated template for the AdminPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>admin</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-item>\n\n        <ion-input type="file" [(ngModel)]="image"></ion-input>\n\n      </ion-item>\n\n  <div>\n\n      <button ion-button (click)="addRecipe()">ADD Recipe</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mmakh\Desktop\chefsFridgeProject\chefsfridge\src\pages\admin\admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_chefs_fridge_chefs_fridge__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_sign_in_sign_in__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_admin_admin__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_sign_in_sign_in__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_admin_admin__["a" /* AdminPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_sign_in_sign_in__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_admin_admin__["a" /* AdminPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_chefs_fridge_chefs_fridge__["a" /* ChefsFridgeProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_sign_in_sign_in__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_sign_in_sign_in__["a" /* SignInPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\mmakh\Desktop\chefsFridgeProject\chefsfridge\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\mmakh\Desktop\chefsFridgeProject\chefsfridge\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\mmakh\Desktop\chefsFridgeProject\chefsfridge\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n \n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mmakh\Desktop\chefsFridgeProject\chefsfridge\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_signup_signup__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_chefs_fridge_chefs_fridge__ = __webpack_require__(78);
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
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignInPage = /** @class */ (function () {
    function SignInPage(navCtrl, navParams, chefsFridge) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chefsFridge = chefsFridge;
        this.user = {};
    }
    SignInPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignInPage');
    };
    SignInPage.prototype.userCreateAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_signup_signup__["a" /* SignupPage */]);
    };
    SignInPage.prototype.userSignIn = function (user) {
        this.chefsFridge.signIn(user.email, user.password);
    };
    SignInPage.prototype.userResetPassword = function () {
        this.chefsFridge.userResetPassword();
    };
    SignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-in',template:/*ion-inline-start:"C:\Users\mmakh\Desktop\chefsFridgeProject\chefsfridge\src\pages\sign-in\sign-in.html"*/'  <ion-content padding>\n\n  <ion-content>\n\n    <div class="myHeader">\n\n        <img src="../../assets/imgs/header.jpg" class="myHeaderImage">\n\n        <img src="../../assets/imgs/logo2.png" class="myLogo">\n\n      </div>\n\n      \n\n      <div class="mySection">\n\n          <ion-card class="mySignInCard">\n\n              <ion-card-header style="background-color:rgb(236, 170, 38); color:whitesmoke;font-weight:bold">\n\n                Sign in\n\n              </ion-card-header>\n\n              <ion-card-content style="position:relative;">\n\n                  <ion-list>\n\n                      <ion-item>\n\n                        <ion-input type="text" placeholder="email" [(ngModel)]="user.email"></ion-input>\n\n                      </ion-item>\n\n                      <ion-item>\n\n                        <ion-input type="password" placeholder="Password" [(ngModel)]="user.password"></ion-input>\n\n                      </ion-item>\n\n                      <ion-item>\n\n                          <button ion-button block class="mySignInButton" (click)="userSignIn(user)">Sign in</button>                        \n\n                        </ion-item> \n\n                        <p style="text-align:center; font-weight:bold; color: #a1c45a;" (click)="userResetPassword()"> Forgot password</p>\n\n                    </ion-list>\n\n              </ion-card-content>\n\n            </ion-card>\n\n        </div>\n\n        <div class="myFooter">\n\n            <p style="margin-left: 30%; font-weight:bold; color: rgb(236, 170, 38);" (click)="userCreateAccount()">Create account</p>\n\n            <img src="../../assets/imgs/below.jpg" class="belowImage">\n\n          </div>\n\n         \n\n       \n\n  </ion-content>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mmakh\Desktop\chefsFridgeProject\chefsfridge\src\pages\sign-in\sign-in.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_chefs_fridge_chefs_fridge__["a" /* ChefsFridgeProvider */]])
    ], SignInPage);
    return SignInPage;
}());

//# sourceMappingURL=sign-in.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChefsFridgeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var auth = firebase.auth();
/*
  Generated class for the ChefsFridgeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ChefsFridgeProvider = /** @class */ (function () {
    function ChefsFridgeProvider(http, loadingCtrl, toastCtrl, alertCtrl) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.user = {};
        console.log('Hello ChefsFridgeProvider Provider');
    }
    ChefsFridgeProvider.prototype.signIn = function (email, password) {
        var _this = this;
        firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
            var email = firebase.auth().currentUser.email;
            var password = firebase.auth().currentUser.password;
            //this.navCtrl.push(HomePage);
            var loader = _this.loadingCtrl.create({
                content: "please wait",
                duration: 3000
            });
            loader.present();
            setTimeout(function () {
                loader.dismiss();
            }, 5000);
        });
    };
    ChefsFridgeProvider.prototype.SignUp = function (email, password, name, surname) {
        var _this = this;
        return new Promise(function (reject, resolve) {
            //Create a user account with the email and password
            firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
                //add the default image for the user profile
                firebase.storage().ref().child('default profile.png').getDownloadURL().then(function (url) {
                    _this.url = url;
                    alert(url);
                });
                //signing the user in
                firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
                    var uid = firebase.auth().currentUser.uid;
                    //setting user info in the database
                    firebase.database().ref('users/' + uid + '/details').set({
                        name: name,
                        surname: surname,
                        email: email,
                        image: _this.url
                    });
                }, function (error) {
                    alert(error);
                });
            }, function (error) {
                var toast = _this.toastCtrl.create({
                    message: error,
                    duration: 3000
                });
                toast.present();
            });
        });
    };
    ChefsFridgeProvider.prototype.userResetPassword = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Reset password',
            message: "Please enter your email below...",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Email address'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Reset',
                    handler: function (data) {
                        console.log('email address is ' + data.email);
                        _this.resetPassword(data.email);
                    }
                }
            ]
        });
        prompt.present();
    };
    ChefsFridgeProvider.prototype.resetPassword = function (email) {
        auth.sendPasswordResetEmail(email).then(function () {
        }).catch(function (error) {
            // An error happened.
        });
    };
    ChefsFridgeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], ChefsFridgeProvider);
    return ChefsFridgeProvider;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=chefs-fridge.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map