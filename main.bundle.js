"use strict";
(self["webpackChunkknights_travails"] = self["webpackChunkknights_travails"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Inter", sans-serif;
}


#board {
    background-color: #fff;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    border: 0.25rem solid black;
}

#board > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 0.125rem solid black;
}

.highlighted {
    border: 0.25rem solid red !important;
}

#border {
    position: relative;
    padding: 0 0 4rem 4rem;
}

#helper-left {
    position: absolute;
    width: 4rem;
    left: 0;
    display: grid;
    grid-template-rows: repeat(8, 1fr);
}

#helper-bottom {
    position: absolute;
    height: 4rem;
    left: bottom;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
}

#helper-left > div, #helper-bottom > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
}

.tile-8:nth-child(2n), .tile-6:nth-child(2n), .tile-4:nth-child(2n), .tile-2:nth-child(2n), .tile-7:nth-child(2n-1), .tile-5:nth-child(2n-1), .tile-3:nth-child(2n-1), .tile-1:nth-child(2n-1) {
    background-color: rgba(0, 0, 0, 0.25);
}

#numbers, #letters {
    background-color: red;
    position: absolute;
}

#knight {
    color: red;
    font-size: 3rem;
}

.type {
    margin-bottom: 1rem;
    text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,gCAAgC;AACpC;;;AAGA;IACI,sBAAsB;IACtB,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;IACtB,4BAA4B;AAChC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,OAAO;IACP,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,qCAAqC;AACzC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;AACtB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap\");\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-family: \"Inter\", sans-serif;\n}\n\n\n#board {\n    background-color: #fff;\n    display: grid;\n    grid-template-columns: repeat(8, 1fr);\n    grid-template-rows: repeat(8, 1fr);\n    border: 0.25rem solid black;\n}\n\n#board > div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    border: 0.125rem solid black;\n}\n\n.highlighted {\n    border: 0.25rem solid red !important;\n}\n\n#border {\n    position: relative;\n    padding: 0 0 4rem 4rem;\n}\n\n#helper-left {\n    position: absolute;\n    width: 4rem;\n    left: 0;\n    display: grid;\n    grid-template-rows: repeat(8, 1fr);\n}\n\n#helper-bottom {\n    position: absolute;\n    height: 4rem;\n    left: bottom;\n    display: grid;\n    grid-template-columns: repeat(8, 1fr);\n}\n\n#helper-left > div, #helper-bottom > div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n}\n\n.tile-8:nth-child(2n), .tile-6:nth-child(2n), .tile-4:nth-child(2n), .tile-2:nth-child(2n), .tile-7:nth-child(2n-1), .tile-5:nth-child(2n-1), .tile-3:nth-child(2n-1), .tile-1:nth-child(2n-1) {\n    background-color: rgba(0, 0, 0, 0.25);\n}\n\n#numbers, #letters {\n    background-color: red;\n    position: absolute;\n}\n\n#knight {\n    color: red;\n    font-size: 3rem;\n}\n\n.type {\n    margin-bottom: 1rem;\n    text-align: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/reset.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/reset.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}`, "",{"version":3,"sources":["webpack://./src/reset.css"],"names":[],"mappings":"AAAA;;CAEC;AACD;EACE,sBAAsB;AACxB;AACA;;CAEC;AACD;EACE,SAAS;AACX;AACA;;CAEC;AACD;EACE,YAAY;AACd;AACA;;;;CAIC;AACD;EACE,gBAAgB;EAChB,mCAAmC;AACrC;AACA;;CAEC;AACD;EACE,cAAc;EACd,eAAe;AACjB;AACA;;CAEC;AACD;EACE,aAAa;AACf;AACA;;CAEC;AACD;EACE,yBAAyB;AAC3B;AACA;;CAEC;AACD;EACE,kBAAkB;AACpB","sourcesContent":["/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n/*\n  2. Remove default margin\n*/\n* {\n  margin: 0;\n}\n/*\n  3. Allow percentage-based heights in the application\n*/\nhtml, body {\n  height: 100%;\n}\n/*\n  Typographic tweaks!\n  4. Add accessible line-height\n  5. Improve text rendering\n*/\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n/*\n  6. Improve media defaults\n*/\nimg, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n}\n/*\n  7. Remove built-in form typography styles\n*/\ninput, button, textarea, select {\n  font: inherit;\n}\n/*\n  8. Avoid text overflows\n*/\np, h1, h2, h3, h4, h5, h6 {\n  overflow-wrap: break-word;\n}\n/*\n  9. Create a root stacking context\n*/\n#root, #__next {\n  isolation: isolate;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/bindButtons.js":
/*!****************************!*\
  !*** ./src/bindButtons.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindButtons: () => (/* binding */ bindButtons)
/* harmony export */ });
/* harmony import */ var _placeKnight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./placeKnight */ "./src/placeKnight.js");
/* harmony import */ var _findPath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./findPath */ "./src/findPath.js");
/* harmony import */ var _initBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initBoard */ "./src/initBoard.js");




const bindButtons = () => {
  document.querySelector("#find").addEventListener("click", function () {
    (0,_initBoard__WEBPACK_IMPORTED_MODULE_2__.clearBoard)();
    let start = document.querySelector("#start").value;
    let finish = document.querySelector("#finish").value;

    document.querySelector(`#${start}`).classList.add("highlighted");
    document.querySelector(`#${finish}`).classList.add("highlighted");

    (0,_placeKnight__WEBPACK_IMPORTED_MODULE_0__.placeKnight)(start);
    let result = (0,_findPath__WEBPACK_IMPORTED_MODULE_1__.findPath)(start, finish);
    result.forEach((r, i) => {
      if (i > 0) document.querySelector(`#${r}`).innerHTML = i;
    });
    (0,_initBoard__WEBPACK_IMPORTED_MODULE_2__.setScore)(result.length - 1);
  });

  document.querySelector("#random").addEventListener("click", function () {
    (0,_initBoard__WEBPACK_IMPORTED_MODULE_2__.clearBoard)();
    let columns = [..."ABCDEFGH"];
    let rows = [..."87654321"];
    let RC1 = columns[Math.floor(columns.length * Math.random())];
    let RR1 = rows[Math.floor(rows.length * Math.random())];
    let RC2 = columns[Math.floor(columns.length * Math.random())];
    let RR2 = rows[Math.floor(rows.length * Math.random())];
    document.querySelector("#start").value = `${RC1}-${RR1}`;
    document.querySelector("#finish").value = `${RC2}-${RR2}`;

    document.querySelector(`#${RC1}-${RR1}`).classList.add("highlighted");
    document.querySelector(`#${RC2}-${RR2}`).classList.add("highlighted");

    (0,_placeKnight__WEBPACK_IMPORTED_MODULE_0__.placeKnight)(`${RC1}-${RR1}`);
    let result = (0,_findPath__WEBPACK_IMPORTED_MODULE_1__.findPath)(`${RC1}-${RR1}`, `${RC2}-${RR2}`);
    result.forEach((r, i) => {
      if (i > 0) document.querySelector(`#${r}`).innerHTML = i;
    });
    (0,_initBoard__WEBPACK_IMPORTED_MODULE_2__.setScore)(result.length - 1);
  });
};


/***/ }),

/***/ "./src/findPath.js":
/*!*************************!*\
  !*** ./src/findPath.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findPath: () => (/* binding */ findPath)
/* harmony export */ });
/* harmony import */ var _possibleMoves__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./possibleMoves */ "./src/possibleMoves.js");


const isWinner = (arr, item) => arr.find((line) => line.includes(item));

const findPath = (start, goal, moves = []) => {
  if (moves.length == 0) {
    return findPath(start, goal, (0,_possibleMoves__WEBPACK_IMPORTED_MODULE_0__.possibleMoves)(start));
  } else {
    return isWinner(moves, goal) != undefined ? isWinner(moves, goal) : findPath(start, goal, (0,_possibleMoves__WEBPACK_IMPORTED_MODULE_0__.possibleMoves)(moves));
  }
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.css */ "./src/reset.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _initBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initBoard */ "./src/initBoard.js");
/* harmony import */ var _bindButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bindButtons */ "./src/bindButtons.js");






(0,_initBoard__WEBPACK_IMPORTED_MODULE_2__.initBoard)();
(0,_bindButtons__WEBPACK_IMPORTED_MODULE_3__.bindButtons)();


/***/ }),

/***/ "./src/initBoard.js":
/*!**************************!*\
  !*** ./src/initBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearBoard: () => (/* binding */ clearBoard),
/* harmony export */   initBoard: () => (/* binding */ initBoard),
/* harmony export */   setScore: () => (/* binding */ setScore)
/* harmony export */ });
const initBoard = () => {
  let helperLeft = document.querySelector("#helper-left");
  let helperBottom = document.querySelector("#helper-bottom");
  let board = document.querySelector("#board");

  board.style.width = `${Math.min(document.body.clientWidth, document.body.clientHeight) * 0.65}px`;
  board.style.height = `${Math.min(document.body.clientWidth, document.body.clientHeight) * 0.65}px`;
  helperLeft.style.height = `${Math.min(document.body.clientWidth, document.body.clientHeight) * 0.65}px`;
  helperBottom.style.width = `${Math.min(document.body.clientWidth, document.body.clientHeight) * 0.65}px`;

  [..."87654321"].forEach((row, rowIndex) => {
    let helper = document.createElement("div");
    helper.classList = `left-${row}`;
    helper.innerHTML = `${row}`;
    helperLeft.append(helper);

    [..."ABCDEFGH"].forEach((column, columnIndex) => {
      let tile = document.createElement("div");
      tile.id = `${column}-${row}`;
      tile.classList = `tile-${row}`;
      board.appendChild(tile);
    });
  });

  [..."ABCDEFGH"].forEach((column) => {
    let helper = document.createElement("div");
    helper.classList = `bottom-${column}`;
    helper.innerHTML = `${column}`;
    helperBottom.append(helper);
  });
};

const clearBoard = () => {
  document.querySelectorAll("#board > div").forEach((d) => {
    d.innerHTML = "";
    d.classList.remove("highlighted");
  });
};

const setScore = (score) => {
  document.querySelector("#score").innerHTML = `Moves: ${score}`;
};


/***/ }),

/***/ "./src/placeKnight.js":
/*!****************************!*\
  !*** ./src/placeKnight.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeKnight: () => (/* binding */ placeKnight)
/* harmony export */ });
const placeKnight = (tile) => {
  let knight = document.createElement("div");
  knight.id = "knight";
  knight.innerHTML = "K";
  document.querySelector(`#${tile}`).appendChild(knight);
};


/***/ }),

/***/ "./src/possibleMoves.js":
/*!******************************!*\
  !*** ./src/possibleMoves.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   possibleMoves: () => (/* binding */ possibleMoves)
/* harmony export */ });
const possibleMoves = (tile) => {
  let columns = [..."ABCDEFGH"];
  let rows = [..."87654321"];
  if (Array.isArray(tile)) {
    let ALL = [];
    tile.forEach((t) => {
      let letter = t[t.length - 1][0];
      let number = t[t.length - 1][2];
      let moves = [];
      moves.push(`${columns[columns.indexOf(letter) - 1]}-${rows[rows.indexOf(number) - 2]}`);
      moves.push(`${columns[columns.indexOf(letter) - 2]}-${rows[rows.indexOf(number) - 1]}`);
      moves.push(`${columns[columns.indexOf(letter) + 1]}-${rows[rows.indexOf(number) - 2]}`);
      moves.push(`${columns[columns.indexOf(letter) + 2]}-${rows[rows.indexOf(number) - 1]}`);
      moves.push(`${columns[columns.indexOf(letter) - 1]}-${rows[rows.indexOf(number) + 2]}`);
      moves.push(`${columns[columns.indexOf(letter) - 2]}-${rows[rows.indexOf(number) + 1]}`);
      moves.push(`${columns[columns.indexOf(letter) + 1]}-${rows[rows.indexOf(number) + 2]}`);
      moves.push(`${columns[columns.indexOf(letter) + 2]}-${rows[rows.indexOf(number) + 1]}`);
      moves
        .filter((item) => item.includes("undefined") == false)
        .forEach((move) => {
          ALL.push(t.concat(move));
        });
    });
    return ALL;
  } else {
    let letter = tile[0];
    let number = tile[2];
    let moves = [];
    moves.push(`${columns[columns.indexOf(letter) - 1]}-${rows[rows.indexOf(number) - 2]}`);
    moves.push(`${columns[columns.indexOf(letter) - 2]}-${rows[rows.indexOf(number) - 1]}`);
    moves.push(`${columns[columns.indexOf(letter) + 1]}-${rows[rows.indexOf(number) - 2]}`);
    moves.push(`${columns[columns.indexOf(letter) + 2]}-${rows[rows.indexOf(number) - 1]}`);
    moves.push(`${columns[columns.indexOf(letter) - 1]}-${rows[rows.indexOf(number) + 2]}`);
    moves.push(`${columns[columns.indexOf(letter) - 2]}-${rows[rows.indexOf(number) + 1]}`);
    moves.push(`${columns[columns.indexOf(letter) + 1]}-${rows[rows.indexOf(number) + 2]}`);
    moves.push(`${columns[columns.indexOf(letter) + 2]}-${rows[rows.indexOf(number) + 1]}`);
    let returnArray = [];
    moves
      .filter((item) => item.includes("undefined") == false)
      .filter((item) => item.includes(tile[0]) == false)
      .forEach((move) => {
        returnArray.push([tile].concat(move));
      });

    return returnArray;
  }
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRywrQkFBK0I7QUFDekYsa0JBQWtCLHFDQUFxQyxHQUFHLCtCQUErQjtBQUN6RixrQkFBa0IscUNBQXFDLEdBQUcsK0JBQStCO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9yZXNldC5jc3M/ZWRlMCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvYmluZEJ1dHRvbnMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9maW5kUGF0aC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvaW5pdEJvYXJkLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvcGxhY2VLbmlnaHQuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9wb3NzaWJsZU1vdmVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAzMDA7NTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XG59XG5cblxuI2JvYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LCAxZnIpO1xuICAgIGJvcmRlcjogMC4yNXJlbSBzb2xpZCBibGFjaztcbn1cblxuI2JvYXJkID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXI6IDAuMTI1cmVtIHNvbGlkIGJsYWNrO1xufVxuXG4uaGlnaGxpZ2h0ZWQge1xuICAgIGJvcmRlcjogMC4yNXJlbSBzb2xpZCByZWQgIWltcG9ydGFudDtcbn1cblxuI2JvcmRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDAgMCA0cmVtIDRyZW07XG59XG5cbiNoZWxwZXItbGVmdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA0cmVtO1xuICAgIGxlZnQ6IDA7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LCAxZnIpO1xufVxuXG4jaGVscGVyLWJvdHRvbSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogNHJlbTtcbiAgICBsZWZ0OiBib3R0b207XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxZnIpO1xufVxuXG4jaGVscGVyLWxlZnQgPiBkaXYsICNoZWxwZXItYm90dG9tID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbi50aWxlLTg6bnRoLWNoaWxkKDJuKSwgLnRpbGUtNjpudGgtY2hpbGQoMm4pLCAudGlsZS00Om50aC1jaGlsZCgybiksIC50aWxlLTI6bnRoLWNoaWxkKDJuKSwgLnRpbGUtNzpudGgtY2hpbGQoMm4tMSksIC50aWxlLTU6bnRoLWNoaWxkKDJuLTEpLCAudGlsZS0zOm50aC1jaGlsZCgybi0xKSwgLnRpbGUtMTpudGgtY2hpbGQoMm4tMSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbiNudW1iZXJzLCAjbGV0dGVycyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuI2tuaWdodCB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDNyZW07XG59XG5cbi50eXBlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZ0NBQWdDO0FBQ3BDOzs7QUFHQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQywyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsT0FBTztJQUNQLGFBQWE7SUFDYixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRAMzAwOzUwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuI2JvYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOCwgMWZyKTtcXG4gICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jYm9hcmQgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyOiAwLjEyNXJlbSBzb2xpZCBibGFjaztcXG59XFxuXFxuLmhpZ2hsaWdodGVkIHtcXG4gICAgYm9yZGVyOiAwLjI1cmVtIHNvbGlkIHJlZCAhaW1wb3J0YW50O1xcbn1cXG5cXG4jYm9yZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiAwIDAgNHJlbSA0cmVtO1xcbn1cXG5cXG4jaGVscGVyLWxlZnQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LCAxZnIpO1xcbn1cXG5cXG4jaGVscGVyLWJvdHRvbSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBsZWZ0OiBib3R0b207XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDFmcik7XFxufVxcblxcbiNoZWxwZXItbGVmdCA+IGRpdiwgI2hlbHBlci1ib3R0b20gPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4udGlsZS04Om50aC1jaGlsZCgybiksIC50aWxlLTY6bnRoLWNoaWxkKDJuKSwgLnRpbGUtNDpudGgtY2hpbGQoMm4pLCAudGlsZS0yOm50aC1jaGlsZCgybiksIC50aWxlLTc6bnRoLWNoaWxkKDJuLTEpLCAudGlsZS01Om50aC1jaGlsZCgybi0xKSwgLnRpbGUtMzpudGgtY2hpbGQoMm4tMSksIC50aWxlLTE6bnRoLWNoaWxkKDJuLTEpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG59XFxuXFxuI251bWJlcnMsICNsZXR0ZXJzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbiNrbmlnaHQge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi50eXBlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qXG4gIDEuIFVzZSBhIG1vcmUtaW50dWl0aXZlIGJveC1zaXppbmcgbW9kZWwuXG4qL1xuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4vKlxuICAyLiBSZW1vdmUgZGVmYXVsdCBtYXJnaW5cbiovXG4qIHtcbiAgbWFyZ2luOiAwO1xufVxuLypcbiAgMy4gQWxsb3cgcGVyY2VudGFnZS1iYXNlZCBoZWlnaHRzIGluIHRoZSBhcHBsaWNhdGlvblxuKi9cbmh0bWwsIGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4vKlxuICBUeXBvZ3JhcGhpYyB0d2Vha3MhXG4gIDQuIEFkZCBhY2Nlc3NpYmxlIGxpbmUtaGVpZ2h0XG4gIDUuIEltcHJvdmUgdGV4dCByZW5kZXJpbmdcbiovXG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG4vKlxuICA2LiBJbXByb3ZlIG1lZGlhIGRlZmF1bHRzXG4qL1xuaW1nLCBwaWN0dXJlLCB2aWRlbywgY2FudmFzLCBzdmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLypcbiAgNy4gUmVtb3ZlIGJ1aWx0LWluIGZvcm0gdHlwb2dyYXBoeSBzdHlsZXNcbiovXG5pbnB1dCwgYnV0dG9uLCB0ZXh0YXJlYSwgc2VsZWN0IHtcbiAgZm9udDogaW5oZXJpdDtcbn1cbi8qXG4gIDguIEF2b2lkIHRleHQgb3ZlcmZsb3dzXG4qL1xucCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG59XG4vKlxuICA5LiBDcmVhdGUgYSByb290IHN0YWNraW5nIGNvbnRleHRcbiovXG4jcm9vdCwgI19fbmV4dCB7XG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0NBRUM7QUFDRDtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBOztDQUVDO0FBQ0Q7RUFDRSxTQUFTO0FBQ1g7QUFDQTs7Q0FFQztBQUNEO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7Ozs7Q0FJQztBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1DQUFtQztBQUNyQztBQUNBOztDQUVDO0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBOztDQUVDO0FBQ0Q7RUFDRSxhQUFhO0FBQ2Y7QUFDQTs7Q0FFQztBQUNEO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7O0NBRUM7QUFDRDtFQUNFLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlxcbiAgMS4gVXNlIGEgbW9yZS1pbnR1aXRpdmUgYm94LXNpemluZyBtb2RlbC5cXG4qL1xcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLypcXG4gIDIuIFJlbW92ZSBkZWZhdWx0IG1hcmdpblxcbiovXFxuKiB7XFxuICBtYXJnaW46IDA7XFxufVxcbi8qXFxuICAzLiBBbGxvdyBwZXJjZW50YWdlLWJhc2VkIGhlaWdodHMgaW4gdGhlIGFwcGxpY2F0aW9uXFxuKi9cXG5odG1sLCBib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLypcXG4gIFR5cG9ncmFwaGljIHR3ZWFrcyFcXG4gIDQuIEFkZCBhY2Nlc3NpYmxlIGxpbmUtaGVpZ2h0XFxuICA1LiBJbXByb3ZlIHRleHQgcmVuZGVyaW5nXFxuKi9cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuLypcXG4gIDYuIEltcHJvdmUgbWVkaWEgZGVmYXVsdHNcXG4qL1xcbmltZywgcGljdHVyZSwgdmlkZW8sIGNhbnZhcywgc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG4vKlxcbiAgNy4gUmVtb3ZlIGJ1aWx0LWluIGZvcm0gdHlwb2dyYXBoeSBzdHlsZXNcXG4qL1xcbmlucHV0LCBidXR0b24sIHRleHRhcmVhLCBzZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuLypcXG4gIDguIEF2b2lkIHRleHQgb3ZlcmZsb3dzXFxuKi9cXG5wLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcbi8qXFxuICA5LiBDcmVhdGUgYSByb290IHN0YWNraW5nIGNvbnRleHRcXG4qL1xcbiNyb290LCAjX19uZXh0IHtcXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHBsYWNlS25pZ2h0IH0gZnJvbSBcIi4vcGxhY2VLbmlnaHRcIjtcbmltcG9ydCB7IGZpbmRQYXRoIH0gZnJvbSBcIi4vZmluZFBhdGhcIjtcbmltcG9ydCB7IGluaXRCb2FyZCwgY2xlYXJCb2FyZCwgc2V0U2NvcmUgfSBmcm9tIFwiLi9pbml0Qm9hcmRcIjtcblxuZXhwb3J0IGNvbnN0IGJpbmRCdXR0b25zID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZpbmRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjbGVhckJvYXJkKCk7XG4gICAgbGV0IHN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGFydFwiKS52YWx1ZTtcbiAgICBsZXQgZmluaXNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmaW5pc2hcIikudmFsdWU7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtzdGFydH1gKS5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0ZWRcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZmluaXNofWApLmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRlZFwiKTtcblxuICAgIHBsYWNlS25pZ2h0KHN0YXJ0KTtcbiAgICBsZXQgcmVzdWx0ID0gZmluZFBhdGgoc3RhcnQsIGZpbmlzaCk7XG4gICAgcmVzdWx0LmZvckVhY2goKHIsIGkpID0+IHtcbiAgICAgIGlmIChpID4gMCkgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7cn1gKS5pbm5lckhUTUwgPSBpO1xuICAgIH0pO1xuICAgIHNldFNjb3JlKHJlc3VsdC5sZW5ndGggLSAxKTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyYW5kb21cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjbGVhckJvYXJkKCk7XG4gICAgbGV0IGNvbHVtbnMgPSBbLi4uXCJBQkNERUZHSFwiXTtcbiAgICBsZXQgcm93cyA9IFsuLi5cIjg3NjU0MzIxXCJdO1xuICAgIGxldCBSQzEgPSBjb2x1bW5zW01hdGguZmxvb3IoY29sdW1ucy5sZW5ndGggKiBNYXRoLnJhbmRvbSgpKV07XG4gICAgbGV0IFJSMSA9IHJvd3NbTWF0aC5mbG9vcihyb3dzLmxlbmd0aCAqIE1hdGgucmFuZG9tKCkpXTtcbiAgICBsZXQgUkMyID0gY29sdW1uc1tNYXRoLmZsb29yKGNvbHVtbnMubGVuZ3RoICogTWF0aC5yYW5kb20oKSldO1xuICAgIGxldCBSUjIgPSByb3dzW01hdGguZmxvb3Iocm93cy5sZW5ndGggKiBNYXRoLnJhbmRvbSgpKV07XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGFydFwiKS52YWx1ZSA9IGAke1JDMX0tJHtSUjF9YDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZpbmlzaFwiKS52YWx1ZSA9IGAke1JDMn0tJHtSUjJ9YDtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke1JDMX0tJHtSUjF9YCkuY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodGVkXCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke1JDMn0tJHtSUjJ9YCkuY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodGVkXCIpO1xuXG4gICAgcGxhY2VLbmlnaHQoYCR7UkMxfS0ke1JSMX1gKTtcbiAgICBsZXQgcmVzdWx0ID0gZmluZFBhdGgoYCR7UkMxfS0ke1JSMX1gLCBgJHtSQzJ9LSR7UlIyfWApO1xuICAgIHJlc3VsdC5mb3JFYWNoKChyLCBpKSA9PiB7XG4gICAgICBpZiAoaSA+IDApIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3J9YCkuaW5uZXJIVE1MID0gaTtcbiAgICB9KTtcbiAgICBzZXRTY29yZShyZXN1bHQubGVuZ3RoIC0gMSk7XG4gIH0pO1xufTtcbiIsImltcG9ydCB7IHBvc3NpYmxlTW92ZXMgfSBmcm9tIFwiLi9wb3NzaWJsZU1vdmVzXCI7XG5cbmNvbnN0IGlzV2lubmVyID0gKGFyciwgaXRlbSkgPT4gYXJyLmZpbmQoKGxpbmUpID0+IGxpbmUuaW5jbHVkZXMoaXRlbSkpO1xuXG5leHBvcnQgY29uc3QgZmluZFBhdGggPSAoc3RhcnQsIGdvYWwsIG1vdmVzID0gW10pID0+IHtcbiAgaWYgKG1vdmVzLmxlbmd0aCA9PSAwKSB7XG4gICAgcmV0dXJuIGZpbmRQYXRoKHN0YXJ0LCBnb2FsLCBwb3NzaWJsZU1vdmVzKHN0YXJ0KSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGlzV2lubmVyKG1vdmVzLCBnb2FsKSAhPSB1bmRlZmluZWQgPyBpc1dpbm5lcihtb3ZlcywgZ29hbCkgOiBmaW5kUGF0aChzdGFydCwgZ29hbCwgcG9zc2libGVNb3Zlcyhtb3ZlcykpO1xuICB9XG59O1xuIiwiaW1wb3J0IFwiLi9yZXNldC5jc3NcIjtcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cbmltcG9ydCB7IGluaXRCb2FyZCB9IGZyb20gXCIuL2luaXRCb2FyZFwiO1xuaW1wb3J0IHsgYmluZEJ1dHRvbnMgfSBmcm9tIFwiLi9iaW5kQnV0dG9uc1wiO1xuXG5pbml0Qm9hcmQoKTtcbmJpbmRCdXR0b25zKCk7XG4iLCJleHBvcnQgY29uc3QgaW5pdEJvYXJkID0gKCkgPT4ge1xuICBsZXQgaGVscGVyTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVscGVyLWxlZnRcIik7XG4gIGxldCBoZWxwZXJCb3R0b20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlbHBlci1ib3R0b21cIik7XG4gIGxldCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9hcmRcIik7XG5cbiAgYm9hcmQuc3R5bGUud2lkdGggPSBgJHtNYXRoLm1pbihkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCkgKiAwLjY1fXB4YDtcbiAgYm9hcmQuc3R5bGUuaGVpZ2h0ID0gYCR7TWF0aC5taW4oZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQpICogMC42NX1weGA7XG4gIGhlbHBlckxlZnQuc3R5bGUuaGVpZ2h0ID0gYCR7TWF0aC5taW4oZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQpICogMC42NX1weGA7XG4gIGhlbHBlckJvdHRvbS5zdHlsZS53aWR0aCA9IGAke01hdGgubWluKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KSAqIDAuNjV9cHhgO1xuXG4gIFsuLi5cIjg3NjU0MzIxXCJdLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICBsZXQgaGVscGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWxwZXIuY2xhc3NMaXN0ID0gYGxlZnQtJHtyb3d9YDtcbiAgICBoZWxwZXIuaW5uZXJIVE1MID0gYCR7cm93fWA7XG4gICAgaGVscGVyTGVmdC5hcHBlbmQoaGVscGVyKTtcblxuICAgIFsuLi5cIkFCQ0RFRkdIXCJdLmZvckVhY2goKGNvbHVtbiwgY29sdW1uSW5kZXgpID0+IHtcbiAgICAgIGxldCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRpbGUuaWQgPSBgJHtjb2x1bW59LSR7cm93fWA7XG4gICAgICB0aWxlLmNsYXNzTGlzdCA9IGB0aWxlLSR7cm93fWA7XG4gICAgICBib2FyZC5hcHBlbmRDaGlsZCh0aWxlKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgWy4uLlwiQUJDREVGR0hcIl0uZm9yRWFjaCgoY29sdW1uKSA9PiB7XG4gICAgbGV0IGhlbHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVscGVyLmNsYXNzTGlzdCA9IGBib3R0b20tJHtjb2x1bW59YDtcbiAgICBoZWxwZXIuaW5uZXJIVE1MID0gYCR7Y29sdW1ufWA7XG4gICAgaGVscGVyQm90dG9tLmFwcGVuZChoZWxwZXIpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBjbGVhckJvYXJkID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2JvYXJkID4gZGl2XCIpLmZvckVhY2goKGQpID0+IHtcbiAgICBkLmlubmVySFRNTCA9IFwiXCI7XG4gICAgZC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlnaGxpZ2h0ZWRcIik7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldFNjb3JlID0gKHNjb3JlKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2NvcmVcIikuaW5uZXJIVE1MID0gYE1vdmVzOiAke3Njb3JlfWA7XG59O1xuIiwiZXhwb3J0IGNvbnN0IHBsYWNlS25pZ2h0ID0gKHRpbGUpID0+IHtcbiAgbGV0IGtuaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGtuaWdodC5pZCA9IFwia25pZ2h0XCI7XG4gIGtuaWdodC5pbm5lckhUTUwgPSBcIktcIjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGlsZX1gKS5hcHBlbmRDaGlsZChrbmlnaHQpO1xufTtcbiIsImV4cG9ydCBjb25zdCBwb3NzaWJsZU1vdmVzID0gKHRpbGUpID0+IHtcbiAgbGV0IGNvbHVtbnMgPSBbLi4uXCJBQkNERUZHSFwiXTtcbiAgbGV0IHJvd3MgPSBbLi4uXCI4NzY1NDMyMVwiXTtcbiAgaWYgKEFycmF5LmlzQXJyYXkodGlsZSkpIHtcbiAgICBsZXQgQUxMID0gW107XG4gICAgdGlsZS5mb3JFYWNoKCh0KSA9PiB7XG4gICAgICBsZXQgbGV0dGVyID0gdFt0Lmxlbmd0aCAtIDFdWzBdO1xuICAgICAgbGV0IG51bWJlciA9IHRbdC5sZW5ndGggLSAxXVsyXTtcbiAgICAgIGxldCBtb3ZlcyA9IFtdO1xuICAgICAgbW92ZXMucHVzaChgJHtjb2x1bW5zW2NvbHVtbnMuaW5kZXhPZihsZXR0ZXIpIC0gMV19LSR7cm93c1tyb3dzLmluZGV4T2YobnVtYmVyKSAtIDJdfWApO1xuICAgICAgbW92ZXMucHVzaChgJHtjb2x1bW5zW2NvbHVtbnMuaW5kZXhPZihsZXR0ZXIpIC0gMl19LSR7cm93c1tyb3dzLmluZGV4T2YobnVtYmVyKSAtIDFdfWApO1xuICAgICAgbW92ZXMucHVzaChgJHtjb2x1bW5zW2NvbHVtbnMuaW5kZXhPZihsZXR0ZXIpICsgMV19LSR7cm93c1tyb3dzLmluZGV4T2YobnVtYmVyKSAtIDJdfWApO1xuICAgICAgbW92ZXMucHVzaChgJHtjb2x1bW5zW2NvbHVtbnMuaW5kZXhPZihsZXR0ZXIpICsgMl19LSR7cm93c1tyb3dzLmluZGV4T2YobnVtYmVyKSAtIDFdfWApO1xuICAgICAgbW92ZXMucHVzaChgJHtjb2x1bW5zW2NvbHVtbnMuaW5kZXhPZihsZXR0ZXIpIC0gMV19LSR7cm93c1tyb3dzLmluZGV4T2YobnVtYmVyKSArIDJdfWApO1xuICAgICAgbW92ZXMucHVzaChgJHtjb2x1bW5zW2NvbHVtbnMuaW5kZXhPZihsZXR0ZXIpIC0gMl19LSR7cm93c1tyb3dzLmluZGV4T2YobnVtYmVyKSArIDFdfWApO1xuICAgICAgbW92ZXMucHVzaChgJHtjb2x1bW5zW2NvbHVtbnMuaW5kZXhPZihsZXR0ZXIpICsgMV19LSR7cm93c1tyb3dzLmluZGV4T2YobnVtYmVyKSArIDJdfWApO1xuICAgICAgbW92ZXMucHVzaChgJHtjb2x1bW5zW2NvbHVtbnMuaW5kZXhPZihsZXR0ZXIpICsgMl19LSR7cm93c1tyb3dzLmluZGV4T2YobnVtYmVyKSArIDFdfWApO1xuICAgICAgbW92ZXNcbiAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pbmNsdWRlcyhcInVuZGVmaW5lZFwiKSA9PSBmYWxzZSlcbiAgICAgICAgLmZvckVhY2goKG1vdmUpID0+IHtcbiAgICAgICAgICBBTEwucHVzaCh0LmNvbmNhdChtb3ZlKSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBBTEw7XG4gIH0gZWxzZSB7XG4gICAgbGV0IGxldHRlciA9IHRpbGVbMF07XG4gICAgbGV0IG51bWJlciA9IHRpbGVbMl07XG4gICAgbGV0IG1vdmVzID0gW107XG4gICAgbW92ZXMucHVzaChgJHtjb2x1bW5zW2NvbHVtbnMuaW5kZXhPZihsZXR0ZXIpIC0gMV19LSR7cm93c1tyb3dzLmluZGV4T2YobnVtYmVyKSAtIDJdfWApO1xuICAgIG1vdmVzLnB1c2goYCR7Y29sdW1uc1tjb2x1bW5zLmluZGV4T2YobGV0dGVyKSAtIDJdfS0ke3Jvd3Nbcm93cy5pbmRleE9mKG51bWJlcikgLSAxXX1gKTtcbiAgICBtb3Zlcy5wdXNoKGAke2NvbHVtbnNbY29sdW1ucy5pbmRleE9mKGxldHRlcikgKyAxXX0tJHtyb3dzW3Jvd3MuaW5kZXhPZihudW1iZXIpIC0gMl19YCk7XG4gICAgbW92ZXMucHVzaChgJHtjb2x1bW5zW2NvbHVtbnMuaW5kZXhPZihsZXR0ZXIpICsgMl19LSR7cm93c1tyb3dzLmluZGV4T2YobnVtYmVyKSAtIDFdfWApO1xuICAgIG1vdmVzLnB1c2goYCR7Y29sdW1uc1tjb2x1bW5zLmluZGV4T2YobGV0dGVyKSAtIDFdfS0ke3Jvd3Nbcm93cy5pbmRleE9mKG51bWJlcikgKyAyXX1gKTtcbiAgICBtb3Zlcy5wdXNoKGAke2NvbHVtbnNbY29sdW1ucy5pbmRleE9mKGxldHRlcikgLSAyXX0tJHtyb3dzW3Jvd3MuaW5kZXhPZihudW1iZXIpICsgMV19YCk7XG4gICAgbW92ZXMucHVzaChgJHtjb2x1bW5zW2NvbHVtbnMuaW5kZXhPZihsZXR0ZXIpICsgMV19LSR7cm93c1tyb3dzLmluZGV4T2YobnVtYmVyKSArIDJdfWApO1xuICAgIG1vdmVzLnB1c2goYCR7Y29sdW1uc1tjb2x1bW5zLmluZGV4T2YobGV0dGVyKSArIDJdfS0ke3Jvd3Nbcm93cy5pbmRleE9mKG51bWJlcikgKyAxXX1gKTtcbiAgICBsZXQgcmV0dXJuQXJyYXkgPSBbXTtcbiAgICBtb3Zlc1xuICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pbmNsdWRlcyhcInVuZGVmaW5lZFwiKSA9PSBmYWxzZSlcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaW5jbHVkZXModGlsZVswXSkgPT0gZmFsc2UpXG4gICAgICAuZm9yRWFjaCgobW92ZSkgPT4ge1xuICAgICAgICByZXR1cm5BcnJheS5wdXNoKFt0aWxlXS5jb25jYXQobW92ZSkpO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gcmV0dXJuQXJyYXk7XG4gIH1cbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=