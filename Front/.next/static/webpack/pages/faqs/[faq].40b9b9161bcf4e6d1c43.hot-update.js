self["webpackHotUpdate_N_E"]("pages/faqs/[faq]",{

/***/ "./pages/faqs/faq_pages/Income.jsx":
/*!*****************************************!*\
  !*** ./pages/faqs/faq_pages/Income.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_KGA_20_Project_AllAboutSHT_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_KGA_20_Project_AllAboutSHT_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_KGA_20_Project_AllAboutSHT_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_KGA_20_Project_AllAboutSHT_Front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Store_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Store/context */ "./Store/context.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\KGA_20\\Project\\AllAboutSHT\\Front\\pages\\faqs\\faq_pages\\Income.jsx",
    _this = undefined,
    _s = $RefreshSig$();





var Income = function Income() {
  _s();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_Store_context__WEBPACK_IMPORTED_MODULE_4__.default),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)( /*#__PURE__*/(0,C_Users_KGA_20_Project_AllAboutSHT_Front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_KGA_20_Project_AllAboutSHT_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var response, data;
    return C_Users_KGA_20_Project_AllAboutSHT_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('http://localhost:4000/getFAQIncome');

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            data = _context.sent;
            dispatch({
              type: 'FAQ_GET',
              payload: data
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  var IncomeList = state.FAQ.map(function (v) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: v.question
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
        children: v.answer
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, _this)]
    }, v.id, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, _this);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tbody", {
      children: IncomeList
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(Income, "tMjQDhNvN1vDEz7QS76YEprP+qA=");

_c = Income;
/* harmony default export */ __webpack_exports__["default"] = (Income);

var _c;

$RefreshReg$(_c, "Income");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmFxcy9mYXFfcGFnZXMvSW5jb21lLmpzeCJdLCJuYW1lcyI6WyJJbmNvbWUiLCJ1c2VDb250ZXh0IiwiU3RvcmUiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwidHlwZSIsInBheWxvYWQiLCJJbmNvbWVMaXN0IiwiRkFRIiwibWFwIiwidiIsInF1ZXN0aW9uIiwiYW5zd2VyIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLG9CQUVXQyxpREFBVSxDQUFDQyxtREFBRCxDQUZyQjtBQUFBLE1BRVRDLEtBRlMsZUFFVEEsS0FGUztBQUFBLE1BRUZDLFFBRkUsZUFFRkEsUUFGRTs7QUFJakJDLGtEQUFTLG1TQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2lCQyxLQUFLLENBQUMsb0NBQUQsQ0FEdEI7O0FBQUE7QUFDQUMsb0JBREE7QUFBQTtBQUFBLG1CQUVhQSxRQUFRLENBQUNDLElBQVQsRUFGYjs7QUFBQTtBQUVBQyxnQkFGQTtBQUdOTCxvQkFBUSxDQUFDO0FBQUVNLGtCQUFJLEVBQUUsU0FBUjtBQUFtQkMscUJBQU8sRUFBRUY7QUFBNUIsYUFBRCxDQUFSOztBQUhNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFJTixFQUpNLENBQVQ7QUFNQSxNQUFNRyxVQUFVLEdBQUdULEtBQUssQ0FBQ1UsR0FBTixDQUFVQyxHQUFWLENBQWMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3BDLHdCQUNJO0FBQUEsOEJBQ0k7QUFBQSxrQkFBS0EsQ0FBQyxDQUFDQztBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUEsa0JBQUtELENBQUMsQ0FBQ0U7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQSxPQUFTRixDQUFDLENBQUNHLEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBTUgsR0FQa0IsQ0FBbkI7QUFTQSxzQkFDSTtBQUFBLDJCQUNJO0FBQUEsZ0JBQ0tOO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBT0gsQ0ExQkQ7O0dBQU1aLE07O0tBQUFBLE07QUE0Qk4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZmFxcy9bZmFxXS40MGI5YjkxNjFiY2Y0ZTZkMWM0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0b3JlIGZyb20gJy4uLy4uLy4uL1N0b3JlL2NvbnRleHQnXHJcblxyXG5jb25zdCBJbmNvbWUgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoU3RvcmUpXHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjQwMDAvZ2V0RkFRSW5jb21lJylcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnRkFRX0dFVCcsIHBheWxvYWQ6IGRhdGEgfSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IEluY29tZUxpc3QgPSBzdGF0ZS5GQVEubWFwKCh2KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHRyIGtleT17di5pZH0+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3YucXVlc3Rpb259PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57di5hbnN3ZXJ9PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAge0luY29tZUxpc3R9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluY29tZSJdLCJzb3VyY2VSb290IjoiIn0=