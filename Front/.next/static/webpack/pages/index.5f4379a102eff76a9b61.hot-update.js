self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./api/api.jsx":
/*!*********************!*\
  !*** ./api/api.jsx ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postCalculator1": function() { return /* binding */ postCalculator1; },
/* harmony export */   "postCalculator2": function() { return /* binding */ postCalculator2; }
/* harmony export */ });
/* harmony import */ var C_Users_KGA_20_0707_AllAboutSHT_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_KGA_20_0707_AllAboutSHT_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_KGA_20_0707_AllAboutSHT_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_KGA_20_0707_AllAboutSHT_Front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var postCalculator1 = /*#__PURE__*/function () {
  var _ref = (0,C_Users_KGA_20_0707_AllAboutSHT_Front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_KGA_20_0707_AllAboutSHT_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(body) {
    var options, response;
    return C_Users_KGA_20_0707_AllAboutSHT_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //code block
            //fetch 
            // fetch(url:stirng , option:object)
            // request method 'POST'
            options = {
              method: 'POST',
              headers: {
                'Content-type': 'application/json;charset=utf-8'
              },
              body: JSON.stringify(body)
            };
            _context.next = 3;
            return fetch('http://localhost:4000/calculator1', options);

          case 3:
            response = _context.sent;

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function postCalculator1(_x) {
    return _ref.apply(this, arguments);
  };
}();
var postCalculator2 = /*#__PURE__*/function () {
  var _ref2 = (0,C_Users_KGA_20_0707_AllAboutSHT_Front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_KGA_20_0707_AllAboutSHT_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(body) {
    var options, response;
    return C_Users_KGA_20_0707_AllAboutSHT_Front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            //code block
            //fetch 
            // fetch(url:stirng , option:object)
            // request method 'POST'
            options = {
              method: 'POST',
              headers: {
                'Content-type': 'application/json;charset=utf-8'
              },
              body: JSON.stringify(body)
            };
            _context2.next = 3;
            return fetch('http://localhost:4000/calculator2', options);

          case 3:
            response = _context2.sent;

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function postCalculator2(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBpL2FwaS5qc3giXSwibmFtZXMiOlsicG9zdENhbGN1bGF0b3IxIiwiYm9keSIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsImZldGNoIiwicmVzcG9uc2UiLCJwb3N0Q2FsY3VsYXRvcjIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ08sSUFBTUEsZUFBZTtBQUFBLDJSQUFHLGlCQUFPQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNNQyxtQkFMaUIsR0FLUDtBQUNaQyxvQkFBTSxFQUFDLE1BREs7QUFFWkMscUJBQU8sRUFBQztBQUNKLGdDQUFlO0FBRFgsZUFGSTtBQUtaSCxrQkFBSSxFQUFDSSxJQUFJLENBQUNDLFNBQUwsQ0FBZUwsSUFBZjtBQUxPLGFBTE87QUFBQTtBQUFBLG1CQVlBTSxLQUFLLENBQUMsbUNBQUQsRUFBcUNMLE9BQXJDLENBWkw7O0FBQUE7QUFZakJNLG9CQVppQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFmUixlQUFlO0FBQUE7QUFBQTtBQUFBLEdBQXJCO0FBZ0JBLElBQU1TLGVBQWU7QUFBQSw0UkFBRyxrQkFBT1IsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDTUMsbUJBTHFCLEdBS1g7QUFDWkMsb0JBQU0sRUFBQyxNQURLO0FBRVpDLHFCQUFPLEVBQUM7QUFDSixnQ0FBZTtBQURYLGVBRkk7QUFLWkgsa0JBQUksRUFBQ0ksSUFBSSxDQUFDQyxTQUFMLENBQWVMLElBQWY7QUFMTyxhQUxXO0FBQUE7QUFBQSxtQkFZSk0sS0FBSyxDQUFDLG1DQUFELEVBQXFDTCxPQUFyQyxDQVpEOztBQUFBO0FBWXJCTSxvQkFacUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBZkMsZUFBZTtBQUFBO0FBQUE7QUFBQSxHQUFyQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ZjQzNzlhMTAyZWZmNzZhOWI2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBjb25zdCBwb3N0Q2FsY3VsYXRvcjEgPSBhc3luYyAoYm9keSkgPT4ge1xyXG4gICAgICAgIC8vY29kZSBibG9ja1xyXG4gICAgICAgIC8vZmV0Y2ggXHJcbiAgICAgICAgLy8gZmV0Y2godXJsOnN0aXJuZyAsIG9wdGlvbjpvYmplY3QpXHJcbiAgICAgICAgLy8gcmVxdWVzdCBtZXRob2QgJ1BPU1QnXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzonYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KGJvZHkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9jYWxjdWxhdG9yMScsb3B0aW9ucykgLy9yZXN0ZnVsIGFwaSBcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcG9zdENhbGN1bGF0b3IyID0gYXN5bmMgKGJvZHkpID0+IHtcclxuICAgIC8vY29kZSBibG9ja1xyXG4gICAgLy9mZXRjaCBcclxuICAgIC8vIGZldGNoKHVybDpzdGlybmcgLCBvcHRpb246b2JqZWN0KVxyXG4gICAgLy8gcmVxdWVzdCBtZXRob2QgJ1BPU1QnXHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICdDb250ZW50LXR5cGUnOidhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KGJvZHkpXHJcbiAgICB9XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjQwMDAvY2FsY3VsYXRvcjInLG9wdGlvbnMpIC8vcmVzdGZ1bCBhcGkgXHJcblxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9