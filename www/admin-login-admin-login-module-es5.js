(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-login-admin-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-login/admin-login.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-login/admin-login.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminLoginAdminLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"auto\">\n          <img alt=\"logo\" height=\"100\" src=\"../../assets/img/uofsclogo.jpg\">\n        </ion-col>\n        <ion-col>\n          <ion-grid>\n            <ion-row>\n              <ion-col> \n                <ion-text>Welcome to the</ion-text>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-text><h1>Koger Center</h1></ion-text>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-title color = \"primary\">Admin Login</ion-title>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <form class=\"form\" [formGroup]=\"validations_form\" (ngSubmit)=\"loginUser(validations_form.value)\">\n    \n    <!--Reads in email and outputs errors if not correct format or not filled out-->\n    <ion-item>\n      <ion-label position = \"floating\" color=\"primary\">Email</ion-label>\n      <ion-input type=\"text\" formControlName = \"email\"></ion-input>\n    </ion-item>\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"ion-align-self-start\" size=\"auto\">\n          <div class = \"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.email\">\n            <div class=\"error-message\"\n              *ngIf = \"validations_form.get('email').hasError(validation.type) && (validations_form.get('email').dirty || validations_form.get('email').touched)\">\n              {{ validation.message }}\n            </div>\n            </ng-container>\n         </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <!--Reads in password and outputs errors if not correct format or not filled out-->\n    <ion-item>\n      <ion-label position = \"floating\" color=\"primary\">Password</ion-label>\n      <ion-input type=\"password\" formControlName = \"password\" class=\"form-controll\" required></ion-input>\n    </ion-item>\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"ion-align-self-start\" size=\"auto\">\n          <div class = \"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.password\">\n              <div class=\"error-message\"\n             *ngIf = \"validations_form.get('password').hasError(validation.type) && (validations_form.get('password').dirty || validations_form.get('password').touched)\">\n              {{ validation.message }}\n              </div>\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"ion-align-self-start\">\n          <!-- If form is not valid then log in button is not clickable -->\n          <ion-button class=\"submit-btn\" type=\"submit\" [disabled]=\"!validations_form.valid\" expand=\"block\">Log In</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <label class=\"error-message\">{{errorMessage}}</label>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/admin-login/admin-login-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/admin-login/admin-login-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: AdminLoginPageRoutingModule */

    /***/
    function srcAppAdminLoginAdminLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminLoginPageRoutingModule", function () {
        return AdminLoginPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _admin_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./admin-login.page */
      "./src/app/admin-login/admin-login.page.ts");

      var routes = [{
        path: '',
        component: _admin_login_page__WEBPACK_IMPORTED_MODULE_3__["AdminLoginPage"]
      }];

      var AdminLoginPageRoutingModule = function AdminLoginPageRoutingModule() {
        _classCallCheck(this, AdminLoginPageRoutingModule);
      };

      AdminLoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AdminLoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/admin-login/admin-login.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/admin-login/admin-login.module.ts ***!
      \***************************************************/

    /*! exports provided: Tab3PageModule */

    /***/
    function srcAppAdminLoginAdminLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
        return Tab3PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _admin_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./admin-login.page */
      "./src/app/admin-login/admin-login.page.ts");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "./src/app/explore-container/explore-container.module.ts");
      /* harmony import */


      var _admin_login_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./admin-login-routing.module */
      "./src/app/admin-login/admin-login-routing.module.ts");

      var Tab3PageModule = function Tab3PageModule() {
        _classCallCheck(this, Tab3PageModule);
      };

      Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _admin_login_page__WEBPACK_IMPORTED_MODULE_6__["AdminLoginPage"]
        }]), _admin_login_routing_module__WEBPACK_IMPORTED_MODULE_8__["AdminLoginPageRoutingModule"]],
        declarations: [_admin_login_page__WEBPACK_IMPORTED_MODULE_6__["AdminLoginPage"]]
      })], Tab3PageModule);
      /***/
    },

    /***/
    "./src/app/admin-login/admin-login.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/admin-login/admin-login.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdminLoginAdminLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWxvZ2luL2FkbWluLWxvZ2luLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/admin-login/admin-login.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/admin-login/admin-login.page.ts ***!
      \*************************************************/

    /*! exports provided: AdminLoginPage */

    /***/
    function srcAppAdminLoginAdminLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminLoginPage", function () {
        return AdminLoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/authentication.service */
      "./src/app/services/authentication.service.ts");

      var AdminLoginPage = /*#__PURE__*/function () {
        function AdminLoginPage(navCtrl, authService, formBuilder) {
          _classCallCheck(this, AdminLoginPage);

          this.navCtrl = navCtrl;
          this.authService = authService;
          this.formBuilder = formBuilder;
          this.errorMessage = ''; // Error Messages

          this.validation_messages = {
            'email': [{
              type: 'required',
              message: 'Email is required.'
            }, {
              type: 'pattern',
              message: 'Please enter a valid email.'
            }],
            'password': [{
              type: 'required',
              message: 'Password is required.'
            }, {
              type: 'minLength',
              message: 'Password must be at least 5 characters'
            }]
          };
        }

        _createClass(AdminLoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validations_form = this.formBuilder.group({
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, // Pattern must match ___@___.___
              _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
            });
          }
        }, {
          key: "loginUser",
          value: function loginUser(value) {
            var _this = this;

            this.authService.loginUser(value).then(function (res) {
              console.log(res);
              console.log('Succesfully Logged In');
              _this.errorMessage = "";
              console.log("UID: " + _this.authService.userData.uid);
            }, function (err) {
              _this.errorMessage = err.message;
            });
          }
        }]);

        return AdminLoginPage;
      }();

      AdminLoginPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticateService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }];
      };

      AdminLoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./admin-login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-login/admin-login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./admin-login.page.scss */
        "./src/app/admin-login/admin-login.page.scss"))["default"]]
      })], AdminLoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=admin-login-admin-login-module-es5.js.map