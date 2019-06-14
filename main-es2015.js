(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-top-bar></app-top-bar>\r\n<app-body></app-body>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/body/body.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/body/body.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=particles-wrapper>\r\n  <app-particles></app-particles>\r\n  <div class=description>\r\n    <h1>Welcome to TailorChain!</h1>\r\n    <p>Self-contained EOS blockchain decentralized application</p>\r\n    <p>Wave of the future summary</p>\r\n    <p>Like us on Facebook and LinkedIn</p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/particles/particles.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/particles/particles.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas class=particles (window:resize)=\"setCanvasSize()\" #particles></canvas>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/topbar/topbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/topbar/topbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/']\">\r\n  <h1>TailorChain</h1>\r\n</a>\r\n<app-particles></app-particles>\r\n<a [routerLink]=\"['/cart']\" class=\"button fancy-button\"><i class=\"material-icons\">shopping_cart</i>Checkout</a>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'tailor-chain';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./topbar/topbar.component */ "./src/app/topbar/topbar.component.ts");
/* harmony import */ var _particles_particles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./particles/particles.component */ "./src/app/particles/particles.component.ts");
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./body/body.component */ "./src/app/body/body.component.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_5__["TopbarComponent"],
            _particles_particles_component__WEBPACK_IMPORTED_MODULE_6__["ParticlesComponent"],
            _body_body_component__WEBPACK_IMPORTED_MODULE_7__["BodyComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/body/body.component.scss":
/*!******************************************!*\
  !*** ./src/app/body/body.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".particles-wrapper {\n  position: relative;\n  background: linear-gradient(to right, darkcyan, #000046);\n  color: white;\n  width: 600px;\n  height: 600px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 4px;\n}\n.particles-wrapper .description {\n  padding: 40px;\n}\nh1 {\n  color: white;\n}\np {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9DOlxcVXNlcnNcXGNhcnIud2FsbGFjZTJcXERvY3VtZW50c1xcaG9kZHlcXHRhaWxvci1jaGFpbi13ZWJzaXRlXFx0YWlsb3ItY2hhaW4td2Vic2l0ZS9zcmNcXGFwcFxcYm9keVxcYm9keS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYm9keS9ib2R5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSx3REFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQUk7RUFDSSxhQUFBO0FDRVI7QURDQTtFQUNJLFlBQUE7QUNFSjtBREFBO0VBQ0ksWUFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvYm9keS9ib2R5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcnRpY2xlcy13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LGRhcmtjeWFuLCMwMDAwNDYpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICBwYWRkaW5nOjQwcHg7XHJcbiAgICB9XHJcbn1cclxuaDEge1xyXG4gICAgY29sb3I6IHdoaXRlXHJcbn1cclxucCB7XHJcbiAgICBjb2xvcjogd2hpdGVcclxufSIsIi5wYXJ0aWNsZXMtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBkYXJrY3lhbiwgIzAwMDA0Nik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDYwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ucGFydGljbGVzLXdyYXBwZXIgLmRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZzogNDBweDtcbn1cblxuaDEge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbnAge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/body/body.component.ts":
/*!****************************************!*\
  !*** ./src/app/body/body.component.ts ***!
  \****************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BodyComponent = class BodyComponent {
    constructor() { }
    ngOnInit() {
    }
};
BodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-body',
        template: __webpack_require__(/*! raw-loader!./body.component.html */ "./node_modules/raw-loader/index.js!./src/app/body/body.component.html"),
        styles: [__webpack_require__(/*! ./body.component.scss */ "./src/app/body/body.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BodyComponent);



/***/ }),

/***/ "./src/app/particles/particles.component.scss":
/*!****************************************************!*\
  !*** ./src/app/particles/particles.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.particles {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydGljbGVzL0M6XFxVc2Vyc1xcY2Fyci53YWxsYWNlMlxcRG9jdW1lbnRzXFxob2RkeVxcdGFpbG9yLWNoYWluLXdlYnNpdGVcXHRhaWxvci1jaGFpbi13ZWJzaXRlL3NyY1xcYXBwXFxwYXJ0aWNsZXNcXHBhcnRpY2xlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFydGljbGVzL3BhcnRpY2xlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYXJ0aWNsZXMvcGFydGljbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnBhcnRpY2xlcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufSIsIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucGFydGljbGVzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/particles/particles.component.ts":
/*!**************************************************!*\
  !*** ./src/app/particles/particles.component.ts ***!
  \**************************************************/
/*! exports provided: ParticlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticlesComponent", function() { return ParticlesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ParticlesComponent = class ParticlesComponent {
    constructor() {
        this.number = 60;
        this.linkDistance = 120;
        this.linkWidth = 1;
        this.moveSpeed = 8;
        this.size = 3;
        this.repulseDistance = 140;
        this.repulseDuration = 0.4;
        this.canvasHeight = 0;
        this.canvasWidth = 0;
        this.interaction = {
            status: 'mouseleave',
            pos_x: 0,
            pos_y: 0,
        };
        this.particlesList = [];
        this.animating = true;
    }
    ngAfterViewInit() {
        this.canvas = this.particlesCanvas.nativeElement;
        this.context = this.canvas.getContext('2d');
        this.setCanvasSize();
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        for (let i = 0; i < this.number; i++) {
            this.particlesList.push(this.createParticle());
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.canvas, 'mousemove').subscribe((e) => {
            this.interaction.pos_x = e.offsetX;
            this.interaction.pos_y = e.offsetY;
            this.interaction.status = 'mousemove';
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.canvas, 'mouseleave').subscribe((e) => {
            this.interaction.pos_x = null;
            this.interaction.pos_y = null;
            this.interaction.status = 'mouseleave';
        });
        this.render();
    }
    ngOnDestroy() {
        this.animating = false;
    }
    setCanvasSize() {
        this.canvasHeight = this.canvas.offsetHeight;
        this.canvasWidth = this.canvas.offsetWidth;
        this.canvas.width = this.canvasWidth;
        this.canvas.height = this.canvasHeight;
    }
    createParticle() {
        let x = Math.random() * this.canvasWidth;
        let y = Math.random() * this.canvasHeight;
        const vx = Math.random() - 0.5;
        const vy = Math.random() - 0.5;
        if (x > this.canvasWidth - this.size * 2) {
            x = x - this.size;
        }
        else if (x < this.size * 2) {
            x = x + this.size;
        }
        if (y > this.canvasHeight - this.size * 2) {
            y = y - this.size;
        }
        else if (y < this.size * 2) {
            y = y + this.size;
        }
        return {
            x: x,
            y: y,
            vx: vx,
            vy: vy
        };
    }
    draw(p) {
        this.context.fillStyle = 'rgba(255,255,255, 1)';
        this.context.beginPath();
        this.context.arc(p.x, p.y, this.size, 0, Math.PI * 2, false);
        this.context.closePath();
        this.context.fill();
    }
    particlesDraw() {
        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.update();
        for (let i = 0, l = this.particlesList.length; i < l; i++) {
            this.draw(this.particlesList[i]);
        }
    }
    update() {
        let p = {
            vx: 0,
            vy: 0,
            x: 0,
            y: 0
        };
        let p2 = {
            vx: 0,
            vy: 0,
            x: 0,
            y: 0
        };
        let ms = 0;
        for (let i = 0, l = this.particlesList.length; i < l; i++) {
            p = this.particlesList[i];
            ms = this.moveSpeed / 2;
            p.x += p.vx * ms;
            p.y += p.vy * ms;
            if (p.x - this.size > this.canvasWidth) {
                p.x = -this.size;
                p.y = Math.random() * this.canvasHeight;
            }
            else if (p.x + this.size < 0) {
                p.x = this.canvasWidth + this.size;
                p.y = Math.random() * this.canvasHeight;
            }
            if (p.y - this.size > this.canvasHeight) {
                p.y = -this.size;
                p.x = Math.random() * this.canvasWidth;
            }
            else if (p.y + this.size < 0) {
                p.y = this.canvasHeight + this.size;
                p.x = Math.random() * this.canvasWidth;
            }
            if (this.interaction.status === 'mousemove') {
                this.repulse(p);
            }
            for (let j = i + 1; j < l; j++) {
                p2 = this.particlesList[j];
                this.linkParticles(p, p2);
            }
        }
    }
    repulse(p) {
        const dx_mouse = p.x - this.interaction.pos_x, dy_mouse = p.y - this.interaction.pos_y, dist_mouse = Math.sqrt(Math.pow(dx_mouse, 2) + Math.pow(dy_mouse, 2));
        const velocity = 100, repulseFactor = Math.min(Math.max((1 / this.repulseDistance)
            * (-1 * Math.pow(dist_mouse / this.repulseDistance, 2) + 1)
            * this.repulseDistance * velocity, 0), 50);
        p.x = p.x + dx_mouse / dist_mouse * repulseFactor;
        p.y = p.y + dy_mouse / dist_mouse * repulseFactor;
    }
    linkParticles(p1, p2) {
        const dist = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
        if (dist <= this.linkDistance) {
            if (.7 - (dist / (1 / .7)) / this.linkDistance > 0) {
                this.context.strokeStyle = 'rgba(255, 255,255, .2)';
                this.context.lineWidth = this.linkWidth;
                this.context.beginPath();
                this.context.moveTo(p1.x, p1.y);
                this.context.lineTo(p2.x, p2.y);
                this.context.stroke();
                this.context.closePath();
            }
        }
    }
    render() {
        this.particlesDraw();
        if (this.animating) {
            window.requestAnimationFrame(callback => this.render());
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('particles', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ParticlesComponent.prototype, "particlesCanvas", void 0);
ParticlesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-particles',
        template: __webpack_require__(/*! raw-loader!./particles.component.html */ "./node_modules/raw-loader/index.js!./src/app/particles/particles.component.html"),
        styles: [__webpack_require__(/*! ./particles.component.scss */ "./src/app/particles/particles.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ParticlesComponent);



/***/ }),

/***/ "./src/app/topbar/topbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/topbar/topbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcGJhci90b3BiYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/topbar/topbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/topbar/topbar.component.ts ***!
  \********************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TopbarComponent = class TopbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
TopbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-top-bar',
        template: __webpack_require__(/*! raw-loader!./topbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/topbar/topbar.component.html"),
        styles: [__webpack_require__(/*! ./topbar.component.scss */ "./src/app/topbar/topbar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TopbarComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\carr.wallace2\Documents\hoddy\tailor-chain-website\tailor-chain-website\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map