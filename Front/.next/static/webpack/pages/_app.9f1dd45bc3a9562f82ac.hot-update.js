self["webpackHotUpdate_N_E"]("pages/_app",{

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

    case "FAQ_GET2":
      var payloadLength2 = Object.entries(action.payload);
      var result2 = [];

      for (var _i = 0; _i < payloadLength2.length; _i++) {
        result2.push(payloadLength2[_i][1]);
      }

      var rst2 = result.map(function (v) {
        return {
          id: v.id,
          question: v.Question,
          answer: v.Answer
        };
      }); // []

      return _objectSpread(_objectSpread({}, state), {}, {
        FAQ2: (0,C_Users_KGA_20_Project_AllAboutSHT_Front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(rst2)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vU3RvcmUvcmVkdWNlci5qc3giXSwibmFtZXMiOlsicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWRMZW5ndGgiLCJPYmplY3QiLCJlbnRyaWVzIiwicGF5bG9hZCIsInJlc3VsdCIsImkiLCJsZW5ndGgiLCJwdXNoIiwicnN0IiwibWFwIiwidiIsImlkIiwicXVlc3Rpb24iLCJRdWVzdGlvbiIsImFuc3dlciIsIkFuc3dlciIsIkZBUSIsInBheWxvYWRMZW5ndGgyIiwicmVzdWx0MiIsInJzdDIiLCJGQVEyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBT0MsTUFBUCxFQUFrQjtBQUM5QixVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDSSxTQUFLLFNBQUw7QUFHQSxVQUFNQyxhQUFhLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlSixNQUFNLENBQUNLLE9BQXRCLENBQXRCO0FBRUEsVUFBTUMsTUFBTSxHQUFHLEVBQWY7O0FBQ0EsV0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUNMLGFBQWEsQ0FBQ00sTUFBN0IsRUFBcUNELENBQUMsRUFBdEMsRUFBeUM7QUFDckNELGNBQU0sQ0FBQ0csSUFBUCxDQUFZUCxhQUFhLENBQUNLLENBQUQsQ0FBYixDQUFpQixDQUFqQixDQUFaO0FBQ0g7O0FBRUQsVUFBTUcsR0FBRyxHQUFHSixNQUFNLENBQUNLLEdBQVAsQ0FBVyxVQUFBQyxDQUFDLEVBQUU7QUFDdEIsZUFBTztBQUFDQyxZQUFFLEVBQUNELENBQUMsQ0FBQ0MsRUFBTjtBQUFTQyxrQkFBUSxFQUFDRixDQUFDLENBQUNHLFFBQXBCO0FBQTZCQyxnQkFBTSxFQUFDSixDQUFDLENBQUNLO0FBQXRDLFNBQVA7QUFDSCxPQUZXLENBQVosQ0FWQSxDQWFBOztBQUNJLDZDQUNPbEIsS0FEUDtBQUVJbUIsV0FBRyxFQUFFLDJJQUFJUixHQUFOO0FBRlA7O0FBT0osU0FBSyxVQUFMO0FBQ0EsVUFBTVMsY0FBYyxHQUFHaEIsTUFBTSxDQUFDQyxPQUFQLENBQWVKLE1BQU0sQ0FBQ0ssT0FBdEIsQ0FBdkI7QUFFQSxVQUFNZSxPQUFPLEdBQUcsRUFBaEI7O0FBQ0EsV0FBSSxJQUFJYixFQUFDLEdBQUMsQ0FBVixFQUFhQSxFQUFDLEdBQUNZLGNBQWMsQ0FBQ1gsTUFBOUIsRUFBc0NELEVBQUMsRUFBdkMsRUFBMEM7QUFDdENhLGVBQU8sQ0FBQ1gsSUFBUixDQUFhVSxjQUFjLENBQUNaLEVBQUQsQ0FBZCxDQUFrQixDQUFsQixDQUFiO0FBQ0g7O0FBRUQsVUFBTWMsSUFBSSxHQUFHZixNQUFNLENBQUNLLEdBQVAsQ0FBVyxVQUFBQyxDQUFDLEVBQUU7QUFDdkIsZUFBTztBQUFDQyxZQUFFLEVBQUNELENBQUMsQ0FBQ0MsRUFBTjtBQUFTQyxrQkFBUSxFQUFDRixDQUFDLENBQUNHLFFBQXBCO0FBQTZCQyxnQkFBTSxFQUFDSixDQUFDLENBQUNLO0FBQXRDLFNBQVA7QUFDSCxPQUZZLENBQWIsQ0FSQSxDQVdBOztBQUNJLDZDQUNPbEIsS0FEUDtBQUVJdUIsWUFBSSxFQUFFLDJJQUFJRCxJQUFOO0FBRlI7O0FBTUo7QUFDSSxhQUFPdEIsS0FBUDtBQXpDUjtBQTJDSCxDQTVDRDs7QUE4Q0EsK0RBQWVELE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45ZjFkZDQ1YmMzYTk1NjJmODJhYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVkdWNlciA9IChzdGF0ZSxhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBcIkZBUV9HRVRcIjogXHJcbiAgICBcclxuXHJcbiAgICAgICAgY29uc3QgcGF5bG9hZExlbmd0aCA9IE9iamVjdC5lbnRyaWVzKGFjdGlvbi5wYXlsb2FkKVxyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGk9MDsgaTxwYXlsb2FkTGVuZ3RoLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF5bG9hZExlbmd0aFtpXVsxXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcnN0ID0gcmVzdWx0Lm1hcCh2PT57XHJcbiAgICAgICAgICAgIHJldHVybiB7aWQ6di5pZCxxdWVzdGlvbjp2LlF1ZXN0aW9uLGFuc3dlcjp2LkFuc3dlcn1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIFtdXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIEZBUTogWy4uLnJzdF1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICBjYXNlIFwiRkFRX0dFVDJcIjogXHJcbiAgICAgICAgY29uc3QgcGF5bG9hZExlbmd0aDIgPSBPYmplY3QuZW50cmllcyhhY3Rpb24ucGF5bG9hZClcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0MiA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHBheWxvYWRMZW5ndGgyLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgcmVzdWx0Mi5wdXNoKHBheWxvYWRMZW5ndGgyW2ldWzFdKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCByc3QyID0gcmVzdWx0Lm1hcCh2PT57XHJcbiAgICAgICAgICAgIHJldHVybiB7aWQ6di5pZCxxdWVzdGlvbjp2LlF1ZXN0aW9uLGFuc3dlcjp2LkFuc3dlcn1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIFtdXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIEZBUTI6IFsuLi5yc3QyXVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIgIl0sInNvdXJjZVJvb3QiOiIifQ==