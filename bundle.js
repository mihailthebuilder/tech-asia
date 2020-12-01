/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/components/articles/articles.scss":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/components/articles/articles.scss ***!
  \***********************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports
;

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".article-section {\n  font-family: \"Roboto\";\n  padding: 2rem 5rem 5rem 5rem;\n  max-width: 60rem;\n}\n.article-section h1 {\n  margin-bottom: 1rem;\n  color: #6c0604;\n}\n\n#subheading {\n  font-size: 1rem;\n  margin-bottom: 2rem;\n  font-weight: bold;\n}\n\nfigure {\n  margin: 2rem 0;\n}\nfigure img {\n  max-height: 70vh;\n  max-width: 100%;\n}\nfigure figcaption {\n  font-size: 1rem;\n  color: #474952;\n}\n\n@media (max-width: 576px) {\n  .article-section {\n    padding: 1rem;\n  }\n  .article-section p {\n    font-size: 1rem;\n  }\n  .article-section h1 {\n    margin-top: 0;\n    font-size: 1.4rem;\n  }\n  .article-section figure {\n    margin: 1rem 0;\n  }\n  .article-section figure figcaption {\n    font-size: 0.8rem;\n  }\n\n  #subheading {\n    font-size: 0.9rem;\n    margin-bottom: 1.5rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/articles/articles.scss"],"names":[],"mappings":"AAcA;EACE,qBAAA;EACA,4BAAA;EACA,gBAAA;AAbF;AAeE;EACE,mBAAA;EACA,cAjBQ;AAIZ;;AAiBA;EACE,eAAA;EACA,mBAAA;EACA,iBAAA;AAdF;;AAiBA;EACE,cAAA;AAdF;AAgBE;EACE,gBAAA;EACA,eAAA;AAdJ;AAiBE;EACE,eAAA;EACA,cAAA;AAfJ;;AAmBA;EACE;IACE,aAtCkB;EAsBpB;EAkBE;IACE,eAAA;EAhBJ;EAmBE;IACE,aAAA;IACA,iBAAA;EAjBJ;EAoBE;IACE,cAAA;EAlBJ;EAoBI;IACE,iBAAA;EAlBN;;EAuBA;IACE,iBAAA;IACA,qBAAA;EApBF;AACF","sourcesContent":["$gray: hsla(230, 7%, 84%, 1);\n$dark-green: hsla(177, 100%, 4%, 1);\n$chinese-red: hsla(15, 87%, 34%, 1);\n$gold: hsla(42, 79%, 54%, 1);\n$blood-red: hsla(1, 93%, 22%, 1);\n$transparent-gray: hsla(0, 0%, 97%, 1);\n$transparent-red: hsla(15, 87%, 34%, 0.7);\n\n$site-padding-left: 2rem;\n$mobile-padding-left: 1rem;\n\n$tablet-screen: 768px;\n$mobile-screen: 576px;\n\n.article-section {\n  font-family: \"Roboto\";\n  padding: 2rem 5rem 5rem 5rem;\n  max-width: 60rem;\n\n  h1 {\n    margin-bottom: 1rem;\n    color: $blood-red;\n  }\n}\n\n#subheading {\n  font-size: 1rem;\n  margin-bottom: 2rem;\n  font-weight: bold;\n}\n\nfigure {\n  margin: 2rem 0;\n\n  img {\n    max-height: 70vh;\n    max-width: 100%;\n  }\n\n  figcaption {\n    font-size: 1rem;\n    color: hsla(230, 7%, 30%, 1);\n  }\n}\n\n@media (max-width: $mobile-screen) {\n  .article-section {\n    padding: $mobile-padding-left;\n\n    p {\n      font-size: 1rem;\n    }\n\n    h1 {\n      margin-top: 0;\n      font-size: 1.4rem;\n    }\n\n    figure {\n      margin: 1rem 0;\n\n      figcaption {\n        font-size: 0.8rem;\n      }\n    }\n  }\n\n  #subheading {\n    font-size: 0.9rem;\n    margin-bottom: 1.5rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/components/contact/contact.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/components/contact/contact.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports
;

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#contact-section {\n  padding: 4rem 0;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: rgba(162, 49, 11, 0.7);\n}\n#contact-section > div {\n  background: #f7f7f7;\n  padding: 3rem 7rem;\n  width: 40rem;\n}\n#contact-section h1 {\n  text-align: center;\n}\n#contact-section form * {\n  font-size: 1.2rem;\n  font-family: \"Roboto\";\n}\n#contact-section form {\n  margin-top: 5rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem 2rem;\n  opacity: 1;\n  transition: opacity 0.5s;\n}\n#contact-section form .fullRow {\n  grid-column-start: 1;\n  grid-column-end: span 2;\n}\n#contact-section form input,\n#contact-section form textarea {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n#contact-section form input {\n  padding-top: 0.6rem;\n  padding-bottom: 0.6rem;\n}\n#contact-section form textarea {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n#contact-section form label,\n#contact-section form select {\n  display: block;\n}\n#contact-section form label {\n  margin-bottom: 0.5rem;\n}\n#contact-section form select {\n  padding: 0.5rem 0.5rem;\n  width: 100%;\n  color: #4f4f4f;\n}\n#contact-section form button {\n  margin-top: 1rem;\n  padding: 1rem 0;\n  background: rgba(162, 49, 11, 0.7);\n  color: white;\n  border-color: #001413;\n  border-radius: 0.3rem;\n  font-size: 1.5rem;\n  border-style: solid;\n  width: 15rem;\n  cursor: pointer;\n}\n#contact-section form button:hover {\n  color: #e6af2d;\n  background: #001413;\n  border-color: #e6af2d;\n}\n#contact-section #submitted {\n  margin: 10rem 0;\n  background: #001413;\n  color: #e6af2d;\n  text-align: center;\n  padding: 1.5rem 2.5rem;\n  border-style: solid;\n  border-radius: 0.6rem;\n  display: none;\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n#contact-section .hide {\n  opacity: 0;\n}\n#contact-section .show {\n  display: block;\n  opacity: 1 !important;\n}\n\n@media (max-width: 768px) {\n  #contact-section * {\n    box-sizing: border-box;\n  }\n\n  #contact-section {\n    padding: 2rem 0;\n  }\n  #contact-section h1 {\n    font-size: 1.3rem;\n  }\n  #contact-section > div {\n    padding: 0 1.5rem;\n    width: auto;\n  }\n  #contact-section form {\n    display: flex;\n    flex-direction: column;\n    margin-top: 2rem;\n  }\n  #contact-section form button {\n    margin-bottom: 2rem;\n  }\n\n  #submitted {\n    margin: 35vh 1vw !important;\n    padding: 1.5rem !important;\n    font-size: 1rem !important;\n  }\n}\n@media (max-width: 576px) {\n  #contact-section > div {\n    width: 100%;\n  }\n  #contact-section > div form * {\n    font-size: 1rem;\n  }\n  #contact-section > div button {\n    width: 100%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/contact/contact.scss"],"names":[],"mappings":"AAcA;EACE,eAAA;EAGA,WAAA;EAEA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kCAjBgB;AAClB;AAkBE;EACE,mBArBe;EAsBf,kBAAA;EACA,YAAA;AAhBJ;AAmBE;EACE,kBAAA;AAjBJ;AAoBE;EACE,iBAAA;EACA,qBAAA;AAlBJ;AAqBE;EACE,gBAAA;EACA,aAAA;EACA,8BAAA;EACA,gBAAA;EAGA,UAAA;EACA,wBAAA;AArBJ;AAuBI;EACE,oBAAA;EACA,uBAAA;AArBN;AAwBI;;EAEE,kBAAA;EACA,mBAAA;AAtBN;AAyBI;EACE,mBAAA;EACA,sBAAA;AAvBN;AA0BI;EACE,iBAAA;EACA,oBAAA;AAxBN;AA2BI;;EAEE,cAAA;AAzBN;AA4BI;EACE,qBAAA;AA1BN;AA6BI;EACE,sBAAA;EACA,WAAA;EACA,cAAA;AA3BN;AA8BI;EACE,gBAAA;EACA,eAAA;EACA,kCAnFY;EAoFZ,YAAA;EACA,qBA1FO;EA2FP,qBAAA;EACA,iBAAA;EACA,mBAAA;EACA,YAAA;EACA,eAAA;AA5BN;AA+BI;EACE,cAjGC;EAkGD,mBApGO;EAqGP,qBAnGC;AAsEP;AAiCE;EACE,eAAA;EACA,mBA3GS;EA4GT,cA1GG;EA2GH,kBAAA;EACA,sBAAA;EACA,mBAAA;EACA,qBAAA;EAGA,aAAA;EACA,UAAA;EACA,wBAAA;AAjCJ;AAqCE;EACE,UAAA;AAnCJ;AAsCE;EACE,cAAA;EACA,qBAAA;AApCJ;;AAwCA;EACE;IACE,sBAAA;EArCF;;EAwCA;IACE,eAAA;EArCF;EAuCE;IACE,iBAAA;EArCJ;EAwCE;IACE,iBAAA;IACA,WAAA;EAtCJ;EAyCE;IACE,aAAA;IACA,sBAAA;IACA,gBAAA;EAvCJ;EAyCI;IACE,mBAAA;EAvCN;;EA4CA;IACE,2BAAA;IACA,0BAAA;IACA,0BAAA;EAzCF;AACF;AA4CA;EACE;IACE,WAAA;EA1CF;EA4CE;IACE,eAAA;EA1CJ;EA6CE;IACE,WAAA;EA3CJ;AACF","sourcesContent":["$gray: hsla(230, 7%, 84%, 1);\n$dark-green: hsla(177, 100%, 4%, 1);\n$chinese-red: hsla(15, 87%, 34%, 1);\n$gold: hsla(42, 79%, 54%, 1);\n$blood-red: hsla(1, 93%, 22%, 1);\n$transparent-gray: hsla(0, 0%, 97%, 1);\n$transparent-red: hsla(15, 87%, 34%, 0.7);\n\n$site-padding-left: 2rem;\n$mobile-padding-left: 1rem;\n\n$tablet-screen: 768px;\n$mobile-screen: 576px;\n\n#contact-section {\n  padding: 4rem 0;\n\n  //needed because <main> elem had flex display\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: $transparent-red;\n\n  > div {\n    background: $transparent-gray;\n    padding: 3rem 7rem;\n    width: 40rem;\n  }\n\n  h1 {\n    text-align: center;\n  }\n\n  form * {\n    font-size: 1.2rem;\n    font-family: \"Roboto\";\n  }\n\n  form {\n    margin-top: 5rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 1.5rem 2rem;\n\n    //for the fade out effect\n    opacity: 1;\n    transition: opacity 0.5s;\n\n    .fullRow {\n      grid-column-start: 1;\n      grid-column-end: span 2;\n    }\n\n    input,\n    textarea {\n      padding-left: 1rem;\n      padding-right: 1rem;\n    }\n\n    input {\n      padding-top: 0.6rem;\n      padding-bottom: 0.6rem;\n    }\n\n    textarea {\n      padding-top: 1rem;\n      padding-bottom: 1rem;\n    }\n\n    label,\n    select {\n      display: block;\n    }\n\n    label {\n      margin-bottom: 0.5rem;\n    }\n\n    select {\n      padding: 0.5rem 0.5rem;\n      width: 100%;\n      color: hsla(15, 0%, 31%, 1);\n    }\n\n    button {\n      margin-top: 1rem;\n      padding: 1rem 0;\n      background: $transparent-red;\n      color: white;\n      border-color: $dark-green;\n      border-radius: 0.3rem;\n      font-size: 1.5rem;\n      border-style: solid;\n      width: 15rem;\n      cursor: pointer;\n    }\n\n    button:hover {\n      color: $gold;\n      background: $dark-green;\n      border-color: $gold;\n    }\n  }\n\n  #submitted {\n    margin: 10rem 0;\n    background: $dark-green;\n    color: $gold;\n    text-align: center;\n    padding: 1.5rem 2.5rem;\n    border-style: solid;\n    border-radius: 0.6rem;\n\n    //for the fade in effect\n    display: none;\n    opacity: 0;\n    transition: opacity 0.5s;\n  }\n\n  //for the fade out/in effect\n  .hide {\n    opacity: 0;\n  }\n\n  .show {\n    display: block;\n    opacity: 1 !important;\n  }\n}\n\n@media (max-width: $tablet-screen) {\n  #contact-section * {\n    box-sizing: border-box;\n  }\n\n  #contact-section {\n    padding: 2rem 0;\n\n    h1 {\n      font-size: 1.3rem;\n    }\n\n    > div {\n      padding: 0 1.5rem;\n      width: auto;\n    }\n\n    form {\n      display: flex;\n      flex-direction: column;\n      margin-top: 2rem;\n\n      button {\n        margin-bottom: 2rem;\n      }\n    }\n  }\n\n  #submitted {\n    margin: 35vh 1vw !important;\n    padding: 1.5rem !important;\n    font-size: 1rem !important;\n  }\n}\n\n@media (max-width: $mobile-screen) {\n  #contact-section > div {\n    width: 100%;\n\n    form * {\n      font-size: 1rem;\n    }\n\n    button {\n      width: 100%;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/components/footer/footer.scss":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/components/footer/footer.scss ***!
  \*******************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports
;

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "footer {\n  padding: 1.3rem 2rem;\n  font-family: \"Goldman\";\n  background: #d3d4d9;\n}\n\n@media (max-width: 576px) {\n  footer {\n    text-align: center;\n    font-size: 1rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/footer/footer.scss"],"names":[],"mappings":"AAcA;EACE,oBAAA;EACA,sBAAA;EACA,mBAjBK;AAIP;;AAgBA;EACE;IACE,kBAAA;IACA,eAAA;EAbF;AACF","sourcesContent":["$gray: hsla(230, 7%, 84%, 1);\n$dark-green: hsla(177, 100%, 4%, 1);\n$chinese-red: hsla(15, 87%, 34%, 1);\n$gold: hsla(42, 79%, 54%, 1);\n$blood-red: hsla(1, 93%, 22%, 1);\n$transparent-gray: hsla(0, 0%, 97%, 1);\n$transparent-red: hsla(15, 87%, 34%, 0.7);\n\n$site-padding-left: 2rem;\n$mobile-padding-left: 1rem;\n\n$tablet-screen: 768px;\n$mobile-screen: 576px;\n\nfooter {\n  padding: 1.3rem $site-padding-left;\n  font-family: \"Goldman\";\n  background: $gray;\n}\n\n@media (max-width: $mobile-screen) {\n  footer {\n    text-align: center;\n    font-size: 1rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/components/navbar/navbar.scss":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/components/navbar/navbar.scss ***!
  \*******************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports
;

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "nav {\n  background: #d3d4d9;\n  display: flex;\n  justify-content: space-between;\n  font-family: \"Goldman\";\n  color: #001413;\n}\nnav div {\n  cursor: default;\n}\nnav ul > li,\nnav #nav-logo-wrapper {\n  padding: 0 2rem;\n}\nnav #nav-logo-wrapper {\n  font-size: 2.5rem;\n  padding-top: 0.8rem;\n  padding-bottom: 0.8rem;\n}\nnav ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n  font-size: 1.7rem;\n}\nnav ul li {\n  display: inline-flex;\n  height: 100%;\n  flex-direction: column;\n  justify-content: center;\n  cursor: pointer;\n}\nnav ul li:hover {\n  color: #e6af2d;\n  background: #001413;\n}\nnav #dropdown-button-wrapper {\n  display: none;\n}\n\n#nav-logo-red {\n  color: #a2310b;\n}\n\n.nav-li-clicked:hover {\n  color: #001413;\n  background: #e6af2d;\n}\n\n@media (max-width: 768px) {\n  nav ul {\n    display: none;\n  }\n  nav #nav-logo-wrapper {\n    font-size: 1.5rem;\n  }\n\n  #dropdown-button-wrapper {\n    width: 3rem;\n    display: flex !important;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 0 2rem;\n  }\n\n  .nav-selected {\n    background: #6c0604;\n  }\n  .nav-selected svg {\n    fill: #e6af2d;\n  }\n}\n@media (max-width: 576px) {\n  nav #nav-logo-wrapper {\n    font-size: 1.1rem;\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n\n  #dropdown-button-wrapper {\n    width: 2.5rem;\n    padding: 0 1rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/navbar/navbar.scss"],"names":[],"mappings":"AAcA;EACE,mBAfK;EAgBL,aAAA;EACA,8BAAA;EACA,sBAAA;EACA,cAlBW;AAKb;AAeE;EACE,eAAA;AAbJ;AAgBE;;EAEE,eAAA;AAdJ;AAiBE;EACE,iBAAA;EACA,mBAAA;EACA,sBAAA;AAfJ;AAkBE;EACE,qBAAA;EACA,SAAA;EACA,UAAA;EACA,qBAAA;EACA,iBAAA;AAhBJ;AAkBI;EACE,oBAAA;EACA,YAAA;EACA,sBAAA;EACA,uBAAA;EACA,eAAA;AAhBN;AAmBI;EACE,cAjDC;EAkDD,mBApDO;AAmCb;AAqBE;EACE,aAAA;AAnBJ;;AAuBA;EACE,cA7DY;AAyCd;;AAuBA;EACE,cAlEW;EAmEX,mBAjEK;AA6CP;;AAyBA;EAEI;IACE,aAAA;EAvBJ;EA0BE;IACE,iBAAA;EAxBJ;;EA4BA;IACE,WAAA;IACA,wBAAA;IACA,sBAAA;IACA,uBAAA;IACA,mBAAA;IACA,eAAA;EAzBF;;EA4BA;IACE,mBA1FQ;EAiEV;EA2BE;IACE,aA9FC;EAqEL;AACF;AA+BA;EAEI;IACE,iBAAA;IACA,kBAnGgB;IAoGhB,mBApGgB;EAsEpB;;EAkCA;IACE,aAAA;IACA,eAAA;EA/BF;AACF","sourcesContent":["$gray: hsla(230, 7%, 84%, 1);\n$dark-green: hsla(177, 100%, 4%, 1);\n$chinese-red: hsla(15, 87%, 34%, 1);\n$gold: hsla(42, 79%, 54%, 1);\n$blood-red: hsla(1, 93%, 22%, 1);\n$transparent-gray: hsla(0, 0%, 97%, 1);\n$transparent-red: hsla(15, 87%, 34%, 0.7);\n\n$site-padding-left: 2rem;\n$mobile-padding-left: 1rem;\n\n$tablet-screen: 768px;\n$mobile-screen: 576px;\n\nnav {\n  background: $gray;\n  display: flex;\n  justify-content: space-between;\n  font-family: \"Goldman\";\n  color: $dark-green;\n\n  div {\n    cursor: default;\n  }\n\n  ul > li,\n  #nav-logo-wrapper {\n    padding: 0 $site-padding-left;\n  }\n\n  #nav-logo-wrapper {\n    font-size: 2.5rem;\n    padding-top: 0.8rem;\n    padding-bottom: 0.8rem;\n  }\n\n  ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block;\n    font-size: 1.7rem;\n\n    li {\n      display: inline-flex;\n      height: 100%;\n      flex-direction: column;\n      justify-content: center;\n      cursor: pointer;\n    }\n\n    li:hover {\n      color: $gold;\n      background: $dark-green;\n    }\n  }\n\n  #dropdown-button-wrapper {\n    display: none;\n  }\n}\n\n#nav-logo-red {\n  color: $chinese-red;\n}\n\n.nav-li-clicked:hover {\n  color: $dark-green;\n  background: $gold;\n}\n\n//===================================================\n\n@media (max-width: $tablet-screen) {\n  nav {\n    ul {\n      display: none;\n    }\n\n    #nav-logo-wrapper {\n      font-size: 1.5rem;\n    }\n  }\n\n  #dropdown-button-wrapper {\n    width: 3rem;\n    display: flex !important;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 0 $site-padding-left;\n  }\n\n  .nav-selected {\n    background: $blood-red;\n\n    svg {\n      fill: $gold;\n    }\n  }\n}\n\n//===================================================\n\n@media (max-width: $mobile-screen) {\n  nav {\n    #nav-logo-wrapper {\n      font-size: 1.1rem;\n      padding-left: $mobile-padding-left;\n      padding-right: $mobile-padding-left;\n    }\n  }\n\n  #dropdown-button-wrapper {\n    width: 2.5rem;\n    padding: 0 $mobile-padding-left;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/components/sidebar/sidebar.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/components/sidebar/sidebar.scss ***!
  \*********************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports
;

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "aside {\n  display: inline-flex;\n  flex-direction: column;\n  background: #001413;\n  font-family: \"Roboto Condensed\";\n  color: #e6af2d;\n}\naside ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 2rem;\n}\naside ul li {\n  padding: 1rem 2rem;\n  cursor: pointer;\n}\naside ul .hidden-nav {\n  padding-left: 2rem;\n  display: none;\n}\naside ul li:hover {\n  color: #001413;\n  background: #e6af2d;\n}\n\n.side-div-clicked:hover {\n  color: #e6af2d;\n  background: #6c0604;\n}\n\n@media (max-width: 768px) {\n  aside {\n    display: none;\n  }\n  aside ul .hidden-nav {\n    display: block;\n  }\n}\n@media (max-width: 576px) {\n  aside {\n    font-size: 1rem;\n  }\n  aside li {\n    padding-top: 0.7rem !important;\n    padding-bottom: 0.7rem !important;\n  }\n}", "",{"version":3,"sources":["webpack://./src/components/sidebar/sidebar.scss"],"names":[],"mappings":"AAcA;EACE,oBAAA;EACA,sBAAA;EACA,mBAhBW;EAiBX,+BAAA;EACA,cAhBK;AAGP;AAeE;EACE,qBAAA;EACA,SAAA;EACA,UAAA;EACA,wBAAA;EACA,gBAAA;EACA,SAAA;AAbJ;AAeI;EACE,kBAAA;EACA,eAAA;AAbN;AAgBI;EACE,kBA3Bc;EA4Bd,aAAA;AAdN;AAiBI;EACE,cAvCO;EAwCP,mBAtCC;AAuBP;;AAoBA;EACE,cA5CK;EA6CL,mBA5CU;AA2BZ;;AAoBA;EACE;IACE,aAAA;EAjBF;EAmBE;IACE,cAAA;EAjBJ;AACF;AAqBA;EACE;IACE,eAAA;EAnBF;EAqBE;IACE,8BAAA;IACA,iCAAA;EAnBJ;AACF","sourcesContent":["$gray: hsla(230, 7%, 84%, 1);\n$dark-green: hsla(177, 100%, 4%, 1);\n$chinese-red: hsla(15, 87%, 34%, 1);\n$gold: hsla(42, 79%, 54%, 1);\n$blood-red: hsla(1, 93%, 22%, 1);\n$transparent-gray: hsla(0, 0%, 97%, 1);\n$transparent-red: hsla(15, 87%, 34%, 0.7);\n\n$site-padding-left: 2rem;\n$mobile-padding-left: 1rem;\n\n$tablet-screen: 768px;\n$mobile-screen: 576px;\n\naside {\n  display: inline-flex;\n  flex-direction: column;\n  background: $dark-green;\n  font-family: \"Roboto Condensed\";\n  color: $gold;\n\n  ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 2rem;\n\n    li {\n      padding: 1rem $site-padding-left;\n      cursor: pointer;\n    }\n\n    .hidden-nav {\n      padding-left: $site-padding-left;\n      display: none;\n    }\n\n    li:hover {\n      color: $dark-green;\n      background: $gold;\n    }\n  }\n}\n\n.side-div-clicked:hover {\n  color: $gold;\n  background: $blood-red;\n}\n\n@media (max-width: $tablet-screen) {\n  aside {\n    display: none;\n\n    ul .hidden-nav {\n      display: block;\n    }\n  }\n}\n\n@media (max-width: $mobile-screen) {\n  aside {\n    font-size: 1rem;\n\n    li {\n      padding-top: 0.7rem !important;\n      padding-bottom: 0.7rem !important;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/index.scss":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/index.scss ***!
  \************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports
;

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&family=Goldman&family=Roboto+Condensed&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  font-size: 1.3rem;\n  background: #f7f7f7;\n  font-family: \"Roboto\";\n  overflow-x: none;\n}\n\nmain {\n  display: flex;\n  flex-direction: row;\n}\n\n@media (max-width: 768px) {\n  main {\n    display: block;\n  }\n}", "",{"version":3,"sources":["webpack://./src/index.scss"],"names":[],"mappings":"AAgBA;EACE,SAAA;EACA,iBAAA;EACA,mBAdiB;EAejB,qBAAA;EACA,gBAAA;AAdF;;AAiBA;EACE,aAAA;EACA,mBAAA;AAdF;;AAiBA;EACE;IACE,cAAA;EAdF;AACF","sourcesContent":["$gray: hsla(230, 7%, 84%, 1);\n$dark-green: hsla(177, 100%, 4%, 1);\n$chinese-red: hsla(15, 87%, 34%, 1);\n$gold: hsla(42, 79%, 54%, 1);\n$blood-red: hsla(1, 93%, 22%, 1);\n$transparent-gray: hsla(0, 0%, 97%, 1);\n$transparent-red: hsla(15, 87%, 34%, 0.7);\n\n$site-padding-left: 2rem;\n$mobile-padding-left: 1rem;\n\n$tablet-screen: 768px;\n$mobile-screen: 576px;\n\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto&family=Goldman&family=Roboto+Condensed&display=swap\");\n\nbody {\n  margin: 0;\n  font-size: 1.3rem;\n  background: $transparent-gray;\n  font-family: \"Roboto\";\n  overflow-x: none;\n}\n\nmain {\n  display: flex;\n  flex-direction: row;\n}\n\n@media (max-width: $tablet-screen) {\n  main {\n    display: block;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 15:0-14 */
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./src/components/articles/img/china.jpg":
/*!***********************************************!*\
  !*** ./src/components/articles/img/china.jpg ***!
  \***********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "cfa1c64e3de5726891c7355be9873469.jpg");

/***/ }),

/***/ "./src/components/articles/img/india.jpg":
/*!***********************************************!*\
  !*** ./src/components/articles/img/india.jpg ***!
  \***********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "55fe86cf001229c843173d34f081b2c8.jpg");

/***/ }),

/***/ "./src/components/articles/img/indonesia.jpg":
/*!***************************************************!*\
  !*** ./src/components/articles/img/indonesia.jpg ***!
  \***************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "cf00e62e239e6ea786951f442e692661.jpg");

/***/ }),

/***/ "./src/components/articles/img/malaysia.jpeg":
/*!***************************************************!*\
  !*** ./src/components/articles/img/malaysia.jpeg ***!
  \***************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "7cb2c363b3c333b951a17f3ea650e85b.jpeg");

/***/ }),

/***/ "./src/components/articles/img/philippines.jpg":
/*!*****************************************************!*\
  !*** ./src/components/articles/img/philippines.jpg ***!
  \*****************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "17063e5803a9a680b965813cc0433236.jpg");

/***/ }),

/***/ "./src/components/articles/img/singapore.jpg":
/*!***************************************************!*\
  !*** ./src/components/articles/img/singapore.jpg ***!
  \***************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "b7b92ae30f0931f7013749a9b5851ad1.jpg");

/***/ }),

/***/ "./src/components/articles/img/thailand.jpg":
/*!**************************************************!*\
  !*** ./src/components/articles/img/thailand.jpg ***!
  \**************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "3ec5624d18c93ce66e9e0fe39ee6ecc9.jpg");

/***/ }),

/***/ "./src/components/articles/img/vietnam-2.jpg":
/*!***************************************************!*\
  !*** ./src/components/articles/img/vietnam-2.jpg ***!
  \***************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "0075257340789e9761d35a21b1311980.jpg");

/***/ }),

/***/ "./src/components/articles/img/vietnam.jpg":
/*!*************************************************!*\
  !*** ./src/components/articles/img/vietnam.jpg ***!
  \*************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "8fc5ce9c2dc6e340823751dbb2b9a732.jpg");

/***/ }),

/***/ "./src/components/articles/articles.html":
/*!***********************************************!*\
  !*** ./src/components/articles/articles.html ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 24:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(/*! ../../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(/*! ./img/china.jpg */ "./src/components/articles/img/china.jpg");
var ___HTML_LOADER_IMPORT_1___ = __webpack_require__(/*! ./img/india.jpg */ "./src/components/articles/img/india.jpg");
var ___HTML_LOADER_IMPORT_2___ = __webpack_require__(/*! ./img/singapore.jpg */ "./src/components/articles/img/singapore.jpg");
var ___HTML_LOADER_IMPORT_3___ = __webpack_require__(/*! ./img/malaysia.jpeg */ "./src/components/articles/img/malaysia.jpeg");
var ___HTML_LOADER_IMPORT_4___ = __webpack_require__(/*! ./img/philippines.jpg */ "./src/components/articles/img/philippines.jpg");
var ___HTML_LOADER_IMPORT_5___ = __webpack_require__(/*! ./img/indonesia.jpg */ "./src/components/articles/img/indonesia.jpg");
var ___HTML_LOADER_IMPORT_6___ = __webpack_require__(/*! ./img/vietnam.jpg */ "./src/components/articles/img/vietnam.jpg");
var ___HTML_LOADER_IMPORT_7___ = __webpack_require__(/*! ./img/vietnam-2.jpg */ "./src/components/articles/img/vietnam-2.jpg");
var ___HTML_LOADER_IMPORT_8___ = __webpack_require__(/*! ./img/thailand.jpg */ "./src/components/articles/img/thailand.jpg");
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_8___);
var code = "<section class=\"article-section\" id=\"china\">\n  <h1>Baidu to acquire Joyy’s livestreaming service in $3.6b deal</h1>\n  <div id=\"subheading\">\n    <span>Doris Yu | </span>\n    <span>18 Nov 2020</span>\n  </div>\n  <p>\n    Chinese search engine Baidu announced that it has entered into an agreement\n    to acquire Joyy’s domestic livestreaming business YY Live in a US$3.6\n    billion deal.\n  </p>\n  <figure>\n    <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"Baidu office\" />\n    <figcaption>\n      Baidu’s Silicon Valley AI Lab, where PaddlePaddle was born / Photo credit:\n      Baidu.\n    </figcaption>\n  </figure>\n  <p>\n    The closing of the transaction is subject to conditions and is expected to\n    take place in the first half of 2021.\n  </p>\n  <p>\n    Baidu’s acquisition of the video-based entertainment livestreaming unit will\n    include the YY mobile app, the YY.com website, and PC YY, among others.\n  </p>\n  <p>\n    With the acquisition, YY Live will have access to Baidu’s traffic and mobile\n    ecosystems while the latter will receive operational experience, know-how,\n    and a creator network for video-based social media development, said Robin\n    Li, co-founder and CEO at Baidu.\n  </p>\n  <p>\n    In the past year, Baidu enabled the growth of its non-advertising revenues\n    by increasing log-in users and adding social engagement to their platform.\n    It also expanded its non-advertising offerings, which include membership,\n    livestreaming, and online games, Li noted.\n  </p>\n  <p>\n    The Chinese tech giant also announced it has generated US$4.16 billion in\n    revenue for Q3 2020, with its online market revenue from Baidu Core taking\n    up US$2.72 billion. It also raked in US$2.02 billion in net income that’s\n    attributable to Baidu during the period.\n  </p>\n  <p>\n    The development comes after Tencent acquired 30 billion class B shares of\n    Joyy’s Twitch-like service Huya in an US$810 million deal in August and\n    became Huya’s biggest shareholder. Later, Huya acquired its rival Douyu and\n    was reported to create a new game-streaming giant valued at over US$11\n    billion.\n  </p>\n</section>\n\n<section class=\"article-section\" id=\"india\">\n  <h1>Facebook’s WhatsApp to roll out in-app payments feature in India</h1>\n  <div id=\"subheading\">\n    <span>Miguel Cordon | </span>\n    <span>6 Nov 2020</span>\n  </div>\n  <p>\n    After winning approval from India’s National Payments Corporation (NPCI),\n    Facebook‘s WhatsApp will start rolling out its payments feature across the\n    country.\n  </p>\n  <figure>\n    <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"WhatsApp\" />\n    <figcaption>Photo credit: Venturebeat</figcaption>\n  </figure>\n  <p>\n    WhatsApp’s new feature allows its users to send money to other users or\n    share the cost of goods through the app itself. It was designed using the\n    Unified Payment Interface (UPI), an India-first real-time payment system\n    that is supported by over 160 banks.\n  </p>\n  <p>\n    To use the new payments feature, WhatsApp users must first have a bank\n    account and debit card in India. The app then sends instructions to banks to\n    initiate transfers between sender and receiver bank accounts.\n  </p>\n  <p>\n    It was also developed with a set of security and privacy principles,\n    including entering a personal UPI pin for each payment, the company noted.\n  </p>\n  <p>\n    “We’re delighted to be working with five leading banks in India: ICICI Bank,\n    HDFC Bank, Axis Bank, the State Bank of India, and Jio Payments Bank. People\n    can send money on WhatsApp to anyone using a UPI-supported app,” Facebook\n    said in a statement.\n  </p>\n  <p>\n    The payments function is now available on the latest versions of WhatsApp’s\n    iPhone and Android app.\n  </p>\n  <p>\n    According to a press release from NPCI, the messenger service was given the\n    approval to go live on UPI in the multi-bank model. “WhatsApp can expand its\n    UPI user base in a graded manner starting with a maximum registered user\n    base of 20 million in UPI,” the statement read.\n  </p>\n  <p>\n    The development comes after Facebook’s US$5.7 billion bet in Indian\n    conglomerate Reliance Industries and its digital platform Jio. Prior to the\n    funding’s announcement, it was reported that the two companies were in talks\n    to build a super app much like China’s WeChat.\n  </p>\n</section>\n\n<section class=\"article-section\" id=\"singapore\">\n  <h1>\n    Singapore sales productivity startup Nektar bags over $2.1m in seed round\n  </h1>\n  <div id=\"subheading\">\n    <span>Doris Yu | </span>\n    <span>9 Nov 2020 </span>\n  </div>\n  <p>\n    Nektar.ai, a business-to-business sales productivity startup based in\n    Singapore, announced that it has raised over US$2.1 million in a seed round\n    led by Nexus Venture Partners.\n  </p>\n  <figure>\n    <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Singapor Founders\" />\n    <figcaption>\n      (From left) Nektar founders Abhijeet Vijayvergiya and Aravind Ravi Sulekha\n      / Photo credit: Nektar\n    </figcaption>\n  </figure>\n  <p>\n    Insignia Venture Partners, Arka Venture Labs, Better Capital, and the\n    Vietnam Investments Group also participated in the round, along with a host\n    of individual investors. These include Five9 executive vice president of\n    product management Anand Chandrasekaran, CEO of Airtel’s enterprise business\n    Ganesh Lakshminarayanan, and Cisco chief growth officer Vinod Muthukrishnan,\n    among others.\n  </p>\n  <p>\n    Nektar was founded early this year by Abhijeet Vijayvergiya and Aravind Ravi\n    Sulekha. Previously, Vijayvergiya worked as the president and managing\n    director of Asia Pacific at cloud software firm Capillary Technologies,\n    while Sulekha was the tech leader at Zendesk.\n  </p>\n  <p>\n    “In the last decade, the investment in sales tools globally has grown by\n    five times, but the average sales quota attainment has fallen 40%. According\n    to Forbes, 57% of sales reps missed their numbers in 2018,” said CEO\n    Vijayvergiya. His company, he said, aims to build an AI-driven sales\n    productivity solution that will help revenue teams to collaborate and sales\n    reps to meet their quota.\n  </p>\n  <p>\n    Nektar connects unstructured data from sources like emails, calendars,\n    LinkedIn, and Zoom to customer relationship management and then overlays\n    these points with the organization’s practices and sales playbooks.\n  </p>\n  <p>\n    The company had been initially working in stealth mode with a select list of\n    early adopters. It now plans to use the new funds to further build out its\n    platform, ramp up its engineering and product teams, and open up its early\n    access program for general availability by next year.\n  </p>\n</section>\n\n<section class=\"article-section\" id=\"malaysia\">\n  <h1>\n    CapBay and Kenanga to form Malaysia’s first Islamic supply chain finance\n    fintech\n  </h1>\n  <div id=\"subheading\">\n    <span>Jon Boi | </span>\n    <span>3 Dec 2020</span>\n  </div>\n  <p>\n    With its acquisition of a 49% stake in Kenanga Capital Islamic Sdn Bhd\n    (KCI), Malaysian fintech startup CapBay is forming a joint venture with\n    KCI’s parent company Kenanga Investment Bank Berhad (KIBB) to create\n    Malaysia’s first Islamic supply chain finance fintech, according to a\n    statement.\n  </p>\n  <p>\n    The joint venture aims to “continue the effort of growing Shariah-compliant\n    [businesses] and developing the Islamic finance market.”\n  </p>\n  <p>\n    Following the acquisition, CapBay co-founder Xing Xian Ang will serve as\n    KCI’s CEO. He will report to Datuk Chay Wai Leong, the group managing\n    director at KIBB. Meanwhile, Dato’ Sri Mohd Mokhtar Mohd Shariff has been\n    appointed as chairman of CapBay.\n  </p>\n  <figure>\n    <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Malaysia Founder\" />\n    <figcaption>\n      CapBay co-founder Xing Xian Ang / Photo credit: CapBay\n    </figcaption>\n  </figure>\n  <p>\n    The new fintech firm’s aim is to help small and medium-sized enterprises\n    (SMEs), contractors, and vendors obtain financing in order to supply goods\n    and/or services to large corporations, the government, and government-linked\n    companies (GLCs). In this way, SMEs can leverage the larger corporations’\n    credit-worthiness while the latter are able to support their vendors in\n    turn.\n  </p>\n  <p>\n    Founded in 2016, CapBay is a multi-bank supply chain finance and\n    peer-to-peer financing (P2P) platform. Using its payment risk scoring model,\n    it predicts the risk of each transaction by conducting an analysis of\n    financial statements. It also uses machine learning to assess data points\n    such as its clients’ historical relationships, payments, quality of\n    contracts, and other patterns.\n  </p>\n  <p>\n    CapBay claims that its approach has allowed the company to “keep the default\n    rate low” while providing financing for more unbanked and underbanked\n    customers.\n  </p>\n  <p>\n    “We have always been committed to offering our customers the solutions they\n    need to advance the growth of Malaysian businesses of all sizes. I am\n    confident that this partnership with KIBB will allow us to grow as an\n    organization and better serve our customers as we invest in our\n    infrastructure and service offering,” said Ang in a statement.\n  </p>\n  <p>\n    CapBay claims that since 2017, it has financed more than 9,000 transactions\n    amounting to more than 800 million ringgit (US$192.6 million) and has served\n    over 500 SMEs.\n  </p>\n  <p>\n    Formerly known as CapitalBay, the company raised US$477,000 in a seed round\n    led by KK Fund in 2017.\n  </p>\n</section>\n<section class=\"article-section\" id=\"philippines\">\n  <h1>Ayannah reveals merger; new entity seeks up to $50m in series B round</h1>\n  <div id=\"subheading\">\n    <span>Michael Jordan | </span>\n    <span>8 May 2020</span>\n  </div>\n  <p>\n    Philippine-based fintech startup Ayannah and Indian payments firm Electronic\n    Cash and Payment Solutions (ECAP) said they have merged to form a Pan-Asian\n    company that aims to provide accessible digital financial services to the\n    region’s middle class.\n  </p>\n  <figure>\n    <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"News stand\" />\n    <figcaption>Photo credit: Ayannah Global</figcaption>\n  </figure>\n  <p>\n    Called Ayannah Global, the new entity will be headquartered in Singapore, a\n    strategic location among fast-growing markets in Southeast Asia. It also\n    aims to draw from the city-state’s talent pool and forge new partnerships\n    with companies there.\n  </p>\n  <p>\n    “Both companies saw huge operational and technological synergies in their\n    products and growth strategy, and a merger will enable the enlarged entity\n    to better reach customers, scale up product development, and expand their\n    reach within Southeast Asia,” a spokesperson for Ayannah Global told Tech in\n    Asia.\n  </p>\n  <p>\n    The company also looks to capitalize on the greater demand for open banking\n    and omnichannel distribution platforms driven by the Covid-19 pandemic, the\n    spokesperson added.\n  </p>\n  <p>\n    Founded in 2010, Ayannah developed an AI-enabled platform to launch a suite\n    of financial and lifestyle products and services ranging from payments,\n    remittances, insurance, and telemedicine.\n  </p>\n  <p>\n    Meanwhile, Bengaluru-based ECAPS caters to the needs of domestic migrants\n    and the unbanked population in India. It enables domestic money transfers,\n    utility bill payments, recharges, and travel ticketing.\n  </p>\n  <p>\n    Together, Ayannah and ECAPS have operations in India, Indonesia, and the\n    Philippines. After the merger, Ayannah Global looks to extend its reach into\n    Vietnam. It expects to reach over 10 million customers in these markets\n    through its mobile apps and a growing network of over 60,000 offline\n    touchpoints, the new entity said.\n  </p>\n  <p>\n    In addition to the merger, the company said it will start raising money for\n    its series B round on June 15. It looks to bag US$30 million to US$50\n    million through the round.\n  </p>\n  <p>\n    Ayannah’s existing backers from previous fundraising rounds include\n    Wavemaker Partners, Golden Gate Ventures, and 500 Startups, as well as\n    several large family offices across Asia.\n  </p>\n</section>\n<section class=\"article-section\" id=\"indonesia\">\n  <h1>\n    Indonesia’s iSeller bags series A round from Openspace Ventures, Mandiri\n    Capital\n  </h1>\n  <div id=\"subheading\">\n    <span>Caris LeVert | </span>\n    <span>19 Jan 2021</span>\n  </div>\n  <p>\n    Indonesia-based iSeller, an omnichannel sales software-as-a-service player,\n    announced that it has secured an undisclosed amount in its series A round of\n    funding led by Singapore-based VC firm Openspace Ventures and Mandiri\n    Capital, the VC arm of Bank Mandiri in Indonesia.\n  </p>\n  <figure>\n    <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Checkout\" />\n    <figcaption>Photo credit: iSeller</figcaption>\n  </figure>\n  <p>\n    The capital injection will go toward business expansion including the\n    acceleration of merchant acquisition and onboarding. The company is also\n    doubling down on technology development to add additional omnichannel\n    merchant solutions and features, it said in a statement.\n  </p>\n  <p>\n    Founded in 2017, iSeller offers a cloud-based platform for omnichannel\n    businesses, which integrates in-store point of sale, online storefront,\n    payment processing, order fulfillment, and inventory management into a\n    single interface.\n  </p>\n  <p>\n    With increasing online distribution models and multiple payment methods in\n    Indonesia, small and medium-sized enterprises are finding it hard to keep\n    up.\n  </p>\n  <p>\n    The company said it aims to help these merchants take advantage of the\n    online ecosystem by providing more ways to sell and accept payment across\n    online and offline channels (in-store, online, apps, and marketplaces).\n    Merchants can also manage sales across branches, covering Tokopedia, Shopee,\n    Lazada, GoPay, Ovo, Dana, GoSend, and GrabExpress, among others.\n  </p>\n  <p>\n    With a pay-as-you-go subscription model, iSeller serves consumer businesses\n    in sectors including retail, food and beverage, and consumer services,\n    catering to clients like Geprek Bensu, Ixobox, Agung Sedayu Retail Indonesia\n    (ASRI), United Bike, and Yogurtland.\n  </p>\n  <p>\n    Despite current economic conditions, the company claims that it has doubled\n    its revenue and its active merchant pool year on year and currently\n    processes more than 5 million transactions a month. In fact, it attributed\n    this growth to the higher online transaction volume among existing customers\n    amid the pandemic’s lockdown period.\n  </p>\n</section>\n<section class=\"article-section\" id=\"vietnam\">\n  <h1>\n    How insurtech startup Papaya looks to digitalize Vietnam’s opaque insurance\n    industry\n  </h1>\n  <div id=\"subheading\">\n    <span>Thu Huong Le | </span>\n    <span>30 Dec 2020</span>\n  </div>\n  <p>\n    CEO and co-founder Hung Phan has learned two important insights from\n    building his insurtech startup Papaya. First, don’t follow the agent-based\n    model which just digitalizes the process that offline insurance agents\n    follow. It will be extremely costly to acquire and manage these agents in\n    the long term.\n  </p>\n  <p>\n    Second, don’t rely on an existing platform to distribute your products. It\n    will squeeze your margins, and the platform will eventually figure out how\n    to sell directly to customers.\n  </p>\n  <figure>\n    <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"Startup team\" />\n    <figcaption>\n      Ho Chi Minh City-based insurtech startup Papaya wants to become a\n      healthcare and wellness platform for employees. / Photo credit: Papaya\n    </figcaption>\n  </figure>\n  <p>\n    When Phan founded Papaya in 2018, it took a while for his team to decide on\n    the startup’s business model. The company previously tried selling motorbike\n    insurance to drivers on popular Vietnamese on-demand platforms, but the\n    demand was just not there.\n  </p>\n  <p>\n    So the startup decided to settle on solving a painful experience that many\n    people in Vietnam go through: the claims process in health insurance. Very\n    often, customers feel cheated by insurance companies due to the confusion\n    surrounding their exclusion policies.\n  </p>\n  <p>\n    In Vietnam, Papaya is part of just a handful of insurtech startups operating\n    in the country, partly because insurance is a traditional industry with\n    large incumbent players.\n  </p>\n  <p>\n    Last month, the company won the Tech in Asia Startup Arena Pitch Battle\n    2020. It previously raised pre-seed money and is now looking to raise US$1\n    million to further invest in automation technology and hiring.\n  </p>\n  <p>\n    The sector’s total addressable market has huge potential. The government\n    estimates that total premiums collected by insurance companies in Vietnam\n    last year reached about 160.2 trillion Vietnamese dong (US$5.4 billion), up\n    20.5% year on year. That said, the penetration rate is still relatively low,\n    as only about 8.5% of the population has a life insurance policy, according\n    to the Vietnam Insurance Association.\n  </p>\n  <figure>\n    <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"Ho Chi Minh\" />\n    <figcaption>\n      People crowd hospitals in Ho Chi Minh City, Vietnam. / Photo credit: 123rf\n    </figcaption>\n  </figure>\n  <p>\n    Phan, who previously worked for FWD Insurance, understands the painstaking\n    process of claiming health insurance for both patients and insurance\n    companies. It’s largely based on manual processes like filling out paperwork\n    and sending back-and-forth emails, and the approval process might take\n    several weeks.\n  </p>\n  <p>\n    For now, Papaya only operates in the business-to-business space. Its\n    customers consist of insurance companies which also see the benefits of\n    speeding up their own claiming process. So far, the startup has secured\n    contracts with two major insurance companies in the country – FWD and Bao\n    Minh – which delegate a number of their portfolio companies for Papaya to\n    manage.\n  </p>\n  <p>\n    The company currently processes health insurance claims for 8,000 employees,\n    who can use its mobile app to digitally check in at hospitals and clinics\n    within the insurance companies’ network.\n  </p>\n  <p>\n    According to Phan, this allows the employees to get their claims approved\n    within 30 minutes (for claims under 3 million dong or US$130). Generally,\n    Papaya can approve claims under 5 million dong (US$217). Those that go\n    beyond this threshold require additional approval from insurance companies.\n  </p>\n  <p>\n    The startup charges insurance companies 6% of the annual insurance premium\n    and another 2% for using its mobile app. Following this model, Papaya\n    expects its annual recurring revenue will reach US$250,000 this year.\n  </p>\n  <p>\n    But Phan is keenly aware of the company’s limitations. Papaya has been able\n    to automate just 10% of the claiming process – the startup’s own operations\n    staff must check the submitted documents manually. With only four employees\n    on the task, Papaya currently processes about 1,000 claims in a month.\n  </p>\n  <p>\n    “It’s because the medical documents in Vietnam do not follow standards,” he\n    tells Tech in Asia. “We need to invest in automation, but it’s just going to\n    take time.”\n  </p>\n  <p>\n    Additionally, Phan says the insurtech startup eventually needs to find other\n    sources of revenue. “Claiming is still just a small market because we have\n    to depend on the budget of insurance companies,” he adds.\n  </p>\n</section>\n<section class=\"article-section\" id=\"thailand\">\n  <h1>\n    Line’s delivery app in Thailand banks $110m, merges with local food app\n  </h1>\n  <div id=\"subheading\">\n    <span>Mary Poppins | </span>\n    <span>30 Jun 2020</span>\n  </div>\n  <p>\n    Thailand’s Line Man, the on-demand assistant platform of messaging app Line,\n    said it has reached an agreement to receive US$110 million in investment\n    from growth capital firm BRV Capital Management.\n  </p>\n  <p>\n    According to Line, this is the first time one of its entities overseas has\n    secured an investment of this size.\n  </p>\n  <figure>\n    <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"Line man\" />\n    <figcaption>Photo credit: Line Man</figcaption>\n  </figure>\n  <p>\n    The deal comes as Line Man inked a merger with Wongnai Media, a restaurant\n    review and discovery platform in Thailand. According to a statement from\n    Line, the capital investment aims to strengthen the newly merged entity and\n    expand its development in the country.\n  </p>\n  <p>\n    Since being founded in 2010, Wongnai currently has more than 10 million\n    monthly users, carrying the largest restaurant database in Thailand with\n    over 400,000 establishments in its network. Line said the merger would help\n    it strengthen its position as the country’s leading daily assistant app.\n  </p>\n  <p>\n    Line Man was launched in 2016 as Line forayed into local, on-demand services\n    for the first time. Since then, it has added over 100,000 restaurants to its\n    platform.\n  </p>\n  <p>\n    The app offers deliveries for food, groceries, convenience store items, and\n    parcels, along with messenger and taxi-hailing services. It currently\n    operates in Bangkok and several other provinces such as Nonthaburi,\n    Samutprakran, and Nakornprathom.\n  </p>\n  <p>\n    Jayden Kang, former chief strategy officer at Line Thailand, said in an\n    interview with Korea Times last year that the company aims to extend its\n    reach into 17 more regions in the country in the coming years, adding that\n    Line Man would continue to focus on the local market rather than expanding\n    overseas.\n  </p>\n  <p>\n    BRV is a regional growth capital firm that led early rounds in PayPal and\n    Waze. According to the statement, the company decided to invest in Line Man\n    because of the app’s success in becoming a “daily assistant” to local users.\n  </p>\n</section>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/components/contact/contact.html":
/*!*********************************************!*\
  !*** ./src/components/contact/contact.html ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

// Module
var code = "<section id=\"contact-section\">\n  <div>\n    <h1>Want to advertise? Send us a message here!</h1>\n    <form action=\"\">\n      <input name=\"firstName\" type=\"text\" placeholder=\"First name\" required />\n      <input name=\"lastName\" type=\"text\" placeholder=\"Last name\" required />\n      <input\n        class=\"fullRow\"\n        name=\"email\"\n        type=\"email\"\n        placeholder=\"Email\"\n        required\n      />\n      <input name=\"company\" type=\"text\" placeholder=\"Company name\" required />\n      <input name=\"job\" type=\"text\" placeholder=\"Job title\" required />\n      <input\n        class=\"fullRow\"\n        name=\"country\"\n        type=\"text\"\n        placeholder=\"Country\"\n        required\n      />\n      <textarea\n        class=\"fullRow\"\n        name=\"howHelp\"\n        id=\"\"\n        cols=\"30\"\n        rows=\"10\"\n        placeholder=\"How can we help?\"\n        required\n      ></textarea>\n      <div class=\"fullRow\">\n        <label for=\"budget\">Campaign budget (USD)</label>\n        <select name=\"budget\" id=\"budget\" required>\n          <option value=\"0\">Less than $10,000</option>\n          <option value=\"1\">$10,001 - $25,000</option>\n          <option value=\"2\">$25,001 - $50,000</option>\n          <option value=\"3\">$50,001 - $100,000</option>\n          <option value=\"4\">More than $100,000</option>\n        </select>\n      </div>\n      <button class=\"fullRow\" type=\"submit\">Submit</button>\n    </form>\n    <div id=\"submitted\">\n      Thank you for your enquiry. One of our customer representatives will reach\n      out to you shortly.\n    </div>\n  </div>\n</section>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/components/footer/footer.html":
/*!*******************************************!*\
  !*** ./src/components/footer/footer.html ***!
  \*******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

// Module
var code = "<footer>Copyright Mihail the Builder</footer>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/components/navbar/navbar.html":
/*!*******************************************!*\
  !*** ./src/components/navbar/navbar.html ***!
  \*******************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

// Module
var code = "<header>\n  <nav>\n    <div id=\"nav-logo-wrapper\">\n      <span>Tech News</span>\n      <span id=\"nav-logo-red\">Asia</span>\n    </div>\n    <ul id=\"right-nav-wrapper\">\n      <li>Home</li>\n      <li>Contact</li>\n    </ul>\n    <div id=\"dropdown-button-wrapper\"></div>\n  </nav>\n</header>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/components/sidebar/sidebar.html":
/*!*********************************************!*\
  !*** ./src/components/sidebar/sidebar.html ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:0-14 */
/***/ ((module) => {

// Module
var code = "<aside>\n  <ul>\n    <li class=\"hidden-nav article-link\" linkTo=\"china\">Home</li>\n    <li id=\"contact-link\" class=\"hidden-nav\">Contact</li>\n    <div class=\"hidden-nav\">-----</div>\n    <li class=\"article-link\" linkTo=\"china\">China</li>\n    <li class=\"article-link\" linkTo=\"india\">India</li>\n    <li class=\"article-link\" linkTo=\"singapore\">Singapore</li>\n    <li class=\"article-link\" linkTo=\"malaysia\">Malaysia</li>\n    <li class=\"article-link\" linkTo=\"philippines\">Philippines</li>\n    <li class=\"article-link\" linkTo=\"indonesia\">Indonesia</li>\n    <li class=\"article-link\" linkTo=\"vietnam\">Vietnam</li>\n    <li class=\"article-link\" linkTo=\"thailand\">Thailand</li>\n  </ul>\n</aside>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 3:0-14 */
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/components/navbar/hamburger.svg":
/*!*********************************************!*\
  !*** ./src/components/navbar/hamburger.svg ***!
  \*********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t viewBox=\"0 0 447 447\" style=\"enable-background:new 0 0 447 447;\" xml:space=\"preserve\">\r\n<g>\r\n\t<path d=\"M447,303.5c0-17.369-14.131-31.5-31.5-31.5H407v-20.931c4.28-2.411,8.845-4.069,16.5-4.069c4.142,0,7.5-3.358,7.5-7.5\r\n\t\ts-3.358-7.5-7.5-7.5c-6.821,0-12.107,1.056-16.5,2.611v-12.846c9.29-3.138,16-11.93,16-22.266v-8.998\r\n\t\tc0-16.559-4.338-32.53-12.544-46.185c-16.138-26.852-39.856-43.444-56.912-52.635C319.455,73.314,275.702,64,223.5,64\r\n\t\tc-52.201,0-95.954,9.314-130.043,27.683c-30.901,16.651-48.005,37.813-56.912,52.635C28.338,157.973,24,173.943,24,190.502v8.998\r\n\t\tc0,10.336,6.71,19.128,16,22.266v12.852C35.609,233.059,30.323,232,23.5,232c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5\r\n\t\tc7.658,0,12.219,1.665,16.5,4.083V272h-8.5C14.131,272,0,286.131,0,303.5c0,14.784,10.241,27.216,24,30.59v9.41\r\n\t\tc0,21.78,17.72,39.5,39.5,39.5h320c21.78,0,39.5-17.72,39.5-39.5v-9.41C436.76,330.716,447,318.285,447,303.5z M392,223v19.72\r\n\t\tc-4.941,3.049-9.665,5.28-18.544,5.28c-10.318,0-15.024-3.009-20.982-6.819c-6.73-4.303-14.359-9.181-29.063-9.181\r\n\t\tc-14.697,0-22.321,4.878-29.048,9.183c-5.953,3.809-10.654,6.817-20.962,6.817c-10.296,0-14.993-3.008-20.938-6.816\r\n\t\tc-6.722-4.305-14.341-9.184-29.028-9.184c-14.693,0-22.315,4.879-29.04,9.183c-5.95,3.809-10.65,6.817-20.954,6.817\r\n\t\tc-10.3,0-14.998-3.008-20.946-6.816C145.771,236.879,138.15,232,123.46,232c-14.69,0-22.311,4.879-29.034,9.184\r\n\t\tC88.478,244.992,83.78,248,73.48,248c-8.844,0-13.558-2.22-18.48-5.259V223H392z M39,190.502c0-13.837,3.597-27.136,10.401-38.458\r\n\t\tc7.94-13.212,23.264-32.119,51.171-47.156C132.451,87.71,173.81,79,223.5,79s91.05,8.71,122.928,25.888\r\n\t\tc27.907,15.038,43.23,33.944,51.171,47.156C404.404,163.366,408,176.665,408,190.502v8.998c0,4.687-3.813,8.5-8.5,8.5h-352\r\n\t\tc-4.687,0-8.5-3.813-8.5-8.5V190.502z M55,259.624C59.764,261.59,65.6,263,73.48,263c14.69,0,22.311-4.879,29.034-9.184\r\n\t\tc5.948-3.809,10.646-6.816,20.946-6.816c10.3,0,14.999,3.008,20.947,6.816c6.724,4.305,14.344,9.184,29.034,9.184\r\n\t\tc14.693,0,22.315-4.879,29.041-9.183c5.95-3.809,10.649-6.817,20.953-6.817c10.296,0,14.993,3.008,20.938,6.816\r\n\t\tc6.722,4.305,14.341,9.184,29.028,9.184c14.696,0,22.321-4.878,29.047-9.183c5.953-3.809,10.654-6.817,20.963-6.817\r\n\t\tc10.318,0,15.024,3.009,20.981,6.818c6.73,4.304,14.359,9.182,29.063,9.182c7.913,0,13.767-1.418,18.544-3.394V272H55V259.624z\r\n\t\t M383.5,368h-320C49.991,368,39,357.01,39,343.5V335h369v8.5C408,357.01,397.01,368,383.5,368z M415.5,320H290.319\r\n\t\tc2.965-4.802,4.681-10.454,4.681-16.5c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5c0,9.098-7.402,16.5-16.5,16.5h-232\r\n\t\tc-9.098,0-16.5-7.402-16.5-16.5S22.402,287,31.5,287h136c9.098,0,16.5,7.402,16.5,16.5c0,4.142,3.358,7.5,7.5,7.5\r\n\t\ts7.5-3.358,7.5-7.5c0-6.046-1.716-11.698-4.681-16.5H415.5c9.098,0,16.5,7.402,16.5,16.5C432,312.598,424.599,320,415.5,320z\"/>\r\n\t<path d=\"M191.5,167c1.919,0,3.839-0.732,5.303-2.197l8-8c2.929-2.929,2.929-7.678,0-10.606c-2.929-2.929-7.678-2.929-10.606,0l-8,8\r\n\t\tc-2.929,2.929-2.929,7.678,0,10.606C187.661,166.268,189.581,167,191.5,167z\"/>\r\n\t<path d=\"M266.197,156.803c1.464,1.464,3.384,2.197,5.303,2.197s3.839-0.732,5.303-2.197c2.929-2.929,2.929-7.678,0-10.606l-8-8\r\n\t\tc-2.929-2.929-7.678-2.929-10.606,0c-2.929,2.929-2.929,7.678,0,10.606L266.197,156.803z\"/>\r\n\t<path d=\"M103.5,175c1.919,0,3.839-0.732,5.303-2.197l8-8c2.929-2.929,2.929-7.678,0-10.606c-2.929-2.929-7.678-2.929-10.606,0l-8,8\r\n\t\tc-2.929,2.929-2.929,7.678,0,10.606C99.661,174.268,101.581,175,103.5,175z\"/>\r\n\t<path d=\"M151.5,135c4.142,0,7.5-3.358,7.5-7.5v-8c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v8\r\n\t\tC144,131.642,147.358,135,151.5,135z\"/>\r\n\t<path d=\"M239.5,191h8c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-8c-4.142,0-7.5,3.358-7.5,7.5S235.358,191,239.5,191z\"/>\r\n\t<path d=\"M311.5,183c1.919,0,3.839-0.732,5.303-2.197l8-8c2.929-2.929,2.929-7.678,0-10.606c-2.929-2.929-7.678-2.929-10.606,0l-8,8\r\n\t\tc-2.929,2.929-2.929,7.678,0,10.606C307.662,182.268,309.581,183,311.5,183z\"/>\r\n\t<path d=\"M218.197,116.803c1.464,1.464,3.384,2.197,5.303,2.197s3.839-0.732,5.303-2.197c2.929-2.929,2.929-7.678,0-10.606l-8-8\r\n\t\tc-2.929-2.929-7.678-2.929-10.606,0c-2.929,2.929-2.929,7.678,0,10.606L218.197,116.803z\"/>\r\n\t<path d=\"M154.197,188.803c1.464,1.464,3.384,2.197,5.303,2.197s3.839-0.732,5.303-2.197c2.929-2.929,2.929-7.678,0-10.606l-8-8\r\n\t\tc-2.929-2.929-7.678-2.929-10.606,0c-2.929,2.929-2.929,7.678,0,10.606L154.197,188.803z\"/>\r\n\t<path d=\"M278.17,115.492c5.311,0.958,10.51,2.083,15.453,3.344c0.622,0.158,1.245,0.234,1.859,0.234\r\n\t\tc3.347,0,6.397-2.257,7.262-5.648c1.023-4.014-1.4-8.097-5.414-9.121c-5.287-1.348-10.837-2.549-16.496-3.571\r\n\t\tc-4.075-0.732-7.978,1.973-8.713,6.049C271.386,110.855,274.094,114.756,278.17,115.492z\"/>\r\n\t<path d=\"M324.299,129.647c25.918,12.175,39.251,27.863,45.872,38.88c2.849,4.74,4.679,10.104,5.441,15.942\r\n\t\tc0.493,3.778,3.717,6.531,7.428,6.531c0.323,0,0.65-0.021,0.979-0.064c4.107-0.536,7.002-4.3,6.467-8.407\r\n\t\tc-1.03-7.897-3.54-15.208-7.458-21.729c-7.693-12.801-23.021-30.953-52.351-44.731c-3.75-1.759-8.215-0.149-9.977,3.6\r\n\t\tC318.939,123.419,320.55,127.886,324.299,129.647z\"/>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n<g>\r\n</g>\r\n</svg>\r\n");

/***/ }),

/***/ "./src/components/articles/articles.scss":
/*!***********************************************!*\
  !*** ./src/components/articles/articles.scss ***!
  \***********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_articles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./articles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/components/articles/articles.scss");
;
            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_articles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_articles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/contact/contact.scss":
/*!*********************************************!*\
  !*** ./src/components/contact/contact.scss ***!
  \*********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_contact_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./contact.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/components/contact/contact.scss");
;
            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_contact_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_contact_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/footer/footer.scss":
/*!*******************************************!*\
  !*** ./src/components/footer/footer.scss ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./footer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/components/footer/footer.scss");
;
            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_footer_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_footer_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/navbar/navbar.scss":
/*!*******************************************!*\
  !*** ./src/components/navbar/navbar.scss ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_navbar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./navbar.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/components/navbar/navbar.scss");
;
            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_navbar_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_navbar_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/components/sidebar/sidebar.scss":
/*!*********************************************!*\
  !*** ./src/components/sidebar/sidebar.scss ***!
  \*********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_sidebar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./sidebar.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/components/sidebar/sidebar.scss");
;
            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_sidebar_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_sidebar_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[0].use[3]!./src/index.scss");
;
            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_index_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_0_use_3_index_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 230:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/common/common.js":
/*!******************************!*\
  !*** ./src/common/common.js ***!
  \******************************/
/*! namespace exports */
/*! export clickStyle [provided] [no usage info] [missing usage info prevents renaming] */
/*! export homepageLoad [provided] [no usage info] [missing usage info prevents renaming] */
/*! export moveTop [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickStyle": () => /* binding */ clickStyle,
/* harmony export */   "homepageLoad": () => /* binding */ homepageLoad,
/* harmony export */   "moveTop": () => /* binding */ moveTop
/* harmony export */ });
/* harmony import */ var _components_sidebar_sidebar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/sidebar/sidebar.js */ "./src/components/sidebar/sidebar.js");
/* harmony import */ var _components_articles_articles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/articles/articles.js */ "./src/components/articles/articles.js");
;


const clickStyle = (element, style) => {
  element.classList.add(style);

  setTimeout(() => {
    element.classList.remove(style);
  }, 200);
};

const moveTop = () => {
  window.scrollTo(0, 0);
};

const homepageLoad = () => {
  document.querySelector("main").innerHTML = "";
  (0,_components_sidebar_sidebar_js__WEBPACK_IMPORTED_MODULE_0__.sidebarLoad)();
  (0,_components_articles_articles_js__WEBPACK_IMPORTED_MODULE_1__.articleLoad)();
};




/***/ }),

/***/ "./src/components/articles/articles.js":
/*!*********************************************!*\
  !*** ./src/components/articles/articles.js ***!
  \*********************************************/
/*! namespace exports */
/*! export articleLoad [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "articleLoad": () => /* binding */ articleLoad
/* harmony export */ });
/* harmony import */ var _articles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articles.scss */ "./src/components/articles/articles.scss");
/* harmony import */ var _articles_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articles.html */ "./src/components/articles/articles.html");
/* harmony import */ var _articles_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_articles_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/common.js */ "./src/common/common.js");
;




const articleLoad = (articleId = "china") => {
  let prevSection = document.querySelector("main>section");
  if (prevSection) {
    prevSection.remove();
  }

  let doc = new DOMParser().parseFromString((_articles_html__WEBPACK_IMPORTED_MODULE_1___default()), "text/html");
  document.querySelector("main").appendChild(doc.getElementById(articleId));
  (0,_common_common_js__WEBPACK_IMPORTED_MODULE_2__.moveTop)();
};




/***/ }),

/***/ "./src/components/contact/contact.js":
/*!*******************************************!*\
  !*** ./src/components/contact/contact.js ***!
  \*******************************************/
/*! namespace exports */
/*! export contactLoad [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactLoad": () => /* binding */ contactLoad
/* harmony export */ });
/* harmony import */ var _contact_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.html */ "./src/components/contact/contact.html");
/* harmony import */ var _contact_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_contact_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contact_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.scss */ "./src/components/contact/contact.scss");
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/common.js */ "./src/common/common.js");
;




const contactLoad = () => {
  let newHtml = new DOMParser().parseFromString((_contact_html__WEBPACK_IMPORTED_MODULE_0___default()), "text/html");

  document
    .querySelector("main")
    .replaceChild(
      newHtml.documentElement.querySelector("section"),
      document.querySelector("section")
    );

  document.getElementsByTagName("aside")[0].style.display = "none";

  document
    .getElementsByTagName("form")[0]
    .addEventListener("submit", (event) => {
      event.preventDefault();
      event.target.classList.add("hide");

      setTimeout(() => {
        event.target.style.display = "none";
        let submittedElem = document.getElementById("submitted");
        submittedElem.style.display = "block";

        setTimeout(() => {
          submittedElem.classList.add("show");
        }, 100);
      }, 500);
    });

  (0,_common_common_js__WEBPACK_IMPORTED_MODULE_2__.moveTop)();
};




/***/ }),

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/*! namespace exports */
/*! export footerLoad [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "footerLoad": () => /* binding */ footerLoad
/* harmony export */ });
/* harmony import */ var _footer_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.html */ "./src/components/footer/footer.html");
/* harmony import */ var _footer_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_footer_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.scss */ "./src/components/footer/footer.scss");
;


const footerLoad = () => {
  let doc = new DOMParser().parseFromString((_footer_html__WEBPACK_IMPORTED_MODULE_0___default()), "text/html");

  document.body.insertBefore(
    doc.documentElement,
    document.querySelector("script")
  );
};




/***/ }),

/***/ "./src/components/navbar/navbar.js":
/*!*****************************************!*\
  !*** ./src/components/navbar/navbar.js ***!
  \*****************************************/
/*! namespace exports */
/*! export navbarLoad [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navbarLoad": () => /* binding */ navbarLoad
/* harmony export */ });
/* harmony import */ var _navbar_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.scss */ "./src/components/navbar/navbar.scss");
/* harmony import */ var _navbar_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.html */ "./src/components/navbar/navbar.html");
/* harmony import */ var _navbar_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navbar_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hamburger_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hamburger.svg */ "./src/components/navbar/hamburger.svg");
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/common.js */ "./src/common/common.js");
/* harmony import */ var _contact_contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contact/contact.js */ "./src/components/contact/contact.js");
/* harmony import */ var _sidebar_sidebar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sidebar/sidebar.js */ "./src/components/sidebar/sidebar.js");
;









const navbarLoad = () => {
  document.body.insertAdjacentHTML("afterbegin", (_navbar_html__WEBPACK_IMPORTED_MODULE_1___default()));

  let navLinks = document.querySelectorAll("nav li");

  navLinks.forEach((element, index) => {
    element.addEventListener("click", (event) => {
      let clickedElem = event.target;
      (0,_common_common_js__WEBPACK_IMPORTED_MODULE_3__.clickStyle)(clickedElem, "nav-li-clicked");

      index == 0 ? (0,_common_common_js__WEBPACK_IMPORTED_MODULE_3__.homepageLoad)() : (0,_contact_contact_js__WEBPACK_IMPORTED_MODULE_4__.contactLoad)();
    });
  });

  let dropdownButton = document.getElementById("dropdown-button-wrapper");
  dropdownButton.insertAdjacentHTML("afterbegin", _hamburger_svg__WEBPACK_IMPORTED_MODULE_2__.default);

  dropdownButton.addEventListener("click", (event) => {
    dropdownButton.classList.toggle("nav-selected");
    (0,_sidebar_sidebar_js__WEBPACK_IMPORTED_MODULE_5__.sidebarMobileShow)();
  });
};




/***/ }),

/***/ "./src/components/sidebar/sidebar.js":
/*!*******************************************!*\
  !*** ./src/components/sidebar/sidebar.js ***!
  \*******************************************/
/*! namespace exports */
/*! export sidebarLoad [provided] [no usage info] [missing usage info prevents renaming] */
/*! export sidebarMobileShow [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sidebarLoad": () => /* binding */ sidebarLoad,
/* harmony export */   "sidebarMobileShow": () => /* binding */ sidebarMobileShow
/* harmony export */ });
/* harmony import */ var _sidebar_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.scss */ "./src/components/sidebar/sidebar.scss");
/* harmony import */ var _sidebar_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.html */ "./src/components/sidebar/sidebar.html");
/* harmony import */ var _sidebar_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sidebar_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/common.js */ "./src/common/common.js");
/* harmony import */ var _articles_articles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../articles/articles */ "./src/components/articles/articles.js");
/* harmony import */ var _contact_contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contact/contact.js */ "./src/components/contact/contact.js");
;





const sidebarLoad = () => {
  document.querySelector("main").insertAdjacentHTML("afterbegin", (_sidebar_html__WEBPACK_IMPORTED_MODULE_1___default()));

  document.querySelectorAll("aside li").forEach((element) => {
    element.addEventListener("click", (event) => {
      let clickedElem = event.target;

      (0,_common_common_js__WEBPACK_IMPORTED_MODULE_2__.clickStyle)(clickedElem, "side-div-clicked");

      if (clickedElem.hasAttribute("id")) {
        (0,_contact_contact_js__WEBPACK_IMPORTED_MODULE_4__.contactLoad)();
      } else {
        (0,_articles_articles__WEBPACK_IMPORTED_MODULE_3__.articleLoad)(clickedElem.getAttribute("linkTo"));
      }

      if (screen.width <= 768) {
        document.getElementsByTagName("aside")[0].style.display = "none";
      }

      document
        .getElementById("dropdown-button-wrapper")
        .classList.toggle("nav-selected");
    });
  });
};

const sidebarMobileShow = () => {
  let sidebar = document.getElementsByTagName("aside")[0];

  if (
    document
      .getElementById("dropdown-button-wrapper")
      .classList.contains("nav-selected")
  ) {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
  }
};




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _components_navbar_navbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.js */ "./src/components/navbar/navbar.js");
/* harmony import */ var _common_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/common.js */ "./src/common/common.js");
/* harmony import */ var _components_footer_footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.js */ "./src/components/footer/footer.js");
;





(0,_components_navbar_navbar_js__WEBPACK_IMPORTED_MODULE_1__.navbarLoad)();
(0,_common_common_js__WEBPACK_IMPORTED_MODULE_2__.homepageLoad)();
(0,_components_footer_footer_js__WEBPACK_IMPORTED_MODULE_3__.footerLoad)();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZWNoLWFzaWEvLi9zcmMvY29tcG9uZW50cy9hcnRpY2xlcy9hcnRpY2xlcy5zY3NzIiwid2VicGFjazovL3RlY2gtYXNpYS8uL3NyYy9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5zY3NzIiwid2VicGFjazovL3RlY2gtYXNpYS8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuc2NzcyIsIndlYnBhY2s6Ly90ZWNoLWFzaWEvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLnNjc3MiLCJ3ZWJwYWNrOi8vdGVjaC1hc2lhLy4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLnNjc3MiLCJ3ZWJwYWNrOi8vdGVjaC1hc2lhLy4vc3JjL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vdGVjaC1hc2lhLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZWNoLWFzaWEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly90ZWNoLWFzaWEvLi9zcmMvY29tcG9uZW50cy9hcnRpY2xlcy9pbWcvY2hpbmEuanBnIiwid2VicGFjazovL3RlY2gtYXNpYS8uL3NyYy9jb21wb25lbnRzL2FydGljbGVzL2ltZy9pbmRpYS5qcGciLCJ3ZWJwYWNrOi8vdGVjaC1hc2lhLy4vc3JjL2NvbXBvbmVudHMvYXJ0aWNsZXMvaW1nL2luZG9uZXNpYS5qcGciLCJ3ZWJwYWNrOi8vdGVjaC1hc2lhLy4vc3JjL2NvbXBvbmVudHMvYXJ0aWNsZXMvaW1nL21hbGF5c2lhLmpwZWciLCJ3ZWJwYWNrOi8vdGVjaC1hc2lhLy4vc3JjL2NvbXBvbmVudHMvYXJ0aWNsZXMvaW1nL3BoaWxpcHBpbmVzLmpwZyIsIndlYnBhY2s6Ly90ZWNoLWFzaWEvLi9zcmMvY29tcG9uZW50cy9hcnRpY2xlcy9pbWcvc2luZ2Fwb3JlLmpwZyIsIndlYnBhY2s6Ly90ZWNoLWFzaWEvLi9zcmMvY29tcG9uZW50cy9hcnRpY2xlcy9pbWcvdGhhaWxhbmQuanBnIiwid2VicGFjazovL3RlY2gtYXNpYS8uL3NyYy9jb21wb25lbnRzL2FydGljbGVzL2ltZy92aWV0bmFtLTIuanBnIiwid2VicGFjazovL3RlY2gtYXNpYS8uL3NyYy9jb21wb25lbnRzL2FydGljbGVzL2ltZy92aWV0bmFtLmpwZyIsIndlYnBhY2s6Ly90ZWNoLWFzaWEvLi9zcmMvY29tcG9uZW50cy9hcnRpY2xlcy9hcnRpY2xlcy5odG1sIiwid2VicGFjazovL3RlY2gtYXNpYS8uL3NyYy9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5odG1sIiwid2VicGFjazovL3RlY2gtYXNpYS8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuaHRtbCIsIndlYnBhY2s6Ly90ZWNoLWFzaWEvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmh0bWwiLCJ3ZWJwYWNrOi8vdGVjaC1hc2lhLy4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmh0bWwiLCJ3ZWJwYWNrOi8vdGVjaC1hc2lhLy4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdGVjaC1hc2lhLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL2hhbWJ1cmdlci5zdmciLCJ3ZWJwYWNrOi8vdGVjaC1hc2lhLy4vc3JjL2NvbXBvbmVudHMvYXJ0aWNsZXMvYXJ0aWNsZXMuc2Nzcz83OGQ1Iiwid2VicGFjazovL3RlY2gtYXNpYS8uL3NyYy9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5zY3NzPzgyNDAiLCJ3ZWJwYWNrOi8vdGVjaC1hc2lhLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5zY3NzPzU2OGQiLCJ3ZWJwYWNrOi8vdGVjaC1hc2lhLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5zY3NzP2FlMzciLCJ3ZWJwYWNrOi8vdGVjaC1hc2lhLy4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLnNjc3M/ZDgyOSIsIndlYnBhY2s6Ly90ZWNoLWFzaWEvLi9zcmMvaW5kZXguc2Nzcz84YWQyIiwid2VicGFjazovL3RlY2gtYXNpYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZWNoLWFzaWEvLi9zcmMvY29tbW9uL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly90ZWNoLWFzaWEvLi9zcmMvY29tcG9uZW50cy9hcnRpY2xlcy9hcnRpY2xlcy5qcyIsIndlYnBhY2s6Ly90ZWNoLWFzaWEvLi9zcmMvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vdGVjaC1hc2lhLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly90ZWNoLWFzaWEvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmpzIiwid2VicGFjazovL3RlY2gtYXNpYS8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90ZWNoLWFzaWEvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVjaC1hc2lhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlY2gtYXNpYS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZWNoLWFzaWEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlY2gtYXNpYS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RlY2gtYXNpYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlY2gtYXNpYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlY2gtYXNpYS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90ZWNoLWFzaWEvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLENBQTRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSw0REFBNEQsNEJBQTRCLGlDQUFpQyxxQkFBcUIsR0FBRyx1QkFBdUIsd0JBQXdCLG1CQUFtQixHQUFHLGlCQUFpQixvQkFBb0Isd0JBQXdCLHNCQUFzQixHQUFHLFlBQVksbUJBQW1CLEdBQUcsY0FBYyxxQkFBcUIsb0JBQW9CLEdBQUcscUJBQXFCLG9CQUFvQixtQkFBbUIsR0FBRywrQkFBK0Isc0JBQXNCLG9CQUFvQixLQUFLLHdCQUF3QixzQkFBc0IsS0FBSyx5QkFBeUIsb0JBQW9CLHdCQUF3QixLQUFLLDZCQUE2QixxQkFBcUIsS0FBSyx3Q0FBd0Msd0JBQXdCLEtBQUssbUJBQW1CLHdCQUF3Qiw0QkFBNEIsS0FBSyxHQUFHLE9BQU8sd0dBQXdHLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLEtBQUssTUFBTSxXQUFXLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLHNEQUFzRCxzQ0FBc0Msc0NBQXNDLCtCQUErQixtQ0FBbUMseUNBQXlDLDRDQUE0Qyw2QkFBNkIsNkJBQTZCLDBCQUEwQix3QkFBd0Isc0JBQXNCLDRCQUE0QixpQ0FBaUMscUJBQXFCLFVBQVUsMEJBQTBCLHdCQUF3QixLQUFLLEdBQUcsaUJBQWlCLG9CQUFvQix3QkFBd0Isc0JBQXNCLEdBQUcsWUFBWSxt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QTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7O1VDZkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYXJ0aWNsZS1zZWN0aW9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG4gIHBhZGRpbmc6IDJyZW0gNXJlbSA1cmVtIDVyZW07XFxuICBtYXgtd2lkdGg6IDYwcmVtO1xcbn1cXG4uYXJ0aWNsZS1zZWN0aW9uIGgxIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBjb2xvcjogIzZjMDYwNDtcXG59XFxuXFxuI3N1YmhlYWRpbmcge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5maWd1cmUge1xcbiAgbWFyZ2luOiAycmVtIDA7XFxufVxcbmZpZ3VyZSBpbWcge1xcbiAgbWF4LWhlaWdodDogNzB2aDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuZmlndXJlIGZpZ2NhcHRpb24ge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6ICM0NzQ5NTI7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xcbiAgLmFydGljbGUtc2VjdGlvbiB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICB9XFxuICAuYXJ0aWNsZS1zZWN0aW9uIHAge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuICAuYXJ0aWNsZS1zZWN0aW9uIGgxIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICB9XFxuICAuYXJ0aWNsZS1zZWN0aW9uIGZpZ3VyZSB7XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbiAgfVxcbiAgLmFydGljbGUtc2VjdGlvbiBmaWd1cmUgZmlnY2FwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgfVxcblxcbiAgI3N1YmhlYWRpbmcge1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9hcnRpY2xlcy9hcnRpY2xlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWNBO0VBQ0UscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FBYkY7QUFlRTtFQUNFLG1CQUFBO0VBQ0EsY0FqQlE7QUFJWjs7QUFpQkE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQWRGOztBQWlCQTtFQUNFLGNBQUE7QUFkRjtBQWdCRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQWRKO0FBaUJFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFmSjs7QUFtQkE7RUFDRTtJQUNFLGFBdENrQjtFQXNCcEI7RUFrQkU7SUFDRSxlQUFBO0VBaEJKO0VBbUJFO0lBQ0UsYUFBQTtJQUNBLGlCQUFBO0VBakJKO0VBb0JFO0lBQ0UsY0FBQTtFQWxCSjtFQW9CSTtJQUNFLGlCQUFBO0VBbEJOOztFQXVCQTtJQUNFLGlCQUFBO0lBQ0EscUJBQUE7RUFwQkY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkZ3JheTogaHNsYSgyMzAsIDclLCA4NCUsIDEpO1xcbiRkYXJrLWdyZWVuOiBoc2xhKDE3NywgMTAwJSwgNCUsIDEpO1xcbiRjaGluZXNlLXJlZDogaHNsYSgxNSwgODclLCAzNCUsIDEpO1xcbiRnb2xkOiBoc2xhKDQyLCA3OSUsIDU0JSwgMSk7XFxuJGJsb29kLXJlZDogaHNsYSgxLCA5MyUsIDIyJSwgMSk7XFxuJHRyYW5zcGFyZW50LWdyYXk6IGhzbGEoMCwgMCUsIDk3JSwgMSk7XFxuJHRyYW5zcGFyZW50LXJlZDogaHNsYSgxNSwgODclLCAzNCUsIDAuNyk7XFxuXFxuJHNpdGUtcGFkZGluZy1sZWZ0OiAycmVtO1xcbiRtb2JpbGUtcGFkZGluZy1sZWZ0OiAxcmVtO1xcblxcbiR0YWJsZXQtc2NyZWVuOiA3NjhweDtcXG4kbW9iaWxlLXNjcmVlbjogNTc2cHg7XFxuXFxuLmFydGljbGUtc2VjdGlvbiB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuICBwYWRkaW5nOiAycmVtIDVyZW0gNXJlbSA1cmVtO1xcbiAgbWF4LXdpZHRoOiA2MHJlbTtcXG5cXG4gIGgxIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgY29sb3I6ICRibG9vZC1yZWQ7XFxuICB9XFxufVxcblxcbiNzdWJoZWFkaW5nIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuZmlndXJlIHtcXG4gIG1hcmdpbjogMnJlbSAwO1xcblxcbiAgaW1nIHtcXG4gICAgbWF4LWhlaWdodDogNzB2aDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgZmlnY2FwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IGhzbGEoMjMwLCA3JSwgMzAlLCAxKTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtc2NyZWVuKSB7XFxuICAuYXJ0aWNsZS1zZWN0aW9uIHtcXG4gICAgcGFkZGluZzogJG1vYmlsZS1wYWRkaW5nLWxlZnQ7XFxuXFxuICAgIHAge1xcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgfVxcblxcbiAgICBoMSB7XFxuICAgICAgbWFyZ2luLXRvcDogMDtcXG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgfVxcblxcbiAgICBmaWd1cmUge1xcbiAgICAgIG1hcmdpbjogMXJlbSAwO1xcblxcbiAgICAgIGZpZ2NhcHRpb24ge1xcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAjc3ViaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNjb250YWN0LXNlY3Rpb24ge1xcbiAgcGFkZGluZzogNHJlbSAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDE2MiwgNDksIDExLCAwLjcpO1xcbn1cXG4jY29udGFjdC1zZWN0aW9uID4gZGl2IHtcXG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XFxuICBwYWRkaW5nOiAzcmVtIDdyZW07XFxuICB3aWR0aDogNDByZW07XFxufVxcbiNjb250YWN0LXNlY3Rpb24gaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jY29udGFjdC1zZWN0aW9uIGZvcm0gKiB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG59XFxuI2NvbnRhY3Qtc2VjdGlvbiBmb3JtIHtcXG4gIG1hcmdpbi10b3A6IDVyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ2FwOiAxLjVyZW0gMnJlbTtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XFxufVxcbiNjb250YWN0LXNlY3Rpb24gZm9ybSAuZnVsbFJvdyB7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uLWVuZDogc3BhbiAyO1xcbn1cXG4jY29udGFjdC1zZWN0aW9uIGZvcm0gaW5wdXQsXFxuI2NvbnRhY3Qtc2VjdGlvbiBmb3JtIHRleHRhcmVhIHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxufVxcbiNjb250YWN0LXNlY3Rpb24gZm9ybSBpbnB1dCB7XFxuICBwYWRkaW5nLXRvcDogMC42cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNnJlbTtcXG59XFxuI2NvbnRhY3Qtc2VjdGlvbiBmb3JtIHRleHRhcmVhIHtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcbiNjb250YWN0LXNlY3Rpb24gZm9ybSBsYWJlbCxcXG4jY29udGFjdC1zZWN0aW9uIGZvcm0gc2VsZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4jY29udGFjdC1zZWN0aW9uIGZvcm0gbGFiZWwge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG4jY29udGFjdC1zZWN0aW9uIGZvcm0gc2VsZWN0IHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiAjNGY0ZjRmO1xcbn1cXG4jY29udGFjdC1zZWN0aW9uIGZvcm0gYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDE2MiwgNDksIDExLCAwLjcpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLWNvbG9yOiAjMDAxNDEzO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgd2lkdGg6IDE1cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jY29udGFjdC1zZWN0aW9uIGZvcm0gYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiAjZTZhZjJkO1xcbiAgYmFja2dyb3VuZDogIzAwMTQxMztcXG4gIGJvcmRlci1jb2xvcjogI2U2YWYyZDtcXG59XFxuI2NvbnRhY3Qtc2VjdGlvbiAjc3VibWl0dGVkIHtcXG4gIG1hcmdpbjogMTByZW0gMDtcXG4gIGJhY2tncm91bmQ6ICMwMDE0MTM7XFxuICBjb2xvcjogI2U2YWYyZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEuNXJlbSAyLjVyZW07XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XFxufVxcbiNjb250YWN0LXNlY3Rpb24gLmhpZGUge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuI2NvbnRhY3Qtc2VjdGlvbiAuc2hvdyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAjY29udGFjdC1zZWN0aW9uICoge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgfVxcblxcbiAgI2NvbnRhY3Qtc2VjdGlvbiB7XFxuICAgIHBhZGRpbmc6IDJyZW0gMDtcXG4gIH1cXG4gICNjb250YWN0LXNlY3Rpb24gaDEge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gIH1cXG4gICNjb250YWN0LXNlY3Rpb24gPiBkaXYge1xcbiAgICBwYWRkaW5nOiAwIDEuNXJlbTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxuICAjY29udGFjdC1zZWN0aW9uIGZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgfVxcbiAgI2NvbnRhY3Qtc2VjdGlvbiBmb3JtIGJ1dHRvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICB9XFxuXFxuICAjc3VibWl0dGVkIHtcXG4gICAgbWFyZ2luOiAzNXZoIDF2dyAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nOiAxLjVyZW0gIWltcG9ydGFudDtcXG4gICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xcbiAgI2NvbnRhY3Qtc2VjdGlvbiA+IGRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgI2NvbnRhY3Qtc2VjdGlvbiA+IGRpdiBmb3JtICoge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuICAjY29udGFjdC1zZWN0aW9uID4gZGl2IGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3Quc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFjQTtFQUNFLGVBQUE7RUFHQSxXQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FqQmdCO0FBQ2xCO0FBa0JFO0VBQ0UsbUJBckJlO0VBc0JmLGtCQUFBO0VBQ0EsWUFBQTtBQWhCSjtBQW1CRTtFQUNFLGtCQUFBO0FBakJKO0FBb0JFO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtBQWxCSjtBQXFCRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFHQSxVQUFBO0VBQ0Esd0JBQUE7QUFyQko7QUF1Qkk7RUFDRSxvQkFBQTtFQUNBLHVCQUFBO0FBckJOO0FBd0JJOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUF0Qk47QUF5Qkk7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0FBdkJOO0FBMEJJO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQXhCTjtBQTJCSTs7RUFFRSxjQUFBO0FBekJOO0FBNEJJO0VBQ0UscUJBQUE7QUExQk47QUE2Qkk7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBM0JOO0FBOEJJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBbkZZO0VBb0ZaLFlBQUE7RUFDQSxxQkExRk87RUEyRlAscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUE1Qk47QUErQkk7RUFDRSxjQWpHQztFQWtHRCxtQkFwR087RUFxR1AscUJBbkdDO0FBc0VQO0FBaUNFO0VBQ0UsZUFBQTtFQUNBLG1CQTNHUztFQTRHVCxjQTFHRztFQTJHSCxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUdBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7QUFqQ0o7QUFxQ0U7RUFDRSxVQUFBO0FBbkNKO0FBc0NFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FBcENKOztBQXdDQTtFQUNFO0lBQ0Usc0JBQUE7RUFyQ0Y7O0VBd0NBO0lBQ0UsZUFBQTtFQXJDRjtFQXVDRTtJQUNFLGlCQUFBO0VBckNKO0VBd0NFO0lBQ0UsaUJBQUE7SUFDQSxXQUFBO0VBdENKO0VBeUNFO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsZ0JBQUE7RUF2Q0o7RUF5Q0k7SUFDRSxtQkFBQTtFQXZDTjs7RUE0Q0E7SUFDRSwyQkFBQTtJQUNBLDBCQUFBO0lBQ0EsMEJBQUE7RUF6Q0Y7QUFDRjtBQTRDQTtFQUNFO0lBQ0UsV0FBQTtFQTFDRjtFQTRDRTtJQUNFLGVBQUE7RUExQ0o7RUE2Q0U7SUFDRSxXQUFBO0VBM0NKO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGdyYXk6IGhzbGEoMjMwLCA3JSwgODQlLCAxKTtcXG4kZGFyay1ncmVlbjogaHNsYSgxNzcsIDEwMCUsIDQlLCAxKTtcXG4kY2hpbmVzZS1yZWQ6IGhzbGEoMTUsIDg3JSwgMzQlLCAxKTtcXG4kZ29sZDogaHNsYSg0MiwgNzklLCA1NCUsIDEpO1xcbiRibG9vZC1yZWQ6IGhzbGEoMSwgOTMlLCAyMiUsIDEpO1xcbiR0cmFuc3BhcmVudC1ncmF5OiBoc2xhKDAsIDAlLCA5NyUsIDEpO1xcbiR0cmFuc3BhcmVudC1yZWQ6IGhzbGEoMTUsIDg3JSwgMzQlLCAwLjcpO1xcblxcbiRzaXRlLXBhZGRpbmctbGVmdDogMnJlbTtcXG4kbW9iaWxlLXBhZGRpbmctbGVmdDogMXJlbTtcXG5cXG4kdGFibGV0LXNjcmVlbjogNzY4cHg7XFxuJG1vYmlsZS1zY3JlZW46IDU3NnB4O1xcblxcbiNjb250YWN0LXNlY3Rpb24ge1xcbiAgcGFkZGluZzogNHJlbSAwO1xcblxcbiAgLy9uZWVkZWQgYmVjYXVzZSA8bWFpbj4gZWxlbSBoYWQgZmxleCBkaXNwbGF5XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICR0cmFuc3BhcmVudC1yZWQ7XFxuXFxuICA+IGRpdiB7XFxuICAgIGJhY2tncm91bmQ6ICR0cmFuc3BhcmVudC1ncmF5O1xcbiAgICBwYWRkaW5nOiAzcmVtIDdyZW07XFxuICAgIHdpZHRoOiA0MHJlbTtcXG4gIH1cXG5cXG4gIGgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgZm9ybSAqIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG4gIH1cXG5cXG4gIGZvcm0ge1xcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMS41cmVtIDJyZW07XFxuXFxuICAgIC8vZm9yIHRoZSBmYWRlIG91dCBlZmZlY3RcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xcblxcbiAgICAuZnVsbFJvdyB7XFxuICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgICAgZ3JpZC1jb2x1bW4tZW5kOiBzcGFuIDI7XFxuICAgIH1cXG5cXG4gICAgaW5wdXQsXFxuICAgIHRleHRhcmVhIHtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcXG4gICAgfVxcblxcbiAgICBpbnB1dCB7XFxuICAgICAgcGFkZGluZy10b3A6IDAuNnJlbTtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMC42cmVtO1xcbiAgICB9XFxuXFxuICAgIHRleHRhcmVhIHtcXG4gICAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gICAgfVxcblxcbiAgICBsYWJlbCxcXG4gICAgc2VsZWN0IHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcblxcbiAgICBsYWJlbCB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgICB9XFxuXFxuICAgIHNlbGVjdCB7XFxuICAgICAgcGFkZGluZzogMC41cmVtIDAuNXJlbTtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBjb2xvcjogaHNsYSgxNSwgMCUsIDMxJSwgMSk7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICAgIHBhZGRpbmc6IDFyZW0gMDtcXG4gICAgICBiYWNrZ3JvdW5kOiAkdHJhbnNwYXJlbnQtcmVkO1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICBib3JkZXItY29sb3I6ICRkYXJrLWdyZWVuO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICAgIHdpZHRoOiAxNXJlbTtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uOmhvdmVyIHtcXG4gICAgICBjb2xvcjogJGdvbGQ7XFxuICAgICAgYmFja2dyb3VuZDogJGRhcmstZ3JlZW47XFxuICAgICAgYm9yZGVyLWNvbG9yOiAkZ29sZDtcXG4gICAgfVxcbiAgfVxcblxcbiAgI3N1Ym1pdHRlZCB7XFxuICAgIG1hcmdpbjogMTByZW0gMDtcXG4gICAgYmFja2dyb3VuZDogJGRhcmstZ3JlZW47XFxuICAgIGNvbG9yOiAkZ29sZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxLjVyZW0gMi41cmVtO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjZyZW07XFxuXFxuICAgIC8vZm9yIHRoZSBmYWRlIGluIGVmZmVjdFxcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XFxuICB9XFxuXFxuICAvL2ZvciB0aGUgZmFkZSBvdXQvaW4gZWZmZWN0XFxuICAuaGlkZSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuXFxuICAuc2hvdyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0LXNjcmVlbikge1xcbiAgI2NvbnRhY3Qtc2VjdGlvbiAqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIH1cXG5cXG4gICNjb250YWN0LXNlY3Rpb24ge1xcbiAgICBwYWRkaW5nOiAycmVtIDA7XFxuXFxuICAgIGgxIHtcXG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgfVxcblxcbiAgICA+IGRpdiB7XFxuICAgICAgcGFkZGluZzogMCAxLjVyZW07XFxuICAgICAgd2lkdGg6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgZm9ybSB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XFxuXFxuICAgICAgYnV0dG9uIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAjc3VibWl0dGVkIHtcXG4gICAgbWFyZ2luOiAzNXZoIDF2dyAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nOiAxLjVyZW0gIWltcG9ydGFudDtcXG4gICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlLXNjcmVlbikge1xcbiAgI2NvbnRhY3Qtc2VjdGlvbiA+IGRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBmb3JtICoge1xcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgfVxcblxcbiAgICBidXR0b24ge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImZvb3RlciB7XFxuICBwYWRkaW5nOiAxLjNyZW0gMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR29sZG1hblxcXCI7XFxuICBiYWNrZ3JvdW5kOiAjZDNkNGQ5O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcXG4gIGZvb3RlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBY0E7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBakJLO0FBSVA7O0FBZ0JBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLGVBQUE7RUFiRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRncmF5OiBoc2xhKDIzMCwgNyUsIDg0JSwgMSk7XFxuJGRhcmstZ3JlZW46IGhzbGEoMTc3LCAxMDAlLCA0JSwgMSk7XFxuJGNoaW5lc2UtcmVkOiBoc2xhKDE1LCA4NyUsIDM0JSwgMSk7XFxuJGdvbGQ6IGhzbGEoNDIsIDc5JSwgNTQlLCAxKTtcXG4kYmxvb2QtcmVkOiBoc2xhKDEsIDkzJSwgMjIlLCAxKTtcXG4kdHJhbnNwYXJlbnQtZ3JheTogaHNsYSgwLCAwJSwgOTclLCAxKTtcXG4kdHJhbnNwYXJlbnQtcmVkOiBoc2xhKDE1LCA4NyUsIDM0JSwgMC43KTtcXG5cXG4kc2l0ZS1wYWRkaW5nLWxlZnQ6IDJyZW07XFxuJG1vYmlsZS1wYWRkaW5nLWxlZnQ6IDFyZW07XFxuXFxuJHRhYmxldC1zY3JlZW46IDc2OHB4O1xcbiRtb2JpbGUtc2NyZWVuOiA1NzZweDtcXG5cXG5mb290ZXIge1xcbiAgcGFkZGluZzogMS4zcmVtICRzaXRlLXBhZGRpbmctbGVmdDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR29sZG1hblxcXCI7XFxuICBiYWNrZ3JvdW5kOiAkZ3JheTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtc2NyZWVuKSB7XFxuICBmb290ZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwibmF2IHtcXG4gIGJhY2tncm91bmQ6ICNkM2Q0ZDk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHb2xkbWFuXFxcIjtcXG4gIGNvbG9yOiAjMDAxNDEzO1xcbn1cXG5uYXYgZGl2IHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxubmF2IHVsID4gbGksXFxubmF2ICNuYXYtbG9nby13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDAgMnJlbTtcXG59XFxubmF2ICNuYXYtbG9nby13cmFwcGVyIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgcGFkZGluZy10b3A6IDAuOHJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjhyZW07XFxufVxcbm5hdiB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxufVxcbm5hdiB1bCBsaSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxubmF2IHVsIGxpOmhvdmVyIHtcXG4gIGNvbG9yOiAjZTZhZjJkO1xcbiAgYmFja2dyb3VuZDogIzAwMTQxMztcXG59XFxubmF2ICNkcm9wZG93bi1idXR0b24td3JhcHBlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jbmF2LWxvZ28tcmVkIHtcXG4gIGNvbG9yOiAjYTIzMTBiO1xcbn1cXG5cXG4ubmF2LWxpLWNsaWNrZWQ6aG92ZXIge1xcbiAgY29sb3I6ICMwMDE0MTM7XFxuICBiYWNrZ3JvdW5kOiAjZTZhZjJkO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIG5hdiB1bCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICBuYXYgI25hdi1sb2dvLXdyYXBwZXIge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG5cXG4gICNkcm9wZG93bi1idXR0b24td3JhcHBlciB7XFxuICAgIHdpZHRoOiAzcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDJyZW07XFxuICB9XFxuXFxuICAubmF2LXNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZDogIzZjMDYwNDtcXG4gIH1cXG4gIC5uYXYtc2VsZWN0ZWQgc3ZnIHtcXG4gICAgZmlsbDogI2U2YWYyZDtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICBuYXYgI25hdi1sb2dvLXdyYXBwZXIge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgfVxcblxcbiAgI2Ryb3Bkb3duLWJ1dHRvbi13cmFwcGVyIHtcXG4gICAgd2lkdGg6IDIuNXJlbTtcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBY0E7RUFDRSxtQkFmSztFQWdCTCxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBbEJXO0FBS2I7QUFlRTtFQUNFLGVBQUE7QUFiSjtBQWdCRTs7RUFFRSxlQUFBO0FBZEo7QUFpQkU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFmSjtBQWtCRTtFQUNFLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBaEJKO0FBa0JJO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFoQk47QUFtQkk7RUFDRSxjQWpEQztFQWtERCxtQkFwRE87QUFtQ2I7QUFxQkU7RUFDRSxhQUFBO0FBbkJKOztBQXVCQTtFQUNFLGNBN0RZO0FBeUNkOztBQXVCQTtFQUNFLGNBbEVXO0VBbUVYLG1CQWpFSztBQTZDUDs7QUF5QkE7RUFFSTtJQUNFLGFBQUE7RUF2Qko7RUEwQkU7SUFDRSxpQkFBQTtFQXhCSjs7RUE0QkE7SUFDRSxXQUFBO0lBQ0Esd0JBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0VBekJGOztFQTRCQTtJQUNFLG1CQTFGUTtFQWlFVjtFQTJCRTtJQUNFLGFBOUZDO0VBcUVMO0FBQ0Y7QUErQkE7RUFFSTtJQUNFLGlCQUFBO0lBQ0Esa0JBbkdnQjtJQW9HaEIsbUJBcEdnQjtFQXNFcEI7O0VBa0NBO0lBQ0UsYUFBQTtJQUNBLGVBQUE7RUEvQkY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkZ3JheTogaHNsYSgyMzAsIDclLCA4NCUsIDEpO1xcbiRkYXJrLWdyZWVuOiBoc2xhKDE3NywgMTAwJSwgNCUsIDEpO1xcbiRjaGluZXNlLXJlZDogaHNsYSgxNSwgODclLCAzNCUsIDEpO1xcbiRnb2xkOiBoc2xhKDQyLCA3OSUsIDU0JSwgMSk7XFxuJGJsb29kLXJlZDogaHNsYSgxLCA5MyUsIDIyJSwgMSk7XFxuJHRyYW5zcGFyZW50LWdyYXk6IGhzbGEoMCwgMCUsIDk3JSwgMSk7XFxuJHRyYW5zcGFyZW50LXJlZDogaHNsYSgxNSwgODclLCAzNCUsIDAuNyk7XFxuXFxuJHNpdGUtcGFkZGluZy1sZWZ0OiAycmVtO1xcbiRtb2JpbGUtcGFkZGluZy1sZWZ0OiAxcmVtO1xcblxcbiR0YWJsZXQtc2NyZWVuOiA3NjhweDtcXG4kbW9iaWxlLXNjcmVlbjogNTc2cHg7XFxuXFxubmF2IHtcXG4gIGJhY2tncm91bmQ6ICRncmF5O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR29sZG1hblxcXCI7XFxuICBjb2xvcjogJGRhcmstZ3JlZW47XFxuXFxuICBkaXYge1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICB9XFxuXFxuICB1bCA+IGxpLFxcbiAgI25hdi1sb2dvLXdyYXBwZXIge1xcbiAgICBwYWRkaW5nOiAwICRzaXRlLXBhZGRpbmctbGVmdDtcXG4gIH1cXG5cXG4gICNuYXYtbG9nby13cmFwcGVyIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIHBhZGRpbmctdG9wOiAwLjhyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjhyZW07XFxuICB9XFxuXFxuICB1bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcblxcbiAgICBsaSB7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgIGxpOmhvdmVyIHtcXG4gICAgICBjb2xvcjogJGdvbGQ7XFxuICAgICAgYmFja2dyb3VuZDogJGRhcmstZ3JlZW47XFxuICAgIH1cXG4gIH1cXG5cXG4gICNkcm9wZG93bi1idXR0b24td3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbiNuYXYtbG9nby1yZWQge1xcbiAgY29sb3I6ICRjaGluZXNlLXJlZDtcXG59XFxuXFxuLm5hdi1saS1jbGlja2VkOmhvdmVyIHtcXG4gIGNvbG9yOiAkZGFyay1ncmVlbjtcXG4gIGJhY2tncm91bmQ6ICRnb2xkO1xcbn1cXG5cXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0LXNjcmVlbikge1xcbiAgbmF2IHtcXG4gICAgdWwge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgI25hdi1sb2dvLXdyYXBwZXIge1xcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB9XFxuICB9XFxuXFxuICAjZHJvcGRvd24tYnV0dG9uLXdyYXBwZXIge1xcbiAgICB3aWR0aDogM3JlbTtcXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAkc2l0ZS1wYWRkaW5nLWxlZnQ7XFxuICB9XFxuXFxuICAubmF2LXNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZDogJGJsb29kLXJlZDtcXG5cXG4gICAgc3ZnIHtcXG4gICAgICBmaWxsOiAkZ29sZDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlLXNjcmVlbikge1xcbiAgbmF2IHtcXG4gICAgI25hdi1sb2dvLXdyYXBwZXIge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICAgIHBhZGRpbmctbGVmdDogJG1vYmlsZS1wYWRkaW5nLWxlZnQ7XFxuICAgICAgcGFkZGluZy1yaWdodDogJG1vYmlsZS1wYWRkaW5nLWxlZnQ7XFxuICAgIH1cXG4gIH1cXG5cXG4gICNkcm9wZG93bi1idXR0b24td3JhcHBlciB7XFxuICAgIHdpZHRoOiAyLjVyZW07XFxuICAgIHBhZGRpbmc6IDAgJG1vYmlsZS1wYWRkaW5nLWxlZnQ7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImFzaWRlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQ6ICMwMDE0MTM7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90byBDb25kZW5zZWRcXFwiO1xcbiAgY29sb3I6ICNlNmFmMmQ7XFxufVxcbmFzaWRlIHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAycmVtO1xcbn1cXG5hc2lkZSB1bCBsaSB7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmFzaWRlIHVsIC5oaWRkZW4tbmF2IHtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbmFzaWRlIHVsIGxpOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDAxNDEzO1xcbiAgYmFja2dyb3VuZDogI2U2YWYyZDtcXG59XFxuXFxuLnNpZGUtZGl2LWNsaWNrZWQ6aG92ZXIge1xcbiAgY29sb3I6ICNlNmFmMmQ7XFxuICBiYWNrZ3JvdW5kOiAjNmMwNjA0O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIGFzaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIGFzaWRlIHVsIC5oaWRkZW4tbmF2IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xcbiAgYXNpZGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuICBhc2lkZSBsaSB7XFxuICAgIHBhZGRpbmctdG9wOiAwLjdyZW0gIWltcG9ydGFudDtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuN3JlbSAhaW1wb3J0YW50O1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFjQTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFoQlc7RUFpQlgsK0JBQUE7RUFDQSxjQWhCSztBQUdQO0FBZUU7RUFDRSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFiSjtBQWVJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBYk47QUFnQkk7RUFDRSxrQkEzQmM7RUE0QmQsYUFBQTtBQWROO0FBaUJJO0VBQ0UsY0F2Q087RUF3Q1AsbUJBdENDO0FBdUJQOztBQW9CQTtFQUNFLGNBNUNLO0VBNkNMLG1CQTVDVTtBQTJCWjs7QUFvQkE7RUFDRTtJQUNFLGFBQUE7RUFqQkY7RUFtQkU7SUFDRSxjQUFBO0VBakJKO0FBQ0Y7QUFxQkE7RUFDRTtJQUNFLGVBQUE7RUFuQkY7RUFxQkU7SUFDRSw4QkFBQTtJQUNBLGlDQUFBO0VBbkJKO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGdyYXk6IGhzbGEoMjMwLCA3JSwgODQlLCAxKTtcXG4kZGFyay1ncmVlbjogaHNsYSgxNzcsIDEwMCUsIDQlLCAxKTtcXG4kY2hpbmVzZS1yZWQ6IGhzbGEoMTUsIDg3JSwgMzQlLCAxKTtcXG4kZ29sZDogaHNsYSg0MiwgNzklLCA1NCUsIDEpO1xcbiRibG9vZC1yZWQ6IGhzbGEoMSwgOTMlLCAyMiUsIDEpO1xcbiR0cmFuc3BhcmVudC1ncmF5OiBoc2xhKDAsIDAlLCA5NyUsIDEpO1xcbiR0cmFuc3BhcmVudC1yZWQ6IGhzbGEoMTUsIDg3JSwgMzQlLCAwLjcpO1xcblxcbiRzaXRlLXBhZGRpbmctbGVmdDogMnJlbTtcXG4kbW9iaWxlLXBhZGRpbmctbGVmdDogMXJlbTtcXG5cXG4kdGFibGV0LXNjcmVlbjogNzY4cHg7XFxuJG1vYmlsZS1zY3JlZW46IDU3NnB4O1xcblxcbmFzaWRlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQ6ICRkYXJrLWdyZWVuO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gQ29uZGVuc2VkXFxcIjtcXG4gIGNvbG9yOiAkZ29sZDtcXG5cXG4gIHVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAycmVtO1xcblxcbiAgICBsaSB7XFxuICAgICAgcGFkZGluZzogMXJlbSAkc2l0ZS1wYWRkaW5nLWxlZnQ7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuICAgIC5oaWRkZW4tbmF2IHtcXG4gICAgICBwYWRkaW5nLWxlZnQ6ICRzaXRlLXBhZGRpbmctbGVmdDtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIGxpOmhvdmVyIHtcXG4gICAgICBjb2xvcjogJGRhcmstZ3JlZW47XFxuICAgICAgYmFja2dyb3VuZDogJGdvbGQ7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnNpZGUtZGl2LWNsaWNrZWQ6aG92ZXIge1xcbiAgY29sb3I6ICRnb2xkO1xcbiAgYmFja2dyb3VuZDogJGJsb29kLXJlZDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQtc2NyZWVuKSB7XFxuICBhc2lkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuXFxuICAgIHVsIC5oaWRkZW4tbmF2IHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS1zY3JlZW4pIHtcXG4gIGFzaWRlIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcblxcbiAgICBsaSB7XFxuICAgICAgcGFkZGluZy10b3A6IDAuN3JlbSAhaW1wb3J0YW50O1xcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwLjdyZW0gIWltcG9ydGFudDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZmFtaWx5PUdvbGRtYW4mZmFtaWx5PVJvYm90bytDb25kZW5zZWQmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuICBvdmVyZmxvdy14OiBub25lO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIG1haW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBZ0JBO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBZGlCO0VBZWpCLHFCQUFBO0VBQ0EsZ0JBQUE7QUFkRjs7QUFpQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFkRjs7QUFpQkE7RUFDRTtJQUNFLGNBQUE7RUFkRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRncmF5OiBoc2xhKDIzMCwgNyUsIDg0JSwgMSk7XFxuJGRhcmstZ3JlZW46IGhzbGEoMTc3LCAxMDAlLCA0JSwgMSk7XFxuJGNoaW5lc2UtcmVkOiBoc2xhKDE1LCA4NyUsIDM0JSwgMSk7XFxuJGdvbGQ6IGhzbGEoNDIsIDc5JSwgNTQlLCAxKTtcXG4kYmxvb2QtcmVkOiBoc2xhKDEsIDkzJSwgMjIlLCAxKTtcXG4kdHJhbnNwYXJlbnQtZ3JheTogaHNsYSgwLCAwJSwgOTclLCAxKTtcXG4kdHJhbnNwYXJlbnQtcmVkOiBoc2xhKDE1LCA4NyUsIDM0JSwgMC43KTtcXG5cXG4kc2l0ZS1wYWRkaW5nLWxlZnQ6IDJyZW07XFxuJG1vYmlsZS1wYWRkaW5nLWxlZnQ6IDFyZW07XFxuXFxuJHRhYmxldC1zY3JlZW46IDc2OHB4O1xcbiRtb2JpbGUtc2NyZWVuOiA1NzZweDtcXG5cXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZmFtaWx5PUdvbGRtYW4mZmFtaWx5PVJvYm90bytDb25kZW5zZWQmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGJhY2tncm91bmQ6ICR0cmFuc3BhcmVudC1ncmF5O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbiAgb3ZlcmZsb3cteDogbm9uZTtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQtc2NyZWVuKSB7XFxuICBtYWluIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNmYTFjNjRlM2RlNTcyNjg5MWM3MzU1YmU5ODczNDY5LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1NWZlODZjZjAwMTIyOWM4NDMxNzNkMzRmMDgxYjJjOC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2YwMGU2MmUyMzllNmVhNzg2OTUxZjQ0MmU2OTI2NjEuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjdjYjJjMzYzYjNjMzMzYjk1MWExN2YzZWE2NTBlODViLmpwZWdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMTcwNjNlNTgwM2E5YTY4MGI5NjU4MTNjYzA0MzMyMzYuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImI3YjkyYWUzMGYwOTMxZjcwMTM3NDlhOWI1ODUxYWQxLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzZWM1NjI0ZDE4YzkzY2U2NmU5ZTBmZTM5ZWU2ZWNjOS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDA3NTI1NzM0MDc4OWU5NzYxZDM1YTIxYjEzMTE5ODAuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjhmYzVjZTljMmRjNmUzNDA4MjM3NTFkYmIyYjlhNzMyLmpwZ1wiOyIsIi8vIEltcG9ydHNcbnZhciBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4vaW1nL2NoaW5hLmpwZ1wiKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyA9IHJlcXVpcmUoXCIuL2ltZy9pbmRpYS5qcGdcIik7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18gPSByZXF1aXJlKFwiLi9pbWcvc2luZ2Fwb3JlLmpwZ1wiKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfM19fXyA9IHJlcXVpcmUoXCIuL2ltZy9tYWxheXNpYS5qcGVnXCIpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF80X19fID0gcmVxdWlyZShcIi4vaW1nL3BoaWxpcHBpbmVzLmpwZ1wiKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNV9fXyA9IHJlcXVpcmUoXCIuL2ltZy9pbmRvbmVzaWEuanBnXCIpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF82X19fID0gcmVxdWlyZShcIi4vaW1nL3ZpZXRuYW0uanBnXCIpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF83X19fID0gcmVxdWlyZShcIi4vaW1nL3ZpZXRuYW0tMi5qcGdcIik7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzhfX18gPSByZXF1aXJlKFwiLi9pbWcvdGhhaWxhbmQuanBnXCIpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzNfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzRfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF80X19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF81X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNV9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzZfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzdfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF83X19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF84X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfOF9fXyk7XG52YXIgY29kZSA9IFwiPHNlY3Rpb24gY2xhc3M9XFxcImFydGljbGUtc2VjdGlvblxcXCIgaWQ9XFxcImNoaW5hXFxcIj5cXG4gIDxoMT5CYWlkdSB0byBhY3F1aXJlIEpveXnigJlzIGxpdmVzdHJlYW1pbmcgc2VydmljZSBpbiAkMy42YiBkZWFsPC9oMT5cXG4gIDxkaXYgaWQ9XFxcInN1YmhlYWRpbmdcXFwiPlxcbiAgICA8c3Bhbj5Eb3JpcyBZdSB8IDwvc3Bhbj5cXG4gICAgPHNwYW4+MTggTm92IDIwMjA8L3NwYW4+XFxuICA8L2Rpdj5cXG4gIDxwPlxcbiAgICBDaGluZXNlIHNlYXJjaCBlbmdpbmUgQmFpZHUgYW5ub3VuY2VkIHRoYXQgaXQgaGFzIGVudGVyZWQgaW50byBhbiBhZ3JlZW1lbnRcXG4gICAgdG8gYWNxdWlyZSBKb3l54oCZcyBkb21lc3RpYyBsaXZlc3RyZWFtaW5nIGJ1c2luZXNzIFlZIExpdmUgaW4gYSBVUyQzLjZcXG4gICAgYmlsbGlvbiBkZWFsLlxcbiAgPC9wPlxcbiAgPGZpZ3VyZT5cXG4gICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIiBhbHQ9XFxcIkJhaWR1IG9mZmljZVxcXCIgLz5cXG4gICAgPGZpZ2NhcHRpb24+XFxuICAgICAgQmFpZHXigJlzIFNpbGljb24gVmFsbGV5IEFJIExhYiwgd2hlcmUgUGFkZGxlUGFkZGxlIHdhcyBib3JuIC8gUGhvdG8gY3JlZGl0OlxcbiAgICAgIEJhaWR1LlxcbiAgICA8L2ZpZ2NhcHRpb24+XFxuICA8L2ZpZ3VyZT5cXG4gIDxwPlxcbiAgICBUaGUgY2xvc2luZyBvZiB0aGUgdHJhbnNhY3Rpb24gaXMgc3ViamVjdCB0byBjb25kaXRpb25zIGFuZCBpcyBleHBlY3RlZCB0b1xcbiAgICB0YWtlIHBsYWNlIGluIHRoZSBmaXJzdCBoYWxmIG9mIDIwMjEuXFxuICA8L3A+XFxuICA8cD5cXG4gICAgQmFpZHXigJlzIGFjcXVpc2l0aW9uIG9mIHRoZSB2aWRlby1iYXNlZCBlbnRlcnRhaW5tZW50IGxpdmVzdHJlYW1pbmcgdW5pdCB3aWxsXFxuICAgIGluY2x1ZGUgdGhlIFlZIG1vYmlsZSBhcHAsIHRoZSBZWS5jb20gd2Vic2l0ZSwgYW5kIFBDIFlZLCBhbW9uZyBvdGhlcnMuXFxuICA8L3A+XFxuICA8cD5cXG4gICAgV2l0aCB0aGUgYWNxdWlzaXRpb24sIFlZIExpdmUgd2lsbCBoYXZlIGFjY2VzcyB0byBCYWlkdeKAmXMgdHJhZmZpYyBhbmQgbW9iaWxlXFxuICAgIGVjb3N5c3RlbXMgd2hpbGUgdGhlIGxhdHRlciB3aWxsIHJlY2VpdmUgb3BlcmF0aW9uYWwgZXhwZXJpZW5jZSwga25vdy1ob3csXFxuICAgIGFuZCBhIGNyZWF0b3IgbmV0d29yayBmb3IgdmlkZW8tYmFzZWQgc29jaWFsIG1lZGlhIGRldmVsb3BtZW50LCBzYWlkIFJvYmluXFxuICAgIExpLCBjby1mb3VuZGVyIGFuZCBDRU8gYXQgQmFpZHUuXFxuICA8L3A+XFxuICA8cD5cXG4gICAgSW4gdGhlIHBhc3QgeWVhciwgQmFpZHUgZW5hYmxlZCB0aGUgZ3Jvd3RoIG9mIGl0cyBub24tYWR2ZXJ0aXNpbmcgcmV2ZW51ZXNcXG4gICAgYnkgaW5jcmVhc2luZyBsb2ctaW4gdXNlcnMgYW5kIGFkZGluZyBzb2NpYWwgZW5nYWdlbWVudCB0byB0aGVpciBwbGF0Zm9ybS5cXG4gICAgSXQgYWxzbyBleHBhbmRlZCBpdHMgbm9uLWFkdmVydGlzaW5nIG9mZmVyaW5ncywgd2hpY2ggaW5jbHVkZSBtZW1iZXJzaGlwLFxcbiAgICBsaXZlc3RyZWFtaW5nLCBhbmQgb25saW5lIGdhbWVzLCBMaSBub3RlZC5cXG4gIDwvcD5cXG4gIDxwPlxcbiAgICBUaGUgQ2hpbmVzZSB0ZWNoIGdpYW50IGFsc28gYW5ub3VuY2VkIGl0IGhhcyBnZW5lcmF0ZWQgVVMkNC4xNiBiaWxsaW9uIGluXFxuICAgIHJldmVudWUgZm9yIFEzIDIwMjAsIHdpdGggaXRzIG9ubGluZSBtYXJrZXQgcmV2ZW51ZSBmcm9tIEJhaWR1IENvcmUgdGFraW5nXFxuICAgIHVwIFVTJDIuNzIgYmlsbGlvbi4gSXQgYWxzbyByYWtlZCBpbiBVUyQyLjAyIGJpbGxpb24gaW4gbmV0IGluY29tZSB0aGF04oCZc1xcbiAgICBhdHRyaWJ1dGFibGUgdG8gQmFpZHUgZHVyaW5nIHRoZSBwZXJpb2QuXFxuICA8L3A+XFxuICA8cD5cXG4gICAgVGhlIGRldmVsb3BtZW50IGNvbWVzIGFmdGVyIFRlbmNlbnQgYWNxdWlyZWQgMzAgYmlsbGlvbiBjbGFzcyBCIHNoYXJlcyBvZlxcbiAgICBKb3l54oCZcyBUd2l0Y2gtbGlrZSBzZXJ2aWNlIEh1eWEgaW4gYW4gVVMkODEwIG1pbGxpb24gZGVhbCBpbiBBdWd1c3QgYW5kXFxuICAgIGJlY2FtZSBIdXlh4oCZcyBiaWdnZXN0IHNoYXJlaG9sZGVyLiBMYXRlciwgSHV5YSBhY3F1aXJlZCBpdHMgcml2YWwgRG91eXUgYW5kXFxuICAgIHdhcyByZXBvcnRlZCB0byBjcmVhdGUgYSBuZXcgZ2FtZS1zdHJlYW1pbmcgZ2lhbnQgdmFsdWVkIGF0IG92ZXIgVVMkMTFcXG4gICAgYmlsbGlvbi5cXG4gIDwvcD5cXG48L3NlY3Rpb24+XFxuXFxuPHNlY3Rpb24gY2xhc3M9XFxcImFydGljbGUtc2VjdGlvblxcXCIgaWQ9XFxcImluZGlhXFxcIj5cXG4gIDxoMT5GYWNlYm9va+KAmXMgV2hhdHNBcHAgdG8gcm9sbCBvdXQgaW4tYXBwIHBheW1lbnRzIGZlYXR1cmUgaW4gSW5kaWE8L2gxPlxcbiAgPGRpdiBpZD1cXFwic3ViaGVhZGluZ1xcXCI+XFxuICAgIDxzcGFuPk1pZ3VlbCBDb3Jkb24gfCA8L3NwYW4+XFxuICAgIDxzcGFuPjYgTm92IDIwMjA8L3NwYW4+XFxuICA8L2Rpdj5cXG4gIDxwPlxcbiAgICBBZnRlciB3aW5uaW5nIGFwcHJvdmFsIGZyb20gSW5kaWHigJlzIE5hdGlvbmFsIFBheW1lbnRzIENvcnBvcmF0aW9uIChOUENJKSxcXG4gICAgRmFjZWJvb2vigJhzIFdoYXRzQXBwIHdpbGwgc3RhcnQgcm9sbGluZyBvdXQgaXRzIHBheW1lbnRzIGZlYXR1cmUgYWNyb3NzIHRoZVxcbiAgICBjb3VudHJ5LlxcbiAgPC9wPlxcbiAgPGZpZ3VyZT5cXG4gICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyArIFwiXFxcIiBhbHQ9XFxcIldoYXRzQXBwXFxcIiAvPlxcbiAgICA8ZmlnY2FwdGlvbj5QaG90byBjcmVkaXQ6IFZlbnR1cmViZWF0PC9maWdjYXB0aW9uPlxcbiAgPC9maWd1cmU+XFxuICA8cD5cXG4gICAgV2hhdHNBcHDigJlzIG5ldyBmZWF0dXJlIGFsbG93cyBpdHMgdXNlcnMgdG8gc2VuZCBtb25leSB0byBvdGhlciB1c2VycyBvclxcbiAgICBzaGFyZSB0aGUgY29zdCBvZiBnb29kcyB0aHJvdWdoIHRoZSBhcHAgaXRzZWxmLiBJdCB3YXMgZGVzaWduZWQgdXNpbmcgdGhlXFxuICAgIFVuaWZpZWQgUGF5bWVudCBJbnRlcmZhY2UgKFVQSSksIGFuIEluZGlhLWZpcnN0IHJlYWwtdGltZSBwYXltZW50IHN5c3RlbVxcbiAgICB0aGF0IGlzIHN1cHBvcnRlZCBieSBvdmVyIDE2MCBiYW5rcy5cXG4gIDwvcD5cXG4gIDxwPlxcbiAgICBUbyB1c2UgdGhlIG5ldyBwYXltZW50cyBmZWF0dXJlLCBXaGF0c0FwcCB1c2VycyBtdXN0IGZpcnN0IGhhdmUgYSBiYW5rXFxuICAgIGFjY291bnQgYW5kIGRlYml0IGNhcmQgaW4gSW5kaWEuIFRoZSBhcHAgdGhlbiBzZW5kcyBpbnN0cnVjdGlvbnMgdG8gYmFua3MgdG9cXG4gICAgaW5pdGlhdGUgdHJhbnNmZXJzIGJldHdlZW4gc2VuZGVyIGFuZCByZWNlaXZlciBiYW5rIGFjY291bnRzLlxcbiAgPC9wPlxcbiAgPHA+XFxuICAgIEl0IHdhcyBhbHNvIGRldmVsb3BlZCB3aXRoIGEgc2V0IG9mIHNlY3VyaXR5IGFuZCBwcml2YWN5IHByaW5jaXBsZXMsXFxuICAgIGluY2x1ZGluZyBlbnRlcmluZyBhIHBlcnNvbmFsIFVQSSBwaW4gZm9yIGVhY2ggcGF5bWVudCwgdGhlIGNvbXBhbnkgbm90ZWQuXFxuICA8L3A+XFxuICA8cD5cXG4gICAg4oCcV2XigJlyZSBkZWxpZ2h0ZWQgdG8gYmUgd29ya2luZyB3aXRoIGZpdmUgbGVhZGluZyBiYW5rcyBpbiBJbmRpYTogSUNJQ0kgQmFuayxcXG4gICAgSERGQyBCYW5rLCBBeGlzIEJhbmssIHRoZSBTdGF0ZSBCYW5rIG9mIEluZGlhLCBhbmQgSmlvIFBheW1lbnRzIEJhbmsuIFBlb3BsZVxcbiAgICBjYW4gc2VuZCBtb25leSBvbiBXaGF0c0FwcCB0byBhbnlvbmUgdXNpbmcgYSBVUEktc3VwcG9ydGVkIGFwcCzigJ0gRmFjZWJvb2tcXG4gICAgc2FpZCBpbiBhIHN0YXRlbWVudC5cXG4gIDwvcD5cXG4gIDxwPlxcbiAgICBUaGUgcGF5bWVudHMgZnVuY3Rpb24gaXMgbm93IGF2YWlsYWJsZSBvbiB0aGUgbGF0ZXN0IHZlcnNpb25zIG9mIFdoYXRzQXBw4oCZc1xcbiAgICBpUGhvbmUgYW5kIEFuZHJvaWQgYXBwLlxcbiAgPC9wPlxcbiAgPHA+XFxuICAgIEFjY29yZGluZyB0byBhIHByZXNzIHJlbGVhc2UgZnJvbSBOUENJLCB0aGUgbWVzc2VuZ2VyIHNlcnZpY2Ugd2FzIGdpdmVuIHRoZVxcbiAgICBhcHByb3ZhbCB0byBnbyBsaXZlIG9uIFVQSSBpbiB0aGUgbXVsdGktYmFuayBtb2RlbC4g4oCcV2hhdHNBcHAgY2FuIGV4cGFuZCBpdHNcXG4gICAgVVBJIHVzZXIgYmFzZSBpbiBhIGdyYWRlZCBtYW5uZXIgc3RhcnRpbmcgd2l0aCBhIG1heGltdW0gcmVnaXN0ZXJlZCB1c2VyXFxuICAgIGJhc2Ugb2YgMjAgbWlsbGlvbiBpbiBVUEks4oCdIHRoZSBzdGF0ZW1lbnQgcmVhZC5cXG4gIDwvcD5cXG4gIDxwPlxcbiAgICBUaGUgZGV2ZWxvcG1lbnQgY29tZXMgYWZ0ZXIgRmFjZWJvb2vigJlzIFVTJDUuNyBiaWxsaW9uIGJldCBpbiBJbmRpYW5cXG4gICAgY29uZ2xvbWVyYXRlIFJlbGlhbmNlIEluZHVzdHJpZXMgYW5kIGl0cyBkaWdpdGFsIHBsYXRmb3JtIEppby4gUHJpb3IgdG8gdGhlXFxuICAgIGZ1bmRpbmfigJlzIGFubm91bmNlbWVudCwgaXQgd2FzIHJlcG9ydGVkIHRoYXQgdGhlIHR3byBjb21wYW5pZXMgd2VyZSBpbiB0YWxrc1xcbiAgICB0byBidWlsZCBhIHN1cGVyIGFwcCBtdWNoIGxpa2UgQ2hpbmHigJlzIFdlQ2hhdC5cXG4gIDwvcD5cXG48L3NlY3Rpb24+XFxuXFxuPHNlY3Rpb24gY2xhc3M9XFxcImFydGljbGUtc2VjdGlvblxcXCIgaWQ9XFxcInNpbmdhcG9yZVxcXCI+XFxuICA8aDE+XFxuICAgIFNpbmdhcG9yZSBzYWxlcyBwcm9kdWN0aXZpdHkgc3RhcnR1cCBOZWt0YXIgYmFncyBvdmVyICQyLjFtIGluIHNlZWQgcm91bmRcXG4gIDwvaDE+XFxuICA8ZGl2IGlkPVxcXCJzdWJoZWFkaW5nXFxcIj5cXG4gICAgPHNwYW4+RG9yaXMgWXUgfCA8L3NwYW4+XFxuICAgIDxzcGFuPjkgTm92IDIwMjAgPC9zcGFuPlxcbiAgPC9kaXY+XFxuICA8cD5cXG4gICAgTmVrdGFyLmFpLCBhIGJ1c2luZXNzLXRvLWJ1c2luZXNzIHNhbGVzIHByb2R1Y3Rpdml0eSBzdGFydHVwIGJhc2VkIGluXFxuICAgIFNpbmdhcG9yZSwgYW5ub3VuY2VkIHRoYXQgaXQgaGFzIHJhaXNlZCBvdmVyIFVTJDIuMSBtaWxsaW9uIGluIGEgc2VlZCByb3VuZFxcbiAgICBsZWQgYnkgTmV4dXMgVmVudHVyZSBQYXJ0bmVycy5cXG4gIDwvcD5cXG4gIDxmaWd1cmU+XFxuICAgIDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gKyBcIlxcXCIgYWx0PVxcXCJTaW5nYXBvciBGb3VuZGVyc1xcXCIgLz5cXG4gICAgPGZpZ2NhcHRpb24+XFxuICAgICAgKEZyb20gbGVmdCkgTmVrdGFyIGZvdW5kZXJzIEFiaGlqZWV0IFZpamF5dmVyZ2l5YSBhbmQgQXJhdmluZCBSYXZpIFN1bGVraGFcXG4gICAgICAvIFBob3RvIGNyZWRpdDogTmVrdGFyXFxuICAgIDwvZmlnY2FwdGlvbj5cXG4gIDwvZmlndXJlPlxcbiAgPHA+XFxuICAgIEluc2lnbmlhIFZlbnR1cmUgUGFydG5lcnMsIEFya2EgVmVudHVyZSBMYWJzLCBCZXR0ZXIgQ2FwaXRhbCwgYW5kIHRoZVxcbiAgICBWaWV0bmFtIEludmVzdG1lbnRzIEdyb3VwIGFsc28gcGFydGljaXBhdGVkIGluIHRoZSByb3VuZCwgYWxvbmcgd2l0aCBhIGhvc3RcXG4gICAgb2YgaW5kaXZpZHVhbCBpbnZlc3RvcnMuIFRoZXNlIGluY2x1ZGUgRml2ZTkgZXhlY3V0aXZlIHZpY2UgcHJlc2lkZW50IG9mXFxuICAgIHByb2R1Y3QgbWFuYWdlbWVudCBBbmFuZCBDaGFuZHJhc2VrYXJhbiwgQ0VPIG9mIEFpcnRlbOKAmXMgZW50ZXJwcmlzZSBidXNpbmVzc1xcbiAgICBHYW5lc2ggTGFrc2htaW5hcmF5YW5hbiwgYW5kIENpc2NvIGNoaWVmIGdyb3d0aCBvZmZpY2VyIFZpbm9kIE11dGh1a3Jpc2huYW4sXFxuICAgIGFtb25nIG90aGVycy5cXG4gIDwvcD5cXG4gIDxwPlxcbiAgICBOZWt0YXIgd2FzIGZvdW5kZWQgZWFybHkgdGhpcyB5ZWFyIGJ5IEFiaGlqZWV0IFZpamF5dmVyZ2l5YSBhbmQgQXJhdmluZCBSYXZpXFxuICAgIFN1bGVraGEuIFByZXZpb3VzbHksIFZpamF5dmVyZ2l5YSB3b3JrZWQgYXMgdGhlIHByZXNpZGVudCBhbmQgbWFuYWdpbmdcXG4gICAgZGlyZWN0b3Igb2YgQXNpYSBQYWNpZmljIGF0IGNsb3VkIHNvZnR3YXJlIGZpcm0gQ2FwaWxsYXJ5IFRlY2hub2xvZ2llcyxcXG4gICAgd2hpbGUgU3VsZWtoYSB3YXMgdGhlIHRlY2ggbGVhZGVyIGF0IFplbmRlc2suXFxuICA8L3A+XFxuICA8cD5cXG4gICAg4oCcSW4gdGhlIGxhc3QgZGVjYWRlLCB0aGUgaW52ZXN0bWVudCBpbiBzYWxlcyB0b29scyBnbG9iYWxseSBoYXMgZ3Jvd24gYnlcXG4gICAgZml2ZSB0aW1lcywgYnV0IHRoZSBhdmVyYWdlIHNhbGVzIHF1b3RhIGF0dGFpbm1lbnQgaGFzIGZhbGxlbiA0MCUuIEFjY29yZGluZ1xcbiAgICB0byBGb3JiZXMsIDU3JSBvZiBzYWxlcyByZXBzIG1pc3NlZCB0aGVpciBudW1iZXJzIGluIDIwMTgs4oCdIHNhaWQgQ0VPXFxuICAgIFZpamF5dmVyZ2l5YS4gSGlzIGNvbXBhbnksIGhlIHNhaWQsIGFpbXMgdG8gYnVpbGQgYW4gQUktZHJpdmVuIHNhbGVzXFxuICAgIHByb2R1Y3Rpdml0eSBzb2x1dGlvbiB0aGF0IHdpbGwgaGVscCByZXZlbnVlIHRlYW1zIHRvIGNvbGxhYm9yYXRlIGFuZCBzYWxlc1xcbiAgICByZXBzIHRvIG1lZXQgdGhlaXIgcXVvdGEuXFxuICA8L3A+XFxuICA8cD5cXG4gICAgTmVrdGFyIGNvbm5lY3RzIHVuc3RydWN0dXJlZCBkYXRhIGZyb20gc291cmNlcyBsaWtlIGVtYWlscywgY2FsZW5kYXJzLFxcbiAgICBMaW5rZWRJbiwgYW5kIFpvb20gdG8gY3VzdG9tZXIgcmVsYXRpb25zaGlwIG1hbmFnZW1lbnQgYW5kIHRoZW4gb3ZlcmxheXNcXG4gICAgdGhlc2UgcG9pbnRzIHdpdGggdGhlIG9yZ2FuaXphdGlvbuKAmXMgcHJhY3RpY2VzIGFuZCBzYWxlcyBwbGF5Ym9va3MuXFxuICA8L3A+XFxuICA8cD5cXG4gICAgVGhlIGNvbXBhbnkgaGFkIGJlZW4gaW5pdGlhbGx5IHdvcmtpbmcgaW4gc3RlYWx0aCBtb2RlIHdpdGggYSBzZWxlY3QgbGlzdCBvZlxcbiAgICBlYXJseSBhZG9wdGVycy4gSXQgbm93IHBsYW5zIHRvIHVzZSB0aGUgbmV3IGZ1bmRzIHRvIGZ1cnRoZXIgYnVpbGQgb3V0IGl0c1xcbiAgICBwbGF0Zm9ybSwgcmFtcCB1cCBpdHMgZW5naW5lZXJpbmcgYW5kIHByb2R1Y3QgdGVhbXMsIGFuZCBvcGVuIHVwIGl0cyBlYXJseVxcbiAgICBhY2Nlc3MgcHJvZ3JhbSBmb3IgZ2VuZXJhbCBhdmFpbGFiaWxpdHkgYnkgbmV4dCB5ZWFyLlxcbiAgPC9wPlxcbjwvc2VjdGlvbj5cXG5cXG48c2VjdGlvbiBjbGFzcz1cXFwiYXJ0aWNsZS1zZWN0aW9uXFxcIiBpZD1cXFwibWFsYXlzaWFcXFwiPlxcbiAgPGgxPlxcbiAgICBDYXBCYXkgYW5kIEtlbmFuZ2EgdG8gZm9ybSBNYWxheXNpYeKAmXMgZmlyc3QgSXNsYW1pYyBzdXBwbHkgY2hhaW4gZmluYW5jZVxcbiAgICBmaW50ZWNoXFxuICA8L2gxPlxcbiAgPGRpdiBpZD1cXFwic3ViaGVhZGluZ1xcXCI+XFxuICAgIDxzcGFuPkpvbiBCb2kgfCA8L3NwYW4+XFxuICAgIDxzcGFuPjMgRGVjIDIwMjA8L3NwYW4+XFxuICA8L2Rpdj5cXG4gIDxwPlxcbiAgICBXaXRoIGl0cyBhY3F1aXNpdGlvbiBvZiBhIDQ5JSBzdGFrZSBpbiBLZW5hbmdhIENhcGl0YWwgSXNsYW1pYyBTZG4gQmhkXFxuICAgIChLQ0kpLCBNYWxheXNpYW4gZmludGVjaCBzdGFydHVwIENhcEJheSBpcyBmb3JtaW5nIGEgam9pbnQgdmVudHVyZSB3aXRoXFxuICAgIEtDSeKAmXMgcGFyZW50IGNvbXBhbnkgS2VuYW5nYSBJbnZlc3RtZW50IEJhbmsgQmVyaGFkIChLSUJCKSB0byBjcmVhdGVcXG4gICAgTWFsYXlzaWHigJlzIGZpcnN0IElzbGFtaWMgc3VwcGx5IGNoYWluIGZpbmFuY2UgZmludGVjaCwgYWNjb3JkaW5nIHRvIGFcXG4gICAgc3RhdGVtZW50LlxcbiAgPC9wPlxcbiAgPHA+XFxuICAgIFRoZSBqb2ludCB2ZW50dXJlIGFpbXMgdG8g4oCcY29udGludWUgdGhlIGVmZm9ydCBvZiBncm93aW5nIFNoYXJpYWgtY29tcGxpYW50XFxuICAgIFtidXNpbmVzc2VzXSBhbmQgZGV2ZWxvcGluZyB0aGUgSXNsYW1pYyBmaW5hbmNlIG1hcmtldC7igJ1cXG4gIDwvcD5cXG4gIDxwPlxcbiAgICBGb2xsb3dpbmcgdGhlIGFjcXVpc2l0aW9uLCBDYXBCYXkgY28tZm91bmRlciBYaW5nIFhpYW4gQW5nIHdpbGwgc2VydmUgYXNcXG4gICAgS0NJ4oCZcyBDRU8uIEhlIHdpbGwgcmVwb3J0IHRvIERhdHVrIENoYXkgV2FpIExlb25nLCB0aGUgZ3JvdXAgbWFuYWdpbmdcXG4gICAgZGlyZWN0b3IgYXQgS0lCQi4gTWVhbndoaWxlLCBEYXRv4oCZIFNyaSBNb2hkIE1va2h0YXIgTW9oZCBTaGFyaWZmIGhhcyBiZWVuXFxuICAgIGFwcG9pbnRlZCBhcyBjaGFpcm1hbiBvZiBDYXBCYXkuXFxuICA8L3A+XFxuICA8ZmlndXJlPlxcbiAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8zX19fICsgXCJcXFwiIGFsdD1cXFwiTWFsYXlzaWEgRm91bmRlclxcXCIgLz5cXG4gICAgPGZpZ2NhcHRpb24+XFxuICAgICAgQ2FwQmF5IGNvLWZvdW5kZXIgWGluZyBYaWFuIEFuZyAvIFBob3RvIGNyZWRpdDogQ2FwQmF5XFxuICAgIDwvZmlnY2FwdGlvbj5cXG4gIDwvZmlndXJlPlxcbiAgPHA+XFxuICAgIFRoZSBuZXcgZmludGVjaCBmaXJt4oCZcyBhaW0gaXMgdG8gaGVscCBzbWFsbCBhbmQgbWVkaXVtLXNpemVkIGVudGVycHJpc2VzXFxuICAgIChTTUVzKSwgY29udHJhY3RvcnMsIGFuZCB2ZW5kb3JzIG9idGFpbiBmaW5hbmNpbmcgaW4gb3JkZXIgdG8gc3VwcGx5IGdvb2RzXFxuICAgIGFuZC9vciBzZXJ2aWNlcyB0byBsYXJnZSBjb3Jwb3JhdGlvbnMsIHRoZSBnb3Zlcm5tZW50LCBhbmQgZ292ZXJubWVudC1saW5rZWRcXG4gICAgY29tcGFuaWVzIChHTENzKS4gSW4gdGhpcyB3YXksIFNNRXMgY2FuIGxldmVyYWdlIHRoZSBsYXJnZXIgY29ycG9yYXRpb25z4oCZXFxuICAgIGNyZWRpdC13b3J0aGluZXNzIHdoaWxlIHRoZSBsYXR0ZXIgYXJlIGFibGUgdG8gc3VwcG9ydCB0aGVpciB2ZW5kb3JzIGluXFxuICAgIHR1cm4uXFxuICA8L3A+XFxuICA8cD5cXG4gICAgRm91bmRlZCBpbiAyMDE2LCBDYXBCYXkgaXMgYSBtdWx0aS1iYW5rIHN1cHBseSBjaGFpbiBmaW5hbmNlIGFuZFxcbiAgICBwZWVyLXRvLXBlZXIgZmluYW5jaW5nIChQMlApIHBsYXRmb3JtLiBVc2luZyBpdHMgcGF5bWVudCByaXNrIHNjb3JpbmcgbW9kZWwsXFxuICAgIGl0IHByZWRpY3RzIHRoZSByaXNrIG9mIGVhY2ggdHJhbnNhY3Rpb24gYnkgY29uZHVjdGluZyBhbiBhbmFseXNpcyBvZlxcbiAgICBmaW5hbmNpYWwgc3RhdGVtZW50cy4gSXQgYWxzbyB1c2VzIG1hY2hpbmUgbGVhcm5pbmcgdG8gYXNzZXNzIGRhdGEgcG9pbnRzXFxuICAgIHN1Y2ggYXMgaXRzIGNsaWVudHPigJkgaGlzdG9yaWNhbCByZWxhdGlvbnNoaXBzLCBwYXltZW50cywgcXVhbGl0eSBvZlxcbiAgICBjb250cmFjdHMsIGFuZCBvdGhlciBwYXR0ZXJucy5cXG4gIDwvcD5cXG4gIDxwPlxcbiAgICBDYXBCYXkgY2xhaW1zIHRoYXQgaXRzIGFwcHJvYWNoIGhhcyBhbGxvd2VkIHRoZSBjb21wYW55IHRvIOKAnGtlZXAgdGhlIGRlZmF1bHRcXG4gICAgcmF0ZSBsb3figJ0gd2hpbGUgcHJvdmlkaW5nIGZpbmFuY2luZyBmb3IgbW9yZSB1bmJhbmtlZCBhbmQgdW5kZXJiYW5rZWRcXG4gICAgY3VzdG9tZXJzLlxcbiAgPC9wPlxcbiAgPHA+XFxuICAgIOKAnFdlIGhhdmUgYWx3YXlzIGJlZW4gY29tbWl0dGVkIHRvIG9mZmVyaW5nIG91ciBjdXN0b21lcnMgdGhlIHNvbHV0aW9ucyB0aGV5XFxuICAgIG5lZWQgdG8gYWR2YW5jZSB0aGUgZ3Jvd3RoIG9mIE1hbGF5c2lhbiBidXNpbmVzc2VzIG9mIGFsbCBzaXplcy4gSSBhbVxcbiAgICBjb25maWRlbnQgdGhhdCB0aGlzIHBhcnRuZXJzaGlwIHdpdGggS0lCQiB3aWxsIGFsbG93IHVzIHRvIGdyb3cgYXMgYW5cXG4gICAgb3JnYW5pemF0aW9uIGFuZCBiZXR0ZXIgc2VydmUgb3VyIGN1c3RvbWVycyBhcyB3ZSBpbnZlc3QgaW4gb3VyXFxuICAgIGluZnJhc3RydWN0dXJlIGFuZCBzZXJ2aWNlIG9mZmVyaW5nLOKAnSBzYWlkIEFuZyBpbiBhIHN0YXRlbWVudC5cXG4gIDwvcD5cXG4gIDxwPlxcbiAgICBDYXBCYXkgY2xhaW1zIHRoYXQgc2luY2UgMjAxNywgaXQgaGFzIGZpbmFuY2VkIG1vcmUgdGhhbiA5LDAwMCB0cmFuc2FjdGlvbnNcXG4gICAgYW1vdW50aW5nIHRvIG1vcmUgdGhhbiA4MDAgbWlsbGlvbiByaW5nZ2l0IChVUyQxOTIuNiBtaWxsaW9uKSBhbmQgaGFzIHNlcnZlZFxcbiAgICBvdmVyIDUwMCBTTUVzLlxcbiAgPC9wPlxcbiAgPHA+XFxuICAgIEZvcm1lcmx5IGtub3duIGFzIENhcGl0YWxCYXksIHRoZSBjb21wYW55IHJhaXNlZCBVUyQ0NzcsMDAwIGluIGEgc2VlZCByb3VuZFxcbiAgICBsZWQgYnkgS0sgRnVuZCBpbiAyMDE3LlxcbiAgPC9wPlxcbjwvc2VjdGlvbj5cXG48c2VjdGlvbiBjbGFzcz1cXFwiYXJ0aWNsZS1zZWN0aW9uXFxcIiBpZD1cXFwicGhpbGlwcGluZXNcXFwiPlxcbiAgPGgxPkF5YW5uYWggcmV2ZWFscyBtZXJnZXI7IG5ldyBlbnRpdHkgc2Vla3MgdXAgdG8gJDUwbSBpbiBzZXJpZXMgQiByb3VuZDwvaDE+XFxuICA8ZGl2IGlkPVxcXCJzdWJoZWFkaW5nXFxcIj5cXG4gICAgPHNwYW4+TWljaGFlbCBKb3JkYW4gfCA8L3NwYW4+XFxuICAgIDxzcGFuPjggTWF5IDIwMjA8L3NwYW4+XFxuICA8L2Rpdj5cXG4gIDxwPlxcbiAgICBQaGlsaXBwaW5lLWJhc2VkIGZpbnRlY2ggc3RhcnR1cCBBeWFubmFoIGFuZCBJbmRpYW4gcGF5bWVudHMgZmlybSBFbGVjdHJvbmljXFxuICAgIENhc2ggYW5kIFBheW1lbnQgU29sdXRpb25zIChFQ0FQKSBzYWlkIHRoZXkgaGF2ZSBtZXJnZWQgdG8gZm9ybSBhIFBhbi1Bc2lhblxcbiAgICBjb21wYW55IHRoYXQgYWltcyB0byBwcm92aWRlIGFjY2Vzc2libGUgZGlnaXRhbCBmaW5hbmNpYWwgc2VydmljZXMgdG8gdGhlXFxuICAgIHJlZ2lvbuKAmXMgbWlkZGxlIGNsYXNzLlxcbiAgPC9wPlxcbiAgPGZpZ3VyZT5cXG4gICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNF9fXyArIFwiXFxcIiBhbHQ9XFxcIk5ld3Mgc3RhbmRcXFwiIC8+XFxuICAgIDxmaWdjYXB0aW9uPlBob3RvIGNyZWRpdDogQXlhbm5haCBHbG9iYWw8L2ZpZ2NhcHRpb24+XFxuICA8L2ZpZ3VyZT5cXG4gIDxwPlxcbiAgICBDYWxsZWQgQXlhbm5haCBHbG9iYWwsIHRoZSBuZXcgZW50aXR5IHdpbGwgYmUgaGVhZHF1YXJ0ZXJlZCBpbiBTaW5nYXBvcmUsIGFcXG4gICAgc3RyYXRlZ2ljIGxvY2F0aW9uIGFtb25nIGZhc3QtZ3Jvd2luZyBtYXJrZXRzIGluIFNvdXRoZWFzdCBBc2lhLiBJdCBhbHNvXFxuICAgIGFpbXMgdG8gZHJhdyBmcm9tIHRoZSBjaXR5LXN0YXRl4oCZcyB0YWxlbnQgcG9vbCBhbmQgZm9yZ2UgbmV3IHBhcnRuZXJzaGlwc1xcbiAgICB3aXRoIGNvbXBhbmllcyB0aGVyZS5cXG4gIDwvcD5cXG4gIDxwPlxcbiAgICDigJxCb3RoIGNvbXBhbmllcyBzYXcgaHVnZSBvcGVyYXRpb25hbCBhbmQgdGVjaG5vbG9naWNhbCBzeW5lcmdpZXMgaW4gdGhlaXJcXG4gICAgcHJvZHVjdHMgYW5kIGdyb3d0aCBzdHJhdGVneSwgYW5kIGEgbWVyZ2VyIHdpbGwgZW5hYmxlIHRoZSBlbmxhcmdlZCBlbnRpdHlcXG4gICAgdG8gYmV0dGVyIHJlYWNoIGN1c3RvbWVycywgc2NhbGUgdXAgcHJvZHVjdCBkZXZlbG9wbWVudCwgYW5kIGV4cGFuZCB0aGVpclxcbiAgICByZWFjaCB3aXRoaW4gU291dGhlYXN0IEFzaWEs4oCdIGEgc3Bva2VzcGVyc29uIGZvciBBeWFubmFoIEdsb2JhbCB0b2xkIFRlY2ggaW5cXG4gICAgQXNpYS5cXG4gIDwvcD5cXG4gIDxwPlxcbiAgICBUaGUgY29tcGFueSBhbHNvIGxvb2tzIHRvIGNhcGl0YWxpemUgb24gdGhlIGdyZWF0ZXIgZGVtYW5kIGZvciBvcGVuIGJhbmtpbmdcXG4gICAgYW5kIG9tbmljaGFubmVsIGRpc3RyaWJ1dGlvbiBwbGF0Zm9ybXMgZHJpdmVuIGJ5IHRoZSBDb3ZpZC0xOSBwYW5kZW1pYywgdGhlXFxuICAgIHNwb2tlc3BlcnNvbiBhZGRlZC5cXG4gIDwvcD5cXG4gIDxwPlxcbiAgICBGb3VuZGVkIGluIDIwMTAsIEF5YW5uYWggZGV2ZWxvcGVkIGFuIEFJLWVuYWJsZWQgcGxhdGZvcm0gdG8gbGF1bmNoIGEgc3VpdGVcXG4gICAgb2YgZmluYW5jaWFsIGFuZCBsaWZlc3R5bGUgcHJvZHVjdHMgYW5kIHNlcnZpY2VzIHJhbmdpbmcgZnJvbSBwYXltZW50cyxcXG4gICAgcmVtaXR0YW5jZXMsIGluc3VyYW5jZSwgYW5kIHRlbGVtZWRpY2luZS5cXG4gIDwvcD5cXG4gIDxwPlxcbiAgICBNZWFud2hpbGUsIEJlbmdhbHVydS1iYXNlZCBFQ0FQUyBjYXRlcnMgdG8gdGhlIG5lZWRzIG9mIGRvbWVzdGljIG1pZ3JhbnRzXFxuICAgIGFuZCB0aGUgdW5iYW5rZWQgcG9wdWxhdGlvbiBpbiBJbmRpYS4gSXQgZW5hYmxlcyBkb21lc3RpYyBtb25leSB0cmFuc2ZlcnMsXFxuICAgIHV0aWxpdHkgYmlsbCBwYXltZW50cywgcmVjaGFyZ2VzLCBhbmQgdHJhdmVsIHRpY2tldGluZy5cXG4gIDwvcD5cXG4gIDxwPlxcbiAgICBUb2dldGhlciwgQXlhbm5haCBhbmQgRUNBUFMgaGF2ZSBvcGVyYXRpb25zIGluIEluZGlhLCBJbmRvbmVzaWEsIGFuZCB0aGVcXG4gICAgUGhpbGlwcGluZXMuIEFmdGVyIHRoZSBtZXJnZXIsIEF5YW5uYWggR2xvYmFsIGxvb2tzIHRvIGV4dGVuZCBpdHMgcmVhY2ggaW50b1xcbiAgICBWaWV0bmFtLiBJdCBleHBlY3RzIHRvIHJlYWNoIG92ZXIgMTAgbWlsbGlvbiBjdXN0b21lcnMgaW4gdGhlc2UgbWFya2V0c1xcbiAgICB0aHJvdWdoIGl0cyBtb2JpbGUgYXBwcyBhbmQgYSBncm93aW5nIG5ldHdvcmsgb2Ygb3ZlciA2MCwwMDAgb2ZmbGluZVxcbiAgICB0b3VjaHBvaW50cywgdGhlIG5ldyBlbnRpdHkgc2FpZC5cXG4gIDwvcD5cXG4gIDxwPlxcbiAgICBJbiBhZGRpdGlvbiB0byB0aGUgbWVyZ2VyLCB0aGUgY29tcGFueSBzYWlkIGl0IHdpbGwgc3RhcnQgcmFpc2luZyBtb25leSBmb3JcXG4gICAgaXRzIHNlcmllcyBCIHJvdW5kIG9uIEp1bmUgMTUuIEl0IGxvb2tzIHRvIGJhZyBVUyQzMCBtaWxsaW9uIHRvIFVTJDUwXFxuICAgIG1pbGxpb24gdGhyb3VnaCB0aGUgcm91bmQuXFxuICA8L3A+XFxuICA8cD5cXG4gICAgQXlhbm5haOKAmXMgZXhpc3RpbmcgYmFja2VycyBmcm9tIHByZXZpb3VzIGZ1bmRyYWlzaW5nIHJvdW5kcyBpbmNsdWRlXFxuICAgIFdhdmVtYWtlciBQYXJ0bmVycywgR29sZGVuIEdhdGUgVmVudHVyZXMsIGFuZCA1MDAgU3RhcnR1cHMsIGFzIHdlbGwgYXNcXG4gICAgc2V2ZXJhbCBsYXJnZSBmYW1pbHkgb2ZmaWNlcyBhY3Jvc3MgQXNpYS5cXG4gIDwvcD5cXG48L3NlY3Rpb24+XFxuPHNlY3Rpb24gY2xhc3M9XFxcImFydGljbGUtc2VjdGlvblxcXCIgaWQ9XFxcImluZG9uZXNpYVxcXCI+XFxuICA8aDE+XFxuICAgIEluZG9uZXNpYeKAmXMgaVNlbGxlciBiYWdzIHNlcmllcyBBIHJvdW5kIGZyb20gT3BlbnNwYWNlIFZlbnR1cmVzLCBNYW5kaXJpXFxuICAgIENhcGl0YWxcXG4gIDwvaDE+XFxuICA8ZGl2IGlkPVxcXCJzdWJoZWFkaW5nXFxcIj5cXG4gICAgPHNwYW4+Q2FyaXMgTGVWZXJ0IHwgPC9zcGFuPlxcbiAgICA8c3Bhbj4xOSBKYW4gMjAyMTwvc3Bhbj5cXG4gIDwvZGl2PlxcbiAgPHA+XFxuICAgIEluZG9uZXNpYS1iYXNlZCBpU2VsbGVyLCBhbiBvbW5pY2hhbm5lbCBzYWxlcyBzb2Z0d2FyZS1hcy1hLXNlcnZpY2UgcGxheWVyLFxcbiAgICBhbm5vdW5jZWQgdGhhdCBpdCBoYXMgc2VjdXJlZCBhbiB1bmRpc2Nsb3NlZCBhbW91bnQgaW4gaXRzIHNlcmllcyBBIHJvdW5kIG9mXFxuICAgIGZ1bmRpbmcgbGVkIGJ5IFNpbmdhcG9yZS1iYXNlZCBWQyBmaXJtIE9wZW5zcGFjZSBWZW50dXJlcyBhbmQgTWFuZGlyaVxcbiAgICBDYXBpdGFsLCB0aGUgVkMgYXJtIG9mIEJhbmsgTWFuZGlyaSBpbiBJbmRvbmVzaWEuXFxuICA8L3A+XFxuICA8ZmlndXJlPlxcbiAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF81X19fICsgXCJcXFwiIGFsdD1cXFwiQ2hlY2tvdXRcXFwiIC8+XFxuICAgIDxmaWdjYXB0aW9uPlBob3RvIGNyZWRpdDogaVNlbGxlcjwvZmlnY2FwdGlvbj5cXG4gIDwvZmlndXJlPlxcbiAgPHA+XFxuICAgIFRoZSBjYXBpdGFsIGluamVjdGlvbiB3aWxsIGdvIHRvd2FyZCBidXNpbmVzcyBleHBhbnNpb24gaW5jbHVkaW5nIHRoZVxcbiAgICBhY2NlbGVyYXRpb24gb2YgbWVyY2hhbnQgYWNxdWlzaXRpb24gYW5kIG9uYm9hcmRpbmcuIFRoZSBjb21wYW55IGlzIGFsc29cXG4gICAgZG91YmxpbmcgZG93biBvbiB0ZWNobm9sb2d5IGRldmVsb3BtZW50IHRvIGFkZCBhZGRpdGlvbmFsIG9tbmljaGFubmVsXFxuICAgIG1lcmNoYW50IHNvbHV0aW9ucyBhbmQgZmVhdHVyZXMsIGl0IHNhaWQgaW4gYSBzdGF0ZW1lbnQuXFxuICA8L3A+XFxuICA8cD5cXG4gICAgRm91bmRlZCBpbiAyMDE3LCBpU2VsbGVyIG9mZmVycyBhIGNsb3VkLWJhc2VkIHBsYXRmb3JtIGZvciBvbW5pY2hhbm5lbFxcbiAgICBidXNpbmVzc2VzLCB3aGljaCBpbnRlZ3JhdGVzIGluLXN0b3JlIHBvaW50IG9mIHNhbGUsIG9ubGluZSBzdG9yZWZyb250LFxcbiAgICBwYXltZW50IHByb2Nlc3NpbmcsIG9yZGVyIGZ1bGZpbGxtZW50LCBhbmQgaW52ZW50b3J5IG1hbmFnZW1lbnQgaW50byBhXFxuICAgIHNpbmdsZSBpbnRlcmZhY2UuXFxuICA8L3A+XFxuICA8cD5cXG4gICAgV2l0aCBpbmNyZWFzaW5nIG9ubGluZSBkaXN0cmlidXRpb24gbW9kZWxzIGFuZCBtdWx0aXBsZSBwYXltZW50IG1ldGhvZHMgaW5cXG4gICAgSW5kb25lc2lhLCBzbWFsbCBhbmQgbWVkaXVtLXNpemVkIGVudGVycHJpc2VzIGFyZSBmaW5kaW5nIGl0IGhhcmQgdG8ga2VlcFxcbiAgICB1cC5cXG4gIDwvcD5cXG4gIDxwPlxcbiAgICBUaGUgY29tcGFueSBzYWlkIGl0IGFpbXMgdG8gaGVscCB0aGVzZSBtZXJjaGFudHMgdGFrZSBhZHZhbnRhZ2Ugb2YgdGhlXFxuICAgIG9ubGluZSBlY29zeXN0ZW0gYnkgcHJvdmlkaW5nIG1vcmUgd2F5cyB0byBzZWxsIGFuZCBhY2NlcHQgcGF5bWVudCBhY3Jvc3NcXG4gICAgb25saW5lIGFuZCBvZmZsaW5lIGNoYW5uZWxzIChpbi1zdG9yZSwgb25saW5lLCBhcHBzLCBhbmQgbWFya2V0cGxhY2VzKS5cXG4gICAgTWVyY2hhbnRzIGNhbiBhbHNvIG1hbmFnZSBzYWxlcyBhY3Jvc3MgYnJhbmNoZXMsIGNvdmVyaW5nIFRva29wZWRpYSwgU2hvcGVlLFxcbiAgICBMYXphZGEsIEdvUGF5LCBPdm8sIERhbmEsIEdvU2VuZCwgYW5kIEdyYWJFeHByZXNzLCBhbW9uZyBvdGhlcnMuXFxuICA8L3A+XFxuICA8cD5cXG4gICAgV2l0aCBhIHBheS1hcy15b3UtZ28gc3Vic2NyaXB0aW9uIG1vZGVsLCBpU2VsbGVyIHNlcnZlcyBjb25zdW1lciBidXNpbmVzc2VzXFxuICAgIGluIHNlY3RvcnMgaW5jbHVkaW5nIHJldGFpbCwgZm9vZCBhbmQgYmV2ZXJhZ2UsIGFuZCBjb25zdW1lciBzZXJ2aWNlcyxcXG4gICAgY2F0ZXJpbmcgdG8gY2xpZW50cyBsaWtlIEdlcHJlayBCZW5zdSwgSXhvYm94LCBBZ3VuZyBTZWRheXUgUmV0YWlsIEluZG9uZXNpYVxcbiAgICAoQVNSSSksIFVuaXRlZCBCaWtlLCBhbmQgWW9ndXJ0bGFuZC5cXG4gIDwvcD5cXG4gIDxwPlxcbiAgICBEZXNwaXRlIGN1cnJlbnQgZWNvbm9taWMgY29uZGl0aW9ucywgdGhlIGNvbXBhbnkgY2xhaW1zIHRoYXQgaXQgaGFzIGRvdWJsZWRcXG4gICAgaXRzIHJldmVudWUgYW5kIGl0cyBhY3RpdmUgbWVyY2hhbnQgcG9vbCB5ZWFyIG9uIHllYXIgYW5kIGN1cnJlbnRseVxcbiAgICBwcm9jZXNzZXMgbW9yZSB0aGFuIDUgbWlsbGlvbiB0cmFuc2FjdGlvbnMgYSBtb250aC4gSW4gZmFjdCwgaXQgYXR0cmlidXRlZFxcbiAgICB0aGlzIGdyb3d0aCB0byB0aGUgaGlnaGVyIG9ubGluZSB0cmFuc2FjdGlvbiB2b2x1bWUgYW1vbmcgZXhpc3RpbmcgY3VzdG9tZXJzXFxuICAgIGFtaWQgdGhlIHBhbmRlbWlj4oCZcyBsb2NrZG93biBwZXJpb2QuXFxuICA8L3A+XFxuPC9zZWN0aW9uPlxcbjxzZWN0aW9uIGNsYXNzPVxcXCJhcnRpY2xlLXNlY3Rpb25cXFwiIGlkPVxcXCJ2aWV0bmFtXFxcIj5cXG4gIDxoMT5cXG4gICAgSG93IGluc3VydGVjaCBzdGFydHVwIFBhcGF5YSBsb29rcyB0byBkaWdpdGFsaXplIFZpZXRuYW3igJlzIG9wYXF1ZSBpbnN1cmFuY2VcXG4gICAgaW5kdXN0cnlcXG4gIDwvaDE+XFxuICA8ZGl2IGlkPVxcXCJzdWJoZWFkaW5nXFxcIj5cXG4gICAgPHNwYW4+VGh1IEh1b25nIExlIHwgPC9zcGFuPlxcbiAgICA8c3Bhbj4zMCBEZWMgMjAyMDwvc3Bhbj5cXG4gIDwvZGl2PlxcbiAgPHA+XFxuICAgIENFTyBhbmQgY28tZm91bmRlciBIdW5nIFBoYW4gaGFzIGxlYXJuZWQgdHdvIGltcG9ydGFudCBpbnNpZ2h0cyBmcm9tXFxuICAgIGJ1aWxkaW5nIGhpcyBpbnN1cnRlY2ggc3RhcnR1cCBQYXBheWEuIEZpcnN0LCBkb27igJl0IGZvbGxvdyB0aGUgYWdlbnQtYmFzZWRcXG4gICAgbW9kZWwgd2hpY2gganVzdCBkaWdpdGFsaXplcyB0aGUgcHJvY2VzcyB0aGF0IG9mZmxpbmUgaW5zdXJhbmNlIGFnZW50c1xcbiAgICBmb2xsb3cuIEl0IHdpbGwgYmUgZXh0cmVtZWx5IGNvc3RseSB0byBhY3F1aXJlIGFuZCBtYW5hZ2UgdGhlc2UgYWdlbnRzIGluXFxuICAgIHRoZSBsb25nIHRlcm0uXFxuICA8L3A+XFxuICA8cD5cXG4gICAgU2Vjb25kLCBkb27igJl0IHJlbHkgb24gYW4gZXhpc3RpbmcgcGxhdGZvcm0gdG8gZGlzdHJpYnV0ZSB5b3VyIHByb2R1Y3RzLiBJdFxcbiAgICB3aWxsIHNxdWVlemUgeW91ciBtYXJnaW5zLCBhbmQgdGhlIHBsYXRmb3JtIHdpbGwgZXZlbnR1YWxseSBmaWd1cmUgb3V0IGhvd1xcbiAgICB0byBzZWxsIGRpcmVjdGx5IHRvIGN1c3RvbWVycy5cXG4gIDwvcD5cXG4gIDxmaWd1cmU+XFxuICAgIDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzZfX18gKyBcIlxcXCIgYWx0PVxcXCJTdGFydHVwIHRlYW1cXFwiIC8+XFxuICAgIDxmaWdjYXB0aW9uPlxcbiAgICAgIEhvIENoaSBNaW5oIENpdHktYmFzZWQgaW5zdXJ0ZWNoIHN0YXJ0dXAgUGFwYXlhIHdhbnRzIHRvIGJlY29tZSBhXFxuICAgICAgaGVhbHRoY2FyZSBhbmQgd2VsbG5lc3MgcGxhdGZvcm0gZm9yIGVtcGxveWVlcy4gLyBQaG90byBjcmVkaXQ6IFBhcGF5YVxcbiAgICA8L2ZpZ2NhcHRpb24+XFxuICA8L2ZpZ3VyZT5cXG4gIDxwPlxcbiAgICBXaGVuIFBoYW4gZm91bmRlZCBQYXBheWEgaW4gMjAxOCwgaXQgdG9vayBhIHdoaWxlIGZvciBoaXMgdGVhbSB0byBkZWNpZGUgb25cXG4gICAgdGhlIHN0YXJ0dXDigJlzIGJ1c2luZXNzIG1vZGVsLiBUaGUgY29tcGFueSBwcmV2aW91c2x5IHRyaWVkIHNlbGxpbmcgbW90b3JiaWtlXFxuICAgIGluc3VyYW5jZSB0byBkcml2ZXJzIG9uIHBvcHVsYXIgVmlldG5hbWVzZSBvbi1kZW1hbmQgcGxhdGZvcm1zLCBidXQgdGhlXFxuICAgIGRlbWFuZCB3YXMganVzdCBub3QgdGhlcmUuXFxuICA8L3A+XFxuICA8cD5cXG4gICAgU28gdGhlIHN0YXJ0dXAgZGVjaWRlZCB0byBzZXR0bGUgb24gc29sdmluZyBhIHBhaW5mdWwgZXhwZXJpZW5jZSB0aGF0IG1hbnlcXG4gICAgcGVvcGxlIGluIFZpZXRuYW0gZ28gdGhyb3VnaDogdGhlIGNsYWltcyBwcm9jZXNzIGluIGhlYWx0aCBpbnN1cmFuY2UuIFZlcnlcXG4gICAgb2Z0ZW4sIGN1c3RvbWVycyBmZWVsIGNoZWF0ZWQgYnkgaW5zdXJhbmNlIGNvbXBhbmllcyBkdWUgdG8gdGhlIGNvbmZ1c2lvblxcbiAgICBzdXJyb3VuZGluZyB0aGVpciBleGNsdXNpb24gcG9saWNpZXMuXFxuICA8L3A+XFxuICA8cD5cXG4gICAgSW4gVmlldG5hbSwgUGFwYXlhIGlzIHBhcnQgb2YganVzdCBhIGhhbmRmdWwgb2YgaW5zdXJ0ZWNoIHN0YXJ0dXBzIG9wZXJhdGluZ1xcbiAgICBpbiB0aGUgY291bnRyeSwgcGFydGx5IGJlY2F1c2UgaW5zdXJhbmNlIGlzIGEgdHJhZGl0aW9uYWwgaW5kdXN0cnkgd2l0aFxcbiAgICBsYXJnZSBpbmN1bWJlbnQgcGxheWVycy5cXG4gIDwvcD5cXG4gIDxwPlxcbiAgICBMYXN0IG1vbnRoLCB0aGUgY29tcGFueSB3b24gdGhlIFRlY2ggaW4gQXNpYSBTdGFydHVwIEFyZW5hIFBpdGNoIEJhdHRsZVxcbiAgICAyMDIwLiBJdCBwcmV2aW91c2x5IHJhaXNlZCBwcmUtc2VlZCBtb25leSBhbmQgaXMgbm93IGxvb2tpbmcgdG8gcmFpc2UgVVMkMVxcbiAgICBtaWxsaW9uIHRvIGZ1cnRoZXIgaW52ZXN0IGluIGF1dG9tYXRpb24gdGVjaG5vbG9neSBhbmQgaGlyaW5nLlxcbiAgPC9wPlxcbiAgPHA+XFxuICAgIFRoZSBzZWN0b3LigJlzIHRvdGFsIGFkZHJlc3NhYmxlIG1hcmtldCBoYXMgaHVnZSBwb3RlbnRpYWwuIFRoZSBnb3Zlcm5tZW50XFxuICAgIGVzdGltYXRlcyB0aGF0IHRvdGFsIHByZW1pdW1zIGNvbGxlY3RlZCBieSBpbnN1cmFuY2UgY29tcGFuaWVzIGluIFZpZXRuYW1cXG4gICAgbGFzdCB5ZWFyIHJlYWNoZWQgYWJvdXQgMTYwLjIgdHJpbGxpb24gVmlldG5hbWVzZSBkb25nIChVUyQ1LjQgYmlsbGlvbiksIHVwXFxuICAgIDIwLjUlIHllYXIgb24geWVhci4gVGhhdCBzYWlkLCB0aGUgcGVuZXRyYXRpb24gcmF0ZSBpcyBzdGlsbCByZWxhdGl2ZWx5IGxvdyxcXG4gICAgYXMgb25seSBhYm91dCA4LjUlIG9mIHRoZSBwb3B1bGF0aW9uIGhhcyBhIGxpZmUgaW5zdXJhbmNlIHBvbGljeSwgYWNjb3JkaW5nXFxuICAgIHRvIHRoZSBWaWV0bmFtIEluc3VyYW5jZSBBc3NvY2lhdGlvbi5cXG4gIDwvcD5cXG4gIDxmaWd1cmU+XFxuICAgIDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzdfX18gKyBcIlxcXCIgYWx0PVxcXCJIbyBDaGkgTWluaFxcXCIgLz5cXG4gICAgPGZpZ2NhcHRpb24+XFxuICAgICAgUGVvcGxlIGNyb3dkIGhvc3BpdGFscyBpbiBIbyBDaGkgTWluaCBDaXR5LCBWaWV0bmFtLiAvIFBob3RvIGNyZWRpdDogMTIzcmZcXG4gICAgPC9maWdjYXB0aW9uPlxcbiAgPC9maWd1cmU+XFxuICA8cD5cXG4gICAgUGhhbiwgd2hvIHByZXZpb3VzbHkgd29ya2VkIGZvciBGV0QgSW5zdXJhbmNlLCB1bmRlcnN0YW5kcyB0aGUgcGFpbnN0YWtpbmdcXG4gICAgcHJvY2VzcyBvZiBjbGFpbWluZyBoZWFsdGggaW5zdXJhbmNlIGZvciBib3RoIHBhdGllbnRzIGFuZCBpbnN1cmFuY2VcXG4gICAgY29tcGFuaWVzLiBJdOKAmXMgbGFyZ2VseSBiYXNlZCBvbiBtYW51YWwgcHJvY2Vzc2VzIGxpa2UgZmlsbGluZyBvdXQgcGFwZXJ3b3JrXFxuICAgIGFuZCBzZW5kaW5nIGJhY2stYW5kLWZvcnRoIGVtYWlscywgYW5kIHRoZSBhcHByb3ZhbCBwcm9jZXNzIG1pZ2h0IHRha2VcXG4gICAgc2V2ZXJhbCB3ZWVrcy5cXG4gIDwvcD5cXG4gIDxwPlxcbiAgICBGb3Igbm93LCBQYXBheWEgb25seSBvcGVyYXRlcyBpbiB0aGUgYnVzaW5lc3MtdG8tYnVzaW5lc3Mgc3BhY2UuIEl0c1xcbiAgICBjdXN0b21lcnMgY29uc2lzdCBvZiBpbnN1cmFuY2UgY29tcGFuaWVzIHdoaWNoIGFsc28gc2VlIHRoZSBiZW5lZml0cyBvZlxcbiAgICBzcGVlZGluZyB1cCB0aGVpciBvd24gY2xhaW1pbmcgcHJvY2Vzcy4gU28gZmFyLCB0aGUgc3RhcnR1cCBoYXMgc2VjdXJlZFxcbiAgICBjb250cmFjdHMgd2l0aCB0d28gbWFqb3IgaW5zdXJhbmNlIGNvbXBhbmllcyBpbiB0aGUgY291bnRyeSDigJMgRldEIGFuZCBCYW9cXG4gICAgTWluaCDigJMgd2hpY2ggZGVsZWdhdGUgYSBudW1iZXIgb2YgdGhlaXIgcG9ydGZvbGlvIGNvbXBhbmllcyBmb3IgUGFwYXlhIHRvXFxuICAgIG1hbmFnZS5cXG4gIDwvcD5cXG4gIDxwPlxcbiAgICBUaGUgY29tcGFueSBjdXJyZW50bHkgcHJvY2Vzc2VzIGhlYWx0aCBpbnN1cmFuY2UgY2xhaW1zIGZvciA4LDAwMCBlbXBsb3llZXMsXFxuICAgIHdobyBjYW4gdXNlIGl0cyBtb2JpbGUgYXBwIHRvIGRpZ2l0YWxseSBjaGVjayBpbiBhdCBob3NwaXRhbHMgYW5kIGNsaW5pY3NcXG4gICAgd2l0aGluIHRoZSBpbnN1cmFuY2UgY29tcGFuaWVz4oCZIG5ldHdvcmsuXFxuICA8L3A+XFxuICA8cD5cXG4gICAgQWNjb3JkaW5nIHRvIFBoYW4sIHRoaXMgYWxsb3dzIHRoZSBlbXBsb3llZXMgdG8gZ2V0IHRoZWlyIGNsYWltcyBhcHByb3ZlZFxcbiAgICB3aXRoaW4gMzAgbWludXRlcyAoZm9yIGNsYWltcyB1bmRlciAzIG1pbGxpb24gZG9uZyBvciBVUyQxMzApLiBHZW5lcmFsbHksXFxuICAgIFBhcGF5YSBjYW4gYXBwcm92ZSBjbGFpbXMgdW5kZXIgNSBtaWxsaW9uIGRvbmcgKFVTJDIxNykuIFRob3NlIHRoYXQgZ29cXG4gICAgYmV5b25kIHRoaXMgdGhyZXNob2xkIHJlcXVpcmUgYWRkaXRpb25hbCBhcHByb3ZhbCBmcm9tIGluc3VyYW5jZSBjb21wYW5pZXMuXFxuICA8L3A+XFxuICA8cD5cXG4gICAgVGhlIHN0YXJ0dXAgY2hhcmdlcyBpbnN1cmFuY2UgY29tcGFuaWVzIDYlIG9mIHRoZSBhbm51YWwgaW5zdXJhbmNlIHByZW1pdW1cXG4gICAgYW5kIGFub3RoZXIgMiUgZm9yIHVzaW5nIGl0cyBtb2JpbGUgYXBwLiBGb2xsb3dpbmcgdGhpcyBtb2RlbCwgUGFwYXlhXFxuICAgIGV4cGVjdHMgaXRzIGFubnVhbCByZWN1cnJpbmcgcmV2ZW51ZSB3aWxsIHJlYWNoIFVTJDI1MCwwMDAgdGhpcyB5ZWFyLlxcbiAgPC9wPlxcbiAgPHA+XFxuICAgIEJ1dCBQaGFuIGlzIGtlZW5seSBhd2FyZSBvZiB0aGUgY29tcGFueeKAmXMgbGltaXRhdGlvbnMuIFBhcGF5YSBoYXMgYmVlbiBhYmxlXFxuICAgIHRvIGF1dG9tYXRlIGp1c3QgMTAlIG9mIHRoZSBjbGFpbWluZyBwcm9jZXNzIOKAkyB0aGUgc3RhcnR1cOKAmXMgb3duIG9wZXJhdGlvbnNcXG4gICAgc3RhZmYgbXVzdCBjaGVjayB0aGUgc3VibWl0dGVkIGRvY3VtZW50cyBtYW51YWxseS4gV2l0aCBvbmx5IGZvdXIgZW1wbG95ZWVzXFxuICAgIG9uIHRoZSB0YXNrLCBQYXBheWEgY3VycmVudGx5IHByb2Nlc3NlcyBhYm91dCAxLDAwMCBjbGFpbXMgaW4gYSBtb250aC5cXG4gIDwvcD5cXG4gIDxwPlxcbiAgICDigJxJdOKAmXMgYmVjYXVzZSB0aGUgbWVkaWNhbCBkb2N1bWVudHMgaW4gVmlldG5hbSBkbyBub3QgZm9sbG93IHN0YW5kYXJkcyzigJ0gaGVcXG4gICAgdGVsbHMgVGVjaCBpbiBBc2lhLiDigJxXZSBuZWVkIHRvIGludmVzdCBpbiBhdXRvbWF0aW9uLCBidXQgaXTigJlzIGp1c3QgZ29pbmcgdG9cXG4gICAgdGFrZSB0aW1lLuKAnVxcbiAgPC9wPlxcbiAgPHA+XFxuICAgIEFkZGl0aW9uYWxseSwgUGhhbiBzYXlzIHRoZSBpbnN1cnRlY2ggc3RhcnR1cCBldmVudHVhbGx5IG5lZWRzIHRvIGZpbmQgb3RoZXJcXG4gICAgc291cmNlcyBvZiByZXZlbnVlLiDigJxDbGFpbWluZyBpcyBzdGlsbCBqdXN0IGEgc21hbGwgbWFya2V0IGJlY2F1c2Ugd2UgaGF2ZVxcbiAgICB0byBkZXBlbmQgb24gdGhlIGJ1ZGdldCBvZiBpbnN1cmFuY2UgY29tcGFuaWVzLOKAnSBoZSBhZGRzLlxcbiAgPC9wPlxcbjwvc2VjdGlvbj5cXG48c2VjdGlvbiBjbGFzcz1cXFwiYXJ0aWNsZS1zZWN0aW9uXFxcIiBpZD1cXFwidGhhaWxhbmRcXFwiPlxcbiAgPGgxPlxcbiAgICBMaW5l4oCZcyBkZWxpdmVyeSBhcHAgaW4gVGhhaWxhbmQgYmFua3MgJDExMG0sIG1lcmdlcyB3aXRoIGxvY2FsIGZvb2QgYXBwXFxuICA8L2gxPlxcbiAgPGRpdiBpZD1cXFwic3ViaGVhZGluZ1xcXCI+XFxuICAgIDxzcGFuPk1hcnkgUG9wcGlucyB8IDwvc3Bhbj5cXG4gICAgPHNwYW4+MzAgSnVuIDIwMjA8L3NwYW4+XFxuICA8L2Rpdj5cXG4gIDxwPlxcbiAgICBUaGFpbGFuZOKAmXMgTGluZSBNYW4sIHRoZSBvbi1kZW1hbmQgYXNzaXN0YW50IHBsYXRmb3JtIG9mIG1lc3NhZ2luZyBhcHAgTGluZSxcXG4gICAgc2FpZCBpdCBoYXMgcmVhY2hlZCBhbiBhZ3JlZW1lbnQgdG8gcmVjZWl2ZSBVUyQxMTAgbWlsbGlvbiBpbiBpbnZlc3RtZW50XFxuICAgIGZyb20gZ3Jvd3RoIGNhcGl0YWwgZmlybSBCUlYgQ2FwaXRhbCBNYW5hZ2VtZW50LlxcbiAgPC9wPlxcbiAgPHA+XFxuICAgIEFjY29yZGluZyB0byBMaW5lLCB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lIG9uZSBvZiBpdHMgZW50aXRpZXMgb3ZlcnNlYXMgaGFzXFxuICAgIHNlY3VyZWQgYW4gaW52ZXN0bWVudCBvZiB0aGlzIHNpemUuXFxuICA8L3A+XFxuICA8ZmlndXJlPlxcbiAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF84X19fICsgXCJcXFwiIGFsdD1cXFwiTGluZSBtYW5cXFwiIC8+XFxuICAgIDxmaWdjYXB0aW9uPlBob3RvIGNyZWRpdDogTGluZSBNYW48L2ZpZ2NhcHRpb24+XFxuICA8L2ZpZ3VyZT5cXG4gIDxwPlxcbiAgICBUaGUgZGVhbCBjb21lcyBhcyBMaW5lIE1hbiBpbmtlZCBhIG1lcmdlciB3aXRoIFdvbmduYWkgTWVkaWEsIGEgcmVzdGF1cmFudFxcbiAgICByZXZpZXcgYW5kIGRpc2NvdmVyeSBwbGF0Zm9ybSBpbiBUaGFpbGFuZC4gQWNjb3JkaW5nIHRvIGEgc3RhdGVtZW50IGZyb21cXG4gICAgTGluZSwgdGhlIGNhcGl0YWwgaW52ZXN0bWVudCBhaW1zIHRvIHN0cmVuZ3RoZW4gdGhlIG5ld2x5IG1lcmdlZCBlbnRpdHkgYW5kXFxuICAgIGV4cGFuZCBpdHMgZGV2ZWxvcG1lbnQgaW4gdGhlIGNvdW50cnkuXFxuICA8L3A+XFxuICA8cD5cXG4gICAgU2luY2UgYmVpbmcgZm91bmRlZCBpbiAyMDEwLCBXb25nbmFpIGN1cnJlbnRseSBoYXMgbW9yZSB0aGFuIDEwIG1pbGxpb25cXG4gICAgbW9udGhseSB1c2VycywgY2FycnlpbmcgdGhlIGxhcmdlc3QgcmVzdGF1cmFudCBkYXRhYmFzZSBpbiBUaGFpbGFuZCB3aXRoXFxuICAgIG92ZXIgNDAwLDAwMCBlc3RhYmxpc2htZW50cyBpbiBpdHMgbmV0d29yay4gTGluZSBzYWlkIHRoZSBtZXJnZXIgd291bGQgaGVscFxcbiAgICBpdCBzdHJlbmd0aGVuIGl0cyBwb3NpdGlvbiBhcyB0aGUgY291bnRyeeKAmXMgbGVhZGluZyBkYWlseSBhc3Npc3RhbnQgYXBwLlxcbiAgPC9wPlxcbiAgPHA+XFxuICAgIExpbmUgTWFuIHdhcyBsYXVuY2hlZCBpbiAyMDE2IGFzIExpbmUgZm9yYXllZCBpbnRvIGxvY2FsLCBvbi1kZW1hbmQgc2VydmljZXNcXG4gICAgZm9yIHRoZSBmaXJzdCB0aW1lLiBTaW5jZSB0aGVuLCBpdCBoYXMgYWRkZWQgb3ZlciAxMDAsMDAwIHJlc3RhdXJhbnRzIHRvIGl0c1xcbiAgICBwbGF0Zm9ybS5cXG4gIDwvcD5cXG4gIDxwPlxcbiAgICBUaGUgYXBwIG9mZmVycyBkZWxpdmVyaWVzIGZvciBmb29kLCBncm9jZXJpZXMsIGNvbnZlbmllbmNlIHN0b3JlIGl0ZW1zLCBhbmRcXG4gICAgcGFyY2VscywgYWxvbmcgd2l0aCBtZXNzZW5nZXIgYW5kIHRheGktaGFpbGluZyBzZXJ2aWNlcy4gSXQgY3VycmVudGx5XFxuICAgIG9wZXJhdGVzIGluIEJhbmdrb2sgYW5kIHNldmVyYWwgb3RoZXIgcHJvdmluY2VzIHN1Y2ggYXMgTm9udGhhYnVyaSxcXG4gICAgU2FtdXRwcmFrcmFuLCBhbmQgTmFrb3JucHJhdGhvbS5cXG4gIDwvcD5cXG4gIDxwPlxcbiAgICBKYXlkZW4gS2FuZywgZm9ybWVyIGNoaWVmIHN0cmF0ZWd5IG9mZmljZXIgYXQgTGluZSBUaGFpbGFuZCwgc2FpZCBpbiBhblxcbiAgICBpbnRlcnZpZXcgd2l0aCBLb3JlYSBUaW1lcyBsYXN0IHllYXIgdGhhdCB0aGUgY29tcGFueSBhaW1zIHRvIGV4dGVuZCBpdHNcXG4gICAgcmVhY2ggaW50byAxNyBtb3JlIHJlZ2lvbnMgaW4gdGhlIGNvdW50cnkgaW4gdGhlIGNvbWluZyB5ZWFycywgYWRkaW5nIHRoYXRcXG4gICAgTGluZSBNYW4gd291bGQgY29udGludWUgdG8gZm9jdXMgb24gdGhlIGxvY2FsIG1hcmtldCByYXRoZXIgdGhhbiBleHBhbmRpbmdcXG4gICAgb3ZlcnNlYXMuXFxuICA8L3A+XFxuICA8cD5cXG4gICAgQlJWIGlzIGEgcmVnaW9uYWwgZ3Jvd3RoIGNhcGl0YWwgZmlybSB0aGF0IGxlZCBlYXJseSByb3VuZHMgaW4gUGF5UGFsIGFuZFxcbiAgICBXYXplLiBBY2NvcmRpbmcgdG8gdGhlIHN0YXRlbWVudCwgdGhlIGNvbXBhbnkgZGVjaWRlZCB0byBpbnZlc3QgaW4gTGluZSBNYW5cXG4gICAgYmVjYXVzZSBvZiB0aGUgYXBw4oCZcyBzdWNjZXNzIGluIGJlY29taW5nIGEg4oCcZGFpbHkgYXNzaXN0YW504oCdIHRvIGxvY2FsIHVzZXJzLlxcbiAgPC9wPlxcbjwvc2VjdGlvbj5cXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8c2VjdGlvbiBpZD1cXFwiY29udGFjdC1zZWN0aW9uXFxcIj5cXG4gIDxkaXY+XFxuICAgIDxoMT5XYW50IHRvIGFkdmVydGlzZT8gU2VuZCB1cyBhIG1lc3NhZ2UgaGVyZSE8L2gxPlxcbiAgICA8Zm9ybSBhY3Rpb249XFxcIlxcXCI+XFxuICAgICAgPGlucHV0IG5hbWU9XFxcImZpcnN0TmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIkZpcnN0IG5hbWVcXFwiIHJlcXVpcmVkIC8+XFxuICAgICAgPGlucHV0IG5hbWU9XFxcImxhc3ROYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiTGFzdCBuYW1lXFxcIiByZXF1aXJlZCAvPlxcbiAgICAgIDxpbnB1dFxcbiAgICAgICAgY2xhc3M9XFxcImZ1bGxSb3dcXFwiXFxuICAgICAgICBuYW1lPVxcXCJlbWFpbFxcXCJcXG4gICAgICAgIHR5cGU9XFxcImVtYWlsXFxcIlxcbiAgICAgICAgcGxhY2Vob2xkZXI9XFxcIkVtYWlsXFxcIlxcbiAgICAgICAgcmVxdWlyZWRcXG4gICAgICAvPlxcbiAgICAgIDxpbnB1dCBuYW1lPVxcXCJjb21wYW55XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiQ29tcGFueSBuYW1lXFxcIiByZXF1aXJlZCAvPlxcbiAgICAgIDxpbnB1dCBuYW1lPVxcXCJqb2JcXFwiIHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJKb2IgdGl0bGVcXFwiIHJlcXVpcmVkIC8+XFxuICAgICAgPGlucHV0XFxuICAgICAgICBjbGFzcz1cXFwiZnVsbFJvd1xcXCJcXG4gICAgICAgIG5hbWU9XFxcImNvdW50cnlcXFwiXFxuICAgICAgICB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgcGxhY2Vob2xkZXI9XFxcIkNvdW50cnlcXFwiXFxuICAgICAgICByZXF1aXJlZFxcbiAgICAgIC8+XFxuICAgICAgPHRleHRhcmVhXFxuICAgICAgICBjbGFzcz1cXFwiZnVsbFJvd1xcXCJcXG4gICAgICAgIG5hbWU9XFxcImhvd0hlbHBcXFwiXFxuICAgICAgICBpZD1cXFwiXFxcIlxcbiAgICAgICAgY29scz1cXFwiMzBcXFwiXFxuICAgICAgICByb3dzPVxcXCIxMFxcXCJcXG4gICAgICAgIHBsYWNlaG9sZGVyPVxcXCJIb3cgY2FuIHdlIGhlbHA/XFxcIlxcbiAgICAgICAgcmVxdWlyZWRcXG4gICAgICA+PC90ZXh0YXJlYT5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmdWxsUm93XFxcIj5cXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImJ1ZGdldFxcXCI+Q2FtcGFpZ24gYnVkZ2V0IChVU0QpPC9sYWJlbD5cXG4gICAgICAgIDxzZWxlY3QgbmFtZT1cXFwiYnVkZ2V0XFxcIiBpZD1cXFwiYnVkZ2V0XFxcIiByZXF1aXJlZD5cXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiMFxcXCI+TGVzcyB0aGFuICQxMCwwMDA8L29wdGlvbj5cXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiMVxcXCI+JDEwLDAwMSAtICQyNSwwMDA8L29wdGlvbj5cXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiMlxcXCI+JDI1LDAwMSAtICQ1MCwwMDA8L29wdGlvbj5cXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiM1xcXCI+JDUwLDAwMSAtICQxMDAsMDAwPC9vcHRpb24+XFxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIjRcXFwiPk1vcmUgdGhhbiAkMTAwLDAwMDwvb3B0aW9uPlxcbiAgICAgICAgPC9zZWxlY3Q+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZnVsbFJvd1xcXCIgdHlwZT1cXFwic3VibWl0XFxcIj5TdWJtaXQ8L2J1dHRvbj5cXG4gICAgPC9mb3JtPlxcbiAgICA8ZGl2IGlkPVxcXCJzdWJtaXR0ZWRcXFwiPlxcbiAgICAgIFRoYW5rIHlvdSBmb3IgeW91ciBlbnF1aXJ5LiBPbmUgb2Ygb3VyIGN1c3RvbWVyIHJlcHJlc2VudGF0aXZlcyB3aWxsIHJlYWNoXFxuICAgICAgb3V0IHRvIHlvdSBzaG9ydGx5LlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2Plxcbjwvc2VjdGlvbj5cXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8Zm9vdGVyPkNvcHlyaWdodCBNaWhhaWwgdGhlIEJ1aWxkZXI8L2Zvb3Rlcj5cXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8aGVhZGVyPlxcbiAgPG5hdj5cXG4gICAgPGRpdiBpZD1cXFwibmF2LWxvZ28td3JhcHBlclxcXCI+XFxuICAgICAgPHNwYW4+VGVjaCBOZXdzPC9zcGFuPlxcbiAgICAgIDxzcGFuIGlkPVxcXCJuYXYtbG9nby1yZWRcXFwiPkFzaWE8L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgICA8dWwgaWQ9XFxcInJpZ2h0LW5hdi13cmFwcGVyXFxcIj5cXG4gICAgICA8bGk+SG9tZTwvbGk+XFxuICAgICAgPGxpPkNvbnRhY3Q8L2xpPlxcbiAgICA8L3VsPlxcbiAgICA8ZGl2IGlkPVxcXCJkcm9wZG93bi1idXR0b24td3JhcHBlclxcXCI+PC9kaXY+XFxuICA8L25hdj5cXG48L2hlYWRlcj5cXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8YXNpZGU+XFxuICA8dWw+XFxuICAgIDxsaSBjbGFzcz1cXFwiaGlkZGVuLW5hdiBhcnRpY2xlLWxpbmtcXFwiIGxpbmtUbz1cXFwiY2hpbmFcXFwiPkhvbWU8L2xpPlxcbiAgICA8bGkgaWQ9XFxcImNvbnRhY3QtbGlua1xcXCIgY2xhc3M9XFxcImhpZGRlbi1uYXZcXFwiPkNvbnRhY3Q8L2xpPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJoaWRkZW4tbmF2XFxcIj4tLS0tLTwvZGl2PlxcbiAgICA8bGkgY2xhc3M9XFxcImFydGljbGUtbGlua1xcXCIgbGlua1RvPVxcXCJjaGluYVxcXCI+Q2hpbmE8L2xpPlxcbiAgICA8bGkgY2xhc3M9XFxcImFydGljbGUtbGlua1xcXCIgbGlua1RvPVxcXCJpbmRpYVxcXCI+SW5kaWE8L2xpPlxcbiAgICA8bGkgY2xhc3M9XFxcImFydGljbGUtbGlua1xcXCIgbGlua1RvPVxcXCJzaW5nYXBvcmVcXFwiPlNpbmdhcG9yZTwvbGk+XFxuICAgIDxsaSBjbGFzcz1cXFwiYXJ0aWNsZS1saW5rXFxcIiBsaW5rVG89XFxcIm1hbGF5c2lhXFxcIj5NYWxheXNpYTwvbGk+XFxuICAgIDxsaSBjbGFzcz1cXFwiYXJ0aWNsZS1saW5rXFxcIiBsaW5rVG89XFxcInBoaWxpcHBpbmVzXFxcIj5QaGlsaXBwaW5lczwvbGk+XFxuICAgIDxsaSBjbGFzcz1cXFwiYXJ0aWNsZS1saW5rXFxcIiBsaW5rVG89XFxcImluZG9uZXNpYVxcXCI+SW5kb25lc2lhPC9saT5cXG4gICAgPGxpIGNsYXNzPVxcXCJhcnRpY2xlLWxpbmtcXFwiIGxpbmtUbz1cXFwidmlldG5hbVxcXCI+VmlldG5hbTwvbGk+XFxuICAgIDxsaSBjbGFzcz1cXFwiYXJ0aWNsZS1saW5rXFxcIiBsaW5rVG89XFxcInRoYWlsYW5kXFxcIj5UaGFpbGFuZDwvbGk+XFxuICA8L3VsPlxcbjwvYXNpZGU+XFxuXCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWF5YmVOZWVkUXVvdGVzICYmIC9bXFx0XFxuXFxmXFxyIFwiJz08PmBdLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiZXhwb3J0IGRlZmF1bHQgXCI8c3ZnIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcIkNhcGFfMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiXFxyXFxuXFx0IHZpZXdCb3g9XFxcIjAgMCA0NDcgNDQ3XFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NDcgNDQ3O1xcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCI+XFxyXFxuPGc+XFxyXFxuXFx0PHBhdGggZD1cXFwiTTQ0NywzMDMuNWMwLTE3LjM2OS0xNC4xMzEtMzEuNS0zMS41LTMxLjVINDA3di0yMC45MzFjNC4yOC0yLjQxMSw4Ljg0NS00LjA2OSwxNi41LTQuMDY5YzQuMTQyLDAsNy41LTMuMzU4LDcuNS03LjVcXHJcXG5cXHRcXHRzLTMuMzU4LTcuNS03LjUtNy41Yy02LjgyMSwwLTEyLjEwNywxLjA1Ni0xNi41LDIuNjExdi0xMi44NDZjOS4yOS0zLjEzOCwxNi0xMS45MywxNi0yMi4yNjZ2LTguOTk4XFxyXFxuXFx0XFx0YzAtMTYuNTU5LTQuMzM4LTMyLjUzLTEyLjU0NC00Ni4xODVjLTE2LjEzOC0yNi44NTItMzkuODU2LTQzLjQ0NC01Ni45MTItNTIuNjM1QzMxOS40NTUsNzMuMzE0LDI3NS43MDIsNjQsMjIzLjUsNjRcXHJcXG5cXHRcXHRjLTUyLjIwMSwwLTk1Ljk1NCw5LjMxNC0xMzAuMDQzLDI3LjY4M2MtMzAuOTAxLDE2LjY1MS00OC4wMDUsMzcuODEzLTU2LjkxMiw1Mi42MzVDMjguMzM4LDE1Ny45NzMsMjQsMTczLjk0MywyNCwxOTAuNTAydjguOTk4XFxyXFxuXFx0XFx0YzAsMTAuMzM2LDYuNzEsMTkuMTI4LDE2LDIyLjI2NnYxMi44NTJDMzUuNjA5LDIzMy4wNTksMzAuMzIzLDIzMiwyMy41LDIzMmMtNC4xNDIsMC03LjUsMy4zNTgtNy41LDcuNXMzLjM1OCw3LjUsNy41LDcuNVxcclxcblxcdFxcdGM3LjY1OCwwLDEyLjIxOSwxLjY2NSwxNi41LDQuMDgzVjI3MmgtOC41QzE0LjEzMSwyNzIsMCwyODYuMTMxLDAsMzAzLjVjMCwxNC43ODQsMTAuMjQxLDI3LjIxNiwyNCwzMC41OXY5LjQxXFxyXFxuXFx0XFx0YzAsMjEuNzgsMTcuNzIsMzkuNSwzOS41LDM5LjVoMzIwYzIxLjc4LDAsMzkuNS0xNy43MiwzOS41LTM5LjV2LTkuNDFDNDM2Ljc2LDMzMC43MTYsNDQ3LDMxOC4yODUsNDQ3LDMwMy41eiBNMzkyLDIyM3YxOS43MlxcclxcblxcdFxcdGMtNC45NDEsMy4wNDktOS42NjUsNS4yOC0xOC41NDQsNS4yOGMtMTAuMzE4LDAtMTUuMDI0LTMuMDA5LTIwLjk4Mi02LjgxOWMtNi43My00LjMwMy0xNC4zNTktOS4xODEtMjkuMDYzLTkuMTgxXFxyXFxuXFx0XFx0Yy0xNC42OTcsMC0yMi4zMjEsNC44NzgtMjkuMDQ4LDkuMTgzYy01Ljk1MywzLjgwOS0xMC42NTQsNi44MTctMjAuOTYyLDYuODE3Yy0xMC4yOTYsMC0xNC45OTMtMy4wMDgtMjAuOTM4LTYuODE2XFxyXFxuXFx0XFx0Yy02LjcyMi00LjMwNS0xNC4zNDEtOS4xODQtMjkuMDI4LTkuMTg0Yy0xNC42OTMsMC0yMi4zMTUsNC44NzktMjkuMDQsOS4xODNjLTUuOTUsMy44MDktMTAuNjUsNi44MTctMjAuOTU0LDYuODE3XFxyXFxuXFx0XFx0Yy0xMC4zLDAtMTQuOTk4LTMuMDA4LTIwLjk0Ni02LjgxNkMxNDUuNzcxLDIzNi44NzksMTM4LjE1LDIzMiwxMjMuNDYsMjMyYy0xNC42OSwwLTIyLjMxMSw0Ljg3OS0yOS4wMzQsOS4xODRcXHJcXG5cXHRcXHRDODguNDc4LDI0NC45OTIsODMuNzgsMjQ4LDczLjQ4LDI0OGMtOC44NDQsMC0xMy41NTgtMi4yMi0xOC40OC01LjI1OVYyMjNIMzkyeiBNMzksMTkwLjUwMmMwLTEzLjgzNywzLjU5Ny0yNy4xMzYsMTAuNDAxLTM4LjQ1OFxcclxcblxcdFxcdGM3Ljk0LTEzLjIxMiwyMy4yNjQtMzIuMTE5LDUxLjE3MS00Ny4xNTZDMTMyLjQ1MSw4Ny43MSwxNzMuODEsNzksMjIzLjUsNzlzOTEuMDUsOC43MSwxMjIuOTI4LDI1Ljg4OFxcclxcblxcdFxcdGMyNy45MDcsMTUuMDM4LDQzLjIzLDMzLjk0NCw1MS4xNzEsNDcuMTU2QzQwNC40MDQsMTYzLjM2Niw0MDgsMTc2LjY2NSw0MDgsMTkwLjUwMnY4Ljk5OGMwLDQuNjg3LTMuODEzLDguNS04LjUsOC41aC0zNTJcXHJcXG5cXHRcXHRjLTQuNjg3LDAtOC41LTMuODEzLTguNS04LjVWMTkwLjUwMnogTTU1LDI1OS42MjRDNTkuNzY0LDI2MS41OSw2NS42LDI2Myw3My40OCwyNjNjMTQuNjksMCwyMi4zMTEtNC44NzksMjkuMDM0LTkuMTg0XFxyXFxuXFx0XFx0YzUuOTQ4LTMuODA5LDEwLjY0Ni02LjgxNiwyMC45NDYtNi44MTZjMTAuMywwLDE0Ljk5OSwzLjAwOCwyMC45NDcsNi44MTZjNi43MjQsNC4zMDUsMTQuMzQ0LDkuMTg0LDI5LjAzNCw5LjE4NFxcclxcblxcdFxcdGMxNC42OTMsMCwyMi4zMTUtNC44NzksMjkuMDQxLTkuMTgzYzUuOTUtMy44MDksMTAuNjQ5LTYuODE3LDIwLjk1My02LjgxN2MxMC4yOTYsMCwxNC45OTMsMy4wMDgsMjAuOTM4LDYuODE2XFxyXFxuXFx0XFx0YzYuNzIyLDQuMzA1LDE0LjM0MSw5LjE4NCwyOS4wMjgsOS4xODRjMTQuNjk2LDAsMjIuMzIxLTQuODc4LDI5LjA0Ny05LjE4M2M1Ljk1My0zLjgwOSwxMC42NTQtNi44MTcsMjAuOTYzLTYuODE3XFxyXFxuXFx0XFx0YzEwLjMxOCwwLDE1LjAyNCwzLjAwOSwyMC45ODEsNi44MThjNi43Myw0LjMwNCwxNC4zNTksOS4xODIsMjkuMDYzLDkuMTgyYzcuOTEzLDAsMTMuNzY3LTEuNDE4LDE4LjU0NC0zLjM5NFYyNzJINTVWMjU5LjYyNHpcXHJcXG5cXHRcXHQgTTM4My41LDM2OGgtMzIwQzQ5Ljk5MSwzNjgsMzksMzU3LjAxLDM5LDM0My41VjMzNWgzNjl2OC41QzQwOCwzNTcuMDEsMzk3LjAxLDM2OCwzODMuNSwzNjh6IE00MTUuNSwzMjBIMjkwLjMxOVxcclxcblxcdFxcdGMyLjk2NS00LjgwMiw0LjY4MS0xMC40NTQsNC42ODEtMTYuNWMwLTQuMTQyLTMuMzU4LTcuNS03LjUtNy41cy03LjUsMy4zNTgtNy41LDcuNWMwLDkuMDk4LTcuNDAyLDE2LjUtMTYuNSwxNi41aC0yMzJcXHJcXG5cXHRcXHRjLTkuMDk4LDAtMTYuNS03LjQwMi0xNi41LTE2LjVTMjIuNDAyLDI4NywzMS41LDI4N2gxMzZjOS4wOTgsMCwxNi41LDcuNDAyLDE2LjUsMTYuNWMwLDQuMTQyLDMuMzU4LDcuNSw3LjUsNy41XFxyXFxuXFx0XFx0czcuNS0zLjM1OCw3LjUtNy41YzAtNi4wNDYtMS43MTYtMTEuNjk4LTQuNjgxLTE2LjVINDE1LjVjOS4wOTgsMCwxNi41LDcuNDAyLDE2LjUsMTYuNUM0MzIsMzEyLjU5OCw0MjQuNTk5LDMyMCw0MTUuNSwzMjB6XFxcIi8+XFxyXFxuXFx0PHBhdGggZD1cXFwiTTE5MS41LDE2N2MxLjkxOSwwLDMuODM5LTAuNzMyLDUuMzAzLTIuMTk3bDgtOGMyLjkyOS0yLjkyOSwyLjkyOS03LjY3OCwwLTEwLjYwNmMtMi45MjktMi45MjktNy42NzgtMi45MjktMTAuNjA2LDBsLTgsOFxcclxcblxcdFxcdGMtMi45MjksMi45MjktMi45MjksNy42NzgsMCwxMC42MDZDMTg3LjY2MSwxNjYuMjY4LDE4OS41ODEsMTY3LDE5MS41LDE2N3pcXFwiLz5cXHJcXG5cXHQ8cGF0aCBkPVxcXCJNMjY2LjE5NywxNTYuODAzYzEuNDY0LDEuNDY0LDMuMzg0LDIuMTk3LDUuMzAzLDIuMTk3czMuODM5LTAuNzMyLDUuMzAzLTIuMTk3YzIuOTI5LTIuOTI5LDIuOTI5LTcuNjc4LDAtMTAuNjA2bC04LThcXHJcXG5cXHRcXHRjLTIuOTI5LTIuOTI5LTcuNjc4LTIuOTI5LTEwLjYwNiwwYy0yLjkyOSwyLjkyOS0yLjkyOSw3LjY3OCwwLDEwLjYwNkwyNjYuMTk3LDE1Ni44MDN6XFxcIi8+XFxyXFxuXFx0PHBhdGggZD1cXFwiTTEwMy41LDE3NWMxLjkxOSwwLDMuODM5LTAuNzMyLDUuMzAzLTIuMTk3bDgtOGMyLjkyOS0yLjkyOSwyLjkyOS03LjY3OCwwLTEwLjYwNmMtMi45MjktMi45MjktNy42NzgtMi45MjktMTAuNjA2LDBsLTgsOFxcclxcblxcdFxcdGMtMi45MjksMi45MjktMi45MjksNy42NzgsMCwxMC42MDZDOTkuNjYxLDE3NC4yNjgsMTAxLjU4MSwxNzUsMTAzLjUsMTc1elxcXCIvPlxcclxcblxcdDxwYXRoIGQ9XFxcIk0xNTEuNSwxMzVjNC4xNDIsMCw3LjUtMy4zNTgsNy41LTcuNXYtOGMwLTQuMTQyLTMuMzU4LTcuNS03LjUtNy41cy03LjUsMy4zNTgtNy41LDcuNXY4XFxyXFxuXFx0XFx0QzE0NCwxMzEuNjQyLDE0Ny4zNTgsMTM1LDE1MS41LDEzNXpcXFwiLz5cXHJcXG5cXHQ8cGF0aCBkPVxcXCJNMjM5LjUsMTkxaDhjNC4xNDIsMCw3LjUtMy4zNTgsNy41LTcuNXMtMy4zNTgtNy41LTcuNS03LjVoLThjLTQuMTQyLDAtNy41LDMuMzU4LTcuNSw3LjVTMjM1LjM1OCwxOTEsMjM5LjUsMTkxelxcXCIvPlxcclxcblxcdDxwYXRoIGQ9XFxcIk0zMTEuNSwxODNjMS45MTksMCwzLjgzOS0wLjczMiw1LjMwMy0yLjE5N2w4LThjMi45MjktMi45MjksMi45MjktNy42NzgsMC0xMC42MDZjLTIuOTI5LTIuOTI5LTcuNjc4LTIuOTI5LTEwLjYwNiwwbC04LDhcXHJcXG5cXHRcXHRjLTIuOTI5LDIuOTI5LTIuOTI5LDcuNjc4LDAsMTAuNjA2QzMwNy42NjIsMTgyLjI2OCwzMDkuNTgxLDE4MywzMTEuNSwxODN6XFxcIi8+XFxyXFxuXFx0PHBhdGggZD1cXFwiTTIxOC4xOTcsMTE2LjgwM2MxLjQ2NCwxLjQ2NCwzLjM4NCwyLjE5Nyw1LjMwMywyLjE5N3MzLjgzOS0wLjczMiw1LjMwMy0yLjE5N2MyLjkyOS0yLjkyOSwyLjkyOS03LjY3OCwwLTEwLjYwNmwtOC04XFxyXFxuXFx0XFx0Yy0yLjkyOS0yLjkyOS03LjY3OC0yLjkyOS0xMC42MDYsMGMtMi45MjksMi45MjktMi45MjksNy42NzgsMCwxMC42MDZMMjE4LjE5NywxMTYuODAzelxcXCIvPlxcclxcblxcdDxwYXRoIGQ9XFxcIk0xNTQuMTk3LDE4OC44MDNjMS40NjQsMS40NjQsMy4zODQsMi4xOTcsNS4zMDMsMi4xOTdzMy44MzktMC43MzIsNS4zMDMtMi4xOTdjMi45MjktMi45MjksMi45MjktNy42NzgsMC0xMC42MDZsLTgtOFxcclxcblxcdFxcdGMtMi45MjktMi45MjktNy42NzgtMi45MjktMTAuNjA2LDBjLTIuOTI5LDIuOTI5LTIuOTI5LDcuNjc4LDAsMTAuNjA2TDE1NC4xOTcsMTg4LjgwM3pcXFwiLz5cXHJcXG5cXHQ8cGF0aCBkPVxcXCJNMjc4LjE3LDExNS40OTJjNS4zMTEsMC45NTgsMTAuNTEsMi4wODMsMTUuNDUzLDMuMzQ0YzAuNjIyLDAuMTU4LDEuMjQ1LDAuMjM0LDEuODU5LDAuMjM0XFxyXFxuXFx0XFx0YzMuMzQ3LDAsNi4zOTctMi4yNTcsNy4yNjItNS42NDhjMS4wMjMtNC4wMTQtMS40LTguMDk3LTUuNDE0LTkuMTIxYy01LjI4Ny0xLjM0OC0xMC44MzctMi41NDktMTYuNDk2LTMuNTcxXFxyXFxuXFx0XFx0Yy00LjA3NS0wLjczMi03Ljk3OCwxLjk3My04LjcxMyw2LjA0OUMyNzEuMzg2LDExMC44NTUsMjc0LjA5NCwxMTQuNzU2LDI3OC4xNywxMTUuNDkyelxcXCIvPlxcclxcblxcdDxwYXRoIGQ9XFxcIk0zMjQuMjk5LDEyOS42NDdjMjUuOTE4LDEyLjE3NSwzOS4yNTEsMjcuODYzLDQ1Ljg3MiwzOC44OGMyLjg0OSw0Ljc0LDQuNjc5LDEwLjEwNCw1LjQ0MSwxNS45NDJcXHJcXG5cXHRcXHRjMC40OTMsMy43NzgsMy43MTcsNi41MzEsNy40MjgsNi41MzFjMC4zMjMsMCwwLjY1LTAuMDIxLDAuOTc5LTAuMDY0YzQuMTA3LTAuNTM2LDcuMDAyLTQuMyw2LjQ2Ny04LjQwN1xcclxcblxcdFxcdGMtMS4wMy03Ljg5Ny0zLjU0LTE1LjIwOC03LjQ1OC0yMS43MjljLTcuNjkzLTEyLjgwMS0yMy4wMjEtMzAuOTUzLTUyLjM1MS00NC43MzFjLTMuNzUtMS43NTktOC4yMTUtMC4xNDktOS45NzcsMy42XFxyXFxuXFx0XFx0QzMxOC45MzksMTIzLjQxOSwzMjAuNTUsMTI3Ljg4NiwzMjQuMjk5LDEyOS42NDd6XFxcIi8+XFxyXFxuPC9nPlxcclxcbjxnPlxcclxcbjwvZz5cXHJcXG48Zz5cXHJcXG48L2c+XFxyXFxuPGc+XFxyXFxuPC9nPlxcclxcbjxnPlxcclxcbjwvZz5cXHJcXG48Zz5cXHJcXG48L2c+XFxyXFxuPGc+XFxyXFxuPC9nPlxcclxcbjxnPlxcclxcbjwvZz5cXHJcXG48Zz5cXHJcXG48L2c+XFxyXFxuPGc+XFxyXFxuPC9nPlxcclxcbjxnPlxcclxcbjwvZz5cXHJcXG48Zz5cXHJcXG48L2c+XFxyXFxuPGc+XFxyXFxuPC9nPlxcclxcbjxnPlxcclxcbjwvZz5cXHJcXG48Zz5cXHJcXG48L2c+XFxyXFxuPGc+XFxyXFxuPC9nPlxcclxcbjwvc3ZnPlxcclxcblwiOyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMF0udXNlWzNdIS4vYXJ0aWNsZXMuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMF0udXNlWzNdIS4vY29udGFjdC5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1swXS51c2VbM10hLi9mb290ZXIuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMF0udXNlWzNdIS4vbmF2YmFyLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzBdLnVzZVszXSEuL3NpZGViYXIuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMF0udXNlWzNdIS4vaW5kZXguc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IHsgc2lkZWJhckxvYWQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuanNcIjtcbmltcG9ydCB7IGFydGljbGVMb2FkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvYXJ0aWNsZXMvYXJ0aWNsZXMuanNcIjtcblxuY29uc3QgY2xpY2tTdHlsZSA9IChlbGVtZW50LCBzdHlsZSkgPT4ge1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoc3R5bGUpO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShzdHlsZSk7XG4gIH0sIDIwMCk7XG59O1xuXG5jb25zdCBtb3ZlVG9wID0gKCkgPT4ge1xuICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG59O1xuXG5jb25zdCBob21lcGFnZUxvYWQgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpLmlubmVySFRNTCA9IFwiXCI7XG4gIHNpZGViYXJMb2FkKCk7XG4gIGFydGljbGVMb2FkKCk7XG59O1xuXG5leHBvcnQgeyBjbGlja1N0eWxlLCBob21lcGFnZUxvYWQsIG1vdmVUb3AgfTtcbiIsImltcG9ydCBcIi4vYXJ0aWNsZXMuc2Nzc1wiO1xuaW1wb3J0IGh0bWwgZnJvbSBcIi4vYXJ0aWNsZXMuaHRtbFwiO1xuXG5pbXBvcnQgeyBtb3ZlVG9wIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21tb24uanNcIjtcblxuY29uc3QgYXJ0aWNsZUxvYWQgPSAoYXJ0aWNsZUlkID0gXCJjaGluYVwiKSA9PiB7XG4gIGxldCBwcmV2U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluPnNlY3Rpb25cIik7XG4gIGlmIChwcmV2U2VjdGlvbikge1xuICAgIHByZXZTZWN0aW9uLnJlbW92ZSgpO1xuICB9XG5cbiAgbGV0IGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoaHRtbCwgXCJ0ZXh0L2h0bWxcIik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpLmFwcGVuZENoaWxkKGRvYy5nZXRFbGVtZW50QnlJZChhcnRpY2xlSWQpKTtcbiAgbW92ZVRvcCgpO1xufTtcblxuZXhwb3J0IHsgYXJ0aWNsZUxvYWQgfTtcbiIsImltcG9ydCBodG1sIGZyb20gXCIuL2NvbnRhY3QuaHRtbFwiO1xuaW1wb3J0IFwiLi9jb250YWN0LnNjc3NcIjtcblxuaW1wb3J0IHsgbW92ZVRvcCB9IGZyb20gXCIuLi8uLi9jb21tb24vY29tbW9uLmpzXCI7XG5cbmNvbnN0IGNvbnRhY3RMb2FkID0gKCkgPT4ge1xuICBsZXQgbmV3SHRtbCA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoaHRtbCwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIm1haW5cIilcbiAgICAucmVwbGFjZUNoaWxkKFxuICAgICAgbmV3SHRtbC5kb2N1bWVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcInNlY3Rpb25cIiksXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VjdGlvblwiKVxuICAgICk7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhc2lkZVwiKVswXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgZG9jdW1lbnRcbiAgICAuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJmb3JtXCIpWzBdXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgbGV0IHN1Ym1pdHRlZEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdHRlZFwiKTtcbiAgICAgICAgc3VibWl0dGVkRWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHN1Ym1pdHRlZEVsZW0uY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICB9LCA1MDApO1xuICAgIH0pO1xuXG4gIG1vdmVUb3AoKTtcbn07XG5cbmV4cG9ydCB7IGNvbnRhY3RMb2FkIH07XG4iLCJpbXBvcnQgaHRtbCBmcm9tIFwiLi9mb290ZXIuaHRtbFwiO1xuaW1wb3J0IFwiLi9mb290ZXIuc2Nzc1wiO1xuXG5jb25zdCBmb290ZXJMb2FkID0gKCkgPT4ge1xuICBsZXQgZG9jID0gbmV3IERPTVBhcnNlcigpLnBhcnNlRnJvbVN0cmluZyhodG1sLCBcInRleHQvaHRtbFwiKTtcblxuICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShcbiAgICBkb2MuZG9jdW1lbnRFbGVtZW50LFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzY3JpcHRcIilcbiAgKTtcbn07XG5cbmV4cG9ydCB7IGZvb3RlckxvYWQgfTtcbiIsImltcG9ydCBcIi4vbmF2YmFyLnNjc3NcIjtcbmltcG9ydCBodG1sIGZyb20gXCIuL25hdmJhci5odG1sXCI7XG5pbXBvcnQgc3ZnIGZyb20gXCIuL2hhbWJ1cmdlci5zdmdcIjtcblxuaW1wb3J0IHsgY2xpY2tTdHlsZSB9IGZyb20gXCIuLi8uLi9jb21tb24vY29tbW9uLmpzXCI7XG5pbXBvcnQgeyBob21lcGFnZUxvYWQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xuXG5pbXBvcnQgeyBjb250YWN0TG9hZCB9IGZyb20gXCIuLi9jb250YWN0L2NvbnRhY3QuanNcIjtcbmltcG9ydCB7IHNpZGViYXJNb2JpbGVTaG93IH0gZnJvbSBcIi4uL3NpZGViYXIvc2lkZWJhci5qc1wiO1xuXG5jb25zdCBuYXZiYXJMb2FkID0gKCkgPT4ge1xuICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgaHRtbCk7XG5cbiAgbGV0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIm5hdiBsaVwiKTtcblxuICBuYXZMaW5rcy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgbGV0IGNsaWNrZWRFbGVtID0gZXZlbnQudGFyZ2V0O1xuICAgICAgY2xpY2tTdHlsZShjbGlja2VkRWxlbSwgXCJuYXYtbGktY2xpY2tlZFwiKTtcblxuICAgICAgaW5kZXggPT0gMCA/IGhvbWVwYWdlTG9hZCgpIDogY29udGFjdExvYWQoKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgbGV0IGRyb3Bkb3duQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wZG93bi1idXR0b24td3JhcHBlclwiKTtcbiAgZHJvcGRvd25CdXR0b24uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBzdmcpO1xuXG4gIGRyb3Bkb3duQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBkcm9wZG93bkJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwibmF2LXNlbGVjdGVkXCIpO1xuICAgIHNpZGViYXJNb2JpbGVTaG93KCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgbmF2YmFyTG9hZCB9O1xuIiwiaW1wb3J0IFwiLi9zaWRlYmFyLnNjc3NcIjtcbmltcG9ydCBodG1sIGZyb20gXCIuL3NpZGViYXIuaHRtbFwiO1xuaW1wb3J0IHsgY2xpY2tTdHlsZSB9IGZyb20gXCIuLi8uLi9jb21tb24vY29tbW9uLmpzXCI7XG5pbXBvcnQgeyBhcnRpY2xlTG9hZCB9IGZyb20gXCIuLi9hcnRpY2xlcy9hcnRpY2xlc1wiO1xuaW1wb3J0IHsgY29udGFjdExvYWQgfSBmcm9tIFwiLi4vY29udGFjdC9jb250YWN0LmpzXCI7XG5cbmNvbnN0IHNpZGViYXJMb2FkID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKS5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGh0bWwpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhc2lkZSBsaVwiKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBsZXQgY2xpY2tlZEVsZW0gPSBldmVudC50YXJnZXQ7XG5cbiAgICAgIGNsaWNrU3R5bGUoY2xpY2tlZEVsZW0sIFwic2lkZS1kaXYtY2xpY2tlZFwiKTtcblxuICAgICAgaWYgKGNsaWNrZWRFbGVtLmhhc0F0dHJpYnV0ZShcImlkXCIpKSB7XG4gICAgICAgIGNvbnRhY3RMb2FkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcnRpY2xlTG9hZChjbGlja2VkRWxlbS5nZXRBdHRyaWJ1dGUoXCJsaW5rVG9cIikpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2NyZWVuLndpZHRoIDw9IDc2OCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFzaWRlXCIpWzBdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwiZHJvcGRvd24tYnV0dG9uLXdyYXBwZXJcIilcbiAgICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJuYXYtc2VsZWN0ZWRcIik7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3Qgc2lkZWJhck1vYmlsZVNob3cgPSAoKSA9PiB7XG4gIGxldCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhc2lkZVwiKVswXTtcblxuICBpZiAoXG4gICAgZG9jdW1lbnRcbiAgICAgIC5nZXRFbGVtZW50QnlJZChcImRyb3Bkb3duLWJ1dHRvbi13cmFwcGVyXCIpXG4gICAgICAuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmF2LXNlbGVjdGVkXCIpXG4gICkge1xuICAgIHNpZGViYXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfSBlbHNlIHtcbiAgICBzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxufTtcblxuZXhwb3J0IHsgc2lkZWJhckxvYWQsIHNpZGViYXJNb2JpbGVTaG93IH07XG4iLCJpbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcblxuaW1wb3J0IHsgbmF2YmFyTG9hZCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5qc1wiO1xuaW1wb3J0IHsgaG9tZXBhZ2VMb2FkIH0gZnJvbSBcIi4vY29tbW9uL2NvbW1vbi5qc1wiO1xuaW1wb3J0IHsgZm9vdGVyTG9hZCB9IGZyb20gXCIuL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qc1wiO1xuXG5uYXZiYXJMb2FkKCk7XG5ob21lcGFnZUxvYWQoKTtcbmZvb3RlckxvYWQoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9