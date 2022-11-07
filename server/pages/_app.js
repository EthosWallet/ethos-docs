"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7232:
/***/ (() => {

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/blur-cyan.d28a5585.png","height":1186,"width":1186,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAApUlEQVR42k2PwQ6CMBBEdxsJXuCGwgES6gfo/3+G1QAxYozeDKVw0HhztgHDJC/ZZqazLc0K2pGLxqmiHlRw/zItldW90ie7Lo2NBZmzalAkWjU9a9OJuQW7iQ0IqXVMubGqPHaxGNrYg1CaToMoRTPlZ6tgzoG9gNkHssphzfXFOIRSOxnAJn7F480kSmsnj5RQ5MGcXEbcXuo2MirBwPT8/L/5A88eZF6HfysDAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 8959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/blur-indigo.b752cf77.png","height":1134,"width":1132,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAgVBMVEW9wf+8u/m1uPy6tfuotv+kuP+rs/6rsverrv+dsf6erv2ZsfqPmP2Qlv2OlvuPlfuNlfaLlfiLlPiLlPeHkfuHkfqHkfmGkPmGkPiFkPmFkPeEkPiEkPaCjPiBjPmBjPiBjPiBi/iBjPiBjPeBi/iBi/eBjPeBjPeBjPeBi/eAjPh020NNAAAAK3RSTlMAAAAAAAAAAAAAAAABAQEBAQEBAQMDAwMDAwMDAwkJCQ8PEBAQEBgZJCQwNtSMpgAAAEFJREFUeNoFQMkNwCAMs3EQx7P7z9hPDxRRSEVVNd4+LfdOlnFarUVYaDq6kQylhABAyMyI7ZdWxl7zde2J+J7hP2EtGB3Aqjb5AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);



const styles = {
    primary: "rounded-full bg-[#6D28D9] py-2 px-4 text-sm font-semibold text-white",
    secondary: "rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white"
};
function Button({ variant ="primary" , className , href , ...props }) {
    className = clsx__WEBPACK_IMPORTED_MODULE_2___default()(styles[variant], className);
    return href ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: href,
        className: className,
        ...props
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: className,
        ...props
    });
}


/***/ }),

/***/ 641:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ Hero)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1608);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_future_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7096);
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prism_react_renderer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(484);
/* harmony import */ var _components_HeroBackground__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8254);
/* harmony import */ var _images_blur_cyan_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7232);
/* harmony import */ var _images_blur_indigo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8959);
/* harmony import */ var _TryItOut__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6178);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_TryItOut__WEBPACK_IMPORTED_MODULE_9__]);
_TryItOut__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const codeLanguage = "javascript";
const code = (/* unused pure expression or super */ null && (`export default {
  strategy: 'predictive',
  engine: {
    cpus: 12,
    backups: ['./storage/cache.wtf'],
  },
}`));
const tabs = [
    {
        name: "cache-advance.config.js",
        isActive: true
    },
    {
        name: "package.json",
        isActive: false
    }, 
];
function TrafficLightsIcon(props) {
    return /*#__PURE__*/ _jsxs("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 42 10",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ _jsx("circle", {
                cx: "5",
                cy: "5",
                r: "4.5"
            }),
            /*#__PURE__*/ _jsx("circle", {
                cx: "21",
                cy: "5",
                r: "4.5"
            }),
            /*#__PURE__*/ _jsx("circle", {
                cx: "37",
                cy: "5",
                r: "4.5"
            })
        ]
    });
}
function Hero() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "overflow-hidden bg-slate-900 dark:-mb-32 dark:mt-[-4.5rem] dark:pb-32 dark:pt-[4.5rem] dark:lg:mt-[-4.75rem] dark:lg:pt-[4.75rem]",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "py-16 sm:px-2 lg:relative lg:py-20 lg:px-0",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative z-10 md:text-center lg:text-left",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_future_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: "absolute bottom-full right-full -mr-72 -mb-56 opacity-50",
                                src: _images_blur_indigo_png__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                                alt: "",
                                width: 530,
                                height: 530,
                                unoptimized: true,
                                priority: true
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "inline bg-gradient-to-r from-purple-200 via-violet-400 to-purple-200 bg-clip-text font-display text-5xl tracking-tight text-transparent",
                                        children: "The easiest sign in experience on Sui."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mt-3 text-2xl tracking-tight text-slate-400",
                                        children: "EthosConnect will take your users from wallet-less to their first digital asset in seconds."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mt-8 flex gap-4 md:justify-center lg:justify-start",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                                                href: "/docs/installation",
                                                children: "Get started"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                                                href: "/docs/example-app",
                                                variant: "secondary",
                                                children: "See the example app"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative lg:static xl:pl-10",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute inset-x-[-50vw] -top-32 -bottom-48 [mask-image:linear-gradient(transparent,white,white)] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:left-[calc(50%+14rem)] lg:right-0 lg:-top-32 lg:-bottom-32 lg:[mask-image:none] lg:dark:[mask-image:linear-gradient(white,white,transparent)]"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_future_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        className: "absolute -top-64 -right-64",
                                        src: _images_blur_indigo_png__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                                        alt: "",
                                        width: 530,
                                        height: 530,
                                        unoptimized: true,
                                        priority: true
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_future_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        className: "absolute -bottom-52 right-64",
                                        src: _images_blur_indigo_png__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                                        alt: "",
                                        width: 567,
                                        height: 567,
                                        unoptimized: true,
                                        priority: true
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "absolute inset-0 rounded-2xl bg-gradient-to-tr from-violet-300 via-violet-300/70 to-purple-300 opacity-10 blur-lg"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "absolute inset-0 rounded-2xl bg-gradient-to-tr from-violet-300 via-violet-300/70 to-purple-300 opacity-10"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "relative rounded-2xl bg-[#0A101F]/80 ring-1 ring-white/10 backdrop-blur",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-violet-300/0 via-violet-300/70 to-violet-300/0"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-purple-400/0 via-purple-400 to-purple-400/0"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "px-4 py-4 h-72",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TryItOut__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export HeroBackground */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function HeroBackground(props) {
    let id = useId();
    return /*#__PURE__*/ _jsxs("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 668 1069",
        width: 668,
        height: 1069,
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ _jsx("defs", {
                children: /*#__PURE__*/ _jsx("clipPath", {
                    id: `${id}-clip-path`,
                    children: /*#__PURE__*/ _jsx("path", {
                        fill: "#fff",
                        transform: "rotate(-180 334 534.4)",
                        d: "M0 0h668v1068.8H0z"
                    })
                })
            }),
            /*#__PURE__*/ _jsxs("g", {
                opacity: ".4",
                clipPath: `url(#${id}-clip-path)`,
                strokeWidth: 4,
                children: [
                    /*#__PURE__*/ _jsx("path", {
                        opacity: ".3",
                        d: "M584.5 770.4v-474M484.5 770.4v-474M384.5 770.4v-474M283.5 769.4v-474M183.5 768.4v-474M83.5 767.4v-474",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M83.5 221.275v6.587a50.1 50.1 0 0 0 22.309 41.686l55.581 37.054a50.102 50.102 0 0 1 22.309 41.686v6.587M83.5 716.012v6.588a50.099 50.099 0 0 0 22.309 41.685l55.581 37.054a50.102 50.102 0 0 1 22.309 41.686v6.587M183.7 584.5v6.587a50.1 50.1 0 0 0 22.31 41.686l55.581 37.054a50.097 50.097 0 0 1 22.309 41.685v6.588M384.101 277.637v6.588a50.1 50.1 0 0 0 22.309 41.685l55.581 37.054a50.1 50.1 0 0 1 22.31 41.686v6.587M384.1 770.288v6.587a50.1 50.1 0 0 1-22.309 41.686l-55.581 37.054A50.099 50.099 0 0 0 283.9 897.3v6.588",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M384.1 770.288v6.587a50.1 50.1 0 0 1-22.309 41.686l-55.581 37.054A50.099 50.099 0 0 0 283.9 897.3v6.588M484.3 594.937v6.587a50.1 50.1 0 0 1-22.31 41.686l-55.581 37.054A50.1 50.1 0 0 0 384.1 721.95v6.587M484.3 872.575v6.587a50.1 50.1 0 0 1-22.31 41.686l-55.581 37.054a50.098 50.098 0 0 0-22.309 41.686v6.582M584.501 663.824v39.988a50.099 50.099 0 0 1-22.31 41.685l-55.581 37.054a50.102 50.102 0 0 0-22.309 41.686v6.587M283.899 945.637v6.588a50.1 50.1 0 0 1-22.309 41.685l-55.581 37.05a50.12 50.12 0 0 0-22.31 41.69v6.59M384.1 277.637c0 19.946 12.763 37.655 31.686 43.962l137.028 45.676c18.923 6.308 31.686 24.016 31.686 43.962M183.7 463.425v30.69c0 21.564 13.799 40.709 34.257 47.529l134.457 44.819c18.922 6.307 31.686 24.016 31.686 43.962M83.5 102.288c0 19.515 13.554 36.412 32.604 40.645l235.391 52.309c19.05 4.234 32.605 21.13 32.605 40.646M83.5 463.425v-58.45M183.699 542.75V396.625M283.9 1068.8V945.637M83.5 363.225v-141.95M83.5 179.524v-77.237M83.5 60.537V0M384.1 630.425V277.637M484.301 830.824V594.937M584.5 1068.8V663.825M484.301 555.275V452.988M584.5 622.075V452.988M384.1 728.537v-56.362M384.1 1068.8v-20.88M384.1 1006.17V770.287M283.9 903.888V759.85M183.699 1066.71V891.362M83.5 1068.8V716.012M83.5 674.263V505.175",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ _jsx("circle", {
                        cx: "83.5",
                        cy: "384.1",
                        r: "10.438",
                        transform: "rotate(-180 83.5 384.1)",
                        fill: "#1E293B",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ _jsx("circle", {
                        cx: "83.5",
                        cy: "200.399",
                        r: "10.438",
                        transform: "rotate(-180 83.5 200.399)",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ _jsx("circle", {
                        cx: "83.5",
                        cy: "81.412",
                        r: "10.438",
                        transform: "rotate(-180 83.5 81.412)",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ _jsx("circle", {
                        cx: "183.699",
                        cy: "375.75",
                        r: "10.438",
                        transform: "rotate(-180 183.699 375.75)",
                        fill: "#1E293B",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ _jsx("circle", {
                        cx: "183.699",
                        cy: "563.625",
                        r: "10.438",
                        transform: "rotate(-180 183.699 563.625)",
                        fill: "#1E293B",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ _jsx("circle", {
                        cx: "384.1",
                        cy: "651.3",
                        r: "10.438",
                        transform: "rotate(-180 384.1 651.3)",
                        fill: "#1E293B",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ _jsx("circle", {
                        cx: "484.301",
                        cy: "574.062",
                        r: "10.438",
                        transform: "rotate(-180 484.301 574.062)",
                        fill: "#0EA5E9",
                        fillOpacity: ".42",
                        stroke: "#0EA5E9"
                    }),
                    /*#__PURE__*/ _jsx("circle", {
                        cx: "384.1",
                        cy: "749.412",
                        r: "10.438",
                        transform: "rotate(-180 384.1 749.412)",
                        fill: "#1E293B",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ _jsx("circle", {
                        cx: "384.1",
                        cy: "1027.05",
                        r: "10.438",
                        transform: "rotate(-180 384.1 1027.05)",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ _jsx("circle", {
                        cx: "283.9",
                        cy: "924.763",
                        r: "10.438",
                        transform: "rotate(-180 283.9 924.763)",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ _jsx("circle", {
                        cx: "183.699",
                        cy: "870.487",
                        r: "10.438",
                        transform: "rotate(-180 183.699 870.487)",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ _jsx("circle", {
                        cx: "283.9",
                        cy: "738.975",
                        r: "10.438",
                        transform: "rotate(-180 283.9 738.975)",
                        fill: "#1E293B",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ _jsx("circle", {
                        cx: "83.5",
                        cy: "695.138",
                        r: "10.438",
                        transform: "rotate(-180 83.5 695.138)",
                        fill: "#1E293B",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ _jsx("circle", {
                        cx: "83.5",
                        cy: "484.3",
                        r: "10.438",
                        transform: "rotate(-180 83.5 484.3)",
                        fill: "#0EA5E9",
                        fillOpacity: ".42",
                        stroke: "#0EA5E9"
                    }),
                    /*#__PURE__*/ _jsx("circle", {
                        cx: "484.301",
                        cy: "432.112",
                        r: "10.438",
                        transform: "rotate(-180 484.301 432.112)",
                        fill: "#1E293B",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ _jsx("circle", {
                        cx: "584.5",
                        cy: "432.112",
                        r: "10.438",
                        transform: "rotate(-180 584.5 432.112)",
                        fill: "#1E293B",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ _jsx("circle", {
                        cx: "584.5",
                        cy: "642.95",
                        r: "10.438",
                        transform: "rotate(-180 584.5 642.95)",
                        fill: "#1E293B",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ _jsx("circle", {
                        cx: "484.301",
                        cy: "851.699",
                        r: "10.438",
                        transform: "rotate(-180 484.301 851.699)",
                        stroke: "#334155"
                    }),
                    /*#__PURE__*/ _jsx("circle", {
                        cx: "384.1",
                        cy: "256.763",
                        r: "10.438",
                        transform: "rotate(-180 384.1 256.763)",
                        stroke: "#334155"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 461:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1608);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_future_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(641);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7501);
/* harmony import */ var _components_MobileNavigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6067);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(929);
/* harmony import */ var _components_Prose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1104);
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8765);
/* harmony import */ var _components_ThemeSelector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2651);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Hero__WEBPACK_IMPORTED_MODULE_6__, _components_MobileNavigation__WEBPACK_IMPORTED_MODULE_8__, _components_ThemeSelector__WEBPACK_IMPORTED_MODULE_12__]);
([_components_Hero__WEBPACK_IMPORTED_MODULE_6__, _components_MobileNavigation__WEBPACK_IMPORTED_MODULE_8__, _components_ThemeSelector__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const navigation = [
    {
        title: "Overview",
        links: [
            {
                title: "Introduction",
                href: "/"
            },
            {
                title: "Example app",
                href: "/docs/example-app"
            },
            {
                title: "How it works",
                href: "/docs/how-it-works"
            }, 
        ]
    },
    {
        title: "Getting started",
        links: [
            {
                title: "Installation",
                href: "/docs/installation"
            },
            {
                title: "Sign in button",
                href: "/docs/sign-in-button"
            },
            {
                title: "Theming",
                href: "/docs/theming"
            }, 
        ]
    },
    {
        title: "API reference",
        links: [
            {
                title: "Hooks",
                href: "/docs/hooks"
            },
            {
                title: "Sign in options",
                href: "/docs/sign-in-options"
            },
            {
                title: "Convenience methods",
                href: "/docs/convenience-methods"
            },
            {
                title: "Preapprovals",
                href: "/docs/preapprovals"
            }, 
        ]
    }, 
];
function GitHubIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 16 16",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
        })
    });
}
function Header({ navigation  }) {
    let { 0: isScrolled , 1: setIsScrolled  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        function onScroll() {
            setIsScrolled(window.scrollY > 0);
        }
        onScroll();
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        return ()=>{
            window.removeEventListener("scroll", onScroll, {
                passive: true
            });
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: clsx__WEBPACK_IMPORTED_MODULE_4___default()("sticky top-0 z-50 flex flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8", isScrolled ? "dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75" : "dark:bg-transparent"),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mr-6 flex lg:hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MobileNavigation__WEBPACK_IMPORTED_MODULE_8__/* .MobileNavigation */ .$, {
                    navigation: navigation
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative flex flex-grow basis-0 items-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/",
                    "aria-label": "Home page",
                    className: "flex flex-row gap-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_7__/* .Logomark */ .c, {
                            className: "h-9 w-9 lg:hidden"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_7__/* .Logo */ .T, {
                            className: "hidden h-9 w-auto fill-slate-700 dark:fill-violet-100 lg:block"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "-my-5 mr-6 sm:mr-8 md:mr-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Search__WEBPACK_IMPORTED_MODULE_11__/* .Search */ .o, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ThemeSelector__WEBPACK_IMPORTED_MODULE_12__/* .ThemeSelector */ .Y, {
                        className: "relative z-10"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "https://github.com/EthosWallet/react-api",
                        className: "group",
                        "aria-label": "GitHub",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GitHubIcon, {
                            className: "h-6 w-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300"
                        })
                    })
                ]
            })
        ]
    });
}
function useTableOfContents(tableOfContents) {
    let { 0: currentSection , 1: setCurrentSection  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(tableOfContents[0]?.id);
    let getHeadings = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((tableOfContents)=>{
        return tableOfContents.flatMap((node)=>[
                node.id,
                ...node.children.map((child)=>child.id)
            ]).map((id)=>{
            let el = document.getElementById(id);
            if (!el) return;
            let style = window.getComputedStyle(el);
            let scrollMt = parseFloat(style.scrollMarginTop);
            let top = window.scrollY + el.getBoundingClientRect().top - scrollMt;
            return {
                id,
                top
            };
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (tableOfContents.length === 0) return;
        let headings = getHeadings(tableOfContents);
        function onScroll() {
            let top = window.scrollY;
            let current = headings[0].id;
            for (let heading of headings){
                if (top >= heading.top) {
                    current = heading.id;
                } else {
                    break;
                }
            }
            setCurrentSection(current);
        }
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        onScroll();
        return ()=>{
            window.removeEventListener("scroll", onScroll, {
                passive: true
            });
        };
    }, [
        getHeadings,
        tableOfContents
    ]);
    return currentSection;
}
function Layout({ children , title , tableOfContents  }) {
    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    let isHomePage = router.pathname === "/";
    let allLinks = navigation.flatMap((section)=>section.links);
    let linkIndex = allLinks.findIndex((link)=>link.href === router.pathname);
    let previousPage = allLinks[linkIndex - 1];
    let nextPage = allLinks[linkIndex + 1];
    let section = navigation.find((section)=>section.links.find((link)=>link.href === router.pathname));
    let currentSection = useTableOfContents(tableOfContents);
    function isActive(section) {
        if (section.id === currentSection) {
            return true;
        }
        if (!section.children) {
            return false;
        }
        return section.children.findIndex(isActive) > -1;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {
                navigation: navigation
            }),
            isHomePage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_6__/* .Hero */ .V, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "hidden lg:relative lg:block lg:flex-none",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute top-16 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute top-28 bottom-0 right-0 hidden w-px bg-slate-800 dark:block"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto overflow-x-hidden py-16 pl-0.5",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_9__/* .Navigation */ .W, {
                                    navigation: navigation,
                                    className: "w-64 pr-8 xl:w-72 xl:pr-16"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                                children: [
                                    (title || section) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                                        className: "mb-9 space-y-1",
                                        children: [
                                            section && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "font-display text-sm font-medium text-violet-500",
                                                children: section.title
                                            }),
                                            title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "font-display text-3xl tracking-tight text-slate-900 dark:text-white",
                                                children: title
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Prose__WEBPACK_IMPORTED_MODULE_10__/* .Prose */ .M, {
                                        children: children
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dl", {
                                className: "mt-12 flex border-t border-slate-200 pt-6 dark:border-slate-800",
                                children: [
                                    previousPage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                className: "font-display text-sm font-medium text-slate-900 dark:text-white",
                                                children: "Previous"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                className: "mt-1",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: previousPage.href,
                                                    className: "text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            "aria-hidden": "true",
                                                            children: "←"
                                                        }),
                                                        " ",
                                                        previousPage.title
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    nextPage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "ml-auto text-right",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                className: "font-display text-sm font-medium text-slate-900 dark:text-white",
                                                children: "Next"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                className: "mt-1",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: nextPage.href,
                                                    className: "text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300",
                                                    children: [
                                                        nextPage.title,
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            "aria-hidden": "true",
                                                            children: "→"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                            "aria-labelledby": "on-this-page-title",
                            className: "w-56",
                            children: tableOfContents.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        id: "on-this-page-title",
                                        className: "font-display text-sm font-medium text-slate-900 dark:text-white",
                                        children: "On this page"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ol", {
                                        role: "list",
                                        className: "mt-4 space-y-3 text-sm",
                                        children: tableOfContents.map((section)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            href: `#${section.id}`,
                                                            className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(isActive(section) ? "text-violet-500" : "font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"),
                                                            children: section.title
                                                        })
                                                    }),
                                                    section.children.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ol", {
                                                        role: "list",
                                                        className: "mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400",
                                                        children: section.children.map((subSection)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                    href: `#${subSection.id}`,
                                                                    className: isActive(subSection) ? "text-violet-500" : "hover:text-slate-600 dark:hover:text-slate-300",
                                                                    children: subSection.title
                                                                })
                                                            }, subSection.id))
                                                    })
                                                ]
                                            }, section.id))
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* binding */ Logo),
  "c": () => (/* binding */ Logomark)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/images/logo-icon-light-theme.svg
var _path, _path2, _defs;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgLogoIconLightTheme = props => /*#__PURE__*/external_react_.createElement("svg", _extends({
  width: 36,
  height: 36,
  viewBox: "0 0 93 94",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img"
}, props), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
  d: "M8.454 2.127h54.103c2.49 0 4.509 2.02 4.509 4.51v61.052c0 2.49-2.019 4.509-4.51 4.509H8.455a4.51 4.51 0 0 1-4.509-4.51V6.637a4.51 4.51 0 0 1 4.51-4.509Z",
  stroke: "url(#logo-icon-light-theme_svg__a)",
  strokeWidth: 4
})), _path2 || (_path2 = /*#__PURE__*/external_react_.createElement("path", {
  d: "m6.411 5.11 36.855 17.15a4.51 4.51 0 0 1 2.607 4.088v60.42c0 3.262-3.359 5.445-6.34 4.12L2.678 74.514A4.51 4.51 0 0 1 0 70.394V9.198c0-3.297 3.422-5.48 6.411-4.088Z",
  fill: "#000"
})), _defs || (_defs = /*#__PURE__*/external_react_.createElement("defs", null, /*#__PURE__*/external_react_.createElement("linearGradient", {
  id: "logo-icon-light-theme_svg__a",
  x1: 67.066,
  y1: 20.777,
  x2: 22.545,
  y2: 40.736,
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/external_react_.createElement("stop", null), /*#__PURE__*/external_react_.createElement("stop", {
  offset: 0.76,
  stopOpacity: 0
})))));
/* harmony default export */ const logo_icon_light_theme = (SvgLogoIconLightTheme);
;// CONCATENATED MODULE: ./src/images/logo-text-light-theme.svg
var logo_text_light_theme_path;
function logo_text_light_theme_extends() { logo_text_light_theme_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return logo_text_light_theme_extends.apply(this, arguments); }

const SvgLogoTextLightTheme = props => /*#__PURE__*/external_react_.createElement("svg", logo_text_light_theme_extends({
  width: 100,
  height: 32,
  viewBox: "0 0 184 51",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img"
}, props), logo_text_light_theme_path || (logo_text_light_theme_path = /*#__PURE__*/external_react_.createElement("path", {
  d: "M3.408 50c-.853 0-1.579-.277-2.176-.832C.677 48.571.4 47.845.4 46.992V3.024c0-.896.277-1.621.832-2.176C1.829.293 2.555.016 3.408.016h29.376c.853 0 1.557.277 2.112.832.555.512.832 1.195.832 2.048 0 .768-.277 1.43-.832 1.984-.555.512-1.259.768-2.112.768H6.416v16.384h19.008c.896 0 1.6.277 2.112.832.555.512.832 1.173.832 1.984 0 .81-.277 1.493-.832 2.048-.512.512-1.216.768-2.112.768H6.416v16.704h26.368c.853 0 1.557.277 2.112.832.555.512.832 1.152.832 1.92 0 .853-.277 1.557-.832 2.112-.555.512-1.259.768-2.112.768H3.408Zm54.097 0c-2.176 0-4.139-.533-5.888-1.6a11.645 11.645 0 0 1-4.096-4.416c-.981-1.877-1.472-4.01-1.472-6.4V6.8c0-.853.256-1.557.768-2.112.555-.555 1.259-.832 2.112-.832.853 0 1.557.277 2.112.832.555.555.832 1.259.832 2.112v30.784c0 1.92.533 3.499 1.6 4.736 1.067 1.237 2.41 1.856 4.032 1.856h1.984c.725 0 1.323.277 1.792.832.512.555.768 1.259.768 2.112 0 .853-.32 1.557-.96 2.112-.597.512-1.387.768-2.368.768h-1.216ZM42.593 21.328c-.768 0-1.408-.235-1.92-.704-.512-.47-.768-1.067-.768-1.792 0-.768.256-1.387.768-1.856.512-.47 1.152-.704 1.92-.704h15.424c.768 0 1.408.235 1.92.704.512.47.768 1.088.768 1.856 0 .725-.256 1.323-.768 1.792-.512.47-1.152.704-1.92.704H42.593Zm30.423 15.36c-.853 0-1.557-.277-2.112-.832-.554-.597-.831-1.323-.831-2.176V2.96c0-.896.277-1.6.832-2.112.554-.555 1.258-.832 2.111-.832.896 0 1.6.277 2.112.832.555.512.832 1.216.832 2.112v30.72c0 .853-.277 1.579-.831 2.176-.513.555-1.217.832-2.113.832Zm26.816 13.376c-.853 0-1.578-.277-2.175-.832a3.001 3.001 0 0 1-.832-2.112V30.992c0-2.517-.47-4.565-1.409-6.144-.938-1.621-2.197-2.816-3.775-3.584-1.58-.81-3.392-1.216-5.44-1.216-1.92 0-3.648.384-5.184 1.152-1.536.768-2.774 1.792-3.712 3.072-.897 1.28-1.345 2.752-1.345 4.416h-3.84c.043-2.688.726-5.077 2.048-7.168 1.323-2.133 3.115-3.797 5.376-4.992 2.262-1.237 4.8-1.856 7.617-1.856 2.986 0 5.653.64 8 1.92 2.346 1.237 4.202 3.072 5.568 5.504 1.365 2.432 2.048 5.397 2.048 8.896V47.12c0 .81-.299 1.515-.896 2.112-.555.555-1.238.832-2.049.832Zm-26.816 0c-.853 0-1.557-.277-2.112-.832-.554-.555-.831-1.259-.831-2.112V17.936c0-.896.277-1.6.832-2.112.554-.555 1.258-.832 2.111-.832.896 0 1.6.277 2.112.832.555.512.832 1.216.832 2.112V47.12c0 .853-.277 1.557-.831 2.112-.513.555-1.217.832-2.113.832Zm56.491.192c-3.413 0-6.464-.747-9.152-2.24a17.013 17.013 0 0 1-6.272-6.272c-1.493-2.688-2.24-5.76-2.24-9.216 0-3.499.747-6.57 2.24-9.216 1.536-2.688 3.627-4.779 6.272-6.272 2.688-1.536 5.739-2.304 9.152-2.304 3.413 0 6.443.768 9.088 2.304a15.837 15.837 0 0 1 6.272 6.272c1.536 2.645 2.325 5.717 2.368 9.216 0 3.456-.768 6.528-2.304 9.216a17.013 17.013 0 0 1-6.272 6.272c-2.645 1.493-5.696 2.24-9.152 2.24Zm0-5.248c2.347 0 4.416-.533 6.208-1.6 1.792-1.067 3.2-2.539 4.224-4.416 1.024-1.877 1.536-4.032 1.536-6.464 0-2.432-.512-4.587-1.536-6.464-1.024-1.92-2.432-3.413-4.224-4.48-1.792-1.067-3.861-1.6-6.208-1.6-2.304 0-4.373.533-6.208 1.6-1.792 1.067-3.2 2.56-4.224 4.48-1.024 1.877-1.536 4.032-1.536 6.464 0 2.432.512 4.587 1.536 6.464 1.024 1.877 2.432 3.35 4.224 4.416 1.835 1.067 3.904 1.6 6.208 1.6Zm39.922 5.248c-2.816 0-5.483-.427-8-1.28-2.517-.896-4.501-2.112-5.952-3.648-.555-.64-.789-1.344-.704-2.112.085-.768.469-1.43 1.152-1.984.725-.555 1.472-.79 2.24-.704a2.865 2.865 0 0 1 1.92 1.024c.853.939 2.091 1.75 3.712 2.432 1.664.683 3.477 1.024 5.44 1.024 2.773 0 4.821-.448 6.144-1.344 1.365-.939 2.069-2.09 2.112-3.456 0-1.408-.661-2.581-1.984-3.52-1.323-.981-3.648-1.75-6.976-2.304-4.309-.81-7.445-2.07-9.408-3.776-1.963-1.707-2.944-3.776-2.944-6.208 0-2.176.597-3.968 1.792-5.376 1.237-1.45 2.837-2.517 4.8-3.2 2.005-.725 4.117-1.088 6.336-1.088 2.816 0 5.291.47 7.424 1.408 2.133.896 3.84 2.155 5.12 3.776.555.64.789 1.301.704 1.984-.043.683-.384 1.259-1.024 1.728-.64.384-1.387.512-2.24.384a3.454 3.454 0 0 1-2.048-1.088c-1.067-1.11-2.261-1.877-3.584-2.304-1.28-.47-2.773-.704-4.48-.704-2.048 0-3.755.384-5.12 1.152-1.323.768-1.984 1.813-1.984 3.136 0 .853.213 1.6.64 2.24.469.64 1.323 1.237 2.56 1.792 1.237.512 3.008.981 5.312 1.408 3.2.597 5.717 1.387 7.552 2.368 1.877.981 3.221 2.133 4.032 3.456.811 1.323 1.216 2.816 1.216 4.48 0 1.963-.555 3.733-1.664 5.312-1.067 1.536-2.624 2.752-4.672 3.648-2.048.896-4.523 1.344-7.424 1.344Z",
  fill: "#000"
})));
/* harmony default export */ const logo_text_light_theme = (SvgLogoTextLightTheme);
;// CONCATENATED MODULE: ./src/images/logo-icon-dark-theme.svg
var logo_icon_dark_theme_path, logo_icon_dark_theme_path2, logo_icon_dark_theme_defs;
function logo_icon_dark_theme_extends() { logo_icon_dark_theme_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return logo_icon_dark_theme_extends.apply(this, arguments); }

const SvgLogoIconDarkTheme = props => /*#__PURE__*/external_react_.createElement("svg", logo_icon_dark_theme_extends({
  width: 36,
  height: 36,
  viewBox: "0 0 93 94",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img"
}, props), logo_icon_dark_theme_path || (logo_icon_dark_theme_path = /*#__PURE__*/external_react_.createElement("path", {
  d: "M8.454 2.127h54.103c2.49 0 4.509 2.02 4.509 4.51v61.052c0 2.49-2.019 4.509-4.51 4.509H8.455a4.51 4.51 0 0 1-4.509-4.51V6.637a4.51 4.51 0 0 1 4.51-4.509Z",
  stroke: "url(#logo-icon-dark-theme_svg__a)",
  strokeWidth: 4
})), logo_icon_dark_theme_path2 || (logo_icon_dark_theme_path2 = /*#__PURE__*/external_react_.createElement("path", {
  d: "m6.411 5.11 36.855 17.15a4.51 4.51 0 0 1 2.607 4.088v60.42c0 3.262-3.359 5.445-6.34 4.12L2.678 74.514A4.51 4.51 0 0 1 0 70.394V9.198c0-3.297 3.422-5.48 6.411-4.088Z",
  fill: "#9C78F7"
})), logo_icon_dark_theme_defs || (logo_icon_dark_theme_defs = /*#__PURE__*/external_react_.createElement("defs", null, /*#__PURE__*/external_react_.createElement("linearGradient", {
  id: "logo-icon-dark-theme_svg__a",
  x1: 67.066,
  y1: 20.777,
  x2: 22.545,
  y2: 40.736,
  gradientUnits: "userSpaceOnUse"
}, /*#__PURE__*/external_react_.createElement("stop", {
  stopColor: "#9C78F7"
}), /*#__PURE__*/external_react_.createElement("stop", {
  offset: 0.76,
  stopColor: "#9C78F7",
  stopOpacity: 0
})))));
/* harmony default export */ const logo_icon_dark_theme = (SvgLogoIconDarkTheme);
;// CONCATENATED MODULE: ./src/images/logo-text-dark-theme.svg
var logo_text_dark_theme_path;
function logo_text_dark_theme_extends() { logo_text_dark_theme_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return logo_text_dark_theme_extends.apply(this, arguments); }

const SvgLogoTextDarkTheme = props => /*#__PURE__*/external_react_.createElement("svg", logo_text_dark_theme_extends({
  width: 100,
  height: 32,
  viewBox: "0 0 184 51",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img"
}, props), logo_text_dark_theme_path || (logo_text_dark_theme_path = /*#__PURE__*/external_react_.createElement("path", {
  d: "M3.408 50c-.853 0-1.579-.277-2.176-.832C.677 48.571.4 47.845.4 46.992V3.024c0-.896.277-1.621.832-2.176C1.829.293 2.555.016 3.408.016h29.376c.853 0 1.557.277 2.112.832.555.512.832 1.195.832 2.048 0 .768-.277 1.43-.832 1.984-.555.512-1.259.768-2.112.768H6.416v16.384h19.008c.896 0 1.6.277 2.112.832.555.512.832 1.173.832 1.984 0 .81-.277 1.493-.832 2.048-.512.512-1.216.768-2.112.768H6.416v16.704h26.368c.853 0 1.557.277 2.112.832.555.512.832 1.152.832 1.92 0 .853-.277 1.557-.832 2.112-.555.512-1.259.768-2.112.768H3.408Zm54.097 0c-2.176 0-4.139-.533-5.888-1.6a11.645 11.645 0 0 1-4.096-4.416c-.981-1.877-1.472-4.01-1.472-6.4V6.8c0-.853.256-1.557.768-2.112.555-.555 1.259-.832 2.112-.832.853 0 1.557.277 2.112.832.555.555.832 1.259.832 2.112v30.784c0 1.92.533 3.499 1.6 4.736 1.067 1.237 2.41 1.856 4.032 1.856h1.984c.725 0 1.323.277 1.792.832.512.555.768 1.259.768 2.112 0 .853-.32 1.557-.96 2.112-.597.512-1.387.768-2.368.768h-1.216ZM42.593 21.328c-.768 0-1.408-.235-1.92-.704-.512-.47-.768-1.067-.768-1.792 0-.768.256-1.387.768-1.856.512-.47 1.152-.704 1.92-.704h15.424c.768 0 1.408.235 1.92.704.512.47.768 1.088.768 1.856 0 .725-.256 1.323-.768 1.792-.512.47-1.152.704-1.92.704H42.593Zm30.423 15.36c-.853 0-1.557-.277-2.112-.832-.554-.597-.831-1.323-.831-2.176V2.96c0-.896.277-1.6.832-2.112.554-.555 1.258-.832 2.111-.832.896 0 1.6.277 2.112.832.555.512.832 1.216.832 2.112v30.72c0 .853-.277 1.579-.831 2.176-.513.555-1.217.832-2.113.832Zm26.816 13.376c-.853 0-1.578-.277-2.175-.832a3.001 3.001 0 0 1-.832-2.112V30.992c0-2.517-.47-4.565-1.409-6.144-.938-1.621-2.197-2.816-3.775-3.584-1.58-.81-3.392-1.216-5.44-1.216-1.92 0-3.648.384-5.184 1.152-1.536.768-2.774 1.792-3.712 3.072-.897 1.28-1.345 2.752-1.345 4.416h-3.84c.043-2.688.726-5.077 2.048-7.168 1.323-2.133 3.115-3.797 5.376-4.992 2.262-1.237 4.8-1.856 7.617-1.856 2.986 0 5.653.64 8 1.92 2.346 1.237 4.202 3.072 5.568 5.504 1.365 2.432 2.048 5.397 2.048 8.896V47.12c0 .81-.299 1.515-.896 2.112-.555.555-1.238.832-2.049.832Zm-26.816 0c-.853 0-1.557-.277-2.112-.832-.554-.555-.831-1.259-.831-2.112V17.936c0-.896.277-1.6.832-2.112.554-.555 1.258-.832 2.111-.832.896 0 1.6.277 2.112.832.555.512.832 1.216.832 2.112V47.12c0 .853-.277 1.557-.831 2.112-.513.555-1.217.832-2.113.832Zm56.491.192c-3.413 0-6.464-.747-9.152-2.24a17.013 17.013 0 0 1-6.272-6.272c-1.493-2.688-2.24-5.76-2.24-9.216 0-3.499.747-6.57 2.24-9.216 1.536-2.688 3.627-4.779 6.272-6.272 2.688-1.536 5.739-2.304 9.152-2.304 3.413 0 6.443.768 9.088 2.304a15.837 15.837 0 0 1 6.272 6.272c1.536 2.645 2.325 5.717 2.368 9.216 0 3.456-.768 6.528-2.304 9.216a17.013 17.013 0 0 1-6.272 6.272c-2.645 1.493-5.696 2.24-9.152 2.24Zm0-5.248c2.347 0 4.416-.533 6.208-1.6 1.792-1.067 3.2-2.539 4.224-4.416 1.024-1.877 1.536-4.032 1.536-6.464 0-2.432-.512-4.587-1.536-6.464-1.024-1.92-2.432-3.413-4.224-4.48-1.792-1.067-3.861-1.6-6.208-1.6-2.304 0-4.373.533-6.208 1.6-1.792 1.067-3.2 2.56-4.224 4.48-1.024 1.877-1.536 4.032-1.536 6.464 0 2.432.512 4.587 1.536 6.464 1.024 1.877 2.432 3.35 4.224 4.416 1.835 1.067 3.904 1.6 6.208 1.6Zm39.922 5.248c-2.816 0-5.483-.427-8-1.28-2.517-.896-4.501-2.112-5.952-3.648-.555-.64-.789-1.344-.704-2.112.085-.768.469-1.43 1.152-1.984.725-.555 1.472-.79 2.24-.704a2.865 2.865 0 0 1 1.92 1.024c.853.939 2.091 1.75 3.712 2.432 1.664.683 3.477 1.024 5.44 1.024 2.773 0 4.821-.448 6.144-1.344 1.365-.939 2.069-2.09 2.112-3.456 0-1.408-.661-2.581-1.984-3.52-1.323-.981-3.648-1.75-6.976-2.304-4.309-.81-7.445-2.07-9.408-3.776-1.963-1.707-2.944-3.776-2.944-6.208 0-2.176.597-3.968 1.792-5.376 1.237-1.45 2.837-2.517 4.8-3.2 2.005-.725 4.117-1.088 6.336-1.088 2.816 0 5.291.47 7.424 1.408 2.133.896 3.84 2.155 5.12 3.776.555.64.789 1.301.704 1.984-.043.683-.384 1.259-1.024 1.728-.64.384-1.387.512-2.24.384a3.454 3.454 0 0 1-2.048-1.088c-1.067-1.11-2.261-1.877-3.584-2.304-1.28-.47-2.773-.704-4.48-.704-2.048 0-3.755.384-5.12 1.152-1.323.768-1.984 1.813-1.984 3.136 0 .853.213 1.6.64 2.24.469.64 1.323 1.237 2.56 1.792 1.237.512 3.008.981 5.312 1.408 3.2.597 5.717 1.387 7.552 2.368 1.877.981 3.221 2.133 4.032 3.456.811 1.323 1.216 2.816 1.216 4.48 0 1.963-.555 3.733-1.664 5.312-1.067 1.536-2.624 2.752-4.672 3.648-2.048.896-4.523 1.344-7.424 1.344Z",
  fill: "#9C78F7"
})));
/* harmony default export */ const logo_text_dark_theme = (SvgLogoTextDarkTheme);
;// CONCATENATED MODULE: ./src/components/Logo.jsx





function Logomark(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "dark:hidden",
                children: /*#__PURE__*/ jsx_runtime_.jsx(logo_icon_light_theme, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hidden dark:block",
                children: /*#__PURE__*/ jsx_runtime_.jsx(logo_icon_dark_theme, {})
            })
        ]
    });
}
function Logo(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "dark:hidden",
                children: /*#__PURE__*/ jsx_runtime_.jsx(logo_text_light_theme, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hidden dark:block",
                children: /*#__PURE__*/ jsx_runtime_.jsx(logo_text_dark_theme, {})
            })
        ]
    });
}


/***/ }),

/***/ 6067:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ MobileNavigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1185);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7501);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(929);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_4__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function MenuIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 24 24",
        fill: "none",
        strokeWidth: "2",
        strokeLinecap: "round",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M4 7h16M4 12h16M4 17h16"
        })
    });
}
function CloseIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 24 24",
        fill: "none",
        strokeWidth: "2",
        strokeLinecap: "round",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M5 5l14 14M19 5l-14 14"
        })
    });
}
function MobileNavigation({ navigation  }) {
    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    let { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!isOpen) return;
        function onRouteChange() {
            setIsOpen(false);
        }
        router.events.on("routeChangeComplete", onRouteChange);
        router.events.on("routeChangeError", onRouteChange);
        return ()=>{
            router.events.off("routeChangeComplete", onRouteChange);
            router.events.off("routeChangeError", onRouteChange);
        };
    }, [
        router,
        isOpen
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                onClick: ()=>setIsOpen(true),
                className: "relative",
                "aria-label": "Open navigation",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MenuIcon, {
                    className: "h-6 w-6 stroke-slate-500"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Dialog, {
                open: isOpen,
                onClose: setIsOpen,
                className: "fixed inset-0 z-50 flex items-start overflow-y-auto bg-slate-900/50 pr-10 backdrop-blur lg:hidden",
                "aria-label": "Navigation",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Dialog.Panel, {
                    className: "min-h-full w-full max-w-xs bg-white px-4 pt-5 pb-12 dark:bg-slate-900 sm:px-6",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    onClick: ()=>setIsOpen(false),
                                    "aria-label": "Close navigation",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CloseIcon, {
                                        className: "h-6 w-6 stroke-slate-500"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/",
                                    className: "ml-6",
                                    "aria-label": "Home page",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_5__/* .Logomark */ .c, {
                                        className: "h-9 w-9"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_6__/* .Navigation */ .W, {
                            navigation: navigation,
                            className: "mt-5 px-1"
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);




function Navigation({ navigation , className  }) {
    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("text-base lg:text-sm", className),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            role: "list",
            className: "space-y-9",
            children: navigation.map((section)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "font-display font-medium text-slate-900 dark:text-white",
                            children: section.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            role: "list",
                            className: "mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200",
                            children: section.links.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "relative",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: link.href,
                                        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full", link.href === router.pathname ? "font-semibold text-violet-500 before:bg-violet-500" : "text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"),
                                        children: link.title
                                    })
                                }, link.href))
                        })
                    ]
                }, section.title))
        })
    });
}


/***/ }),

/***/ 1104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ Prose)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);


function Prose({ as: Component = "div" , className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(className, "prose prose-slate max-w-none dark:prose-invert dark:text-slate-400", // headings
        "prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem]", // lead
        "prose-lead:text-slate-500 dark:prose-lead:text-slate-400", // links
        "prose-a:font-semibold dark:prose-a:text-violet-400", // link underline
        "prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,theme(colors.violet.300))] hover:prose-a:[--tw-prose-underline-size:6px] dark:[--tw-prose-background:theme(colors.slate.900)] dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.violet.800))] dark:hover:prose-a:[--tw-prose-underline-size:6px]", // pre
        "prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:shadow-lg dark:prose-pre:bg-slate-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-slate-300/10", // hr
        "dark:prose-hr:border-slate-800"),
        ...props
    });
}


/***/ }),

/***/ 8765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o": () => (/* binding */ Search)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-dom"
const external_react_dom_namespaceObject = require("react-dom");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: external "@docsearch/react"
const react_namespaceObject = require("@docsearch/react");
;// CONCATENATED MODULE: ./src/components/Search.jsx






const docSearchConfig = {
    appId: process.env.NEXT_PUBLIC_DOCSEARCH_APP_ID,
    apiKey: process.env.NEXT_PUBLIC_DOCSEARCH_API_KEY,
    indexName: process.env.NEXT_PUBLIC_DOCSEARCH_INDEX_NAME
};
function Hit({ hit , children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: hit.url,
        children: children
    });
}
function SearchIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 20 20",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M16.293 17.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM9 14a5 5 0 0 1-5-5H2a7 7 0 0 0 7 7v-2ZM4 9a5 5 0 0 1 5-5V2a7 7 0 0 0-7 7h2Zm5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7v2Zm8.707 12.293-3.757-3.757-1.414 1.414 3.757 3.757 1.414-1.414ZM14 9a4.98 4.98 0 0 1-1.464 3.536l1.414 1.414A6.98 6.98 0 0 0 16 9h-2Zm-1.464 3.536A4.98 4.98 0 0 1 9 14v2a6.98 6.98 0 0 0 4.95-2.05l-1.414-1.414Z"
        })
    });
}
function Search() {
    let { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    let { 0: modifierKey , 1: setModifierKey  } = (0,external_react_.useState)();
    const onOpen = (0,external_react_.useCallback)(()=>{
        setIsOpen(true);
    }, [
        setIsOpen
    ]);
    const onClose = (0,external_react_.useCallback)(()=>{
        setIsOpen(false);
    }, [
        setIsOpen
    ]);
    (0,react_namespaceObject.useDocSearchKeyboardEvents)({
        isOpen,
        onOpen,
        onClose
    });
    (0,external_react_.useEffect)(()=>{
        setModifierKey(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "⌘" : "Ctrl ");
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                type: "button",
                className: "group flex h-6 w-6 items-center justify-center sm:justify-start md:h-auto md:w-80 md:flex-none md:rounded-lg md:py-2.5 md:pl-4 md:pr-3.5 md:text-sm md:ring-1 md:ring-slate-200 md:hover:ring-slate-300 dark:md:bg-slate-800/75 dark:md:ring-inset dark:md:ring-white/5 dark:md:hover:bg-slate-700/40 dark:md:hover:ring-slate-500 lg:w-96",
                onClick: onOpen,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SearchIcon, {
                        className: "h-5 w-5 flex-none fill-slate-400 group-hover:fill-slate-500 dark:fill-slate-500 md:group-hover:fill-slate-400"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "sr-only md:not-sr-only md:ml-2 md:text-slate-500 md:dark:text-slate-400",
                        children: "Search docs"
                    }),
                    modifierKey && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("kbd", {
                        className: "ml-auto hidden font-medium text-slate-400 dark:text-slate-500 md:block",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("kbd", {
                                className: "font-sans",
                                children: modifierKey
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("kbd", {
                                className: "font-sans",
                                children: "K"
                            })
                        ]
                    })
                ]
            }),
            isOpen && /*#__PURE__*/ (0,external_react_dom_namespaceObject.createPortal)(/*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.DocSearchModal, {
                ...docSearchConfig,
                initialScrollY: window.scrollY,
                onClose: onClose,
                hitComponent: Hit,
                navigator: {
                    navigate ({ itemUrl  }) {
                        router_default().push(itemUrl);
                    }
                }
            }), document.body)
        ]
    });
}


/***/ }),

/***/ 2651:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ ThemeSelector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const themes = [
    {
        name: "Light",
        value: "light",
        icon: LightIcon
    },
    {
        name: "Dark",
        value: "dark",
        icon: DarkIcon
    },
    {
        name: "System",
        value: "system",
        icon: SystemIcon
    }, 
];
function LightIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 16 16",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7 1a1 1 0 0 1 2 0v1a1 1 0 1 1-2 0V1Zm4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm2.657-5.657a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm-1.415 11.313-.707-.707a1 1 0 0 1 1.415-1.415l.707.708a1 1 0 0 1-1.415 1.414ZM16 7.999a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1ZM7 14a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm-2.536-2.464a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm0-8.486A1 1 0 0 1 3.05 4.464l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707ZM3 8a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Z"
        })
    });
}
function DarkIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 16 16",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7.23 3.333C7.757 2.905 7.68 2 7 2a6 6 0 1 0 0 12c.68 0 .758-.905.23-1.332A5.989 5.989 0 0 1 5 8c0-1.885.87-3.568 2.23-4.668ZM12 5a1 1 0 0 1 1 1 1 1 0 0 0 1 1 1 1 0 1 1 0 2 1 1 0 0 0-1 1 1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 1 1 0-2 1 1 0 0 0 1-1 1 1 0 0 1 1-1Z"
        })
    });
}
function SystemIcon(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 16 16",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1.5l.31 1.242c.084.333.36.573.63.808.091.08.182.158.264.24A1 1 0 0 1 11 15H5a1 1 0 0 1-.704-1.71c.082-.082.173-.16.264-.24.27-.235.546-.475.63-.808L5.5 11H4a3 3 0 0 1-3-3V4Zm3-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z"
        })
    });
}
function ThemeSelector(props) {
    let { 0: selectedTheme , 1: setSelectedTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (selectedTheme) {
            document.documentElement.setAttribute("data-theme", selectedTheme.value);
        } else {
            setSelectedTheme(themes.find((theme)=>theme.value === document.documentElement.getAttribute("data-theme")));
        }
    }, [
        selectedTheme
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let handler = ()=>setSelectedTheme(themes.find((theme)=>theme.value === (window.localStorage.theme ?? "system")));
        window.addEventListener("storage", handler);
        return ()=>window.removeEventListener("storage", handler);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox, {
        as: "div",
        value: selectedTheme,
        onChange: setSelectedTheme,
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox.Label, {
                className: "sr-only",
                children: "Theme"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox.Button, {
                className: "flex h-6 w-6 items-center justify-center rounded-lg shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5",
                "aria-label": selectedTheme?.name,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LightIcon, {
                        className: "hidden h-4 w-4 fill-violet-400 [[data-theme=light]_&]:block"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DarkIcon, {
                        className: "hidden h-4 w-4 fill-violet-400 [[data-theme=dark]_&]:block"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LightIcon, {
                        className: "hidden h-4 w-4 fill-slate-400 [:not(.dark)[data-theme=system]_&]:block"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DarkIcon, {
                        className: "hidden h-4 w-4 fill-slate-400 [.dark[data-theme=system]_&]:block"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox.Options, {
                className: "absolute top-full left-1/2 mt-3 w-36 -translate-x-1/2 space-y-1 rounded-xl bg-white p-3 text-sm font-medium shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-800 dark:ring-white/5",
                children: themes.map((theme)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox.Option, {
                        value: theme,
                        className: ({ active , selected  })=>clsx__WEBPACK_IMPORTED_MODULE_3___default()("flex cursor-pointer select-none items-center rounded-[0.625rem] p-1", {
                                "text-violet-500": selected,
                                "text-slate-900 dark:text-white": active && !selected,
                                "text-slate-700 dark:text-slate-400": !active && !selected,
                                "bg-slate-100 dark:bg-slate-900/40": active
                            }),
                        children: ({ selected  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "rounded-md bg-white p-1 shadow ring-1 ring-slate-900/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(theme.icon, {
                                            className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("h-4 w-4", selected ? "fill-violet-400 dark:fill-violet-400" : "fill-slate-400")
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "ml-3",
                                        children: theme.name
                                    })
                                ]
                            })
                    }, theme.value))
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6178:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ethos_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9170);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ethos_connect__WEBPACK_IMPORTED_MODULE_1__]);
ethos_connect__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const TryItOut = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex space-x-2 text-xs",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex h-6 rounded-full bg-gradient-to-r from-violet-400/30 via-violet-400 to-violet-400/30 p-px font-medium text-violet-300",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex items-center rounded-full px-2.5 bg-slate-800",
                        children: "Try it out"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid place-items-center h-60",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ethos_connect__WEBPACK_IMPORTED_MODULE_1__.SignInButton, {
                    className: "rounded-full bg-[#6D28D9] py-2 px-4 text-sm font-semibold text-white"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TryItOut);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7149:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sindresorhus_slugify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5272);
/* harmony import */ var ethos_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9170);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(461);
/* harmony import */ var focus_visible__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2235);
/* harmony import */ var focus_visible__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(focus_visible__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sindresorhus_slugify__WEBPACK_IMPORTED_MODULE_2__, ethos_connect__WEBPACK_IMPORTED_MODULE_3__, _components_Layout__WEBPACK_IMPORTED_MODULE_4__]);
([_sindresorhus_slugify__WEBPACK_IMPORTED_MODULE_2__, ethos_connect__WEBPACK_IMPORTED_MODULE_3__, _components_Layout__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function getNodeText(node) {
    let text = "";
    for (let child of node.children ?? []){
        if (typeof child === "string") {
            text += child;
        }
        text += getNodeText(child);
    }
    return text;
}
function collectHeadings(nodes, slugify = (0,_sindresorhus_slugify__WEBPACK_IMPORTED_MODULE_2__.slugifyWithCounter)()) {
    let sections = [];
    for (let node of nodes){
        if (node.name === "h2" || node.name === "h3") {
            let title = getNodeText(node);
            if (title) {
                let id = slugify(title);
                node.attributes.id = id;
                if (node.name === "h3") {
                    if (!sections[sections.length - 1]) {
                        throw new Error("Cannot add `h3` to table of contents without a preceding `h2`");
                    }
                    sections[sections.length - 1].children.push({
                        ...node.attributes,
                        title
                    });
                } else {
                    sections.push({
                        ...node.attributes,
                        title,
                        children: []
                    });
                }
            }
        }
        sections.push(...collectHeadings(node.children ?? [], slugify));
    }
    return sections;
}
const ethosConfiguration = {
    appId: "ethos-docs"
};
const onWalletConnected = (provider, signer)=>{
    console.log("provider :>> ", provider);
    console.log("signer :>> ", signer);
// your code, probably updating component state with the signer
};
function App({ Component , pageProps  }) {
    let title = pageProps.markdoc?.frontmatter.title;
    let pageTitle = pageProps.markdoc?.frontmatter.pageTitle || `${pageProps.markdoc?.frontmatter.title} - Docs`;
    let description = pageProps.markdoc?.frontmatter.description;
    let tableOfContents = pageProps.markdoc?.content ? collectHeadings(pageProps.markdoc.content) : [];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ethos_connect__WEBPACK_IMPORTED_MODULE_3__.EthosWrapper, {
        ethosConfiguration: ethosConfiguration,
        onWalletConnected: ({ provider , signer  })=>onWalletConnected(provider, signer),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: pageTitle
                    }),
                    description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: description
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__/* .Layout */ .A, {
                title: title,
                tableOfContents: tableOfContents,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 2235:
/***/ ((module) => {

module.exports = require("focus-visible");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 7096:
/***/ ((module) => {

module.exports = require("prism-react-renderer");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 5272:
/***/ ((module) => {

module.exports = import("@sindresorhus/slugify");;

/***/ }),

/***/ 9170:
/***/ ((module) => {

module.exports = import("ethos-connect");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,608], () => (__webpack_exec__(7149)));
module.exports = __webpack_exports__;

})();