(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\ng-fundamentals\src\main.ts */"zUnb");


/***/ }),

/***/ "2U31":
/*!*****************************************!*\
  !*** ./src/app/nav/navbar.component.ts ***!
  \*****************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user/auth.service */ "SkYw");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events */ "Uhkm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _common_modalTrigger_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/modalTrigger.directive */ "H1Cx");
/* harmony import */ var _common_simpleModal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/simpleModal.component */ "wHSJ");








const _c0 = function () { return ["user/login"]; };
function NavBarComponent_a_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["user/profile"]; };
function NavBarComponent_a_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome ", ctx_r1.auth.currentUser.firstName, "");
} }
const _c2 = function (a1) { return ["/events", a1]; };
function NavBarComponent_a_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const session_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, session_r3.eventId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", session_r3.name, " ");
} }
const _c3 = function () { return ["/events"]; };
const _c4 = function () { return { exact: true }; };
const _c5 = function () { return ["/events/new"]; };
class NavBarComponent {
    constructor(auth, eventService) {
        this.auth = auth;
        this.eventService = eventService;
        this.searchTerm = '';
    }
    searchSessions(searchTerm) {
        this.eventService.searchSessions(searchTerm).subscribe((sessions) => {
            this.foundSessions = sessions;
        });
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_events__WEBPACK_IMPORTED_MODULE_2__["EventService"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["nav-bar"]], decls: 34, vars: 10, consts: [[1, "navbar", "navbar-default"], [1, "container-fluid"], [1, "navbar-header"], [1, "navbar-brand"], [1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "active", 3, "routerLink"], [1, "dropdown"], ["href", "#", "data-toggle", "dropdown", 1, "dropdown-toggle"], [1, "caret"], [1, "dropdown-menu"], ["href", ""], [1, "navbar-header", "navbar-right"], [3, "routerLink", 4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["id", "searchForm", 1, "navbar-form", "navbar-right", 3, "ngSubmit"], [1, "form-group"], ["name", "searchTerm", "type", "text", "placeholder", "Search Sessions", 1, "form-control", 3, "ngModel", "ngModelChange"], ["modal-trigger", "searchResults", 1, "btn", "btn-default"], ["closeOnBodyClick", "true", "elementId", "searchResults", "title", "Matching Sessions"], [1, "list-group"], ["class", "list-group-item", 3, "routerLink", 4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "list-group-item", 3, "routerLink"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ngEvents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "All Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Create Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Events ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Angular Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, NavBarComponent_a_24_Template, 2, 2, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, NavBarComponent_a_25_Template, 2, 3, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "form", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NavBarComponent_Template_form_ngSubmit_26_listener() { return ctx.searchSessions(ctx.searchTerm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NavBarComponent_Template_input_ngModelChange_28_listener($event) { return ctx.searchTerm = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "simple-modal", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, NavBarComponent_a_33_Template, 2, 4, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.auth.isAuthenticated());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isAuthenticated());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.foundSessions);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _common_modalTrigger_directive__WEBPACK_IMPORTED_MODULE_6__["ModalTriggerDirective"], _common_simpleModal_component__WEBPACK_IMPORTED_MODULE_7__["SimpleModalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".nav.navbar-nav[_ngcontent-%COMP%] {\n        font-size: 15px;\n      }\n      #searchForm[_ngcontent-%COMP%] {\n        margin-right: 100px;\n      }\n      @media (max-width: 1200px) {\n        #searchForm[_ngcontent-%COMP%] {\n          display: none;\n        }\n      }\n      li[_ngcontent-%COMP%]    > a.active[_ngcontent-%COMP%] {\n        color: #f97924;\n      }"] });


/***/ }),

/***/ "3VDY":
/*!******************************************************!*\
  !*** ./src/app/common/collapsible-well.component.ts ***!
  \******************************************************/
/*! exports provided: CollapsibleWellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapsibleWellComponent", function() { return CollapsibleWellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function CollapsibleWellComponent_ng_content_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 1, ["*ngIf", "visible"]);
} }
const _c0 = [[["", "well-title", ""]], [["", "well-body", ""]]];
const _c1 = ["[well-title]", "[well-body]"];
class CollapsibleWellComponent {
    constructor() {
        this.visible = true;
    }
    toggleContent() {
        this.visible = !this.visible;
    }
}
CollapsibleWellComponent.ɵfac = function CollapsibleWellComponent_Factory(t) { return new (t || CollapsibleWellComponent)(); };
CollapsibleWellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CollapsibleWellComponent, selectors: [["collapsible-well"]], ngContentSelectors: _c1, decls: 4, vars: 1, consts: [[1, "well", "pointable", 3, "click"], [4, "ngIf"]], template: function CollapsibleWellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CollapsibleWellComponent_Template_div_click_0_listener() { return ctx.toggleContent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CollapsibleWellComponent_ng_content_3_Template, 1, 0, "ng-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], encapsulation: 2 });


/***/ }),

/***/ "5K+S":
/*!****************************************************************!*\
  !*** ./src/app/events/event-details/session-list.component.ts ***!
  \****************************************************************/
/*! exports provided: SessionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionListComponent", function() { return SessionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_user_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/user/auth.service */ "SkYw");
/* harmony import */ var _voter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./voter.service */ "zshw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _common_collapsible_well_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/collapsible-well.component */ "3VDY");
/* harmony import */ var _upvote_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upvote.component */ "8m2n");
/* harmony import */ var _shared_duration_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/duration.pipe */ "kR4Y");







function SessionListComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "upvote", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("vote", function SessionListComponent_div_0_div_2_Template_upvote_vote_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const session_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.toggleVote(session_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const session_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("count", session_r1.voters.length)("voted", ctx_r2.userHasVoted(session_r1));
} }
function SessionListComponent_div_0_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 9);
} }
function SessionListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SessionListComponent_div_0_div_2_Template, 2, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "collapsible-well");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SessionListComponent_div_0_i_7_Template, 1, 0, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const session_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.auth.isAuthenticated());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", session_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", session_r1.voters.length > 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](session_r1.presenter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Duration: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 7, session_r1.duration), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Level: ", session_r1.level, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](session_r1.abstract);
} }
class SessionListComponent {
    constructor(auth, voterService) {
        this.auth = auth;
        this.voterService = voterService;
        this.visibleSessions = [];
    }
    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name'
                ? this.visibleSessions.sort(sortByNameAsc)
                : this.visibleSessions.sort(sortByVotesDesc);
        }
    }
    toggleVote(session) {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(this.eventId, session, this.auth.currentUser.userName);
        }
        else {
            this.voterService.addVoter(this.eventId, session, this.auth.currentUser.userName);
        }
        if (this.sortBy === 'votes')
            this.visibleSessions.sort(sortByVotesDesc);
    }
    userHasVoted(session) {
        return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
    }
    filterSessions(filter) {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        }
        else {
            this.visibleSessions = this.sessions.filter((session) => {
                return session.level.toLocaleLowerCase() === filter;
            });
        }
    }
}
SessionListComponent.ɵfac = function SessionListComponent_Factory(t) { return new (t || SessionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_user_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_voter_service__WEBPACK_IMPORTED_MODULE_2__["VoterService"])); };
SessionListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SessionListComponent, selectors: [["session-list"]], inputs: { sessions: "sessions", filterBy: "filterBy", sortBy: "sortBy", eventId: "eventId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-md-1"], [4, "ngIf"], [1, "col-md-10"], ["well-title", ""], ["class", "glyphicon glyphicon-fire", "style", "color: red", 4, "ngIf"], ["well-body", ""], [3, "count", "voted", "vote"], [1, "glyphicon", "glyphicon-fire", 2, "color", "red"]], template: function SessionListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SessionListComponent_div_0_Template, 19, 9, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.visibleSessions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _common_collapsible_well_component__WEBPACK_IMPORTED_MODULE_4__["CollapsibleWellComponent"], _upvote_component__WEBPACK_IMPORTED_MODULE_5__["UpvoteComponent"]], pipes: [_shared_duration_pipe__WEBPACK_IMPORTED_MODULE_6__["DurationPipe"]], encapsulation: 2 });
function sortByNameAsc(s1, s2) {
    if (s1.name > s2.name)
        return 1;
    else if (s1.name === s2.name)
        return 0;
    else
        return -1;
}
function sortByVotesDesc(s1, s2) {
    return s2.voters.length - s1.voters.length;
}


/***/ }),

/***/ "7vaO":
/*!************************************************!*\
  !*** ./src/app/events/shared/event.service.ts ***!
  \************************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class EventService {
    constructor(http) {
        this.http = http;
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    }
    getEvents() {
        return this.http
            .get('/api/events')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getEvents', [])));
    }
    getEvent(id) {
        return this.http
            .get('/api/events/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getEvent')));
    }
    saveEvent(event) {
        let options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
        };
        return this.http
            .post('/api/events', event, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('saveEvent')));
    }
    searchSessions(searchTerm) {
        return this.http
            .get('/api/sessions/search?search=' + searchTerm)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('searchSessions')));
    }
}
EventService.ɵfac = function EventService_Factory(t) { return new (t || EventService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
EventService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: EventService, factory: EventService.ɵfac });
const EVENTS = [
    {
        id: 1,
        name: 'Angular Connect',
        date: new Date('9/26/2036'),
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England',
        },
        sessions: [
            {
                id: 1,
                name: 'Using Angular 4 Pipes',
                presenter: 'Peter Bacon Darwin',
                duration: 1,
                level: 'Intermediate',
                abstract: `Learn all about the new pipes in Angular 4, both 
				how to write them, and how to get the new AI CLI to write 
				them for you. Given by the famous PBD, president of Angular 
				University (formerly Oxford University)`,
                voters: ['bradgreen', 'igorminar', 'martinfowler'],
            },
            {
                id: 2,
                name: 'Getting the most out of your dev team',
                presenter: 'Jeff Cross',
                duration: 1,
                level: 'Intermediate',
                abstract: `We all know that our dev teams work hard, but with 
				the right management they can be even more productive, without 
				overworking them. In this session I'll show you how to get the 
				best results from the talent you already have on staff.`,
                voters: ['johnpapa', 'bradgreen', 'igorminar', 'martinfowler'],
            },
            {
                id: 3,
                name: 'Angular 4 Performance Metrics',
                presenter: 'Rob Wormald',
                duration: 2,
                level: 'Advanced',
                abstract: `Angular 4 Performance is hot. In this session, we'll see 
				how Angular gets such great performance by preloading data on 
				your users devices before they even hit your site using the 
				new predictive algorithms and thought reading software 
				built into Angular 4.`,
                voters: [],
            },
            {
                id: 4,
                name: 'Angular 5 Look Ahead',
                presenter: 'Brad Green',
                duration: 2,
                level: 'Advanced',
                abstract: `Even though Angular 5 is still 6 years away, we all want 
				to know all about it so that we can spend endless hours in meetings 
				debating if we should use Angular 4 or not. This talk will look at 
				Angular 6 even though no code has yet been written for it. We'll 
				look at what it might do, and how to convince your manager to 
				hold off on any new apps until it's released`,
                voters: [],
            },
            {
                id: 5,
                name: 'Basics of Angular 4',
                presenter: 'John Papa',
                duration: 2,
                level: 'Beginner',
                abstract: `It's time to learn the basics of Angular 4. This talk 
				will give you everything you need to know about Angular 4 to 
				get started with it today and be building UI's for your self 
				driving cars and butler-bots in no time.`,
                voters: ['bradgreen', 'igorminar'],
            },
        ],
    },
    {
        id: 2,
        name: 'ng-nl',
        date: new Date('4/15/2037'),
        time: '9:00 am',
        price: 950.0,
        imageUrl: '/assets/images/ng-nl.png',
        onlineUrl: 'http://ng-nl.org/',
        sessions: [
            {
                id: 1,
                name: 'Testing Angular 4 Workshop',
                presenter: 'Pascal Precht & Christoph Bergdorf',
                duration: 4,
                level: 'Beginner',
                abstract: `In this 6 hour workshop you will learn not only how to test Angular 4, 
				you will also learn how to make the most of your team's efforts. Other topics
				will be convincing your manager that testing is a good idea, and using the new
				protractor tool for end to end testing.`,
                voters: ['bradgreen', 'igorminar'],
            },
            {
                id: 2,
                name: 'Angular 4 and Firebase',
                presenter: 'David East',
                duration: 3,
                level: 'Intermediate',
                abstract: `In this workshop, David East will show you how to use Angular with the new
				ultra-real-time 5D Firebase back end, hosting platform, and wine recommendation engine.`,
                voters: ['bradgreen', 'igorminar', 'johnpapa'],
            },
            {
                id: 3,
                name: 'Reading the Angular 4 Source',
                presenter: 'Patrick Stapleton',
                duration: 2,
                level: 'Intermediate',
                abstract: `Angular 4's source code may be over 25 million lines of code, but it's really 
				a lot easier to read and understand then you may think. Patrick Stapleton will talk
				about his secretes for keeping up with the changes, and navigating around the code.`,
                voters: ['martinfowler'],
            },
            {
                id: 4,
                name: 'Hail to the Lukas',
                presenter: 'Lukas Ruebbelke',
                duration: 1,
                level: 'Beginner',
                abstract: `In this session, Lukas will present the 
				secret to being awesome, and how he became the President 
				of the United States through his amazing programming skills, 
				showing how you too can be success with just attitude.`,
                voters: ['bradgreen'],
            },
        ],
    },
    {
        id: 3,
        name: 'ng-conf 2037',
        date: new Date('5/4/2037'),
        time: '9:00 am',
        price: 759.0,
        imageUrl: '/assets/images/ng-conf.png',
        location: {
            address: 'The Palatial America Hotel',
            city: 'Salt Lake City',
            country: 'USA',
        },
        sessions: [
            {
                id: 1,
                name: 'How Elm Powers Angular 4',
                presenter: 'Murphy Randle',
                duration: 2,
                level: 'Intermediate',
                abstract: `We all know that Angular is written in Elm, but did you
				know how the source code is really written? In this exciting look
				into the internals of Angular 4, we'll see exactly how Elm powers
				the framework, and what you can do to take advantage of this knowledge.`,
                voters: ['bradgreen', 'martinfowler', 'igorminar'],
            },
            {
                id: 2,
                name: 'Angular and React together',
                presenter: 'Jamison Dance',
                duration: 2,
                level: 'Intermediate',
                abstract: `React v449.6 has just been released. Let's see how to use 
				this new version with Angular to create even more impressive applications.`,
                voters: ['bradgreen', 'martinfowler'],
            },
            {
                id: 3,
                name: 'Redux Woes',
                presenter: 'Rob Wormald',
                duration: 1,
                level: 'Intermediate',
                abstract: `Everyone is using Redux for everything from Angular to React to 
				Excel macros, but you're still having trouble grasping it? We'll take a look
				at how farmers use Redux when harvesting grain as a great introduction to 
				this game changing technology.`,
                voters: ['bradgreen', 'martinfowler', 'johnpapa'],
            },
            {
                id: 4,
                name: 'ng-wat again!!',
                presenter: 'Shai Reznik',
                duration: 1,
                level: 'Beginner',
                abstract: `Let's take a look at some of the stranger pieces of Angular 4,
				including neural net nets, Android in Androids, and using pipes with actual pipes.`,
                voters: ['bradgreen', 'martinfowler', 'igorminar', 'johnpapa'],
            },
            {
                id: 5,
                name: 'Dressed for Success',
                presenter: 'Ward Bell',
                duration: 2,
                level: 'Beginner',
                abstract: `Being a developer in 2037 is about more than just writing bug-free code. 
				You also have to look the part. In this amazing expose, Ward will talk you through
				how to pick out the right clothes to make your coworkers and boss not only
				respect you, but also want to be your buddy.`,
                voters: ['bradgreen', 'martinfowler'],
            },
            {
                id: 6,
                name: "These aren't the directives you're looking for",
                presenter: 'John Papa',
                duration: 2,
                level: 'Intermediate',
                abstract: `Coinciding with the release of Star Wars Episode 18, this talk will show how
				to use directives in your Angular 4 development while drawing lessons from the new movie,
				featuring all your favorite characters like Han Solo's ghost and Darth Jar Jar.`,
                voters: ['bradgreen', 'martinfowler'],
            },
        ],
    },
    {
        id: 4,
        name: 'UN Angular Summit',
        date: new Date('6/10/2037'),
        time: '8:00 am',
        price: 800.0,
        imageUrl: '/assets/images/basic-shield.png',
        location: {
            address: 'The UN Angular Center',
            city: 'New York',
            country: 'USA',
        },
        sessions: [
            {
                id: 1,
                name: 'Diversity in Tech',
                presenter: 'Sir Dave Smith',
                duration: 2,
                level: 'Beginner',
                abstract: `Yes, we all work with cyborgs and androids and Martians, but 
				we probably don't realize that sometimes our internal biases can make it difficult for
				these well-designed coworkers to really feel at home coding alongside us. This talk will
				look at things we can do to recognize our biases and counteract them.`,
                voters: ['bradgreen', 'igorminar'],
            },
            {
                id: 2,
                name: 'World Peace and Angular',
                presenter: 'US Secretary of State Zach Galifianakis',
                duration: 2,
                level: 'Beginner',
                abstract: `Angular has been used in most of the major peace brokering that has
				happened in the last decade, but there is still much we can do to remove all
				war from the world, and Angular will be a key part of that effort.`,
                voters: ['bradgreen', 'igorminar', 'johnpapa'],
            },
            {
                id: 3,
                name: 'Using Angular with Androids',
                presenter: 'Dan Wahlin',
                duration: 3,
                level: 'Advanced',
                abstract: `Androids may do everything for us now, allowing us to spend all day playing 
				the latest Destiny DLC, but we can still improve the massages they give and the handmade
				brie they make using Angular 4. This session will show you how.`,
                voters: ['igorminar', 'johnpapa'],
            },
        ],
    },
    {
        id: 5,
        name: 'ng-vegas',
        date: new Date('2/10/2037'),
        time: '9:00 am',
        price: 400.0,
        imageUrl: '/assets/images/ng-vegas.png',
        location: {
            address: 'The Excalibur',
            city: 'Las Vegas',
            country: 'USA',
        },
        sessions: [
            {
                id: 1,
                name: 'Gambling with Angular',
                presenter: 'John Papa',
                duration: 1,
                level: 'Intermediate',
                abstract: `No, this talk isn't about slot machines. We all know that 
				Angular is used in most waiter-bots and coke vending machines, but
				did you know that was also used to write the core engine in the majority
				of voting machines? This talk will look at how all presidential elections
				are now determined by Angular code.`,
                voters: ['bradgreen', 'igorminar'],
            },
            {
                id: 2,
                name: 'Angular 4 in 60ish Minutes',
                presenter: 'Dan Wahlin',
                duration: 2,
                level: 'Beginner',
                abstract: `Get the skinny on Angular 4 for anyone new to this great new technology.
				Dan Wahlin will show you how you can get started with Angular in 60ish minutes, 
				guaranteed!`,
                voters: ['bradgreen', 'igorminar', 'johnpapa'],
            },
        ],
    },
];


/***/ }),

/***/ "8m2n":
/*!**********************************************************!*\
  !*** ./src/app/events/event-details/upvote.component.ts ***!
  \**********************************************************/
/*! exports provided: UpvoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpvoteComponent", function() { return UpvoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UpvoteComponent {
    constructor() {
        this.vote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    set voted(val) {
        this.iconColor = val ? 'red' : 'white';
    }
    onClick() {
        this.vote.emit({});
    }
}
UpvoteComponent.ɵfac = function UpvoteComponent_Factory(t) { return new (t || UpvoteComponent)(); };
UpvoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpvoteComponent, selectors: [["upvote"]], inputs: { count: "count", voted: "voted" }, outputs: { vote: "vote" }, decls: 7, vars: 3, consts: [[1, "votingWidgetContainer", "pointable", 3, "click"], [1, "well", "votingWidget"], [1, "votingButton"], [1, "glyphicon", "glyphicon-heart"], [1, "badge", "badge-inverse", "voting-count"]], template: function UpvoteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpvoteComponent_Template_div_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.iconColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.count);
    } }, styles: [".votingWidgetContainer[_ngcontent-%COMP%] {\r\n  padding-left: 24px;\r\n}\r\n\r\n.votingWidget[_ngcontent-%COMP%] {\r\n  height: 64px;\r\n  padding-top: 7px;\r\n  border-radius: 21px;\r\n}\r\n\r\n.votingButton[_ngcontent-%COMP%] {\r\n  margin-left: -7px;\r\n  margin-top: 1px;\r\n  cursor: pointer;\r\n}\r\n\r\n.votingButton[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\r\n\r\n.badge-inverse[_ngcontent-%COMP%] {\r\n  background-color: #fff;\r\n  color: #4e5d6c;\r\n}\r\n\r\n.votingCount[_ngcontent-%COMP%] {\r\n  margin-left: -11px;\r\n  margin-top: 1px;\r\n  font-weight: bold;\r\n  font-size: 14px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwdm90ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakIiLCJmaWxlIjoidXB2b3RlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudm90aW5nV2lkZ2V0Q29udGFpbmVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbn1cclxuXHJcbi52b3RpbmdXaWRnZXQge1xyXG4gIGhlaWdodDogNjRweDtcclxuICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIxcHg7XHJcbn1cclxuXHJcbi52b3RpbmdCdXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAtN3B4O1xyXG4gIG1hcmdpbi10b3A6IDFweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi52b3RpbmdCdXR0b24gaSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYmFkZ2UtaW52ZXJzZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjogIzRlNWQ2YztcclxufVxyXG5cclxuLnZvdGluZ0NvdW50IHtcclxuICBtYXJnaW4tbGVmdDogLTExcHg7XHJcbiAgbWFyZ2luLXRvcDogMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "9InA":
/*!*************************************************!*\
  !*** ./src/app/events/events-list.component.ts ***!
  \*************************************************/
/*! exports provided: EventsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsListComponent", function() { return EventsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/event.service */ "7vaO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _event_thumbnail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-thumbnail.component */ "sspi");





function EventsListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "event-thumbnail", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", event_r1);
} }
class EventsListComponent {
    constructor(eventService, route) {
        this.eventService = eventService;
        this.route = route;
    }
    ngOnInit() {
        this.events = this.route.snapshot.data['events'];
    }
}
EventsListComponent.ɵfac = function EventsListComponent_Factory(t) { return new (t || EventsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
EventsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventsListComponent, selectors: [["events-list"]], decls: 6, vars: 1, consts: [[1, "row"], ["class", "col-md-5", 4, "ngFor", "ngForOf"], [1, "col-md-5"], [3, "event"]], template: function EventsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Upcoming Angular Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EventsListComponent_div_5_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.events);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _event_thumbnail_component__WEBPACK_IMPORTED_MODULE_4__["EventThumbnailComponent"]], encapsulation: 2 });


/***/ }),

/***/ "9KPt":
/*!**************************************************!*\
  !*** ./src/app/events/create-event.component.ts ***!
  \**************************************************/
/*! exports provided: CreateEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEventComponent", function() { return CreateEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared */ "t0bI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _location_validator_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./location-validator.directive */ "LXMO");






function CreateEventComponent_em_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateEventComponent_em_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateEventComponent_em_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateEventComponent_em_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateEventComponent_em_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You must enter either the full location or an Online Url ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateEventComponent_em_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateEventComponent_em_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Must be a png or jpg url");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateEventComponent_img_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 28);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _r0.controls.imageUrl == null ? null : _r0.controls.imageUrl.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { error: a0 }; };
class CreateEventComponent {
    constructor(router, eventService) {
        this.router = router;
        this.eventService = eventService;
        this.isDirty = true;
    }
    saveEvent(formValues) {
        this.eventService.saveEvent(formValues).subscribe(() => {
            this.isDirty = false;
            this.router.navigate(['events']);
        });
    }
    cancel() {
        this.router.navigate(['/events']);
    }
}
CreateEventComponent.ɵfac = function CreateEventComponent_Factory(t) { return new (t || CreateEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_2__["EventService"])); };
CreateEventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateEventComponent, selectors: [["ng-component"]], decls: 53, vars: 24, consts: [[1, "col-md-6"], ["autocomplete", "off", "novalidate", "", 3, "ngSubmit"], ["newEventForm", "ngForm"], [1, "form-group", 3, "ngClass"], ["for", "eventName"], [4, "ngIf"], ["name", "name", "required", "", "id", "name", "type", "text", "placeholder", "Name of your event...", 1, "form-control", 3, "ngModel"], ["for", "eventDate"], ["name", "date", "required", "", "id", "eventDate", "type", "text", "placeholder", "format (mm/dd/yyyy)...", 1, "form-control", 3, "ngModel"], ["for", "eventTime"], ["name", "time", "required", "", "id", "eventTime", "type", "text", "placeholder", "start and end time...", 1, "form-control", 3, "ngModel"], ["for", "eventPrice"], ["name", "price", "required", "", "id", "eventPrice", "type", "text", "type", "number", "placeholder", "event price...", 1, "form-control", 3, "ngModel"], ["ngModelGroup", "location", "validateLocation", ""], ["locationGroup", "ngModelGroup"], [1, "form-group"], ["for", "address"], ["name", "address", "id", "address", "type", "text", "placeholder", "Address of event...", 1, "form-control", 3, "ngModel"], [1, "row"], ["name", "city", "id", "city", "type", "text", "placeholder", "City...", 1, "form-control", 3, "ngModel"], ["name", "country", "id", "country", "type", "text", "placeholder", "Country...", 1, "form-control", 3, "ngModel"], ["for", "onlineUrl"], ["name", "onlineUrl", "id", "onlineUrl", "type", "text", "placeholder", "Online Url...", 1, "form-control", 3, "ngModel", "change"], ["for", "imageUrl"], ["name", "imageUrl", "required", "", "pattern", ".*\\/.*.(png|jpg)", "id", "imageUrl", "type", "text", "placeholder", "url of image...", 1, "form-control", 3, "ngModel"], [3, "src", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-default", 3, "click"], [3, "src"]], template: function CreateEventComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateEventComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.saveEvent(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Event Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CreateEventComponent_em_9_Template, 2, 0, "em", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModel", function CreateEventComponent_Template_input_ngModel_10_listener() { return ctx.newEvent.name; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Event Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CreateEventComponent_em_14_Template, 2, 0, "em", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModel", function CreateEventComponent_Template_input_ngModel_15_listener() { return ctx.newEvent.date; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Event Time:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CreateEventComponent_em_19_Template, 2, 0, "em", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModel", function CreateEventComponent_Template_input_ngModel_20_listener() { return ctx.newEvent.time; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Event Price:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CreateEventComponent_em_24_Template, 2, 0, "em", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModel", function CreateEventComponent_Template_input_ngModel_25_listener() { return ctx.newEvent.price; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Event Location:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CreateEventComponent_em_31_Template, 2, 0, "em", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModel", function CreateEventComponent_Template_input_ngModel_32_listener() { return ctx.newEvent.address; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModel", function CreateEventComponent_Template_input_ngModel_35_listener() { return ctx.newEvent.city; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModel", function CreateEventComponent_Template_input_ngModel_37_listener() { return ctx.newEvent.country; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Online Url:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModel", function CreateEventComponent_Template_input_ngModel_41_listener() { return ctx.newEvent.onlineUrl; })("change", function CreateEventComponent_Template_input_change_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27); return _r5.control.controls.address.updateValueAndValidity(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Image:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, CreateEventComponent_em_45_Template, 2, 0, "em", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, CreateEventComponent_em_46_Template, 2, 0, "em", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModel", function CreateEventComponent_Template_input_ngModel_47_listener() { return ctx.newEvent.imageUrl; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, CreateEventComponent_img_48_Template, 1, 1, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateEventComponent_Template_button_click_51_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, (_r0.controls.name == null ? null : _r0.controls.name.invalid) && (_r0.controls.name == null ? null : _r0.controls.name.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0.controls.name == null ? null : _r0.controls.name.invalid) && (_r0.controls.name == null ? null : _r0.controls.name.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, (_r0.controls.date == null ? null : _r0.controls.date.invalid) && (_r0.controls.date == null ? null : _r0.controls.date.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0.controls.date == null ? null : _r0.controls.date.invalid) && (_r0.controls.date == null ? null : _r0.controls.date.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, (_r0.controls.time == null ? null : _r0.controls.time.invalid) && (_r0.controls.time == null ? null : _r0.controls.time.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0.controls.time == null ? null : _r0.controls.time.invalid) && (_r0.controls.time == null ? null : _r0.controls.time.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, (_r0.controls.price == null ? null : _r0.controls.price.invalid) && (_r0.controls.price == null ? null : _r0.controls.price.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0.controls.price == null ? null : _r0.controls.price.invalid) && (_r0.controls.price == null ? null : _r0.controls.price.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r5 == null ? null : _r5.invalid) && (_r5 == null ? null : _r5.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, (_r0.controls.imageUrl == null ? null : _r0.controls.imageUrl.invalid) && (_r0.controls.imageUrl == null ? null : _r0.controls.imageUrl.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0.controls.imageUrl == null ? null : _r0.controls.imageUrl.invalid) && (_r0.controls.imageUrl == null ? null : _r0.controls.imageUrl.touched) && (_r0.controls.imageUrl == null ? null : _r0.controls.imageUrl.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (_r0.controls.imageUrl == null ? null : _r0.controls.imageUrl.invalid) && (_r0.controls.imageUrl == null ? null : _r0.controls.imageUrl.touched) && (_r0.controls.imageUrl == null ? null : _r0.controls.imageUrl.errors.pattern));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.controls.imageUrl.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModelGroup"], _location_validator_directive__WEBPACK_IMPORTED_MODULE_5__["LocationValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"]], styles: ["em[_ngcontent-%COMP%]{float: right; color: #E05C65; padding-left: 10px;}\n  .error[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {background-color: #E3C3C5}\n  .error[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder {color: #999;}\n  .error[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-moz-placeholder { color: #999;}\n  .error[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-moz-placeholder { color #999;}\n  .error[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:ms-input-placeholder { color: #999;}"] });


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
    production: false
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

/***/ "BYCq":
/*!*****************************************************************!*\
  !*** ./src/app/events/event-details/event-details.component.ts ***!
  \*****************************************************************/
/*! exports provided: EventDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetailsComponent", function() { return EventDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/event.service */ "7vaO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _session_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./session-list.component */ "5K+S");
/* harmony import */ var _create_session_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-session.component */ "y0JV");






function EventDetailsComponent_session_list_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "session-list", 15);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("eventId", ctx_r0.event == null ? null : ctx_r0.event.id)("sortBy", ctx_r0.sortBy)("filterBy", ctx_r0.filterBy)("sessions", ctx_r0.event == null ? null : ctx_r0.event.sessions);
} }
function EventDetailsComponent_create_session_55_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "create-session", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("saveNewSession", function EventDetailsComponent_create_session_55_Template_create_session_saveNewSession_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.saveNewSession($event); })("cancelAddSession", function EventDetailsComponent_create_session_55_Template_create_session_cancelAddSession_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.cancelAddSession(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class EventDetailsComponent {
    constructor(eventService, route) {
        this.eventService = eventService;
        this.route = route;
        this.filterBy = 'all';
        this.sortBy = 'votes';
    }
    ngOnInit() {
        this.route.data.forEach((data) => {
            this.event = data['event'];
            this.addMode = false;
        });
    }
    addSession() {
        this.addMode = true;
    }
    saveNewSession(session) {
        const nextId = Math.max.apply(null, this.event.sessions.map((s) => s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.saveEvent(this.event).subscribe();
        this.addMode = false;
    }
    cancelAddSession() {
        this.addMode = false;
    }
}
EventDetailsComponent.ɵfac = function EventDetailsComponent_Factory(t) { return new (t || EventDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
EventDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventDetailsComponent, selectors: [["ng-component"]], decls: 56, vars: 31, consts: [[1, "container"], [1, "event-image", 3, "src", "alt"], [1, "row"], [1, "col-md-11"], [1, "col-md-6"], [1, "row", 2, "margin-bottom", "10px"], [1, "col-md-2"], [2, "margin", "0"], [1, "col-md-7"], [1, "btn-group", "btn-group-sm", 2, "margin-right", "20px", "margin-left", "20px"], [1, "btn", "btn-default", 3, "click"], [1, "btn-group", "btn-group-sm"], [3, "click"], [3, "eventId", "sortBy", "filterBy", "sessions", 4, "ngIf"], [3, "saveNewSession", "cancelAddSession", 4, "ngIf"], [3, "eventId", "sortBy", "filterBy", "sessions"], [3, "saveNewSession", "cancelAddSession"]], template: function EventDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Time:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Price:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Sessions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventDetailsComponent_Template_button_click_38_listener() { return ctx.sortBy = "name"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventDetailsComponent_Template_button_click_40_listener() { return ctx.sortBy = "votes"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Votes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventDetailsComponent_Template_button_click_43_listener() { return ctx.filterBy = "all"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventDetailsComponent_Template_button_click_45_listener() { return ctx.filterBy = "beginner"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Beginner ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventDetailsComponent_Template_button_click_47_listener() { return ctx.filterBy = "intermediate"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Intermediate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventDetailsComponent_Template_button_click_49_listener() { return ctx.filterBy = "advanced"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Advanced ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventDetailsComponent_Template_a_click_52_listener() { return ctx.addSession(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Add Session");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, EventDetailsComponent_session_list_54_Template, 1, 4, "session-list", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, EventDetailsComponent_create_session_55_Template, 1, 0, "create-session", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.event == null ? null : ctx.event.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.event == null ? null : ctx.event.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 23, ctx.event == null ? null : ctx.event.name));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 25, ctx.event == null ? null : ctx.event.date, "shortDate"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.event == null ? null : ctx.event.time, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 28, ctx.event == null ? null : ctx.event.price, "USD"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.event == null ? null : ctx.event.location == null ? null : ctx.event.location.address, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.event == null ? null : ctx.event.location == null ? null : ctx.event.location.city, ", ", ctx.event == null ? null : ctx.event.location == null ? null : ctx.event.location.country, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.sortBy === "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.sortBy === "votes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.filterBy === "all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.filterBy === "beginner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.filterBy === "intermediate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.filterBy === "advanced");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.addMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addMode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _session_list_component__WEBPACK_IMPORTED_MODULE_4__["SessionListComponent"], _create_session_component__WEBPACK_IMPORTED_MODULE_5__["CreateSessionComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: [".container[_ngcontent-%COMP%] {\n        padding-left: 20px;\n        padding-right: 20px;\n      }\n      .event-image[_ngcontent-%COMP%] {\n        height: 100px;\n      }\n      a[_ngcontent-%COMP%] {\n        cursor: pointer;\n      }"] });


/***/ }),

/***/ "Gtyo":
/*!***********************************************!*\
  !*** ./src/app/events/event-details/index.ts ***!
  \***********************************************/
/*! exports provided: EventDetailsComponent, CreateSessionComponent, SessionListComponent, UpvoteComponent, VoterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-details.component */ "BYCq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventDetailsComponent", function() { return _event_details_component__WEBPACK_IMPORTED_MODULE_0__["EventDetailsComponent"]; });

/* harmony import */ var _create_session_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-session.component */ "y0JV");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateSessionComponent", function() { return _create_session_component__WEBPACK_IMPORTED_MODULE_1__["CreateSessionComponent"]; });

/* harmony import */ var _session_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session-list.component */ "5K+S");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionListComponent", function() { return _session_list_component__WEBPACK_IMPORTED_MODULE_2__["SessionListComponent"]; });

/* harmony import */ var _upvote_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upvote.component */ "8m2n");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpvoteComponent", function() { return _upvote_component__WEBPACK_IMPORTED_MODULE_3__["UpvoteComponent"]; });

/* harmony import */ var _voter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./voter.service */ "zshw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VoterService", function() { return _voter_service__WEBPACK_IMPORTED_MODULE_4__["VoterService"]; });








/***/ }),

/***/ "H1Cx":
/*!**************************************************!*\
  !*** ./src/app/common/modalTrigger.directive.ts ***!
  \**************************************************/
/*! exports provided: ModalTriggerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalTriggerDirective", function() { return ModalTriggerDirective; });
/* harmony import */ var _jQuery_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jQuery.service */ "e4nA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ModalTriggerDirective {
    constructor(ref, $) {
        this.$ = $;
        this.el = ref.nativeElement;
    }
    ngOnInit() {
        this.el.addEventListener('click', (e) => {
            this.$(`#${this.modalId}`).modal({});
        });
    }
}
ModalTriggerDirective.ɵfac = function ModalTriggerDirective_Factory(t) { return new (t || ModalTriggerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_jQuery_service__WEBPACK_IMPORTED_MODULE_0__["JQ_TOKEN"])); };
ModalTriggerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ModalTriggerDirective, selectors: [["", "modal-trigger", ""]], inputs: { modalId: ["modal-trigger", "modalId"] } });


/***/ }),

/***/ "HNNS":
/*!*************************************************************!*\
  !*** ./src/app/events/shared/restricted-words.validator.ts ***!
  \*************************************************************/
/*! exports provided: restrictedWords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restrictedWords", function() { return restrictedWords; });
function restrictedWords(words) {
    return (control) => {
        if (!words) {
            return null;
        }
        var invalidWords = words.map(w => control.value.includes(w) ? w : null)
            .filter(w => w != null);
        return invalidWords && invalidWords.length > 0
            ? { 'restrictedWords': invalidWords.join(', ') }
            : null;
    };
}


/***/ }),

/***/ "LXMO":
/*!********************************************************!*\
  !*** ./src/app/events/location-validator.directive.ts ***!
  \********************************************************/
/*! exports provided: LocationValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationValidator", function() { return LocationValidator; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LocationValidator {
    validate(formGroup) {
        let addressControl = formGroup.controls['address'];
        let cityControl = formGroup.controls['city'];
        let countryControl = formGroup.controls['country'];
        let onlineUrlControl = formGroup.root.controls['onlineUrl'];
        if ((addressControl &&
            addressControl.value &&
            cityControl &&
            cityControl.value &&
            countryControl &&
            countryControl.value) ||
            (onlineUrlControl && onlineUrlControl.value)) {
            return null;
        }
        else {
            return { validateLocation: false };
        }
    }
}
LocationValidator.ɵfac = function LocationValidator_Factory(t) { return new (t || LocationValidator)(); };
LocationValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: LocationValidator, selectors: [["", "validateLocation", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALIDATORS"], useExisting: LocationValidator, multi: true },
        ])] });


/***/ }),

/***/ "R6jH":
/*!*********************************!*\
  !*** ./src/app/common/index.ts ***!
  \*********************************/
/*! exports provided: CollapsibleWellComponent, JQ_TOKEN, TOASTR_TOKEN, SimpleModalComponent, ModalTriggerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collapsible_well_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collapsible-well.component */ "3VDY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapsibleWellComponent", function() { return _collapsible_well_component__WEBPACK_IMPORTED_MODULE_0__["CollapsibleWellComponent"]; });

/* harmony import */ var _jQuery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jQuery.service */ "e4nA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JQ_TOKEN", function() { return _jQuery_service__WEBPACK_IMPORTED_MODULE_1__["JQ_TOKEN"]; });

/* harmony import */ var _toastr_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toastr.service */ "yBWH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOASTR_TOKEN", function() { return _toastr_service__WEBPACK_IMPORTED_MODULE_2__["TOASTR_TOKEN"]; });

/* harmony import */ var _simpleModal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simpleModal.component */ "wHSJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleModalComponent", function() { return _simpleModal_component__WEBPACK_IMPORTED_MODULE_3__["SimpleModalComponent"]; });

/* harmony import */ var _modalTrigger_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modalTrigger.directive */ "H1Cx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalTriggerDirective", function() { return _modalTrigger_directive__WEBPACK_IMPORTED_MODULE_4__["ModalTriggerDirective"]; });








/***/ }),

/***/ "R93f":
/*!*****************************************!*\
  !*** ./src/app/events-app.component.ts ***!
  \*****************************************/
/*! exports provided: EventsAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsAppComponent", function() { return EventsAppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/auth.service */ "SkYw");
/* harmony import */ var _nav_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav/navbar.component */ "2U31");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class EventsAppComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
        this.auth.checkAuthenticationStatus();
    }
}
EventsAppComponent.ɵfac = function EventsAppComponent_Factory(t) { return new (t || EventsAppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
EventsAppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventsAppComponent, selectors: [["events-app"]], decls: 2, vars: 0, template: function EventsAppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_nav_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], encapsulation: 2 });


/***/ }),

/***/ "SkYw":
/*!**************************************!*\
  !*** ./src/app/user/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AuthService {
    constructor(http) {
        this.http = http;
    }
    loginUser(userName, password) {
        let loginInfo = { username: userName, password: password };
        let options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
        };
        return this.http
            .post('/api/login', loginInfo, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((data) => {
            this.currentUser = data['user'];
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
        }));
    }
    isAuthenticated() {
        return !!this.currentUser;
    }
    checkAuthenticationStatus() {
        this.http
            .get('/api/currentIdentity')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((data) => {
            if (data instanceof Object) {
                this.currentUser = data;
            }
        }))
            .subscribe();
    }
    updateCurrentUser(firstName, lastName) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
        let options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
        };
        return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
    }
    logout() {
        this.currentUser = undefined;
        let options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
        };
        return this.http.post('/api/logout', {}, options);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });


/***/ }),

/***/ "Uhkm":
/*!*********************************!*\
  !*** ./src/app/events/index.ts ***!
  \*********************************/
/*! exports provided: CreateEventComponent, EventThumbnailComponent, EventListResolver, EventsListComponent, EventService, restrictedWords, DurationPipe, EventDetailsComponent, CreateSessionComponent, SessionListComponent, UpvoteComponent, VoterService, LocationValidator, EventResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_event_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-event.component */ "9KPt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateEventComponent", function() { return _create_event_component__WEBPACK_IMPORTED_MODULE_0__["CreateEventComponent"]; });

/* harmony import */ var _event_thumbnail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-thumbnail.component */ "sspi");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventThumbnailComponent", function() { return _event_thumbnail_component__WEBPACK_IMPORTED_MODULE_1__["EventThumbnailComponent"]; });

/* harmony import */ var _events_list_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events-list-resolver.service */ "qtth");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventListResolver", function() { return _events_list_resolver_service__WEBPACK_IMPORTED_MODULE_2__["EventListResolver"]; });

/* harmony import */ var _events_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events-list.component */ "9InA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventsListComponent", function() { return _events_list_component__WEBPACK_IMPORTED_MODULE_3__["EventsListComponent"]; });

/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/index */ "t0bI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return _shared_index__WEBPACK_IMPORTED_MODULE_4__["EventService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "restrictedWords", function() { return _shared_index__WEBPACK_IMPORTED_MODULE_4__["restrictedWords"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DurationPipe", function() { return _shared_index__WEBPACK_IMPORTED_MODULE_4__["DurationPipe"]; });

/* harmony import */ var _event_details_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-details/index */ "Gtyo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventDetailsComponent", function() { return _event_details_index__WEBPACK_IMPORTED_MODULE_5__["EventDetailsComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateSessionComponent", function() { return _event_details_index__WEBPACK_IMPORTED_MODULE_5__["CreateSessionComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionListComponent", function() { return _event_details_index__WEBPACK_IMPORTED_MODULE_5__["SessionListComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpvoteComponent", function() { return _event_details_index__WEBPACK_IMPORTED_MODULE_5__["UpvoteComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VoterService", function() { return _event_details_index__WEBPACK_IMPORTED_MODULE_5__["VoterService"]; });

/* harmony import */ var _location_validator_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location-validator.directive */ "LXMO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocationValidator", function() { return _location_validator_directive__WEBPACK_IMPORTED_MODULE_6__["LocationValidator"]; });

/* harmony import */ var _event_resolver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./event-resolver.service */ "iKRy");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventResolver", function() { return _event_resolver_service__WEBPACK_IMPORTED_MODULE_7__["EventResolver"]; });











/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, checkDirtyState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDirtyState", function() { return checkDirtyState; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _errors_404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errors/404.component */ "jzf3");
/* harmony import */ var _events_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events/index */ "Uhkm");
/* harmony import */ var _common_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/index */ "R6jH");
/* harmony import */ var _events_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events-app.component */ "R93f");
/* harmony import */ var _nav_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/navbar.component */ "2U31");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes */ "a4+m");
/* harmony import */ var _user_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/auth.service */ "SkYw");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");













let toastr = window['toastr'];
let jQuery = window['$'];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_events_app_component__WEBPACK_IMPORTED_MODULE_6__["EventsAppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _user_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
        _events_index__WEBPACK_IMPORTED_MODULE_4__["EventService"],
        _events_index__WEBPACK_IMPORTED_MODULE_4__["VoterService"],
        { provide: _common_index__WEBPACK_IMPORTED_MODULE_5__["TOASTR_TOKEN"], useValue: toastr },
        { provide: _common_index__WEBPACK_IMPORTED_MODULE_5__["JQ_TOKEN"], useValue: jQuery },
        _events_index__WEBPACK_IMPORTED_MODULE_4__["EventResolver"],
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState,
        },
        _events_index__WEBPACK_IMPORTED_MODULE_4__["EventListResolver"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_8__["appRoutes"]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_events_app_component__WEBPACK_IMPORTED_MODULE_6__["EventsAppComponent"],
        _events_index__WEBPACK_IMPORTED_MODULE_4__["EventsListComponent"],
        _events_index__WEBPACK_IMPORTED_MODULE_4__["EventThumbnailComponent"],
        _events_index__WEBPACK_IMPORTED_MODULE_4__["EventDetailsComponent"],
        _events_index__WEBPACK_IMPORTED_MODULE_4__["CreateEventComponent"],
        _events_index__WEBPACK_IMPORTED_MODULE_4__["CreateSessionComponent"],
        _nav_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"],
        _errors_404_component__WEBPACK_IMPORTED_MODULE_3__["Error404Component"],
        _events_index__WEBPACK_IMPORTED_MODULE_4__["SessionListComponent"],
        _common_index__WEBPACK_IMPORTED_MODULE_5__["CollapsibleWellComponent"],
        _common_index__WEBPACK_IMPORTED_MODULE_5__["SimpleModalComponent"],
        _common_index__WEBPACK_IMPORTED_MODULE_5__["ModalTriggerDirective"],
        _events_index__WEBPACK_IMPORTED_MODULE_4__["DurationPipe"],
        _events_index__WEBPACK_IMPORTED_MODULE_4__["LocationValidator"],
        _events_index__WEBPACK_IMPORTED_MODULE_4__["UpvoteComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
function checkDirtyState(component) {
    if (component.isDirty) {
        return window.confirm('You have not saved this event, do you really want to cancel?');
    }
    else {
        return true;
    }
}


/***/ }),

/***/ "a4+m":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _events_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events/index */ "Uhkm");
/* harmony import */ var _errors_404_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors/404.component */ "jzf3");


const appRoutes = [
    {
        path: 'events/new',
        component: _events_index__WEBPACK_IMPORTED_MODULE_0__["CreateEventComponent"],
        canDeactivate: ['canDeactivateCreateEvent'],
    },
    {
        path: 'events',
        component: _events_index__WEBPACK_IMPORTED_MODULE_0__["EventsListComponent"],
        resolve: { events: _events_index__WEBPACK_IMPORTED_MODULE_0__["EventListResolver"] },
    },
    {
        path: 'events/:id',
        component: _events_index__WEBPACK_IMPORTED_MODULE_0__["EventDetailsComponent"],
        resolve: { event: _events_index__WEBPACK_IMPORTED_MODULE_0__["EventResolver"] },
    },
    { path: 'events/session/new', component: _events_index__WEBPACK_IMPORTED_MODULE_0__["CreateSessionComponent"] },
    { path: '404', component: _errors_404_component__WEBPACK_IMPORTED_MODULE_1__["Error404Component"] },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    {
        path: 'user',
        loadChildren: () => __webpack_require__.e(/*! import() | user-user-module */ "user-user-module").then(__webpack_require__.bind(null, /*! ./user/user.module */ "7UCR")).then((m) => m.UserModule),
    },
];


/***/ }),

/***/ "e4nA":
/*!******************************************!*\
  !*** ./src/app/common/jQuery.service.ts ***!
  \******************************************/
/*! exports provided: JQ_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JQ_TOKEN", function() { return JQ_TOKEN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

let JQ_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('jQuery');


/***/ }),

/***/ "iKRy":
/*!**************************************************!*\
  !*** ./src/app/events/event-resolver.service.ts ***!
  \**************************************************/
/*! exports provided: EventResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventResolver", function() { return EventResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/event.service */ "7vaO");


class EventResolver {
    constructor(eventService) {
        this.eventService = eventService;
    }
    resolve(route) {
        return this.eventService.getEvent(route.params['id']);
    }
}
EventResolver.ɵfac = function EventResolver_Factory(t) { return new (t || EventResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"])); };
EventResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EventResolver, factory: EventResolver.ɵfac });


/***/ }),

/***/ "jzf3":
/*!*****************************************!*\
  !*** ./src/app/errors/404.component.ts ***!
  \*****************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class Error404Component {
    constructor() {
    }
}
Error404Component.ɵfac = function Error404Component_Factory(t) { return new (t || Error404Component)(); };
Error404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Error404Component, selectors: [["ng-component"]], decls: 2, vars: 0, consts: [[1, "errorMessage"]], template: function Error404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "404'd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".errorMessage[_ngcontent-%COMP%] { \n      margin-top:150px; \n      font-size: 170px;\n      text-align: center; \n    }"] });


/***/ }),

/***/ "kR4Y":
/*!************************************************!*\
  !*** ./src/app/events/shared/duration.pipe.ts ***!
  \************************************************/
/*! exports provided: DurationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DurationPipe", function() { return DurationPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DurationPipe {
    transform(value) {
        switch (value) {
            case 1:
                return 'Half Hour';
            case 2:
                return 'One Hour';
            case 3:
                return 'Half Day';
            case 4:
                return 'Full Day';
            default:
                return value.toString();
        }
    }
}
DurationPipe.ɵfac = function DurationPipe_Factory(t) { return new (t || DurationPipe)(); };
DurationPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "duration", type: DurationPipe, pure: true });


/***/ }),

/***/ "qtth":
/*!********************************************************!*\
  !*** ./src/app/events/events-list-resolver.service.ts ***!
  \********************************************************/
/*! exports provided: EventListResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListResolver", function() { return EventListResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/event.service */ "7vaO");


class EventListResolver {
    constructor(eventService) {
        this.eventService = eventService;
    }
    resolve() {
        return this.eventService.getEvents();
    }
}
EventListResolver.ɵfac = function EventListResolver_Factory(t) { return new (t || EventListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"])); };
EventListResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EventListResolver, factory: EventListResolver.ɵfac });


/***/ }),

/***/ "sspi":
/*!*****************************************************!*\
  !*** ./src/app/events/event-thumbnail.component.ts ***!
  \*****************************************************/
/*! exports provided: EventThumbnailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventThumbnailComponent", function() { return EventThumbnailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function EventThumbnailComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "(Early Start) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventThumbnailComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "(Late Start)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventThumbnailComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "(Normal Start)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EventThumbnailComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Location: ", ctx_r3.event == null ? null : ctx_r3.event.location == null ? null : ctx_r3.event.location.address, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r3.event == null ? null : ctx_r3.event.location == null ? null : ctx_r3.event.location.city, ", ", ctx_r3.event == null ? null : ctx_r3.event.location == null ? null : ctx_r3.event.location.country, "");
} }
function EventThumbnailComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Online URL: ", ctx_r4.event == null ? null : ctx_r4.event.onlineUrl, "");
} }
const _c0 = function (a1) { return ["/events", a1]; };
class EventThumbnailComponent {
    getStartTimeClass() {
        const isEarlyStart = this.event && this.event.time === '8:00 am';
        return { green: isEarlyStart, bold: isEarlyStart };
    }
}
EventThumbnailComponent.ɵfac = function EventThumbnailComponent_Factory(t) { return new (t || EventThumbnailComponent)(); };
EventThumbnailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventThumbnailComponent, selectors: [["event-thumbnail"]], inputs: { event: "event" }, decls: 17, vars: 21, consts: [[1, "well", "hoverwell", "thumbnail", 3, "routerLink"], [3, "ngClass", "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngIf"], [1, "pad-left"]], template: function EventThumbnailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EventThumbnailComponent_span_9_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EventThumbnailComponent_span_10_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EventThumbnailComponent_span_11_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EventThumbnailComponent_div_15_Template, 5, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EventThumbnailComponent_div_16_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.event.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 11, ctx.event == null ? null : ctx.event.name));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Date: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 13, ctx.event == null ? null : ctx.event.date, "shortDate"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.getStartTimeClass())("ngSwitch", ctx.event == null ? null : ctx.event.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Time: ", ctx.event == null ? null : ctx.event.time, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "8:00 am");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "10:00 am");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Price: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 16, ctx.event == null ? null : ctx.event.price, "USD"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.event == null ? null : ctx.event.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.event == null ? null : ctx.event.onlineUrl);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: [".green[_ngcontent-%COMP%] {\n        color: #003300 !important;\n      }\n      .bold[_ngcontent-%COMP%] {\n        font-weight: bold;\n      }\n      .thumbnail[_ngcontent-%COMP%] {\n        min-height: 210px;\n      }\n      .pad-left[_ngcontent-%COMP%] {\n        margin-left: 10px;\n      }\n      .well[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n        color: #bbb;\n      }"] });


/***/ }),

/***/ "t0bI":
/*!****************************************!*\
  !*** ./src/app/events/shared/index.ts ***!
  \****************************************/
/*! exports provided: EventService, restrictedWords, DurationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event.service */ "7vaO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return _event_service__WEBPACK_IMPORTED_MODULE_0__["EventService"]; });

/* harmony import */ var _event_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event.model */ "wzJT");
/* empty/unused harmony star reexport *//* harmony import */ var _restricted_words_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restricted-words.validator */ "HNNS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "restrictedWords", function() { return _restricted_words_validator__WEBPACK_IMPORTED_MODULE_2__["restrictedWords"]; });

/* harmony import */ var _duration_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./duration.pipe */ "kR4Y");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DurationPipe", function() { return _duration_pipe__WEBPACK_IMPORTED_MODULE_3__["DurationPipe"]; });







/***/ }),

/***/ "wHSJ":
/*!*************************************************!*\
  !*** ./src/app/common/simpleModal.component.ts ***!
  \*************************************************/
/*! exports provided: SimpleModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleModalComponent", function() { return SimpleModalComponent; });
/* harmony import */ var _jQuery_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jQuery.service */ "e4nA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["modalContainer"];
const _c1 = ["*"];
class SimpleModalComponent {
    constructor($) {
        this.$ = $;
    }
    closeModal() {
        if (this.closeOnBodyClick.toLocaleLowerCase() === 'true') {
            this.$(this.containerEl.nativeElement).modal('hide');
        }
    }
}
SimpleModalComponent.ɵfac = function SimpleModalComponent_Factory(t) { return new (t || SimpleModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_jQuery_service__WEBPACK_IMPORTED_MODULE_0__["JQ_TOKEN"])); };
SimpleModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SimpleModalComponent, selectors: [["simple-modal"]], viewQuery: function SimpleModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.containerEl = _t.first);
    } }, inputs: { title: "title", elementId: "elementId", closeOnBodyClick: "closeOnBodyClick" }, ngContentSelectors: _c1, decls: 12, vars: 2, consts: [["tabindex", "-1", 1, "modal", "fade", 3, "id"], ["modalContainer", ""], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-title"], [1, "modal-body", 3, "click"]], template: function SimpleModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SimpleModalComponent_Template_div_click_10_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", ctx.elementId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
    } }, styles: [".modal-body[_ngcontent-%COMP%] {\n        height: 250px;\n        overflow-y: scroll;\n      }"] });


/***/ }),

/***/ "wzJT":
/*!**********************************************!*\
  !*** ./src/app/events/shared/event.model.ts ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "y0JV":
/*!******************************************************************!*\
  !*** ./src/app/events/event-details/create-session.component.ts ***!
  \******************************************************************/
/*! exports provided: CreateSessionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSessionComponent", function() { return CreateSessionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ "t0bI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function CreateSessionComponent_em_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateSessionComponent_em_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateSessionComponent_em_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateSessionComponent_em_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateSessionComponent_em_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateSessionComponent_em_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cannot exceed 400 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateSessionComponent_em_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Restricted words found: ", ctx_r6.abstract.errors.restrictedWords, "");
} }
const _c0 = function (a0) { return { error: a0 }; };
class CreateSessionComponent {
    constructor() {
        this.saveNewSession = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancelAddSession = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.presenter = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.duration = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.level = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.abstract = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(400),
            Object(_shared__WEBPACK_IMPORTED_MODULE_2__["restrictedWords"])(['foo', 'bar']),
        ]);
        this.newSessionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract,
        });
    }
    saveSession(formValues) {
        let session = {
            id: undefined,
            name: formValues.name,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: [],
        };
        this.saveNewSession.emit(session);
    }
    cancel() {
        this.cancelAddSession.emit();
    }
}
CreateSessionComponent.ɵfac = function CreateSessionComponent_Factory(t) { return new (t || CreateSessionComponent)(); };
CreateSessionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateSessionComponent, selectors: [["create-session"]], outputs: { saveNewSession: "saveNewSession", cancelAddSession: "cancelAddSession" }, decls: 54, vars: 24, consts: [[1, "col-md-12"], [1, "col-md-6"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "form-group", 3, "ngClass"], ["for", "sessionName"], [4, "ngIf"], ["formControlName", "name", "id", "sessionName", "type", "text", "placeholder", "session name...", 1, "form-control"], ["for", "eventDate"], ["formControlName", "presenter", "id", "presenter", "type", "text", "placeholder", "presenter...", 1, "form-control"], ["for", "duration"], ["formControlName", "duration", 1, "form-control"], ["value", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["for", "level"], ["formControlName", "level", 1, "form-control"], ["value", "Beginner"], ["value", "Intermediate"], ["value", "Advanced"], ["for", "abstract"], ["formControlName", "abstract", "id", "abstract", "rows", "3", "placeholder", "abstract...", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-default", 3, "click"]], template: function CreateSessionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create Session");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateSessionComponent_Template_form_ngSubmit_4_listener() { return ctx.saveSession(ctx.newSessionForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Session Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CreateSessionComponent_em_8_Template, 2, 0, "em", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Presenter:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CreateSessionComponent_em_13_Template, 2, 0, "em", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Duration:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CreateSessionComponent_em_18_Template, 2, 0, "em", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "select duration...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Half Hour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "1 Hour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Half Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Full Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Level:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CreateSessionComponent_em_33_Template, 2, 0, "em", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "select level...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Beginner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Intermediate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Advanced");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Abstract:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, CreateSessionComponent_em_46_Template, 2, 0, "em", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, CreateSessionComponent_em_47_Template, 2, 0, "em", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, CreateSessionComponent_em_48_Template, 2, 1, "em", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "textarea", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateSessionComponent_Template_button_click_52_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newSessionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.name.invalid && ctx.name.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name.invalid && ctx.name.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.presenter.invalid && ctx.presenter.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.presenter.invalid && ctx.presenter.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.duration.invalid && ctx.duration.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.duration.invalid && ctx.duration.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.level.invalid && ctx.level.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.level.invalid && ctx.level.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx.abstract.invalid && ctx.abstract.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.abstract.invalid && ctx.abstract.dirty && (ctx.abstract == null ? null : ctx.abstract.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.abstract.invalid && ctx.abstract.dirty && (ctx.abstract == null ? null : ctx.abstract.errors.maxlength));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.abstract.invalid && ctx.abstract.dirty && (ctx.abstract == null ? null : ctx.abstract.errors.restrictedWords));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.newSessionForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["em[_ngcontent-%COMP%]{float: right; color: #E05C65; padding-left: 10px;}\n  .error[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .error[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .error[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {background-color: #E3C3C5}\n  .error[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder {color: #999;}\n  .error[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-moz-placeholder { color: #999;}\n  .error[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-moz-placeholder { color #999;}\n  .error[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:ms-input-placeholder { color: #999;}"] });


/***/ }),

/***/ "yBWH":
/*!******************************************!*\
  !*** ./src/app/common/toastr.service.ts ***!
  \******************************************/
/*! exports provided: TOASTR_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOASTR_TOKEN", function() { return TOASTR_TOKEN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

let TOASTR_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('toastr');


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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

/***/ }),

/***/ "zshw":
/*!*******************************************************!*\
  !*** ./src/app/events/event-details/voter.service.ts ***!
  \*******************************************************/
/*! exports provided: VoterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoterService", function() { return VoterService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class VoterService {
    constructor(http) {
        this.http = http;
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    }
    deleteVoter(eventId, session, voterName) {
        session.voters = session.voters.filter((voter) => voter !== voterName);
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        this.http
            .delete(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('deleteVoter')))
            .subscribe();
    }
    addVoter(eventId, session, voterName) {
        session.voters.push(voterName);
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': '/application/json' }),
        };
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        this.http
            .post(url, {}, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('addVoter')))
            .subscribe();
    }
    userHasVoted(session, voterName) {
        return session.voters.some((voter) => voter === voterName);
    }
}
VoterService.ɵfac = function VoterService_Factory(t) { return new (t || VoterService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
VoterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: VoterService, factory: VoterService.ɵfac });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map