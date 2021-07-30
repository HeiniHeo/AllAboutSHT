self["webpackHotUpdate_N_E"]("pages/faqs/[faq]",{

/***/ "./Store/context.jsx":
/*!***************************!*\
  !*** ./Store/context.jsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);

var initalState = {
  FAQ: [{
    answer: 'test',
    question: 'test'
  }],
  FAQ2: [{
    answer: 'test',
    question: 'test'
  }]
};
var Store = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initalState);
/* harmony default export */ __webpack_exports__["default"] = (Store);

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

/***/ "./pages/faqs/faq_pages/Bank.jsx":
/*!***************************************!*\
  !*** ./pages/faqs/faq_pages/Bank.jsx ***!
  \***************************************/
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





var _jsxFileName = "C:\\Users\\KGA_20\\Project\\AllAboutSHT\\Front\\pages\\faqs\\faq_pages\\Bank.jsx",
    _this = undefined,
    _s = $RefreshSig$();





var Bank = function Bank() {
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
            return fetch('http://localhost:4000/faqs/bank');

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            data = _context.sent;
            dispatch({
              type: 'FAQ_GET2',
              payload: data
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  var BankList = state.FAQ2.map(function (v) {
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
      children: BankList
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(Bank, "tMjQDhNvN1vDEz7QS76YEprP+qA=");

_c = Bank;
/* harmony default export */ __webpack_exports__["default"] = (Bank);

var _c;

$RefreshReg$(_c, "Bank");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vU3RvcmUvY29udGV4dC5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2ZhcXMvZmFxX3BhZ2VzL0JhbmsuanN4Il0sIm5hbWVzIjpbImluaXRhbFN0YXRlIiwiRkFRIiwiYW5zd2VyIiwicXVlc3Rpb24iLCJGQVEyIiwiU3RvcmUiLCJjcmVhdGVDb250ZXh0IiwiQmFuayIsInVzZUNvbnRleHQiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwidHlwZSIsInBheWxvYWQiLCJCYW5rTGlzdCIsIm1hcCIsInYiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsV0FBVyxHQUFHO0FBQ2hCQyxLQUFHLEVBQUMsQ0FDQTtBQUNJQyxVQUFNLEVBQUMsTUFEWDtBQUVJQyxZQUFRLEVBQUM7QUFGYixHQURBLENBRFk7QUFPaEJDLE1BQUksRUFBQyxDQUNEO0FBQ0lGLFVBQU0sRUFBQyxNQURYO0FBRUlDLFlBQVEsRUFBQztBQUZiLEdBREM7QUFQVyxDQUFwQjtBQWVBLElBQU1FLEtBQUssZ0JBQUdDLG9EQUFhLENBQUNOLFdBQUQsQ0FBM0I7QUFFQSwrREFBZUssS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBOztBQUVBLElBQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFBQSxvQkFFYUMsaURBQVUsQ0FBQ0gsbURBQUQsQ0FGdkI7QUFBQSxNQUVQSSxLQUZPLGVBRVBBLEtBRk87QUFBQSxNQUVBQyxRQUZBLGVBRUFBLFFBRkE7O0FBSWZDLGtEQUFTLG1TQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2lCQyxLQUFLLENBQUMsaUNBQUQsQ0FEdEI7O0FBQUE7QUFDQUMsb0JBREE7QUFBQTtBQUFBLG1CQUVhQSxRQUFRLENBQUNDLElBQVQsRUFGYjs7QUFBQTtBQUVBQyxnQkFGQTtBQUdOTCxvQkFBUSxDQUFDO0FBQUVNLGtCQUFJLEVBQUUsVUFBUjtBQUFvQkMscUJBQU8sRUFBRUY7QUFBN0IsYUFBRCxDQUFSOztBQUhNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFJTixFQUpNLENBQVQ7QUFNQSxNQUFNRyxRQUFRLEdBQUdULEtBQUssQ0FBQ0wsSUFBTixDQUFXZSxHQUFYLENBQWUsVUFBQ0MsQ0FBRCxFQUFPO0FBQ25DLHdCQUNJO0FBQUEsOEJBQ0k7QUFBQSxrQkFBS0EsQ0FBQyxDQUFDakI7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFBLGtCQUFLaUIsQ0FBQyxDQUFDbEI7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQSxPQUFTa0IsQ0FBQyxDQUFDQyxFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQU1ILEdBUGdCLENBQWpCO0FBU0Esc0JBQ0k7QUFBQSwyQkFDSTtBQUFBLGdCQUNLSDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQVFILENBM0JEOztHQUFNWCxJOztLQUFBQSxJO0FBNkJOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ZhcXMvW2ZhcV0uNThlOTJjZDE5OWJlMDY1ZmUwMzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBpbml0YWxTdGF0ZSA9IHtcclxuICAgIEZBUTpbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhbnN3ZXI6J3Rlc3QnLFxyXG4gICAgICAgICAgICBxdWVzdGlvbjondGVzdCcsXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIEZBUTI6W1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYW5zd2VyOid0ZXN0JyxcclxuICAgICAgICAgICAgcXVlc3Rpb246J3Rlc3QnLFxyXG4gICAgICAgIH1cclxuICAgIF1cclxufVxyXG5cclxuY29uc3QgU3RvcmUgPSBjcmVhdGVDb250ZXh0KGluaXRhbFN0YXRlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3JlIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFN0b3JlIGZyb20gJy4uLy4uLy4uL1N0b3JlL2NvbnRleHQnXHJcblxyXG5jb25zdCBCYW5rID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KFN0b3JlKVxyXG5cclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2ZhcXMvYmFuaycpXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0ZBUV9HRVQyJywgcGF5bG9hZDogZGF0YSB9KVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgQmFua0xpc3QgPSBzdGF0ZS5GQVEyLm1hcCgodikgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e3YuaWR9PlxyXG4gICAgICAgICAgICAgICAgPHRkPnt2LnF1ZXN0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3YuYW5zd2VyfTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIHtCYW5rTGlzdH1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhbmsiXSwic291cmNlUm9vdCI6IiJ9