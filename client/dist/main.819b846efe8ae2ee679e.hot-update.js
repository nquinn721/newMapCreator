webpackHotUpdate("main",{

/***/ "./client/public/js/editor/tileStage.js":
/*!**********************************************!*\
  !*** ./client/public/js/editor/tileStage.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/event */ \"./client/public/js/lib/event.js\");\n/* harmony import */ var _modes_paint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modes/paint */ \"./client/public/js/editor/modes/paint.js\");\n/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image */ \"./client/public/js/editor/image.js\");\n/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./draw */ \"./client/public/js/editor/draw.js\");\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item */ \"./client/public/js/editor/item.js\");\n\n\n\n\n\n\nclass TileStage extends _lib_event__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(id, w = 2000, h = 2000) {\n    super();\n\n    this.stage = new createjs.Stage(id);\n    this.items = [];\n    this.id = id;\n\n    this.w = w;\n    this.h = h;\n    this.cellSize = 25;\n\n    this.modes = {\n      paint: new _modes_paint__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this)\n    };\n\n    this.currentMode = \"paint\";\n  }\n\n  setup() {\n    this.image = new _image__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this);\n\n    if (this.id === \"root\") {\n      this.drawBg();\n      this.drawGrid();\n    }\n  }\n  addImage({ name, x = 0, y = 0, w, h }) {\n    const img = this.image.createImage(arguments[0]);\n    this.stage.addChild(img);\n    this.items.push(new _item__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({ x, y, img }));\n  }\n\n  handleEvent(event, e) {\n    this.getCurrentMode()[event](e);\n  }\n  getCurrentMode() {\n    return this.modes[this.currentMode];\n  }\n\n  checkForItemInCell(x, y) {\n    return this.items.filter(v => v.x === x && v.y === y)[0];\n  }\n\n  update() {\n    this.stage.update();\n    this.emit(\"update\");\n  }\n  drawBg() {\n    this.addImage({ name: \"bg.jpg\", x: 0, y: 0, w: this.w, h: this.h });\n  }\n  drawGrid() {\n    for (let x = this.cellSize; x < this.w; x += this.cellSize) {\n      let line = _draw__WEBPACK_IMPORTED_MODULE_3__[\"default\"].line(x, 0, x, this.h);\n      this.stage.addChild(line);\n    }\n    for (let y = this.cellSize; y < this.h; y += this.cellSize) {\n      let line = _draw__WEBPACK_IMPORTED_MODULE_3__[\"default\"].line(0, y, this.w, y);\n      this.stage.addChild(line);\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TileStage);\n\n\n//# sourceURL=webpack:///./client/public/js/editor/tileStage.js?");

/***/ })

})