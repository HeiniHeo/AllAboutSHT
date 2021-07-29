self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./components/notice.jsx":
/*!*******************************!*\
  !*** ./components/notice.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_user_OneDrive_All_about_AllAboutSHT_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\user\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\All about \uC2E0\uD76C\uD0C0\\AllAboutSHT\\components\\notice.jsx",
    _this = undefined,
    _s = $RefreshSig$();



var Notice = function Notice() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      notice = _useState[0],
      setNotice = _useState[1];

  var noticeOpen = function noticeOpen() {
    setNotice(!notice);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    style: {
      width: "500px",
      margin: "0 auto"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      className: "notice",
      onClick: noticeOpen,
      children: "\uC911\uC694\uACF5\uC9C0!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }, _this), notice ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
      style: (0,C_Users_user_OneDrive_All_about_AllAboutSHT_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({
        width: "1000px",
        height: "700px",
        position: "absolute",
        transform: "translateX(-25%)"
      }, "transform", "translateY(-25%)"),
      src: "/\uC2E0\uD63C\uD76C\uB9DD\uD0C0\uC6B4\uD31D\uC5C5.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }, _this) : '']
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 13
  }, _this);
};

_s(Notice, "hb38ev4eUfjsmAC1d/wITBi3HWM=");

_c = Notice;
/* harmony default export */ __webpack_exports__["default"] = (Notice);

var _c;

$RefreshReg$(_c, "Notice");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25vdGljZS5qc3giXSwibmFtZXMiOlsiTm90aWNlIiwidXNlU3RhdGUiLCJub3RpY2UiLCJzZXROb3RpY2UiLCJub3RpY2VPcGVuIiwid2lkdGgiLCJtYXJnaW4iLCJoZWlnaHQiLCJwb3NpdGlvbiIsInRyYW5zZm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQUs7QUFBQTs7QUFBQSxrQkFDWUMsK0NBQVEsQ0FBQyxLQUFELENBRHBCO0FBQUEsTUFDVEMsTUFEUztBQUFBLE1BQ0RDLFNBREM7O0FBR2hCLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQUk7QUFDbkJELGFBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQVQ7QUFDSCxHQUZEOztBQUdJLHNCQUNJO0FBQUssU0FBSyxFQUFFO0FBQUNHLFdBQUssRUFBQyxPQUFQO0FBQWdCQyxZQUFNLEVBQUM7QUFBdkIsS0FBWjtBQUFBLDRCQUNJO0FBQVEsZUFBUyxFQUFDLFFBQWxCO0FBQTJCLGFBQU8sRUFBRUYsVUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFQUVTRixNQUFNLGdCQUVQO0FBQUssV0FBSztBQUFHRyxhQUFLLEVBQUMsUUFBVDtBQUFtQkUsY0FBTSxFQUFDLE9BQTFCO0FBQW1DQyxnQkFBUSxFQUFDLFVBQTVDO0FBQXdEQyxpQkFBUyxFQUFDO0FBQWxFLHNCQUFnRyxrQkFBaEcsQ0FBVjtBQUErSCxTQUFHLEVBQUM7QUFBbkk7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZPLEdBR04sRUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVdQLENBakJEOztHQUFNVCxNOztLQUFBQSxNO0FBb0JOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhlZjEyMDMwMTZlYjU3YzVlNTAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IE5vdGljZSA9ICgpID0+e1xyXG4gICAgY29uc3QgW25vdGljZSwgc2V0Tm90aWNlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IG5vdGljZU9wZW4gPSAoKT0+e1xyXG4gICAgICAgIHNldE5vdGljZSghbm90aWNlKVxyXG4gICAgfVxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiNTAwcHhcIiwgbWFyZ2luOlwiMCBhdXRvXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibm90aWNlXCIgb25DbGljaz17bm90aWNlT3Blbn0+7KSR7JqU6rO17KeAITwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtub3RpY2UgXHJcbiAgICAgICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3t3aWR0aDpcIjEwMDBweFwiLCBoZWlnaHQ6XCI3MDBweFwiLCBwb3NpdGlvbjpcImFic29sdXRlXCIsIHRyYW5zZm9ybTpcInRyYW5zbGF0ZVgoLTI1JSlcIiwgdHJhbnNmb3JtOlwidHJhbnNsYXRlWSgtMjUlKVwifX0gc3JjPVwiL+yLoO2YvO2drOunne2DgOyatO2MneyXhS5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDonJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdGljZSJdLCJzb3VyY2VSb290IjoiIn0=