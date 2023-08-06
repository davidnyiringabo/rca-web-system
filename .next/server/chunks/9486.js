"use strict";
exports.id = 9486;
exports.ids = [9486];
exports.modules = {

/***/ 7049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Hero_Hero)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/assets/playbutton.png
/* harmony default export */ const playbutton = ({"src":"/_next/static/media/playbutton.835e2595.png","height":31,"width":32,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAS0lEQVR42mNgYPjHyAAE/1ggNMM/JiDW/WcJYwNlgDj539N/lRAhiEDav8R/Xv/2/9NiYIAJJAEFDvzTQWh5AdMCMVTvnxXcUHRrAeK5LCx1EQGFAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(7495);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/Hero/Hero.tsx



const Hero = ({ pageTitle, heroContent })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full p-24 flex justify-between items-center bg-[url('/images/landingbg.JPG')] relative mt-[-3px]",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "left-content",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-6xl font-extrabold text-white pb-10",
                        children: pageTitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "w-1/2 leading-[2.5rem]    //  text-white   ",
                        children: heroContent
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-24 h-16 rounded-full border border-8 bg-[#523873] border-[#a9b5bd] flex justify-center items-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: playbutton,
                    alt: "",
                    className: "w-6 h-6"
                })
            })
        ]
    });
};
/* harmony default export */ const Hero_Hero = (Hero);


/***/ }),

/***/ 3796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1518);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const Sidemenu = ({ tabs, parent })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-[30rem] h-fit flex flex-col bg-slate-100",
        children: tabs.map((tab)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: `/${parent}/${tab.split(" ")[0]}`,
                className: "py-4 pl-4 border-b border-b-2 hover:bg-[#523873] active:bg-[#523873] active:text-white hover:text-white",
                children: tab
            });
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidemenu);


/***/ }),

/***/ 5403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/playbutton.835e2595.png","height":31,"width":32,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAS0lEQVR42mNgYPjHyAAE/1ggNMM/JiDW/WcJYwNlgDj539N/lRAhiEDav8R/Xv/2/9NiYIAJJAEFDvzTQWh5AdMCMVTvnxXcUHRrAeK5LCx1EQGFAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ })

};
;