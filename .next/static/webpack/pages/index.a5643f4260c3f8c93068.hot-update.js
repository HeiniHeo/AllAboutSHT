self["webpackHotUpdate_N_E"]("pages/index",{

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
/* harmony import */ var _Menu1_Calculator2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu1/Calculator2 */ "./components/Menu1/Calculator2.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\user\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\All about \uC2E0\uD76C\uD0C0\\AllAboutSHT\\components\\Tab.jsx",
    _this = undefined,
    _s = $RefreshSig$();





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
          onClick: btn1,
          children: "\uC2E0\uD63C\uD76C\uB9DD\uD0C0\uC6B4(1\uB2E8\uACC4)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: btn2,
          children: "\uC2E0\uD63C\uD76C\uB9DD\uD0C0\uC6B4(2\uB2E8\uACC4)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, _this), tabBtn === 1 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu1_Calculator1__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 27
      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu1_Calculator2__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 27
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWIuanN4Il0sIm5hbWVzIjpbIlRhYiIsInVzZVN0YXRlIiwidGFiQnRuIiwic2V0VGFiQnRuIiwiYnRuMSIsImJ0bjIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUE7O0FBQUEsa0JBQ2NDLCtDQUFRLENBQUMsQ0FBRCxDQUR0QjtBQUFBLE1BQ1BDLE1BRE87QUFBQSxNQUNDQyxTQUREOztBQUdkLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDZkQsYUFBUyxDQUFDLENBQUQsQ0FBVDtBQUNILEdBRkQ7O0FBSUEsTUFBTUUsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNmRixhQUFTLENBQUMsQ0FBRCxDQUFUO0FBQ0gsR0FGRDs7QUFJQSxzQkFDSTtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLFVBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLGdDQUNJO0FBQVEsaUJBQU8sRUFBRUMsSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFRLGlCQUFPLEVBQUVDLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBT1FILE1BQU0sS0FBSyxDQUFYLGdCQUNNLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETixnQkFFTSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFnQkgsQ0EzQkQ7O0dBQU1GLEc7O0tBQUFBLEc7QUE2Qk4sK0RBQWVBLEdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTU2NDNmNDI2MGMzZjhjOTMwNjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ2FsY3VsYXRvcjEgZnJvbSAnLi9NZW51MS9DYWxjdWxhdG9yMSdcbmltcG9ydCBDYWxjdWxhdG9yMiBmcm9tICcuL01lbnUxL0NhbGN1bGF0b3IyJ1xuXG5jb25zdCBUYWIgPSAoKSA9PiB7XG4gICAgY29uc3QgW3RhYkJ0biwgc2V0VGFiQnRuXSA9IHVzZVN0YXRlKDEpXG5cbiAgICBjb25zdCBidG4xID0gKCkgPT4ge1xuICAgICAgICBzZXRUYWJCdG4oMSlcbiAgICB9XG5cbiAgICBjb25zdCBidG4yID0gKCkgPT4ge1xuICAgICAgICBzZXRUYWJCdG4oMilcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJfbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuX2FycmF5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17YnRuMX0+7Iug7Zi87Z2s66ed7YOA7Jq0KDHri6jqs4QpPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17YnRuMn0+7Iug7Zi87Z2s66ed7YOA7Jq0KDLri6jqs4QpPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRhYkJ0biA9PT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgPyA8Q2FsY3VsYXRvcjEgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDogPENhbGN1bGF0b3IyIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFiOyJdLCJzb3VyY2VSb290IjoiIn0=