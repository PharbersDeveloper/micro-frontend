/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "5a74");
/******/ })
/************************************************************************/
/******/ ({

/***/ "09a2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_option_vue_vue_type_style_index_0_id_0b46f2a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c7d8");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_option_vue_vue_type_style_index_0_id_0b46f2a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_option_vue_vue_type_style_index_0_id_0b46f2a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_option_vue_vue_type_style_index_0_id_0b46f2a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_option_vue_vue_type_style_index_0_id_0b46f2a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "0b9b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_input_vue_vue_type_style_index_0_id_932c7e8e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fe45");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_input_vue_vue_type_style_index_0_id_932c7e8e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_input_vue_vue_type_style_index_0_id_932c7e8e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_input_vue_vue_type_style_index_0_id_932c7e8e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_input_vue_vue_type_style_index_0_id_932c7e8e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "112b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_home_vue_vue_type_style_index_0_id_3c3eb362_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a3da");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_home_vue_vue_type_style_index_0_id_3c3eb362_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_home_vue_vue_type_style_index_0_id_3c3eb362_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_home_vue_vue_type_style_index_0_id_3c3eb362_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_home_vue_vue_type_style_index_0_id_3c3eb362_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "152f":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("f6b3");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("15310511", content, shadowRoot)
};

/***/ }),

/***/ "2438":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("8b68");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("297dbf1c", content, shadowRoot)
};

/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "294e":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("dcea");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("5f56407a", content, shadowRoot)
};

/***/ }),

/***/ "2bbb":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".bp-text[data-v-3682c21f]{height:auto;width:auto;margin-left:8;margin-right:8;margin-top:8;margin-bottom:8;padding-left:8;padding-right:8;padding-top:8;padding-bottom:8;background:transparent;padding:0;color:rgba(9,30,66,.95)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "32ef":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-31632f2e]{box-sizing:border-box}.mr-2[data-v-31632f2e]{margin-right:8px}.mb-2[data-v-31632f2e]{margin-bottom:8px}.mb-5[data-v-31632f2e]{margin-bottom:32px}.ph-H-small[data-v-31632f2e]{font-size:12px;color:#161c39;opacity:.8}.ph-body-small[data-v-31632f2e]{font-size:14px;color:#747789}.bp-modal-form[data-v-31632f2e]{height:100vh;width:100vw;background:rgba(9,30,66,.54);display:flex;flex-direction:column;position:fixed;top:0;right:0;z-index:9999;justify-content:center;align-items:center}.bp-modal-form .bp-modal-submit-success[data-v-31632f2e]{height:392px;width:600px;background:#fff;padding:40px;border-radius:2px;position:relative;display:flex;flex-direction:column}.bp-modal-form .bp-modal-submit-success .close-button-container[data-v-31632f2e]{display:flex;justify-content:flex-end;margin-bottom:32px}.bp-modal-form .bp-modal-submit-success .close-button-container .close-button[data-v-31632f2e]{height:32px;width:32px;background:0 0;border-radius:50%;display:flex;justify-content:center;align-items:center;cursor:pointer;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='34' height='34' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23161C39'%3E%3Cpath d='M16.833.5C7.813.5.5 7.813.5 16.833c0 9.021 7.313 16.334 16.333 16.334 9.021 0 16.334-7.313 16.334-16.334C33.167 7.813 25.854.5 16.833.5zm0 1c8.469 0 15.334 6.865 15.334 15.333 0 8.469-6.865 15.334-15.334 15.334-8.468 0-15.333-6.865-15.333-15.334C1.5 8.365 8.365 1.5 16.833 1.5z' opacity='.2'/%3E%3Cpath d='M22.955 11.64l-4.962 4.963 4.962 4.962-.993.993L17 17.595l-4.962 4.963-.993-.993 4.962-4.962-4.962-4.962.993-.993L17 15.61l4.962-4.962.993.993z' opacity='.6'/%3E%3C/g%3E%3C/svg%3E\") 50%/100% no-repeat}.bp-modal-form .bp-modal-submit-success .bp-modal-submit-content[data-v-31632f2e]{display:flex;flex-direction:column;align-items:center}.bp-modal-form .bp-modal-submit-success .bp-modal-submit-content .submit-success-img[data-v-31632f2e]{height:40px;width:40px;margin-bottom:32px;-o-object-fit:contain;object-fit:contain;background:transparent}.bp-modal-form .bp-modal-submit-success .bp-modal-submit-content .submit-success-text[data-v-31632f2e]{font-size:24px;color:#2d334d;margin-bottom:16px}.bp-modal-form .bp-modal-submit-success .bp-modal-submit-content .submit-feedback-text[data-v-31632f2e]{font-size:16px;color:#747789;margin-bottom:16px}.bp-modal-form .bp-modal-submit-success .form-submit-button-container[data-v-31632f2e]{height:auto;width:auto;background:transparent;position:absolute;right:0;bottom:40px;display:flex}.bp-modal-form .bp-modal-submit-success .form-submit-button-container .button-official-yellow-line-compact[data-v-31632f2e]{height:40px;width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:0 24px;line-height:40px;cursor:pointer;text-align:center;outline:0;background:linear-gradient(45deg,rgba(255,221,77,.5),rgba(255,221,77,.5) 5%,transparent 0,transparent 50%,rgba(255,221,77,.5) 0,rgba(255,221,77,.5) 55%,transparent 0,transparent);background-size:8px 8px;border:none;font-weight:500;font-size:14px;color:#2d334d;border-radius:4px;display:flex;align-items:center}.bp-modal-form .bp-modal-submit-success .form-submit-button-container .button-go[data-v-31632f2e]{height:40px;width:40px;background:#ffdd4d;padding:6px;cursor:pointer;-o-object-fit:cover;object-fit:cover}.bp-modal-form .bp-modal-form-content[data-v-31632f2e]{height:663px;width:600px;background:#fff;padding:40px;border-radius:2px;position:relative;display:flex;flex-direction:column;align-items:flex-start;overflow-x:hidden;overflow-y:scroll}.bp-modal-form .bp-modal-form-content .form-warning-text[data-v-31632f2e]{font-size:12px;color:#fb355e;letter-spacing:0;position:absolute;bottom:-20px}.bp-modal-form .bp-modal-form-content .official-width-default[data-v-31632f2e]{width:100%;display:flex;justify-content:space-between}.bp-modal-form .bp-modal-form-content .official-width-default .contact-us-text[data-v-31632f2e]{font-size:24px;color:#2d334d}.bp-modal-form .bp-modal-form-content .official-width-default .close-button[data-v-31632f2e]{height:32px;width:32px;background:0 0;border-radius:50%;display:flex;justify-content:center;align-items:center;cursor:pointer;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='34' height='34' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23161C39'%3E%3Cpath d='M16.833.5C7.813.5.5 7.813.5 16.833c0 9.021 7.313 16.334 16.333 16.334 9.021 0 16.334-7.313 16.334-16.334C33.167 7.813 25.854.5 16.833.5zm0 1c8.469 0 15.334 6.865 15.334 15.333 0 8.469-6.865 15.334-15.334 15.334-8.468 0-15.333-6.865-15.333-15.334C1.5 8.365 8.365 1.5 16.833 1.5z' opacity='.2'/%3E%3Cpath d='M22.955 11.64l-4.962 4.963 4.962 4.962-.993.993L17 17.595l-4.962 4.963-.993-.993 4.962-4.962-4.962-4.962.993-.993L17 15.61l4.962-4.962.993.993z' opacity='.6'/%3E%3C/g%3E%3C/svg%3E\") 50%/100% no-repeat}.bp-modal-form .bp-modal-form-content .form-input-container[data-v-31632f2e]{position:relative;margin-bottom:32px;display:flex;flex-direction:column}.bp-modal-form .bp-modal-form-content .form-input-container .modalform-name-text[data-v-31632f2e]{font-size:12px;color:#161c39;opacity:.8;margin-bottom:4px;text-align:start}.bp-modal-form .bp-modal-form-content .form-input-container .input-official-form[data-v-31632f2e]{height:40px;width:252px;border:none;border-bottom:1px solid rgba(22,28,57,.1);background:rgba(22,28,57,.01);border-radius:0;font-size:14px;color:#747789}.bp-modal-form .bp-modal-form-content .intention-container[data-v-31632f2e]{display:flex}.bp-modal-form .bp-modal-form-content .intention-container .official-form-tag[data-v-31632f2e],.bp-modal-form .bp-modal-form-content .intention-container .official-form-tag-active[data-v-31632f2e]{border-radius:12px;padding:0 8px;line-height:24px;cursor:pointer}.bp-modal-form .bp-modal-form-content .intention-container .official-form-tag[data-v-31632f2e]{background:#e8e8eb!important;display:flex;align-items:center}.bp-modal-form .bp-modal-form-content .intention-container .official-form-tag-active[data-v-31632f2e]{background:#f5c924!important}.bp-modal-form .bp-modal-form-content .form-textarea[data-v-31632f2e]{margin-bottom:36px;min-height:80px}.bp-modal-form .bp-modal-form-content .form-submit-button-container[data-v-31632f2e]{height:auto;width:100%;background:transparent;right:0;bottom:40px;display:flex;justify-content:flex-end}.bp-modal-form .bp-modal-form-content .form-submit-button-container .button-go[data-v-31632f2e]{height:40px;width:40px;background:#ffdd4d;padding:6px;cursor:pointer}@media screen and (max-width:768px){.bp-modal-form .bp-modal-submit-success[data-v-31632f2e]{width:100%}.bp-modal-form .bp-modal-submit-success .form-submit-button-container[data-v-31632f2e]{position:relative;left:50%;top:0;transform:translateX(-60px)}.bp-modal-form .bp-modal-form-content[data-v-31632f2e]{width:100%;height:70%;padding:24px}.bp-modal-form .bp-modal-form-content .official-width-default[data-v-31632f2e]{flex-wrap:wrap}.bp-modal-form .bp-modal-form-content .form-input-container[data-v-31632f2e],.bp-modal-form .bp-modal-form-content .form-input-container .input-official-form[data-v-31632f2e]{width:100%}.bp-modal-form .bp-modal-form-content .form-submit-button-container[data-v-31632f2e]{justify-content:center}}@media screen and (max-width:480px){.bp-modal-form .bp-modal-form-content[data-v-31632f2e]{height:auto;padding:8px 24px;-webkit-overflow-scrolling:touch}.bp-modal-form .bp-modal-form-content .form-textarea[data-v-31632f2e]{width:100%!important;flex-shrink:0;margin-bottom:5px!important}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "3577":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_icon_line_response_vue_vue_type_style_index_0_id_7f64320e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("152f");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_icon_line_response_vue_vue_type_style_index_0_id_7f64320e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_icon_line_response_vue_vue_type_style_index_0_id_7f64320e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_icon_line_response_vue_vue_type_style_index_0_id_7f64320e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_icon_line_response_vue_vue_type_style_index_0_id_7f64320e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "35d6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesToShadowDOM; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js


function addStylesToShadowDOM (parentId, list, shadowRoot) {
  var styles = listToStyles(parentId, list)
  addStyles(styles, shadowRoot)
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

function addStyles (styles /* Array<StyleObject> */, shadowRoot) {
  const injectedStyles =
    shadowRoot._injectedStyles ||
    (shadowRoot._injectedStyles = {})
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var style = injectedStyles[item.id]
    if (!style) {
      for (var j = 0; j < item.parts.length; j++) {
        addStyle(item.parts[j], shadowRoot)
      }
      injectedStyles[item.id] = true
    }
  }
}

function createStyleElement (shadowRoot) {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  shadowRoot.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */, shadowRoot) {
  var styleElement = createStyleElement(shadowRoot)
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "3e4f":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-0b46f2a4]{box-sizing:border-box}.svg-icon[data-v-0b46f2a4]{width:16px;height:16px}svg[data-v-0b46f2a4]:focus{outline:none}.option-active[data-v-0b46f2a4]{color:#fff!important;background-color:rgba(9,30,66,.71)!important}.option-active .icon path[data-v-0b46f2a4]{fill:#fff}.bp-option[data-v-0b46f2a4]{height:32px;width:100%;margin-left:8;margin-right:8;margin-top:8;margin-bottom:8;padding-left:8;padding-right:8;padding-top:8;padding-bottom:8;background:transparent;color:#344563;display:flex;padding:0 16px;align-items:center}.bp-option[data-v-0b46f2a4]:hover{background-color:#ebecf0!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "3f44":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-dcfdcb2e]{box-sizing:border-box;line-height:1.6}.content-active-panel[data-v-dcfdcb2e]{height:367px;margin-right:8px;box-shadow:0 6px 8px 0 rgba(22,28,57,.15);background:#fff;border-radius:2px;z-index:1;flex-direction:column;cursor:pointer!important}.content-active-panel[data-v-dcfdcb2e],.content-active-panel .active-img[data-v-dcfdcb2e]{width:279px;position:relative;display:flex;align-content:flex-start;align-items:stretch;justify-content:flex-start}.content-active-panel .active-img[data-v-dcfdcb2e]{height:240px;flex-direction:row}.content-active-panel .active-img .active-img-bgc[data-v-dcfdcb2e]{background-size:cover;width:100%;height:100%;border-radius:2px 2px 0 0;z-index:2;-o-object-fit:cover;object-fit:cover;cursor:pointer!important;pointer-events:none}.content-active-panel .active-img .above-data-logo[data-v-dcfdcb2e]{width:72px!important;height:72px!important;border-radius:2px 2px 0 0;z-index:2;-o-object-fit:fill;object-fit:fill;bottom:0;left:32px;position:absolute;background-color:#fff;padding:10px;opacity:.9}.content-active-panel .active-info[data-v-dcfdcb2e]{height:127px;width:auto;position:relative;background:0 0;padding:24px 32px 0}.content-active-panel .active-info[data-v-dcfdcb2e],.content-active-panel .active-info .home-avtive-names[data-v-dcfdcb2e]{display:flex;flex-direction:column;align-content:flex-start;align-items:stretch;justify-content:flex-start}.content-active-panel .active-info .home-avtive-names[data-v-dcfdcb2e]{width:100%;height:42px;margin-bottom:4px}.content-active-panel .active-info .home-avtive-names .active-title[data-v-dcfdcb2e]{width:auto;height:auto;background:0 0;white-space:pre-line;overflow:hidden;-webkit-line-clamp:2;font-size:14px;color:#2d334d;letter-spacing:.35px;font-weight:700;padding:0}.content-active-panel .active-info .home-avtive-names .active-logo[data-v-dcfdcb2e]{display:none;height:auto;width:auto;background:0 0;margin-bottom:8px;color:#454a61;letter-spacing:1px;font-size:12px;padding:0}.content-active-panel .active-info .position-info[data-v-dcfdcb2e]{position:absolute;bottom:30px;height:auto;width:auto;background:0 0;font-size:12px;color:#a2a5b0;padding:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "583e":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".borderNone[data-v-7bf19c70]{border-bottom:0!important}.nav[data-v-7bf19c70]{background:#fff;text-align:center;font-size:14px}.bordernavInverse[data-v-7bf19c70]{border-bottom:1px solid rgba(22,28,57,.12)}.navInverse[data-v-7bf19c70]{background:#666!important;text-align:center;font-size:14px}.bgWhite[data-v-7bf19c70]{background-color:#fff!important}.fixed-nav[data-v-7bf19c70]{background:0 0;top:0;padding:0 100px;position:fixed;align-items:center;z-index:1000;padding:0 16px!important}.fixed-nav[data-v-7bf19c70],.fixed-nav .nav-border[data-v-7bf19c70]{height:80px;width:100%;display:flex;flex-direction:row;justify-content:space-between}.fixed-nav .nav-border[data-v-7bf19c70]{border-bottom:1px solid rgba(22,28,57,.12);align-content:flex-start;align-items:center!important}.fixed-nav .bp-img[data-v-7bf19c70]{-o-object-fit:cover;object-fit:cover;cursor:pointer!important;pointer-events:all}.fixed-nav .response-icon-menu[data-v-7bf19c70]{width:24px;height:24px;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='22' height='22' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 10h20v2H1v-2zm0-7h20v2H1V3zm0 14h20v2H1v-2z' fill='%232D334D' fill-rule='evenodd'/%3E%3C/svg%3E\") 50%/100% no-repeat!important}.fixed-nav .meau-shade[data-v-7bf19c70]{width:100vw!important;height:100vh!important;background:#8b8d9b!important;opacity:.8;position:absolute;top:80px;transform:translateX(-16px);overflow:hidden!important}.fixed-nav .response-menu[data-v-7bf19c70]{position:absolute;top:80px;background-color:#fff;width:100%!important;padding:40px;min-width:375px;left:0;align-items:stretch}.fixed-nav .response-menu[data-v-7bf19c70],.fixed-nav .response-menu .responsee-menu-item[data-v-7bf19c70]{display:flex;flex-direction:column;align-content:flex-start;justify-content:flex-start;height:auto}.fixed-nav .response-menu .responsee-menu-item[data-v-7bf19c70]{align-items:flex-start;margin-bottom:24px;width:auto;background:0 0;padding:0}.fixed-nav .response-menu .ph-H-Small[data-v-7bf19c70]{height:auto;width:auto;background:0 0;margin-bottom:4px;font-size:14px;color:#2d334d;letter-spacing:.35px;font-weight:700;padding:0}.fixed-nav .response-menu .ph-body-xsmall[data-v-7bf19c70]{height:auto;width:auto;background:0 0;font-size:12px;color:#a2a5b0;padding:0;text-align:left}.fixed-nav .response-menu .contact-us[data-v-7bf19c70]{background:#ffdd4d;border-radius:2px;border:none;margin-bottom:24px;line-height:24px}.fixed-nav .response-menu .contact-us[data-v-7bf19c70],.fixed-nav .response-menu .login[data-v-7bf19c70]{width:100%;height:40px;font-size:14px;color:#2d334d;letter-spacing:1px;display:block;text-align:center;padding:0 12px;display:flex;flex-direction:row;align-items:center;cursor:pointer;outline:0;justify-content:center}.fixed-nav .response-menu .login[data-v-7bf19c70]{line-height:40px;background:#fff;border-radius:2px;border:1px solid rgba(22,28,57,.12);line-height:24px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "5a74":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (Object({"NODE_ENV":"production","BASE_URL":"/"}).NEED_CURRENTSCRIPT_POLYFILL) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// CONCATENATED MODULE: ./node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js
const camelizeRE = /-(\w)/g;
const camelize = str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
};

const hyphenateRE = /\B([A-Z])/g;
const hyphenate = str => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
};

function getInitialProps (propsList) {
  const res = {};
  propsList.forEach(key => {
    res[key] = undefined;
  });
  return res
}

function injectHook (options, key, hook) {
  options[key] = [].concat(options[key] || []);
  options[key].unshift(hook);
}

function callHooks (vm, hook) {
  if (vm) {
    const hooks = vm.$options[hook] || [];
    hooks.forEach(hook => {
      hook.call(vm);
    });
  }
}

function createCustomEvent (name, args) {
  return new CustomEvent(name, {
    bubbles: false,
    cancelable: false,
    detail: args
  })
}

const isBoolean = val => /function Boolean/.test(String(val));
const isNumber = val => /function Number/.test(String(val));

function convertAttributeValue (value, name, { type } = {}) {
  if (isBoolean(type)) {
    if (value === 'true' || value === 'false') {
      return value === 'true'
    }
    if (value === '' || value === name || value != null) {
      return true
    }
    return value
  } else if (isNumber(type)) {
    const parsed = parseFloat(value, 10);
    return isNaN(parsed) ? value : parsed
  } else {
    return value
  }
}

function toVNodes (h, children) {
  const res = [];
  for (let i = 0, l = children.length; i < l; i++) {
    res.push(toVNode(h, children[i]));
  }
  return res
}

function toVNode (h, node) {
  if (node.nodeType === 3) {
    return node.data.trim() ? node.data : null
  } else if (node.nodeType === 1) {
    const data = {
      attrs: getAttributes(node),
      domProps: {
        innerHTML: node.innerHTML
      }
    };
    if (data.attrs.slot) {
      data.slot = data.attrs.slot;
      delete data.attrs.slot;
    }
    return h(node.tagName, data)
  } else {
    return null
  }
}

function getAttributes (node) {
  const res = {};
  for (let i = 0, l = node.attributes.length; i < l; i++) {
    const attr = node.attributes[i];
    res[attr.nodeName] = attr.nodeValue;
  }
  return res
}

function wrap (Vue, Component) {
  const isAsync = typeof Component === 'function' && !Component.cid;
  let isInitialized = false;
  let hyphenatedPropsList;
  let camelizedPropsList;
  let camelizedPropsMap;

  function initialize (Component) {
    if (isInitialized) return

    const options = typeof Component === 'function'
      ? Component.options
      : Component;

    // extract props info
    const propsList = Array.isArray(options.props)
      ? options.props
      : Object.keys(options.props || {});
    hyphenatedPropsList = propsList.map(hyphenate);
    camelizedPropsList = propsList.map(camelize);
    const originalPropsAsObject = Array.isArray(options.props) ? {} : options.props || {};
    camelizedPropsMap = camelizedPropsList.reduce((map, key, i) => {
      map[key] = originalPropsAsObject[propsList[i]];
      return map
    }, {});

    // proxy $emit to native DOM events
    injectHook(options, 'beforeCreate', function () {
      const emit = this.$emit;
      this.$emit = (name, ...args) => {
        this.$root.$options.customElement.dispatchEvent(createCustomEvent(name, args));
        return emit.call(this, name, ...args)
      };
    });

    injectHook(options, 'created', function () {
      // sync default props values to wrapper on created
      camelizedPropsList.forEach(key => {
        this.$root.props[key] = this[key];
      });
    });

    // proxy props as Element properties
    camelizedPropsList.forEach(key => {
      Object.defineProperty(CustomElement.prototype, key, {
        get () {
          return this._wrapper.props[key]
        },
        set (newVal) {
          this._wrapper.props[key] = newVal;
        },
        enumerable: false,
        configurable: true
      });
    });

    isInitialized = true;
  }

  function syncAttribute (el, key) {
    const camelized = camelize(key);
    const value = el.hasAttribute(key) ? el.getAttribute(key) : undefined;
    el._wrapper.props[camelized] = convertAttributeValue(
      value,
      key,
      camelizedPropsMap[camelized]
    );
  }

  class CustomElement extends HTMLElement {
    constructor () {
      const self = super();
      self.attachShadow({ mode: 'open' });

      const wrapper = self._wrapper = new Vue({
        name: 'shadow-root',
        customElement: self,
        shadowRoot: self.shadowRoot,
        data () {
          return {
            props: {},
            slotChildren: []
          }
        },
        render (h) {
          return h(Component, {
            ref: 'inner',
            props: this.props
          }, this.slotChildren)
        }
      });

      // Use MutationObserver to react to future attribute & slot content change
      const observer = new MutationObserver(mutations => {
        let hasChildrenChange = false;
        for (let i = 0; i < mutations.length; i++) {
          const m = mutations[i];
          if (isInitialized && m.type === 'attributes' && m.target === self) {
            syncAttribute(self, m.attributeName);
          } else {
            hasChildrenChange = true;
          }
        }
        if (hasChildrenChange) {
          wrapper.slotChildren = Object.freeze(toVNodes(
            wrapper.$createElement,
            self.childNodes
          ));
        }
      });
      observer.observe(self, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true
      });
    }

    get vueComponent () {
      return this._wrapper.$refs.inner
    }

    connectedCallback () {
      const wrapper = this._wrapper;
      if (!wrapper._isMounted) {
        // initialize attributes
        const syncInitialAttributes = () => {
          wrapper.props = getInitialProps(camelizedPropsList);
          hyphenatedPropsList.forEach(key => {
            syncAttribute(this, key);
          });
        };

        if (isInitialized) {
          syncInitialAttributes();
        } else {
          // async & unresolved
          Component().then(resolved => {
            if (resolved.__esModule || resolved[Symbol.toStringTag] === 'Module') {
              resolved = resolved.default;
            }
            initialize(resolved);
            syncInitialAttributes();
          });
        }
        // initialize children
        wrapper.slotChildren = Object.freeze(toVNodes(
          wrapper.$createElement,
          this.childNodes
        ));
        wrapper.$mount();
        this.shadowRoot.appendChild(wrapper.$el);
      } else {
        callHooks(this.vueComponent, 'activated');
      }
    }

    disconnectedCallback () {
      callHooks(this.vueComponent, 'deactivated');
    }
  }

  if (!isAsync) {
    initialize(Component);
  }

  return CustomElement
}

/* harmony default export */ var vue_wc_wrapper = (wrap);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/runtime/api.js
var api = __webpack_require__("24fb");

// EXTERNAL MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js + 1 modules
var addStylesShadow = __webpack_require__("35d6");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2a6b98ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/page/about-us.vue?vue&type=template&id=4bd1c36e&scoped=true&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/page/about-us.vue?vue&type=template&id=4bd1c36e&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/page/about-us.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
/* harmony default export */ var about_usvue_type_script_lang_js_shadow = ({});
// CONCATENATED MODULE: ./src/components/page/about-us.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var page_about_usvue_type_script_lang_js_shadow = (about_usvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/page/about-us.vue?shadow



function injectStyles (context) {
  
  
}

/* normalize component */

var component = normalizeComponent(
  page_about_usvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4bd1c36e",
  null
  ,true
)

/* harmony default export */ var about_usshadow = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2a6b98ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/page/consulting.vue?vue&type=template&id=5518f7e1&scoped=true&shadow
var consultingvue_type_template_id_5518f7e1_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var consultingvue_type_template_id_5518f7e1_scoped_true_shadow_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/page/consulting.vue?vue&type=template&id=5518f7e1&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/page/consulting.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
/* harmony default export */ var consultingvue_type_script_lang_js_shadow = ({});
// CONCATENATED MODULE: ./src/components/page/consulting.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var page_consultingvue_type_script_lang_js_shadow = (consultingvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/page/consulting.vue?shadow



function consultingshadow_injectStyles (context) {
  
  
}

/* normalize component */

var consultingshadow_component = normalizeComponent(
  page_consultingvue_type_script_lang_js_shadow,
  consultingvue_type_template_id_5518f7e1_scoped_true_shadow_render,
  consultingvue_type_template_id_5518f7e1_scoped_true_shadow_staticRenderFns,
  false,
  consultingshadow_injectStyles,
  "5518f7e1",
  null
  ,true
)

/* harmony default export */ var consultingshadow = (consultingshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2a6b98ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/page/home.vue?vue&type=template&id=3c3eb362&scoped=true&shadow
var homevue_type_template_id_3c3eb362_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-container"},[(!_vm.responseMini)?_c('navTop',{on:{"toHome":_vm.toHome}}):_vm._e(),(_vm.responseMini)?_c('navTopRes'):_vm._e(),_c('div',{staticClass:"bp-home"},[_c('div',{staticClass:"truth-content-area"},[_c('div',{staticClass:"title"},[_c('bpText',{staticClass:"ph-H-Display"},[_vm._v(_vm._s(_vm.translation_data.truthTitle))]),_c('bpText',{staticClass:"ph-body-medium"},[_vm._v(_vm._s(_vm.translation_data.truthDes))])],1),_c('bpImg',{staticClass:"home-header-img",attrs:{"src":_vm.src}})],1),_c('div',{staticClass:"content-active-area"},[_vm._m(0),_c('bpText',{staticClass:"active-text"},[_vm._v(_vm._s(_vm.translation_data.activeEvents))]),_vm._l((_vm.activeArr),function(card){return _c('bpCardActive',{key:card.title,attrs:{"bgImg":card.bgImg,"logoImg":card.logoImg,"title":card.title,"date":card.date,"city":card.city,"logoText":card.logoText}})}),_c('div',{staticClass:"content-active-review-more-button"},[_c('div',{staticClass:"show-more-button-container"},[_c('bpButton',{staticClass:"button-official-gray-line",attrs:{"text":_vm.translation_data.moreActivity}}),_c('bpImg',{staticClass:"active-button-go",attrs:{"src":_vm.buttonGo}})],1)]),_c('div',{staticClass:"content-active-bg-yellow"}),_c('div',{staticClass:"content-active-bg-line-right"})],2),_c('div',{staticClass:"report-download-container"},[_c('div',{staticClass:"report-download"},[_c('bpImg',{staticClass:"report-download-left-corner",attrs:{"src":_vm.reportLeftDown}}),_c('bpImg',{staticClass:"report-download-right-corner",attrs:{"src":_vm.reportRightDown}}),_c('div',{staticClass:"report-download-img-container"},[_c('bpImg',{staticClass:"report-down-img",attrs:{"src":_vm.reportDownImg}}),_c('div',{staticClass:"report-down-img-mask"})],1),_c('div',{staticClass:"report-download-info"},[_c('div',{staticClass:"report-right-head"},[_c('bpText',{staticClass:"ph-H-small-theme"},[_vm._v(_vm._s(_vm.translation_data.reportThemeSmall))]),_c('bpText',{staticClass:"ph-body-small"},[_vm._v(_vm._s(_vm.translation_data.reportBodySmall))])],1),_c('div',{staticClass:"report-right-center"},[_c('bpText',{staticClass:"ph-H-large-title"},[_vm._v(_vm._s(_vm.translation_data.reportLargeTitle))]),_c('bpText',{staticClass:"pb-body-small-tertiary"},[_vm._v(_vm._s(_vm.translation_data.reportTertiary))])],1),_c('div',{staticClass:"show-more-button-container"},[_c('bpButton',{staticClass:"report-down-button",attrs:{"text":_vm.translation_data.reportButton}}),_c('div',{staticClass:"more-reports-button"},[_c('div',{staticClass:"more-reports"},[_c('bpText',[_vm._v(_vm._s(_vm.translation_data.moreReportsText))]),_c('bpImg',{staticClass:"more-reports-img",attrs:{"src":_vm.showMoreButtonGo}})],1)])],1)])],1)]),_c('div',{staticClass:"data-show"},[_c('bpImg',{staticClass:"report-connect-img",attrs:{"src":_vm.reportConnectImg}}),_c('bpText',{staticClass:"home-about-us-peoples"},[_vm._v(_vm._s(_vm.translation_data.dataShowAboutUs))]),_c('bpText',{staticClass:"ph-H-xLarge"},[_vm._v(_vm._s(_vm.translation_data.dataShowTitle))]),_c('div',{staticClass:"show-more-button-container"},[_c('bpButton',{staticClass:"button-official-yellow-line-compact",attrs:{"text":_vm.translation_data.showMoreButton}}),_c('bpImg',{staticClass:"show-more-button-go",attrs:{"src":_vm.showMoreButtonGo}})],1),_c('div',{staticClass:"data-show-text-part"},[_c('bpText',{staticClass:"ph-body-medium_brand"},[_vm._v(_vm._s(_vm.translation_data.dataTextPart1))]),_c('div',{staticClass:"home-data-value-text-line"}),_c('bpText',{staticClass:"ph-body-medium_brand"},[_vm._v(_vm._s(_vm.translation_data.dataTextPart2))]),_c('div',{staticClass:"home-data-value-text-line"}),_c('bpText',{staticClass:"ph-body-medium_brand"},[_vm._v(_vm._s(_vm.translation_data.dataTextPart3))])],1),_c('bpImg',{staticClass:"data-show-img",attrs:{"src":_vm.dataShowImg}})],1),_c('div',{staticClass:"max-show"},[_c('div',{staticClass:"max-show-left"},[_c('div',{staticClass:"max-show-left-text-line"}),_c('div',{staticClass:"max-show-left-text-row-1"},[_c('bpText',{staticClass:"ph-H-xLarge"},[_vm._v(_vm._s(_vm.translation_data.maxTitle))]),_c('bpText',{staticClass:"ph-body-xsmall-tertiary"},[_vm._v(_vm._s(_vm.translation_data.maxTitleDes))])],1),_c('bpText',{staticClass:"max-text-center"},[_vm._v(_vm._s(_vm.translation_data.maxTextCenter))]),_c('bpText',{staticClass:"max-text-center-brand"},[_vm._v(_vm._s(_vm.translation_data.maxTextCenterBrand))]),_c('div',{staticClass:"max-show-more-button-container"},[_c('bpButton',{staticClass:"button-official-yellow-line-compact",attrs:{"text":_vm.translation_data.showMoreButton}}),_c('bpImg',{staticClass:"show-more-button-go",attrs:{"src":_vm.showMoreButtonGo}})],1)],1),_c('div',{staticClass:"max-show-right-img-container"},[_c('bpImg',{staticClass:"max-show-right-img",attrs:{"src":_vm.responseMini ? _vm.maxRightImg_480 : _vm.maxRightImg}})],1)]),_c('div',{staticClass:"real-world"},[_c('div',{staticClass:"real-world-left-img-container"},[_c('bpImg',{staticClass:"real-world-left-img",attrs:{"src":_vm.realWorldLeftImg}})],1),_c('div',{staticClass:"real-world-right"},[_c('div',{staticClass:"real-world-right-line"}),_c('div',{staticClass:"real-world-right-text-line-1"},[_c('bpText',{staticClass:"ph-H-xLarge"},[_vm._v(_vm._s(_vm.translation_data.realWorldTitle))])],1),_c('bpText',{staticClass:"ph-H-Large"},[_vm._v(_vm._s(_vm.translation_data.realWorldTitleSmall))]),_c('bpText',{staticClass:"ph-H-Large_brand"},[_vm._v(_vm._s(_vm.translation_data.realWorldBrand))]),_c('div',{staticClass:"real-show-more-button-container"},[_c('bpButton',{staticClass:"button-official-yellow-line-compact",attrs:{"text":_vm.translation_data.showMoreButton}}),_c('bpImg',{staticClass:"show-more-button-go",attrs:{"src":_vm.showMoreButtonGo}})],1)],1)]),_c('div',{staticClass:"advisory"},[_c('div',{staticClass:"advisory-left"},[_c('div',{staticClass:"advisory-left-line"}),_c('div',{staticClass:"advisory-left-text-line-1"},[_c('bpText',{staticClass:"ph-H-xLarge"},[_vm._v(_vm._s(_vm.translation_data.advisoryTitle))])],1),_c('bpText',{staticClass:"ph-H-Large"},[_vm._v(_vm._s(_vm.translation_data.advisoryTitleSmall))]),_c('bpText',{staticClass:"ph-H-Large_brand"},[_vm._v(_vm._s(_vm.translation_data.advisoryBrand))]),_c('div',{staticClass:"advisory-show-more-button-container"},[_c('bpButton',{staticClass:"button-official-yellow-line-compact",attrs:{"text":_vm.translation_data.showMoreButton}}),_c('bpImg',{staticClass:"show-more-button-go",attrs:{"src":_vm.showMoreButtonGo}})],1)],1),_c('div',{staticClass:"advisory-right-img-container"},[_c('bpImg',{staticClass:"advisory-right-img",attrs:{"src":_vm.advisoryRightImg}})],1)]),(!_vm.response)?_c('iconLine',{staticClass:"case-icon-contaniner"}):_vm._e(),(_vm.response)?_c('iconLineRes',{staticClass:"case-icon-contaniner-response"}):_vm._e()],1),_c('bp-page-bottom',{on:{"submitClientData":_vm.submitClientData,"toMax":_vm.toMax,"toRW":_vm.toRW,"toConsulting":_vm.toConsulting,"toAboutUs":_vm.toAboutUs}})],1)}
var homevue_type_template_id_3c3eb362_scoped_true_shadow_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"active-line"},[_c('div',{staticClass:"active-yellow-line"})])}]


// CONCATENATED MODULE: ./src/components/page/home.vue?vue&type=template&id=3c3eb362&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2a6b98ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/panel/bp-nav-top.vue?vue&type=template&id=15d6d902&scoped=true&
var bp_nav_topvue_type_template_id_15d6d902_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[_c('div',{staticClass:"fixed-nav",class:[_vm.inverse ? 'navInverse' : 'nav', {'bgWhite': _vm.bgWhite}]},[_c('div',{staticClass:"nav-border",class:[
            _vm.borderNone ? 'borderNone' : 'bordernavInverse',
            {'borderNone': _vm.borderNone},
            {'bgWhite': _vm.bgWhite}]},[_c('img',{staticClass:"bp-img fixed-nav-icon cursor-pointer",attrs:{"src":_vm.imgSrc,"alt":""},on:{"click":_vm.toHome}}),_c('div',{staticClass:"selectMenu"},[_c('bpSelect',{attrs:{"disSelected":true,"src":"https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_drop.svg","choosed_value":_vm.translation_data.choosed_value,"options_data":_vm.translation_data.options_data}}),_c('span',{staticClass:"bp-text",on:{"click":_vm.toAboutUs}},[_vm._v(_vm._s(_vm.translation_data.aboutUs))])],1),_c('div',{staticClass:"navButton"},[_c('bpButton',{staticClass:"concact",attrs:{"text":_vm.translation_data.contactUs},on:{"click":_vm.contactUs}}),_c('bpButton',{staticClass:"login",attrs:{"text":_vm.translation_data.login}})],1)]),(_vm.contactForm)?_c('bp-modal-form',{attrs:{"translation_data":_vm.translation_data},on:{"closeModal":_vm.closeModal,"submitClientData":_vm.submitClientData}}):_vm._e()],1)])}
var bp_nav_topvue_type_template_id_15d6d902_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/panel/bp-nav-top.vue?vue&type=template&id=15d6d902&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2a6b98ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-select.vue?vue&type=template&id=75c233d0&scoped=true&
var bp_selectvue_type_template_id_75c233d0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bp-select",class:[{'select-disabled': _vm.disabled},_vm.classNames]},[_c('div',{staticClass:"bp-select-title",on:{"click":_vm.toggleShow}},[_c('span',[_vm._v(_vm._s(_vm.choosed_text))]),(_vm.src)?_c('img',{class:[_vm.iconClass,'svg-icon'],attrs:{"svg-inline":"","src":_vm.src,"alt":"example"}}):_vm._e()]),_c('ul',{class:_vm.show ? 'bp-option-group' : 'd-none'},_vm._l((_vm.options_data),function(optionData){return _c('bpOption',{key:optionData.text,attrs:{"text":optionData.text,"choosed_value":_vm.choosed_text,"src":optionData.src,"click_event":optionData.click_event},on:{"chooseOption":_vm.changeLanguage},nativeOn:{"click":function($event){return _vm.close($event)}}},[_c('div',{staticClass:"bp-text ph-body-xsmall-tertiary"},[_vm._v(" "+_vm._s(optionData.spanText)+" ")])])}),1)])}
var bp_selectvue_type_template_id_75c233d0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-select.vue?vue&type=template&id=75c233d0&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2a6b98ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-option.vue?vue&type=template&id=0b46f2a4&scoped=true&
var bp_optionvue_type_template_id_0b46f2a4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"bp-option",class:{'option-active': _vm.isChoosed},attrs:{"disabled":_vm.disabled},on:{"click":_vm.chooseOption}},[(_vm.src)?_c('img',{staticClass:"svg-icon",attrs:{"svg-inline":"","src":_vm.src,"alt":""}}):_vm._e(),_c('div',{staticStyle:{"display":"flex","flex-direction":"column"}},[_c('span',[_vm._v(_vm._s(_vm.text))]),_c('div',[_vm._t("default")],2)])])}
var bp_optionvue_type_template_id_0b46f2a4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-option.vue?vue&type=template&id=0b46f2a4&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-option.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var bp_optionvue_type_script_lang_js_ = ({
  data: function () {
    return {
      disabled: false
    };
  },
  props: {
    text: String,
    choosed_value: String,
    click_event: Function,
    src: String
  },
  computed: {
    isChoosed() {
      return this.text === this.choosed_value;
    }

  },
  methods: {
    chooseOption() {
      this.$emit("chooseOption", this.text);
      this.click_event();
    }

  }
});
// CONCATENATED MODULE: ./src/components/bp-option.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_bp_optionvue_type_script_lang_js_ = (bp_optionvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/bp-option.vue



function bp_option_injectStyles (context) {
  
  var style0 = __webpack_require__("09a2")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_option_component = normalizeComponent(
  components_bp_optionvue_type_script_lang_js_,
  bp_optionvue_type_template_id_0b46f2a4_scoped_true_render,
  bp_optionvue_type_template_id_0b46f2a4_scoped_true_staticRenderFns,
  false,
  bp_option_injectStyles,
  "0b46f2a4",
  null
  ,true
)

/* harmony default export */ var bp_option = (bp_option_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-select.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var bp_selectvue_type_script_lang_js_ = ({
  components: {
    bpOption: bp_option
  },
  props: {
    iconClass: {
      type: String,
      default: "svg-icon"
    },
    classNames: String,
    choosed_value: String,
    options_data: Array,
    changeValue: {
      type: Boolean,
      default: false
    },
    src: String,
    disSelected: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      disabled: false,
      show: false,
      choosed_text: this.choosed_value
    };
  },
  methods: {
    toggleShow() {
      if (!this.disabled) {
        this.show = !this.show;
      }
    },

    changeLanguage(value) {
      if (this.choosed_value && !this.disSelected) {
        this.choosed_text = value;
      }
    },

    close() {
      this.show = false;
    }

  },
  watch: {
    choosed_value: function (val) {
      this.choosed_text = val;
    }
  }
});
// CONCATENATED MODULE: ./src/components/bp-select.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_bp_selectvue_type_script_lang_js_ = (bp_selectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/bp-select.vue



function bp_select_injectStyles (context) {
  
  var style0 = __webpack_require__("88df")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_select_component = normalizeComponent(
  components_bp_selectvue_type_script_lang_js_,
  bp_selectvue_type_template_id_75c233d0_scoped_true_render,
  bp_selectvue_type_template_id_75c233d0_scoped_true_staticRenderFns,
  false,
  bp_select_injectStyles,
  "75c233d0",
  null
  ,true
)

/* harmony default export */ var bp_select = (bp_select_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2a6b98ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-button.vue?vue&type=template&id=74775838&scoped=true&
var bp_buttonvue_type_template_id_74775838_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"bp-button",class:[
        _vm.type ? 'button-' + _vm.type : 'button-primary',
        _vm.density ? 'button-density-' + _vm.density : 'button-density-default',
        {'btn-block': _vm.block}
    ],attrs:{"disabled":_vm.buttonDisabled,"type":_vm.type},on:{"click":_vm.handleClick,"dblclick":_vm.handleDBClick}},[(_vm.src)?_c('img',{staticClass:"svg-icon",attrs:{"svg-inline":"","src":_vm.src,"alt":"example"}}):_vm._e(),_vm._v(" "+_vm._s(_vm.text)+" ")])}
var bp_buttonvue_type_template_id_74775838_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-button.vue?vue&type=template&id=74775838&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-button.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var bp_buttonvue_type_script_lang_js_ = ({
  props: {
    text: String,
    type: String,
    // standard, subtle, destructive, warning,
    density: String,
    // comfy, default, compact
    block: Boolean,
    //button是否占满一行
    disabled: Boolean,
    //加了disabled就是disabled
    src: String
  },
  computed: {
    buttonDisabled() {
      return this.disabled;
    }

  },
  methods: {
    handleClick(data) {
      var that = this; // 开启延时器，300ms的间隔区分单击和双击，解决双击时执行两次单击事件

      clearTimeout(that.time);
      that.time = setTimeout(() => {
        // 写单击事件执行的逻辑代码
        // console.log("单击事件")
        this.$emit('click', data);
      }, 300);
    },

    handleDBClick(data) {
      clearTimeout(this.time); // console.log("双击事件")

      this.$emit('dbclick', data);
    }

  }
});
// CONCATENATED MODULE: ./src/components/bp-button.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_bp_buttonvue_type_script_lang_js_ = (bp_buttonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/bp-button.vue



function bp_button_injectStyles (context) {
  
  var style0 = __webpack_require__("b5ec")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_button_component = normalizeComponent(
  components_bp_buttonvue_type_script_lang_js_,
  bp_buttonvue_type_template_id_74775838_scoped_true_render,
  bp_buttonvue_type_template_id_74775838_scoped_true_staticRenderFns,
  false,
  bp_button_injectStyles,
  "74775838",
  null
  ,true
)

/* harmony default export */ var bp_button = (bp_button_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2a6b98ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-select-vue.vue?vue&type=template&id=7fca35cc&scoped=true&
var bp_select_vuevue_type_template_id_7fca35cc_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bp-select",class:[{'select-disabled': _vm.disabled},_vm.classNames]},[_c('div',{staticClass:"bp-select-title",on:{"click":_vm.toggleShow}},[_c('span',[_vm._v(_vm._s(_vm.choosedValue))]),(_vm.src)?_c('img',{class:[_vm.iconClass,'svg-icon'],attrs:{"svg-inline":"","src":_vm.src,"alt":"example"}}):_vm._e()]),_c('ul',{class:_vm.show ? 'bp-option-group' : 'd-none'},[_vm._t("default")],2)])}
var bp_select_vuevue_type_template_id_7fca35cc_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-select-vue.vue?vue&type=template&id=7fca35cc&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-select-vue.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var bp_select_vuevue_type_script_lang_js_ = ({
  props: {
    iconClass: {
      type: String,
      default: "svg-icon"
    },
    classNames: String,
    choosedValue: {
      type: String,
      default: '请选择'
    },
    src: String
  },
  data: function () {
    return {
      disabled: false,
      show: false
    };
  },
  methods: {
    toggleShow() {
      if (!this.disabled) {
        this.show = !this.show;
      }
    }

  },

  mounted() {// document.addEventListener("click", e => {
    //     if(!this.$el.contains(e.target)) {
    //         this.show = false
    //     }
    // })
  }

});
// CONCATENATED MODULE: ./src/components/bp-select-vue.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_bp_select_vuevue_type_script_lang_js_ = (bp_select_vuevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/bp-select-vue.vue



function bp_select_vue_injectStyles (context) {
  
  var style0 = __webpack_require__("5ab1")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_select_vue_component = normalizeComponent(
  components_bp_select_vuevue_type_script_lang_js_,
  bp_select_vuevue_type_template_id_7fca35cc_scoped_true_render,
  bp_select_vuevue_type_template_id_7fca35cc_scoped_true_staticRenderFns,
  false,
  bp_select_vue_injectStyles,
  "7fca35cc",
  null
  ,true
)

/* harmony default export */ var bp_select_vue = (bp_select_vue_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2a6b98ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-option-vue.vue?vue&type=template&id=8fcec036&scoped=true&
var bp_option_vuevue_type_template_id_8fcec036_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"bp-option",class:{'option-active': _vm.isChoosed},attrs:{"disabled":_vm.disabled},on:{"click":_vm.close}},[(_vm.src)?_c('img',{class:[_vm.iconClass, 'svg-icon'],attrs:{"svg-inline":"","src":_vm.src,"alt":""}}):_vm._e(),_c('div',{staticStyle:{"display":"flex","flex-direction":"column"}},[_c('span',[_vm._v(_vm._s(_vm.text))]),_c('div',[_vm._t("default")],2)])])}
var bp_option_vuevue_type_template_id_8fcec036_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-option-vue.vue?vue&type=template&id=8fcec036&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-option-vue.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var bp_option_vuevue_type_script_lang_js_ = ({
  data: function () {
    return {
      disabled: false
    };
  },
  props: {
    text: String,
    choosedValue: String,
    iconClass: {
      default: "svg-icon",
      type: String
    },
    src: String
  },
  computed: {
    isChoosed() {
      return this.text === this.choosedValue;
    }

  },
  methods: {
    close() {
      this.$parent.$data.show = false;
      this.$emit("click", this.text);
    }

  }
});
// CONCATENATED MODULE: ./src/components/bp-option-vue.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_bp_option_vuevue_type_script_lang_js_ = (bp_option_vuevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/bp-option-vue.vue



function bp_option_vue_injectStyles (context) {
  
  var style0 = __webpack_require__("cebd")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_option_vue_component = normalizeComponent(
  components_bp_option_vuevue_type_script_lang_js_,
  bp_option_vuevue_type_template_id_8fcec036_scoped_true_render,
  bp_option_vuevue_type_template_id_8fcec036_scoped_true_staticRenderFns,
  false,
  bp_option_vue_injectStyles,
  "8fcec036",
  null
  ,true
)

/* harmony default export */ var bp_option_vue = (bp_option_vue_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2a6b98ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/panel/bp-modal-form.vue?vue&type=template&id=31632f2e&scoped=true&
var bp_modal_formvue_type_template_id_31632f2e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bp-modal-form"},[(_vm.successSubmit)?_c('div',{staticClass:"bp-modal-submit-success"},[_c('div',{staticClass:"close-button-container"},[_c('div',{staticClass:"close-button",on:{"click":_vm.closeModal}})]),_c('div',{staticClass:"bp-modal-submit-content"},[_c('img',{staticClass:"submit-success-img",attrs:{"src":"https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_success.svg","alt":"success"}}),_c('bp-text',{staticClass:"submit-success-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.submitSuccess))]),_c('bp-text',{staticClass:"submit-feedback-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.submitFeedback))])],1),_c('div',{staticClass:"form-submit-button-container",on:{"click":_vm.closeModal}},[_c('bp-button',{attrs:{"type":"official-yellow-line-compact","density":"compact","text":_vm.translation_data.modalForm.ok}}),_c('img',{staticClass:"button-go",attrs:{"src":"https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_go.svg","alt":"success"}})],1)]):_c('div',{staticClass:"bp-modal-form-content"},[_c('div',{staticClass:"official-width-default mb-5"},[_c('bp-text',{staticClass:"contact-us-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.contactUs))]),_c('div',{staticClass:"close-button",on:{"click":_vm.closeModal}})],1),_c('div',{staticClass:"form-input-container"},[_c('bp-text',{staticClass:"modalform-name-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.name))]),_c('bp-input',{attrs:{"placeholder":"","states":"official-form"},on:{"input":function($event){return _vm.inputEvent($event,'name')}}}),(_vm.nameBlank)?_c('bp-text',{staticClass:"form-warning-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.nameBlank))]):_vm._e()],1),_c('div',{staticClass:"official-width-default"},[_c('div',{staticClass:"form-input-container"},[_c('bp-text',{staticClass:"modalform-name-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.company))]),_c('bp-input',{attrs:{"placeholder":"","states":"official-form"},on:{"input":function($event){return _vm.inputEvent($event,'company')}}}),(_vm.companyBlank)?_c('bp-text',{staticClass:"form-warning-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.companyBlank))]):_vm._e()],1),_c('div',{staticClass:"form-input-container"},[_c('bp-text',{staticClass:"modalform-name-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.department))]),_c('bp-input',{attrs:{"placeholder":"","states":"official-form"},on:{"input":function($event){return _vm.inputEvent($event,'department')}}})],1)]),_c('div',{staticClass:"official-width-default"},[_c('div',{staticClass:"form-input-container"},[_c('bp-text',{staticClass:"modalform-name-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.position))]),_c('bp-input',{attrs:{"placeholder":"","states":"official-form"},on:{"input":function($event){return _vm.inputEvent($event,'position')}}})],1),_c('div',{staticClass:"form-input-container"},[_c('bp-text',{staticClass:"modalform-name-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.email))]),_c('bp-input',{attrs:{"placeholder":"","states":"official-form"},on:{"input":function($event){return _vm.inputEvent($event,'email')}}}),(_vm.emailBlank)?_c('bp-text',{staticClass:"form-warning-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.emailBlank))]):(_vm.emailWaring)?_c('bp-text',{staticClass:"form-warning-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.emailWrong))]):_vm._e()],1)]),_c('bp-text',{staticClass:"ph-H-small mb-2"},[_vm._v(_vm._s(_vm.translation_data.modalForm.intention))]),_c('div',{staticClass:"intention-container mb-2"},[_c('bp-text',{ref:"tag11",class:[_vm.tag1 ? 'official-form-tag-active' : 'official-form-tag', 'ph-body-small', 'mr-2'],on:{"click":function($event){return _vm.toggleTagClass($event, 'tag1')}}},[_vm._v(_vm._s(_vm.translation_data.MAX.max))]),_c('bp-text',{class:[_vm.tag2 ? 'official-form-tag-active' : 'official-form-tag', 'ph-body-small', 'mr-2'],on:{"click":function($event){return _vm.toggleTagClass($event, 'tag2')}}},[_vm._v(_vm._s(_vm.translation_data.consulting.consult))]),_c('bp-text',{class:[_vm.tag3 ? 'official-form-tag-active' : 'official-form-tag', 'ph-body-small', 'mr-2'],on:{"click":function($event){return _vm.toggleTagClass($event, 'tag3')}}},[_vm._v(_vm._s(_vm.translation_data.modalForm.dataService))])],1),_c('bp-textarea',{attrs:{"maxlength":140},on:{"input":_vm.inputTextarea}}),_c('div',{staticClass:"form-submit-button-container",on:{"click":_vm.submit}},[_c('bp-button',{attrs:{"type":"official-yellow-line-compact","density":"compact","text":_vm.translation_data.modalForm.submit}}),_c('img',{staticClass:"button-go",attrs:{"src":"https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_go.svg","alt":"success"}})],1)],1)])}
var bp_modal_formvue_type_template_id_31632f2e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/panel/bp-modal-form.vue?vue&type=template&id=31632f2e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2a6b98ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-text.vue?vue&type=template&id=3682c21f&scoped=true&
var bp_textvue_type_template_id_3682c21f_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"bp-text",attrs:{"title":_vm.title},on:{"click":_vm.click_event}},[_vm._t("default")],2)}
var bp_textvue_type_template_id_3682c21f_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-text.vue?vue&type=template&id=3682c21f&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-text.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var bp_textvue_type_script_lang_js_ = ({
  props: {
    title: String
  },
  methods: {
    click_event(event) {
      this.$emit('click', event);
    }

  }
});
// CONCATENATED MODULE: ./src/components/bp-text.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_bp_textvue_type_script_lang_js_ = (bp_textvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/bp-text.vue



function bp_text_injectStyles (context) {
  
  var style0 = __webpack_require__("95b6")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_text_component = normalizeComponent(
  components_bp_textvue_type_script_lang_js_,
  bp_textvue_type_template_id_3682c21f_scoped_true_render,
  bp_textvue_type_template_id_3682c21f_scoped_true_staticRenderFns,
  false,
  bp_text_injectStyles,
  "3682c21f",
  null
  ,true
)

/* harmony default export */ var bp_text = (bp_text_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2a6b98ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-input.vue?vue&type=template&id=932c7e8e&scoped=true&
var bp_inputvue_type_template_id_932c7e8e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',{ref:"input",staticClass:"bp-input",class:[
        _vm.states ? 'input-' + _vm.states : '',
        _vm.size ? 'input-' + _vm.size : 'input-default'
    ],attrs:{"disabled":_vm.inputDisabled,"placeholder":_vm.placeholder,"type":_vm.type},on:{"input":_vm.handleInput,"focus":_vm.handleFocus,"blur":_vm.handleBlur,"change":_vm.handleChange}})}
var bp_inputvue_type_template_id_932c7e8e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-input.vue?vue&type=template&id=932c7e8e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-input.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var bp_inputvue_type_script_lang_js_ = ({
  name: 'bpInput',
  componentName: 'bpInput',

  data() {
    return {
      hovering: false,
      focused: false,
      isComposing: false
    };
  },

  props: {
    value: [String, Number],
    disabled: Boolean,
    placeholder: {
      type: String,
      default: "test placeholder"
    },
    states: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: "comfy"
    },
    type: String
  },
  computed: {
    inputDisabled() {
      return this.disabled;
    }

  },
  watch: {
    nativeInputValue() {
      this.setNativeInputValue();
    },

    value(val) {
      if (this.validateEvent) {
        this.dispatch('ElFormItem', 'el.form.change', [val]);
      }
    }

  },
  methods: {
    handleBlur(event) {
      this.$emit('blur', event);
    },

    handleFocus(event) {
      this.$emit('focus', event);
    },

    handleChange(event) {
      this.$emit('change', event.target.value);
    },

    handleInput(event) {
      this.$emit('input', event.target.value);
    },

    getInput() {
      return this.$refs.input;
    }

  }
});
// CONCATENATED MODULE: ./src/components/bp-input.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_bp_inputvue_type_script_lang_js_ = (bp_inputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/bp-input.vue



function bp_input_injectStyles (context) {
  
  var style0 = __webpack_require__("0b9b")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_input_component = normalizeComponent(
  components_bp_inputvue_type_script_lang_js_,
  bp_inputvue_type_template_id_932c7e8e_scoped_true_render,
  bp_inputvue_type_template_id_932c7e8e_scoped_true_staticRenderFns,
  false,
  bp_input_injectStyles,
  "932c7e8e",
  null
  ,true
)

/* harmony default export */ var bp_input = (bp_input_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2a6b98ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-textarea.vue?vue&type=template&id=2b34fca9&scoped=true&
var bp_textareavue_type_template_id_2b34fca9_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('textarea',{staticClass:"bp-textarea form-textarea",attrs:{"maxlength":_vm.maxlength},on:{"input":_vm.input_event}})}
var bp_textareavue_type_template_id_2b34fca9_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-textarea.vue?vue&type=template&id=2b34fca9&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-textarea.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var bp_textareavue_type_script_lang_js_ = ({
  props: {
    maxlength: {
      type: Number,
      default: 140
    }
  },
  methods: {
    input_event(event) {
      this.$emit("input", event.target.value);
    }

  }
});
// CONCATENATED MODULE: ./src/components/bp-textarea.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_bp_textareavue_type_script_lang_js_ = (bp_textareavue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/bp-textarea.vue



function bp_textarea_injectStyles (context) {
  
  var style0 = __webpack_require__("edd3")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_textarea_component = normalizeComponent(
  components_bp_textareavue_type_script_lang_js_,
  bp_textareavue_type_template_id_2b34fca9_scoped_true_render,
  bp_textareavue_type_template_id_2b34fca9_scoped_true_staticRenderFns,
  false,
  bp_textarea_injectStyles,
  "2b34fca9",
  null
  ,true
)

/* harmony default export */ var bp_textarea = (bp_textarea_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/panel/bp-modal-form.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var bp_modal_formvue_type_script_lang_js_ = ({
  components: {
    bpText: bp_text,
    bpButton: bp_button,
    bpInput: bp_input,
    bpTextarea: bp_textarea
  },
  data: function () {
    return {
      successSubmit: false,
      name: '',
      company: '',
      department: '',
      position: '',
      email: '',
      nameBlank: false,
      companyBlank: false,
      emailBlank: false,
      emailWaring: false,
      intentionTag: [],
      tag1: false,
      tag2: false,
      tag3: false,
      intention: ''
    };
  },
  props: {
    translation_data: Object
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },

    inputEvent(value, key) {
      this[key] = value;
    },

    toggleTagClass(event, tag) {
      let text = event.target.innerHTML;
      this[tag] = !this[tag];

      if (this[tag] && !this.intentionTag.includes(text)) {
        this.intentionTag.push(text);
      } else if (!this[tag] && this.intentionTag.includes(text)) {
        let index = this.intentionTag.indexOf(text);
        this.intentionTag.splice(index, 1);
      }
    },

    inputTextarea(value) {
      this.intention = value;
    },

    submit() {
      let pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
          name = this.name,
          company = this.company,
          email = this.email,
          intention = this.intention,
          department = this.department,
          position = this.position;

      if (name) {
        this.nameBlank = false;
      } else {
        this.nameBlank = true;
      }

      if (company) {
        this.companyBlank = false;
      } else {
        this.companyBlank = true;
      }

      if (!email) {
        this.emailBlank = true;
      } else if (!pattern.test(email)) {
        this.emailWaring = true;
        this.emailBlank = false;
      } else {
        this.emailWaring = false;
        this.emailBlank = false;
      }

      if (name && company && email && pattern.test(email)) {
        this.successSubmit = true;
        intention = intention + "\nTag:" + this.intentionTag.join(";");
        let value = {
          name,
          company,
          email,
          department,
          position,
          intention
        };
        this.$emit('submitClientData', value);
      }
    }

  }
});
// CONCATENATED MODULE: ./src/components/panel/bp-modal-form.vue?vue&type=script&lang=js&
 /* harmony default export */ var panel_bp_modal_formvue_type_script_lang_js_ = (bp_modal_formvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/panel/bp-modal-form.vue



function bp_modal_form_injectStyles (context) {
  
  var style0 = __webpack_require__("ffd4")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_modal_form_component = normalizeComponent(
  panel_bp_modal_formvue_type_script_lang_js_,
  bp_modal_formvue_type_template_id_31632f2e_scoped_true_render,
  bp_modal_formvue_type_template_id_31632f2e_scoped_true_staticRenderFns,
  false,
  bp_modal_form_injectStyles,
  "31632f2e",
  null
  ,true
)

/* harmony default export */ var bp_modal_form = (bp_modal_form_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/panel/bp-nav-top.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var bp_nav_topvue_type_script_lang_js_ = ({
  created() {
    let curLang = window.localStorage.getItem('lang');
    this.language = curLang;
  },

  mounted() {
    const that = this;

    window.onscroll = () => {
      let top = document.scrollingElement.scrollTop; //触发滚动条

      if (top == 0) {
        //回到页面顶部
        that.bgWhite = false;
        that.borderNone = false;
      } else {
        //不在页面顶部
        that.bgWhite = true;
        that.borderNone = true;
      }
    };

    window.addEventListener('setItemEvent', function (e) {
      that.language = e.newValue;
    });
  },

  components: {
    bpSelect: bp_select,
    bpButton: bp_button,
    bpSelectVue: bp_select_vue,
    bpOptionVue: bp_option_vue,
    bpModalForm: bp_modal_form
  },
  props: {
    inverse: {
      //是否背景透明
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      language: '中文',
      bgWhite: false,
      borderNone: false,
      contactForm: false,
      imgSrc: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_logo_ph_theme.svg",
      translation_basedata: {
        cn: {
          MAX: {
            max: "Max"
          },
          consulting: {
            consult: "循证咨询"
          },
          choosed_value: "产品与服务",
          aboutUs: "关于我们",
          contactUs: "联系我们",
          login: "登录",
          options_data: [{
            text: "MAX",
            spanText: "全息市场监测利器",
            click_event: function () {
              this.$emit('toMax', 'max');
            }
          }, {
            text: "真实数据研究",
            spanText: "来自患者信息的多视角深度挖掘",
            click_event: function () {
              this.$emit('toRW', 'rw');
            }
          }, {
            text: "循证咨询",
            spanText: "多层面精准预测，营销资源配置与优化",
            click_event: function () {
              this.$emit('toConsulting', 'consulting');
            }
          }],
          modalForm: {
            download: "下载报告",
            contactUs: "联系我们",
            name: "如何称呼您",
            nameBlank: "请填写您的姓名",
            company: "您所在的团队",
            companyBlank: "请填写您的团队名称",
            department: "您所在的部门",
            position: "您的职位",
            email: "您的工作邮箱",
            emailBlank: "请填写您的邮箱",
            emailWrong: "邮箱格式有误，请填写正确的邮箱地址",
            intention: "您感兴趣的内容",
            dataService: "数据研究服务",
            submit: "提交",
            'submit&download': "提交并下载",
            submitSuccess: "提交成功",
            submitFeedback: "已收到您的信息，我们将尽快与您联系",
            ok: "好的"
          }
        },
        en: {
          MAX: {
            max: "MAX©"
          },
          consulting: {
            consult: "Evidence-based Consulting"
          },
          choosed_value: "PRODUCTS",
          aboutUs: "COMPANY",
          contactUs: "Contact Us",
          login: "Log in",
          options_data: [{
            text: "MAX©",
            spanText: "Holographic Market Monitoring Tool",
            click_event: function () {
              this.$emit('toMax', 'max');
            }
          }, {
            text: "Real World Research",
            spanText: "Multi-perspective Deep Mining from Patient Information",
            click_event: function () {
              this.$emit('toRW', 'rw');
            }
          }, {
            text: "Evidence-based Consulting",
            spanText: "Multi-level Accurate Prediction Allocating and Optimizing Marketing Resource",
            click_event: function () {
              this.$emit('toConsulting', 'consulting');
            }
          }],
          modalForm: {
            download: "Download Report",
            contactUs: "Contact Us",
            name: "Full Name",
            nameBlank: "Please enter your first and last name.",
            company: "Company",
            companyBlank: "Please enter your company name.",
            department: "Department",
            position: "Job Title",
            email: "Work Email",
            emailBlank: "Please enter your work email.",
            emailWrong: "Please enter a vaild email.",
            intention: "Which one is your interested part?",
            dataService: "Data Service",
            submit: "Submit",
            'submit&download': "Submit and Download",
            submitSuccess: "Submitted successfully",
            submitFeedback: "Information received and we will contact you as soon as possible",
            ok: "OK"
          }
        }
      }
    };
  },
  computed: {
    translation_data: function () {
      if (this.language === '中文') {
        return this.translation_basedata.cn;
      } else if (this.language === 'English') {
        return this.translation_basedata.en;
      }
    }
  },
  methods: {
    contactUs() {
      this.contactForm = true;
    },

    closeModal() {
      this.contactForm = false;
    },

    submitClientData(value) {
      this.$emit('submitClientData', value);
    },

    toAboutUs() {
      this.$emit('toAboutUs', 'about-us');
    },

    toHome() {
      this.$emit('toHome', 'home');
    }

  }
});
// CONCATENATED MODULE: ./src/components/panel/bp-nav-top.vue?vue&type=script&lang=js&
 /* harmony default export */ var panel_bp_nav_topvue_type_script_lang_js_ = (bp_nav_topvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/panel/bp-nav-top.vue



function bp_nav_top_injectStyles (context) {
  
  var style0 = __webpack_require__("e73b")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_nav_top_component = normalizeComponent(
  panel_bp_nav_topvue_type_script_lang_js_,
  bp_nav_topvue_type_template_id_15d6d902_scoped_true_render,
  bp_nav_topvue_type_template_id_15d6d902_scoped_true_staticRenderFns,
  false,
  bp_nav_top_injectStyles,
  "15d6d902",
  null
  ,true
)

/* harmony default export */ var bp_nav_top = (bp_nav_top_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2a6b98ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/panel/bp-icon-line.vue?vue&type=template&id=0ad0c780&scoped=true&
var bp_icon_linevue_type_template_id_0ad0c780_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"case-icon-line"},_vm._l((_vm.imgArr1),function(item){return _c('bpImg',{key:item,staticClass:"case-icon",attrs:{"src":item}})}),1),_c('div',{staticClass:"case-icon-line"},_vm._l((_vm.imgArr2),function(item){return _c('bpImg',{key:item,staticClass:"case-icon",attrs:{"src":item}})}),1),_c('div',{staticClass:"case-icon-line case-icon-line-three"},_vm._l((_vm.imgArr3),function(item){return _c('bpImg',{key:item,staticClass:"case-icon",attrs:{"src":item}})}),1),_c('div',{staticClass:"case-icon-line case-icon-line-three"},_vm._l((_vm.imgArr4),function(item){return _c('bpImg',{key:item,staticClass:"case-icon",attrs:{"src":item}})}),1),_c('div',{staticClass:"case-icon-line case-icon-line-three"},_vm._l((_vm.imgArr5),function(item){return _c('bpImg',{key:item,staticClass:"case-icon",attrs:{"src":item}})}),1)])}
var bp_icon_linevue_type_template_id_0ad0c780_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/panel/bp-icon-line.vue?vue&type=template&id=0ad0c780&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2a6b98ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-img.vue?vue&type=template&id=9222228a&scoped=true&
var bp_imgvue_type_template_id_9222228a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('img',{staticClass:"bp-img",attrs:{"src":_vm.src}})}
var bp_imgvue_type_template_id_9222228a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-img.vue?vue&type=template&id=9222228a&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-img.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var bp_imgvue_type_script_lang_js_ = ({
  props: {
    src: {
      type: String,
      default: "https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/01/0F/ChMkJlbKwvKILghAAAXdSSmnlysAALGvgEMwnEABd1h654.jpg"
    }
  },
  computed: {},
  methods: {}
});
// CONCATENATED MODULE: ./src/components/bp-img.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_bp_imgvue_type_script_lang_js_ = (bp_imgvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/bp-img.vue



function bp_img_injectStyles (context) {
  
  
}

/* normalize component */

var bp_img_component = normalizeComponent(
  components_bp_imgvue_type_script_lang_js_,
  bp_imgvue_type_template_id_9222228a_scoped_true_render,
  bp_imgvue_type_template_id_9222228a_scoped_true_staticRenderFns,
  false,
  bp_img_injectStyles,
  "9222228a",
  null
  ,true
)

/* harmony default export */ var bp_img = (bp_img_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/panel/bp-icon-line.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var bp_icon_linevue_type_script_lang_js_ = ({
  components: {
    bpImg: bp_img
  },
  methods: {},

  data() {
    return {
      imgArr1: ["https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_pfizer_00.png", "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_sanofi_01.png", "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_novartis_02.png", "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_astrazeneca_03.png"],
      imgArr2: ["https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_bayer_04.png", "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_gilead_05.png", "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_bristolmyerssquibb_06.png", "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_amgen_07.png"],
      imgArr3: ["https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_Jessen_08.png", "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_servier_09.png", "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_novo-nordisk_10.png"],
      imgArr4: ["https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_mylan_11.png", "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_astellas_12.png", "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_merck_13.png"],
      imgArr5: ["https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_msd_14.png", "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_lilly_15.png", "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_ucb_16.png"]
    };
  }

});
// CONCATENATED MODULE: ./src/components/panel/bp-icon-line.vue?vue&type=script&lang=js&
 /* harmony default export */ var panel_bp_icon_linevue_type_script_lang_js_ = (bp_icon_linevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/panel/bp-icon-line.vue



function bp_icon_line_injectStyles (context) {
  
  var style0 = __webpack_require__("d3b7")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_icon_line_component = normalizeComponent(
  panel_bp_icon_linevue_type_script_lang_js_,
  bp_icon_linevue_type_template_id_0ad0c780_scoped_true_render,
  bp_icon_linevue_type_template_id_0ad0c780_scoped_true_staticRenderFns,
  false,
  bp_icon_line_injectStyles,
  "0ad0c780",
  null
  ,true
)

/* harmony default export */ var bp_icon_line = (bp_icon_line_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2a6b98ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/panel/bp-icon-line-response.vue?vue&type=template&id=7f64320e&scoped=true&
var bp_icon_line_responsevue_type_template_id_7f64320e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"case-icon-line"},_vm._l((_vm.imgArr),function(item){return _c('bpImg',{key:item,staticClass:"case-icon",attrs:{"src":item}})}),1)])}
var bp_icon_line_responsevue_type_template_id_7f64320e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/panel/bp-icon-line-response.vue?vue&type=template&id=7f64320e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/panel/bp-icon-line-response.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var bp_icon_line_responsevue_type_script_lang_js_ = ({
  components: {
    bpImg: bp_img
  },
  methods: {},

  data() {
    return {
      imgArr: ["https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_pfizer_00.png", "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_sanofi_01.png", "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_novartis_02.png", "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_astrazeneca_03.png", "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_bayer_04.png", "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_gilead_05.png", "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_bristolmyerssquibb_06.png", "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_amgen_07.png", "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_Jessen_08.png", "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_servier_09.png", "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_novo-nordisk_10.png", "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_mylan_11.png", "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_astellas_12.png", "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_merck_13.png", "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_msd_14.png", "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_lilly_15.png", "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/logo_ucb_16.png"]
    };
  }

});
// CONCATENATED MODULE: ./src/components/panel/bp-icon-line-response.vue?vue&type=script&lang=js&
 /* harmony default export */ var panel_bp_icon_line_responsevue_type_script_lang_js_ = (bp_icon_line_responsevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/panel/bp-icon-line-response.vue



function bp_icon_line_response_injectStyles (context) {
  
  var style0 = __webpack_require__("3577")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_icon_line_response_component = normalizeComponent(
  panel_bp_icon_line_responsevue_type_script_lang_js_,
  bp_icon_line_responsevue_type_template_id_7f64320e_scoped_true_render,
  bp_icon_line_responsevue_type_template_id_7f64320e_scoped_true_staticRenderFns,
  false,
  bp_icon_line_response_injectStyles,
  "7f64320e",
  null
  ,true
)

/* harmony default export */ var bp_icon_line_response = (bp_icon_line_response_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2a6b98ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/panel/bp-nav-top-response.vue?vue&type=template&id=7bf19c70&scoped=true&
var bp_nav_top_responsevue_type_template_id_7bf19c70_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fade"}},[_c('div',{staticClass:"vue_container fixed-nav",class:[
        _vm.inverse ? 'navInverse' : 'nav',
        {'bgWhite': _vm.bgWhite}]},[_c('div',{staticClass:"nav-border",class:[
                _vm.borderNone ? 'borderNone' : 'bordernavInverse',
                {'borderNone': _vm.borderNone},
                {'bgWhite': _vm.bgWhite}
            ]},[_c('img',{staticClass:"bp-img fixed-nav-icon cursor-pointer",attrs:{"src":_vm.imgSrc,"alt":""},on:{"click":_vm.toHome}}),_c('div',{staticClass:"response-icon-menu",on:{"click":_vm.clickMenu}}),(_vm.menu)?_c('div',{staticClass:"meau-shade"}):_vm._e(),(_vm.menu)?_c('div',{staticClass:"response-menu"},[_vm._l((_vm.translation_data.options_data),function(item){return _c('div',{key:item.text,staticClass:"responsee-menu-item"},[_c('span',{staticClass:"ph-H-Small"},[_vm._v(_vm._s(item.text))]),(item.spanText)?_c('span',{staticClass:"ph-body-xsmall"},[_vm._v(_vm._s(item.spanText))]):_vm._e()])}),_c('bpButton',{staticClass:"contact-us",attrs:{"text":_vm.translation_data.contactUs},on:{"click":_vm.contactUs}}),_c('bpButton',{staticClass:"login",attrs:{"text":_vm.translation_data.login}})],2):_vm._e()]),(_vm.contactForm)?_c('bp-modal-form',{attrs:{"translation_data":_vm.translation_data},on:{"closeModal":_vm.closeModal,"submitClientData":_vm.submitClientData}}):_vm._e()],1)])}
var bp_nav_top_responsevue_type_template_id_7bf19c70_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/panel/bp-nav-top-response.vue?vue&type=template&id=7bf19c70&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/panel/bp-nav-top-response.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var bp_nav_top_responsevue_type_script_lang_js_ = ({
  created() {
    let curLang = window.localStorage.getItem('lang');
    this.language = curLang;
  },

  mounted() {
    const that = this;

    window.onscroll = () => {
      let top = document.scrollingElement.scrollTop; //触发滚动条
      //回到页面顶部

      if (top == 0) {
        this.bgWhite = false;
        this.borderNone = false;
      } else {
        //不在页面顶部
        this.bgWhite = true;
        this.borderNone = true;
      }
    };

    window.addEventListener('setItemEvent', function (e) {
      that.language = e.newValue;
    });
  },

  components: {
    bpModalForm: bp_modal_form,
    bpButton: bp_button
  },

  data() {
    return {
      imgSrc: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_logo_ph_theme.svg",
      menu: false,
      bgWhite: false,
      borderNone: false,
      contactForm: false,
      language: '中文',
      translation_basedata: {
        cn: {
          MAX: {
            max: "Max"
          },
          consulting: {
            consult: "循证咨询"
          },
          contactUs: "联系我们",
          login: "登录",
          modalForm: {
            download: "下载报告",
            contactUs: "联系我们",
            name: "如何称呼您",
            nameBlank: "请填写您的姓名",
            company: "您所在的团队",
            companyBlank: "请填写您的团队名称",
            department: "您所在的部门",
            position: "您的职位",
            email: "您的工作邮箱",
            emailBlank: "请填写您的邮箱",
            emailWrong: "邮箱格式有误，请填写正确的邮箱地址",
            intention: "您感兴趣的内容",
            dataService: "数据研究服务",
            submit: "提交",
            'submit&download': "提交并下载",
            submitSuccess: "提交成功",
            submitFeedback: "已收到您的信息，我们将尽快与您联系",
            ok: "好的"
          },
          options_data: [{
            text: "MAX",
            spanText: "全息市场监测利器",
            click_event: function () {
              this.$emit('toMax', 'max');
            }
          }, {
            text: "真实数据研究",
            spanText: "来自患者信息的多视角深度挖掘",
            click_event: function () {
              this.$emit('toRW', 'rw');
            }
          }, {
            text: "循证咨询",
            spanText: "多层面精准预测，营销资源配置与优化",
            click_event: function () {
              this.$emit('toConsulting', 'consulting');
            }
          }, {
            text: "关于我们",
            click_event: function () {
              this.$emit('toAboutUs', 'aboutUs');
            }
          }]
        },
        en: {
          MAX: {
            max: "MAX©"
          },
          consulting: {
            consult: "Evidence-based Consulting"
          },
          contactUs: "Contact Us",
          login: "Log in",
          modalForm: {
            download: "Download Report",
            contactUs: "Contact Us",
            name: "Full Name",
            nameBlank: "Please enter your first and last name.",
            company: "Company",
            companyBlank: "Please enter your company name.",
            department: "Department",
            position: "Job Title",
            email: "Work Email",
            emailBlank: "Please enter your work email.",
            emailWrong: "Please enter a vaild email.",
            intention: "Which one is your interested part?",
            dataService: "Data Service",
            submit: "Submit",
            'submit&download': "Submit and Download",
            submitSuccess: "Submitted successfully",
            submitFeedback: "Information received and we will contact you as soon as possible",
            ok: "OK"
          },
          options_data: [{
            text: "MAX©",
            spanText: "Holographic Market Monitoring Tool",
            click_event: function () {
              this.$emit('toMax', 'max');
            }
          }, {
            text: "Real World Research",
            spanText: "Multi-perspective Deep Mining from Patient Information",
            click_event: function () {
              this.$emit('toRW', 'rw');
            }
          }, {
            text: "Evidence-based Consulting",
            spanText: "Multi-level Accurate Prediction Allocating and Optimizing Marketing Resource",
            click_event: function () {
              this.$emit('toConsulting', 'consulting');
            }
          }, {
            text: "COMPANY",
            click_event: function () {
              this.$emit('toAboutUs', 'aboutUs');
            }
          }]
        }
      }
    };
  },

  props: {
    inverse: {
      //是否背景透明
      type: Boolean,
      default: false
    }
  },
  computed: {
    translation_data: function () {
      if (this.language === '中文') {
        return this.translation_basedata.cn;
      } else if (this.language === 'English') {
        return this.translation_basedata.en;
      }
    }
  },
  methods: {
    clickMenu() {
      return this.menu = !this.menu;
    },

    contactUs() {
      this.contactForm = true;
    },

    closeModal() {
      this.contactForm = false;
    },

    submitClientData(value) {
      this.$emit('submitClientData', value);
    },

    toAboutUs() {
      this.$emit('toAboutUs', 'about-us');
    },

    toHome() {
      this.$emit('toHome', 'home');
    }

  }
});
// CONCATENATED MODULE: ./src/components/panel/bp-nav-top-response.vue?vue&type=script&lang=js&
 /* harmony default export */ var panel_bp_nav_top_responsevue_type_script_lang_js_ = (bp_nav_top_responsevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/panel/bp-nav-top-response.vue



function bp_nav_top_response_injectStyles (context) {
  
  var style0 = __webpack_require__("771f")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_nav_top_response_component = normalizeComponent(
  panel_bp_nav_top_responsevue_type_script_lang_js_,
  bp_nav_top_responsevue_type_template_id_7bf19c70_scoped_true_render,
  bp_nav_top_responsevue_type_template_id_7bf19c70_scoped_true_staticRenderFns,
  false,
  bp_nav_top_response_injectStyles,
  "7bf19c70",
  null
  ,true
)

/* harmony default export */ var bp_nav_top_response = (bp_nav_top_response_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2a6b98ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/panel/bp-page-bottom.vue?vue&type=template&id=e838f1c4&scoped=true&
var bp_page_bottomvue_type_template_id_e838f1c4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-bottom-part"},[_c('div',{staticClass:"contact-container"},[_c('div',{staticClass:"contact-content"},[_c('div',{staticClass:"contact-slogan-part"},[_c('bp-text',{staticClass:"ph-body-medium response-text-center"},[_vm._v(_vm._s(_vm.translation_data.contactUs.leadingForHealthcareIndustry))]),_c('bp-text',{staticClass:"ph-H-Large_2 response-text-center"},[_vm._v(_vm._s(_vm.translation_data.contactUs.provideSolution))])],1),_c('bp-button',{staticClass:"contact-us-button",attrs:{"type":"standard","text":_vm.translation_data.contactUs.contactUs},on:{"click":_vm.contactUs}})],1)]),_c('div',{staticClass:"page-bottom"},[_c('div',{staticClass:"bottom-pharbers"},[_c('bp-img',{staticClass:"bottom-pharbers-icon",attrs:{"src":"https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_logo_ph_gray.svg"}}),_c('div',{staticClass:"bottom-row-container"},[_c('div',{staticClass:"bottom-product-container"},[_c('div',{staticClass:"bottom-list-a"},[_c('bp-text',{staticClass:"bottom-pharbers-title"},[_vm._v(_vm._s(_vm.translation_data.siteMap.productAndService))]),_c('bp-text',{staticClass:"ph-body-small mb-2 cursor-pointer",on:{"click":_vm.toMax}},[_vm._v(_vm._s(_vm.translation_data.siteMap.max))]),_c('bp-text',{staticClass:"ph-body-small mb-2 cursor-pointer",on:{"click":_vm.toRW}},[_vm._v(_vm._s(_vm.translation_data.siteMap.realWorldSearch))]),_c('bp-text',{staticClass:"ph-body-small cursor-pointer",on:{"click":_vm.toConsulting}},[_vm._v(_vm._s(_vm.translation_data.siteMap.consulting))])],1),_c('div',{staticClass:"bottom-list-b"},[_c('bp-text',{staticClass:"bottom-pharbers-title"},[_vm._v(_vm._s(_vm.translation_data.siteMap.company))]),_c('bp-text',{staticClass:"ph-body-small mb-2 cursor-pointer",on:{"click":_vm.toAboutUs}},[_vm._v(_vm._s(_vm.translation_data.siteMap.aboutPharbers))])],1)]),_c('div',{staticClass:"bottom-address"},[_c('div',{staticClass:"address-bj-part"},[_c('bp-text',{staticClass:"ph-body-xsmall-tertiary text-right"},[_vm._v(_vm._s(_vm.translation_data.siteMap.companyPhoneBJ))]),_c('bp-text',{staticClass:"ph-body-xsmall-tertiary text-right"},[_vm._v(_vm._s(_vm.translation_data.siteMap.companyPositonBJ))]),_c('bp-text',{staticClass:"ph-body-xsmall-tertiary text-right"},[_vm._v(_vm._s(_vm.translation_data.siteMap.companyRoomBJ))])],1),_c('div',{staticClass:"address-sh-part"},[_c('bp-text',{staticClass:"ph-body-xsmall-tertiary text-right"},[_vm._v(_vm._s(_vm.translation_data.siteMap.companyPhoneSH))]),_c('bp-text',{staticClass:"ph-body-xsmall-tertiary text-right"},[_vm._v(_vm._s(_vm.translation_data.siteMap.companyPositonSH))]),_c('bp-text',{staticClass:"ph-body-xsmall-tertiary text-right"},[_vm._v(_vm._s(_vm.translation_data.siteMap.companyRoomSH))])],1)])])],1),_c('div',{staticClass:"bottom-contact"},[_c('div',{staticClass:"bottom-contact-left"},[_c('bp-text',{staticClass:"ph-body-small mr-3"},[_vm._v(_vm._s(_vm.translation_data.siteMap.contactUs))]),_c('bp-text',{staticClass:"ph-body-small mr-3"},[_vm._v(_vm._s(_vm.translation_data.siteMap.privacyPolicy))]),_c('bp-select-vue',{staticClass:"select-language",attrs:{"choosedValue":_vm.language,"src":"https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_drop.svg","iconClass":"select-language-icon"}},[_c('bp-option-vue',{attrs:{"text":"中文","choosedValue":_vm.language},on:{"click":_vm.changeLanguage}}),_c('bp-option-vue',{attrs:{"text":"English","choosedValue":_vm.language},on:{"click":_vm.changeLanguage}})],1)],1),_c('div',{staticClass:"bottom-contact-right"},[_c('bp-img',{staticClass:"bottom-contact-icon",attrs:{"src":"https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_wechat_copy_2@3x.svg"}}),_c('bp-img',{staticClass:"bottom-contact-icon",attrs:{"src":"https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_linkdin.svg"}})],1)]),_c('div',{staticClass:"bottom-copyright"},[_c('div',{staticClass:"bottom-copyright-left"},[_c('a',{attrs:{"target":"_blank","href":"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502041501"}},[_c('div',{staticClass:"online-filing"},[_c('bp-img',{staticClass:"presented-logo",attrs:{"src":"https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/presented_logo.png"}}),_c('bp-text',{staticClass:"ph-body-xsmall-tertiary"},[_vm._v("京公网安备11010502041501号")])],1)]),_c('bp-text',{staticClass:"ph-body-xsmall-tertiary cursor-pointer",on:{"click":_vm.toMiit}},[_vm._v("京ICP备15015746号-1")])],1),_c('bp-text',{staticClass:"ph-body-xsmall-tertiary"},[_vm._v(" © Copyright "+_vm._s(_vm.nowDate)+" Pharbers Co.,Ltd. ")])],1)]),(_vm.contactForm)?_c('bp-modal-form',{attrs:{"translation_data":_vm.translation_data},on:{"closeModal":_vm.closeModal,"submitClientData":_vm.submitClientData}}):_vm._e()],1)}
var bp_page_bottomvue_type_template_id_e838f1c4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/panel/bp-page-bottom.vue?vue&type=template&id=e838f1c4&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/panel/bp-page-bottom.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var bp_page_bottomvue_type_script_lang_js_ = ({
  components: {
    bpText: bp_text,
    bpButton: bp_button,
    bpModalForm: bp_modal_form,
    bpImg: bp_img,
    bpSelectVue: bp_select_vue,
    bpOptionVue: bp_option_vue
  },
  props: {
    changeLocale: Function
  },
  data: function () {
    return {
      contactForm: false,
      language: '中文',
      nowDate: new Date().getFullYear(),
      translation_basedata: {
        cn: {
          contactUs: {
            contactUs: "联系我们",
            leadingForHealthcareIndustry: "医药健康行业领先的数据融合与洞见",
            provideSolution: "为您提供一体化解决方案"
          },
          modalForm: {
            download: "下载报告",
            contactUs: "联系我们",
            name: "如何称呼您",
            nameBlank: "请填写您的姓名",
            company: "您所在的团队",
            companyBlank: "请填写您的团队名称",
            department: "您所在的部门",
            position: "您的职位",
            email: "您的工作邮箱",
            emailBlank: "请填写您的邮箱",
            emailWrong: "邮箱格式有误，请填写正确的邮箱地址",
            intention: "您感兴趣的内容",
            dataService: "数据研究服务",
            submit: "提交",
            'submit&download': "提交并下载",
            submitSuccess: "提交成功",
            submitFeedback: "已收到您的信息，我们将尽快与您联系",
            ok: "好的"
          },
          MAX: {
            max: "Max"
          },
          consulting: {
            consult: "循证咨询"
          },
          siteMap: {
            productAndService: "产品与服务",
            max: "MAX",
            realWorldSearch: "真实世界数据研究",
            consulting: "循证咨询",
            customers: "客户",
            scenarios: "场景",
            useCase: "案例",
            roles: "角色",
            company: "公司",
            aboutPharbers: "关于法伯",
            aboutUs: "关于我们",
            companyPhoneBJ: "北京 010-84244216",
            companyPositonBJ: "北京市 朝阳区 东直门外斜街",
            companyRoomBJ: "东外五十六号文创园A座 111室",
            companyPhoneSH: "上海 021-60770988",
            companyPositonSH: "上海市 静安区 共和路209号",
            companyRoomSH: "嘉里企业中心2座 17F",
            contactUs: "联系我们",
            privacyPolicy: "隐私与政策",
            ZH: "中文",
            EN: "English"
          }
        },
        en: {
          contactUs: {
            contactUs: "Contact Us",
            leadingForHealthcareIndustry: "Leading data fusion and insights in the healthcare industry",
            provideSolution: "Provide you with integrated solutions"
          },
          modalForm: {
            download: "Download Report",
            contactUs: "Contact Us",
            name: "Full Name",
            nameBlank: "Please enter your first and last name.",
            company: "Company",
            companyBlank: "Please enter your company name.",
            department: "Department",
            position: "Job Title",
            email: "Work Email",
            emailBlank: "Please enter your work email.",
            emailWrong: "Please enter a vaild email.",
            intention: "Which one is your interested part?",
            dataService: "Data Service",
            submit: "Submit",
            'submit&download': "Submit and Download",
            submitSuccess: "Submitted successfully",
            submitFeedback: "Information received and we will contact you as soon as possible",
            ok: "OK"
          },
          MAX: {
            max: "MAX©"
          },
          consulting: {
            consult: "Evidence-based Consulting"
          },
          siteMap: {
            productAndService: "PRODUCTS",
            max: "MAX",
            realWorldSearch: "Real World Research",
            consulting: "Evidence-based Consulting",
            customers: "Customers",
            scenarios: "Scenarios",
            useCase: "Use Cases",
            roles: "Careers",
            company: "COMPANY",
            aboutPharbers: "About Pharbers",
            aboutUs: "About Us",
            companyPhoneBJ: "Beijing 010-84244216",
            companyPositonBJ: "#111, Building A, No. 56 Dongwai, Dongzhimenwai Xiejie",
            companyRoomBJ: "Chaoyang District, Beijing, P.R. China",
            companyPhoneSH: "Shanghai 021-60770988",
            companyPositonSH: "F17,  Tower 2, Kerry Enterprise Centre, 209 Gonghe Road,",
            companyRoomSH: "Jing'an District, Shanghai, P.R. China",
            contactUs: "Contact Us",
            privacyPolicy: "Privacy and Policy",
            ZH: "中文",
            EN: "English"
          }
        }
      }
    };
  },
  computed: {
    translation_data: function () {
      if (this.language === '中文') {
        return this.translation_basedata.cn;
      } else if (this.language === 'English') {
        return this.translation_basedata.en;
      }
    }
  },
  methods: {
    contactUs() {
      this.contactForm = true;
    },

    closeModal() {
      this.contactForm = false;
    },

    submitClientData(value) {
      this.$emit('submitClientData', value);
    },

    changeLanguage(value) {
      localStorage.setItem('lang', value);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    },

    toMiit() {
      window.open('http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502041501');
    },

    toMax() {
      this.$emit('toMax', 'max');
    },

    toRW() {
      this.$emit('toRW', 'rw');
    },

    toConsulting() {
      this.$emit('toConsulting', 'consulting');
    },

    toAboutUs() {
      this.$emit('toAboutUs', 'about-us');
    }

  },

  created() {
    let curLang = window.localStorage.getItem('lang');
    this.language = curLang;
  },

  mounted() {
    const that = this;
    window.addEventListener('setItemEvent', function (e) {
      that.language = e.newValue;
    });
  }

});
// CONCATENATED MODULE: ./src/components/panel/bp-page-bottom.vue?vue&type=script&lang=js&
 /* harmony default export */ var panel_bp_page_bottomvue_type_script_lang_js_ = (bp_page_bottomvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/panel/bp-page-bottom.vue



function bp_page_bottom_injectStyles (context) {
  
  var style0 = __webpack_require__("ff2a")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_page_bottom_component = normalizeComponent(
  panel_bp_page_bottomvue_type_script_lang_js_,
  bp_page_bottomvue_type_template_id_e838f1c4_scoped_true_render,
  bp_page_bottomvue_type_template_id_e838f1c4_scoped_true_staticRenderFns,
  false,
  bp_page_bottom_injectStyles,
  "e838f1c4",
  null
  ,true
)

/* harmony default export */ var bp_page_bottom = (bp_page_bottom_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2a6b98ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/panel/bp-card-activity.vue?vue&type=template&id=dcfdcb2e&scoped=true&
var bp_card_activityvue_type_template_id_dcfdcb2e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content-active-panel"},[_c('div',{staticClass:"active-img"},[_c('img',{staticClass:"active-img-bgc",attrs:{"src":_vm.bgImg,"alt":""}}),_c('img',{directives:[{name:"show",rawName:"v-show",value:(_vm.logoImg != 'null'),expression:"logoImg != 'null'"}],staticClass:"above-data-logo",attrs:{"src":_vm.logoImg,"alt":""}})]),_c('div',{staticClass:"active-info"},[_c('div',{staticClass:"home-avtive-names"},[_c('span',{staticClass:"active-logo"},[_vm._v(_vm._s(_vm.logoText))]),_c('span',{staticClass:"active-title"},[_vm._v(_vm._s(_vm.title))])]),_c('span',{staticClass:"position-info"},[_vm._v(_vm._s(_vm.date)+" "+_vm._s(_vm.city))])])])}
var bp_card_activityvue_type_template_id_dcfdcb2e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/panel/bp-card-activity.vue?vue&type=template&id=dcfdcb2e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/panel/bp-card-activity.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var bp_card_activityvue_type_script_lang_js_ = ({
  components: {},
  methods: {},
  props: {
    bgImg: {
      type: String,
      default: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/photo_events_2020-06-04_boyun_00030.jpg"
    },
    logoImg: {
      type: String,
      default: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_logo_bylt_v.svg"
    },
    title: {
      type: String,
      default: "带量采购对中国医药市场的改变"
    },
    date: {
      type: String,
      default: "2020-06-04"
    },
    city: {
      type: String,
      default: "苏州"
    },
    logoText: {
      type: String,
      default: "行业活动"
    }
  }
});
// CONCATENATED MODULE: ./src/components/panel/bp-card-activity.vue?vue&type=script&lang=js&
 /* harmony default export */ var panel_bp_card_activityvue_type_script_lang_js_ = (bp_card_activityvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/panel/bp-card-activity.vue



function bp_card_activity_injectStyles (context) {
  
  var style0 = __webpack_require__("d83b")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_card_activity_component = normalizeComponent(
  panel_bp_card_activityvue_type_script_lang_js_,
  bp_card_activityvue_type_template_id_dcfdcb2e_scoped_true_render,
  bp_card_activityvue_type_template_id_dcfdcb2e_scoped_true_staticRenderFns,
  false,
  bp_card_activity_injectStyles,
  "dcfdcb2e",
  null
  ,true
)

/* harmony default export */ var bp_card_activity = (bp_card_activity_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/page/home.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ var homevue_type_script_lang_js_shadow = ({
  name: 'home',

  data() {
    return {
      language: '中文',
      // 中英切换
      windowWidth: document.documentElement.clientWidth,
      windowHeight: document.documentElement.clientHeight,
      response: false,
      responseMini: false,
      translation_basedata: {
        cn: {
          //truth
          truthTitle: "还原真实 可见未来",
          truthDes: "医药数据融合与洞见者",
          //active
          activeEvents: "EVENTS",
          moreActivity: "更多活动",
          //report
          reportThemeSmall: "最新发布",
          reportBodySmall: "深度医药市场行业分析报告",
          reportLargeTitle: "《带量采购对中国医药市场格局的影响》",
          reportTertiary: "2020年6月5日",
          reportButton: "获取报告",
          moreReportsText: "更多报告",
          //data-show
          dataShowAboutUs: "法伯凝聚顶尖数据分析师与数据科学家",
          dataShowTitle: "重新定义，您的数据价值",
          showMoreButton: "了解更多",
          dataTextPart1: "丰富的数据源",
          dataTextPart2: "强劲算能",
          dataTextPart3: "超群智能算法",
          //max-show
          maxTitle: "MAX",
          maxTitleDes: " Market Analytic Box",
          maxTextCenter: "城市、县域、CHC，及时掌握市场动态",
          maxTextCenterBrand: "全息市场监测利器",
          //real-world
          realWorldTitle: "真实世界数据研究",
          realWorldTitleSmall: "来自患者信息的多视角深度挖掘",
          realWorldBrand: "发现不同",
          // advisory
          advisoryTitle: "循证咨询",
          advisoryTitleSmall: "多层面精准预测，营销资源配置与优化",
          advisoryBrand: "提升ROI"
        },
        en: {
          //truth
          truthTitle: "See The Truth \nSee The Future",
          truthDes: "Leading Fusion and Insight in Medical Data",
          //active
          activeEvents: "Events",
          moreActivity: "MORE",
          //report
          reportThemeSmall: "Latest Released",
          reportBodySmall: "In-depth Industry Analysis Report of Pharmaceutical Market",
          reportLargeTitle: "VBP's Impact on the Chinese Pharmaceutical Market",
          reportTertiary: "2020-06-05",
          reportButton: "DOWNLOAD",
          moreReportsText: "MORE",
          //data-show
          dataShowAboutUs: "Pharbers Gathers Top Data Analysts and Scientists",
          dataShowTitle: "Re-define the value of your data assets",
          showMoreButton: "Learn More",
          dataTextPart1: "Multiple Exclusive Data Sources",
          dataTextPart2: "Powerful Algorithm",
          dataTextPart3: "Superior Intelligence",
          //max-show
          maxTitle: "MAX©",
          maxTitleDes: " Market Analytic Box",
          maxTextCenter: "Cities, Counties, and CHC\nKeeping Tracking Market Trends",
          maxTextCenterBrand: "Holographic Market Monitoring Tool",
          //real-world
          realWorldTitle: "Real World Research",
          realWorldTitleSmall: "Multi-perspective Deep Mining from Patient Information",
          realWorldBrand: "Find Differences",
          // advisory
          advisoryTitle: "Evidence-based Consulting",
          advisoryTitleSmall: "Multi-level Accurate Prediction\nAllocating and Optimizing Marketing Resource",
          advisoryBrand: "Improve ROI"
        }
      },
      src: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_home_hero.png",
      buttonGo: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_go_yellow.svg",
      activeArr: [{
        bgImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/photo_events_2020-06-04_boyun_00030.jpg",
        logoImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_logo_bylt_v.svg",
        title: "带量采购对中国医药市场的改变",
        date: "2020-06-04",
        city: "苏州",
        logoText: ''
      }, {
        bgImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/photo_events_abovedata_2020-01-09_00005.jpg",
        logoImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_logo_above-data.svg",
        title: "Above Data 2020 第一期",
        date: "2020-01-09",
        city: "北京",
        logoText: "Above Data"
      }, {
        bgImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/photo_events_nanjing_2019-10-23_00001.jpg",
        logoImg: "null",
        title: "第八届中国医药决策科学峰会暨 CphMRA 2019 年度会议",
        date: "2019-10-23",
        city: "南京",
        logoText: "行业活动"
      }],
      reportLeftDown: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_deco_corner.svg",
      reportRightDown: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_deco_corner.svg",
      reportDownImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_paper-cover_VPB.jpg",
      reportConnectImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_connect_line.svg",
      dataShowImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_corevalue.png",
      showMoreButtonGo: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_go.svg",
      maxRightImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_home_max.png",
      maxRightImg_480: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_home_max_480.png",
      realWorldLeftImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_home_realworld.png",
      advisoryRightImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_home_consulting.png"
    };
  },

  props: {},
  components: {
    navTop: bp_nav_top,
    navTopRes: bp_nav_top_response,
    bpPageBottom: bp_page_bottom,
    bpText: bp_text,
    bpImg: bp_img,
    bpCardActive: bp_card_activity,
    bpButton: bp_button,
    BpText: bp_text,
    iconLine: bp_icon_line,
    iconLineRes: bp_icon_line_response
  },
  methods: {
    submitClientData(value) {
      this.$emit('submitClientData', value);
    },

    toMax(value) {
      this.$emit('toMax', value);
    },

    toRW(value) {
      this.$emit('toRW', value);
    },

    toConsulting(value) {
      this.$emit('toConsulting', value);
    },

    toAboutUs(value) {
      this.$emit('toAboutUs', value);
    },

    toHome(value) {
      this.$emit('toHome', value);
    }

  },
  computed: {
    translation_data: function () {
      if (this.language === '中文') {
        return this.translation_basedata.cn;
      } else if (this.language === 'English') {
        return this.translation_basedata.en;
      }
    }
  },
  watch: {
    windowWidth(val) {
      if (val < 1100) {
        this.response = true;
      } else {
        this.response = false;
      }

      if (val <= 549) {
        this.responseMini = true;
      } else {
        this.responseMini = false;
      }
    },

    windowHeight(val) {
      console.log('height', val, this.windowHeight);
    }

  },

  created() {
    let originalSetItem = localStorage.setItem,
        lang = window.localStorage.getItem('lang');

    if (!lang) {
      lang = navigator.language || navigator.userLanguage;

      if (lang === 'English') {
        localStorage.setItem('lang', 'English');
      } else {
        localStorage.setItem('lang', '中文');
      }
    } else {
      this.language = lang;
    }

    localStorage.setItem = function (key, newValue) {
      let event = new Event("setItemEvent");
      event.key = key;
      event.newValue = newValue;
      window.dispatchEvent(event);
      originalSetItem.apply(this, arguments);
    };
  },

  mounted() {
    const that = this;

    if (this.windowWidth < 1100) {
      this.response = true;
    } else {
      this.response = false;
    }

    if (this.windowWidth <= 549) {
      this.responseMini = true;
    } else {
      this.responseMini = false;
    }

    window.onresize = () => {
      return (() => {
        window.windowWidth = document.body.clientWidth;
        window.windowHeight = document.body.clientHeight;
        that.windowWidth = window.windowWidth;
        that.windowHeight = window.windowHeight;
      })();
    };

    window.addEventListener('setItemEvent', function (e) {
      that.language = e.newValue;
    });
  }

});
// CONCATENATED MODULE: ./src/components/page/home.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var page_homevue_type_script_lang_js_shadow = (homevue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/page/home.vue?shadow



function homeshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("112b")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var homeshadow_component = normalizeComponent(
  page_homevue_type_script_lang_js_shadow,
  homevue_type_template_id_3c3eb362_scoped_true_shadow_render,
  homevue_type_template_id_3c3eb362_scoped_true_shadow_staticRenderFns,
  false,
  homeshadow_injectStyles,
  "3c3eb362",
  null
  ,true
)

/* harmony default export */ var homeshadow = (homeshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2a6b98ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/page/max.vue?vue&type=template&id=3b5130bf&scoped=true&shadow
var maxvue_type_template_id_3b5130bf_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var maxvue_type_template_id_3b5130bf_scoped_true_shadow_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/page/max.vue?vue&type=template&id=3b5130bf&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/page/max.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
/* harmony default export */ var maxvue_type_script_lang_js_shadow = ({});
// CONCATENATED MODULE: ./src/components/page/max.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var page_maxvue_type_script_lang_js_shadow = (maxvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/page/max.vue?shadow



function maxshadow_injectStyles (context) {
  
  
}

/* normalize component */

var maxshadow_component = normalizeComponent(
  page_maxvue_type_script_lang_js_shadow,
  maxvue_type_template_id_3b5130bf_scoped_true_shadow_render,
  maxvue_type_template_id_3b5130bf_scoped_true_shadow_staticRenderFns,
  false,
  maxshadow_injectStyles,
  "3b5130bf",
  null
  ,true
)

/* harmony default export */ var maxshadow = (maxshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2a6b98ec-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/page/rw.vue?vue&type=template&id=35e89c30&scoped=true&shadow
var rwvue_type_template_id_35e89c30_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var rwvue_type_template_id_35e89c30_scoped_true_shadow_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/page/rw.vue?vue&type=template&id=35e89c30&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/page/rw.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
/* harmony default export */ var rwvue_type_script_lang_js_shadow = ({});
// CONCATENATED MODULE: ./src/components/page/rw.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var page_rwvue_type_script_lang_js_shadow = (rwvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/page/rw.vue?shadow



function rwshadow_injectStyles (context) {
  
  
}

/* normalize component */

var rwshadow_component = normalizeComponent(
  page_rwvue_type_script_lang_js_shadow,
  rwvue_type_template_id_35e89c30_scoped_true_shadow_render,
  rwvue_type_template_id_35e89c30_scoped_true_shadow_staticRenderFns,
  false,
  rwshadow_injectStyles,
  "35e89c30",
  null
  ,true
)

/* harmony default export */ var rwshadow = (rwshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-wc.js




// runtime shared by every component chunk





window.customElements.define('pharbers-about-us', vue_wc_wrapper(external_Vue_default.a, about_usshadow))


window.customElements.define('pharbers-consulting', vue_wc_wrapper(external_Vue_default.a, consultingshadow))


window.customElements.define('pharbers-home', vue_wc_wrapper(external_Vue_default.a, homeshadow))


window.customElements.define('pharbers-max', vue_wc_wrapper(external_Vue_default.a, maxshadow))


window.customElements.define('pharbers-rw', vue_wc_wrapper(external_Vue_default.a, rwshadow))

/***/ }),

/***/ "5ab1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_select_vue_vue_vue_type_style_index_0_id_7fca35cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2438");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_select_vue_vue_vue_type_style_index_0_id_7fca35cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_select_vue_vue_vue_type_style_index_0_id_7fca35cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_select_vue_vue_vue_type_style_index_0_id_7fca35cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_select_vue_vue_vue_type_style_index_0_id_7fca35cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "5daa":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-0ad0c780]{box-sizing:border-box}.case-icon-line[data-v-0ad0c780]{flex-wrap:wrap;height:auto;width:100%;background:0 0;display:flex;flex-direction:row;justify-content:space-between;margin-bottom:40px}.case-icon-line .case-icon[data-v-0ad0c780]{height:49px;width:200px;margin-bottom:32px;background:0 0}.case-icon-line-three[data-v-0ad0c780]{padding:0 100px}@media screen and (max-width:992px) and (min-width:769px){.case-icon-line-three[data-v-0ad0c780]{padding:0 8px!important}.case-icon[data-v-0ad0c780]{width:26%!important}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "6acc":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("583e");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("12eb8bee", content, shadowRoot)
};

/***/ }),

/***/ "6fa0":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-3c3eb362]{box-sizing:border-box;line-height:1.6}.show-more-button-go[data-v-3c3eb362]{height:40px;width:40px;background:#ffdd4d;padding:8px;cursor:pointer}.button-official-yellow-line-compact[data-v-3c3eb362]{height:40px;padding:0 24px;line-height:40px;background:linear-gradient(45deg,rgba(255,221,77,.5),rgba(255,221,77,.5) 5%,transparent 0,transparent 50%,rgba(255,221,77,.5) 0,rgba(255,221,77,.5) 55%,transparent 0,transparent)!important;background-size:8px 8px!important;border:none;font-weight:500;font-size:14px;color:#2d334d!important}.bp-home[data-v-3c3eb362]{min-width:375px;flex-direction:column;overflow-x:hidden}.bp-home[data-v-3c3eb362],.bp-home .truth-content-area[data-v-3c3eb362]{width:100%;display:flex;align-items:center}.bp-home .truth-content-area[data-v-3c3eb362]{height:620px;max-width:1200px;flex-direction:row;justify-content:space-between;align-content:flex-start;padding:80px 100px 0}.bp-home .truth-content-area .title[data-v-3c3eb362]{flex-direction:column;justify-content:center;align-items:stretch;align-content:flex-start;height:auto;width:auto;background:0 0;display:flex;padding:0}.bp-home .truth-content-area .title .ph-H-Display[data-v-3c3eb362]{font-size:48px;color:#2d334d;letter-spacing:4px;font-weight:600;text-shadow:none;white-space:pre-line}.bp-home .truth-content-area .title .ph-body-medium[data-v-3c3eb362]{margin-top:16px;font-size:16px;color:#747789}.bp-home .truth-content-area .bp-img[data-v-3c3eb362]{-o-object-fit:cover;object-fit:cover}.bp-home .truth-content-area .home-header-img[data-v-3c3eb362]{height:366px;width:545px;pointer-events:none}.bp-home .content-active-area[data-v-3c3eb362]{height:421px;width:100%;min-height:421px;max-width:1200px;position:relative;justify-content:flex-end;padding-right:24px}.bp-home .content-active-area[data-v-3c3eb362],.bp-home .content-active-area .active-line[data-v-3c3eb362]{background:0 0;display:flex;flex-direction:row;align-content:flex-start;align-items:stretch}.bp-home .content-active-area .active-line[data-v-3c3eb362]{height:535px;width:8px;border-left:1px solid rgba(22,28,57,.1);position:absolute;left:100px;justify-content:flex-start}.bp-home .content-active-area .active-line .active-yellow-line[data-v-3c3eb362]{height:8px;width:2px;background:#f5c924;position:relative;left:-1px;opacity:.5;display:flex;flex-direction:row;justify-content:flex-start;align-items:stretch;align-content:flex-start}.bp-home .content-active-area .active-text[data-v-3c3eb362]{height:70px;width:22px;text-align:right;background:0 0;font-size:16px;color:#161c39;-ms-writing-mode:tb-rl;writing-mode:vertical-rl;transform:rotate(180deg);opacity:.6;position:absolute;left:110px}.bp-home .content-active-area .content-active-review-more-button[data-v-3c3eb362]{position:absolute;right:0;bottom:67px;z-index:2;height:auto;width:auto;background:0 0}.bp-home .content-active-area .content-active-review-more-button .show-more-button-container[data-v-3c3eb362]{height:auto;width:auto;background:0 0;display:flex;flex-direction:row;justify-content:flex-start;align-items:stretch;align-content:flex-start}.bp-home .content-active-area .content-active-review-more-button .show-more-button-container .button-official-gray-line[data-v-3c3eb362]{width:80px;height:32px;line-height:32px;background:linear-gradient(45deg,rgba(22,28,57,.2),rgba(22,28,57,.2) 5%,transparent 0,transparent 50%,rgba(22,28,57,.2) 0,rgba(22,28,57,.2) 55%,transparent 0,transparent)!important;background-size:10px 10px!important;border:none;font-weight:500;font-size:12px;color:#2d334d}.bp-home .content-active-area .content-active-review-more-button .show-more-button-container .active-button-go[data-v-3c3eb362]{height:32px;width:32px;background:#161c39;padding:6px;cursor:pointer}.bp-home .content-active-area .content-active-bg-yellow[data-v-3c3eb362]{height:180px;width:860px;background:#f5c924;border-radius:2px;right:0;position:absolute;z-index:0;opacity:.8;top:240px}.bp-home .content-active-area .content-active-bg-line-right[data-v-3c3eb362]{height:210px;width:1px;background:0 0;right:100px;position:absolute;z-index:0;opacity:.1;top:325px;border-left:1px solid #161c39}.bp-home .report-download-container[data-v-3c3eb362]{height:459px;max-width:1200px;width:100%;justify-content:center}.bp-home .report-download-container[data-v-3c3eb362],.bp-home .report-download-container .report-download[data-v-3c3eb362]{background:0 0;display:flex;flex-direction:row;align-items:center;align-content:flex-start}.bp-home .report-download-container .report-download[data-v-3c3eb362]{height:331px;width:1000px;border:1px solid #e8e9eb;padding:0 32px;position:relative;justify-content:space-between}.bp-home .report-download-container .report-download .report-download-left-corner[data-v-3c3eb362]{height:11px;width:11px;background:0 0;position:absolute;top:-4px;left:-4px}.bp-home .report-download-container .report-download .bp-img[data-v-3c3eb362]{-o-object-fit:cover;object-fit:cover;pointer-events:none}.bp-home .report-download-container .report-download .report-download-right-corner[data-v-3c3eb362]{height:11px;width:11px;background:0 0;position:absolute;right:-4px;bottom:-4px;transform:rotate(180deg)}.bp-home .report-download-container .report-download .report-download-img-container[data-v-3c3eb362]{height:251px;width:100%;display:flex;flex-direction:row;justify-content:center;align-items:center;position:relative;align-content:flex-start}.bp-home .report-download-container .report-download .report-download-img-container .report-down-img[data-v-3c3eb362]{height:242px;width:171px;-o-object-fit:fill;object-fit:fill;border-radius:2px;pointer-events:none}.bp-home .report-download-container .report-download .report-download-img-container .report-down-img-mask[data-v-3c3eb362]{width:153px;height:241px;position:absolute;border-radius:2px;background:#747789;z-index:-1;box-shadow:0 5px 7px 0 rgba(22,28,57,.36);transform-origin:0 242px;transform:rotate(4deg) translateX(-8px)}.bp-home .report-download-container .report-download .report-download-info[data-v-3c3eb362]{height:auto;width:auto;background:0 0;display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;align-content:flex-start}.bp-home .report-download-container .report-download .report-download-info .report-right-center[data-v-3c3eb362],.bp-home .report-download-container .report-download .report-download-info .report-right-head[data-v-3c3eb362]{margin-bottom:40px;display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;align-content:flex-start;height:auto;width:auto;background:0 0;padding:0}.bp-home .report-download-container .report-download .report-download-info .report-right-center .ph-H-small-theme[data-v-3c3eb362],.bp-home .report-download-container .report-download .report-download-info .report-right-head .ph-H-small-theme[data-v-3c3eb362]{letter-spacing:.2px;height:20px;font-size:14px;color:#f5c924}.bp-home .report-download-container .report-download .report-download-info .report-right-center .ph-body-small[data-v-3c3eb362],.bp-home .report-download-container .report-download .report-download-info .report-right-head .ph-body-small[data-v-3c3eb362]{font-size:14px;color:#747789}.bp-home .report-download-container .report-download .report-download-info .report-right-center .ph-H-large-title[data-v-3c3eb362],.bp-home .report-download-container .report-download .report-download-info .report-right-head .ph-H-large-title[data-v-3c3eb362]{margin-bottom:8px;font-size:24px;color:#2d334d}.bp-home .report-download-container .report-download .report-download-info .report-right-center .pb-body-small-tertiary[data-v-3c3eb362],.bp-home .report-download-container .report-download .report-download-info .report-right-head .pb-body-small-tertiary[data-v-3c3eb362]{font-size:12px;color:#a2a5b0}.bp-home .report-download-container .report-download .report-download-info .show-more-button-container[data-v-3c3eb362]{height:auto;width:auto;background:0 0;display:flex;flex-direction:row;justify-content:flex-start;align-items:stretch;align-content:flex-start;cursor:pointer!important;padding:0}.bp-home .report-download-container .report-download .report-download-info .show-more-button-container .report-down-button[data-v-3c3eb362]{width:240px!important;border-radius:0!important;background:#ffdd4d;color:#2d334d;border:none;cursor:inherit;height:40px!important;text-align:center!important;display:inline-block!important;font-size:14px;letter-spacing:1px;line-height:32px}.bp-home .report-download-container .report-download .report-download-info .show-more-button-container .more-reports-button[data-v-3c3eb362]{width:137px;height:40px;display:flex;justify-content:center;align-items:center;margin-left:16px;margin-right:22px}.bp-home .report-download-container .report-download .report-download-info .show-more-button-container .more-reports-button .more-reports[data-v-3c3eb362]{display:flex;justify-content:center;align-items:center;font-size:14px}.bp-home .report-download-container .report-download .report-download-info .show-more-button-container .more-reports-button .more-reports .more-reports-img[data-v-3c3eb362]{width:21px;height:21px;margin-left:8px}.bp-home .data-show[data-v-3c3eb362]{height:778px;width:1200px;padding:0 100px 12px;background:0 0;display:flex;flex-direction:column;align-items:center;align-content:flex-start;justify-content:flex-start}.bp-home .data-show .report-connect-img[data-v-3c3eb362]{height:auto;width:auto;background:0 0;position:relative;top:-30px}.bp-home .data-show .home-about-us-peoples[data-v-3c3eb362]{font-size:24px;color:#747789;letter-spacing:.4px;text-align:center}.bp-home .data-show .ph-H-xLarge[data-v-3c3eb362]{margin-bottom:32px!important;font-size:40px;font-weight:200;color:#2d334d}.bp-home .data-show .show-more-button-container[data-v-3c3eb362]{width:auto;cursor:pointer;justify-content:flex-start;align-items:stretch}.bp-home .data-show .data-show-text-part[data-v-3c3eb362],.bp-home .data-show .show-more-button-container[data-v-3c3eb362]{height:auto;margin-bottom:43px;background:0 0;display:flex;flex-direction:row;align-content:flex-start}.bp-home .data-show .data-show-text-part[data-v-3c3eb362]{width:55%;justify-content:space-between;align-items:center;text-align:center}.bp-home .data-show .data-show-text-part .ph-body-medium_brand[data-v-3c3eb362]{font-size:16px;color:#f5d924}.bp-home .data-show .data-show-text-part .home-data-value-text-line[data-v-3c3eb362]{height:1px;width:83px;background:#697786;opacity:.2}.bp-home .data-show .data-show-img[data-v-3c3eb362]{height:421px;width:668px;-o-object-fit:contain;object-fit:contain;background:0 0}.bp-home .max-show[data-v-3c3eb362]{width:100%;min-height:688px;max-width:1200px;flex-direction:row;flex-wrap:wrap-reverse;justify-content:flex-start}.bp-home .max-show[data-v-3c3eb362],.bp-home .max-show .max-show-left[data-v-3c3eb362]{height:auto;background:0 0;display:flex;align-content:flex-start;align-items:stretch}.bp-home .max-show .max-show-left[data-v-3c3eb362]{width:auto;padding-left:100px;flex-direction:column;justify-content:center;flex:1}.bp-home .max-show .max-show-left .max-show-left-text-line[data-v-3c3eb362]{height:40px;width:60px;background:0 0;border-top:1px solid #ffcc30}.bp-home .max-show .max-show-left .max-show-left-text-row-1[data-v-3c3eb362]{height:auto;width:auto;margin-bottom:40px;background:0 0;display:flex;flex-direction:row;justify-content:flex-start;align-items:stretch;align-content:flex-start}.bp-home .max-show .max-show-left .max-show-left-text-row-1 .ph-H-xLarge[data-v-3c3eb362]{margin-right:4px;font-size:40px;font-weight:200;color:#2d334d}.bp-home .max-show .max-show-left .max-show-left-text-row-1 .ph-body-xsmall-tertiary[data-v-3c3eb362]{padding-top:28px;font-size:12px;color:#a2a5b0}.bp-home .max-show .max-show-left .max-text-center[data-v-3c3eb362]{white-space:pre-line;font-size:24px;color:#747789}.bp-home .max-show .max-show-left .max-text-center-brand[data-v-3c3eb362]{font-size:24px;color:#f5c924}.bp-home .max-show .max-show-left .max-show-more-button-container[data-v-3c3eb362]{height:auto;width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-top:40px;background:0 0;cursor:pointer;display:flex}.bp-home .max-show .max-show-left .max-show-more-button-container .max-button-go[data-v-3c3eb362]{height:40px;width:40px;background:#ffdd4d;padding:8px}.bp-home .max-show .max-show-right-img-container[data-v-3c3eb362]{height:auto;width:auto;background:0 0;flex:1;display:flex}.bp-home .max-show .max-show-right-img-container .max-show-right-img[data-v-3c3eb362]{height:688px;width:600px;-o-object-fit:contain;object-fit:contain;background:0 0}.bp-home .real-world[data-v-3c3eb362]{width:100%;height:auto;background:0 0;flex-direction:row;flex-wrap:wrap;min-height:498px;max-width:1200px;display:flex}.bp-home .real-world .real-world-left-img-container[data-v-3c3eb362]{height:auto;width:auto;background:0 0;flex:1;padding:62px 77px;display:flex}.bp-home .real-world .real-world-left-img-container .real-world-left-img[data-v-3c3eb362]{height:397px;width:457px;-o-object-fit:fill;object-fit:fill;background:0 0}.bp-home .real-world .real-world-right[data-v-3c3eb362]{height:auto;width:auto;padding-right:100px;padding-left:32px;background:0 0;display:flex;flex-direction:column;justify-content:center;flex:1}.bp-home .real-world .real-world-right .real-world-right-line[data-v-3c3eb362]{height:40px;width:60px;background:0 0;border-top:1px solid #ffcc30}.bp-home .real-world .real-world-right .real-world-right-text-line-1[data-v-3c3eb362]{height:auto;width:auto;margin-bottom:40px;background:0 0;display:flex;flex-direction:row}.bp-home .real-world .real-world-right .real-world-right-text-line-1 .ph-H-xLarge[data-v-3c3eb362]{font-size:40px;font-weight:200;color:#2d334d}.bp-home .real-world .real-world-right .ph-H-Large[data-v-3c3eb362]{font-size:24px;color:#747789}.bp-home .real-world .real-world-right .ph-H-Large_brand[data-v-3c3eb362]{font-size:24px;color:#f5c924}.bp-home .real-world .real-world-right .real-show-more-button-container[data-v-3c3eb362]{height:auto;width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-top:40px;background:0 0;cursor:pointer;display:flex}.bp-home .advisory[data-v-3c3eb362]{width:100%;height:auto;background:0 0;flex-direction:row;flex-wrap:wrap-reverse;min-height:498px;max-width:1200px;display:flex}.bp-home .advisory .advisory-left[data-v-3c3eb362]{height:auto;width:auto;padding-left:100px;background:0 0;display:flex;flex-direction:column;justify-content:center;flex:1}.bp-home .advisory .advisory-left .advisory-left-line[data-v-3c3eb362]{height:40px;width:60px;background:0 0;border-top:1px solid #ffcc30}.bp-home .advisory .advisory-left .advisory-left-text-line-1[data-v-3c3eb362]{height:auto;width:auto;margin-bottom:40px;background:0 0;display:flex;flex-direction:row}.bp-home .advisory .advisory-left .advisory-left-text-line-1 .ph-H-xLarge[data-v-3c3eb362]{font-size:40px;font-weight:200;color:#2d334d}.bp-home .advisory .advisory-left .ph-H-Large[data-v-3c3eb362]{white-space:pre-line;font-size:24px;color:#747789}.bp-home .advisory .advisory-left .ph-H-Large_brand[data-v-3c3eb362]{font-size:24px;color:#f5c924}.bp-home .advisory .advisory-left .advisory-show-more-button-container[data-v-3c3eb362]{height:auto;width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-top:40px;background:0 0;cursor:pointer;display:flex}.bp-home .advisory .advisory-right-img-container[data-v-3c3eb362]{height:auto;width:auto;background:0 0;flex:1;display:flex}.bp-home .advisory .advisory-right-img-container .advisory-right-img[data-v-3c3eb362]{height:498px;width:600px;background:0 0}.bp-home .case-icon-contaniner[data-v-3c3eb362]{padding:96px 125px 0}.bp-home .case-icon-contaniner[data-v-3c3eb362],.bp-home .case-icon-contaniner-response[data-v-3c3eb362]{height:-webkit-max-content;height:-moz-max-content;height:max-content;width:100%;max-width:1200px;background:0 0;justify-content:space-between;opacity:.6;display:flex;flex-direction:column;flex-wrap:wrap}.bp-home .case-icon-contaniner-response[data-v-3c3eb362]{padding:100px 4px 0}@media (max-width:992px) and (min-width:769px){.bp-home .truth-content-area[data-v-3c3eb362]{padding:0 60px!important}.bp-home .home-header-img[data-v-3c3eb362]{width:45%!important;-o-object-fit:contain!important;object-fit:contain!important;margin-top:64px!important}.bp-home .content-active-panel[data-v-3c3eb362]{width:23%!important;height:357px!important}.bp-home .content-active-panel[data-v-3c3eb362] .active-img{width:100%!important;height:220px!important}.bp-home .content-active-panel[data-v-3c3eb362] .active-info{width:100%!important;height:117px!important;padding:24px!important}.bp-home .content-active-bg-yellow[data-v-3c3eb362]{width:70%!important;top:220px!important;height:200px!important}.bp-home .active-line[data-v-3c3eb362]{position:absolute!important;left:60px!important;height:635px!important}.bp-home .content-active-bg-line-right[data-v-3c3eb362]{right:60px!important;height:250px!important}.bp-home .content-active-area .active-text[data-v-3c3eb362]{left:70px!important}.bp-home .report-download-container[data-v-3c3eb362]{margin-bottom:60px!important;margin-top:30px!important}.bp-home .report-download-container .report-download[data-v-3c3eb362]{height:auto!important;margin:0 60px!important;padding:24px 0!important}.bp-home .report-download-container .report-download .report-download-info[data-v-3c3eb362]{width:56%!important;height:auto!important;text-align:center}.bp-home .report-download-container .report-download .report-download-info .show-more-button-container[data-v-3c3eb362]{width:100%!important;justify-content:center!important}.bp-home .report-download-container .report-download .report-download-img-container[data-v-3c3eb362]{height:251px;width:44%!important;justify-content:center;align-items:center}.bp-home .data-show[data-v-3c3eb362]{width:100%!important;padding:0 50px!important}.bp-home .data-show .data-show-text-part[data-v-3c3eb362]{width:85%!important}.bp-home .data-show .data-show-img[data-v-3c3eb362]{height:388px!important;width:64%!important}.bp-home .max-show-left[data-v-3c3eb362]{padding:60px!important}.bp-home .advisory-right-img[data-v-3c3eb362],.bp-home .max-show-right-img[data-v-3c3eb362],.bp-home .real-world-left-img[data-v-3c3eb362]{width:100%!important;-o-object-fit:cover;object-fit:cover;min-width:312px!important}.bp-home .advisory-left[data-v-3c3eb362]{padding-left:60px!important}.bp-home .case-icon-contaniner[data-v-3c3eb362]{padding:100px 24px!important}}@media (max-width:768px) and (min-width:550px){.bp-home .truth-content-area[data-v-3c3eb362]{height:auto!important;width:100%!important;padding:0 8%!important;margin-top:150px;flex-wrap:wrap;justify-content:center!important}.bp-home .truth-content-area .ph-H-Display[data-v-3c3eb362]{text-align:center}.bp-home .truth-content-area .home-header-img[data-v-3c3eb362]{width:70%!important;-o-object-fit:contain!important;object-fit:contain!important;margin-top:64px!important}.bp-home .truth-content-area .ph-body-medium[data-v-3c3eb362]{text-align:center}.bp-home .content-active-area[data-v-3c3eb362]{flex-wrap:wrap;height:auto!important}.bp-home .content-active-area .active-line[data-v-3c3eb362]{position:absolute!important;left:40px!important}.bp-home .content-active-area .active-text[data-v-3c3eb362]{left:50px!important}.bp-home .content-active-area .content-active-panel[data-v-3c3eb362]{width:74%!important;height:172px!important;flex-wrap:wrap;margin-top:24px!important}.bp-home .content-active-area .content-active-panel[data-v-3c3eb362] .active-img{width:50%!important;height:172px!important}.bp-home .content-active-area .content-active-panel[data-v-3c3eb362] .active-img .above-data-logo{display:none!important}.bp-home .content-active-area .content-active-panel[data-v-3c3eb362] .active-info{width:50%!important;height:172px!important;padding:12px!important}.bp-home .content-active-area .content-active-panel[data-v-3c3eb362] .home-avtive-names{height:90px!important}.bp-home .content-active-area .content-active-panel[data-v-3c3eb362] .active-logo{display:flex!important}.bp-home .content-active-area[data-v-3c3eb362] .content-active-review-more-button{bottom:10px!important}.bp-home .content-active-area .content-active-bg-yellow[data-v-3c3eb362]{height:440px!important;width:73%!important;top:185px!important}.bp-home .report-download-container[data-v-3c3eb362]{margin-bottom:60px!important;margin-top:140px!important}.bp-home .report-download-container .report-download[data-v-3c3eb362]{flex-wrap:wrap;height:auto!important;margin:0 40px!important;padding:24px 0!important;justify-content:center!important}.bp-home .report-download-container .report-download-info[data-v-3c3eb362]{width:100%!important;height:auto!important;text-align:center}.bp-home .report-download-container .report-download-info .show-more-button-container[data-v-3c3eb362]{width:100%!important;justify-content:center!important;flex-direction:column!important;align-items:center!important}.bp-home .data-show[data-v-3c3eb362]{width:100%!important;padding:0 50px!important}.bp-home .data-show .data-show-text-part[data-v-3c3eb362]{width:85%!important}.bp-home .data-show .data-show-img[data-v-3c3eb362]{height:265px!important;width:100%!important;-o-object-fit:cover;object-fit:cover}.bp-home .max-show[data-v-3c3eb362]{flex-direction:column-reverse!important;padding:40px!important}.bp-home .max-show .max-show-left[data-v-3c3eb362]{padding:24px!important;align-items:center!important}.bp-home .max-show .max-show-left .max-show-left-text-row-1[data-v-3c3eb362]{flex-direction:column!important;align-content:center!important;margin-bottom:0!important}.bp-home .max-show .max-show-left .max-show-left-text-row-1 .ph-H-xLarge[data-v-3c3eb362]{text-align:center}.bp-home .max-show .max-show-left .max-show-left-text-row-1 .ph-body-xsmall-tertiary[data-v-3c3eb362],.bp-home .real-world-left-img-container[data-v-3c3eb362]{padding:0!important}.bp-home .advisory-right-img[data-v-3c3eb362],.bp-home .max-show-right-img[data-v-3c3eb362],.bp-home .real-world-left-img[data-v-3c3eb362]{width:100%!important;height:320px!important;-o-object-fit:cover;object-fit:cover;min-width:312px!important}.bp-home .real-world[data-v-3c3eb362]{flex-direction:column!important;align-content:center!important;padding:40px!important}.bp-home .real-world .real-world-right[data-v-3c3eb362]{align-items:center!important;padding:0 24px!important}.bp-home .real-world .real-world-left-img[data-v-3c3eb362]{padding:24px!important}.bp-home .advisory[data-v-3c3eb362]{padding:40px!important;flex-direction:column!important;align-content:center!important}.bp-home .advisory .advisory-right-img[data-v-3c3eb362]{margin-top:60px!important}.bp-home .advisory .advisory-left[data-v-3c3eb362]{padding:0 24px!important;align-items:center!important}.bp-home .advisory .advisory-left .advisory-left-text-line-1[data-v-3c3eb362]{margin-bottom:0!important}}@media (max-width:549px),(width:549px){.bp-home .ph-H-xLarge[data-v-3c3eb362]{font-size:28px!important}.bp-home .ph-H-Display[data-v-3c3eb362]{font-size:30px!important}.bp-home .truth-content-area[data-v-3c3eb362]{height:auto!important;width:100%!important;padding:0 8%!important;margin-top:100px;flex-wrap:wrap;justify-content:center!important}.bp-home .truth-content-area .ph-body-medium[data-v-3c3eb362],.bp-home .truth-content-area .ph-H-Display[data-v-3c3eb362]{text-align:center}.bp-home .truth-content-area .home-header-img[data-v-3c3eb362]{width:100%!important;-o-object-fit:contain!important;object-fit:contain!important}.bp-home .content-active-area[data-v-3c3eb362]{flex-wrap:wrap;height:auto!important}.bp-home .content-active-area .active-line[data-v-3c3eb362],.bp-home .content-active-area .active-text[data-v-3c3eb362]{position:absolute!important;left:24px!important}.bp-home .content-active-area .active-line[data-v-3c3eb362]{height:935px!important}.bp-home .content-active-area .content-active-bg-line-right[data-v-3c3eb362]{right:24px!important;top:730px!important;height:110px!important}.bp-home .content-active-area .content-active-panel[data-v-3c3eb362]{width:74%!important;height:172px!important;flex-wrap:wrap;margin-top:8px!important}.bp-home .content-active-area .content-active-panel[data-v-3c3eb362] .above-data-logo{display:none!important}.bp-home .content-active-area .content-active-panel[data-v-3c3eb362] .active-img{width:130px!important;height:172px!important}.bp-home .content-active-area .content-active-panel[data-v-3c3eb362] .active-img .img-mask,.bp-home .content-active-area .content-active-panel[data-v-3c3eb362] .active-img img{border-radius:2px 0 0 2px!important}.bp-home .content-active-area .content-active-panel[data-v-3c3eb362] .active-info{width:50%!important;height:150px!important;padding:16px 8px 0 5px!important}.bp-home .content-active-area .content-active-panel[data-v-3c3eb362] .position-info{bottom:25px!important}.bp-home .content-active-area .content-active-panel[data-v-3c3eb362] .home-avtive-names{height:100%!important;margin-bottom:0}.bp-home .content-active-area .content-active-panel[data-v-3c3eb362] .active-logo{display:inherit!important}.bp-home .content-active-area .content-active-panel[data-v-3c3eb362] .active-title{height:65px}.bp-home .content-active-area[data-v-3c3eb362] .content-active-review-more-button{bottom:16px!important}.bp-home .content-active-area .content-active-bg-yellow[data-v-3c3eb362]{height:529px!important;width:73%!important;top:55px!important}.bp-home .report-download-container[data-v-3c3eb362]{height:auto!important;margin-bottom:60px!important;margin-top:112px!important}.bp-home .report-download-container .report-download[data-v-3c3eb362]{flex-wrap:wrap;height:auto!important;margin:0 24px;padding:41px 24px 24px 24px!important}.bp-home .report-download-container .report-download .report-download-img-container[data-v-3c3eb362]{margin-bottom:24px}.bp-home .report-download-container .report-download .report-download-info[data-v-3c3eb362]{width:100%!important;height:auto!important;text-align:center}.bp-home .report-download-container .report-download .report-download-info .show-more-button-container[data-v-3c3eb362]{width:100%!important;justify-content:center!important;flex-direction:column;align-items:center}.bp-home .data-show[data-v-3c3eb362]{width:100%!important;height:700px!important;padding:0 24px!important}.bp-home .data-show .home-about-us-peoples[data-v-3c3eb362]{font-size:16px!important;letter-spacing:.27px!important}.bp-home .data-show .data-show-text-part[data-v-3c3eb362]{width:100%!important}.bp-home .data-show .data-show-img[data-v-3c3eb362]{height:265px!important;width:100%!important;-o-object-fit:contain;object-fit:contain}.bp-home .max-show .max-show-left[data-v-3c3eb362]{padding:20px 24px 48px 24px!important;align-items:center!important}.bp-home .max-show .max-show-left .max-show-left-text-line[data-v-3c3eb362]{height:32px!important}.bp-home .max-show .max-show-left .max-show-left-text-row-1[data-v-3c3eb362]{flex-direction:column!important;align-content:center!important;margin-bottom:0!important}.bp-home .max-show .max-show-left .max-show-left-text-row-1 .ph-H-xLarge[data-v-3c3eb362]{text-align:center}.bp-home .max-show .max-show-left .max-show-left-text-row-1 .ph-body-xsmall-tertiary[data-v-3c3eb362]{padding:0!important;margin-bottom:24px!important}.bp-home .max-show .max-show-left .max-show-more-button-container[data-v-3c3eb362]{margin-top:24px!important}.bp-home .max-show .max-show-right-img-container[data-v-3c3eb362]{padding:0 24px}.bp-home .max-show .max-show-right-img-container .max-show-right-img[data-v-3c3eb362]{width:100%!important;height:320px!important;-o-object-fit:contain!important;object-fit:contain!important;min-width:312px!important}.bp-home .advisory-right-img[data-v-3c3eb362],.bp-home .real-world-left-img[data-v-3c3eb362]{width:100%!important;height:320px!important;-o-object-fit:cover;object-fit:cover;min-width:312px!important}.bp-home .real-world-left-img-container[data-v-3c3eb362]{padding:0!important}.bp-home .real-world-left-img-container .real-world-left-img[data-v-3c3eb362]{margin-bottom:16px!important;margin-top:24px;-o-object-fit:contain!important;object-fit:contain!important}.bp-home .real-world .real-world-right[data-v-3c3eb362]{align-items:center!important;padding:0 24px!important;margin-bottom:48px}.bp-home .real-world .real-world-right .real-world-right-text-line-1[data-v-3c3eb362]{margin-bottom:24px!important}.bp-home .real-world .real-world-right .real-world-right-line[data-v-3c3eb362]{height:32px!important}.bp-home .real-world .real-world-right .ph-H-Large[data-v-3c3eb362]{text-align:center}.bp-home .real-world .real-world-right .real-show-more-button-container[data-v-3c3eb362]{margin-top:24px!important}.bp-home .real-world .real-world-left-img[data-v-3c3eb362]{padding:24px!important}.bp-home .advisory .advisory-left[data-v-3c3eb362]{padding:40px 24px 48px!important;align-items:center!important}.bp-home .advisory .advisory-left .advisory-left-text-line-1[data-v-3c3eb362]{margin-bottom:24px!important}.bp-home .advisory .advisory-left .advisory-show-more-button-container[data-v-3c3eb362]{margin-top:24px!important}.bp-home .advisory .advisory-right-img-container[data-v-3c3eb362]{margin-top:48px}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "771f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_nav_top_response_vue_vue_type_style_index_0_id_7bf19c70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6acc");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_nav_top_response_vue_vue_type_style_index_0_id_7bf19c70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_nav_top_response_vue_vue_type_style_index_0_id_7bf19c70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_nav_top_response_vue_vue_type_style_index_0_id_7bf19c70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_nav_top_response_vue_vue_type_style_index_0_id_7bf19c70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "7a30":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("a09e");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("5503e7ce", content, shadowRoot)
};

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "88df":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_select_vue_vue_type_style_index_0_id_75c233d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("93c5");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_select_vue_vue_type_style_index_0_id_75c233d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_select_vue_vue_type_style_index_0_id_75c233d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_select_vue_vue_type_style_index_0_id_75c233d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_select_vue_vue_type_style_index_0_id_75c233d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "8b68":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-7fca35cc]{box-sizing:border-box}.svg-icon[data-v-7fca35cc]{width:16px;height:16px}.bp-option-group[data-v-7fca35cc]{margin:0;padding:4px 0;background:#fff;box-shadow:0 4px 8px -2px rgba(9,30,66,.25);border-radius:3px}.bp-select-title[data-v-7fca35cc]{height:100%;width:100%;display:flex;align-items:center;padding:0 8px;justify-content:space-between}.d-none[data-v-7fca35cc]{display:none}svg[data-v-7fca35cc]:focus{outline:none}.bp-select[data-v-7fca35cc]{height:40px;width:240px;margin-left:8;margin-right:8;margin-top:8;margin-bottom:8;padding-left:8;padding-right:8;padding-top:8;padding-bottom:8;background:rgba(9,30,66,.04);padding:0;margin:0;position:relative;cursor:pointer;box-sizing:border-box;border-radius:4px}.bp-select[data-v-7fca35cc]:hover{background:#ebecf0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ "92d1":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("3f44");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("c2aa9cce", content, shadowRoot)
};

/***/ }),

/***/ "93c5":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("b354");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("0a313c1c", content, shadowRoot)
};

/***/ }),

/***/ "95b6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_text_vue_vue_type_style_index_0_id_3682c21f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9a51");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_text_vue_vue_type_style_index_0_id_3682c21f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_text_vue_vue_type_style_index_0_id_3682c21f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_text_vue_vue_type_style_index_0_id_3682c21f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_text_vue_vue_type_style_index_0_id_3682c21f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "9a51":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("2bbb");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("4f0ee6b8", content, shadowRoot)
};

/***/ }),

/***/ "a09e":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".borderNone[data-v-15d6d902]{border-bottom:0!important}.nav[data-v-15d6d902]{background:#fff;text-align:center;font-size:14px}.bordernavInverse[data-v-15d6d902]{border-bottom:1px solid rgba(22,28,57,.12)}.navInverse[data-v-15d6d902]{background:#666;text-align:center;font-size:14px}.bgWhite[data-v-15d6d902]{background-color:#fff!important}.fixed-nav[data-v-15d6d902]{height:80px;width:100%;top:0;padding:0 100px;position:fixed;z-index:1000}.fixed-nav[data-v-15d6d902],.fixed-nav .selectMenu[data-v-15d6d902]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.fixed-nav .selectMenu[data-v-15d6d902]{height:auto;width:auto;background:0 0;color:#fff;font-size:14px;align-content:flex-start;padding:0}.fixed-nav .selectMenu .bp-select[data-v-15d6d902]{height:40px;width:-webkit-max-content;width:-moz-max-content;width:max-content;background:0 0;padding:0;margin:0;position:relative;cursor:pointer;box-sizing:border-box;color:#2d334d}.fixed-nav .selectMenu .bp-select[data-v-15d6d902]:hover{background:transparent}.fixed-nav .selectMenu .bp-select[data-v-15d6d902]:focus{outline:none}.fixed-nav .selectMenu[data-v-15d6d902] .bp-select .bp-option{height:auto;min-height:32px;width:100%;background:0 0;color:#344563;display:flex;padding:0 16px;align-items:center;margin-bottom:16px;text-align:left}.fixed-nav .selectMenu .bp-select .bp-option[data-v-15d6d902]:hover{background-color:#ebecf0}.fixed-nav .selectMenu[data-v-15d6d902] .bp-select-title{height:100%;display:flex;align-items:center;padding:0 8px;justify-content:space-between}.fixed-nav .selectMenu[data-v-15d6d902] .bp-option-group,.fixed-nav .selectMenu[data-v-15d6d902] .bp-select-title{width:-webkit-max-content!important;width:-moz-max-content!important;width:max-content!important}.fixed-nav .selectMenu[data-v-15d6d902] .bp-option-group{position:absolute;background:#fff;padding-top:16px;max-width:300px;margin:0;padding:4px 0;border-radius:3px;box-shadow:0 4px 8px -2px rgba(9,30,66,.25)}.fixed-nav .selectMenu .bp-option[data-v-15d6d902]:hover{background-color:#ebecf0}.fixed-nav .selectMenu .option-active[data-v-15d6d902]{color:#fff!important;background-color:rgba(9,30,66,.71)!important}.fixed-nav .selectMenu .option-active .icon path[data-v-15d6d902]{fill:#fff}.fixed-nav .selectMenu .bp-text[data-v-15d6d902]{height:auto;width:auto;background:0 0;color:#2d334d!important;font-size:14px;letter-spacing:0;margin-left:32px;cursor:pointer!important;padding:0}.fixed-nav .nav-border[data-v-15d6d902]{height:80px;width:100%;display:flex;align-content:flex-start;align-items:center;justify-content:space-between}.fixed-nav .navButton[data-v-15d6d902]{display:flex;align-content:flex-start;align-items:stretch;justify-content:flex-start}.fixed-nav .navButton .concact[data-v-15d6d902]{background:#ffdd4d!important;border:none;border-radius:40px!important;padding:0 10px;margin-right:8px}.fixed-nav .navButton .concact[data-v-15d6d902],.fixed-nav .navButton .login[data-v-15d6d902]{line-height:32px!important;height:32px!important;color:#2d334d!important;text-align:center!important;display:inline-block!important;font-size:14px}.fixed-nav .navButton .login[data-v-15d6d902]{border:1px solid rgba(22,28,57,.12)!important;border-radius:40px!important;width:80px!important;background:0 0!important}@media screen and (max-width:992px) and (min-width:769px){[data-v-15d6d902]::-webkit-scrollbar-thumb{background:transparent}.fixed-nav[data-v-15d6d902]{padding:0 60px!important}}@media screen and (max-width:768px) and (min-width:480px){[data-v-15d6d902]::-webkit-scrollbar-thumb{background:transparent}.fixed-nav[data-v-15d6d902],.fixed-nav-inverse[data-v-15d6d902]{padding:0 40px!important}}.fade-enter-active[data-v-15d6d902],.fade-leave-active[data-v-15d6d902]{transition:all 1s}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "a3da":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("6fa0");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("09467008", content, shadowRoot)
};

/***/ }),

/***/ "b354":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-75c233d0]{box-sizing:border-box}.svg-icon[data-v-75c233d0]{width:16px;height:16px}.bp-option-group[data-v-75c233d0]{margin:0;padding:4px 0;background:#fff;box-shadow:0 4px 8px -2px rgba(9,30,66,.25);border-radius:3px}.bp-select-title[data-v-75c233d0]{height:100%;width:100%;display:flex;align-items:center;padding:0 8px;justify-content:space-between}.d-none[data-v-75c233d0]{display:none}svg[data-v-75c233d0]:focus{outline:none}.bp-select[data-v-75c233d0]{height:40px;width:240px;margin-left:8;margin-right:8;margin-top:8;margin-bottom:8;padding-left:8;padding-right:8;padding-top:8;padding-bottom:8;background:rgba(9,30,66,.04);padding:0;margin:0;position:relative;cursor:pointer;box-sizing:border-box;border-radius:4px}.bp-select[data-v-75c233d0]:hover{background:#ebecf0}.bp-text[data-v-75c233d0]{height:auto;width:auto;background:0 0;padding:0}.ph-body-xsmall-tertiary[data-v-75c233d0]{font-size:12px;color:#a2a5b0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "b530":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ff70");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("394faee9", content, shadowRoot)
};

/***/ }),

/***/ "b5af":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".bp-input[data-v-932c7e8e]{height:32px;width:240px;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background:#fff;line-height:14px;font-size:14px;padding:10px 8px;border:1px solid #dfe1e6;border-radius:4px;color:#172b4d;box-sizing:border-box}.bp-input[data-v-932c7e8e]:focus{border:1px solid #3172e0;outline:none}input[data-v-932c7e8e]:disabled{background:rgba(9,30,66,.04)!important;border:none!important;color:rgba(9,30,66,.31);cursor:not-allowed}.input-compact[data-v-932c7e8e]{height:24px}.input-comfy[data-v-932c7e8e]{height:40px}.input-default[data-v-932c7e8e]{height:32px}.input-error[data-v-932c7e8e]{border:1px solid #de350b!important}.input-warning[data-v-932c7e8e]{border:1px solid #ffe380!important}.input-success[data-v-932c7e8e]{border:1px solid #36b37e!important}.input-info[data-v-932c7e8e]{border:1px solid #403294!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "b5ec":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_button_vue_vue_type_style_index_0_id_74775838_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fd0b");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_button_vue_vue_type_style_index_0_id_74775838_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_button_vue_vue_type_style_index_0_id_74775838_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_button_vue_vue_type_style_index_0_id_74775838_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_button_vue_vue_type_style_index_0_id_74775838_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "b5f9":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("efa7");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("5224a7ee", content, shadowRoot)
};

/***/ }),

/***/ "b780":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("32ef");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("714aa572", content, shadowRoot)
};

/***/ }),

/***/ "c7d8":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("3e4f");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("19f25a36", content, shadowRoot)
};

/***/ }),

/***/ "cebd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_option_vue_vue_vue_type_style_index_0_id_8fcec036_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("294e");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_option_vue_vue_vue_type_style_index_0_id_8fcec036_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_option_vue_vue_vue_type_style_index_0_id_8fcec036_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_option_vue_vue_vue_type_style_index_0_id_8fcec036_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_option_vue_vue_vue_type_style_index_0_id_8fcec036_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "d3b7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_icon_line_vue_vue_type_style_index_0_id_0ad0c780_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f290");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_icon_line_vue_vue_type_style_index_0_id_0ad0c780_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_icon_line_vue_vue_type_style_index_0_id_0ad0c780_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_icon_line_vue_vue_type_style_index_0_id_0ad0c780_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_icon_line_vue_vue_type_style_index_0_id_0ad0c780_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "d83b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_card_activity_vue_vue_type_style_index_0_id_dcfdcb2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("92d1");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_card_activity_vue_vue_type_style_index_0_id_dcfdcb2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_card_activity_vue_vue_type_style_index_0_id_dcfdcb2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_card_activity_vue_vue_type_style_index_0_id_dcfdcb2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_card_activity_vue_vue_type_style_index_0_id_dcfdcb2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "dcea":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".svg-icon[data-v-8fcec036]{width:16px;height:16px}svg[data-v-8fcec036]:focus{outline:none}li.option-active[data-v-8fcec036]{color:#fff!important;background-color:rgba(9,30,66,.71)!important}li.option-active .icon path[data-v-8fcec036]{fill:#fff}.bp-option[data-v-8fcec036]{height:32px;width:100%;margin-left:8;margin-right:8;margin-top:8;margin-bottom:8;padding-left:8;padding-right:8;padding-top:8;padding-bottom:8;background:transparent;color:#344563;display:flex;padding:0 16px;align-items:center}.bp-option[data-v-8fcec036]:hover{background-color:#ebecf0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "e73b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_nav_top_vue_vue_type_style_index_0_id_15d6d902_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7a30");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_nav_top_vue_vue_type_style_index_0_id_15d6d902_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_nav_top_vue_vue_type_style_index_0_id_15d6d902_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_nav_top_vue_vue_type_style_index_0_id_15d6d902_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_nav_top_vue_vue_type_style_index_0_id_15d6d902_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "edd3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_textarea_vue_vue_type_style_index_0_id_2b34fca9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b530");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_textarea_vue_vue_type_style_index_0_id_2b34fca9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_textarea_vue_vue_type_style_index_0_id_2b34fca9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_textarea_vue_vue_type_style_index_0_id_2b34fca9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_textarea_vue_vue_type_style_index_0_id_2b34fca9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "efa7":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-e838f1c4]{letter-spacing:.4px;line-height:1.6;box-sizing:border-box}a[data-v-e838f1c4]{font-size:14px;color:#3373e1;line-height:32px;text-decoration:none;text-align:center}.cursor-pointer[data-v-e838f1c4]{cursor:pointer}.ph-body-medium[data-v-e838f1c4]{font-size:16px;color:#747789}.ph-body-small[data-v-e838f1c4]{font-size:14px;color:#747789}.ph-H-Large_2[data-v-e838f1c4]{font-size:24px;color:#2d334d}.ph-body-xsmall-tertiary[data-v-e838f1c4]{font-size:12px;color:#a2a5b0}.text-right[data-v-e838f1c4]{text-align:right}.bp-img[data-v-e838f1c4]{-o-object-fit:cover;object-fit:cover}.mb-2[data-v-e838f1c4]{margin-bottom:8px}.mr-3[data-v-e838f1c4]{margin-right:16px}.page-bottom-part[data-v-e838f1c4]{height:auto;flex-direction:column}.page-bottom-part[data-v-e838f1c4],.page-bottom-part .contact-container[data-v-e838f1c4]{width:100%;background:transparent;display:flex;align-items:center}.page-bottom-part .contact-container[data-v-e838f1c4]{height:313px;max-width:1200px;flex-direction:row;justify-content:center}.page-bottom-part .contact-container .contact-content[data-v-e838f1c4]{height:153px;width:914px;border-radius:4px;padding:0 100px;display:flex;justify-content:space-between;align-items:center;background:transparent;background-image:conic-gradient(from 90deg,#f9fafe,#e5e7f0);background-image:-moz-linear-gradient(from 90deg,#f9fafe,#e5e7f0);background:-moz-linear-gradient(top,#f9fafe,#e5e7f0)}.page-bottom-part .contact-container .contact-content .contact-slogan-part[data-v-e838f1c4]{height:auto;width:auto;background:transparent;display:flex;flex-direction:column}.page-bottom-part .contact-container .contact-content .contact-us-button[data-v-e838f1c4]{height:40px;width:137px;padding:1px 6px;line-height:32px;border:none;background:#161c39;color:#fff;font-size:14px;border-radius:2px;outline:0;cursor:pointer;justify-content:center}.page-bottom-part .page-bottom[data-v-e838f1c4]{height:auto;width:100%;min-width:375px;background:rgba(22,28,57,.02);padding:100px 100px 0}.page-bottom-part .page-bottom .bottom-pharbers[data-v-e838f1c4]{height:auto;width:100%;margin-bottom:65px;background:transparent;display:flex;flex-direction:column}.page-bottom-part .page-bottom .bottom-pharbers .bottom-pharbers-icon[data-v-e838f1c4]{height:32px;width:102px;margin-bottom:64px;background:transparent}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container[data-v-e838f1c4],.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-product-container[data-v-e838f1c4]{display:flex}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-product-container .bottom-list-a[data-v-e838f1c4]{height:auto;width:auto;margin-right:64px;background:0 0;display:flex;flex-direction:column}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-product-container .bottom-list-a .bottom-pharbers-title[data-v-e838f1c4]{margin-bottom:24px;color:#161c39;height:auto;width:auto;background:0 0;font-size:14px}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-product-container .bottom-list-b[data-v-e838f1c4]{display:flex;flex-direction:column}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-product-container .bottom-list-b .bottom-pharbers-title[data-v-e838f1c4]{margin-bottom:24px;color:#161c39;height:auto;width:auto;background:0 0;font-size:14px}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-address[data-v-e838f1c4]{height:auto;width:auto;background:0 0;flex:1;display:flex;justify-content:flex-end;align-items:flex-end}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-address .address-bj-part[data-v-e838f1c4]{height:auto;width:auto;margin-right:24px;background:0 0;display:flex;flex-direction:column}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-address .address-sh-part[data-v-e838f1c4]{height:auto;width:auto;background:0 0;display:flex;flex-direction:column}.page-bottom-part .page-bottom .bottom-contact[data-v-e838f1c4]{padding-bottom:24px;border-bottom:1px solid #e2e4e7;justify-content:space-between}.page-bottom-part .page-bottom .bottom-contact[data-v-e838f1c4],.page-bottom-part .page-bottom .bottom-contact .bottom-contact-left[data-v-e838f1c4]{height:auto;width:auto;background:0 0;display:flex}.page-bottom-part .page-bottom .bottom-contact .bottom-contact-left .select-language[data-v-e838f1c4]{width:auto;background:0 0}.page-bottom-part .page-bottom .bottom-contact .bottom-contact-left .select-language[data-v-e838f1c4] .bp-select-title{font-size:14px;color:#747789;height:24px;width:-webkit-max-content;width:-moz-max-content;width:max-content}.page-bottom-part .page-bottom .bottom-contact .bottom-contact-left .select-language[data-v-e838f1c4] .bp-select-title .select-language-icon{padding:3px;width:24px;height:24px}.page-bottom-part .page-bottom .bottom-contact .bottom-contact-left .select-language[data-v-e838f1c4] .bp-option-group{width:-webkit-max-content;width:-moz-max-content;width:max-content}.page-bottom-part .page-bottom .bottom-contact .bottom-contact-left .select-language[data-v-e838f1c4] .bp-option-group .bp-option{font-size:14px}.page-bottom-part .page-bottom .bottom-contact .bottom-contact-right[data-v-e838f1c4]{width:auto;height:auto;background:0 0}.page-bottom-part .page-bottom .bottom-contact .bottom-contact-right .bottom-contact-icon[data-v-e838f1c4]{height:24px;width:24px;margin-left:24px;background:0 0}.page-bottom-part .page-bottom .bottom-copyright[data-v-e838f1c4]{height:97px;width:100%;background:0 0;display:flex;justify-content:space-between;align-items:center}.page-bottom-part .page-bottom .bottom-copyright .bottom-copyright-left[data-v-e838f1c4]{width:55%;height:auto;display:flex;justify-content:space-between}.page-bottom-part .page-bottom .bottom-copyright .bottom-copyright-left .online-filing[data-v-e838f1c4]{display:flex;align-items:center}.page-bottom-part .page-bottom .bottom-copyright .bottom-copyright-left .online-filing .presented-logo[data-v-e838f1c4]{width:20px;height:20px;margin-right:4px}@media screen and (max-width:992px){.page-bottom-part .contact-container .contact-content[data-v-e838f1c4]{width:88%;height:auto;display:flex;justify-content:space-between;align-items:center;padding:40px 80px;flex-wrap:wrap}.page-bottom-part .page-bottom[data-v-e838f1c4]{padding:100px 60px 0}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container[data-v-e838f1c4]{width:100%;flex-wrap:wrap}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-product-container[data-v-e838f1c4]{width:375px}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-address[data-v-e838f1c4]{margin-top:20px;justify-content:center}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-address .address-bj-part span[data-v-e838f1c4],.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-address .address-sh-part span[data-v-e838f1c4]{text-align:left}}@media screen and (max-width:768px){.page-bottom-part .contact-container .contact-content[data-v-e838f1c4]{width:90%;height:auto;display:flex;justify-content:space-between;align-items:center;padding:40px 80px;flex-direction:column}.page-bottom-part .contact-container .contact-content .response-text-center[data-v-e838f1c4]{text-align:center}.page-bottom-part .contact-container .contact-content .contact-us-button[data-v-e838f1c4]{margin-top:24px}.page-bottom-part .page-bottom[data-v-e838f1c4]{padding:100px 40px 0}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container[data-v-e838f1c4]{flex-direction:column}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-address[data-v-e838f1c4]{justify-content:flex-start}}@media screen and (max-width:480px){.page-bottom-part .contact-container[data-v-e838f1c4]{height:307px}.page-bottom-part .contact-container .contact-content[data-v-e838f1c4]{width:100%;height:auto;display:flex;flex-direction:column;justify-content:center;align-content:center;padding:40px 0;flex-wrap:wrap;margin-right:24px;margin-left:24px}.page-bottom-part .contact-container .contact-content .response-text-center[data-v-e838f1c4]{text-align:center}.page-bottom-part .contact-container .contact-content .contact-us-button[data-v-e838f1c4]{margin-top:24px}.page-bottom-part .page-bottom[data-v-e838f1c4]{padding:100px 16px 0}.page-bottom-part .page-bottom .bottom-copyright[data-v-e838f1c4]{flex-direction:column;justify-content:center;align-items:flex-start}.page-bottom-part .page-bottom .bottom-copyright .bottom-copyright-left[data-v-e838f1c4]{width:100%;margin-bottom:16px}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "f290":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("5daa");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("93b84792", content, shadowRoot)
};

/***/ }),

/***/ "f6b3":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-7f64320e]{box-sizing:border-box}.case-icon-line[data-v-7f64320e]{flex-wrap:wrap;height:auto;width:100%;background:0 0;display:flex;flex-direction:row;justify-content:space-between;margin-bottom:8px}.case-icon-line .case-icon[data-v-7f64320e]{height:49px;width:33%!important;-o-object-fit:contain!important;object-fit:contain!important;margin-bottom:32px;background:0 0}.case-icon-line-three[data-v-7f64320e]{padding:0 100px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "f7bc":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".svg-icon[data-v-74775838]{width:1em;height:1em;vertical-align:-.15em;fill:currentColor;overflow:hidden;margin-right:4px}svg[data-v-74775838]:focus{outline:none}.hide[data-v-74775838]{display:none}.bp-button[data-v-74775838]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:14px;text-align:center;padding:0 12px;border:0;border-radius:4px;cursor:pointer;outline:none;display:flex;flex-direction:row;align-items:center}.bp-button[data-v-74775838],.bp-button-group[data-v-74775838]{height:auto;width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;background:#fff}.bp-button-group[data-v-74775838]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}button[data-v-74775838]{outline:none}button[data-v-74775838]:focus{outline:none!important}button.button-primary[data-v-74775838]{background:#7163c5;color:#fff}.button-primary[data-v-74775838]:hover{background:#9084d2}.button-primary[data-v-74775838]:active{background:#5342b3}.button-primary .button-icon-color path[data-v-74775838]{fill:#fff}.button-primary:disabled .button-icon-color path[data-v-74775838]{fill:rgba(9,30,66,.31)}button.button-standard[data-v-74775838]{background:rgba(9,30,66,.04);color:rgba(9,30,66,.71)}.button-standard[data-v-74775838]:hover{background:#e5eaec}.button-standard[data-v-74775838]:active{background:#f2f0f9;color:#7163c5}.button-standard .button-icon-color path[data-v-74775838]{fill:rgba(9,30,66,.71)}.button-standard:disabled .button-icon-color path[data-v-74775838]{fill:rgba(9,30,66,.31)}.button-standard:active .button-icon-color path[data-v-74775838]{fill:#7163c5}.button-primary[data-v-74775838]:disabled,.button-standard[data-v-74775838]:disabled{background:rgba(9,30,66,.04);color:rgba(9,30,66,.31);cursor:not-allowed}button.button-subtle[data-v-74775838]{background:#fff;color:rgba(9,30,66,.71)}.button-subtle[data-v-74775838]:hover{background:#e5eaec}.button-subtle[data-v-74775838]:active{background:#f2f0f9}.button-subtle[data-v-74775838]:disabled{color:rgba(9,30,66,.31);cursor:not-allowed}.button-subtle .button-icon-color path[data-v-74775838]{fill:rgba(9,30,66,.71)}.button-subtle:disabled .button-icon-color path[data-v-74775838]{fill:rgba(9,30,66,.31)}.button-subtle:active .button-icon-color path[data-v-74775838]{fill:#7163c5}.button-destructive[data-v-74775838]{background:#de350b;color:#fff}.button-destructive[data-v-74775838]:hover{background:#ff5630}.button-destructive[data-v-74775838]:active{background:#bf2600}.button-warning[data-v-74775838]{background:#ffe380;color:rgba(9,30,66,.71)}.button-warning[data-v-74775838]:hover{background:#ffc400}.button-warning[data-v-74775838]:active{background:#fff0b3}.button-density-comfy[data-v-74775838]{height:40px;line-height:40px}.button-density-default[data-v-74775838]{height:32px;line-height:32px}.button-density-compact[data-v-74775838]{height:24px;line-height:24px}.bp-button.btn-block[data-v-74775838]{width:100%}.icon-and-opacity path[data-v-74775838]{fill:hsla(0,0%,100%,.8)}.agenda-text-center[data-v-74775838]{line-height:104px;width:70px}.button-official-gray-line[data-v-74775838]{width:80px;height:32px;line-height:32px;background:linear-gradient(45deg,rgba(22,28,57,.2),rgba(22,28,57,.2) 5%,transparent 0,transparent 50%,rgba(22,28,57,.2) 0,rgba(22,28,57,.2) 55%,transparent 0,transparent)!important;background-size:10px 10px!important;border:none;font-weight:500;font-size:12px;color:#2d334d}.button-official-yellow-line-inverse[data-v-74775838]{color:hsla(0,0%,100%,0)}.button-official-yellow-line[data-v-74775838],.button-official-yellow-line-inverse[data-v-74775838]{padding:0 24px;height:32px;line-height:32px;background:linear-gradient(45deg,rgba(255,221,77,.5),rgba(255,221,77,.5) 5%,transparent 0,transparent 50%,rgba(255,221,77,.5) 0,rgba(255,221,77,.5) 55%,transparent 0,transparent)!important;background-size:10px 10px!important;border:none;font-weight:500;font-size:12px}.button-official-yellow-line[data-v-74775838]{color:#2d334d}.button-official-yellow-line-compact[data-v-74775838]{height:40px;padding:0 24px;line-height:40px;background:linear-gradient(45deg,rgba(255,221,77,.5),rgba(255,221,77,.5) 5%,transparent 0,transparent 50%,rgba(255,221,77,.5) 0,rgba(255,221,77,.5) 55%,transparent 0,transparent)!important;background-size:8px 8px!important;border:none;font-weight:500;font-size:14px;color:#2d334d}.button-report-download[data-v-74775838]{width:200px!important;height:40px!important;border-radius:0!important;background:#161c39;color:#fff;border:none;cursor:inherit}.button-fixed-nav-login[data-v-74775838],.button-report-download[data-v-74775838]{text-align:center!important;display:inline-block!important}.button-fixed-nav-login[data-v-74775838]{color:#2d334d!important;border:1px solid rgba(22,28,57,.12)!important;border-radius:16px!important}.button-fixed-nav-login[data-v-74775838],.button-fixed-nav-login-inverse[data-v-74775838]{line-height:37px!important;height:37px!important;width:80px!important;background:transparent!important;font-size:14px}.button-fixed-nav-login-inverse[data-v-74775838]{color:hsla(0,0%,100%,.9)!important;border:1px solid hsla(0,0%,100%,.6)!important;border-radius:16px!important;text-align:center!important;display:inline-block!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "fd0b":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("f7bc");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("589f2530", content, shadowRoot)
};

/***/ }),

/***/ "fe45":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("b5af");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("440ebe7b", content, shadowRoot)
};

/***/ }),

/***/ "ff2a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_page_bottom_vue_vue_type_style_index_0_id_e838f1c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b5f9");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_page_bottom_vue_vue_type_style_index_0_id_e838f1c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_page_bottom_vue_vue_type_style_index_0_id_e838f1c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_page_bottom_vue_vue_type_style_index_0_id_e838f1c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_page_bottom_vue_vue_type_style_index_0_id_e838f1c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "ff70":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-2b34fca9]{box-sizing:border-box}.form-textarea[data-v-2b34fca9]{height:80px;width:536px;background:rgba(22,28,57,.01);font-size:14px;color:#747789;border:none;border-bottom:1px solid rgba(22,28,57,.1);outline:none;padding:8px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "ffd4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_modal_form_vue_vue_type_style_index_0_id_31632f2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b780");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_modal_form_vue_vue_type_style_index_0_id_31632f2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_modal_form_vue_vue_type_style_index_0_id_31632f2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_modal_form_vue_vue_type_style_index_0_id_31632f2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_modal_form_vue_vue_type_style_index_0_id_31632f2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

/******/ });
//# sourceMappingURL=pharbers.js.map