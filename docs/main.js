(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mnist_mnist_container_mnist_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mnist/mnist-container/mnist-container.component */ "./src/app/mnist/mnist-container/mnist-container.component.ts");




var routes = [
    {
        path: '',
        component: _mnist_mnist_container_mnist_container_component__WEBPACK_IMPORTED_MODULE_3__["MnistContainerComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ng-tf-digits';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _mnist_mnist_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mnist/mnist.module */ "./src/app/mnist/mnist.module.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _mnist_mnist_module__WEBPACK_IMPORTED_MODULE_5__["MnistModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/mnist/mnist-canvas/mnist-canvas.component.css":
/*!***************************************************************!*\
  !*** ./src/app/mnist/mnist-canvas/mnist-canvas.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "canvas {\n  border: 1px solid #000;\n}\n\n.canvas-container {\n  display: grid;\n  justify-items: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW5pc3QvbW5pc3QtY2FudmFzL21uaXN0LWNhbnZhcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL21uaXN0L21uaXN0LWNhbnZhcy9tbmlzdC1jYW52YXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImNhbnZhcyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG59XG5cbi5jYW52YXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/mnist/mnist-canvas/mnist-canvas.component.html":
/*!****************************************************************!*\
  !*** ./src/app/mnist/mnist-canvas/mnist-canvas.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"canvas-container\">\n  <!-- <button (click)=\"reset()\">Reset</button> -->\n  <h1>Draw a Number and Hit Submit</h1>\n  <canvas #canvas></canvas>\n  <button (click)=\"submit()\">Submit</button>\n  <button (click)=\"reset()\">Reset</button>\n  <h2>Downsampled Input (Input Layer)</h2>\n  <canvas #downsampled></canvas>\n</div>\n"

/***/ }),

/***/ "./src/app/mnist/mnist-canvas/mnist-canvas.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/mnist/mnist-canvas/mnist-canvas.component.ts ***!
  \**************************************************************/
/*! exports provided: MnistCanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MnistCanvasComponent", function() { return MnistCanvasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var MnistCanvasComponent = /** @class */ (function () {
    function MnistCanvasComponent() {
        this.submission = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // setting a width and height for the canvas
        this.width = 200;
        this.height = 200;
    }
    MnistCanvasComponent.prototype.ngAfterViewInit = function () {
        this.init();
    };
    MnistCanvasComponent.prototype.init = function () {
        // get the context
        var canvasEl = this.canvas.nativeElement;
        this.cx = canvasEl.getContext('2d', {
            alpha: false
        });
        // set the width and height
        canvasEl.width = this.width;
        canvasEl.height = this.height;
        // set some default properties about the line
        this.cx.lineWidth = 0.15 * this.width;
        this.cx.lineCap = 'round';
        this.cx.strokeStyle = '#FFF';
        this.cx.fillStyle = '#000';
        this.cx.fillRect(0, 0, this.width, this.height);
        // we'll implement this method to start capturing mouse events
        this.captureEvents(canvasEl);
        this.initDown();
    };
    MnistCanvasComponent.prototype.initDown = function () {
        var downsampledEl = this.downsampled.nativeElement;
        // set the width and height
        downsampledEl.width = 28;
        downsampledEl.height = 28;
        this.dx = downsampledEl.getContext('2d', {
            alpha: false
        });
    };
    MnistCanvasComponent.prototype.captureEvents = function (canvasEl) {
        var _this = this;
        // this will capture all mousedown events from the canvas element
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(canvasEl, 'mousedown')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (e) {
            // after a mouse down, we'll record all mouse moves
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(canvasEl, 'mousemove').pipe(
            // we'll stop (and unsubscribe) once the user releases the mouse
            // this will trigger a 'mouseup' event
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(canvasEl, 'mouseup')), 
            // we'll also stop (and unsubscribe) once the mouse leaves the canvas (mouseleave event)
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(canvasEl, 'mouseleave')), 
            // pairwise lets us get the previous value to draw a line from
            // the previous point to the current point
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])());
        }))
            .subscribe(function (res) {
            var rect = canvasEl.getBoundingClientRect();
            // previous and current position with the offset
            var prevPos = {
                x: res[0].clientX - rect.left,
                y: res[0].clientY - rect.top
            };
            var currentPos = {
                x: res[1].clientX - rect.left,
                y: res[1].clientY - rect.top
            };
            // this method we'll implement soon to do the actual drawing
            _this.drawOnCanvas(prevPos, currentPos);
        });
    };
    MnistCanvasComponent.prototype.drawOnCanvas = function (prevPos, currentPos) {
        // incase the context is not set
        if (!this.cx) {
            return;
        }
        // start our drawing path
        this.cx.beginPath();
        // we're drawing lines so we need a previous position
        if (prevPos) {
            // sets the start point
            this.cx.moveTo(prevPos.x, prevPos.y); // from
            // draws a line from the start pos until the current position
            this.cx.lineTo(currentPos.x, currentPos.y);
            // strokes the current path with the styles we set earlier
            this.cx.stroke();
        }
        this.downScaleCanvas(this.cx.getImageData(0, 0, this.width, this.height));
    };
    MnistCanvasComponent.prototype.submit = function () {
        // this.cx.scale(28 / this.width, 28 / this.height);
        // const rawImg = this.cx.getImageData(0, 0, 28, 28);
        var downscaled = this.downScaleCanvas(this.cx.getImageData(0, 0, this.width, this.height));
        var rawImg = downscaled.getImageData(0, 0, 28, 28);
        var img = [];
        for (var i = 0; i < rawImg.data.length; i += 4) {
            var avg = (rawImg.data[i] + rawImg.data[i + 1] + rawImg.data[i + 2]) / 3;
            img.push((0.98 * avg) / 255 + 0.01);
        }
        this.submission.emit(img);
    };
    MnistCanvasComponent.prototype.reset = function () {
        this.init();
        this.submission.emit(null);
    };
    MnistCanvasComponent.prototype.downScaleCanvas = function (cv) {
        this.initDown();
        var newCanvas = document.createElement('canvas');
        newCanvas.width = this.width;
        newCanvas.height = this.height;
        newCanvas.getContext('2d').putImageData(cv, 0, 0);
        this.dx.scale(28 / this.width, 28 / this.height);
        this.dx.drawImage(newCanvas, 0, 0);
        return this.dx;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MnistCanvasComponent.prototype, "submission", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MnistCanvasComponent.prototype, "canvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('downsampled'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MnistCanvasComponent.prototype, "downsampled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MnistCanvasComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MnistCanvasComponent.prototype, "height", void 0);
    MnistCanvasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mnist-canvas',
            template: __webpack_require__(/*! ./mnist-canvas.component.html */ "./src/app/mnist/mnist-canvas/mnist-canvas.component.html"),
            styles: [__webpack_require__(/*! ./mnist-canvas.component.css */ "./src/app/mnist/mnist-canvas/mnist-canvas.component.css")]
        })
    ], MnistCanvasComponent);
    return MnistCanvasComponent;
}());



/***/ }),

/***/ "./src/app/mnist/mnist-container/mnist-container.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/mnist/mnist-container/mnist-container.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".layer {\n  display: flex;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n}\n\n.layer-img {\n  margin: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW5pc3QvbW5pc3QtY29udGFpbmVyL21uaXN0LWNvbnRhaW5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvbW5pc3QvbW5pc3QtY29udGFpbmVyL21uaXN0LWNvbnRhaW5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxheWVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxheWVyLWltZyB7XG4gIG1hcmdpbjogNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/mnist/mnist-container/mnist-container.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/mnist/mnist-container/mnist-container.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading; else canvas\" style=\"text-align: center\">\n  <h1>Loading...</h1>\n  <h2 *ngIf=\"modelAccuracy$ | async as acc\">\n    Epoch Accuracy: {{ acc | number }}\n  </h2>\n</div>\n<ng-template #canvas>\n  <button (click)=\"toggleVisor()\">Toggle Visor</button>\n  <app-mnist-canvas (submission)=\"submission($event)\"></app-mnist-canvas>\n  <div *ngFor=\"let layer of layerImgs\" style=\"text-align: center\">\n    <h3>Layer {{ layer.layer }}: {{ layer.name }}</h3>\n    <div *ngIf=\"layer.multiple; else dense\" class=\"layer\">\n      <div *ngFor=\"let img of layer.data\" class=\"layer-img\">\n        <app-mnist-img [data]=\"img\"></app-mnist-img>\n      </div>\n    </div>\n    <ng-template #dense>\n      <div class=\"layer\">\n        <div *ngFor=\"let pixel of layer.data\">\n          <app-mnist-pixel [data]=\"pixel\"></app-mnist-pixel>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n  <h1 *ngIf=\"prediction\">Prediction: {{ prediction }}</h1>\n  <pre *ngIf=\"distribution\">{{ distribution | json }}</pre>\n</ng-template>\n<div>\n  <h1>What is this?</h1>\n  <p>\n    At ng-conf 2019 I did a tensorflowjs workshop where\n    <a href=\"http://www.cs.cmu.edu/~aharley/vis/\">this was demoed.</a>\n  </p>\n  <p>\n    Ironically... it doesn't actually use tensorflowjs (or Angular), so I wanted\n    to do a quick recreation.\n  </p>\n  <p>...but... what does it do?</p>\n  <p>\n    You can sketch a number (0-9) and a Convolutional Neural Network will\n    attempt to predict what number you wrote.\n  </p>\n  <p>Once you hit submit, you can see the output of each layer in the CNN.</p>\n  <p>\n    The model is very roughly tuned, so the predictions are not very good... I\n    just wanted to put this together as a VERY rough POC\n  </p>\n  <p>Which also explains the lack of styles...</p>\n</div>\n"

/***/ }),

/***/ "./src/app/mnist/mnist-container/mnist-container.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/mnist/mnist-container/mnist-container.component.ts ***!
  \********************************************************************/
/*! exports provided: MnistContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MnistContainerComponent", function() { return MnistContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mnist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mnist.service */ "./src/app/mnist/mnist.service.ts");



var MnistContainerComponent = /** @class */ (function () {
    function MnistContainerComponent(mnist) {
        this.mnist = mnist;
        this.loading = true;
        this.modelAccuracy$ = this.mnist.accuracy;
    }
    MnistContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mnist.run().then(function () {
            _this.loading = false;
        });
    };
    MnistContainerComponent.prototype.submission = function (img) {
        if (img) {
            var _a = this.mnist.infer(img), prediction = _a.prediction, distribution = _a.distribution, layerImgs = _a.layerImgs;
            this.prediction = prediction;
            this.distribution = distribution;
            this.layerImgs = layerImgs;
        }
        else {
            this.prediction = null;
            this.distribution = null;
            this.layerImgs = [];
        }
    };
    MnistContainerComponent.prototype.toggleVisor = function () {
        this.mnist.toggle();
    };
    MnistContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mnist-container',
            template: __webpack_require__(/*! ./mnist-container.component.html */ "./src/app/mnist/mnist-container/mnist-container.component.html"),
            styles: [__webpack_require__(/*! ./mnist-container.component.css */ "./src/app/mnist/mnist-container/mnist-container.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mnist_service__WEBPACK_IMPORTED_MODULE_2__["MnistService"]])
    ], MnistContainerComponent);
    return MnistContainerComponent;
}());



/***/ }),

/***/ "./src/app/mnist/mnist-data.ts":
/*!*************************************!*\
  !*** ./src/app/mnist/mnist-data.ts ***!
  \*************************************/
/*! exports provided: MnistData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MnistData", function() { return MnistData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow/tfjs */ "./node_modules/@tensorflow/tfjs/dist/tf.esm.js");
/**
 * @license
 * Modified by: Matt Martz 2019
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


var IMAGE_SIZE = 784;
var NUM_CLASSES = 10;
var NUM_DATASET_ELEMENTS = 65000;
var TRAIN_TEST_RATIO = 5 / 6;
var NUM_TRAIN_ELEMENTS = Math.floor(TRAIN_TEST_RATIO * NUM_DATASET_ELEMENTS);
var NUM_TEST_ELEMENTS = NUM_DATASET_ELEMENTS - NUM_TRAIN_ELEMENTS;
var MNIST_IMAGES_SPRITE_PATH = 'https://storage.googleapis.com/learnjs-data/model-builder/mnist_images.png';
var MNIST_LABELS_PATH = 'https://storage.googleapis.com/learnjs-data/model-builder/mnist_labels_uint8';
/**
 * A class that fetches the sprited MNIST dataset and returns shuffled batches.
 *
 * NOTE: This will get much easier. For now, we do data fetching and
 * manipulation manually.
 */
var MnistData = /** @class */ (function () {
    function MnistData() {
        this.shuffledTrainIndex = 0;
        this.shuffledTestIndex = 0;
    }
    MnistData.prototype.load = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var img, canvas, ctx, imgRequest, labelsRequest, _a, imgResponse, labelsResponse, _b, _c;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        img = new Image();
                        canvas = document.createElement('canvas');
                        ctx = canvas.getContext('2d');
                        imgRequest = new Promise(function (resolve, reject) {
                            img.crossOrigin = '';
                            img.onload = function () {
                                img.width = img.naturalWidth;
                                img.height = img.naturalHeight;
                                var datasetBytesBuffer = new ArrayBuffer(NUM_DATASET_ELEMENTS * IMAGE_SIZE * 4);
                                var chunkSize = 5000;
                                canvas.width = img.width;
                                canvas.height = chunkSize;
                                for (var i = 0; i < NUM_DATASET_ELEMENTS / chunkSize; i++) {
                                    var datasetBytesView = new Float32Array(datasetBytesBuffer, i * IMAGE_SIZE * chunkSize * 4, IMAGE_SIZE * chunkSize);
                                    ctx.drawImage(img, 0, i * chunkSize, img.width, chunkSize, 0, 0, img.width, chunkSize);
                                    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                                    for (var j = 0; j < imageData.data.length / 4; j++) {
                                        // All channels hold an equal value since the image is grayscale, so
                                        // just read the red channel.
                                        datasetBytesView[j] = imageData.data[j * 4] / 255;
                                    }
                                }
                                _this.datasetImages = new Float32Array(datasetBytesBuffer);
                                resolve();
                            };
                            img.src = MNIST_IMAGES_SPRITE_PATH;
                        });
                        labelsRequest = fetch(MNIST_LABELS_PATH);
                        return [4 /*yield*/, Promise.all([
                                imgRequest,
                                labelsRequest
                            ])];
                    case 1:
                        _a = _d.sent(), imgResponse = _a[0], labelsResponse = _a[1];
                        _b = this;
                        _c = Uint8Array.bind;
                        return [4 /*yield*/, labelsResponse.arrayBuffer()];
                    case 2:
                        _b.datasetLabels = new (_c.apply(Uint8Array, [void 0, _d.sent()]))();
                        // Create shuffled indices into the train/test set for when we select a
                        // random dataset element for training / validation.
                        this.trainIndices = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["util"].createShuffledIndices(NUM_TRAIN_ELEMENTS);
                        this.testIndices = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["util"].createShuffledIndices(NUM_TEST_ELEMENTS);
                        // Slice the the images and labels into train and test sets.
                        this.trainImages = this.datasetImages.slice(0, IMAGE_SIZE * NUM_TRAIN_ELEMENTS);
                        this.testImages = this.datasetImages.slice(IMAGE_SIZE * NUM_TRAIN_ELEMENTS);
                        this.trainLabels = this.datasetLabels.slice(0, NUM_CLASSES * NUM_TRAIN_ELEMENTS);
                        this.testLabels = this.datasetLabels.slice(NUM_CLASSES * NUM_TRAIN_ELEMENTS);
                        return [2 /*return*/];
                }
            });
        });
    };
    MnistData.prototype.nextTrainBatch = function (batchSize) {
        var _this = this;
        return this.nextBatch(batchSize, [this.trainImages, this.trainLabels], function () {
            _this.shuffledTrainIndex =
                (_this.shuffledTrainIndex + 1) % _this.trainIndices.length;
            return _this.trainIndices[_this.shuffledTrainIndex];
        });
    };
    MnistData.prototype.nextTestBatch = function (batchSize) {
        var _this = this;
        return this.nextBatch(batchSize, [this.testImages, this.testLabels], function () {
            _this.shuffledTestIndex =
                (_this.shuffledTestIndex + 1) % _this.testIndices.length;
            return _this.testIndices[_this.shuffledTestIndex];
        });
    };
    MnistData.prototype.nextBatch = function (batchSize, data, index) {
        var batchImagesArray = new Float32Array(batchSize * IMAGE_SIZE);
        var batchLabelsArray = new Uint8Array(batchSize * NUM_CLASSES);
        for (var i = 0; i < batchSize; i++) {
            var idx = index();
            var image = data[0].slice(idx * IMAGE_SIZE, idx * IMAGE_SIZE + IMAGE_SIZE);
            batchImagesArray.set(image, i * IMAGE_SIZE);
            var label = data[1].slice(idx * NUM_CLASSES, idx * NUM_CLASSES + NUM_CLASSES);
            batchLabelsArray.set(label, i * NUM_CLASSES);
        }
        var xs = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tensor2d"](batchImagesArray, [batchSize, IMAGE_SIZE]);
        var labels = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tensor2d"](batchLabelsArray, [batchSize, NUM_CLASSES]);
        return { xs: xs, labels: labels };
    };
    return MnistData;
}());



/***/ }),

/***/ "./src/app/mnist/mnist-img/mnist-img.component.css":
/*!*********************************************************!*\
  !*** ./src/app/mnist/mnist-img/mnist-img.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21uaXN0L21uaXN0LWltZy9tbmlzdC1pbWcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/mnist/mnist-img/mnist-img.component.html":
/*!**********************************************************!*\
  !*** ./src/app/mnist/mnist-img/mnist-img.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <canvas #canvas></canvas>\n</div>\n"

/***/ }),

/***/ "./src/app/mnist/mnist-img/mnist-img.component.ts":
/*!********************************************************!*\
  !*** ./src/app/mnist/mnist-img/mnist-img.component.ts ***!
  \********************************************************/
/*! exports provided: MnistImgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MnistImgComponent", function() { return MnistImgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MnistImgComponent = /** @class */ (function () {
    function MnistImgComponent() {
        // setting a width and height for the canvas
        this.width = 100;
        this.height = 100;
    }
    MnistImgComponent.prototype.ngAfterViewInit = function () {
        this.init();
    };
    MnistImgComponent.prototype.init = function () {
        // get the context
        var canvasEl = this.canvas.nativeElement;
        var width = Math.sqrt(this.data.length);
        var height = Math.sqrt(this.data.length);
        var ratio = height / 28;
        var scaleFactor = (ratio * this.height * height) / 28;
        this.cx = null;
        this.cx = canvasEl.getContext('2d');
        // set the width and height
        canvasEl.width = this.width * ratio;
        canvasEl.height = this.height * ratio;
        var tempImg = [];
        this.data.forEach(function (dat) {
            tempImg.push(dat);
            tempImg.push(dat);
            tempImg.push(dat);
            tempImg.push(255);
        });
        var img = new Uint8ClampedArray(width * height * 4);
        tempImg.forEach(function (v, i) {
            img[i] = v;
        });
        var idata = this.cx.createImageData(width, height);
        // set our buffer as source
        idata.data.set(img);
        var newCanvas = document.createElement('canvas');
        newCanvas.width = width;
        newCanvas.height = height;
        newCanvas.getContext('2d').putImageData(idata, 0, 0);
        this.cx.scale(scaleFactor, scaleFactor);
        this.cx.drawImage(newCanvas, 0, 0);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MnistImgComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MnistImgComponent.prototype, "canvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MnistImgComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MnistImgComponent.prototype, "height", void 0);
    MnistImgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mnist-img',
            template: __webpack_require__(/*! ./mnist-img.component.html */ "./src/app/mnist/mnist-img/mnist-img.component.html"),
            styles: [__webpack_require__(/*! ./mnist-img.component.css */ "./src/app/mnist/mnist-img/mnist-img.component.css")]
        })
    ], MnistImgComponent);
    return MnistImgComponent;
}());



/***/ }),

/***/ "./src/app/mnist/mnist-pixel/mnist-pixel.component.css":
/*!*************************************************************!*\
  !*** ./src/app/mnist/mnist-pixel/mnist-pixel.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21uaXN0L21uaXN0LXBpeGVsL21uaXN0LXBpeGVsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/mnist/mnist-pixel/mnist-pixel.component.html":
/*!**************************************************************!*\
  !*** ./src/app/mnist/mnist-pixel/mnist-pixel.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas #canvas></canvas>\n"

/***/ }),

/***/ "./src/app/mnist/mnist-pixel/mnist-pixel.component.ts":
/*!************************************************************!*\
  !*** ./src/app/mnist/mnist-pixel/mnist-pixel.component.ts ***!
  \************************************************************/
/*! exports provided: MnistPixelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MnistPixelComponent", function() { return MnistPixelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MnistPixelComponent = /** @class */ (function () {
    function MnistPixelComponent() {
        // setting a width and height for the canvas
        this.width = 5;
        this.height = 5;
    }
    MnistPixelComponent.prototype.ngAfterViewInit = function () {
        this.init();
    };
    MnistPixelComponent.prototype.init = function () {
        // get the context
        var canvasEl = this.canvas.nativeElement;
        this.cx = canvasEl.getContext('2d');
        // set the width and height
        canvasEl.width = this.width;
        canvasEl.height = this.height;
        this.cx.fillStyle = "rgb(" + this.data + ", " + this.data + ", " + this.data + ")";
        this.cx.fillRect(0, 0, this.width, this.height);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MnistPixelComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MnistPixelComponent.prototype, "canvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MnistPixelComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MnistPixelComponent.prototype, "height", void 0);
    MnistPixelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mnist-pixel',
            template: __webpack_require__(/*! ./mnist-pixel.component.html */ "./src/app/mnist/mnist-pixel/mnist-pixel.component.html"),
            styles: [__webpack_require__(/*! ./mnist-pixel.component.css */ "./src/app/mnist/mnist-pixel/mnist-pixel.component.css")]
        })
    ], MnistPixelComponent);
    return MnistPixelComponent;
}());



/***/ }),

/***/ "./src/app/mnist/mnist.module.ts":
/*!***************************************!*\
  !*** ./src/app/mnist/mnist.module.ts ***!
  \***************************************/
/*! exports provided: MnistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MnistModule", function() { return MnistModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _mnist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mnist.service */ "./src/app/mnist/mnist.service.ts");
/* harmony import */ var _mnist_container_mnist_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mnist-container/mnist-container.component */ "./src/app/mnist/mnist-container/mnist-container.component.ts");
/* harmony import */ var _mnist_canvas_mnist_canvas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mnist-canvas/mnist-canvas.component */ "./src/app/mnist/mnist-canvas/mnist-canvas.component.ts");
/* harmony import */ var _mnist_img_mnist_img_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mnist-img/mnist-img.component */ "./src/app/mnist/mnist-img/mnist-img.component.ts");
/* harmony import */ var _mnist_pixel_mnist_pixel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mnist-pixel/mnist-pixel.component */ "./src/app/mnist/mnist-pixel/mnist-pixel.component.ts");








var MnistModule = /** @class */ (function () {
    function MnistModule() {
    }
    MnistModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_mnist_container_mnist_container_component__WEBPACK_IMPORTED_MODULE_4__["MnistContainerComponent"], _mnist_canvas_mnist_canvas_component__WEBPACK_IMPORTED_MODULE_5__["MnistCanvasComponent"], _mnist_img_mnist_img_component__WEBPACK_IMPORTED_MODULE_6__["MnistImgComponent"], _mnist_pixel_mnist_pixel_component__WEBPACK_IMPORTED_MODULE_7__["MnistPixelComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            providers: [_mnist_service__WEBPACK_IMPORTED_MODULE_3__["MnistService"]]
        })
    ], MnistModule);
    return MnistModule;
}());



/***/ }),

/***/ "./src/app/mnist/mnist.service.ts":
/*!****************************************!*\
  !*** ./src/app/mnist/mnist.service.ts ***!
  \****************************************/
/*! exports provided: MnistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MnistService", function() { return MnistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mnist_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mnist-data */ "./src/app/mnist/mnist-data.ts");
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tensorflow/tfjs */ "./node_modules/@tensorflow/tfjs/dist/tf.esm.js");
/* harmony import */ var _tensorflow_tfjs_vis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tensorflow/tfjs-vis */ "./node_modules/@tensorflow/tfjs-vis/dist/index.js");
/* harmony import */ var _tensorflow_tfjs_vis__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tensorflow_tfjs_vis__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var MnistService = /** @class */ (function () {
    function MnistService() {
        this.accuracy = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
    }
    MnistService.prototype.run = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.data = new _mnist_data__WEBPACK_IMPORTED_MODULE_2__["MnistData"]();
                        return [4 /*yield*/, this.data.load()];
                    case 1:
                        _a.sent();
                        this.model = this.getModel();
                        this.visor = _tensorflow_tfjs_vis__WEBPACK_IMPORTED_MODULE_4__["visor"]();
                        _tensorflow_tfjs_vis__WEBPACK_IMPORTED_MODULE_4__["show"].modelSummary({ name: 'Model Architecture' }, this.model);
                        return [4 /*yield*/, this.train()];
                    case 2:
                        _a.sent();
                        this.visor.close();
                        return [2 /*return*/];
                }
            });
        });
    };
    MnistService.prototype.toggle = function () {
        this.visor.toggle();
    };
    MnistService.prototype.getModel = function () {
        var model = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__["sequential"]();
        var IMAGE_WIDTH = 28;
        var IMAGE_HEIGHT = 28;
        var IMAGE_CHANNELS = 1;
        // In the first layer of out convolutional neural network we have
        // to specify the input shape. Then we specify some paramaters for
        // the convolution operation that takes place in this layer.
        model.add(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__["layers"].conv2d({
            inputShape: [IMAGE_WIDTH, IMAGE_HEIGHT, IMAGE_CHANNELS],
            kernelSize: 3,
            filters: 6,
            activation: 'relu'
        }));
        // The MaxPooling layer acts as a sort of downsampling using max values
        // in a region instead of averaging.
        model.add(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__["layers"].maxPooling2d({ poolSize: 2, strides: 2 }));
        // Repeat another conv2d + maxPooling stack.
        // Note that we have more filters in the convolution.
        model.add(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__["layers"].conv2d({ kernelSize: 3, filters: 16, activation: 'relu' }));
        model.add(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__["layers"].maxPooling2d({ poolSize: 2, strides: 2 }));
        // Now we flatten the output from the 2D filters into a 1D vector to prepare
        // it for input into our last layer. This is common practice when feeding
        // higher dimensional data to a final classification output layer.
        model.add(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__["layers"].flatten());
        model.add(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__["layers"].dense({ units: 64, activation: 'relu' }));
        // Our last layer is a dense layer which has 10 output units, one for each
        // output class (i.e. 0, 1, 2, 3, 4, 5, 6, 7, 8, 9).
        var NUM_OUTPUT_CLASSES = 10;
        model.add(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__["layers"].dense({
            units: NUM_OUTPUT_CLASSES,
            // kernelInitializer: 'varianceScaling',
            activation: 'softmax'
        }));
        // Choose an optimizer, loss function and accuracy metric,
        // then compile and return the model
        var optimizer = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__["train"].adam();
        model.compile({
            optimizer: optimizer,
            loss: 'categoricalCrossentropy',
            metrics: ['accuracy']
        });
        return model;
    };
    MnistService.prototype.train = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var metrics, container, fitCallbacks, BATCH_SIZE, TRAIN_DATA_SIZE, TEST_DATA_SIZE, _a, trainXs, trainYs, _b, testXs, testYs;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                metrics = ['loss', 'val_loss', 'acc', 'val_acc'];
                container = {
                    name: 'Model Training',
                    styles: { height: '1000px' }
                };
                fitCallbacks = _tensorflow_tfjs_vis__WEBPACK_IMPORTED_MODULE_4__["show"].fitCallbacks(container, metrics);
                BATCH_SIZE = 512;
                TRAIN_DATA_SIZE = 5500;
                TEST_DATA_SIZE = 1000;
                _a = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__["tidy"](function () {
                    var d = _this.data.nextTrainBatch(TRAIN_DATA_SIZE);
                    return [d.xs.reshape([TRAIN_DATA_SIZE, 28, 28, 1]), d.labels];
                }), trainXs = _a[0], trainYs = _a[1];
                _b = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__["tidy"](function () {
                    var d = _this.data.nextTestBatch(TEST_DATA_SIZE);
                    return [d.xs.reshape([TEST_DATA_SIZE, 28, 28, 1]), d.labels];
                }), testXs = _b[0], testYs = _b[1];
                return [2 /*return*/, this.model.fit(trainXs, trainYs, {
                        batchSize: BATCH_SIZE,
                        validationData: [testXs, testYs],
                        epochs: 1,
                        shuffle: true,
                        callbacks: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, fitCallbacks, { onEpochEnd: function (epoch, logs) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var valAcc;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            valAcc = logs.val_acc;
                                            console.log("Accuracy: " + valAcc);
                                            this.accuracy.next(valAcc);
                                            return [4 /*yield*/, _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__["nextFrame"]()];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); } })
                    })];
            });
        });
    };
    MnistService.prototype.infer = function (img) {
        var inputs = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__["tensor4d"](img, [1, 28, 28, 1]);
        inputs.print();
        var layerImgs = [];
        for (var i = 0; i < this.model.layers.length; i++) {
            var tempModel = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_3__["sequential"]();
            for (var k = 0; k <= i; k++) {
                tempModel.add(this.model.layers[k]);
            }
            var tempOutput = tempModel.predict(inputs).dataSync();
            var tempShape = tempModel.layers[tempModel.layers.length - 1]
                .outputShape;
            var tempImgs = [];
            if (tempShape.length === 4) {
                var ind = 0;
                tempImgs.push([]);
                for (var m = 0; m < tempOutput.length; m++) {
                    if (m >= (ind + 1) * tempShape[1] * tempShape[2]) {
                        ind++;
                        tempImgs.push([]);
                    }
                    tempImgs[ind].push(255 * tempOutput[m]);
                }
                layerImgs.push({
                    layer: i + 1,
                    name: tempModel.layers[tempModel.layers.length - 1].name,
                    multiple: true,
                    data: tempImgs
                });
            }
            else {
                tempImgs = tempOutput.map(function (out) { return 255 * out; });
                layerImgs.push({
                    layer: i + 1,
                    name: tempModel.layers[tempModel.layers.length - 1].name,
                    multiple: false,
                    data: tempImgs
                });
            }
            // tempModel.dispose();
        }
        var output = this.model.predict(inputs);
        var distribution = output.dataSync();
        var axis = 1;
        var prediction = Array.from(output.argMax(axis).dataSync())[0];
        inputs.dispose();
        output.dispose();
        return { prediction: prediction, distribution: distribution, layerImgs: layerImgs };
    };
    MnistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MnistService);
    return MnistService;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mattmartz/Dev/ng-conf/ng-tf-digits/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!****************************!*\
  !*** node-fetch (ignored) ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************************!*\
  !*** string_decoder (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!****************************!*\
  !*** node-fetch (ignored) ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!****************************!*\
  !*** node-fetch (ignored) ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map