self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Menu1/Calculator1.jsx":
/*!******************************************!*\
  !*** ./components/Menu1/Calculator1.jsx ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


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


/***/ }),

/***/ "./components/Tab.jsx":
/*!****************************!*\
  !*** ./components/Tab.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Menu1_Calculator1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu1/Calculator1 */ "./components/Menu1/Calculator1.jsx");
/* harmony import */ var _Menu1_Calculator1__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Menu1_Calculator1__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Menu1_Calculator2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu1/Calculator2 */ "./components/Menu1/Calculator2.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\KGA_20\\Project\\AllAboutSHT\\Front\\components\\Tab.jsx",
    _this = undefined,
    _s = $RefreshSig$();




var color = {
  "background": "#1e65a3",
  "color": "#fff"
};

var Tab = function Tab() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),
      tabBtn = _useState[0],
      setTabBtn = _useState[1];

  var btn1 = function btn1() {
    setTabBtn(1);
  };

  var btn2 = function btn2() {
    setTabBtn(2);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "tab_left",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "btn_array",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          style: tabBtn === 1 ? color : {},
          onClick: btn1,
          children: "\uC2E0\uD63C\uD76C\uB9DD\uD0C0\uC6B4(1\uB2E8\uACC4)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          style: tabBtn === 2 ? color : {},
          onClick: btn2,
          children: "\uC2E0\uD63C\uD76C\uB9DD\uD0C0\uC6B4(2\uB2E8\uACC4)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this), tabBtn === 1 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_Menu1_Calculator1__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 27
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu1_Calculator2__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 27
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(Tab, "RwsWOzX4U3c60RUg9cvs5xm7lSA=");

_c = Tab;
/* harmony default export */ __webpack_exports__["default"] = (Tab);

var _c;

$RefreshReg$(_c, "Tab");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWIuanN4Il0sIm5hbWVzIjpbImNvbG9yIiwiVGFiIiwidXNlU3RhdGUiLCJ0YWJCdG4iLCJzZXRUYWJCdG4iLCJidG4xIiwiYnRuMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUc7QUFBRSxnQkFBYyxTQUFoQjtBQUEyQixXQUFTO0FBQXBDLENBQWQ7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUFBLGtCQUVjQywrQ0FBUSxDQUFDLENBQUQsQ0FGdEI7QUFBQSxNQUVQQyxNQUZPO0FBQUEsTUFFQ0MsU0FGRDs7QUFJZCxNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2ZELGFBQVMsQ0FBQyxDQUFELENBQVQ7QUFDSCxHQUZEOztBQUlBLE1BQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDZkYsYUFBUyxDQUFDLENBQUQsQ0FBVDtBQUNILEdBRkQ7O0FBSUEsc0JBQ0k7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxVQUFmO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSxnQ0FDSTtBQUFRLGVBQUssRUFBR0QsTUFBTSxLQUFLLENBQVosR0FBaUJILEtBQWpCLEdBQXlCLEVBQXhDO0FBQTRDLGlCQUFPLEVBQUVLLElBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBUSxlQUFLLEVBQUdGLE1BQU0sS0FBSyxDQUFaLEdBQWlCSCxLQUFqQixHQUF5QixFQUF4QztBQUE0QyxpQkFBTyxFQUFFTSxJQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixFQU9RSCxNQUFNLEtBQUssQ0FBWCxnQkFDTSw4REFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRE4sZ0JBRU0sOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBZ0JILENBNUJEOztHQUFNRixHOztLQUFBQSxHO0FBOEJOLCtEQUFlQSxHQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNhMDEzOTA5ZTY5YTFiZmJiZDcxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ2FsY3VsYXRvcjEgZnJvbSAnLi9NZW51MS9DYWxjdWxhdG9yMSdcclxuaW1wb3J0IENhbGN1bGF0b3IyIGZyb20gJy4vTWVudTEvQ2FsY3VsYXRvcjInXHJcblxyXG5jb25zdCBjb2xvciA9IHsgXCJiYWNrZ3JvdW5kXCI6IFwiIzFlNjVhM1wiLCBcImNvbG9yXCI6IFwiI2ZmZlwiIH1cclxuXHJcbmNvbnN0IFRhYiA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbdGFiQnRuLCBzZXRUYWJCdG5dID0gdXNlU3RhdGUoMSlcclxuXHJcbiAgICBjb25zdCBidG4xID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFRhYkJ0bigxKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJ0bjIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VGFiQnRuKDIpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYl9sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bl9hcnJheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9eyh0YWJCdG4gPT09IDEpID8gY29sb3IgOiB7fX0gb25DbGljaz17YnRuMX0+7Iug7Zi87Z2s66ed7YOA7Jq0KDHri6jqs4QpPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17KHRhYkJ0biA9PT0gMikgPyBjb2xvciA6IHt9fSBvbkNsaWNrPXtidG4yfT7si6DtmLztnazrp53tg4DsmrQoMuuLqOqzhCk8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWJCdG4gPT09IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyA8Q2FsY3VsYXRvcjEgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiA8Q2FsY3VsYXRvcjIgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhYjsiXSwic291cmNlUm9vdCI6IiJ9