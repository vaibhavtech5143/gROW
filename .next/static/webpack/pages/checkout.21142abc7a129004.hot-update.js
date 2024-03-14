"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/checkout",{

/***/ "./pages/checkout.js":
/*!***************************!*\
  !*** ./pages/checkout.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ checkout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CheckoutComp_Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CheckoutComp/Cart */ \"./components/CheckoutComp/Cart.js\");\n/* harmony import */ var _components_CheckoutComp_OrderDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CheckoutComp/OrderDetails */ \"./components/CheckoutComp/OrderDetails.js\");\n/* harmony import */ var _components_CheckoutComp_OrderStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CheckoutComp/OrderStatus */ \"./components/CheckoutComp/OrderStatus.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction checkout() {\n    _s();\n    const [activeStep, setActiveStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [checkoutCompleted, setCheckoutCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const steps = [\n        {\n            label: \"Shopping Cart\",\n            Component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CheckoutComp_Cart__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vaibh\\\\Desktop\\\\Grow Assignment\\\\checkout-vaibhav\\\\pages\\\\checkout.js\",\n                lineNumber: 16,\n                columnNumber: 41\n            }, this)\n        },\n        {\n            label: \"Order Status\",\n            Component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CheckoutComp_OrderStatus__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vaibh\\\\Desktop\\\\Grow Assignment\\\\checkout-vaibhav\\\\pages\\\\checkout.js\",\n                lineNumber: 17,\n                columnNumber: 40\n            }, this)\n        },\n        {\n            label: \"Order Status\",\n            Component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CheckoutComp_OrderStatus__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vaibh\\\\Desktop\\\\Grow Assignment\\\\checkout-vaibhav\\\\pages\\\\checkout.js\",\n                lineNumber: 18,\n                columnNumber: 40\n            }, this)\n        }\n    ];\n    const handleStepChange = (index)=>{\n        setActiveStep(index);\n    };\n    const handleFinishCheckout = ()=>{\n        // Implement checkout completion logic here\n        setCheckoutCompleted(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[90%] mx-auto my-[10vh]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-between items-center relative my-[10vh] -z-50\",\n                children: steps.map((step, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                        children: [\n                            index !== 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-[0.2vh] bg-gray-500 left-[15%] w-[69%] mx-auto absolute -z-50\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\vaibh\\\\Desktop\\\\Grow Assignment\\\\checkout-vaibhav\\\\pages\\\\checkout.js\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col md:flex-row justify-center items-center  px-[2vh] bg-white space-y-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"md:text-[2.4vh] flex flex-row  items-center justify-center font-semibold rounded-full \".concat(activeStep > index || checkoutCompleted && index === activeStep ? \"bg-green-700 text-white\" : \"bg-[#B88E2F] text-white\", \" w-[5vh] h-[5vh] mr-[1.5vh]\"),\n                                        children: activeStep > index || checkoutCompleted && index === activeStep ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"flex flex-row justify-center items-center\",\n                                            children: \"✓\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\vaibh\\\\Desktop\\\\Grow Assignment\\\\checkout-vaibhav\\\\pages\\\\checkout.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 19\n                                        }, this) : index + 1\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\vaibh\\\\Desktop\\\\Grow Assignment\\\\checkout-vaibhav\\\\pages\\\\checkout.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"md:text-[2.8vh] flex flex-row justify-center items-center text-center mx-auto font-medium \".concat(activeStep > index || checkoutCompleted && index === activeStep ? \"text-green-700\" : \"bg-white\"),\n                                        children: step.label\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\vaibh\\\\Desktop\\\\Grow Assignment\\\\checkout-vaibhav\\\\pages\\\\checkout.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\vaibh\\\\Desktop\\\\Grow Assignment\\\\checkout-vaibhav\\\\pages\\\\checkout.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, step.label, true, {\n                        fileName: \"C:\\\\Users\\\\vaibh\\\\Desktop\\\\Grow Assignment\\\\checkout-vaibhav\\\\pages\\\\checkout.js\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vaibh\\\\Desktop\\\\Grow Assignment\\\\checkout-vaibhav\\\\pages\\\\checkout.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: steps[activeStep].Component\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\vaibh\\\\Desktop\\\\Grow Assignment\\\\checkout-vaibhav\\\\pages\\\\checkout.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-end mt-4\",\n                children: [\n                    activeStep > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handleStepChange(activeStep - 1),\n                        className: \"bg-[#B88E2F] text-white px-4 py-2 rounded-md mr-4\",\n                        children: \"Back\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vaibh\\\\Desktop\\\\Grow Assignment\\\\checkout-vaibhav\\\\pages\\\\checkout.js\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, this),\n                    activeStep < steps.length - 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handleStepChange(activeStep + 1),\n                        className: \"bg-[#B88E2F] text-white px-4 py-2 rounded-md\",\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vaibh\\\\Desktop\\\\Grow Assignment\\\\checkout-vaibhav\\\\pages\\\\checkout.js\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, this),\n                    activeStep === steps.length - 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleFinishCheckout,\n                        className: \"bg-[#B88E2F] text-white px-4 py-2 rounded-md\",\n                        children: \"Finish\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\vaibh\\\\Desktop\\\\Grow Assignment\\\\checkout-vaibhav\\\\pages\\\\checkout.js\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\vaibh\\\\Desktop\\\\Grow Assignment\\\\checkout-vaibhav\\\\pages\\\\checkout.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\vaibh\\\\Desktop\\\\Grow Assignment\\\\checkout-vaibhav\\\\pages\\\\checkout.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(checkout, \"lnjo1Ng3Ot8iMgfJULP7Je4i8ec=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGVja291dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ0E7QUFDZ0I7QUFDRjtBQUN6QjtBQUNBO0FBQ3lCO0FBQ3BDO0FBRWQsU0FBU1U7O0lBRXRCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHViwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNXLG1CQUFtQkMscUJBQXFCLEdBQUdaLCtDQUFRQSxDQUFDO0lBRTNELE1BQU1hLFFBQVE7UUFDWjtZQUFFQyxPQUFPO1lBQWlCZix5QkFBVSw4REFBQ0UscUVBQUlBOzs7OztRQUFHO1FBQzVDO1lBQUVhLE9BQU87WUFBZ0JmLHlCQUFVLDhEQUFDSSw0RUFBV0E7Ozs7O1FBQUc7UUFDbEQ7WUFBRVcsT0FBTztZQUFnQmYseUJBQVUsOERBQUNJLDRFQUFXQTs7Ozs7UUFBRztLQUNuRDtJQUVELE1BQU1ZLG1CQUFtQixDQUFDQztRQUN4Qk4sY0FBY007SUFDaEI7SUFFQSxNQUFNQyx1QkFBdUI7UUFDM0IsMkNBQTJDO1FBQzNDTCxxQkFBcUI7SUFDdkI7SUFFQSxxQkFDRSw4REFBQ007UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaTixNQUFNTyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUwsc0JBQ2hCLDhEQUFDbEIsdURBQWM7OzRCQUNaa0IsVUFBVSxtQkFDVCw4REFBQ0U7Z0NBQUlDLFdBQVU7Ozs7OzswQ0FFakIsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0k7d0NBQ0NKLFdBQVcseUZBSVYsT0FIQyxhQUFjSCxTQUFVTCxxQkFBcUJLLFVBQVVQLGFBQ25ELDRCQUNBLDJCQUNMO2tEQUVBQSxhQUFhTyxTQUFVTCxxQkFBcUJLLFVBQVVQLDJCQUNyRCw4REFBQ2U7NENBQUtMLFdBQVU7c0RBQTRDOzs7OzttREFJNURILFFBQVE7Ozs7OztrREFHWiw4REFBQ1M7d0NBQ0NOLFdBQVcsNkZBSVYsT0FIQyxhQUFjSCxTQUFVTCxxQkFBcUJLLFVBQVVQLGFBQ25ELG1CQUNBO2tEQUdMWSxLQUFLUCxLQUFLOzs7Ozs7Ozs7Ozs7O3VCQTNCSU8sS0FBS1AsS0FBSzs7Ozs7Ozs7OzswQkFrQ25DLDhEQUFDSTswQkFBS0wsS0FBSyxDQUFDSixXQUFXLENBQUNWLFNBQVM7Ozs7OzswQkFFakMsOERBQUNtQjtnQkFBSUMsV0FBVTs7b0JBQ1pWLGFBQWEsbUJBQ1osOERBQUNpQjt3QkFDQ0MsU0FBUyxJQUFNWixpQkFBaUJOLGFBQWE7d0JBQzdDVSxXQUFVO2tDQUNYOzs7Ozs7b0JBSUZWLGFBQWFJLE1BQU1lLE1BQU0sR0FBRyxtQkFDM0IsOERBQUNGO3dCQUNDQyxTQUFTLElBQU1aLGlCQUFpQk4sYUFBYTt3QkFDN0NVLFdBQVU7a0NBQ1g7Ozs7OztvQkFJRlYsZUFBZUksTUFBTWUsTUFBTSxHQUFHLG1CQUM3Qiw4REFBQ0Y7d0JBQ0NDLFNBQVNWO3dCQUNURSxXQUFVO2tDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQXhGd0JYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NoZWNrb3V0LmpzP2UwMWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hlY2tvdXRDb21wL0NhcnRcIjtcclxuaW1wb3J0IE9yZGVyRGV0YWlscyBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGVja291dENvbXAvT3JkZXJEZXRhaWxzXCI7XHJcbmltcG9ydCBPcmRlclN0YXR1cyBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGVja291dENvbXAvT3JkZXJTdGF0dXNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoZWNrb3V0KCkge1xyXG4gICAgXHJcbiAgY29uc3QgW2FjdGl2ZVN0ZXAsIHNldEFjdGl2ZVN0ZXBdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2NoZWNrb3V0Q29tcGxldGVkLCBzZXRDaGVja291dENvbXBsZXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHN0ZXBzID0gW1xyXG4gICAgeyBsYWJlbDogXCJTaG9wcGluZyBDYXJ0XCIsIENvbXBvbmVudDo8Q2FydC8+IH0sXHJcbiAgICB7IGxhYmVsOiBcIk9yZGVyIFN0YXR1c1wiLCBDb21wb25lbnQ6PE9yZGVyU3RhdHVzLz4gfSxcclxuICAgIHsgbGFiZWw6IFwiT3JkZXIgU3RhdHVzXCIsIENvbXBvbmVudDo8T3JkZXJTdGF0dXMvPiB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN0ZXBDaGFuZ2UgPSAoaW5kZXgpID0+IHtcclxuICAgIHNldEFjdGl2ZVN0ZXAoaW5kZXgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZpbmlzaENoZWNrb3V0ID0gKCkgPT4ge1xyXG4gICAgLy8gSW1wbGVtZW50IGNoZWNrb3V0IGNvbXBsZXRpb24gbG9naWMgaGVyZVxyXG4gICAgc2V0Q2hlY2tvdXRDb21wbGV0ZWQodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bOTAlXSBteC1hdXRvIG15LVsxMHZoXVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciByZWxhdGl2ZSBteS1bMTB2aF0gLXotNTBcIj5cclxuICAgICAgICB7c3RlcHMubWFwKChzdGVwLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17c3RlcC5sYWJlbH0+XHJcbiAgICAgICAgICAgIHtpbmRleCAhPT0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVswLjJ2aF0gYmctZ3JheS01MDAgbGVmdC1bMTUlXSB3LVs2OSVdIG14LWF1dG8gYWJzb2x1dGUgLXotNTBcIj48L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciAgcHgtWzJ2aF0gYmctd2hpdGUgc3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1kOnRleHQtWzIuNHZoXSBmbGV4IGZsZXgtcm93ICBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZm9udC1zZW1pYm9sZCByb3VuZGVkLWZ1bGwgJHtcclxuICAgICAgICAgICAgICAgICAgKGFjdGl2ZVN0ZXAgPiBpbmRleCB8fCAoY2hlY2tvdXRDb21wbGV0ZWQgJiYgaW5kZXggPT09IGFjdGl2ZVN0ZXApKVxyXG4gICAgICAgICAgICAgICAgICAgID8gXCJiZy1ncmVlbi03MDAgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcImJnLVsjQjg4RTJGXSB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgIH0gdy1bNXZoXSBoLVs1dmhdIG1yLVsxLjV2aF1gfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHthY3RpdmVTdGVwID4gaW5kZXggfHwgKGNoZWNrb3V0Q29tcGxldGVkICYmIGluZGV4ID09PSBhY3RpdmVTdGVwKSA/IChcclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAmIzEwMDAzO1xyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICBpbmRleCArIDFcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxoMlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbWQ6dGV4dC1bMi44dmhdIGZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtY2VudGVyIG14LWF1dG8gZm9udC1tZWRpdW0gJHtcclxuICAgICAgICAgICAgICAgICAgKGFjdGl2ZVN0ZXAgPiBpbmRleCB8fCAoY2hlY2tvdXRDb21wbGV0ZWQgJiYgaW5kZXggPT09IGFjdGl2ZVN0ZXApKVxyXG4gICAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LWdyZWVuLTcwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcImJnLXdoaXRlXCJcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtzdGVwLmxhYmVsfVxyXG4gICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2PntzdGVwc1thY3RpdmVTdGVwXS5Db21wb25lbnR9PC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmQgbXQtNFwiPlxyXG4gICAgICAgIHthY3RpdmVTdGVwID4gMCAmJiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVN0ZXBDaGFuZ2UoYWN0aXZlU3RlcCAtIDEpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bI0I4OEUyRl0gdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZC1tZCBtci00XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQmFja1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7YWN0aXZlU3RlcCA8IHN0ZXBzLmxlbmd0aCAtIDEgJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdGVwQ2hhbmdlKGFjdGl2ZVN0ZXAgKyAxKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctWyNCODhFMkZdIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHthY3RpdmVTdGVwID09PSBzdGVwcy5sZW5ndGggLSAxICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRmluaXNoQ2hlY2tvdXR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLVsjQjg4RTJGXSB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkLW1kXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgRmluaXNoXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJ1c2VTdGF0ZSIsIkNhcnQiLCJPcmRlckRldGFpbHMiLCJPcmRlclN0YXR1cyIsInVzZVJvdXRlciIsInRvYXN0IiwiRm9udEF3ZXNvbWVJY29uIiwiTGluayIsImNoZWNrb3V0IiwiYWN0aXZlU3RlcCIsInNldEFjdGl2ZVN0ZXAiLCJjaGVja291dENvbXBsZXRlZCIsInNldENoZWNrb3V0Q29tcGxldGVkIiwic3RlcHMiLCJsYWJlbCIsImhhbmRsZVN0ZXBDaGFuZ2UiLCJpbmRleCIsImhhbmRsZUZpbmlzaENoZWNrb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwic3RlcCIsIkZyYWdtZW50IiwicCIsInNwYW4iLCJoMiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/checkout.js\n"));

/***/ })

});