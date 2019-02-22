webpackHotUpdate("main",{

/***/ "./client/public/js/editor/image.js":
/*!******************************************!*\
  !*** ./client/public/js/editor/image.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Image; });\nclass Image {\n  constructor(stage) {\n    this.stage = stage;\n  }\n\n  createImage({ name, x = 0, y = 0, w, h }) {\n    const img = new createjs.Bitmap(\"assets/images/\" + name);\n    // x = Math.floor(x / this.stage.cellSize) * this.stage.cellSize;\n    // y = Math.floor(y / this.stage.cellSize) * this.stage.cellSize;\n\n    if (this.stage.checkForItemInCell(x, y)) return;\n\n    img.x = x;\n    img.y = y;\n\n    // img.scaleX = (w || this.stage.cellSize) / img.image.width;\n    // img.scaleY = (h || this.stage.cellSize) / img.image.height;\n\n    this.drawSquare(x, y, img.image.width, img.image.height);\n    return img;\n  }\n  drawSquare(x, y, w, h) {\n    var graphics = new createjs.Graphics()\n      .setStrokeStyle(3)\n      .beginFill(\"#000\")\n      .drawRect(x - 2, y - 2, w + 4, h + 4);\n    var rect = new createjs.Shape(graphics);\n    this.stage.stage.addChild(rect);\n  }\n}\n\n\n//# sourceURL=webpack:///./client/public/js/editor/image.js?");

/***/ })

})