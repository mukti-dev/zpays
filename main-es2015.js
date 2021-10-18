(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "++gc":
/*!***************************************************!*\
  !*** ./src/app/services/common/common.service.ts ***!
  \***************************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CommonService {
    constructor() { }
    loadScript() {
        // let scriptContainer = document.getElementById('dynamic-js')
        // scriptContainer.innerHTML = ""
        // let script = document.createElement('script');
        // script.type = 'text/javascript';
        // script.src = "assets/dist/js/adminlte.js";
        // scriptContainer.appendChild(script)
    }
    loadAdminLteScript() {
        let scriptContainer = document.getElementById('dynamic-js');
        scriptContainer.innerHTML = "";
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = "assets/dist/js/adminlte.js";
        scriptContainer.appendChild(script);
    }
}
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(); };
CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "+Chl":
/*!***********************************************************!*\
  !*** ./src/app/services/userwallet/userwallet.service.ts ***!
  \***********************************************************/
/*! exports provided: UserwalletService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserwalletService", function() { return UserwalletService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../web-request/web-request.service */ "fYgw");



class UserwalletService {
    constructor(webReqService) {
        this.webReqService = webReqService;
    }
    getUserWallets(userId) {
        return this.webReqService.get('wallet/userwallet/' + userId);
    }
}
UserwalletService.ɵfac = function UserwalletService_Factory(t) { return new (t || UserwalletService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"])); };
UserwalletService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserwalletService, factory: UserwalletService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserwalletService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"] }]; }, null); })();


/***/ }),

/***/ "/cyv":
/*!***************************************************!*\
  !*** ./src/app/services/wallet/wallet.service.ts ***!
  \***************************************************/
/*! exports provided: WalletService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletService", function() { return WalletService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../web-request/web-request.service */ "fYgw");



class WalletService {
    constructor(webReqService) {
        this.webReqService = webReqService;
    }
    getWalletTransactions() {
        return this.webReqService.get('wallet');
    }
    getWalletTransaction(trasactionId) {
        return this.webReqService.get(`wallet/${trasactionId}`);
    }
    createWallet(userselectid, debit, credit, naration) {
        const payload = { userselectid, debit, credit, naration };
        // We want to send a web request to create a list
        return this.webReqService.post('wallet/addWallet', payload);
    }
    createNewWallet(userselectid, type, amount) {
        const payload = { userselectid, type, amount };
        return this.webReqService.post('wallet/addWalletByAdmin', payload);
    }
    updateUser(trasactionId, username, email, password, phone) {
        // We want to send a web request to update a list
        return this.webReqService.patch(`wallet/${trasactionId}`, {
            username: username,
            email: email,
            password: password,
            phone: phone,
        });
    }
    deleteUser(id) {
        console.log(id);
        return this.webReqService.delete(`wallet/${id}`);
    }
}
WalletService.ɵfac = function WalletService_Factory(t) { return new (t || WalletService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"])); };
WalletService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WalletService, factory: WalletService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WalletService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Work\Node\Syscodetech\zpays\zpay_dashboard\src\main.ts */"zUnb");


/***/ }),

/***/ "16kr":
/*!*******************************************************************!*\
  !*** ./src/app/pages/member/list-member/list-member.component.ts ***!
  \*******************************************************************/
/*! exports provided: ListMemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMemberComponent", function() { return ListMemberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../appheader/appheader.component */ "VkP/");
/* harmony import */ var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../appmenu/appmenu.component */ "HgAV");
/* harmony import */ var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../appfooter/appfooter.component */ "FFBd");
/* harmony import */ var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../appsetting/appsetting.component */ "gkWW");






class ListMemberComponent {
    constructor() { }
    ngOnInit() {
    }
}
ListMemberComponent.ɵfac = function ListMemberComponent_Factory(t) { return new (t || ListMemberComponent)(); };
ListMemberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListMemberComponent, selectors: [["app-list-member"]], decls: 40, vars: 0, consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header"], [1, "card-title"], [1, "card-tools"], ["href", "/member-add", 1, "btn", "btn-success", "btn-sm"], [1, "card-body"], ["id", "example1", 1, "table", "table-bordered", "table-striped"]], template: function ListMemberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-appheader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-appmenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Member Listing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Sr. No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Member Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Mobile No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Success Full Recharge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Total Cash Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "PG gateway At");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Admin Add Money");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "View Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Last");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "app-appfooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "app-appsetting");
    } }, directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_1__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_2__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_3__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_4__["AppsettingComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LW1lbWJlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListMemberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-member',
                templateUrl: './list-member.component.html',
                styleUrls: ['./list-member.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "3QZ1":
/*!*****************************************************************!*\
  !*** ./src/app/pages/wallet/wallet-add/wallet-add.component.ts ***!
  \*****************************************************************/
/*! exports provided: WalletAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletAddComponent", function() { return WalletAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user/users.service */ "WS/y");
/* harmony import */ var src_app_services_wallet_wallet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/wallet/wallet.service */ "/cyv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../appheader/appheader.component */ "VkP/");
/* harmony import */ var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../appmenu/appmenu.component */ "HgAV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../appfooter/appfooter.component */ "FFBd");
/* harmony import */ var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../appsetting/appsetting.component */ "gkWW");












function WalletAddComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.users[0].name);
} }
function WalletAddComponent_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", user_r5._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", user_r5.name, " (", user_r5.phone, ") ");
} }
// import { FormsModule } from '@angular/forms';
class WalletAddComponent {
    constructor(usersService, walletService, router) {
        this.usersService = usersService;
        this.walletService = walletService;
        this.router = router;
    }
    ngOnInit() {
        $("#type-select").selectpicker();
        this.InitMethod();
    }
    ngAfterViewInit() {
        $('.user-list').selectpicker();
    }
    InitMethod() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let u = yield this.userData();
            this.users = JSON.parse(JSON.stringify(u));
        });
    }
    userData() {
        return new Promise((resolve, reject) => {
            this.usersService.getUsers().subscribe((users) => {
                resolve(users.data);
            });
        });
    }
    createWallet(userselectid, type, amount) {
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
        this.walletService.createNewWallet(userselectid, type, amount).subscribe((response) => {
            console.log(response);
            const wallet = JSON.parse(JSON.stringify(response));
            if (wallet.success == true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire(wallet.msg, '', 'success');
            }
            // Now we navigate to /users/user._id
            this.router.navigate(['/user-wallet/' + userselectid]);
        });
    }
    createWallet_backup(userselectid, debit, credit, naration) {
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
        this.walletService.createWallet(userselectid, debit, credit, naration).subscribe((response) => {
            console.log(response);
            const wallet = JSON.parse(JSON.stringify(response));
            if (wallet.success == true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire(wallet.msg, '', 'success');
            }
            // Now we navigate to /users/user._id
            this.router.navigate(['/user-wallet/' + userselectid]);
        });
    }
    saverange(value) {
        console.log(value);
        let users = this.users;
        let user = users.find(e => e['_id'] === value);
        // for (var i = 0; i < users.length; i++) {
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
}
WalletAddComponent.ɵfac = function WalletAddComponent_Factory(t) { return new (t || WalletAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_wallet_wallet_service__WEBPACK_IMPORTED_MODULE_4__["WalletService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
WalletAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WalletAddComponent, selectors: [["app-wallet-add"]], decls: 48, vars: 3, consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header", "with-border"], [1, "card-title"], [1, "card-body"], [1, "row", "clearfix"], [1, "col-md-6"], ["for", "user_id", 1, "control-label"], [2, "color", "red"], ["style", "display: none;", 4, "ngIf"], [1, "form-group"], ["name", "userselectid", "data-live-search", "true", 1, "form-control", "user-list", 3, "change"], ["userselectid", ""], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "type", 1, "control-label"], ["name", "type", "id", "type-select", 1, "form-control"], ["type", ""], ["value", "credit"], ["value", "debit"], ["for", "Credit", 1, "control-label"], ["type", "number", "min", "0", "name", "amount", "value", "", "id", "amount", 1, "form-control"], ["amount", ""], [1, "card-footer"], [1, "btn", "btn-success", 3, "click"], [1, "fa", "fa-check"], [2, "display", "none"], [3, "value"]], template: function WalletAddComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-appheader");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-appmenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Wallet Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "User Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, WalletAddComponent_span_17_Template, 2, 1, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "select", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function WalletAddComponent_Template_select_change_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20); return ctx.saverange(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Select User ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, WalletAddComponent_option_23_Template, 2, 3, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Select Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "select", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "-Select Type-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Credit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Debit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WalletAddComponent_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](29); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](41); return ctx.createWallet(_r1.value, _r3.value, _r4.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "app-appfooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "app-appsetting");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Balance: ", ctx.walletBalance, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.users.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_6__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_7__["AppmenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_9__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_10__["AppsettingComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YWxsZXQtYWRkLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WalletAddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-wallet-add',
                templateUrl: './wallet-add.component.html',
                styleUrls: ['./wallet-add.component.scss']
            }]
    }], function () { return [{ type: src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }, { type: src_app_services_wallet_wallet_service__WEBPACK_IMPORTED_MODULE_4__["WalletService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "6KO4":
/*!*************************************************************************!*\
  !*** ./src/app/pages/operator/list-operator/list-operator.component.ts ***!
  \*************************************************************************/
/*! exports provided: ListOperatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOperatorComponent", function() { return ListOperatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var src_app_services_operator_operator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/operator/operator.service */ "lQHH");
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common/common.service */ "++gc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../appheader/appheader.component */ "VkP/");
/* harmony import */ var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../appmenu/appmenu.component */ "HgAV");
/* harmony import */ var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../appfooter/appfooter.component */ "FFBd");
/* harmony import */ var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../appsetting/appsetting.component */ "gkWW");










const DATATABLE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].dataTableUri;
class ListOperatorComponent {
    // constructor(private taskService: TaskService, private router: Router) { }
    constructor(operatorService, ngZone, common, route, router) {
        this.operatorService = operatorService;
        this.ngZone = ngZone;
        this.common = common;
        this.route = route;
        this.router = router;
    }
    ngAfterViewInit() {
        // $("#operator-list").DataTable()
    }
    ngOnInit() {
        window['angularComponentReference'] = {
            component: this,
            zone: this.ngZone,
            onDeleteOperatorClick: (id) => this.onDeleteOperatorClick(id),
            enableEdit: (id, _id, value, value1, value2) => this.enableEdit(id, _id, value, value1, value2),
            updateOperator: (id, _id, value) => this.updateOperator(id, _id, value)
        };
        this.operatorService.getOperators().subscribe((response) => {
            this.operators = JSON.parse(JSON.stringify(response));
        });
        this.loadDataTable();
    }
    loadDataTable() {
        $('#operator-list').DataTable({
            bDestroy: true,
            ajax: {
                url: `${DATATABLE_URL}/operatorList`
            },
            columns: [
                { data: "sl_no" },
                { data: "operatorCode" },
                { data: "operatorName" },
                { data: "operatorType" },
                {
                    data: "zpayCashback", render: (a, b, c, d) => {
                        if (a == 0) {
                            a = '';
                        }
                        return (`<div id="z_cashback_container-${c.sl_no}" ><label>${a}</label></div>`);
                    }
                },
                {
                    data: 'customerCashback', render: (a, b, c, d) => {
                        if (a == 0) {
                            a = '';
                        }
                        return (`<div id="c_cashback_container-${c.sl_no}" ><label>${a}</label></div>`);
                    }
                },
                {
                    data: "status", render: (a, b, c, d) => {
                        let bg = 'brown';
                        if (a == "Active" || a == 'active') {
                            bg = "green";
                        }
                        return (`<div id="status-${c.sl_no}">
              <span style="color:${bg}">${a}</span>
            </div>`);
                    }
                },
                {
                    data: "_id", render: (a, b, c, d) => {
                        return (`<div id="btn-${c.sl_no}">
            <a href="javascript:void(0)" onclick="enableEdit('${c.sl_no}','${c._id}','${c.operatorCode}','${c.zpayCashback}','${c.customerCashback}')" class="btn btn-info btn-xs"><span class="fa fa-pencil"></span> Edit</a>
            </div>`);
                    }
                }
            ],
        });
    }
    enableEdit(id, _id, value, value1, value2) {
        if (value1 == 0) {
            value1 = '';
        }
        if (value2 == 0) {
            value2 = '';
        }
        $("#btn-" + id).html(` <a href="javascript:void(0)" onclick="updateOperator('${id}','${_id}','${value}')" class="btn btn-primary btn-xs"><span class="fa fa-pencil"></span> Update</a>`);
        $("#z_cashback_container-" + id).html(`<input type="text" value="${value1}" id="zpay_cashback_input${id}" />`);
        $("#c_cashback_container-" + id).html(`<input type="text" value="${value2}" id="customer_cashback_input${id}" />`);
    }
    updateOperator(id, _id, value) {
        let newRecord = false;
        if (!_id || _id.trim() == "") {
            newRecord = true;
        }
        let payload = {
            newRecord,
            _id,
            operatorCode: value,
            cashbackPercentageForZpay: $(`#zpay_cashback_input${id}`).val(),
            cashbackPercentageForCustomer: $(`#customer_cashback_input${id}`).val(),
        };
        this.operatorService.updateOperator(payload).subscribe(response => {
            const resp = JSON.parse(JSON.stringify(response));
            const op = resp.data;
            $("#btn-" + id).html(` <a href="javascript:void(0)" onclick="enableEdit('${id}','${op._id}','${op.operatorCode}','${op.cashbackPercentageForZpay}','${op.cashbackPercentageForCustomer}')" class="btn btn-info btn-xs"><span class="fa fa-pencil"></span> Edit</a>`);
            $("#z_cashback_container-" + id).html(`<label>${op.cashbackPercentageForZpay}</label>`);
            $("#c_cashback_container-" + id).html(`<label>${op.cashbackPercentageForCustomer}</label>`);
            let bg = 'brown';
            if (op.status == "Active" || op.status == 'active') {
                bg = "green";
            }
            $("#status-" + id).html(`<span style="color:${bg}">${op.status}</span>`);
        });
    }
    onDeleteOperatorClick(selectedOperatorId) {
        alert("naruto" + selectedOperatorId);
        // this.operatorService.deleteUser(selectedOperatorId).subscribe((res: any) => {
        //   // Now we navigate to /users/user._id
        //   // window.location.reload()
        //   this.ngOnInit()
        // })
    }
}
ListOperatorComponent.ɵfac = function ListOperatorComponent_Factory(t) { return new (t || ListOperatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_operator_operator_service__WEBPACK_IMPORTED_MODULE_2__["OperatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ListOperatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListOperatorComponent, selectors: [["app-list-operator"]], decls: 33, vars: 0, consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "operator-list", 1, "table", "table-bordered", "table-striped"]], template: function ListOperatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-appheader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-appmenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Operator Listing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sr. No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Operator Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Operator Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Operator Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Zpay Cashback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Customer Cashback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Operator Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-appfooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-appsetting");
    } }, directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_5__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_6__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_7__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_8__["AppsettingComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LW9wZXJhdG9yLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListOperatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-operator',
                templateUrl: './list-operator.component.html',
                styleUrls: ['./list-operator.component.scss']
            }]
    }], function () { return [{ type: src_app_services_operator_operator_service__WEBPACK_IMPORTED_MODULE_2__["OperatorService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "8btI":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/member/percentage-member/percentage-member.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PercentageMemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercentageMemberComponent", function() { return PercentageMemberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PercentageMemberComponent {
    constructor() { }
    ngOnInit() {
    }
}
PercentageMemberComponent.ɵfac = function PercentageMemberComponent_Factory(t) { return new (t || PercentageMemberComponent)(); };
PercentageMemberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PercentageMemberComponent, selectors: [["app-percentage-member"]], decls: 2, vars: 0, template: function PercentageMemberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "percentage-member works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJjZW50YWdlLW1lbWJlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PercentageMemberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-percentage-member',
                templateUrl: './percentage-member.component.html',
                styleUrls: ['./percentage-member.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "95/E":
/*!*************************************************************************!*\
  !*** ./src/app/pages/operator/edit-operator/edit-operator.component.ts ***!
  \*************************************************************************/
/*! exports provided: EditOperatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOperatorComponent", function() { return EditOperatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_operator_operator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/operator/operator.service */ "lQHH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../appheader/appheader.component */ "VkP/");
/* harmony import */ var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../appmenu/appmenu.component */ "HgAV");
/* harmony import */ var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../appfooter/appfooter.component */ "FFBd");
/* harmony import */ var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../appsetting/appsetting.component */ "gkWW");








class EditOperatorComponent {
    constructor(operatorService, route, router) {
        this.operatorService = operatorService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            if (params.operatorId) {
                this.operatorId = params.operatorId;
                this.operatorService.getOperator(params.operatorId).subscribe((operators) => {
                    this.operators = operators;
                });
            }
            else {
                this.operators = undefined;
            }
        });
    }
    updateOperator(operatorid, operatorcode, operatorname, cashbackPercentageForZpay, cashbackPercentageForCustomer, operatorstatus) {
        this.operatorService.updateUser(operatorid, operatorcode, operatorname, cashbackPercentageForZpay, cashbackPercentageForCustomer, operatorstatus).subscribe((operator) => {
            console.log(operator);
            // Now we navigate to /users/user._id
            this.router.navigate(['/operator-list']);
        });
    }
}
EditOperatorComponent.ɵfac = function EditOperatorComponent_Factory(t) { return new (t || EditOperatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_operator_operator_service__WEBPACK_IMPORTED_MODULE_1__["OperatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
EditOperatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditOperatorComponent, selectors: [["app-edit-operator"]], decls: 56, vars: 5, consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header", "with-border"], [1, "card-title"], [1, "card-body"], [1, "row", "clearfix"], [1, "col-md-6"], ["for", "name", 1, "control-label"], [1, "form-group"], ["type", "text", "name", "operatorcode", "id", "operatorCode", 1, "form-control", 3, "value"], ["operatorcode", ""], ["type", "text", "name", "firmname", "id", "operatorname", 1, "form-control", 3, "value"], ["operatorname", ""], ["type", "text", "name", "cashbackPercentageForZpay", "id", "cashbackPercentageForZpay", 1, "form-control", 3, "value"], ["cashbackPercentageForZpay", ""], ["type", "text", "name", "cashbackPercentageForCustomer", "id", "cashbackPercentageForCustomer", 1, "form-control", 3, "value"], ["cashbackPercentageForCustomer", ""], ["for", "operatorstatus", 1, "control-label"], ["id", "operatorstatus", 1, "form-control"], ["operatorstatus", ""], ["value", ""], [3, "value"], ["value", "Pending"], ["value", "Cancel"], [1, "card-footer"], [1, "btn", "btn-success", 3, "click"], [1, "fa", "fa-check"]], template: function EditOperatorComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-appheader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-appmenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Operator Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Operator Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Operator Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Zpay Cashback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Customer Cashback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Operatoe Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "select", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Select Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditOperatorComponent_Template_button_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41); return ctx.updateOperator(ctx.operators[0]._id, _r0.value, _r1.value, _r2.value, _r3.value, _r4.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "app-appfooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "app-appsetting");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.operators[0].operatorCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.operators[0].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.operators[0].cashbackPercentageForZpay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.operators[0].cashbackPercentageForCustomer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.operators[0].status);
    } }, directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_3__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_4__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_5__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_6__["AppsettingComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LW9wZXJhdG9yLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditOperatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-operator',
                templateUrl: './edit-operator.component.html',
                styleUrls: ['./edit-operator.component.scss']
            }]
    }], function () { return [{ type: src_app_services_operator_operator_service__WEBPACK_IMPORTED_MODULE_1__["OperatorService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // dataTableUri: `http://localhost:3002/datatable`
    dataTableUri: `https://zpays.in:3002/datatable`
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CUqn":
/*!*************************************************************************!*\
  !*** ./src/app/pages/wallet/wallet-balance/wallet-balance.component.ts ***!
  \*************************************************************************/
/*! exports provided: WalletBalanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletBalanceComponent", function() { return WalletBalanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var src_app_services_walletbalance_walletbalance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/walletbalance/walletbalance.service */ "GvV1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../appheader/appheader.component */ "VkP/");
/* harmony import */ var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../appmenu/appmenu.component */ "HgAV");
/* harmony import */ var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../appfooter/appfooter.component */ "FFBd");
/* harmony import */ var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../appsetting/appsetting.component */ "gkWW");









const DATATABLE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].dataTableUri;
class WalletBalanceComponent {
    // constructor(private taskService: TaskService, private router: Router) { }
    constructor(WalletbalanceService, route, router) {
        this.WalletbalanceService = WalletbalanceService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
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
    loadDataTable() {
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
                url: `${DATATABLE_URL}/walletBalance`
            },
            columns: [
                { data: 'sl_no' },
                { data: 'phone' },
                { data: 'service' },
                { data: 'operator' },
                { data: 'naration' },
                {
                    data: 'credit',
                    render: (a, b, c, d) => {
                        return (`<strong><span style="color:#ffffff">+${a}</span></strong>`);
                    }
                },
                {
                    data: 'debit', render: (a, b, c, d) => {
                        return (`<strong><span style="color:#ffffff">-${a}</span></strong>`);
                    }
                },
                { data: 'restAmount' }
            ],
            columnDefs: [
                {
                    'targets': 5,
                    'createdCell': function (td, cellData, rowData, row, col) {
                        $(td).css('background', 'green');
                    }
                },
                {
                    'targets': 6,
                    'createdCell': function (td, cellData, rowData, row, col) {
                        $(td).css('background', 'brown');
                    }
                }
            ]
        });
    }
    onDeleteWalletClick(walletId) {
        console.log("naruto");
        this.WalletbalanceService.deletewalletbalance(walletId).subscribe((res) => {
            // Now we navigate to /users/user._id
            window.location.reload();
        });
    }
}
WalletBalanceComponent.ɵfac = function WalletBalanceComponent_Factory(t) { return new (t || WalletBalanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_walletbalance_walletbalance_service__WEBPACK_IMPORTED_MODULE_2__["WalletbalanceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
WalletBalanceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WalletBalanceComponent, selectors: [["app-wallet-balance"]], decls: 33, vars: 0, consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "wallet-balance-list", 1, "table", "table-bordered", "table-striped"]], template: function WalletBalanceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-appheader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-appmenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "E-Wallet Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sr. No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Member Mobile No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Operator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Activity(Naration)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Credit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Debit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-appfooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-appsetting");
    } }, directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_4__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_5__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_6__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_7__["AppsettingComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YWxsZXQtYmFsYW5jZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WalletBalanceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wallet-balance',
                templateUrl: './wallet-balance.component.html',
                styleUrls: ['./wallet-balance.component.scss']
            }]
    }], function () { return [{ type: src_app_services_walletbalance_walletbalance_service__WEBPACK_IMPORTED_MODULE_2__["WalletbalanceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "D8EZ":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login/login.service */ "XXEo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class LoginComponent {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    ngOnInit() {
    }
    onLoginButtonClicked(email, password) {
        if (!email || email.trim() == "") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Please enter email ID', '', 'warning');
            return false;
        }
        if (!password || password.trim() == "") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire('Please enter password', '', 'warning');
            return false;
        }
        this.loginService.login(email, password).subscribe((res) => {
            if (res.status === 200) {
                localStorage.setItem('authToken', res.body.data.authToken);
                this.router.navigate(['/dashboard']);
            }
        }, (error) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire(error.error.error, '', 'error');
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 24, vars: 0, consts: [[1, "row"], [1, "col-md-4"], [1, "col-md-4", 2, "margin-top", "150px"], [1, "card", "card-info"], [1, "card-header"], [1, "card-title"], [1, "card-body", "p-12"], [1, "col-md-12"], ["for", "name", 1, "control-label"], [1, "form-group"], ["type", "text", "name", "emailInput", "value", "", "id", "operatorname", "required", "", 1, "form-control"], ["emailInput", ""], ["type", "password", "name", "pwInput", "value", "", "id", "operatorname", "required", "", 1, "form-control"], ["pwInput", ""], [1, "card-footer"], [1, "btn", "btn-info", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); return ctx.onLoginButtonClicked(_r0.value, _r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: src_app_services_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "FFBd":
/*!********************************************************!*\
  !*** ./src/app/pages/appfooter/appfooter.component.ts ***!
  \********************************************************/
/*! exports provided: AppfooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppfooterComponent", function() { return AppfooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AppfooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
AppfooterComponent.ɵfac = function AppfooterComponent_Factory(t) { return new (t || AppfooterComponent)(); };
AppfooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppfooterComponent, selectors: [["app-appfooter"]], decls: 6, vars: 0, consts: [[1, "main-footer", 2, "margin-left", "0px"], ["href", "https://syscodetechnology.com/"]], template: function AppfooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Powered By ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Syscode Technology Pvt. Ltd.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\nAll rights reserved.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppfooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-appfooter',
                templateUrl: './appfooter.component.html',
                styleUrls: ['./appfooter.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Fv0Y":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/report/transaction-report/transaction-report.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TransactionReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionReportComponent", function() { return TransactionReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TransactionReportComponent {
    constructor() { }
    ngOnInit() {
    }
}
TransactionReportComponent.ɵfac = function TransactionReportComponent_Factory(t) { return new (t || TransactionReportComponent)(); };
TransactionReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransactionReportComponent, selectors: [["app-transaction-report"]], decls: 2, vars: 0, template: function TransactionReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "transaction-report works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2FjdGlvbi1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionReportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-transaction-report',
                templateUrl: './transaction-report.component.html',
                styleUrls: ['./transaction-report.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "GvV1":
/*!*****************************************************************!*\
  !*** ./src/app/services/walletbalance/walletbalance.service.ts ***!
  \*****************************************************************/
/*! exports provided: WalletbalanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletbalanceService", function() { return WalletbalanceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../web-request/web-request.service */ "fYgw");



class WalletbalanceService {
    constructor(webReqService) {
        this.webReqService = webReqService;
    }
    getWalletbalances() {
        return this.webReqService.get('wallet/allwalletToday');
    }
    getWalletbalance(walletbalanceId) {
        return this.webReqService.get(`walletbalance/${walletbalanceId}`);
    }
    createUser(username, email, password, phone) {
        // We want to send a web request to create a list
        return this.webReqService.post('walletbalance', {
            username: username,
            email: email,
            password: password,
            phone: phone,
        });
    }
    updateUser(walletbalanceId, username, email, password, phone) {
        // We want to send a web request to update a list
        return this.webReqService.patch(`walletbalance/${walletbalanceId}`, {
            username: username,
            email: email,
            password: password,
            phone: phone,
        });
    }
    deletewalletbalance(walletbalanceId) {
        console.log(walletbalanceId);
        return this.webReqService.delete(`walletbalance/${walletbalanceId}`);
    }
}
WalletbalanceService.ɵfac = function WalletbalanceService_Factory(t) { return new (t || WalletbalanceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"])); };
WalletbalanceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WalletbalanceService, factory: WalletbalanceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WalletbalanceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"] }]; }, null); })();


/***/ }),

/***/ "HIZA":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/recharge/latest-recharge/latest-recharge.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LatestRechargeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestRechargeComponent", function() { return LatestRechargeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var src_app_services_recharge_recharge_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/recharge/recharge.service */ "Sgnu");
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common/common.service */ "++gc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../appheader/appheader.component */ "VkP/");
/* harmony import */ var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../appmenu/appmenu.component */ "HgAV");
/* harmony import */ var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../appfooter/appfooter.component */ "FFBd");
/* harmony import */ var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../appsetting/appsetting.component */ "gkWW");










const DATATABLE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].dataTableUri;
class LatestRechargeComponent {
    // constructor(private taskService: TaskService, private router: Router) { }
    constructor(rechargeservice, common, route, router) {
        this.rechargeservice = rechargeservice;
        this.common = common;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.rechargeservice.getLatestRecharges().subscribe((recharges) => {
            if (recharges.success == true) {
                this.recharges = recharges.data;
            }
        });
        this.loadDataTable();
    }
    loadDataTable() {
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
                url: `${DATATABLE_URL}/todayrecharge`
            },
            "lengthMenu": [10, 20, 50, 100, 1000],
            columns: [
                { data: 'sl_no' },
                { data: 'name' },
                { data: 'phone' },
                { data: 'mobile' },
                { data: 'amount' },
                { data: 'operator' },
                { data: 'txnId' },
                { data: 'transactionId' },
                { data: 'status' },
                { data: 'apiName' },
                { data: 'operatorRef' },
                { data: 'errormessage' },
                { data: 'createdAt' }
            ],
        });
    }
}
LatestRechargeComponent.ɵfac = function LatestRechargeComponent_Factory(t) { return new (t || LatestRechargeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_recharge_recharge_service__WEBPACK_IMPORTED_MODULE_2__["RechargeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LatestRechargeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LatestRechargeComponent, selectors: [["app-latest-recharge"]], decls: 43, vars: 0, consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "today-recharge-list", 1, "table", "table-bordered", "table-striped"]], template: function LatestRechargeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-appheader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-appmenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Today Recharge History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sr. No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Member Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Mobile No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "CA Mobile No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Recharge Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Operator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "TX ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "API Tx ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "APIID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Operator Ref.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Error Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-appfooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "app-appsetting");
    } }, directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_5__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_6__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_7__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_8__["AppsettingComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXRlc3QtcmVjaGFyZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LatestRechargeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-latest-recharge',
                templateUrl: './latest-recharge.component.html',
                styleUrls: ['./latest-recharge.component.scss']
            }]
    }], function () { return [{ type: src_app_services_recharge_recharge_service__WEBPACK_IMPORTED_MODULE_2__["RechargeService"] }, { type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "HgAV":
/*!****************************************************!*\
  !*** ./src/app/pages/appmenu/appmenu.component.ts ***!
  \****************************************************/
/*! exports provided: AppmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppmenuComponent", function() { return AppmenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common/common.service */ "++gc");




class AppmenuComponent {
    constructor(router, common) {
        this.router = router;
        this.common = common;
    }
    ngOnInit() {
        this.load();
    }
    load() {
        this.common.loadAdminLteScript();
        $('[data-widget="treeview"]').Treeview('init');
    }
    routeTo(routeString) {
        this.router.navigate([routeString]);
    }
}
AppmenuComponent.ɵfac = function AppmenuComponent_Factory(t) { return new (t || AppmenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"])); };
AppmenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppmenuComponent, selectors: [["app-appmenu"]], decls: 82, vars: 1, consts: [[1, "main-sidebar", "sidebar-dark-primary", "elevation-4"], ["href", "#", 1, "brand-link"], ["src", "assets/dist/img/AdminLTELogo.png", "alt", "AdminLTE Logo", 1, "brand-image", "img-circle", "elevation-3", 2, "opacity", ".8"], [1, "brand-text", "font-weight-light"], [1, "sidebar"], [1, "mt-2"], ["data-widget", "treeview", "role", "menu", "data-accordion", "false", 1, "nav", "nav-pills", "nav-sidebar", "flex-column"], [1, "nav-item"], [1, "nav-link", "active", 3, "click"], [1, "nav-icon", "fas", "fa-tachometer-alt"], ["href", "javascript:void(0)", 1, "nav-link"], [1, "nav-icon", "fas", "fa-bolt"], [1, "fas", "fa-angle-right", "right"], [1, "nav", "nav-treeview"], [1, "far", "fa-circle", "nav-icon"], ["href", "javascript:void(0)", 1, "nav-link", 3, "click"], [1, "nav-link", 3, "click"], ["href", "javascript:void(0)", "href", "javascript:void(0)", 1, "nav-link"], [1, "nav-icon", "fas", "fa-plus"], [1, "nav-icon", "fas", "fa-wallet"], [1, "nav-link", 3, "routerLink"], [1, "nav-icon", "fas", "fa-user"], [1, "right", "fas", "fa-angle-right"]], template: function AppmenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Z-Pay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppmenuComponent_Template_a_click_9_listener() { return ctx.routeTo("dashboard"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Recharge ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Recharge History ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppmenuComponent_Template_a_click_28_listener() { return ctx.routeTo("latest-recharge"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Latest Recharge History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppmenuComponent_Template_a_click_33_listener() { return ctx.routeTo("recharge-history"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Old Recharge History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppmenuComponent_Template_a_click_38_listener() { return ctx.routeTo("recharge-pending"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "List Pending Recharge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Operator Master ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppmenuComponent_Template_a_click_50_listener() { return ctx.routeTo("operator-list"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "List Operator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Wallet System ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppmenuComponent_Template_a_click_62_listener() { return ctx.routeTo("wallet-add"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Add Wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppmenuComponent_Template_a_click_67_listener() { return ctx.routeTo("/wallet-transaction"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Wallet Summary Latest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppmenuComponent_Template_a_click_72_listener() { return ctx.routeTo("/wallet-balance"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "User Wise Wallet Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Users ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/user-list");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBtZW51LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppmenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-appmenu',
                templateUrl: './appmenu.component.html',
                styleUrls: ['./appmenu.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }]; }, null); })();


/***/ }),

/***/ "I+kH":
/*!**********************************************************************!*\
  !*** ./src/app/pages/users/user-recharge/user-recharge.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserRechargeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRechargeComponent", function() { return UserRechargeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_userrecharge_userrecharge_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/userrecharge/userrecharge.service */ "LuDy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../appheader/appheader.component */ "VkP/");
/* harmony import */ var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../appmenu/appmenu.component */ "HgAV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../appfooter/appfooter.component */ "FFBd");
/* harmony import */ var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../appsetting/appsetting.component */ "gkWW");









function UserRechargeComponent_tbody_45_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recharge_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recharge_r2._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recharge_r2.userid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recharge_r2.membername);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recharge_r2.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recharge_r2.camobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recharge_r2.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recharge_r2.operator);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recharge_r2.transactionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recharge_r2.apitxid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recharge_r2.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recharge_r2.appid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recharge_r2.operatorref);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recharge_r2.errormessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](recharge_r2.date);
} }
function UserRechargeComponent_tbody_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserRechargeComponent_tbody_45_tr_1_Template, 29, 14, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.recharges);
} }
class UserRechargeComponent {
    // constructor(private taskService: TaskService, private router: Router) { }
    constructor(Rechargeservice, route, router) {
        this.Rechargeservice = Rechargeservice;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            console.log(params.userId);
            if (params.userId) {
                this.selectedUserId = params.userId;
                this.Rechargeservice.getRecharges(params.userId).subscribe((recharges) => {
                    this.recharges = recharges.data;
                });
            }
        });
        // this.WalletbalanceService.getWalletbalances().subscribe((walletEntries: UserWallet[]) => {
        //   this.walletEntries = walletEntries;
        // })
    }
}
UserRechargeComponent.ɵfac = function UserRechargeComponent_Factory(t) { return new (t || UserRechargeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_userrecharge_userrecharge_service__WEBPACK_IMPORTED_MODULE_1__["UserrechargeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UserRechargeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserRechargeComponent, selectors: [["app-user-recharge"]], decls: 48, vars: 1, consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header"], [1, "card-title"], [1, "card-tools"], ["href", "/member-add", 1, "btn", "btn-success", "btn-sm"], [1, "card-body"], ["id", "example1", 1, "table", "table-bordered", "table-striped"], [4, "ngIf"], [4, "ngFor", "ngForOf"]], template: function UserRechargeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-appheader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-appmenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Recharge History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Sr. No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Member Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Member Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Mobile No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "CA Mobile No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Recharge Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Operator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "TX ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "API Tx ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "APIID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Operator Ref.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Error Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, UserRechargeComponent_tbody_45_Template, 2, 1, "tbody", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "app-appfooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "app-appsetting");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.recharges);
    } }, directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_3__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_4__["AppmenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_6__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_7__["AppsettingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXJlY2hhcmdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRechargeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-recharge',
                templateUrl: './user-recharge.component.html',
                styleUrls: ['./user-recharge.component.scss']
            }]
    }], function () { return [{ type: src_app_services_userrecharge_userrecharge_service__WEBPACK_IMPORTED_MODULE_1__["UserrechargeService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "KD3v":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/report/admin-profit-report/admin-profit-report.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AdminProfitReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProfitReportComponent", function() { return AdminProfitReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AdminProfitReportComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminProfitReportComponent.ɵfac = function AdminProfitReportComponent_Factory(t) { return new (t || AdminProfitReportComponent)(); };
AdminProfitReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminProfitReportComponent, selectors: [["app-admin-profit-report"]], decls: 2, vars: 0, template: function AdminProfitReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin-profit-report works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1wcm9maXQtcmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminProfitReportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-profit-report',
                templateUrl: './admin-profit-report.component.html',
                styleUrls: ['./admin-profit-report.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "LuDy":
/*!***************************************************************!*\
  !*** ./src/app/services/userrecharge/userrecharge.service.ts ***!
  \***************************************************************/
/*! exports provided: UserrechargeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserrechargeService", function() { return UserrechargeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../web-request/web-request.service */ "fYgw");



class UserrechargeService {
    constructor(webReqService) {
        this.webReqService = webReqService;
    }
    getRecharges(userid) {
        console.log('naruto');
        return this.webReqService.post('recharge/history/' + userid, {});
    }
}
UserrechargeService.ɵfac = function UserrechargeService_Factory(t) { return new (t || UserrechargeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"])); };
UserrechargeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserrechargeService, factory: UserrechargeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserrechargeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"] }]; }, null); })();


/***/ }),

/***/ "Sgnu":
/*!*******************************************************!*\
  !*** ./src/app/services/recharge/recharge.service.ts ***!
  \*******************************************************/
/*! exports provided: RechargeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RechargeService", function() { return RechargeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../web-request/web-request.service */ "fYgw");



class RechargeService {
    constructor(webReqService) {
        this.webReqService = webReqService;
    }
    getRecharges() {
        return this.webReqService.get('recharge');
    }
    getRecharge(rechargeId) {
        return this.webReqService.get(`recharge/${rechargeId}`);
    }
    getLatestRecharge(rechargeId) {
        return this.webReqService.get(`recharge/${rechargeId}`);
    }
    getLatestRecharges() {
        // return this.webReqService.get('recharge/today');
        return this.webReqService.get('recharge/todayrecharge');
    }
    getOldRecharges() {
        return this.webReqService.get('recharge/allrecharge');
    }
    getPendingRecharges() {
        // console.log('vikas');
        return this.webReqService.get('recharge/pendingrecharge');
    }
}
RechargeService.ɵfac = function RechargeService_Factory(t) { return new (t || RechargeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"])); };
RechargeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RechargeService, factory: RechargeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RechargeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'zpay';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "TOxE":
/*!******************************************************************!*\
  !*** ./src/app/pages/users/user-wallet/user-wallet.component.ts ***!
  \******************************************************************/
/*! exports provided: UserWalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserWalletComponent", function() { return UserWalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var src_app_services_userwallet_userwallet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/userwallet/userwallet.service */ "+Chl");
/* harmony import */ var src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user/users.service */ "WS/y");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../appheader/appheader.component */ "VkP/");
/* harmony import */ var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../appmenu/appmenu.component */ "HgAV");
/* harmony import */ var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../appfooter/appfooter.component */ "FFBd");
/* harmony import */ var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../appsetting/appsetting.component */ "gkWW");










const DATATABLE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].dataTableUri;
class UserWalletComponent {
    // constructor(private taskService: TaskService, private router: Router) { }
    constructor(WalletbalanceService, userService, route, router) {
        this.WalletbalanceService = WalletbalanceService;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.total = 0;
    }
    ngOnInit() {
        const userId = this.route.snapshot.paramMap.get('userId');
        this.userService.getUser(userId).subscribe((response) => {
            this.userdata = JSON.parse(JSON.stringify(response['data']));
            console.log(this.userdata);
        });
        this.loadDataTable(userId);
        // this.route.params.subscribe(
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
    loadDataTable(userId) {
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
                url: `${DATATABLE_URL}/userwallet/${userId}`
            },
            "lengthMenu": [10, 20, 50, 100, 1000],
            columns: [
                { data: 'sl_no' },
                { data: 'createdAt' },
                { data: 'service' },
                { data: 'operator' },
                { data: 'naration' },
                {
                    data: 'credit',
                    render: (a, b, c, d) => {
                        return (`<strong><span style="color:#ffffff">${a}</span></strong>`);
                    }
                },
                {
                    data: 'debit',
                    render: (a, b, c, d) => {
                        return (`<strong><span style="color:#ffffff">${a}</span></strong>`);
                    }
                },
                { data: 'restAmount' },
            ],
            columnDefs: [
                {
                    'targets': 5,
                    'createdCell': function (td, cellData, rowData, row, col) {
                        $(td).css('background', 'green');
                    }
                },
                {
                    'targets': 6,
                    'createdCell': function (td, cellData, rowData, row, col) {
                        $(td).css('background', 'brown');
                    }
                }
            ]
        });
    }
    findsum(data) {
        // debugger  
        this.value = data;
        console.log(this.value);
        for (let j = 0; j < data.length; j++) {
            this.total -= parseFloat(this.value[j].debit);
            this.total += parseFloat(this.value[j].credit);
            console.log(this.total);
        }
    }
    getSum(ii) {
        let sum = 0;
        console.log(ii);
        for (let i = 0; i <= ii; i++) {
            console.log(this.walletEntries[i].credit);
            console.log(this.walletEntries[i].debit);
            let cr = (typeof this.walletEntries[i].credit == "undefined" || this.walletEntries[i].credit == null) ? 0 : parseFloat(this.walletEntries[i].credit);
            let dr = (typeof this.walletEntries[i].debit == "undefined" || this.walletEntries[i].debit == null) ? 0 : parseFloat(this.walletEntries[i].debit);
            sum = sum + cr - dr;
        }
        return sum;
    }
}
UserWalletComponent.ɵfac = function UserWalletComponent_Factory(t) { return new (t || UserWalletComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_userwallet_userwallet_service__WEBPACK_IMPORTED_MODULE_2__["UserwalletService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
UserWalletComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserWalletComponent, selectors: [["app-user-wallet"]], decls: 54, vars: 4, consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header"], [1, "card-title"], [1, "card-body-2"], ["for", ""], [1, "card-body"], ["id", "user-wallet", 1, "table", "table-bordered", "table-striped"]], template: function UserWalletComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-appheader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-appmenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Latest E-Wallet Transaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Username :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Mobile :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Email :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Registered Date :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Sr. No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Operator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Activity(Naration)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Credit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Debit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "app-appfooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "app-appsetting");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userdata.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userdata.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userdata.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userdata.createdAt);
    } }, directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_5__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_6__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_7__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_8__["AppsettingComponent"]], styles: [".card-body-2[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 1px;\n  padding: 1.25rem;\n  box-shadow: 2px 2px 7px grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdXNlci13YWxsZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBRUEsNEJBQUE7QUFBSiIsImZpbGUiOiJ1c2VyLXdhbGxldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWJvZHktMntcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgbWluLWhlaWdodDogMXB4O1xyXG4gICAgcGFkZGluZzogMS4yNXJlbTtcclxuICAgIC8vIG1hcmdpbjogYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggN3B4IGdyZXlcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserWalletComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-wallet',
                templateUrl: './user-wallet.component.html',
                styleUrls: ['./user-wallet.component.scss']
            }]
    }], function () { return [{ type: src_app_services_userwallet_userwallet_service__WEBPACK_IMPORTED_MODULE_2__["UserwalletService"] }, { type: src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "U5Cf":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user/users.service */ "WS/y");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/common/common.service */ "++gc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../appheader/appheader.component */ "VkP/");
/* harmony import */ var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../appmenu/appmenu.component */ "HgAV");
/* harmony import */ var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../appfooter/appfooter.component */ "FFBd");
/* harmony import */ var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../appsetting/appsetting.component */ "gkWW");









class DashboardComponent {
    // signups=0;
    constructor(usersService, common, route, router) {
        this.usersService = usersService;
        this.common = common;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        let authToken = localStorage.getItem('authToken');
        console.log(authToken);
        // this.common.loadScript()
        this.usersService.getSignup().subscribe((signups) => {
            this.signups = signups;
        });
        this.usersService.getRecharges().subscribe((recharges) => {
            this.recharges = recharges;
        });
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 95, vars: 2, consts: [[1, "content-wrapper"], [1, "content"], [1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "m-0"], [1, "row"], [1, "col-md-7"], [1, "card", "card-info"], [1, "card-header"], [1, "card-title"], [1, "card-body", "p-0"], [1, "table", "table-bordered", "table-striped"], [1, "card-body"], ["data-widget", "todo-list", 1, "todo-list", "ui-sortable"], [1, "text"], [1, "badge", "badge-danger"], [1, "tools"], [1, "fas", "fa-edit"], [1, "fas", "fa-trash-o"], [1, "badge", "badge-info"], [1, "badge", "badge-warning"], ["href", "#"], [1, "badge", "badge-success"], [1, "badge", "badge-primary"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-appheader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-appmenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "My Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "This Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "This Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "24");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "24");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "24");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Pending Payment ConFirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "small", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Pending Ticket Issue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Pending Recharge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "small", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Total Recharge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "small", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Total Amount In Downline Wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "small", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "app-appfooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "app-appsetting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.signups);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recharges);
    } }, directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_4__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_5__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_6__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_7__["AppsettingComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return [{ type: src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"] }, { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "VM2V":
/*!*************************************************************************!*\
  !*** ./src/app/services/wallettransaction/wallettransaction.service.ts ***!
  \*************************************************************************/
/*! exports provided: WallettransactionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WallettransactionService", function() { return WallettransactionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../web-request/web-request.service */ "fYgw");



class WallettransactionService {
    constructor(webReqService) {
        this.webReqService = webReqService;
    }
    getWalletTransactions() {
        return this.webReqService.get('wallet/allwallet');
    }
    getWalletTransaction(trasactionId) {
        return this.webReqService.get(`wallettransaction/${trasactionId}`);
    }
    createUser(username, email, password, phone) {
        // We want to send a web request to create a list
        return this.webReqService.post('wallettransaction', {
            username: username,
            email: email,
            password: password,
            phone: phone,
        });
    }
    updateUser(trasactionId, username, email, password, phone) {
        // We want to send a web request to update a list
        return this.webReqService.patch(`wallettransaction/${trasactionId}`, {
            username: username,
            email: email,
            password: password,
            phone: phone,
        });
    }
    deleteUser(trasactionId) {
        console.log(trasactionId);
        return this.webReqService.delete(`wallettransaction/${trasactionId}`);
    }
}
WallettransactionService.ɵfac = function WallettransactionService_Factory(t) { return new (t || WallettransactionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"])); };
WallettransactionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WallettransactionService, factory: WallettransactionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WallettransactionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"] }]; }, null); })();


/***/ }),

/***/ "Vi1k":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/wallet/wallet-transaction/wallet-transaction.component.ts ***!
  \*********************************************************************************/
/*! exports provided: WalletTransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletTransactionComponent", function() { return WalletTransactionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var src_app_services_wallettransaction_wallettransaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/wallettransaction/wallettransaction.service */ "VM2V");
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common/common.service */ "++gc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../appheader/appheader.component */ "VkP/");
/* harmony import */ var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../appmenu/appmenu.component */ "HgAV");
/* harmony import */ var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../appfooter/appfooter.component */ "FFBd");
/* harmony import */ var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../appsetting/appsetting.component */ "gkWW");










const DATATABLE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].dataTableUri;
class WalletTransactionComponent {
    // constructor(private taskService: TaskService, private router: Router) { }
    constructor(wallettransactionService, common, route, router) {
        this.wallettransactionService = wallettransactionService;
        this.common = common;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
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
    loadDataTable() {
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
                url: `${DATATABLE_URL}/walletTransaction`
            },
            columns: [
                { data: 'sl_no' },
                { data: 'phone' },
                { data: 'service' },
                { data: 'operator' },
                { data: 'naration' },
                {
                    data: 'credit',
                    render: (a, b, c, d) => {
                        return (`<strong><span style="color:#ffffff">+${a}</span></strong>`);
                    }
                },
                {
                    data: 'debit', render: (a, b, c, d) => {
                        return (`<strong><span style="color:#ffffff">-${a}</span></strong>`);
                    }
                },
                { data: 'restAmount' }
            ],
            columnDefs: [
                {
                    'targets': 5,
                    'createdCell': function (td, cellData, rowData, row, col) {
                        $(td).css('background', 'green');
                    }
                },
                {
                    'targets': 6,
                    'createdCell': function (td, cellData, rowData, row, col) {
                        $(td).css('background', 'brown');
                    }
                }
            ]
        });
    }
    getSum(ii) {
        let sum = 0;
        for (let i = 0; i <= ii; i++) {
            console.log(this.walletEntries[i].credit);
            console.log(this.walletEntries[i].debit);
            let cr = (typeof this.walletEntries[i].credit == "undefined" || this.walletEntries[i].credit == null) ? 0 : parseFloat(this.walletEntries[i].credit);
            let dr = (typeof this.walletEntries[i].debit == "undefined" || this.walletEntries[i].debit == null) ? 0 : parseFloat(this.walletEntries[i].debit);
            sum = sum + cr - dr;
        }
        return sum;
    }
}
WalletTransactionComponent.ɵfac = function WalletTransactionComponent_Factory(t) { return new (t || WalletTransactionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_wallettransaction_wallettransaction_service__WEBPACK_IMPORTED_MODULE_2__["WallettransactionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
WalletTransactionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WalletTransactionComponent, selectors: [["app-wallet-transaction"]], decls: 33, vars: 0, consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "wallet-transaction-list", 1, "table", "table-bordered", "table-striped"]], template: function WalletTransactionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-appheader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-appmenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Latest E-Wallet Transaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sr. No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Member Mobile No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Operator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Activity(Naration)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Credit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Debit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-appfooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-appsetting");
    } }, directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_5__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_6__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_7__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_8__["AppsettingComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YWxsZXQtdHJhbnNhY3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WalletTransactionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wallet-transaction',
                templateUrl: './wallet-transaction.component.html',
                styleUrls: ['./wallet-transaction.component.scss']
            }]
    }], function () { return [{ type: src_app_services_wallettransaction_wallettransaction_service__WEBPACK_IMPORTED_MODULE_2__["WallettransactionService"] }, { type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "VkP/":
/*!********************************************************!*\
  !*** ./src/app/pages/appheader/appheader.component.ts ***!
  \********************************************************/
/*! exports provided: AppheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppheaderComponent", function() { return AppheaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppheaderComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    logout() {
        localStorage.removeItem('authToken');
        localStorage.clear();
        this.router.navigate(['/Login']);
    }
}
AppheaderComponent.ɵfac = function AppheaderComponent_Factory(t) { return new (t || AppheaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppheaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppheaderComponent, selectors: [["app-appheader"]], decls: 9, vars: 0, consts: [[1, "main-header", "navbar", "navbar-expand", "navbar-white", "navbar-light", 2, "background-color", "#17a2b8"], [1, "navbar-nav"], [1, "nav-item"], ["data-widget", "pushmenu", "href", "javascript:void(0)", "role", "button", 1, "nav-link"], [1, "fas", "fa-bars"], [1, "navbar-nav", "ml-auto"], ["href", "javascript:void(0)", 1, "right", 2, "padding", "10px 14px", "color", "#fff", 3, "click"]], template: function AppheaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppheaderComponent_Template_a_click_7_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sign out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppheaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-appheader',
                templateUrl: './appheader.component.html',
                styleUrls: ['./appheader.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "WS/y":
/*!************************************************!*\
  !*** ./src/app/services/user/users.service.ts ***!
  \************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../web-request/web-request.service */ "fYgw");



// import { User } from '../../models/user.model';
class UsersService {
    constructor(webReqService) {
        this.webReqService = webReqService;
    }
    userAuth(token) {
        return this.webReqService.post('user/validateUser', { token: token });
    }
    getUsers() {
        return this.webReqService.get('user/alluser');
    }
    getSignup() {
        return this.webReqService.get('users/dashboardSignups');
    }
    getRecharges() {
        return this.webReqService.get('users/dashboardRecharges');
    }
    getUser(userId) {
        return this.webReqService.get(`user/profile/${userId}`);
    }
    getUserType(userType) {
        return this.webReqService.get(`users/${userType}`);
    }
    createUser(username, email, password, phone) {
        // We want to send a web request to create a list
        return this.webReqService.post('users', {
            username: username,
            email: email,
            password: password,
            phone: phone,
        });
    }
    updateUser(id, username, email, password, phone) {
        // We want to send a web request to update a list
        return this.webReqService.patch(`users/${id}`, {
            username: username,
            email: email,
            password: password,
            phone: phone,
        });
    }
    activeUser(userid) {
        // We want to send a web request to update a list
        return this.webReqService.get('user/toggleStatus/' + userid);
    }
    inactiveUser(userid) {
        // We want to send a web request to update a list
        return this.webReqService.get('user/toggleStatus/' + userid);
    }
    deleteUser(id) {
        console.log(id);
        return this.webReqService.delete(`users/${id}`);
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"])); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"] }]; }, null); })();


/***/ }),

/***/ "WpZX":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/recharge/percentage-recharge/percentage-recharge.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PercentageRechargeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercentageRechargeComponent", function() { return PercentageRechargeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../appheader/appheader.component */ "VkP/");
/* harmony import */ var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../appmenu/appmenu.component */ "HgAV");
/* harmony import */ var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../appfooter/appfooter.component */ "FFBd");
/* harmony import */ var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../appsetting/appsetting.component */ "gkWW");






class PercentageRechargeComponent {
    constructor() { }
    ngOnInit() {
    }
}
PercentageRechargeComponent.ɵfac = function PercentageRechargeComponent_Factory(t) { return new (t || PercentageRechargeComponent)(); };
PercentageRechargeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PercentageRechargeComponent, selectors: [["app-percentage-recharge"]], decls: 32, vars: 0, consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header"], [1, "card-title"], [1, "card-tools"], ["href", "/member-add", 1, "btn", "btn-success", "btn-sm"], [1, "card-body"], ["id", "example1", 1, "table", "table-bordered", "table-striped"]], template: function PercentageRechargeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-appheader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-appmenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Recharge Percentage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Sr No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Service Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Operator Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Operator Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Commission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Surcharge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-appfooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-appsetting");
    } }, directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_1__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_2__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_3__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_4__["AppsettingComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJjZW50YWdlLXJlY2hhcmdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PercentageRechargeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-percentage-recharge',
                templateUrl: './percentage-recharge.component.html',
                styleUrls: ['./percentage-recharge.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "XQFj":
/*!***********************************************************************!*\
  !*** ./src/app/pages/operator/add-operator/add-operator.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddOperatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOperatorComponent", function() { return AddOperatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_services_operator_operator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/operator/operator.service */ "lQHH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../appheader/appheader.component */ "VkP/");
/* harmony import */ var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../appmenu/appmenu.component */ "HgAV");
/* harmony import */ var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../appfooter/appfooter.component */ "FFBd");
/* harmony import */ var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../appsetting/appsetting.component */ "gkWW");









class AddOperatorComponent {
    constructor(operatorService, router) {
        this.operatorService = operatorService;
        this.router = router;
    }
    ngOnInit() {
    }
    createOperator(operatorcode, operatorname, cashbackPercentageForZpay, cashbackPercentageForCustomer, operatorstatus) {
        let validate = this.validating(operatorcode, operatorname, cashbackPercentageForZpay, cashbackPercentageForCustomer, operatorstatus);
        if (!validate.status) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire(validate.message, '', 'warning');
            return false;
        }
        this.operatorService.createOperator(operatorcode, operatorname, cashbackPercentageForZpay, cashbackPercentageForCustomer, operatorstatus).subscribe((operator) => {
            console.log(operator);
            // Now we navigate to /users/user._id
            this.router.navigate(['/operator-list']);
        });
    }
    validating(operatorcode, operatorname, cashbackPercentageForZpay, cashbackPercentageForCustomer, operatorstatus) {
        let res = {
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
}
AddOperatorComponent.ɵfac = function AddOperatorComponent_Factory(t) { return new (t || AddOperatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_operator_operator_service__WEBPACK_IMPORTED_MODULE_2__["OperatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AddOperatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddOperatorComponent, selectors: [["app-add-operator"]], decls: 56, vars: 0, consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header", "with-border"], [1, "card-title"], [1, "card-body"], [1, "row", "clearfix"], [1, "col-md-6"], ["for", "name", 1, "control-label"], [1, "form-group"], ["type", "text", "name", "operatorcode", "value", "", "id", "operatorcode", 1, "form-control"], ["operatorcode", ""], ["type", "text", "name", "operatorname", "value", "", "id", "operatorname", 1, "form-control"], ["operatorname", ""], ["type", "text", "name", "cashbackPercentageForZpay", "value", "", "id", "cashbackPercentageForZpay", 1, "form-control"], ["cashbackPercentageForZpay", ""], ["type", "text", "name", "cashbackPercentageForCustomer", "value", "", "id", "cashbackPercentageForCustomer", 1, "form-control"], ["cashbackPercentageForCustomer", ""], ["for", "operatorstatus", 1, "control-label"], ["id", "operatorstatus", 1, "form-control"], ["operatorstatus", ""], ["value", ""], ["value", "Active"], ["value", "Pending"], ["value", "cancel"], [1, "card-footer"], [1, "btn", "btn-success", 3, "click"], [1, "fa", "fa-check"]], template: function AddOperatorComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-appheader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-appmenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Operator Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Operator Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Operator Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Zpay Cashback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Customer Cashback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Operator Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "select", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Select Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddOperatorComponent_Template_button_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41); return ctx.createOperator(_r0.value, _r1.value, _r2.value, _r3.value, _r4.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "app-appfooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "app-appsetting");
    } }, directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_4__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_5__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_6__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_7__["AppsettingComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtb3BlcmF0b3IuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddOperatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-operator',
                templateUrl: './add-operator.component.html',
                styleUrls: ['./add-operator.component.scss']
            }]
    }], function () { return [{ type: src_app_services_operator_operator_service__WEBPACK_IMPORTED_MODULE_2__["OperatorService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "XXEo":
/*!*************************************************!*\
  !*** ./src/app/services/login/login.service.ts ***!
  \*************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../web-request/web-request.service */ "fYgw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class LoginService {
    constructor(webService, router, http) {
        this.webService = webService;
        this.router = router;
        this.http = http;
    }
    login(email, password) {
        return this.webService.login(email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((res) => {
            console.log(res);
            // localStorage.setItem('authToken', res.body.authToken)
            // the auth tokens will be in the header of this response
            this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
            console.log(localStorage.getItem('x-access-token'));
        }));
    }
    logout() {
        this.removeSession();
    }
    getAccessToken() {
        return localStorage.getItem('x-access-item');
    }
    getRefreshToken() {
        return localStorage.getItem('x-refresh-item');
    }
    setAccessToken(accessToken) {
        localStorage.setItem('x-access-item', accessToken);
    }
    setSession(userId, accessToken, refreshToken) {
        localStorage.setItem('user-id', userId);
        localStorage.setItem('x-access-token', accessToken);
        localStorage.setItem('x-refresh-token', refreshToken);
        localStorage.setItem('user-name', "Vikas Saini");
    }
    removeSession() {
        localStorage.removeItem('user-id');
        localStorage.removeItem('x-access-token');
        localStorage.removeItem('x-refresh-token');
        localStorage.removeItem('user-name');
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_web_request_web_request_service__WEBPACK_IMPORTED_MODULE_2__["WebRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_2__["WebRequestService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/appheader/appheader.component */ "VkP/");
/* harmony import */ var _pages_appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/appmenu/appmenu.component */ "HgAV");
/* harmony import */ var _pages_appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/appfooter/appfooter.component */ "FFBd");
/* harmony import */ var _pages_appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/appsetting/appsetting.component */ "gkWW");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "U5Cf");
/* harmony import */ var _pages_users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/users/add-user/add-user.component */ "mva7");
/* harmony import */ var _pages_users_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/users/list-user/list-user.component */ "lwqZ");
/* harmony import */ var _pages_users_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/users/edit-user/edit-user.component */ "gip2");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _pages_member_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/member/add-member/add-member.component */ "g05F");
/* harmony import */ var _pages_member_list_member_list_member_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/member/list-member/list-member.component */ "16kr");
/* harmony import */ var _pages_member_edit_member_edit_member_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/member/edit-member/edit-member.component */ "hton");
/* harmony import */ var _pages_recharge_list_recharge_list_recharge_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/recharge/list-recharge/list-recharge.component */ "dwHl");
/* harmony import */ var _pages_recharge_pending_recharge_pending_recharge_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/recharge/pending-recharge/pending-recharge.component */ "jScI");
/* harmony import */ var _pages_recharge_percentage_recharge_percentage_recharge_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/recharge/percentage-recharge/percentage-recharge.component */ "WpZX");
/* harmony import */ var _pages_recharge_api_recharge_api_recharge_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/recharge/api-recharge/api-recharge.component */ "oB0g");
/* harmony import */ var _pages_member_percentage_member_percentage_member_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/member/percentage-member/percentage-member.component */ "8btI");
/* harmony import */ var _pages_wallet_wallet_transaction_wallet_transaction_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/wallet/wallet-transaction/wallet-transaction.component */ "Vi1k");
/* harmony import */ var _pages_wallet_wallet_balance_wallet_balance_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/wallet/wallet-balance/wallet-balance.component */ "CUqn");
/* harmony import */ var _pages_member_fund_member_fund_member_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/member/fund-member/fund-member.component */ "oNai");
/* harmony import */ var _pages_report_admin_profit_report_admin_profit_report_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/report/admin-profit-report/admin-profit-report.component */ "KD3v");
/* harmony import */ var _pages_report_transaction_report_transaction_report_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/report/transaction-report/transaction-report.component */ "Fv0Y");
/* harmony import */ var _pages_operator_add_operator_add_operator_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/operator/add-operator/add-operator.component */ "XQFj");
/* harmony import */ var _pages_operator_edit_operator_edit_operator_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/operator/edit-operator/edit-operator.component */ "95/E");
/* harmony import */ var _pages_operator_list_operator_list_operator_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/operator/list-operator/list-operator.component */ "6KO4");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_users_user_wallet_user_wallet_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/users/user-wallet/user-wallet.component */ "TOxE");
/* harmony import */ var _pages_users_user_recharge_user_recharge_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/users/user-recharge/user-recharge.component */ "I+kH");
/* harmony import */ var _pages_wallet_wallet_add_wallet_add_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/wallet/wallet-add/wallet-add.component */ "3QZ1");
/* harmony import */ var _pages_recharge_latest_recharge_latest_recharge_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/recharge/latest-recharge/latest-recharge.component */ "HIZA");
























// import { LoginDetailComponent } from './pages/login/login-detail/login-detail.component';












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"] }], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _pages_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_5__["AppheaderComponent"],
        _pages_appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_6__["AppmenuComponent"],
        _pages_appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_7__["AppfooterComponent"],
        _pages_appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_8__["AppsettingComponent"],
        _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
        _pages_users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_10__["AddUserComponent"],
        _pages_users_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_11__["ListUserComponent"],
        _pages_users_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_12__["EditUserComponent"],
        _pages_member_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_14__["AddMemberComponent"],
        _pages_member_list_member_list_member_component__WEBPACK_IMPORTED_MODULE_15__["ListMemberComponent"],
        _pages_member_edit_member_edit_member_component__WEBPACK_IMPORTED_MODULE_16__["EditMemberComponent"],
        _pages_recharge_list_recharge_list_recharge_component__WEBPACK_IMPORTED_MODULE_17__["ListRechargeComponent"],
        _pages_recharge_pending_recharge_pending_recharge_component__WEBPACK_IMPORTED_MODULE_18__["PendingRechargeComponent"],
        _pages_recharge_percentage_recharge_percentage_recharge_component__WEBPACK_IMPORTED_MODULE_19__["PercentageRechargeComponent"],
        _pages_recharge_api_recharge_api_recharge_component__WEBPACK_IMPORTED_MODULE_20__["ApiRechargeComponent"],
        _pages_member_percentage_member_percentage_member_component__WEBPACK_IMPORTED_MODULE_21__["PercentageMemberComponent"],
        _pages_wallet_wallet_transaction_wallet_transaction_component__WEBPACK_IMPORTED_MODULE_22__["WalletTransactionComponent"],
        _pages_wallet_wallet_balance_wallet_balance_component__WEBPACK_IMPORTED_MODULE_23__["WalletBalanceComponent"],
        _pages_member_fund_member_fund_member_component__WEBPACK_IMPORTED_MODULE_24__["FundMemberComponent"],
        _pages_report_admin_profit_report_admin_profit_report_component__WEBPACK_IMPORTED_MODULE_25__["AdminProfitReportComponent"],
        _pages_report_transaction_report_transaction_report_component__WEBPACK_IMPORTED_MODULE_26__["TransactionReportComponent"],
        _pages_operator_add_operator_add_operator_component__WEBPACK_IMPORTED_MODULE_27__["AddOperatorComponent"],
        _pages_operator_edit_operator_edit_operator_component__WEBPACK_IMPORTED_MODULE_28__["EditOperatorComponent"],
        _pages_operator_list_operator_list_operator_component__WEBPACK_IMPORTED_MODULE_29__["ListOperatorComponent"],
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_30__["LoginComponent"],
        _pages_users_user_wallet_user_wallet_component__WEBPACK_IMPORTED_MODULE_31__["UserWalletComponent"],
        _pages_users_user_recharge_user_recharge_component__WEBPACK_IMPORTED_MODULE_32__["UserRechargeComponent"],
        _pages_wallet_wallet_add_wallet_add_component__WEBPACK_IMPORTED_MODULE_33__["WalletAddComponent"],
        _pages_recharge_latest_recharge_latest_recharge_component__WEBPACK_IMPORTED_MODULE_34__["LatestRechargeComponent"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _pages_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_5__["AppheaderComponent"],
                    _pages_appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_6__["AppmenuComponent"],
                    _pages_appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_7__["AppfooterComponent"],
                    _pages_appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_8__["AppsettingComponent"],
                    _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                    _pages_users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_10__["AddUserComponent"],
                    _pages_users_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_11__["ListUserComponent"],
                    _pages_users_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_12__["EditUserComponent"],
                    _pages_member_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_14__["AddMemberComponent"],
                    _pages_member_list_member_list_member_component__WEBPACK_IMPORTED_MODULE_15__["ListMemberComponent"],
                    _pages_member_edit_member_edit_member_component__WEBPACK_IMPORTED_MODULE_16__["EditMemberComponent"],
                    _pages_recharge_list_recharge_list_recharge_component__WEBPACK_IMPORTED_MODULE_17__["ListRechargeComponent"],
                    _pages_recharge_pending_recharge_pending_recharge_component__WEBPACK_IMPORTED_MODULE_18__["PendingRechargeComponent"],
                    _pages_recharge_percentage_recharge_percentage_recharge_component__WEBPACK_IMPORTED_MODULE_19__["PercentageRechargeComponent"],
                    _pages_recharge_api_recharge_api_recharge_component__WEBPACK_IMPORTED_MODULE_20__["ApiRechargeComponent"],
                    _pages_member_percentage_member_percentage_member_component__WEBPACK_IMPORTED_MODULE_21__["PercentageMemberComponent"],
                    _pages_wallet_wallet_transaction_wallet_transaction_component__WEBPACK_IMPORTED_MODULE_22__["WalletTransactionComponent"],
                    _pages_wallet_wallet_balance_wallet_balance_component__WEBPACK_IMPORTED_MODULE_23__["WalletBalanceComponent"],
                    _pages_member_fund_member_fund_member_component__WEBPACK_IMPORTED_MODULE_24__["FundMemberComponent"],
                    _pages_report_admin_profit_report_admin_profit_report_component__WEBPACK_IMPORTED_MODULE_25__["AdminProfitReportComponent"],
                    _pages_report_transaction_report_transaction_report_component__WEBPACK_IMPORTED_MODULE_26__["TransactionReportComponent"],
                    _pages_operator_add_operator_add_operator_component__WEBPACK_IMPORTED_MODULE_27__["AddOperatorComponent"],
                    _pages_operator_edit_operator_edit_operator_component__WEBPACK_IMPORTED_MODULE_28__["EditOperatorComponent"],
                    _pages_operator_list_operator_list_operator_component__WEBPACK_IMPORTED_MODULE_29__["ListOperatorComponent"],
                    _pages_login_login_component__WEBPACK_IMPORTED_MODULE_30__["LoginComponent"],
                    _pages_users_user_wallet_user_wallet_component__WEBPACK_IMPORTED_MODULE_31__["UserWalletComponent"],
                    _pages_users_user_recharge_user_recharge_component__WEBPACK_IMPORTED_MODULE_32__["UserRechargeComponent"],
                    _pages_wallet_wallet_add_wallet_add_component__WEBPACK_IMPORTED_MODULE_33__["WalletAddComponent"],
                    _pages_recharge_latest_recharge_latest_recharge_component__WEBPACK_IMPORTED_MODULE_34__["LatestRechargeComponent"]
                ],
                imports: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                ],
                providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"] }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cT6d":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user/users.service */ "WS/y");






class AuthGuard {
    constructor(http, router, userService) {
        this.http = http;
        this.router = router;
        this.userService = userService;
    }
    canActivate(route, state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let token = localStorage.getItem('authToken');
            if (!token || token == '' || token == null) {
                this.router.navigate(['/Login']);
            }
            else {
                let isOk = yield this.isLoggedIn(token);
                if (isOk == "OK") {
                    return true;
                }
                else {
                    this.router.navigate(['/Login']);
                }
            }
            return true;
        });
    }
    isLoggedIn(token) {
        return new Promise((resolve, rejects) => {
            this.userService.userAuth(token).subscribe(response => {
                if (response['success'] == true) {
                    resolve('OK');
                }
                else {
                    resolve('KO');
                }
            }, error => {
                resolve('KO');
            });
        });
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_user_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_user_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] }]; }, null); })();


/***/ }),

/***/ "dwHl":
/*!*************************************************************************!*\
  !*** ./src/app/pages/recharge/list-recharge/list-recharge.component.ts ***!
  \*************************************************************************/
/*! exports provided: ListRechargeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRechargeComponent", function() { return ListRechargeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var src_app_services_recharge_recharge_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/recharge/recharge.service */ "Sgnu");
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common/common.service */ "++gc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../appheader/appheader.component */ "VkP/");
/* harmony import */ var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../appmenu/appmenu.component */ "HgAV");
/* harmony import */ var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../appfooter/appfooter.component */ "FFBd");
/* harmony import */ var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../appsetting/appsetting.component */ "gkWW");










const DATATABLE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].dataTableUri;
class ListRechargeComponent {
    // constructor(private taskService: TaskService, private router: Router) { }
    constructor(rechargeservice, common, route, router) {
        this.rechargeservice = rechargeservice;
        this.common = common;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.loadDataTable();
        // (params: Params) => {
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
    loadDataTable() {
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
                url: `${DATATABLE_URL}/oldrecharge`
            },
            "lengthMenu": [10, 20, 50, 100, 1000],
            columns: [
                { data: 'sl_no' },
                { data: 'name' },
                { data: 'phone' },
                { data: 'mobile' },
                { data: 'amount' },
                { data: 'operator' },
                { data: 'txnId' },
                { data: 'transactionId' },
                { data: 'status' },
                { data: 'apiName' },
                { data: 'operatorRef' },
                { data: 'errormessage' },
                { data: 'createdAt' }
            ],
        });
    }
}
ListRechargeComponent.ɵfac = function ListRechargeComponent_Factory(t) { return new (t || ListRechargeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_recharge_recharge_service__WEBPACK_IMPORTED_MODULE_2__["RechargeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ListRechargeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListRechargeComponent, selectors: [["app-list-recharge"]], decls: 43, vars: 0, consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "old-recharge-list", 1, "table", "table-bordered", "table-striped"]], template: function ListRechargeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-appheader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-appmenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Old Recharge History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sr. No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Member Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Member Mobile No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Recharge No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Recharge Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Operator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "TX ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "API Tx ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "API Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Operator Ref.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Error Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Date And Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-appfooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "app-appsetting");
    } }, directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_5__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_6__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_7__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_8__["AppsettingComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXJlY2hhcmdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListRechargeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-recharge',
                templateUrl: './list-recharge.component.html',
                styleUrls: ['./list-recharge.component.scss']
            }]
    }], function () { return [{ type: src_app_services_recharge_recharge_service__WEBPACK_IMPORTED_MODULE_2__["RechargeService"] }, { type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "fYgw":
/*!*************************************************************!*\
  !*** ./src/app/services/web-request/web-request.service.ts ***!
  \*************************************************************/
/*! exports provided: WebRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebRequestService", function() { return WebRequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class WebRequestService {
    constructor(http) {
        this.http = http;
        // this.ROOT_URL = 'http://localhost:3002/';
        this.ROOT_URL = `https://zpays.in:3002/`;
    }
    get(uri) {
        const authToken = localStorage.getItem('authToken');
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: authToken,
            deviceType: "web",
            deviceToken: "1234567890web"
        });
        return this.http.get(`${this.ROOT_URL}${uri}`, { headers });
    }
    post(uri, payload) {
        const authToken = localStorage.getItem('authToken');
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: authToken,
            deviceType: "web",
            deviceToken: "1234567890web"
        });
        return this.http.post(`${this.ROOT_URL}${uri}`, payload, { headers });
    }
    patch(uri, payload) {
        return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
    }
    delete(uri) {
        return this.http.delete(`${this.ROOT_URL}/${uri}`);
    }
    login(email, password) {
        // alert("naruto1" + email)
        // alert(`${this.ROOT_URL}/users/login`)
        // return
        let body = {
            username: email,
            password: password,
            deviceType: "web",
            deviceToken: "1234567890web",
            location: {
                lat: "0.0000000000",
                long: "0.0000000000"
            },
            ipAddress: "1.1.1.1",
            macAddress: "1.1.1.1"
        };
        return this.http.post(`${this.ROOT_URL}user/login/admin`, body, {
            observe: 'response'
        });
    }
    signup(email, password) {
        return this.http.post(`${this.ROOT_URL}/users`, {
            email,
            password
        }, {
            observe: 'response'
        });
    }
}
WebRequestService.ɵfac = function WebRequestService_Factory(t) { return new (t || WebRequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
WebRequestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WebRequestService, factory: WebRequestService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebRequestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "g05F":
/*!*****************************************************************!*\
  !*** ./src/app/pages/member/add-member/add-member.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddMemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMemberComponent", function() { return AddMemberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../appheader/appheader.component */ "VkP/");
/* harmony import */ var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../appmenu/appmenu.component */ "HgAV");
/* harmony import */ var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../appfooter/appfooter.component */ "FFBd");
/* harmony import */ var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../appsetting/appsetting.component */ "gkWW");






class AddMemberComponent {
    constructor() { }
    ngOnInit() {
    }
}
AddMemberComponent.ɵfac = function AddMemberComponent_Factory(t) { return new (t || AddMemberComponent)(); };
AddMemberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddMemberComponent, selectors: [["app-add-member"]], decls: 86, vars: 0, consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header", "with-border"], [1, "card-title"], [1, "card-body"], [1, "row", "clearfix"], [1, "col-md-4"], ["for", "name", 1, "control-label"], [1, "form-group"], ["type", "text", "name", "firmname", "value", "", "id", "firmname", 1, "form-control"], ["firmname", ""], ["for", "email", 1, "control-label"], [1, "text-danger"], ["type", "text", "name", "email", "value", "", "id", "email", 1, "form-control"], ["email", ""], ["for", "phone", 1, "control-label"], ["type", "text", "name", "phone", "value", "", "id", "phone", 1, "form-control"], ["phone", ""], ["for", "password", 1, "control-label"], ["type", "password", "name", "password", "value", "", "id", "password", 1, "form-control"], ["password", ""], ["for", "transactionpass", 1, "control-label"], ["type", "text", "name", "transactionpass", "value", "", "id", "transactionpass", 1, "form-control"], ["transactionpass", ""], ["for", "address", 1, "control-label"], ["type", "text", "name", "address", "value", "", "id", "address", 1, "form-control"], ["address", ""], ["for", "landmark", 1, "control-label"], ["type", "text", "name", "landmark", "value", "", "id", "landmark", 1, "form-control"], ["landmark", ""], ["for", "country", 1, "control-label"], ["type", "text", "name", "country", "value", "", "id", "country", 1, "form-control"], ["country", ""], ["for", "state", 1, "control-label"], ["type", "text", "name", "state", "value", "", "id", "state", 1, "form-control"], ["state", ""], ["for", "city", 1, "control-label"], ["type", "text", "name", "city", "value", "", "id", "city", 1, "form-control"], ["city", ""], ["for", "pincode", 1, "control-label"], ["type", "text", "name", "pincode", "value", "", "id", "pincode", 1, "form-control"], ["pincode", ""], [1, "card-footer"], [1, "btn", "btn-success"], [1, "fa", "fa-check"]], template: function AddMemberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-appheader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-appmenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Member Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Firm Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Transaction Password (Pin)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Landmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Pincode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 43, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "app-appfooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "app-appsetting");
    } }, directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_1__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_2__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_3__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_4__["AppsettingComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtbWVtYmVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddMemberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-member',
                templateUrl: './add-member.component.html',
                styleUrls: ['./add-member.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "gip2":
/*!**************************************************************!*\
  !*** ./src/app/pages/users/edit-user/edit-user.component.ts ***!
  \**************************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user/users.service */ "WS/y");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../appheader/appheader.component */ "VkP/");
/* harmony import */ var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../appmenu/appmenu.component */ "HgAV");
/* harmony import */ var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../appfooter/appfooter.component */ "FFBd");
/* harmony import */ var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../appsetting/appsetting.component */ "gkWW");








class EditUserComponent {
    constructor(usersService, route, router) {
        this.usersService = usersService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            if (params.userId) {
                this.selectedUserId = params.userId;
                this.usersService.getUser(params.userId).subscribe((users) => {
                    this.users = users;
                });
            }
            else {
                this.users = undefined;
            }
        });
    }
    updateUser(id, username, email, password, phone) {
        this.usersService.updateUser(id, username, email, password, phone).subscribe((user) => {
            console.log(user);
            // Now we navigate to /users/user._id
            this.router.navigate(['/user-list']);
        });
    }
}
EditUserComponent.ɵfac = function EditUserComponent_Factory(t) { return new (t || EditUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
EditUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditUserComponent, selectors: [["app-edit-user"]], decls: 47, vars: 4, consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header", "with-border"], [1, "card-title"], [1, "card-body"], [1, "row", "clearfix"], [1, "col-md-6"], ["for", "name", 1, "control-label"], [1, "text-danger"], [1, "form-group"], ["type", "text", "name", "name", "id", "name", 1, "form-control", 3, "value"], ["userName", ""], ["for", "email", 1, "control-label"], ["type", "text", "name", "email", "id", "email", 1, "form-control", 3, "value"], ["email", ""], ["for", "phone", 1, "control-label"], ["type", "text", "name", "phone", "id", "phone", 1, "form-control", 3, "value"], ["phone", ""], ["for", "password", 1, "control-label"], ["type", "text", "name", "password", "id", "password", 1, "form-control", 3, "value"], ["password", ""], [1, "card-footer"], ["type", "submit", 1, "btn", "btn-success", 3, "click"], [1, "fa", "fa-check"]], template: function EditUserComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-appheader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-appmenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "User Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditUserComponent_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](40); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34); return ctx.updateUser(ctx.users[0]._id, _r0.value, _r1.value, _r3.value, _r2.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "app-appfooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "app-appsetting");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.users[0].username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.users[0].email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.users[0].phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.users[0].password);
    } }, directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_3__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_4__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_5__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_6__["AppsettingComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXVzZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-user',
                templateUrl: './edit-user.component.html',
                styleUrls: ['./edit-user.component.scss']
            }]
    }], function () { return [{ type: src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "gkWW":
/*!**********************************************************!*\
  !*** ./src/app/pages/appsetting/appsetting.component.ts ***!
  \**********************************************************/
/*! exports provided: AppsettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsettingComponent", function() { return AppsettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AppsettingComponent {
    constructor() { }
    ngOnInit() {
    }
}
AppsettingComponent.ɵfac = function AppsettingComponent_Factory(t) { return new (t || AppsettingComponent)(); };
AppsettingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppsettingComponent, selectors: [["app-appsetting"]], decls: 1, vars: 0, consts: [[1, "control-sidebar", "control-sidebar-dark"]], template: function AppsettingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "aside", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzZXR0aW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppsettingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-appsetting',
                templateUrl: './appsetting.component.html',
                styleUrls: ['./appsetting.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hton":
/*!*******************************************************************!*\
  !*** ./src/app/pages/member/edit-member/edit-member.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditMemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMemberComponent", function() { return EditMemberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../appheader/appheader.component */ "VkP/");
/* harmony import */ var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../appmenu/appmenu.component */ "HgAV");
/* harmony import */ var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../appfooter/appfooter.component */ "FFBd");
/* harmony import */ var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../appsetting/appsetting.component */ "gkWW");






class EditMemberComponent {
    constructor() { }
    ngOnInit() {
    }
}
EditMemberComponent.ɵfac = function EditMemberComponent_Factory(t) { return new (t || EditMemberComponent)(); };
EditMemberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditMemberComponent, selectors: [["app-edit-member"]], decls: 86, vars: 0, consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header", "with-border"], [1, "card-title"], [1, "card-body"], [1, "row", "clearfix"], [1, "col-md-4"], ["for", "name", 1, "control-label"], [1, "form-group"], ["type", "text", "name", "firmname", "value", "", "id", "firmname", 1, "form-control"], ["firmname", ""], ["for", "email", 1, "control-label"], [1, "text-danger"], ["type", "text", "name", "email", "value", "", "id", "email", 1, "form-control"], ["email", ""], ["for", "phone", 1, "control-label"], ["type", "text", "name", "phone", "value", "", "id", "phone", 1, "form-control"], ["phone", ""], ["for", "password", 1, "control-label"], ["type", "password", "name", "password", "value", "", "id", "password", 1, "form-control"], ["password", ""], ["for", "transactionpass", 1, "control-label"], ["type", "text", "name", "transactionpass", "value", "", "id", "transactionpass", 1, "form-control"], ["transactionpass", ""], ["for", "address", 1, "control-label"], ["type", "text", "name", "address", "value", "", "id", "address", 1, "form-control"], ["address", ""], ["for", "landmark", 1, "control-label"], ["type", "text", "name", "landmark", "value", "", "id", "landmark", 1, "form-control"], ["landmark", ""], ["for", "country", 1, "control-label"], ["type", "text", "name", "country", "value", "", "id", "country", 1, "form-control"], ["country", ""], ["for", "state", 1, "control-label"], ["type", "text", "name", "state", "value", "", "id", "state", 1, "form-control"], ["state", ""], ["for", "city", 1, "control-label"], ["type", "text", "name", "city", "value", "", "id", "city", 1, "form-control"], ["city", ""], ["for", "pincode", 1, "control-label"], ["type", "text", "name", "pincode", "value", "", "id", "pincode", 1, "form-control"], ["pincode", ""], [1, "card-footer"], [1, "btn", "btn-success"], [1, "fa", "fa-check"]], template: function EditMemberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-appheader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-appmenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Member Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Firm Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Transaction Password (Pin)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Landmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Pincode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 43, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "app-appfooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "app-appsetting");
    } }, directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_1__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_2__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_3__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_4__["AppsettingComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LW1lbWJlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditMemberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-member',
                templateUrl: './edit-member.component.html',
                styleUrls: ['./edit-member.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "jScI":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/recharge/pending-recharge/pending-recharge.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PendingRechargeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingRechargeComponent", function() { return PendingRechargeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var src_app_services_recharge_recharge_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/recharge/recharge.service */ "Sgnu");
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common/common.service */ "++gc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../appheader/appheader.component */ "VkP/");
/* harmony import */ var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../appmenu/appmenu.component */ "HgAV");
/* harmony import */ var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../appfooter/appfooter.component */ "FFBd");
/* harmony import */ var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../appsetting/appsetting.component */ "gkWW");










const DATATABLE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].dataTableUri;
class PendingRechargeComponent {
    // constructor(private taskService: TaskService, private router: Router) { }
    constructor(rechargeService, common, route, router) {
        this.rechargeService = rechargeService;
        this.common = common;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        // this.common.loadScript()
        // this.rechargeService.getPendingRecharges().subscribe((recharges: any) => {
        //   this.recharges = recharges.data;
        // })
        this.loadDataTable();
    }
    loadDataTable() {
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
                url: `${DATATABLE_URL}/pendingrecharge`
            },
            "lengthMenu": [10, 20, 50, 100, 1000],
            columns: [
                { data: 'sl_no' },
                { data: 'name' },
                { data: 'phone' },
                { data: 'mobile' },
                { data: 'amount' },
                { data: 'operator' },
                { data: 'txnId' },
                { data: 'transactionId' },
                { data: 'status' },
                { data: 'apiName' },
                { data: 'operatorRef' },
                { data: 'errormessage' },
                { data: 'createdAt' }
            ],
        });
    }
}
PendingRechargeComponent.ɵfac = function PendingRechargeComponent_Factory(t) { return new (t || PendingRechargeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_recharge_recharge_service__WEBPACK_IMPORTED_MODULE_2__["RechargeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
PendingRechargeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PendingRechargeComponent, selectors: [["app-pending-recharge"]], decls: 43, vars: 0, consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "pending-recharge-list", 1, "table", "table-bordered", "table-striped"]], template: function PendingRechargeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-appheader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-appmenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Pending Recharge History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sr. No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Member Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Mobile No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "CA Mobile No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Recharge Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Operator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "TX ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "API Tx ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "APIID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Operator Ref.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Error Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-appfooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "app-appsetting");
    } }, directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_5__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_6__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_7__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_8__["AppsettingComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZW5kaW5nLXJlY2hhcmdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PendingRechargeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pending-recharge',
                templateUrl: './pending-recharge.component.html',
                styleUrls: ['./pending-recharge.component.scss']
            }]
    }], function () { return [{ type: src_app_services_recharge_recharge_service__WEBPACK_IMPORTED_MODULE_2__["RechargeService"] }, { type: src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "lQHH":
/*!*******************************************************!*\
  !*** ./src/app/services/operator/operator.service.ts ***!
  \*******************************************************/
/*! exports provided: OperatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorService", function() { return OperatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../web-request/web-request.service */ "fYgw");




const DATATABLE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].dataTableUri;
class OperatorService {
    constructor(webReqService) {
        this.webReqService = webReqService;
    }
    getOperators() {
        // return this.webReqService.get('operator/getAll');
        return this.webReqService.get(`datatable/operatorList`);
    }
    getOperator(operatorId) {
        return this.webReqService.get(`operator/${operatorId}`);
    }
    createOperator(operatorcode, operatorname, cashbackPercentageForZpay, cashbackPercentageForCustomer, operatorstatus) {
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
    updateOperator(payload) {
        return this.webReqService.post('operator/update', payload);
    }
    updateUser(operatorid, operatorcode, operatorname, cashbackPercentageForZpay, cashbackPercentageForCustomer, operatorstatus) {
        // We want to send a web request to update a list
        return this.webReqService.get('operator/update/?operatorid=' + operatorid + '%26name=' + operatorname + '%26operatorCode=' + operatorcode + '%26cashbackPercentageForZpay=' + cashbackPercentageForZpay + '%26cashbackPercentageForCustomer=' + cashbackPercentageForCustomer + '%26status=' + operatorstatus);
    }
    deleteUser(id) {
        console.log(id);
        return this.webReqService.delete(`operator/${id}`);
    }
}
OperatorService.ɵfac = function OperatorService_Factory(t) { return new (t || OperatorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_web_request_web_request_service__WEBPACK_IMPORTED_MODULE_2__["WebRequestService"])); };
OperatorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OperatorService, factory: OperatorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OperatorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _web_request_web_request_service__WEBPACK_IMPORTED_MODULE_2__["WebRequestService"] }]; }, null); })();


/***/ }),

/***/ "lwqZ":
/*!**************************************************************!*\
  !*** ./src/app/pages/users/list-user/list-user.component.ts ***!
  \**************************************************************/
/*! exports provided: ListUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUserComponent", function() { return ListUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user/users.service */ "WS/y");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../appheader/appheader.component */ "VkP/");
/* harmony import */ var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../appmenu/appmenu.component */ "HgAV");
/* harmony import */ var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../appfooter/appfooter.component */ "FFBd");
/* harmony import */ var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../appsetting/appsetting.component */ "gkWW");









const DATATABLE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].dataTableUri;
class ListUserComponent {
    // constructor(private taskService: TaskService, private router: Router) { }
    constructor(usersService, ngZone, route, router) {
        this.usersService = usersService;
        this.ngZone = ngZone;
        this.route = route;
        this.router = router;
        // this.usersService.getUsers().subscribe((users: any) => {
        //   this.users = users.data;
        // })
    }
    ngOnInit() {
        window['angularComponentReference'] = {
            component: this,
            zone: this.ngZone,
            changeUserStatus: (id, status, cssid) => this.changeUserStatus(id, status, cssid),
            userWalletRedirection: (id) => this.userWalletRedirection(id)
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
                url: `${DATATABLE_URL}/userList`
            },
            "lengthMenu": [10, 20, 50, 100, 1000],
            columns: [
                { data: "sl_no", orderable: false },
                { data: "name" },
                { data: "email" },
                { data: "phone" },
                { data: "walletBalance" },
                { data: "date" },
                { data: "status" },
                { data: "action" }
            ],
        });
        // this.route.params.subscribe(
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
    changeUserStatus(id, status, cssid) {
        document.getElementById(cssid).innerText = "...";
        if (status == "Active") {
            this.onInactiveUserClick(id);
        }
        else {
            this.onActiveUserClick(id);
        }
    }
    userWalletRedirection(id) {
        this.router.navigate(["user-wallet/" + id]);
    }
    onDeleteUserClick(selectedUserId) {
        console.log("naruto");
        this.usersService.deleteUser(selectedUserId).subscribe((res) => {
            this.ngOnInit();
        });
    }
    onActiveUserClick(selectedUserId) {
        this.usersService.activeUser(selectedUserId).subscribe((res) => {
            this.ngOnInit();
        });
    }
    onInactiveUserClick(selectedUserId) {
        this.usersService.inactiveUser(selectedUserId).subscribe((res) => {
            this.ngOnInit();
        });
    }
}
ListUserComponent.ɵfac = function ListUserComponent_Factory(t) { return new (t || ListUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ListUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListUserComponent, selectors: [["app-list-user"]], decls: 33, vars: 0, consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["id", "user-list", 1, "table", "table-bordered", "table-striped"]], template: function ListUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-appheader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-appmenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Usertype Listing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sl No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Last activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-appfooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-appsetting");
    } }, directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_4__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_5__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_6__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_7__["AppsettingComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXVzZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-user',
                templateUrl: './list-user.component.html',
                styleUrls: ['./list-user.component.scss']
            }]
    }], function () { return [{ type: src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "mva7":
/*!************************************************************!*\
  !*** ./src/app/pages/users/add-user/add-user.component.ts ***!
  \************************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user/users.service */ "WS/y");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../appheader/appheader.component */ "VkP/");
/* harmony import */ var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../appmenu/appmenu.component */ "HgAV");
/* harmony import */ var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../appfooter/appfooter.component */ "FFBd");
/* harmony import */ var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../appsetting/appsetting.component */ "gkWW");








class AddUserComponent {
    constructor(usersService, router) {
        this.usersService = usersService;
        this.router = router;
    }
    ngOnInit() {
    }
    createUser(username, email, password, phone) {
        this.usersService.createUser(username, email, password, phone).subscribe((user) => {
            console.log(user);
            // Now we navigate to /users/user._id
            this.router.navigate(['/user-list']);
        });
    }
}
AddUserComponent.ɵfac = function AddUserComponent_Factory(t) { return new (t || AddUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AddUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddUserComponent, selectors: [["app-add-user"]], decls: 46, vars: 0, consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header", "with-border"], [1, "card-title"], [1, "card-body"], [1, "row", "clearfix"], [1, "col-md-6"], ["for", "name", 1, "control-label"], [1, "text-danger"], [1, "form-group"], ["type", "text", "name", "name", "value", "", "id", "name", 1, "form-control"], ["userName", ""], ["for", "email", 1, "control-label"], ["type", "text", "name", "email", "value", "", "id", "email", 1, "form-control"], ["email", ""], ["for", "password", 1, "control-label"], ["type", "password", "name", "password", "value", "", "id", "password", 1, "form-control"], ["password", ""], ["for", "phone", 1, "control-label"], ["type", "text", "name", "phone", "value", "", "id", "phone", 1, "form-control"], ["phone", ""], [1, "card-footer"], [1, "btn", "btn-success", 3, "click"], [1, "fa", "fa-check"]], template: function AddUserComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-appheader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-appmenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "User Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddUserComponent_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39); return ctx.createUser(_r0.value, _r1.value, _r2.value, _r3.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-appfooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "app-appsetting");
    } }, directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_3__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_4__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_5__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_6__["AppsettingComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtdXNlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-user',
                templateUrl: './add-user.component.html',
                styleUrls: ['./add-user.component.scss']
            }]
    }], function () { return [{ type: src_app_services_user_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "oB0g":
/*!***********************************************************************!*\
  !*** ./src/app/pages/recharge/api-recharge/api-recharge.component.ts ***!
  \***********************************************************************/
/*! exports provided: ApiRechargeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiRechargeComponent", function() { return ApiRechargeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _appheader_appheader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../appheader/appheader.component */ "VkP/");
/* harmony import */ var _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../appmenu/appmenu.component */ "HgAV");
/* harmony import */ var _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../appfooter/appfooter.component */ "FFBd");
/* harmony import */ var _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../appsetting/appsetting.component */ "gkWW");






class ApiRechargeComponent {
    constructor() { }
    ngOnInit() {
    }
}
ApiRechargeComponent.ɵfac = function ApiRechargeComponent_Factory(t) { return new (t || ApiRechargeComponent)(); };
ApiRechargeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApiRechargeComponent, selectors: [["app-api-recharge"]], decls: 28, vars: 0, consts: [[1, "content-wrapper"], [1, "content"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header"], [1, "card-title"], [1, "card-tools"], ["href", "/member-add", 1, "btn", "btn-success", "btn-sm"], [1, "card-body"], ["id", "example1", 1, "table", "table-bordered", "table-striped"]], template: function ApiRechargeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-appheader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-appmenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "API Recharge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "API ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "API Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Available Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Commission Setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-appfooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-appsetting");
    } }, directives: [_appheader_appheader_component__WEBPACK_IMPORTED_MODULE_1__["AppheaderComponent"], _appmenu_appmenu_component__WEBPACK_IMPORTED_MODULE_2__["AppmenuComponent"], _appfooter_appfooter_component__WEBPACK_IMPORTED_MODULE_3__["AppfooterComponent"], _appsetting_appsetting_component__WEBPACK_IMPORTED_MODULE_4__["AppsettingComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcGktcmVjaGFyZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiRechargeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-api-recharge',
                templateUrl: './api-recharge.component.html',
                styleUrls: ['./api-recharge.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "oNai":
/*!*******************************************************************!*\
  !*** ./src/app/pages/member/fund-member/fund-member.component.ts ***!
  \*******************************************************************/
/*! exports provided: FundMemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundMemberComponent", function() { return FundMemberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FundMemberComponent {
    constructor() { }
    ngOnInit() {
    }
}
FundMemberComponent.ɵfac = function FundMemberComponent_Factory(t) { return new (t || FundMemberComponent)(); };
FundMemberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FundMemberComponent, selectors: [["app-fund-member"]], decls: 2, vars: 0, template: function FundMemberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "fund-member works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdW5kLW1lbWJlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FundMemberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fund-member',
                templateUrl: './fund-member.component.html',
                styleUrls: ['./fund-member.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "U5Cf");
/* harmony import */ var _pages_users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/users/add-user/add-user.component */ "mva7");
/* harmony import */ var _pages_users_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/users/edit-user/edit-user.component */ "gip2");
/* harmony import */ var _pages_users_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/users/list-user/list-user.component */ "lwqZ");
/* harmony import */ var _pages_member_list_member_list_member_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/member/list-member/list-member.component */ "16kr");
/* harmony import */ var _pages_member_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/member/add-member/add-member.component */ "g05F");
/* harmony import */ var _pages_member_edit_member_edit_member_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/member/edit-member/edit-member.component */ "hton");
/* harmony import */ var _pages_wallet_wallet_transaction_wallet_transaction_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/wallet/wallet-transaction/wallet-transaction.component */ "Vi1k");
/* harmony import */ var _pages_wallet_wallet_balance_wallet_balance_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/wallet/wallet-balance/wallet-balance.component */ "CUqn");
/* harmony import */ var _pages_recharge_list_recharge_list_recharge_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/recharge/list-recharge/list-recharge.component */ "dwHl");
/* harmony import */ var _pages_recharge_api_recharge_api_recharge_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/recharge/api-recharge/api-recharge.component */ "oB0g");
/* harmony import */ var _pages_recharge_percentage_recharge_percentage_recharge_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/recharge/percentage-recharge/percentage-recharge.component */ "WpZX");
/* harmony import */ var _pages_recharge_pending_recharge_pending_recharge_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/recharge/pending-recharge/pending-recharge.component */ "jScI");
/* harmony import */ var _pages_operator_add_operator_add_operator_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/operator/add-operator/add-operator.component */ "XQFj");
/* harmony import */ var _pages_operator_edit_operator_edit_operator_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/operator/edit-operator/edit-operator.component */ "95/E");
/* harmony import */ var _pages_operator_list_operator_list_operator_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/operator/list-operator/list-operator.component */ "6KO4");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_users_user_wallet_user_wallet_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/users/user-wallet/user-wallet.component */ "TOxE");
/* harmony import */ var _pages_users_user_recharge_user_recharge_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/users/user-recharge/user-recharge.component */ "I+kH");
/* harmony import */ var _pages_wallet_wallet_add_wallet_add_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/wallet/wallet-add/wallet-add.component */ "3QZ1");
/* harmony import */ var _pages_recharge_latest_recharge_latest_recharge_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/recharge/latest-recharge/latest-recharge.component */ "HIZA");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./guard/auth.guard */ "cT6d");


























const routes = [
    { path: '', redirectTo: '/Login', pathMatch: 'full' },
    { path: 'dashboard', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'user-add', component: _pages_users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_3__["AddUserComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'user-edit/:userId', component: _pages_users_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_4__["EditUserComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'user-wallet/:userId', component: _pages_users_user_wallet_user_wallet_component__WEBPACK_IMPORTED_MODULE_19__["UserWalletComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'user-recharge/:userId', component: _pages_users_user_recharge_user_recharge_component__WEBPACK_IMPORTED_MODULE_20__["UserRechargeComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'user-list', component: _pages_users_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_5__["ListUserComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'member-list', component: _pages_member_list_member_list_member_component__WEBPACK_IMPORTED_MODULE_6__["ListMemberComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'member-add', component: _pages_member_add_member_add_member_component__WEBPACK_IMPORTED_MODULE_7__["AddMemberComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'member-edit', component: _pages_member_edit_member_edit_member_component__WEBPACK_IMPORTED_MODULE_8__["EditMemberComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'wallet-transaction', component: _pages_wallet_wallet_transaction_wallet_transaction_component__WEBPACK_IMPORTED_MODULE_9__["WalletTransactionComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'wallet-balance', component: _pages_wallet_wallet_balance_wallet_balance_component__WEBPACK_IMPORTED_MODULE_10__["WalletBalanceComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'wallet-add', component: _pages_wallet_wallet_add_wallet_add_component__WEBPACK_IMPORTED_MODULE_21__["WalletAddComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'recharge-history', component: _pages_recharge_list_recharge_list_recharge_component__WEBPACK_IMPORTED_MODULE_11__["ListRechargeComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'latest-recharge', component: _pages_recharge_latest_recharge_latest_recharge_component__WEBPACK_IMPORTED_MODULE_22__["LatestRechargeComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'recharge-api', component: _pages_recharge_api_recharge_api_recharge_component__WEBPACK_IMPORTED_MODULE_12__["ApiRechargeComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'recharge-percentage', component: _pages_recharge_percentage_recharge_percentage_recharge_component__WEBPACK_IMPORTED_MODULE_13__["PercentageRechargeComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'recharge-pending', component: _pages_recharge_pending_recharge_pending_recharge_component__WEBPACK_IMPORTED_MODULE_14__["PendingRechargeComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'operator-add', component: _pages_operator_add_operator_add_operator_component__WEBPACK_IMPORTED_MODULE_15__["AddOperatorComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'operator-edit/:operatorId', component: _pages_operator_edit_operator_edit_operator_component__WEBPACK_IMPORTED_MODULE_16__["EditOperatorComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'operator-list', component: _pages_operator_list_operator_list_operator_component__WEBPACK_IMPORTED_MODULE_17__["ListOperatorComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'Login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map