"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ IndexPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction IndexPage() {\n    _s();\n    const { data, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    if (status === \"loading\") return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \" loading... please wait\"\n    }, void 0, false, {\n        fileName: \"/Users/sneaky/Desktop/Codetrek/app/page.js\",\n        lineNumber: 5,\n        columnNumber: 35\n    }, this);\n    if (status === \"authenticated\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        \" hi \",\n                        data.user.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sneaky/Desktop/Codetrek/app/page.js\",\n                    lineNumber: 9,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: data.user.image,\n                    alt: data.user.name + \" photo\"\n                }, void 0, false, {\n                    fileName: \"/Users/sneaky/Desktop/Codetrek/app/page.js\",\n                    lineNumber: 10,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut,\n                    children: \"sign out\"\n                }, void 0, false, {\n                    fileName: \"/Users/sneaky/Desktop/Codetrek/app/page.js\",\n                    lineNumber: 11,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sneaky/Desktop/Codetrek/app/page.js\",\n            lineNumber: 8,\n            columnNumber: 4\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"github\"),\n                children: \"sign in with github\"\n            }, void 0, false, {\n                fileName: \"/Users/sneaky/Desktop/Codetrek/app/page.js\",\n                lineNumber: 17,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/sneaky/Desktop/Codetrek/app/page.js\",\n                lineNumber: 18,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"google\"),\n                children: \"sign in with google\"\n            }, void 0, false, {\n                fileName: \"/Users/sneaky/Desktop/Codetrek/app/page.js\",\n                lineNumber: 19,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sneaky/Desktop/Codetrek/app/page.js\",\n        lineNumber: 16,\n        columnNumber: 3\n    }, this);\n}\n_s(IndexPage, \"H1a9HdVcQdmPZqkUFV9G+j8pnzM=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = IndexPage;\nvar _c;\n$RefreshReg$(_c, \"IndexPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUM4RDtBQUMvQyxTQUFTRzs7SUFDdkIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRSxHQUFHTCwyREFBVUE7SUFDbkMsSUFBSUssV0FBVyxXQUFXLHFCQUFPLDhEQUFDQztrQkFBRzs7Ozs7O0lBQ3JDLElBQUlELFdBQVcsaUJBQWlCO1FBQy9CLHFCQUNDLDhEQUFDRTs7OEJBQ0EsOERBQUNEOzt3QkFBRzt3QkFBS0YsS0FBS0ksSUFBSSxDQUFDQyxJQUFJOzs7Ozs7OzhCQUN2Qiw4REFBQ0M7b0JBQUlDLEtBQUtQLEtBQUtJLElBQUksQ0FBQ0ksS0FBSztvQkFBRUMsS0FBS1QsS0FBS0ksSUFBSSxDQUFDQyxJQUFJLEdBQUc7Ozs7Ozs4QkFDakQsOERBQUNLO29CQUFPQyxTQUFTYixvREFBT0E7OEJBQUU7Ozs7Ozs7Ozs7OztJQUc3QjtJQUNBLHFCQUNDLDhEQUFDSzs7MEJBQ0EsOERBQUNPO2dCQUFPQyxTQUFTLElBQU1kLHVEQUFNQSxDQUFDOzBCQUFXOzs7Ozs7MEJBQ3pDLDhEQUFDZTs7Ozs7MEJBQ0QsOERBQUNGO2dCQUFPQyxTQUFTLElBQU1kLHVEQUFNQSxDQUFDOzBCQUFXOzs7Ozs7Ozs7Ozs7QUFHNUM7R0FuQndCRTs7UUFDRUgsdURBQVVBOzs7S0FEWkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduSW4sIHNpZ25PdXQgfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKCkge1xuXHRjb25zdCB7IGRhdGEsIHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpO1xuXHRpZiAoc3RhdHVzID09PSAnbG9hZGluZycpIHJldHVybiA8aDE+IGxvYWRpbmcuLi4gcGxlYXNlIHdhaXQ8L2gxPjtcblx0aWYgKHN0YXR1cyA9PT0gJ2F1dGhlbnRpY2F0ZWQnKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxoMT4gaGkge2RhdGEudXNlci5uYW1lfTwvaDE+XG5cdFx0XHRcdDxpbWcgc3JjPXtkYXRhLnVzZXIuaW1hZ2V9IGFsdD17ZGF0YS51c2VyLm5hbWUgKyAnIHBob3RvJ30gLz5cblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtzaWduT3V0fT5zaWduIG91dDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25JbignZ2l0aHViJyl9PnNpZ24gaW4gd2l0aCBnaXRodWI8L2J1dHRvbj5cblx0XHRcdDxiciAvPlxuXHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduSW4oJ2dvb2dsZScpfT5zaWduIGluIHdpdGggZ29vZ2xlPC9idXR0b24+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iXSwibmFtZXMiOlsidXNlU2Vzc2lvbiIsInNpZ25JbiIsInNpZ25PdXQiLCJJbmRleFBhZ2UiLCJkYXRhIiwic3RhdHVzIiwiaDEiLCJkaXYiLCJ1c2VyIiwibmFtZSIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwiYnV0dG9uIiwib25DbGljayIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});