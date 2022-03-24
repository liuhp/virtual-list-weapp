(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/list/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/list/index.vue":
/*!********************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/list/index.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_335db125_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=335db125&ts=true */ "./src/pages/list/index.vue?vue&type=template&id=335db125&ts=true");
/* harmony import */ var _index_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=ts */ "./src/pages/list/index.vue?vue&type=script&lang=ts");
/* harmony import */ var _Users_liuhaiping17_Downloads_test_myAppvr_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");
/* harmony import */ var _Users_liuhaiping17_Downloads_test_myAppvr_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaiping17_Downloads_test_myAppvr_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__);





const __exports__ = /*#__PURE__*/_Users_liuhaiping17_Downloads_test_myAppvr_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default()(_index_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], [['render',_index_vue_vue_type_template_id_335db125_ts_true__WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"]],['__file',"src/pages/list/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["a"] = (__exports__);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/list/index.vue?vue&type=script&lang=ts":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--10-0!./src/pages/list/index.vue?vue&type=script&lang=ts ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__);





/* harmony default export */ __webpack_exports__["a"] = (Object(vue__WEBPACK_IMPORTED_MODULE_3__[/* defineComponent */ "n"])({
  setup: function setup() {
    var state = Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* reactive */ "l"])({
      dataList: [],
      isComplete: false,
      scrollHeight: 600,
      blockHeight: 80,
      onRequesting: false,
      msg: '玩命加载中...',
      refresherTriggered: false
    });
    Object(vue__WEBPACK_IMPORTED_MODULE_3__[/* onMounted */ "t"])( /*#__PURE__*/Object(_Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/_Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return _Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return getList();

            case 2:
              state.scrollHeight = _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.getSystemInfoSync().windowHeight;

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    var getList = function getList() {
      state.onRequesting = true;
      state.msg = '玩命加载中...';
      setTimeout(function () {
        var curLen = state.dataList.length;

        for (var i = curLen; i < curLen + 10; i++) {
          state.dataList.push("".concat(i));
        }

        state.onRequesting = false;

        if (state.dataList.length > 30) {
          state.isComplete = true;
          state.onRequesting = true;
          state.msg = '我是底部哦~';
          console.log('我是底部哦~');
        }
      }, 500);
    };

    var onBottom = function onBottom() {
      console.log('bottom');
      loadMore();
    };

    var loadMore = /*#__PURE__*/function () {
      var _ref2 = Object(_Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/_Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        return _Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!state.isComplete) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                if (!state.onRequesting) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return");

              case 4:
                _context2.next = 6;
                return getList();

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function loadMore() {
        return _ref2.apply(this, arguments);
      };
    }();

    var onRefresh = /*#__PURE__*/function () {
      var _ref3 = Object(_Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/_Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
        return _Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log('onRefresh');
                state.refresherTriggered = true;
                state.dataList = [];
                state.isComplete = false;
                _context3.next = 6;
                return getList();

              case 6:
                state.refresherTriggered = false;

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function onRefresh() {
        return _ref3.apply(this, arguments);
      };
    }();

    return Object(_Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_liuhaiping17_Downloads_test_myAppvr_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, Object(vue__WEBPACK_IMPORTED_MODULE_4__[/* toRefs */ "r"])(state)), {}, {
      getList: getList,
      onBottom: onBottom,
      onRefresh: onRefresh,
      loadMore: loadMore
    });
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/list/index.vue?vue&type=template&id=335db125&ts=true":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--10-0!./src/pages/list/index.vue?vue&type=template&id=335db125&ts=true ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");

var _hoisted_1 = {
  style: {
    "height": "80px",
    "line-height": "80px",
    "text-align": "center",
    "border-bottom": "1px solid #000"
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_virtual_block = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* resolveComponent */ "z"])("virtual-block");

  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "w"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementBlock */ "h"])("div", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createVNode */ "m"])(_component_virtual_block, {
    allDataList: _ctx.dataList,
    scrollHeight: _ctx.scrollHeight,
    blockHeight: _ctx.blockHeight,
    onRequesting: _ctx.onRequesting,
    msg: _ctx.msg,
    refresherTriggered: _ctx.refresherTriggered,
    onBottom: _ctx.onBottom,
    onOnRefresh: _ctx.onRefresh
  }, {
    "item-content": Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* withCtx */ "G"])(function (item) {
      return [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "i"])("div", _hoisted_1, Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* toDisplayString */ "M"])(item.thisItem), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["allDataList", "scrollHeight", "blockHeight", "onRequesting", "msg", "refresherTriggered", "onBottom", "onOnRefresh"])]);
}

/***/ }),

/***/ "./src/pages/list/index.vue":
/*!**********************************!*\
  !*** ./src/pages/list/index.vue ***!
  \**********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/list/index.vue");


var config = {"navigationBarTitleText":"列表"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/list/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/list/index.vue?vue&type=script&lang=ts":
/*!**********************************************************!*\
  !*** ./src/pages/list/index.vue?vue&type=script&lang=ts ***!
  \**********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist??ref--10-0!./index.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/index.js?!./src/pages/list/index.vue?vue&type=script&lang=ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["a"]; });

 

/***/ }),

/***/ "./src/pages/list/index.vue?vue&type=template&id=335db125&ts=true":
/*!************************************************************************!*\
  !*** ./src/pages/list/index.vue?vue&type=template&id=335db125&ts=true ***!
  \************************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_template_id_335db125_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/vue-loader/dist/templateLoader.js??ref--6!../../../node_modules/vue-loader/dist??ref--10-0!./index.vue?vue&type=template&id=335db125&ts=true */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/dist/templateLoader.js?!./node_modules/vue-loader/dist/index.js?!./src/pages/list/index.vue?vue&type=template&id=335db125&ts=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_template_id_335db125_ts_true__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ })

},[["./src/pages/list/index.vue","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map