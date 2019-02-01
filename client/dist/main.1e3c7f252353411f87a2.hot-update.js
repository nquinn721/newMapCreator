webpackHotUpdate("main",{

/***/ "./client/public/js/editor/modes/paint.js":
/*!************************************************!*\
  !*** ./client/public/js/editor/modes/paint.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Paint; });\nclass Paint {\n  constructor(stage) {\n    this.isPainting = false;\n    this.stage = stage;\n  }\n\n  click(e) {}\n  mouseUp(e) {\n    this.isPainting = false;\n    this.addImage();\n  }\n  mouseDown(e) {\n    this.isPainting = true;\n  }\n  mouseMove(e) {\n    if (this.isPainting) this.addImage();\n  }\n  addImage() {\n    this.stage.addImage({ name: \"box.jpg\", x: e.offsetX, y: e.offsetY });\n  }\n}\n\n\n//# sourceURL=webpack:///./client/public/js/editor/modes/paint.js?");

/***/ })

})