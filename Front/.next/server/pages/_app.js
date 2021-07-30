(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./Store/context.jsx":
/*!***************************!*\
  !*** ./Store/context.jsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const initalState = {
  FAQ: [{
    answer: 'test',
    question: 'test'
  }]
};
const Store = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initalState);
/* harmony default export */ __webpack_exports__["default"] = (Store);

/***/ }),

/***/ "./Store/reducer.jsx":
/*!***************************!*\
  !*** ./Store/reducer.jsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const reducer = (state, action) => {
  switch (action.type) {
    case "FAQ_GET":
      const {
        question,
        answer
      } = action.payload;
      const payloadLength = Object.entries(action.payload);
      const result = [];

      for (let i = 0; i < payloadLength.length; i++) {
        result.push(payloadLength[i][1]);
      }

      const rst = result.map(v => {
        return {
          id: v.id,
          question: v.Question,
          answer: v.Answer
        };
      }); // []

      return _objectSpread(_objectSpread({}, state), {}, {
        FAQ: [...rst]
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/index.css */ "./css/index.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_tab_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/tab.css */ "./css/tab.css");
/* harmony import */ var _css_tab_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_tab_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_Calculator_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/Calculator.css */ "./css/Calculator.css");
/* harmony import */ var _css_Calculator_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_Calculator_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_Subscription_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/Subscription.css */ "./css/Subscription.css");
/* harmony import */ var _css_Subscription_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_Subscription_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_Income_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/Income.css */ "./css/Income.css");
/* harmony import */ var _css_Income_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_Income_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_Notice_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/Notice.css */ "./css/Notice.css");
/* harmony import */ var _css_Notice_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Notice_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _css_Supply_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/Supply.css */ "./css/Supply.css");
/* harmony import */ var _css_Supply_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_Supply_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_Faq_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/Faq.css */ "./css/Faq.css");
/* harmony import */ var _css_Faq_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_Faq_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Store_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Store/context */ "./Store/context.jsx");
/* harmony import */ var _Store_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Store/reducer */ "./Store/reducer.jsx");


var _jsxFileName = "C:\\Users\\KGA_20\\Project\\AllAboutSHT\\Front\\pages\\_app.jsx";













const App = ({
  Component
}) => {
  const globalStore = (0,react__WEBPACK_IMPORTED_MODULE_10__.useContext)(_Store_context__WEBPACK_IMPORTED_MODULE_11__.default);
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useReducer)(_Store_reducer__WEBPACK_IMPORTED_MODULE_12__.default, globalStore);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_9___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "test"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Store_context__WEBPACK_IMPORTED_MODULE_11__.default.Provider, {
      value: {
        state,
        dispatch
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./css/Calculator.css":
/*!****************************!*\
  !*** ./css/Calculator.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "./css/Faq.css":
/*!*********************!*\
  !*** ./css/Faq.css ***!
  \*********************/
/***/ (function() {



/***/ }),

/***/ "./css/Income.css":
/*!************************!*\
  !*** ./css/Income.css ***!
  \************************/
/***/ (function() {



/***/ }),

/***/ "./css/Notice.css":
/*!************************!*\
  !*** ./css/Notice.css ***!
  \************************/
/***/ (function() {



/***/ }),

/***/ "./css/Subscription.css":
/*!******************************!*\
  !*** ./css/Subscription.css ***!
  \******************************/
/***/ (function() {



/***/ }),

/***/ "./css/Supply.css":
/*!************************!*\
  !*** ./css/Supply.css ***!
  \************************/
/***/ (function() {



/***/ }),

/***/ "./css/index.css":
/*!***********************!*\
  !*** ./css/index.css ***!
  \***********************/
/***/ (function() {



/***/ }),

/***/ "./css/tab.css":
/*!*********************!*\
  !*** ./css/tab.css ***!
  \*********************/
/***/ (function() {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL1N0b3JlL2NvbnRleHQuanN4Iiwid2VicGFjazovL2Zyb250Ly4vU3RvcmUvcmVkdWNlci5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9wYWdlcy9fYXBwLmpzeCIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImluaXRhbFN0YXRlIiwiRkFRIiwiYW5zd2VyIiwicXVlc3Rpb24iLCJTdG9yZSIsImNyZWF0ZUNvbnRleHQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsInBheWxvYWRMZW5ndGgiLCJPYmplY3QiLCJlbnRyaWVzIiwicmVzdWx0IiwiaSIsImxlbmd0aCIsInB1c2giLCJyc3QiLCJtYXAiLCJ2IiwiaWQiLCJRdWVzdGlvbiIsIkFuc3dlciIsIkFwcCIsIkNvbXBvbmVudCIsImdsb2JhbFN0b3JlIiwidXNlQ29udGV4dCIsImRpc3BhdGNoIiwidXNlUmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBTUEsV0FBVyxHQUFHO0FBQ2hCQyxLQUFHLEVBQUMsQ0FDQTtBQUNJQyxVQUFNLEVBQUMsTUFEWDtBQUVJQyxZQUFRLEVBQUM7QUFGYixHQURBO0FBRFksQ0FBcEI7QUFTQSxNQUFNQyxLQUFLLGdCQUFHQyxvREFBYSxDQUFDTCxXQUFELENBQTNCO0FBRUEsK0RBQWVJLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkEsTUFBTUUsT0FBTyxHQUFHLENBQUNDLEtBQUQsRUFBT0MsTUFBUCxLQUFrQjtBQUM5QixVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDSSxTQUFLLFNBQUw7QUFFQSxZQUFNO0FBQUNOLGdCQUFEO0FBQVVEO0FBQVYsVUFBb0JNLE1BQU0sQ0FBQ0UsT0FBakM7QUFFQSxZQUFNQyxhQUFhLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlTCxNQUFNLENBQUNFLE9BQXRCLENBQXRCO0FBRUEsWUFBTUksTUFBTSxHQUFHLEVBQWY7O0FBQ0EsV0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUNKLGFBQWEsQ0FBQ0ssTUFBN0IsRUFBcUNELENBQUMsRUFBdEMsRUFBeUM7QUFDckNELGNBQU0sQ0FBQ0csSUFBUCxDQUFZTixhQUFhLENBQUNJLENBQUQsQ0FBYixDQUFpQixDQUFqQixDQUFaO0FBQ0g7O0FBRUQsWUFBTUcsR0FBRyxHQUFHSixNQUFNLENBQUNLLEdBQVAsQ0FBV0MsQ0FBQyxJQUFFO0FBQ3RCLGVBQU87QUFBQ0MsWUFBRSxFQUFDRCxDQUFDLENBQUNDLEVBQU47QUFBU2xCLGtCQUFRLEVBQUNpQixDQUFDLENBQUNFLFFBQXBCO0FBQTZCcEIsZ0JBQU0sRUFBQ2tCLENBQUMsQ0FBQ0c7QUFBdEMsU0FBUDtBQUNILE9BRlcsQ0FBWixDQVhBLENBY0E7O0FBQ0ksNkNBQ09oQixLQURQO0FBRUlOLFdBQUcsRUFBRSxDQUFDLEdBQUdpQixHQUFKO0FBRlQ7O0FBTUo7QUFDSSxhQUFPWCxLQUFQO0FBdkJSO0FBeUJILENBMUJEOztBQTRCQSwrREFBZUQsT0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1rQixHQUFHLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBbUI7QUFDM0IsUUFBTUMsV0FBVyxHQUFHQyxrREFBVSxDQUFDdkIsb0RBQUQsQ0FBOUI7QUFDQSxRQUFNO0FBQUEsT0FBQ0csS0FBRDtBQUFBLE9BQVFxQjtBQUFSLE1BQW9CQyxrREFBVSxDQUFDdkIsb0RBQUQsRUFBVW9CLFdBQVYsQ0FBcEM7QUFFQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBSUksOERBQUMsNkRBQUQ7QUFBZ0IsV0FBSyxFQUFFO0FBQUVuQixhQUFGO0FBQVNxQjtBQUFULE9BQXZCO0FBQUEsNkJBQ0ksOERBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSjtBQUFBLGtCQURKO0FBVUgsQ0FkRDs7QUFnQkEsK0RBQWVKLEdBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDb250ZXh0fSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IGluaXRhbFN0YXRlID0ge1xyXG4gICAgRkFROltcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGFuc3dlcjondGVzdCcsXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uOid0ZXN0JyxcclxuICAgICAgICB9XHJcbiAgICBdXHJcbn1cclxuXHJcbmNvbnN0IFN0b3JlID0gY3JlYXRlQ29udGV4dChpbml0YWxTdGF0ZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yZSIsImNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgXCJGQVFfR0VUXCI6IFxyXG4gICAgXHJcbiAgICAgICAgY29uc3Qge3F1ZXN0aW9uLGFuc3dlcn0gPSBhY3Rpb24ucGF5bG9hZFxyXG5cclxuICAgICAgICBjb25zdCBwYXlsb2FkTGVuZ3RoID0gT2JqZWN0LmVudHJpZXMoYWN0aW9uLnBheWxvYWQpXHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPHBheWxvYWRMZW5ndGgubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXlsb2FkTGVuZ3RoW2ldWzFdKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCByc3QgPSByZXN1bHQubWFwKHY9PntcclxuICAgICAgICAgICAgcmV0dXJuIHtpZDp2LmlkLHF1ZXN0aW9uOnYuUXVlc3Rpb24sYW5zd2VyOnYuQW5zd2VyfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gW11cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgRkFROiBbLi4ucnN0XVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIgIiwiaW1wb3J0ICcuLi9jc3MvaW5kZXguY3NzJ1xyXG5pbXBvcnQgJy4uL2Nzcy90YWIuY3NzJ1xyXG5pbXBvcnQgJy4uL2Nzcy9DYWxjdWxhdG9yLmNzcydcclxuaW1wb3J0ICcuLi9jc3MvU3Vic2NyaXB0aW9uLmNzcydcclxuaW1wb3J0ICcuLi9jc3MvSW5jb21lLmNzcydcclxuaW1wb3J0ICcuLi9jc3MvTm90aWNlLmNzcydcclxuaW1wb3J0ICcuLi9jc3MvU3VwcGx5LmNzcydcclxuaW1wb3J0ICcuLi9jc3MvRmFxLmNzcydcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdG9yZSBmcm9tICcuLi9TdG9yZS9jb250ZXh0J1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9TdG9yZS9yZWR1Y2VyJ1xyXG5cclxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50IH0pID0+IHtcclxuICAgIGNvbnN0IGdsb2JhbFN0b3JlID0gdXNlQ29udGV4dChTdG9yZSlcclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBnbG9iYWxTdG9yZSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPnRlc3Q8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxTdG9yZS5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgZGlzcGF0Y2ggfX0+XHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IC8+XHJcbiAgICAgICAgICAgIDwvU3RvcmUuUHJvdmlkZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==