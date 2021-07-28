self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Menu2/FAQ.jsx":
/*!**********************************!*\
  !*** ./components/Menu2/FAQ.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_user_OneDrive_All_about_AllAboutSHT_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\user\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\All about \uC2E0\uD76C\uD0C0\\AllAboutSHT\\components\\Menu2\\FAQ.jsx",
    _this = undefined;

function _templateObject() {
  var data = (0,C_Users_user_OneDrive_All_about_AllAboutSHT_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    background: ;\n    \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var menu = [{
  id: '1',
  category: '소득',
  url: '/faqs/1'
}, {
  id: '2',
  category: '자산',
  url: '/faqs/2'
}, {
  id: '3',
  category: '청약통장',
  url: '/faqs/3'
}, {
  id: '4',
  category: '기타',
  url: '/faqs/4'
}];

var FAQ = function FAQ() {
  var category = menu.map(function (v) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: v.url,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
          children: v.category
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 51
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 32
      }, _this)
    }, v.id, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 16
    }, _this);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
      children: category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_c = FAQ;
var FaqList = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.li(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (FAQ);

var _c;

$RefreshReg$(_c, "FAQ");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZW51Mi9GQVEuanN4Il0sIm5hbWVzIjpbIm1lbnUiLCJpZCIsImNhdGVnb3J5IiwidXJsIiwiRkFRIiwibWFwIiwidiIsIkZhcUxpc3QiLCJTdHlsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1Q7QUFDSUMsSUFBRSxFQUFDLEdBRFA7QUFFSUMsVUFBUSxFQUFDLElBRmI7QUFHSUMsS0FBRyxFQUFDO0FBSFIsQ0FEUyxFQU1UO0FBQ0lGLElBQUUsRUFBQyxHQURQO0FBRUlDLFVBQVEsRUFBQyxJQUZiO0FBR0lDLEtBQUcsRUFBQztBQUhSLENBTlMsRUFXVDtBQUNJRixJQUFFLEVBQUMsR0FEUDtBQUVJQyxVQUFRLEVBQUMsTUFGYjtBQUdJQyxLQUFHLEVBQUM7QUFIUixDQVhTLEVBZ0JUO0FBQ0lGLElBQUUsRUFBQyxHQURQO0FBRUlDLFVBQVEsRUFBQyxJQUZiO0FBR0lDLEtBQUcsRUFBQztBQUhSLENBaEJTLENBQWI7O0FBdUJBLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQUk7QUFDWixNQUFNRixRQUFRLEdBQUdGLElBQUksQ0FBQ0ssR0FBTCxDQUFTLFVBQUNDLENBQUQsRUFBSztBQUMzQix3QkFBTztBQUFBLDZCQUFnQiw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBRUEsQ0FBQyxDQUFDSCxHQUFkO0FBQUEsK0JBQW1CO0FBQUEsb0JBQUlHLENBQUMsQ0FBQ0o7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaEIsT0FBVUksQ0FBQyxDQUFDTCxFQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNILEdBRmdCLENBQWpCO0FBSUEsc0JBQ0k7QUFBQSwyQkFDSTtBQUFBLGdCQUNLQztBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQU9ILENBWkQ7O0tBQU1FLEc7QUFjTixJQUFNRyxPQUFPLEdBQUdDLHlEQUFILG1CQUFiO0FBS0EsK0RBQWVKLEdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTBmMzQ3ZDY0NmRiMzMxZGQxMzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgbWVudSA9IFtcbiAgICB7XG4gICAgICAgIGlkOicxJyxcbiAgICAgICAgY2F0ZWdvcnk6J+yGjOuTnScsXG4gICAgICAgIHVybDonL2ZhcXMvMSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6JzInLFxuICAgICAgICBjYXRlZ29yeTon7J6Q7IKwJyxcbiAgICAgICAgdXJsOicvZmFxcy8yJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBpZDonMycsXG4gICAgICAgIGNhdGVnb3J5Oifssq3slb3thrXsnqUnLFxuICAgICAgICB1cmw6Jy9mYXFzLzMnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOic0JyxcbiAgICAgICAgY2F0ZWdvcnk6J+q4sO2DgCcsXG4gICAgICAgIHVybDonL2ZhcXMvNCdcbiAgICB9XG5dXG5cbmNvbnN0IEZBUSA9ICgpPT57XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBtZW51Lm1hcCgodik9PntcbiAgICAgICAgcmV0dXJuIDxkaXYga2V5PXt2LmlkfT48TGluayBocmVmPXt2LnVybH0+PGE+e3YuY2F0ZWdvcnl9PC9hPjwvTGluaz48L2Rpdj5cbiAgICB9KVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtjYXRlZ29yeX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuY29uc3QgRmFxTGlzdCA9IFN0eWxlZC5saWBcbiAgICBiYWNrZ3JvdW5kOiA7XG4gICAgXG5gXG5cbmV4cG9ydCBkZWZhdWx0IEZBUSJdLCJzb3VyY2VSb290IjoiIn0=