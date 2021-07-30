/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initalState = {\n  FAQ: [{\n    answer: 'test',\n    question: 'test'\n  }]\n};\nconst Store = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initalState);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Store);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL1N0b3JlL2NvbnRleHQuanN4PzUzNWEiXSwibmFtZXMiOlsiaW5pdGFsU3RhdGUiLCJGQVEiLCJhbnN3ZXIiLCJxdWVzdGlvbiIsIlN0b3JlIiwiY3JlYXRlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFQSxNQUFNQSxXQUFXLEdBQUc7QUFDaEJDLEtBQUcsRUFBQyxDQUNBO0FBQ0lDLFVBQU0sRUFBQyxNQURYO0FBRUlDLFlBQVEsRUFBQztBQUZiLEdBREE7QUFEWSxDQUFwQjtBQVNBLE1BQU1DLEtBQUssZ0JBQUdDLG9EQUFhLENBQUNMLFdBQUQsQ0FBM0I7QUFFQSwrREFBZUksS0FBZiIsImZpbGUiOiIuL1N0b3JlL2NvbnRleHQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDb250ZXh0fSBmcm9tICdyZWFjdCdcblxuY29uc3QgaW5pdGFsU3RhdGUgPSB7XG4gICAgRkFROltcbiAgICAgICAge1xuICAgICAgICAgICAgYW5zd2VyOid0ZXN0JyxcbiAgICAgICAgICAgIHF1ZXN0aW9uOid0ZXN0JyxcbiAgICAgICAgfVxuICAgIF1cbn1cblxuY29uc3QgU3RvcmUgPSBjcmVhdGVDb250ZXh0KGluaXRhbFN0YXRlKTtcblxuZXhwb3J0IGRlZmF1bHQgU3RvcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Store/context.jsx\n");

/***/ }),

/***/ "./Store/reducer.jsx":
/*!***************************!*\
  !*** ./Store/reducer.jsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst reducer = (state, action) => {\n  switch (action.type) {\n    case \"FAQ_GET\":\n      const {\n        question,\n        answer\n      } = action.payload;\n      const payloadLength = Object.entries(action.payload);\n      const result = [];\n\n      for (let i = 0; i < payloadLength.length; i++) {\n        result.push(payloadLength[i][1]);\n      }\n\n      const rst = result.map(v => {\n        return {\n          id: v.id,\n          question: v.question,\n          answer: v.answer\n        };\n      }); // []\n\n      return _objectSpread(_objectSpread({}, state), {}, {\n        FAQ: [...rst]\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL1N0b3JlL3JlZHVjZXIuanN4PzRlY2MiXSwibmFtZXMiOlsicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInF1ZXN0aW9uIiwiYW5zd2VyIiwicGF5bG9hZCIsInBheWxvYWRMZW5ndGgiLCJPYmplY3QiLCJlbnRyaWVzIiwicmVzdWx0IiwiaSIsImxlbmd0aCIsInB1c2giLCJyc3QiLCJtYXAiLCJ2IiwiaWQiLCJGQVEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxNQUFNQSxPQUFPLEdBQUcsQ0FBQ0MsS0FBRCxFQUFPQyxNQUFQLEtBQWtCO0FBQzlCLFVBQU9BLE1BQU0sQ0FBQ0MsSUFBZDtBQUNJLFNBQUssU0FBTDtBQUVBLFlBQU07QUFBQ0MsZ0JBQUQ7QUFBVUM7QUFBVixVQUFvQkgsTUFBTSxDQUFDSSxPQUFqQztBQUVBLFlBQU1DLGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxPQUFQLENBQWVQLE1BQU0sQ0FBQ0ksT0FBdEIsQ0FBdEI7QUFFQSxZQUFNSSxNQUFNLEdBQUcsRUFBZjs7QUFDQSxXQUFJLElBQUlDLENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBQ0osYUFBYSxDQUFDSyxNQUE3QixFQUFxQ0QsQ0FBQyxFQUF0QyxFQUF5QztBQUNyQ0QsY0FBTSxDQUFDRyxJQUFQLENBQVlOLGFBQWEsQ0FBQ0ksQ0FBRCxDQUFiLENBQWlCLENBQWpCLENBQVo7QUFDSDs7QUFFRCxZQUFNRyxHQUFHLEdBQUdKLE1BQU0sQ0FBQ0ssR0FBUCxDQUFXQyxDQUFDLElBQUU7QUFDdEIsZUFBTztBQUFDQyxZQUFFLEVBQUNELENBQUMsQ0FBQ0MsRUFBTjtBQUFTYixrQkFBUSxFQUFDWSxDQUFDLENBQUNaLFFBQXBCO0FBQTZCQyxnQkFBTSxFQUFDVyxDQUFDLENBQUNYO0FBQXRDLFNBQVA7QUFDSCxPQUZXLENBQVosQ0FYQSxDQWNBOztBQUNJLDZDQUNPSixLQURQO0FBRUlpQixXQUFHLEVBQUUsQ0FBQyxHQUFHSixHQUFKO0FBRlQ7O0FBTUo7QUFDSSxhQUFPYixLQUFQO0FBdkJSO0FBeUJILENBMUJEOztBQTRCQSwrREFBZUQsT0FBZiIsImZpbGUiOiIuL1N0b3JlL3JlZHVjZXIuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVkdWNlciA9IChzdGF0ZSxhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xuICAgICAgICBjYXNlIFwiRkFRX0dFVFwiOiBcbiAgICBcbiAgICAgICAgY29uc3Qge3F1ZXN0aW9uLGFuc3dlcn0gPSBhY3Rpb24ucGF5bG9hZFxuXG4gICAgICAgIGNvbnN0IHBheWxvYWRMZW5ndGggPSBPYmplY3QuZW50cmllcyhhY3Rpb24ucGF5bG9hZClcblxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8cGF5bG9hZExlbmd0aC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXlsb2FkTGVuZ3RoW2ldWzFdKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCByc3QgPSByZXN1bHQubWFwKHY9PntcbiAgICAgICAgICAgIHJldHVybiB7aWQ6di5pZCxxdWVzdGlvbjp2LnF1ZXN0aW9uLGFuc3dlcjp2LmFuc3dlcn1cbiAgICAgICAgfSlcbiAgICAgICAgLy8gW11cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgRkFROiBbLi4ucnN0XVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Store/reducer.jsx\n");

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
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


var _jsxFileName = "C:\\Users\\user\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\\uC2E0\uD76C\uD0C0_\uD504\uB85C\uC81D\uD2B8\\AllAboutSHT\\Front\\pages\\_app.jsx";













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
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/index.css */ \"./css/index.css\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_tab_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/tab.css */ \"./css/tab.css\");\n/* harmony import */ var _css_tab_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_tab_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_Calculator_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/Calculator.css */ \"./css/Calculator.css\");\n/* harmony import */ var _css_Calculator_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_Calculator_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _css_Subscription_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/Subscription.css */ \"./css/Subscription.css\");\n/* harmony import */ var _css_Subscription_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_Subscription_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _css_Income_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/Income.css */ \"./css/Income.css\");\n/* harmony import */ var _css_Income_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_Income_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _css_Notice_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/Notice.css */ \"./css/Notice.css\");\n/* harmony import */ var _css_Notice_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_Notice_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _css_Supply_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/Supply.css */ \"./css/Supply.css\");\n/* harmony import */ var _css_Supply_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_Supply_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _css_Faq_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/Faq.css */ \"./css/Faq.css\");\n/* harmony import */ var _css_Faq_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_Faq_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _Store_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Store/context */ \"./Store/context.jsx\");\n/* harmony import */ var _Store_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Store/reducer */ \"./Store/reducer.jsx\");\n\n\nvar _jsxFileName = \"/Users/heoyumyeong/Desktop/STUDY/SHT/AllAboutSHT/Front/pages/_app.jsx\";\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst App = ({\n  Component\n}) => {\n  const globalStore = (0,react__WEBPACK_IMPORTED_MODULE_10__.useContext)(_Store_context__WEBPACK_IMPORTED_MODULE_11__.default);\n  const {\n    0: state,\n    1: dispatch\n  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useReducer)(_Store_reducer__WEBPACK_IMPORTED_MODULE_12__.default, globalStore);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_9___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"test\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Store_context__WEBPACK_IMPORTED_MODULE_11__.default.Provider, {\n      value: {\n        state,\n        dispatch\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3BhZ2VzL19hcHAuanN4PzYwZDMiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwiZ2xvYmFsU3RvcmUiLCJ1c2VDb250ZXh0IiwiU3RvcmUiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsInJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsR0FBRyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQW1CO0FBQzNCLFFBQU1DLFdBQVcsR0FBR0Msa0RBQVUsQ0FBQ0Msb0RBQUQsQ0FBOUI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLGtEQUFVLENBQUNDLG9EQUFELEVBQVVOLFdBQVYsQ0FBcEM7QUFFQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBSUksOERBQUMsNkRBQUQ7QUFBZ0IsV0FBSyxFQUFFO0FBQUVHLGFBQUY7QUFBU0M7QUFBVCxPQUF2QjtBQUFBLDZCQUNJLDhEQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSko7QUFBQSxrQkFESjtBQVVILENBZEQ7O0FBZ0JBLCtEQUFlTixHQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2Nzcy9pbmRleC5jc3MnXG5pbXBvcnQgJy4uL2Nzcy90YWIuY3NzJ1xuaW1wb3J0ICcuLi9jc3MvQ2FsY3VsYXRvci5jc3MnXG5pbXBvcnQgJy4uL2Nzcy9TdWJzY3JpcHRpb24uY3NzJ1xuaW1wb3J0ICcuLi9jc3MvSW5jb21lLmNzcydcbmltcG9ydCAnLi4vY3NzL05vdGljZS5jc3MnXG5pbXBvcnQgJy4uL2Nzcy9TdXBwbHkuY3NzJ1xuaW1wb3J0ICcuLi9jc3MvRmFxLmNzcydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBTdG9yZSBmcm9tICcuLi9TdG9yZS9jb250ZXh0J1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vU3RvcmUvcmVkdWNlcidcblxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50IH0pID0+IHtcbiAgICBjb25zdCBnbG9iYWxTdG9yZSA9IHVzZUNvbnRleHQoU3RvcmUpXG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGdsb2JhbFN0b3JlKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT50ZXN0PC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxTdG9yZS5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgZGlzcGF0Y2ggfX0+XG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCAvPlxuICAgICAgICAgICAgPC9TdG9yZS5Qcm92aWRlcj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");
>>>>>>> origin/merge2

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

<<<<<<< HEAD
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL1N0b3JlL2NvbnRleHQuanN4Iiwid2VicGFjazovL2Zyb250Ly4vU3RvcmUvcmVkdWNlci5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9wYWdlcy9fYXBwLmpzeCIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImluaXRhbFN0YXRlIiwiRkFRIiwiYW5zd2VyIiwicXVlc3Rpb24iLCJTdG9yZSIsImNyZWF0ZUNvbnRleHQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsInBheWxvYWRMZW5ndGgiLCJPYmplY3QiLCJlbnRyaWVzIiwicmVzdWx0IiwiaSIsImxlbmd0aCIsInB1c2giLCJyc3QiLCJtYXAiLCJ2IiwiaWQiLCJBcHAiLCJDb21wb25lbnQiLCJnbG9iYWxTdG9yZSIsInVzZUNvbnRleHQiLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLFdBQVcsR0FBRztBQUNoQkMsS0FBRyxFQUFDLENBQ0E7QUFDSUMsVUFBTSxFQUFDLE1BRFg7QUFFSUMsWUFBUSxFQUFDO0FBRmIsR0FEQTtBQURZLENBQXBCO0FBU0EsTUFBTUMsS0FBSyxnQkFBR0Msb0RBQWEsQ0FBQ0wsV0FBRCxDQUEzQjtBQUVBLCtEQUFlSSxLQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBLE1BQU1FLE9BQU8sR0FBRyxDQUFDQyxLQUFELEVBQU9DLE1BQVAsS0FBa0I7QUFDOUIsVUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0ksU0FBSyxTQUFMO0FBRUEsWUFBTTtBQUFDTixnQkFBRDtBQUFVRDtBQUFWLFVBQW9CTSxNQUFNLENBQUNFLE9BQWpDO0FBRUEsWUFBTUMsYUFBYSxHQUFHQyxNQUFNLENBQUNDLE9BQVAsQ0FBZUwsTUFBTSxDQUFDRSxPQUF0QixDQUF0QjtBQUVBLFlBQU1JLE1BQU0sR0FBRyxFQUFmOztBQUNBLFdBQUksSUFBSUMsQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFDSixhQUFhLENBQUNLLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEVBQXlDO0FBQ3JDRCxjQUFNLENBQUNHLElBQVAsQ0FBWU4sYUFBYSxDQUFDSSxDQUFELENBQWIsQ0FBaUIsQ0FBakIsQ0FBWjtBQUNIOztBQUVELFlBQU1HLEdBQUcsR0FBR0osTUFBTSxDQUFDSyxHQUFQLENBQVdDLENBQUMsSUFBRTtBQUN0QixlQUFPO0FBQUNDLFlBQUUsRUFBQ0QsQ0FBQyxDQUFDQyxFQUFOO0FBQVNsQixrQkFBUSxFQUFDaUIsQ0FBQyxDQUFDakIsUUFBcEI7QUFBNkJELGdCQUFNLEVBQUNrQixDQUFDLENBQUNsQjtBQUF0QyxTQUFQO0FBQ0gsT0FGVyxDQUFaLENBWEEsQ0FjQTs7QUFDSSw2Q0FDT0ssS0FEUDtBQUVJTixXQUFHLEVBQUUsQ0FBQyxHQUFHaUIsR0FBSjtBQUZUOztBQU1KO0FBQ0ksYUFBT1gsS0FBUDtBQXZCUjtBQXlCSCxDQTFCRDs7QUE0QkEsK0RBQWVELE9BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNZ0IsR0FBRyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQW1CO0FBQzNCLFFBQU1DLFdBQVcsR0FBR0Msa0RBQVUsQ0FBQ3JCLG9EQUFELENBQTlCO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLEtBQUQ7QUFBQSxPQUFRbUI7QUFBUixNQUFvQkMsa0RBQVUsQ0FBQ3JCLG9EQUFELEVBQVVrQixXQUFWLENBQXBDO0FBRUEsc0JBQ0k7QUFBQSw0QkFDSSw4REFBQyxrREFBRDtBQUFBLDZCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUlJLDhEQUFDLDZEQUFEO0FBQWdCLFdBQUssRUFBRTtBQUFFakIsYUFBRjtBQUFTbUI7QUFBVCxPQUF2QjtBQUFBLDZCQUNJLDhEQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSko7QUFBQSxrQkFESjtBQVVILENBZEQ7O0FBZ0JBLCtEQUFlSixHQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IGluaXRhbFN0YXRlID0ge1xuICAgIEZBUTpbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFuc3dlcjondGVzdCcsXG4gICAgICAgICAgICBxdWVzdGlvbjondGVzdCcsXG4gICAgICAgIH1cbiAgICBdXG59XG5cbmNvbnN0IFN0b3JlID0gY3JlYXRlQ29udGV4dChpbml0YWxTdGF0ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlIiwiY29uc3QgcmVkdWNlciA9IChzdGF0ZSxhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xuICAgICAgICBjYXNlIFwiRkFRX0dFVFwiOiBcbiAgICBcbiAgICAgICAgY29uc3Qge3F1ZXN0aW9uLGFuc3dlcn0gPSBhY3Rpb24ucGF5bG9hZFxuXG4gICAgICAgIGNvbnN0IHBheWxvYWRMZW5ndGggPSBPYmplY3QuZW50cmllcyhhY3Rpb24ucGF5bG9hZClcblxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8cGF5bG9hZExlbmd0aC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXlsb2FkTGVuZ3RoW2ldWzFdKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCByc3QgPSByZXN1bHQubWFwKHY9PntcbiAgICAgICAgICAgIHJldHVybiB7aWQ6di5pZCxxdWVzdGlvbjp2LnF1ZXN0aW9uLGFuc3dlcjp2LmFuc3dlcn1cbiAgICAgICAgfSlcbiAgICAgICAgLy8gW11cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgRkFROiBbLi4ucnN0XVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIgIiwiaW1wb3J0ICcuLi9jc3MvaW5kZXguY3NzJ1xuaW1wb3J0ICcuLi9jc3MvdGFiLmNzcydcbmltcG9ydCAnLi4vY3NzL0NhbGN1bGF0b3IuY3NzJ1xuaW1wb3J0ICcuLi9jc3MvU3Vic2NyaXB0aW9uLmNzcydcbmltcG9ydCAnLi4vY3NzL0luY29tZS5jc3MnXG5pbXBvcnQgJy4uL2Nzcy9Ob3RpY2UuY3NzJ1xuaW1wb3J0ICcuLi9jc3MvU3VwcGx5LmNzcydcbmltcG9ydCAnLi4vY3NzL0ZhcS5jc3MnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgU3RvcmUgZnJvbSAnLi4vU3RvcmUvY29udGV4dCdcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL1N0b3JlL3JlZHVjZXInXG5cbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XG4gICAgY29uc3QgZ2xvYmFsU3RvcmUgPSB1c2VDb250ZXh0KFN0b3JlKVxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBnbG9iYWxTdG9yZSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+dGVzdDwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8U3RvcmUuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19PlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgLz5cbiAgICAgICAgICAgIDwvU3RvcmUuUHJvdmlkZXI+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9
=======
})();
>>>>>>> origin/merge2
