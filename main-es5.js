(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "++gc":
    /*!***************************************************!*\
      !*** ./src/app/services/common/common.service.ts ***!
      \***************************************************/

    /*! exports provided: CommonService */

    /***/
    function gc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonService", function () {
        return CommonService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CommonService = /*#__PURE__*/function () {
        function CommonService() {
          _classCallCheck(this, CommonService);
        }

        _createClass(CommonService, [{
          key: "loadScript",
          value: function loadScript() {// let scriptContainer = document.getElementById('dynamic-js')
            // scriptContainer.innerHTML = ""
            // let script = document.createElement('script');
            // script.type = 'text/javascript';
            // script.src = "assets/dist/js/adminlte.js";
            // scriptContainer.appendChild(script)
          }
        }, {
          key: "loadAdminLteScript",
          value: function loadAdminLteScript() {
            var scriptContainer = document.getElementById('dynamic-js');
            scriptContainer.innerHTML = "";
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = "assets/dist/js/adminlte.js";
            scriptContainer.appendChild(script);
          }
        }]);

        return CommonService;
      }();

      CommonService.??fac = function CommonService_Factory(t) {
        return new (t || CommonService)();
      };

      CommonService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: CommonService,
        factory: CommonService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CommonService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "+Chl":
    /*!***********************************************************!*\
      !*** ./src/app/services/userwallet/userwallet.service.ts ***!
      \***********************************************************/

    /*! exports provided: UserwalletService */

    /***/
    function Chl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserwalletService", function () {
        return UserwalletService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../web-request/web-request.service */
      "fYgw");

      var UserwalletService = /*#__PURE__*/function () {
        function UserwalletService(webReqService) {
          _classCallCheck(this, UserwalletService);

          this.webReqService = webReqService;
        }

        _createClass(UserwalletService, [{
          key: "getUserWallets",
          value: function getUserWallets(userId) {
            return this.webReqService.get('wallet/userwallet/' + userId);
          }
        }]);

        return UserwalletService;
      }();

      UserwalletService.??fac = function UserwalletService_Factory(t) {
        return new (t || UserwalletService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"]));
      };

      UserwalletService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: UserwalletService,
        factory: UserwalletService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserwalletService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "/cyv":
    /*!***************************************************!*\
      !*** ./src/app/services/wallet/wallet.service.ts ***!
      \***************************************************/

    /*! exports provided: WalletService */

    /***/
    function cyv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WalletService", function () {
        return WalletService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../web-request/web-request.service */
      "fYgw");

      var WalletService = /*#__PURE__*/function () {
        function WalletService(webReqService) {
          _classCallCheck(this, WalletService);

          this.webReqService = webReqService;
        }

        _createClass(WalletService, [{
          key: "getWalletTransactions",
          value: function getWalletTransactions() {
            return this.webReqService.get('wallet');
          }
        }, {
          key: "getWalletTransaction",
          value: function getWalletTransaction(trasactionId) {
            return this.webReqService.get("wallet/".concat(trasactionId));
          }
        }, {
          key: "createWallet",
          value: function createWallet(userselectid, debit, credit, naration) {
            var payload = {
              userselectid: userselectid,
              debit: debit,
              credit: credit,
              naration: naration
            }; // We want to send a web request to create a list

            return this.webReqService.post('wallet/addWallet', payload);
          }
        }, {
          key: "createNewWallet",
          value: function createNewWallet(userselectid, type, amount) {
            var payload = {
              userselectid: userselectid,
              type: type,
              amount: amount
            };
            return this.webReqService.post('wallet/addWalletByAdmin', payload);
          }
        }, {
          key: "updateUser",
          value: function updateUser(trasactionId, username, email, password, phone) {
            // We want to send a web request to update a list
            return this.webReqService.patch("wallet/".concat(trasactionId), {
              username: username,
              email: email,
              password: password,
              phone: phone
            });
          }
        }, {
          key: "deleteUser",
          value: function deleteUser(id) {
            console.log(id);
            return this.webReqService["delete"]("wallet/".concat(id));
          }
        }]);

        return WalletService;
      }();

      WalletService.??fac = function WalletService_Factory(t) {
        return new (t || WalletService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"]));
      };

      WalletService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: WalletService,
        factory: WalletService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WalletService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\Work\Node\Syscodetech\zpays\zpay_dashboard\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "16kr":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/member/list-member/list-member.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ListMemberComponent */

    /***/
    function kr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListMemberComponent", function () {
        return ListMemberComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../appheader/appheader.component */
      "VkP/");
      /* harmony import */


      var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../appmenu/appmenu.component */
      "HgAV");
      /* harmony import */


      var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../appfooter/appfooter.component */
      "FFBd");
      /* harmony import */


      var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../appsetting/appsetting.component */
      "gkWW");

      var ListMemberComponent = /*#__PURE__*/function () {
        function ListMemberComponent() {
          _classCallCheck(this, ListMemberComponent);
        }

        _createClass(ListMemberComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ListMemberComponent;
      }();

      ListMemberComponent.??fac = function ListMemberComponent_Factory(t) {
        return new (t || ListMemberComponent)();
      };

      ListMemberComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ListMemberComponent,
        selectors: [["app-list-member"]],
        decls: 40,
        vars: 0,
        consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header"], [1, "card-title"], [1, "card-tools"], ["href", "/member-add", 1, "btn", "btn-success", "btn-sm"], [1, "card-body"], ["id", "example1", 1, "table", "table-bordered", "table-striped"]],
        template: function ListMemberComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-appheader");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-appmenu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Member Listing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "table", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Sr. No.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Member Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Mobile No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Success Full Recharge");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Total Cash Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Balance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "PG gateway At");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Admin Add Money");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "View Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Last");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "app-appfooter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "app-appsetting");
          }
        },
        directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_1__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_2__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_3__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_4__["AppsettingComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LW1lbWJlci5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ListMemberComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-list-member',
            templateUrl: './list-member.component.html',
            styleUrls: ['./list-member.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "3QZ1":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/wallet/wallet-add/wallet-add.component.ts ***!
      \*****************************************************************/

    /*! exports provided: WalletAddComponent */

    /***/
    function QZ1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WalletAddComponent", function () {
        return WalletAddComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/user/users.service */
      "WS/y");
      /* harmony import */


      var src_app_services_wallet_wallet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/wallet/wallet.service */
      "/cyv");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../appheader/appheader.component */
      "VkP/");
      /* harmony import */


      var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../appmenu/appmenu.component */
      "HgAV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../appfooter/appfooter.component */
      "FFBd");
      /* harmony import */


      var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../appsetting/appsetting.component */
      "gkWW");

      function WalletAddComponent_span_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r0.users[0].name);
        }
      }

      function WalletAddComponent_option_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var user_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", user_r5._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate2"](" ", user_r5.name, " (", user_r5.phone, ") ");
        }
      } // import { FormsModule } from '@angular/forms';


      var WalletAddComponent = /*#__PURE__*/function () {
        function WalletAddComponent(usersService, walletService, router) {
          _classCallCheck(this, WalletAddComponent);

          this.usersService = usersService;
          this.walletService = walletService;
          this.router = router;
        }

        _createClass(WalletAddComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            $("#type-select").selectpicker();
            this.InitMethod();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            $('.user-list').selectpicker();
          }
        }, {
          key: "InitMethod",
          value: function InitMethod() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var u;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.userData();

                    case 2:
                      u = _context.sent;
                      this.users = JSON.parse(JSON.stringify(u));

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "userData",
          value: function userData() {
            var _this = this;

            return new Promise(function (resolve, reject) {
              _this.usersService.getUsers().subscribe(function (users) {
                resolve(users.data);
              });
            });
          }
        }, {
          key: "createWallet",
          value: function createWallet(userselectid, type, amount) {
            var _this2 = this;

            if (!userselectid || userselectid.trim() == "") {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Please select a user to proceed');
              return false;
            }

            if (!type || type.trim() == "") {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Please select a transaction type');
              return false;
            }

            if (amount || amount.trim() !== "") {
              if (parseFloat(amount) <= 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Amount should be greater than 0');
                return false;
              }
            }

            this.walletService.createNewWallet(userselectid, type, amount).subscribe(function (response) {
              console.log(response);
              var wallet = JSON.parse(JSON.stringify(response));

              if (wallet.success == true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire(wallet.msg, '', 'success');
              } // Now we navigate to /users/user._id


              _this2.router.navigate(['/user-wallet/' + userselectid]);
            });
          }
        }, {
          key: "createWallet_backup",
          value: function createWallet_backup(userselectid, debit, credit, naration) {
            var _this3 = this;

            if (!userselectid || userselectid.trim() == "") {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Please select a user to proceed');
              return false;
            }

            if (debit || debit.trim() !== "") {
              if (parseFloat(debit) <= 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Debit should be greater than 0');
                return false;
              }
            }

            if (credit || credit.trim() !== "") {
              if (parseFloat(credit) <= 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Credit should be greater than 0');
                return false;
              }
            }

            if ((!debit || debit.trim() == "") && (!credit || credit.trim() == "")) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Please enter credit or debit to proceed');
              return false;
            }

            if (!naration || naration.trim() == "") {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Please narate the transaction');
              return false;
            }

            this.walletService.createWallet(userselectid, debit, credit, naration).subscribe(function (response) {
              console.log(response);
              var wallet = JSON.parse(JSON.stringify(response));

              if (wallet.success == true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire(wallet.msg, '', 'success');
              } // Now we navigate to /users/user._id


              _this3.router.navigate(['/user-wallet/' + userselectid]);
            });
          }
        }, {
          key: "saverange",
          value: function saverange(value) {
            console.log(value);
            var users = this.users;
            var user = users.find(function (e) {
              return e['_id'] === value;
            }); // for (var i = 0; i < users.length; i++) {
            // look for the entry with a matching `code` value
            // if (users[i]._id == value) {
            //   // we found it
            //   console.log(users[i])
            //   console.log(users[i].walletBalance)
            //   this.walletBalance = users[i].walletBalance
            // }
            // }

            this.walletBalance = user['walletBalance'];
            console.log(user);
          }
        }]);

        return WalletAddComponent;
      }();

      WalletAddComponent.??fac = function WalletAddComponent_Factory(t) {
        return new (t || WalletAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_wallet_wallet_service__WEBPACK_IMPORTED_MODULE_4__["WalletService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      WalletAddComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: WalletAddComponent,
        selectors: [["app-wallet-add"]],
        decls: 48,
        vars: 3,
        consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header", "with-border"], [1, "card-title"], [1, "card-body"], [1, "row", "clearfix"], [1, "col-md-6"], ["for", "user_id", 1, "control-label"], [2, "color", "red"], ["style", "display: none;", 4, "ngIf"], [1, "form-group"], ["name", "userselectid", "data-live-search", "true", 1, "form-control", "user-list", 3, "change"], ["userselectid", ""], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "type", 1, "control-label"], ["name", "type", "id", "type-select", 1, "form-control"], ["type", ""], ["value", "credit"], ["value", "debit"], ["for", "Credit", 1, "control-label"], ["type", "number", "min", "0", "name", "amount", "value", "", "id", "amount", 1, "form-control"], ["amount", ""], [1, "card-footer"], [1, "btn", "btn-success", 3, "click"], [1, "fa", "fa-check"], [2, "display", "none"], [3, "value"]],
        template: function WalletAddComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-appheader");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "app-appmenu");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Wallet Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "User Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](17, WalletAddComponent_span_17_Template, 2, 1, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "select", 14, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("change", function WalletAddComponent_Template_select_change_19_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r6);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](20);

              return ctx.saverange(_r1.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, " Select User ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](23, WalletAddComponent_option_23_Template, 2, 3, "option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "Select Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "select", 19, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "-Select Type-");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "Credit");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](35, "Debit");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](40, "input", 24, 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function WalletAddComponent_Template_button_click_43_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r6);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](20);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](29);

              var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](41);

              return ctx.createWallet(_r1.value, _r3.value, _r4.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](44, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, " Save ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](46, "app-appfooter");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](47, "app-appsetting");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Balance: ", ctx.walletBalance, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.users.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.users);
          }
        },
        directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_6__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_7__["AppmenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_9__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_10__["AppsettingComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YWxsZXQtYWRkLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](WalletAddComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-wallet-add',
            templateUrl: './wallet-add.component.html',
            styleUrls: ['./wallet-add.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]
          }, {
            type: src_app_services_wallet_wallet_service__WEBPACK_IMPORTED_MODULE_4__["WalletService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "6KO4":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/operator/list-operator/list-operator.component.ts ***!
      \*************************************************************************/

    /*! exports provided: ListOperatorComponent */

    /***/
    function KO4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListOperatorComponent", function () {
        return ListOperatorComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");
      /* harmony import */


      var src_app_services_operator_operator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/operator/operator.service */
      "lQHH");
      /* harmony import */


      var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/common/common.service */
      "++gc");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../appheader/appheader.component */
      "VkP/");
      /* harmony import */


      var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../appmenu/appmenu.component */
      "HgAV");
      /* harmony import */


      var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../appfooter/appfooter.component */
      "FFBd");
      /* harmony import */


      var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../appsetting/appsetting.component */
      "gkWW");

      var DATATABLE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].dataTableUri;

      var ListOperatorComponent = /*#__PURE__*/function () {
        // constructor(private taskService: TaskService, private router: Router) { }
        function ListOperatorComponent(operatorService, ngZone, common, route, router) {
          _classCallCheck(this, ListOperatorComponent);

          this.operatorService = operatorService;
          this.ngZone = ngZone;
          this.common = common;
          this.route = route;
          this.router = router;
        }

        _createClass(ListOperatorComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {// $("#operator-list").DataTable()
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            window['angularComponentReference'] = {
              component: this,
              zone: this.ngZone,
              onDeleteOperatorClick: function onDeleteOperatorClick(id) {
                return _this4.onDeleteOperatorClick(id);
              },
              enableEdit: function enableEdit(id, _id, value, value1, value2) {
                return _this4.enableEdit(id, _id, value, value1, value2);
              },
              updateOperator: function updateOperator(id, _id, value) {
                return _this4.updateOperator(id, _id, value);
              }
            };
            this.operatorService.getOperators().subscribe(function (response) {
              _this4.operators = JSON.parse(JSON.stringify(response));
            });
            this.loadDataTable();
          }
        }, {
          key: "loadDataTable",
          value: function loadDataTable() {
            $('#operator-list').DataTable({
              bDestroy: true,
              ajax: {
                url: "".concat(DATATABLE_URL, "/operatorList")
              },
              columns: [{
                data: "sl_no"
              }, {
                data: "operatorCode"
              }, {
                data: "operatorName"
              }, {
                data: "operatorType"
              }, {
                data: "zpayCashback",
                render: function render(a, b, c, d) {
                  if (a == 0) {
                    a = '';
                  }

                  return "<div id=\"z_cashback_container-".concat(c.sl_no, "\" ><label>").concat(a, "</label></div>");
                }
              }, {
                data: 'customerCashback',
                render: function render(a, b, c, d) {
                  if (a == 0) {
                    a = '';
                  }

                  return "<div id=\"c_cashback_container-".concat(c.sl_no, "\" ><label>").concat(a, "</label></div>");
                }
              }, {
                data: "status",
                render: function render(a, b, c, d) {
                  var bg = 'brown';

                  if (a == "Active" || a == 'active') {
                    bg = "green";
                  }

                  return "<div id=\"status-".concat(c.sl_no, "\">\n              <span style=\"color:").concat(bg, "\">").concat(a, "</span>\n            </div>");
                }
              }, {
                data: "_id",
                render: function render(a, b, c, d) {
                  return "<div id=\"btn-".concat(c.sl_no, "\">\n            <a href=\"javascript:void(0)\" onclick=\"enableEdit('").concat(c.sl_no, "','").concat(c._id, "','").concat(c.operatorCode, "','").concat(c.zpayCashback, "','").concat(c.customerCashback, "')\" class=\"btn btn-info btn-xs\"><span class=\"fa fa-pencil\"></span> Edit</a>\n            </div>");
                }
              }]
            });
          }
        }, {
          key: "enableEdit",
          value: function enableEdit(id, _id, value, value1, value2) {
            if (value1 == 0) {
              value1 = '';
            }

            if (value2 == 0) {
              value2 = '';
            }

            $("#btn-" + id).html(" <a href=\"javascript:void(0)\" onclick=\"updateOperator('".concat(id, "','").concat(_id, "','").concat(value, "')\" class=\"btn btn-primary btn-xs\"><span class=\"fa fa-pencil\"></span> Update</a>"));
            $("#z_cashback_container-" + id).html("<input type=\"text\" value=\"".concat(value1, "\" id=\"zpay_cashback_input").concat(id, "\" />"));
            $("#c_cashback_container-" + id).html("<input type=\"text\" value=\"".concat(value2, "\" id=\"customer_cashback_input").concat(id, "\" />"));
          }
        }, {
          key: "updateOperator",
          value: function updateOperator(id, _id, value) {
            var newRecord = false;

            if (!_id || _id.trim() == "") {
              newRecord = true;
            }

            var payload = {
              newRecord: newRecord,
              _id: _id,
              operatorCode: value,
              cashbackPercentageForZpay: $("#zpay_cashback_input".concat(id)).val(),
              cashbackPercentageForCustomer: $("#customer_cashback_input".concat(id)).val()
            };
            this.operatorService.updateOperator(payload).subscribe(function (response) {
              var resp = JSON.parse(JSON.stringify(response));
              var op = resp.data;
              $("#btn-" + id).html(" <a href=\"javascript:void(0)\" onclick=\"enableEdit('".concat(id, "','").concat(op._id, "','").concat(op.operatorCode, "','").concat(op.cashbackPercentageForZpay, "','").concat(op.cashbackPercentageForCustomer, "')\" class=\"btn btn-info btn-xs\"><span class=\"fa fa-pencil\"></span> Edit</a>"));
              $("#z_cashback_container-" + id).html("<label>".concat(op.cashbackPercentageForZpay, "</label>"));
              $("#c_cashback_container-" + id).html("<label>".concat(op.cashbackPercentageForCustomer, "</label>"));
              var bg = 'brown';

              if (op.status == "Active" || op.status == 'active') {
                bg = "green";
              }

              $("#status-" + id).html("<span style=\"color:".concat(bg, "\">").concat(op.status, "</span>"));
            });
          }
        }, {
          key: "onDeleteOperatorClick",
          value: function onDeleteOperatorClick(selectedOperatorId) {
            alert("naruto" + selectedOperatorId); // this.operatorService.deleteUser(selectedOperatorId).subscribe((res: any) => {
            //   // Now we navigate to /users/user._id
            //   // window.location.reload()
            //   this.ngOnInit()
            // })
          }
        }]);

        return ListOperatorComponent;
      }();

      ListOperatorComponent.??fac = function ListOperatorComponent_Factory(t) {
        return new (t || ListOperatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_operator_operator_service__WEBPACK_IMPORTED_MODULE_2__["OperatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      ListOperatorComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ListOperatorComponent,
        selectors: [["app-list-operator"]],
        decls: 33,
        vars: 0,
        consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "operator-list", 1, "table", "table-bordered", "table-striped"]],
        template: function ListOperatorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-appheader");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-appmenu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Operator Listing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "table", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Sr. No.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Operator Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Operator Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Operator Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Zpay Cashback");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Customer Cashback");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Operator Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "app-appfooter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "app-appsetting");
          }
        },
        directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_5__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_6__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_7__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_8__["AppsettingComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LW9wZXJhdG9yLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ListOperatorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-list-operator',
            templateUrl: './list-operator.component.html',
            styleUrls: ['./list-operator.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_operator_operator_service__WEBPACK_IMPORTED_MODULE_2__["OperatorService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "8btI":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/member/percentage-member/percentage-member.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: PercentageMemberComponent */

    /***/
    function btI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PercentageMemberComponent", function () {
        return PercentageMemberComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PercentageMemberComponent = /*#__PURE__*/function () {
        function PercentageMemberComponent() {
          _classCallCheck(this, PercentageMemberComponent);
        }

        _createClass(PercentageMemberComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PercentageMemberComponent;
      }();

      PercentageMemberComponent.??fac = function PercentageMemberComponent_Factory(t) {
        return new (t || PercentageMemberComponent)();
      };

      PercentageMemberComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: PercentageMemberComponent,
        selectors: [["app-percentage-member"]],
        decls: 2,
        vars: 0,
        template: function PercentageMemberComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "percentage-member works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJjZW50YWdlLW1lbWJlci5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PercentageMemberComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-percentage-member',
            templateUrl: './percentage-member.component.html',
            styleUrls: ['./percentage-member.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "95/E":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/operator/edit-operator/edit-operator.component.ts ***!
      \*************************************************************************/

    /*! exports provided: EditOperatorComponent */

    /***/
    function E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditOperatorComponent", function () {
        return EditOperatorComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_operator_operator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/operator/operator.service */
      "lQHH");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../appheader/appheader.component */
      "VkP/");
      /* harmony import */


      var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../appmenu/appmenu.component */
      "HgAV");
      /* harmony import */


      var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../appfooter/appfooter.component */
      "FFBd");
      /* harmony import */


      var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../appsetting/appsetting.component */
      "gkWW");

      var EditOperatorComponent = /*#__PURE__*/function () {
        function EditOperatorComponent(operatorService, route, router) {
          _classCallCheck(this, EditOperatorComponent);

          this.operatorService = operatorService;
          this.route = route;
          this.router = router;
        }

        _createClass(EditOperatorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.route.params.subscribe(function (params) {
              if (params.operatorId) {
                _this5.operatorId = params.operatorId;

                _this5.operatorService.getOperator(params.operatorId).subscribe(function (operators) {
                  _this5.operators = operators;
                });
              } else {
                _this5.operators = undefined;
              }
            });
          }
        }, {
          key: "updateOperator",
          value: function updateOperator(operatorid, operatorcode, operatorname, cashbackPercentageForZpay, cashbackPercentageForCustomer, operatorstatus) {
            var _this6 = this;

            this.operatorService.updateUser(operatorid, operatorcode, operatorname, cashbackPercentageForZpay, cashbackPercentageForCustomer, operatorstatus).subscribe(function (operator) {
              console.log(operator); // Now we navigate to /users/user._id

              _this6.router.navigate(['/operator-list']);
            });
          }
        }]);

        return EditOperatorComponent;
      }();

      EditOperatorComponent.??fac = function EditOperatorComponent_Factory(t) {
        return new (t || EditOperatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_operator_operator_service__WEBPACK_IMPORTED_MODULE_1__["OperatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      EditOperatorComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: EditOperatorComponent,
        selectors: [["app-edit-operator"]],
        decls: 56,
        vars: 5,
        consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header", "with-border"], [1, "card-title"], [1, "card-body"], [1, "row", "clearfix"], [1, "col-md-6"], ["for", "name", 1, "control-label"], [1, "form-group"], ["type", "text", "name", "operatorcode", "id", "operatorCode", 1, "form-control", 3, "value"], ["operatorcode", ""], ["type", "text", "name", "firmname", "id", "operatorname", 1, "form-control", 3, "value"], ["operatorname", ""], ["type", "text", "name", "cashbackPercentageForZpay", "id", "cashbackPercentageForZpay", 1, "form-control", 3, "value"], ["cashbackPercentageForZpay", ""], ["type", "text", "name", "cashbackPercentageForCustomer", "id", "cashbackPercentageForCustomer", 1, "form-control", 3, "value"], ["cashbackPercentageForCustomer", ""], ["for", "operatorstatus", 1, "control-label"], ["id", "operatorstatus", 1, "form-control"], ["operatorstatus", ""], ["value", ""], [3, "value"], ["value", "Pending"], ["value", "Cancel"], [1, "card-footer"], [1, "btn", "btn-success", 3, "click"], [1, "fa", "fa-check"]],
        template: function EditOperatorComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-appheader");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-appmenu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Operator Edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Operator Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Operator Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "input", 14, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Zpay Cashback");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "input", 16, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Customer Cashback");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "input", 18, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Operatoe Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "select", 21, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "option", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Select Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Pending");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EditOperatorComponent_Template_button_click_51_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](17);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](23);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](29);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](35);

              var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](41);

              return ctx.updateOperator(ctx.operators[0]._id, _r0.value, _r1.value, _r2.value, _r3.value, _r4.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "i", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, " Save ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "app-appfooter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "app-appsetting");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", ctx.operators[0].operatorCode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", ctx.operators[0].name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", ctx.operators[0].cashbackPercentageForZpay);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", ctx.operators[0].cashbackPercentageForCustomer);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", ctx.operators[0].status);
          }
        },
        directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_3__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_4__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_5__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_6__["AppsettingComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LW9wZXJhdG9yLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EditOperatorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-edit-operator',
            templateUrl: './edit-operator.component.html',
            styleUrls: ['./edit-operator.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_operator_operator_service__WEBPACK_IMPORTED_MODULE_1__["OperatorService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        // dataTableUri: `http://localhost:3002/datatable`
        dataTableUri: "https://zpays.in:3002/datatable"
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "CUqn":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/wallet/wallet-balance/wallet-balance.component.ts ***!
      \*************************************************************************/

    /*! exports provided: WalletBalanceComponent */

    /***/
    function CUqn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WalletBalanceComponent", function () {
        return WalletBalanceComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");
      /* harmony import */


      var src_app_services_walletbalance_walletbalance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/walletbalance/walletbalance.service */
      "GvV1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../appheader/appheader.component */
      "VkP/");
      /* harmony import */


      var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../appmenu/appmenu.component */
      "HgAV");
      /* harmony import */


      var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../appfooter/appfooter.component */
      "FFBd");
      /* harmony import */


      var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../appsetting/appsetting.component */
      "gkWW");

      var DATATABLE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].dataTableUri;

      var WalletBalanceComponent = /*#__PURE__*/function () {
        // constructor(private taskService: TaskService, private router: Router) { }
        function WalletBalanceComponent(WalletbalanceService, route, router) {
          _classCallCheck(this, WalletBalanceComponent);

          this.WalletbalanceService = WalletbalanceService;
          this.route = route;
          this.router = router;
        }

        _createClass(WalletBalanceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // this.route.params.subscribe(
            //   (params: Params) => {
            //     if (params.walletbalanceId) {
            //       this.selectedwalletbalanceId = params.walletbalanceId;
            //       this.WalletbalanceService.getWalletbalance(params.walletbalanceId).subscribe((walletEntries: WalletBalance[]) => {
            //         this.walletEntries = walletEntries;
            //       })
            //     } else {
            //       this.walletEntries = undefined;
            //     }
            //   }
            // )
            // this.WalletbalanceService.getWalletbalances().subscribe((walletEntries: any) => {
            //   this.walletEntries = walletEntries.data;
            // })
            this.loadDataTable();
          }
        }, {
          key: "loadDataTable",
          value: function loadDataTable() {
            $('#wallet-balance-list').DataTable({
              order: [0, "desc"],
              processing: true,
              serverSide: true,
              sScrollX: "100%",
              sScrollXInner: "100%",
              bScrollCollapse: true,
              serverMethod: "post",
              layout: 'fixed',
              bDestroy: true,
              ajax: {
                url: "".concat(DATATABLE_URL, "/walletBalance")
              },
              columns: [{
                data: 'sl_no'
              }, {
                data: 'phone'
              }, {
                data: 'service'
              }, {
                data: 'operator'
              }, {
                data: 'naration'
              }, {
                data: 'credit',
                render: function render(a, b, c, d) {
                  return "<strong><span style=\"color:#ffffff\">+".concat(a, "</span></strong>");
                }
              }, {
                data: 'debit',
                render: function render(a, b, c, d) {
                  return "<strong><span style=\"color:#ffffff\">-".concat(a, "</span></strong>");
                }
              }, {
                data: 'restAmount'
              }],
              columnDefs: [{
                'targets': 5,
                'createdCell': function createdCell(td, cellData, rowData, row, col) {
                  $(td).css('background', 'green');
                }
              }, {
                'targets': 6,
                'createdCell': function createdCell(td, cellData, rowData, row, col) {
                  $(td).css('background', 'brown');
                }
              }]
            });
          }
        }, {
          key: "onDeleteWalletClick",
          value: function onDeleteWalletClick(walletId) {
            console.log("naruto");
            this.WalletbalanceService.deletewalletbalance(walletId).subscribe(function (res) {
              // Now we navigate to /users/user._id
              window.location.reload();
            });
          }
        }]);

        return WalletBalanceComponent;
      }();

      WalletBalanceComponent.??fac = function WalletBalanceComponent_Factory(t) {
        return new (t || WalletBalanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_walletbalance_walletbalance_service__WEBPACK_IMPORTED_MODULE_2__["WalletbalanceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      WalletBalanceComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: WalletBalanceComponent,
        selectors: [["app-wallet-balance"]],
        decls: 33,
        vars: 0,
        consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "wallet-balance-list", 1, "table", "table-bordered", "table-striped"]],
        template: function WalletBalanceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-appheader");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-appmenu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "E-Wallet Balance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "table", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Sr. No.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Member Mobile No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Service");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Operator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Activity(Naration)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Credit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Debit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Balance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "app-appfooter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "app-appsetting");
          }
        },
        directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_4__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_5__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_6__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_7__["AppsettingComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YWxsZXQtYmFsYW5jZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WalletBalanceComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-wallet-balance',
            templateUrl: './wallet-balance.component.html',
            styleUrls: ['./wallet-balance.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_walletbalance_walletbalance_service__WEBPACK_IMPORTED_MODULE_2__["WalletbalanceService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "D8EZ":
    /*!************************************************!*\
      !*** ./src/app/pages/login/login.component.ts ***!
      \************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function D8EZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/login/login.service */
      "XXEo");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(loginService, router) {
          _classCallCheck(this, LoginComponent);

          this.loginService = loginService;
          this.router = router;
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onLoginButtonClicked",
          value: function onLoginButtonClicked(email, password) {
            var _this7 = this;

            if (!email || email.trim() == "") {
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Please enter email ID', '', 'warning');
              return false;
            }

            if (!password || password.trim() == "") {
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Please enter password', '', 'warning');
              return false;
            }

            this.loginService.login(email, password).subscribe(function (res) {
              if (res.status === 200) {
                localStorage.setItem('authToken', res.body.data.authToken);

                _this7.router.navigate(['/dashboard']);
              }
            }, function (error) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire(error.error.error, '', 'error');
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.??fac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 24,
        vars: 0,
        consts: [[1, "row"], [1, "col-md-4"], [1, "col-md-4", 2, "margin-top", "150px"], [1, "card", "card-info"], [1, "card-header"], [1, "card-title"], [1, "card-body", "p-12"], [1, "col-md-12"], ["for", "name", 1, "control-label"], [1, "form-group"], ["type", "text", "name", "emailInput", "value", "", "id", "operatorname", "required", "", 1, "form-control"], ["emailInput", ""], ["type", "password", "name", "pwInput", "value", "", "id", "operatorname", "required", "", 1, "form-control"], ["pwInput", ""], [1, "card-footer"], [1, "btn", "btn-info", 3, "click"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Username");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "input", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LoginComponent_Template_button_click_21_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r2);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](13);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](19);

              return ctx.onLoginButtonClicked(_r0.value, _r1.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " Login ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "FFBd":
    /*!********************************************************!*\
      !*** ./src/app/pages/appfooter/appfooter.component.ts ***!
      \********************************************************/

    /*! exports provided: AppfooterComponent */

    /***/
    function FFBd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppfooterComponent", function () {
        return AppfooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppfooterComponent = /*#__PURE__*/function () {
        function AppfooterComponent() {
          _classCallCheck(this, AppfooterComponent);
        }

        _createClass(AppfooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppfooterComponent;
      }();

      AppfooterComponent.??fac = function AppfooterComponent_Factory(t) {
        return new (t || AppfooterComponent)();
      };

      AppfooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AppfooterComponent,
        selectors: [["app-appfooter"]],
        decls: 6,
        vars: 0,
        consts: [[1, "main-footer", 2, "margin-left", "0px"], ["href", "https://syscodetechnology.com/"]],
        template: function AppfooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Powered By ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Syscode Technology Pvt. Ltd.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\nAll rights reserved.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppfooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-appfooter',
            templateUrl: './appfooter.component.html',
            styleUrls: ['./appfooter.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Fv0Y":
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/report/transaction-report/transaction-report.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: TransactionReportComponent */

    /***/
    function Fv0Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransactionReportComponent", function () {
        return TransactionReportComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TransactionReportComponent = /*#__PURE__*/function () {
        function TransactionReportComponent() {
          _classCallCheck(this, TransactionReportComponent);
        }

        _createClass(TransactionReportComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TransactionReportComponent;
      }();

      TransactionReportComponent.??fac = function TransactionReportComponent_Factory(t) {
        return new (t || TransactionReportComponent)();
      };

      TransactionReportComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: TransactionReportComponent,
        selectors: [["app-transaction-report"]],
        decls: 2,
        vars: 0,
        template: function TransactionReportComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "transaction-report works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2FjdGlvbi1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TransactionReportComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-transaction-report',
            templateUrl: './transaction-report.component.html',
            styleUrls: ['./transaction-report.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "GvV1":
    /*!*****************************************************************!*\
      !*** ./src/app/services/walletbalance/walletbalance.service.ts ***!
      \*****************************************************************/

    /*! exports provided: WalletbalanceService */

    /***/
    function GvV1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WalletbalanceService", function () {
        return WalletbalanceService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../web-request/web-request.service */
      "fYgw");

      var WalletbalanceService = /*#__PURE__*/function () {
        function WalletbalanceService(webReqService) {
          _classCallCheck(this, WalletbalanceService);

          this.webReqService = webReqService;
        }

        _createClass(WalletbalanceService, [{
          key: "getWalletbalances",
          value: function getWalletbalances() {
            return this.webReqService.get('wallet/allwalletToday');
          }
        }, {
          key: "getWalletbalance",
          value: function getWalletbalance(walletbalanceId) {
            return this.webReqService.get("walletbalance/".concat(walletbalanceId));
          }
        }, {
          key: "createUser",
          value: function createUser(username, email, password, phone) {
            // We want to send a web request to create a list
            return this.webReqService.post('walletbalance', {
              username: username,
              email: email,
              password: password,
              phone: phone
            });
          }
        }, {
          key: "updateUser",
          value: function updateUser(walletbalanceId, username, email, password, phone) {
            // We want to send a web request to update a list
            return this.webReqService.patch("walletbalance/".concat(walletbalanceId), {
              username: username,
              email: email,
              password: password,
              phone: phone
            });
          }
        }, {
          key: "deletewalletbalance",
          value: function deletewalletbalance(walletbalanceId) {
            console.log(walletbalanceId);
            return this.webReqService["delete"]("walletbalance/".concat(walletbalanceId));
          }
        }]);

        return WalletbalanceService;
      }();

      WalletbalanceService.??fac = function WalletbalanceService_Factory(t) {
        return new (t || WalletbalanceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"]));
      };

      WalletbalanceService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: WalletbalanceService,
        factory: WalletbalanceService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WalletbalanceService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "HIZA":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/recharge/latest-recharge/latest-recharge.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: LatestRechargeComponent */

    /***/
    function HIZA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LatestRechargeComponent", function () {
        return LatestRechargeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");
      /* harmony import */


      var src_app_services_recharge_recharge_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/recharge/recharge.service */
      "Sgnu");
      /* harmony import */


      var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/common/common.service */
      "++gc");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../appheader/appheader.component */
      "VkP/");
      /* harmony import */


      var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../appmenu/appmenu.component */
      "HgAV");
      /* harmony import */


      var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../appfooter/appfooter.component */
      "FFBd");
      /* harmony import */


      var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../appsetting/appsetting.component */
      "gkWW");

      var DATATABLE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].dataTableUri;

      var LatestRechargeComponent = /*#__PURE__*/function () {
        // constructor(private taskService: TaskService, private router: Router) { }
        function LatestRechargeComponent(rechargeservice, common, route, router) {
          _classCallCheck(this, LatestRechargeComponent);

          this.rechargeservice = rechargeservice;
          this.common = common;
          this.route = route;
          this.router = router;
        }

        _createClass(LatestRechargeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.rechargeservice.getLatestRecharges().subscribe(function (recharges) {
              if (recharges.success == true) {
                _this8.recharges = recharges.data;
              }
            });
            this.loadDataTable();
          }
        }, {
          key: "loadDataTable",
          value: function loadDataTable() {
            $('#today-recharge-list').DataTable({
              order: [0, "desc"],
              processing: true,
              serverSide: true,
              sScrollX: "100%",
              sScrollXInner: "100%",
              bScrollCollapse: true,
              serverMethod: "post",
              layout: 'fixed',
              bDestroy: true,
              ajax: {
                url: "".concat(DATATABLE_URL, "/todayrecharge")
              },
              "lengthMenu": [10, 20, 50, 100, 1000],
              columns: [{
                data: 'sl_no'
              }, {
                data: 'name'
              }, {
                data: 'phone'
              }, {
                data: 'mobile'
              }, {
                data: 'amount'
              }, {
                data: 'operator'
              }, {
                data: 'txnId'
              }, {
                data: 'transactionId'
              }, {
                data: 'status'
              }, {
                data: 'apiName'
              }, {
                data: 'operatorRef'
              }, {
                data: 'errormessage'
              }, {
                data: 'createdAt'
              }]
            });
          }
        }]);

        return LatestRechargeComponent;
      }();

      LatestRechargeComponent.??fac = function LatestRechargeComponent_Factory(t) {
        return new (t || LatestRechargeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_recharge_recharge_service__WEBPACK_IMPORTED_MODULE_2__["RechargeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      LatestRechargeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: LatestRechargeComponent,
        selectors: [["app-latest-recharge"]],
        decls: 43,
        vars: 0,
        consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "today-recharge-list", 1, "table", "table-bordered", "table-striped"]],
        template: function LatestRechargeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-appheader");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-appmenu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Today Recharge History");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "table", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Sr. No.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Member Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Mobile No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "CA Mobile No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Recharge Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Operator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "TX ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "API Tx ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "APIID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Operator Ref.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Error Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "app-appfooter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "app-appsetting");
          }
        },
        directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_5__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_6__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_7__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_8__["AppsettingComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXRlc3QtcmVjaGFyZ2UuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LatestRechargeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-latest-recharge',
            templateUrl: './latest-recharge.component.html',
            styleUrls: ['./latest-recharge.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_recharge_recharge_service__WEBPACK_IMPORTED_MODULE_2__["RechargeService"]
          }, {
            type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "HgAV":
    /*!****************************************************!*\
      !*** ./src/app/pages/appmenu/appmenu.component.ts ***!
      \****************************************************/

    /*! exports provided: AppmenuComponent */

    /***/
    function HgAV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppmenuComponent", function () {
        return AppmenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/common/common.service */
      "++gc");

      var AppmenuComponent = /*#__PURE__*/function () {
        function AppmenuComponent(router, common) {
          _classCallCheck(this, AppmenuComponent);

          this.router = router;
          this.common = common;
        }

        _createClass(AppmenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.load();
          }
        }, {
          key: "load",
          value: function load() {
            this.common.loadAdminLteScript();
            $('[data-widget="treeview"]').Treeview('init');
          }
        }, {
          key: "routeTo",
          value: function routeTo(routeString) {
            this.router.navigate([routeString]);
          }
        }]);

        return AppmenuComponent;
      }();

      AppmenuComponent.??fac = function AppmenuComponent_Factory(t) {
        return new (t || AppmenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]));
      };

      AppmenuComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AppmenuComponent,
        selectors: [["app-appmenu"]],
        decls: 82,
        vars: 1,
        consts: [[1, "main-sidebar", "sidebar-dark-primary", "elevation-4"], ["href", "#", 1, "brand-link"], ["src", "assets/dist/img/AdminLTELogo.png", "alt", "AdminLTE Logo", 1, "brand-image", "img-circle", "elevation-3", 2, "opacity", ".8"], [1, "brand-text", "font-weight-light"], [1, "sidebar"], [1, "mt-2"], ["data-widget", "treeview", "role", "menu", "data-accordion", "false", 1, "nav", "nav-pills", "nav-sidebar", "flex-column"], [1, "nav-item"], [1, "nav-link", "active", 3, "click"], [1, "nav-icon", "fas", "fa-tachometer-alt"], ["href", "javascript:void(0)", 1, "nav-link"], [1, "nav-icon", "fas", "fa-bolt"], [1, "fas", "fa-angle-right", "right"], [1, "nav", "nav-treeview"], [1, "far", "fa-circle", "nav-icon"], ["href", "javascript:void(0)", 1, "nav-link", 3, "click"], [1, "nav-link", 3, "click"], ["href", "javascript:void(0)", "href", "javascript:void(0)", 1, "nav-link"], [1, "nav-icon", "fas", "fa-plus"], [1, "nav-icon", "fas", "fa-wallet"], [1, "nav-link", 3, "routerLink"], [1, "nav-icon", "fas", "fa-user"], [1, "right", "fas", "fa-angle-right"]],
        template: function AppmenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "aside", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Z-Pay");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "nav", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppmenuComponent_Template_a_click_9_listener() {
              return ctx.routeTo("dashboard");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Dashboard ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " Recharge ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "ul", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Recharge History ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "ul", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppmenuComponent_Template_a_click_28_listener() {
              return ctx.routeTo("latest-recharge");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Latest Recharge History");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppmenuComponent_Template_a_click_33_listener() {
              return ctx.routeTo("recharge-history");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Old Recharge History");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppmenuComponent_Template_a_click_38_listener() {
              return ctx.routeTo("recharge-pending");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "List Pending Recharge");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, " Operator Master ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "ul", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppmenuComponent_Template_a_click_50_listener() {
              return ctx.routeTo("operator-list");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "List Operator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, " Wallet System ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "ul", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppmenuComponent_Template_a_click_62_listener() {
              return ctx.routeTo("wallet-add");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Add Wallet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppmenuComponent_Template_a_click_67_listener() {
              return ctx.routeTo("/wallet-transaction");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Wallet Summary Latest");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppmenuComponent_Template_a_click_72_listener() {
              return ctx.routeTo("/wallet-balance");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](73, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "User Wise Wallet Summary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, " Users ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", "/user-list");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBtZW51LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppmenuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-appmenu',
            templateUrl: './appmenu.component.html',
            styleUrls: ['./appmenu.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "I+kH":
    /*!**********************************************************************!*\
      !*** ./src/app/pages/users/user-recharge/user-recharge.component.ts ***!
      \**********************************************************************/

    /*! exports provided: UserRechargeComponent */

    /***/
    function IKH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRechargeComponent", function () {
        return UserRechargeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_userrecharge_userrecharge_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/userrecharge/userrecharge.service */
      "LuDy");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../appheader/appheader.component */
      "VkP/");
      /* harmony import */


      var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../appmenu/appmenu.component */
      "HgAV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../appfooter/appfooter.component */
      "FFBd");
      /* harmony import */


      var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../appsetting/appsetting.component */
      "gkWW");

      function UserRechargeComponent_tbody_45_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var recharge_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](recharge_r2._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](recharge_r2.userid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](recharge_r2.membername);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](recharge_r2.mobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](recharge_r2.camobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](recharge_r2.amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](recharge_r2.operator);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](recharge_r2.transactionId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](recharge_r2.apitxid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](recharge_r2.status);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](recharge_r2.appid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](recharge_r2.operatorref);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](recharge_r2.errormessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](recharge_r2.date);
        }
      }

      function UserRechargeComponent_tbody_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, UserRechargeComponent_tbody_45_tr_1_Template, 29, 14, "tr", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.recharges);
        }
      }

      var UserRechargeComponent = /*#__PURE__*/function () {
        // constructor(private taskService: TaskService, private router: Router) { }
        function UserRechargeComponent(Rechargeservice, route, router) {
          _classCallCheck(this, UserRechargeComponent);

          this.Rechargeservice = Rechargeservice;
          this.route = route;
          this.router = router;
        }

        _createClass(UserRechargeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.route.params.subscribe(function (params) {
              console.log(params.userId);

              if (params.userId) {
                _this9.selectedUserId = params.userId;

                _this9.Rechargeservice.getRecharges(params.userId).subscribe(function (recharges) {
                  _this9.recharges = recharges.data;
                });
              }
            }); // this.WalletbalanceService.getWalletbalances().subscribe((walletEntries: UserWallet[]) => {
            //   this.walletEntries = walletEntries;
            // })
          }
        }]);

        return UserRechargeComponent;
      }();

      UserRechargeComponent.??fac = function UserRechargeComponent_Factory(t) {
        return new (t || UserRechargeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_userrecharge_userrecharge_service__WEBPACK_IMPORTED_MODULE_1__["UserrechargeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      UserRechargeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: UserRechargeComponent,
        selectors: [["app-user-recharge"]],
        decls: 48,
        vars: 1,
        consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header"], [1, "card-title"], [1, "card-tools"], ["href", "/member-add", 1, "btn", "btn-success", "btn-sm"], [1, "card-body"], ["id", "example1", 1, "table", "table-bordered", "table-striped"], [4, "ngIf"], [4, "ngFor", "ngForOf"]],
        template: function UserRechargeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-appheader");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-appmenu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Recharge History");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "table", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Sr. No.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Member Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Member Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Mobile No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "CA Mobile No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Recharge Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Operator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "TX ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "API Tx ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "APIID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Operator Ref.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Error Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](45, UserRechargeComponent_tbody_45_Template, 2, 1, "tbody", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "app-appfooter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "app-appsetting");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.recharges);
          }
        },
        directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_3__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_4__["AppmenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_6__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_7__["AppsettingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXJlY2hhcmdlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserRechargeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-user-recharge',
            templateUrl: './user-recharge.component.html',
            styleUrls: ['./user-recharge.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_userrecharge_userrecharge_service__WEBPACK_IMPORTED_MODULE_1__["UserrechargeService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "KD3v":
    /*!***********************************************************************************!*\
      !*** ./src/app/pages/report/admin-profit-report/admin-profit-report.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: AdminProfitReportComponent */

    /***/
    function KD3v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminProfitReportComponent", function () {
        return AdminProfitReportComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AdminProfitReportComponent = /*#__PURE__*/function () {
        function AdminProfitReportComponent() {
          _classCallCheck(this, AdminProfitReportComponent);
        }

        _createClass(AdminProfitReportComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdminProfitReportComponent;
      }();

      AdminProfitReportComponent.??fac = function AdminProfitReportComponent_Factory(t) {
        return new (t || AdminProfitReportComponent)();
      };

      AdminProfitReportComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AdminProfitReportComponent,
        selectors: [["app-admin-profit-report"]],
        decls: 2,
        vars: 0,
        template: function AdminProfitReportComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "admin-profit-report works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1wcm9maXQtcmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AdminProfitReportComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-admin-profit-report',
            templateUrl: './admin-profit-report.component.html',
            styleUrls: ['./admin-profit-report.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "LuDy":
    /*!***************************************************************!*\
      !*** ./src/app/services/userrecharge/userrecharge.service.ts ***!
      \***************************************************************/

    /*! exports provided: UserrechargeService */

    /***/
    function LuDy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserrechargeService", function () {
        return UserrechargeService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../web-request/web-request.service */
      "fYgw");

      var UserrechargeService = /*#__PURE__*/function () {
        function UserrechargeService(webReqService) {
          _classCallCheck(this, UserrechargeService);

          this.webReqService = webReqService;
        }

        _createClass(UserrechargeService, [{
          key: "getRecharges",
          value: function getRecharges(userid) {
            console.log('naruto');
            return this.webReqService.post('recharge/history/' + userid, {});
          }
        }]);

        return UserrechargeService;
      }();

      UserrechargeService.??fac = function UserrechargeService_Factory(t) {
        return new (t || UserrechargeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"]));
      };

      UserrechargeService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: UserrechargeService,
        factory: UserrechargeService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserrechargeService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sgnu":
    /*!*******************************************************!*\
      !*** ./src/app/services/recharge/recharge.service.ts ***!
      \*******************************************************/

    /*! exports provided: RechargeService */

    /***/
    function Sgnu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RechargeService", function () {
        return RechargeService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../web-request/web-request.service */
      "fYgw");

      var RechargeService = /*#__PURE__*/function () {
        function RechargeService(webReqService) {
          _classCallCheck(this, RechargeService);

          this.webReqService = webReqService;
        }

        _createClass(RechargeService, [{
          key: "getRecharges",
          value: function getRecharges() {
            return this.webReqService.get('recharge');
          }
        }, {
          key: "getRecharge",
          value: function getRecharge(rechargeId) {
            return this.webReqService.get("recharge/".concat(rechargeId));
          }
        }, {
          key: "getLatestRecharge",
          value: function getLatestRecharge(rechargeId) {
            return this.webReqService.get("recharge/".concat(rechargeId));
          }
        }, {
          key: "getLatestRecharges",
          value: function getLatestRecharges() {
            // return this.webReqService.get('recharge/today');
            return this.webReqService.get('recharge/todayrecharge');
          }
        }, {
          key: "getOldRecharges",
          value: function getOldRecharges() {
            return this.webReqService.get('recharge/allrecharge');
          }
        }, {
          key: "getPendingRecharges",
          value: function getPendingRecharges() {
            // console.log('vikas');
            return this.webReqService.get('recharge/pendingrecharge');
          }
        }]);

        return RechargeService;
      }();

      RechargeService.??fac = function RechargeService_Factory(t) {
        return new (t || RechargeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"]));
      };

      RechargeService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: RechargeService,
        factory: RechargeService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RechargeService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'zpay';
      };

      AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "TOxE":
    /*!******************************************************************!*\
      !*** ./src/app/pages/users/user-wallet/user-wallet.component.ts ***!
      \******************************************************************/

    /*! exports provided: UserWalletComponent */

    /***/
    function TOxE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserWalletComponent", function () {
        return UserWalletComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");
      /* harmony import */


      var src_app_services_userwallet_userwallet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/userwallet/userwallet.service */
      "+Chl");
      /* harmony import */


      var src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/user/users.service */
      "WS/y");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../appheader/appheader.component */
      "VkP/");
      /* harmony import */


      var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../appmenu/appmenu.component */
      "HgAV");
      /* harmony import */


      var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../appfooter/appfooter.component */
      "FFBd");
      /* harmony import */


      var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../appsetting/appsetting.component */
      "gkWW");

      var DATATABLE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].dataTableUri;

      var UserWalletComponent = /*#__PURE__*/function () {
        // constructor(private taskService: TaskService, private router: Router) { }
        function UserWalletComponent(WalletbalanceService, userService, route, router) {
          _classCallCheck(this, UserWalletComponent);

          this.WalletbalanceService = WalletbalanceService;
          this.userService = userService;
          this.route = route;
          this.router = router;
          this.total = 0;
        }

        _createClass(UserWalletComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            var userId = this.route.snapshot.paramMap.get('userId');
            this.userService.getUser(userId).subscribe(function (response) {
              _this10.userdata = JSON.parse(JSON.stringify(response['data']));
              console.log(_this10.userdata);
            });
            this.loadDataTable(userId); // this.route.params.subscribe(
            //   (params: Params) => {
            //     console.log(params.userId);
            //     if (params.userId) {
            //       this.selectedwalletbalanceId = params.userId;
            //       this.WalletbalanceService.getUserWallets(params.userId).subscribe((walletEntries: any) => {
            //         this.walletEntries = walletEntries.data;
            //         this.findsum(this.walletEntries);
            //       })
            //     } else {
            //       this.walletEntries = undefined;
            //     }
            //   }
            // )
            // this.WalletbalanceService.getWalletbalances().subscribe((walletEntries: UserWallet[]) => {
            //   this.walletEntries = walletEntries;
            // })
          }
        }, {
          key: "loadDataTable",
          value: function loadDataTable(userId) {
            $('#user-wallet').DataTable({
              order: [1, "desc"],
              processing: true,
              serverSide: true,
              sScrollX: "100%",
              sScrollXInner: "100%",
              bScrollCollapse: true,
              serverMethod: "post",
              layout: 'fixed',
              bDestroy: true,
              ajax: {
                url: "".concat(DATATABLE_URL, "/userwallet/").concat(userId)
              },
              "lengthMenu": [10, 20, 50, 100, 1000],
              columns: [{
                data: 'sl_no'
              }, {
                data: 'createdAt'
              }, {
                data: 'service'
              }, {
                data: 'operator'
              }, {
                data: 'naration'
              }, {
                data: 'credit',
                render: function render(a, b, c, d) {
                  return "<strong><span style=\"color:#ffffff\">".concat(a, "</span></strong>");
                }
              }, {
                data: 'debit',
                render: function render(a, b, c, d) {
                  return "<strong><span style=\"color:#ffffff\">".concat(a, "</span></strong>");
                }
              }, {
                data: 'restAmount'
              }],
              columnDefs: [{
                'targets': 5,
                'createdCell': function createdCell(td, cellData, rowData, row, col) {
                  $(td).css('background', 'green');
                }
              }, {
                'targets': 6,
                'createdCell': function createdCell(td, cellData, rowData, row, col) {
                  $(td).css('background', 'brown');
                }
              }]
            });
          }
        }, {
          key: "findsum",
          value: function findsum(data) {
            // debugger  
            this.value = data;
            console.log(this.value);

            for (var j = 0; j < data.length; j++) {
              this.total -= parseFloat(this.value[j].debit);
              this.total += parseFloat(this.value[j].credit);
              console.log(this.total);
            }
          }
        }, {
          key: "getSum",
          value: function getSum(ii) {
            var sum = 0;
            console.log(ii);

            for (var i = 0; i <= ii; i++) {
              console.log(this.walletEntries[i].credit);
              console.log(this.walletEntries[i].debit);
              var cr = typeof this.walletEntries[i].credit == "undefined" || this.walletEntries[i].credit == null ? 0 : parseFloat(this.walletEntries[i].credit);
              var dr = typeof this.walletEntries[i].debit == "undefined" || this.walletEntries[i].debit == null ? 0 : parseFloat(this.walletEntries[i].debit);
              sum = sum + cr - dr;
            }

            return sum;
          }
        }]);

        return UserWalletComponent;
      }();

      UserWalletComponent.??fac = function UserWalletComponent_Factory(t) {
        return new (t || UserWalletComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_userwallet_userwallet_service__WEBPACK_IMPORTED_MODULE_2__["UserwalletService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      UserWalletComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: UserWalletComponent,
        selectors: [["app-user-wallet"]],
        decls: 54,
        vars: 4,
        consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header"], [1, "card-title"], [1, "card-body-2"], ["for", ""], [1, "card-body"], ["id", "user-wallet", 1, "table", "table-bordered", "table-striped"]],
        template: function UserWalletComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-appheader");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-appmenu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Latest E-Wallet Transaction");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Username :");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Mobile :");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Email :");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Registered Date :");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "table", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Sr. No.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Service");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Operator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Activity(Naration)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Credit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Debit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Balance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "app-appfooter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "app-appsetting");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.userdata.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.userdata.phone);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.userdata.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.userdata.createdAt);
          }
        },
        directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_5__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_6__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_7__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_8__["AppsettingComponent"]],
        styles: [".card-body-2[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 1.25rem;\n  box-shadow: 2px 2px 7px grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdXNlci13YWxsZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBRUEsNEJBQUE7QUFBSiIsImZpbGUiOiJ1c2VyLXdhbGxldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWJvZHktMntcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgbWluLWhlaWdodDogMXB4O1xyXG4gICAgcGFkZGluZzogMS4yNXJlbTtcclxuICAgIC8vIG1hcmdpbjogYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggN3B4IGdyZXlcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserWalletComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-user-wallet',
            templateUrl: './user-wallet.component.html',
            styleUrls: ['./user-wallet.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_userwallet_userwallet_service__WEBPACK_IMPORTED_MODULE_2__["UserwalletService"]
          }, {
            type: src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "U5Cf":
    /*!********************************************************!*\
      !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
      \********************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function U5Cf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/user/users.service */
      "WS/y");
      /* harmony import */


      var _services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/common/common.service */
      "++gc");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../appheader/appheader.component */
      "VkP/");
      /* harmony import */


      var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../appmenu/appmenu.component */
      "HgAV");
      /* harmony import */


      var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../appfooter/appfooter.component */
      "FFBd");
      /* harmony import */


      var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../appsetting/appsetting.component */
      "gkWW");

      var DashboardComponent = /*#__PURE__*/function () {
        // signups=0;
        function DashboardComponent(usersService, common, route, router) {
          _classCallCheck(this, DashboardComponent);

          this.usersService = usersService;
          this.common = common;
          this.route = route;
          this.router = router;
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            var authToken = localStorage.getItem('authToken');
            console.log(authToken); // this.common.loadScript()

            this.usersService.getSignup().subscribe(function (signups) {
              _this11.signups = signups;
            });
            this.usersService.getRecharges().subscribe(function (recharges) {
              _this11.recharges = recharges;
            });
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.??fac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      DashboardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 95,
        vars: 2,
        consts: [[1, "content-wrapper"], [1, "content"], [1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "m-0"], [1, "row"], [1, "col-md-7"], [1, "card", "card-info"], [1, "card-header"], [1, "card-title"], [1, "card-body", "p-0"], [1, "table", "table-bordered", "table-striped"], [1, "card-body"], ["data-widget", "todo-list", 1, "todo-list", "ui-sortable"], [1, "text"], [1, "badge", "badge-danger"], [1, "tools"], [1, "fas", "fa-edit"], [1, "fas", "fa-trash-o"], [1, "badge", "badge-info"], [1, "badge", "badge-warning"], ["href", "#"], [1, "badge", "badge-success"], [1, "badge", "badge-primary"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-appheader");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-appmenu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h1", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "My Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "h3", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Summary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "table", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "This Month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "This Year");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Sign Up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "24");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "24");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "24");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "ul", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Pending Payment ConFirmation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "small", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Pending Ticket Issue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "small", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Pending Recharge");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "small", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](73, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Total Recharge");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "small", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](82, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](83, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Total Amount In Downline Wallet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "small", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "a", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](91, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](92, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](93, "app-appfooter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](94, "app-appsetting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.signups);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.recharges);
          }
        },
        directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_4__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_5__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_6__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_7__["AppsettingComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]
          }, {
            type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "VM2V":
    /*!*************************************************************************!*\
      !*** ./src/app/services/wallettransaction/wallettransaction.service.ts ***!
      \*************************************************************************/

    /*! exports provided: WallettransactionService */

    /***/
    function VM2V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WallettransactionService", function () {
        return WallettransactionService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../web-request/web-request.service */
      "fYgw");

      var WallettransactionService = /*#__PURE__*/function () {
        function WallettransactionService(webReqService) {
          _classCallCheck(this, WallettransactionService);

          this.webReqService = webReqService;
        }

        _createClass(WallettransactionService, [{
          key: "getWalletTransactions",
          value: function getWalletTransactions() {
            return this.webReqService.get('wallet/allwallet');
          }
        }, {
          key: "getWalletTransaction",
          value: function getWalletTransaction(trasactionId) {
            return this.webReqService.get("wallettransaction/".concat(trasactionId));
          }
        }, {
          key: "createUser",
          value: function createUser(username, email, password, phone) {
            // We want to send a web request to create a list
            return this.webReqService.post('wallettransaction', {
              username: username,
              email: email,
              password: password,
              phone: phone
            });
          }
        }, {
          key: "updateUser",
          value: function updateUser(trasactionId, username, email, password, phone) {
            // We want to send a web request to update a list
            return this.webReqService.patch("wallettransaction/".concat(trasactionId), {
              username: username,
              email: email,
              password: password,
              phone: phone
            });
          }
        }, {
          key: "deleteUser",
          value: function deleteUser(trasactionId) {
            console.log(trasactionId);
            return this.webReqService["delete"]("wallettransaction/".concat(trasactionId));
          }
        }]);

        return WallettransactionService;
      }();

      WallettransactionService.??fac = function WallettransactionService_Factory(t) {
        return new (t || WallettransactionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"]));
      };

      WallettransactionService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: WallettransactionService,
        factory: WallettransactionService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WallettransactionService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Vi1k":
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/wallet/wallet-transaction/wallet-transaction.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: WalletTransactionComponent */

    /***/
    function Vi1k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WalletTransactionComponent", function () {
        return WalletTransactionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");
      /* harmony import */


      var src_app_services_wallettransaction_wallettransaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/wallettransaction/wallettransaction.service */
      "VM2V");
      /* harmony import */


      var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/common/common.service */
      "++gc");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../appheader/appheader.component */
      "VkP/");
      /* harmony import */


      var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../appmenu/appmenu.component */
      "HgAV");
      /* harmony import */


      var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../appfooter/appfooter.component */
      "FFBd");
      /* harmony import */


      var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../appsetting/appsetting.component */
      "gkWW");

      var DATATABLE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].dataTableUri;

      var WalletTransactionComponent = /*#__PURE__*/function () {
        // constructor(private taskService: TaskService, private router: Router) { }
        function WalletTransactionComponent(wallettransactionService, common, route, router) {
          _classCallCheck(this, WalletTransactionComponent);

          this.wallettransactionService = wallettransactionService;
          this.common = common;
          this.route = route;
          this.router = router;
        }

        _createClass(WalletTransactionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // this.route.params.subscribe(
            //   (params: Params) => {
            //     if (params.trasactionId) {
            //       this.selectedtrasactionId = params.trasactionId;
            //       this.wallettransactionService.getWalletTransaction(params.trasactionId).subscribe((walletEntries: WalletTransaction[]) => {
            //         this.walletEntries = walletEntries;
            //       })
            //     } else {
            //       this.walletEntries = undefined;
            //     }
            //   }
            // )
            // this.wallettransactionService.getWalletTransactions().subscribe((walletEntries: any) => {
            //   console.log(this.walletEntries)
            //   this.walletEntries = walletEntries.data;
            // })
            this.loadDataTable();
          }
        }, {
          key: "loadDataTable",
          value: function loadDataTable() {
            $('#wallet-transaction-list').DataTable({
              order: [0, "desc"],
              processing: true,
              serverSide: true,
              sScrollX: "100%",
              sScrollXInner: "100%",
              bScrollCollapse: true,
              serverMethod: "post",
              layout: 'fixed',
              bDestroy: true,
              ajax: {
                url: "".concat(DATATABLE_URL, "/walletTransaction")
              },
              columns: [{
                data: 'sl_no'
              }, {
                data: 'phone'
              }, {
                data: 'service'
              }, {
                data: 'operator'
              }, {
                data: 'naration'
              }, {
                data: 'credit',
                render: function render(a, b, c, d) {
                  return "<strong><span style=\"color:#ffffff\">+".concat(a, "</span></strong>");
                }
              }, {
                data: 'debit',
                render: function render(a, b, c, d) {
                  return "<strong><span style=\"color:#ffffff\">-".concat(a, "</span></strong>");
                }
              }, {
                data: 'restAmount'
              }],
              columnDefs: [{
                'targets': 5,
                'createdCell': function createdCell(td, cellData, rowData, row, col) {
                  $(td).css('background', 'green');
                }
              }, {
                'targets': 6,
                'createdCell': function createdCell(td, cellData, rowData, row, col) {
                  $(td).css('background', 'brown');
                }
              }]
            });
          }
        }, {
          key: "getSum",
          value: function getSum(ii) {
            var sum = 0;

            for (var i = 0; i <= ii; i++) {
              console.log(this.walletEntries[i].credit);
              console.log(this.walletEntries[i].debit);
              var cr = typeof this.walletEntries[i].credit == "undefined" || this.walletEntries[i].credit == null ? 0 : parseFloat(this.walletEntries[i].credit);
              var dr = typeof this.walletEntries[i].debit == "undefined" || this.walletEntries[i].debit == null ? 0 : parseFloat(this.walletEntries[i].debit);
              sum = sum + cr - dr;
            }

            return sum;
          }
        }]);

        return WalletTransactionComponent;
      }();

      WalletTransactionComponent.??fac = function WalletTransactionComponent_Factory(t) {
        return new (t || WalletTransactionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_wallettransaction_wallettransaction_service__WEBPACK_IMPORTED_MODULE_2__["WallettransactionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      WalletTransactionComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: WalletTransactionComponent,
        selectors: [["app-wallet-transaction"]],
        decls: 33,
        vars: 0,
        consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "wallet-transaction-list", 1, "table", "table-bordered", "table-striped"]],
        template: function WalletTransactionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-appheader");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-appmenu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Latest E-Wallet Transaction");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "table", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Sr. No.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Member Mobile No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Service");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Operator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Activity(Naration)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Credit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Debit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Balance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "app-appfooter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "app-appsetting");
          }
        },
        directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_5__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_6__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_7__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_8__["AppsettingComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YWxsZXQtdHJhbnNhY3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WalletTransactionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-wallet-transaction',
            templateUrl: './wallet-transaction.component.html',
            styleUrls: ['./wallet-transaction.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_wallettransaction_wallettransaction_service__WEBPACK_IMPORTED_MODULE_2__["WallettransactionService"]
          }, {
            type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "VkP/":
    /*!********************************************************!*\
      !*** ./src/app/pages/appheader/appheader.component.ts ***!
      \********************************************************/

    /*! exports provided: AppheaderComponent */

    /***/
    function VkP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppheaderComponent", function () {
        return AppheaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppheaderComponent = /*#__PURE__*/function () {
        function AppheaderComponent(router) {
          _classCallCheck(this, AppheaderComponent);

          this.router = router;
        }

        _createClass(AppheaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('authToken');
            localStorage.clear();
            this.router.navigate(['/Login']);
          }
        }]);

        return AppheaderComponent;
      }();

      AppheaderComponent.??fac = function AppheaderComponent_Factory(t) {
        return new (t || AppheaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AppheaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AppheaderComponent,
        selectors: [["app-appheader"]],
        decls: 9,
        vars: 0,
        consts: [[1, "main-header", "navbar", "navbar-expand", "navbar-white", "navbar-light", 2, "background-color", "#17a2b8"], [1, "navbar-nav"], [1, "nav-item"], ["data-widget", "pushmenu", "href", "javascript:void(0)", "role", "button", 1, "nav-link"], [1, "fas", "fa-bars"], [1, "navbar-nav", "ml-auto"], ["href", "javascript:void(0)", 1, "right", 2, "padding", "10px 14px", "color", "#fff", 3, "click"]],
        template: function AppheaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppheaderComponent_Template_a_click_7_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Sign out");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppheaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-appheader',
            templateUrl: './appheader.component.html',
            styleUrls: ['./appheader.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "WS/y":
    /*!************************************************!*\
      !*** ./src/app/services/user/users.service.ts ***!
      \************************************************/

    /*! exports provided: UsersService */

    /***/
    function WSY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersService", function () {
        return UsersService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../web-request/web-request.service */
      "fYgw"); // import { User } from '../../models/user.model';


      var UsersService = /*#__PURE__*/function () {
        function UsersService(webReqService) {
          _classCallCheck(this, UsersService);

          this.webReqService = webReqService;
        }

        _createClass(UsersService, [{
          key: "userAuth",
          value: function userAuth(token) {
            return this.webReqService.post('user/validateUser', {
              token: token
            });
          }
        }, {
          key: "getUsers",
          value: function getUsers() {
            return this.webReqService.get('user/alluser');
          }
        }, {
          key: "getSignup",
          value: function getSignup() {
            return this.webReqService.get('users/dashboardSignups');
          }
        }, {
          key: "getRecharges",
          value: function getRecharges() {
            return this.webReqService.get('users/dashboardRecharges');
          }
        }, {
          key: "getUser",
          value: function getUser(userId) {
            return this.webReqService.get("user/profile/".concat(userId));
          }
        }, {
          key: "getUserType",
          value: function getUserType(userType) {
            return this.webReqService.get("users/".concat(userType));
          }
        }, {
          key: "createUser",
          value: function createUser(username, email, password, phone) {
            // We want to send a web request to create a list
            return this.webReqService.post('users', {
              username: username,
              email: email,
              password: password,
              phone: phone
            });
          }
        }, {
          key: "updateUser",
          value: function updateUser(id, username, email, password, phone) {
            // We want to send a web request to update a list
            return this.webReqService.patch("users/".concat(id), {
              username: username,
              email: email,
              password: password,
              phone: phone
            });
          }
        }, {
          key: "activeUser",
          value: function activeUser(userid) {
            // We want to send a web request to update a list
            return this.webReqService.get('user/toggleStatus/' + userid);
          }
        }, {
          key: "inactiveUser",
          value: function inactiveUser(userid) {
            // We want to send a web request to update a list
            return this.webReqService.get('user/toggleStatus/' + userid);
          }
        }, {
          key: "deleteUser",
          value: function deleteUser(id) {
            console.log(id);
            return this.webReqService["delete"]("users/".concat(id));
          }
        }]);

        return UsersService;
      }();

      UsersService.??fac = function UsersService_Factory(t) {
        return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"]));
      };

      UsersService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: UsersService,
        factory: UsersService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UsersService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "WpZX":
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/recharge/percentage-recharge/percentage-recharge.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: PercentageRechargeComponent */

    /***/
    function WpZX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PercentageRechargeComponent", function () {
        return PercentageRechargeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../appheader/appheader.component */
      "VkP/");
      /* harmony import */


      var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../appmenu/appmenu.component */
      "HgAV");
      /* harmony import */


      var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../appfooter/appfooter.component */
      "FFBd");
      /* harmony import */


      var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../appsetting/appsetting.component */
      "gkWW");

      var PercentageRechargeComponent = /*#__PURE__*/function () {
        function PercentageRechargeComponent() {
          _classCallCheck(this, PercentageRechargeComponent);
        }

        _createClass(PercentageRechargeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PercentageRechargeComponent;
      }();

      PercentageRechargeComponent.??fac = function PercentageRechargeComponent_Factory(t) {
        return new (t || PercentageRechargeComponent)();
      };

      PercentageRechargeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: PercentageRechargeComponent,
        selectors: [["app-percentage-recharge"]],
        decls: 32,
        vars: 0,
        consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header"], [1, "card-title"], [1, "card-tools"], ["href", "/member-add", 1, "btn", "btn-success", "btn-sm"], [1, "card-body"], ["id", "example1", 1, "table", "table-bordered", "table-striped"]],
        template: function PercentageRechargeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-appheader");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-appmenu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Recharge Percentage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "table", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Sr No.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Service Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Operator Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Operator Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Commission");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Surcharge");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "app-appfooter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "app-appsetting");
          }
        },
        directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_1__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_2__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_3__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_4__["AppsettingComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJjZW50YWdlLXJlY2hhcmdlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PercentageRechargeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-percentage-recharge',
            templateUrl: './percentage-recharge.component.html',
            styleUrls: ['./percentage-recharge.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "XQFj":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/operator/add-operator/add-operator.component.ts ***!
      \***********************************************************************/

    /*! exports provided: AddOperatorComponent */

    /***/
    function XQFj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddOperatorComponent", function () {
        return AddOperatorComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var src_app_services_operator_operator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/operator/operator.service */
      "lQHH");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../appheader/appheader.component */
      "VkP/");
      /* harmony import */


      var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../appmenu/appmenu.component */
      "HgAV");
      /* harmony import */


      var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../appfooter/appfooter.component */
      "FFBd");
      /* harmony import */


      var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../appsetting/appsetting.component */
      "gkWW");

      var AddOperatorComponent = /*#__PURE__*/function () {
        function AddOperatorComponent(operatorService, router) {
          _classCallCheck(this, AddOperatorComponent);

          this.operatorService = operatorService;
          this.router = router;
        }

        _createClass(AddOperatorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "createOperator",
          value: function createOperator(operatorcode, operatorname, cashbackPercentageForZpay, cashbackPercentageForCustomer, operatorstatus) {
            var _this12 = this;

            var validate = this.validating(operatorcode, operatorname, cashbackPercentageForZpay, cashbackPercentageForCustomer, operatorstatus);

            if (!validate.status) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire(validate.message, '', 'warning');
              return false;
            }

            this.operatorService.createOperator(operatorcode, operatorname, cashbackPercentageForZpay, cashbackPercentageForCustomer, operatorstatus).subscribe(function (operator) {
              console.log(operator); // Now we navigate to /users/user._id

              _this12.router.navigate(['/operator-list']);
            });
          }
        }, {
          key: "validating",
          value: function validating(operatorcode, operatorname, cashbackPercentageForZpay, cashbackPercentageForCustomer, operatorstatus) {
            var res = {
              status: true,
              message: "Validated"
            };

            if (!operatorcode || operatorcode.trim() == "") {
              res.status = false;
              res.message = "Operator code required";
              return res;
            }

            if (!operatorname || operatorname.trim() == "") {
              res.status = false;
              res.message = "Operator name required";
              return res;
            }

            if (!cashbackPercentageForZpay || cashbackPercentageForZpay.trim() == "") {
              res.status = false;
              res.message = "Zpay cashback required";
              return res;
            }

            if (!cashbackPercentageForCustomer || cashbackPercentageForCustomer.trim() == "") {
              res.status = false;
              res.message = "Customer cashback required";
              return res;
            }

            if (!operatorstatus || operatorstatus.trim() == "") {
              res.status = false;
              res.message = "Opertor status required";
              return res;
            }

            return res;
          }
        }]);

        return AddOperatorComponent;
      }();

      AddOperatorComponent.??fac = function AddOperatorComponent_Factory(t) {
        return new (t || AddOperatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_operator_operator_service__WEBPACK_IMPORTED_MODULE_2__["OperatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      AddOperatorComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AddOperatorComponent,
        selectors: [["app-add-operator"]],
        decls: 56,
        vars: 0,
        consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header", "with-border"], [1, "card-title"], [1, "card-body"], [1, "row", "clearfix"], [1, "col-md-6"], ["for", "name", 1, "control-label"], [1, "form-group"], ["type", "text", "name", "operatorcode", "value", "", "id", "operatorcode", 1, "form-control"], ["operatorcode", ""], ["type", "text", "name", "operatorname", "value", "", "id", "operatorname", 1, "form-control"], ["operatorname", ""], ["type", "text", "name", "cashbackPercentageForZpay", "value", "", "id", "cashbackPercentageForZpay", 1, "form-control"], ["cashbackPercentageForZpay", ""], ["type", "text", "name", "cashbackPercentageForCustomer", "value", "", "id", "cashbackPercentageForCustomer", 1, "form-control"], ["cashbackPercentageForCustomer", ""], ["for", "operatorstatus", 1, "control-label"], ["id", "operatorstatus", 1, "form-control"], ["operatorstatus", ""], ["value", ""], ["value", "Active"], ["value", "Pending"], ["value", "cancel"], [1, "card-footer"], [1, "btn", "btn-success", 3, "click"], [1, "fa", "fa-check"]],
        template: function AddOperatorComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-appheader");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-appmenu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Operator Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Operator Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Operator Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "input", 14, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Zpay Cashback");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "input", 16, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Customer Cashback");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "input", 18, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Operator Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "select", 21, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "option", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Select Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Pending");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AddOperatorComponent_Template_button_click_51_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r5);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](17);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](23);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](29);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](35);

              var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](41);

              return ctx.createOperator(_r0.value, _r1.value, _r2.value, _r3.value, _r4.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "i", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, " Save ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "app-appfooter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "app-appsetting");
          }
        },
        directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_4__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_5__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_6__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_7__["AppsettingComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtb3BlcmF0b3IuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AddOperatorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-operator',
            templateUrl: './add-operator.component.html',
            styleUrls: ['./add-operator.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_operator_operator_service__WEBPACK_IMPORTED_MODULE_2__["OperatorService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "XXEo":
    /*!*************************************************!*\
      !*** ./src/app/services/login/login.service.ts ***!
      \*************************************************/

    /*! exports provided: LoginService */

    /***/
    function XXEo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginService", function () {
        return LoginService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../web-request/web-request.service */
      "fYgw");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var LoginService = /*#__PURE__*/function () {
        function LoginService(webService, router, http) {
          _classCallCheck(this, LoginService);

          this.webService = webService;
          this.router = router;
          this.http = http;
        }

        _createClass(LoginService, [{
          key: "login",
          value: function login(email, password) {
            var _this13 = this;

            return this.webService.login(email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (res) {
              console.log(res); // localStorage.setItem('authToken', res.body.authToken)
              // the auth tokens will be in the header of this response

              _this13.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));

              console.log(localStorage.getItem('x-access-token'));
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            this.removeSession();
          }
        }, {
          key: "getAccessToken",
          value: function getAccessToken() {
            return localStorage.getItem('x-access-item');
          }
        }, {
          key: "getRefreshToken",
          value: function getRefreshToken() {
            return localStorage.getItem('x-refresh-item');
          }
        }, {
          key: "setAccessToken",
          value: function setAccessToken(accessToken) {
            localStorage.setItem('x-access-item', accessToken);
          }
        }, {
          key: "setSession",
          value: function setSession(userId, accessToken, refreshToken) {
            localStorage.setItem('user-id', userId);
            localStorage.setItem('x-access-token', accessToken);
            localStorage.setItem('x-refresh-token', refreshToken);
            localStorage.setItem('user-name', "Vikas Saini");
          }
        }, {
          key: "removeSession",
          value: function removeSession() {
            localStorage.removeItem('user-id');
            localStorage.removeItem('x-access-token');
            localStorage.removeItem('x-refresh-token');
            localStorage.removeItem('user-name');
          }
        }]);

        return LoginService;
      }();

      LoginService.??fac = function LoginService_Factory(t) {
        return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_web_request_web_request_service__WEBPACK_IMPORTED_MODULE_2__["WebRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
      };

      LoginService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: LoginService,
        factory: LoginService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_2__["WebRequestService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _pages_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/appheader/appheader.component */
      "VkP/");
      /* harmony import */


      var _pages_appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/appmenu/appmenu.component */
      "HgAV");
      /* harmony import */


      var _pages_appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/appfooter/appfooter.component */
      "FFBd");
      /* harmony import */


      var _pages_appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/appsetting/appsetting.component */
      "gkWW");
      /* harmony import */


      var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pages/dashboard/dashboard.component */
      "U5Cf");
      /* harmony import */


      var _pages_users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pages/users/add-user/add-user.component */
      "mva7");
      /* harmony import */


      var _pages_users_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./pages/users/list-user/list-user.component */
      "lwqZ");
      /* harmony import */


      var _pages_users_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./pages/users/edit-user/edit-user.component */
      "gip2");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _pages_member_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./pages/member/add-member/add-member.component */
      "g05F");
      /* harmony import */


      var _pages_member_list_member_list_member_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./pages/member/list-member/list-member.component */
      "16kr");
      /* harmony import */


      var _pages_member_edit_member_edit_member_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./pages/member/edit-member/edit-member.component */
      "hton");
      /* harmony import */


      var _pages_recharge_list_recharge_list_recharge_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./pages/recharge/list-recharge/list-recharge.component */
      "dwHl");
      /* harmony import */


      var _pages_recharge_pending_recharge_pending_recharge_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./pages/recharge/pending-recharge/pending-recharge.component */
      "jScI");
      /* harmony import */


      var _pages_recharge_percentage_recharge_percentage_recharge_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./pages/recharge/percentage-recharge/percentage-recharge.component */
      "WpZX");
      /* harmony import */


      var _pages_recharge_api_recharge_api_recharge_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./pages/recharge/api-recharge/api-recharge.component */
      "oB0g");
      /* harmony import */


      var _pages_member_percentage_member_percentage_member_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./pages/member/percentage-member/percentage-member.component */
      "8btI");
      /* harmony import */


      var _pages_wallet_wallet_transaction_wallet_transaction_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./pages/wallet/wallet-transaction/wallet-transaction.component */
      "Vi1k");
      /* harmony import */


      var _pages_wallet_wallet_balance_wallet_balance_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./pages/wallet/wallet-balance/wallet-balance.component */
      "CUqn");
      /* harmony import */


      var _pages_member_fund_member_fund_member_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./pages/member/fund-member/fund-member.component */
      "oNai");
      /* harmony import */


      var _pages_report_admin_profit_report_admin_profit_report_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./pages/report/admin-profit-report/admin-profit-report.component */
      "KD3v");
      /* harmony import */


      var _pages_report_transaction_report_transaction_report_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./pages/report/transaction-report/transaction-report.component */
      "Fv0Y");
      /* harmony import */


      var _pages_operator_add_operator_add_operator_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./pages/operator/add-operator/add-operator.component */
      "XQFj");
      /* harmony import */


      var _pages_operator_edit_operator_edit_operator_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./pages/operator/edit-operator/edit-operator.component */
      "95/E");
      /* harmony import */


      var _pages_operator_list_operator_list_operator_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./pages/operator/list-operator/list-operator.component */
      "6KO4");
      /* harmony import */


      var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./pages/login/login.component */
      "D8EZ");
      /* harmony import */


      var _pages_users_user_wallet_user_wallet_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./pages/users/user-wallet/user-wallet.component */
      "TOxE");
      /* harmony import */


      var _pages_users_user_recharge_user_recharge_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./pages/users/user-recharge/user-recharge.component */
      "I+kH");
      /* harmony import */


      var _pages_wallet_wallet_add_wallet_add_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./pages/wallet/wallet-add/wallet-add.component */
      "3QZ1");
      /* harmony import */


      var _pages_recharge_latest_recharge_latest_recharge_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./pages/recharge/latest-recharge/latest-recharge.component */
      "HIZA"); // import { LoginDetailComponent } from './pages/login/login-detail/login-detail.component';


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"]
        }],
        imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _pages_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_5__["AppheaderComponent"], _pages_appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_6__["AppmenuComponent"], _pages_appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_7__["AppfooterComponent"], _pages_appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_8__["AppsettingComponent"], _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], _pages_users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_10__["AddUserComponent"], _pages_users_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_11__["ListUserComponent"], _pages_users_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_12__["EditUserComponent"], _pages_member_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_14__["AddMemberComponent"], _pages_member_list_member_list_member_component__WEBPACK_IMPORTED_MODULE_15__["ListMemberComponent"], _pages_member_edit_member_edit_member_component__WEBPACK_IMPORTED_MODULE_16__["EditMemberComponent"], _pages_recharge_list_recharge_list_recharge_component__WEBPACK_IMPORTED_MODULE_17__["ListRechargeComponent"], _pages_recharge_pending_recharge_pending_recharge_component__WEBPACK_IMPORTED_MODULE_18__["PendingRechargeComponent"], _pages_recharge_percentage_recharge_percentage_recharge_component__WEBPACK_IMPORTED_MODULE_19__["PercentageRechargeComponent"], _pages_recharge_api_recharge_api_recharge_component__WEBPACK_IMPORTED_MODULE_20__["ApiRechargeComponent"], _pages_member_percentage_member_percentage_member_component__WEBPACK_IMPORTED_MODULE_21__["PercentageMemberComponent"], _pages_wallet_wallet_transaction_wallet_transaction_component__WEBPACK_IMPORTED_MODULE_22__["WalletTransactionComponent"], _pages_wallet_wallet_balance_wallet_balance_component__WEBPACK_IMPORTED_MODULE_23__["WalletBalanceComponent"], _pages_member_fund_member_fund_member_component__WEBPACK_IMPORTED_MODULE_24__["FundMemberComponent"], _pages_report_admin_profit_report_admin_profit_report_component__WEBPACK_IMPORTED_MODULE_25__["AdminProfitReportComponent"], _pages_report_transaction_report_transaction_report_component__WEBPACK_IMPORTED_MODULE_26__["TransactionReportComponent"], _pages_operator_add_operator_add_operator_component__WEBPACK_IMPORTED_MODULE_27__["AddOperatorComponent"], _pages_operator_edit_operator_edit_operator_component__WEBPACK_IMPORTED_MODULE_28__["EditOperatorComponent"], _pages_operator_list_operator_list_operator_component__WEBPACK_IMPORTED_MODULE_29__["ListOperatorComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_30__["LoginComponent"], _pages_users_user_wallet_user_wallet_component__WEBPACK_IMPORTED_MODULE_31__["UserWalletComponent"], _pages_users_user_recharge_user_recharge_component__WEBPACK_IMPORTED_MODULE_32__["UserRechargeComponent"], _pages_wallet_wallet_add_wallet_add_component__WEBPACK_IMPORTED_MODULE_33__["WalletAddComponent"], _pages_recharge_latest_recharge_latest_recharge_component__WEBPACK_IMPORTED_MODULE_34__["LatestRechargeComponent"]],
          imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _pages_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_5__["AppheaderComponent"], _pages_appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_6__["AppmenuComponent"], _pages_appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_7__["AppfooterComponent"], _pages_appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_8__["AppsettingComponent"], _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], _pages_users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_10__["AddUserComponent"], _pages_users_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_11__["ListUserComponent"], _pages_users_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_12__["EditUserComponent"], _pages_member_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_14__["AddMemberComponent"], _pages_member_list_member_list_member_component__WEBPACK_IMPORTED_MODULE_15__["ListMemberComponent"], _pages_member_edit_member_edit_member_component__WEBPACK_IMPORTED_MODULE_16__["EditMemberComponent"], _pages_recharge_list_recharge_list_recharge_component__WEBPACK_IMPORTED_MODULE_17__["ListRechargeComponent"], _pages_recharge_pending_recharge_pending_recharge_component__WEBPACK_IMPORTED_MODULE_18__["PendingRechargeComponent"], _pages_recharge_percentage_recharge_percentage_recharge_component__WEBPACK_IMPORTED_MODULE_19__["PercentageRechargeComponent"], _pages_recharge_api_recharge_api_recharge_component__WEBPACK_IMPORTED_MODULE_20__["ApiRechargeComponent"], _pages_member_percentage_member_percentage_member_component__WEBPACK_IMPORTED_MODULE_21__["PercentageMemberComponent"], _pages_wallet_wallet_transaction_wallet_transaction_component__WEBPACK_IMPORTED_MODULE_22__["WalletTransactionComponent"], _pages_wallet_wallet_balance_wallet_balance_component__WEBPACK_IMPORTED_MODULE_23__["WalletBalanceComponent"], _pages_member_fund_member_fund_member_component__WEBPACK_IMPORTED_MODULE_24__["FundMemberComponent"], _pages_report_admin_profit_report_admin_profit_report_component__WEBPACK_IMPORTED_MODULE_25__["AdminProfitReportComponent"], _pages_report_transaction_report_transaction_report_component__WEBPACK_IMPORTED_MODULE_26__["TransactionReportComponent"], _pages_operator_add_operator_add_operator_component__WEBPACK_IMPORTED_MODULE_27__["AddOperatorComponent"], _pages_operator_edit_operator_edit_operator_component__WEBPACK_IMPORTED_MODULE_28__["EditOperatorComponent"], _pages_operator_list_operator_list_operator_component__WEBPACK_IMPORTED_MODULE_29__["ListOperatorComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_30__["LoginComponent"], _pages_users_user_wallet_user_wallet_component__WEBPACK_IMPORTED_MODULE_31__["UserWalletComponent"], _pages_users_user_recharge_user_recharge_component__WEBPACK_IMPORTED_MODULE_32__["UserRechargeComponent"], _pages_wallet_wallet_add_wallet_add_component__WEBPACK_IMPORTED_MODULE_33__["WalletAddComponent"], _pages_recharge_latest_recharge_latest_recharge_component__WEBPACK_IMPORTED_MODULE_34__["LatestRechargeComponent"]],
            imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            providers: [{
              provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
              useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"]
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "cT6d":
    /*!*************************************!*\
      !*** ./src/app/guard/auth.guard.ts ***!
      \*************************************/

    /*! exports provided: AuthGuard */

    /***/
    function cT6d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_user_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/user/users.service */
      "WS/y");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(http, router, userService) {
          _classCallCheck(this, AuthGuard);

          this.http = http;
          this.router = router;
          this.userService = userService;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var token, isOk;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      token = localStorage.getItem('authToken');

                      if (!(!token || token == '' || token == null)) {
                        _context2.next = 5;
                        break;
                      }

                      this.router.navigate(['/Login']);
                      _context2.next = 13;
                      break;

                    case 5:
                      _context2.next = 7;
                      return this.isLoggedIn(token);

                    case 7:
                      isOk = _context2.sent;

                      if (!(isOk == "OK")) {
                        _context2.next = 12;
                        break;
                      }

                      return _context2.abrupt("return", true);

                    case 12:
                      this.router.navigate(['/Login']);

                    case 13:
                      return _context2.abrupt("return", true);

                    case 14:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "isLoggedIn",
          value: function isLoggedIn(token) {
            var _this14 = this;

            return new Promise(function (resolve, rejects) {
              _this14.userService.userAuth(token).subscribe(function (response) {
                if (response['success'] == true) {
                  resolve('OK');
                } else {
                  resolve('KO');
                }
              }, function (error) {
                resolve('KO');
              });
            });
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.??fac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_services_user_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]));
      };

      AuthGuard.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _services_user_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "dwHl":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/recharge/list-recharge/list-recharge.component.ts ***!
      \*************************************************************************/

    /*! exports provided: ListRechargeComponent */

    /***/
    function dwHl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListRechargeComponent", function () {
        return ListRechargeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");
      /* harmony import */


      var src_app_services_recharge_recharge_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/recharge/recharge.service */
      "Sgnu");
      /* harmony import */


      var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/common/common.service */
      "++gc");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../appheader/appheader.component */
      "VkP/");
      /* harmony import */


      var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../appmenu/appmenu.component */
      "HgAV");
      /* harmony import */


      var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../appfooter/appfooter.component */
      "FFBd");
      /* harmony import */


      var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../appsetting/appsetting.component */
      "gkWW");

      var DATATABLE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].dataTableUri;

      var ListRechargeComponent = /*#__PURE__*/function () {
        // constructor(private taskService: TaskService, private router: Router) { }
        function ListRechargeComponent(rechargeservice, common, route, router) {
          _classCallCheck(this, ListRechargeComponent);

          this.rechargeservice = rechargeservice;
          this.common = common;
          this.route = route;
          this.router = router;
        }

        _createClass(ListRechargeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadDataTable(); // (params: Params) => {
            //   if (params.userId) {
            //     this.selectedRechargeId = params.userId;
            //     this.rechargeservice.getRecharge(params.userId).subscribe((recharges: Recharge[]) => {
            //       this.recharges = recharges;
            //     })
            //   } else {
            //     this.recharges = undefined;
            //   }
            // }
            // this.rechargeservice.getRecharges().subscribe((recharges: Recharge[]) => {
            //   this.recharges = recharges;
            // })
            // this.rechargeservice.getOldRecharges().subscribe((recharges: any) => {
            //   this.recharges = recharges.data;
            // })
          }
        }, {
          key: "loadDataTable",
          value: function loadDataTable() {
            $('#old-recharge-list').DataTable({
              order: [0, "desc"],
              processing: true,
              serverSide: true,
              sScrollX: "100%",
              sScrollXInner: "100%",
              bScrollCollapse: true,
              serverMethod: "post",
              layout: 'fixed',
              bDestroy: true,
              ajax: {
                url: "".concat(DATATABLE_URL, "/oldrecharge")
              },
              "lengthMenu": [10, 20, 50, 100, 1000],
              columns: [{
                data: 'sl_no'
              }, {
                data: 'name'
              }, {
                data: 'phone'
              }, {
                data: 'mobile'
              }, {
                data: 'amount'
              }, {
                data: 'operator'
              }, {
                data: 'txnId'
              }, {
                data: 'transactionId'
              }, {
                data: 'status'
              }, {
                data: 'apiName'
              }, {
                data: 'operatorRef'
              }, {
                data: 'errormessage'
              }, {
                data: 'createdAt'
              }]
            });
          }
        }]);

        return ListRechargeComponent;
      }();

      ListRechargeComponent.??fac = function ListRechargeComponent_Factory(t) {
        return new (t || ListRechargeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_recharge_recharge_service__WEBPACK_IMPORTED_MODULE_2__["RechargeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      ListRechargeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ListRechargeComponent,
        selectors: [["app-list-recharge"]],
        decls: 43,
        vars: 0,
        consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "old-recharge-list", 1, "table", "table-bordered", "table-striped"]],
        template: function ListRechargeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-appheader");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-appmenu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Old Recharge History");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "table", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Sr. No.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Member Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Member Mobile No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Recharge No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Recharge Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Operator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "TX ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "API Tx ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "API Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Operator Ref.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Error Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Date And Time");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "app-appfooter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "app-appsetting");
          }
        },
        directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_5__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_6__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_7__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_8__["AppsettingComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXJlY2hhcmdlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ListRechargeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-list-recharge',
            templateUrl: './list-recharge.component.html',
            styleUrls: ['./list-recharge.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_recharge_recharge_service__WEBPACK_IMPORTED_MODULE_2__["RechargeService"]
          }, {
            type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "fYgw":
    /*!*************************************************************!*\
      !*** ./src/app/services/web-request/web-request.service.ts ***!
      \*************************************************************/

    /*! exports provided: WebRequestService */

    /***/
    function fYgw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebRequestService", function () {
        return WebRequestService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var WebRequestService = /*#__PURE__*/function () {
        function WebRequestService(http) {
          _classCallCheck(this, WebRequestService);

          this.http = http; // this.ROOT_URL = 'http://localhost:3002/';

          this.ROOT_URL = "https://zpays.in:3002/";
        }

        _createClass(WebRequestService, [{
          key: "get",
          value: function get(uri) {
            var authToken = localStorage.getItem('authToken');
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              Authorization: authToken,
              deviceType: "web",
              deviceToken: "1234567890web"
            });
            return this.http.get("".concat(this.ROOT_URL).concat(uri), {
              headers: headers
            });
          }
        }, {
          key: "post",
          value: function post(uri, payload) {
            var authToken = localStorage.getItem('authToken');
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              Authorization: authToken,
              deviceType: "web",
              deviceToken: "1234567890web"
            });
            return this.http.post("".concat(this.ROOT_URL).concat(uri), payload, {
              headers: headers
            });
          }
        }, {
          key: "patch",
          value: function patch(uri, payload) {
            return this.http.patch("".concat(this.ROOT_URL, "/").concat(uri), payload);
          }
        }, {
          key: "delete",
          value: function _delete(uri) {
            return this.http["delete"]("".concat(this.ROOT_URL, "/").concat(uri));
          }
        }, {
          key: "login",
          value: function login(email, password) {
            // alert("naruto1" + email)
            // alert(`${this.ROOT_URL}/users/login`)
            // return
            var body = {
              username: email,
              password: password,
              deviceType: "web",
              deviceToken: "1234567890web",
              location: {
                lat: "0.0000000000",
                "long": "0.0000000000"
              },
              ipAddress: "1.1.1.1",
              macAddress: "1.1.1.1"
            };
            return this.http.post("".concat(this.ROOT_URL, "user/login/admin"), body, {
              observe: 'response'
            });
          }
        }, {
          key: "signup",
          value: function signup(email, password) {
            return this.http.post("".concat(this.ROOT_URL, "/users"), {
              email: email,
              password: password
            }, {
              observe: 'response'
            });
          }
        }]);

        return WebRequestService;
      }();

      WebRequestService.??fac = function WebRequestService_Factory(t) {
        return new (t || WebRequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      WebRequestService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: WebRequestService,
        factory: WebRequestService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](WebRequestService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "g05F":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/member/add-member/add-member.component.ts ***!
      \*****************************************************************/

    /*! exports provided: AddMemberComponent */

    /***/
    function g05F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddMemberComponent", function () {
        return AddMemberComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../appheader/appheader.component */
      "VkP/");
      /* harmony import */


      var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../appmenu/appmenu.component */
      "HgAV");
      /* harmony import */


      var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../appfooter/appfooter.component */
      "FFBd");
      /* harmony import */


      var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../appsetting/appsetting.component */
      "gkWW");

      var AddMemberComponent = /*#__PURE__*/function () {
        function AddMemberComponent() {
          _classCallCheck(this, AddMemberComponent);
        }

        _createClass(AddMemberComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AddMemberComponent;
      }();

      AddMemberComponent.??fac = function AddMemberComponent_Factory(t) {
        return new (t || AddMemberComponent)();
      };

      AddMemberComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AddMemberComponent,
        selectors: [["app-add-member"]],
        decls: 86,
        vars: 0,
        consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header", "with-border"], [1, "card-title"], [1, "card-body"], [1, "row", "clearfix"], [1, "col-md-4"], ["for", "name", 1, "control-label"], [1, "form-group"], ["type", "text", "name", "firmname", "value", "", "id", "firmname", 1, "form-control"], ["firmname", ""], ["for", "email", 1, "control-label"], [1, "text-danger"], ["type", "text", "name", "email", "value", "", "id", "email", 1, "form-control"], ["email", ""], ["for", "phone", 1, "control-label"], ["type", "text", "name", "phone", "value", "", "id", "phone", 1, "form-control"], ["phone", ""], ["for", "password", 1, "control-label"], ["type", "password", "name", "password", "value", "", "id", "password", 1, "form-control"], ["password", ""], ["for", "transactionpass", 1, "control-label"], ["type", "text", "name", "transactionpass", "value", "", "id", "transactionpass", 1, "form-control"], ["transactionpass", ""], ["for", "address", 1, "control-label"], ["type", "text", "name", "address", "value", "", "id", "address", 1, "form-control"], ["address", ""], ["for", "landmark", 1, "control-label"], ["type", "text", "name", "landmark", "value", "", "id", "landmark", 1, "form-control"], ["landmark", ""], ["for", "country", 1, "control-label"], ["type", "text", "name", "country", "value", "", "id", "country", 1, "form-control"], ["country", ""], ["for", "state", 1, "control-label"], ["type", "text", "name", "state", "value", "", "id", "state", 1, "form-control"], ["state", ""], ["for", "city", 1, "control-label"], ["type", "text", "name", "city", "value", "", "id", "city", 1, "form-control"], ["city", ""], ["for", "pincode", 1, "control-label"], ["type", "text", "name", "pincode", "value", "", "id", "pincode", 1, "form-control"], ["pincode", ""], [1, "card-footer"], [1, "btn", "btn-success"], [1, "fa", "fa-check"]],
        template: function AddMemberComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-appheader");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-appmenu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Member Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Firm Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "input", 16, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Mobile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "input", 19, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "input", 22, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Transaction Password (Pin)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "input", 25, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "label", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "input", 28, 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "label", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Landmark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "input", 31, 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "label", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "input", 34, 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "label", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "State");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "input", 37, 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "label", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "City");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "input", 40, 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "label", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Pincode");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "input", 43, 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "button", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](82, "i", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, " Save ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "app-appfooter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "app-appsetting");
          }
        },
        directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_1__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_2__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_3__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_4__["AppsettingComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtbWVtYmVyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AddMemberComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-member',
            templateUrl: './add-member.component.html',
            styleUrls: ['./add-member.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "gip2":
    /*!**************************************************************!*\
      !*** ./src/app/pages/users/edit-user/edit-user.component.ts ***!
      \**************************************************************/

    /*! exports provided: EditUserComponent */

    /***/
    function gip2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditUserComponent", function () {
        return EditUserComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/user/users.service */
      "WS/y");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../appheader/appheader.component */
      "VkP/");
      /* harmony import */


      var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../appmenu/appmenu.component */
      "HgAV");
      /* harmony import */


      var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../appfooter/appfooter.component */
      "FFBd");
      /* harmony import */


      var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../appsetting/appsetting.component */
      "gkWW");

      var EditUserComponent = /*#__PURE__*/function () {
        function EditUserComponent(usersService, route, router) {
          _classCallCheck(this, EditUserComponent);

          this.usersService = usersService;
          this.route = route;
          this.router = router;
        }

        _createClass(EditUserComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this.route.params.subscribe(function (params) {
              if (params.userId) {
                _this15.selectedUserId = params.userId;

                _this15.usersService.getUser(params.userId).subscribe(function (users) {
                  _this15.users = users;
                });
              } else {
                _this15.users = undefined;
              }
            });
          }
        }, {
          key: "updateUser",
          value: function updateUser(id, username, email, password, phone) {
            var _this16 = this;

            this.usersService.updateUser(id, username, email, password, phone).subscribe(function (user) {
              console.log(user); // Now we navigate to /users/user._id

              _this16.router.navigate(['/user-list']);
            });
          }
        }]);

        return EditUserComponent;
      }();

      EditUserComponent.??fac = function EditUserComponent_Factory(t) {
        return new (t || EditUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      EditUserComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: EditUserComponent,
        selectors: [["app-edit-user"]],
        decls: 47,
        vars: 4,
        consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header", "with-border"], [1, "card-title"], [1, "card-body"], [1, "row", "clearfix"], [1, "col-md-6"], ["for", "name", 1, "control-label"], [1, "text-danger"], [1, "form-group"], ["type", "text", "name", "name", "id", "name", 1, "form-control", 3, "value"], ["userName", ""], ["for", "email", 1, "control-label"], ["type", "text", "name", "email", "id", "email", 1, "form-control", 3, "value"], ["email", ""], ["for", "phone", 1, "control-label"], ["type", "text", "name", "phone", "id", "phone", 1, "form-control", 3, "value"], ["phone", ""], ["for", "password", 1, "control-label"], ["type", "text", "name", "password", "id", "password", 1, "form-control", 3, "value"], ["password", ""], [1, "card-footer"], ["type", "submit", 1, "btn", "btn-success", 3, "click"], [1, "fa", "fa-check"]],
        template: function EditUserComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-appheader");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-appmenu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "User Edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "input", 13, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "input", 16, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "input", 19, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "input", 22, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EditUserComponent_Template_button_click_42_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](19);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](28);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](40);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](34);

              return ctx.updateUser(ctx.users[0]._id, _r0.value, _r1.value, _r3.value, _r2.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "i", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, " Save ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "app-appfooter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "app-appsetting");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", ctx.users[0].username);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", ctx.users[0].email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", ctx.users[0].phone);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", ctx.users[0].password);
          }
        },
        directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_3__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_4__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_5__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_6__["AppsettingComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXVzZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EditUserComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-edit-user',
            templateUrl: './edit-user.component.html',
            styleUrls: ['./edit-user.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "gkWW":
    /*!**********************************************************!*\
      !*** ./src/app/pages/appsetting/appsetting.component.ts ***!
      \**********************************************************/

    /*! exports provided: AppsettingComponent */

    /***/
    function gkWW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppsettingComponent", function () {
        return AppsettingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppsettingComponent = /*#__PURE__*/function () {
        function AppsettingComponent() {
          _classCallCheck(this, AppsettingComponent);
        }

        _createClass(AppsettingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppsettingComponent;
      }();

      AppsettingComponent.??fac = function AppsettingComponent_Factory(t) {
        return new (t || AppsettingComponent)();
      };

      AppsettingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AppsettingComponent,
        selectors: [["app-appsetting"]],
        decls: 1,
        vars: 0,
        consts: [[1, "control-sidebar", "control-sidebar-dark"]],
        template: function AppsettingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "aside", 0);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzZXR0aW5nLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppsettingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-appsetting',
            templateUrl: './appsetting.component.html',
            styleUrls: ['./appsetting.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "hton":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/member/edit-member/edit-member.component.ts ***!
      \*******************************************************************/

    /*! exports provided: EditMemberComponent */

    /***/
    function hton(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditMemberComponent", function () {
        return EditMemberComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../appheader/appheader.component */
      "VkP/");
      /* harmony import */


      var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../appmenu/appmenu.component */
      "HgAV");
      /* harmony import */


      var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../appfooter/appfooter.component */
      "FFBd");
      /* harmony import */


      var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../appsetting/appsetting.component */
      "gkWW");

      var EditMemberComponent = /*#__PURE__*/function () {
        function EditMemberComponent() {
          _classCallCheck(this, EditMemberComponent);
        }

        _createClass(EditMemberComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EditMemberComponent;
      }();

      EditMemberComponent.??fac = function EditMemberComponent_Factory(t) {
        return new (t || EditMemberComponent)();
      };

      EditMemberComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: EditMemberComponent,
        selectors: [["app-edit-member"]],
        decls: 86,
        vars: 0,
        consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header", "with-border"], [1, "card-title"], [1, "card-body"], [1, "row", "clearfix"], [1, "col-md-4"], ["for", "name", 1, "control-label"], [1, "form-group"], ["type", "text", "name", "firmname", "value", "", "id", "firmname", 1, "form-control"], ["firmname", ""], ["for", "email", 1, "control-label"], [1, "text-danger"], ["type", "text", "name", "email", "value", "", "id", "email", 1, "form-control"], ["email", ""], ["for", "phone", 1, "control-label"], ["type", "text", "name", "phone", "value", "", "id", "phone", 1, "form-control"], ["phone", ""], ["for", "password", 1, "control-label"], ["type", "password", "name", "password", "value", "", "id", "password", 1, "form-control"], ["password", ""], ["for", "transactionpass", 1, "control-label"], ["type", "text", "name", "transactionpass", "value", "", "id", "transactionpass", 1, "form-control"], ["transactionpass", ""], ["for", "address", 1, "control-label"], ["type", "text", "name", "address", "value", "", "id", "address", 1, "form-control"], ["address", ""], ["for", "landmark", 1, "control-label"], ["type", "text", "name", "landmark", "value", "", "id", "landmark", 1, "form-control"], ["landmark", ""], ["for", "country", 1, "control-label"], ["type", "text", "name", "country", "value", "", "id", "country", 1, "form-control"], ["country", ""], ["for", "state", 1, "control-label"], ["type", "text", "name", "state", "value", "", "id", "state", 1, "form-control"], ["state", ""], ["for", "city", 1, "control-label"], ["type", "text", "name", "city", "value", "", "id", "city", 1, "form-control"], ["city", ""], ["for", "pincode", 1, "control-label"], ["type", "text", "name", "pincode", "value", "", "id", "pincode", 1, "form-control"], ["pincode", ""], [1, "card-footer"], [1, "btn", "btn-success"], [1, "fa", "fa-check"]],
        template: function EditMemberComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-appheader");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-appmenu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Member Edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Firm Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "input", 16, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Mobile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "input", 19, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "input", 22, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Transaction Password (Pin)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "input", 25, 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "label", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "input", 28, 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "label", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Landmark");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "input", 31, 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "label", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "input", 34, 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "label", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "State");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "input", 37, 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "label", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "City");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "input", 40, 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "label", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Pincode");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "input", 43, 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "button", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](82, "i", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, " Save ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "app-appfooter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "app-appsetting");
          }
        },
        directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_1__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_2__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_3__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_4__["AppsettingComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LW1lbWJlci5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EditMemberComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-edit-member',
            templateUrl: './edit-member.component.html',
            styleUrls: ['./edit-member.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "jScI":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/recharge/pending-recharge/pending-recharge.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: PendingRechargeComponent */

    /***/
    function jScI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PendingRechargeComponent", function () {
        return PendingRechargeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");
      /* harmony import */


      var src_app_services_recharge_recharge_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/recharge/recharge.service */
      "Sgnu");
      /* harmony import */


      var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/common/common.service */
      "++gc");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../appheader/appheader.component */
      "VkP/");
      /* harmony import */


      var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../appmenu/appmenu.component */
      "HgAV");
      /* harmony import */


      var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../appfooter/appfooter.component */
      "FFBd");
      /* harmony import */


      var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../appsetting/appsetting.component */
      "gkWW");

      var DATATABLE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].dataTableUri;

      var PendingRechargeComponent = /*#__PURE__*/function () {
        // constructor(private taskService: TaskService, private router: Router) { }
        function PendingRechargeComponent(rechargeService, common, route, router) {
          _classCallCheck(this, PendingRechargeComponent);

          this.rechargeService = rechargeService;
          this.common = common;
          this.route = route;
          this.router = router;
        }

        _createClass(PendingRechargeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // this.common.loadScript()
            // this.rechargeService.getPendingRecharges().subscribe((recharges: any) => {
            //   this.recharges = recharges.data;
            // })
            this.loadDataTable();
          }
        }, {
          key: "loadDataTable",
          value: function loadDataTable() {
            $('#pending-recharge-list').DataTable({
              order: [0, "desc"],
              processing: true,
              serverSide: true,
              sScrollX: "100%",
              sScrollXInner: "100%",
              bScrollCollapse: true,
              serverMethod: "post",
              layout: 'fixed',
              bDestroy: true,
              ajax: {
                url: "".concat(DATATABLE_URL, "/pendingrecharge")
              },
              "lengthMenu": [10, 20, 50, 100, 1000],
              columns: [{
                data: 'sl_no'
              }, {
                data: 'name'
              }, {
                data: 'phone'
              }, {
                data: 'mobile'
              }, {
                data: 'amount'
              }, {
                data: 'operator'
              }, {
                data: 'txnId'
              }, {
                data: 'transactionId'
              }, {
                data: 'status'
              }, {
                data: 'apiName'
              }, {
                data: 'operatorRef'
              }, {
                data: 'errormessage'
              }, {
                data: 'createdAt'
              }]
            });
          }
        }]);

        return PendingRechargeComponent;
      }();

      PendingRechargeComponent.??fac = function PendingRechargeComponent_Factory(t) {
        return new (t || PendingRechargeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_recharge_recharge_service__WEBPACK_IMPORTED_MODULE_2__["RechargeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      PendingRechargeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: PendingRechargeComponent,
        selectors: [["app-pending-recharge"]],
        decls: 43,
        vars: 0,
        consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "pending-recharge-list", 1, "table", "table-bordered", "table-striped"]],
        template: function PendingRechargeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-appheader");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-appmenu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Pending Recharge History");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "table", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Sr. No.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Member Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Mobile No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "CA Mobile No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Recharge Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Operator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "TX ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "API Tx ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "APIID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Operator Ref.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Error Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "app-appfooter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "app-appsetting");
          }
        },
        directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_5__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_6__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_7__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_8__["AppsettingComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZW5kaW5nLXJlY2hhcmdlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PendingRechargeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-pending-recharge',
            templateUrl: './pending-recharge.component.html',
            styleUrls: ['./pending-recharge.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_recharge_recharge_service__WEBPACK_IMPORTED_MODULE_2__["RechargeService"]
          }, {
            type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "lQHH":
    /*!*******************************************************!*\
      !*** ./src/app/services/operator/operator.service.ts ***!
      \*******************************************************/

    /*! exports provided: OperatorService */

    /***/
    function lQHH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperatorService", function () {
        return OperatorService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../web-request/web-request.service */
      "fYgw");

      var DATATABLE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].dataTableUri;

      var OperatorService = /*#__PURE__*/function () {
        function OperatorService(webReqService) {
          _classCallCheck(this, OperatorService);

          this.webReqService = webReqService;
        }

        _createClass(OperatorService, [{
          key: "getOperators",
          value: function getOperators() {
            // return this.webReqService.get('operator/getAll');
            return this.webReqService.get("datatable/operatorList");
          }
        }, {
          key: "getOperator",
          value: function getOperator(operatorId) {
            return this.webReqService.get("operator/".concat(operatorId));
          }
        }, {
          key: "createOperator",
          value: function createOperator(operatorcode, operatorname, cashbackPercentageForZpay, cashbackPercentageForCustomer, operatorstatus) {
            // We want to send a web request to create a list
            // return this.webReqService.get('operator/add?name=' + operatorname + '%26operatorCode=' + operatorcode + '%26cashbackPercentageForZpay=' + cashbackPercentageForZpay + '%26cashbackPercentageForCustomer=' + cashbackPercentageForCustomer + '%26status=' + operatorstatus);
            return this.webReqService.post('operator/add', {
              name: operatorname,
              operatorCode: operatorcode,
              cashbackPercentageForZpay: cashbackPercentageForZpay,
              cashbackPercentageForCustomer: cashbackPercentageForCustomer,
              status: operatorstatus
            });
          }
        }, {
          key: "updateOperator",
          value: function updateOperator(payload) {
            return this.webReqService.post('operator/update', payload);
          }
        }, {
          key: "updateUser",
          value: function updateUser(operatorid, operatorcode, operatorname, cashbackPercentageForZpay, cashbackPercentageForCustomer, operatorstatus) {
            // We want to send a web request to update a list
            return this.webReqService.get('operator/update/?operatorid=' + operatorid + '%26name=' + operatorname + '%26operatorCode=' + operatorcode + '%26cashbackPercentageForZpay=' + cashbackPercentageForZpay + '%26cashbackPercentageForCustomer=' + cashbackPercentageForCustomer + '%26status=' + operatorstatus);
          }
        }, {
          key: "deleteUser",
          value: function deleteUser(id) {
            console.log(id);
            return this.webReqService["delete"]("operator/".concat(id));
          }
        }]);

        return OperatorService;
      }();

      OperatorService.??fac = function OperatorService_Factory(t) {
        return new (t || OperatorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_web_request_web_request_service__WEBPACK_IMPORTED_MODULE_2__["WebRequestService"]));
      };

      OperatorService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: OperatorService,
        factory: OperatorService.??fac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OperatorService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_2__["WebRequestService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "lwqZ":
    /*!**************************************************************!*\
      !*** ./src/app/pages/users/list-user/list-user.component.ts ***!
      \**************************************************************/

    /*! exports provided: ListUserComponent */

    /***/
    function lwqZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListUserComponent", function () {
        return ListUserComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../environments/environment */
      "AytR");
      /* harmony import */


      var src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/user/users.service */
      "WS/y");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../appheader/appheader.component */
      "VkP/");
      /* harmony import */


      var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../appmenu/appmenu.component */
      "HgAV");
      /* harmony import */


      var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../appfooter/appfooter.component */
      "FFBd");
      /* harmony import */


      var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../appsetting/appsetting.component */
      "gkWW");

      var DATATABLE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].dataTableUri;

      var ListUserComponent = /*#__PURE__*/function () {
        // constructor(private taskService: TaskService, private router: Router) { }
        function ListUserComponent(usersService, ngZone, route, router) {
          _classCallCheck(this, ListUserComponent);

          this.usersService = usersService;
          this.ngZone = ngZone;
          this.route = route;
          this.router = router; // this.usersService.getUsers().subscribe((users: any) => {
          //   this.users = users.data;
          // })
        }

        _createClass(ListUserComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            window['angularComponentReference'] = {
              component: this,
              zone: this.ngZone,
              changeUserStatus: function changeUserStatus(id, status, cssid) {
                return _this17.changeUserStatus(id, status, cssid);
              },
              userWalletRedirection: function userWalletRedirection(id) {
                return _this17.userWalletRedirection(id);
              }
            };
            $('#user-list').DataTable({
              order: [0, "desc"],
              processing: true,
              serverSide: true,
              sScrollX: "100%",
              sScrollXInner: "100%",
              bScrollCollapse: true,
              serverMethod: "post",
              layout: 'fixed',
              bDestroy: true,
              ajax: {
                url: "".concat(DATATABLE_URL, "/userList")
              },
              "lengthMenu": [10, 20, 50, 100, 1000],
              columns: [{
                data: "sl_no",
                orderable: false
              }, {
                data: "name"
              }, {
                data: "email"
              }, {
                data: "phone"
              }, {
                data: "walletBalance"
              }, {
                data: "date"
              }, {
                data: "status"
              }, {
                data: "action"
              }]
            }); // this.route.params.subscribe(
            //   (params: Params) => {
            //     if (params.userId) {
            //       this.selectedUserId = params.userId;
            //       this.usersService.getUser(params.userId).subscribe((users: User[]) => {
            //         this.users = users;
            //       })
            //     } else {
            //       this.users = undefined;
            //     }
            //   }
            // )
            // this.usersService.getUsers().subscribe((users: User[]) => {
            //   this.users = users;
            // })
          }
        }, {
          key: "changeUserStatus",
          value: function changeUserStatus(id, status, cssid) {
            document.getElementById(cssid).innerText = "...";

            if (status == "Active") {
              this.onInactiveUserClick(id);
            } else {
              this.onActiveUserClick(id);
            }
          }
        }, {
          key: "userWalletRedirection",
          value: function userWalletRedirection(id) {
            this.router.navigate(["user-wallet/" + id]);
          }
        }, {
          key: "onDeleteUserClick",
          value: function onDeleteUserClick(selectedUserId) {
            var _this18 = this;

            console.log("naruto");
            this.usersService.deleteUser(selectedUserId).subscribe(function (res) {
              _this18.ngOnInit();
            });
          }
        }, {
          key: "onActiveUserClick",
          value: function onActiveUserClick(selectedUserId) {
            var _this19 = this;

            this.usersService.activeUser(selectedUserId).subscribe(function (res) {
              _this19.ngOnInit();
            });
          }
        }, {
          key: "onInactiveUserClick",
          value: function onInactiveUserClick(selectedUserId) {
            var _this20 = this;

            this.usersService.inactiveUser(selectedUserId).subscribe(function (res) {
              _this20.ngOnInit();
            });
          }
        }]);

        return ListUserComponent;
      }();

      ListUserComponent.??fac = function ListUserComponent_Factory(t) {
        return new (t || ListUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      ListUserComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ListUserComponent,
        selectors: [["app-list-user"]],
        decls: 33,
        vars: 0,
        consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "user-list", 1, "table", "table-bordered", "table-striped"]],
        template: function ListUserComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-appheader");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-appmenu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Usertype Listing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "table", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Sl No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Wallet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Last activity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "app-appfooter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "app-appsetting");
          }
        },
        directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_4__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_5__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_6__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_7__["AppsettingComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXVzZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ListUserComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-list-user',
            templateUrl: './list-user.component.html',
            styleUrls: ['./list-user.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "mva7":
    /*!************************************************************!*\
      !*** ./src/app/pages/users/add-user/add-user.component.ts ***!
      \************************************************************/

    /*! exports provided: AddUserComponent */

    /***/
    function mva7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddUserComponent", function () {
        return AddUserComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/user/users.service */
      "WS/y");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../appheader/appheader.component */
      "VkP/");
      /* harmony import */


      var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../appmenu/appmenu.component */
      "HgAV");
      /* harmony import */


      var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../appfooter/appfooter.component */
      "FFBd");
      /* harmony import */


      var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../appsetting/appsetting.component */
      "gkWW");

      var AddUserComponent = /*#__PURE__*/function () {
        function AddUserComponent(usersService, router) {
          _classCallCheck(this, AddUserComponent);

          this.usersService = usersService;
          this.router = router;
        }

        _createClass(AddUserComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "createUser",
          value: function createUser(username, email, password, phone) {
            var _this21 = this;

            this.usersService.createUser(username, email, password, phone).subscribe(function (user) {
              console.log(user); // Now we navigate to /users/user._id

              _this21.router.navigate(['/user-list']);
            });
          }
        }]);

        return AddUserComponent;
      }();

      AddUserComponent.??fac = function AddUserComponent_Factory(t) {
        return new (t || AddUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AddUserComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AddUserComponent,
        selectors: [["app-add-user"]],
        decls: 46,
        vars: 0,
        consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header", "with-border"], [1, "card-title"], [1, "card-body"], [1, "row", "clearfix"], [1, "col-md-6"], ["for", "name", 1, "control-label"], [1, "text-danger"], [1, "form-group"], ["type", "text", "name", "name", "value", "", "id", "name", 1, "form-control"], ["userName", ""], ["for", "email", 1, "control-label"], ["type", "text", "name", "email", "value", "", "id", "email", 1, "form-control"], ["email", ""], ["for", "password", 1, "control-label"], ["type", "password", "name", "password", "value", "", "id", "password", 1, "form-control"], ["password", ""], ["for", "phone", 1, "control-label"], ["type", "text", "name", "phone", "value", "", "id", "phone", 1, "form-control"], ["phone", ""], [1, "card-footer"], [1, "btn", "btn-success", 3, "click"], [1, "fa", "fa-check"]],
        template: function AddUserComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-appheader");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-appmenu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "User Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "input", 13, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "input", 16, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "input", 19, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "input", 22, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AddUserComponent_Template_button_click_41_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](19);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](27);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](33);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](39);

              return ctx.createUser(_r0.value, _r1.value, _r2.value, _r3.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "i", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, " Save ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "app-appfooter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "app-appsetting");
          }
        },
        directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_3__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_4__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_5__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_6__["AppsettingComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtdXNlci5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AddUserComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-user',
            templateUrl: './add-user.component.html',
            styleUrls: ['./add-user.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "oB0g":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/recharge/api-recharge/api-recharge.component.ts ***!
      \***********************************************************************/

    /*! exports provided: ApiRechargeComponent */

    /***/
    function oB0g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiRechargeComponent", function () {
        return ApiRechargeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../appheader/appheader.component */
      "VkP/");
      /* harmony import */


      var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../appmenu/appmenu.component */
      "HgAV");
      /* harmony import */


      var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../appfooter/appfooter.component */
      "FFBd");
      /* harmony import */


      var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../appsetting/appsetting.component */
      "gkWW");

      var ApiRechargeComponent = /*#__PURE__*/function () {
        function ApiRechargeComponent() {
          _classCallCheck(this, ApiRechargeComponent);
        }

        _createClass(ApiRechargeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ApiRechargeComponent;
      }();

      ApiRechargeComponent.??fac = function ApiRechargeComponent_Factory(t) {
        return new (t || ApiRechargeComponent)();
      };

      ApiRechargeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ApiRechargeComponent,
        selectors: [["app-api-recharge"]],
        decls: 28,
        vars: 0,
        consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header"], [1, "card-title"], [1, "card-tools"], ["href", "/member-add", 1, "btn", "btn-success", "btn-sm"], [1, "card-body"], ["id", "example1", 1, "table", "table-bordered", "table-striped"]],
        template: function ApiRechargeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-appheader");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-appmenu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "API Recharge");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "table", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "API ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "API Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Available Balance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Commission Setting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "app-appfooter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "app-appsetting");
          }
        },
        directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_1__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_2__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_3__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_4__["AppsettingComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcGktcmVjaGFyZ2UuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ApiRechargeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-api-recharge',
            templateUrl: './api-recharge.component.html',
            styleUrls: ['./api-recharge.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "oNai":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/member/fund-member/fund-member.component.ts ***!
      \*******************************************************************/

    /*! exports provided: FundMemberComponent */

    /***/
    function oNai(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FundMemberComponent", function () {
        return FundMemberComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FundMemberComponent = /*#__PURE__*/function () {
        function FundMemberComponent() {
          _classCallCheck(this, FundMemberComponent);
        }

        _createClass(FundMemberComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FundMemberComponent;
      }();

      FundMemberComponent.??fac = function FundMemberComponent_Factory(t) {
        return new (t || FundMemberComponent)();
      };

      FundMemberComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: FundMemberComponent,
        selectors: [["app-fund-member"]],
        decls: 2,
        vars: 0,
        template: function FundMemberComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "fund-member works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdW5kLW1lbWJlci5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FundMemberComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-fund-member',
            templateUrl: './fund-member.component.html',
            styleUrls: ['./fund-member.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/dashboard/dashboard.component */
      "U5Cf");
      /* harmony import */


      var _pages_users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/users/add-user/add-user.component */
      "mva7");
      /* harmony import */


      var _pages_users_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/users/edit-user/edit-user.component */
      "gip2");
      /* harmony import */


      var _pages_users_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/users/list-user/list-user.component */
      "lwqZ");
      /* harmony import */


      var _pages_member_list_member_list_member_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/member/list-member/list-member.component */
      "16kr");
      /* harmony import */


      var _pages_member_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/member/add-member/add-member.component */
      "g05F");
      /* harmony import */


      var _pages_member_edit_member_edit_member_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pages/member/edit-member/edit-member.component */
      "hton");
      /* harmony import */


      var _pages_wallet_wallet_transaction_wallet_transaction_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pages/wallet/wallet-transaction/wallet-transaction.component */
      "Vi1k");
      /* harmony import */


      var _pages_wallet_wallet_balance_wallet_balance_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pages/wallet/wallet-balance/wallet-balance.component */
      "CUqn");
      /* harmony import */


      var _pages_recharge_list_recharge_list_recharge_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./pages/recharge/list-recharge/list-recharge.component */
      "dwHl");
      /* harmony import */


      var _pages_recharge_api_recharge_api_recharge_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./pages/recharge/api-recharge/api-recharge.component */
      "oB0g");
      /* harmony import */


      var _pages_recharge_percentage_recharge_percentage_recharge_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./pages/recharge/percentage-recharge/percentage-recharge.component */
      "WpZX");
      /* harmony import */


      var _pages_recharge_pending_recharge_pending_recharge_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./pages/recharge/pending-recharge/pending-recharge.component */
      "jScI");
      /* harmony import */


      var _pages_operator_add_operator_add_operator_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./pages/operator/add-operator/add-operator.component */
      "XQFj");
      /* harmony import */


      var _pages_operator_edit_operator_edit_operator_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./pages/operator/edit-operator/edit-operator.component */
      "95/E");
      /* harmony import */


      var _pages_operator_list_operator_list_operator_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./pages/operator/list-operator/list-operator.component */
      "6KO4");
      /* harmony import */


      var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./pages/login/login.component */
      "D8EZ");
      /* harmony import */


      var _pages_users_user_wallet_user_wallet_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./pages/users/user-wallet/user-wallet.component */
      "TOxE");
      /* harmony import */


      var _pages_users_user_recharge_user_recharge_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./pages/users/user-recharge/user-recharge.component */
      "I+kH");
      /* harmony import */


      var _pages_wallet_wallet_add_wallet_add_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./pages/wallet/wallet-add/wallet-add.component */
      "3QZ1");
      /* harmony import */


      var _pages_recharge_latest_recharge_latest_recharge_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./pages/recharge/latest-recharge/latest-recharge.component */
      "HIZA");
      /* harmony import */


      var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./guard/auth.guard */
      "cT6d");

      var routes = [{
        path: '',
        redirectTo: '/Login',
        pathMatch: 'full'
      }, {
        path: 'dashboard',
        component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]]
      }, {
        path: 'user-add',
        component: _pages_users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_3__["AddUserComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]]
      }, {
        path: 'user-edit/:userId',
        component: _pages_users_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_4__["EditUserComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]]
      }, {
        path: 'user-wallet/:userId',
        component: _pages_users_user_wallet_user_wallet_component__WEBPACK_IMPORTED_MODULE_19__["UserWalletComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]]
      }, {
        path: 'user-recharge/:userId',
        component: _pages_users_user_recharge_user_recharge_component__WEBPACK_IMPORTED_MODULE_20__["UserRechargeComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]]
      }, {
        path: 'user-list',
        component: _pages_users_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_5__["ListUserComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]]
      }, {
        path: 'member-list',
        component: _pages_member_list_member_list_member_component__WEBPACK_IMPORTED_MODULE_6__["ListMemberComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]]
      }, {
        path: 'member-add',
        component: _pages_member_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_7__["AddMemberComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]]
      }, {
        path: 'member-edit',
        component: _pages_member_edit_member_edit_member_component__WEBPACK_IMPORTED_MODULE_8__["EditMemberComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]]
      }, {
        path: 'wallet-transaction',
        component: _pages_wallet_wallet_transaction_wallet_transaction_component__WEBPACK_IMPORTED_MODULE_9__["WalletTransactionComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]]
      }, {
        path: 'wallet-balance',
        component: _pages_wallet_wallet_balance_wallet_balance_component__WEBPACK_IMPORTED_MODULE_10__["WalletBalanceComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]]
      }, {
        path: 'wallet-add',
        component: _pages_wallet_wallet_add_wallet_add_component__WEBPACK_IMPORTED_MODULE_21__["WalletAddComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]]
      }, {
        path: 'recharge-history',
        component: _pages_recharge_list_recharge_list_recharge_component__WEBPACK_IMPORTED_MODULE_11__["ListRechargeComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]]
      }, {
        path: 'latest-recharge',
        component: _pages_recharge_latest_recharge_latest_recharge_component__WEBPACK_IMPORTED_MODULE_22__["LatestRechargeComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]]
      }, {
        path: 'recharge-api',
        component: _pages_recharge_api_recharge_api_recharge_component__WEBPACK_IMPORTED_MODULE_12__["ApiRechargeComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]]
      }, {
        path: 'recharge-percentage',
        component: _pages_recharge_percentage_recharge_percentage_recharge_component__WEBPACK_IMPORTED_MODULE_13__["PercentageRechargeComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]]
      }, {
        path: 'recharge-pending',
        component: _pages_recharge_pending_recharge_pending_recharge_component__WEBPACK_IMPORTED_MODULE_14__["PendingRechargeComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]]
      }, {
        path: 'operator-add',
        component: _pages_operator_add_operator_add_operator_component__WEBPACK_IMPORTED_MODULE_15__["AddOperatorComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]]
      }, {
        path: 'operator-edit/:operatorId',
        component: _pages_operator_edit_operator_edit_operator_component__WEBPACK_IMPORTED_MODULE_16__["EditOperatorComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]]
      }, {
        path: 'operator-list',
        component: _pages_operator_list_operator_list_operator_component__WEBPACK_IMPORTED_MODULE_17__["ListOperatorComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]]
      }, {
        path: 'Login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map