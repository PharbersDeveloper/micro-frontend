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

/***/ "0122":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("6510");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("c725f0f2", content, shadowRoot)
};

/***/ }),

/***/ "013c":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-cb55a8e2]{letter-spacing:.4px;line-height:1.6;box-sizing:border-box}.bp-rw[data-v-cb55a8e2]{min-width:375px;align-items:center}.bp-rw[data-v-cb55a8e2],.bp-rw .rw-content-a[data-v-cb55a8e2]{width:100%;display:flex;flex-direction:column}.bp-rw .rw-content-a[data-v-cb55a8e2]{height:600px;padding-left:100px;background:0 0;background-image:linear-gradient(rgba(22,28,57,.5),rgba(22,28,57,.5));background-size:cover;justify-content:center}.bp-rw .rw-content-a .above-data-detail-header-img[data-v-cb55a8e2]{height:600px;width:100%;position:absolute;z-index:-2;left:0;-o-object-fit:cover;object-fit:cover}.bp-rw .rw-content-a .top-breadcrumb[data-v-cb55a8e2]{position:absolute;top:104px}.bp-rw .rw-content-a .ph-body-small-inverse[data-v-cb55a8e2]{opacity:.7;font-size:14px;color:#fff;cursor:pointer!important}.bp-rw .rw-content-a .page-header-anton-font[data-v-cb55a8e2]{font-family:Anton-Regular;font-size:100px;color:#fff;letter-spacing:2.5px;background-image:linear-gradient(hsla(0,0%,100%,.4),hsla(0,0%,100%,0) 80%);-webkit-text-fill-color:transparent;-webkit-background-clip:text;background-clip:text}.bp-rw .rw-content-a .rw-content-slogan-b[data-v-cb55a8e2]{width:auto;margin-top:20px;font-size:40px;color:#fff;top:-95px;position:relative;height:auto;background:0 0}.bp-rw .rw-content-a .rw-content-slogan-c[data-v-cb55a8e2]{width:auto;margin-top:4px;font-size:24px;color:#fff;opacity:.9;top:-50px;position:relative;height:auto;background:0 0}.bp-rw .rw-text-info[data-v-cb55a8e2]{width:1200px;padding:104px 0 120px;display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative;height:auto;background:0 0}.bp-rw .rw-text-info .rw-connect-img[data-v-cb55a8e2]{height:auto;width:auto;background:0 0;position:absolute;top:-40px;-o-object-fit:cover;object-fit:cover}.bp-rw .rw-text-info .rw-text-info-title[data-v-cb55a8e2]{height:auto;width:640px;margin-bottom:32px;background:0 0;font-size:24px;color:#2d334d}.bp-rw .rw-text-info .rw-text-info-text[data-v-cb55a8e2]{height:auto;width:640px;margin-bottom:32px;background:0 0;font-size:16px;color:#747789;white-space:pre-line}.bp-rw .rw-text-info .rw-text-card-container[data-v-cb55a8e2]{height:auto;width:650px;background:0 0;flex-direction:row;justify-content:space-between;display:flex}.bp-rw .rw-text-info .rw-text-card-container .rw-text-card-line[data-v-cb55a8e2]{height:2px;width:16px;margin-bottom:24px;background:#f5c924}.bp-rw .rw-text-info .rw-text-card-container .rw-text-card-tilte[data-v-cb55a8e2]{height:auto;width:auto;margin-bottom:32px;background:0 0;color:#2d334d;font-size:16px;font-weight:500}.bp-rw .rw-text-info .rw-text-card-container .rw-text-card-a[data-v-cb55a8e2]{height:auto;width:300px;background:0 0;background-size:cover;flex-direction:column;position:relative;padding:32px;border-radius:2px;box-shadow:0 4px 10px 0 rgba(22,28,57,.1),0 -1px 0 0 rgba(22,28,57,.02);display:flex}.bp-rw .rw-text-info .rw-text-card-container .rw-text-card-a .rw-text-card-a-img[data-v-cb55a8e2]{position:absolute;z-index:-2;width:100%;transform:translate(-32px,-32px);-o-object-fit:cover;object-fit:cover}.bp-rw .rw-text-info .rw-text-card-container .rw-text-card-a .rw-card-row[data-v-cb55a8e2]{justify-content:space-between;height:auto;width:auto;background:0 0;display:flex;flex-direction:row}.bp-rw .rw-text-info .rw-text-card-container .rw-text-card-a .rw-card-row .rw-card-flex-1[data-v-cb55a8e2]{display:flex;flex-direction:column;flex:1}.bp-rw .rw-text-info .rw-text-card-container .rw-text-card-a .rw-card-row .rw-card-flex-1 .rw-card-row-a[data-v-cb55a8e2]{height:auto;width:auto;background:0 0;font-size:24px;color:#2d334d;font-weight:300;text-align:center}.bp-rw .rw-text-info .rw-text-card-container .rw-text-card-a .rw-card-row .rw-card-flex-1 .rw-card-row-b-1[data-v-cb55a8e2]{height:auto;width:auto;background:0 0;font-size:12px;color:#a2a5b0;text-align:center}.bp-rw .rw-text-info .rw-text-card-container .rw-text-card-b[data-v-cb55a8e2]{height:auto;width:300px;background:0 0;background-size:cover;flex-direction:column;position:relative;padding:32px;border-radius:2px;box-shadow:0 4px 10px 0 rgba(22,28,57,.1),0 -1px 0 0 rgba(22,28,57,.02);display:flex}.bp-rw .rw-text-info .rw-text-card-container .rw-text-card-b .rw-text-card-b-img[data-v-cb55a8e2]{position:absolute;z-index:-2;width:100%;transform:translate(-32px,-32px)}.bp-rw .rw-text-info .rw-text-card-container .rw-text-card-b .rw-card-tag-row-a[data-v-cb55a8e2]{height:auto;width:auto;background:0 0;display:flex;flex-direction:row;margin-bottom:6px}.bp-rw .rw-text-info .rw-text-card-container .rw-text-card-b .rw-card-tag-row-b[data-v-cb55a8e2]{height:auto;width:auto;background:0 0;display:flex;flex-direction:row}.bp-rw .rw-text-info .rw-text-card-container .rw-text-card-b .rw-card-tag[data-v-cb55a8e2]{height:22px;width:auto;margin-right:9px;background:#f6f6f7;font-size:12px;color:#747789;padding:0 6px;border:1px solid rgba(22,28,57,.08);display:table}.bp-rw .rw-advantage-card-container[data-v-cb55a8e2]{height:auto;width:1200px;padding:104px 0 80px;background:-40% top no-repeat,linear-gradient(173deg,#3c3f53 5%,#1b1f35 98%);position:relative;align-items:center;display:flex;flex-direction:column}.bp-rw .rw-advantage-card-container .rw-advantage-card-container-img[data-v-cb55a8e2]{position:absolute;width:100%;-o-object-fit:cover;object-fit:cover}.bp-rw .rw-advantage-card-container .rw-connect-img[data-v-cb55a8e2]{height:auto;width:auto;background:0 0;position:absolute;top:-40px;-o-object-fit:cover;object-fit:cover}.bp-rw .rw-advantage-card-container .rw-advantage-container-title[data-v-cb55a8e2]{height:auto;width:auto;margin-bottom:69px;background:0 0;font-size:24px;color:#fff;opacity:.9}.bp-rw .rw-advantage-card-container .rw-cards-row[data-v-cb55a8e2]{height:auto;width:866px;background:0 0;display:flex;justify-content:space-between}.bp-rw .rw-advantage-card-container .rw-cards-row .rw-advantage-card[data-v-cb55a8e2]{height:auto;width:262px;background:hsla(0,0%,100%,.05);box-shadow:0 8px 10px 0 rgba(8,11,26,.21);border-radius:2px;padding:40px 32px;position:relative;display:flex;flex-direction:column}.bp-rw .rw-advantage-card-container .rw-cards-row .rw-advantage-card .rw-advantage-card-icon[data-v-cb55a8e2]{height:22px;width:19px;background:0 0;position:absolute;left:-10px;top:55px}.bp-rw .rw-advantage-card-container .rw-cards-row .rw-advantage-card .rw-advantage-card-title[data-v-cb55a8e2]{height:auto;width:auto;margin-bottom:40px;background:0 0;font-size:40px;color:#fff;opacity:.4;font-weight:100;display:flex}.bp-rw .rw-advantage-card-container .rw-cards-row .rw-advantage-card .rw-advantage-card-title-line[data-v-cb55a8e2]{height:1px;width:49px;margin-bottom:56px;background:#f5c924;opacity:.8}.bp-rw .rw-advantage-card-container .rw-cards-row .rw-advantage-card .rw-advantage-card-desc[data-v-cb55a8e2]{height:auto;width:198px;background:0 0;font-size:14px;opacity:.7;color:#fff}@media (max-width:992px){.bp-rw .rw-content-a[data-v-cb55a8e2]{padding-left:60px!important}.bp-rw .rw-content-a .page-header-anton-font[data-v-cb55a8e2]{font-size:60px!important}.bp-rw .rw-text-info[data-v-cb55a8e2]{width:100%!important}.bp-rw .rw-text-info .rw-text-card-container[data-v-cb55a8e2],.bp-rw .rw-text-info .rw-text-info-text[data-v-cb55a8e2],.bp-rw .rw-text-info .rw-text-info-title[data-v-cb55a8e2]{width:100%!important;padding:0 64px!important}.bp-rw .rw-text-info .rw-text-card-container[data-v-cb55a8e2]{flex-wrap:wrap;justify-content:space-between!important}.bp-rw .rw-advantage-card-container[data-v-cb55a8e2]{width:100%!important}.bp-rw .rw-advantage-card-container .rw-cards-row[data-v-cb55a8e2]{width:100%!important;padding:0 64px!important;flex-wrap:wrap}.bp-rw .rw-advantage-card-container .rw-cards-row .rw-advantage-card[data-v-cb55a8e2]{margin-bottom:40px!important}}@media (max-width:768px){.bp-rw .rw-content-a[data-v-cb55a8e2]{padding-left:40px!important}.bp-rw .rw-text-card-a[data-v-cb55a8e2]{margin-bottom:20px}}@media (max-width:549px),(width:549px){.bp-rw .rw-content-a[data-v-cb55a8e2]{padding-left:24px!important}.bp-rw .rw-content-a .rw-content-slogan-b[data-v-cb55a8e2]{top:-70px!important}.bp-rw .rw-text-info .rw-text-info-text[data-v-cb55a8e2],.bp-rw .rw-text-info .rw-text-info-title[data-v-cb55a8e2]{padding:0 24px!important}.bp-rw .rw-text-info .rw-text-card-container[data-v-cb55a8e2]{padding:0 24px!important;justify-content:center!important}.bp-rw .rw-text-info .rw-text-card-container .rw-text-card-a[data-v-cb55a8e2]{margin-bottom:24px!important}.bp-rw .rw-advantage-card-container .rw-cards-row[data-v-cb55a8e2]{padding:0 24px!important;overflow:scroll;display:flex;flex-direction:row;flex-wrap:nowrap}.bp-rw .rw-advantage-card-container .rw-advantage-card[data-v-cb55a8e2]{margin:0 12px!important}.bp-rw .rw-advantage-card-container .rw-advantage-card[data-v-cb55a8e2]:last-of-type{margin:0 0 40px 12px!important}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "01b1":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("9f52");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("d18117e6", content, shadowRoot)
};

/***/ }),

/***/ "0440":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_nav_top_response_vue_vue_type_style_index_0_id_b2f4e76a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ebb8");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_nav_top_response_vue_vue_type_style_index_0_id_b2f4e76a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_nav_top_response_vue_vue_type_style_index_0_id_b2f4e76a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_nav_top_response_vue_vue_type_style_index_0_id_b2f4e76a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_nav_top_response_vue_vue_type_style_index_0_id_b2f4e76a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "051e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_carousel_vue_vue_type_style_index_0_id_41ad729a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4567");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_carousel_vue_vue_type_style_index_0_id_41ad729a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_carousel_vue_vue_type_style_index_0_id_41ad729a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_carousel_vue_vue_type_style_index_0_id_41ad729a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_carousel_vue_vue_type_style_index_0_id_41ad729a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "05ef":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_icon_line_vue_vue_type_style_index_0_id_7b13dc7f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3592");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_icon_line_vue_vue_type_style_index_0_id_7b13dc7f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_icon_line_vue_vue_type_style_index_0_id_7b13dc7f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_icon_line_vue_vue_type_style_index_0_id_7b13dc7f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_icon_line_vue_vue_type_style_index_0_id_7b13dc7f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

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

/***/ "0db8":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("b4b8");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("44134955", content, shadowRoot)
};

/***/ }),

/***/ "0ef8":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("cee3");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("4d42b1f4", content, shadowRoot)
};

/***/ }),

/***/ "1076":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_rw_vue_vue_type_style_index_0_id_cb55a8e2_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c295");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_rw_vue_vue_type_style_index_0_id_cb55a8e2_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_rw_vue_vue_type_style_index_0_id_cb55a8e2_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_rw_vue_vue_type_style_index_0_id_cb55a8e2_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_rw_vue_vue_type_style_index_0_id_cb55a8e2_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "10bf":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("a945");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("47743bf3", content, shadowRoot)
};

/***/ }),

/***/ "16cd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_button_item_vue_vue_type_style_index_0_id_46b875d5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3a62");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_button_item_vue_vue_type_style_index_0_id_46b875d5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_button_item_vue_vue_type_style_index_0_id_46b875d5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_button_item_vue_vue_type_style_index_0_id_46b875d5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_button_item_vue_vue_type_style_index_0_id_46b875d5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "170b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_text_vue_vue_type_style_index_0_id_4cf5b5a6_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("791e");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_text_vue_vue_type_style_index_0_id_4cf5b5a6_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_text_vue_vue_type_style_index_0_id_4cf5b5a6_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_text_vue_vue_type_style_index_0_id_4cf5b5a6_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_text_vue_vue_type_style_index_0_id_4cf5b5a6_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "1840":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ffdf");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("fe27b67e", content, shadowRoot)
};

/***/ }),

/***/ "1960":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("1eca");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("ad24b9c4", content, shadowRoot)
};

/***/ }),

/***/ "1e4d":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-918c77ba]{box-sizing:border-box}.svg-icon[data-v-918c77ba]{width:16px;height:16px}.bp-option-group[data-v-918c77ba]{margin:0;padding:4px 0;background:#fff;box-shadow:0 4px 8px -2px rgba(9,30,66,.25);border-radius:3px}.bp-select-title[data-v-918c77ba]{height:100%;width:100%;display:flex;align-items:center;padding:0 8px;justify-content:space-between}.d-none[data-v-918c77ba]{display:none}svg[data-v-918c77ba]:focus{outline:none}.bp-select[data-v-918c77ba]{height:40px;width:240px;margin-left:8;margin-right:8;margin-top:8;margin-bottom:8;padding-left:8;padding-right:8;padding-top:8;padding-bottom:8;background:rgba(9,30,66,.04);padding:0;margin:0;position:relative;cursor:pointer;box-sizing:border-box;border-radius:4px}.bp-select[data-v-918c77ba]:hover{background:#ebecf0}.bp-text[data-v-918c77ba]{height:auto;width:auto;background:0 0;padding:0}.ph-body-xsmall-tertiary[data-v-918c77ba]{font-size:12px;color:#a2a5b0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "1eca":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-51402daa]{letter-spacing:.4px;line-height:1.6;box-sizing:border-box}.content-active-panel[data-v-51402daa]{height:367px;margin-right:8px;box-shadow:0 6px 8px 0 rgba(22,28,57,.15);background:#fff;border-radius:2px;z-index:1;flex-direction:column;cursor:pointer!important}.content-active-panel[data-v-51402daa],.content-active-panel .active-img[data-v-51402daa]{width:279px;position:relative;display:flex;align-content:flex-start;align-items:stretch;justify-content:flex-start}.content-active-panel .active-img[data-v-51402daa]{height:240px;flex-direction:row}.content-active-panel .active-img .active-img-bgc[data-v-51402daa]{background-size:cover;width:100%;height:100%;border-radius:2px 2px 0 0;z-index:2;-o-object-fit:cover;object-fit:cover;cursor:pointer!important;pointer-events:none}.content-active-panel .active-img .above-data-logo[data-v-51402daa]{width:72px!important;height:72px!important;border-radius:2px 2px 0 0;z-index:2;-o-object-fit:fill;object-fit:fill;bottom:0;left:32px;position:absolute;background-color:#fff;padding:10px;opacity:.9}.content-active-panel .active-info[data-v-51402daa]{height:127px;width:auto;position:relative;background:0 0;padding:24px 32px 0}.content-active-panel .active-info[data-v-51402daa],.content-active-panel .active-info .home-avtive-names[data-v-51402daa]{display:flex;flex-direction:column;align-content:flex-start;align-items:stretch;justify-content:flex-start}.content-active-panel .active-info .home-avtive-names[data-v-51402daa]{width:100%;height:42px;margin-bottom:4px}.content-active-panel .active-info .home-avtive-names .active-title[data-v-51402daa]{width:auto;height:auto;background:0 0;white-space:pre-line;overflow:hidden;-webkit-line-clamp:2;font-size:14px;color:#2d334d;letter-spacing:.35px;font-weight:700;padding:0}.content-active-panel .active-info .home-avtive-names .active-logo[data-v-51402daa]{display:none;height:auto;width:auto;background:0 0;margin-bottom:8px;color:#454a61;letter-spacing:1px;font-size:12px;padding:0}.content-active-panel .active-info .position-info[data-v-51402daa]{position:absolute;bottom:30px;height:auto;width:auto;background:0 0;font-size:12px;color:#a2a5b0;padding:0}", ""]);
// Exports
module.exports = exports;


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

/***/ "2513":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-03d0605e]{box-sizing:border-box}.svg-icon[data-v-03d0605e]{width:16px;height:16px}.bp-option-group[data-v-03d0605e]{margin:0;padding:4px 0;background:#fff;box-shadow:0 4px 8px -2px rgba(9,30,66,.25);border-radius:3px}.bp-select-title[data-v-03d0605e]{height:100%;width:100%;display:flex;align-items:center;padding:0 8px;justify-content:space-between}.d-none[data-v-03d0605e]{display:none}svg[data-v-03d0605e]:focus{outline:none}.bp-select[data-v-03d0605e]{height:40px;width:240px;margin-left:8;margin-right:8;margin-top:8;margin-bottom:8;padding-left:8;padding-right:8;padding-top:8;padding-bottom:8;background:rgba(9,30,66,.04);padding:0;margin:0;position:relative;cursor:pointer;box-sizing:border-box;border-radius:4px}.bp-select[data-v-03d0605e]:hover{background:#ebecf0}", ""]);
// Exports
module.exports = exports;


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

/***/ "2a45":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_badge_vue_vue_type_style_index_0_id_585d13f1_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7424");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_badge_vue_vue_type_style_index_0_id_585d13f1_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_badge_vue_vue_type_style_index_0_id_585d13f1_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_badge_vue_vue_type_style_index_0_id_585d13f1_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_badge_vue_vue_type_style_index_0_id_585d13f1_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "2a76":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_max_vue_vue_type_style_index_0_id_243b1737_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5273");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_max_vue_vue_type_style_index_0_id_243b1737_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_max_vue_vue_type_style_index_0_id_243b1737_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_max_vue_vue_type_style_index_0_id_243b1737_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_max_vue_vue_type_style_index_0_id_243b1737_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "2b83":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("8d68");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("b222c294", content, shadowRoot)
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

/***/ "2c47":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".el-carousel__container[data-v-6d6199db]{text-align:center}.el-carousel[data-v-6d6199db]{position:relative}.el-carousel--horizontal[data-v-6d6199db]{overflow-x:hidden}.el-carousel--vertical[data-v-6d6199db]{overflow-y:hidden}.el-carousel__container[data-v-6d6199db]{position:relative;height:300px}.el-carousel__arrow[data-v-6d6199db]{border:none;outline:none;padding:0;margin:0;height:36px;width:36px;cursor:pointer;transition:.3s;border-radius:50%;background-color:rgba(31,45,61,.11);color:#fff;position:absolute;top:50%;z-index:10;transform:translateY(-50%);text-align:center;font-size:12px}.el-carousel__arrow--left[data-v-6d6199db]{left:16px}.el-carousel__arrow--right[data-v-6d6199db]{right:16px}.el-carousel__arrow[data-v-6d6199db]:hover{background-color:rgba(31,45,61,.23)}.el-carousel__arrow i[data-v-6d6199db]{cursor:pointer}.el-carousel__indicators[data-v-6d6199db]{position:absolute;list-style:none;margin:0;padding:0;z-index:2}.el-carousel__indicators--horizontal[data-v-6d6199db]{bottom:0;left:50%;transform:translateX(-50%)}.el-carousel__indicators--vertical[data-v-6d6199db]{right:0;top:50%;transform:translateY(-50%)}.el-carousel__indicators--outside[data-v-6d6199db]{bottom:26px;text-align:center;position:static;transform:none}.el-carousel__indicators--outside .el-carousel__indicator:hover button[data-v-6d6199db]{opacity:.64}.el-carousel__indicators--outside button[data-v-6d6199db]{background-color:#c0c4cc;opacity:.24}.el-carousel__indicators--labels[data-v-6d6199db]{left:0;right:0;transform:none;text-align:center}.el-carousel__indicators--labels .el-carousel__button[data-v-6d6199db]{height:auto;width:auto;padding:2px 18px;font-size:12px}.el-carousel__indicators--labels .el-carousel__indicator[data-v-6d6199db]{padding:6px 4px}.el-carousel__indicator[data-v-6d6199db]{background-color:transparent;cursor:pointer}.el-carousel__indicator:hover button[data-v-6d6199db]{opacity:.72}.el-carousel__indicator--horizontal[data-v-6d6199db]{display:inline-block;padding:12px 4px}.el-carousel__indicator--vertical[data-v-6d6199db]{padding:4px 12px}.el-carousel__indicator--vertical .el-carousel__button[data-v-6d6199db]{width:2px;height:15px}.el-carousel__indicator.is-active button[data-v-6d6199db]{opacity:1;background-color:#2a7afe}.el-carousel__button[data-v-6d6199db]{display:block;opacity:.48;width:15px;height:15px;background-color:#ccc;border:none;outline:none;padding:0;margin:0;cursor:pointer;transition:.3s;border-radius:50%;margin:0 5px}.carousel-arrow-left-enter[data-v-6d6199db],.carousel-arrow-left-leave-active[data-v-6d6199db]{transform:translateY(-50%) translateX(-10px);opacity:0}.carousel-arrow-right-enter[data-v-6d6199db],.carousel-arrow-right-leave-active[data-v-6d6199db]{transform:translateY(-50%) translateX(10px);opacity:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "2d3f":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".svg-icon[data-v-2061fa5f]{width:1em;height:1em;vertical-align:-.15em;fill:currentColor;overflow:hidden;margin-right:4px}svg[data-v-2061fa5f]:focus{outline:none}.hide[data-v-2061fa5f]{display:none}.bp-button[data-v-2061fa5f]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:14px;text-align:center;padding:0 12px;border:0;border-radius:4px;cursor:pointer;outline:none;display:flex;flex-direction:row;align-items:center}.bp-button[data-v-2061fa5f],.bp-button-group[data-v-2061fa5f]{height:auto;width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;background:#fff}.bp-button-group[data-v-2061fa5f]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}button[data-v-2061fa5f]{outline:none}button[data-v-2061fa5f]:focus{outline:none!important}button.button-primary[data-v-2061fa5f]{background:#7163c5;color:#fff}.button-primary[data-v-2061fa5f]:hover{background:#9084d2}.button-primary[data-v-2061fa5f]:active{background:#5342b3}.button-primary .button-icon-color path[data-v-2061fa5f]{fill:#fff}.button-primary:disabled .button-icon-color path[data-v-2061fa5f]{fill:rgba(9,30,66,.31)}button.button-standard[data-v-2061fa5f]{background:rgba(9,30,66,.04);color:rgba(9,30,66,.71)}.button-standard[data-v-2061fa5f]:hover{background:#e5eaec}.button-standard[data-v-2061fa5f]:active{background:#f2f0f9;color:#7163c5}.button-standard .button-icon-color path[data-v-2061fa5f]{fill:rgba(9,30,66,.71)}.button-standard:disabled .button-icon-color path[data-v-2061fa5f]{fill:rgba(9,30,66,.31)}.button-standard:active .button-icon-color path[data-v-2061fa5f]{fill:#7163c5}.button-primary[data-v-2061fa5f]:disabled,.button-standard[data-v-2061fa5f]:disabled{background:rgba(9,30,66,.04);color:rgba(9,30,66,.31);cursor:not-allowed}button.button-subtle[data-v-2061fa5f]{background:#fff;color:rgba(9,30,66,.71)}.button-subtle[data-v-2061fa5f]:hover{background:#e5eaec}.button-subtle[data-v-2061fa5f]:active{background:#f2f0f9}.button-subtle[data-v-2061fa5f]:disabled{color:rgba(9,30,66,.31);cursor:not-allowed}.button-subtle .button-icon-color path[data-v-2061fa5f]{fill:rgba(9,30,66,.71)}.button-subtle:disabled .button-icon-color path[data-v-2061fa5f]{fill:rgba(9,30,66,.31)}.button-subtle:active .button-icon-color path[data-v-2061fa5f]{fill:#7163c5}.button-destructive[data-v-2061fa5f]{background:#de350b;color:#fff}.button-destructive[data-v-2061fa5f]:hover{background:#ff5630}.button-destructive[data-v-2061fa5f]:active{background:#bf2600}.button-warning[data-v-2061fa5f]{background:#ffe380;color:rgba(9,30,66,.71)}.button-warning[data-v-2061fa5f]:hover{background:#ffc400}.button-warning[data-v-2061fa5f]:active{background:#fff0b3}.button-density-comfy[data-v-2061fa5f]{height:40px;line-height:40px}.button-density-default[data-v-2061fa5f]{height:32px;line-height:32px}.button-density-compact[data-v-2061fa5f]{height:24px;line-height:24px}.bp-button.btn-block[data-v-2061fa5f]{width:100%}.icon-and-opacity path[data-v-2061fa5f]{fill:hsla(0,0%,100%,.8)}.agenda-text-center[data-v-2061fa5f]{line-height:104px;width:70px}.button-official-gray-line[data-v-2061fa5f]{width:80px;height:32px;line-height:32px;background:linear-gradient(45deg,rgba(22,28,57,.2),rgba(22,28,57,.2) 5%,transparent 0,transparent 50%,rgba(22,28,57,.2) 0,rgba(22,28,57,.2) 55%,transparent 0,transparent)!important;background-size:10px 10px!important;border:none;font-weight:500;font-size:12px;color:#2d334d}.button-official-yellow-line-inverse[data-v-2061fa5f]{color:hsla(0,0%,100%,0)}.button-official-yellow-line[data-v-2061fa5f],.button-official-yellow-line-inverse[data-v-2061fa5f]{padding:0 24px;height:32px;line-height:32px;background:linear-gradient(45deg,rgba(255,221,77,.5),rgba(255,221,77,.5) 5%,transparent 0,transparent 50%,rgba(255,221,77,.5) 0,rgba(255,221,77,.5) 55%,transparent 0,transparent)!important;background-size:10px 10px!important;border:none;font-weight:500;font-size:12px}.button-official-yellow-line[data-v-2061fa5f]{color:#2d334d}.button-official-yellow-line-compact[data-v-2061fa5f]{height:40px;padding:0 24px;line-height:40px;background:linear-gradient(45deg,rgba(255,221,77,.5),rgba(255,221,77,.5) 5%,transparent 0,transparent 50%,rgba(255,221,77,.5) 0,rgba(255,221,77,.5) 55%,transparent 0,transparent)!important;background-size:8px 8px!important;border:none;font-weight:500;font-size:14px;color:#2d334d}.button-report-download[data-v-2061fa5f]{width:200px!important;height:40px!important;border-radius:0!important;background:#161c39;color:#fff;border:none;cursor:inherit}.button-fixed-nav-login[data-v-2061fa5f],.button-report-download[data-v-2061fa5f]{text-align:center!important;display:inline-block!important}.button-fixed-nav-login[data-v-2061fa5f]{color:#2d334d!important;border:1px solid rgba(22,28,57,.12)!important;border-radius:16px!important}.button-fixed-nav-login[data-v-2061fa5f],.button-fixed-nav-login-inverse[data-v-2061fa5f]{line-height:37px!important;height:37px!important;width:80px!important;background:transparent!important;font-size:14px}.button-fixed-nav-login-inverse[data-v-2061fa5f]{color:hsla(0,0%,100%,.9)!important;border:1px solid hsla(0,0%,100%,.6)!important;border-radius:16px!important;text-align:center!important;display:inline-block!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "2dd6":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "3025":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_button_item_vue_vue_type_style_index_0_id_04ef1234_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("41dd");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_button_item_vue_vue_type_style_index_0_id_04ef1234_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_button_item_vue_vue_type_style_index_0_id_04ef1234_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_button_item_vue_vue_type_style_index_0_id_04ef1234_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_button_item_vue_vue_type_style_index_0_id_04ef1234_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "34fa":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("f6de");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("6294c342", content, shadowRoot)
};

/***/ }),

/***/ "354d":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("9498");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("73e211ba", content, shadowRoot)
};

/***/ }),

/***/ "3592":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("fba1");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("5d11d5b6", content, shadowRoot)
};

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

/***/ "35ff":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_carousel_unit_vue_vue_type_style_index_0_id_59898cf9_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5ab1");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_carousel_unit_vue_vue_type_style_index_0_id_59898cf9_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_carousel_unit_vue_vue_type_style_index_0_id_59898cf9_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_carousel_unit_vue_vue_type_style_index_0_id_59898cf9_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_carousel_unit_vue_vue_type_style_index_0_id_59898cf9_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "3a62":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("acaa");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("07de1b22", content, shadowRoot)
};

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

/***/ "40f5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_icon_line_response_vue_vue_type_style_index_0_id_5b68e1cc_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9b4a");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_icon_line_response_vue_vue_type_style_index_0_id_5b68e1cc_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_icon_line_response_vue_vue_type_style_index_0_id_5b68e1cc_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_icon_line_response_vue_vue_type_style_index_0_id_5b68e1cc_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_icon_line_response_vue_vue_type_style_index_0_id_5b68e1cc_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "41dd":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("d50a");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("07b90362", content, shadowRoot)
};

/***/ }),

/***/ "4288":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-58fd61a8]{box-sizing:border-box}.svg-icon[data-v-58fd61a8]{width:1em;height:1em;vertical-align:-.15em;fill:currentColor;overflow:hidden;margin-right:4px}svg[data-v-58fd61a8]:focus{outline:none}.bp-menu-item[data-v-58fd61a8]{height:40px;width:100%;margin-left:8;margin-right:8;margin-top:8;margin-bottom:8;padding-left:8;padding-right:8;padding-top:8;padding-bottom:8;background:transparent;display:flex;align-items:center;cursor:pointer;padding:0 12px;color:#505f79;box-sizing:border-box}.bp-menu-item[data-v-58fd61a8]:hover{color:#3172e0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "43c3":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("b9ec");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("5390e1af", content, shadowRoot)
};

/***/ }),

/***/ "4440":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_card_activity_vue_vue_type_style_index_0_id_77afe7b9_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f48a");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_card_activity_vue_vue_type_style_index_0_id_77afe7b9_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_card_activity_vue_vue_type_style_index_0_id_77afe7b9_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_card_activity_vue_vue_type_style_index_0_id_77afe7b9_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_card_activity_vue_vue_type_style_index_0_id_77afe7b9_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "4567":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("9a1b");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("2cdf1288", content, shadowRoot)
};

/***/ }),

/***/ "4686":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_option_vue_vue_vue_type_style_index_0_id_cb5a0b6c_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9bfb");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_option_vue_vue_vue_type_style_index_0_id_cb5a0b6c_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_option_vue_vue_vue_type_style_index_0_id_cb5a0b6c_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_option_vue_vue_vue_type_style_index_0_id_cb5a0b6c_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_option_vue_vue_vue_type_style_index_0_id_cb5a0b6c_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "4743":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".bp-badge[data-v-585d13f1]{height:16px;width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background:#dfe1e6;min-width:20px;font-size:12px;color:#253858;text-align:center;line-height:16px;border:0;border-radius:8px;padding:0 6px;cursor:pointer}.badge-default[data-v-585d13f1]{background:rgba(9,30,66,.13);color:rgba(9,30,66,.89)}.badge-primary[data-v-585d13f1]{background:#7163c5;color:#fff}.bp-badge.primary[data-v-585d13f1]{background-color:#7163c5;color:#fff}.bp-badge.primary.reverse[data-v-585d13f1]{color:#7163c5;background-color:#fff}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "4a76":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("2d3f");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("c0f98a30", content, shadowRoot)
};

/***/ }),

/***/ "4b2b":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-77afe7b9]{letter-spacing:.4px;line-height:1.6;box-sizing:border-box}.content-active-panel[data-v-77afe7b9]{height:367px;margin-right:8px;box-shadow:0 6px 8px 0 rgba(22,28,57,.15);background:#fff;border-radius:2px;z-index:1;flex-direction:column;cursor:pointer!important}.content-active-panel[data-v-77afe7b9],.content-active-panel .active-img[data-v-77afe7b9]{width:279px;position:relative;display:flex;align-content:flex-start;align-items:stretch;justify-content:flex-start}.content-active-panel .active-img[data-v-77afe7b9]{height:240px;flex-direction:row}.content-active-panel .active-img .active-img-bgc[data-v-77afe7b9]{background-size:cover;width:100%;height:100%;border-radius:2px 2px 0 0;z-index:2;-o-object-fit:cover;object-fit:cover;cursor:pointer!important;pointer-events:none}.content-active-panel .active-img .above-data-logo[data-v-77afe7b9]{width:72px!important;height:72px!important;border-radius:2px 2px 0 0;z-index:2;-o-object-fit:fill;object-fit:fill;bottom:0;left:32px;position:absolute;background-color:#fff;padding:10px;opacity:.9}.content-active-panel .active-info[data-v-77afe7b9]{height:127px;width:auto;position:relative;background:0 0;padding:24px 32px 0}.content-active-panel .active-info[data-v-77afe7b9],.content-active-panel .active-info .home-avtive-names[data-v-77afe7b9]{display:flex;flex-direction:column;align-content:flex-start;align-items:stretch;justify-content:flex-start}.content-active-panel .active-info .home-avtive-names[data-v-77afe7b9]{width:100%;height:42px;margin-bottom:4px}.content-active-panel .active-info .home-avtive-names .active-title[data-v-77afe7b9]{width:auto;height:auto;background:0 0;white-space:pre-line;overflow:hidden;-webkit-line-clamp:2;font-size:14px;color:#2d334d;letter-spacing:.35px;font-weight:700;padding:0}.content-active-panel .active-info .home-avtive-names .active-logo[data-v-77afe7b9]{display:none;height:auto;width:auto;background:0 0;margin-bottom:8px;color:#454a61;letter-spacing:1px;font-size:12px;padding:0}.content-active-panel .active-info .position-info[data-v-77afe7b9]{position:absolute;bottom:30px;height:auto;width:auto;background:0 0;font-size:12px;color:#a2a5b0;padding:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "4d90":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_menu_item_vue_vue_type_style_index_0_id_7ee67a87_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c39c");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_menu_item_vue_vue_type_style_index_0_id_7ee67a87_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_menu_item_vue_vue_type_style_index_0_id_7ee67a87_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_menu_item_vue_vue_type_style_index_0_id_7ee67a87_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_menu_item_vue_vue_type_style_index_0_id_7ee67a87_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "4dcc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_label_vue_vue_type_style_index_0_id_6923b996_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eb2e");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_label_vue_vue_type_style_index_0_id_6923b996_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_label_vue_vue_type_style_index_0_id_6923b996_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_label_vue_vue_type_style_index_0_id_6923b996_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_label_vue_vue_type_style_index_0_id_6923b996_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "4e15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_home_vue_vue_type_style_index_0_id_d7e795c8_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("354d");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_home_vue_vue_type_style_index_0_id_d7e795c8_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_home_vue_vue_type_style_index_0_id_d7e795c8_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_home_vue_vue_type_style_index_0_id_d7e795c8_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_home_vue_vue_type_style_index_0_id_d7e795c8_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "4f2e":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("86e9");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("9075f1d4", content, shadowRoot)
};

/***/ }),

/***/ "50aa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_button_vue_vue_type_style_index_0_id_16bcbf7c_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("83e7");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_button_vue_vue_type_style_index_0_id_16bcbf7c_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_button_vue_vue_type_style_index_0_id_16bcbf7c_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_button_vue_vue_type_style_index_0_id_16bcbf7c_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_button_vue_vue_type_style_index_0_id_16bcbf7c_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "5187":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-243b1737]{letter-spacing:.4px;line-height:1.6;box-sizing:border-box}.bp-max[data-v-243b1737]{min-width:375px;align-items:center}.bp-max[data-v-243b1737],.bp-max .max-header[data-v-243b1737]{width:100%;display:flex;flex-direction:column}.bp-max .max-header[data-v-243b1737]{height:600px;padding-left:100px;background:0 0;background-image:linear-gradient(rgba(22,28,57,.5),rgba(22,28,57,.5));background-size:cover;justify-content:center}.bp-max .max-header .above-data-detail-header-img[data-v-243b1737]{height:600px;width:100%;position:absolute;z-index:-2;left:0;-o-object-fit:cover;object-fit:cover}.bp-max .max-header .ph-body-small-inverse[data-v-243b1737]{opacity:.7;font-size:14px;color:#fff;cursor:pointer!important}.bp-max .max-header .top-breadcrumb[data-v-243b1737]{position:absolute;top:104px}.bp-max .max-header .mr-0[data-v-243b1737]{margin-right:2px}.bp-max .max-header .page-header-anton-font[data-v-243b1737]{font-family:Anton-Regular;font-size:100px;color:#fff;letter-spacing:2.5px;background-image:linear-gradient(hsla(0,0%,100%,.4),hsla(0,0%,100%,0) 80%);-webkit-text-fill-color:transparent;-webkit-background-clip:text;background-clip:text}.bp-max .max-header .max-header-slogan-b[data-v-243b1737]{height:auto;width:auto;margin-top:20px;background:0 0;font-size:40px;color:#fff;position:relative;top:-95px}.bp-max .max-header .max-header-slogan-c[data-v-243b1737]{height:auto;width:auto;margin-top:4px;background:0 0;font-size:24px;color:#fff;opacity:.9;position:relative;top:-50px;white-space:pre-line}.bp-max .max-text-info[data-v-243b1737]{height:710px;width:1200px;background:0 0;position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center}.bp-max .max-text-info .max-connect-img[data-v-243b1737]{height:auto;width:auto;background:0 0;position:absolute;top:-40px;-o-object-fit:cover;object-fit:cover}.bp-max .max-text-info .max-text-info-title[data-v-243b1737]{height:auto;width:640px;margin-bottom:32px;background:0 0;font-size:24px;color:#2d334d}.bp-max .max-text-info .max-text-info-text[data-v-243b1737]{height:auto;width:640px;margin-bottom:32px;background:0 0;font-size:16px;color:#747789}.bp-max .max-text-info .rw-text-card-container[data-v-243b1737]{height:auto;width:946px;background:0 0;display:flex;flex-direction:row;justify-content:space-between}.bp-max .max-text-info .rw-text-card-container .max-text-card[data-v-243b1737]{height:246px;width:300px;padding:32px 32px 0;border-radius:2px;box-shadow:0 4px 10px 0 rgba(22,28,57,.1),0 -1px 0 0 rgba(22,28,57,.02);display:flex;flex-direction:column;background:linear-gradient(rgba(22,28,57,.08) 1px,transparent 0),linear-gradient(90deg,rgba(22,28,57,.08) 1px,transparent 0);background-size:100px 100px,70px 70px}.bp-max .max-text-info .rw-text-card-container .max-text-card .max-text-card-line[data-v-243b1737]{height:2px;width:16px;margin-bottom:24px;background:#f5c924}.bp-max .max-text-info .rw-text-card-container .max-text-card .max-text-card-tilte[data-v-243b1737]{height:auto;width:auto;margin-bottom:32px;background:0 0;color:#2d334d;font-size:16px;font-weight:500}.bp-max .max-text-info .rw-text-card-container .max-text-card .max-text-card-content[data-v-243b1737]{height:auto;width:auto;margin-bottom:8px;background:0 0;color:#747789;font-size:14px}.bp-max .max-text-info .rw-text-card-container .max-text-card .max-card-tag-row[data-v-243b1737]{height:auto;width:auto;background:0 0;display:flex;flex-direction:row;flex-flow:wrap}.bp-max .max-text-info .rw-text-card-container .max-text-card .max-card-tag-row .max-card-tag[data-v-243b1737]{height:22px;width:auto;margin-right:4px;background:#f6f6f7;font-size:12px;color:#747789;padding:2px 6px;border:1px solid rgba(22,28,57,.08);display:flex;align-items:center}.bp-max .max-text-info .rw-text-card-container .max-text-card .max-card-row[data-v-243b1737]{justify-content:space-between;height:auto;width:auto;margin-bottom:8px;background:0 0;display:flex;flex-direction:row}.bp-max .max-text-info .rw-text-card-container .max-text-card .max-card-row .max-card-row-1[data-v-243b1737]{display:flex;flex-direction:column}.bp-max .max-text-info .rw-text-card-container .max-text-card .max-card-row .max-card-row-1 .max-card-row-b-1[data-v-243b1737]{height:auto;width:auto;background:0 0;font-size:12px;color:#a2a5b0}.bp-max .max-text-info .rw-text-card-container .max-text-card .max-card-row .max-card-row-2[data-v-243b1737]{display:flex;flex-direction:column;align-items:center}.bp-max .max-text-info .rw-text-card-container .max-text-card .max-card-row .max-card-row-a[data-v-243b1737]{height:auto;width:auto;background:0 0;font-size:24px;color:#2d334d;font-weight:300}.bp-max .max-text-info .rw-text-card-container .max-text-card .max-card-row .max-card-row-b-2[data-v-243b1737]{height:auto;width:auto;background:0 0;font-size:12px;color:#a2a5b0}.bp-max .max-text-info .rw-text-card-container .max-text-card .max-card-row .max-card-row-b[data-v-243b1737]{height:auto;width:auto;margin-right:0;background:0 0;font-size:24px;color:#2d334d;font-weight:300}.bp-max .max-advantage-card-container[data-v-243b1737]{height:auto;width:1200px;padding-top:104px;background:-40% top no-repeat,linear-gradient(173deg,#3c3f53 5%,#1b1f35 98%);position:relative;align-items:center;display:flex;flex-direction:column}.bp-max .max-advantage-card-container .max-advantage-card-container-img[data-v-243b1737]{position:absolute;width:100%;-o-object-fit:cover;object-fit:cover}.bp-max .max-advantage-card-container .max-connect-img[data-v-243b1737]{height:auto;width:auto;background:0 0;position:absolute;top:-40px}.bp-max .max-advantage-card-container .rw-advantage-container-title[data-v-243b1737]{height:auto;width:auto;margin-bottom:69px;background:0 0;font-size:24px;color:#fff;opacity:.9}.bp-max .max-advantage-card-container .max-cards-row-a[data-v-243b1737]{height:auto;width:998px;margin-bottom:64px;background:0 0;justify-content:space-between;display:flex}.bp-max .max-advantage-card-container .max-cards-row-b[data-v-243b1737]{height:auto;width:652px;margin-bottom:64px;background:0 0;display:flex;justify-content:space-between}.bp-max .max-advantage-card-container .max-advantage-card[data-v-243b1737]{height:auto;width:306px;background:hsla(0,0%,100%,.05);box-shadow:0 8px 10px 0 rgba(8,11,26,.21);border-radius:2px;padding:40px 32px;position:relative;display:flex;flex-direction:column}.bp-max .max-advantage-card-container .max-advantage-card .max-advantage-card-icon[data-v-243b1737]{height:22px;width:19px;background:0 0;position:absolute;left:-10px;top:55px}.bp-max .max-advantage-card-container .max-advantage-card .max-advantage-card-title[data-v-243b1737]{height:auto;width:auto;margin-bottom:32px;background:0 0;font-size:40px;color:#fff;opacity:.4;font-weight:100}.bp-max .max-advantage-card-container .max-advantage-card .max-advantage-card-title-line[data-v-243b1737]{height:1px;width:49px;margin-bottom:32px;background:#f5c924;opacity:.8}.bp-max .max-advantage-card-container .max-advantage-card .max-advantage-card-desc-a[data-v-243b1737]{height:auto;width:auto;margin-bottom:25px;background:0 0;font-size:16px;opacity:.9;color:#fff}.bp-max .max-advantage-card-container .max-advantage-card .max-advantage-card-desc-b[data-v-243b1737]{height:auto;width:auto;margin-bottom:8px;background:0 0;font-size:12px;opacity:.7;color:#fff}@media (max-width:992px){[data-v-243b1737]::-webkit-scrollbar-thumb{background:transparent}.max-header[data-v-243b1737]{padding:0 60px!important}.max-header .page-header-anton-font[data-v-243b1737]{font-size:60px!important}.max-text-info[data-v-243b1737]{height:auto!important;padding:100px 60px!important}.max-text-info[data-v-243b1737],.max-text-info .max-text-info-text[data-v-243b1737],.max-text-info .max-text-info-title[data-v-243b1737]{width:100%!important}.max-text-info .rw-text-card-container[data-v-243b1737]{flex-wrap:wrap;width:100%!important;height:auto!important;justify-content:space-between!important}.max-text-info .rw-text-card-container .max-text-card[data-v-243b1737]{padding-bottom:24px!important;width:30%!important;height:auto!important}.max-text-info .rw-text-card-container .max-text-card .max-card-row[data-v-243b1737]{flex-wrap:wrap!important}.max-advantage-card-container[data-v-243b1737]{width:100%!important}.max-advantage-card-container .max-cards-row-a[data-v-243b1737],.max-advantage-card-container .max-cards-row-b[data-v-243b1737]{width:100%!important;padding:0 24px!important;overflow:scroll}.max-advantage-card-container .max-cards-row-a .max-advantage-card[data-v-243b1737],.max-advantage-card-container .max-cards-row-b .max-advantage-card[data-v-243b1737]{margin:0 12px;flex-shrink:0}.max-advantage-card-container .max-cards-row-b[data-v-243b1737]{justify-content:center!important}}@media (max-width:768px){[data-v-243b1737]::-webkit-scrollbar-thumb{background:transparent}.max-header[data-v-243b1737]{padding:0 40px!important}.max-advantage-card-container .max-cards-row-b[data-v-243b1737]{justify-content:space-between!important}.max-card-tag[data-v-243b1737]{word-break:keep-all}}@media (max-width:549px),(width:549px){.max-header[data-v-243b1737]{padding:0 24px!important}.max-header .max-header-slogan-b[data-v-243b1737]{top:-70px!important}.max-header .page-header-anton-font[data-v-243b1737]{font-size:60px!important;line-height:80px}.max-text-info[data-v-243b1737]{width:100%!important;padding:100px 24px!important}.max-text-info .max-text-info-text[data-v-243b1737],.max-text-info .max-text-info-title[data-v-243b1737]{width:100%!important;padding:0 24px!important}.max-text-info .rw-text-card-container[data-v-243b1737]{flex-wrap:wrap;justify-content:center!important;width:100%!important;height:auto!important}.max-text-info[data-v-243b1737]{height:auto!important}.max-text-info .rw-text-card-container .max-text-card[data-v-243b1737]{height:246px!important;width:300px!important;margin-bottom:24px!important}.max-advantage-card-container[data-v-243b1737]{width:100%!important}.max-advantage-card-container .max-cards-row-a[data-v-243b1737],.max-advantage-card-container .max-cards-row-b[data-v-243b1737]{width:100%!important;padding:0 24px!important;overflow:scroll}.max-advantage-card-container .max-cards-row-a .max-advantage-card[data-v-243b1737],.max-advantage-card-container .max-cards-row-b .max-advantage-card[data-v-243b1737]{margin:0 12px;flex-shrink:0}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "5220":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_button_vue_vue_type_style_index_0_id_2061fa5f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4a76");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_button_vue_vue_type_style_index_0_id_2061fa5f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_button_vue_vue_type_style_index_0_id_2061fa5f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_button_vue_vue_type_style_index_0_id_2061fa5f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_button_vue_vue_type_style_index_0_id_2061fa5f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "524b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_status_vue_vue_type_style_index_0_id_4a4c3d80_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ac3b");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_status_vue_vue_type_style_index_0_id_4a4c3d80_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_status_vue_vue_type_style_index_0_id_4a4c3d80_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_status_vue_vue_type_style_index_0_id_4a4c3d80_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_status_vue_vue_type_style_index_0_id_4a4c3d80_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "5273":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("5187");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("f5e32cbc", content, shadowRoot)
};

/***/ }),

/***/ "56f5":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-a76be314]{box-sizing:border-box}.mr-2[data-v-a76be314]{margin-right:8px}.mb-2[data-v-a76be314]{margin-bottom:8px}.mb-5[data-v-a76be314]{margin-bottom:32px}span.ph-H-small[data-v-a76be314]{font-size:12px;color:#161c39;opacity:.8}span.ph-body-small[data-v-a76be314]{font-size:14px;color:#747789}.bp-modal-form[data-v-a76be314]{height:100vh;width:100vw;background:rgba(9,30,66,.54);display:flex;flex-direction:column;position:fixed;top:0;right:0;z-index:9999;justify-content:center;align-items:center}.bp-modal-form .bp-modal-submit-success[data-v-a76be314]{height:392px;width:600px;background:#fff;padding:40px;border-radius:2px;position:relative;display:flex;flex-direction:column}.bp-modal-form .bp-modal-submit-success .close-button-container[data-v-a76be314]{display:flex;justify-content:flex-end;margin-bottom:32px}.bp-modal-form .bp-modal-submit-success .close-button-container .close-button[data-v-a76be314]{height:32px;width:32px;background:0 0;border-radius:50%;display:flex;justify-content:center;align-items:center;cursor:pointer;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='34' height='34' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23161C39'%3E%3Cpath d='M16.833.5C7.813.5.5 7.813.5 16.833c0 9.021 7.313 16.334 16.333 16.334 9.021 0 16.334-7.313 16.334-16.334C33.167 7.813 25.854.5 16.833.5zm0 1c8.469 0 15.334 6.865 15.334 15.333 0 8.469-6.865 15.334-15.334 15.334-8.468 0-15.333-6.865-15.333-15.334C1.5 8.365 8.365 1.5 16.833 1.5z' opacity='.2'/%3E%3Cpath d='M22.955 11.64l-4.962 4.963 4.962 4.962-.993.993L17 17.595l-4.962 4.963-.993-.993 4.962-4.962-4.962-4.962.993-.993L17 15.61l4.962-4.962.993.993z' opacity='.6'/%3E%3C/g%3E%3C/svg%3E\") 50%/100% no-repeat}.bp-modal-form .bp-modal-submit-success .bp-modal-submit-content[data-v-a76be314]{display:flex;flex-direction:column;align-items:center;-ms-overflow-style:none}.bp-modal-form .bp-modal-submit-success .bp-modal-submit-content[data-v-a76be314]::-webkit-scrollbar{width:0!important;display:none}.bp-modal-form .bp-modal-submit-success .bp-modal-submit-content .submit-success-img[data-v-a76be314]{height:40px;width:40px;margin-bottom:32px;-o-object-fit:contain;object-fit:contain;background:transparent}.bp-modal-form .bp-modal-submit-success .bp-modal-submit-content .submit-success-text[data-v-a76be314]{font-size:24px;color:#2d334d;margin-bottom:16px}.bp-modal-form .bp-modal-submit-success .bp-modal-submit-content .submit-feedback-text[data-v-a76be314]{font-size:16px;color:#747789;margin-bottom:16px}.bp-modal-form .bp-modal-submit-success .form-submit-button-container[data-v-a76be314]{height:auto;width:auto;background:transparent;position:absolute;right:0;bottom:40px;display:flex}.bp-modal-form .bp-modal-submit-success .form-submit-button-container .button-official-yellow-line-compact[data-v-a76be314]{height:40px;width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:0 24px;line-height:40px;cursor:pointer;text-align:center;outline:0;background:linear-gradient(45deg,rgba(255,221,77,.5),rgba(255,221,77,.5) 5%,transparent 0,transparent 50%,rgba(255,221,77,.5) 0,rgba(255,221,77,.5) 55%,transparent 0,transparent);background-size:8px 8px;border:none;font-weight:500;font-size:14px;color:#2d334d;border-radius:4px;display:flex;align-items:center}.bp-modal-form .bp-modal-submit-success .form-submit-button-container .button-go[data-v-a76be314]{height:40px;width:40px;background:#ffdd4d;padding:6px;cursor:pointer;-o-object-fit:cover;object-fit:cover}.bp-modal-form .bp-modal-form-content[data-v-a76be314]{height:663px;width:600px;background:#fff;padding:40px;border-radius:2px;position:relative;display:flex;flex-direction:column;align-items:flex-start;overflow-x:hidden;overflow-y:scroll}.bp-modal-form .bp-modal-form-content .form-warning-text[data-v-a76be314]{font-size:12px;color:#fb355e;letter-spacing:0;position:absolute;bottom:-20px}.bp-modal-form .bp-modal-form-content .official-width-default[data-v-a76be314]{width:100%;display:flex;justify-content:space-between}.bp-modal-form .bp-modal-form-content .official-width-default .contact-us-text[data-v-a76be314]{font-size:24px;color:#2d334d}.bp-modal-form .bp-modal-form-content .official-width-default .close-button[data-v-a76be314]{height:32px;width:32px;background:0 0;border-radius:50%;display:flex;justify-content:center;align-items:center;cursor:pointer;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='34' height='34' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23161C39'%3E%3Cpath d='M16.833.5C7.813.5.5 7.813.5 16.833c0 9.021 7.313 16.334 16.333 16.334 9.021 0 16.334-7.313 16.334-16.334C33.167 7.813 25.854.5 16.833.5zm0 1c8.469 0 15.334 6.865 15.334 15.333 0 8.469-6.865 15.334-15.334 15.334-8.468 0-15.333-6.865-15.333-15.334C1.5 8.365 8.365 1.5 16.833 1.5z' opacity='.2'/%3E%3Cpath d='M22.955 11.64l-4.962 4.963 4.962 4.962-.993.993L17 17.595l-4.962 4.963-.993-.993 4.962-4.962-4.962-4.962.993-.993L17 15.61l4.962-4.962.993.993z' opacity='.6'/%3E%3C/g%3E%3C/svg%3E\") 50%/100% no-repeat}.bp-modal-form .bp-modal-form-content .form-input-container[data-v-a76be314]{position:relative;margin-bottom:32px;display:flex;flex-direction:column}.bp-modal-form .bp-modal-form-content .form-input-container .modalform-name-text[data-v-a76be314]{font-size:12px;color:#161c39;opacity:.8;margin-bottom:4px;text-align:start}.bp-modal-form .bp-modal-form-content .form-input-container .input-official-form[data-v-a76be314]{height:40px;width:252px;border:none;border-bottom:1px solid rgba(22,28,57,.1);background:rgba(22,28,57,.01);border-radius:0;font-size:14px;color:#747789}.bp-modal-form .bp-modal-form-content .intention-container[data-v-a76be314]{display:flex}.bp-modal-form .bp-modal-form-content .intention-container .official-form-tag[data-v-a76be314],.bp-modal-form .bp-modal-form-content .intention-container .official-form-tag-active[data-v-a76be314]{border-radius:12px;padding:0 8px;line-height:24px;cursor:pointer}.bp-modal-form .bp-modal-form-content .intention-container .official-form-tag[data-v-a76be314]{background:#e8e8eb!important;display:flex;align-items:center}.bp-modal-form .bp-modal-form-content .intention-container .official-form-tag-active[data-v-a76be314]{background:#f5c924!important}.bp-modal-form .bp-modal-form-content .form-textarea[data-v-a76be314]{margin-bottom:36px;min-height:80px}.bp-modal-form .bp-modal-form-content .form-submit-button-container[data-v-a76be314]{height:auto;width:100%;background:transparent;right:0;bottom:40px;display:flex;justify-content:flex-end}.bp-modal-form .bp-modal-form-content .form-submit-button-container .button-go[data-v-a76be314]{height:40px;width:40px;background:#ffdd4d;padding:6px;cursor:pointer}@media screen and (max-width:768px){.bp-modal-form .bp-modal-submit-success[data-v-a76be314]{width:100%}.bp-modal-form .bp-modal-submit-success .form-submit-button-container[data-v-a76be314]{position:relative;left:50%;top:0;transform:translateX(-60px)}.bp-modal-form .bp-modal-form-content[data-v-a76be314]{width:100%;height:70%;padding:24px}.bp-modal-form .bp-modal-form-content .official-width-default[data-v-a76be314]{flex-wrap:wrap}.bp-modal-form .bp-modal-form-content .form-input-container[data-v-a76be314],.bp-modal-form .bp-modal-form-content .form-input-container .input-official-form[data-v-a76be314]{width:100%}.bp-modal-form .bp-modal-form-content .form-submit-button-container[data-v-a76be314]{justify-content:center}}@media screen and (max-width:480px){.bp-modal-form .bp-modal-form-content[data-v-a76be314]{height:auto;padding:8px 24px;-webkit-overflow-scrolling:touch}.bp-modal-form .bp-modal-form-content .form-textarea[data-v-a76be314]{width:100%!important;flex-shrink:0;margin-bottom:5px!important}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "59a2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_modal_form_vue_vue_type_style_index_0_id_4e2b10b6_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e128");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_modal_form_vue_vue_type_style_index_0_id_4e2b10b6_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_modal_form_vue_vue_type_style_index_0_id_4e2b10b6_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_modal_form_vue_vue_type_style_index_0_id_4e2b10b6_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_modal_form_vue_vue_type_style_index_0_id_4e2b10b6_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "5a09":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_textarea_vue_vue_type_style_index_0_id_8deb4a08_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1840");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_textarea_vue_vue_type_style_index_0_id_8deb4a08_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_textarea_vue_vue_type_style_index_0_id_8deb4a08_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_textarea_vue_vue_type_style_index_0_id_8deb4a08_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_textarea_vue_vue_type_style_index_0_id_8deb4a08_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-badge.vue?vue&type=template&id=585d13f1&scoped=true&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"bp-badge",class:[
        {'primary': _vm.primary},
        {'reverse': _vm.reverse}
    ],on:{"click":_vm.handleClick,"mouseenter":_vm.onMouseEnter,"mouseleave":_vm.onMouseLeave}},[_vm._v(" "+_vm._s(_vm.resultData)+" ")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-badge.vue?vue&type=template&id=585d13f1&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-badge.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var bp_badgevue_type_script_lang_js_shadow = ({
  props: {
    primary: {
      type: Boolean,
      default: false
    },
    reverse: {
      type: Boolean,
      default: false
    },
    result: String
  },
  computed: {
    resultData() {
      let num = Number(this.result) || 0;
      return num < 100 ? num : '99+';
    }

  },
  methods: {
    handleClick(data) {
      console.log("badge");
      this.$emit('click', data);
    },

    onMouseEnter(data) {
      console.log("鼠标滑入badge");
      this.$emit('mouseenter', data);
    },

    onMouseLeave(data) {
      console.log("鼠标滑出badge");
      this.$emit('mouseleave', data);
    }

  }
});
// CONCATENATED MODULE: ./src/components/bp-badge.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_bp_badgevue_type_script_lang_js_shadow = (bp_badgevue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/bp-badge.vue?shadow



function injectStyles (context) {
  
  var style0 = __webpack_require__("2a45")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = normalizeComponent(
  components_bp_badgevue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "585d13f1",
  null
  ,true
)

/* harmony default export */ var bp_badgeshadow = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-button-group.vue?vue&type=template&id=cdd754a2&scoped=true&shadow
var bp_button_groupvue_type_template_id_cdd754a2_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bp-button-group button-group"},_vm._l((_vm.buttonArr),function(item,index){return _c('bpButtonItem',{key:index,attrs:{"active":item.active,"text":item.text}})}),1)}
var bp_button_groupvue_type_template_id_cdd754a2_scoped_true_shadow_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-button-group.vue?vue&type=template&id=cdd754a2&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-button-item.vue?vue&type=template&id=46b875d5&scoped=true&
var bp_button_itemvue_type_template_id_46b875d5_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"bp-button-item button-item",class:[
        _vm.density ? 'button-density-' + _vm.density : 'button-density-default',
        {'active': _vm.active}
    ],attrs:{"disabled":_vm.disabled},on:{"click":_vm.handleClick,"dblclick":_vm.handleDBClick}},[_vm._v(" "+_vm._s(_vm.text)+" ")])}
var bp_button_itemvue_type_template_id_46b875d5_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-button-item.vue?vue&type=template&id=46b875d5&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-button-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var bp_button_itemvue_type_script_lang_js_ = ({
  props: {
    text: {
      type: String,
      default: "test text"
    },
    active: Boolean,
    density: String,
    // comfy, default, compact
    disabled: Boolean,
    //加了disabled就是disabled
    first: Boolean,
    last: Boolean
  },
  methods: {
    handleClick(data) {
      var that = this; // 开启延时器，300ms的间隔区分单击和双击，解决双击时执行两次单击事件

      clearTimeout(that.time);
      that.time = setTimeout(() => {
        // 写单击事件执行的逻辑代码
        console.log("item单击事件");
        let event = new Event("click");
        event.data = data;
        this.$emit('click', event);
      }, 300);
    },

    handleDBClick(data) {
      clearTimeout(this.time);
      console.log("item双击事件");
      this.$emit('dbclick', data);
    }

  }
});
// CONCATENATED MODULE: ./src/components/bp-button-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_bp_button_itemvue_type_script_lang_js_ = (bp_button_itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/bp-button-item.vue



function bp_button_item_injectStyles (context) {
  
  var style0 = __webpack_require__("16cd")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_button_item_component = normalizeComponent(
  components_bp_button_itemvue_type_script_lang_js_,
  bp_button_itemvue_type_template_id_46b875d5_scoped_true_render,
  bp_button_itemvue_type_template_id_46b875d5_scoped_true_staticRenderFns,
  false,
  bp_button_item_injectStyles,
  "46b875d5",
  null
  ,true
)

/* harmony default export */ var bp_button_item = (bp_button_item_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-button-group.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var bp_button_groupvue_type_script_lang_js_shadow = ({
  name: 'bp-button-group',
  components: {
    bpButtonItem: bp_button_item
  },

  data() {
    return {};
  },

  props: {
    buttonArr: {
      type: Array,
      default: function () {
        return [{
          text: "test",
          active: true
        }, {
          text: "test"
        }];
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/bp-button-group.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_bp_button_groupvue_type_script_lang_js_shadow = (bp_button_groupvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/bp-button-group.vue?shadow



function bp_button_groupshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("db39")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_button_groupshadow_component = normalizeComponent(
  components_bp_button_groupvue_type_script_lang_js_shadow,
  bp_button_groupvue_type_template_id_cdd754a2_scoped_true_shadow_render,
  bp_button_groupvue_type_template_id_cdd754a2_scoped_true_shadow_staticRenderFns,
  false,
  bp_button_groupshadow_injectStyles,
  "cdd754a2",
  null
  ,true
)

/* harmony default export */ var bp_button_groupshadow = (bp_button_groupshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-button-item.vue?vue&type=template&id=04ef1234&scoped=true&shadow
var bp_button_itemvue_type_template_id_04ef1234_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"bp-button-item button-item",class:[
        _vm.density ? 'button-density-' + _vm.density : 'button-density-default',
        {'active': _vm.active}
    ],attrs:{"disabled":_vm.disabled},on:{"click":_vm.handleClick,"dblclick":_vm.handleDBClick}},[_vm._v(" "+_vm._s(_vm.text)+" ")])}
var bp_button_itemvue_type_template_id_04ef1234_scoped_true_shadow_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-button-item.vue?vue&type=template&id=04ef1234&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-button-item.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var bp_button_itemvue_type_script_lang_js_shadow = ({
  props: {
    text: {
      type: String,
      default: "test text"
    },
    active: Boolean,
    density: String,
    // comfy, default, compact
    disabled: Boolean,
    //加了disabled就是disabled
    first: Boolean,
    last: Boolean
  },
  methods: {
    handleClick(data) {
      var that = this; // 开启延时器，300ms的间隔区分单击和双击，解决双击时执行两次单击事件

      clearTimeout(that.time);
      that.time = setTimeout(() => {
        // 写单击事件执行的逻辑代码
        console.log("item单击事件");
        let event = new Event("click");
        event.data = data;
        this.$emit('click', event);
      }, 300);
    },

    handleDBClick(data) {
      clearTimeout(this.time);
      console.log("item双击事件");
      this.$emit('dbclick', data);
    }

  }
});
// CONCATENATED MODULE: ./src/components/bp-button-item.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_bp_button_itemvue_type_script_lang_js_shadow = (bp_button_itemvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/bp-button-item.vue?shadow



function bp_button_itemshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("3025")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_button_itemshadow_component = normalizeComponent(
  components_bp_button_itemvue_type_script_lang_js_shadow,
  bp_button_itemvue_type_template_id_04ef1234_scoped_true_shadow_render,
  bp_button_itemvue_type_template_id_04ef1234_scoped_true_shadow_staticRenderFns,
  false,
  bp_button_itemshadow_injectStyles,
  "04ef1234",
  null
  ,true
)

/* harmony default export */ var bp_button_itemshadow = (bp_button_itemshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-button.vue?vue&type=template&id=16bcbf7c&scoped=true&shadow
var bp_buttonvue_type_template_id_16bcbf7c_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"bp-button",class:[
        _vm.type ? 'button-' + _vm.type : 'button-primary',
        _vm.density ? 'button-density-' + _vm.density : 'button-density-default',
        {'btn-block': _vm.block}
    ],attrs:{"disabled":_vm.buttonDisabled,"type":_vm.type},on:{"click":_vm.handleClick,"dblclick":_vm.handleDBClick}},[(_vm.src)?_c('img',{staticClass:"svg-icon",attrs:{"svg-inline":"","src":_vm.src,"alt":"example"}}):_vm._e(),_vm._v(" "+_vm._s(_vm.text)+" ")])}
var bp_buttonvue_type_template_id_16bcbf7c_scoped_true_shadow_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-button.vue?vue&type=template&id=16bcbf7c&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-button.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var bp_buttonvue_type_script_lang_js_shadow = ({
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
        this.$emit('click', data);
      }, 300);
    },

    handleDBClick(data) {
      clearTimeout(this.time); // console.log("双击事件")

      this.$emit('dbclick', data);
    }

  }
});
// CONCATENATED MODULE: ./src/components/bp-button.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_bp_buttonvue_type_script_lang_js_shadow = (bp_buttonvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/bp-button.vue?shadow



function bp_buttonshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("50aa")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_buttonshadow_component = normalizeComponent(
  components_bp_buttonvue_type_script_lang_js_shadow,
  bp_buttonvue_type_template_id_16bcbf7c_scoped_true_shadow_render,
  bp_buttonvue_type_template_id_16bcbf7c_scoped_true_shadow_staticRenderFns,
  false,
  bp_buttonshadow_injectStyles,
  "16bcbf7c",
  null
  ,true
)

/* harmony default export */ var bp_buttonshadow = (bp_buttonshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-carousel-item.vue?vue&type=template&id=04b46ca2&scoped=true&shadow
var bp_carousel_itemvue_type_template_id_04b46ca2_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.ready),expression:"ready"}],staticClass:"el-carousel__item",class:{
      'is-active': _vm.active,
      'el-carousel__item--card': _vm.$parent.type === 'card',
      'is-in-stage': _vm.inStage,
      'is-hover': _vm.hover,
      'is-animating': _vm.animating
    },style:(_vm.itemStyle),on:{"click":_vm.handleItemClick}},[(_vm.$parent.type === 'card')?_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.active),expression:"!active"}],staticClass:"el-carousel__mask"}):_vm._e(),_vm._t("default")],2)}
var bp_carousel_itemvue_type_template_id_04b46ca2_scoped_true_shadow_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-carousel-item.vue?vue&type=template&id=04b46ca2&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-carousel-item.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const CARD_SCALE = 0.83;
/* harmony default export */ var bp_carousel_itemvue_type_script_lang_js_shadow = ({
  name: 'bpCarouselItem',
  props: {
    name: String,
    label: {
      type: [String, Number],
      default: ''
    }
  },

  data() {
    return {
      hover: false,
      translate: 0,
      scale: 1,
      active: false,
      ready: false,
      inStage: false,
      animating: false
    };
  },

  methods: {
    processIndex(index, activeIndex, length) {
      if (activeIndex === 0 && index === length - 1) {
        return -1;
      } else if (activeIndex === length - 1 && index === 0) {
        return length;
      } else if (index < activeIndex - 1 && activeIndex - index >= length / 2) {
        return length + 1;
      } else if (index > activeIndex + 1 && index - activeIndex >= length / 2) {
        return -2;
      }

      return index;
    },

    calcCardTranslate(index, activeIndex) {
      const parentWidth = this.$parent.$el.offsetWidth;

      if (this.inStage) {
        return parentWidth * ((2 - CARD_SCALE) * (index - activeIndex) + 1) / 4;
      } else if (index < activeIndex) {
        return -(1 + CARD_SCALE) * parentWidth / 4;
      } else {
        return (3 + CARD_SCALE) * parentWidth / 4;
      }
    },

    calcTranslate(index, activeIndex, isVertical) {
      const distance = this.$parent.$el[isVertical ? 'offsetHeight' : 'offsetWidth'];
      return distance * (index - activeIndex);
    },

    translateItem(index, activeIndex, oldIndex) {
      const parentType = this.$parent.type;
      const parentDirection = this.parentDirection;
      const length = this.$parent.items.length;

      if (parentType !== 'card' && oldIndex !== undefined) {
        this.animating = index === activeIndex || index === oldIndex;
      }

      if (index !== activeIndex && length > 2 && this.$parent.loop) {
        index = this.processIndex(index, activeIndex, length);
      }

      if (parentType === 'card') {
        if (parentDirection === 'vertical') {
          console.warn('[Element Warn][Carousel]vertical direction is not supported in card mode');
        }

        this.inStage = Math.round(Math.abs(index - activeIndex)) <= 1;
        this.active = index === activeIndex;
        this.translate = this.calcCardTranslate(index, activeIndex);
        this.scale = this.active ? 1 : CARD_SCALE;
      } else {
        this.active = index === activeIndex;
        const isVertical = parentDirection === 'vertical';
        this.translate = this.calcTranslate(index, activeIndex, isVertical);
        this.scale = 1;
      }

      this.ready = true;
    },

    handleItemClick() {
      const parent = this.$parent;

      if (parent && parent.type === 'card') {
        const index = parent.items.indexOf(this);
        parent.setActiveItem(index);
      }
    }

  },
  computed: {
    parentDirection() {
      return this.$parent.direction;
    },

    itemStyle() {
      const translateType = this.parentDirection === 'vertical' ? 'translateY' : 'translateX';
      const value = `${translateType}(${this.translate}px) scale(${this.scale})`;
      const style = {
        transform: value
      };

      const autoprefixer = function (style) {
        if (typeof style !== 'object') return style;
        const rules = ['transform', 'transition', 'animation'];
        const prefixes = ['ms-', 'webkit-'];
        rules.forEach(rule => {
          const value = style[rule];

          if (rule && value) {
            prefixes.forEach(prefix => {
              style[prefix + rule] = value;
            });
          }
        });
        return style;
      };

      return autoprefixer(style);
    }

  },

  created() {
    this.$parent && this.$parent.updateItems();
  },

  destroyed() {
    this.$parent && this.$parent.updateItems();
  }

});
// CONCATENATED MODULE: ./src/components/bp-carousel-item.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_bp_carousel_itemvue_type_script_lang_js_shadow = (bp_carousel_itemvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/bp-carousel-item.vue?shadow



function bp_carousel_itemshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("8232")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_carousel_itemshadow_component = normalizeComponent(
  components_bp_carousel_itemvue_type_script_lang_js_shadow,
  bp_carousel_itemvue_type_template_id_04b46ca2_scoped_true_shadow_render,
  bp_carousel_itemvue_type_template_id_04b46ca2_scoped_true_shadow_staticRenderFns,
  false,
  bp_carousel_itemshadow_injectStyles,
  "04b46ca2",
  null
  ,true
)

/* harmony default export */ var bp_carousel_itemshadow = (bp_carousel_itemshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-carousel-unit.vue?vue&type=template&id=59898cf9&scoped=true&shadow
var bp_carousel_unitvue_type_template_id_59898cf9_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('bp-carousel',{attrs:{"height":_vm.height,"autoplay":_vm.autoplay}},_vm._l((_vm.itemArr),function(item){return _c('bp-carousel-item',{key:item},[_c('img',{attrs:{"src":item,"alt":""}})])}),1)}
var bp_carousel_unitvue_type_template_id_59898cf9_scoped_true_shadow_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-carousel-unit.vue?vue&type=template&id=59898cf9&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-carousel.vue?vue&type=template&id=41ad729a&scoped=true&
var bp_carouselvue_type_template_id_41ad729a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.carouselClasses,on:{"mouseenter":function($event){$event.stopPropagation();return _vm.handleMouseEnter($event)},"mouseleave":function($event){$event.stopPropagation();return _vm.handleMouseLeave($event)}}},[_c('div',{staticClass:"el-carousel__container",style:({ height: _vm.height })},[(_vm.arrowDisplay)?_c('transition',{attrs:{"name":"carousel-arrow-left"}},[_c('button',{directives:[{name:"show",rawName:"v-show",value:((_vm.arrow === 'always' || _vm.hover) && (_vm.loop || _vm.activeIndex > 0)),expression:"(arrow === 'always' || hover) && (loop || activeIndex > 0)"}],staticClass:"el-carousel__arrow el-carousel__arrow--left",attrs:{"type":"button"},on:{"mouseenter":function($event){return _vm.handleButtonEnter('left')},"mouseleave":_vm.handleButtonLeave,"click":function($event){$event.stopPropagation();return _vm.prev()}}},[_c('i',{staticClass:"el-icon-arrow-left"})])]):_vm._e(),(_vm.arrowDisplay)?_c('transition',{attrs:{"name":"carousel-arrow-right"}},[_c('button',{directives:[{name:"show",rawName:"v-show",value:((_vm.arrow === 'always' || _vm.hover) && (_vm.loop || _vm.activeIndex < _vm.items.length - 1)),expression:"(arrow === 'always' || hover) && (loop || activeIndex < items.length - 1)"}],staticClass:"el-carousel__arrow el-carousel__arrow--right",attrs:{"type":"button"},on:{"mouseenter":function($event){return _vm.handleButtonEnter('right')},"mouseleave":_vm.handleButtonLeave,"click":function($event){$event.stopPropagation();return _vm.next()}}},[_c('i',{staticClass:"el-icon-arrow-right"})])]):_vm._e(),_vm._t("default")],2),(_vm.indicatorPosition !== 'none')?_c('ul',{class:_vm.indicatorsClasses},_vm._l((_vm.items),function(item,index){return _c('li',{key:index,class:[
          'el-carousel__indicator',
          'el-carousel__indicator--' + _vm.direction,
          { 'is-active': index === _vm.activeIndex }],on:{"click":function($event){$event.stopPropagation();return _vm.handleIndicatorClick(index)}}},[_c('button',{staticClass:"el-carousel__button"},[(_vm.hasLabel)?_c('span',[_vm._v(_vm._s(item.label))]):_vm._e()])])}),0):_vm._e()])}
var bp_carouselvue_type_template_id_41ad729a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-carousel.vue?vue&type=template&id=41ad729a&scoped=true&

// EXTERNAL MODULE: ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
var ResizeObserver_es = __webpack_require__("6dd8");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-carousel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//监听元素高度变化

/* harmony default export */ var bp_carouselvue_type_script_lang_js_ = ({
  name: 'bpCarousel',
  props: {
    initialIndex: {
      //初始幻灯片索引，从0开始
      type: Number,
      default: 0
    },
    height: String,
    trigger: {
      // 底部指示器触发方式
      type: String,
      default: 'hover'
    },
    autoplay: {
      // 是否自动切换
      type: Boolean,
      default: true
    },
    interval: {
      // 自动切换时间间隔
      type: Number,
      default: 3000
    },
    indicatorPosition: String,
    // 指示器位置
    indicator: {
      type: Boolean,
      default: true
    },
    arrow: {
      //切换箭头的显示时机 always/hover/never
      type: String,
      default: 'hover'
    },
    type: String,
    //走马灯的类型,card
    loop: {
      //是否循环显示
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: 'horizontal',

      validator(val) {
        return ['horizontal', 'vertical'].indexOf(val) !== -1;
      }

    }
  },

  data() {
    return {
      items: [],
      // 幻灯片数组
      activeIndex: -1,
      // 当前索引
      containerWidth: 0,
      timer: null,
      hover: false
    };
  },

  computed: {
    arrowDisplay() {
      return this.arrow !== 'never' && this.direction !== 'vertical';
    },

    hasLabel() {
      return this.items.some(item => item.label.toString().length > 0);
    },

    carouselClasses() {
      const classes = ['el-carousel', 'el-carousel--' + this.direction];

      if (this.type === 'card') {
        classes.push('el-carousel--card');
      }

      return classes;
    },

    indicatorsClasses() {
      const classes = ['el-carousel__indicators', 'el-carousel__indicators--' + this.direction];

      if (this.hasLabel) {
        classes.push('el-carousel__indicators--labels');
      }

      if (this.indicatorPosition === 'outside' || this.type === 'card') {
        classes.push('el-carousel__indicators--outside');
      }

      return classes;
    }

  },
  watch: {
    items(val) {
      if (val.length > 0) this.setActiveItem(this.initialIndex);
    },

    activeIndex(val, oldVal) {
      this.resetItemPosition(oldVal);

      if (oldVal > -1) {
        this.$emit('change', val, oldVal);
      }
    },

    autoplay(val) {
      val ? this.startTimer() : this.pauseTimer();
    },

    loop() {
      this.setActiveItem(this.activeIndex);
    },

    interval() {
      this.pauseTimer();
      this.startTimer();
    }

  },
  methods: {
    handleMouseEnter() {
      this.hover = true;
      this.pauseTimer();
    },

    handleMouseLeave() {
      this.hover = false;
      this.startTimer();
    },

    itemInStage(item, index) {
      const length = this.items.length;

      if (index === length - 1 && item.inStage && this.items[0].active || item.inStage && this.items[index + 1] && this.items[index + 1].active) {
        return 'left';
      } else if (index === 0 && item.inStage && this.items[length - 1].active || item.inStage && this.items[index - 1] && this.items[index - 1].active) {
        return 'right';
      }

      return false;
    },

    handleButtonEnter(arrow) {
      if (this.direction === 'vertical') return;
      this.items.forEach((item, index) => {
        if (arrow === this.itemInStage(item, index)) {
          item.hover = true;
        }
      });
    },

    handleButtonLeave() {
      if (this.direction === 'vertical') return;
      this.items.forEach(item => {
        item.hover = false;
      });
    },

    // 将所有的幻灯片放入items数组中
    updateItems() {
      this.items = this.$children.filter(child => child.$options.name === 'bpCarouselItem');
    },

    //  重置幻灯片位置
    resetItemPosition(oldIndex) {
      this.items.forEach((item, index) => {
        item.translateItem(index, this.activeIndex, oldIndex);
      });
    },

    // 改变当前的幻灯片
    playSlides() {
      if (this.activeIndex < this.items.length - 1) {
        this.activeIndex++;
      } else if (this.loop) {
        this.activeIndex = 0;
      }
    },

    // 清空定时器
    pauseTimer() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },

    // 如果自动切换的时间间隔小于等于0时，或者用户未设置自动播放时，直接返回，幻灯片不自动播放
    startTimer() {
      if (this.interval <= 0 || !this.autoplay || this.timer) return;
      this.timer = setInterval(this.playSlides, this.interval);
    },

    // 设置当前页    
    setActiveItem(index) {
      if (typeof index === 'string') {
        const filteredItems = this.items.filter(item => item.name === index);

        if (filteredItems.length > 0) {
          index = this.items.indexOf(filteredItems[0]);
        }
      }

      index = Number(index);

      if (isNaN(index) || index !== Math.floor(index)) {
        console.warn('[Element Warn][Carousel]index must be an integer.');
        return;
      }

      let length = this.items.length;
      const oldIndex = this.activeIndex;

      if (index < 0) {
        this.activeIndex = this.loop ? length - 1 : 0;
      } else if (index >= length) {
        this.activeIndex = this.loop ? 0 : length - 1;
      } else {
        this.activeIndex = index;
      }

      if (oldIndex === this.activeIndex) {
        this.resetItemPosition(oldIndex);
      }
    },

    prev() {
      this.setActiveItem(this.activeIndex - 1);
    },

    next() {
      this.setActiveItem(this.activeIndex + 1);
    },

    handleIndicatorClick(index) {
      this.activeIndex = index;
    },

    handleIndicatorHover(index) {
      if (this.trigger === 'hover' && index !== this.activeIndex) {
        this.activeIndex = index;
      }
    }

  },

  created() {},

  mounted() {
    this.updateItems();
    const isServer = typeof window === 'undefined';
    /* istanbul ignore next */

    const resizeHandler = function (entries) {
      for (let entry of entries) {
        const listeners = entry.target.__resizeListeners__ || [];

        if (listeners.length) {
          listeners.forEach(fn => {
            fn();
          });
        }
      }
    };
    /* istanbul ignore next */


    const addResizeListener = function (element, fn) {
      if (isServer) return;

      if (!element.__resizeListeners__) {
        element.__resizeListeners__ = [];
        element.__ro__ = new ResizeObserver_es["a" /* default */](resizeHandler);

        element.__ro__.observe(element);
      }

      element.__resizeListeners__.push(fn);
    };

    this.$nextTick(() => {
      addResizeListener(this.$el, this.resetItemPosition);

      if (this.initialIndex < this.items.length && this.initialIndex >= 0) {
        this.activeIndex = this.initialIndex;
      }

      this.startTimer();
    });
  },

  beforeDestroy() {
    /* istanbul ignore next */
    const removeResizeListener = function (element, fn) {
      if (!element || !element.__resizeListeners__) return;

      element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);

      if (!element.__resizeListeners__.length) {
        element.__ro__.disconnect();
      }
    };

    if (this.$el) removeResizeListener(this.$el, this.resetItemPosition);
    this.pauseTimer();
  }

});
// CONCATENATED MODULE: ./src/components/bp-carousel.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_bp_carouselvue_type_script_lang_js_ = (bp_carouselvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/bp-carousel.vue



function bp_carousel_injectStyles (context) {
  
  var style0 = __webpack_require__("051e")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_carousel_component = normalizeComponent(
  components_bp_carouselvue_type_script_lang_js_,
  bp_carouselvue_type_template_id_41ad729a_scoped_true_render,
  bp_carouselvue_type_template_id_41ad729a_scoped_true_staticRenderFns,
  false,
  bp_carousel_injectStyles,
  "41ad729a",
  null
  ,true
)

/* harmony default export */ var bp_carousel = (bp_carousel_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-carousel-item.vue?vue&type=template&id=70e4c7dc&scoped=true&
var bp_carousel_itemvue_type_template_id_70e4c7dc_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.ready),expression:"ready"}],staticClass:"el-carousel__item",class:{
      'is-active': _vm.active,
      'el-carousel__item--card': _vm.$parent.type === 'card',
      'is-in-stage': _vm.inStage,
      'is-hover': _vm.hover,
      'is-animating': _vm.animating
    },style:(_vm.itemStyle),on:{"click":_vm.handleItemClick}},[(_vm.$parent.type === 'card')?_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.active),expression:"!active"}],staticClass:"el-carousel__mask"}):_vm._e(),_vm._t("default")],2)}
var bp_carousel_itemvue_type_template_id_70e4c7dc_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-carousel-item.vue?vue&type=template&id=70e4c7dc&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-carousel-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const bp_carousel_itemvue_type_script_lang_js_CARD_SCALE = 0.83;
/* harmony default export */ var bp_carousel_itemvue_type_script_lang_js_ = ({
  name: 'bpCarouselItem',
  props: {
    name: String,
    label: {
      type: [String, Number],
      default: ''
    }
  },

  data() {
    return {
      hover: false,
      translate: 0,
      scale: 1,
      active: false,
      ready: false,
      inStage: false,
      animating: false
    };
  },

  methods: {
    processIndex(index, activeIndex, length) {
      if (activeIndex === 0 && index === length - 1) {
        return -1;
      } else if (activeIndex === length - 1 && index === 0) {
        return length;
      } else if (index < activeIndex - 1 && activeIndex - index >= length / 2) {
        return length + 1;
      } else if (index > activeIndex + 1 && index - activeIndex >= length / 2) {
        return -2;
      }

      return index;
    },

    calcCardTranslate(index, activeIndex) {
      const parentWidth = this.$parent.$el.offsetWidth;

      if (this.inStage) {
        return parentWidth * ((2 - bp_carousel_itemvue_type_script_lang_js_CARD_SCALE) * (index - activeIndex) + 1) / 4;
      } else if (index < activeIndex) {
        return -(1 + bp_carousel_itemvue_type_script_lang_js_CARD_SCALE) * parentWidth / 4;
      } else {
        return (3 + bp_carousel_itemvue_type_script_lang_js_CARD_SCALE) * parentWidth / 4;
      }
    },

    calcTranslate(index, activeIndex, isVertical) {
      const distance = this.$parent.$el[isVertical ? 'offsetHeight' : 'offsetWidth'];
      return distance * (index - activeIndex);
    },

    translateItem(index, activeIndex, oldIndex) {
      const parentType = this.$parent.type;
      const parentDirection = this.parentDirection;
      const length = this.$parent.items.length;

      if (parentType !== 'card' && oldIndex !== undefined) {
        this.animating = index === activeIndex || index === oldIndex;
      }

      if (index !== activeIndex && length > 2 && this.$parent.loop) {
        index = this.processIndex(index, activeIndex, length);
      }

      if (parentType === 'card') {
        if (parentDirection === 'vertical') {
          console.warn('[Element Warn][Carousel]vertical direction is not supported in card mode');
        }

        this.inStage = Math.round(Math.abs(index - activeIndex)) <= 1;
        this.active = index === activeIndex;
        this.translate = this.calcCardTranslate(index, activeIndex);
        this.scale = this.active ? 1 : bp_carousel_itemvue_type_script_lang_js_CARD_SCALE;
      } else {
        this.active = index === activeIndex;
        const isVertical = parentDirection === 'vertical';
        this.translate = this.calcTranslate(index, activeIndex, isVertical);
        this.scale = 1;
      }

      this.ready = true;
    },

    handleItemClick() {
      const parent = this.$parent;

      if (parent && parent.type === 'card') {
        const index = parent.items.indexOf(this);
        parent.setActiveItem(index);
      }
    }

  },
  computed: {
    parentDirection() {
      return this.$parent.direction;
    },

    itemStyle() {
      const translateType = this.parentDirection === 'vertical' ? 'translateY' : 'translateX';
      const value = `${translateType}(${this.translate}px) scale(${this.scale})`;
      const style = {
        transform: value
      };

      const autoprefixer = function (style) {
        if (typeof style !== 'object') return style;
        const rules = ['transform', 'transition', 'animation'];
        const prefixes = ['ms-', 'webkit-'];
        rules.forEach(rule => {
          const value = style[rule];

          if (rule && value) {
            prefixes.forEach(prefix => {
              style[prefix + rule] = value;
            });
          }
        });
        return style;
      };

      return autoprefixer(style);
    }

  },

  created() {
    this.$parent && this.$parent.updateItems();
  },

  destroyed() {
    this.$parent && this.$parent.updateItems();
  }

});
// CONCATENATED MODULE: ./src/components/bp-carousel-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_bp_carousel_itemvue_type_script_lang_js_ = (bp_carousel_itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/bp-carousel-item.vue



function bp_carousel_item_injectStyles (context) {
  
  var style0 = __webpack_require__("ccc0")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_carousel_item_component = normalizeComponent(
  components_bp_carousel_itemvue_type_script_lang_js_,
  bp_carousel_itemvue_type_template_id_70e4c7dc_scoped_true_render,
  bp_carousel_itemvue_type_template_id_70e4c7dc_scoped_true_staticRenderFns,
  false,
  bp_carousel_item_injectStyles,
  "70e4c7dc",
  null
  ,true
)

/* harmony default export */ var bp_carousel_item = (bp_carousel_item_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-carousel-unit.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//


/* harmony default export */ var bp_carousel_unitvue_type_script_lang_js_shadow = ({
  name: 'bp-button',
  components: {
    bpCarousel: bp_carousel,
    bpCarouselItem: bp_carousel_item
  },
  props: {
    itemArr: {
      type: Array,
      default: function () {
        return ["https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/head1200_B.png", 'https://dss2.bdstatic.com/5bVYsj_p_tVS5dKfpU_Y_D3/res/r/image/2021-3-4/hao123%20logo.png', 'https://dgss0.bdstatic.com/5bVWsj_p_tVS5dKfpU_Y_D3/res/r/image/2017-09-27/297f5edb1e984613083a2d3cc0c5bb36.png'];
      }
    },
    height: String,
    autoplay: {
      type: Boolean,
      default: false
    }
  },
  methods: {}
});
// CONCATENATED MODULE: ./src/components/bp-carousel-unit.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_bp_carousel_unitvue_type_script_lang_js_shadow = (bp_carousel_unitvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/bp-carousel-unit.vue?shadow



function bp_carousel_unitshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("35ff")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_carousel_unitshadow_component = normalizeComponent(
  components_bp_carousel_unitvue_type_script_lang_js_shadow,
  bp_carousel_unitvue_type_template_id_59898cf9_scoped_true_shadow_render,
  bp_carousel_unitvue_type_template_id_59898cf9_scoped_true_shadow_staticRenderFns,
  false,
  bp_carousel_unitshadow_injectStyles,
  "59898cf9",
  null
  ,true
)

/* harmony default export */ var bp_carousel_unitshadow = (bp_carousel_unitshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-carousel.vue?vue&type=template&id=6d6199db&scoped=true&shadow
var bp_carouselvue_type_template_id_6d6199db_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.carouselClasses,on:{"mouseenter":function($event){$event.stopPropagation();return _vm.handleMouseEnter($event)},"mouseleave":function($event){$event.stopPropagation();return _vm.handleMouseLeave($event)}}},[_c('div',{staticClass:"el-carousel__container",style:({ height: _vm.height })},[(_vm.arrowDisplay)?_c('transition',{attrs:{"name":"carousel-arrow-left"}},[_c('button',{directives:[{name:"show",rawName:"v-show",value:((_vm.arrow === 'always' || _vm.hover) && (_vm.loop || _vm.activeIndex > 0)),expression:"(arrow === 'always' || hover) && (loop || activeIndex > 0)"}],staticClass:"el-carousel__arrow el-carousel__arrow--left",attrs:{"type":"button"},on:{"mouseenter":function($event){return _vm.handleButtonEnter('left')},"mouseleave":_vm.handleButtonLeave,"click":function($event){$event.stopPropagation();return _vm.prev()}}},[_c('i',{staticClass:"el-icon-arrow-left"})])]):_vm._e(),(_vm.arrowDisplay)?_c('transition',{attrs:{"name":"carousel-arrow-right"}},[_c('button',{directives:[{name:"show",rawName:"v-show",value:((_vm.arrow === 'always' || _vm.hover) && (_vm.loop || _vm.activeIndex < _vm.items.length - 1)),expression:"(arrow === 'always' || hover) && (loop || activeIndex < items.length - 1)"}],staticClass:"el-carousel__arrow el-carousel__arrow--right",attrs:{"type":"button"},on:{"mouseenter":function($event){return _vm.handleButtonEnter('right')},"mouseleave":_vm.handleButtonLeave,"click":function($event){$event.stopPropagation();return _vm.next()}}},[_c('i',{staticClass:"el-icon-arrow-right"})])]):_vm._e(),_vm._t("default")],2),(_vm.indicatorPosition !== 'none')?_c('ul',{class:_vm.indicatorsClasses},_vm._l((_vm.items),function(item,index){return _c('li',{key:index,class:[
          'el-carousel__indicator',
          'el-carousel__indicator--' + _vm.direction,
          { 'is-active': index === _vm.activeIndex }],on:{"click":function($event){$event.stopPropagation();return _vm.handleIndicatorClick(index)}}},[_c('button',{staticClass:"el-carousel__button"},[(_vm.hasLabel)?_c('span',[_vm._v(_vm._s(item.label))]):_vm._e()])])}),0):_vm._e()])}
var bp_carouselvue_type_template_id_6d6199db_scoped_true_shadow_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-carousel.vue?vue&type=template&id=6d6199db&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-carousel.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//监听元素高度变化

/* harmony default export */ var bp_carouselvue_type_script_lang_js_shadow = ({
  name: 'bpCarousel',
  props: {
    initialIndex: {
      //初始幻灯片索引，从0开始
      type: Number,
      default: 0
    },
    height: String,
    trigger: {
      // 底部指示器触发方式
      type: String,
      default: 'hover'
    },
    autoplay: {
      // 是否自动切换
      type: Boolean,
      default: true
    },
    interval: {
      // 自动切换时间间隔
      type: Number,
      default: 3000
    },
    indicatorPosition: String,
    // 指示器位置
    indicator: {
      type: Boolean,
      default: true
    },
    arrow: {
      //切换箭头的显示时机 always/hover/never
      type: String,
      default: 'hover'
    },
    type: String,
    //走马灯的类型,card
    loop: {
      //是否循环显示
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: 'horizontal',

      validator(val) {
        return ['horizontal', 'vertical'].indexOf(val) !== -1;
      }

    }
  },

  data() {
    return {
      items: [],
      // 幻灯片数组
      activeIndex: -1,
      // 当前索引
      containerWidth: 0,
      timer: null,
      hover: false
    };
  },

  computed: {
    arrowDisplay() {
      return this.arrow !== 'never' && this.direction !== 'vertical';
    },

    hasLabel() {
      return this.items.some(item => item.label.toString().length > 0);
    },

    carouselClasses() {
      const classes = ['el-carousel', 'el-carousel--' + this.direction];

      if (this.type === 'card') {
        classes.push('el-carousel--card');
      }

      return classes;
    },

    indicatorsClasses() {
      const classes = ['el-carousel__indicators', 'el-carousel__indicators--' + this.direction];

      if (this.hasLabel) {
        classes.push('el-carousel__indicators--labels');
      }

      if (this.indicatorPosition === 'outside' || this.type === 'card') {
        classes.push('el-carousel__indicators--outside');
      }

      return classes;
    }

  },
  watch: {
    items(val) {
      if (val.length > 0) this.setActiveItem(this.initialIndex);
    },

    activeIndex(val, oldVal) {
      this.resetItemPosition(oldVal);

      if (oldVal > -1) {
        this.$emit('change', val, oldVal);
      }
    },

    autoplay(val) {
      val ? this.startTimer() : this.pauseTimer();
    },

    loop() {
      this.setActiveItem(this.activeIndex);
    },

    interval() {
      this.pauseTimer();
      this.startTimer();
    }

  },
  methods: {
    handleMouseEnter() {
      this.hover = true;
      this.pauseTimer();
    },

    handleMouseLeave() {
      this.hover = false;
      this.startTimer();
    },

    itemInStage(item, index) {
      const length = this.items.length;

      if (index === length - 1 && item.inStage && this.items[0].active || item.inStage && this.items[index + 1] && this.items[index + 1].active) {
        return 'left';
      } else if (index === 0 && item.inStage && this.items[length - 1].active || item.inStage && this.items[index - 1] && this.items[index - 1].active) {
        return 'right';
      }

      return false;
    },

    handleButtonEnter(arrow) {
      if (this.direction === 'vertical') return;
      this.items.forEach((item, index) => {
        if (arrow === this.itemInStage(item, index)) {
          item.hover = true;
        }
      });
    },

    handleButtonLeave() {
      if (this.direction === 'vertical') return;
      this.items.forEach(item => {
        item.hover = false;
      });
    },

    // 将所有的幻灯片放入items数组中
    updateItems() {
      this.items = this.$children.filter(child => child.$options.name === 'bpCarouselItem');
    },

    //  重置幻灯片位置
    resetItemPosition(oldIndex) {
      this.items.forEach((item, index) => {
        item.translateItem(index, this.activeIndex, oldIndex);
      });
    },

    // 改变当前的幻灯片
    playSlides() {
      if (this.activeIndex < this.items.length - 1) {
        this.activeIndex++;
      } else if (this.loop) {
        this.activeIndex = 0;
      }
    },

    // 清空定时器
    pauseTimer() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },

    // 如果自动切换的时间间隔小于等于0时，或者用户未设置自动播放时，直接返回，幻灯片不自动播放
    startTimer() {
      if (this.interval <= 0 || !this.autoplay || this.timer) return;
      this.timer = setInterval(this.playSlides, this.interval);
    },

    // 设置当前页    
    setActiveItem(index) {
      if (typeof index === 'string') {
        const filteredItems = this.items.filter(item => item.name === index);

        if (filteredItems.length > 0) {
          index = this.items.indexOf(filteredItems[0]);
        }
      }

      index = Number(index);

      if (isNaN(index) || index !== Math.floor(index)) {
        console.warn('[Element Warn][Carousel]index must be an integer.');
        return;
      }

      let length = this.items.length;
      const oldIndex = this.activeIndex;

      if (index < 0) {
        this.activeIndex = this.loop ? length - 1 : 0;
      } else if (index >= length) {
        this.activeIndex = this.loop ? 0 : length - 1;
      } else {
        this.activeIndex = index;
      }

      if (oldIndex === this.activeIndex) {
        this.resetItemPosition(oldIndex);
      }
    },

    prev() {
      this.setActiveItem(this.activeIndex - 1);
    },

    next() {
      this.setActiveItem(this.activeIndex + 1);
    },

    handleIndicatorClick(index) {
      this.activeIndex = index;
    },

    handleIndicatorHover(index) {
      if (this.trigger === 'hover' && index !== this.activeIndex) {
        this.activeIndex = index;
      }
    }

  },

  created() {},

  mounted() {
    this.updateItems();
    const isServer = typeof window === 'undefined';
    /* istanbul ignore next */

    const resizeHandler = function (entries) {
      for (let entry of entries) {
        const listeners = entry.target.__resizeListeners__ || [];

        if (listeners.length) {
          listeners.forEach(fn => {
            fn();
          });
        }
      }
    };
    /* istanbul ignore next */


    const addResizeListener = function (element, fn) {
      if (isServer) return;

      if (!element.__resizeListeners__) {
        element.__resizeListeners__ = [];
        element.__ro__ = new ResizeObserver_es["a" /* default */](resizeHandler);

        element.__ro__.observe(element);
      }

      element.__resizeListeners__.push(fn);
    };

    this.$nextTick(() => {
      addResizeListener(this.$el, this.resetItemPosition);

      if (this.initialIndex < this.items.length && this.initialIndex >= 0) {
        this.activeIndex = this.initialIndex;
      }

      this.startTimer();
    });
  },

  beforeDestroy() {
    /* istanbul ignore next */
    const removeResizeListener = function (element, fn) {
      if (!element || !element.__resizeListeners__) return;

      element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);

      if (!element.__resizeListeners__.length) {
        element.__ro__.disconnect();
      }
    };

    if (this.$el) removeResizeListener(this.$el, this.resetItemPosition);
    this.pauseTimer();
  }

});
// CONCATENATED MODULE: ./src/components/bp-carousel.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_bp_carouselvue_type_script_lang_js_shadow = (bp_carouselvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/bp-carousel.vue?shadow



function bp_carouselshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("9a1e")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_carouselshadow_component = normalizeComponent(
  components_bp_carouselvue_type_script_lang_js_shadow,
  bp_carouselvue_type_template_id_6d6199db_scoped_true_shadow_render,
  bp_carouselvue_type_template_id_6d6199db_scoped_true_shadow_staticRenderFns,
  false,
  bp_carouselshadow_injectStyles,
  "6d6199db",
  null
  ,true
)

/* harmony default export */ var bp_carouselshadow = (bp_carouselshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-img.vue?vue&type=template&id=d48ab938&scoped=true&shadow
var bp_imgvue_type_template_id_d48ab938_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('img',{staticClass:"bp-img",attrs:{"src":_vm.src}})}
var bp_imgvue_type_template_id_d48ab938_scoped_true_shadow_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-img.vue?vue&type=template&id=d48ab938&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-img.vue?vue&type=script&lang=js&shadow
//
//
//
//
/* harmony default export */ var bp_imgvue_type_script_lang_js_shadow = ({
  props: {
    src: {
      type: String,
      default: "https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/01/0F/ChMkJlbKwvKILghAAAXdSSmnlysAALGvgEMwnEABd1h654.jpg"
    }
  },
  computed: {},
  methods: {}
});
// CONCATENATED MODULE: ./src/components/bp-img.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_bp_imgvue_type_script_lang_js_shadow = (bp_imgvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/bp-img.vue?shadow



function bp_imgshadow_injectStyles (context) {
  
  
}

/* normalize component */

var bp_imgshadow_component = normalizeComponent(
  components_bp_imgvue_type_script_lang_js_shadow,
  bp_imgvue_type_template_id_d48ab938_scoped_true_shadow_render,
  bp_imgvue_type_template_id_d48ab938_scoped_true_shadow_staticRenderFns,
  false,
  bp_imgshadow_injectStyles,
  "d48ab938",
  null
  ,true
)

/* harmony default export */ var bp_imgshadow = (bp_imgshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-input.vue?vue&type=template&id=415216c2&scoped=true&shadow
var bp_inputvue_type_template_id_415216c2_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',{ref:"input",staticClass:"bp-input",class:[
        _vm.states ? 'input-' + _vm.states : '',
        _vm.size ? 'input-' + _vm.size : 'input-default'
    ],attrs:{"disabled":_vm.inputDisabled,"placeholder":_vm.placeholder,"type":_vm.type},on:{"input":_vm.handleInput,"focus":_vm.handleFocus,"blur":_vm.handleBlur,"change":_vm.handleChange}})}
var bp_inputvue_type_template_id_415216c2_scoped_true_shadow_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-input.vue?vue&type=template&id=415216c2&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-input.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var bp_inputvue_type_script_lang_js_shadow = ({
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
// CONCATENATED MODULE: ./src/components/bp-input.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_bp_inputvue_type_script_lang_js_shadow = (bp_inputvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/bp-input.vue?shadow



function bp_inputshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("f6fc")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_inputshadow_component = normalizeComponent(
  components_bp_inputvue_type_script_lang_js_shadow,
  bp_inputvue_type_template_id_415216c2_scoped_true_shadow_render,
  bp_inputvue_type_template_id_415216c2_scoped_true_shadow_staticRenderFns,
  false,
  bp_inputshadow_injectStyles,
  "415216c2",
  null
  ,true
)

/* harmony default export */ var bp_inputshadow = (bp_inputshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-label.vue?vue&type=template&id=6923b996&scoped=true&shadow
var bp_labelvue_type_template_id_6923b996_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"body-primary",attrs:{"for":_vm.forLabel}},[_vm._v(" "+_vm._s(_vm.text)+" ")])}
var bp_labelvue_type_template_id_6923b996_scoped_true_shadow_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-label.vue?vue&type=template&id=6923b996&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-label.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
/* harmony default export */ var bp_labelvue_type_script_lang_js_shadow = ({
  props: {
    forLabel: String,
    text: {
      type: String,
      default: "test text"
    }
  },
  computed: {},
  methods: {}
});
// CONCATENATED MODULE: ./src/components/bp-label.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_bp_labelvue_type_script_lang_js_shadow = (bp_labelvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/bp-label.vue?shadow



function bp_labelshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("4dcc")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_labelshadow_component = normalizeComponent(
  components_bp_labelvue_type_script_lang_js_shadow,
  bp_labelvue_type_template_id_6923b996_scoped_true_shadow_render,
  bp_labelvue_type_template_id_6923b996_scoped_true_shadow_staticRenderFns,
  false,
  bp_labelshadow_injectStyles,
  "6923b996",
  null
  ,true
)

/* harmony default export */ var bp_labelshadow = (bp_labelshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-link.vue?vue&type=template&id=5b534182&scoped=true&shadow
var bp_linkvue_type_template_id_5b534182_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"bp-link",class:[
        _vm.disabled ? 'link-disabled' : '',
        _vm.type ? 'link-' + _vm.type : 'link-default'
    ],attrs:{"disabled":_vm.linkDisabled,"type":_vm.type},on:{"click":_vm.handleClick}},[_vm._v(" "+_vm._s(_vm.text)+" ")])}
var bp_linkvue_type_template_id_5b534182_scoped_true_shadow_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-link.vue?vue&type=template&id=5b534182&scoped=true&shadow

// EXTERNAL MODULE: ./src/assets/css/variables.scss
var variables = __webpack_require__("8c1f");

// EXTERNAL MODULE: ./src/assets/css/addon.scss
var addon = __webpack_require__("e0e3");

// EXTERNAL MODULE: ./src/assets/css/_base.scss
var _base = __webpack_require__("01b1");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-link.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var bp_linkvue_type_script_lang_js_shadow = ({
  props: {
    text: {
      type: String,
      default: "test link"
    },
    type: {
      type: String,
      default: "default"
    },
    disabled: Boolean
  },
  computed: {
    linkDisabled() {
      return this.disabled;
    }

  },
  methods: {
    handleClick(data) {
      console.log("点击事件");
      this.$emit('click', data);
    }

  }
});
// CONCATENATED MODULE: ./src/components/bp-link.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_bp_linkvue_type_script_lang_js_shadow = (bp_linkvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/bp-link.vue?shadow



function bp_linkshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("c075")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_linkshadow_component = normalizeComponent(
  components_bp_linkvue_type_script_lang_js_shadow,
  bp_linkvue_type_template_id_5b534182_scoped_true_shadow_render,
  bp_linkvue_type_template_id_5b534182_scoped_true_shadow_staticRenderFns,
  false,
  bp_linkshadow_injectStyles,
  "5b534182",
  null
  ,true
)

/* harmony default export */ var bp_linkshadow = (bp_linkshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-menu-item.vue?vue&type=template&id=58fd61a8&scoped=true&shadow
var bp_menu_itemvue_type_template_id_58fd61a8_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"bp-push-button bp-menu-item",attrs:{"disabled":_vm.disabled},on:{"click":_vm.menu_item_data.click_event}},[(_vm.menu_item_data.src)?_c('img',{staticClass:"svg-icon",attrs:{"src":_vm.menu_item_data.src,"alt":"example"}}):_vm._e(),_c('span',[_vm._v(_vm._s(_vm.menu_item_data.text))])])}
var bp_menu_itemvue_type_template_id_58fd61a8_scoped_true_shadow_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-menu-item.vue?vue&type=template&id=58fd61a8&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-menu-item.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
/* harmony default export */ var bp_menu_itemvue_type_script_lang_js_shadow = ({
  props: {
    menu_item_data: Object,
    disabled: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./src/components/bp-menu-item.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_bp_menu_itemvue_type_script_lang_js_shadow = (bp_menu_itemvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/bp-menu-item.vue?shadow



function bp_menu_itemshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("ed5c")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_menu_itemshadow_component = normalizeComponent(
  components_bp_menu_itemvue_type_script_lang_js_shadow,
  bp_menu_itemvue_type_template_id_58fd61a8_scoped_true_shadow_render,
  bp_menu_itemvue_type_template_id_58fd61a8_scoped_true_shadow_staticRenderFns,
  false,
  bp_menu_itemshadow_injectStyles,
  "58fd61a8",
  null
  ,true
)

/* harmony default export */ var bp_menu_itemshadow = (bp_menu_itemshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-menu.vue?vue&type=template&id=a8501ce2&scoped=true&shadow
var bp_menuvue_type_template_id_a8501ce2_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"bp-menu"},_vm._l((_vm.menu_data),function(single_data){return _c('bpSubMenu',{key:single_data.text,attrs:{"sub_menu_data":single_data}})}),1)}
var bp_menuvue_type_template_id_a8501ce2_scoped_true_shadow_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-menu.vue?vue&type=template&id=a8501ce2&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-sub-menu.vue?vue&type=template&id=442e0eb6&scoped=true&
var bp_sub_menuvue_type_template_id_442e0eb6_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{class:[{'bp-sub-menu': _vm.sub_menu_data.type === 'sub'}, {'bp-push-button bp-menu-item': _vm.sub_menu_data.type === 'item'}],attrs:{"disabled":_vm.disabled},on:{"click":_vm.sub_menu_data.click_event}},[(_vm.sub_menu_data.type === 'sub')?_c('div',{staticClass:"bp-submenu-title",on:{"click":_vm.toggleShow}},[(_vm.sub_menu_data.src)?_c('img',{staticClass:"svg-icon",attrs:{"svg-inline":"","src":_vm.sub_menu_data.src,"alt":"example"}}):_vm._e(),_c('span',[_vm._v(_vm._s(_vm.sub_menu_data.text))])]):_vm._e(),(_vm.sub_menu_data.type === 'sub')?_c('ul',{class:_vm.show ? 'menu-sub' : 'd-none'},_vm._l((_vm.sub_menu_data.item_data),function(sub_menu_item){return _c('bpMenuItem',{key:sub_menu_item.text,attrs:{"menu_item_data":sub_menu_item}})}),1):_vm._e(),(_vm.sub_menu_data.src && _vm.sub_menu_data.type === 'item')?_c('img',{staticClass:"svg-icon",attrs:{"svg-inline":"","src":_vm.sub_menu_data.src,"alt":"example"}}):_vm._e(),(_vm.sub_menu_data.type === 'item')?_c('span',[_vm._v(_vm._s(_vm.sub_menu_data.text))]):_vm._e()])}
var bp_sub_menuvue_type_template_id_442e0eb6_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-sub-menu.vue?vue&type=template&id=442e0eb6&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-menu-item.vue?vue&type=template&id=7ee67a87&scoped=true&
var bp_menu_itemvue_type_template_id_7ee67a87_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"bp-push-button bp-menu-item",attrs:{"disabled":_vm.disabled},on:{"click":_vm.menu_item_data.click_event}},[(_vm.menu_item_data.src)?_c('img',{staticClass:"svg-icon",attrs:{"src":_vm.menu_item_data.src,"alt":"example"}}):_vm._e(),_c('span',[_vm._v(_vm._s(_vm.menu_item_data.text))])])}
var bp_menu_itemvue_type_template_id_7ee67a87_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-menu-item.vue?vue&type=template&id=7ee67a87&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-menu-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var bp_menu_itemvue_type_script_lang_js_ = ({
  props: {
    menu_item_data: Object,
    disabled: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./src/components/bp-menu-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_bp_menu_itemvue_type_script_lang_js_ = (bp_menu_itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/bp-menu-item.vue



function bp_menu_item_injectStyles (context) {
  
  var style0 = __webpack_require__("4d90")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_menu_item_component = normalizeComponent(
  components_bp_menu_itemvue_type_script_lang_js_,
  bp_menu_itemvue_type_template_id_7ee67a87_scoped_true_render,
  bp_menu_itemvue_type_template_id_7ee67a87_scoped_true_staticRenderFns,
  false,
  bp_menu_item_injectStyles,
  "7ee67a87",
  null
  ,true
)

/* harmony default export */ var bp_menu_item = (bp_menu_item_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-sub-menu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var bp_sub_menuvue_type_script_lang_js_ = ({
  components: {
    bpMenuItem: bp_menu_item
  },
  data: function () {
    return {
      show: false
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    sub_menu_data: Object
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    }

  }
});
// CONCATENATED MODULE: ./src/components/bp-sub-menu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_bp_sub_menuvue_type_script_lang_js_ = (bp_sub_menuvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/bp-sub-menu.vue



function bp_sub_menu_injectStyles (context) {
  
  var style0 = __webpack_require__("fe6c")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_sub_menu_component = normalizeComponent(
  components_bp_sub_menuvue_type_script_lang_js_,
  bp_sub_menuvue_type_template_id_442e0eb6_scoped_true_render,
  bp_sub_menuvue_type_template_id_442e0eb6_scoped_true_staticRenderFns,
  false,
  bp_sub_menu_injectStyles,
  "442e0eb6",
  null
  ,true
)

/* harmony default export */ var bp_sub_menu = (bp_sub_menu_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-menu.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//


/* harmony default export */ var bp_menuvue_type_script_lang_js_shadow = ({
  components: {
    bpSubMenu: bp_sub_menu,
    bpMenuItem: bp_menu_item
  },
  data: function () {
    return {
      currentIndex: 0
    };
  },
  props: {
    menu_data: Array
  }
});
// CONCATENATED MODULE: ./src/components/bp-menu.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_bp_menuvue_type_script_lang_js_shadow = (bp_menuvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/bp-menu.vue?shadow



function bp_menushadow_injectStyles (context) {
  
  var style0 = __webpack_require__("ceaf")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_menushadow_component = normalizeComponent(
  components_bp_menuvue_type_script_lang_js_shadow,
  bp_menuvue_type_template_id_a8501ce2_scoped_true_shadow_render,
  bp_menuvue_type_template_id_a8501ce2_scoped_true_shadow_staticRenderFns,
  false,
  bp_menushadow_injectStyles,
  "a8501ce2",
  null
  ,true
)

/* harmony default export */ var bp_menushadow = (bp_menushadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-option-vue.vue?vue&type=template&id=cb5a0b6c&scoped=true&shadow
var bp_option_vuevue_type_template_id_cb5a0b6c_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"bp-option",class:{'option-active': _vm.isChoosed},attrs:{"disabled":_vm.disabled},on:{"click":_vm.close}},[(_vm.src)?_c('img',{class:[_vm.iconClass, 'svg-icon'],attrs:{"svg-inline":"","src":_vm.src,"alt":""}}):_vm._e(),_c('div',{staticStyle:{"display":"flex","flex-direction":"column"}},[_c('span',[_vm._v(_vm._s(_vm.text))]),_c('div',[_vm._t("default")],2)])])}
var bp_option_vuevue_type_template_id_cb5a0b6c_scoped_true_shadow_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-option-vue.vue?vue&type=template&id=cb5a0b6c&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-option-vue.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var bp_option_vuevue_type_script_lang_js_shadow = ({
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
// CONCATENATED MODULE: ./src/components/bp-option-vue.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_bp_option_vuevue_type_script_lang_js_shadow = (bp_option_vuevue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/bp-option-vue.vue?shadow



function bp_option_vueshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("4686")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_option_vueshadow_component = normalizeComponent(
  components_bp_option_vuevue_type_script_lang_js_shadow,
  bp_option_vuevue_type_template_id_cb5a0b6c_scoped_true_shadow_render,
  bp_option_vuevue_type_template_id_cb5a0b6c_scoped_true_shadow_staticRenderFns,
  false,
  bp_option_vueshadow_injectStyles,
  "cb5a0b6c",
  null
  ,true
)

/* harmony default export */ var bp_option_vueshadow = (bp_option_vueshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-option.vue?vue&type=template&id=41b9bc36&scoped=true&shadow
var bp_optionvue_type_template_id_41b9bc36_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"bp-option",class:{'option-active': _vm.isChoosed},attrs:{"disabled":_vm.disabled},on:{"click":_vm.chooseOption}},[(_vm.src)?_c('img',{staticClass:"svg-icon",attrs:{"svg-inline":"","src":_vm.src,"alt":""}}):_vm._e(),_c('div',{staticStyle:{"display":"flex","flex-direction":"column"}},[_c('span',[_vm._v(_vm._s(_vm.text))]),_c('div',[_vm._t("default")],2)])])}
var bp_optionvue_type_template_id_41b9bc36_scoped_true_shadow_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-option.vue?vue&type=template&id=41b9bc36&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-option.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var bp_optionvue_type_script_lang_js_shadow = ({
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
// CONCATENATED MODULE: ./src/components/bp-option.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_bp_optionvue_type_script_lang_js_shadow = (bp_optionvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/bp-option.vue?shadow



function bp_optionshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("805d")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_optionshadow_component = normalizeComponent(
  components_bp_optionvue_type_script_lang_js_shadow,
  bp_optionvue_type_template_id_41b9bc36_scoped_true_shadow_render,
  bp_optionvue_type_template_id_41b9bc36_scoped_true_shadow_staticRenderFns,
  false,
  bp_optionshadow_injectStyles,
  "41b9bc36",
  null
  ,true
)

/* harmony default export */ var bp_optionshadow = (bp_optionshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-select-vue.vue?vue&type=template&id=03d0605e&scoped=true&shadow
var bp_select_vuevue_type_template_id_03d0605e_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bp-select",class:[{'select-disabled': _vm.disabled},_vm.classNames]},[_c('div',{staticClass:"bp-select-title",on:{"click":_vm.toggleShow}},[_c('span',[_vm._v(_vm._s(_vm.choosedValue))]),(_vm.src)?_c('img',{class:[_vm.iconClass,'svg-icon'],attrs:{"svg-inline":"","src":_vm.src,"alt":"example"}}):_vm._e()]),_c('ul',{class:_vm.show ? 'bp-option-group' : 'd-none'},[_vm._t("default")],2)])}
var bp_select_vuevue_type_template_id_03d0605e_scoped_true_shadow_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-select-vue.vue?vue&type=template&id=03d0605e&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-select-vue.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var bp_select_vuevue_type_script_lang_js_shadow = ({
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
// CONCATENATED MODULE: ./src/components/bp-select-vue.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_bp_select_vuevue_type_script_lang_js_shadow = (bp_select_vuevue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/bp-select-vue.vue?shadow



function bp_select_vueshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("c651")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_select_vueshadow_component = normalizeComponent(
  components_bp_select_vuevue_type_script_lang_js_shadow,
  bp_select_vuevue_type_template_id_03d0605e_scoped_true_shadow_render,
  bp_select_vuevue_type_template_id_03d0605e_scoped_true_shadow_staticRenderFns,
  false,
  bp_select_vueshadow_injectStyles,
  "03d0605e",
  null
  ,true
)

/* harmony default export */ var bp_select_vueshadow = (bp_select_vueshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-select.vue?vue&type=template&id=918c77ba&scoped=true&shadow
var bp_selectvue_type_template_id_918c77ba_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bp-select",class:[{'select-disabled': _vm.disabled},_vm.classNames]},[_c('div',{staticClass:"bp-select-title",on:{"click":_vm.toggleShow}},[_c('span',[_vm._v(_vm._s(_vm.choosed_text))]),(_vm.src)?_c('img',{class:[_vm.iconClass,'svg-icon'],attrs:{"svg-inline":"","src":_vm.src,"alt":"example"}}):_vm._e()]),_c('ul',{class:_vm.show ? 'bp-option-group' : 'd-none'},_vm._l((_vm.options_data),function(optionData){return _c('bpOption',{key:optionData.text,attrs:{"text":optionData.text,"choosed_value":_vm.choosed_text,"src":optionData.src,"click_event":optionData.click_event},on:{"chooseOption":_vm.changeLanguage,"linkToPage":_vm.linkToPage},nativeOn:{"click":function($event){return _vm.close($event)}}},[_c('div',{staticClass:"bp-text ph-body-xsmall-tertiary"},[_vm._v(" "+_vm._s(optionData.spanText)+" ")])])}),1)])}
var bp_selectvue_type_template_id_918c77ba_scoped_true_shadow_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-select.vue?vue&type=template&id=918c77ba&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-option.vue?vue&type=template&id=0b46f2a4&scoped=true&
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-select.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var bp_selectvue_type_script_lang_js_shadow = ({
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
    },

    linkToPage(value) {
      this.$emit("linkToPage", value);
    }

  },
  watch: {
    choosed_value: function (val) {
      this.choosed_text = val;
    }
  }
});
// CONCATENATED MODULE: ./src/components/bp-select.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_bp_selectvue_type_script_lang_js_shadow = (bp_selectvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/bp-select.vue?shadow



function bp_selectshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("7935")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_selectshadow_component = normalizeComponent(
  components_bp_selectvue_type_script_lang_js_shadow,
  bp_selectvue_type_template_id_918c77ba_scoped_true_shadow_render,
  bp_selectvue_type_template_id_918c77ba_scoped_true_shadow_staticRenderFns,
  false,
  bp_selectshadow_injectStyles,
  "918c77ba",
  null
  ,true
)

/* harmony default export */ var bp_selectshadow = (bp_selectshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-status.vue?vue&type=template&id=4a4c3d80&scoped=true&shadow
var bp_statusvue_type_template_id_4a4c3d80_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"bp-status",class:[
        _vm.subtle ? 'status-subtle' : 'status-bold',
        _vm.type ? 'status-' + _vm.type : 'status-success'
    ],on:{"click":_vm.handleClick,"mouseenter":_vm.onMouseEnter,"mouseleave":_vm.onMouseLeave}},[_vm._v(" "+_vm._s(_vm.text)+" ")])}
var bp_statusvue_type_template_id_4a4c3d80_scoped_true_shadow_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-status.vue?vue&type=template&id=4a4c3d80&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-status.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var bp_statusvue_type_script_lang_js_shadow = ({
  props: {
    text: {
      type: String,
      default: "status test"
    },
    subtle: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "success"
    }
  },
  methods: {
    handleClick(data) {
      console.log("点击tag");
      this.$emit('click', data);
    },

    onMouseEnter(data) {
      console.log("鼠标滑入tag");
      this.$emit('mouseenter', data);
    },

    onMouseLeave(data) {
      console.log("鼠标滑出tag");
      this.$emit('mouseleave', data);
    }

  }
});
// CONCATENATED MODULE: ./src/components/bp-status.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_bp_statusvue_type_script_lang_js_shadow = (bp_statusvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/bp-status.vue?shadow



function bp_statusshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("524b")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_statusshadow_component = normalizeComponent(
  components_bp_statusvue_type_script_lang_js_shadow,
  bp_statusvue_type_template_id_4a4c3d80_scoped_true_shadow_render,
  bp_statusvue_type_template_id_4a4c3d80_scoped_true_shadow_staticRenderFns,
  false,
  bp_statusshadow_injectStyles,
  "4a4c3d80",
  null
  ,true
)

/* harmony default export */ var bp_statusshadow = (bp_statusshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-sub-menu.vue?vue&type=template&id=1b1163e4&scoped=true&shadow
var bp_sub_menuvue_type_template_id_1b1163e4_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{class:[{'bp-sub-menu': _vm.sub_menu_data.type === 'sub'}, {'bp-push-button bp-menu-item': _vm.sub_menu_data.type === 'item'}],attrs:{"disabled":_vm.disabled},on:{"click":_vm.sub_menu_data.click_event}},[(_vm.sub_menu_data.type === 'sub')?_c('div',{staticClass:"bp-submenu-title",on:{"click":_vm.toggleShow}},[(_vm.sub_menu_data.src)?_c('img',{staticClass:"svg-icon",attrs:{"svg-inline":"","src":_vm.sub_menu_data.src,"alt":"example"}}):_vm._e(),_c('span',[_vm._v(_vm._s(_vm.sub_menu_data.text))])]):_vm._e(),(_vm.sub_menu_data.type === 'sub')?_c('ul',{class:_vm.show ? 'menu-sub' : 'd-none'},_vm._l((_vm.sub_menu_data.item_data),function(sub_menu_item){return _c('bpMenuItem',{key:sub_menu_item.text,attrs:{"menu_item_data":sub_menu_item}})}),1):_vm._e(),(_vm.sub_menu_data.src && _vm.sub_menu_data.type === 'item')?_c('img',{staticClass:"svg-icon",attrs:{"svg-inline":"","src":_vm.sub_menu_data.src,"alt":"example"}}):_vm._e(),(_vm.sub_menu_data.type === 'item')?_c('span',[_vm._v(_vm._s(_vm.sub_menu_data.text))]):_vm._e()])}
var bp_sub_menuvue_type_template_id_1b1163e4_scoped_true_shadow_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-sub-menu.vue?vue&type=template&id=1b1163e4&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-sub-menu.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var bp_sub_menuvue_type_script_lang_js_shadow = ({
  components: {
    bpMenuItem: bp_menu_item
  },
  data: function () {
    return {
      show: false
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    sub_menu_data: Object
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    }

  }
});
// CONCATENATED MODULE: ./src/components/bp-sub-menu.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_bp_sub_menuvue_type_script_lang_js_shadow = (bp_sub_menuvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/bp-sub-menu.vue?shadow



function bp_sub_menushadow_injectStyles (context) {
  
  var style0 = __webpack_require__("fc86")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_sub_menushadow_component = normalizeComponent(
  components_bp_sub_menuvue_type_script_lang_js_shadow,
  bp_sub_menuvue_type_template_id_1b1163e4_scoped_true_shadow_render,
  bp_sub_menuvue_type_template_id_1b1163e4_scoped_true_shadow_staticRenderFns,
  false,
  bp_sub_menushadow_injectStyles,
  "1b1163e4",
  null
  ,true
)

/* harmony default export */ var bp_sub_menushadow = (bp_sub_menushadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-tag.vue?vue&type=template&id=5b48e208&scoped=true&shadow
var bp_tagvue_type_template_id_5b48e208_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"bp-tag",class:[
        _vm.subtle ? 'tag-subtle' : 'tag-bold',
        _vm.type ? 'tag-' + _vm.type : 'tag-blue',
        {'hide': _vm.hide}
    ],on:{"click":_vm.handleClick,"mouseenter":_vm.onMouseEnter,"mouseleave":_vm.onMouseLeave}},[_vm._v(" "+_vm._s(_vm.text)+" ")])}
var bp_tagvue_type_template_id_5b48e208_scoped_true_shadow_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-tag.vue?vue&type=template&id=5b48e208&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-tag.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var bp_tagvue_type_script_lang_js_shadow = ({
  props: {
    text: {
      type: String,
      default: "tag test"
    },
    subtle: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "blue"
    },
    hide: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(data) {
      console.log("点击tag");
      this.$emit('click', data);
    },

    onMouseEnter(data) {
      console.log("鼠标滑入tag");
      this.$emit('mouseenter', data);
    },

    onMouseLeave(data) {
      console.log("鼠标滑出tag");
      this.$emit('mouseleave', data);
    }

  }
});
// CONCATENATED MODULE: ./src/components/bp-tag.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_bp_tagvue_type_script_lang_js_shadow = (bp_tagvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/bp-tag.vue?shadow



function bp_tagshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("fc7d")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_tagshadow_component = normalizeComponent(
  components_bp_tagvue_type_script_lang_js_shadow,
  bp_tagvue_type_template_id_5b48e208_scoped_true_shadow_render,
  bp_tagvue_type_template_id_5b48e208_scoped_true_shadow_staticRenderFns,
  false,
  bp_tagshadow_injectStyles,
  "5b48e208",
  null
  ,true
)

/* harmony default export */ var bp_tagshadow = (bp_tagshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-text.vue?vue&type=template&id=4cf5b5a6&scoped=true&shadow
var bp_textvue_type_template_id_4cf5b5a6_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"bp-text",attrs:{"title":_vm.title},on:{"click":_vm.click_event}},[_vm._t("default")],2)}
var bp_textvue_type_template_id_4cf5b5a6_scoped_true_shadow_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-text.vue?vue&type=template&id=4cf5b5a6&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-text.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
/* harmony default export */ var bp_textvue_type_script_lang_js_shadow = ({
  props: {
    title: String
  },
  methods: {
    click_event(event) {
      this.$emit('click', event);
    }

  }
});
// CONCATENATED MODULE: ./src/components/bp-text.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_bp_textvue_type_script_lang_js_shadow = (bp_textvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/bp-text.vue?shadow



function bp_textshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("170b")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_textshadow_component = normalizeComponent(
  components_bp_textvue_type_script_lang_js_shadow,
  bp_textvue_type_template_id_4cf5b5a6_scoped_true_shadow_render,
  bp_textvue_type_template_id_4cf5b5a6_scoped_true_shadow_staticRenderFns,
  false,
  bp_textshadow_injectStyles,
  "4cf5b5a6",
  null
  ,true
)

/* harmony default export */ var bp_textshadow = (bp_textshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-textarea.vue?vue&type=template&id=8deb4a08&scoped=true&shadow
var bp_textareavue_type_template_id_8deb4a08_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('textarea',{staticClass:"bp-textarea form-textarea",attrs:{"maxlength":_vm.maxlength},on:{"input":_vm.input_event}})}
var bp_textareavue_type_template_id_8deb4a08_scoped_true_shadow_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-textarea.vue?vue&type=template&id=8deb4a08&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-textarea.vue?vue&type=script&lang=js&shadow
//
//
//
//
/* harmony default export */ var bp_textareavue_type_script_lang_js_shadow = ({
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
// CONCATENATED MODULE: ./src/components/bp-textarea.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_bp_textareavue_type_script_lang_js_shadow = (bp_textareavue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/bp-textarea.vue?shadow



function bp_textareashadow_injectStyles (context) {
  
  var style0 = __webpack_require__("5a09")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_textareashadow_component = normalizeComponent(
  components_bp_textareavue_type_script_lang_js_shadow,
  bp_textareavue_type_template_id_8deb4a08_scoped_true_shadow_render,
  bp_textareavue_type_template_id_8deb4a08_scoped_true_shadow_staticRenderFns,
  false,
  bp_textareashadow_injectStyles,
  "8deb4a08",
  null
  ,true
)

/* harmony default export */ var bp_textareashadow = (bp_textareashadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/page/about-us.vue?vue&type=template&id=6000334c&scoped=true&shadow
var about_usvue_type_template_id_6000334c_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"bp-about-us"},[_c('div',{staticClass:"about-us-header"},[_c('bpImg',{staticClass:"above-data-detail-header-img",attrs:{"src":_vm.headerImg}}),_c('bpText',{staticClass:"ph-body-small-inverse top-breadcrumb"},[_c('span',{staticClass:"mr-0",on:{"click":_vm.toHome}},[_vm._v(_vm._s(_vm.translation_data.home))]),_c('span',{staticClass:"mr-0"},[_vm._v("/")]),_c('span',[_vm._v(_vm._s(_vm.translation_data.aboutUs))])]),_c('bpText',{staticClass:"page-header-anton-font"},[_vm._v(_vm._s(_vm.translation_data.aboutUsEn))]),_c('bpText',{staticClass:"about-us-header-slogan-b"},[_vm._v(_vm._s(_vm.translation_data.aboutUs))]),_c('bpText',{staticClass:"abount-us-header-slogan-c"},[_vm._v(_vm._s(_vm.translation_data.sloganA))]),_c('bpText',{staticClass:"abount-us-header-slogan-c"},[_vm._v(_vm._s(_vm.translation_data.sloganB))])],1),_c('div',{staticClass:"abount-us-text-info"},[_c('bpImg',{staticClass:"about-us-connect-img",attrs:{"src":_vm.aboutUsConnectImg}}),_c('bpText',{staticClass:"abount-us-text-info-title-a"},[_vm._v(_vm._s(_vm.translation_data.infoTitleA))]),_c('bpText',{staticClass:"abount-us-text-info-title-b"},[_vm._v(_vm._s(_vm.translation_data.infoTitleB))]),_c('bpText',{staticClass:"abount-us-text-info-text"},[_vm._v(_vm._s(_vm.translation_data.descA))]),_c('div',{staticClass:"about-us-text-date-row"},[_c('div',{staticClass:"about-us-text-data-col"},[_c('div',{staticClass:"about-us-text-date-col-line"}),_c('bpText',{staticClass:"about-us-text-date-col-a"},[_vm._v(_vm._s(_vm.translation_data.numberHospital))]),_c('bpText',{staticClass:"about-us-text-date-col-b"},[_vm._v(_vm._s(_vm.translation_data.textA))])],1),_c('div',{staticClass:"about-us-text-data-col"},[_c('div',{staticClass:"about-us-text-date-col-line"}),_c('bpText',{staticClass:"about-us-text-date-col-a"},[_vm._v(_vm._s(_vm.translation_data.numberHealthCenter))]),_c('bpText',{staticClass:"about-us-text-date-col-b"},[_vm._v(_vm._s(_vm.translation_data.textB))])],1),_c('div',{staticClass:"about-us-text-data-col"},[_c('div',{staticClass:"about-us-text-date-col-line"}),_c('bpText',{staticClass:"about-us-text-date-col-a"},[_vm._v(_vm._s(_vm.translation_data.numberInfo))]),_c('bpText',{staticClass:"about-us-text-date-col-b"},[_vm._v(_vm._s(_vm.translation_data.textC))])],1)]),_c('bpText',{staticClass:"about-us-text-desc"},[_vm._v(_vm._s(_vm.translation_data.descB))])],1)])])}
var about_usvue_type_template_id_6000334c_scoped_true_shadow_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/page/about-us.vue?vue&type=template&id=6000334c&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-text.vue?vue&type=template&id=3682c21f&scoped=true&
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-img.vue?vue&type=template&id=9222228a&scoped=true&
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-button.vue?vue&type=template&id=2061fa5f&scoped=true&
var bp_buttonvue_type_template_id_2061fa5f_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"bp-button",class:[
        _vm.type ? 'button-' + _vm.type : 'button-primary',
        _vm.density ? 'button-density-' + _vm.density : 'button-density-default',
        {'btn-block': _vm.block}
    ],attrs:{"disabled":_vm.buttonDisabled,"type":_vm.type},on:{"click":_vm.handleClick,"dblclick":_vm.handleDBClick}},[(_vm.src)?_c('img',{staticClass:"svg-icon",attrs:{"svg-inline":"","src":_vm.src,"alt":"example"}}):_vm._e(),_vm._v(" "+_vm._s(_vm.text)+" ")])}
var bp_buttonvue_type_template_id_2061fa5f_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-button.vue?vue&type=template&id=2061fa5f&scoped=true&

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
  
  var style0 = __webpack_require__("5220")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_button_component = normalizeComponent(
  components_bp_buttonvue_type_script_lang_js_,
  bp_buttonvue_type_template_id_2061fa5f_scoped_true_render,
  bp_buttonvue_type_template_id_2061fa5f_scoped_true_staticRenderFns,
  false,
  bp_button_injectStyles,
  "2061fa5f",
  null
  ,true
)

/* harmony default export */ var bp_button = (bp_button_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/page/about-us.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // import navTop from '../panel/bp-nav-top'
// import navTopRes from '../panel/bp-nav-top-response'
// import bpPageBottom from '../panel/bp-page-bottom'

/* harmony default export */ var about_usvue_type_script_lang_js_shadow = ({
  name: "about-us",
  components: {
    bpText: bp_text,
    bpImg: bp_img,
    bpButton: bp_button // navTop,
    // navTopRes,
    // bpPageBottom

  },

  data() {
    return {
      language: '中文',
      // 中英切换
      windowWidth: document.documentElement.clientWidth,
      windowHeight: document.documentElement.clientHeight,
      response: false,
      responseMini: false,
      headerImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_detail-page_head_about-us.jpg",
      aboutUsConnectImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_connect_line.svg",
      translation_basedata: {
        cn: {
          home: "主页",
          aboutUs: "关于法伯",
          aboutUsEn: "About Us",
          sloganA: "十年专注医药数据领域，行业领先的「数据融合与洞见者」",
          sloganB: "法伯科技，成立于2008年",
          infoTitleA: "法伯凝聚顶尖数据分析师与数据科学家",
          infoTitleB: "构建商业智能算法",
          descA: "自研数据中台，融合医保、招标、处方、病历、检验等多个独家数据源，构建了灵活、高可用、统一、可信赖的医药数据资产，覆盖超过5,000家医院，2,000家社区卫生中心及1亿患者信息。",
          descB: "法伯秉持数据即服务的理念，以对行业深入的理解力、强大的数据挖掘能力，根据不断变化的市场及政策环境，为企业提供全息数据产品及咨询服务。针对市场监测与预测、营销资源配置与优化、真实世界数据研究等不同应用场景，形成相应的数据解决方案，服务了近百家国内外领先的制药企业及医疗健康机构。",
          numberHospital: "5,000+",
          numberHealthCenter: "2,000+",
          numberInfo: "1亿",
          textA: "医院",
          textB: "社区卫生中心",
          textC: "患者脱敏信息"
        },
        en: {
          home: "Home",
          aboutUs: "About Us",
          aboutUsEn: "About Us",
          sloganA: "Pharbers, leading fusion and insight in Medical Data,",
          sloganB: "is devoting to the field of medical data for 10 years, established in 2008.",
          infoTitleA: "Pharbers Gathers Top Data Analysts and Data Scientists from Mathematic, Medical, and IT industry.",
          infoTitleB: "Build Business Intelligence Algorithm.",
          descA: "With self-developed data platform, integrating medicare, tenders, medical examination, and other exclusive data sources, Pharbers builds a highly available, unified, trusted medical data assets, covering more than 5,000 hospitals, 2,000 community health centers and 100 million patient information.",
          descB: "Pharbers upholds the concept of data as a service, provides enterprises with holographic data products and consulting services, based on our in-depth industry comprehension, strong data mining capabilities, and observation in changing market and policy environments. We offer various data solutions according to different application scenarios, like market monitoring & forecasting, marketing resource allocation & optimization, and Real World Research, served nearly hundreds of leading pharmaceutical companies and healthcare institutions in the domestic and overseas.",
          numberHospital: "5,000+",
          numberHealthCenter: "2,000+",
          numberInfo: "100 million",
          textA: "Hospital",
          textB: "Community Health Center",
          textC: "Patient Desensitization Information"
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
    window.addEventListener('beforeunload', e => {
      window.scrollTo(0, 0);
    });
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
  },

  methods: {
    toHome() {
      this.$emit('linkToPage', 'home');
    }

  }
});
// CONCATENATED MODULE: ./src/components/page/about-us.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var page_about_usvue_type_script_lang_js_shadow = (about_usvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/page/about-us.vue?shadow



function about_usshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("889c")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var about_usshadow_component = normalizeComponent(
  page_about_usvue_type_script_lang_js_shadow,
  about_usvue_type_template_id_6000334c_scoped_true_shadow_render,
  about_usvue_type_template_id_6000334c_scoped_true_shadow_staticRenderFns,
  false,
  about_usshadow_injectStyles,
  "6000334c",
  null
  ,true
)

/* harmony default export */ var about_usshadow = (about_usshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/page/consulting.vue?vue&type=template&id=35a79644&scoped=true&shadow
var consultingvue_type_template_id_35a79644_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bp-consulting"},[_c('div',{staticClass:"consulting-header"},[_c('bpImg',{staticClass:"above-data-detail-header-img",attrs:{"src":_vm.headerImg}}),_c('bpText',{staticClass:"ph-body-small-inverse top-breadcrumb"},[_c('span',{staticClass:"mr-0",on:{"click":_vm.toHome}},[_vm._v(_vm._s(_vm.translation_data.home))]),_c('span',{staticClass:"mr-0"},[_vm._v("/")]),_c('span',[_vm._v(_vm._s(_vm.translation_data.consult))])]),_c('bpText',{staticClass:"page-header-anton-font"},[_vm._v(_vm._s(_vm.translation_data.consuluEN))]),_c('bpText',{staticClass:"consulting-header-slogan-b"},[_vm._v(_vm._s(_vm.translation_data.consult))]),_c('bpText',{staticClass:"consulting-header-slogan-c"},[_vm._v(_vm._s(_vm.translation_data.multiLevelPrediction))]),_c('bpText',{staticClass:"consulting-header-slogan-c"},[_vm._v(_vm._s(_vm.translation_data.ImproveROI))])],1),_c('div',{staticClass:"consulting-text-info"},[_c('bpImg',{staticClass:"consult-connect-img",attrs:{"src":_vm.consultConnectImg}}),_c('bpText',{staticClass:"consult-text-info-title-a"},[_vm._v(_vm._s(_vm.translation_data.consultingTitleA))]),_c('bpText',{staticClass:"consult-text-info-title-b"},[_vm._v(_vm._s(_vm.translation_data.consultingTitleB))]),_c('bpText',{staticClass:"consult-text-info-text"},[_vm._v(_vm._s(_vm.translation_data.consultingDescription))])],1),_c('div',{staticClass:"consult-advantage-card-container"},[_c('bpImg',{staticClass:"consult-advantage-card-container-img",attrs:{"src":_vm.consultAdvantageCardImg}}),_c('bpImg',{staticClass:"consult-connect-img",attrs:{"src":_vm.consultConnectImg}}),_c('bpText',{staticClass:"consult-advantage-container-title"},[_vm._v(_vm._s(_vm.translation_data.advtantages.advantagesText))]),_c('div',{staticClass:"consult-cards-row-a"},[_c('div',{staticClass:"consult-advantage-card-nav"},[_vm._m(0),_c('bpText',{staticClass:"consult-advantage-card-nav-title"},[_vm._v(_vm._s(_vm.translation_data.advtantages.forecast))]),_c('bpText',{staticClass:"consult-advantage-card-nav-eg"},[_vm._v(_vm._s(_vm.translation_data.advtantages.forecastEN))])],1),_c('div',{staticClass:"consulting-advantage-card-container"},[_c('div',{staticClass:"consulting-advantage-card"},[_c('bpImg',{staticClass:"max-advantage-card-icon",attrs:{"src":_vm.maxAdvantageCardIcon}}),_c('bpText',{staticClass:"consulting-advantage-card-title"},[_vm._v("01")]),_c('div',{staticClass:"consulting-advantage-card-title-line"}),_c('bpText',{staticClass:"consulting-advantage-card-desc-a"},[_vm._v(_vm._s(_vm.translation_data.advtantages.advantageA.title))]),_c('bpText',{staticClass:"consulting-advantage-card-desc-b"},[_vm._v(_vm._s(_vm.translation_data.advtantages.advantageA.textA1))]),_c('bpText',{staticClass:"consulting-advantage-card-desc-b"},[_vm._v(_vm._s(_vm.translation_data.advtantages.advantageA.textA2))])],1),_c('div',{staticClass:"consulting-advantage-card"},[_c('bpImg',{staticClass:"max-advantage-card-icon",attrs:{"src":_vm.maxAdvantageCardIcon}}),_c('bpText',{staticClass:"consulting-advantage-card-title"},[_vm._v("02")]),_c('div',{staticClass:"consulting-advantage-card-title-line"}),_c('bpText',{staticClass:"consulting-advantage-card-desc-a"},[_vm._v(_vm._s(_vm.translation_data.advtantages.advantageB.title))]),_c('bpText',{staticClass:"consulting-advantage-card-desc-b"},[_vm._v(_vm._s(_vm.translation_data.advtantages.advantageB.textB1))]),_c('bpText',{staticClass:"consulting-advantage-card-desc-b"},[_vm._v(_vm._s(_vm.translation_data.advtantages.advantageB.textB2))])],1)])]),_c('div',{staticClass:"consult-cards-row-a"},[_c('div',{staticClass:"consult-advantage-card-nav"},[_vm._m(1),_c('bpText',{staticClass:"consult-advantage-card-nav-title"},[_vm._v(_vm._s(_vm.translation_data.advtantages.operationExcellent))]),_c('bpText',{staticClass:"consult-advantage-card-nav-eg"},[_vm._v(_vm._s(_vm.translation_data.advtantages.operationExcellentEN))])],1),_c('div',{staticClass:"consulting-advantage-card-container"},[_c('div',{staticClass:"consulting-advantage-card"},[_c('bpImg',{staticClass:"max-advantage-card-icon",attrs:{"src":_vm.maxAdvantageCardIcon}}),_c('bpText',{staticClass:"consulting-advantage-card-title"},[_vm._v("01")]),_c('div',{staticClass:"consulting-advantage-card-title-line"}),_c('bpText',{staticClass:"consulting-advantage-card-desc-b"},[_vm._v(_vm._s(_vm.translation_data.advtantages.advantageC))])],1),_c('div',{staticClass:"consulting-advantage-card"},[_c('bpImg',{staticClass:"max-advantage-card-icon",attrs:{"src":_vm.maxAdvantageCardIcon}}),_c('bpText',{staticClass:"consulting-advantage-card-title"},[_vm._v("02")]),_c('div',{staticClass:"consulting-advantage-card-title-line"}),_c('bpText',{staticClass:"consulting-advantage-card-desc-b"},[_vm._v(_vm._s(_vm.translation_data.advtantages.advantageD))])],1)])])],1)])}
var consultingvue_type_template_id_35a79644_scoped_true_shadow_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"consult-advantage-card-nav-line"},[_c('div',{staticClass:"consult-advantage-card-nav-line-yellow"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"consult-advantage-card-nav-line"},[_c('div',{staticClass:"consult-advantage-card-nav-line-yellow"})])}]


// CONCATENATED MODULE: ./src/components/page/consulting.vue?vue&type=template&id=35a79644&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/page/consulting.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var consultingvue_type_script_lang_js_shadow = ({
  name: "",
  components: {
    bpText: bp_text,
    bpImg: bp_img,
    bpButton: bp_button
  },

  data() {
    return {
      language: '中文',
      // 中英切换
      windowWidth: document.documentElement.clientWidth,
      windowHeight: document.documentElement.clientHeight,
      response: false,
      responseMini: false,
      headerImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_detail-page_head_consulting.jpg",
      consultConnectImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_connect_line.svg",
      consultAdvantageCardImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_bg_doublehexagon.svg",
      consultConnectImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_connect_line.svg",
      maxAdvantageCardIcon: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_point.svg",
      translation_basedata: {
        cn: {
          home: "主页",
          consult: "循证咨询",
          consuluEN: "Consulting",
          multiLevelPrediction: "多层面精准预测，营销资源配置与优化",
          ImproveROI: "提升ROI",
          consultingTitleA: "法伯依托强大的数据分析能力与高可用的医药数据资产以及丰富的行业经验，准确地运用数据，还原真实",
          consultingTitleB: "",
          consultingDescription: "为企业提供全面的个性化咨询支持，帮助企业管理层进行有据可循的决策。",
          advtantages: {
            advantagesText: "能力与优势",
            forecast: "预测",
            forecastEN: "Forecasting",
            operationExcellent: "营销资源配置与优化",
            operationExcellentEN: "Allocating and optimizing marketing resource",
            advantageA: {
              title: "多层面满足不同需求",
              textA1: "面对市场，提供对宏观市场、疾病领域、竞争市场的预测服务",
              textA2: "针对产品，提供其在全国层面、大区层面、区域侧面的表现预测服务"
            },
            advantageB: {
              title: "精准的预测方法",
              textB1: "基线预测：对多个通用统计模型进行严谨质量评估，择优选取",
              textB2: "事件影响：收集预测的影响事件，并评估其对基线预测的影响"
            },
            advantageC: "依靠客观数据与经验实践的科学分析方法，深入了解企业业务状况与需求。",
            advantageD: "提供兼具针对性和实用性的资源配置与优化、销售运营管理与设计、多渠道营销优化、市场运营有效性评价等咨询服务"
          }
        },
        en: {
          home: "Home",
          consult: "Evidence-based Consulting",
          consuluEN: "Consulting",
          multiLevelPrediction: "Multi-level Accurate Prediction\nAllocating and Optimizing Marketing Resource",
          ImproveROI: "Improve ROI",
          consultingTitleA: "Based on powerful data analysis capabilities and highly available medical data assets, Pharbers applies data accurately to see the truth, see the future. ",
          consultingTitleB: "",
          consultingDescription: "We provide enterprises with comprehensive customized consulting services as a support to help corporate management making decisions.",
          advtantages: {
            advantagesText: "Capabilities and Strengths",
            forecast: "Forecasting",
            forecastEN: "",
            operationExcellent: "Allocating and optimizing marketing resource",
            operationExcellentEN: "",
            advantageA: {
              title: "Meet Different Multi-layers Needs",
              textA1: "For market, we provide prediction services in macro markets, disease areas, and competitive markets.",
              textA2: "For products, we provide forecasting services at the national and regional levels."
            },
            advantageB: {
              title: "Accurate Prediction",
              textB1: "Baseline forecasting: use rigorous quality assessment in general statistical models, to select optimum.",
              textB2: "Event Impact: we collect predicted events and evaluate their impact on baseline forecasts."
            },
            advantageC: "Based on factual data and proven scientific analysis methods, we have in-depth comprehension on enterprise business conditions and needs.",
            advantageD: "Our enterprise-level solutions provide targeted consulting services, including practical resource allocation & optimization, sales operation management & design, multi-channel marketing optimization, market operation effectiveness evaluation, etc."
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
    window.addEventListener('beforeunload', e => {
      window.scrollTo(0, 0);
    });
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
  },

  methods: {
    toHome() {
      this.$emit('linkToPage', 'home');
    }

  }
});
// CONCATENATED MODULE: ./src/components/page/consulting.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var page_consultingvue_type_script_lang_js_shadow = (consultingvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/page/consulting.vue?shadow



function consultingshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("799a")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var consultingshadow_component = normalizeComponent(
  page_consultingvue_type_script_lang_js_shadow,
  consultingvue_type_template_id_35a79644_scoped_true_shadow_render,
  consultingvue_type_template_id_35a79644_scoped_true_shadow_staticRenderFns,
  false,
  consultingshadow_injectStyles,
  "35a79644",
  null
  ,true
)

/* harmony default export */ var consultingshadow = (consultingshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/page/home.vue?vue&type=template&id=d7e795c8&scoped=true&shadow
var homevue_type_template_id_d7e795c8_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-container"},[_c('div',{staticClass:"bp-home"},[_vm._v(" "+_vm._s(_vm.allData)+" "),_vm._l((_vm.allData),function(item,index){return _c('div',{key:index},[_vm._v(_vm._s(item.text))])}),_c('div',{staticClass:"truth-content-area"},[_c('div',{staticClass:"title"},[_c('bpText',{staticClass:"ph-H-Display"},[_vm._v(_vm._s(_vm.translation_data.truthTitle))]),_c('bpText',{staticClass:"ph-body-medium"},[_vm._v(_vm._s(_vm.translation_data.truthDes))])],1),_c('bpImg',{staticClass:"home-header-img",attrs:{"src":_vm.src}})],1),_c('div',{staticClass:"content-active-area"},[_vm._m(0),_c('bpText',{staticClass:"active-text"},[_vm._v(_vm._s(_vm.translation_data.activeEvents))]),_vm._l((_vm.activeArr),function(card){return _c('bpCardActive',{key:card.title,attrs:{"bgImg":card.bgImg,"logoImg":card.logoImg,"title":card.title,"date":card.date,"city":card.city,"logoText":card.logoText}})}),_c('div',{staticClass:"content-active-review-more-button"},[_c('div',{staticClass:"show-more-button-container"},[_c('bpButton',{staticClass:"button-official-gray-line",attrs:{"text":_vm.translation_data.moreActivity},on:{"click":function($event){return _vm.toMore('activity-list')}}}),_c('bpImg',{staticClass:"active-button-go",attrs:{"src":_vm.buttonGo}})],1)]),_c('div',{staticClass:"content-active-bg-yellow"}),_c('div',{staticClass:"content-active-bg-line-right"})],2),_c('div',{staticClass:"report-download-container"},[_c('div',{staticClass:"report-download"},[_c('bpImg',{staticClass:"report-download-left-corner",attrs:{"src":_vm.reportLeftDown}}),_c('bpImg',{staticClass:"report-download-right-corner",attrs:{"src":_vm.reportRightDown}}),_c('div',{staticClass:"report-download-img-container"},[_c('bpImg',{staticClass:"report-down-img",attrs:{"src":_vm.reportDownImg}}),_c('div',{staticClass:"report-down-img-mask"})],1),_c('div',{staticClass:"report-download-info"},[_c('div',{staticClass:"report-right-head"},[_c('bpText',{staticClass:"ph-H-small-theme"},[_vm._v(_vm._s(_vm.translation_data.reportThemeSmall))]),_c('bpText',{staticClass:"ph-body-small"},[_vm._v(_vm._s(_vm.translation_data.reportBodySmall))])],1),_c('div',{staticClass:"report-right-center"},[_c('bpText',{staticClass:"ph-H-large-title"},[_vm._v(_vm._s(_vm.translation_data.reportLargeTitle))]),_c('bpText',{staticClass:"pb-body-small-tertiary"},[_vm._v(_vm._s(_vm.translation_data.reportTertiary))])],1),_c('div',{staticClass:"show-more-button-container"},[_c('bpButton',{staticClass:"report-down-button",attrs:{"text":_vm.translation_data.reportButton},on:{"click":function($event){return _vm.downloadReport('download-report')}}}),_c('div',{staticClass:"more-reports-button",on:{"click":function($event){return _vm.toMore('report-list')}}},[_c('div',{staticClass:"more-reports"},[_c('bpText',[_vm._v(_vm._s(_vm.translation_data.moreReportsText))]),_c('bpImg',{staticClass:"more-reports-img",attrs:{"src":_vm.showMoreButtonGo}})],1)])],1)])],1)]),_c('div',{staticClass:"data-show"},[_c('bpImg',{staticClass:"report-connect-img",attrs:{"src":_vm.reportConnectImg}}),_c('bpText',{staticClass:"home-about-us-peoples"},[_vm._v(_vm._s(_vm.translation_data.dataShowAboutUs))]),_c('bpText',{staticClass:"ph-H-xLarge"},[_vm._v(_vm._s(_vm.translation_data.dataShowTitle))]),_c('div',{staticClass:"show-more-button-container"},[_c('bpButton',{staticClass:"button-official-yellow-line-compact",attrs:{"text":_vm.translation_data.showMoreButton},on:{"click":function($event){return _vm.toMore('about-us')}}}),_c('bpImg',{staticClass:"show-more-button-go",attrs:{"src":_vm.showMoreButtonGo}})],1),_c('div',{staticClass:"data-show-text-part"},[_c('bpText',{staticClass:"ph-body-medium_brand"},[_vm._v(_vm._s(_vm.translation_data.dataTextPart1))]),_c('div',{staticClass:"home-data-value-text-line"}),_c('bpText',{staticClass:"ph-body-medium_brand"},[_vm._v(_vm._s(_vm.translation_data.dataTextPart2))]),_c('div',{staticClass:"home-data-value-text-line"}),_c('bpText',{staticClass:"ph-body-medium_brand"},[_vm._v(_vm._s(_vm.translation_data.dataTextPart3))])],1),_c('bpImg',{staticClass:"data-show-img",attrs:{"src":_vm.dataShowImg}})],1),_c('div',{staticClass:"max-show"},[_c('div',{staticClass:"max-show-left"},[_c('div',{staticClass:"max-show-left-text-line"}),_c('div',{staticClass:"max-show-left-text-row-1"},[_c('bpText',{staticClass:"ph-H-xLarge"},[_vm._v(_vm._s(_vm.translation_data.maxTitle))]),_c('bpText',{staticClass:"ph-body-xsmall-tertiary"},[_vm._v(_vm._s(_vm.translation_data.maxTitleDes))])],1),_c('bpText',{staticClass:"max-text-center"},[_vm._v(_vm._s(_vm.translation_data.maxTextCenter))]),_c('bpText',{staticClass:"max-text-center-brand"},[_vm._v(_vm._s(_vm.translation_data.maxTextCenterBrand))]),_c('div',{staticClass:"max-show-more-button-container"},[_c('bpButton',{staticClass:"button-official-yellow-line-compact",attrs:{"text":_vm.translation_data.showMoreButton},on:{"click":function($event){return _vm.toMore('max')}}}),_c('bpImg',{staticClass:"show-more-button-go",attrs:{"src":_vm.showMoreButtonGo}})],1)],1),_c('div',{staticClass:"max-show-right-img-container"},[_c('bpImg',{staticClass:"max-show-right-img",attrs:{"src":_vm.responseMini ? _vm.maxRightImg_480 : _vm.maxRightImg}})],1)]),_c('div',{staticClass:"real-world"},[_c('div',{staticClass:"real-world-left-img-container"},[_c('bpImg',{staticClass:"real-world-left-img",attrs:{"src":_vm.realWorldLeftImg}})],1),_c('div',{staticClass:"real-world-right"},[_c('div',{staticClass:"real-world-right-line"}),_c('div',{staticClass:"real-world-right-text-line-1"},[_c('bpText',{staticClass:"ph-H-xLarge"},[_vm._v(_vm._s(_vm.translation_data.realWorldTitle))])],1),_c('bpText',{staticClass:"ph-H-Large"},[_vm._v(_vm._s(_vm.translation_data.realWorldTitleSmall))]),_c('bpText',{staticClass:"ph-H-Large_brand"},[_vm._v(_vm._s(_vm.translation_data.realWorldBrand))]),_c('div',{staticClass:"real-show-more-button-container"},[_c('bpButton',{staticClass:"button-official-yellow-line-compact",attrs:{"text":_vm.translation_data.showMoreButton},on:{"click":function($event){return _vm.toMore('rw')}}}),_c('bpImg',{staticClass:"show-more-button-go",attrs:{"src":_vm.showMoreButtonGo}})],1)],1)]),_c('div',{staticClass:"advisory"},[_c('div',{staticClass:"advisory-left"},[_c('div',{staticClass:"advisory-left-line"}),_c('div',{staticClass:"advisory-left-text-line-1"},[_c('bpText',{staticClass:"ph-H-xLarge"},[_vm._v(_vm._s(_vm.translation_data.advisoryTitle))])],1),_c('bpText',{staticClass:"ph-H-Large"},[_vm._v(_vm._s(_vm.translation_data.advisoryTitleSmall))]),_c('bpText',{staticClass:"ph-H-Large_brand"},[_vm._v(_vm._s(_vm.translation_data.advisoryBrand))]),_c('div',{staticClass:"advisory-show-more-button-container"},[_c('bpButton',{staticClass:"button-official-yellow-line-compact",attrs:{"text":_vm.translation_data.showMoreButton},on:{"click":function($event){return _vm.toMore('consulting')}}}),_c('bpImg',{staticClass:"show-more-button-go",attrs:{"src":_vm.showMoreButtonGo}})],1)],1),_c('div',{staticClass:"advisory-right-img-container"},[_c('bpImg',{staticClass:"advisory-right-img",attrs:{"src":_vm.advisoryRightImg}})],1)]),(!_vm.response)?_c('iconLine',{staticClass:"case-icon-contaniner"}):_vm._e(),(_vm.response)?_c('iconLineRes',{staticClass:"case-icon-contaniner-response"}):_vm._e()],2)])}
var homevue_type_template_id_d7e795c8_scoped_true_shadow_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"active-line"},[_c('div',{staticClass:"active-yellow-line"})])}]


// CONCATENATED MODULE: ./src/components/page/home.vue?vue&type=template&id=d7e795c8&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/panel/bp-icon-line.vue?vue&type=template&id=7b13dc7f&scoped=true&
var bp_icon_linevue_type_template_id_7b13dc7f_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"case-icon-line"},_vm._l((_vm.imgArr1),function(item){return _c('bpImg',{key:item,staticClass:"case-icon",attrs:{"src":item}})}),1),_c('div',{staticClass:"case-icon-line"},_vm._l((_vm.imgArr2),function(item){return _c('bpImg',{key:item,staticClass:"case-icon",attrs:{"src":item}})}),1),_c('div',{staticClass:"case-icon-line case-icon-line-three"},_vm._l((_vm.imgArr3),function(item){return _c('bpImg',{key:item,staticClass:"case-icon",attrs:{"src":item}})}),1),_c('div',{staticClass:"case-icon-line case-icon-line-three"},_vm._l((_vm.imgArr4),function(item){return _c('bpImg',{key:item,staticClass:"case-icon",attrs:{"src":item}})}),1),_c('div',{staticClass:"case-icon-line case-icon-line-three"},_vm._l((_vm.imgArr5),function(item){return _c('bpImg',{key:item,staticClass:"case-icon",attrs:{"src":item}})}),1)])}
var bp_icon_linevue_type_template_id_7b13dc7f_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/panel/bp-icon-line.vue?vue&type=template&id=7b13dc7f&scoped=true&

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
  
  var style0 = __webpack_require__("05ef")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_icon_line_component = normalizeComponent(
  panel_bp_icon_linevue_type_script_lang_js_,
  bp_icon_linevue_type_template_id_7b13dc7f_scoped_true_render,
  bp_icon_linevue_type_template_id_7b13dc7f_scoped_true_staticRenderFns,
  false,
  bp_icon_line_injectStyles,
  "7b13dc7f",
  null
  ,true
)

/* harmony default export */ var bp_icon_line = (bp_icon_line_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/panel/bp-icon-line-response.vue?vue&type=template&id=a43c46a2&scoped=true&
var bp_icon_line_responsevue_type_template_id_a43c46a2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"case-icon-line"},_vm._l((_vm.imgArr),function(item){return _c('bpImg',{key:item,staticClass:"case-icon",attrs:{"src":item}})}),1)])}
var bp_icon_line_responsevue_type_template_id_a43c46a2_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/panel/bp-icon-line-response.vue?vue&type=template&id=a43c46a2&scoped=true&

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
  
  var style0 = __webpack_require__("aca9")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_icon_line_response_component = normalizeComponent(
  panel_bp_icon_line_responsevue_type_script_lang_js_,
  bp_icon_line_responsevue_type_template_id_a43c46a2_scoped_true_render,
  bp_icon_line_responsevue_type_template_id_a43c46a2_scoped_true_staticRenderFns,
  false,
  bp_icon_line_response_injectStyles,
  "a43c46a2",
  null
  ,true
)

/* harmony default export */ var bp_icon_line_response = (bp_icon_line_response_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/panel/bp-nav-top.vue?vue&type=template&id=f9621332&scoped=true&
var bp_nav_topvue_type_template_id_f9621332_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fixed-nav",class:[_vm.inverse ? 'navInverse' : 'nav']},[_c('div',{staticClass:"nav-border",class:[
            {borderNone: _vm.borderNone},
            _vm.inverse ? 'bordernavInverse' : 'bordernav']},[_c('img',{staticClass:"bp-img fixed-nav-icon cursor-pointer",attrs:{"src":_vm.inverse ? _vm.imgSrcLight : _vm.imgSrc},on:{"click":_vm.toHome}}),_c('div',{staticClass:"selectMenu",class:{'inverseColor': _vm.inverse}},[_c('bpSelect',{attrs:{"disSelected":true,"src":_vm.inverse ? _vm.selectSrcLight : _vm.selectSrc,"choosed_value":_vm.translation_data.choosed_value,"options_data":_vm.translation_data.options_data},on:{"linkToPage":_vm.linkToPage}}),_c('span',{staticClass:"bp-text",on:{"click":_vm.toAboutUs}},[_vm._v(_vm._s(_vm.translation_data.aboutUs))])],1),_c('div',{staticClass:"navButton",class:{'inverseColor': _vm.inverse}},[_c('bpButton',{staticClass:"concact",attrs:{"text":_vm.translation_data.contactUs},on:{"click":_vm.contactUs}}),(_vm.isLogin)?_c('bp-select-vue',{staticClass:"home-user-select",attrs:{"choosedValue":"","src":"https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_home_user.svg","iconClass":""}},[_c('bp-option-vue',{attrs:{"text":_vm.translation_data.general},on:{"click":_vm.toGeneral}}),_c('bp-option-vue',{attrs:{"text":_vm.translation_data.logout},on:{"click":_vm.logout}})],1):_c('bpButton',{staticClass:"login",attrs:{"text":_vm.translation_data.login},on:{"click":_vm.toGeneral}})],1)]),(_vm.contactForm)?_c('bp-modal-form',{attrs:{"translation_data":_vm.translation_data},on:{"closeModal":_vm.closeModal,"submitClientData":_vm.submitClientData}}):_vm._e()],1)}
var bp_nav_topvue_type_template_id_f9621332_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/panel/bp-nav-top.vue?vue&type=template&id=f9621332&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-select.vue?vue&type=template&id=596e214c&scoped=true&
var bp_selectvue_type_template_id_596e214c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bp-select",class:[{'select-disabled': _vm.disabled},_vm.classNames]},[_c('div',{staticClass:"bp-select-title",on:{"click":_vm.toggleShow}},[_c('span',[_vm._v(_vm._s(_vm.choosed_text))]),(_vm.src)?_c('img',{class:[_vm.iconClass,'svg-icon'],attrs:{"svg-inline":"","src":_vm.src,"alt":"example"}}):_vm._e()]),_c('ul',{class:_vm.show ? 'bp-option-group' : 'd-none'},_vm._l((_vm.options_data),function(optionData){return _c('bpOption',{key:optionData.text,attrs:{"text":optionData.text,"choosed_value":_vm.choosed_text,"src":optionData.src,"click_event":optionData.click_event},on:{"chooseOption":_vm.changeLanguage,"linkToPage":_vm.linkToPage},nativeOn:{"click":function($event){return _vm.close($event)}}},[_c('div',{staticClass:"bp-text ph-body-xsmall-tertiary"},[_vm._v(" "+_vm._s(optionData.spanText)+" ")])])}),1)])}
var bp_selectvue_type_template_id_596e214c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/bp-select.vue?vue&type=template&id=596e214c&scoped=true&

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
    },

    linkToPage(value) {
      this.$emit("linkToPage", value);
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
  
  var style0 = __webpack_require__("9d4a")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_select_component = normalizeComponent(
  components_bp_selectvue_type_script_lang_js_,
  bp_selectvue_type_template_id_596e214c_scoped_true_render,
  bp_selectvue_type_template_id_596e214c_scoped_true_staticRenderFns,
  false,
  bp_select_injectStyles,
  "596e214c",
  null
  ,true
)

/* harmony default export */ var bp_select = (bp_select_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-select-vue.vue?vue&type=template&id=7fca35cc&scoped=true&
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
  
  var style0 = __webpack_require__("5ab14")
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-option-vue.vue?vue&type=template&id=8fcec036&scoped=true&
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/panel/bp-modal-form.vue?vue&type=template&id=a76be314&scoped=true&
var bp_modal_formvue_type_template_id_a76be314_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bp-modal-form"},[(_vm.successSubmit)?_c('div',{staticClass:"bp-modal-submit-success"},[_c('div',{staticClass:"close-button-container"},[_c('div',{staticClass:"close-button",on:{"click":_vm.closeModal}})]),_c('div',{staticClass:"bp-modal-submit-content"},[_c('img',{staticClass:"submit-success-img",attrs:{"src":"https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_success.svg","alt":"success"}}),_c('bp-text',{staticClass:"submit-success-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.submitSuccess))]),_c('bp-text',{staticClass:"submit-feedback-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.submitFeedback))])],1),_c('div',{staticClass:"form-submit-button-container",on:{"click":_vm.closeModal}},[_c('bp-button',{attrs:{"type":"official-yellow-line-compact","density":"compact","text":_vm.translation_data.modalForm.ok}}),_c('img',{staticClass:"button-go",attrs:{"src":"https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_go.svg","alt":"success"}})],1)]):_c('div',{staticClass:"bp-modal-form-content"},[_c('div',{staticClass:"official-width-default mb-5"},[_c('bp-text',{staticClass:"contact-us-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.contactUs))]),_c('div',{staticClass:"close-button",on:{"click":_vm.closeModal}})],1),_c('div',{staticClass:"form-input-container"},[_c('bp-text',{staticClass:"modalform-name-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.name))]),_c('bp-input',{attrs:{"placeholder":"","states":"official-form"},on:{"input":function($event){return _vm.inputEvent($event,'name')}}}),(_vm.nameBlank)?_c('bp-text',{staticClass:"form-warning-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.nameBlank))]):_vm._e()],1),_c('div',{staticClass:"official-width-default"},[_c('div',{staticClass:"form-input-container"},[_c('bp-text',{staticClass:"modalform-name-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.company))]),_c('bp-input',{attrs:{"placeholder":"","states":"official-form"},on:{"input":function($event){return _vm.inputEvent($event,'company')}}}),(_vm.companyBlank)?_c('bp-text',{staticClass:"form-warning-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.companyBlank))]):_vm._e()],1),_c('div',{staticClass:"form-input-container"},[_c('bp-text',{staticClass:"modalform-name-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.department))]),_c('bp-input',{attrs:{"placeholder":"","states":"official-form"},on:{"input":function($event){return _vm.inputEvent($event,'department')}}})],1)]),_c('div',{staticClass:"official-width-default"},[_c('div',{staticClass:"form-input-container"},[_c('bp-text',{staticClass:"modalform-name-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.position))]),_c('bp-input',{attrs:{"placeholder":"","states":"official-form"},on:{"input":function($event){return _vm.inputEvent($event,'position')}}})],1),_c('div',{staticClass:"form-input-container"},[_c('bp-text',{staticClass:"modalform-name-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.email))]),_c('bp-input',{attrs:{"placeholder":"","states":"official-form"},on:{"input":function($event){return _vm.inputEvent($event,'email')}}}),(_vm.emailBlank)?_c('bp-text',{staticClass:"form-warning-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.emailBlank))]):(_vm.emailWaring)?_c('bp-text',{staticClass:"form-warning-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.emailWrong))]):_vm._e()],1)]),_c('bp-text',{staticClass:"ph-H-small mb-2"},[_vm._v(_vm._s(_vm.translation_data.modalForm.intention))]),_c('div',{staticClass:"intention-container mb-2"},[_c('bp-text',{ref:"tag11",class:[_vm.tag1 ? 'official-form-tag-active' : 'official-form-tag', 'ph-body-small', 'mr-2'],on:{"click":function($event){return _vm.toggleTagClass($event, 'tag1')}}},[_vm._v(_vm._s(_vm.translation_data.MAX.max))]),_c('bp-text',{class:[_vm.tag2 ? 'official-form-tag-active' : 'official-form-tag', 'ph-body-small', 'mr-2'],on:{"click":function($event){return _vm.toggleTagClass($event, 'tag2')}}},[_vm._v(_vm._s(_vm.translation_data.consulting.consult))]),_c('bp-text',{class:[_vm.tag3 ? 'official-form-tag-active' : 'official-form-tag', 'ph-body-small', 'mr-2'],on:{"click":function($event){return _vm.toggleTagClass($event, 'tag3')}}},[_vm._v(_vm._s(_vm.translation_data.modalForm.dataService))])],1),_c('bp-textarea',{attrs:{"maxlength":140},on:{"input":_vm.inputTextarea}}),_c('div',{staticClass:"form-submit-button-container",on:{"click":_vm.submit}},[_c('bp-button',{attrs:{"type":"official-yellow-line-compact","density":"compact","text":_vm.translation_data.modalForm.submit}}),_c('img',{staticClass:"button-go",attrs:{"src":"https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_go.svg","alt":"success"}})],1)],1)])}
var bp_modal_formvue_type_template_id_a76be314_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/panel/bp-modal-form.vue?vue&type=template&id=a76be314&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-input.vue?vue&type=template&id=932c7e8e&scoped=true&
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/bp-textarea.vue?vue&type=template&id=2b34fca9&scoped=true&
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
  
  var style0 = __webpack_require__("9c79")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_modal_form_component = normalizeComponent(
  panel_bp_modal_formvue_type_script_lang_js_,
  bp_modal_formvue_type_template_id_a76be314_scoped_true_render,
  bp_modal_formvue_type_template_id_a76be314_scoped_true_staticRenderFns,
  false,
  bp_modal_form_injectStyles,
  "a76be314",
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
//
//





/* harmony default export */ var bp_nav_topvue_type_script_lang_js_ = ({
  created() {
    let curLang = window.localStorage.getItem('lang');
    this.language = curLang;
  },

  mounted() {
    const that = this;
    this.inverse = this.inversebase;

    window.onscroll = () => {
      let top = document.scrollingElement.scrollTop; //触发滚动条

      if (top == 0) {
        //回到页面顶部
        that.borderNone = false;

        if (that.inversebase) {
          that.inverse = true;
        }
      } else {
        //不在页面顶部
        that.borderNone = true;
        that.inverse = false;
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
    inversebase: {
      type: Boolean,
      default: false
    },
    isLogin: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      language: '中文',
      borderNone: false,
      contactForm: false,
      inverse: false,
      imgSrc: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_logo_ph_theme.svg",
      imgSrcLight: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_logo_ph_light.svg",
      selectSrc: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_drop.svg",
      selectSrcLight: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_drop_light.svg",
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
          general: "法伯数据平台",
          logout: "退出登录",
          options_data: [{
            text: "MAX",
            spanText: "全息市场监测利器",
            click_event: function () {
              this.$emit('linkToPage', 'max');
            }
          }, {
            text: "真实数据研究",
            spanText: "来自患者信息的多视角深度挖掘",
            click_event: function () {
              this.$emit('linkToPage', 'rw');
            }
          }, {
            text: "循证咨询",
            spanText: "多层面精准预测，营销资源配置与优化",
            click_event: function () {
              this.$emit('linkToPage', 'consulting');
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
          general: "General",
          logout: "Logout",
          options_data: [{
            text: "MAX©",
            spanText: "Holographic Market Monitoring Tool",
            click_event: function () {
              this.$emit('linkToPage', 'max');
            }
          }, {
            text: "Real World Research",
            spanText: "Multi-perspective Deep Mining from Patient Information",
            click_event: function () {
              this.$emit('linkToPage', 'rw');
            }
          }, {
            text: "Evidence-based Consulting",
            spanText: "Multi-level Accurate Prediction Allocating and Optimizing Marketing Resource",
            click_event: function () {
              this.$emit('linkToPage', 'consulting');
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
      this.$emit('linkToPage', 'about-us');
      this.returnToTop();
    },

    toHome() {
      this.$emit('linkToPage', 'home');
    },

    linkToPage(value) {
      this.$emit('linkToPage', value);
      this.returnToTop();
    },

    toGeneral() {
      window.location.href = "http://general.pharbers.com";
    },

    logout() {
      this.$emit('logout');
    },

    returnToTop() {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }

  }
});
// CONCATENATED MODULE: ./src/components/panel/bp-nav-top.vue?vue&type=script&lang=js&
 /* harmony default export */ var panel_bp_nav_topvue_type_script_lang_js_ = (bp_nav_topvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/panel/bp-nav-top.vue



function bp_nav_top_injectStyles (context) {
  
  var style0 = __webpack_require__("a08f")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_nav_top_component = normalizeComponent(
  panel_bp_nav_topvue_type_script_lang_js_,
  bp_nav_topvue_type_template_id_f9621332_scoped_true_render,
  bp_nav_topvue_type_template_id_f9621332_scoped_true_staticRenderFns,
  false,
  bp_nav_top_injectStyles,
  "f9621332",
  null
  ,true
)

/* harmony default export */ var bp_nav_top = (bp_nav_top_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/panel/bp-card-activity.vue?vue&type=template&id=51402daa&scoped=true&
var bp_card_activityvue_type_template_id_51402daa_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content-active-panel"},[_c('div',{staticClass:"active-img"},[_c('img',{staticClass:"active-img-bgc",attrs:{"src":_vm.bgImg,"alt":""}}),(_vm.logoImg != 'null')?_c('img',{staticClass:"above-data-logo",attrs:{"src":_vm.logoImg,"alt":""}}):_vm._e()]),_c('div',{staticClass:"active-info"},[_c('div',{staticClass:"home-avtive-names"},[_c('span',{staticClass:"active-logo"},[_vm._v(_vm._s(_vm.logoText))]),_c('span',{staticClass:"active-title"},[_vm._v(_vm._s(_vm.title))])]),_c('span',{staticClass:"position-info"},[_vm._v(_vm._s(_vm.date)+" "+_vm._s(_vm.city))])])])}
var bp_card_activityvue_type_template_id_51402daa_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/panel/bp-card-activity.vue?vue&type=template&id=51402daa&scoped=true&

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
  
  var style0 = __webpack_require__("64c3")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_card_activity_component = normalizeComponent(
  panel_bp_card_activityvue_type_script_lang_js_,
  bp_card_activityvue_type_template_id_51402daa_scoped_true_render,
  bp_card_activityvue_type_template_id_51402daa_scoped_true_staticRenderFns,
  false,
  bp_card_activity_injectStyles,
  "51402daa",
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

  props: {
    allData: {
      type: Array,
      default: function () {
        return [];
      }
    }
  },
  components: {
    bpText: bp_text,
    bpImg: bp_img,
    bpCardActive: bp_card_activity,
    bpButton: bp_button,
    BpText: bp_text,
    iconLine: bp_icon_line,
    iconLineRes: bp_icon_line_response,
    navTop: bp_nav_top
  },
  methods: {
    submitClientData(value) {
      this.$emit('submitClientData', value);
    },

    toMore(data) {
      this.$emit('linkToPage', data);
      this.returnToTop();
    },

    downloadReport(value) {
      this.$emit('downloadReport', value);
    },

    returnToTop() {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
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
    window.addEventListener('beforeunload', e => {
      window.scrollTo(0, 0);
    });
    let lang = window.localStorage.getItem('lang');

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
    debugger;
    console.log('allData', this.allData);
  }

});
// CONCATENATED MODULE: ./src/components/page/home.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var page_homevue_type_script_lang_js_shadow = (homevue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/page/home.vue?shadow



function homeshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("4e15")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var homeshadow_component = normalizeComponent(
  page_homevue_type_script_lang_js_shadow,
  homevue_type_template_id_d7e795c8_scoped_true_shadow_render,
  homevue_type_template_id_d7e795c8_scoped_true_shadow_staticRenderFns,
  false,
  homeshadow_injectStyles,
  "d7e795c8",
  null
  ,true
)

/* harmony default export */ var homeshadow = (homeshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/page/max.vue?vue&type=template&id=243b1737&scoped=true&shadow
var maxvue_type_template_id_243b1737_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bp-max"},[_c('div',{staticClass:"max-header"},[_c('bpImg',{staticClass:"above-data-detail-header-img",attrs:{"src":_vm.maxHeaderImg}}),_c('bpText',{staticClass:"ph-body-small-inverse top-breadcrumb"},[_c('span',{staticClass:"mr-0",on:{"click":_vm.toHome}},[_vm._v(_vm._s(_vm.translation_data.home))]),_c('span',{staticClass:"mr-0"},[_vm._v("/")]),_c('span',[_vm._v(_vm._s(_vm.translation_data.max))])]),_c('bpText',{staticClass:"page-header-anton-font"},[_vm._v(_vm._s(_vm.translation_data.maxEn))]),_c('bpText',{staticClass:"max-header-slogan-b"},[_vm._v(_vm._s(_vm.translation_data.max))]),_c('bpText',{staticClass:"max-header-slogan-c"},[_vm._v(_vm._s(_vm.translation_data.sloganA))]),_c('bpText',{staticClass:"max-header-slogan-c"},[_vm._v(_vm._s(_vm.translation_data.sloganB))])],1),_c('div',{staticClass:"max-text-info"},[_c('bpImg',{staticClass:"max-connect-img",attrs:{"src":_vm.maxConnectImg}}),_c('bpText',{staticClass:"max-text-info-title"},[_vm._v(_vm._s(_vm.translation_data.MAXTitle))]),_c('bpText',{staticClass:"max-text-info-text"},[_vm._v(_vm._s(_vm.translation_data.MAXDescription.descA))]),_c('bpText',{staticClass:"max-text-info-text"},[_vm._v(_vm._s(_vm.translation_data.MAXDescription.descB))]),_c('div',{staticClass:"rw-text-card-container"},[_c('div',{staticClass:"max-text-card"},[_c('div',{staticClass:"max-text-card-line"}),_c('bpText',{staticClass:"max-text-card-tilte"},[_vm._v(_vm._s(_vm.translation_data.MAXFeature.featureA.title))]),_c('bpText',{staticClass:"max-text-card-content"},[_vm._v(_vm._s(_vm.translation_data.MAXFeature.featureA.textA1))]),_c('bpText',{staticClass:"max-text-card-content"},[_vm._v(_vm._s(_vm.translation_data.MAXFeature.featureA.textA2))]),_c('bpText',{staticClass:"max-text-card-content"},[_vm._v(_vm._s(_vm.translation_data.MAXFeature.featureA.textA3))])],1),_c('div',{staticClass:"max-text-card"},[_c('div',{staticClass:"max-text-card-line"}),_c('bpText',{staticClass:"max-text-card-tilte"},[_vm._v(_vm._s(_vm.translation_data.MAXFeature.featureB.title))]),_c('bpText',{staticClass:"max-text-card-content"},[_vm._v(_vm._s(_vm.translation_data.MAXFeature.featureB.textB1))]),_c('bpText',{staticClass:"max-text-card-content"},[_vm._v(_vm._s(_vm.translation_data.MAXFeature.featureB.textB2))]),_c('div',{staticClass:"max-card-tag-row"},[_c('bpText',{staticClass:"max-card-tag"},[_vm._v(_vm._s(_vm.translation_data.MAXFeature.featureB.textB3))]),_c('bpText',{staticClass:"max-card-tag"},[_vm._v(_vm._s(_vm.translation_data.MAXFeature.featureB.textB4))]),_c('bpText',{staticClass:"max-card-tag"},[_vm._v(_vm._s(_vm.translation_data.MAXFeature.featureB.textB5))]),_c('bpText',{staticClass:"max-card-tag"},[_vm._v(_vm._s(_vm.translation_data.MAXFeature.featureB.textB6))])],1)],1),_c('div',{staticClass:"max-text-card"},[_c('div',{staticClass:"max-text-card-line"}),_c('bpText',{staticClass:"max-text-card-tilte"},[_vm._v(_vm._s(_vm.translation_data.MAXFeature.featureC.title))]),_c('div',{staticClass:"max-card-row"},[_c('div',{staticClass:"max-card-row-1"},[_c('bpText',{staticClass:"max-card-row-a"},[_vm._v(_vm._s(_vm.translation_data.MAXFeature.featureC.numberC1))]),_c('bpText',{staticClass:"max-card-row-b-1"},[_vm._v(_vm._s(_vm.translation_data.MAXFeature.featureC.textC4))])],1),_c('div',{staticClass:"max-card-row-2"},[_c('bpText',{staticClass:"max-card-row-a"},[_vm._v(_vm._s(_vm.translation_data.MAXFeature.featureC.numberC2))]),_c('bpText',{staticClass:"max-card-row-b-2"},[_vm._v(_vm._s(_vm.translation_data.MAXFeature.featureC.textC5))])],1),_c('div',{staticClass:"max-card-row-1"},[_c('bpText',{staticClass:"max-card-row-b"},[_vm._v(_vm._s(_vm.translation_data.MAXFeature.featureC.textC3))])],1)])],1)])],1),_c('div',{staticClass:"max-advantage-card-container"},[_c('bpImg',{staticClass:"max-advantage-card-container-img",attrs:{"src":_vm.maxAdvantageImg}}),_c('bpImg',{staticClass:"max-connect-img",attrs:{"src":_vm.maxConnectImg}}),_c('bpText',{staticClass:"rw-advantage-container-title"},[_vm._v(_vm._s(_vm.translation_data.advantages.advantagesText))]),_c('div',{staticClass:"max-cards-row-a"},[_c('div',{staticClass:"max-advantage-card"},[_c('bpImg',{staticClass:"max-advantage-card-icon",attrs:{"src":_vm.maxAdvantageIcon}}),_c('bpText',{staticClass:"max-advantage-card-title"},[_vm._v("01")]),_c('div',{staticClass:"max-advantage-card-title-line"}),_c('bpText',{staticClass:"max-advantage-card-desc-a"},[_vm._v(_vm._s(_vm.translation_data.advantages.advantageA.title))]),_c('bpText',{staticClass:"max-advantage-card-desc-b"},[_vm._v(_vm._s(_vm.translation_data.advantages.advantageA.textA1))]),_c('bpText',{staticClass:"max-advantage-card-desc-b"},[_vm._v(_vm._s(_vm.translation_data.advantages.advantageA.textA2))]),_c('bpText',{staticClass:"max-advantage-card-desc-b"},[_vm._v(_vm._s(_vm.translation_data.advantages.advantageA.textA3))])],1),_c('div',{staticClass:"max-advantage-card"},[_c('bpImg',{staticClass:"max-advantage-card-icon",attrs:{"src":_vm.maxAdvantageIcon}}),_c('bpText',{staticClass:"max-advantage-card-title"},[_vm._v("02")]),_c('div',{staticClass:"max-advantage-card-title-line"}),_c('bpText',{staticClass:"max-advantage-card-desc-a"},[_vm._v(_vm._s(_vm.translation_data.advantages.advantageB.title))]),_c('bpText',{staticClass:"max-advantage-card-desc-b"},[_vm._v(_vm._s(_vm.translation_data.advantages.advantageB.text))])],1),_c('div',{staticClass:"max-advantage-card"},[_c('bpImg',{staticClass:"max-advantage-card-icon",attrs:{"src":_vm.maxAdvantageIcon}}),_c('bpText',{staticClass:"max-advantage-card-title"},[_vm._v("03")]),_c('div',{staticClass:"max-advantage-card-title-line"}),_c('bpText',{staticClass:"max-advantage-card-desc-a"},[_vm._v(_vm._s(_vm.translation_data.advantages.advantageC.title))]),_c('bpText',{staticClass:"max-advantage-card-desc-b"},[_vm._v(_vm._s(_vm.translation_data.advantages.advantageC.text))])],1)]),_c('div',{staticClass:"max-cards-row-b"},[_c('div',{staticClass:"max-advantage-card"},[_c('bpImg',{staticClass:"max-advantage-card-icon",attrs:{"src":_vm.maxAdvantageIcon}}),_c('bpText',{staticClass:"max-advantage-card-title"},[_vm._v("04")]),_c('div',{staticClass:"max-advantage-card-title-line"}),_c('bpText',{staticClass:"max-advantage-card-desc-a"},[_vm._v(_vm._s(_vm.translation_data.advantages.advantageD.title))]),_c('bpText',{staticClass:"max-advantage-card-desc-b"},[_vm._v(_vm._s(_vm.translation_data.advantages.advantageD.text))])],1),_c('div',{staticClass:"max-advantage-card"},[_c('bpImg',{staticClass:"max-advantage-card-icon",attrs:{"src":_vm.maxAdvantageIcon}}),_c('bpText',{staticClass:"max-advantage-card-title"},[_vm._v("05")]),_c('div',{staticClass:"max-advantage-card-title-line"}),_c('bpText',{staticClass:"max-advantage-card-desc-a"},[_vm._v(_vm._s(_vm.translation_data.advantages.advantageE.title))]),_c('bpText',{staticClass:"max-advantage-card-desc-b"},[_vm._v(_vm._s(_vm.translation_data.advantages.advantageE.text))])],1)])],1)])}
var maxvue_type_template_id_243b1737_scoped_true_shadow_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/page/max.vue?vue&type=template&id=243b1737&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/page/max.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var maxvue_type_script_lang_js_shadow = ({
  name: "max",
  components: {
    bpText: bp_text,
    bpImg: bp_img,
    bpButton: bp_button
  },

  data() {
    return {
      language: '中文',
      // 中英切换
      windowWidth: document.documentElement.clientWidth,
      windowHeight: document.documentElement.clientHeight,
      response: false,
      responseMini: false,
      maxHeaderImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_detail-page_head_MAX.jpg",
      maxConnectImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_connect_line.svg",
      maxAdvantageIcon: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_point.svg",
      maxAdvantageImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_bg_doublehexagon.svg",
      translation_basedata: {
        cn: {
          home: "主页",
          max: "MAX",
          maxEn: " Market Analytic Box",
          sloganA: "城市、县域、CHC，及时掌握市场动态",
          sloganB: "全息市场监测利器",
          MAXTitle: "Market Analytic Box 是法伯研发的一种用于医药市场分析\n与产品市场表现的监测型数据产品",
          MAXDescription: {
            descA: "MAX可以为医药市场数据分析提供城市医院、县域医院及CHC三个渠道的340多个地级市、31个省份及全国数据，帮助企业填补市场监测空白。",
            descB: "法伯以高可靠的数据产品，致力于帮助企业敏捷洞察市场格局、全息监测产品市场表现，做到真正掌握市场动态。"
          },
          MAXFeature: {
            featureA: {
              title: "销售渠道全包含",
              textA1: "城市医院",
              textA2: "县域医院",
              textA3: "社区卫生中心"
            },
            featureB: {
              title: "治疗领域全囊括",
              textB1: "所有治疗领域",
              textB2: "所有产品",
              textB3: "通用名",
              textB4: "商品名",
              textB5: "厂家",
              textB6: "包装规格"
            },
            featureC: {
              title: "地理纬度全覆盖",
              numberC1: "340+",
              numberC2: "31",
              textC3: "全国",
              textC4: "地级市",
              textC5: "省份"
            }
          },
          advantages: {
            advantagesText: "能力与优势",
            advantageA: {
              title: "整合多个独家数据源",
              textA1: "2,000+ 重点城市医院",
              textA2: "1,200+ 县域医院",
              textA3: "2,000+ 社区卫生服务中心"
            },
            advantageB: {
              title: "完善的医院及CHC大全",
              text: "囊括城市医院16,000多家、县域医院12,000多家、社区卫生服务中心10,000多家。数据包含终端基本信息，及重要参数变量：床位数、医生数、西药收入、门诊量、社区卫生中心所在街道常驻人口数等"
            },
            advantageC: {
              title: "先进的算法模型",
              text: "运用科学统计方法、机器学习模型等，对样本进行放大评估，并经过严谨的交叉验证及多次测试后得到最优模型。同时结合实际业务情况，对结果进行学习优化，最终获得可信赖的数据产品。"
            },
            advantageD: {
              title: "灵活的定制化输出",
              text: "通过底层数据，可以针对企业内部组织架构，灵活关联医院层面产品及市场数据，帮助企业充分了解各区域的真实市场表现。"
            },
            advantageE: {
              title: "多维逐级分析",
              text: "从销售渠道、组织架构、时间维度、产品（竞品）、销量&金额等多维度，实现全国、区域、省份到城市的逐级分析和深度挖掘，发现核心的问题。"
            }
          }
        },
        en: {
          home: "Home",
          max: "MAX©",
          maxEn: " Market Analytic Box",
          sloganA: "Cities, Counties, and CHC \n Keeping Tracking Market Trends",
          sloganB: "Holographic Market Monitoring Tool",
          MAXTitle: "MAX© is a Data Product Developed for Pharmaceutical Market Analysis and Product Performance Tracking.",
          MAXDescription: {
            descA: "More than 340 prefecture-level cities and 31 provinces can be provided at city hospital,county hospital and CHC channels for data analysis.",
            descB: "Help pharmaceutical enterprises to fill the gap of market monitoring."
          },
          MAXFeature: {
            featureA: {
              title: "Sales Channel All Contained",
              textA1: "City hospitals",
              textA2: "County hospitals",
              textA3: "CHC channels"
            },
            featureB: {
              title: "Treatment Fields All Included",
              textB1: "All treatment Fields",
              textB2: "All products",
              textB3: "Molecule",
              textB4: "Products",
              textB5: "Vender",
              textB6: "SKU"
            },
            featureC: {
              title: "Geographic Latitude All Covered",
              numberC1: "340+",
              numberC2: "31",
              textC3: "Nationwide",
              textC4: "Cities",
              textC5: "Provinces"
            }
          },
          advantages: {
            advantagesText: "Capabilities and Strengths",
            advantageA: {
              title: "Integrate Multiple Exclusive Data Sources",
              textA1: "2,000+ Major city hospitals",
              textA2: "1,200+ County hospitals",
              textA3: "2,000+ CHCs"
            },
            advantageB: {
              title: "Sophisticated Hospital and CHC Universe",
              text: "16,000+ city hospitals, 12,000+ county hospitals, 10,000+ CHCs.Data covers basic terminal information and key parameter variables:beds & doctor number, medicine income, outpatient amount, permanent resident number in the CHC located street, etc."
            },
            advantageC: {
              title: "Advanced Algorithm Model",
              text: "Amplify sample data with scientific statistical method and machine learning model.Obtain optimal model after rigorous cross validation and multiple tests.Meanwhile, combine with actual business situation and optimize learning results to obtain reliable data products."
            },
            advantageD: {
              title: "Flexible Customized Output",
              text: "Through the underlying data, we can flexibly relate the hospital level product and market data according to the internal organizational structure of the enterprise,so as to help the enterprise fully understand the real market performance of each region."
            },
            advantageE: {
              title: "Multidimensional and Multilayer Analysis",
              text: "From sales channel, organizational structure, time dimension, products (competitions), volume & value ... realize the level-by-level analysis and in-depth mining from the nationwide, region, province to city, so as to discover the most core problem."
            }
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
    window.addEventListener('beforeunload', e => {
      window.scrollTo(0, 0);
    });
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
  },

  methods: {
    toHome() {
      this.$emit('linkToPage', 'home');
    }

  }
});
// CONCATENATED MODULE: ./src/components/page/max.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var page_maxvue_type_script_lang_js_shadow = (maxvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/page/max.vue?shadow



function maxshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("2a76")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var maxshadow_component = normalizeComponent(
  page_maxvue_type_script_lang_js_shadow,
  maxvue_type_template_id_243b1737_scoped_true_shadow_render,
  maxvue_type_template_id_243b1737_scoped_true_shadow_staticRenderFns,
  false,
  maxshadow_injectStyles,
  "243b1737",
  null
  ,true
)

/* harmony default export */ var maxshadow = (maxshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/page/rw.vue?vue&type=template&id=cb55a8e2&scoped=true&shadow
var rwvue_type_template_id_cb55a8e2_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"bp-rw"},[_c('div',{staticClass:"rw-content-a"},[_c('bpImg',{staticClass:"above-data-detail-header-img",attrs:{"src":_vm.rwContentImg}}),_c('bpText',{staticClass:"ph-body-small-inverse top-breadcrumb"},[_c('span',{staticClass:"mr-0",on:{"click":_vm.toHome}},[_vm._v(_vm._s(_vm.translation_data.home))]),_c('span',{staticClass:"mr-0"},[_vm._v("/")]),_c('span',[_vm._v(_vm._s(_vm.translation_data.realWorldResearch))])]),_c('bpText',{staticClass:"page-header-anton-font"},[_vm._v(_vm._s(_vm.translation_data.realWorldResearchEN))]),_c('bpText',{staticClass:"rw-content-slogan-b"},[_vm._v(_vm._s(_vm.translation_data.realWorldResearch))]),_c('bpText',{staticClass:"rw-content-slogan-c"},[_vm._v(_vm._s(_vm.translation_data.multiPerspectiveDeepMining))]),_c('bpText',{staticClass:"rw-content-slogan-c"},[_vm._v(_vm._s(_vm.translation_data.findDifferent))])],1),_c('div',{staticClass:"rw-text-info"},[_c('bpImg',{staticClass:"rw-connect-img",attrs:{"src":_vm.rwConnectImg}}),_c('bpText',{staticClass:"rw-text-info-title"},[_vm._v(_vm._s(_vm.translation_data.realWorldTitle))]),_c('bpText',{staticClass:"rw-text-info-text"},[_vm._v(_vm._s(_vm.translation_data.realWordDescription))]),_c('div',{staticClass:"rw-text-card-container"},[_c('div',{staticClass:"rw-text-card-a"},[_c('bpImg',{staticClass:"rw-text-card-a-img",attrs:{"src":_vm.rwCardAImg}}),_c('div',{staticClass:"rw-text-card-line"}),_c('bpText',{staticClass:"rw-text-card-tilte"},[_vm._v(_vm._s(_vm.translation_data.feature.featureA.title))]),_c('div',{staticClass:"rw-card-row"},[_c('div',{staticClass:"rw-card-flex-1"},[_c('bpText',{staticClass:"rw-card-row-a"},[_vm._v(_vm._s(_vm.translation_data.feature.featureA.numberA1))]),_c('bpText',{staticClass:"rw-card-row-b-1"},[_vm._v(_vm._s(_vm.translation_data.feature.featureA.textA4))])],1),_c('div',{staticClass:"rw-card-flex-1"},[_c('bpText',{staticClass:"rw-card-row-a"},[_vm._v(_vm._s(_vm.translation_data.feature.featureA.numberA2))]),_c('bpText',{staticClass:"rw-card-row-b-1"},[_vm._v(_vm._s(_vm.translation_data.feature.featureA.textA5))])],1),_c('div',{staticClass:"rw-card-flex-1"},[_c('bpText',{staticClass:"rw-card-row-a"},[_vm._v(_vm._s(_vm.translation_data.feature.featureA.numberA3))]),_c('bpText',{staticClass:"rw-card-row-b-1"},[_vm._v(_vm._s(_vm.translation_data.feature.featureA.textA6))])],1)])],1),_c('div',{staticClass:"rw-text-card-b"},[_c('bpImg',{staticClass:"rw-text-card-b-img",attrs:{"src":_vm.rwTextBImg}}),_c('div',{staticClass:"rw-text-card-line"}),_c('bpText',{staticClass:"rw-text-card-tilte"},[_vm._v(_vm._s(_vm.translation_data.feature.featureB.title))]),_c('div',{staticClass:"rw-card-tag-row-a"},[_c('bpText',{staticClass:"rw-card-tag"},[_vm._v(_vm._s(_vm.translation_data.feature.featureB.textB1))]),_c('bpText',{staticClass:"rw-card-tag"},[_vm._v(_vm._s(_vm.translation_data.feature.featureB.textB2))])],1),_c('div',{staticClass:"rw-card-tag-row-a"},[_c('bpText',{staticClass:"rw-card-tag"},[_vm._v(_vm._s(_vm.translation_data.feature.featureB.textB3))]),_c('bpText',{staticClass:"rw-card-tag"},[_vm._v(_vm._s(_vm.translation_data.feature.featureB.textB4))]),_c('bpText',{staticClass:"rw-card-tag"},[_vm._v(_vm._s(_vm.translation_data.feature.featureB.textB5))])],1),_c('div',{staticClass:"rw-card-tag-row-b"},[_c('bpText',{staticClass:"rw-card-tag"},[_vm._v(_vm._s(_vm.translation_data.feature.featureB.textB6))]),_c('bpText',{staticClass:"rw-card-tag"},[_vm._v(_vm._s(_vm.translation_data.feature.featureB.textB7))])],1)],1)])],1),_c('div',{staticClass:"rw-advantage-card-container"},[_c('bpImg',{staticClass:"rw-advantage-card-container-img",attrs:{"src":_vm.rwAdvantageImg}}),_c('bpImg',{staticClass:"rw-connect-img",attrs:{"src":_vm.rwConnectImg}}),_c('bpText',{staticClass:"rw-advantage-container-title"},[_vm._v(_vm._s(_vm.translation_data.advantages.advantagesText))]),_c('div',{staticClass:"rw-cards-row"},[_c('div',{staticClass:"rw-advantage-card"},[_c('bpImg',{staticClass:"rw-advantage-card-icon",attrs:{"src":_vm.rwCardIcon}}),_c('bpText',{staticClass:"rw-advantage-card-title"},[_vm._v("01")]),_c('div',{staticClass:"rw-advantage-card-title-line"}),_c('bpText',{staticClass:"rw-advantage-card-desc"},[_vm._v(_vm._s(_vm.translation_data.advantages.advantageA))])],1),_c('div',{staticClass:"rw-advantage-card"},[_c('bpImg',{staticClass:"rw-advantage-card-icon",attrs:{"src":_vm.rwCardIcon}}),_c('bpText',{staticClass:"rw-advantage-card-title"},[_vm._v("02")]),_c('div',{staticClass:"rw-advantage-card-title-line"}),_c('bpText',{staticClass:"rw-advantage-card-desc"},[_vm._v(_vm._s(_vm.translation_data.advantages.advantageB))])],1),_c('div',{staticClass:"rw-advantage-card"},[_c('bpImg',{staticClass:"rw-advantage-card-icon",attrs:{"src":_vm.rwCardIcon}}),_c('bpText',{staticClass:"rw-advantage-card-title"},[_vm._v("03")]),_c('div',{staticClass:"rw-advantage-card-title-line"}),_c('bpText',{staticClass:"rw-advantage-card-desc"},[_vm._v(_vm._s(_vm.translation_data.advantages.advantageC))])],1)])],1)]),_c('bp-page-bottom')],1)}
var rwvue_type_template_id_cb55a8e2_scoped_true_shadow_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/page/rw.vue?vue&type=template&id=cb55a8e2&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/panel/bp-nav-top-response.vue?vue&type=template&id=b2f4e76a&scoped=true&
var bp_nav_top_responsevue_type_template_id_b2f4e76a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue_container fixed-nav",class:[_vm.inverse ? 'navInverse' : 'nav']},[_c('div',{staticClass:"nav-border",class:[
            {borderNone: _vm.borderNone},
            _vm.inverse ? 'bordernavInverse' : 'bordernav']},[_c('img',{staticClass:"bp-img fixed-nav-icon cursor-pointer",attrs:{"src":_vm.inverse ? _vm.imgSrcLight : _vm.imgSrc},on:{"click":_vm.toHome}}),_c('div',{class:_vm.inverse ? 'response-icon-menu-light' : 'response-icon-menu',on:{"click":_vm.clickMenu}}),(_vm.menu)?_c('div',{staticClass:"meau-shade"}):_vm._e(),(_vm.menu)?_c('div',{staticClass:"response-menu"},[_vm._l((_vm.translation_data.options_data),function(item){return _c('div',{key:item.text,staticClass:"responsee-menu-item",on:{"click":function($event){return _vm.runClickEvent(item.click_event)}}},[_c('span',{staticClass:"ph-H-Small"},[_vm._v(_vm._s(item.text))]),(item.spanText)?_c('span',{staticClass:"ph-body-xsmall"},[_vm._v(_vm._s(item.spanText))]):_vm._e()])}),_c('bpButton',{staticClass:"contact-us",attrs:{"text":_vm.translation_data.contactUs},on:{"click":_vm.contactUs}}),(_vm.isLogin)?_c('div',{staticClass:"button-response-group"},[_c('bp-text',{staticClass:"ph-H-Small button-response-general",on:{"click":_vm.toGeneral}},[_vm._v(_vm._s(_vm.translation_data.general))]),_c('bp-text',{staticClass:"ph-H-Small button-response-logout",on:{"click":_vm.logout}},[_vm._v(_vm._s(_vm.translation_data.logout))])],1):_c('bpButton',{staticClass:"login",attrs:{"text":_vm.translation_data.login},on:{"click":_vm.toGeneral}},[_vm._v(_vm._s(_vm.translation_data.logout))])],2):_vm._e()]),(_vm.contactForm)?_c('bp-modal-form',{attrs:{"translation_data":_vm.translation_data},on:{"closeModal":_vm.closeModal,"submitClientData":_vm.submitClientData}}):_vm._e()],1)}
var bp_nav_top_responsevue_type_template_id_b2f4e76a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/panel/bp-nav-top-response.vue?vue&type=template&id=b2f4e76a&scoped=true&

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
    this.inverse = this.inversebase;

    window.onscroll = () => {
      let top = document.scrollingElement.scrollTop; //触发滚动条

      if (top == 0) {
        //回到页面顶部
        this.borderNone = false;

        if (that.inversebase) {
          that.inverse = true;
        }
      } else {
        //不在页面顶部
        this.borderNone = true;
        that.inverse = false;
      }
    };

    window.addEventListener('setItemEvent', function (e) {
      that.language = e.newValue;
    });
  },

  components: {
    bpModalForm: bp_modal_form,
    bpButton: bp_button,
    bpText: bp_text
  },
  props: {
    inversebase: {
      type: Boolean,
      default: false
    },
    isLogin: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      imgSrc: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_logo_ph_theme.svg",
      imgSrcLight: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_logo_ph_light.svg",
      menu: false,
      borderNone: false,
      inverse: false,
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
          general: "法伯数据平台",
          logout: "退出登录",
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
              this.$emit('linkToPage', 'max');
            }
          }, {
            text: "真实数据研究",
            spanText: "来自患者信息的多视角深度挖掘",
            click_event: function () {
              this.$emit('linkToPage', 'rw');
            }
          }, {
            text: "循证咨询",
            spanText: "多层面精准预测，营销资源配置与优化",
            click_event: function () {
              this.$emit('linkToPage', 'consulting');
            }
          }, {
            text: "关于我们",
            click_event: function () {
              this.$emit('linkToPage', 'about-us');
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
          general: "General",
          logout: "Logout",
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
              this.$emit('linkToPage', 'max');
            }
          }, {
            text: "Real World Research",
            spanText: "Multi-perspective Deep Mining from Patient Information",
            click_event: function () {
              this.$emit('linkToPage', 'rw');
            }
          }, {
            text: "Evidence-based Consulting",
            spanText: "Multi-level Accurate Prediction Allocating and Optimizing Marketing Resource",
            click_event: function () {
              this.$emit('linkToPage', 'consulting');
            }
          }, {
            text: "COMPANY",
            click_event: function () {
              this.$emit('linkToPage', 'about-us');
            }
          }]
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

    toHome() {
      this.$emit('linkToPage', 'home');
      this.returnToTop();
    },

    toGeneral() {
      window.location.href = "http://general.pharbers.com";
    },

    logout() {
      this.$emit('logout');
    },

    runClickEvent(click_event) {
      click_event.call(this);
      this.menu = false;
      this.returnToTop();
    },

    returnToTop() {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }

  }
});
// CONCATENATED MODULE: ./src/components/panel/bp-nav-top-response.vue?vue&type=script&lang=js&
 /* harmony default export */ var panel_bp_nav_top_responsevue_type_script_lang_js_ = (bp_nav_top_responsevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/panel/bp-nav-top-response.vue



function bp_nav_top_response_injectStyles (context) {
  
  var style0 = __webpack_require__("0440")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_nav_top_response_component = normalizeComponent(
  panel_bp_nav_top_responsevue_type_script_lang_js_,
  bp_nav_top_responsevue_type_template_id_b2f4e76a_scoped_true_render,
  bp_nav_top_responsevue_type_template_id_b2f4e76a_scoped_true_staticRenderFns,
  false,
  bp_nav_top_response_injectStyles,
  "b2f4e76a",
  null
  ,true
)

/* harmony default export */ var bp_nav_top_response = (bp_nav_top_response_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/panel/bp-page-bottom.vue?vue&type=template&id=39d77038&scoped=true&
var bp_page_bottomvue_type_template_id_39d77038_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-bottom-part"},[_c('div',{staticClass:"contact-container"},[_c('div',{staticClass:"contact-content"},[_c('div',{staticClass:"contact-slogan-part"},[_c('bp-text',{staticClass:"ph-body-medium response-text-center"},[_vm._v(_vm._s(_vm.translation_data.contactUs.leadingForHealthcareIndustry))]),_c('bp-text',{staticClass:"ph-H-Large_2 response-text-center"},[_vm._v(_vm._s(_vm.translation_data.contactUs.provideSolution))])],1),_c('bp-button',{staticClass:"contact-us-button",attrs:{"type":"standard","text":_vm.translation_data.contactUs.contactUs},on:{"click":_vm.contactUs}})],1)]),_c('div',{staticClass:"page-bottom"},[_c('div',{staticClass:"bottom-pharbers"},[_c('bp-img',{staticClass:"bottom-pharbers-icon",attrs:{"src":"https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_logo_ph_gray.svg"}}),_c('div',{staticClass:"bottom-row-container"},[_c('div',{staticClass:"bottom-product-container"},[_c('div',{staticClass:"bottom-list-a"},[_c('bp-text',{staticClass:"bottom-pharbers-title"},[_vm._v(_vm._s(_vm.translation_data.siteMap.productAndService))]),_c('bp-text',{staticClass:"ph-body-small mb-2 cursor-pointer",on:{"click":_vm.toMax}},[_vm._v(_vm._s(_vm.translation_data.siteMap.max))]),_c('bp-text',{staticClass:"ph-body-small mb-2 cursor-pointer",on:{"click":_vm.toRW}},[_vm._v(_vm._s(_vm.translation_data.siteMap.realWorldSearch))]),_c('bp-text',{staticClass:"ph-body-small cursor-pointer",on:{"click":_vm.toConsulting}},[_vm._v(_vm._s(_vm.translation_data.siteMap.consulting))])],1),_c('div',{staticClass:"bottom-list-b"},[_c('bp-text',{staticClass:"bottom-pharbers-title"},[_vm._v(_vm._s(_vm.translation_data.siteMap.company))]),_c('bp-text',{staticClass:"ph-body-small mb-2 cursor-pointer",on:{"click":_vm.toAboutUs}},[_vm._v(_vm._s(_vm.translation_data.siteMap.aboutPharbers))])],1)]),_c('div',{staticClass:"bottom-address"},[_c('div',{staticClass:"address-bj-part"},[_c('bp-text',{staticClass:"ph-body-xsmall-tertiary text-right"},[_vm._v(_vm._s(_vm.translation_data.siteMap.companyPhoneBJ))]),_c('bp-text',{staticClass:"ph-body-xsmall-tertiary text-right"},[_vm._v(_vm._s(_vm.translation_data.siteMap.companyPositonBJ))]),_c('bp-text',{staticClass:"ph-body-xsmall-tertiary text-right"},[_vm._v(_vm._s(_vm.translation_data.siteMap.companyRoomBJ))])],1),_c('div',{staticClass:"address-sh-part"},[_c('bp-text',{staticClass:"ph-body-xsmall-tertiary text-right"},[_vm._v(_vm._s(_vm.translation_data.siteMap.companyPhoneSH))]),_c('bp-text',{staticClass:"ph-body-xsmall-tertiary text-right"},[_vm._v(_vm._s(_vm.translation_data.siteMap.companyPositonSH))]),_c('bp-text',{staticClass:"ph-body-xsmall-tertiary text-right"},[_vm._v(_vm._s(_vm.translation_data.siteMap.companyRoomSH))])],1)])])],1),_c('div',{staticClass:"bottom-contact"},[_c('div',{staticClass:"bottom-contact-left"},[_c('bp-text',{staticClass:"ph-body-small mr-3"},[_vm._v(_vm._s(_vm.translation_data.siteMap.contactUs))]),_c('bp-text',{staticClass:"ph-body-small mr-3"},[_vm._v(_vm._s(_vm.translation_data.siteMap.privacyPolicy))]),_c('bp-select-vue',{staticClass:"select-language",attrs:{"choosedValue":_vm.language,"src":"https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_drop.svg","iconClass":"select-language-icon"}},[_c('bp-option-vue',{attrs:{"text":"中文","choosedValue":_vm.language},on:{"click":_vm.changeLanguage}}),_c('bp-option-vue',{attrs:{"text":"English","choosedValue":_vm.language},on:{"click":_vm.changeLanguage}})],1)],1),_c('div',{staticClass:"bottom-contact-right"},[_c('bp-img',{staticClass:"bottom-contact-icon",attrs:{"src":"https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_wechat_copy_2@3x.svg"}}),_c('bp-img',{staticClass:"bottom-contact-icon",attrs:{"src":"https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_linkdin.svg"}})],1)]),_c('div',{staticClass:"bottom-copyright"},[_c('div',{staticClass:"bottom-copyright-left"},[_c('a',{attrs:{"target":"_blank","href":"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502041501"}},[_c('div',{staticClass:"online-filing"},[_c('bp-img',{staticClass:"presented-logo",attrs:{"src":"https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/presented_logo.png"}}),_c('bp-text',{staticClass:"ph-body-xsmall-tertiary"},[_vm._v("京公网安备11010502041501号")])],1)]),_c('bp-text',{staticClass:"ph-body-xsmall-tertiary cursor-pointer",on:{"click":_vm.toMiit}},[_vm._v("京ICP备15015746号-1")])],1),_c('bp-text',{staticClass:"ph-body-xsmall-tertiary"},[_vm._v(" © Copyright "+_vm._s(_vm.nowDate)+" Pharbers Co.,Ltd. ")])],1)]),(_vm.contactForm)?_c('bp-modal-form',{attrs:{"translation_data":_vm.translation_data},on:{"closeModal":_vm.closeModal,"submitClientData":_vm.submitClientData}}):_vm._e()],1)}
var bp_page_bottomvue_type_template_id_39d77038_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/panel/bp-page-bottom.vue?vue&type=template&id=39d77038&scoped=true&

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
      this.returnToTop();
    },

    toMiit() {
      window.open('http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502041501');
    },

    toMax() {
      this.$emit('linkToPage', 'max');
      this.returnToTop();
    },

    toRW() {
      this.$emit('linkToPage', 'rw');
      this.returnToTop();
    },

    toConsulting() {
      this.$emit('linkToPage', 'consulting');
      this.returnToTop();
    },

    toAboutUs() {
      this.$emit('linkToPage', 'about-us');
      this.returnToTop();
    },

    returnToTop() {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
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
  
  var style0 = __webpack_require__("8f8d")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_page_bottom_component = normalizeComponent(
  panel_bp_page_bottomvue_type_script_lang_js_,
  bp_page_bottomvue_type_template_id_39d77038_scoped_true_render,
  bp_page_bottomvue_type_template_id_39d77038_scoped_true_staticRenderFns,
  false,
  bp_page_bottom_injectStyles,
  "39d77038",
  null
  ,true
)

/* harmony default export */ var bp_page_bottom = (bp_page_bottom_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/page/rw.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var rwvue_type_script_lang_js_shadow = ({
  name: "",
  components: {
    bpText: bp_text,
    bpImg: bp_img,
    bpButton: bp_button,
    navTop: bp_nav_top,
    navTopRes: bp_nav_top_response,
    bpPageBottom: bp_page_bottom
  },

  data() {
    return {
      language: '中文',
      // 中英切换
      windowWidth: document.documentElement.clientWidth,
      windowHeight: document.documentElement.clientHeight,
      response: false,
      responseMini: false,
      rwContentImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_detail-page_head_realwr.jpg",
      rwConnectImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_connect_line.svg",
      rwCardAImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_realwr_cover_00.png",
      rwTextBImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_realwr_info_01.png",
      rwAdvantageImg: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_bg_doublehexagon.svg",
      rwCardIcon: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_point.svg",
      translation_basedata: {
        cn: {
          home: "主页",
          realWorldResearch: "真实世界数据研究",
          realWorldResearchEN: "REAL WORLD RESEARCH",
          multiPerspectiveDeepMining: "来自患者信息的多视角深度挖掘",
          findDifferent: "发现不同",
          realWorldTitle: "真实世界数据研究包含丰富的数据源信息",
          realWordDescription: "\n真实世界数据研究的基础包含，结构化数据 (包括脱敏患者及医生信息、用药、科室、临床检验等)和非结构化数据(包括CT检查、磁共振MRI、超声诊断、病理报告、影像资料及病历信息等)，我们通过数据智能技术统一信息标准，为企业提供具有创新性价值的解决方案。现已完成包括高血压等慢性疾病领域、甲亢等内分泌疾病领域、癫痫等神经性疾病领域、抗感染领域、肿瘤领域的相关研究。",
          feature: {
            featureA: {
              title: "样本数据覆盖",
              numberA1: "800+",
              numberA2: "31",
              numberA3: "210",
              textA4: "样本医院",
              textA5: "省份",
              textA6: "地级市"
            },
            featureB: {
              title: "样本数据信息涵盖",
              textB1: "医院基本信息",
              textB2: "患者脱敏信息",
              textB3: "医生信息",
              textB4: "诊断信息",
              textB5: "诊疗信息",
              textB6: "用药信息",
              textB7: "费用信息"
            }
          },
          advantages: {
            advantagesText: "能力与优势",
            advantageA: "统一多元异构的患者信息，高效提取，保障数据时效性。",
            advantageB: "提升真实数据样本量级、数据覆盖广度与信息全面性",
            advantageC: "反应市场客观全景，为企业决策提供全面依据"
          }
        },
        en: {
          home: "Home",
          realWorldResearch: "Real World Research",
          realWorldResearchEN: "REAL WORLD RESEARCH",
          multiPerspectiveDeepMining: "Multi-perspective Deep Mining from Patient Information",
          findDifferent: "Find Differences",
          realWorldTitle: "Real World Research combining information from multiple data source.",
          realWordDescription: "Real World Research covers structured data (including information on desensitized patients and doctors, medications, departments, clinical tests) and unstructured data( including CT examinations, magnetic resonance MRI, ultrasound diagnosis, pathology reports, imaging data, and patients information, etc).\n\nWe unify information standards with data intelligence technology to provide enterprises with innovative solutions. Relevant research has been completed in the fields of chronic diseases such as hypertension, endocrine diseases such as hyperthyroidism, neurological diseases such as epilepsy, anti-infection, and tumor. ",
          feature: {
            featureA: {
              title: "Amounts of sample data",
              numberA1: "800+",
              numberA2: "31",
              numberA3: "210",
              textA4: "Sample Hospital",
              textA5: "Provinces",
              textA6: "Prefecture-level Cities"
            },
            featureB: {
              title: "Type of sample data",
              textB1: "Hospital",
              textB2: "Patient",
              textB3: "Doctor",
              textB4: "Therapy",
              textB5: "Diagnosis",
              textB6: "Drug info",
              textB7: "Expense"
            }
          },
          advantages: {
            advantagesText: "Capabilities and Strengths",
            advantageA: "Unify multi-factor isomerous patient information, extract efficiently, and keep data updating",
            advantageB: "Improve data samples' magnitude, data coverage, and information comprehensiveness",
            advantageC: "Display objective panorama of market and provide comprehensive evidence for corporate decisions"
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
    window.addEventListener('beforeunload', e => {
      window.scrollTo(0, 0);
    });
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
  },

  methods: {
    toHome() {
      this.$emit('linkToPage', 'home');
    }

  }
});
// CONCATENATED MODULE: ./src/components/page/rw.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var page_rwvue_type_script_lang_js_shadow = (rwvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/page/rw.vue?shadow



function rwshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("1076")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var rwshadow_component = normalizeComponent(
  page_rwvue_type_script_lang_js_shadow,
  rwvue_type_template_id_cb55a8e2_scoped_true_shadow_render,
  rwvue_type_template_id_cb55a8e2_scoped_true_shadow_staticRenderFns,
  false,
  rwshadow_injectStyles,
  "cb55a8e2",
  null
  ,true
)

/* harmony default export */ var rwshadow = (rwshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/panel/bp-card-activity.vue?vue&type=template&id=77afe7b9&scoped=true&shadow
var bp_card_activityvue_type_template_id_77afe7b9_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content-active-panel"},[_c('div',{staticClass:"active-img"},[_c('img',{staticClass:"active-img-bgc",attrs:{"src":_vm.bgImg,"alt":""}}),(_vm.logoImg != 'null')?_c('img',{staticClass:"above-data-logo",attrs:{"src":_vm.logoImg,"alt":""}}):_vm._e()]),_c('div',{staticClass:"active-info"},[_c('div',{staticClass:"home-avtive-names"},[_c('span',{staticClass:"active-logo"},[_vm._v(_vm._s(_vm.logoText))]),_c('span',{staticClass:"active-title"},[_vm._v(_vm._s(_vm.title))])]),_c('span',{staticClass:"position-info"},[_vm._v(_vm._s(_vm.date)+" "+_vm._s(_vm.city))])])])}
var bp_card_activityvue_type_template_id_77afe7b9_scoped_true_shadow_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/panel/bp-card-activity.vue?vue&type=template&id=77afe7b9&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/panel/bp-card-activity.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var bp_card_activityvue_type_script_lang_js_shadow = ({
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
// CONCATENATED MODULE: ./src/components/panel/bp-card-activity.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var panel_bp_card_activityvue_type_script_lang_js_shadow = (bp_card_activityvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/panel/bp-card-activity.vue?shadow



function bp_card_activityshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("4440")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_card_activityshadow_component = normalizeComponent(
  panel_bp_card_activityvue_type_script_lang_js_shadow,
  bp_card_activityvue_type_template_id_77afe7b9_scoped_true_shadow_render,
  bp_card_activityvue_type_template_id_77afe7b9_scoped_true_shadow_staticRenderFns,
  false,
  bp_card_activityshadow_injectStyles,
  "77afe7b9",
  null
  ,true
)

/* harmony default export */ var bp_card_activityshadow = (bp_card_activityshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/panel/bp-icon-line-response.vue?vue&type=template&id=5b68e1cc&scoped=true&shadow
var bp_icon_line_responsevue_type_template_id_5b68e1cc_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"case-icon-line"},_vm._l((_vm.imgArr),function(item){return _c('bpImg',{key:item,staticClass:"case-icon",attrs:{"src":item}})}),1)])}
var bp_icon_line_responsevue_type_template_id_5b68e1cc_scoped_true_shadow_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/panel/bp-icon-line-response.vue?vue&type=template&id=5b68e1cc&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/panel/bp-icon-line-response.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//

/* harmony default export */ var bp_icon_line_responsevue_type_script_lang_js_shadow = ({
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
// CONCATENATED MODULE: ./src/components/panel/bp-icon-line-response.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var panel_bp_icon_line_responsevue_type_script_lang_js_shadow = (bp_icon_line_responsevue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/panel/bp-icon-line-response.vue?shadow



function bp_icon_line_responseshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("40f5")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_icon_line_responseshadow_component = normalizeComponent(
  panel_bp_icon_line_responsevue_type_script_lang_js_shadow,
  bp_icon_line_responsevue_type_template_id_5b68e1cc_scoped_true_shadow_render,
  bp_icon_line_responsevue_type_template_id_5b68e1cc_scoped_true_shadow_staticRenderFns,
  false,
  bp_icon_line_responseshadow_injectStyles,
  "5b68e1cc",
  null
  ,true
)

/* harmony default export */ var bp_icon_line_responseshadow = (bp_icon_line_responseshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/panel/bp-icon-line.vue?vue&type=template&id=4852e6c8&scoped=true&shadow
var bp_icon_linevue_type_template_id_4852e6c8_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"case-icon-line"},_vm._l((_vm.imgArr1),function(item){return _c('bpImg',{key:item,staticClass:"case-icon",attrs:{"src":item}})}),1),_c('div',{staticClass:"case-icon-line"},_vm._l((_vm.imgArr2),function(item){return _c('bpImg',{key:item,staticClass:"case-icon",attrs:{"src":item}})}),1),_c('div',{staticClass:"case-icon-line case-icon-line-three"},_vm._l((_vm.imgArr3),function(item){return _c('bpImg',{key:item,staticClass:"case-icon",attrs:{"src":item}})}),1),_c('div',{staticClass:"case-icon-line case-icon-line-three"},_vm._l((_vm.imgArr4),function(item){return _c('bpImg',{key:item,staticClass:"case-icon",attrs:{"src":item}})}),1),_c('div',{staticClass:"case-icon-line case-icon-line-three"},_vm._l((_vm.imgArr5),function(item){return _c('bpImg',{key:item,staticClass:"case-icon",attrs:{"src":item}})}),1)])}
var bp_icon_linevue_type_template_id_4852e6c8_scoped_true_shadow_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/panel/bp-icon-line.vue?vue&type=template&id=4852e6c8&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/panel/bp-icon-line.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var bp_icon_linevue_type_script_lang_js_shadow = ({
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
// CONCATENATED MODULE: ./src/components/panel/bp-icon-line.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var panel_bp_icon_linevue_type_script_lang_js_shadow = (bp_icon_linevue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/panel/bp-icon-line.vue?shadow



function bp_icon_lineshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("68f2")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_icon_lineshadow_component = normalizeComponent(
  panel_bp_icon_linevue_type_script_lang_js_shadow,
  bp_icon_linevue_type_template_id_4852e6c8_scoped_true_shadow_render,
  bp_icon_linevue_type_template_id_4852e6c8_scoped_true_shadow_staticRenderFns,
  false,
  bp_icon_lineshadow_injectStyles,
  "4852e6c8",
  null
  ,true
)

/* harmony default export */ var bp_icon_lineshadow = (bp_icon_lineshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/panel/bp-modal-form.vue?vue&type=template&id=4e2b10b6&scoped=true&shadow
var bp_modal_formvue_type_template_id_4e2b10b6_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bp-modal-form"},[(_vm.successSubmit)?_c('div',{staticClass:"bp-modal-submit-success"},[_c('div',{staticClass:"close-button-container"},[_c('div',{staticClass:"close-button",on:{"click":_vm.closeModal}})]),_c('div',{staticClass:"bp-modal-submit-content"},[_c('img',{staticClass:"submit-success-img",attrs:{"src":"https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_success.svg","alt":"success"}}),_c('bp-text',{staticClass:"submit-success-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.submitSuccess))]),_c('bp-text',{staticClass:"submit-feedback-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.submitFeedback))])],1),_c('div',{staticClass:"form-submit-button-container",on:{"click":_vm.closeModal}},[_c('bp-button',{attrs:{"type":"official-yellow-line-compact","density":"compact","text":_vm.translation_data.modalForm.ok}}),_c('img',{staticClass:"button-go",attrs:{"src":"https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_go.svg","alt":"success"}})],1)]):_c('div',{staticClass:"bp-modal-form-content"},[_c('div',{staticClass:"official-width-default mb-5"},[_c('bp-text',{staticClass:"contact-us-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.contactUs))]),_c('div',{staticClass:"close-button",on:{"click":_vm.closeModal}})],1),_c('div',{staticClass:"form-input-container"},[_c('bp-text',{staticClass:"modalform-name-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.name))]),_c('bp-input',{attrs:{"placeholder":"","states":"official-form"},on:{"input":function($event){return _vm.inputEvent($event,'name')}}}),(_vm.nameBlank)?_c('bp-text',{staticClass:"form-warning-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.nameBlank))]):_vm._e()],1),_c('div',{staticClass:"official-width-default"},[_c('div',{staticClass:"form-input-container"},[_c('bp-text',{staticClass:"modalform-name-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.company))]),_c('bp-input',{attrs:{"placeholder":"","states":"official-form"},on:{"input":function($event){return _vm.inputEvent($event,'company')}}}),(_vm.companyBlank)?_c('bp-text',{staticClass:"form-warning-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.companyBlank))]):_vm._e()],1),_c('div',{staticClass:"form-input-container"},[_c('bp-text',{staticClass:"modalform-name-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.department))]),_c('bp-input',{attrs:{"placeholder":"","states":"official-form"},on:{"input":function($event){return _vm.inputEvent($event,'department')}}})],1)]),_c('div',{staticClass:"official-width-default"},[_c('div',{staticClass:"form-input-container"},[_c('bp-text',{staticClass:"modalform-name-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.position))]),_c('bp-input',{attrs:{"placeholder":"","states":"official-form"},on:{"input":function($event){return _vm.inputEvent($event,'position')}}})],1),_c('div',{staticClass:"form-input-container"},[_c('bp-text',{staticClass:"modalform-name-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.email))]),_c('bp-input',{attrs:{"placeholder":"","states":"official-form"},on:{"input":function($event){return _vm.inputEvent($event,'email')}}}),(_vm.emailBlank)?_c('bp-text',{staticClass:"form-warning-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.emailBlank))]):(_vm.emailWaring)?_c('bp-text',{staticClass:"form-warning-text"},[_vm._v(_vm._s(_vm.translation_data.modalForm.emailWrong))]):_vm._e()],1)]),_c('bp-text',{staticClass:"ph-H-small mb-2"},[_vm._v(_vm._s(_vm.translation_data.modalForm.intention))]),_c('div',{staticClass:"intention-container mb-2"},[_c('bp-text',{ref:"tag11",class:[_vm.tag1 ? 'official-form-tag-active' : 'official-form-tag', 'ph-body-small', 'mr-2'],on:{"click":function($event){return _vm.toggleTagClass($event, 'tag1')}}},[_vm._v(_vm._s(_vm.translation_data.MAX.max))]),_c('bp-text',{class:[_vm.tag2 ? 'official-form-tag-active' : 'official-form-tag', 'ph-body-small', 'mr-2'],on:{"click":function($event){return _vm.toggleTagClass($event, 'tag2')}}},[_vm._v(_vm._s(_vm.translation_data.consulting.consult))]),_c('bp-text',{class:[_vm.tag3 ? 'official-form-tag-active' : 'official-form-tag', 'ph-body-small', 'mr-2'],on:{"click":function($event){return _vm.toggleTagClass($event, 'tag3')}}},[_vm._v(_vm._s(_vm.translation_data.modalForm.dataService))])],1),_c('bp-textarea',{attrs:{"maxlength":140},on:{"input":_vm.inputTextarea}}),_c('div',{staticClass:"form-submit-button-container",on:{"click":_vm.submit}},[_c('bp-button',{attrs:{"type":"official-yellow-line-compact","density":"compact","text":_vm.translation_data.modalForm.submit}}),_c('img',{staticClass:"button-go",attrs:{"src":"https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_go.svg","alt":"success"}})],1)],1)])}
var bp_modal_formvue_type_template_id_4e2b10b6_scoped_true_shadow_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/panel/bp-modal-form.vue?vue&type=template&id=4e2b10b6&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/panel/bp-modal-form.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var bp_modal_formvue_type_script_lang_js_shadow = ({
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
// CONCATENATED MODULE: ./src/components/panel/bp-modal-form.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var panel_bp_modal_formvue_type_script_lang_js_shadow = (bp_modal_formvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/panel/bp-modal-form.vue?shadow



function bp_modal_formshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("59a2")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_modal_formshadow_component = normalizeComponent(
  panel_bp_modal_formvue_type_script_lang_js_shadow,
  bp_modal_formvue_type_template_id_4e2b10b6_scoped_true_shadow_render,
  bp_modal_formvue_type_template_id_4e2b10b6_scoped_true_shadow_staticRenderFns,
  false,
  bp_modal_formshadow_injectStyles,
  "4e2b10b6",
  null
  ,true
)

/* harmony default export */ var bp_modal_formshadow = (bp_modal_formshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/panel/bp-nav-top-response.vue?vue&type=template&id=45841548&scoped=true&shadow
var bp_nav_top_responsevue_type_template_id_45841548_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue_container fixed-nav",class:[_vm.inverse ? 'navInverse' : 'nav']},[_c('div',{staticClass:"nav-border",class:[
            {borderNone: _vm.borderNone},
            _vm.inverse ? 'bordernavInverse' : 'bordernav']},[_c('img',{staticClass:"bp-img fixed-nav-icon cursor-pointer",attrs:{"src":_vm.inverse ? _vm.imgSrcLight : _vm.imgSrc},on:{"click":_vm.toHome}}),_c('div',{class:_vm.inverse ? 'response-icon-menu-light' : 'response-icon-menu',on:{"click":_vm.clickMenu}}),(_vm.menu)?_c('div',{staticClass:"meau-shade"}):_vm._e(),(_vm.menu)?_c('div',{staticClass:"response-menu"},[_vm._l((_vm.translation_data.options_data),function(item){return _c('div',{key:item.text,staticClass:"responsee-menu-item",on:{"click":function($event){return _vm.runClickEvent(item.click_event)}}},[_c('span',{staticClass:"ph-H-Small"},[_vm._v(_vm._s(item.text))]),(item.spanText)?_c('span',{staticClass:"ph-body-xsmall"},[_vm._v(_vm._s(item.spanText))]):_vm._e()])}),_c('bpButton',{staticClass:"contact-us",attrs:{"text":_vm.translation_data.contactUs},on:{"click":_vm.contactUs}}),(_vm.isLogin)?_c('div',{staticClass:"button-response-group"},[_c('bp-text',{staticClass:"ph-H-Small button-response-general",on:{"click":_vm.toGeneral}},[_vm._v(_vm._s(_vm.translation_data.general))]),_c('bp-text',{staticClass:"ph-H-Small button-response-logout",on:{"click":_vm.logout}},[_vm._v(_vm._s(_vm.translation_data.logout))])],1):_c('bpButton',{staticClass:"login",attrs:{"text":_vm.translation_data.login},on:{"click":_vm.toGeneral}},[_vm._v(_vm._s(_vm.translation_data.logout))])],2):_vm._e()]),(_vm.contactForm)?_c('bp-modal-form',{attrs:{"translation_data":_vm.translation_data},on:{"closeModal":_vm.closeModal,"submitClientData":_vm.submitClientData}}):_vm._e()],1)}
var bp_nav_top_responsevue_type_template_id_45841548_scoped_true_shadow_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/panel/bp-nav-top-response.vue?vue&type=template&id=45841548&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/panel/bp-nav-top-response.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var bp_nav_top_responsevue_type_script_lang_js_shadow = ({
  created() {
    let curLang = window.localStorage.getItem('lang');
    this.language = curLang;
  },

  mounted() {
    const that = this;
    this.inverse = this.inversebase;

    window.onscroll = () => {
      let top = document.scrollingElement.scrollTop; //触发滚动条

      if (top == 0) {
        //回到页面顶部
        this.borderNone = false;

        if (that.inversebase) {
          that.inverse = true;
        }
      } else {
        //不在页面顶部
        this.borderNone = true;
        that.inverse = false;
      }
    };

    window.addEventListener('setItemEvent', function (e) {
      that.language = e.newValue;
    });
  },

  components: {
    bpModalForm: bp_modal_form,
    bpButton: bp_button,
    bpText: bp_text
  },
  props: {
    inversebase: {
      type: Boolean,
      default: false
    },
    isLogin: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      imgSrc: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_logo_ph_theme.svg",
      imgSrcLight: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_logo_ph_light.svg",
      menu: false,
      borderNone: false,
      inverse: false,
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
          general: "法伯数据平台",
          logout: "退出登录",
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
              this.$emit('linkToPage', 'max');
            }
          }, {
            text: "真实数据研究",
            spanText: "来自患者信息的多视角深度挖掘",
            click_event: function () {
              this.$emit('linkToPage', 'rw');
            }
          }, {
            text: "循证咨询",
            spanText: "多层面精准预测，营销资源配置与优化",
            click_event: function () {
              this.$emit('linkToPage', 'consulting');
            }
          }, {
            text: "关于我们",
            click_event: function () {
              this.$emit('linkToPage', 'about-us');
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
          general: "General",
          logout: "Logout",
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
              this.$emit('linkToPage', 'max');
            }
          }, {
            text: "Real World Research",
            spanText: "Multi-perspective Deep Mining from Patient Information",
            click_event: function () {
              this.$emit('linkToPage', 'rw');
            }
          }, {
            text: "Evidence-based Consulting",
            spanText: "Multi-level Accurate Prediction Allocating and Optimizing Marketing Resource",
            click_event: function () {
              this.$emit('linkToPage', 'consulting');
            }
          }, {
            text: "COMPANY",
            click_event: function () {
              this.$emit('linkToPage', 'about-us');
            }
          }]
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

    toHome() {
      this.$emit('linkToPage', 'home');
      this.returnToTop();
    },

    toGeneral() {
      window.location.href = "http://general.pharbers.com";
    },

    logout() {
      this.$emit('logout');
    },

    runClickEvent(click_event) {
      click_event.call(this);
      this.menu = false;
      this.returnToTop();
    },

    returnToTop() {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }

  }
});
// CONCATENATED MODULE: ./src/components/panel/bp-nav-top-response.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var panel_bp_nav_top_responsevue_type_script_lang_js_shadow = (bp_nav_top_responsevue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/panel/bp-nav-top-response.vue?shadow



function bp_nav_top_responseshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("b6ec")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_nav_top_responseshadow_component = normalizeComponent(
  panel_bp_nav_top_responsevue_type_script_lang_js_shadow,
  bp_nav_top_responsevue_type_template_id_45841548_scoped_true_shadow_render,
  bp_nav_top_responsevue_type_template_id_45841548_scoped_true_shadow_staticRenderFns,
  false,
  bp_nav_top_responseshadow_injectStyles,
  "45841548",
  null
  ,true
)

/* harmony default export */ var bp_nav_top_responseshadow = (bp_nav_top_responseshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/panel/bp-nav-top.vue?vue&type=template&id=2ef75dd4&scoped=true&shadow
var bp_nav_topvue_type_template_id_2ef75dd4_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fixed-nav",class:[_vm.inverse ? 'navInverse' : 'nav']},[_c('div',{staticClass:"nav-border",class:[
            {borderNone: _vm.borderNone},
            _vm.inverse ? 'bordernavInverse' : 'bordernav']},[_c('img',{staticClass:"bp-img fixed-nav-icon cursor-pointer",attrs:{"src":_vm.inverse ? _vm.imgSrcLight : _vm.imgSrc},on:{"click":_vm.toHome}}),_c('div',{staticClass:"selectMenu",class:{'inverseColor': _vm.inverse}},[_c('bpSelect',{attrs:{"disSelected":true,"src":_vm.inverse ? _vm.selectSrcLight : _vm.selectSrc,"choosed_value":_vm.translation_data.choosed_value,"options_data":_vm.translation_data.options_data},on:{"linkToPage":_vm.linkToPage}}),_c('span',{staticClass:"bp-text",on:{"click":_vm.toAboutUs}},[_vm._v(_vm._s(_vm.translation_data.aboutUs))])],1),_c('div',{staticClass:"navButton",class:{'inverseColor': _vm.inverse}},[_c('bpButton',{staticClass:"concact",attrs:{"text":_vm.translation_data.contactUs},on:{"click":_vm.contactUs}}),(_vm.isLogin)?_c('bp-select-vue',{staticClass:"home-user-select",attrs:{"choosedValue":"","src":"https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_home_user.svg","iconClass":""}},[_c('bp-option-vue',{attrs:{"text":_vm.translation_data.general},on:{"click":_vm.toGeneral}}),_c('bp-option-vue',{attrs:{"text":_vm.translation_data.logout},on:{"click":_vm.logout}})],1):_c('bpButton',{staticClass:"login",attrs:{"text":_vm.translation_data.login},on:{"click":_vm.toGeneral}})],1)]),(_vm.contactForm)?_c('bp-modal-form',{attrs:{"translation_data":_vm.translation_data},on:{"closeModal":_vm.closeModal,"submitClientData":_vm.submitClientData}}):_vm._e()],1)}
var bp_nav_topvue_type_template_id_2ef75dd4_scoped_true_shadow_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/panel/bp-nav-top.vue?vue&type=template&id=2ef75dd4&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/panel/bp-nav-top.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var bp_nav_topvue_type_script_lang_js_shadow = ({
  created() {
    let curLang = window.localStorage.getItem('lang');
    this.language = curLang;
  },

  mounted() {
    const that = this;
    this.inverse = this.inversebase;

    window.onscroll = () => {
      let top = document.scrollingElement.scrollTop; //触发滚动条

      if (top == 0) {
        //回到页面顶部
        that.borderNone = false;

        if (that.inversebase) {
          that.inverse = true;
        }
      } else {
        //不在页面顶部
        that.borderNone = true;
        that.inverse = false;
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
    inversebase: {
      type: Boolean,
      default: false
    },
    isLogin: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      language: '中文',
      borderNone: false,
      contactForm: false,
      inverse: false,
      imgSrc: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_logo_ph_theme.svg",
      imgSrcLight: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_logo_ph_light.svg",
      selectSrc: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_drop.svg",
      selectSrcLight: "https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_drop_light.svg",
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
          general: "法伯数据平台",
          logout: "退出登录",
          options_data: [{
            text: "MAX",
            spanText: "全息市场监测利器",
            click_event: function () {
              this.$emit('linkToPage', 'max');
            }
          }, {
            text: "真实数据研究",
            spanText: "来自患者信息的多视角深度挖掘",
            click_event: function () {
              this.$emit('linkToPage', 'rw');
            }
          }, {
            text: "循证咨询",
            spanText: "多层面精准预测，营销资源配置与优化",
            click_event: function () {
              this.$emit('linkToPage', 'consulting');
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
          general: "General",
          logout: "Logout",
          options_data: [{
            text: "MAX©",
            spanText: "Holographic Market Monitoring Tool",
            click_event: function () {
              this.$emit('linkToPage', 'max');
            }
          }, {
            text: "Real World Research",
            spanText: "Multi-perspective Deep Mining from Patient Information",
            click_event: function () {
              this.$emit('linkToPage', 'rw');
            }
          }, {
            text: "Evidence-based Consulting",
            spanText: "Multi-level Accurate Prediction Allocating and Optimizing Marketing Resource",
            click_event: function () {
              this.$emit('linkToPage', 'consulting');
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
      this.$emit('linkToPage', 'about-us');
      this.returnToTop();
    },

    toHome() {
      this.$emit('linkToPage', 'home');
    },

    linkToPage(value) {
      this.$emit('linkToPage', value);
      this.returnToTop();
    },

    toGeneral() {
      window.location.href = "http://general.pharbers.com";
    },

    logout() {
      this.$emit('logout');
    },

    returnToTop() {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }

  }
});
// CONCATENATED MODULE: ./src/components/panel/bp-nav-top.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var panel_bp_nav_topvue_type_script_lang_js_shadow = (bp_nav_topvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/panel/bp-nav-top.vue?shadow



function bp_nav_topshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("bc45")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_nav_topshadow_component = normalizeComponent(
  panel_bp_nav_topvue_type_script_lang_js_shadow,
  bp_nav_topvue_type_template_id_2ef75dd4_scoped_true_shadow_render,
  bp_nav_topvue_type_template_id_2ef75dd4_scoped_true_shadow_staticRenderFns,
  false,
  bp_nav_topshadow_injectStyles,
  "2ef75dd4",
  null
  ,true
)

/* harmony default export */ var bp_nav_topshadow = (bp_nav_topshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"42faab45-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/panel/bp-page-bottom.vue?vue&type=template&id=ed938026&scoped=true&shadow
var bp_page_bottomvue_type_template_id_ed938026_scoped_true_shadow_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page-bottom-part"},[_c('div',{staticClass:"contact-container"},[_c('div',{staticClass:"contact-content"},[_c('div',{staticClass:"contact-slogan-part"},[_c('bp-text',{staticClass:"ph-body-medium response-text-center"},[_vm._v(_vm._s(_vm.translation_data.contactUs.leadingForHealthcareIndustry))]),_c('bp-text',{staticClass:"ph-H-Large_2 response-text-center"},[_vm._v(_vm._s(_vm.translation_data.contactUs.provideSolution))])],1),_c('bp-button',{staticClass:"contact-us-button",attrs:{"type":"standard","text":_vm.translation_data.contactUs.contactUs},on:{"click":_vm.contactUs}})],1)]),_c('div',{staticClass:"page-bottom"},[_c('div',{staticClass:"bottom-pharbers"},[_c('bp-img',{staticClass:"bottom-pharbers-icon",attrs:{"src":"https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/img_logo_ph_gray.svg"}}),_c('div',{staticClass:"bottom-row-container"},[_c('div',{staticClass:"bottom-product-container"},[_c('div',{staticClass:"bottom-list-a"},[_c('bp-text',{staticClass:"bottom-pharbers-title"},[_vm._v(_vm._s(_vm.translation_data.siteMap.productAndService))]),_c('bp-text',{staticClass:"ph-body-small mb-2 cursor-pointer",on:{"click":_vm.toMax}},[_vm._v(_vm._s(_vm.translation_data.siteMap.max))]),_c('bp-text',{staticClass:"ph-body-small mb-2 cursor-pointer",on:{"click":_vm.toRW}},[_vm._v(_vm._s(_vm.translation_data.siteMap.realWorldSearch))]),_c('bp-text',{staticClass:"ph-body-small cursor-pointer",on:{"click":_vm.toConsulting}},[_vm._v(_vm._s(_vm.translation_data.siteMap.consulting))])],1),_c('div',{staticClass:"bottom-list-b"},[_c('bp-text',{staticClass:"bottom-pharbers-title"},[_vm._v(_vm._s(_vm.translation_data.siteMap.company))]),_c('bp-text',{staticClass:"ph-body-small mb-2 cursor-pointer",on:{"click":_vm.toAboutUs}},[_vm._v(_vm._s(_vm.translation_data.siteMap.aboutPharbers))])],1)]),_c('div',{staticClass:"bottom-address"},[_c('div',{staticClass:"address-bj-part"},[_c('bp-text',{staticClass:"ph-body-xsmall-tertiary text-right"},[_vm._v(_vm._s(_vm.translation_data.siteMap.companyPhoneBJ))]),_c('bp-text',{staticClass:"ph-body-xsmall-tertiary text-right"},[_vm._v(_vm._s(_vm.translation_data.siteMap.companyPositonBJ))]),_c('bp-text',{staticClass:"ph-body-xsmall-tertiary text-right"},[_vm._v(_vm._s(_vm.translation_data.siteMap.companyRoomBJ))])],1),_c('div',{staticClass:"address-sh-part"},[_c('bp-text',{staticClass:"ph-body-xsmall-tertiary text-right"},[_vm._v(_vm._s(_vm.translation_data.siteMap.companyPhoneSH))]),_c('bp-text',{staticClass:"ph-body-xsmall-tertiary text-right"},[_vm._v(_vm._s(_vm.translation_data.siteMap.companyPositonSH))]),_c('bp-text',{staticClass:"ph-body-xsmall-tertiary text-right"},[_vm._v(_vm._s(_vm.translation_data.siteMap.companyRoomSH))])],1)])])],1),_c('div',{staticClass:"bottom-contact"},[_c('div',{staticClass:"bottom-contact-left"},[_c('bp-text',{staticClass:"ph-body-small mr-3"},[_vm._v(_vm._s(_vm.translation_data.siteMap.contactUs))]),_c('bp-text',{staticClass:"ph-body-small mr-3"},[_vm._v(_vm._s(_vm.translation_data.siteMap.privacyPolicy))]),_c('bp-select-vue',{staticClass:"select-language",attrs:{"choosedValue":_vm.language,"src":"https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_drop.svg","iconClass":"select-language-icon"}},[_c('bp-option-vue',{attrs:{"text":"中文","choosedValue":_vm.language},on:{"click":_vm.changeLanguage}}),_c('bp-option-vue',{attrs:{"text":"English","choosedValue":_vm.language},on:{"click":_vm.changeLanguage}})],1)],1),_c('div',{staticClass:"bottom-contact-right"},[_c('bp-img',{staticClass:"bottom-contact-icon",attrs:{"src":"https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_wechat_copy_2@3x.svg"}}),_c('bp-img',{staticClass:"bottom-contact-icon",attrs:{"src":"https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/icon_linkdin.svg"}})],1)]),_c('div',{staticClass:"bottom-copyright"},[_c('div',{staticClass:"bottom-copyright-left"},[_c('a',{attrs:{"target":"_blank","href":"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502041501"}},[_c('div',{staticClass:"online-filing"},[_c('bp-img',{staticClass:"presented-logo",attrs:{"src":"https://s3.cn-northwest-1.amazonaws.com.cn/www.pharbers.com/public/presented_logo.png"}}),_c('bp-text',{staticClass:"ph-body-xsmall-tertiary"},[_vm._v("京公网安备11010502041501号")])],1)]),_c('bp-text',{staticClass:"ph-body-xsmall-tertiary cursor-pointer",on:{"click":_vm.toMiit}},[_vm._v("京ICP备15015746号-1")])],1),_c('bp-text',{staticClass:"ph-body-xsmall-tertiary"},[_vm._v(" © Copyright "+_vm._s(_vm.nowDate)+" Pharbers Co.,Ltd. ")])],1)]),(_vm.contactForm)?_c('bp-modal-form',{attrs:{"translation_data":_vm.translation_data},on:{"closeModal":_vm.closeModal,"submitClientData":_vm.submitClientData}}):_vm._e()],1)}
var bp_page_bottomvue_type_template_id_ed938026_scoped_true_shadow_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/panel/bp-page-bottom.vue?vue&type=template&id=ed938026&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-svg-inline-loader/src!./src/components/panel/bp-page-bottom.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var bp_page_bottomvue_type_script_lang_js_shadow = ({
  components: {
    bpText: bp_text,
    bpButton: bp_button,
    bpModalForm: bp_modal_form,
    bpImg: bp_img,
    bpSelectVue: bp_select_vue,
    bpOptionVue: bp_option_vue
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
      this.returnToTop();
    },

    toMiit() {
      window.open('http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502041501');
    },

    toMax() {
      this.$emit('linkToPage', 'max');
      this.returnToTop();
    },

    toRW() {
      this.$emit('linkToPage', 'rw');
      this.returnToTop();
    },

    toConsulting() {
      this.$emit('linkToPage', 'consulting');
      this.returnToTop();
    },

    toAboutUs() {
      this.$emit('linkToPage', 'about-us');
      this.returnToTop();
    },

    returnToTop() {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
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
// CONCATENATED MODULE: ./src/components/panel/bp-page-bottom.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var panel_bp_page_bottomvue_type_script_lang_js_shadow = (bp_page_bottomvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/panel/bp-page-bottom.vue?shadow



function bp_page_bottomshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("6056")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var bp_page_bottomshadow_component = normalizeComponent(
  panel_bp_page_bottomvue_type_script_lang_js_shadow,
  bp_page_bottomvue_type_template_id_ed938026_scoped_true_shadow_render,
  bp_page_bottomvue_type_template_id_ed938026_scoped_true_shadow_staticRenderFns,
  false,
  bp_page_bottomshadow_injectStyles,
  "ed938026",
  null
  ,true
)

/* harmony default export */ var bp_page_bottomshadow = (bp_page_bottomshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-wc.js




// runtime shared by every component chunk





window.customElements.define('pharbers-bp-badge', vue_wc_wrapper(external_Vue_default.a, bp_badgeshadow))


window.customElements.define('pharbers-bp-button-group', vue_wc_wrapper(external_Vue_default.a, bp_button_groupshadow))


window.customElements.define('pharbers-bp-button-item', vue_wc_wrapper(external_Vue_default.a, bp_button_itemshadow))


window.customElements.define('pharbers-bp-button', vue_wc_wrapper(external_Vue_default.a, bp_buttonshadow))


window.customElements.define('pharbers-bp-carousel-item', vue_wc_wrapper(external_Vue_default.a, bp_carousel_itemshadow))


window.customElements.define('pharbers-bp-carousel-unit', vue_wc_wrapper(external_Vue_default.a, bp_carousel_unitshadow))


window.customElements.define('pharbers-bp-carousel', vue_wc_wrapper(external_Vue_default.a, bp_carouselshadow))


window.customElements.define('pharbers-bp-img', vue_wc_wrapper(external_Vue_default.a, bp_imgshadow))


window.customElements.define('pharbers-bp-input', vue_wc_wrapper(external_Vue_default.a, bp_inputshadow))


window.customElements.define('pharbers-bp-label', vue_wc_wrapper(external_Vue_default.a, bp_labelshadow))


window.customElements.define('pharbers-bp-link', vue_wc_wrapper(external_Vue_default.a, bp_linkshadow))


window.customElements.define('pharbers-bp-menu-item', vue_wc_wrapper(external_Vue_default.a, bp_menu_itemshadow))


window.customElements.define('pharbers-bp-menu', vue_wc_wrapper(external_Vue_default.a, bp_menushadow))


window.customElements.define('pharbers-bp-option-vue', vue_wc_wrapper(external_Vue_default.a, bp_option_vueshadow))


window.customElements.define('pharbers-bp-option', vue_wc_wrapper(external_Vue_default.a, bp_optionshadow))


window.customElements.define('pharbers-bp-select-vue', vue_wc_wrapper(external_Vue_default.a, bp_select_vueshadow))


window.customElements.define('pharbers-bp-select', vue_wc_wrapper(external_Vue_default.a, bp_selectshadow))


window.customElements.define('pharbers-bp-status', vue_wc_wrapper(external_Vue_default.a, bp_statusshadow))


window.customElements.define('pharbers-bp-sub-menu', vue_wc_wrapper(external_Vue_default.a, bp_sub_menushadow))


window.customElements.define('pharbers-bp-tag', vue_wc_wrapper(external_Vue_default.a, bp_tagshadow))


window.customElements.define('pharbers-bp-text', vue_wc_wrapper(external_Vue_default.a, bp_textshadow))


window.customElements.define('pharbers-bp-textarea', vue_wc_wrapper(external_Vue_default.a, bp_textareashadow))


window.customElements.define('pharbers-about-us', vue_wc_wrapper(external_Vue_default.a, about_usshadow))


window.customElements.define('pharbers-consulting', vue_wc_wrapper(external_Vue_default.a, consultingshadow))


window.customElements.define('pharbers-home', vue_wc_wrapper(external_Vue_default.a, homeshadow))


window.customElements.define('pharbers-max', vue_wc_wrapper(external_Vue_default.a, maxshadow))


window.customElements.define('pharbers-rw', vue_wc_wrapper(external_Vue_default.a, rwshadow))


window.customElements.define('pharbers-bp-card-activity', vue_wc_wrapper(external_Vue_default.a, bp_card_activityshadow))


window.customElements.define('pharbers-bp-icon-line-response', vue_wc_wrapper(external_Vue_default.a, bp_icon_line_responseshadow))


window.customElements.define('pharbers-bp-icon-line', vue_wc_wrapper(external_Vue_default.a, bp_icon_lineshadow))


window.customElements.define('pharbers-bp-modal-form', vue_wc_wrapper(external_Vue_default.a, bp_modal_formshadow))


window.customElements.define('pharbers-bp-nav-top-response', vue_wc_wrapper(external_Vue_default.a, bp_nav_top_responseshadow))


window.customElements.define('pharbers-bp-nav-top', vue_wc_wrapper(external_Vue_default.a, bp_nav_topshadow))


window.customElements.define('pharbers-bp-page-bottom', vue_wc_wrapper(external_Vue_default.a, bp_page_bottomshadow))

/***/ }),

/***/ "5ab1":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("7e85");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("27b9b46c", content, shadowRoot)
};

/***/ }),

/***/ "5ab14":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_select_vue_vue_vue_type_style_index_0_id_7fca35cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2438");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_select_vue_vue_vue_type_style_index_0_id_7fca35cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_select_vue_vue_vue_type_style_index_0_id_7fca35cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_select_vue_vue_vue_type_style_index_0_id_7fca35cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_select_vue_vue_vue_type_style_index_0_id_7fca35cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "604a":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-4852e6c8]{letter-spacing:.4px;line-height:1.6;box-sizing:border-box}.case-icon-line[data-v-4852e6c8]{flex-wrap:wrap;height:auto;width:100%;background:0 0;display:flex;flex-direction:row;justify-content:space-between;margin-bottom:40px}.case-icon-line .case-icon[data-v-4852e6c8]{height:49px;width:200px;margin-bottom:32px;background:0 0}.case-icon-line-three[data-v-4852e6c8]{padding:0 100px}@media screen and (max-width:992px) and (min-width:769px){.case-icon-line-three[data-v-4852e6c8]{padding:0 8px!important}.case-icon[data-v-4852e6c8]{width:26%!important}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "6056":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_page_bottom_vue_vue_type_style_index_0_id_ed938026_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("de02");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_page_bottom_vue_vue_type_style_index_0_id_ed938026_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_page_bottom_vue_vue_type_style_index_0_id_ed938026_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_page_bottom_vue_vue_type_style_index_0_id_ed938026_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_page_bottom_vue_vue_type_style_index_0_id_ed938026_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "60b1":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".bp-link[data-v-5b534182]{height:14px;width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background:transform;font-size:14px;text-align:center;line-height:14px;cursor:pointer;outline:none;border:none;display:inline-block}.link-disabled[data-v-5b534182]{color:rgba(9,30,66,.31);cursor:not-allowed}.link-default[data-v-5b534182]{color:rgba(9,30,66,.66)}.link-default[data-v-5b534182]:hover{color:rgba(9,30,66,.42)}.link-default[data-v-5b534182]:active{color:rgba(9,30,66,.71)}.link-primary[data-v-5b534182]{color:#7163c5}.link-primary[data-v-5b534182]:hover{color:#9084d2}.link-primary[data-v-5b534182]:active{color:#5342b3}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "64c3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_card_activity_vue_vue_type_style_index_0_id_51402daa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1960");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_card_activity_vue_vue_type_style_index_0_id_51402daa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_card_activity_vue_vue_type_style_index_0_id_51402daa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_card_activity_vue_vue_type_style_index_0_id_51402daa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_card_activity_vue_vue_type_style_index_0_id_51402daa_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "64d7":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".display-large{font-size:29px}.display-large,.title{color:rgba(9,30,66,.95);font-weight:500}.title{font-size:24px}.heading-learge{font-size:20px}.heading-learge,.heading-medium{color:rgba(9,30,66,.95);font-weight:500}.heading-medium{font-size:16px}.heading-small{color:rgba(9,30,66,.95);font-size:14px;font-weight:500}.heading-xsmall{color:rgba(9,30,66,.6);font-size:12px;font-weight:500}.body-primary{color:rgba(9,30,66,.95);font-size:14px;font-weight:500}.body-secondary{font-size:14px}.body-secondary,.body-tertiary{color:rgba(9,30,66,.6);font-weight:400}.body-tertiary{font-size:12px}.field_value{color:#000}.display-large-inverse{color:#fff;font-size:29px;font-weight:500}.title-inverse{color:#fff;font-size:24px;font-weight:500}.heading-large-inverse{color:#fff;font-size:20px;font-weight:500}.heading-medium-inverse{color:#fff;font-size:16px;font-weight:500}.heading-small-inverse{color:#fff;font-size:14px;font-weight:500}.heading-xsmall-inverse{color:hsla(0,0%,100%,.95);font-size:12px;font-weight:500}.body-primary-inverse{color:hsla(0,0%,100%,.95);font-size:14px;font-weight:400}.body-secondary-inverse{color:hsla(0,0%,100%,.65);font-size:14px;font-weight:400}.body-tertiary-inverse{color:hsla(0,0%,100%,.45);font-size:12px;font-weight:400}*{box-sizing:border-box}body{margin:0}a{font-size:14px;color:#7163c5;line-height:32px;text-decoration:none;text-align:center}button{outline:none}.placeholder{color:rgba(9,30,66,.48)}.field_value,.placeholder{font-size:14px;font-weight:400}.field_value{color:rgba(9,30,66,.77)}button:focus{outline:none!important}button.button-primary{background:#7163c5;color:#fff}.button-primary:hover{background:#9084d2}.button-primary:active{background:#5342b3}.button-primary .button-icon-color path{fill:#fff}.button-primary:disabled .button-icon-color path{fill:rgba(9,30,66,.31)}button.button-standard{background:rgba(9,30,66,.04);color:rgba(9,30,66,.71)}.button-standard:hover{background:#e5eaec}.button-standard:active{background:#f2f0f9;color:#7163c5}.button-standard .button-icon-color path{fill:rgba(9,30,66,.71)}.button-standard:disabled .button-icon-color path{fill:rgba(9,30,66,.31)}.button-standard:active .button-icon-color path{fill:#7163c5}.button-primary:disabled,.button-standard:disabled{background:rgba(9,30,66,.04);color:rgba(9,30,66,.31);cursor:not-allowed}button.button-subtle{background:#fff;color:rgba(9,30,66,.71)}.button-subtle:hover{background:#e5eaec}.button-subtle:active{background:#f2f0f9}.button-subtle:disabled{color:rgba(9,30,66,.31);cursor:not-allowed}.button-subtle .button-icon-color path{fill:rgba(9,30,66,.71)}.button-subtle:disabled .button-icon-color path{fill:rgba(9,30,66,.31)}.button-subtle:active .button-icon-color path{fill:#7163c5}.button-destructive{background:#de350b;color:#fff}.button-destructive:hover{background:#ff5630}.button-destructive:active{background:#bf2600}.button-warning{background:#ffe380;color:rgba(9,30,66,.71)}.button-warning:hover{background:#ffc400}.button-warning:active{background:#fff0b3}.button-density-comfy{height:40px;line-height:40px}.button-density-default{height:32px;line-height:32px}.button-density-compact{height:24px;line-height:24px}.bp-button.btn-block{width:100%}.button-group .button-item{background:rgba(9,30,66,.04);color:rgba(9,30,66,.71);font-size:14px;outline:none;cursor:pointer;border:0;margin-right:2px}.button-group button:first-child{border-radius:4px 0 0 4px}.button-group button:last-child{border-radius:0 4px 4px 0;margin-right:0}.button-group .button-item.active{background:rgba(9,30,66,.71);color:#fff}.link-disabled{color:rgba(9,30,66,.31);cursor:not-allowed}.link-default{color:rgba(9,30,66,.66)}.link-default:hover{color:rgba(9,30,66,.42)}.link-default:active{color:rgba(9,30,66,.71)}.link-primary{color:#7163c5}.link-primary:hover{color:#9084d2}.link-primary:active{color:#5342b3}input:disabled{background:rgba(9,30,66,.04)!important;border:none!important;color:rgba(9,30,66,.31);cursor:not-allowed}.input-compact{height:24px}.input-comfy{height:40px}.input-default{height:32px}.input-error{border:1px solid #de350b!important}.input-warning{border:1px solid #ffe380!important}.input-success{border:1px solid #36b37e!important}.input-info{border:1px solid #403294!important}::-webkit-scrollbar{width:4px;height:4px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:rgba(9,30,66,.25);border-radius:10px}.d-none{display:none}.tab-active{color:#7163c5!important}.tab-active:after{position:absolute;bottom:-1px;left:0;content:\"\";width:100%;height:2px;background:#7163c5}.bp-submenu-title{display:flex;height:40px;align-items:center;cursor:pointer}.menu-sub{padding-left:40px}.icon{margin-right:12px}.icon-small{height:18px}.icon-small svg{height:16px;width:16px}.icon-white path{fill:#fff}.icon-warning path{fill:#ffe380}.icon-error path{fill:#de350b}.icon-info-filled path,.icon-info path{fill:#7163c5}.icon-green path{fill:#36b37e}.icon-pointer{cursor:pointer}input[type=radio]{position:absolute;clip:rect(0,0,0,0)}input[type=radio]+label{font-size:14px;color:rgba(9,30,66,.82);box-sizing:content-box}input[type=radio]+label:before{content:\"\\a0\";display:inline-block;vertical-align:middle;width:10px;height:10px;margin:6px;border-radius:50%;border:1px solid rgba(9,30,66,.13);line-height:1;box-sizing:content-box}input[type=radio]:checked+label:before{background:#fff;border:4px solid #7163c5;height:4px;width:4px;background-clip:content-box;box-sizing:content-box}input[type=radio]:disabled+label:before{width:10px;height:10px;border-radius:50%;background:rgba(9,30,66,.04);border:1px solid rgba(9,30,66,.04);line-height:1}input[type=radio]:disabled+label:before,input[type=radio]:disabled:checked+label:before{content:\"\\a0\";display:inline-block;vertical-align:middle;margin:6px;box-sizing:content-box}input[type=radio]:disabled:checked+label:before{width:4px;height:4px;border-radius:50%;background:rgba(9,30,66,.36);border:4px solid rgba(9,30,66,.04)}.bp-select-title{height:100%;width:100%;display:flex;align-items:center;padding:0 8px;justify-content:space-between}.bp-option-group{margin:0;padding:4px 0;background:#fff;box-shadow:0 4px 8px -2px rgba(9,30,66,.25);border-radius:3px}.bp-select:focus{outline:none}.option-active{color:#fff!important;background-color:rgba(9,30,66,.71)!important}.option-active .icon path{fill:#fff}input[type=checkbox]+label:before{content:\"\\a0\";display:inline-block;vertical-align:middle;width:12px;height:12px;margin-right:.2em;border-radius:.2em;text-indent:.15em;margin:6px;line-height:.65;background-image:url(/hospital-unchecked.svg);background-size:12px 12px}input[type=checkbox]:checked+label:before{content:\" \";margin:6px;background-image:url(/hospital-checked.svg);background-size:12px 12px}input[type=checkbox]:checked:disabled+label:before{content:\" \";margin:6px;background-image:url(/hospital-checked-disabled.svg);background-size:12px 12px}input[type=checkbox]:disabled+label:before{content:\" \";height:12px;width:12px;background:rgba(9,30,66,.04);border-radius:2px;margin:6px}input[type=checkbox]{position:absolute;clip:rect(0,0,0,0)}input[type=checkbox]+label{font-size:14px;color:rgba(9,30,66,.82)}.status-default.status-subtle{background:rgba(9,30,66,.13);color:rgba(9,30,66,.77)}.status-default.status-bold{background:rgba(9,30,66,.77);color:#fff}.status-success.status-subtle{background:#e2ffee;color:#064}.status-success.status-bold{background:#00875a;color:#fff}.status-removed.status-subtle{background:#ffebe6;color:#bf2600}.status-removed.status-bold{background:#de350b;color:#fff}.status-in-progress.status-subtle{background:#f2f0f9;color:#5342b3}.status-in-progress.status-bold{background:#7163c5;color:#fff}.status-new.status-subtle{background:#eae6ff;color:#403294}.status-new.status-bold{background:#5243aa;color:#fff}.status-moved.status-subtle{background:#ff991f;color:rgba(9,30,66,.95)}.status-moved.status-bold{background:#fffae6;color:rgba(9,30,66,.95)}.tag-default.tag-subtle{background:#e5eaec;color:rgba(9,30,66,.82)}.tag-default.tag-bold{background:rgba(9,30,66,.77);color:#fff}.tag-blue.tag-subtle{background:#d7d2ee;color:#0049b0}.tag-blue.tag-bold{background:#bcb5e3;color:rgba(9,30,66,.95)}.tag-green.tag-subtle{background:#79f2c0;color:#064}.tag-green.tag-bold{background:#57d9a3;color:rgba(9,30,66,.95)}.tag-purple.tag-subtle{background:#c0b6f2;color:#403294}.tag-purple.tag-bold{background:#998dd9;color:rgba(9,30,66,.95)}.tag-teals.tag-subtle{background:#79e2f2;color:rgba(9,30,66,.82)}.tag-teals.tag-bold{background:#00c7e6;color:rgba(9,30,66,.95)}.tag-red.tag-subtle{background:#ffbdad;color:rgba(9,30,66,.95)}.tag-red.tag-bold{background:#ff8f73;color:rgba(9,30,66,.95)}.tag-yellow.tag-subtle{background:#ffab00;color:rgba(9,30,66,.95)}.tag-yellow.tag-bold{background:#ffc400;color:rgba(9,30,66,.95)}.badge-default{background:rgba(9,30,66,.13);color:rgba(9,30,66,.89)}.badge-primary{background:#7163c5;color:#fff}.tooltip:hover:after{background:rgba(9,30,66,.95);border-radius:3px;font-size:12px;color:#fff;line-height:20px;display:block;position:relative;padding:0 4px}.bp-chart{height:100%}.flex-alian-center{display:flex;flex-direction:row;align-items:center}.toast-inline-link{color:inherit;margin-left:10px;text-decoration:underline}.icon-toast-warning path{fill:rgba(9,30,66,.71)}.toast{width:320px;height:56px;line-height:14px;font-size:14px;padding:16px;border-radius:3px;position:relative;margin-right:auto;margin-left:auto;display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}.toast-success{color:#fff;background:#00865a}.toast-warning{color:rgba(9,30,66,.95);background:#ffe380}.toast-error{color:#fff;background:#de350b}.toast-info{color:#fff;background:#42516e}.modal-container{width:100vw;height:100vh;background:rgba(9,30,66,.54);z-index:100;position:fixed;display:none}.modal-container-flex{display:flex;flex-direction:row;align-items:center}.modal{background:#fff;box-shadow:0 4px 8px -2px rgba(9,30,66,.25);border-radius:4px;padding:24px 0;display:flex;flex-direction:column;justify-content:space-between;box-sizing:border-box;position:fixed;left:50%;z-index:9000;max-height:90%}.modal-small{width:400px;margin-left:-200px}.modal-medium{width:600px;margin-left:-300px}.modal-large{width:800px;margin-left:-400px}.modal-title{width:100%;font-size:20px;color:rgba(9,30,66,.95);line-height:24px;justify-content:space-between;padding:0 24px 16px 24px}.modal-title,.modal-title div{display:flex;flex-direction:row;align-items:center}.modal-body{font-size:14px;color:rgba(9,30,66,.95);text-align:left;overflow-y:auto;max-height:calc(90vh - 136px);padding:0 16px;margin-left:8px;margin-right:8px}.modal-footer{padding:16px 24px 0 24px;display:flex;flex-direction:row;justify-content:flex-end;box-sizing:border-box}.modal-footer button{height:32px;font-size:14px;text-align:center;line-height:32px;padding:0 12px;border:0;border-radius:4px;outline:none}.modal-footer .modal-subtle-btn{color:rgba(9,30,66,.71);background:#fff;margin-left:4px}.modal-footer .modal-default-btn{color:#fff;background:#7163c5}.modal-footer .modal-error-btn{color:#fff;background:#de350b}.modal-footer .modal-warning-btn{color:rgba(9,30,66,.71);background:#ffe380}.modal-fade{opacity:0}.modal-fade,.modal-show{transition:opacity .15s linear}.modal-show{opacity:1}.modal-scrollable .modal-title{border-bottom:2px solid #e7e9ed}.modal-scrollable .modal-footer{border-top:2px solid #e7e9ed}.modal-scrollable .modal-body{margin-top:12px;margin-bottom:12px}.modal-control-btn{height:32px;font-size:14px;text-align:center;line-height:32px;padding:0 12px;border:0;border-radius:4px;outline:none;width:auto;margin:4px}.popover-container{position:absolute;display:none;top:0;left:0;z-index:5000}.popover{width:320px;padding:16px;background:#fff;box-shadow:0 0 1px 0 rgba(9,30,66,.12),0 8px 16px -4px rgba(9,30,66,.25);border-radius:3px;box-sizing:border-box}.popover,.popover-head{display:flex;flex-direction:row}.popover-head{justify-content:space-between;align-items:center}.popover-title{font-size:14px;color:rgba(9,30,66,.95);text-align:left;font-weight:500}.popover-desc{margin-top:12px;font-size:14px;color:rgba(9,30,66,.82)}.popover-footer{margin-top:8px}.popover-footer a{text-align:left}.popover-footer button{text-align:right;height:24px;border:0;font-size:14px;color:rgba(9,30,66,.71);text-align:center;line-height:24px;position:relative;left:125px;border-radius:4px;outline:none}.popover-footer button:last-child{background:rgba(9,30,66,.04)}.popover-triangle{height:12px;width:12px;transform:rotate(45deg);background:#fff}.popover-triangle-left{left:314px;top:50%;margin-top:-6px;position:absolute}.popover-triangle-left-top{left:314px;top:16px;position:absolute}.popover-triangle-left-bottom{left:314px;bottom:16px;position:absolute}.popover-triangle-bottom{position:absolute;top:-6px;left:152px}.popover-triangle-bottom-left{position:absolute;top:-6px;left:16px}.popover-triangle-bottom-right{position:absolute;top:-6px;left:288px}.popover-triangle-top{position:absolute;left:152px;bottom:-6px}.popover-triangle-top-left{position:absolute;left:16px;bottom:-6px}.popover-triangle-top-right{position:absolute;left:288px;bottom:-6px}.popover-triangle-right{position:absolute;left:-6px;top:50%;margin-top:-6px}.popover-triangle-right-top{position:absolute;left:-6px;top:16px}.popover-triangle-right-bottom{position:absolute;left:-6px;bottom:16px}.progress-tracker-container{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:88px;display:flex;flex-direction:column;justify-content:center}.progress-tracker-line{margin:0 55px;background:#7163c5;border-radius:24px;height:8px;z-index:100}.progress-tracker-step{margin-top:8px;display:flex;flex-direction:row;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.progress-tracker-step span{display:inline-block;width:120px;margin-right:40px;font-size:14px;text-align:center;line-height:24px;position:relative}.progress-tracker-step-cur{color:#7163c5}.progress-tracker-step-visited{color:rgba(9,30,66,.95)}.progress-tracker-step-disabled{color:rgba(9,30,66,.31)}.progress-tracker-step-unvisited{color:rgba(9,30,66,.66)}.progress-tracker-step span:before{content:\" \";width:8px;height:8px;border-radius:50%;background:rgba(9,30,66,.42);position:absolute;right:56px;top:-16px;z-index:1}.progress-tracker-step span:last-child{margin-right:0}.spinner-container{position:absolute;background:transparent;width:100%;height:100%}.spinner-background-gray{background:rgba(9,30,66,.55)}.spinner-background-white{background:hsla(0,0%,100%,.55)}.full-window-spinner{width:100vw;height:100vh;left:0;top:0;position:fixed}.full-window-spinner,.item-spinner{display:flex;flex-direction:row;justify-content:center;align-items:center}.item-spinner{position:absolute;width:100%;height:100%}.spinner-animate svg{-webkit-animation:spinnerAnimate 1s linear infinite;animation:spinnerAnimate 1s linear infinite}@-webkit-keyframes spinnerAnimate{0%{-webkit-transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg)}to{-webkit-transform:rotate(1turn)}}@keyframes spinnerAnimate{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}.pagination{display:flex;flex-direction:row;width:-webkit-max-content;width:-moz-max-content;width:max-content;align-items:center;font-size:14px;color:rgba(9,30,66,.71)}.pagination svg{margin:0;cursor:pointer}.pagination span{height:24px;width:24px}.pagination-unable svg path{fill:#e5eaec}.pagination-page{letter-spacing:0;text-align:center;height:20px;min-width:20px;margin:0 2px;cursor:pointer}.pagination-active{background:rgba(9,30,66,.71);border-radius:2px;color:#fff;margin:0 4px}.breadcrumbs-container{max-width:560px;height:-webkit-max-content;height:-moz-max-content;height:max-content;font-size:12px;color:rgba(9,30,66,.6);line-height:16px}.breadcrumbs-container div{display:inline-block;margin:0 16px 0 0;font-weight:500;cursor:pointer}.breadcrumbs-container div a{color:rgba(9,30,66,.6)}.breadcrumbs-container span{margin:0 4px}.breadcrumbs-show{cursor:pointer}.ember-table table{width:100%}.bp-table{height:100%}.bp-table table th{background:#fff;border-bottom:2px solid #e5eaec;color:rgba(9,30,66,.6);font-size:12px;padding:8px;text-align:left}.bp-table table thead th{top:0!important}.bp-table table tbody tr:hover{background:#ededf1}.bp-table table tbody tr{background:#fff}.bp-table table tbody td{background:inherit;color:rgba(9,30,66,.82);font-size:14px;padding:16px 8px}.border-table table tbody td{border-bottom:1px solid #e5eaec}.bp-table table th .et-sort-indicator:before{display:inline-block;border:0;line-height:1;content:\"\\25be\"}.bp-table table th .is-descending:before{transform:rotate(0)}.bp-table table th .is-ascending:before{transform:rotate(180deg)}.spotlight-item{border:2px solid #6554c0;box-shadow:0 0 0 6px rgba(101,84,192,.4);border-radius:4px}.spotlight{height:-webkit-max-content;height:-moz-max-content;height:max-content;width:320px;background:#6554c0;border-radius:4px;padding:16px;position:absolute;color:rgba(9,30,66,.95);top:0;left:0}.spotlight div{display:flex;justify-content:flex-end;position:relative}.spotlight p{margin-top:0}.spotlight button{height:32px;font-size:14px;color:rgba(9,30,66,.95);text-align:left;background:#e5eaec;border-radius:4px;padding:0 12px;outline:none}.spotlight span{position:absolute;left:0;bottom:5px}.spotlight .secondary-btn{border:0;background:transparent;margin-right:4px}.spotlight h3{font-size:16px;color:#fff;margin-top:0;margin-bottom:8px}.empty-state{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.empty-state img{height:160px;width:160px;background:#a1c6e7;border-radius:8px;margin-bottom:24px}.empty-state .empty-state-title{font-size:20px;color:rgba(9,30,66,.95);margin-bottom:16px;margin-top:0}.empty-state .empty-state-desc{font-size:14px;color:rgba(9,30,66,.95);text-align:center;line-height:20px;width:312px;margin-bottom:24px;margin-top:0}.empty-state .empty-state-actions{display:flex;flex-direction:row;justify-content:center;margin-bottom:24px}.empty-state .empty-state-actions button{border:0;border-radius:4px;height:32px;padding:0 12px;font-size:14px;letter-spacing:0;text-align:center;line-height:32px}.empty-state .empty-state-btn-p{color:#fff;background:#7163c5}.empty-state .empty-state-btn-s{background:rgba(9,30,66,.04);color:rgba(9,30,66,.71);margin-left:20px}.empty-state a{display:inline-block;margin-bottom:24px}.date-picker-icon{position:absolute;line-height:32px;right:8px;top:4px}.date-picker-white+.date-picker-icon path{fill:hsla(0,0%,100%,.95)}.date-picker-white{color:hsla(0,0%,100%,.95);background:hsla(0,0%,100%,.2)}.date-picker-input{border:0;border-radius:4px;font-size:14px;height:32px;line-height:32px;outline:none;padding:6px 8px}.date-picker-default{background:rgba(9,30,66,.04);color:rgba(9,30,66,.48)}.date-picker-width-small{width:195px}.date-picker-width-default{width:240px}.date-picker-width-large{width:273px}.positon-relative{position:relative}.width-fit-content{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.add-item-input{height:40px;width:240px;border:1px solid rgba(9,30,66,.13);border-radius:4px;padding:10px 8px;font-size:14px;color:rgba(9,30,66,.77)}.add-item-input:focus{outline:none;border:1px solid #7163c5}.flex-direction-row{display:flex;flex-direction:row;align-items:center}.add-item-label{color:rgba(9,30,66,.95);font-weight:500}.add-item-desc,.add-item-label{font-size:14px;margin-bottom:8px;display:block}.add-item-desc{color:rgba(9,30,66,.54)}.add-item-cross-icon{width:24px;height:24px;margin-left:8px}.add-item-main{margin-bottom:16px}.add-item-text{font-size:14px;color:rgba(9,30,66,.31);line-height:32px}.add-item-add-icon path{fill:rgba(9,30,66,.31)}.add-item-footer{margin-top:12px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.cursor-pointer{cursor:pointer!important}.cursor-not-allowed{cursor:not-allowed!important}.bp-badge.primary{background-color:#7163c5;color:#fff}.bp-badge.primary.reverse{color:#7163c5;background-color:#fff}.textColorRed{color:#ff5630!important}.display-none{display:none!important}.card-size-b{height:auto!important;width:893px!important}.card-size-b .bp-card-title-part{height:93px!important;flex-direction:column!important;align-items:start!important;justify-content:center!important}.card-size-b .heading-medium{margin-bottom:6px}.card-size-b .bp-card-title-desc{margin-left:0!important}.card-size-b .bp-button-group{display:none}.card-size-c,.card-size-d{width:435px!important;height:auto!important}.card-size-c .bp-card-title-part,.card-size-d .bp-card-title-part{height:80px!important;flex-direction:column!important;align-items:start!important;justify-content:center!important}.card-size-c .heading-medium,.card-size-d .heading-medium{margin-bottom:2px}.card-size-c .bp-card-title-desc,.card-size-d .bp-card-title-desc{margin-left:0!important}.card-size-a .bp-button-group,.card-size-b .bp-button-group,.card-size-c .bp-button-group{display:none}.wrap{flex:wrap}.main-flex-start{justify-content:flex-start}.main-flex-end{justify-content:flex-end}.main-center{justify-content:center}.main-space-between{justify-content:space-between}.main-space-around{justify-content:space-around}.cross-flex-start{align-items:flex-start}.cross-flex-end{align-items:flex-end}.cross-center{align-items:center!important}.cross-baseline{align-items:baseline}.cross-stretch{align-items:stretch}.wrap-flex-start{align-content:flex-start}.wrap-flex-end{align-content:flex-end}.wrap-center{align-content:center}.wrap-space-between{align-content:space-between}.wrap-space-around{align-content:space-around}.wrap-stretch{align-content:stretch}.flex-column{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.viewport-class{background:transparent;position:relative}.viewport-class .icon-no-margin{margin:0}.viewport-hidden-wrapper{overflow:hidden;position:relative;height:100%;width:100%}.viewport-auto-wrapper{overflow:auto;height:100%;width:100%;scroll-behavior:smooth}.viewport-click-right{right:0}.viewport-click-left,.viewport-click-right{height:100%;width:24px;position:absolute;top:0;z-index:100;display:flex;align-items:center}.viewport-click-left{left:0}.viewport-nowarp{white-space:nowrap}.viewport-nowarp div{display:inline-block}.report-product-card-active{background:#5342b3!important}.report-product-card-active .product-card-title,.report-product-card-active .product-ei-data,.report-product-card-active .product-ei-text,.report-product-card-active .product-sales-data-percent,.report-product-card-active .product-sales-sata-number,.report-product-card-active .product-sales-text{color:#fff!important}.report-product-card-active .product-sales-data-mn{color:hsla(0,0%,100%,.45)!important}.report-product-card-active .bp-icon path{fill:#fff!important}.report-product-card-active .bp-product-card-tag{background:#fff!important;color:#5342b3!important}.ph-H-xLarge{font-size:40px;font-weight:200;color:#2d334d}.ph-H-Large{font-size:24px;color:#747789}.ph-H-Large_brand{font-size:24px;color:#f5c924}.ph-H-Large_2{font-size:24px;color:#2d334d}.ph-H-Medium{font-size:16px}.ph-H-Medium,.ph-H-Small{font-weight:700;color:#2d334d}.ph-H-Small{font-size:14px;letter-spacing:.35px}.ph-H-Small_brand{font-size:12px;color:#ffdd4d}.ph-body-medium{font-size:16px;color:#747789}.ph-body-medium_brand{font-size:16px;color:#f5d924}.ph-body-small{font-size:14px;color:#747789}.ph-body-xsmall{font-size:12px;color:#747789}.ph-body-xsmall-tertiary{font-size:12px;color:#a2a5b0}.ph-H-Display{font-size:48px;color:#2d334d;letter-spacing:1px;text-shadow:0 9px 14px rgba(22,28,57,.3)}.ph-body-Display-number{font-weight:200;font-size:24px;color:#2d334d}.ph-H-xLarge-inverse{font-size:40px;color:hsla(0,0%,100%,.9)}.ph-H-Large-inverse{font-size:24px;color:hsla(0,0%,100%,.4)}.ph-H-Large-2-inverse{font-size:24px;color:hsla(0,0%,100%,.9)}.ph-H-Medium-inverse{font-size:16px;color:hsla(0,0%,100%,.9)}.pb-H-small{font-size:12px;color:#161c39;opacity:.8}.ph-body-small-inverse{opacity:.7;font-size:14px;color:#fff}.ph-body-2-inverse{font-size:14px;color:hsla(0,0%,100%,.7)}.ph-body-3-inverse{font-size:12px;color:hsla(0,0%,100%,.7)}.pb-H-small_brand{font-size:12px;color:#ffdd4d;letter-spacing:1px}.ph-H-Decoration{font-family:Anton-Regular;font-size:100px;color:#fff;letter-spacing:2.5px;opacity:.4}.ph-body-Display-point{opacity:.4;font-family:Lato-Light;font-size:40px;color:hsla(0,0%,100%,.4);letter-spacing:1px;font-weight:200}.ph-H-Small_theme{font-size:14px;color:#f5c924}.ph-H-xLarge-inverse-position{position:relative;top:-80px}.ph-H-Large-2-inverse-positon{position:relative;top:-50px}.text-right{text-align:right}.text-width-1{width:198px}.ph-above-data-review-year{opacity:.2;font-size:48px;color:#161c39}.mr-6{margin-right:40px}.mr-5{margin-right:32px}.mr-4{margin-right:24px}.mr-3{margin-right:16px}.mr-2{margin-right:8px}.mr-1{margin-right:4px}.ml-6{margin-left:40px}.ml-5{margin-left:32px}.ml-4{margin-left:24px}.ml-3{margin-left:16px}.ml-2{margin-left:8px}.ml-1{margin-left:4px}.mb-6{margin-bottom:40px}.mb-5{margin-bottom:32px}.mb-4{margin-bottom:24px}.mb-3{margin-bottom:16px}.mb-2{margin-bottom:8px}.mb-1{margin-bottom:4px}.mt-6{margin-top:40px}.mt-5{margin-top:32px}.mt-4{margin-top:24px}.mt-3{margin-top:16px}.mt-2{margin-top:8px}.mt-1{margin-top:4px}.pr-4{padding-right:24px}.pr-3{padding-right:16px}.pr-2{padding-right:8px}.pr-1{padding-right:4px}.pl-4{padding-left:24px}.pl-3{padding-left:16px}.pl-2{padding-left:8px}.pl-1{padding-left:4px}.max-padding-top{padding-top:28px}.color-transparent{color:transparent!important}.above-data-review-text{margin-right:60px}.above-data-header-box-style-special{opacity:.6;font-size:16px;color:#fff}.flex-1{flex:1}.bp-about-us,.bp-above-data,.bp-above-data-detail,.bp-consulting,.bp-home,.bp-industry-activity,.bp-industry-activity-detail,.bp-max,.bp-rw{min-width:1200px;display:flex;flex-direction:column;align-items:center}.review-activity-card-desc{height:51px}@font-face{font-family:Anton-Regular;src:url(/assets/Anton-Regular.ttf)}.page-header-anton-font{font-family:Anton-Regular;font-size:100px;color:#fff;letter-spacing:2.5px;background-image:linear-gradient(hsla(0,0%,100%,.4),rgba(25,255,255,0) 80%);-webkit-text-fill-color:transparent;-webkit-background-clip:text}.icon-and-opacity path{fill:hsla(0,0%,100%,.8)}.agenda-text-center{line-height:104px;width:70px}.button-official-gray-line{width:80px;height:32px;line-height:32px;background:linear-gradient(45deg,rgba(22,28,57,.2),rgba(22,28,57,.2) 5%,transparent 0,transparent 50%,rgba(22,28,57,.2) 0,rgba(22,28,57,.2) 55%,transparent 0,transparent)!important;background-size:10px 10px!important;border:none;font-weight:500;font-size:12px;color:#2d334d}.button-official-yellow-line-inverse{color:hsla(0,0%,100%,0)}.button-official-yellow-line,.button-official-yellow-line-inverse{padding:0 24px;height:32px;line-height:32px;background:linear-gradient(45deg,rgba(255,221,77,.5),rgba(255,221,77,.5) 5%,transparent 0,transparent 50%,rgba(255,221,77,.5) 0,rgba(255,221,77,.5) 55%,transparent 0,transparent)!important;background-size:10px 10px!important;border:none;font-weight:500;font-size:12px}.button-official-yellow-line{color:#2d334d}.button-official-yellow-line-compact{height:40px;padding:0 24px;line-height:40px;background:linear-gradient(45deg,rgba(255,221,77,.5),rgba(255,221,77,.5) 5%,transparent 0,transparent 50%,rgba(255,221,77,.5) 0,rgba(255,221,77,.5) 55%,transparent 0,transparent)!important;background-size:8px 8px!important;border:none;font-weight:500;font-size:14px;color:#2d334d}.button-report-download{width:200px!important;height:40px!important;border-radius:0!important;background:#161c39;color:#fff;border:none;cursor:inherit}.button-fixed-nav-login,.button-report-download{text-align:center!important;display:inline-block!important}.button-fixed-nav-login{color:#2d334d!important;border:1px solid rgba(22,28,57,.12)!important;border-radius:16px!important}.button-fixed-nav-login,.button-fixed-nav-login-inverse{line-height:37px!important;height:37px!important;width:80px!important;background:transparent!important;font-size:14px}.button-fixed-nav-login-inverse{color:hsla(0,0%,100%,.9)!important;border:1px solid hsla(0,0%,100%,.6)!important;border-radius:16px!important;text-align:center!important;display:inline-block!important}.form-cross-icon path,.zh-drop-icon path{fill:#161c39}.zh-drop-icon{height:16px;width:16px}.form-cross-icon{height:24px;width:24px;padding:6px}.more-photo-text{font-size:14px;color:#2d334d;letter-spacing:1px}.more-photo-icon{height:20px;widows:20px}.bp-option-group{width:160px}.fixed-nav-text{color:#2d334d!important;font-size:14px;letter-spacing:0}.fixed-nav-inverse-text{color:hsla(0,0%,100%,.9)!important;font-size:14px;letter-spacing:0}.official-width-default,.page-bottom-part,.photo-container-width{width:100%!important}.official-form-tag{background:#e8e8eb!important}.official-form-tag,.official-form-tag-active{border-radius:12px;height:24px;padding:0 8px;line-height:24px;cursor:pointer}.official-form-tag-active{background:#f5c924!important}.input-official-form{height:40px!important;width:252px!important;border:none;border-bottom:1px solid rgba(22,28,57,.1);background:rgba(22,28,57,.01);border-radius:0;font-size:14px;color:#747789}.input-official-form:focus{border:none!important;border-bottom:1px solid rgba(22,28,57,.1)!important}.photo-click-icon{height:24px;width:24px}.official-icon-style-left path,.official-icon-style-right path{fill:hsla(0,0%,100%,.6)}.official-icon-style-left,.official-icon-style-right{height:48px;width:48px;border-radius:50%;border:1px solid hsla(0,0%,100%,.6);display:flex;justify-content:center;align-items:center}.official-icon-style-left{transform:rotate(90deg)}.official-icon-style-right{transform:rotate(270deg)}.thumbnail-icon-style-left path,.thumbnail-icon-style-right path{fill:#fff}.thumbnail-icon-style-left,.thumbnail-icon-style-right{height:112px;width:16px;display:flex;align-items:center;background:#f5c924}.thumbnail-icon-style-left{transform:rotate(180deg)}.form-warning-text{font-size:12px;color:#fb355e;letter-spacing:0;position:absolute;bottom:-20px}.position-relative{position:relative}.photo-cross-icon{padding:8px}.photo-cross-icon path{fill:hsla(0,0%,100%,.2)}.photos-cross-icon path{fill:hsla(0,0%,100%,.6)}.bp-input-downdrop,.input-list-container{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative}.bp-input-downdrop:focus{outline:none}.input-list,.input-list-tags{overflow:scroll;display:flex;flex-direction:column;background:#fff;box-shadow:0 0 1px 0 rgba(9,30,66,.12),0 4px 8px -2px rgba(9,30,66,.25);border-radius:3px;position:absolute;z-index:1}.input-list{height:112px;width:80px}.input-list-tags{height:112px;width:auto}.input-list-tags-span,.input-list span{padding:0 16px;font-size:14px;color:#344563;line-height:32px;cursor:pointer}.input-list-tags-span:hover,.input-list span:hover{background-color:rgba(9,30,66,.04);color:#344563}.input-list-tags-choosed-span{background:#505f79;color:hsla(0,0%,100%,.95);padding:0 16px;font-size:14px;line-height:32px;cursor:pointer}.select-input{width:80px!important;font-size:14px!important;color:#42526e!important;padding:8px!important}.input-list-container-year:after{content:\"年\"}.input-list-container-month:after,.input-list-container-year:after{position:absolute;right:4px;line-height:32px;font-size:14px;color:#42526e;top:0}.input-list-container-month:after{content:\"月\"}.input-tags{padding:0!important;flex-direction:row!important;flex-wrap:wrap;height:auto!important;min-height:32px;position:relative}.input-tags,.select-input-tag{display:flex;align-items:center}.select-input-tag{background:#ebecf0;color:#42526e;border-radius:2.5px;height:20px;width:auto;font-size:14px;line-height:16px;padding:2px 6px;margin:2px}.select-multiple-input{border:none;width:4px;height:32px;background:#fff;line-height:14px;font-size:14px;color:transparent;caret-color:#172b4d}.select-multiple-input:focus{outline:none}.bp-cascader{height:32px;width:222px;background:rgba(9,30,66,.04);padding:0;margin:0;position:relative;cursor:pointer;box-sizing:border-box;border-radius:4px}.bp-cascader:focus{outline:none}.bp-cascader ul{padding:0}.bp-cascader-title{display:flex;align-items:center;padding:0 8px;justify-content:space-between;height:32px}.cascader-list{width:222px;margin:0;padding:4px 0;background:#fff;box-shadow:0 0 1px 0 rgba(9,30,66,.12),0 4px 8px -2px rgba(9,30,66,.25);border-radius:3px;height:300px;overflow-y:scroll;z-index:99;position:absolute}.cascader-list-item-active,.cascader-list .cascader-list-item,.subSelect .cascader-list-item{line-height:32px}.cascader-list .cascader-list-item label,.subSelect .cascader-list-item label{font-size:14px;color:rgba(9,30,66,.82);margin:0}.cascader-list-item-active label,.cascader-list .cascader-list-item:hover label{color:#3172e0;font-size:14px;margin:0}.cascader-list-item-active,.cascader-list .cascader-list-item:hover{background:#ebecf0}.subSelect{position:absolute;top:32px;left:222px;width:222px;background-color:#fff;box-shadow:0 0 1px 0 rgba(9,30,66,.12),0 4px 8px -2px rgba(9,30,66,.25);border-radius:3px;max-height:300px;overflow-y:scroll;z-index:99}.subSelect div:hover{background-color:#ebecf0}.uncheckbox{border:1px solid #e0e1e6;border-radius:2px}.some-checked-box,.uncheckbox{height:12px;width:12px;background-color:#fafbfc;margin:0 8px}.some-checked-box{border-top:5px solid #3172e0;border-bottom:5px solid #3172e0;border-right:2px solid #3173e0;border-left:2px solid #3173e0;border-radius:2px}.checkbox{background-image:url(/hospital-checked.svg);background-size:12px 12px;height:12px;width:12px;margin:0 8px}.downRight path{fill:#505f79}.downRight{transform:rotate(-90deg)}.select-tag{background:rgba(9,30,66,.04);border-radius:2.5px;font-size:14px;color:#42526e;line-height:16px;line-height:20px;padding:2px 6px}input[type=checkbox].some-checked-checkbox+label:before{content:\" \";margin:6px;background-color:#fff;border-top:5px solid #3172e0;border-bottom:5px solid #3172e0;border-right:2px solid #3172e0;border-left:2px solid #3172e0;box-sizing:border-box}.bp-progressbar-container{position:relative}.bp-progressbar-container .progress-bottom{background:#f4f5f7;border-radius:2px}.bp-progressbar-container .progress-top{background:#3881ff;border-radius:2px;position:absolute;top:0;left:0}#toast-container.toast-top-center{top:88px}#toast-container.toast-top-center .toast{min-width:320px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:56px;border-radius:4px;box-shadow:none;background-size:24px 24px;padding:16px 16px 16px 56px;opacity:1}#toast-container.toast-top-center .toast .toast-title{font-size:14px;color:#fff;height:24px;line-height:24px}#toast-container.toast-top-center .toast:hover{box-shadow:none}#toast-container.toast-top-center .toast.toast-success{background-image:url(/images/icon_check-circle\\ copy@2x.png)!important;background-color:#39bf5f!important;background-repeat:no-repeat!important}#toast-container.toast-top-center .toast.toast-error{background-image:url(/images/icon_cross-circle\\ copy@2x.png)!important;background-color:#de350b!important}.chevron_left{width:24px;height:24px;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M0 0h24v24H0V0z' fill='none'/%3E%3Cpath d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z'/%3E%3C/svg%3E\") no-repeat 50%/100%!important}.chevron_right{width:24px;height:24px;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M0 0h24v24H0V0z' fill='none'/%3E%3Cpath d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z'/%3E%3C/svg%3E\") no-repeat 50%/100%!important}.chevron_left_unable{width:24px;height:24px;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M0 0h24v24H0V0z' fill='none'/%3E%3Cpath d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z' fill='%23E5EAEC'/%3E%3C/svg%3E\") no-repeat 50%/100%!important}.chevron_right_unable{width:24px;height:24px;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M0 0h24v24H0V0z' fill='none'/%3E%3Cpath d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z' fill='%23E5EAEC'/%3E%3C/svg%3E\") no-repeat 50%/100%!important}.bp-table{height:auto;width:100%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background:#fff;padding:0;margin:0;position:relative;box-sizing:border-box}.bp-button{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:14px;text-align:center;padding:0 12px;border:0;border-radius:4px;cursor:pointer;outline:none;display:flex;flex-direction:row;align-items:center}.bp-button,.bp-button-group{height:auto;width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;background:#fff}.bp-button-group{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.bp-badge{height:16px;width:-webkit-max-content;width:-moz-max-content;width:max-content;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background:#dfe1e6;min-width:20px;font-size:12px;color:#253858;text-align:center;line-height:16px;border:0;border-radius:8px;padding:0 6px;cursor:pointer}.bp-badge,.bp-input{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.bp-input{height:32px;width:240px;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background:#fff;line-height:14px;font-size:14px;padding:10px 8px;border:1px solid #dfe1e6;border-radius:4px;color:#172b4d;box-sizing:border-box}.bp-input:focus{border:1px solid #3172e0;outline:none}.bp-link{height:14px;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background:transform;font-size:14px;line-height:14px;cursor:pointer;outline:none;border:none;display:inline-block}.bp-link,.bp-status{width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;text-align:center}.bp-status{height:16px;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background:#fff;padding:0 4px;font-size:12px;line-height:16px;border-radius:4px}.bp-tag{height:20px;width:-webkit-max-content;width:-moz-max-content;width:max-content;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background:#fff;padding:0 4px;border-radius:4px;font-size:14px;text-align:center;line-height:20px}.bp-tag,.bp-text{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.bp-text{height:auto;width:auto;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background:transparent;padding:0;color:#172b4d}.bp-viewport{height:auto;width:auto;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background:#fff;margin:0 24px;position:relative}.bp-select{height:40px;width:240px;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background:rgba(9,30,66,.04);padding:0;margin:0;position:relative;cursor:pointer;box-sizing:border-box;border-radius:4px}.bp-select:hover{background:#ebecf0}.bp-select .bp-option{height:32px;width:100%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background:#fff;color:#344563;display:flex;padding:0 16px;align-items:center}.bp-select .bp-option:hover{background-color:#ebecf0}.bp-option{height:32px;width:100%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background:#fff;color:#344563;display:flex;padding:0 16px;align-items:center}.bp-option:hover{background-color:#ebecf0}.bp-menu{height:auto;width:208px;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background:#fff;padding:0;margin:0}.bp-menu .bp-sub-menu{height:auto;width:100%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background:#fff;min-height:40px;color:#505f79;padding:0 12px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start}.bp-menu .bp-sub-menu:hover{color:#3172e0}.bp-sub-menu{height:auto;width:100%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background:#fff;min-height:40px;color:#505f79;padding:0 12px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start}.bp-sub-menu:hover{color:#3172e0}.bp-sub-menu .bp-menu-item{height:40px;width:100%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background:#fff;display:flex;align-items:center;cursor:pointer;padding:0 12px;color:#505f79;box-sizing:border-box}.bp-sub-menu .bp-menu-item:hover{color:#3172e0}.bp-menu-item{height:40px;width:100%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background:#fff;display:flex;align-items:center;cursor:pointer;padding:0 12px;color:#505f79;box-sizing:border-box}.bp-menu-item:hover{color:#3172e0}.bp-bar,.bp-bar-line,.bp-china,.bp-line,.bp-pie,.bp-radar,.bp-scatter,.bp-stack{height:400px;width:100%;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background:#fff;padding:0;margin:0;position:relative;box-sizing:border-box}.bp-row-layout{flex-direction:row}.bp-column-layout,.bp-row-layout{height:auto;width:auto;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background:#fff;display:flex;padding:0}.bp-column-layout{flex-direction:column}.login-img{height:200px;width:200px;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background:#fff;padding:0;margin:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "6510":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".bp-button-group[data-v-cdd754a2]{height:auto;width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background:#fff}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "68f2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_icon_line_vue_vue_type_style_index_0_id_4852e6c8_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7552");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_icon_line_vue_vue_type_style_index_0_id_4852e6c8_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_icon_line_vue_vue_type_style_index_0_id_4852e6c8_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_icon_line_vue_vue_type_style_index_0_id_4852e6c8_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_icon_line_vue_vue_type_style_index_0_id_4852e6c8_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "6dd8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["a"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "712d":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("2513");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("c29d7308", content, shadowRoot)
};

/***/ }),

/***/ "7424":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("4743");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("4bf4ab58", content, shadowRoot)
};

/***/ }),

/***/ "748a":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("2c47");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("a1373a50", content, shadowRoot)
};

/***/ }),

/***/ "750b":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ca6d");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("3434ecf6", content, shadowRoot)
};

/***/ }),

/***/ "7552":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("604a");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("7c5a41b9", content, shadowRoot)
};

/***/ }),

/***/ "7863":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-1b1163e4]{box-sizing:border-box}ul[data-v-1b1163e4]{margin:0;padding:0}.svg-icon[data-v-1b1163e4]{width:1em;height:1em;vertical-align:-.15em;fill:currentColor;overflow:hidden;margin-right:4px}svg[data-v-1b1163e4]:focus{outline:none}.bp-sub-menu[data-v-1b1163e4]{height:auto;width:100%;margin-left:8;margin-right:8;margin-top:8;margin-bottom:8;padding-left:8;padding-right:8;padding-top:8;padding-bottom:8;background:transparent;min-height:40px;color:#505f79;padding:0 12px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start}.bp-sub-menu[data-v-1b1163e4]:hover{color:#3172e0}.bp-submenu-title[data-v-1b1163e4]{display:flex;height:40px;align-items:center;cursor:pointer}.menu-sub[data-v-1b1163e4]{padding-left:40px}.d-none[data-v-1b1163e4]{display:none}.bp-menu-item[data-v-1b1163e4]{height:40px;width:100%;margin-left:8;margin-right:8;margin-top:8;margin-bottom:8;padding-left:8;padding-right:8;padding-top:8;padding-bottom:8;background:transparent;display:flex;align-items:center;cursor:pointer;padding:0 12px;color:#505f79;box-sizing:border-box}.bp-menu-item[data-v-1b1163e4]:hover{color:#3172e0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "791e":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ca12");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("1c474aa9", content, shadowRoot)
};

/***/ }),

/***/ "7935":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_select_vue_vue_type_style_index_0_id_918c77ba_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a287");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_select_vue_vue_type_style_index_0_id_918c77ba_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_select_vue_vue_type_style_index_0_id_918c77ba_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_select_vue_vue_type_style_index_0_id_918c77ba_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_select_vue_vue_type_style_index_0_id_918c77ba_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "799a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_consulting_vue_vue_type_style_index_0_id_35a79644_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ebfb");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_consulting_vue_vue_type_style_index_0_id_35a79644_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_consulting_vue_vue_type_style_index_0_id_35a79644_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_consulting_vue_vue_type_style_index_0_id_35a79644_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_consulting_vue_vue_type_style_index_0_id_35a79644_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "7d13":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-b2f4e76a]{letter-spacing:.4px;line-height:1.6;box-sizing:border-box}.borderNone[data-v-b2f4e76a]{border-bottom:0!important}.nav[data-v-b2f4e76a]{background:#fff;text-align:center;font-size:14px}.bordernav[data-v-b2f4e76a]{border-bottom:1px solid rgba(22,28,57,.12)}.bordernavInverse[data-v-b2f4e76a]{border-bottom:1px solid hsla(0,0%,100%,.12)}.navInverse[data-v-b2f4e76a]{background:transparent;text-align:center;font-size:14px}.fixed-nav[data-v-b2f4e76a]{top:0;padding:0 100px;position:fixed;align-items:center;z-index:1000;padding:0 16px!important}.fixed-nav[data-v-b2f4e76a],.fixed-nav .nav-border[data-v-b2f4e76a]{height:80px;width:100%;display:flex;flex-direction:row;justify-content:space-between}.fixed-nav .nav-border[data-v-b2f4e76a]{align-content:flex-start;align-items:center!important}.fixed-nav .bp-img[data-v-b2f4e76a]{-o-object-fit:cover;object-fit:cover;cursor:pointer!important;pointer-events:all}.fixed-nav .response-icon-menu[data-v-b2f4e76a]{width:24px;height:24px;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='22' height='22' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 10h20v2H1v-2zm0-7h20v2H1V3zm0 14h20v2H1v-2z' fill='%232D334D' fill-rule='evenodd'/%3E%3C/svg%3E\") 50%/100% no-repeat!important}.fixed-nav .response-icon-menu-light[data-v-b2f4e76a]{width:24px;height:24px;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='22' height='22' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 10h20v2H1v-2zm0-7h20v2H1V3zm0 14h20v2H1v-2z' fill='%23fff' fill-rule='evenodd'/%3E%3C/svg%3E\") 50%/100% no-repeat!important}.fixed-nav .meau-shade[data-v-b2f4e76a]{width:100vw!important;height:100vh!important;background:#8b8d9b!important;opacity:.8;position:absolute;top:80px;transform:translateX(-16px);overflow:hidden!important}.fixed-nav .response-menu[data-v-b2f4e76a]{position:absolute;top:80px;background-color:#fff;width:100%!important;padding:40px;min-width:375px;left:0;align-items:stretch}.fixed-nav .response-menu[data-v-b2f4e76a],.fixed-nav .response-menu .responsee-menu-item[data-v-b2f4e76a]{display:flex;flex-direction:column;align-content:flex-start;justify-content:flex-start;height:auto}.fixed-nav .response-menu .responsee-menu-item[data-v-b2f4e76a]{align-items:flex-start;margin-bottom:24px;width:auto;background:0 0;padding:0}.fixed-nav .response-menu .ph-H-Small[data-v-b2f4e76a]{height:auto;width:auto;background:0 0;margin-bottom:4px;font-size:14px;color:#2d334d;letter-spacing:.35px;font-weight:700;padding:0}.fixed-nav .response-menu .ph-body-xsmall[data-v-b2f4e76a]{height:auto;width:auto;background:0 0;font-size:12px;color:#a2a5b0;padding:0;text-align:left}.fixed-nav .response-menu .contact-us[data-v-b2f4e76a]{background:#ffdd4d;border-radius:2px;border:none;margin-bottom:24px;line-height:24px}.fixed-nav .response-menu .contact-us[data-v-b2f4e76a],.fixed-nav .response-menu .login[data-v-b2f4e76a]{width:100%;height:40px;font-size:14px;color:#2d334d;letter-spacing:1px;display:block;text-align:center;padding:0 12px;display:flex;flex-direction:row;align-items:center;cursor:pointer;outline:0;justify-content:center}.fixed-nav .response-menu .login[data-v-b2f4e76a]{line-height:40px;background:#fff;border-radius:2px;border:1px solid rgba(22,28,57,.12);line-height:24px}.fixed-nav .response-menu .button-response-group[data-v-b2f4e76a]{padding-top:4px;display:flex;flex-direction:column}.fixed-nav .response-menu .button-response-group .button-response-general[data-v-b2f4e76a]{font-size:14px;color:#2d334d;letter-spacing:1px;display:block;text-align:center;line-height:40px;border-radius:2px;border:1px solid rgba(22,28,57,.12);margin-bottom:24px}.fixed-nav .response-menu .button-response-group .button-response-logout[data-v-b2f4e76a]{text-align:center}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "7e85":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".el-carousel__item h3[data-v-59898cf9]{color:#475669;font-size:14px;opacity:.75;line-height:150px;margin:0}.el-carousel__item[data-v-59898cf9]:nth-child(2n){background-color:#666}.el-carousel__item[data-v-59898cf9]:nth-child(odd){background-color:#ddd}h3[data-v-59898cf9]{color:red}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "805d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_option_vue_vue_type_style_index_0_id_41b9bc36_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8f3c");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_option_vue_vue_type_style_index_0_id_41b9bc36_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_option_vue_vue_type_style_index_0_id_41b9bc36_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_option_vue_vue_type_style_index_0_id_41b9bc36_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_option_vue_vue_type_style_index_0_id_41b9bc36_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "809b":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("4288");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("61d78248", content, shadowRoot)
};

/***/ }),

/***/ "8232":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_carousel_item_vue_vue_type_style_index_0_id_04b46ca2_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("43c3");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_carousel_item_vue_vue_type_style_index_0_id_04b46ca2_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_carousel_item_vue_vue_type_style_index_0_id_04b46ca2_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_carousel_item_vue_vue_type_style_index_0_id_04b46ca2_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_carousel_item_vue_vue_type_style_index_0_id_04b46ca2_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "83e7":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("fecf");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("4c55f439", content, shadowRoot)
};

/***/ }),

/***/ "8616":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-4e2b10b6]{box-sizing:border-box}.mr-2[data-v-4e2b10b6]{margin-right:8px}.mb-2[data-v-4e2b10b6]{margin-bottom:8px}.mb-5[data-v-4e2b10b6]{margin-bottom:32px}span.ph-H-small[data-v-4e2b10b6]{font-size:12px;color:#161c39;opacity:.8}span.ph-body-small[data-v-4e2b10b6]{font-size:14px;color:#747789}.bp-modal-form[data-v-4e2b10b6]{height:100vh;width:100vw;background:rgba(9,30,66,.54);display:flex;flex-direction:column;position:fixed;top:0;right:0;z-index:9999;justify-content:center;align-items:center}.bp-modal-form .bp-modal-submit-success[data-v-4e2b10b6]{height:392px;width:600px;background:#fff;padding:40px;border-radius:2px;position:relative;display:flex;flex-direction:column}.bp-modal-form .bp-modal-submit-success .close-button-container[data-v-4e2b10b6]{display:flex;justify-content:flex-end;margin-bottom:32px}.bp-modal-form .bp-modal-submit-success .close-button-container .close-button[data-v-4e2b10b6]{height:32px;width:32px;background:0 0;border-radius:50%;display:flex;justify-content:center;align-items:center;cursor:pointer;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='34' height='34' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23161C39'%3E%3Cpath d='M16.833.5C7.813.5.5 7.813.5 16.833c0 9.021 7.313 16.334 16.333 16.334 9.021 0 16.334-7.313 16.334-16.334C33.167 7.813 25.854.5 16.833.5zm0 1c8.469 0 15.334 6.865 15.334 15.333 0 8.469-6.865 15.334-15.334 15.334-8.468 0-15.333-6.865-15.333-15.334C1.5 8.365 8.365 1.5 16.833 1.5z' opacity='.2'/%3E%3Cpath d='M22.955 11.64l-4.962 4.963 4.962 4.962-.993.993L17 17.595l-4.962 4.963-.993-.993 4.962-4.962-4.962-4.962.993-.993L17 15.61l4.962-4.962.993.993z' opacity='.6'/%3E%3C/g%3E%3C/svg%3E\") 50%/100% no-repeat}.bp-modal-form .bp-modal-submit-success .bp-modal-submit-content[data-v-4e2b10b6]{display:flex;flex-direction:column;align-items:center;-ms-overflow-style:none}.bp-modal-form .bp-modal-submit-success .bp-modal-submit-content[data-v-4e2b10b6]::-webkit-scrollbar{width:0!important;display:none}.bp-modal-form .bp-modal-submit-success .bp-modal-submit-content .submit-success-img[data-v-4e2b10b6]{height:40px;width:40px;margin-bottom:32px;-o-object-fit:contain;object-fit:contain;background:transparent}.bp-modal-form .bp-modal-submit-success .bp-modal-submit-content .submit-success-text[data-v-4e2b10b6]{font-size:24px;color:#2d334d;margin-bottom:16px}.bp-modal-form .bp-modal-submit-success .bp-modal-submit-content .submit-feedback-text[data-v-4e2b10b6]{font-size:16px;color:#747789;margin-bottom:16px}.bp-modal-form .bp-modal-submit-success .form-submit-button-container[data-v-4e2b10b6]{height:auto;width:auto;background:transparent;position:absolute;right:0;bottom:40px;display:flex}.bp-modal-form .bp-modal-submit-success .form-submit-button-container .button-official-yellow-line-compact[data-v-4e2b10b6]{height:40px;width:-webkit-max-content;width:-moz-max-content;width:max-content;padding:0 24px;line-height:40px;cursor:pointer;text-align:center;outline:0;background:linear-gradient(45deg,rgba(255,221,77,.5),rgba(255,221,77,.5) 5%,transparent 0,transparent 50%,rgba(255,221,77,.5) 0,rgba(255,221,77,.5) 55%,transparent 0,transparent);background-size:8px 8px;border:none;font-weight:500;font-size:14px;color:#2d334d;border-radius:4px;display:flex;align-items:center}.bp-modal-form .bp-modal-submit-success .form-submit-button-container .button-go[data-v-4e2b10b6]{height:40px;width:40px;background:#ffdd4d;padding:6px;cursor:pointer;-o-object-fit:cover;object-fit:cover}.bp-modal-form .bp-modal-form-content[data-v-4e2b10b6]{height:663px;width:600px;background:#fff;padding:40px;border-radius:2px;position:relative;display:flex;flex-direction:column;align-items:flex-start;overflow-x:hidden;overflow-y:scroll}.bp-modal-form .bp-modal-form-content .form-warning-text[data-v-4e2b10b6]{font-size:12px;color:#fb355e;letter-spacing:0;position:absolute;bottom:-20px}.bp-modal-form .bp-modal-form-content .official-width-default[data-v-4e2b10b6]{width:100%;display:flex;justify-content:space-between}.bp-modal-form .bp-modal-form-content .official-width-default .contact-us-text[data-v-4e2b10b6]{font-size:24px;color:#2d334d}.bp-modal-form .bp-modal-form-content .official-width-default .close-button[data-v-4e2b10b6]{height:32px;width:32px;background:0 0;border-radius:50%;display:flex;justify-content:center;align-items:center;cursor:pointer;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='34' height='34' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23161C39'%3E%3Cpath d='M16.833.5C7.813.5.5 7.813.5 16.833c0 9.021 7.313 16.334 16.333 16.334 9.021 0 16.334-7.313 16.334-16.334C33.167 7.813 25.854.5 16.833.5zm0 1c8.469 0 15.334 6.865 15.334 15.333 0 8.469-6.865 15.334-15.334 15.334-8.468 0-15.333-6.865-15.333-15.334C1.5 8.365 8.365 1.5 16.833 1.5z' opacity='.2'/%3E%3Cpath d='M22.955 11.64l-4.962 4.963 4.962 4.962-.993.993L17 17.595l-4.962 4.963-.993-.993 4.962-4.962-4.962-4.962.993-.993L17 15.61l4.962-4.962.993.993z' opacity='.6'/%3E%3C/g%3E%3C/svg%3E\") 50%/100% no-repeat}.bp-modal-form .bp-modal-form-content .form-input-container[data-v-4e2b10b6]{position:relative;margin-bottom:32px;display:flex;flex-direction:column}.bp-modal-form .bp-modal-form-content .form-input-container .modalform-name-text[data-v-4e2b10b6]{font-size:12px;color:#161c39;opacity:.8;margin-bottom:4px;text-align:start}.bp-modal-form .bp-modal-form-content .form-input-container .input-official-form[data-v-4e2b10b6]{height:40px;width:252px;border:none;border-bottom:1px solid rgba(22,28,57,.1);background:rgba(22,28,57,.01);border-radius:0;font-size:14px;color:#747789}.bp-modal-form .bp-modal-form-content .intention-container[data-v-4e2b10b6]{display:flex}.bp-modal-form .bp-modal-form-content .intention-container .official-form-tag[data-v-4e2b10b6],.bp-modal-form .bp-modal-form-content .intention-container .official-form-tag-active[data-v-4e2b10b6]{border-radius:12px;padding:0 8px;line-height:24px;cursor:pointer}.bp-modal-form .bp-modal-form-content .intention-container .official-form-tag[data-v-4e2b10b6]{background:#e8e8eb!important;display:flex;align-items:center}.bp-modal-form .bp-modal-form-content .intention-container .official-form-tag-active[data-v-4e2b10b6]{background:#f5c924!important}.bp-modal-form .bp-modal-form-content .form-textarea[data-v-4e2b10b6]{margin-bottom:36px;min-height:80px}.bp-modal-form .bp-modal-form-content .form-submit-button-container[data-v-4e2b10b6]{height:auto;width:100%;background:transparent;right:0;bottom:40px;display:flex;justify-content:flex-end}.bp-modal-form .bp-modal-form-content .form-submit-button-container .button-go[data-v-4e2b10b6]{height:40px;width:40px;background:#ffdd4d;padding:6px;cursor:pointer}@media screen and (max-width:768px){.bp-modal-form .bp-modal-submit-success[data-v-4e2b10b6]{width:100%}.bp-modal-form .bp-modal-submit-success .form-submit-button-container[data-v-4e2b10b6]{position:relative;left:50%;top:0;transform:translateX(-60px)}.bp-modal-form .bp-modal-form-content[data-v-4e2b10b6]{width:100%;height:70%;padding:24px}.bp-modal-form .bp-modal-form-content .official-width-default[data-v-4e2b10b6]{flex-wrap:wrap}.bp-modal-form .bp-modal-form-content .form-input-container[data-v-4e2b10b6],.bp-modal-form .bp-modal-form-content .form-input-container .input-official-form[data-v-4e2b10b6]{width:100%}.bp-modal-form .bp-modal-form-content .form-submit-button-container[data-v-4e2b10b6]{justify-content:center}}@media screen and (max-width:480px){.bp-modal-form .bp-modal-form-content[data-v-4e2b10b6]{height:auto;padding:8px 24px;-webkit-overflow-scrolling:touch}.bp-modal-form .bp-modal-form-content .form-textarea[data-v-4e2b10b6]{width:100%!important;flex-shrink:0;margin-bottom:5px!important}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "86e9":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".el-carousel__item[data-v-70e4c7dc]{position:absolute;top:0;left:0;width:100%;height:100%;display:inline-block;overflow:hidden;z-index:0}.el-carousel__item.is-active[data-v-70e4c7dc]{z-index:2}.el-carousel__item--card[data-v-70e4c7dc],.el-carousel__item.is-animating[data-v-70e4c7dc]{transition:transform .4s ease-in-out}.el-carousel__item--card[data-v-70e4c7dc]{width:50%}.el-carousel__item--card.is-in-stage[data-v-70e4c7dc]{cursor:pointer;z-index:1}.el-carousel__item--card.is-in-stage.is-hover .el-carousel__mask[data-v-70e4c7dc],.el-carousel__item--card.is-in-stage:hover .el-carousel__mask[data-v-70e4c7dc]{opacity:.12}.el-carousel__item--card.is-active[data-v-70e4c7dc]{z-index:2}.el-carousel__mask[data-v-70e4c7dc]{position:absolute;width:100%;height:100%;top:0;left:0;background-color:#fff;opacity:.24;transition:.2s}", ""]);
// Exports
module.exports = exports;


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

/***/ "889c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_about_us_vue_vue_type_style_index_0_id_6000334c_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2b83");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_about_us_vue_vue_type_style_index_0_id_6000334c_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_about_us_vue_vue_type_style_index_0_id_6000334c_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_about_us_vue_vue_type_style_index_0_id_6000334c_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_about_us_vue_vue_type_style_index_0_id_6000334c_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "8917":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-41b9bc36]{box-sizing:border-box}.svg-icon[data-v-41b9bc36]{width:16px;height:16px}svg[data-v-41b9bc36]:focus{outline:none}.option-active[data-v-41b9bc36]{color:#fff!important;background-color:rgba(9,30,66,.71)!important}.option-active .icon path[data-v-41b9bc36]{fill:#fff}.bp-option[data-v-41b9bc36]{height:32px;width:100%;margin-left:8;margin-right:8;margin-top:8;margin-bottom:8;padding-left:8;padding-right:8;padding-top:8;padding-bottom:8;background:transparent;color:#344563;display:flex;padding:0 16px;align-items:center}.bp-option[data-v-41b9bc36]:hover{background-color:#ebecf0!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "8ad8":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".body-primary[data-v-6923b996]{color:rgba(9,30,66,.95);font-size:14px;font-weight:500}", ""]);
// Exports
module.exports = exports;


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

/***/ "8c1f":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("2dd6");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("52726e3f", content, shadowRoot)
};

/***/ }),

/***/ "8d68":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-6000334c]{letter-spacing:.4px;line-height:1.6;box-sizing:border-box}.bp-about-us[data-v-6000334c]{min-width:375px;align-items:center}.bp-about-us[data-v-6000334c],.bp-about-us .about-us-header[data-v-6000334c]{width:100%;display:flex;flex-direction:column}.bp-about-us .about-us-header[data-v-6000334c]{height:600px;padding-left:100px;background:0 0;background-image:linear-gradient(rgba(22,28,57,.5),rgba(22,28,57,.5));background-size:cover;justify-content:center}.bp-about-us .about-us-header .above-data-detail-header-img[data-v-6000334c]{-o-object-fit:cover;object-fit:cover;height:600px;width:100%;position:absolute;z-index:-2;left:0}.bp-about-us .about-us-header .ph-body-small-inverse[data-v-6000334c]{opacity:.7;font-size:14px;color:#fff;cursor:pointer!important}.bp-about-us .about-us-header .top-breadcrumb[data-v-6000334c]{position:absolute;top:104px}.bp-about-us .about-us-header .mr-0[data-v-6000334c]{margin-right:2px}.bp-about-us .about-us-header .page-header-anton-font[data-v-6000334c]{font-family:Anton-Regular;font-size:100px;color:#fff;letter-spacing:2.5px;background-image:linear-gradient(hsla(0,0%,100%,.4),hsla(0,0%,100%,0) 80%);-webkit-text-fill-color:transparent;-webkit-background-clip:text;background-clip:text}.bp-about-us .about-us-header .about-us-header-slogan-b[data-v-6000334c]{height:auto;width:auto;margin-top:20px;background:0 0;font-size:40px;color:#fff;position:relative;top:-95px}.bp-about-us .about-us-header .abount-us-header-slogan-c[data-v-6000334c]{height:auto;width:auto;margin-top:4px;background:0 0;font-size:24px;color:#fff;opacity:.9;position:relative;top:-50px}.bp-about-us .abount-us-text-info[data-v-6000334c]{height:auto;width:1200px;background:0 0;padding:104px 0 64px;position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center}.bp-about-us .abount-us-text-info .about-us-connect-img[data-v-6000334c]{height:auto;width:auto;background:0 0;position:absolute;top:-40px;-o-object-fit:cover;object-fit:cover}.bp-about-us .abount-us-text-info .abount-us-text-info-title-a[data-v-6000334c],.bp-about-us .abount-us-text-info .abount-us-text-info-title-b[data-v-6000334c]{height:auto;width:640px;background:0 0;font-size:24px;color:#2d334d}.bp-about-us .abount-us-text-info .abount-us-text-info-title-b[data-v-6000334c]{margin-bottom:32px}.bp-about-us .abount-us-text-info .abount-us-text-info-text[data-v-6000334c]{height:auto;width:640px;margin-bottom:32px;background:0 0;font-size:16px;color:#747789}.bp-about-us .abount-us-text-info .about-us-text-date-row[data-v-6000334c]{height:auto;width:640px;margin-bottom:32px;background:0 0;padding:0 40px;display:flex;flex-direction:row;justify-content:space-between}.bp-about-us .abount-us-text-info .about-us-text-date-row .about-us-text-data-col[data-v-6000334c]{height:auto;width:81px;background:0 0;display:flex;flex-direction:column}.bp-about-us .abount-us-text-info .about-us-text-date-row .about-us-text-data-col .about-us-text-date-col-line[data-v-6000334c]{height:1px;width:81px;margin-bottom:21px;background:#161c39;opacity:.12}.bp-about-us .abount-us-text-info .about-us-text-date-row .about-us-text-data-col .about-us-text-date-col-a[data-v-6000334c]{height:auto;width:auto;white-space:nowrap;margin-bottom:8px;background:0 0;color:#2d334d;font-size:24px;font-weight:200}.bp-about-us .abount-us-text-info .about-us-text-date-row .about-us-text-data-col .about-us-text-date-col-b[data-v-6000334c]{height:auto;width:auto;background:0 0;color:#a2a5b0;font-size:12px}.bp-about-us .abount-us-text-info .about-us-text-desc[data-v-6000334c]{height:auto;width:640px;background:0 0;font-size:16px;color:#747789}@media (max-width:992px){.bp-about-us[data-v-6000334c] ::-webkit-scrollbar-thumb{background:transparent}.bp-about-us .about-us-header[data-v-6000334c]{padding:0 60px!important}.bp-about-us .about-us-header .page-header-anton-font[data-v-6000334c]{font-size:60px!important}.bp-about-us .abount-us-text-info[data-v-6000334c]{width:100%!important;padding:100px 16%!important}.bp-about-us .abount-us-text-info .abount-us-text-info-text[data-v-6000334c],.bp-about-us .abount-us-text-info .abount-us-text-info-title-a[data-v-6000334c],.bp-about-us .abount-us-text-info .abount-us-text-info-title-b[data-v-6000334c],.bp-about-us .abount-us-text-info .about-us-text-date-row[data-v-6000334c],.bp-about-us .abount-us-text-info .about-us-text-desc[data-v-6000334c]{width:100%!important}.bp-about-us .abount-us-text-info .about-us-text-date-row[data-v-6000334c]{padding:0 16px!important}}@media (max-width:768px){.bp-about-us .abount-us-text-info[data-v-6000334c]{padding:100px 40px!important}.bp-about-us .about-us-header[data-v-6000334c]{padding:0 40px!important}}@media (max-width:549px),(width:549px){.bp-about-us .abount-us-text-info[data-v-6000334c]{padding:100px 24px!important}.bp-about-us .abount-us-text-info .page-header-anton-font[data-v-6000334c]{line-height:80px}.bp-about-us .about-us-header[data-v-6000334c]{padding-left:24px!important;padding-right:24px!important}.bp-about-us .about-us-header .about-us-header-slogan-b[data-v-6000334c]{top:-70px!important}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "8f3c":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("8917");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("01c8849b", content, shadowRoot)
};

/***/ }),

/***/ "8f8d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_page_bottom_vue_vue_type_style_index_0_id_39d77038_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d315");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_page_bottom_vue_vue_type_style_index_0_id_39d77038_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_page_bottom_vue_vue_type_style_index_0_id_39d77038_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_page_bottom_vue_vue_type_style_index_0_id_39d77038_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_page_bottom_vue_vue_type_style_index_0_id_39d77038_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "9498":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-d7e795c8]{box-sizing:border-box;line-height:1.6}.show-more-button-go[data-v-d7e795c8]{height:40px;width:40px;background:#ffdd4d;padding:8px;cursor:pointer}.button-official-yellow-line-compact[data-v-d7e795c8]{height:40px;padding:0 24px;line-height:40px;background:linear-gradient(45deg,rgba(255,221,77,.5),rgba(255,221,77,.5) 5%,transparent 0,transparent 50%,rgba(255,221,77,.5) 0,rgba(255,221,77,.5) 55%,transparent 0,transparent)!important;background-size:8px 8px!important;border:none;font-weight:500;font-size:14px;color:#2d334d!important}.bp-home[data-v-d7e795c8]{min-width:375px;flex-direction:column;overflow-x:hidden}.bp-home[data-v-d7e795c8],.bp-home .truth-content-area[data-v-d7e795c8]{width:100%;display:flex;align-items:center}.bp-home .truth-content-area[data-v-d7e795c8]{height:620px;max-width:1200px;flex-direction:row;justify-content:space-between;align-content:flex-start;padding:80px 100px 0}.bp-home .truth-content-area .title[data-v-d7e795c8]{flex-direction:column;justify-content:center;align-items:stretch;align-content:flex-start;height:auto;width:auto;background:0 0;display:flex;padding:0}.bp-home .truth-content-area .title .ph-H-Display[data-v-d7e795c8]{font-size:48px;color:#2d334d;letter-spacing:4px;font-weight:600;text-shadow:none;white-space:pre-line}.bp-home .truth-content-area .title .ph-body-medium[data-v-d7e795c8]{margin-top:16px;font-size:16px;color:#747789}.bp-home .truth-content-area .bp-img[data-v-d7e795c8]{-o-object-fit:cover;object-fit:cover}.bp-home .truth-content-area .home-header-img[data-v-d7e795c8]{height:366px;width:545px;pointer-events:none}.bp-home .content-active-area[data-v-d7e795c8]{height:421px;width:100%;min-height:421px;max-width:1200px;position:relative;justify-content:flex-end;padding-right:24px}.bp-home .content-active-area[data-v-d7e795c8],.bp-home .content-active-area .active-line[data-v-d7e795c8]{background:0 0;display:flex;flex-direction:row;align-content:flex-start;align-items:stretch}.bp-home .content-active-area .active-line[data-v-d7e795c8]{height:535px;width:8px;border-left:1px solid rgba(22,28,57,.1);position:absolute;left:100px;justify-content:flex-start}.bp-home .content-active-area .active-line .active-yellow-line[data-v-d7e795c8]{height:8px;width:2px;background:#f5c924;position:relative;left:-1px;opacity:.5;display:flex;flex-direction:row;justify-content:flex-start;align-items:stretch;align-content:flex-start}.bp-home .content-active-area .active-text[data-v-d7e795c8]{height:70px;width:22px;text-align:right;background:0 0;font-size:16px;color:#161c39;-ms-writing-mode:tb-rl;writing-mode:vertical-rl;transform:rotate(180deg);opacity:.6;position:absolute;left:110px}.bp-home .content-active-area .content-active-review-more-button[data-v-d7e795c8]{position:absolute;right:0;bottom:67px;z-index:2;height:auto;width:auto;background:0 0}.bp-home .content-active-area .content-active-review-more-button .show-more-button-container[data-v-d7e795c8]{height:auto;width:auto;background:0 0;display:flex;flex-direction:row;justify-content:flex-start;align-items:stretch;align-content:flex-start}.bp-home .content-active-area .content-active-review-more-button .show-more-button-container .button-official-gray-line[data-v-d7e795c8]{width:80px;height:32px;line-height:32px;background:linear-gradient(45deg,rgba(22,28,57,.2),rgba(22,28,57,.2) 5%,transparent 0,transparent 50%,rgba(22,28,57,.2) 0,rgba(22,28,57,.2) 55%,transparent 0,transparent)!important;background-size:10px 10px!important;border:none;font-weight:500;font-size:12px;color:#2d334d}.bp-home .content-active-area .content-active-review-more-button .show-more-button-container .active-button-go[data-v-d7e795c8]{height:32px;width:32px;background:#161c39;padding:6px;cursor:pointer}.bp-home .content-active-area .content-active-bg-yellow[data-v-d7e795c8]{height:180px;width:860px;background:#f5c924;border-radius:2px;right:0;position:absolute;z-index:0;opacity:.8;top:240px}.bp-home .content-active-area .content-active-bg-line-right[data-v-d7e795c8]{height:210px;width:1px;background:0 0;right:100px;position:absolute;z-index:0;opacity:.1;top:325px;border-left:1px solid #161c39}.bp-home .report-download-container[data-v-d7e795c8]{height:459px;max-width:1200px;width:100%;justify-content:center}.bp-home .report-download-container[data-v-d7e795c8],.bp-home .report-download-container .report-download[data-v-d7e795c8]{background:0 0;display:flex;flex-direction:row;align-items:center;align-content:flex-start}.bp-home .report-download-container .report-download[data-v-d7e795c8]{height:331px;width:1000px;border:1px solid #e8e9eb;padding:0 32px;position:relative;justify-content:space-between}.bp-home .report-download-container .report-download .report-download-left-corner[data-v-d7e795c8]{height:11px;width:11px;background:0 0;position:absolute;top:-4px;left:-4px}.bp-home .report-download-container .report-download .bp-img[data-v-d7e795c8]{-o-object-fit:cover;object-fit:cover;pointer-events:none}.bp-home .report-download-container .report-download .report-download-right-corner[data-v-d7e795c8]{height:11px;width:11px;background:0 0;position:absolute;right:-4px;bottom:-4px;transform:rotate(180deg)}.bp-home .report-download-container .report-download .report-download-img-container[data-v-d7e795c8]{height:251px;width:100%;display:flex;flex-direction:row;justify-content:center;align-items:center;position:relative;align-content:flex-start}.bp-home .report-download-container .report-download .report-download-img-container .report-down-img[data-v-d7e795c8]{height:242px;width:171px;-o-object-fit:fill;object-fit:fill;border-radius:2px;pointer-events:none}.bp-home .report-download-container .report-download .report-download-img-container .report-down-img-mask[data-v-d7e795c8]{width:153px;height:241px;position:absolute;border-radius:2px;background:#747789;z-index:-1;box-shadow:0 5px 7px 0 rgba(22,28,57,.36);transform-origin:0 242px;transform:rotate(4deg) translateX(-8px)}.bp-home .report-download-container .report-download .report-download-info[data-v-d7e795c8]{height:auto;width:auto;background:0 0;display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;align-content:flex-start}.bp-home .report-download-container .report-download .report-download-info .report-right-center[data-v-d7e795c8],.bp-home .report-download-container .report-download .report-download-info .report-right-head[data-v-d7e795c8]{margin-bottom:40px;display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;align-content:flex-start;height:auto;width:auto;background:0 0;padding:0}.bp-home .report-download-container .report-download .report-download-info .report-right-center .ph-H-small-theme[data-v-d7e795c8],.bp-home .report-download-container .report-download .report-download-info .report-right-head .ph-H-small-theme[data-v-d7e795c8]{letter-spacing:.2px;height:20px;font-size:14px;color:#f5c924}.bp-home .report-download-container .report-download .report-download-info .report-right-center .ph-body-small[data-v-d7e795c8],.bp-home .report-download-container .report-download .report-download-info .report-right-head .ph-body-small[data-v-d7e795c8]{font-size:14px;color:#747789}.bp-home .report-download-container .report-download .report-download-info .report-right-center .ph-H-large-title[data-v-d7e795c8],.bp-home .report-download-container .report-download .report-download-info .report-right-head .ph-H-large-title[data-v-d7e795c8]{margin-bottom:8px;font-size:24px;color:#2d334d}.bp-home .report-download-container .report-download .report-download-info .report-right-center .pb-body-small-tertiary[data-v-d7e795c8],.bp-home .report-download-container .report-download .report-download-info .report-right-head .pb-body-small-tertiary[data-v-d7e795c8]{font-size:12px;color:#a2a5b0}.bp-home .report-download-container .report-download .report-download-info .show-more-button-container[data-v-d7e795c8]{height:auto;width:auto;background:0 0;display:flex;flex-direction:row;justify-content:flex-start;align-items:stretch;align-content:flex-start;cursor:pointer!important;padding:0}.bp-home .report-download-container .report-download .report-download-info .show-more-button-container .report-down-button[data-v-d7e795c8]{width:240px!important;border-radius:0!important;background:#ffdd4d;color:#2d334d;border:none;cursor:inherit;height:40px!important;text-align:center!important;display:inline-block!important;font-size:14px;letter-spacing:1px;line-height:32px}.bp-home .report-download-container .report-download .report-download-info .show-more-button-container .more-reports-button[data-v-d7e795c8]{width:137px;height:40px;display:flex;justify-content:center;align-items:center;margin-left:16px;margin-right:22px}.bp-home .report-download-container .report-download .report-download-info .show-more-button-container .more-reports-button .more-reports[data-v-d7e795c8]{display:flex;justify-content:center;align-items:center;font-size:14px}.bp-home .report-download-container .report-download .report-download-info .show-more-button-container .more-reports-button .more-reports .more-reports-img[data-v-d7e795c8]{width:21px;height:21px;margin-left:8px}.bp-home .data-show[data-v-d7e795c8]{height:778px;width:1200px;padding:0 100px 12px;background:0 0;display:flex;flex-direction:column;align-items:center;align-content:flex-start;justify-content:flex-start}.bp-home .data-show .report-connect-img[data-v-d7e795c8]{height:auto;width:auto;background:0 0;position:relative;top:-30px}.bp-home .data-show .home-about-us-peoples[data-v-d7e795c8]{font-size:24px;color:#747789;letter-spacing:.4px;text-align:center}.bp-home .data-show .ph-H-xLarge[data-v-d7e795c8]{margin-bottom:32px!important;font-size:40px;font-weight:200;color:#2d334d}.bp-home .data-show .show-more-button-container[data-v-d7e795c8]{width:auto;cursor:pointer;justify-content:flex-start;align-items:stretch}.bp-home .data-show .data-show-text-part[data-v-d7e795c8],.bp-home .data-show .show-more-button-container[data-v-d7e795c8]{height:auto;margin-bottom:43px;background:0 0;display:flex;flex-direction:row;align-content:flex-start}.bp-home .data-show .data-show-text-part[data-v-d7e795c8]{width:55%;justify-content:space-between;align-items:center;text-align:center}.bp-home .data-show .data-show-text-part .ph-body-medium_brand[data-v-d7e795c8]{font-size:16px;color:#f5d924}.bp-home .data-show .data-show-text-part .home-data-value-text-line[data-v-d7e795c8]{height:1px;width:83px;background:#697786;opacity:.2}.bp-home .data-show .data-show-img[data-v-d7e795c8]{height:421px;width:668px;-o-object-fit:contain;object-fit:contain;background:0 0}.bp-home .max-show[data-v-d7e795c8]{width:100%;min-height:688px;max-width:1200px;flex-direction:row;flex-wrap:wrap-reverse;justify-content:flex-start}.bp-home .max-show[data-v-d7e795c8],.bp-home .max-show .max-show-left[data-v-d7e795c8]{height:auto;background:0 0;display:flex;align-content:flex-start;align-items:stretch}.bp-home .max-show .max-show-left[data-v-d7e795c8]{width:auto;padding-left:100px;flex-direction:column;justify-content:center;flex:1}.bp-home .max-show .max-show-left .max-show-left-text-line[data-v-d7e795c8]{height:40px;width:60px;background:0 0;border-top:1px solid #ffcc30}.bp-home .max-show .max-show-left .max-show-left-text-row-1[data-v-d7e795c8]{height:auto;width:auto;margin-bottom:40px;background:0 0;display:flex;flex-direction:row;justify-content:flex-start;align-items:stretch;align-content:flex-start}.bp-home .max-show .max-show-left .max-show-left-text-row-1 .ph-H-xLarge[data-v-d7e795c8]{margin-right:4px;font-size:40px;font-weight:200;color:#2d334d}.bp-home .max-show .max-show-left .max-show-left-text-row-1 .ph-body-xsmall-tertiary[data-v-d7e795c8]{padding-top:28px;font-size:12px;color:#a2a5b0}.bp-home .max-show .max-show-left .max-text-center[data-v-d7e795c8]{white-space:pre-line;font-size:24px;color:#747789}.bp-home .max-show .max-show-left .max-text-center-brand[data-v-d7e795c8]{font-size:24px;color:#f5c924}.bp-home .max-show .max-show-left .max-show-more-button-container[data-v-d7e795c8]{height:auto;width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-top:40px;background:0 0;cursor:pointer;display:flex}.bp-home .max-show .max-show-left .max-show-more-button-container .max-button-go[data-v-d7e795c8]{height:40px;width:40px;background:#ffdd4d;padding:8px}.bp-home .max-show .max-show-right-img-container[data-v-d7e795c8]{height:auto;width:auto;background:0 0;flex:1;display:flex}.bp-home .max-show .max-show-right-img-container .max-show-right-img[data-v-d7e795c8]{height:688px;width:600px;-o-object-fit:contain;object-fit:contain;background:0 0}.bp-home .real-world[data-v-d7e795c8]{width:100%;height:auto;background:0 0;flex-direction:row;flex-wrap:wrap;min-height:498px;max-width:1200px;display:flex}.bp-home .real-world .real-world-left-img-container[data-v-d7e795c8]{height:auto;width:auto;background:0 0;flex:1;padding:62px 77px;display:flex}.bp-home .real-world .real-world-left-img-container .real-world-left-img[data-v-d7e795c8]{height:397px;width:457px;-o-object-fit:fill;object-fit:fill;background:0 0}.bp-home .real-world .real-world-right[data-v-d7e795c8]{height:auto;width:auto;padding-right:100px;padding-left:32px;background:0 0;display:flex;flex-direction:column;justify-content:center;flex:1}.bp-home .real-world .real-world-right .real-world-right-line[data-v-d7e795c8]{height:40px;width:60px;background:0 0;border-top:1px solid #ffcc30}.bp-home .real-world .real-world-right .real-world-right-text-line-1[data-v-d7e795c8]{height:auto;width:auto;margin-bottom:40px;background:0 0;display:flex;flex-direction:row}.bp-home .real-world .real-world-right .real-world-right-text-line-1 .ph-H-xLarge[data-v-d7e795c8]{font-size:40px;font-weight:200;color:#2d334d}.bp-home .real-world .real-world-right .ph-H-Large[data-v-d7e795c8]{font-size:24px;color:#747789}.bp-home .real-world .real-world-right .ph-H-Large_brand[data-v-d7e795c8]{font-size:24px;color:#f5c924}.bp-home .real-world .real-world-right .real-show-more-button-container[data-v-d7e795c8]{height:auto;width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-top:40px;background:0 0;cursor:pointer;display:flex}.bp-home .advisory[data-v-d7e795c8]{width:100%;height:auto;background:0 0;flex-direction:row;flex-wrap:wrap-reverse;min-height:498px;max-width:1200px;display:flex}.bp-home .advisory .advisory-left[data-v-d7e795c8]{height:auto;width:auto;padding-left:100px;background:0 0;display:flex;flex-direction:column;justify-content:center;flex:1}.bp-home .advisory .advisory-left .advisory-left-line[data-v-d7e795c8]{height:40px;width:60px;background:0 0;border-top:1px solid #ffcc30}.bp-home .advisory .advisory-left .advisory-left-text-line-1[data-v-d7e795c8]{height:auto;width:auto;margin-bottom:40px;background:0 0;display:flex;flex-direction:row}.bp-home .advisory .advisory-left .advisory-left-text-line-1 .ph-H-xLarge[data-v-d7e795c8]{font-size:40px;font-weight:200;color:#2d334d}.bp-home .advisory .advisory-left .ph-H-Large[data-v-d7e795c8]{white-space:pre-line;font-size:24px;color:#747789}.bp-home .advisory .advisory-left .ph-H-Large_brand[data-v-d7e795c8]{font-size:24px;color:#f5c924}.bp-home .advisory .advisory-left .advisory-show-more-button-container[data-v-d7e795c8]{height:auto;width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-top:40px;background:0 0;cursor:pointer;display:flex}.bp-home .advisory .advisory-right-img-container[data-v-d7e795c8]{height:auto;width:auto;background:0 0;flex:1;display:flex}.bp-home .advisory .advisory-right-img-container .advisory-right-img[data-v-d7e795c8]{height:498px;width:600px;background:0 0}.bp-home .case-icon-contaniner[data-v-d7e795c8]{padding:96px 125px 0}.bp-home .case-icon-contaniner[data-v-d7e795c8],.bp-home .case-icon-contaniner-response[data-v-d7e795c8]{height:-webkit-max-content;height:-moz-max-content;height:max-content;width:100%;max-width:1200px;background:0 0;justify-content:space-between;opacity:.6;display:flex;flex-direction:column;flex-wrap:wrap}.bp-home .case-icon-contaniner-response[data-v-d7e795c8]{padding:100px 4px 0}@media (max-width:992px) and (min-width:769px){.bp-home .truth-content-area[data-v-d7e795c8]{padding:0 60px!important}.bp-home .home-header-img[data-v-d7e795c8]{width:45%!important;-o-object-fit:contain!important;object-fit:contain!important;margin-top:64px!important}.bp-home .content-active-panel[data-v-d7e795c8]{width:23%!important;height:357px!important}.bp-home .content-active-panel[data-v-d7e795c8] .active-img{width:100%!important;height:220px!important}.bp-home .content-active-panel[data-v-d7e795c8] .active-info{width:100%!important;height:117px!important;padding:24px!important}.bp-home .content-active-bg-yellow[data-v-d7e795c8]{width:70%!important;top:220px!important;height:200px!important}.bp-home .active-line[data-v-d7e795c8]{position:absolute!important;left:60px!important;height:635px!important}.bp-home .content-active-bg-line-right[data-v-d7e795c8]{right:60px!important;height:250px!important}.bp-home .content-active-area .active-text[data-v-d7e795c8]{left:70px!important}.bp-home .report-download-container[data-v-d7e795c8]{margin-bottom:60px!important;margin-top:30px!important}.bp-home .report-download-container .report-download[data-v-d7e795c8]{height:auto!important;margin:0 60px!important;padding:24px 0!important}.bp-home .report-download-container .report-download .report-download-info[data-v-d7e795c8]{width:56%!important;height:auto!important;text-align:center}.bp-home .report-download-container .report-download .report-download-info .show-more-button-container[data-v-d7e795c8]{width:100%!important;justify-content:center!important}.bp-home .report-download-container .report-download .report-download-img-container[data-v-d7e795c8]{height:251px;width:44%!important;justify-content:center;align-items:center}.bp-home .data-show[data-v-d7e795c8]{width:100%!important;padding:0 50px!important}.bp-home .data-show .data-show-text-part[data-v-d7e795c8]{width:85%!important}.bp-home .data-show .data-show-img[data-v-d7e795c8]{height:388px!important;width:64%!important}.bp-home .max-show-left[data-v-d7e795c8]{padding:60px!important}.bp-home .advisory-right-img[data-v-d7e795c8],.bp-home .max-show-right-img[data-v-d7e795c8],.bp-home .real-world-left-img[data-v-d7e795c8]{width:100%!important;-o-object-fit:cover;object-fit:cover;min-width:312px!important}.bp-home .advisory-left[data-v-d7e795c8]{padding-left:60px!important}.bp-home .case-icon-contaniner[data-v-d7e795c8]{padding:100px 24px!important}}@media (max-width:768px) and (min-width:550px){.bp-home .truth-content-area[data-v-d7e795c8]{height:auto!important;width:100%!important;padding:0 8%!important;margin-top:150px;flex-wrap:wrap;justify-content:center!important}.bp-home .truth-content-area .ph-H-Display[data-v-d7e795c8]{text-align:center}.bp-home .truth-content-area .home-header-img[data-v-d7e795c8]{width:70%!important;-o-object-fit:contain!important;object-fit:contain!important;margin-top:64px!important}.bp-home .truth-content-area .ph-body-medium[data-v-d7e795c8]{text-align:center}.bp-home .content-active-area[data-v-d7e795c8]{flex-wrap:wrap;height:auto!important}.bp-home .content-active-area .active-line[data-v-d7e795c8]{position:absolute!important;left:40px!important}.bp-home .content-active-area .active-text[data-v-d7e795c8]{left:50px!important}.bp-home .content-active-area .content-active-panel[data-v-d7e795c8]{width:74%!important;height:172px!important;flex-wrap:wrap;margin-top:24px!important}.bp-home .content-active-area .content-active-panel[data-v-d7e795c8] .active-img{width:50%!important;height:172px!important}.bp-home .content-active-area .content-active-panel[data-v-d7e795c8] .active-img .above-data-logo{display:none!important}.bp-home .content-active-area .content-active-panel[data-v-d7e795c8] .active-info{width:50%!important;height:172px!important;padding:12px!important}.bp-home .content-active-area .content-active-panel[data-v-d7e795c8] .home-avtive-names{height:90px!important}.bp-home .content-active-area .content-active-panel[data-v-d7e795c8] .active-logo{display:flex!important}.bp-home .content-active-area[data-v-d7e795c8] .content-active-review-more-button{bottom:10px!important}.bp-home .content-active-area .content-active-bg-yellow[data-v-d7e795c8]{height:440px!important;width:73%!important;top:185px!important}.bp-home .report-download-container[data-v-d7e795c8]{margin-bottom:60px!important;margin-top:140px!important}.bp-home .report-download-container .report-download[data-v-d7e795c8]{flex-wrap:wrap;height:auto!important;margin:0 40px!important;padding:24px 0!important;justify-content:center!important}.bp-home .report-download-container .report-download-info[data-v-d7e795c8]{width:100%!important;height:auto!important;text-align:center}.bp-home .report-download-container .report-download-info .show-more-button-container[data-v-d7e795c8]{width:100%!important;justify-content:center!important;flex-direction:column!important;align-items:center!important}.bp-home .data-show[data-v-d7e795c8]{width:100%!important;padding:0 50px!important}.bp-home .data-show .data-show-text-part[data-v-d7e795c8]{width:85%!important}.bp-home .data-show .data-show-img[data-v-d7e795c8]{height:265px!important;width:100%!important;-o-object-fit:cover;object-fit:cover}.bp-home .max-show[data-v-d7e795c8]{flex-direction:column-reverse!important;padding:40px!important}.bp-home .max-show .max-show-left[data-v-d7e795c8]{padding:24px!important;align-items:center!important}.bp-home .max-show .max-show-left .max-show-left-text-row-1[data-v-d7e795c8]{flex-direction:column!important;align-content:center!important;margin-bottom:0!important}.bp-home .max-show .max-show-left .max-show-left-text-row-1 .ph-H-xLarge[data-v-d7e795c8]{text-align:center}.bp-home .max-show .max-show-left .max-show-left-text-row-1 .ph-body-xsmall-tertiary[data-v-d7e795c8],.bp-home .real-world-left-img-container[data-v-d7e795c8]{padding:0!important}.bp-home .advisory-right-img[data-v-d7e795c8],.bp-home .max-show-right-img[data-v-d7e795c8],.bp-home .real-world-left-img[data-v-d7e795c8]{width:100%!important;height:320px!important;-o-object-fit:cover;object-fit:cover;min-width:312px!important}.bp-home .real-world[data-v-d7e795c8]{flex-direction:column!important;align-content:center!important;padding:40px!important}.bp-home .real-world .real-world-right[data-v-d7e795c8]{align-items:center!important;padding:0 24px!important}.bp-home .real-world .real-world-left-img[data-v-d7e795c8]{padding:24px!important}.bp-home .advisory[data-v-d7e795c8]{padding:40px!important;flex-direction:column!important;align-content:center!important}.bp-home .advisory .advisory-right-img[data-v-d7e795c8]{margin-top:60px!important}.bp-home .advisory .advisory-left[data-v-d7e795c8]{padding:0 24px!important;align-items:center!important}.bp-home .advisory .advisory-left .advisory-left-text-line-1[data-v-d7e795c8]{margin-bottom:0!important}}@media (max-width:549px),(width:549px){.bp-home .ph-H-xLarge[data-v-d7e795c8]{font-size:28px!important}.bp-home .ph-H-Display[data-v-d7e795c8]{font-size:30px!important}.bp-home .truth-content-area[data-v-d7e795c8]{height:auto!important;width:100%!important;padding:0 8%!important;margin-top:100px;flex-wrap:wrap;justify-content:center!important}.bp-home .truth-content-area .ph-body-medium[data-v-d7e795c8],.bp-home .truth-content-area .ph-H-Display[data-v-d7e795c8]{text-align:center}.bp-home .truth-content-area .home-header-img[data-v-d7e795c8]{width:100%!important;-o-object-fit:contain!important;object-fit:contain!important}.bp-home .content-active-area[data-v-d7e795c8]{flex-wrap:wrap;height:auto!important}.bp-home .content-active-area .active-line[data-v-d7e795c8],.bp-home .content-active-area .active-text[data-v-d7e795c8]{position:absolute!important;left:24px!important}.bp-home .content-active-area .active-line[data-v-d7e795c8]{height:935px!important}.bp-home .content-active-area .content-active-bg-line-right[data-v-d7e795c8]{right:24px!important;top:730px!important;height:110px!important}.bp-home .content-active-area .content-active-panel[data-v-d7e795c8]{width:74%!important;height:172px!important;flex-wrap:wrap;margin-top:8px!important}.bp-home .content-active-area .content-active-panel[data-v-d7e795c8] .above-data-logo{display:none!important}.bp-home .content-active-area .content-active-panel[data-v-d7e795c8] .active-img{width:130px!important;height:172px!important}.bp-home .content-active-area .content-active-panel[data-v-d7e795c8] .active-img .img-mask,.bp-home .content-active-area .content-active-panel[data-v-d7e795c8] .active-img img{border-radius:2px 0 0 2px!important}.bp-home .content-active-area .content-active-panel[data-v-d7e795c8] .active-info{width:50%!important;height:150px!important;padding:16px 8px 0 5px!important}.bp-home .content-active-area .content-active-panel[data-v-d7e795c8] .position-info{bottom:25px!important}.bp-home .content-active-area .content-active-panel[data-v-d7e795c8] .home-avtive-names{height:100%!important;margin-bottom:0}.bp-home .content-active-area .content-active-panel[data-v-d7e795c8] .active-logo{display:inherit!important}.bp-home .content-active-area .content-active-panel[data-v-d7e795c8] .active-title{height:65px}.bp-home .content-active-area[data-v-d7e795c8] .content-active-review-more-button{bottom:16px!important}.bp-home .content-active-area .content-active-bg-yellow[data-v-d7e795c8]{height:529px!important;width:73%!important;top:55px!important}.bp-home .report-download-container[data-v-d7e795c8]{height:auto!important;margin-bottom:60px!important;margin-top:112px!important}.bp-home .report-download-container .report-download[data-v-d7e795c8]{flex-wrap:wrap;height:auto!important;margin:0 24px;padding:41px 24px 24px 24px!important}.bp-home .report-download-container .report-download .report-download-img-container[data-v-d7e795c8]{margin-bottom:24px}.bp-home .report-download-container .report-download .report-download-info[data-v-d7e795c8]{width:100%!important;height:auto!important;text-align:center}.bp-home .report-download-container .report-download .report-download-info .show-more-button-container[data-v-d7e795c8]{width:100%!important;justify-content:center!important;flex-direction:column;align-items:center}.bp-home .data-show[data-v-d7e795c8]{width:100%!important;height:700px!important;padding:0 24px!important}.bp-home .data-show .home-about-us-peoples[data-v-d7e795c8]{font-size:16px!important;letter-spacing:.27px!important}.bp-home .data-show .data-show-text-part[data-v-d7e795c8]{width:100%!important}.bp-home .data-show .data-show-img[data-v-d7e795c8]{height:265px!important;width:100%!important;-o-object-fit:contain;object-fit:contain}.bp-home .max-show .max-show-left[data-v-d7e795c8]{padding:20px 24px 48px 24px!important;align-items:center!important}.bp-home .max-show .max-show-left .max-show-left-text-line[data-v-d7e795c8]{height:32px!important}.bp-home .max-show .max-show-left .max-show-left-text-row-1[data-v-d7e795c8]{flex-direction:column!important;align-content:center!important;margin-bottom:0!important}.bp-home .max-show .max-show-left .max-show-left-text-row-1 .ph-H-xLarge[data-v-d7e795c8]{text-align:center}.bp-home .max-show .max-show-left .max-show-left-text-row-1 .ph-body-xsmall-tertiary[data-v-d7e795c8]{padding:0!important;margin-bottom:24px!important}.bp-home .max-show .max-show-left .max-show-more-button-container[data-v-d7e795c8]{margin-top:24px!important}.bp-home .max-show .max-show-right-img-container[data-v-d7e795c8]{padding:0 24px}.bp-home .max-show .max-show-right-img-container .max-show-right-img[data-v-d7e795c8]{width:100%!important;height:320px!important;-o-object-fit:contain!important;object-fit:contain!important;min-width:312px!important}.bp-home .advisory-right-img[data-v-d7e795c8],.bp-home .real-world-left-img[data-v-d7e795c8]{width:100%!important;height:320px!important;-o-object-fit:cover;object-fit:cover;min-width:312px!important}.bp-home .real-world-left-img-container[data-v-d7e795c8]{padding:0!important}.bp-home .real-world-left-img-container .real-world-left-img[data-v-d7e795c8]{margin-bottom:16px!important;margin-top:24px;-o-object-fit:contain!important;object-fit:contain!important}.bp-home .real-world .real-world-right[data-v-d7e795c8]{align-items:center!important;padding:0 24px!important;margin-bottom:48px}.bp-home .real-world .real-world-right .real-world-right-text-line-1[data-v-d7e795c8]{margin-bottom:24px!important}.bp-home .real-world .real-world-right .real-world-right-line[data-v-d7e795c8]{height:32px!important}.bp-home .real-world .real-world-right .ph-H-Large[data-v-d7e795c8]{text-align:center}.bp-home .real-world .real-world-right .real-show-more-button-container[data-v-d7e795c8]{margin-top:24px!important}.bp-home .real-world .real-world-left-img[data-v-d7e795c8]{padding:24px!important}.bp-home .advisory .advisory-left[data-v-d7e795c8]{padding:40px 24px 48px!important;align-items:center!important}.bp-home .advisory .advisory-left .advisory-left-text-line-1[data-v-d7e795c8]{margin-bottom:24px!important}.bp-home .advisory .advisory-left .advisory-show-more-button-container[data-v-d7e795c8]{margin-top:24px!important}.bp-home .advisory .advisory-right-img-container[data-v-d7e795c8]{margin-top:48px}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "95b6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_text_vue_vue_type_style_index_0_id_3682c21f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9a51");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_text_vue_vue_type_style_index_0_id_3682c21f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_text_vue_vue_type_style_index_0_id_3682c21f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_text_vue_vue_type_style_index_0_id_3682c21f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_text_vue_vue_type_style_index_0_id_3682c21f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "986f":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-a43c46a2]{letter-spacing:.4px;line-height:1.6;box-sizing:border-box}.case-icon-line[data-v-a43c46a2]{flex-wrap:wrap;height:auto;width:100%;background:0 0;display:flex;flex-direction:row;justify-content:space-between;margin-bottom:8px}.case-icon-line .case-icon[data-v-a43c46a2]{height:49px;width:33%!important;-o-object-fit:contain!important;object-fit:contain!important;margin-bottom:32px;background:0 0}.case-icon-line-three[data-v-a43c46a2]{padding:0 100px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "9a1b":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".el-carousel__container[data-v-41ad729a]{text-align:center}.el-carousel[data-v-41ad729a]{position:relative}.el-carousel--horizontal[data-v-41ad729a]{overflow-x:hidden}.el-carousel--vertical[data-v-41ad729a]{overflow-y:hidden}.el-carousel__container[data-v-41ad729a]{position:relative;height:300px}.el-carousel__arrow[data-v-41ad729a]{border:none;outline:none;padding:0;margin:0;height:36px;width:36px;cursor:pointer;transition:.3s;border-radius:50%;background-color:rgba(31,45,61,.11);color:#fff;position:absolute;top:50%;z-index:10;transform:translateY(-50%);text-align:center;font-size:12px}.el-carousel__arrow--left[data-v-41ad729a]{left:16px}.el-carousel__arrow--right[data-v-41ad729a]{right:16px}.el-carousel__arrow[data-v-41ad729a]:hover{background-color:rgba(31,45,61,.23)}.el-carousel__arrow i[data-v-41ad729a]{cursor:pointer}.el-carousel__indicators[data-v-41ad729a]{position:absolute;list-style:none;margin:0;padding:0;z-index:2}.el-carousel__indicators--horizontal[data-v-41ad729a]{bottom:0;left:50%;transform:translateX(-50%)}.el-carousel__indicators--vertical[data-v-41ad729a]{right:0;top:50%;transform:translateY(-50%)}.el-carousel__indicators--outside[data-v-41ad729a]{bottom:26px;text-align:center;position:static;transform:none}.el-carousel__indicators--outside .el-carousel__indicator:hover button[data-v-41ad729a]{opacity:.64}.el-carousel__indicators--outside button[data-v-41ad729a]{background-color:#c0c4cc;opacity:.24}.el-carousel__indicators--labels[data-v-41ad729a]{left:0;right:0;transform:none;text-align:center}.el-carousel__indicators--labels .el-carousel__button[data-v-41ad729a]{height:auto;width:auto;padding:2px 18px;font-size:12px}.el-carousel__indicators--labels .el-carousel__indicator[data-v-41ad729a]{padding:6px 4px}.el-carousel__indicator[data-v-41ad729a]{background-color:transparent;cursor:pointer}.el-carousel__indicator:hover button[data-v-41ad729a]{opacity:.72}.el-carousel__indicator--horizontal[data-v-41ad729a]{display:inline-block;padding:12px 4px}.el-carousel__indicator--vertical[data-v-41ad729a]{padding:4px 12px}.el-carousel__indicator--vertical .el-carousel__button[data-v-41ad729a]{width:2px;height:15px}.el-carousel__indicator.is-active button[data-v-41ad729a]{opacity:1;background-color:#2a7afe}.el-carousel__button[data-v-41ad729a]{display:block;opacity:.48;width:15px;height:15px;background-color:#ccc;border:none;outline:none;padding:0;margin:0;cursor:pointer;transition:.3s;border-radius:50%;margin:0 5px}.carousel-arrow-left-enter[data-v-41ad729a],.carousel-arrow-left-leave-active[data-v-41ad729a]{transform:translateY(-50%) translateX(-10px);opacity:0}.carousel-arrow-right-enter[data-v-41ad729a],.carousel-arrow-right-leave-active[data-v-41ad729a]{transform:translateY(-50%) translateX(10px);opacity:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "9a1e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_carousel_vue_vue_type_style_index_0_id_6d6199db_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("748a");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_carousel_vue_vue_type_style_index_0_id_6d6199db_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_carousel_vue_vue_type_style_index_0_id_6d6199db_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_carousel_vue_vue_type_style_index_0_id_6d6199db_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_carousel_vue_vue_type_style_index_0_id_6d6199db_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


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

/***/ "9aab":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ea4f");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("349ca2b8", content, shadowRoot)
};

/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("56f5");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("5c69b063", content, shadowRoot)
};

/***/ }),

/***/ "9b4a":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("fc7a");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("fbb1e52a", content, shadowRoot)
};

/***/ }),

/***/ "9bfb":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ea1a");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("1f218d4d", content, shadowRoot)
};

/***/ }),

/***/ "9c79":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_modal_form_vue_vue_type_style_index_0_id_a76be314_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9b43");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_modal_form_vue_vue_type_style_index_0_id_a76be314_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_modal_form_vue_vue_type_style_index_0_id_a76be314_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_modal_form_vue_vue_type_style_index_0_id_a76be314_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_modal_form_vue_vue_type_style_index_0_id_a76be314_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "9cb1":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("60b1");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("79f19336", content, shadowRoot)
};

/***/ }),

/***/ "9d4a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_select_vue_vue_type_style_index_0_id_596e214c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9aab");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_select_vue_vue_type_style_index_0_id_596e214c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_select_vue_vue_type_style_index_0_id_596e214c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_select_vue_vue_type_style_index_0_id_596e214c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_select_vue_vue_type_style_index_0_id_596e214c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "9f52":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*{box-sizing:border-box}body{margin:0}a{font-size:14px;color:#7163c5;line-height:32px;text-decoration:none;text-align:center}button{outline:none}.placeholder{color:rgba(9,30,66,.48)}.field_value,.placeholder{font-size:14px;font-weight:400}.field_value{color:rgba(9,30,66,.77)}button:focus{outline:none!important}button.button-primary{background:#7163c5;color:#fff}.button-primary:hover{background:#9084d2}.button-primary:active{background:#5342b3}.button-primary .button-icon-color path{fill:#fff}.button-primary:disabled .button-icon-color path{fill:rgba(9,30,66,.31)}button.button-standard{background:rgba(9,30,66,.04);color:rgba(9,30,66,.71)}.button-standard:hover{background:#e5eaec}.button-standard:active{background:#f2f0f9;color:#7163c5}.button-standard .button-icon-color path{fill:rgba(9,30,66,.71)}.button-standard:disabled .button-icon-color path{fill:rgba(9,30,66,.31)}.button-standard:active .button-icon-color path{fill:#7163c5}.button-primary:disabled,.button-standard:disabled{background:rgba(9,30,66,.04);color:rgba(9,30,66,.31);cursor:not-allowed}button.button-subtle{background:#fff;color:rgba(9,30,66,.71)}.button-subtle:hover{background:#e5eaec}.button-subtle:active{background:#f2f0f9}.button-subtle:disabled{color:rgba(9,30,66,.31);cursor:not-allowed}.button-subtle .button-icon-color path{fill:rgba(9,30,66,.71)}.button-subtle:disabled .button-icon-color path{fill:rgba(9,30,66,.31)}.button-subtle:active .button-icon-color path{fill:#7163c5}.button-destructive{background:#de350b;color:#fff}.button-destructive:hover{background:#ff5630}.button-destructive:active{background:#bf2600}.button-warning{background:#ffe380;color:rgba(9,30,66,.71)}.button-warning:hover{background:#ffc400}.button-warning:active{background:#fff0b3}.button-density-comfy{height:40px;line-height:40px}.button-density-default{height:32px;line-height:32px}.button-density-compact{height:24px;line-height:24px}.bp-button.btn-block{width:100%}.button-group .button-item{background:rgba(9,30,66,.04);color:rgba(9,30,66,.71);font-size:14px;outline:none;cursor:pointer;border:0;margin-right:2px}.button-group button:first-child{border-radius:4px 0 0 4px}.button-group button:last-child{border-radius:0 4px 4px 0;margin-right:0}.button-group .button-item.active{background:rgba(9,30,66,.71);color:#fff}.link-disabled{color:rgba(9,30,66,.31);cursor:not-allowed}.link-default{color:rgba(9,30,66,.66)}.link-default:hover{color:rgba(9,30,66,.42)}.link-default:active{color:rgba(9,30,66,.71)}.link-primary{color:#7163c5}.link-primary:hover{color:#9084d2}.link-primary:active{color:#5342b3}input:disabled{background:rgba(9,30,66,.04)!important;border:none!important;color:rgba(9,30,66,.31);cursor:not-allowed}.input-compact{height:24px}.input-comfy{height:40px}.input-default{height:32px}.input-error{border:1px solid #de350b!important}.input-warning{border:1px solid #ffe380!important}.input-success{border:1px solid #36b37e!important}.input-info{border:1px solid #403294!important}::-webkit-scrollbar{width:4px;height:4px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:rgba(9,30,66,.25);border-radius:10px}.d-none{display:none}.tab-active{color:#7163c5!important}.tab-active:after{position:absolute;bottom:-1px;left:0;content:\"\";width:100%;height:2px;background:#7163c5}.bp-submenu-title{display:flex;height:40px;align-items:center;cursor:pointer}.menu-sub{padding-left:40px}.icon{margin-right:12px}.icon-small{height:18px}.icon-small svg{height:16px;width:16px}.icon-white path{fill:#fff}.icon-warning path{fill:#ffe380}.icon-error path{fill:#de350b}.icon-info-filled path,.icon-info path{fill:#7163c5}.icon-green path{fill:#36b37e}.icon-pointer{cursor:pointer}input[type=radio]{position:absolute;clip:rect(0,0,0,0)}input[type=radio]+label{font-size:14px;color:rgba(9,30,66,.82);box-sizing:content-box}input[type=radio]+label:before{content:\"\\a0\";display:inline-block;vertical-align:middle;width:10px;height:10px;margin:6px;border-radius:50%;border:1px solid rgba(9,30,66,.13);line-height:1;box-sizing:content-box}input[type=radio]:checked+label:before{background:#fff;border:4px solid #7163c5;height:4px;width:4px;background-clip:content-box;box-sizing:content-box}input[type=radio]:disabled+label:before{width:10px;height:10px;border-radius:50%;background:rgba(9,30,66,.04);border:1px solid rgba(9,30,66,.04);line-height:1}input[type=radio]:disabled+label:before,input[type=radio]:disabled:checked+label:before{content:\"\\a0\";display:inline-block;vertical-align:middle;margin:6px;box-sizing:content-box}input[type=radio]:disabled:checked+label:before{width:4px;height:4px;border-radius:50%;background:rgba(9,30,66,.36);border:4px solid rgba(9,30,66,.04)}.bp-select-title{height:100%;width:100%;display:flex;align-items:center;padding:0 8px;justify-content:space-between}.bp-option-group{margin:0;padding:4px 0;background:#fff;box-shadow:0 4px 8px -2px rgba(9,30,66,.25);border-radius:3px}.bp-select:focus{outline:none}.option-active{color:#fff!important;background-color:rgba(9,30,66,.71)!important}.option-active .icon path{fill:#fff}input[type=checkbox]+label:before{content:\"\\a0\";display:inline-block;vertical-align:middle;width:12px;height:12px;margin-right:.2em;border-radius:.2em;text-indent:.15em;margin:6px;line-height:.65;background-image:url(/hospital-unchecked.svg);background-size:12px 12px}input[type=checkbox]:checked+label:before{content:\" \";margin:6px;background-image:url(/hospital-checked.svg);background-size:12px 12px}input[type=checkbox]:checked:disabled+label:before{content:\" \";margin:6px;background-image:url(/hospital-checked-disabled.svg);background-size:12px 12px}input[type=checkbox]:disabled+label:before{content:\" \";height:12px;width:12px;background:rgba(9,30,66,.04);border-radius:2px;margin:6px}input[type=checkbox]{position:absolute;clip:rect(0,0,0,0)}input[type=checkbox]+label{font-size:14px;color:rgba(9,30,66,.82)}.status-default.status-subtle{background:rgba(9,30,66,.13);color:rgba(9,30,66,.77)}.status-default.status-bold{background:rgba(9,30,66,.77);color:#fff}.status-success.status-subtle{background:#e2ffee;color:#064}.status-success.status-bold{background:#00875a;color:#fff}.status-removed.status-subtle{background:#ffebe6;color:#bf2600}.status-removed.status-bold{background:#de350b;color:#fff}.status-in-progress.status-subtle{background:#f2f0f9;color:#5342b3}.status-in-progress.status-bold{background:#7163c5;color:#fff}.status-new.status-subtle{background:#eae6ff;color:#403294}.status-new.status-bold{background:#5243aa;color:#fff}.status-moved.status-subtle{background:#ff991f;color:rgba(9,30,66,.95)}.status-moved.status-bold{background:#fffae6;color:rgba(9,30,66,.95)}.tag-default.tag-subtle{background:#e5eaec;color:rgba(9,30,66,.82)}.tag-default.tag-bold{background:rgba(9,30,66,.77);color:#fff}.tag-blue.tag-subtle{background:#d7d2ee;color:#0049b0}.tag-blue.tag-bold{background:#bcb5e3;color:rgba(9,30,66,.95)}.tag-green.tag-subtle{background:#79f2c0;color:#064}.tag-green.tag-bold{background:#57d9a3;color:rgba(9,30,66,.95)}.tag-purple.tag-subtle{background:#c0b6f2;color:#403294}.tag-purple.tag-bold{background:#998dd9;color:rgba(9,30,66,.95)}.tag-teals.tag-subtle{background:#79e2f2;color:rgba(9,30,66,.82)}.tag-teals.tag-bold{background:#00c7e6;color:rgba(9,30,66,.95)}.tag-red.tag-subtle{background:#ffbdad;color:rgba(9,30,66,.95)}.tag-red.tag-bold{background:#ff8f73;color:rgba(9,30,66,.95)}.tag-yellow.tag-subtle{background:#ffab00;color:rgba(9,30,66,.95)}.tag-yellow.tag-bold{background:#ffc400;color:rgba(9,30,66,.95)}.badge-default{background:rgba(9,30,66,.13);color:rgba(9,30,66,.89)}.badge-primary{background:#7163c5;color:#fff}.tooltip:hover:after{background:rgba(9,30,66,.95);border-radius:3px;font-size:12px;color:#fff;line-height:20px;display:block;position:relative;padding:0 4px}.bp-chart{height:100%}.flex-alian-center{display:flex;flex-direction:row;align-items:center}.toast-inline-link{color:inherit;margin-left:10px;text-decoration:underline}.icon-toast-warning path{fill:rgba(9,30,66,.71)}.toast{width:320px;height:56px;line-height:14px;font-size:14px;padding:16px;border-radius:3px;position:relative;margin-right:auto;margin-left:auto;display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}.toast-success{color:#fff;background:#00865a}.toast-warning{color:rgba(9,30,66,.95);background:#ffe380}.toast-error{color:#fff;background:#de350b}.toast-info{color:#fff;background:#42516e}.modal-container{width:100vw;height:100vh;background:rgba(9,30,66,.54);z-index:100;position:fixed;display:none}.modal-container-flex{display:flex;flex-direction:row;align-items:center}.modal{background:#fff;box-shadow:0 4px 8px -2px rgba(9,30,66,.25);border-radius:4px;padding:24px 0;display:flex;flex-direction:column;justify-content:space-between;box-sizing:border-box;position:fixed;left:50%;z-index:9000;max-height:90%}.modal-small{width:400px;margin-left:-200px}.modal-medium{width:600px;margin-left:-300px}.modal-large{width:800px;margin-left:-400px}.modal-title{width:100%;font-size:20px;color:rgba(9,30,66,.95);line-height:24px;justify-content:space-between;padding:0 24px 16px 24px}.modal-title,.modal-title div{display:flex;flex-direction:row;align-items:center}.modal-body{font-size:14px;color:rgba(9,30,66,.95);text-align:left;overflow-y:auto;max-height:calc(90vh - 136px);padding:0 16px;margin-left:8px;margin-right:8px}.modal-footer{padding:16px 24px 0 24px;display:flex;flex-direction:row;justify-content:flex-end;box-sizing:border-box}.modal-footer button{height:32px;font-size:14px;text-align:center;line-height:32px;padding:0 12px;border:0;border-radius:4px;outline:none}.modal-footer .modal-subtle-btn{color:rgba(9,30,66,.71);background:#fff;margin-left:4px}.modal-footer .modal-default-btn{color:#fff;background:#7163c5}.modal-footer .modal-error-btn{color:#fff;background:#de350b}.modal-footer .modal-warning-btn{color:rgba(9,30,66,.71);background:#ffe380}.modal-fade{opacity:0}.modal-fade,.modal-show{transition:opacity .15s linear}.modal-show{opacity:1}.modal-scrollable .modal-title{border-bottom:2px solid #e7e9ed}.modal-scrollable .modal-footer{border-top:2px solid #e7e9ed}.modal-scrollable .modal-body{margin-top:12px;margin-bottom:12px}.modal-control-btn{height:32px;font-size:14px;text-align:center;line-height:32px;padding:0 12px;border:0;border-radius:4px;outline:none;width:auto;margin:4px}.popover-container{position:absolute;display:none;top:0;left:0;z-index:5000}.popover{width:320px;padding:16px;background:#fff;box-shadow:0 0 1px 0 rgba(9,30,66,.12),0 8px 16px -4px rgba(9,30,66,.25);border-radius:3px;box-sizing:border-box}.popover,.popover-head{display:flex;flex-direction:row}.popover-head{justify-content:space-between;align-items:center}.popover-title{font-size:14px;color:rgba(9,30,66,.95);text-align:left;font-weight:500}.popover-desc{margin-top:12px;font-size:14px;color:rgba(9,30,66,.82)}.popover-footer{margin-top:8px}.popover-footer a{text-align:left}.popover-footer button{text-align:right;height:24px;border:0;font-size:14px;color:rgba(9,30,66,.71);text-align:center;line-height:24px;position:relative;left:125px;border-radius:4px;outline:none}.popover-footer button:last-child{background:rgba(9,30,66,.04)}.popover-triangle{height:12px;width:12px;transform:rotate(45deg);background:#fff}.popover-triangle-left{left:314px;top:50%;margin-top:-6px;position:absolute}.popover-triangle-left-top{left:314px;top:16px;position:absolute}.popover-triangle-left-bottom{left:314px;bottom:16px;position:absolute}.popover-triangle-bottom{position:absolute;top:-6px;left:152px}.popover-triangle-bottom-left{position:absolute;top:-6px;left:16px}.popover-triangle-bottom-right{position:absolute;top:-6px;left:288px}.popover-triangle-top{position:absolute;left:152px;bottom:-6px}.popover-triangle-top-left{position:absolute;left:16px;bottom:-6px}.popover-triangle-top-right{position:absolute;left:288px;bottom:-6px}.popover-triangle-right{position:absolute;left:-6px;top:50%;margin-top:-6px}.popover-triangle-right-top{position:absolute;left:-6px;top:16px}.popover-triangle-right-bottom{position:absolute;left:-6px;bottom:16px}.progress-tracker-container{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:88px;display:flex;flex-direction:column;justify-content:center}.progress-tracker-line{margin:0 55px;background:#7163c5;border-radius:24px;height:8px;z-index:100}.progress-tracker-step{margin-top:8px;display:flex;flex-direction:row;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.progress-tracker-step span{display:inline-block;width:120px;margin-right:40px;font-size:14px;text-align:center;line-height:24px;position:relative}.progress-tracker-step-cur{color:#7163c5}.progress-tracker-step-visited{color:rgba(9,30,66,.95)}.progress-tracker-step-disabled{color:rgba(9,30,66,.31)}.progress-tracker-step-unvisited{color:rgba(9,30,66,.66)}.progress-tracker-step span:before{content:\" \";width:8px;height:8px;border-radius:50%;background:rgba(9,30,66,.42);position:absolute;right:56px;top:-16px;z-index:1}.progress-tracker-step span:last-child{margin-right:0}.spinner-container{position:absolute;background:transparent;width:100%;height:100%}.spinner-background-gray{background:rgba(9,30,66,.55)}.spinner-background-white{background:hsla(0,0%,100%,.55)}.full-window-spinner{width:100vw;height:100vh;left:0;top:0;position:fixed}.full-window-spinner,.item-spinner{display:flex;flex-direction:row;justify-content:center;align-items:center}.item-spinner{position:absolute;width:100%;height:100%}.spinner-animate svg{-webkit-animation:spinnerAnimate 1s linear infinite;animation:spinnerAnimate 1s linear infinite}@-webkit-keyframes spinnerAnimate{0%{-webkit-transform:rotate(0deg)}50%{-webkit-transform:rotate(180deg)}to{-webkit-transform:rotate(1turn)}}@keyframes spinnerAnimate{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}to{transform:rotate(1turn)}}.pagination{display:flex;flex-direction:row;width:-webkit-max-content;width:-moz-max-content;width:max-content;align-items:center;font-size:14px;color:rgba(9,30,66,.71)}.pagination svg{margin:0;cursor:pointer}.pagination span{height:24px;width:24px}.pagination-unable svg path{fill:#e5eaec}.pagination-page{letter-spacing:0;text-align:center;height:20px;min-width:20px;margin:0 2px;cursor:pointer}.pagination-active{background:rgba(9,30,66,.71);border-radius:2px;color:#fff;margin:0 4px}.breadcrumbs-container{max-width:560px;height:-webkit-max-content;height:-moz-max-content;height:max-content;font-size:12px;color:rgba(9,30,66,.6);line-height:16px}.breadcrumbs-container div{display:inline-block;margin:0 16px 0 0;font-weight:500;cursor:pointer}.breadcrumbs-container div a{color:rgba(9,30,66,.6)}.breadcrumbs-container span{margin:0 4px}.breadcrumbs-show{cursor:pointer}.ember-table table{width:100%}.bp-table{position:relative;height:100%}.bp-table table th{background:#fff;border-bottom:2px solid #e5eaec;color:rgba(9,30,66,.6);font-size:12px;padding:8px;text-align:left}.bp-table table thead th{top:0!important}.bp-table table tbody tr:hover{background:#ededf1}.bp-table table tbody tr{background:#fff}.bp-table table tbody td{background:inherit;color:rgba(9,30,66,.82);font-size:14px;padding:16px 8px}.border-table table tbody td{border-bottom:1px solid #e5eaec}.bp-table table th .et-sort-indicator:before{display:inline-block;border:0;line-height:1;content:\"\\25be\"}.bp-table table th .is-descending:before{transform:rotate(0)}.bp-table table th .is-ascending:before{transform:rotate(180deg)}.spotlight-item{border:2px solid #6554c0;box-shadow:0 0 0 6px rgba(101,84,192,.4);border-radius:4px}.spotlight{height:-webkit-max-content;height:-moz-max-content;height:max-content;width:320px;background:#6554c0;border-radius:4px;padding:16px;position:absolute;color:rgba(9,30,66,.95);top:0;left:0}.spotlight div{display:flex;justify-content:flex-end;position:relative}.spotlight p{margin-top:0}.spotlight button{height:32px;font-size:14px;color:rgba(9,30,66,.95);text-align:left;background:#e5eaec;border-radius:4px;padding:0 12px;outline:none}.spotlight span{position:absolute;left:0;bottom:5px}.spotlight .secondary-btn{border:0;background:transparent;margin-right:4px}.spotlight h3{font-size:16px;color:#fff;margin-top:0;margin-bottom:8px}.empty-state{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.empty-state img{height:160px;width:160px;background:#a1c6e7;border-radius:8px;margin-bottom:24px}.empty-state .empty-state-title{font-size:20px;color:rgba(9,30,66,.95);margin-bottom:16px;margin-top:0}.empty-state .empty-state-desc{font-size:14px;color:rgba(9,30,66,.95);text-align:center;line-height:20px;width:312px;margin-bottom:24px;margin-top:0}.empty-state .empty-state-actions{display:flex;flex-direction:row;justify-content:center;margin-bottom:24px}.empty-state .empty-state-actions button{border:0;border-radius:4px;height:32px;padding:0 12px;font-size:14px;letter-spacing:0;text-align:center;line-height:32px}.empty-state .empty-state-btn-p{color:#fff;background:#7163c5}.empty-state .empty-state-btn-s{background:rgba(9,30,66,.04);color:rgba(9,30,66,.71);margin-left:20px}.empty-state a{display:inline-block;margin-bottom:24px}.date-picker-icon{position:absolute;line-height:32px;right:8px;top:4px}.date-picker-white+.date-picker-icon path{fill:hsla(0,0%,100%,.95)}.date-picker-white{color:hsla(0,0%,100%,.95);background:hsla(0,0%,100%,.2)}.date-picker-input{border:0;border-radius:4px;font-size:14px;height:32px;line-height:32px;outline:none;padding:6px 8px}.date-picker-default{background:rgba(9,30,66,.04);color:rgba(9,30,66,.48)}.date-picker-width-small{width:195px}.date-picker-width-default{width:240px}.date-picker-width-large{width:273px}.positon-relative{position:relative}.width-fit-content{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.add-item-input{height:40px;width:240px;border:1px solid rgba(9,30,66,.13);border-radius:4px;padding:10px 8px;font-size:14px;color:rgba(9,30,66,.77)}.add-item-input:focus{outline:none;border:1px solid #7163c5}.flex-direction-row{display:flex;flex-direction:row;align-items:center}.add-item-label{color:rgba(9,30,66,.95);font-weight:500}.add-item-desc,.add-item-label{font-size:14px;margin-bottom:8px;display:block}.add-item-desc{color:rgba(9,30,66,.54)}.add-item-cross-icon{width:24px;height:24px;margin-left:8px}.add-item-main{margin-bottom:16px}.add-item-text{font-size:14px;color:rgba(9,30,66,.31);line-height:32px}.add-item-add-icon path{fill:rgba(9,30,66,.31)}.add-item-footer{margin-top:12px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.cursor-pointer{cursor:pointer!important}.cursor-not-allowed{cursor:not-allowed!important}.bp-badge.primary{background-color:#7163c5;color:#fff}.bp-badge.primary.reverse{color:#7163c5;background-color:#fff}.textColorRed{color:#ff5630!important}.display-none{display:none!important}.card-size-b{height:auto!important;width:893px!important}.card-size-b .bp-card-title-part{height:93px!important;flex-direction:column!important;align-items:start!important;justify-content:center!important}.card-size-b .heading-medium{margin-bottom:6px}.card-size-b .bp-card-title-desc{margin-left:0!important}.card-size-b .bp-button-group{display:none}.card-size-c,.card-size-d{width:435px!important;height:auto!important}.card-size-c .bp-card-title-part,.card-size-d .bp-card-title-part{height:80px!important;flex-direction:column!important;align-items:start!important;justify-content:center!important}.card-size-c .heading-medium,.card-size-d .heading-medium{margin-bottom:2px}.card-size-c .bp-card-title-desc,.card-size-d .bp-card-title-desc{margin-left:0!important}.card-size-a .bp-button-group,.card-size-b .bp-button-group,.card-size-c .bp-button-group{display:none}.wrap{flex:wrap}.main-flex-start{justify-content:flex-start}.main-flex-end{justify-content:flex-end}.main-center{justify-content:center}.main-space-between{justify-content:space-between}.main-space-around{justify-content:space-around}.cross-flex-start{align-items:flex-start}.cross-flex-end{align-items:flex-end}.cross-center{align-items:center!important}.cross-baseline{align-items:baseline}.cross-stretch{align-items:stretch}.wrap-flex-start{align-content:flex-start}.wrap-flex-end{align-content:flex-end}.wrap-center{align-content:center}.wrap-space-between{align-content:space-between}.wrap-space-around{align-content:space-around}.wrap-stretch{align-content:stretch}.flex-column{display:flex;flex-direction:column}.flex-row{display:flex;flex-direction:row}.viewport-class{background:transparent;position:relative}.viewport-class .icon-no-margin{margin:0}.viewport-hidden-wrapper{overflow:hidden;position:relative;height:100%;width:100%}.viewport-auto-wrapper{overflow:auto;height:100%;width:100%;scroll-behavior:smooth}.viewport-click-right{right:0}.viewport-click-left,.viewport-click-right{height:100%;width:24px;position:absolute;top:0;z-index:100;display:flex;align-items:center}.viewport-click-left{left:0}.viewport-nowarp{white-space:nowrap}.viewport-nowarp div{display:inline-block}.report-product-card-active{background:#5342b3!important}.report-product-card-active .product-card-title,.report-product-card-active .product-ei-data,.report-product-card-active .product-ei-text,.report-product-card-active .product-sales-data-percent,.report-product-card-active .product-sales-sata-number,.report-product-card-active .product-sales-text{color:#fff!important}.report-product-card-active .product-sales-data-mn{color:hsla(0,0%,100%,.45)!important}.report-product-card-active .bp-icon path{fill:#fff!important}.report-product-card-active .bp-product-card-tag{background:#fff!important;color:#5342b3!important}.ph-H-xLarge{font-size:40px;font-weight:200;color:#2d334d}.ph-H-Large{font-size:24px;color:#747789}.ph-H-Large_brand{font-size:24px;color:#f5c924}.ph-H-Large_2{font-size:24px;color:#2d334d}.ph-H-Medium{font-size:16px}.ph-H-Medium,.ph-H-Small{font-weight:700;color:#2d334d}.ph-H-Small{font-size:14px;letter-spacing:.35px}.ph-H-Small_brand{font-size:12px;color:#ffdd4d}.ph-body-medium{font-size:16px;color:#747789}.ph-body-medium_brand{font-size:16px;color:#f5d924}.ph-body-small{font-size:14px;color:#747789}.ph-body-xsmall{font-size:12px;color:#747789}.ph-body-xsmall-tertiary{font-size:12px;color:#a2a5b0}.ph-H-Display{font-size:48px;color:#2d334d;letter-spacing:1px;text-shadow:0 9px 14px rgba(22,28,57,.3)}.ph-body-Display-number{font-weight:200;font-size:24px;color:#2d334d}.ph-H-xLarge-inverse{font-size:40px;color:hsla(0,0%,100%,.9)}.ph-H-Large-inverse{font-size:24px;color:hsla(0,0%,100%,.4)}.ph-H-Large-2-inverse{font-size:24px;color:hsla(0,0%,100%,.9)}.ph-H-Medium-inverse{font-size:16px;color:hsla(0,0%,100%,.9)}.pb-H-small{font-size:12px;color:#161c39;opacity:.8}.ph-body-small-inverse{opacity:.7;font-size:14px;color:#fff}.ph-body-2-inverse{font-size:14px;color:hsla(0,0%,100%,.7)}.ph-body-3-inverse{font-size:12px;color:hsla(0,0%,100%,.7)}.pb-H-small_brand{font-size:12px;color:#ffdd4d;letter-spacing:1px}.ph-H-Decoration{font-family:Anton-Regular;font-size:100px;color:#fff;letter-spacing:2.5px;opacity:.4}.ph-body-Display-point{opacity:.4;font-family:Lato-Light;font-size:40px;color:hsla(0,0%,100%,.4);letter-spacing:1px;font-weight:200}.ph-H-Small_theme{font-size:14px;color:#f5c924}.ph-H-xLarge-inverse-position{position:relative;top:-80px}.ph-H-Large-2-inverse-positon{position:relative;top:-50px}.text-right{text-align:right}.text-width-1{width:198px}.ph-above-data-review-year{opacity:.2;font-size:48px;color:#161c39}.mr-6{margin-right:40px}.mr-5{margin-right:32px}.mr-4{margin-right:24px}.mr-3{margin-right:16px}.mr-2{margin-right:8px}.mr-1{margin-right:4px}.ml-6{margin-left:40px}.ml-5{margin-left:32px}.ml-4{margin-left:24px}.ml-3{margin-left:16px}.ml-2{margin-left:8px}.ml-1{margin-left:4px}.mb-6{margin-bottom:40px}.mb-5{margin-bottom:32px}.mb-4{margin-bottom:24px}.mb-3{margin-bottom:16px}.mb-2{margin-bottom:8px}.mb-1{margin-bottom:4px}.mt-6{margin-top:40px}.mt-5{margin-top:32px}.mt-4{margin-top:24px}.mt-3{margin-top:16px}.mt-2{margin-top:8px}.mt-1{margin-top:4px}.pr-4{padding-right:24px}.pr-3{padding-right:16px}.pr-2{padding-right:8px}.pr-1{padding-right:4px}.pl-4{padding-left:24px}.pl-3{padding-left:16px}.pl-2{padding-left:8px}.pl-1{padding-left:4px}.max-padding-top{padding-top:28px}.color-transparent{color:transparent!important}.above-data-review-text{margin-right:60px}.above-data-header-box-style-special{opacity:.6;font-size:16px;color:#fff}.flex-1{flex:1}.bp-about-us,.bp-above-data,.bp-above-data-detail,.bp-consulting,.bp-home,.bp-industry-activity,.bp-industry-activity-detail,.bp-max,.bp-rw{min-width:1200px;display:flex;flex-direction:column;align-items:center}.review-activity-card-desc{height:51px}@font-face{font-family:Anton-Regular;src:url(/assets/Anton-Regular.ttf)}.page-header-anton-font{font-family:Anton-Regular;font-size:100px;color:#fff;letter-spacing:2.5px;background-image:linear-gradient(hsla(0,0%,100%,.4),rgba(25,255,255,0) 80%);-webkit-text-fill-color:transparent;-webkit-background-clip:text}.icon-and-opacity path{fill:hsla(0,0%,100%,.8)}.agenda-text-center{line-height:104px;width:70px}.button-official-gray-line{width:80px;height:32px;line-height:32px;background:linear-gradient(45deg,rgba(22,28,57,.2),rgba(22,28,57,.2) 5%,transparent 0,transparent 50%,rgba(22,28,57,.2) 0,rgba(22,28,57,.2) 55%,transparent 0,transparent)!important;background-size:10px 10px!important;border:none;font-weight:500;font-size:12px;color:#2d334d}.button-official-yellow-line-inverse{color:hsla(0,0%,100%,0)}.button-official-yellow-line,.button-official-yellow-line-inverse{padding:0 24px;height:32px;line-height:32px;background:linear-gradient(45deg,rgba(255,221,77,.5),rgba(255,221,77,.5) 5%,transparent 0,transparent 50%,rgba(255,221,77,.5) 0,rgba(255,221,77,.5) 55%,transparent 0,transparent)!important;background-size:10px 10px!important;border:none;font-weight:500;font-size:12px}.button-official-yellow-line{color:#2d334d}.button-official-yellow-line-compact{height:40px;padding:0 24px;line-height:40px;background:linear-gradient(45deg,rgba(255,221,77,.5),rgba(255,221,77,.5) 5%,transparent 0,transparent 50%,rgba(255,221,77,.5) 0,rgba(255,221,77,.5) 55%,transparent 0,transparent)!important;background-size:8px 8px!important;border:none;font-weight:500;font-size:14px;color:#2d334d}.button-report-download{width:200px!important;height:40px!important;border-radius:0!important;background:#161c39;color:#fff;border:none;cursor:inherit}.button-fixed-nav-login,.button-report-download{text-align:center!important;display:inline-block!important}.button-fixed-nav-login{color:#2d334d!important;border:1px solid rgba(22,28,57,.12)!important;border-radius:16px!important}.button-fixed-nav-login,.button-fixed-nav-login-inverse{line-height:37px!important;height:37px!important;width:80px!important;background:transparent!important;font-size:14px}.button-fixed-nav-login-inverse{color:hsla(0,0%,100%,.9)!important;border:1px solid hsla(0,0%,100%,.6)!important;border-radius:16px!important;text-align:center!important;display:inline-block!important}.form-cross-icon path,.zh-drop-icon path{fill:#161c39}.zh-drop-icon{height:16px;width:16px}.form-cross-icon{height:24px;width:24px;padding:6px}.more-photo-text{font-size:14px;color:#2d334d;letter-spacing:1px}.more-photo-icon{height:20px;widows:20px}.bp-option-group{width:160px}.fixed-nav-text{color:#2d334d!important;font-size:14px;letter-spacing:0}.fixed-nav-inverse-text{color:hsla(0,0%,100%,.9)!important;font-size:14px;letter-spacing:0}.official-width-default,.page-bottom-part,.photo-container-width{width:100%!important}.official-form-tag{background:#e8e8eb!important}.official-form-tag,.official-form-tag-active{border-radius:12px;height:24px;padding:0 8px;line-height:24px;cursor:pointer}.official-form-tag-active{background:#f5c924!important}.input-official-form{height:40px!important;width:252px!important;border:none;border-bottom:1px solid rgba(22,28,57,.1);background:rgba(22,28,57,.01);border-radius:0;font-size:14px;color:#747789}.input-official-form:focus{border:none!important;border-bottom:1px solid rgba(22,28,57,.1)!important}.photo-click-icon{height:24px;width:24px}.official-icon-style-left path,.official-icon-style-right path{fill:hsla(0,0%,100%,.6)}.official-icon-style-left,.official-icon-style-right{height:48px;width:48px;border-radius:50%;border:1px solid hsla(0,0%,100%,.6);display:flex;justify-content:center;align-items:center}.official-icon-style-left{transform:rotate(90deg)}.official-icon-style-right{transform:rotate(270deg)}.thumbnail-icon-style-left path,.thumbnail-icon-style-right path{fill:#fff}.thumbnail-icon-style-left,.thumbnail-icon-style-right{height:112px;width:16px;display:flex;align-items:center;background:#f5c924}.thumbnail-icon-style-left{transform:rotate(180deg)}.form-warning-text{font-size:12px;color:#fb355e;letter-spacing:0;position:absolute;bottom:-20px}.position-relative{position:relative}.photo-cross-icon{padding:8px}.photo-cross-icon path{fill:hsla(0,0%,100%,.2)}.photos-cross-icon path{fill:hsla(0,0%,100%,.6)}.bp-input-downdrop,.input-list-container{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative}.bp-input-downdrop:focus{outline:none}.input-list,.input-list-tags{overflow:scroll;display:flex;flex-direction:column;background:#fff;box-shadow:0 0 1px 0 rgba(9,30,66,.12),0 4px 8px -2px rgba(9,30,66,.25);border-radius:3px;position:absolute;z-index:1}.input-list{height:112px;width:80px}.input-list-tags{height:112px;width:auto}.input-list-tags-span,.input-list span{padding:0 16px;font-size:14px;color:#344563;line-height:32px;cursor:pointer}.input-list-tags-span:hover,.input-list span:hover{background-color:rgba(9,30,66,.04);color:#344563}.input-list-tags-choosed-span{background:#505f79;color:hsla(0,0%,100%,.95);padding:0 16px;font-size:14px;line-height:32px;cursor:pointer}.select-input{width:80px!important;font-size:14px!important;color:#42526e!important;padding:8px!important}.input-list-container-year:after{content:\"年\"}.input-list-container-month:after,.input-list-container-year:after{position:absolute;right:4px;line-height:32px;font-size:14px;color:#42526e;top:0}.input-list-container-month:after{content:\"月\"}.input-tags{padding:0!important;flex-direction:row!important;flex-wrap:wrap;height:auto!important;min-height:32px;position:relative}.input-tags,.select-input-tag{display:flex;align-items:center}.select-input-tag{background:#ebecf0;color:#42526e;border-radius:2.5px;height:20px;width:auto;font-size:14px;line-height:16px;padding:2px 6px;margin:2px}.select-multiple-input{border:none;width:4px;height:32px;background:#fff;line-height:14px;font-size:14px;color:transparent;caret-color:#172b4d}.select-multiple-input:focus{outline:none}.bp-cascader{height:32px;width:222px;background:rgba(9,30,66,.04);padding:0;margin:0;position:relative;cursor:pointer;box-sizing:border-box;border-radius:4px}.bp-cascader:focus{outline:none}.bp-cascader ul{padding:0}.bp-cascader-title{display:flex;align-items:center;padding:0 8px;justify-content:space-between;height:32px}.cascader-list{width:222px;margin:0;padding:4px 0;background:#fff;box-shadow:0 0 1px 0 rgba(9,30,66,.12),0 4px 8px -2px rgba(9,30,66,.25);border-radius:3px;height:300px;overflow-y:scroll;z-index:99;position:absolute}.cascader-list-item-active,.cascader-list .cascader-list-item,.subSelect .cascader-list-item{line-height:32px}.cascader-list .cascader-list-item label,.subSelect .cascader-list-item label{font-size:14px;color:rgba(9,30,66,.82);margin:0}.cascader-list-item-active label,.cascader-list .cascader-list-item:hover label{color:#3172e0;font-size:14px;margin:0}.cascader-list-item-active,.cascader-list .cascader-list-item:hover{background:#ebecf0}.subSelect{position:absolute;top:32px;left:222px;width:222px;background-color:#fff;box-shadow:0 0 1px 0 rgba(9,30,66,.12),0 4px 8px -2px rgba(9,30,66,.25);border-radius:3px;max-height:300px;overflow-y:scroll;z-index:99}.subSelect div:hover{background-color:#ebecf0}.uncheckbox{border:1px solid #e0e1e6;border-radius:2px}.some-checked-box,.uncheckbox{height:12px;width:12px;background-color:#fafbfc;margin:0 8px}.some-checked-box{border-top:5px solid #3172e0;border-bottom:5px solid #3172e0;border-right:2px solid #3173e0;border-left:2px solid #3173e0;border-radius:2px}.checkbox{background-image:url(/hospital-checked.svg);background-size:12px 12px;height:12px;width:12px;margin:0 8px}.downRight path{fill:#505f79}.downRight{transform:rotate(-90deg)}.select-tag{background:rgba(9,30,66,.04);border-radius:2.5px;font-size:14px;color:#42526e;line-height:16px;line-height:20px;padding:2px 6px}input[type=checkbox].some-checked-checkbox+label:before{content:\" \";margin:6px;background-color:#fff;border-top:5px solid #3172e0;border-bottom:5px solid #3172e0;border-right:2px solid #3172e0;border-left:2px solid #3172e0;box-sizing:border-box}.bp-progressbar-container{position:relative}.bp-progressbar-container .progress-bottom{background:#f4f5f7;border-radius:2px}.bp-progressbar-container .progress-top{background:#3881ff;border-radius:2px;position:absolute;top:0;left:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "a046":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-7ee67a87]{box-sizing:border-box}.svg-icon[data-v-7ee67a87]{width:1em;height:1em;vertical-align:-.15em;fill:currentColor;overflow:hidden;margin-right:4px}svg[data-v-7ee67a87]:focus{outline:none}.bp-menu-item[data-v-7ee67a87]{height:40px;width:100%;margin-left:8;margin-right:8;margin-top:8;margin-bottom:8;padding-left:8;padding-right:8;padding-top:8;padding-bottom:8;background:transparent;display:flex;align-items:center;cursor:pointer;padding:0 12px;color:#505f79;box-sizing:border-box}.bp-menu-item[data-v-7ee67a87]:hover{color:#3172e0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "a08f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_nav_top_vue_vue_type_style_index_0_id_f9621332_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("750b");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_nav_top_vue_vue_type_style_index_0_id_f9621332_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_nav_top_vue_vue_type_style_index_0_id_f9621332_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_nav_top_vue_vue_type_style_index_0_id_f9621332_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_nav_top_vue_vue_type_style_index_0_id_f9621332_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "a287":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("1e4d");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("81104536", content, shadowRoot)
};

/***/ }),

/***/ "a945":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".bp-input[data-v-415216c2]{height:32px;width:240px;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background:#fff;line-height:14px;font-size:14px;padding:10px 8px;border:1px solid #dfe1e6;border-radius:4px;color:#172b4d;box-sizing:border-box}.bp-input[data-v-415216c2]:focus{border:1px solid #3172e0;outline:none}input[data-v-415216c2]:disabled{background:rgba(9,30,66,.04)!important;border:none!important;color:rgba(9,30,66,.31);cursor:not-allowed}.input-compact[data-v-415216c2]{height:24px}.input-comfy[data-v-415216c2]{height:40px}.input-default[data-v-415216c2]{height:32px}.input-error[data-v-415216c2]{border:1px solid #de350b!important}.input-warning[data-v-415216c2]{border:1px solid #ffe380!important}.input-success[data-v-415216c2]{border:1px solid #36b37e!important}.input-info[data-v-415216c2]{border:1px solid #403294!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "ac3b":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("cfa7");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("f0c525b0", content, shadowRoot)
};

/***/ }),

/***/ "aca9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_icon_line_response_vue_vue_type_style_index_0_id_a43c46a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bf86");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_icon_line_response_vue_vue_type_style_index_0_id_a43c46a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_icon_line_response_vue_vue_type_style_index_0_id_a43c46a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_icon_line_response_vue_vue_type_style_index_0_id_a43c46a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_icon_line_response_vue_vue_type_style_index_0_id_a43c46a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "acaa":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".button-group .button-item[data-v-46b875d5]{background:rgba(9,30,66,.04);color:rgba(9,30,66,.71);font-size:14px;outline:none;cursor:pointer;border:0;margin-right:2px}.button-group button[data-v-46b875d5]:first-child{border-radius:4px 0 0 4px}.button-group button[data-v-46b875d5]:last-child{border-radius:0 4px 4px 0;margin-right:0}.button-group .button-item.active[data-v-46b875d5]{background:rgba(9,30,66,.71);color:#fff}.button-density-comfy[data-v-46b875d5]{height:40px;line-height:40px}.button-density-default[data-v-46b875d5]{height:32px;line-height:32px}.button-density-compact[data-v-46b875d5]{height:24px;line-height:24px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "b2d9":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("7863");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("da12b3c0", content, shadowRoot)
};

/***/ }),

/***/ "b4b8":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-45841548]{letter-spacing:.4px;line-height:1.6;box-sizing:border-box}.borderNone[data-v-45841548]{border-bottom:0!important}.nav[data-v-45841548]{background:#fff;text-align:center;font-size:14px}.bordernav[data-v-45841548]{border-bottom:1px solid rgba(22,28,57,.12)}.bordernavInverse[data-v-45841548]{border-bottom:1px solid hsla(0,0%,100%,.12)}.navInverse[data-v-45841548]{background:transparent;text-align:center;font-size:14px}.fixed-nav[data-v-45841548]{top:0;padding:0 100px;position:fixed;align-items:center;z-index:1000;padding:0 16px!important}.fixed-nav[data-v-45841548],.fixed-nav .nav-border[data-v-45841548]{height:80px;width:100%;display:flex;flex-direction:row;justify-content:space-between}.fixed-nav .nav-border[data-v-45841548]{align-content:flex-start;align-items:center!important}.fixed-nav .bp-img[data-v-45841548]{-o-object-fit:cover;object-fit:cover;cursor:pointer!important;pointer-events:all}.fixed-nav .response-icon-menu[data-v-45841548]{width:24px;height:24px;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='22' height='22' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 10h20v2H1v-2zm0-7h20v2H1V3zm0 14h20v2H1v-2z' fill='%232D334D' fill-rule='evenodd'/%3E%3C/svg%3E\") 50%/100% no-repeat!important}.fixed-nav .response-icon-menu-light[data-v-45841548]{width:24px;height:24px;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='22' height='22' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 10h20v2H1v-2zm0-7h20v2H1V3zm0 14h20v2H1v-2z' fill='%23fff' fill-rule='evenodd'/%3E%3C/svg%3E\") 50%/100% no-repeat!important}.fixed-nav .meau-shade[data-v-45841548]{width:100vw!important;height:100vh!important;background:#8b8d9b!important;opacity:.8;position:absolute;top:80px;transform:translateX(-16px);overflow:hidden!important}.fixed-nav .response-menu[data-v-45841548]{position:absolute;top:80px;background-color:#fff;width:100%!important;padding:40px;min-width:375px;left:0;align-items:stretch}.fixed-nav .response-menu[data-v-45841548],.fixed-nav .response-menu .responsee-menu-item[data-v-45841548]{display:flex;flex-direction:column;align-content:flex-start;justify-content:flex-start;height:auto}.fixed-nav .response-menu .responsee-menu-item[data-v-45841548]{align-items:flex-start;margin-bottom:24px;width:auto;background:0 0;padding:0}.fixed-nav .response-menu .ph-H-Small[data-v-45841548]{height:auto;width:auto;background:0 0;margin-bottom:4px;font-size:14px;color:#2d334d;letter-spacing:.35px;font-weight:700;padding:0}.fixed-nav .response-menu .ph-body-xsmall[data-v-45841548]{height:auto;width:auto;background:0 0;font-size:12px;color:#a2a5b0;padding:0;text-align:left}.fixed-nav .response-menu .contact-us[data-v-45841548]{background:#ffdd4d;border-radius:2px;border:none;margin-bottom:24px;line-height:24px}.fixed-nav .response-menu .contact-us[data-v-45841548],.fixed-nav .response-menu .login[data-v-45841548]{width:100%;height:40px;font-size:14px;color:#2d334d;letter-spacing:1px;display:block;text-align:center;padding:0 12px;display:flex;flex-direction:row;align-items:center;cursor:pointer;outline:0;justify-content:center}.fixed-nav .response-menu .login[data-v-45841548]{line-height:40px;background:#fff;border-radius:2px;border:1px solid rgba(22,28,57,.12);line-height:24px}.fixed-nav .response-menu .button-response-group[data-v-45841548]{padding-top:4px;display:flex;flex-direction:column}.fixed-nav .response-menu .button-response-group .button-response-general[data-v-45841548]{font-size:14px;color:#2d334d;letter-spacing:1px;display:block;text-align:center;line-height:40px;border-radius:2px;border:1px solid rgba(22,28,57,.12);margin-bottom:24px}.fixed-nav .response-menu .button-response-group .button-response-logout[data-v-45841548]{text-align:center}", ""]);
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

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-35a79644]{letter-spacing:.4px;line-height:1.6;box-sizing:border-box}.bp-consulting[data-v-35a79644]{width:100%;min-width:375px;display:flex;flex-direction:column;align-items:center}.bp-consulting .consulting-header[data-v-35a79644]{height:600px;width:100%;padding-left:100px;background:0 0;background-image:linear-gradient(rgba(22,28,57,.5),rgba(22,28,57,.5));background-size:cover;display:flex;justify-content:center;flex-direction:column}.bp-consulting .consulting-header .above-data-detail-header-img[data-v-35a79644]{height:600px;width:100%;position:absolute;z-index:-2;left:0;-o-object-fit:cover;object-fit:cover}.bp-consulting .consulting-header .ph-body-small-inverse[data-v-35a79644]{opacity:.7;font-size:14px;color:#fff;cursor:pointer!important}.bp-consulting .consulting-header .top-breadcrumb[data-v-35a79644]{position:absolute;top:104px}.bp-consulting .consulting-header .mr-0[data-v-35a79644]{margin-right:2px}.bp-consulting .consulting-header .page-header-anton-font[data-v-35a79644]{font-family:Anton-Regular;font-size:100px;color:#fff;letter-spacing:2.5px;background-image:linear-gradient(hsla(0,0%,100%,.4),hsla(0,0%,100%,0) 80%);-webkit-text-fill-color:transparent;-webkit-background-clip:text;background-clip:text}.bp-consulting .consulting-header .consulting-header-slogan-b[data-v-35a79644]{height:auto;width:auto;margin-top:20px;background:0 0;font-size:40px;color:#fff;position:relative;top:-95px}.bp-consulting .consulting-header .consulting-header-slogan-c[data-v-35a79644]{height:auto;width:auto;margin-top:4px;background:0 0;font-size:24px;color:#fff;opacity:.9;position:relative;top:-50px;white-space:pre-line}.bp-consulting .consulting-text-info[data-v-35a79644]{height:auto;width:1200px;padding:104px 0;background:0 0;position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center}.bp-consulting .consulting-text-info .consult-connect-img[data-v-35a79644]{height:auto;width:auto;background:0 0;position:absolute;top:-40px;-o-object-fit:cover;object-fit:cover}.bp-consulting .consulting-text-info .consult-text-info-title-a[data-v-35a79644]{width:640px;background:0 0;font-size:24px;color:#2d334d}.bp-consulting .consulting-text-info .consult-text-info-title-b[data-v-35a79644]{width:640px;margin-bottom:14px;background:0 0;font-size:24px;color:#2d334d}.bp-consulting .consulting-text-info .consult-text-info-text[data-v-35a79644]{height:auto;width:640px;background:0 0;font-size:16px;color:#747789}.bp-consulting .consult-advantage-card-container[data-v-35a79644]{height:auto;width:1200px;padding-top:104px;background:-40% top no-repeat,linear-gradient(173deg,#3c3f53 5%,#1b1f35 98%);position:relative;display:flex;flex-direction:column;align-items:center}.bp-consulting .consult-advantage-card-container .consult-advantage-card-container-img[data-v-35a79644]{position:absolute;width:100%;-o-object-fit:cover;object-fit:cover}.bp-consulting .consult-advantage-card-container .consult-connect-img[data-v-35a79644]{height:auto;width:auto;background:0 0;position:absolute;top:-40px;-o-object-fit:cover;object-fit:cover}.bp-consulting .consult-advantage-card-container .consult-advantage-container-title[data-v-35a79644]{height:auto;width:auto;margin-bottom:69px;background:0 0;font-size:24px;color:#fff;opacity:.9}.bp-consulting .consult-advantage-card-container .consult-cards-row-a[data-v-35a79644]{height:auto;width:998px;margin-bottom:64px;background:0 0;display:flex;justify-content:space-between}.bp-consulting .consult-advantage-card-container .consult-cards-row-a .consult-advantage-card-nav[data-v-35a79644]{height:auto;width:auto;background:0 0;display:flex;padding:0;flex-direction:column}.bp-consulting .consult-advantage-card-container .consult-cards-row-a .consult-advantage-card-nav .consult-advantage-card-nav-line[data-v-35a79644]{height:1px;width:306px;margin-bottom:20px;background:hsla(0,0%,100%,.2);display:flex}.bp-consulting .consult-advantage-card-container .consult-cards-row-a .consult-advantage-card-nav .consult-advantage-card-nav-line .consult-advantage-card-nav-line-yellow[data-v-35a79644]{height:1px;width:24px;background:#f5c924;display:flex}.bp-consulting .consult-advantage-card-container .consult-cards-row-a .consult-advantage-card-nav .consult-advantage-card-nav-title[data-v-35a79644]{height:auto;width:306px;margin-bottom:13px;background:0 0;font-size:24px;color:#f5c924}.bp-consulting .consult-advantage-card-container .consult-cards-row-a .consult-advantage-card-nav .consult-advantage-card-nav-eg[data-v-35a79644]{height:auto;width:306px;background:0 0;opacity:.2;font-size:20px;color:#fff}.bp-consulting .consult-advantage-card-container .consult-cards-row-a .consulting-advantage-card-container[data-v-35a79644]{height:auto;width:auto;background:0 0;display:flex}.bp-consulting .consult-advantage-card-container .consult-cards-row-a .consulting-advantage-card-container .consulting-advantage-card[data-v-35a79644]{margin-right:24px;height:auto;width:306px;background:hsla(0,0%,100%,.05);box-shadow:0 8px 10px 0 rgba(8,11,26,.21);border-radius:2px;padding:40px 32px 48px;position:relative;display:flex;flex-direction:column}.bp-consulting .consult-advantage-card-container .consult-cards-row-a .consulting-advantage-card-container .consulting-advantage-card .max-advantage-card-icon[data-v-35a79644]{height:22px;width:19px;background:0 0;position:absolute;left:-10px;top:55px;-o-object-fit:cover;object-fit:cover}.bp-consulting .consult-advantage-card-container .consult-cards-row-a .consulting-advantage-card-container .consulting-advantage-card .consulting-advantage-card-title[data-v-35a79644]{height:auto;width:auto;margin-bottom:32px;background:0 0;font-size:40px;color:#fff;opacity:.4;font-weight:100;display:flex}.bp-consulting .consult-advantage-card-container .consult-cards-row-a .consulting-advantage-card-container .consulting-advantage-card .consulting-advantage-card-title-line[data-v-35a79644]{height:1px;width:49px;margin-bottom:58px;background:#f5c924;opacity:.8;display:flex}.bp-consulting .consult-advantage-card-container .consult-cards-row-a .consulting-advantage-card-container .consulting-advantage-card .consulting-advantage-card-desc-a[data-v-35a79644]{height:auto;width:auto;margin-bottom:25px;background:0 0;font-size:16px;opacity:.9;color:#fff;display:flex}.bp-consulting .consult-advantage-card-container .consult-cards-row-a .consulting-advantage-card-container .consulting-advantage-card .consulting-advantage-card-desc-b[data-v-35a79644]{height:auto;width:auto;margin-bottom:8px;background:0 0;font-size:12px;opacity:.7;color:#fff}@media (max-width:992px){.bp-consulting .consulting-header[data-v-35a79644]{padding-left:60px!important}.bp-consulting .consulting-header .page-header-anton-font[data-v-35a79644]{font-size:60px!important}.bp-consulting .consulting-text-info[data-v-35a79644]{width:100%!important;padding:100px 176px!important}.bp-consulting .consult-advantage-card-container[data-v-35a79644],.bp-consulting .consulting-text-info .consult-text-info-text[data-v-35a79644],.bp-consulting .consulting-text-info .consult-text-info-title-a[data-v-35a79644],.bp-consulting .consulting-text-info .consult-text-info-title-b[data-v-35a79644]{width:100%!important}.bp-consulting .consult-advantage-card-container .consult-cards-row-a[data-v-35a79644]{width:100%!important;padding:0 16%!important;flex-wrap:wrap}.bp-consulting .consult-advantage-card-container .consult-cards-row-a .consult-advantage-card-nav[data-v-35a79644]{margin-left:12px!important;margin-bottom:40px!important}.bp-consulting .consult-advantage-card-container .consult-cards-row-a .consulting-advantage-card-container[data-v-35a79644]{width:100%!important}.bp-consulting .consult-advantage-card-container .consult-cards-row-a .consulting-advantage-card-container .consulting-advantage-card[data-v-35a79644]{margin:0 12px!important;flex-shrink:0}}@media (max-width:768px){.bp-consulting .consulting-header[data-v-35a79644]{padding-left:40px!important}.bp-consulting .consulting-text-info[data-v-35a79644]{padding:100px 40px!important}.bp-consulting .consult-advantage-card-container .consult-cards-row-a[data-v-35a79644]{padding:0 24px!important}}@media (max-width:549px),(width:549px){.bp-consulting .consulting-header[data-v-35a79644]{padding-left:24px!important}.bp-consulting .consulting-header .consulting-header-slogan-b[data-v-35a79644]{top:-70px!important}.bp-consulting .consulting-header .page-header-anton-font[data-v-35a79644]{font-size:60px!important;line-height:80px}.bp-consulting .consulting-text-info[data-v-35a79644]{width:100%!important;padding:100px 24px!important}.bp-consulting .consult-advantage-card-container .consulting-advantage-card-container[data-v-35a79644]{overflow:scroll}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "b6ec":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_nav_top_response_vue_vue_type_style_index_0_id_45841548_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0db8");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_nav_top_response_vue_vue_type_style_index_0_id_45841548_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_nav_top_response_vue_vue_type_style_index_0_id_45841548_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_nav_top_response_vue_vue_type_style_index_0_id_45841548_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_nav_top_response_vue_vue_type_style_index_0_id_45841548_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "b9ec":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".el-carousel__item[data-v-04b46ca2]{position:absolute;top:0;left:0;width:100%;height:100%;display:inline-block;overflow:hidden;z-index:0}.el-carousel__item.is-active[data-v-04b46ca2]{z-index:2}.el-carousel__item--card[data-v-04b46ca2],.el-carousel__item.is-animating[data-v-04b46ca2]{transition:transform .4s ease-in-out}.el-carousel__item--card[data-v-04b46ca2]{width:50%}.el-carousel__item--card.is-in-stage[data-v-04b46ca2]{cursor:pointer;z-index:1}.el-carousel__item--card.is-in-stage.is-hover .el-carousel__mask[data-v-04b46ca2],.el-carousel__item--card.is-in-stage:hover .el-carousel__mask[data-v-04b46ca2]{opacity:.12}.el-carousel__item--card.is-active[data-v-04b46ca2]{z-index:2}.el-carousel__mask[data-v-04b46ca2]{position:absolute;width:100%;height:100%;top:0;left:0;background-color:#fff;opacity:.24;transition:.2s}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "bc45":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_nav_top_vue_vue_type_style_index_0_id_2ef75dd4_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f852");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_nav_top_vue_vue_type_style_index_0_id_2ef75dd4_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_nav_top_vue_vue_type_style_index_0_id_2ef75dd4_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_nav_top_vue_vue_type_style_index_0_id_2ef75dd4_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_nav_top_vue_vue_type_style_index_0_id_2ef75dd4_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "bf86":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("986f");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("73ccdf66", content, shadowRoot)
};

/***/ }),

/***/ "c075":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_link_vue_vue_type_style_index_0_id_5b534182_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9cb1");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_link_vue_vue_type_style_index_0_id_5b534182_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_link_vue_vue_type_style_index_0_id_5b534182_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_link_vue_vue_type_style_index_0_id_5b534182_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_link_vue_vue_type_style_index_0_id_5b534182_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "c295":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("013c");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("8bd5ae20", content, shadowRoot)
};

/***/ }),

/***/ "c357":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("c862");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("4fbe4bfb", content, shadowRoot)
};

/***/ }),

/***/ "c39c":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("a046");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("7f54cc67", content, shadowRoot)
};

/***/ }),

/***/ "c651":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_select_vue_vue_vue_type_style_index_0_id_03d0605e_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("712d");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_select_vue_vue_vue_type_style_index_0_id_03d0605e_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_select_vue_vue_vue_type_style_index_0_id_03d0605e_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_select_vue_vue_vue_type_style_index_0_id_03d0605e_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_select_vue_vue_vue_type_style_index_0_id_03d0605e_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


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

/***/ "c862":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".bp-tag[data-v-5b48e208]{height:20px;width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background:#fff;padding:0 4px;border-radius:4px;font-size:14px;text-align:center;line-height:20px}.hide[data-v-5b48e208]{display:none}.tag-default.tag-subtle[data-v-5b48e208]{background:#e5eaec;color:rgba(9,30,66,.82)}.tag-default.tag-bold[data-v-5b48e208]{background:rgba(9,30,66,.77);color:#fff}.tag-blue.tag-subtle[data-v-5b48e208]{background:#d7d2ee;color:#0049b0}.tag-blue.tag-bold[data-v-5b48e208]{background:#bcb5e3;color:rgba(9,30,66,.95)}.tag-green.tag-subtle[data-v-5b48e208]{background:#79f2c0;color:#064}.tag-green.tag-bold[data-v-5b48e208]{background:#57d9a3;color:rgba(9,30,66,.95)}.tag-purple.tag-subtle[data-v-5b48e208]{background:#c0b6f2;color:#403294}.tag-purple.tag-bold[data-v-5b48e208]{background:#998dd9;color:rgba(9,30,66,.95)}.tag-teals.tag-subtle[data-v-5b48e208]{background:#79e2f2;color:rgba(9,30,66,.82)}.tag-teals.tag-bold[data-v-5b48e208]{background:#00c7e6;color:rgba(9,30,66,.95)}.tag-red.tag-subtle[data-v-5b48e208]{background:#ffbdad;color:rgba(9,30,66,.95)}.tag-red.tag-bold[data-v-5b48e208]{background:#ff8f73;color:rgba(9,30,66,.95)}.tag-yellow.tag-subtle[data-v-5b48e208]{background:#ffab00;color:rgba(9,30,66,.95)}.tag-yellow.tag-bold[data-v-5b48e208]{background:#ffc400;color:rgba(9,30,66,.95)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca12":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".bp-text[data-v-4cf5b5a6]{height:auto;width:auto;margin-left:8;margin-right:8;margin-top:8;margin-bottom:8;padding-left:8;padding-right:8;padding-top:8;padding-bottom:8;background:transparent;padding:0;color:rgba(9,30,66,.95)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "ca6d":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-f9621332]{letter-spacing:.4px;line-height:1.6;box-sizing:border-box}.cursor-pointer[data-v-f9621332]{cursor:pointer}.borderNone[data-v-f9621332]{border-bottom:0!important}.nav[data-v-f9621332]{background:#fff;text-align:center;font-size:14px}.bordernav[data-v-f9621332]{border-bottom:1px solid rgba(22,28,57,.12)}.bordernavInverse[data-v-f9621332]{border-bottom:1px solid hsla(0,0%,100%,.12)}.navInverse[data-v-f9621332]{background:transparent;text-align:center;font-size:14px}.fixed-nav[data-v-f9621332]{height:80px;width:100%;top:0;padding:0 100px;position:fixed;z-index:1000}.fixed-nav[data-v-f9621332],.fixed-nav .selectMenu[data-v-f9621332]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.fixed-nav .selectMenu[data-v-f9621332]{height:auto;width:auto;background:0 0;color:#fff;font-size:14px;align-content:flex-start;padding:0}.fixed-nav .selectMenu .bp-select[data-v-f9621332]{height:40px;width:-webkit-max-content;width:-moz-max-content;width:max-content;background:0 0;padding:0;margin:0;position:relative;cursor:pointer;box-sizing:border-box;color:#2d334d}.fixed-nav .selectMenu .bp-select[data-v-f9621332]:hover{background:transparent}.fixed-nav .selectMenu .bp-select[data-v-f9621332]:focus{outline:none}.fixed-nav .selectMenu[data-v-f9621332] .bp-select .bp-option{height:auto;min-height:32px;width:100%;background:0 0;color:#344563;display:flex;padding:0 16px;align-items:center;margin-bottom:16px;text-align:left}.fixed-nav .selectMenu .bp-select .bp-option[data-v-f9621332]:hover{background-color:#ebecf0}.fixed-nav .selectMenu[data-v-f9621332] .bp-select-title{height:100%;display:flex;align-items:center;padding:0 8px;justify-content:space-between}.fixed-nav .selectMenu[data-v-f9621332] .bp-option-group,.fixed-nav .selectMenu[data-v-f9621332] .bp-select-title{width:-webkit-max-content!important;width:-moz-max-content!important;width:max-content!important}.fixed-nav .selectMenu[data-v-f9621332] .bp-option-group{position:absolute;background:#fff;max-width:300px;margin:0;padding:16px 0 4px 0;border-radius:3px;box-shadow:0 4px 8px -2px rgba(9,30,66,.25)}.fixed-nav .selectMenu .bp-option[data-v-f9621332]:hover{background-color:#ebecf0}.fixed-nav .selectMenu .option-active[data-v-f9621332]{color:#fff!important;background-color:rgba(9,30,66,.71)!important}.fixed-nav .selectMenu .option-active .icon path[data-v-f9621332]{fill:#fff}.fixed-nav .selectMenu .bp-text[data-v-f9621332]{height:auto;width:auto;background:0 0;color:#2d334d!important;font-size:14px;letter-spacing:0;margin-left:32px;cursor:pointer!important;padding:0}.fixed-nav .nav-border[data-v-f9621332]{height:80px;width:100%;display:flex;align-content:flex-start;align-items:center;justify-content:space-between}.fixed-nav .navButton[data-v-f9621332]{display:flex;align-content:flex-start;align-items:stretch;justify-content:flex-start}.fixed-nav .navButton .home-user-select[data-v-f9621332]{width:auto;height:auto;background:0 0}.fixed-nav .navButton .home-user-select[data-v-f9621332] .bp-select-title{padding:0}.fixed-nav .navButton .home-user-select[data-v-f9621332] .bp-select-title .svg-icon{width:24px;height:24px}.fixed-nav .navButton .home-user-select[data-v-f9621332] .bp-option-group{position:absolute;font-size:14px;width:120px}.fixed-nav .navButton .concact[data-v-f9621332]{background:#ffdd4d!important;border:none;border-radius:40px!important;padding:0 10px;margin-right:8px}.fixed-nav .navButton .concact[data-v-f9621332],.fixed-nav .navButton .login[data-v-f9621332]{line-height:32px!important;height:32px!important;color:#2d334d!important;text-align:center!important;display:inline-block!important;font-size:14px}.fixed-nav .navButton .login[data-v-f9621332]{border:1px solid rgba(22,28,57,.12)!important;border-radius:40px!important;width:80px!important;background:0 0!important}.fixed-nav .inverseColor .concact[data-v-f9621332]{background:#fff!important}.fixed-nav .inverseColor .login[data-v-f9621332]{color:hsla(0,0%,100%,.9)!important;border:1px solid hsla(0,0%,100%,.6)!important}.fixed-nav .inverseColor .bp-select[data-v-f9621332],.fixed-nav .inverseColor .bp-text[data-v-f9621332]{color:#fff!important}@media screen and (max-width:992px) and (min-width:769px){[data-v-f9621332]::-webkit-scrollbar-thumb{background:transparent}.fixed-nav[data-v-f9621332]{padding:0 60px!important}}@media screen and (max-width:768px) and (min-width:480px){[data-v-f9621332]::-webkit-scrollbar-thumb{background:transparent}.fixed-nav[data-v-f9621332],.fixed-nav-inverse[data-v-f9621332]{padding:0 40px!important}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "ccc0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_carousel_item_vue_vue_type_style_index_0_id_70e4c7dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4f2e");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_carousel_item_vue_vue_type_style_index_0_id_70e4c7dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_carousel_item_vue_vue_type_style_index_0_id_70e4c7dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_carousel_item_vue_vue_type_style_index_0_id_70e4c7dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_carousel_item_vue_vue_type_style_index_0_id_70e4c7dc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "ceaf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_menu_vue_vue_type_style_index_0_id_a8501ce2_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0ef8");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_menu_vue_vue_type_style_index_0_id_a8501ce2_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_menu_vue_vue_type_style_index_0_id_a8501ce2_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_menu_vue_vue_type_style_index_0_id_a8501ce2_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_menu_vue_vue_type_style_index_0_id_a8501ce2_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "cebd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_option_vue_vue_vue_type_style_index_0_id_8fcec036_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("294e");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_option_vue_vue_vue_type_style_index_0_id_8fcec036_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_option_vue_vue_vue_type_style_index_0_id_8fcec036_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_option_vue_vue_vue_type_style_index_0_id_8fcec036_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_option_vue_vue_vue_type_style_index_0_id_8fcec036_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "cee3":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-a8501ce2]{box-sizing:border-box}.bp-menu[data-v-a8501ce2]{height:auto;width:208px;margin-left:8;margin-right:8;margin-top:8;margin-bottom:8;padding-left:8;padding-right:8;padding-top:8;padding-bottom:8;background:transparent;padding:0;margin:0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "cfa7":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".bp-status[data-v-4a4c3d80]{height:16px;width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background:#fff;padding:0 4px;font-size:12px;line-height:16px;text-align:center;border-radius:4px}.status-default.status-subtle[data-v-4a4c3d80]{background:rgba(9,30,66,.13);color:rgba(9,30,66,.77)}.status-default.status-bold[data-v-4a4c3d80]{background:rgba(9,30,66,.77);color:#fff}.status-success.status-subtle[data-v-4a4c3d80]{background:#e2ffee;color:#064}.status-success.status-bold[data-v-4a4c3d80]{background:#00875a;color:#fff}.status-removed.status-subtle[data-v-4a4c3d80]{background:#ffebe6;color:#bf2600}.status-removed.status-bold[data-v-4a4c3d80]{background:#de350b;color:#fff}.status-in-progress.status-subtle[data-v-4a4c3d80]{background:#f2f0f9;color:#5342b3}.status-in-progress.status-bold[data-v-4a4c3d80]{background:#7163c5;color:#fff}.status-new.status-subtle[data-v-4a4c3d80]{background:#eae6ff;color:#403294}.status-new.status-bold[data-v-4a4c3d80]{background:#5243aa;color:#fff}.status-moved.status-subtle[data-v-4a4c3d80]{background:#ff991f;color:rgba(9,30,66,.95)}.status-moved.status-bold[data-v-4a4c3d80]{background:#fffae6;color:rgba(9,30,66,.95)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "d315":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("d6af");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("73a21e2b", content, shadowRoot)
};

/***/ }),

/***/ "d50a":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".button-group .button-item[data-v-04ef1234]{background:rgba(9,30,66,.04);color:rgba(9,30,66,.71);font-size:14px;outline:none;cursor:pointer;border:0;margin-right:2px}.button-group button[data-v-04ef1234]:first-child{border-radius:4px 0 0 4px}.button-group button[data-v-04ef1234]:last-child{border-radius:0 4px 4px 0;margin-right:0}.button-group .button-item.active[data-v-04ef1234]{background:rgba(9,30,66,.71);color:#fff}.button-density-comfy[data-v-04ef1234]{height:40px;line-height:40px}.button-density-default[data-v-04ef1234]{height:32px;line-height:32px}.button-density-compact[data-v-04ef1234]{height:24px;line-height:24px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "d6af":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-39d77038]{letter-spacing:.4px;line-height:1.6;box-sizing:border-box}a[data-v-39d77038]{font-size:14px;color:#3373e1;line-height:32px;text-decoration:none;text-align:center}.cursor-pointer[data-v-39d77038]{cursor:pointer}span.ph-body-medium[data-v-39d77038]{font-size:16px;color:#747789}span.ph-body-small[data-v-39d77038]{font-size:14px;color:#747789}span.ph-H-Large_2[data-v-39d77038]{font-size:24px;color:#2d334d}span.ph-body-xsmall-tertiary[data-v-39d77038]{font-size:12px;color:#a2a5b0}.text-right[data-v-39d77038]{text-align:right}.bp-img[data-v-39d77038]{-o-object-fit:cover;object-fit:cover}.mb-2[data-v-39d77038]{margin-bottom:8px}.mr-3[data-v-39d77038]{margin-right:16px}.page-bottom-part[data-v-39d77038]{height:auto;flex-direction:column}.page-bottom-part[data-v-39d77038],.page-bottom-part .contact-container[data-v-39d77038]{width:100%;background:transparent;display:flex;align-items:center}.page-bottom-part .contact-container[data-v-39d77038]{height:313px;max-width:1200px;flex-direction:row;justify-content:center}.page-bottom-part .contact-container .contact-content[data-v-39d77038]{height:153px;width:914px;border-radius:4px;padding:0 100px;display:flex;justify-content:space-between;align-items:center;background:transparent;background-image:conic-gradient(from 90deg,#f9fafe,#e5e7f0);background-image:-moz-linear-gradient(from 90deg,#f9fafe,#e5e7f0);background:-moz-linear-gradient(top,#f9fafe,#e5e7f0)}.page-bottom-part .contact-container .contact-content .contact-slogan-part[data-v-39d77038]{height:auto;width:auto;background:transparent;display:flex;flex-direction:column}.page-bottom-part .contact-container .contact-content .contact-us-button[data-v-39d77038]{height:40px;width:137px;padding:1px 6px;line-height:32px;border:none;background:#161c39;color:#fff;font-size:14px;border-radius:2px;outline:0;cursor:pointer;justify-content:center}.page-bottom-part .page-bottom[data-v-39d77038]{height:auto;width:100%;min-width:375px;background:rgba(22,28,57,.02);padding:100px 100px 0}.page-bottom-part .page-bottom .bottom-pharbers[data-v-39d77038]{height:auto;width:100%;margin-bottom:65px;background:transparent;display:flex;flex-direction:column}.page-bottom-part .page-bottom .bottom-pharbers .bottom-pharbers-icon[data-v-39d77038]{height:32px;width:102px;margin-bottom:64px;background:transparent}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container[data-v-39d77038],.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-product-container[data-v-39d77038]{display:flex}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-product-container .bottom-list-a[data-v-39d77038]{height:auto;width:auto;margin-right:64px;background:0 0;display:flex;flex-direction:column}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-product-container .bottom-list-a .bottom-pharbers-title[data-v-39d77038]{margin-bottom:24px;color:#161c39;height:auto;width:auto;background:0 0;font-size:14px}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-product-container .bottom-list-b[data-v-39d77038]{display:flex;flex-direction:column}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-product-container .bottom-list-b .bottom-pharbers-title[data-v-39d77038]{margin-bottom:24px;color:#161c39;height:auto;width:auto;background:0 0;font-size:14px}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-address[data-v-39d77038]{height:auto;width:auto;background:0 0;flex:1;display:flex;justify-content:flex-end;align-items:flex-end}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-address .address-bj-part[data-v-39d77038]{height:auto;width:auto;margin-right:24px;background:0 0;display:flex;flex-direction:column}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-address .address-sh-part[data-v-39d77038]{height:auto;width:auto;background:0 0;display:flex;flex-direction:column}.page-bottom-part .page-bottom .bottom-contact[data-v-39d77038]{padding-bottom:24px;border-bottom:1px solid #e2e4e7;justify-content:space-between}.page-bottom-part .page-bottom .bottom-contact[data-v-39d77038],.page-bottom-part .page-bottom .bottom-contact .bottom-contact-left[data-v-39d77038]{height:auto;width:auto;background:0 0;display:flex}.page-bottom-part .page-bottom .bottom-contact .bottom-contact-left .select-language[data-v-39d77038]{width:auto;background:0 0}.page-bottom-part .page-bottom .bottom-contact .bottom-contact-left .select-language[data-v-39d77038] .bp-select-title{font-size:14px;color:#747789;height:24px;width:-webkit-max-content;width:-moz-max-content;width:max-content}.page-bottom-part .page-bottom .bottom-contact .bottom-contact-left .select-language[data-v-39d77038] .bp-select-title .select-language-icon{padding:3px;width:24px;height:24px}.page-bottom-part .page-bottom .bottom-contact .bottom-contact-left .select-language[data-v-39d77038] .bp-option-group{width:-webkit-max-content;width:-moz-max-content;width:max-content}.page-bottom-part .page-bottom .bottom-contact .bottom-contact-left .select-language[data-v-39d77038] .bp-option-group .bp-option{font-size:14px}.page-bottom-part .page-bottom .bottom-contact .bottom-contact-right[data-v-39d77038]{width:auto;height:auto;background:0 0}.page-bottom-part .page-bottom .bottom-contact .bottom-contact-right .bottom-contact-icon[data-v-39d77038]{height:24px;width:24px;margin-left:24px;background:0 0}.page-bottom-part .page-bottom .bottom-copyright[data-v-39d77038]{height:97px;width:100%;background:0 0;display:flex;justify-content:space-between;align-items:center}.page-bottom-part .page-bottom .bottom-copyright .bottom-copyright-left[data-v-39d77038]{width:55%;height:auto;display:flex;justify-content:space-between}.page-bottom-part .page-bottom .bottom-copyright .bottom-copyright-left .online-filing[data-v-39d77038]{display:flex;align-items:center}.page-bottom-part .page-bottom .bottom-copyright .bottom-copyright-left .online-filing .presented-logo[data-v-39d77038]{width:20px;height:20px;margin-right:4px}@media screen and (max-width:992px){.page-bottom-part .contact-container .contact-content[data-v-39d77038]{width:88%;height:auto;display:flex;justify-content:space-between;align-items:center;padding:40px 80px;flex-wrap:wrap}.page-bottom-part .page-bottom[data-v-39d77038]{padding:100px 60px 0}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container[data-v-39d77038]{width:100%;flex-wrap:wrap}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-product-container[data-v-39d77038]{width:375px}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-address[data-v-39d77038]{margin-top:20px;justify-content:center}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-address .address-bj-part span[data-v-39d77038],.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-address .address-sh-part span[data-v-39d77038]{text-align:left}}@media screen and (max-width:768px){.page-bottom-part .contact-container .contact-content[data-v-39d77038]{width:90%;height:auto;display:flex;justify-content:space-between;align-items:center;padding:40px 80px;flex-direction:column}.page-bottom-part .contact-container .contact-content .response-text-center[data-v-39d77038]{text-align:center}.page-bottom-part .contact-container .contact-content .contact-us-button[data-v-39d77038]{margin-top:24px}.page-bottom-part .page-bottom[data-v-39d77038]{padding:100px 40px 0}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container[data-v-39d77038]{flex-direction:column}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-address[data-v-39d77038]{justify-content:flex-start}}@media screen and (max-width:480px){.page-bottom-part .contact-container[data-v-39d77038]{height:307px}.page-bottom-part .contact-container .contact-content[data-v-39d77038]{width:100%;height:auto;display:flex;flex-direction:column;justify-content:center;align-content:center;padding:40px 0;flex-wrap:wrap;margin-right:24px;margin-left:24px}.page-bottom-part .contact-container .contact-content .response-text-center[data-v-39d77038]{text-align:center}.page-bottom-part .contact-container .contact-content .contact-us-button[data-v-39d77038]{margin-top:24px}.page-bottom-part .page-bottom[data-v-39d77038]{padding:100px 16px 0}.page-bottom-part .page-bottom .bottom-copyright[data-v-39d77038]{flex-direction:column;justify-content:center;align-items:flex-start}.page-bottom-part .page-bottom .bottom-copyright .bottom-copyright-left[data-v-39d77038]{width:100%;margin-bottom:16px}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "db39":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_button_group_vue_vue_type_style_index_0_id_cdd754a2_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0122");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_button_group_vue_vue_type_style_index_0_id_cdd754a2_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_button_group_vue_vue_type_style_index_0_id_cdd754a2_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_button_group_vue_vue_type_style_index_0_id_cdd754a2_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_button_group_vue_vue_type_style_index_0_id_cdd754a2_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


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

/***/ "de02":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("e137");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("5535d7e6", content, shadowRoot)
};

/***/ }),

/***/ "e0e3":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("64d7");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("ddecba26", content, shadowRoot)
};

/***/ }),

/***/ "e128":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("8616");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("7577ba24", content, shadowRoot)
};

/***/ }),

/***/ "e137":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-ed938026]{letter-spacing:.4px;line-height:1.6;box-sizing:border-box}a[data-v-ed938026]{font-size:14px;color:#3373e1;line-height:32px;text-decoration:none;text-align:center}.cursor-pointer[data-v-ed938026]{cursor:pointer}span.ph-body-medium[data-v-ed938026]{font-size:16px;color:#747789}span.ph-body-small[data-v-ed938026]{font-size:14px;color:#747789}span.ph-H-Large_2[data-v-ed938026]{font-size:24px;color:#2d334d}span.ph-body-xsmall-tertiary[data-v-ed938026]{font-size:12px;color:#a2a5b0}.text-right[data-v-ed938026]{text-align:right}.bp-img[data-v-ed938026]{-o-object-fit:cover;object-fit:cover}.mb-2[data-v-ed938026]{margin-bottom:8px}.mr-3[data-v-ed938026]{margin-right:16px}.page-bottom-part[data-v-ed938026]{height:auto;flex-direction:column}.page-bottom-part[data-v-ed938026],.page-bottom-part .contact-container[data-v-ed938026]{width:100%;background:transparent;display:flex;align-items:center}.page-bottom-part .contact-container[data-v-ed938026]{height:313px;max-width:1200px;flex-direction:row;justify-content:center}.page-bottom-part .contact-container .contact-content[data-v-ed938026]{height:153px;width:914px;border-radius:4px;padding:0 100px;display:flex;justify-content:space-between;align-items:center;background:transparent;background-image:conic-gradient(from 90deg,#f9fafe,#e5e7f0);background-image:-moz-linear-gradient(from 90deg,#f9fafe,#e5e7f0);background:-moz-linear-gradient(top,#f9fafe,#e5e7f0)}.page-bottom-part .contact-container .contact-content .contact-slogan-part[data-v-ed938026]{height:auto;width:auto;background:transparent;display:flex;flex-direction:column}.page-bottom-part .contact-container .contact-content .contact-us-button[data-v-ed938026]{height:40px;width:137px;padding:1px 6px;line-height:32px;border:none;background:#161c39;color:#fff;font-size:14px;border-radius:2px;outline:0;cursor:pointer;justify-content:center}.page-bottom-part .page-bottom[data-v-ed938026]{height:auto;width:100%;min-width:375px;background:rgba(22,28,57,.02);padding:100px 100px 0}.page-bottom-part .page-bottom .bottom-pharbers[data-v-ed938026]{height:auto;width:100%;margin-bottom:65px;background:transparent;display:flex;flex-direction:column}.page-bottom-part .page-bottom .bottom-pharbers .bottom-pharbers-icon[data-v-ed938026]{height:32px;width:102px;margin-bottom:64px;background:transparent}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container[data-v-ed938026],.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-product-container[data-v-ed938026]{display:flex}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-product-container .bottom-list-a[data-v-ed938026]{height:auto;width:auto;margin-right:64px;background:0 0;display:flex;flex-direction:column}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-product-container .bottom-list-a .bottom-pharbers-title[data-v-ed938026]{margin-bottom:24px;color:#161c39;height:auto;width:auto;background:0 0;font-size:14px}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-product-container .bottom-list-b[data-v-ed938026]{display:flex;flex-direction:column}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-product-container .bottom-list-b .bottom-pharbers-title[data-v-ed938026]{margin-bottom:24px;color:#161c39;height:auto;width:auto;background:0 0;font-size:14px}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-address[data-v-ed938026]{height:auto;width:auto;background:0 0;flex:1;display:flex;justify-content:flex-end;align-items:flex-end}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-address .address-bj-part[data-v-ed938026]{height:auto;width:auto;margin-right:24px;background:0 0;display:flex;flex-direction:column}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-address .address-sh-part[data-v-ed938026]{height:auto;width:auto;background:0 0;display:flex;flex-direction:column}.page-bottom-part .page-bottom .bottom-contact[data-v-ed938026]{padding-bottom:24px;border-bottom:1px solid #e2e4e7;justify-content:space-between}.page-bottom-part .page-bottom .bottom-contact[data-v-ed938026],.page-bottom-part .page-bottom .bottom-contact .bottom-contact-left[data-v-ed938026]{height:auto;width:auto;background:0 0;display:flex}.page-bottom-part .page-bottom .bottom-contact .bottom-contact-left .select-language[data-v-ed938026]{width:auto;background:0 0}.page-bottom-part .page-bottom .bottom-contact .bottom-contact-left .select-language[data-v-ed938026] .bp-select-title{font-size:14px;color:#747789;height:24px;width:-webkit-max-content;width:-moz-max-content;width:max-content}.page-bottom-part .page-bottom .bottom-contact .bottom-contact-left .select-language[data-v-ed938026] .bp-select-title .select-language-icon{padding:3px;width:24px;height:24px}.page-bottom-part .page-bottom .bottom-contact .bottom-contact-left .select-language[data-v-ed938026] .bp-option-group{width:-webkit-max-content;width:-moz-max-content;width:max-content}.page-bottom-part .page-bottom .bottom-contact .bottom-contact-left .select-language[data-v-ed938026] .bp-option-group .bp-option{font-size:14px}.page-bottom-part .page-bottom .bottom-contact .bottom-contact-right[data-v-ed938026]{width:auto;height:auto;background:0 0}.page-bottom-part .page-bottom .bottom-contact .bottom-contact-right .bottom-contact-icon[data-v-ed938026]{height:24px;width:24px;margin-left:24px;background:0 0}.page-bottom-part .page-bottom .bottom-copyright[data-v-ed938026]{height:97px;width:100%;background:0 0;display:flex;justify-content:space-between;align-items:center}.page-bottom-part .page-bottom .bottom-copyright .bottom-copyright-left[data-v-ed938026]{width:55%;height:auto;display:flex;justify-content:space-between}.page-bottom-part .page-bottom .bottom-copyright .bottom-copyright-left .online-filing[data-v-ed938026]{display:flex;align-items:center}.page-bottom-part .page-bottom .bottom-copyright .bottom-copyright-left .online-filing .presented-logo[data-v-ed938026]{width:20px;height:20px;margin-right:4px}@media screen and (max-width:992px){.page-bottom-part .contact-container .contact-content[data-v-ed938026]{width:88%;height:auto;display:flex;justify-content:space-between;align-items:center;padding:40px 80px;flex-wrap:wrap}.page-bottom-part .page-bottom[data-v-ed938026]{padding:100px 60px 0}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container[data-v-ed938026]{width:100%;flex-wrap:wrap}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-product-container[data-v-ed938026]{width:375px}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-address[data-v-ed938026]{margin-top:20px;justify-content:center}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-address .address-bj-part span[data-v-ed938026],.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-address .address-sh-part span[data-v-ed938026]{text-align:left}}@media screen and (max-width:768px){.page-bottom-part .contact-container .contact-content[data-v-ed938026]{width:90%;height:auto;display:flex;justify-content:space-between;align-items:center;padding:40px 80px;flex-direction:column}.page-bottom-part .contact-container .contact-content .response-text-center[data-v-ed938026]{text-align:center}.page-bottom-part .contact-container .contact-content .contact-us-button[data-v-ed938026]{margin-top:24px}.page-bottom-part .page-bottom[data-v-ed938026]{padding:100px 40px 0}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container[data-v-ed938026]{flex-direction:column}.page-bottom-part .page-bottom .bottom-pharbers .bottom-row-container .bottom-address[data-v-ed938026]{justify-content:flex-start}}@media screen and (max-width:480px){.page-bottom-part .contact-container[data-v-ed938026]{height:307px}.page-bottom-part .contact-container .contact-content[data-v-ed938026]{width:100%;height:auto;display:flex;flex-direction:column;justify-content:center;align-content:center;padding:40px 0;flex-wrap:wrap;margin-right:24px;margin-left:24px}.page-bottom-part .contact-container .contact-content .response-text-center[data-v-ed938026]{text-align:center}.page-bottom-part .contact-container .contact-content .contact-us-button[data-v-ed938026]{margin-top:24px}.page-bottom-part .page-bottom[data-v-ed938026]{padding:100px 16px 0}.page-bottom-part .page-bottom .bottom-copyright[data-v-ed938026]{flex-direction:column;justify-content:center;align-items:flex-start}.page-bottom-part .page-bottom .bottom-copyright .bottom-copyright-left[data-v-ed938026]{width:100%;margin-bottom:16px}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "e8cb":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-2ef75dd4]{letter-spacing:.4px;line-height:1.6;box-sizing:border-box}.cursor-pointer[data-v-2ef75dd4]{cursor:pointer}.borderNone[data-v-2ef75dd4]{border-bottom:0!important}.nav[data-v-2ef75dd4]{background:#fff;text-align:center;font-size:14px}.bordernav[data-v-2ef75dd4]{border-bottom:1px solid rgba(22,28,57,.12)}.bordernavInverse[data-v-2ef75dd4]{border-bottom:1px solid hsla(0,0%,100%,.12)}.navInverse[data-v-2ef75dd4]{background:transparent;text-align:center;font-size:14px}.fixed-nav[data-v-2ef75dd4]{height:80px;width:100%;top:0;padding:0 100px;position:fixed;z-index:1000}.fixed-nav[data-v-2ef75dd4],.fixed-nav .selectMenu[data-v-2ef75dd4]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.fixed-nav .selectMenu[data-v-2ef75dd4]{height:auto;width:auto;background:0 0;color:#fff;font-size:14px;align-content:flex-start;padding:0}.fixed-nav .selectMenu .bp-select[data-v-2ef75dd4]{height:40px;width:-webkit-max-content;width:-moz-max-content;width:max-content;background:0 0;padding:0;margin:0;position:relative;cursor:pointer;box-sizing:border-box;color:#2d334d}.fixed-nav .selectMenu .bp-select[data-v-2ef75dd4]:hover{background:transparent}.fixed-nav .selectMenu .bp-select[data-v-2ef75dd4]:focus{outline:none}.fixed-nav .selectMenu[data-v-2ef75dd4] .bp-select .bp-option{height:auto;min-height:32px;width:100%;background:0 0;color:#344563;display:flex;padding:0 16px;align-items:center;margin-bottom:16px;text-align:left}.fixed-nav .selectMenu .bp-select .bp-option[data-v-2ef75dd4]:hover{background-color:#ebecf0}.fixed-nav .selectMenu[data-v-2ef75dd4] .bp-select-title{height:100%;display:flex;align-items:center;padding:0 8px;justify-content:space-between}.fixed-nav .selectMenu[data-v-2ef75dd4] .bp-option-group,.fixed-nav .selectMenu[data-v-2ef75dd4] .bp-select-title{width:-webkit-max-content!important;width:-moz-max-content!important;width:max-content!important}.fixed-nav .selectMenu[data-v-2ef75dd4] .bp-option-group{position:absolute;background:#fff;max-width:300px;margin:0;padding:16px 0 4px 0;border-radius:3px;box-shadow:0 4px 8px -2px rgba(9,30,66,.25)}.fixed-nav .selectMenu .bp-option[data-v-2ef75dd4]:hover{background-color:#ebecf0}.fixed-nav .selectMenu .option-active[data-v-2ef75dd4]{color:#fff!important;background-color:rgba(9,30,66,.71)!important}.fixed-nav .selectMenu .option-active .icon path[data-v-2ef75dd4]{fill:#fff}.fixed-nav .selectMenu .bp-text[data-v-2ef75dd4]{height:auto;width:auto;background:0 0;color:#2d334d!important;font-size:14px;letter-spacing:0;margin-left:32px;cursor:pointer!important;padding:0}.fixed-nav .nav-border[data-v-2ef75dd4]{height:80px;width:100%;display:flex;align-content:flex-start;align-items:center;justify-content:space-between}.fixed-nav .navButton[data-v-2ef75dd4]{display:flex;align-content:flex-start;align-items:stretch;justify-content:flex-start}.fixed-nav .navButton .home-user-select[data-v-2ef75dd4]{width:auto;height:auto;background:0 0}.fixed-nav .navButton .home-user-select[data-v-2ef75dd4] .bp-select-title{padding:0}.fixed-nav .navButton .home-user-select[data-v-2ef75dd4] .bp-select-title .svg-icon{width:24px;height:24px}.fixed-nav .navButton .home-user-select[data-v-2ef75dd4] .bp-option-group{position:absolute;font-size:14px;width:120px}.fixed-nav .navButton .concact[data-v-2ef75dd4]{background:#ffdd4d!important;border:none;border-radius:40px!important;padding:0 10px;margin-right:8px}.fixed-nav .navButton .concact[data-v-2ef75dd4],.fixed-nav .navButton .login[data-v-2ef75dd4]{line-height:32px!important;height:32px!important;color:#2d334d!important;text-align:center!important;display:inline-block!important;font-size:14px}.fixed-nav .navButton .login[data-v-2ef75dd4]{border:1px solid rgba(22,28,57,.12)!important;border-radius:40px!important;width:80px!important;background:0 0!important}.fixed-nav .inverseColor .concact[data-v-2ef75dd4]{background:#fff!important}.fixed-nav .inverseColor .login[data-v-2ef75dd4]{color:hsla(0,0%,100%,.9)!important;border:1px solid hsla(0,0%,100%,.6)!important}.fixed-nav .inverseColor .bp-select[data-v-2ef75dd4],.fixed-nav .inverseColor .bp-text[data-v-2ef75dd4]{color:#fff!important}@media screen and (max-width:992px) and (min-width:769px){[data-v-2ef75dd4]::-webkit-scrollbar-thumb{background:transparent}.fixed-nav[data-v-2ef75dd4]{padding:0 60px!important}}@media screen and (max-width:768px) and (min-width:480px){[data-v-2ef75dd4]::-webkit-scrollbar-thumb{background:transparent}.fixed-nav[data-v-2ef75dd4],.fixed-nav-inverse[data-v-2ef75dd4]{padding:0 40px!important}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "ea1a":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".svg-icon[data-v-cb5a0b6c]{width:16px;height:16px}svg[data-v-cb5a0b6c]:focus{outline:none}li.option-active[data-v-cb5a0b6c]{color:#fff!important;background-color:rgba(9,30,66,.71)!important}li.option-active .icon path[data-v-cb5a0b6c]{fill:#fff}.bp-option[data-v-cb5a0b6c]{height:32px;width:100%;margin-left:8;margin-right:8;margin-top:8;margin-bottom:8;padding-left:8;padding-right:8;padding-top:8;padding-bottom:8;background:transparent;color:#344563;display:flex;padding:0 16px;align-items:center}.bp-option[data-v-cb5a0b6c]:hover{background-color:#ebecf0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "ea4f":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-596e214c]{box-sizing:border-box}.svg-icon[data-v-596e214c]{width:16px;height:16px}.bp-option-group[data-v-596e214c]{margin:0;padding:4px 0;background:#fff;box-shadow:0 4px 8px -2px rgba(9,30,66,.25);border-radius:3px}.bp-select-title[data-v-596e214c]{height:100%;width:100%;display:flex;align-items:center;padding:0 8px;justify-content:space-between}.d-none[data-v-596e214c]{display:none}svg[data-v-596e214c]:focus{outline:none}.bp-select[data-v-596e214c]{height:40px;width:240px;margin-left:8;margin-right:8;margin-top:8;margin-bottom:8;padding-left:8;padding-right:8;padding-top:8;padding-bottom:8;background:rgba(9,30,66,.04);padding:0;margin:0;position:relative;cursor:pointer;box-sizing:border-box;border-radius:4px}.bp-select[data-v-596e214c]:hover{background:#ebecf0}.bp-text[data-v-596e214c]{height:auto;width:auto;background:0 0;padding:0}.ph-body-xsmall-tertiary[data-v-596e214c]{font-size:12px;color:#a2a5b0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "eb2e":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("8ad8");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("2e317286", content, shadowRoot)
};

/***/ }),

/***/ "ebb8":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("7d13");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("cfe642ea", content, shadowRoot)
};

/***/ }),

/***/ "ebfb":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("b622");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("17f17462", content, shadowRoot)
};

/***/ }),

/***/ "ed5c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_menu_item_vue_vue_type_style_index_0_id_58fd61a8_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("809b");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_menu_item_vue_vue_type_style_index_0_id_58fd61a8_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_menu_item_vue_vue_type_style_index_0_id_58fd61a8_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_menu_item_vue_vue_type_style_index_0_id_58fd61a8_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_menu_item_vue_vue_type_style_index_0_id_58fd61a8_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "edd3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_textarea_vue_vue_type_style_index_0_id_2b34fca9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b530");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_textarea_vue_vue_type_style_index_0_id_2b34fca9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_textarea_vue_vue_type_style_index_0_id_2b34fca9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_textarea_vue_vue_type_style_index_0_id_2b34fca9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_textarea_vue_vue_type_style_index_0_id_2b34fca9_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "f48a":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("4b2b");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("cf8a0e4c", content, shadowRoot)
};

/***/ }),

/***/ "f6de":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-442e0eb6]{box-sizing:border-box}ul[data-v-442e0eb6]{margin:0;padding:0}.svg-icon[data-v-442e0eb6]{width:1em;height:1em;vertical-align:-.15em;fill:currentColor;overflow:hidden;margin-right:4px}svg[data-v-442e0eb6]:focus{outline:none}.bp-sub-menu[data-v-442e0eb6]{height:auto;width:100%;margin-left:8;margin-right:8;margin-top:8;margin-bottom:8;padding-left:8;padding-right:8;padding-top:8;padding-bottom:8;background:transparent;min-height:40px;color:#505f79;padding:0 12px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start}.bp-sub-menu[data-v-442e0eb6]:hover{color:#3172e0}.bp-submenu-title[data-v-442e0eb6]{display:flex;height:40px;align-items:center;cursor:pointer}.menu-sub[data-v-442e0eb6]{padding-left:40px}.d-none[data-v-442e0eb6]{display:none}.bp-menu-item[data-v-442e0eb6]{height:40px;width:100%;margin-left:8;margin-right:8;margin-top:8;margin-bottom:8;padding-left:8;padding-right:8;padding-top:8;padding-bottom:8;background:transparent;display:flex;align-items:center;cursor:pointer;padding:0 12px;color:#505f79;box-sizing:border-box}.bp-menu-item[data-v-442e0eb6]:hover{color:#3172e0}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "f6fc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_input_vue_vue_type_style_index_0_id_415216c2_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("10bf");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_input_vue_vue_type_style_index_0_id_415216c2_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_input_vue_vue_type_style_index_0_id_415216c2_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_input_vue_vue_type_style_index_0_id_415216c2_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_input_vue_vue_type_style_index_0_id_415216c2_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "f852":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("e8cb");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("05b4343a", content, shadowRoot)
};

/***/ }),

/***/ "fba1":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-7b13dc7f]{letter-spacing:.4px;line-height:1.6;box-sizing:border-box}.case-icon-line[data-v-7b13dc7f]{flex-wrap:wrap;height:auto;width:100%;background:0 0;display:flex;flex-direction:row;justify-content:space-between;margin-bottom:40px}.case-icon-line .case-icon[data-v-7b13dc7f]{height:49px;width:200px;margin-bottom:32px;background:0 0}.case-icon-line-three[data-v-7b13dc7f]{padding:0 100px}@media screen and (max-width:992px) and (min-width:769px){.case-icon-line-three[data-v-7b13dc7f]{padding:0 8px!important}.case-icon[data-v-7b13dc7f]{width:26%!important}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "fc7a":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-5b68e1cc]{letter-spacing:.4px;line-height:1.6;box-sizing:border-box}.case-icon-line[data-v-5b68e1cc]{flex-wrap:wrap;height:auto;width:100%;background:0 0;display:flex;flex-direction:row;justify-content:space-between;margin-bottom:8px}.case-icon-line .case-icon[data-v-5b68e1cc]{height:49px;width:33%!important;-o-object-fit:contain!important;object-fit:contain!important;margin-bottom:32px;background:0 0}.case-icon-line-three[data-v-5b68e1cc]{padding:0 100px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "fc7d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_tag_vue_vue_type_style_index_0_id_5b48e208_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c357");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_tag_vue_vue_type_style_index_0_id_5b48e208_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_tag_vue_vue_type_style_index_0_id_5b48e208_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_tag_vue_vue_type_style_index_0_id_5b48e208_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_tag_vue_vue_type_style_index_0_id_5b48e208_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "fc86":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_sub_menu_vue_vue_type_style_index_0_id_1b1163e4_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b2d9");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_sub_menu_vue_vue_type_style_index_0_id_1b1163e4_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_sub_menu_vue_vue_type_style_index_0_id_1b1163e4_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_sub_menu_vue_vue_type_style_index_0_id_1b1163e4_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_sub_menu_vue_vue_type_style_index_0_id_1b1163e4_lang_scss_scoped_true_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


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

/***/ "fe6c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_sub_menu_vue_vue_type_style_index_0_id_442e0eb6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("34fa");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_sub_menu_vue_vue_type_style_index_0_id_442e0eb6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_sub_menu_vue_vue_type_style_index_0_id_442e0eb6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_sub_menu_vue_vue_type_style_index_0_id_442e0eb6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_svg_inline_loader_src_index_js_bp_sub_menu_vue_vue_type_style_index_0_id_442e0eb6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "fecf":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".svg-icon[data-v-16bcbf7c]{width:1em;height:1em;vertical-align:-.15em;fill:currentColor;overflow:hidden;margin-right:4px}svg[data-v-16bcbf7c]:focus{outline:none}.hide[data-v-16bcbf7c]{display:none}.bp-button[data-v-16bcbf7c]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-size:14px;text-align:center;padding:0 12px;border:0;border-radius:4px;cursor:pointer;outline:none;display:flex;flex-direction:row;align-items:center}.bp-button[data-v-16bcbf7c],.bp-button-group[data-v-16bcbf7c]{height:auto;width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;background:#fff}.bp-button-group[data-v-16bcbf7c]{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}button[data-v-16bcbf7c]{outline:none}button[data-v-16bcbf7c]:focus{outline:none!important}button.button-primary[data-v-16bcbf7c]{background:#7163c5;color:#fff}.button-primary[data-v-16bcbf7c]:hover{background:#9084d2}.button-primary[data-v-16bcbf7c]:active{background:#5342b3}.button-primary .button-icon-color path[data-v-16bcbf7c]{fill:#fff}.button-primary:disabled .button-icon-color path[data-v-16bcbf7c]{fill:rgba(9,30,66,.31)}button.button-standard[data-v-16bcbf7c]{background:rgba(9,30,66,.04);color:rgba(9,30,66,.71)}.button-standard[data-v-16bcbf7c]:hover{background:#e5eaec}.button-standard[data-v-16bcbf7c]:active{background:#f2f0f9;color:#7163c5}.button-standard .button-icon-color path[data-v-16bcbf7c]{fill:rgba(9,30,66,.71)}.button-standard:disabled .button-icon-color path[data-v-16bcbf7c]{fill:rgba(9,30,66,.31)}.button-standard:active .button-icon-color path[data-v-16bcbf7c]{fill:#7163c5}.button-primary[data-v-16bcbf7c]:disabled,.button-standard[data-v-16bcbf7c]:disabled{background:rgba(9,30,66,.04);color:rgba(9,30,66,.31);cursor:not-allowed}button.button-subtle[data-v-16bcbf7c]{background:#fff;color:rgba(9,30,66,.71)}.button-subtle[data-v-16bcbf7c]:hover{background:#e5eaec}.button-subtle[data-v-16bcbf7c]:active{background:#f2f0f9}.button-subtle[data-v-16bcbf7c]:disabled{color:rgba(9,30,66,.31);cursor:not-allowed}.button-subtle .button-icon-color path[data-v-16bcbf7c]{fill:rgba(9,30,66,.71)}.button-subtle:disabled .button-icon-color path[data-v-16bcbf7c]{fill:rgba(9,30,66,.31)}.button-subtle:active .button-icon-color path[data-v-16bcbf7c]{fill:#7163c5}.button-destructive[data-v-16bcbf7c]{background:#de350b;color:#fff}.button-destructive[data-v-16bcbf7c]:hover{background:#ff5630}.button-destructive[data-v-16bcbf7c]:active{background:#bf2600}.button-warning[data-v-16bcbf7c]{background:#ffe380;color:rgba(9,30,66,.71)}.button-warning[data-v-16bcbf7c]:hover{background:#ffc400}.button-warning[data-v-16bcbf7c]:active{background:#fff0b3}.button-density-comfy[data-v-16bcbf7c]{height:40px;line-height:40px}.button-density-default[data-v-16bcbf7c]{height:32px;line-height:32px}.button-density-compact[data-v-16bcbf7c]{height:24px;line-height:24px}.bp-button.btn-block[data-v-16bcbf7c]{width:100%}.icon-and-opacity path[data-v-16bcbf7c]{fill:hsla(0,0%,100%,.8)}.agenda-text-center[data-v-16bcbf7c]{line-height:104px;width:70px}.button-official-gray-line[data-v-16bcbf7c]{width:80px;height:32px;line-height:32px;background:linear-gradient(45deg,rgba(22,28,57,.2),rgba(22,28,57,.2) 5%,transparent 0,transparent 50%,rgba(22,28,57,.2) 0,rgba(22,28,57,.2) 55%,transparent 0,transparent)!important;background-size:10px 10px!important;border:none;font-weight:500;font-size:12px;color:#2d334d}.button-official-yellow-line-inverse[data-v-16bcbf7c]{color:hsla(0,0%,100%,0)}.button-official-yellow-line[data-v-16bcbf7c],.button-official-yellow-line-inverse[data-v-16bcbf7c]{padding:0 24px;height:32px;line-height:32px;background:linear-gradient(45deg,rgba(255,221,77,.5),rgba(255,221,77,.5) 5%,transparent 0,transparent 50%,rgba(255,221,77,.5) 0,rgba(255,221,77,.5) 55%,transparent 0,transparent)!important;background-size:10px 10px!important;border:none;font-weight:500;font-size:12px}.button-official-yellow-line[data-v-16bcbf7c]{color:#2d334d}.button-official-yellow-line-compact[data-v-16bcbf7c]{height:40px;padding:0 24px;line-height:40px;background:linear-gradient(45deg,rgba(255,221,77,.5),rgba(255,221,77,.5) 5%,transparent 0,transparent 50%,rgba(255,221,77,.5) 0,rgba(255,221,77,.5) 55%,transparent 0,transparent)!important;background-size:8px 8px!important;border:none;font-weight:500;font-size:14px;color:#2d334d}.button-report-download[data-v-16bcbf7c]{width:200px!important;height:40px!important;border-radius:0!important;background:#161c39;color:#fff;border:none;cursor:inherit}.button-fixed-nav-login[data-v-16bcbf7c],.button-report-download[data-v-16bcbf7c]{text-align:center!important;display:inline-block!important}.button-fixed-nav-login[data-v-16bcbf7c]{color:#2d334d!important;border:1px solid rgba(22,28,57,.12)!important;border-radius:16px!important}.button-fixed-nav-login[data-v-16bcbf7c],.button-fixed-nav-login-inverse[data-v-16bcbf7c]{line-height:37px!important;height:37px!important;width:80px!important;background:transparent!important;font-size:14px}.button-fixed-nav-login-inverse[data-v-16bcbf7c]{color:hsla(0,0%,100%,.9)!important;border:1px solid hsla(0,0%,100%,.6)!important;border-radius:16px!important;text-align:center!important;display:inline-block!important}", ""]);
// Exports
module.exports = exports;


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

/***/ "ffdf":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "*[data-v-8deb4a08]{box-sizing:border-box}.form-textarea[data-v-8deb4a08]{height:80px;width:536px;background:rgba(22,28,57,.01);font-size:14px;color:#747789;border:none;border-bottom:1px solid rgba(22,28,57,.1);outline:none;padding:8px}", ""]);
// Exports
module.exports = exports;


/***/ })

/******/ });
//# sourceMappingURL=pharbers.js.map