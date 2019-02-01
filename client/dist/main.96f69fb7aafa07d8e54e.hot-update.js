webpackHotUpdate("main",{

/***/ "./client/public/js/editor/draw.js":
/*!*****************************************!*\
  !*** ./client/public/js/editor/draw.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Draw; });\nclass Draw{\n\tstatic line(x, y, endX, endY){\n\t\tlet line = new createjs.Shape();\n\t\tline.graphics.setStrokeStyle(1);\n\t\tline.graphics.beginStroke('#555');\n\t\tline.graphics.moveTo(x, y);\n\t\tline.graphics.lineTo(endX, endY);\n\t\tline.graphics.endStroke();\n\t\treturn line;\n\t}\n}\n\n//# sourceURL=webpack:///./client/public/js/editor/draw.js?");

/***/ }),

/***/ "./client/public/js/editor/image.js":
/*!******************************************!*\
  !*** ./client/public/js/editor/image.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Image; });\nclass Image {\n  constructor(stage) {\n    this.stage = stage;\n  }\n\n  createImage({ name, x = 0, y = 0, w, h }) {\n    const img = new createjs.Bitmap(\"assets/images/\" + name);\n    x = Math.floor(x / this.cellSize) * this.cellSize;\n    y = Math.floor(y / this.cellSize) * this.cellSize;\n\n    if (this.stage.checkForItemInCell(x, y)) return;\n\n    img.x = x;\n    img.y = y;\n\n    img.scaleX = (w || this.cellSize) / img.image.width;\n    img.scaleY = (h || this.cellSize) / img.image.height;\n\n    return img;\n  }\n}\n\n\n//# sourceURL=webpack:///./client/public/js/editor/image.js?");

/***/ }),

/***/ "./client/public/js/editor/item.js":
/*!*****************************************!*\
  !*** ./client/public/js/editor/item.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Item; });\n/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draw */ \"./client/public/js/editor/draw.js\");\n\n\nclass Item{\n\tconstructor({img, w, h}){\n\t\tthis.img = img;\n\t\tthis.w = w;\n\t\tthis.h = h;\n\t}\n\n\tselect(){\n\n\t}\n}\n\n//# sourceURL=webpack:///./client/public/js/editor/item.js?");

/***/ }),

/***/ "./client/public/js/editor/modes/paint.js":
/*!************************************************!*\
  !*** ./client/public/js/editor/modes/paint.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Paint; });\nclass Paint {\n  constructor(stage) {\n    this.isPainting = false;\n    this.stage = stage;\n  }\n\n  click(e) {}\n  mouseUp(e) {\n    this.isPainting = false;\n    this.addImage(e);\n  }\n  mouseDown(e) {\n    this.isPainting = true;\n  }\n  mouseMove(e) {\n    if (this.isPainting) this.addImage(e);\n  }\n  addImage(e) {\n    this.stage.addImage({ name: \"box.jpg\", x: e.offsetX, y: e.offsetY });\n  }\n}\n\n\n//# sourceURL=webpack:///./client/public/js/editor/modes/paint.js?");

/***/ }),

/***/ "./client/public/js/editor/tileStage.js":
/*!**********************************************!*\
  !*** ./client/public/js/editor/tileStage.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/event */ \"./client/public/js/lib/event.js\");\n/* harmony import */ var _modes_paint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modes/paint */ \"./client/public/js/editor/modes/paint.js\");\n/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image */ \"./client/public/js/editor/image.js\");\n/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./draw */ \"./client/public/js/editor/draw.js\");\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item */ \"./client/public/js/editor/item.js\");\n\n\n\n\n\n\nclass TileStage extends _lib_event__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(id, w = 2000, h = 2000) {\n    super();\n\n    this.stage = new createjs.Stage(id);\n    this.items = [];\n    this.id = id;\n\n    this.w = w;\n    this.h = h;\n    this.cellSize = 25;\n\n    this.modes = {\n      paint: new _modes_paint__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this)\n    };\n\n    this.currentMode = \"paint\";\n  }\n\n  setup() {\n    this.image = new _image__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this);\n\n    if (this.id === \"root\") {\n      this.drawBg();\n      this.drawGrid();\n    }\n  }\n  addImage({ name, x = 0, y = 0, w, h }) {\n    console.log(arguments);\n    const img = this.image.createImage({ name, x, y, w, h });\n    this.stage.addChild(img);\n    this.items.push(new _item__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({ x, y, img }));\n  }\n\n  handleEvent(event, e) {\n    this.getCurrentMode()[event](e);\n  }\n  getCurrentMode() {\n    return this.modes[this.currentMode];\n  }\n\n  checkForItemInCell(x, y) {\n    return this.items.filter(v => v.x === x && v.y === y)[0];\n  }\n\n  update() {\n    this.stage.update();\n    this.emit(\"update\");\n  }\n  drawBg() {\n    this.addImage({ name: \"bg.jpg\", x: 0, y: 0, w: this.w, h: this.h });\n  }\n  drawGrid() {\n    for (let x = this.cellSize; x < this.w; x += this.cellSize) {\n      let line = _draw__WEBPACK_IMPORTED_MODULE_3__[\"default\"].line(x, 0, x, this.h);\n      this.stage.addChild(line);\n    }\n    for (let y = this.cellSize; y < this.h; y += this.cellSize) {\n      let line = _draw__WEBPACK_IMPORTED_MODULE_3__[\"default\"].line(0, y, this.w, y);\n      this.stage.addChild(line);\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TileStage);\n\n\n//# sourceURL=webpack:///./client/public/js/editor/tileStage.js?");

/***/ }),

/***/ "./client/public/js/lib/event.js":
/*!***************************************!*\
  !*** ./client/public/js/lib/event.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Event; });\nclass Event{\n\tconstructor(){\n\t\tthis.events = [];\n\t}\n\ton(event, cb){\n\t\tthis.events.push({event, cb});\n\t}\n\temit(event, data){\n\t\tthis.events.forEach(e => e.event === event && e.cb(data));\n\t}\n}\n\n//# sourceURL=webpack:///./client/public/js/lib/event.js?");

/***/ })

})