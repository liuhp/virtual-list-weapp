(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/index/index.vue":
/*!*********************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/index/index.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_1badc801__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1badc801 */ "./src/pages/index/index.vue?vue&type=template&id=1badc801");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/pages/index/index.vue?vue&type=script&lang=js");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_1badc801_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=1badc801&lang=scss */ "./src/pages/index/index.vue?vue&type=style&index=0&id=1badc801&lang=scss");
/* harmony import */ var _Users_liuhaiping17_Downloads_test_myAppvr_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");
/* harmony import */ var _Users_liuhaiping17_Downloads_test_myAppvr_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaiping17_Downloads_test_myAppvr_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_liuhaiping17_Downloads_test_myAppvr_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], [['render',_index_vue_vue_type_template_id_1badc801__WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"]],['__file',"src/pages/index/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["a"] = (__exports__);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/index/index.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--10-0!./src/pages/index/index.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Index',
  components: {},
  setup: function setup() {
    var state = Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* reactive */ "l"])({
      msg: '???????????? NutUI3.0 ???????????????',
      msg2: '???????????????',
      type: 'text',
      show: false,
      cover: false
    });

    var handleClick = function handleClick(type, msg) {
      var cover = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      // state.show = true;
      // state.msg2 = msg;
      // state.type = type;
      // state.cover = cover;
      Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* pageJump */ "a"])('/pages/list/index');
    };

    return Object(_Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* toRefs */ "r"])(state)), {}, {
      handleClick: handleClick
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/index/index.vue?vue&type=template&id=1badc801":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--10-0!./src/pages/index/index.vue?vue&type=template&id=1badc801 ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");

var _hoisted_1 = {
  class: "index"
};

var _hoisted_2 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", null, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("img", {
  src: "",
  alt: ""
})], -1
/* HOISTED */
);

var _hoisted_3 = {
  class: "btn"
};

var _hoisted_4 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ "l"])("??????");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_button = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ "z"])("nut-button");

  var _component_nut_toast = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ "z"])("nut-toast");

  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "w"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementBlock */ "h"])("view", _hoisted_1, [_hoisted_2, Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createTextVNode */ "l"])(" " + Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* toDisplayString */ "M"])(_ctx.msg) + " ", 1
  /* TEXT */
  ), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("view", _hoisted_3, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "m"])(_component_nut_button, {
    type: "primary",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.handleClick('text', _ctx.msg2, true);
    })
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ "G"])(function () {
      return [_hoisted_4];
    }),
    _: 1
    /* STABLE */

  })]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "m"])(_component_nut_toast, {
    msg: _ctx.msg,
    visible: _ctx.show,
    "onUpdate:visible": _cache[1] || (_cache[1] = function ($event) {
      return _ctx.show = $event;
    }),
    type: _ctx.type,
    cover: _ctx.cover
  }, null, 8
  /* PROPS */
  , ["msg", "visible", "type", "cover"])]);
}

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/@tarojs/mini-runner/node_modules/postcss-loader/dist/cjs.js?!./node_modules/@tarojs/mini-runner/node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/index/index.vue?vue&type=style&index=0&id=1badc801&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js??ref--1-oneOf-0-1!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/@tarojs/mini-runner/node_modules/postcss-loader/dist/cjs.js??ref--1-oneOf-0-2!./node_modules/@tarojs/mini-runner/node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js??ref--1-oneOf-0-4!./node_modules/vue-loader/dist??ref--10-0!./src/pages/index/index.vue?vue&type=style&index=0&id=1badc801&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.vue":
/*!***********************************!*\
  !*** ./src/pages/index/index.vue ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/index/index.vue");


var config = {"navigationBarTitleText":"??????"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/index/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/index/index.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./src/pages/index/index.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist??ref--10-0!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/index/index.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["a"]; });

 

/***/ }),

/***/ "./src/pages/index/index.vue?vue&type=style&index=0&id=1badc801&lang=scss":
/*!********************************************************************************!*\
  !*** ./src/pages/index/index.vue?vue&type=style&index=0&id=1badc801&lang=scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_tarojs_mini_runner_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_tarojs_mini_runner_node_modules_postcss_loader_dist_cjs_js_ref_1_oneOf_0_2_node_modules_tarojs_mini_runner_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_style_index_0_id_1badc801_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js??ref--1-oneOf-0-1!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/@tarojs/mini-runner/node_modules/postcss-loader/dist/cjs.js??ref--1-oneOf-0-2!../../../node_modules/@tarojs/mini-runner/node_modules/resolve-url-loader!../../../node_modules/sass-loader/dist/cjs.js??ref--1-oneOf-0-4!../../../node_modules/vue-loader/dist??ref--10-0!./index.vue?vue&type=style&index=0&id=1badc801&lang=scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/@tarojs/mini-runner/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/@tarojs/mini-runner/node_modules/postcss-loader/dist/cjs.js?!./node_modules/@tarojs/mini-runner/node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/index/index.vue?vue&type=style&index=0&id=1badc801&lang=scss");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_tarojs_mini_runner_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_tarojs_mini_runner_node_modules_postcss_loader_dist_cjs_js_ref_1_oneOf_0_2_node_modules_tarojs_mini_runner_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_style_index_0_id_1badc801_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_tarojs_mini_runner_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_tarojs_mini_runner_node_modules_postcss_loader_dist_cjs_js_ref_1_oneOf_0_2_node_modules_tarojs_mini_runner_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_style_index_0_id_1badc801_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "./src/pages/index/index.vue?vue&type=template&id=1badc801":
/*!*****************************************************************!*\
  !*** ./src/pages/index/index.vue?vue&type=template&id=1badc801 ***!
  \*****************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_template_id_1badc801__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist/templateLoader.js??ref--6!../../../node_modules/vue-loader/dist??ref--10-0!./index.vue?vue&type=template&id=1badc801 */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/index/index.vue?vue&type=template&id=1badc801");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_template_id_1badc801__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! exports provided: getCurrentPageUrl, getCurrentPageParams, pageJump, pageBack, showToast, showLoading, hideLoading, getStorageInfo, setStorage, removeStorage, clearStorage, filePreview, webParseURL, toThousands, chooseImage, formatTime, convertString, checkLogin, validatePhone, certNoValidator, phoneValidator, nameValidator, addressValidator, nameLengthValidator, realAddressLengthValidator, lengthValidator, setNavigationBarTitle, maskInfo, dealUrl, wxPromise, makePhoneCall, getSystemInfo, getSystemInfoSync, getParameterByName, handleCopy, checkUpdate, getAuthorize, uniqueArr, createSelectorQuery, isJSONStr */
/*! exports used: pageJump */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getCurrentPageUrl */
/* unused harmony export getCurrentPageParams */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pageJump; });
/* unused harmony export pageBack */
/* unused harmony export showToast */
/* unused harmony export showLoading */
/* unused harmony export hideLoading */
/* unused harmony export getStorageInfo */
/* unused harmony export setStorage */
/* unused harmony export removeStorage */
/* unused harmony export clearStorage */
/* unused harmony export filePreview */
/* unused harmony export webParseURL */
/* unused harmony export toThousands */
/* unused harmony export chooseImage */
/* unused harmony export formatTime */
/* unused harmony export convertString */
/* unused harmony export checkLogin */
/* unused harmony export validatePhone */
/* unused harmony export certNoValidator */
/* unused harmony export phoneValidator */
/* unused harmony export nameValidator */
/* unused harmony export addressValidator */
/* unused harmony export nameLengthValidator */
/* unused harmony export realAddressLengthValidator */
/* unused harmony export lengthValidator */
/* unused harmony export setNavigationBarTitle */
/* unused harmony export maskInfo */
/* unused harmony export dealUrl */
/* unused harmony export wxPromise */
/* unused harmony export makePhoneCall */
/* unused harmony export getSystemInfo */
/* unused harmony export getSystemInfoSync */
/* unused harmony export getParameterByName */
/* unused harmony export handleCopy */
/* unused harmony export checkUpdate */
/* unused harmony export getAuthorize */
/* unused harmony export uniqueArr */
/* unused harmony export createSelectorQuery */
/* unused harmony export isJSONStr */
/* harmony import */ var _Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toArray */ "./node_modules/@babel/runtime/helpers/esm/toArray.js");
/* harmony import */ var _Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_6__);







/*
 * @Author: wujia
 * @Email: wujia8@jd.comm
 * @Date: 2021-10-25 14:32:17
 * @Description: ????????????????????????
 */
 // import envConfig from '@/env.config'
// import envConfig from '@/env.js'

/**
 * ???????????????Url
 * @returns string
 */

var getCurrentPageUrl = function getCurrentPageUrl() {
  var pages = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getCurrentPages();
  var currentPage = pages[pages.length - 1];
  return currentPage.route;
};
/**
 * ????????????????????????
 * @returns
 */

function getCurrentPageParams() {
  // const router = useRouter() // import {userRouter} from 'vue-router'
  var _Taro$getCurrentInsta = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getCurrentInstance(),
      router = _Taro$getCurrentInsta.router;

  return Object(_Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({}, router === null || router === void 0 ? void 0 : router.params);
}
/**
 * ????????????
 * @param pagePath ????????????
 * @param options ????????????, ??????:params<object>, method<string>
 * example1: pageJump('/pages/index/index', 'navigateTo')
 * example2: pageJump('/pages/index/index', {a:1, b:'2'}, 'navigateTo')
 * example3: pageJump('/pages/index/index?a=1', {b:'3'}, 'navigateTo')
 */

var pageJump = function pageJump(pagePath) {
  for (var _len = arguments.length, options = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    options[_key - 1] = arguments[_key];
  }

  var params = options[0],
      _options$ = options[1],
      method = _options$ === void 0 ? 'navigateTo' : _options$; // ??????????????????Object??????
  // ????????????????????????string???????????????method??????

  if (typeof params === 'string' && !!params) {
    method = params;
    params = null;
  } // params ?????????


  var paramString = '';

  if (params && Object.keys(params).length) {
    var paramArr = [];
    var key, value;

    for (var _i = 0, _Object$entries = Object.entries(params); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = Object(_Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_Object$entries[_i], 2);

      key = _Object$entries$_i[0];
      value = _Object$entries$_i[1];
      paramArr.push("".concat(key, "=").concat(value));
    }

    paramString = paramArr.join('&');
  }

  var url = ''; // pagepath ??????????????? ?

  var query = pagePath.includes('?');

  var _pagePath$split = pagePath.split('?'),
      _pagePath$split2 = Object(_Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_pagePath$split),
      path = _pagePath$split2[0],
      rest = _pagePath$split2.slice(1);

  if (query && "".concat(rest).length > 0) {
    url = "".concat(path, "?").concat(rest, "&").concat(paramString);
  } else {
    url = paramString ? "".concat(path, "?").concat(paramString) : path;
  }

  var isTabPagePath = [].includes(pagePath);
  console.log(pagePath, isTabPagePath);
  isTabPagePath && method !== 'reLaunch' ? _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.switchTab({
    url: url
  }) : _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a[method]({
    url: url
  });
};
/**
 * ????????????
 * @param options
 */

var pageBack = function pageBack() {
  var delta = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.navigateBack({
    delta: delta
  });
}; // ??????toast??????

var showToast = function showToast(message) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showToast(Object(_Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({
    title: message,
    icon: 'none',
    mask: true,
    duration: 1800
  }, options));
}; // ????????????

var showLoading = function showLoading(message) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showLoading(Object(_Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({
    title: message,
    mask: true
  }, options));
}; // ????????????

var hideLoading = function hideLoading() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.hideLoading(Object(_Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])({}, options));
}; // getStorage

var getStorageInfo = function getStorageInfo() {
  var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (false) {}

  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getStorageSync(key);
}; // setStorage

var setStorage = function setStorage(key, value) {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.setStorageSync(key, value);
}; // removeStorage

var removeStorage = function removeStorage(key) {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.removeStorageSync(key);
}; // clearStorage

var clearStorage = function clearStorage() {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.clearStorageSync();
}; // ????????????

var filePreview = function filePreview(url) {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.downloadFile({
    url: url + '?t=' + new Date().getTime,
    success: function success(res) {
      var filePath = res.tempFilePath;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.openDocument({
        filePath: filePath,
        success: function success() {
          console.log('????????????');
        }
      });
    }
  });
};
/**
 * url ????????????
 * @param url
 * @returns
 */

function webParseURL(url) {
  return url.slice(url.indexOf('?') + 1).split('&').reduce(function (prev, curr) {
    var _curr$split = curr.split('='),
        _curr$split2 = Object(_Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_curr$split, 2),
        key = _curr$split2[0],
        val = _curr$split2[1];

    if (!val) return prev; // val ????????????

    prev[key] = val;
    return prev;
  }, {});
}
/**
 * ????????????
 * @param num
 * @returns
 */

var toThousands = function toThousands(num) {
  var content = (num || 0).toString();
  var full = '';
  var decimals = '';
  var result = '';
  full = content.split('.')[0] || '';
  decimals = content.split('.')[1] || '';

  while (full.length > 3) {
    result = ',' + full.slice(-3) + result;
    full = full.slice(0, full.length - 3);
  }

  result = full + result;

  if (decimals) {
    result = result + '.' + decimals;
  }

  return result;
};
/**
 * ????????????
 * @param url String http????????????????????????????????????
 * @returns Promise
 */
// wx.uploadFile
// export const upload = (
//     url,
//     params = {},
//     file,
//     name = 'imgContent'
//     // returnType = 'navigate',
//     // returnUrl
// ) => {
//     return new Promise((resolve, reject) => {
//         url = envConfig.baseUrl + url
//         Taro.uploadFile({
//             url,
//             filePath: file,
//             name,
//             formData: params,
//             header: Object.assign({
//                 'content-type': 'multipart/form-data',
//             }),
//             success(res) {
//                 console.log('upload', res)
//                 try {
//                     const { code, msg, data } = JSON.parse(res.data)
//                     if (code === '200') {
//                         // ??????
//                         resolve(data)
//                     } else {
//                         showToast(msg || '')
//                         reject(msg)
//                     }
//                 } catch (error) {
//                     console.log('upload error:', error)
//                 }
//             },
//             fail() {
//                 showToast('??????????????????????????????')
//                 reject('??????????????????????????????')
//             },
//         })
//     })
// }

/**
 * ????????????
 * @param count Number ????????????????????????
 * @returns result: Object
 */
// wx.chooseImage(Object object)

var chooseImage = /*#__PURE__*/function () {
  var _ref = Object(_Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/_Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(count) {
    var result;
    return _Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = {};
            _context.next = 3;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.chooseImage({
              count: count,
              sizeType: ['original', 'compressed'],
              // ?????????????????????????????????????????????????????????
              sourceType: ['album', 'camera'],
              // ??????????????????????????????????????????????????????????????????H5???????????????????????? `user` ??? `environment`??????????????????????????????
              success: function success(res) {
                result = res;
              },
              fail: function fail(error) {
                console.log('????????????error', error);
              }
            });

          case 3:
            return _context.abrupt("return", result);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function chooseImage(_x) {
    return _ref.apply(this, arguments);
  };
}(); // ???????????????

var formatTime = function formatTime(date, _format) {
  if (!date) {
    return null;
  }

  if (typeof date === 'string' && date.indexOf('T') === -1) {
    date = date.replace(/-/g, '/');
  }

  var t = new Date(date);
  var format = _format || 'yyyy-MM-dd HH:dd:ss';

  var tf = function tf(i) {
    return (i < 10 ? '0' : '') + i;
  };

  return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
    switch (a) {
      case 'yyyy':
        return tf(t.getFullYear());

      case 'MM':
        return tf(t.getMonth() + 1);

      case 'mm':
        return tf(t.getMinutes());

      case 'dd':
        return tf(t.getDate());

      case 'HH':
        return tf(t.getHours());

      case 'ss':
        return tf(t.getSeconds());

      default:
        break;
    }
  });
};
/**
 * ??????sign??????obj?????????????????????(xx=xxx${sign}yy=yyy)
 * @param obj
 * @param sign
 * @returns
 */

var convertString = function convertString() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var sign = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ';';
  var str = '';

  for (var key in obj) {
    // if (obj[key]) {
    str = str + key + '=' + obj[key] + sign; // }
  } // ????????????sign


  str = str.slice(0, str.length - 1);
  return str;
};
/**
 * ??????????????????
 * @returns
 */

var checkLogin = function checkLogin() {
  return getStorageInfo('token') ? true : false;
};
/**
 * ???????????????
 * @param phoneNumber
 * @returns
 */

var validatePhone = function validatePhone(phoneNumber) {
  if (!/^1[3-9](\d){9}$/.test(phoneNumber)) {
    return false;
  }

  return true;
}; // ???????????????

var certNoValidator = function certNoValidator(val) {
  return /^((\d{15})|(\d{18})|(\d{17}[xX]))$/.test(String(val));
}; // ???????????????

var phoneValidator = function phoneValidator(val) {
  console.log('/^1[3-9]d{9}$/.test(String(val))');
  return /^1[3-9]\d{9}$/.test(String(val));
}; // ????????????????????????????????????

var nameValidator = function nameValidator(val) {
  var reg = /^[\u4e00-\u9fa5a-zA-Z]+$/;
  return reg.test(val);
}; // ??????????????????????????????????????????

var addressValidator = function addressValidator(val) {
  var str = val.replace(/(^\s*)|(\s*$)/g, '');
  var len = str.length;
  var regNumber = new RegExp("^\\d{".concat(len, "}$"), 'g');
  var regEnglish = new RegExp("^[a-zA-Z]{".concat(len, "}$"), 'g');
  var res = !(regNumber.test(str) || regEnglish.test(str));
  return res;
};
var nameLengthValidator = function nameLengthValidator(val) {
  var str = val.replace(/(^\s*)|(\s*$)/g, '');

  if (str) {
    return str.length >= 2;
  }

  return false;
}; // ??????????????????????????????

var realAddressLengthValidator = function realAddressLengthValidator(val) {
  var str = val.replace(/(^\s*)|(\s*$)/g, '');

  if (str) {
    return str.length >= 2;
  }

  return false;
};
/**
 * ????????????
 * @param val String ???????????????
 * @param min Number ????????????
 * @param val Number ????????????
 * @returns Boolean
 */

var lengthValidator = function lengthValidator(val, min, max) {
  console.log('val:String, min, max', val, min, max);

  if (val && min >= 0 && max > min) {
    return val.length > min && val.length < max;
  }

  return false;
}; // ????????????title

var setNavigationBarTitle = function setNavigationBarTitle(title) {
  wx.setNavigationBarTitle({
    title: title
  });
}; // ??????url??????????????????https???http

var maskInfo = function maskInfo(cardMaskNo) {
  if (cardMaskNo.length >= 16) {
    var indexOf = cardMaskNo.length - 4;
    var last = '';

    switch (indexOf % 4) {
      case 3:
        last = '*** ';
        break;

      case 2:
        last = '** ';
        break;

      case 1:
        last = '* ';
        break;
    }

    return '**** **** **** ' + last + cardMaskNo.substring(indexOf);
  }

  return cardMaskNo;
};
var dealUrl = function dealUrl(baseUrl, url) {
  var isHttpUrl = url.startsWith('https://') || url.startsWith('http://') || url.startsWith('//');
  var hasPreFix = url.startsWith('/');
  return isHttpUrl ? url : hasPreFix ? "".concat(baseUrl).concat(url) : "".concat(baseUrl, "/").concat(url);
};
/**
 * ?????????????????????promise????????????await wxPromise(wx.login)() || wxPromise(wx.login)().then().catch()
 * @param fn
 * @returns promise
 */

var wxPromise = function wxPromise(fn) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return new Promise(function (resolve, reject) {
      options.success = function (res) {
        resolve(res);
      };

      options.fail = function (err) {
        reject(err);
      };

      fn(options);
    });
  };
}; // ?????????

var makePhoneCall = function makePhoneCall(phoneNumber) {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.makePhoneCall({
    phoneNumber: phoneNumber //??????????????????????????????????????????

  });
}; // ?????????????????????

/* ?????????????????????????????? */

var getSystemInfo = function getSystemInfo() {
  return new Promise(function (resolve, reject) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getSystemInfo({
      success: function success(res) {
        resolve(res);
      },
      fail: function fail(err) {
        reject(err);
      }
    });
  });
};
/* ?????????????????????????????? */

var getSystemInfoSync = function getSystemInfoSync() {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getSystemInfoSync();
};
var getParameterByName = function getParameterByName(name, url) {
  if (!url) return '';
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  var results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
var handleCopy = function handleCopy(content) {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.setClipboardData({
    data: content,
    success: function success(res) {
      console.log(res);
    }
  });
};
/**
 * ??????????????????
 */

var checkUpdate = function checkUpdate() {
  if (_tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.canIUse('getUpdateManager')) {
    var updateManager = _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getUpdateManager();
    updateManager.onCheckForUpdate(function (res) {
      // console.log('??????????????????', res)
      if (res.hasUpdate) {
        updateManager.onUpdateReady(function () {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showModal({
            title: '????????????',
            content: '????????????????????????????????????????????????',
            success: function success(res) {
              if (res.confirm) {
                updateManager.applyUpdate();
              }
            }
          });
        });
        updateManager.onUpdateFailed(function () {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showModal({
            title: '????????????????????????~',
            content: '????????????????????????~??????????????????????????????????????????????????????~'
          });
        });
      }
    });
  } else {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showModal({
      title: '??????',
      content: '?????????????????????????????????????????????????????????????????????????????????????????????'
    });
  }
};
/**
 * ?????????????????? & ???????????????????????????
 */

var saveImgToPhotosAlbum = function saveImgToPhotosAlbum(url) {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getImageInfo({
    src: url,
    success: function success(res) {
      var path = res.path;
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.saveImageToPhotosAlbum({
        filePath: path,
        success: function success(res) {
          console.log(res);
          showToast('??????????????????');
        },
        fail: function fail(res) {
          console.log(res);
          showToast('??????????????????');
        }
      });
    },
    fail: function fail(res) {
      console.log(res);
    }
  });
};
/**
 * ??????????????????????????? & ?????????????????????????????????
 * @param scopeName ????????????????????????
 */


var getAuthorize = function getAuthorize(scopeName, url) {
  console.log('??????scopeName', scopeName);
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.getSetting({
    success: function success(res) {
      if (!res.authSetting["scope.".concat(scopeName)]) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.authorize({
          scope: "scope.".concat(scopeName),
          success: function success() {
            // ????????????
            saveImgToPhotosAlbum(url);
          },
          fail: function fail(err) {
            /**
             * ??????????????????????????????????????????
             *
             * ??????????????????????????????
             *      errMsg: "authorize:fail auth deny"
             * ???????????????
             *      errMsg: "authorize:fail ???????????????????????????-12006,auth deny"
             */
            console.log('?????????????????????', err); // const { errMsg = '' } = err
            // if (errMsg !== 'authorize:fail auth deny') {

            _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.showModal({
              title: '??????????????????????????????',
              content: '???????????????????????????????????????',
              success: function success(res) {
                if (res.confirm) {
                  // console.log('??????????????????')
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.openSetting({
                    success: function success(res) {
                      console.log(res.authSetting);
                    }
                  });
                } else if (res.cancel) {// console.log('??????????????????')
                }
              }
            }); // }
          }
        });
      } else {
        // ???????????????
        console.log('???????????????');
        saveImgToPhotosAlbum(url);
      }
    },
    fail: function fail(error) {
      console.log('??????????????????????????????', error);
    }
  });
}; // ?????????????????????
//??????pdf??????????????????????????????
// export const viewPdf = item => {
//     showLoading('?????????...')
//     const { id = '', agreementName = '??????' } = item
//     console.log('????????????,??????ID=', id)
//     if (!id) {
//         showToast('?????????????????????????????????')
//         return
//     }
//     const token = getStorageInfo('token') || ''
//     const url = `${envConfig.baseUrl}${getSignProtocol}?contractId=${id}&token=${token}`
//     const filePath = `${wx.env.USER_DATA_PATH}/${agreementName}.pdf`
//     Taro.downloadFile({
//         url,
//         filePath,
//         success: res => {
//             const filePath = res.filePath
//             Taro.openDocument({
//                 filePath,
//                 fileType: 'pdf',
//                 success: res => {
//                     console.log('??????????????????', res)
//                     hideLoading()
//                 },
//                 fail: error => {
//                     showToast('??????????????????')
//                     console.log('??????????????????:', error)
//                     hideLoading()
//                 },
//             })
//         },
//         fail: error => {
//             showToast('??????????????????')
//             console.log('????????????error', error)
//             hideLoading()
//         },
//     })
// }
// ????????????

var uniqueArr = function uniqueArr(arr) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}; // ???????????? SelectorQuery ????????????

var createSelectorQuery = function createSelectorQuery() {
  return _tarojs_taro__WEBPACK_IMPORTED_MODULE_6___default.a.createSelectorQuery();
}; // ????????????????????????JSON??????

var isJSONStr = function isJSONStr(str) {
  if (typeof str === 'string') {
    try {
      var obj = JSON.parse(str);

      if (Object(_Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj) === 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log('error???' + str + '!!!' + e);
      return false;
    }
  }

  console.log('It is not a string!');
};

/***/ })

},[["./src/pages/index/index.vue","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map