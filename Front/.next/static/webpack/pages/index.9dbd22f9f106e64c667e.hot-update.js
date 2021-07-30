self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./Store/reducer.jsx":
/*!***************************!*\
  !*** ./Store/reducer.jsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_KGA_20_Project_AllAboutSHT_Front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_KGA_20_Project_AllAboutSHT_Front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* module decorator */ module = __webpack_require__.hmd(module);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_KGA_20_Project_AllAboutSHT_Front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var reducer = function reducer(state, action) {
  switch (action.type) {
    case "FAQ_GET":
      var _action$payload = action.payload,
          question = _action$payload.question,
          answer = _action$payload.answer;
      var payloadLength = Object.entries(action.payload);
      var result = [];

      for (var i = 0; i < payloadLength.length; i++) {
        result.push(payloadLength[i][1]);
      }

      var rst = result.map(function (v) {
        return {
          id: v.id,
          question: v.Question,
          answer: v.Answer
        };
      }); // []

      return _objectSpread(_objectSpread({}, state), {}, {
        FAQ: (0,C_Users_KGA_20_Project_AllAboutSHT_Front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(rst)
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vU3RvcmUvcmVkdWNlci5qc3giXSwibmFtZXMiOlsicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJxdWVzdGlvbiIsImFuc3dlciIsInBheWxvYWRMZW5ndGgiLCJPYmplY3QiLCJlbnRyaWVzIiwicmVzdWx0IiwiaSIsImxlbmd0aCIsInB1c2giLCJyc3QiLCJtYXAiLCJ2IiwiaWQiLCJRdWVzdGlvbiIsIkFuc3dlciIsIkZBUSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQU9DLE1BQVAsRUFBa0I7QUFDOUIsVUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0ksU0FBSyxTQUFMO0FBQUEsNEJBRTBCRCxNQUFNLENBQUNFLE9BRmpDO0FBQUEsVUFFT0MsUUFGUCxtQkFFT0EsUUFGUDtBQUFBLFVBRWdCQyxNQUZoQixtQkFFZ0JBLE1BRmhCO0FBSUEsVUFBTUMsYUFBYSxHQUFHQyxNQUFNLENBQUNDLE9BQVAsQ0FBZVAsTUFBTSxDQUFDRSxPQUF0QixDQUF0QjtBQUVBLFVBQU1NLE1BQU0sR0FBRyxFQUFmOztBQUNBLFdBQUksSUFBSUMsQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFDSixhQUFhLENBQUNLLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEVBQXlDO0FBQ3JDRCxjQUFNLENBQUNHLElBQVAsQ0FBWU4sYUFBYSxDQUFDSSxDQUFELENBQWIsQ0FBaUIsQ0FBakIsQ0FBWjtBQUNIOztBQUVELFVBQU1HLEdBQUcsR0FBR0osTUFBTSxDQUFDSyxHQUFQLENBQVcsVUFBQUMsQ0FBQyxFQUFFO0FBQ3RCLGVBQU87QUFBQ0MsWUFBRSxFQUFDRCxDQUFDLENBQUNDLEVBQU47QUFBU1osa0JBQVEsRUFBQ1csQ0FBQyxDQUFDRSxRQUFwQjtBQUE2QlosZ0JBQU0sRUFBQ1UsQ0FBQyxDQUFDRztBQUF0QyxTQUFQO0FBQ0gsT0FGVyxDQUFaLENBWEEsQ0FjQTs7QUFDSSw2Q0FDT2xCLEtBRFA7QUFFSW1CLFdBQUcsRUFBRSwySUFBSU4sR0FBTjtBQUZQOztBQU1KO0FBQ0ksYUFBT2IsS0FBUDtBQXZCUjtBQXlCSCxDQTFCRDs7QUE0QkEsK0RBQWVELE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWRiZDIyZjlmMTA2ZTY0YzY2N2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgXCJGQVFfR0VUXCI6IFxyXG4gICAgXHJcbiAgICAgICAgY29uc3Qge3F1ZXN0aW9uLGFuc3dlcn0gPSBhY3Rpb24ucGF5bG9hZFxyXG5cclxuICAgICAgICBjb25zdCBwYXlsb2FkTGVuZ3RoID0gT2JqZWN0LmVudHJpZXMoYWN0aW9uLnBheWxvYWQpXHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHBheWxvYWRMZW5ndGgubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXlsb2FkTGVuZ3RoW2ldWzFdKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCByc3QgPSByZXN1bHQubWFwKHY9PntcclxuICAgICAgICAgICAgcmV0dXJuIHtpZDp2LmlkLHF1ZXN0aW9uOnYuUXVlc3Rpb24sYW5zd2VyOnYuQW5zd2VyfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gW11cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgRkFROiBbLi4ucnN0XVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIgIl0sInNvdXJjZVJvb3QiOiIifQ==