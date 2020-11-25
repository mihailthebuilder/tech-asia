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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  font-size: 1.3rem;\n  background: #f7f7f7;\n  font-family: \"Roboto\";\n}\n\nmain {\n  display: flex;\n  flex-direction: row;\n}\n\n@media (max-width: 768px) {\n  main {\n    display: block;\n  }\n}", "",{"version":3,"sources":["webpack://./src/index.scss"],"names":[],"mappings":"AAgBA;EACE,SAAA;EACA,iBAAA;EACA,mBAdiB;EAejB,qBAAA;AAdF;;AAiBA;EACE,aAAA;EACA,mBAAA;AAdF;;AAiBA;EACE;IACE,cAAA;EAdF;AACF","sourcesContent":["$gray: hsla(230, 7%, 84%, 1);\n$dark-green: hsla(177, 100%, 4%, 1);\n$chinese-red: hsla(15, 87%, 34%, 1);\n$gold: hsla(42, 79%, 54%, 1);\n$blood-red: hsla(1, 93%, 22%, 1);\n$transparent-gray: hsla(0, 0%, 97%, 1);\n$transparent-red: hsla(15, 87%, 34%, 0.7);\n\n$site-padding-left: 2rem;\n$mobile-padding-left: 1rem;\n\n$tablet-screen: 768px;\n$mobile-screen: 576px;\n\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto&family=Goldman&family=Roboto+Condensed&display=swap\");\n\nbody {\n  margin: 0;\n  font-size: 1.3rem;\n  background: $transparent-gray;\n  font-family: \"Roboto\";\n}\n\nmain {\n  display: flex;\n  flex-direction: row;\n}\n\n@media (max-width: $tablet-screen) {\n  main {\n    display: block;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZWNoLWFzaWEvLi9zcmMvY29tcG9uZW50cy9hcnRpY2xlcy9hcnRpY2xlcy5zY3NzIiwid2VicGFjazovL3RlY2gtYXNpYS8uL3NyYy9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5zY3NzIiwid2VicGFjazovL3RlY2gtYXNpYS8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuc2NzcyIsIndlYnBhY2s6Ly90ZWNoLWFzaWEvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLnNjc3MiLCJ3ZWJwYWNrOi8vdGVjaC1hc2lhLy4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLnNjc3MiLCJ3ZWJwYWNrOi8vdGVjaC1hc2lhLy4vc3JjL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vdGVjaC1hc2lhLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZWNoLWFzaWEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly90ZWNoLWFzaWEvLi9zcmMvY29tcG9uZW50cy9hcnRpY2xlcy9pbWcvY2hpbmEuanBnIiwid2VicGFjazovL3RlY2gtYXNpYS8uL3NyYy9jb21wb25lbnRzL2FydGljbGVzL2ltZy9pbmRpYS5qcGciLCJ3ZWJwYWNrOi8vdGVjaC1hc2lhLy4vc3JjL2NvbXBvbmVudHMvYXJ0aWNsZXMvaW1nL2luZG9uZXNpYS5qcGciLCJ3ZWJwYWNrOi8vdGVjaC1hc2lhLy4vc3JjL2NvbXBvbmVudHMvYXJ0aWNsZXMvaW1nL21hbGF5c2lhLmpwZWciLCJ3ZWJwYWNrOi8vdGVjaC1hc2lhLy4vc3JjL2NvbXBvbmVudHMvYXJ0aWNsZXMvaW1nL3BoaWxpcHBpbmVzLmpwZyIsIndlYnBhY2s6Ly90ZWNoLWFzaWEvLi9zcmMvY29tcG9uZW50cy9hcnRpY2xlcy9pbWcvc2luZ2Fwb3JlLmpwZyIsIndlYnBhY2s6Ly90ZWNoLWFzaWEvLi9zcmMvY29tcG9uZW50cy9hcnRpY2xlcy9pbWcvdGhhaWxhbmQuanBnIiwid2VicGFjazovL3RlY2gtYXNpYS8uL3NyYy9jb21wb25lbnRzL2FydGljbGVzL2ltZy92aWV0bmFtLTIuanBnIiwid2VicGFjazovL3RlY2gtYXNpYS8uL3NyYy9jb21wb25lbnRzL2FydGljbGVzL2ltZy92aWV0bmFtLmpwZyIsIndlYnBhY2s6Ly90ZWNoLWFzaWEvLi9zcmMvY29tcG9uZW50cy9hcnRpY2xlcy9hcnRpY2xlcy5odG1sIiwid2VicGFjazovL3RlY2gtYXNpYS8uL3NyYy9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5odG1sIiwid2VicGFjazovL3RlY2gtYXNpYS8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuaHRtbCIsIndlYnBhY2s6Ly90ZWNoLWFzaWEvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmh0bWwiLCJ3ZWJwYWNrOi8vdGVjaC1hc2lhLy4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmh0bWwiLCJ3ZWJwYWNrOi8vdGVjaC1hc2lhLy4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdGVjaC1hc2lhLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL2hhbWJ1cmdlci5zdmciLCJ3ZWJwYWNrOi8vdGVjaC1hc2lhLy4vc3JjL2NvbXBvbmVudHMvYXJ0aWNsZXMvYXJ0aWNsZXMuc2Nzcz83OGQ1Iiwid2VicGFjazovL3RlY2gtYXNpYS8uL3NyYy9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5zY3NzPzgyNDAiLCJ3ZWJwYWNrOi8vdGVjaC1hc2lhLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5zY3NzPzU2OGQiLCJ3ZWJwYWNrOi8vdGVjaC1hc2lhLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5zY3NzP2FlMzciLCJ3ZWJwYWNrOi8vdGVjaC1hc2lhLy4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLnNjc3M/ZDgyOSIsIndlYnBhY2s6Ly90ZWNoLWFzaWEvLi9zcmMvaW5kZXguc2Nzcz84YWQyIiwid2VicGFjazovL3RlY2gtYXNpYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZWNoLWFzaWEvLi9zcmMvY29tbW9uL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly90ZWNoLWFzaWEvLi9zcmMvY29tcG9uZW50cy9hcnRpY2xlcy9hcnRpY2xlcy5qcyIsIndlYnBhY2s6Ly90ZWNoLWFzaWEvLi9zcmMvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vdGVjaC1hc2lhLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly90ZWNoLWFzaWEvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmpzIiwid2VicGFjazovL3RlY2gtYXNpYS8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90ZWNoLWFzaWEvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVjaC1hc2lhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlY2gtYXNpYS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZWNoLWFzaWEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlY2gtYXNpYS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RlY2gtYXNpYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlY2gtYXNpYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlY2gtYXNpYS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90ZWNoLWFzaWEvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLENBQTRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSw0REFBNEQsNEJBQTRCLGlDQUFpQyxxQkFBcUIsR0FBRyx1QkFBdUIsd0JBQXdCLG1CQUFtQixHQUFHLGlCQUFpQixvQkFBb0Isd0JBQXdCLHNCQUFzQixHQUFHLFlBQVksbUJBQW1CLEdBQUcsY0FBYyxxQkFBcUIsb0JBQW9CLEdBQUcscUJBQXFCLG9CQUFvQixtQkFBbUIsR0FBRywrQkFBK0Isc0JBQXNCLG9CQUFvQixLQUFLLHdCQUF3QixzQkFBc0IsS0FBSyx5QkFBeUIsb0JBQW9CLHdCQUF3QixLQUFLLDZCQUE2QixxQkFBcUIsS0FBSyx3Q0FBd0Msd0JBQXdCLEtBQUssbUJBQW1CLHdCQUF3Qiw0QkFBNEIsS0FBSyxHQUFHLE9BQU8sd0dBQXdHLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLEtBQUssTUFBTSxXQUFXLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLHNEQUFzRCxzQ0FBc0Msc0NBQXNDLCtCQUErQixtQ0FBbUMseUNBQXlDLDRDQUE0Qyw2QkFBNkIsNkJBQTZCLDBCQUEwQix3QkFBd0Isc0JBQXNCLDRCQUE0QixpQ0FBaUMscUJBQXFCLFVBQVUsMEJBQTBCLHdCQUF3QixLQUFLLEdBQUcsaUJBQWlCLG9CQUFvQix3QkFBd0Isc0JBQXNCLEdBQUcsWUFBWSxt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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7VUNmQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5hcnRpY2xlLXNlY3Rpb24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbiAgcGFkZGluZzogMnJlbSA1cmVtIDVyZW0gNXJlbTtcXG4gIG1heC13aWR0aDogNjByZW07XFxufVxcbi5hcnRpY2xlLXNlY3Rpb24gaDEge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGNvbG9yOiAjNmMwNjA0O1xcbn1cXG5cXG4jc3ViaGVhZGluZyB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmZpZ3VyZSB7XFxuICBtYXJnaW46IDJyZW0gMDtcXG59XFxuZmlndXJlIGltZyB7XFxuICBtYXgtaGVpZ2h0OiA3MHZoO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5maWd1cmUgZmlnY2FwdGlvbiB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogIzQ3NDk1MjtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICAuYXJ0aWNsZS1zZWN0aW9uIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gIH1cXG4gIC5hcnRpY2xlLXNlY3Rpb24gcCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG4gIC5hcnRpY2xlLXNlY3Rpb24gaDEge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gIH1cXG4gIC5hcnRpY2xlLXNlY3Rpb24gZmlndXJlIHtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxuICB9XFxuICAuYXJ0aWNsZS1zZWN0aW9uIGZpZ3VyZSBmaWdjYXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICB9XFxuXFxuICAjc3ViaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2FydGljbGVzL2FydGljbGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBY0E7RUFDRSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFiRjtBQWVFO0VBQ0UsbUJBQUE7RUFDQSxjQWpCUTtBQUlaOztBQWlCQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBZEY7O0FBaUJBO0VBQ0UsY0FBQTtBQWRGO0FBZ0JFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBZEo7QUFpQkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQWZKOztBQW1CQTtFQUNFO0lBQ0UsYUF0Q2tCO0VBc0JwQjtFQWtCRTtJQUNFLGVBQUE7RUFoQko7RUFtQkU7SUFDRSxhQUFBO0lBQ0EsaUJBQUE7RUFqQko7RUFvQkU7SUFDRSxjQUFBO0VBbEJKO0VBb0JJO0lBQ0UsaUJBQUE7RUFsQk47O0VBdUJBO0lBQ0UsaUJBQUE7SUFDQSxxQkFBQTtFQXBCRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRncmF5OiBoc2xhKDIzMCwgNyUsIDg0JSwgMSk7XFxuJGRhcmstZ3JlZW46IGhzbGEoMTc3LCAxMDAlLCA0JSwgMSk7XFxuJGNoaW5lc2UtcmVkOiBoc2xhKDE1LCA4NyUsIDM0JSwgMSk7XFxuJGdvbGQ6IGhzbGEoNDIsIDc5JSwgNTQlLCAxKTtcXG4kYmxvb2QtcmVkOiBoc2xhKDEsIDkzJSwgMjIlLCAxKTtcXG4kdHJhbnNwYXJlbnQtZ3JheTogaHNsYSgwLCAwJSwgOTclLCAxKTtcXG4kdHJhbnNwYXJlbnQtcmVkOiBoc2xhKDE1LCA4NyUsIDM0JSwgMC43KTtcXG5cXG4kc2l0ZS1wYWRkaW5nLWxlZnQ6IDJyZW07XFxuJG1vYmlsZS1wYWRkaW5nLWxlZnQ6IDFyZW07XFxuXFxuJHRhYmxldC1zY3JlZW46IDc2OHB4O1xcbiRtb2JpbGUtc2NyZWVuOiA1NzZweDtcXG5cXG4uYXJ0aWNsZS1zZWN0aW9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG4gIHBhZGRpbmc6IDJyZW0gNXJlbSA1cmVtIDVyZW07XFxuICBtYXgtd2lkdGg6IDYwcmVtO1xcblxcbiAgaDEge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICBjb2xvcjogJGJsb29kLXJlZDtcXG4gIH1cXG59XFxuXFxuI3N1YmhlYWRpbmcge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5maWd1cmUge1xcbiAgbWFyZ2luOiAycmVtIDA7XFxuXFxuICBpbWcge1xcbiAgICBtYXgtaGVpZ2h0OiA3MHZoO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICBmaWdjYXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogaHNsYSgyMzAsIDclLCAzMCUsIDEpO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS1zY3JlZW4pIHtcXG4gIC5hcnRpY2xlLXNlY3Rpb24ge1xcbiAgICBwYWRkaW5nOiAkbW9iaWxlLXBhZGRpbmctbGVmdDtcXG5cXG4gICAgcCB7XFxuICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgIGgxIHtcXG4gICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICB9XFxuXFxuICAgIGZpZ3VyZSB7XFxuICAgICAgbWFyZ2luOiAxcmVtIDA7XFxuXFxuICAgICAgZmlnY2FwdGlvbiB7XFxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gICNzdWJoZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI2NvbnRhY3Qtc2VjdGlvbiB7XFxuICBwYWRkaW5nOiA0cmVtIDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTYyLCA0OSwgMTEsIDAuNyk7XFxufVxcbiNjb250YWN0LXNlY3Rpb24gPiBkaXYge1xcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcXG4gIHBhZGRpbmc6IDNyZW0gN3JlbTtcXG4gIHdpZHRoOiA0MHJlbTtcXG59XFxuI2NvbnRhY3Qtc2VjdGlvbiBoMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNjb250YWN0LXNlY3Rpb24gZm9ybSAqIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbn1cXG4jY29udGFjdC1zZWN0aW9uIGZvcm0ge1xcbiAgbWFyZ2luLXRvcDogNXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBnYXA6IDEuNXJlbSAycmVtO1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcXG59XFxuI2NvbnRhY3Qtc2VjdGlvbiBmb3JtIC5mdWxsUm93IHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiBzcGFuIDI7XFxufVxcbiNjb250YWN0LXNlY3Rpb24gZm9ybSBpbnB1dCxcXG4jY29udGFjdC1zZWN0aW9uIGZvcm0gdGV4dGFyZWEge1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG59XFxuI2NvbnRhY3Qtc2VjdGlvbiBmb3JtIGlucHV0IHtcXG4gIHBhZGRpbmctdG9wOiAwLjZyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC42cmVtO1xcbn1cXG4jY29udGFjdC1zZWN0aW9uIGZvcm0gdGV4dGFyZWEge1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG59XFxuI2NvbnRhY3Qtc2VjdGlvbiBmb3JtIGxhYmVsLFxcbiNjb250YWN0LXNlY3Rpb24gZm9ybSBzZWxlY3Qge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbiNjb250YWN0LXNlY3Rpb24gZm9ybSBsYWJlbCB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcbiNjb250YWN0LXNlY3Rpb24gZm9ybSBzZWxlY3Qge1xcbiAgcGFkZGluZzogMC41cmVtIDAuNXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6ICM0ZjRmNGY7XFxufVxcbiNjb250YWN0LXNlY3Rpb24gZm9ybSBidXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTYyLCA0OSwgMTEsIDAuNyk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItY29sb3I6ICMwMDE0MTM7XFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICB3aWR0aDogMTVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNjb250YWN0LXNlY3Rpb24gZm9ybSBidXR0b246aG92ZXIge1xcbiAgY29sb3I6ICNlNmFmMmQ7XFxuICBiYWNrZ3JvdW5kOiAjMDAxNDEzO1xcbiAgYm9yZGVyLWNvbG9yOiAjZTZhZjJkO1xcbn1cXG4jY29udGFjdC1zZWN0aW9uICNzdWJtaXR0ZWQge1xcbiAgbWFyZ2luOiAxMHJlbSAwO1xcbiAgYmFja2dyb3VuZDogIzAwMTQxMztcXG4gIGNvbG9yOiAjZTZhZjJkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMS41cmVtIDIuNXJlbTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAwLjZyZW07XFxuICBkaXNwbGF5OiBub25lO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcXG59XFxuI2NvbnRhY3Qtc2VjdGlvbiAuaGlkZSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4jY29udGFjdC1zZWN0aW9uIC5zaG93IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICNjb250YWN0LXNlY3Rpb24gKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB9XFxuXFxuICAjY29udGFjdC1zZWN0aW9uIHtcXG4gICAgcGFkZGluZzogMnJlbSAwO1xcbiAgfVxcbiAgI2NvbnRhY3Qtc2VjdGlvbiBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgfVxcbiAgI2NvbnRhY3Qtc2VjdGlvbiA+IGRpdiB7XFxuICAgIHBhZGRpbmc6IDAgMS41cmVtO1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG4gICNjb250YWN0LXNlY3Rpb24gZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICB9XFxuICAjY29udGFjdC1zZWN0aW9uIGZvcm0gYnV0dG9uIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIH1cXG5cXG4gICNzdWJtaXR0ZWQge1xcbiAgICBtYXJnaW46IDM1dmggMXZ3ICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmc6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICAjY29udGFjdC1zZWN0aW9uID4gZGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAjY29udGFjdC1zZWN0aW9uID4gZGl2IGZvcm0gKiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG4gICNjb250YWN0LXNlY3Rpb24gPiBkaXYgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWNBO0VBQ0UsZUFBQTtFQUdBLFdBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQWpCZ0I7QUFDbEI7QUFrQkU7RUFDRSxtQkFyQmU7RUFzQmYsa0JBQUE7RUFDQSxZQUFBO0FBaEJKO0FBbUJFO0VBQ0Usa0JBQUE7QUFqQko7QUFvQkU7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0FBbEJKO0FBcUJFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUdBLFVBQUE7RUFDQSx3QkFBQTtBQXJCSjtBQXVCSTtFQUNFLG9CQUFBO0VBQ0EsdUJBQUE7QUFyQk47QUF3Qkk7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtBQXRCTjtBQXlCSTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7QUF2Qk47QUEwQkk7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FBeEJOO0FBMkJJOztFQUVFLGNBQUE7QUF6Qk47QUE0Qkk7RUFDRSxxQkFBQTtBQTFCTjtBQTZCSTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUEzQk47QUE4Qkk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FuRlk7RUFvRlosWUFBQTtFQUNBLHFCQTFGTztFQTJGUCxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQTVCTjtBQStCSTtFQUNFLGNBakdDO0VBa0dELG1CQXBHTztFQXFHUCxxQkFuR0M7QUFzRVA7QUFpQ0U7RUFDRSxlQUFBO0VBQ0EsbUJBM0dTO0VBNEdULGNBMUdHO0VBMkdILGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBR0EsYUFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQWpDSjtBQXFDRTtFQUNFLFVBQUE7QUFuQ0o7QUFzQ0U7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFwQ0o7O0FBd0NBO0VBQ0U7SUFDRSxzQkFBQTtFQXJDRjs7RUF3Q0E7SUFDRSxlQUFBO0VBckNGO0VBdUNFO0lBQ0UsaUJBQUE7RUFyQ0o7RUF3Q0U7SUFDRSxpQkFBQTtJQUNBLFdBQUE7RUF0Q0o7RUF5Q0U7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxnQkFBQTtFQXZDSjtFQXlDSTtJQUNFLG1CQUFBO0VBdkNOOztFQTRDQTtJQUNFLDJCQUFBO0lBQ0EsMEJBQUE7SUFDQSwwQkFBQTtFQXpDRjtBQUNGO0FBNENBO0VBQ0U7SUFDRSxXQUFBO0VBMUNGO0VBNENFO0lBQ0UsZUFBQTtFQTFDSjtFQTZDRTtJQUNFLFdBQUE7RUEzQ0o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkZ3JheTogaHNsYSgyMzAsIDclLCA4NCUsIDEpO1xcbiRkYXJrLWdyZWVuOiBoc2xhKDE3NywgMTAwJSwgNCUsIDEpO1xcbiRjaGluZXNlLXJlZDogaHNsYSgxNSwgODclLCAzNCUsIDEpO1xcbiRnb2xkOiBoc2xhKDQyLCA3OSUsIDU0JSwgMSk7XFxuJGJsb29kLXJlZDogaHNsYSgxLCA5MyUsIDIyJSwgMSk7XFxuJHRyYW5zcGFyZW50LWdyYXk6IGhzbGEoMCwgMCUsIDk3JSwgMSk7XFxuJHRyYW5zcGFyZW50LXJlZDogaHNsYSgxNSwgODclLCAzNCUsIDAuNyk7XFxuXFxuJHNpdGUtcGFkZGluZy1sZWZ0OiAycmVtO1xcbiRtb2JpbGUtcGFkZGluZy1sZWZ0OiAxcmVtO1xcblxcbiR0YWJsZXQtc2NyZWVuOiA3NjhweDtcXG4kbW9iaWxlLXNjcmVlbjogNTc2cHg7XFxuXFxuI2NvbnRhY3Qtc2VjdGlvbiB7XFxuICBwYWRkaW5nOiA0cmVtIDA7XFxuXFxuICAvL25lZWRlZCBiZWNhdXNlIDxtYWluPiBlbGVtIGhhZCBmbGV4IGRpc3BsYXlcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogJHRyYW5zcGFyZW50LXJlZDtcXG5cXG4gID4gZGl2IHtcXG4gICAgYmFja2dyb3VuZDogJHRyYW5zcGFyZW50LWdyYXk7XFxuICAgIHBhZGRpbmc6IDNyZW0gN3JlbTtcXG4gICAgd2lkdGg6IDQwcmVtO1xcbiAgfVxcblxcbiAgaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICBmb3JtICoge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbiAgfVxcblxcbiAgZm9ybSB7XFxuICAgIG1hcmdpbi10b3A6IDVyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAxLjVyZW0gMnJlbTtcXG5cXG4gICAgLy9mb3IgdGhlIGZhZGUgb3V0IGVmZmVjdFxcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XFxuXFxuICAgIC5mdWxsUm93IHtcXG4gICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgICBncmlkLWNvbHVtbi1lbmQ6IHNwYW4gMjtcXG4gICAgfVxcblxcbiAgICBpbnB1dCxcXG4gICAgdGV4dGFyZWEge1xcbiAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbiAgICB9XFxuXFxuICAgIGlucHV0IHtcXG4gICAgICBwYWRkaW5nLXRvcDogMC42cmVtO1xcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwLjZyZW07XFxuICAgIH1cXG5cXG4gICAgdGV4dGFyZWEge1xcbiAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgIGxhYmVsLFxcbiAgICBzZWxlY3Qge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuXFxuICAgIGxhYmVsIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICAgIH1cXG5cXG4gICAgc2VsZWN0IHtcXG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGNvbG9yOiBoc2xhKDE1LCAwJSwgMzElLCAxKTtcXG4gICAgfVxcblxcbiAgICBidXR0b24ge1xcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgICAgcGFkZGluZzogMXJlbSAwO1xcbiAgICAgIGJhY2tncm91bmQ6ICR0cmFuc3BhcmVudC1yZWQ7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIGJvcmRlci1jb2xvcjogJGRhcmstZ3JlZW47XFxuICAgICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgICAgd2lkdGg6IDE1cmVtO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICBidXR0b246aG92ZXIge1xcbiAgICAgIGNvbG9yOiAkZ29sZDtcXG4gICAgICBiYWNrZ3JvdW5kOiAkZGFyay1ncmVlbjtcXG4gICAgICBib3JkZXItY29sb3I6ICRnb2xkO1xcbiAgICB9XFxuICB9XFxuXFxuICAjc3VibWl0dGVkIHtcXG4gICAgbWFyZ2luOiAxMHJlbSAwO1xcbiAgICBiYWNrZ3JvdW5kOiAkZGFyay1ncmVlbjtcXG4gICAgY29sb3I6ICRnb2xkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEuNXJlbSAyLjVyZW07XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcXG5cXG4gICAgLy9mb3IgdGhlIGZhZGUgaW4gZWZmZWN0XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcXG4gIH1cXG5cXG4gIC8vZm9yIHRoZSBmYWRlIG91dC9pbiBlZmZlY3RcXG4gIC5oaWRlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIC5zaG93IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQtc2NyZWVuKSB7XFxuICAjY29udGFjdC1zZWN0aW9uICoge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgfVxcblxcbiAgI2NvbnRhY3Qtc2VjdGlvbiB7XFxuICAgIHBhZGRpbmc6IDJyZW0gMDtcXG5cXG4gICAgaDEge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICB9XFxuXFxuICAgID4gZGl2IHtcXG4gICAgICBwYWRkaW5nOiAwIDEuNXJlbTtcXG4gICAgICB3aWR0aDogYXV0bztcXG4gICAgfVxcblxcbiAgICBmb3JtIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcXG5cXG4gICAgICBidXR0b24ge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gICNzdWJtaXR0ZWQge1xcbiAgICBtYXJnaW46IDM1dmggMXZ3ICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmc6IDEuNXJlbSAhaW1wb3J0YW50O1xcbiAgICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtc2NyZWVuKSB7XFxuICAjY29udGFjdC1zZWN0aW9uID4gZGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGZvcm0gKiB7XFxuICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDEuM3JlbSAycmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHb2xkbWFuXFxcIjtcXG4gIGJhY2tncm91bmQ6ICNkM2Q0ZDk7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xcbiAgZm9vdGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFjQTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFqQks7QUFJUDs7QUFnQkE7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsZUFBQTtFQWJGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGdyYXk6IGhzbGEoMjMwLCA3JSwgODQlLCAxKTtcXG4kZGFyay1ncmVlbjogaHNsYSgxNzcsIDEwMCUsIDQlLCAxKTtcXG4kY2hpbmVzZS1yZWQ6IGhzbGEoMTUsIDg3JSwgMzQlLCAxKTtcXG4kZ29sZDogaHNsYSg0MiwgNzklLCA1NCUsIDEpO1xcbiRibG9vZC1yZWQ6IGhzbGEoMSwgOTMlLCAyMiUsIDEpO1xcbiR0cmFuc3BhcmVudC1ncmF5OiBoc2xhKDAsIDAlLCA5NyUsIDEpO1xcbiR0cmFuc3BhcmVudC1yZWQ6IGhzbGEoMTUsIDg3JSwgMzQlLCAwLjcpO1xcblxcbiRzaXRlLXBhZGRpbmctbGVmdDogMnJlbTtcXG4kbW9iaWxlLXBhZGRpbmctbGVmdDogMXJlbTtcXG5cXG4kdGFibGV0LXNjcmVlbjogNzY4cHg7XFxuJG1vYmlsZS1zY3JlZW46IDU3NnB4O1xcblxcbmZvb3RlciB7XFxuICBwYWRkaW5nOiAxLjNyZW0gJHNpdGUtcGFkZGluZy1sZWZ0O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHb2xkbWFuXFxcIjtcXG4gIGJhY2tncm91bmQ6ICRncmF5O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS1zY3JlZW4pIHtcXG4gIGZvb3RlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJuYXYge1xcbiAgYmFja2dyb3VuZDogI2QzZDRkOTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LWZhbWlseTogXFxcIkdvbGRtYW5cXFwiO1xcbiAgY29sb3I6ICMwMDE0MTM7XFxufVxcbm5hdiBkaXYge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5uYXYgdWwgPiBsaSxcXG5uYXYgI25hdi1sb2dvLXdyYXBwZXIge1xcbiAgcGFkZGluZzogMCAycmVtO1xcbn1cXG5uYXYgI25hdi1sb2dvLXdyYXBwZXIge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBwYWRkaW5nLXRvcDogMC44cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuOHJlbTtcXG59XFxubmF2IHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG59XFxubmF2IHVsIGxpIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5uYXYgdWwgbGk6aG92ZXIge1xcbiAgY29sb3I6ICNlNmFmMmQ7XFxuICBiYWNrZ3JvdW5kOiAjMDAxNDEzO1xcbn1cXG5uYXYgI2Ryb3Bkb3duLWJ1dHRvbi13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNuYXYtbG9nby1yZWQge1xcbiAgY29sb3I6ICNhMjMxMGI7XFxufVxcblxcbi5uYXYtbGktY2xpY2tlZDpob3ZlciB7XFxuICBjb2xvcjogIzAwMTQxMztcXG4gIGJhY2tncm91bmQ6ICNlNmFmMmQ7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgbmF2IHVsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIG5hdiAjbmF2LWxvZ28td3JhcHBlciB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcblxcbiAgI2Ryb3Bkb3duLWJ1dHRvbi13cmFwcGVyIHtcXG4gICAgd2lkdGg6IDNyZW07XFxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMnJlbTtcXG4gIH1cXG5cXG4gIC5uYXYtc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kOiAjNmMwNjA0O1xcbiAgfVxcbiAgLm5hdi1zZWxlY3RlZCBzdmcge1xcbiAgICBmaWxsOiAjZTZhZjJkO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcXG4gIG5hdiAjbmF2LWxvZ28td3JhcHBlciB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuICB9XFxuXFxuICAjZHJvcGRvd24tYnV0dG9uLXdyYXBwZXIge1xcbiAgICB3aWR0aDogMi41cmVtO1xcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFjQTtFQUNFLG1CQWZLO0VBZ0JMLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FsQlc7QUFLYjtBQWVFO0VBQ0UsZUFBQTtBQWJKO0FBZ0JFOztFQUVFLGVBQUE7QUFkSjtBQWlCRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQWZKO0FBa0JFO0VBQ0UscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFoQko7QUFrQkk7RUFDRSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQWhCTjtBQW1CSTtFQUNFLGNBakRDO0VBa0RELG1CQXBETztBQW1DYjtBQXFCRTtFQUNFLGFBQUE7QUFuQko7O0FBdUJBO0VBQ0UsY0E3RFk7QUF5Q2Q7O0FBdUJBO0VBQ0UsY0FsRVc7RUFtRVgsbUJBakVLO0FBNkNQOztBQXlCQTtFQUVJO0lBQ0UsYUFBQTtFQXZCSjtFQTBCRTtJQUNFLGlCQUFBO0VBeEJKOztFQTRCQTtJQUNFLFdBQUE7SUFDQSx3QkFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7RUF6QkY7O0VBNEJBO0lBQ0UsbUJBMUZRO0VBaUVWO0VBMkJFO0lBQ0UsYUE5RkM7RUFxRUw7QUFDRjtBQStCQTtFQUVJO0lBQ0UsaUJBQUE7SUFDQSxrQkFuR2dCO0lBb0doQixtQkFwR2dCO0VBc0VwQjs7RUFrQ0E7SUFDRSxhQUFBO0lBQ0EsZUFBQTtFQS9CRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRncmF5OiBoc2xhKDIzMCwgNyUsIDg0JSwgMSk7XFxuJGRhcmstZ3JlZW46IGhzbGEoMTc3LCAxMDAlLCA0JSwgMSk7XFxuJGNoaW5lc2UtcmVkOiBoc2xhKDE1LCA4NyUsIDM0JSwgMSk7XFxuJGdvbGQ6IGhzbGEoNDIsIDc5JSwgNTQlLCAxKTtcXG4kYmxvb2QtcmVkOiBoc2xhKDEsIDkzJSwgMjIlLCAxKTtcXG4kdHJhbnNwYXJlbnQtZ3JheTogaHNsYSgwLCAwJSwgOTclLCAxKTtcXG4kdHJhbnNwYXJlbnQtcmVkOiBoc2xhKDE1LCA4NyUsIDM0JSwgMC43KTtcXG5cXG4kc2l0ZS1wYWRkaW5nLWxlZnQ6IDJyZW07XFxuJG1vYmlsZS1wYWRkaW5nLWxlZnQ6IDFyZW07XFxuXFxuJHRhYmxldC1zY3JlZW46IDc2OHB4O1xcbiRtb2JpbGUtc2NyZWVuOiA1NzZweDtcXG5cXG5uYXYge1xcbiAgYmFja2dyb3VuZDogJGdyYXk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJHb2xkbWFuXFxcIjtcXG4gIGNvbG9yOiAkZGFyay1ncmVlbjtcXG5cXG4gIGRpdiB7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gIH1cXG5cXG4gIHVsID4gbGksXFxuICAjbmF2LWxvZ28td3JhcHBlciB7XFxuICAgIHBhZGRpbmc6IDAgJHNpdGUtcGFkZGluZy1sZWZ0O1xcbiAgfVxcblxcbiAgI25hdi1sb2dvLXdyYXBwZXIge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgcGFkZGluZy10b3A6IDAuOHJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuOHJlbTtcXG4gIH1cXG5cXG4gIHVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxuXFxuICAgIGxpIHtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgbGk6aG92ZXIge1xcbiAgICAgIGNvbG9yOiAkZ29sZDtcXG4gICAgICBiYWNrZ3JvdW5kOiAkZGFyay1ncmVlbjtcXG4gICAgfVxcbiAgfVxcblxcbiAgI2Ryb3Bkb3duLWJ1dHRvbi13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuI25hdi1sb2dvLXJlZCB7XFxuICBjb2xvcjogJGNoaW5lc2UtcmVkO1xcbn1cXG5cXG4ubmF2LWxpLWNsaWNrZWQ6aG92ZXIge1xcbiAgY29sb3I6ICRkYXJrLWdyZWVuO1xcbiAgYmFja2dyb3VuZDogJGdvbGQ7XFxufVxcblxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQtc2NyZWVuKSB7XFxuICBuYXYge1xcbiAgICB1bCB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAjbmF2LWxvZ28td3JhcHBlciB7XFxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gICNkcm9wZG93bi1idXR0b24td3JhcHBlciB7XFxuICAgIHdpZHRoOiAzcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwICRzaXRlLXBhZGRpbmctbGVmdDtcXG4gIH1cXG5cXG4gIC5uYXYtc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kOiAkYmxvb2QtcmVkO1xcblxcbiAgICBzdmcge1xcbiAgICAgIGZpbGw6ICRnb2xkO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtc2NyZWVuKSB7XFxuICBuYXYge1xcbiAgICAjbmF2LWxvZ28td3JhcHBlciB7XFxuICAgICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgICAgcGFkZGluZy1sZWZ0OiAkbW9iaWxlLXBhZGRpbmctbGVmdDtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAkbW9iaWxlLXBhZGRpbmctbGVmdDtcXG4gICAgfVxcbiAgfVxcblxcbiAgI2Ryb3Bkb3duLWJ1dHRvbi13cmFwcGVyIHtcXG4gICAgd2lkdGg6IDIuNXJlbTtcXG4gICAgcGFkZGluZzogMCAkbW9iaWxlLXBhZGRpbmctbGVmdDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYXNpZGUge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZDogIzAwMTQxMztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIENvbmRlbnNlZFxcXCI7XFxuICBjb2xvcjogI2U2YWYyZDtcXG59XFxuYXNpZGUgdWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDJyZW07XFxufVxcbmFzaWRlIHVsIGxpIHtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuYXNpZGUgdWwgLmhpZGRlbi1uYXYge1xcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuYXNpZGUgdWwgbGk6aG92ZXIge1xcbiAgY29sb3I6ICMwMDE0MTM7XFxuICBiYWNrZ3JvdW5kOiAjZTZhZjJkO1xcbn1cXG5cXG4uc2lkZS1kaXYtY2xpY2tlZDpob3ZlciB7XFxuICBjb2xvcjogI2U2YWYyZDtcXG4gIGJhY2tncm91bmQ6ICM2YzA2MDQ7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgYXNpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgYXNpZGUgdWwgLmhpZGRlbi1uYXYge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICBhc2lkZSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG4gIGFzaWRlIGxpIHtcXG4gICAgcGFkZGluZy10b3A6IDAuN3JlbSAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC43cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWNBO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQWhCVztFQWlCWCwrQkFBQTtFQUNBLGNBaEJLO0FBR1A7QUFlRTtFQUNFLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQWJKO0FBZUk7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFiTjtBQWdCSTtFQUNFLGtCQTNCYztFQTRCZCxhQUFBO0FBZE47QUFpQkk7RUFDRSxjQXZDTztFQXdDUCxtQkF0Q0M7QUF1QlA7O0FBb0JBO0VBQ0UsY0E1Q0s7RUE2Q0wsbUJBNUNVO0FBMkJaOztBQW9CQTtFQUNFO0lBQ0UsYUFBQTtFQWpCRjtFQW1CRTtJQUNFLGNBQUE7RUFqQko7QUFDRjtBQXFCQTtFQUNFO0lBQ0UsZUFBQTtFQW5CRjtFQXFCRTtJQUNFLDhCQUFBO0lBQ0EsaUNBQUE7RUFuQko7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkZ3JheTogaHNsYSgyMzAsIDclLCA4NCUsIDEpO1xcbiRkYXJrLWdyZWVuOiBoc2xhKDE3NywgMTAwJSwgNCUsIDEpO1xcbiRjaGluZXNlLXJlZDogaHNsYSgxNSwgODclLCAzNCUsIDEpO1xcbiRnb2xkOiBoc2xhKDQyLCA3OSUsIDU0JSwgMSk7XFxuJGJsb29kLXJlZDogaHNsYSgxLCA5MyUsIDIyJSwgMSk7XFxuJHRyYW5zcGFyZW50LWdyYXk6IGhzbGEoMCwgMCUsIDk3JSwgMSk7XFxuJHRyYW5zcGFyZW50LXJlZDogaHNsYSgxNSwgODclLCAzNCUsIDAuNyk7XFxuXFxuJHNpdGUtcGFkZGluZy1sZWZ0OiAycmVtO1xcbiRtb2JpbGUtcGFkZGluZy1sZWZ0OiAxcmVtO1xcblxcbiR0YWJsZXQtc2NyZWVuOiA3NjhweDtcXG4kbW9iaWxlLXNjcmVlbjogNTc2cHg7XFxuXFxuYXNpZGUge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZDogJGRhcmstZ3JlZW47XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90byBDb25kZW5zZWRcXFwiO1xcbiAgY29sb3I6ICRnb2xkO1xcblxcbiAgdWwge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDJyZW07XFxuXFxuICAgIGxpIHtcXG4gICAgICBwYWRkaW5nOiAxcmVtICRzaXRlLXBhZGRpbmctbGVmdDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmhpZGRlbi1uYXYge1xcbiAgICAgIHBhZGRpbmctbGVmdDogJHNpdGUtcGFkZGluZy1sZWZ0O1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgbGk6aG92ZXIge1xcbiAgICAgIGNvbG9yOiAkZGFyay1ncmVlbjtcXG4gICAgICBiYWNrZ3JvdW5kOiAkZ29sZDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uc2lkZS1kaXYtY2xpY2tlZDpob3ZlciB7XFxuICBjb2xvcjogJGdvbGQ7XFxuICBiYWNrZ3JvdW5kOiAkYmxvb2QtcmVkO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogJHRhYmxldC1zY3JlZW4pIHtcXG4gIGFzaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG5cXG4gICAgdWwgLmhpZGRlbi1uYXYge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlLXNjcmVlbikge1xcbiAgYXNpZGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuXFxuICAgIGxpIHtcXG4gICAgICBwYWRkaW5nLXRvcDogMC43cmVtICFpbXBvcnRhbnQ7XFxuICAgICAgcGFkZGluZy1ib3R0b206IDAuN3JlbSAhaW1wb3J0YW50O1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZmYW1pbHk9R29sZG1hbiZmYW1pbHk9Um9ib3RvK0NvbmRlbnNlZCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICBtYWluIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQWdCQTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQWRpQjtFQWVqQixxQkFBQTtBQWRGOztBQWlCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQWRGOztBQWlCQTtFQUNFO0lBQ0UsY0FBQTtFQWRGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGdyYXk6IGhzbGEoMjMwLCA3JSwgODQlLCAxKTtcXG4kZGFyay1ncmVlbjogaHNsYSgxNzcsIDEwMCUsIDQlLCAxKTtcXG4kY2hpbmVzZS1yZWQ6IGhzbGEoMTUsIDg3JSwgMzQlLCAxKTtcXG4kZ29sZDogaHNsYSg0MiwgNzklLCA1NCUsIDEpO1xcbiRibG9vZC1yZWQ6IGhzbGEoMSwgOTMlLCAyMiUsIDEpO1xcbiR0cmFuc3BhcmVudC1ncmF5OiBoc2xhKDAsIDAlLCA5NyUsIDEpO1xcbiR0cmFuc3BhcmVudC1yZWQ6IGhzbGEoMTUsIDg3JSwgMzQlLCAwLjcpO1xcblxcbiRzaXRlLXBhZGRpbmctbGVmdDogMnJlbTtcXG4kbW9iaWxlLXBhZGRpbmctbGVmdDogMXJlbTtcXG5cXG4kdGFibGV0LXNjcmVlbjogNzY4cHg7XFxuJG1vYmlsZS1zY3JlZW46IDU3NnB4O1xcblxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZmYW1pbHk9R29sZG1hbiZmYW1pbHk9Um9ib3RvK0NvbmRlbnNlZCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgYmFja2dyb3VuZDogJHRyYW5zcGFyZW50LWdyYXk7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0LXNjcmVlbikge1xcbiAgbWFpbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjZmExYzY0ZTNkZTU3MjY4OTFjNzM1NWJlOTg3MzQ2OS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNTVmZTg2Y2YwMDEyMjljODQzMTczZDM0ZjA4MWIyYzguanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNmMDBlNjJlMjM5ZTZlYTc4Njk1MWY0NDJlNjkyNjYxLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3Y2IyYzM2M2IzYzMzM2I5NTFhMTdmM2VhNjUwZTg1Yi5qcGVnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjE3MDYzZTU4MDNhOWE2ODBiOTY1ODEzY2MwNDMzMjM2LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiN2I5MmFlMzBmMDkzMWY3MDEzNzQ5YTliNTg1MWFkMS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2VjNTYyNGQxOGM5M2NlNjZlOWUwZmUzOWVlNmVjYzkuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjAwNzUyNTczNDA3ODllOTc2MWQzNWEyMWIxMzExOTgwLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4ZmM1Y2U5YzJkYzZlMzQwODIzNzUxZGJiMmI5YTczMi5qcGdcIjsiLCIvLyBJbXBvcnRzXG52YXIgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCIuL2ltZy9jaGluYS5qcGdcIik7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18gPSByZXF1aXJlKFwiLi9pbWcvaW5kaWEuanBnXCIpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19fID0gcmVxdWlyZShcIi4vaW1nL3NpbmdhcG9yZS5qcGdcIik7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzNfX18gPSByZXF1aXJlKFwiLi9pbWcvbWFsYXlzaWEuanBlZ1wiKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNF9fXyA9IHJlcXVpcmUoXCIuL2ltZy9waGlsaXBwaW5lcy5qcGdcIik7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzVfX18gPSByZXF1aXJlKFwiLi9pbWcvaW5kb25lc2lhLmpwZ1wiKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNl9fXyA9IHJlcXVpcmUoXCIuL2ltZy92aWV0bmFtLmpwZ1wiKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfN19fXyA9IHJlcXVpcmUoXCIuL2ltZy92aWV0bmFtLTIuanBnXCIpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF84X19fID0gcmVxdWlyZShcIi4vaW1nL3RoYWlsYW5kLmpwZ1wiKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzNfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8zX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF80X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzVfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzZfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF82X19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF83X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfN19fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfOF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzhfX18pO1xudmFyIGNvZGUgPSBcIjxzZWN0aW9uIGNsYXNzPVxcXCJhcnRpY2xlLXNlY3Rpb25cXFwiIGlkPVxcXCJjaGluYVxcXCI+XFxuICA8aDE+QmFpZHUgdG8gYWNxdWlyZSBKb3l54oCZcyBsaXZlc3RyZWFtaW5nIHNlcnZpY2UgaW4gJDMuNmIgZGVhbDwvaDE+XFxuICA8ZGl2IGlkPVxcXCJzdWJoZWFkaW5nXFxcIj5cXG4gICAgPHNwYW4+RG9yaXMgWXUgfCA8L3NwYW4+XFxuICAgIDxzcGFuPjE4IE5vdiAyMDIwPC9zcGFuPlxcbiAgPC9kaXY+XFxuICA8cD5cXG4gICAgQ2hpbmVzZSBzZWFyY2ggZW5naW5lIEJhaWR1IGFubm91bmNlZCB0aGF0IGl0IGhhcyBlbnRlcmVkIGludG8gYW4gYWdyZWVtZW50XFxuICAgIHRvIGFjcXVpcmUgSm95eeKAmXMgZG9tZXN0aWMgbGl2ZXN0cmVhbWluZyBidXNpbmVzcyBZWSBMaXZlIGluIGEgVVMkMy42XFxuICAgIGJpbGxpb24gZGVhbC5cXG4gIDwvcD5cXG4gIDxmaWd1cmU+XFxuICAgIDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgYWx0PVxcXCJCYWlkdSBvZmZpY2VcXFwiIC8+XFxuICAgIDxmaWdjYXB0aW9uPlxcbiAgICAgIEJhaWR14oCZcyBTaWxpY29uIFZhbGxleSBBSSBMYWIsIHdoZXJlIFBhZGRsZVBhZGRsZSB3YXMgYm9ybiAvIFBob3RvIGNyZWRpdDpcXG4gICAgICBCYWlkdS5cXG4gICAgPC9maWdjYXB0aW9uPlxcbiAgPC9maWd1cmU+XFxuICA8cD5cXG4gICAgVGhlIGNsb3Npbmcgb2YgdGhlIHRyYW5zYWN0aW9uIGlzIHN1YmplY3QgdG8gY29uZGl0aW9ucyBhbmQgaXMgZXhwZWN0ZWQgdG9cXG4gICAgdGFrZSBwbGFjZSBpbiB0aGUgZmlyc3QgaGFsZiBvZiAyMDIxLlxcbiAgPC9wPlxcbiAgPHA+XFxuICAgIEJhaWR14oCZcyBhY3F1aXNpdGlvbiBvZiB0aGUgdmlkZW8tYmFzZWQgZW50ZXJ0YWlubWVudCBsaXZlc3RyZWFtaW5nIHVuaXQgd2lsbFxcbiAgICBpbmNsdWRlIHRoZSBZWSBtb2JpbGUgYXBwLCB0aGUgWVkuY29tIHdlYnNpdGUsIGFuZCBQQyBZWSwgYW1vbmcgb3RoZXJzLlxcbiAgPC9wPlxcbiAgPHA+XFxuICAgIFdpdGggdGhlIGFjcXVpc2l0aW9uLCBZWSBMaXZlIHdpbGwgaGF2ZSBhY2Nlc3MgdG8gQmFpZHXigJlzIHRyYWZmaWMgYW5kIG1vYmlsZVxcbiAgICBlY29zeXN0ZW1zIHdoaWxlIHRoZSBsYXR0ZXIgd2lsbCByZWNlaXZlIG9wZXJhdGlvbmFsIGV4cGVyaWVuY2UsIGtub3ctaG93LFxcbiAgICBhbmQgYSBjcmVhdG9yIG5ldHdvcmsgZm9yIHZpZGVvLWJhc2VkIHNvY2lhbCBtZWRpYSBkZXZlbG9wbWVudCwgc2FpZCBSb2JpblxcbiAgICBMaSwgY28tZm91bmRlciBhbmQgQ0VPIGF0IEJhaWR1LlxcbiAgPC9wPlxcbiAgPHA+XFxuICAgIEluIHRoZSBwYXN0IHllYXIsIEJhaWR1IGVuYWJsZWQgdGhlIGdyb3d0aCBvZiBpdHMgbm9uLWFkdmVydGlzaW5nIHJldmVudWVzXFxuICAgIGJ5IGluY3JlYXNpbmcgbG9nLWluIHVzZXJzIGFuZCBhZGRpbmcgc29jaWFsIGVuZ2FnZW1lbnQgdG8gdGhlaXIgcGxhdGZvcm0uXFxuICAgIEl0IGFsc28gZXhwYW5kZWQgaXRzIG5vbi1hZHZlcnRpc2luZyBvZmZlcmluZ3MsIHdoaWNoIGluY2x1ZGUgbWVtYmVyc2hpcCxcXG4gICAgbGl2ZXN0cmVhbWluZywgYW5kIG9ubGluZSBnYW1lcywgTGkgbm90ZWQuXFxuICA8L3A+XFxuICA8cD5cXG4gICAgVGhlIENoaW5lc2UgdGVjaCBnaWFudCBhbHNvIGFubm91bmNlZCBpdCBoYXMgZ2VuZXJhdGVkIFVTJDQuMTYgYmlsbGlvbiBpblxcbiAgICByZXZlbnVlIGZvciBRMyAyMDIwLCB3aXRoIGl0cyBvbmxpbmUgbWFya2V0IHJldmVudWUgZnJvbSBCYWlkdSBDb3JlIHRha2luZ1xcbiAgICB1cCBVUyQyLjcyIGJpbGxpb24uIEl0IGFsc28gcmFrZWQgaW4gVVMkMi4wMiBiaWxsaW9uIGluIG5ldCBpbmNvbWUgdGhhdOKAmXNcXG4gICAgYXR0cmlidXRhYmxlIHRvIEJhaWR1IGR1cmluZyB0aGUgcGVyaW9kLlxcbiAgPC9wPlxcbiAgPHA+XFxuICAgIFRoZSBkZXZlbG9wbWVudCBjb21lcyBhZnRlciBUZW5jZW50IGFjcXVpcmVkIDMwIGJpbGxpb24gY2xhc3MgQiBzaGFyZXMgb2ZcXG4gICAgSm95eeKAmXMgVHdpdGNoLWxpa2Ugc2VydmljZSBIdXlhIGluIGFuIFVTJDgxMCBtaWxsaW9uIGRlYWwgaW4gQXVndXN0IGFuZFxcbiAgICBiZWNhbWUgSHV5YeKAmXMgYmlnZ2VzdCBzaGFyZWhvbGRlci4gTGF0ZXIsIEh1eWEgYWNxdWlyZWQgaXRzIHJpdmFsIERvdXl1IGFuZFxcbiAgICB3YXMgcmVwb3J0ZWQgdG8gY3JlYXRlIGEgbmV3IGdhbWUtc3RyZWFtaW5nIGdpYW50IHZhbHVlZCBhdCBvdmVyIFVTJDExXFxuICAgIGJpbGxpb24uXFxuICA8L3A+XFxuPC9zZWN0aW9uPlxcblxcbjxzZWN0aW9uIGNsYXNzPVxcXCJhcnRpY2xlLXNlY3Rpb25cXFwiIGlkPVxcXCJpbmRpYVxcXCI+XFxuICA8aDE+RmFjZWJvb2vigJlzIFdoYXRzQXBwIHRvIHJvbGwgb3V0IGluLWFwcCBwYXltZW50cyBmZWF0dXJlIGluIEluZGlhPC9oMT5cXG4gIDxkaXYgaWQ9XFxcInN1YmhlYWRpbmdcXFwiPlxcbiAgICA8c3Bhbj5NaWd1ZWwgQ29yZG9uIHwgPC9zcGFuPlxcbiAgICA8c3Bhbj42IE5vdiAyMDIwPC9zcGFuPlxcbiAgPC9kaXY+XFxuICA8cD5cXG4gICAgQWZ0ZXIgd2lubmluZyBhcHByb3ZhbCBmcm9tIEluZGlh4oCZcyBOYXRpb25hbCBQYXltZW50cyBDb3Jwb3JhdGlvbiAoTlBDSSksXFxuICAgIEZhY2Vib29r4oCYcyBXaGF0c0FwcCB3aWxsIHN0YXJ0IHJvbGxpbmcgb3V0IGl0cyBwYXltZW50cyBmZWF0dXJlIGFjcm9zcyB0aGVcXG4gICAgY291bnRyeS5cXG4gIDwvcD5cXG4gIDxmaWd1cmU+XFxuICAgIDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gKyBcIlxcXCIgYWx0PVxcXCJXaGF0c0FwcFxcXCIgLz5cXG4gICAgPGZpZ2NhcHRpb24+UGhvdG8gY3JlZGl0OiBWZW50dXJlYmVhdDwvZmlnY2FwdGlvbj5cXG4gIDwvZmlndXJlPlxcbiAgPHA+XFxuICAgIFdoYXRzQXBw4oCZcyBuZXcgZmVhdHVyZSBhbGxvd3MgaXRzIHVzZXJzIHRvIHNlbmQgbW9uZXkgdG8gb3RoZXIgdXNlcnMgb3JcXG4gICAgc2hhcmUgdGhlIGNvc3Qgb2YgZ29vZHMgdGhyb3VnaCB0aGUgYXBwIGl0c2VsZi4gSXQgd2FzIGRlc2lnbmVkIHVzaW5nIHRoZVxcbiAgICBVbmlmaWVkIFBheW1lbnQgSW50ZXJmYWNlIChVUEkpLCBhbiBJbmRpYS1maXJzdCByZWFsLXRpbWUgcGF5bWVudCBzeXN0ZW1cXG4gICAgdGhhdCBpcyBzdXBwb3J0ZWQgYnkgb3ZlciAxNjAgYmFua3MuXFxuICA8L3A+XFxuICA8cD5cXG4gICAgVG8gdXNlIHRoZSBuZXcgcGF5bWVudHMgZmVhdHVyZSwgV2hhdHNBcHAgdXNlcnMgbXVzdCBmaXJzdCBoYXZlIGEgYmFua1xcbiAgICBhY2NvdW50IGFuZCBkZWJpdCBjYXJkIGluIEluZGlhLiBUaGUgYXBwIHRoZW4gc2VuZHMgaW5zdHJ1Y3Rpb25zIHRvIGJhbmtzIHRvXFxuICAgIGluaXRpYXRlIHRyYW5zZmVycyBiZXR3ZWVuIHNlbmRlciBhbmQgcmVjZWl2ZXIgYmFuayBhY2NvdW50cy5cXG4gIDwvcD5cXG4gIDxwPlxcbiAgICBJdCB3YXMgYWxzbyBkZXZlbG9wZWQgd2l0aCBhIHNldCBvZiBzZWN1cml0eSBhbmQgcHJpdmFjeSBwcmluY2lwbGVzLFxcbiAgICBpbmNsdWRpbmcgZW50ZXJpbmcgYSBwZXJzb25hbCBVUEkgcGluIGZvciBlYWNoIHBheW1lbnQsIHRoZSBjb21wYW55IG5vdGVkLlxcbiAgPC9wPlxcbiAgPHA+XFxuICAgIOKAnFdl4oCZcmUgZGVsaWdodGVkIHRvIGJlIHdvcmtpbmcgd2l0aCBmaXZlIGxlYWRpbmcgYmFua3MgaW4gSW5kaWE6IElDSUNJIEJhbmssXFxuICAgIEhERkMgQmFuaywgQXhpcyBCYW5rLCB0aGUgU3RhdGUgQmFuayBvZiBJbmRpYSwgYW5kIEppbyBQYXltZW50cyBCYW5rLiBQZW9wbGVcXG4gICAgY2FuIHNlbmQgbW9uZXkgb24gV2hhdHNBcHAgdG8gYW55b25lIHVzaW5nIGEgVVBJLXN1cHBvcnRlZCBhcHAs4oCdIEZhY2Vib29rXFxuICAgIHNhaWQgaW4gYSBzdGF0ZW1lbnQuXFxuICA8L3A+XFxuICA8cD5cXG4gICAgVGhlIHBheW1lbnRzIGZ1bmN0aW9uIGlzIG5vdyBhdmFpbGFibGUgb24gdGhlIGxhdGVzdCB2ZXJzaW9ucyBvZiBXaGF0c0FwcOKAmXNcXG4gICAgaVBob25lIGFuZCBBbmRyb2lkIGFwcC5cXG4gIDwvcD5cXG4gIDxwPlxcbiAgICBBY2NvcmRpbmcgdG8gYSBwcmVzcyByZWxlYXNlIGZyb20gTlBDSSwgdGhlIG1lc3NlbmdlciBzZXJ2aWNlIHdhcyBnaXZlbiB0aGVcXG4gICAgYXBwcm92YWwgdG8gZ28gbGl2ZSBvbiBVUEkgaW4gdGhlIG11bHRpLWJhbmsgbW9kZWwuIOKAnFdoYXRzQXBwIGNhbiBleHBhbmQgaXRzXFxuICAgIFVQSSB1c2VyIGJhc2UgaW4gYSBncmFkZWQgbWFubmVyIHN0YXJ0aW5nIHdpdGggYSBtYXhpbXVtIHJlZ2lzdGVyZWQgdXNlclxcbiAgICBiYXNlIG9mIDIwIG1pbGxpb24gaW4gVVBJLOKAnSB0aGUgc3RhdGVtZW50IHJlYWQuXFxuICA8L3A+XFxuICA8cD5cXG4gICAgVGhlIGRldmVsb3BtZW50IGNvbWVzIGFmdGVyIEZhY2Vib29r4oCZcyBVUyQ1LjcgYmlsbGlvbiBiZXQgaW4gSW5kaWFuXFxuICAgIGNvbmdsb21lcmF0ZSBSZWxpYW5jZSBJbmR1c3RyaWVzIGFuZCBpdHMgZGlnaXRhbCBwbGF0Zm9ybSBKaW8uIFByaW9yIHRvIHRoZVxcbiAgICBmdW5kaW5n4oCZcyBhbm5vdW5jZW1lbnQsIGl0IHdhcyByZXBvcnRlZCB0aGF0IHRoZSB0d28gY29tcGFuaWVzIHdlcmUgaW4gdGFsa3NcXG4gICAgdG8gYnVpbGQgYSBzdXBlciBhcHAgbXVjaCBsaWtlIENoaW5h4oCZcyBXZUNoYXQuXFxuICA8L3A+XFxuPC9zZWN0aW9uPlxcblxcbjxzZWN0aW9uIGNsYXNzPVxcXCJhcnRpY2xlLXNlY3Rpb25cXFwiIGlkPVxcXCJzaW5nYXBvcmVcXFwiPlxcbiAgPGgxPlxcbiAgICBTaW5nYXBvcmUgc2FsZXMgcHJvZHVjdGl2aXR5IHN0YXJ0dXAgTmVrdGFyIGJhZ3Mgb3ZlciAkMi4xbSBpbiBzZWVkIHJvdW5kXFxuICA8L2gxPlxcbiAgPGRpdiBpZD1cXFwic3ViaGVhZGluZ1xcXCI+XFxuICAgIDxzcGFuPkRvcmlzIFl1IHwgPC9zcGFuPlxcbiAgICA8c3Bhbj45IE5vdiAyMDIwIDwvc3Bhbj5cXG4gIDwvZGl2PlxcbiAgPHA+XFxuICAgIE5la3Rhci5haSwgYSBidXNpbmVzcy10by1idXNpbmVzcyBzYWxlcyBwcm9kdWN0aXZpdHkgc3RhcnR1cCBiYXNlZCBpblxcbiAgICBTaW5nYXBvcmUsIGFubm91bmNlZCB0aGF0IGl0IGhhcyByYWlzZWQgb3ZlciBVUyQyLjEgbWlsbGlvbiBpbiBhIHNlZWQgcm91bmRcXG4gICAgbGVkIGJ5IE5leHVzIFZlbnR1cmUgUGFydG5lcnMuXFxuICA8L3A+XFxuICA8ZmlndXJlPlxcbiAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fICsgXCJcXFwiIGFsdD1cXFwiU2luZ2Fwb3IgRm91bmRlcnNcXFwiIC8+XFxuICAgIDxmaWdjYXB0aW9uPlxcbiAgICAgIChGcm9tIGxlZnQpIE5la3RhciBmb3VuZGVycyBBYmhpamVldCBWaWpheXZlcmdpeWEgYW5kIEFyYXZpbmQgUmF2aSBTdWxla2hhXFxuICAgICAgLyBQaG90byBjcmVkaXQ6IE5la3RhclxcbiAgICA8L2ZpZ2NhcHRpb24+XFxuICA8L2ZpZ3VyZT5cXG4gIDxwPlxcbiAgICBJbnNpZ25pYSBWZW50dXJlIFBhcnRuZXJzLCBBcmthIFZlbnR1cmUgTGFicywgQmV0dGVyIENhcGl0YWwsIGFuZCB0aGVcXG4gICAgVmlldG5hbSBJbnZlc3RtZW50cyBHcm91cCBhbHNvIHBhcnRpY2lwYXRlZCBpbiB0aGUgcm91bmQsIGFsb25nIHdpdGggYSBob3N0XFxuICAgIG9mIGluZGl2aWR1YWwgaW52ZXN0b3JzLiBUaGVzZSBpbmNsdWRlIEZpdmU5IGV4ZWN1dGl2ZSB2aWNlIHByZXNpZGVudCBvZlxcbiAgICBwcm9kdWN0IG1hbmFnZW1lbnQgQW5hbmQgQ2hhbmRyYXNla2FyYW4sIENFTyBvZiBBaXJ0ZWzigJlzIGVudGVycHJpc2UgYnVzaW5lc3NcXG4gICAgR2FuZXNoIExha3NobWluYXJheWFuYW4sIGFuZCBDaXNjbyBjaGllZiBncm93dGggb2ZmaWNlciBWaW5vZCBNdXRodWtyaXNobmFuLFxcbiAgICBhbW9uZyBvdGhlcnMuXFxuICA8L3A+XFxuICA8cD5cXG4gICAgTmVrdGFyIHdhcyBmb3VuZGVkIGVhcmx5IHRoaXMgeWVhciBieSBBYmhpamVldCBWaWpheXZlcmdpeWEgYW5kIEFyYXZpbmQgUmF2aVxcbiAgICBTdWxla2hhLiBQcmV2aW91c2x5LCBWaWpheXZlcmdpeWEgd29ya2VkIGFzIHRoZSBwcmVzaWRlbnQgYW5kIG1hbmFnaW5nXFxuICAgIGRpcmVjdG9yIG9mIEFzaWEgUGFjaWZpYyBhdCBjbG91ZCBzb2Z0d2FyZSBmaXJtIENhcGlsbGFyeSBUZWNobm9sb2dpZXMsXFxuICAgIHdoaWxlIFN1bGVraGEgd2FzIHRoZSB0ZWNoIGxlYWRlciBhdCBaZW5kZXNrLlxcbiAgPC9wPlxcbiAgPHA+XFxuICAgIOKAnEluIHRoZSBsYXN0IGRlY2FkZSwgdGhlIGludmVzdG1lbnQgaW4gc2FsZXMgdG9vbHMgZ2xvYmFsbHkgaGFzIGdyb3duIGJ5XFxuICAgIGZpdmUgdGltZXMsIGJ1dCB0aGUgYXZlcmFnZSBzYWxlcyBxdW90YSBhdHRhaW5tZW50IGhhcyBmYWxsZW4gNDAlLiBBY2NvcmRpbmdcXG4gICAgdG8gRm9yYmVzLCA1NyUgb2Ygc2FsZXMgcmVwcyBtaXNzZWQgdGhlaXIgbnVtYmVycyBpbiAyMDE4LOKAnSBzYWlkIENFT1xcbiAgICBWaWpheXZlcmdpeWEuIEhpcyBjb21wYW55LCBoZSBzYWlkLCBhaW1zIHRvIGJ1aWxkIGFuIEFJLWRyaXZlbiBzYWxlc1xcbiAgICBwcm9kdWN0aXZpdHkgc29sdXRpb24gdGhhdCB3aWxsIGhlbHAgcmV2ZW51ZSB0ZWFtcyB0byBjb2xsYWJvcmF0ZSBhbmQgc2FsZXNcXG4gICAgcmVwcyB0byBtZWV0IHRoZWlyIHF1b3RhLlxcbiAgPC9wPlxcbiAgPHA+XFxuICAgIE5la3RhciBjb25uZWN0cyB1bnN0cnVjdHVyZWQgZGF0YSBmcm9tIHNvdXJjZXMgbGlrZSBlbWFpbHMsIGNhbGVuZGFycyxcXG4gICAgTGlua2VkSW4sIGFuZCBab29tIHRvIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IGFuZCB0aGVuIG92ZXJsYXlzXFxuICAgIHRoZXNlIHBvaW50cyB3aXRoIHRoZSBvcmdhbml6YXRpb27igJlzIHByYWN0aWNlcyBhbmQgc2FsZXMgcGxheWJvb2tzLlxcbiAgPC9wPlxcbiAgPHA+XFxuICAgIFRoZSBjb21wYW55IGhhZCBiZWVuIGluaXRpYWxseSB3b3JraW5nIGluIHN0ZWFsdGggbW9kZSB3aXRoIGEgc2VsZWN0IGxpc3Qgb2ZcXG4gICAgZWFybHkgYWRvcHRlcnMuIEl0IG5vdyBwbGFucyB0byB1c2UgdGhlIG5ldyBmdW5kcyB0byBmdXJ0aGVyIGJ1aWxkIG91dCBpdHNcXG4gICAgcGxhdGZvcm0sIHJhbXAgdXAgaXRzIGVuZ2luZWVyaW5nIGFuZCBwcm9kdWN0IHRlYW1zLCBhbmQgb3BlbiB1cCBpdHMgZWFybHlcXG4gICAgYWNjZXNzIHByb2dyYW0gZm9yIGdlbmVyYWwgYXZhaWxhYmlsaXR5IGJ5IG5leHQgeWVhci5cXG4gIDwvcD5cXG48L3NlY3Rpb24+XFxuXFxuPHNlY3Rpb24gY2xhc3M9XFxcImFydGljbGUtc2VjdGlvblxcXCIgaWQ9XFxcIm1hbGF5c2lhXFxcIj5cXG4gIDxoMT5cXG4gICAgQ2FwQmF5IGFuZCBLZW5hbmdhIHRvIGZvcm0gTWFsYXlzaWHigJlzIGZpcnN0IElzbGFtaWMgc3VwcGx5IGNoYWluIGZpbmFuY2VcXG4gICAgZmludGVjaFxcbiAgPC9oMT5cXG4gIDxkaXYgaWQ9XFxcInN1YmhlYWRpbmdcXFwiPlxcbiAgICA8c3Bhbj5Kb24gQm9pIHwgPC9zcGFuPlxcbiAgICA8c3Bhbj4zIERlYyAyMDIwPC9zcGFuPlxcbiAgPC9kaXY+XFxuICA8cD5cXG4gICAgV2l0aCBpdHMgYWNxdWlzaXRpb24gb2YgYSA0OSUgc3Rha2UgaW4gS2VuYW5nYSBDYXBpdGFsIElzbGFtaWMgU2RuIEJoZFxcbiAgICAoS0NJKSwgTWFsYXlzaWFuIGZpbnRlY2ggc3RhcnR1cCBDYXBCYXkgaXMgZm9ybWluZyBhIGpvaW50IHZlbnR1cmUgd2l0aFxcbiAgICBLQ0nigJlzIHBhcmVudCBjb21wYW55IEtlbmFuZ2EgSW52ZXN0bWVudCBCYW5rIEJlcmhhZCAoS0lCQikgdG8gY3JlYXRlXFxuICAgIE1hbGF5c2lh4oCZcyBmaXJzdCBJc2xhbWljIHN1cHBseSBjaGFpbiBmaW5hbmNlIGZpbnRlY2gsIGFjY29yZGluZyB0byBhXFxuICAgIHN0YXRlbWVudC5cXG4gIDwvcD5cXG4gIDxwPlxcbiAgICBUaGUgam9pbnQgdmVudHVyZSBhaW1zIHRvIOKAnGNvbnRpbnVlIHRoZSBlZmZvcnQgb2YgZ3Jvd2luZyBTaGFyaWFoLWNvbXBsaWFudFxcbiAgICBbYnVzaW5lc3Nlc10gYW5kIGRldmVsb3BpbmcgdGhlIElzbGFtaWMgZmluYW5jZSBtYXJrZXQu4oCdXFxuICA8L3A+XFxuICA8cD5cXG4gICAgRm9sbG93aW5nIHRoZSBhY3F1aXNpdGlvbiwgQ2FwQmF5IGNvLWZvdW5kZXIgWGluZyBYaWFuIEFuZyB3aWxsIHNlcnZlIGFzXFxuICAgIEtDSeKAmXMgQ0VPLiBIZSB3aWxsIHJlcG9ydCB0byBEYXR1ayBDaGF5IFdhaSBMZW9uZywgdGhlIGdyb3VwIG1hbmFnaW5nXFxuICAgIGRpcmVjdG9yIGF0IEtJQkIuIE1lYW53aGlsZSwgRGF0b+KAmSBTcmkgTW9oZCBNb2todGFyIE1vaGQgU2hhcmlmZiBoYXMgYmVlblxcbiAgICBhcHBvaW50ZWQgYXMgY2hhaXJtYW4gb2YgQ2FwQmF5LlxcbiAgPC9wPlxcbiAgPGZpZ3VyZT5cXG4gICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfM19fXyArIFwiXFxcIiBhbHQ9XFxcIk1hbGF5c2lhIEZvdW5kZXJcXFwiIC8+XFxuICAgIDxmaWdjYXB0aW9uPlxcbiAgICAgIENhcEJheSBjby1mb3VuZGVyIFhpbmcgWGlhbiBBbmcgLyBQaG90byBjcmVkaXQ6IENhcEJheVxcbiAgICA8L2ZpZ2NhcHRpb24+XFxuICA8L2ZpZ3VyZT5cXG4gIDxwPlxcbiAgICBUaGUgbmV3IGZpbnRlY2ggZmlybeKAmXMgYWltIGlzIHRvIGhlbHAgc21hbGwgYW5kIG1lZGl1bS1zaXplZCBlbnRlcnByaXNlc1xcbiAgICAoU01FcyksIGNvbnRyYWN0b3JzLCBhbmQgdmVuZG9ycyBvYnRhaW4gZmluYW5jaW5nIGluIG9yZGVyIHRvIHN1cHBseSBnb29kc1xcbiAgICBhbmQvb3Igc2VydmljZXMgdG8gbGFyZ2UgY29ycG9yYXRpb25zLCB0aGUgZ292ZXJubWVudCwgYW5kIGdvdmVybm1lbnQtbGlua2VkXFxuICAgIGNvbXBhbmllcyAoR0xDcykuIEluIHRoaXMgd2F5LCBTTUVzIGNhbiBsZXZlcmFnZSB0aGUgbGFyZ2VyIGNvcnBvcmF0aW9uc+KAmVxcbiAgICBjcmVkaXQtd29ydGhpbmVzcyB3aGlsZSB0aGUgbGF0dGVyIGFyZSBhYmxlIHRvIHN1cHBvcnQgdGhlaXIgdmVuZG9ycyBpblxcbiAgICB0dXJuLlxcbiAgPC9wPlxcbiAgPHA+XFxuICAgIEZvdW5kZWQgaW4gMjAxNiwgQ2FwQmF5IGlzIGEgbXVsdGktYmFuayBzdXBwbHkgY2hhaW4gZmluYW5jZSBhbmRcXG4gICAgcGVlci10by1wZWVyIGZpbmFuY2luZyAoUDJQKSBwbGF0Zm9ybS4gVXNpbmcgaXRzIHBheW1lbnQgcmlzayBzY29yaW5nIG1vZGVsLFxcbiAgICBpdCBwcmVkaWN0cyB0aGUgcmlzayBvZiBlYWNoIHRyYW5zYWN0aW9uIGJ5IGNvbmR1Y3RpbmcgYW4gYW5hbHlzaXMgb2ZcXG4gICAgZmluYW5jaWFsIHN0YXRlbWVudHMuIEl0IGFsc28gdXNlcyBtYWNoaW5lIGxlYXJuaW5nIHRvIGFzc2VzcyBkYXRhIHBvaW50c1xcbiAgICBzdWNoIGFzIGl0cyBjbGllbnRz4oCZIGhpc3RvcmljYWwgcmVsYXRpb25zaGlwcywgcGF5bWVudHMsIHF1YWxpdHkgb2ZcXG4gICAgY29udHJhY3RzLCBhbmQgb3RoZXIgcGF0dGVybnMuXFxuICA8L3A+XFxuICA8cD5cXG4gICAgQ2FwQmF5IGNsYWltcyB0aGF0IGl0cyBhcHByb2FjaCBoYXMgYWxsb3dlZCB0aGUgY29tcGFueSB0byDigJxrZWVwIHRoZSBkZWZhdWx0XFxuICAgIHJhdGUgbG934oCdIHdoaWxlIHByb3ZpZGluZyBmaW5hbmNpbmcgZm9yIG1vcmUgdW5iYW5rZWQgYW5kIHVuZGVyYmFua2VkXFxuICAgIGN1c3RvbWVycy5cXG4gIDwvcD5cXG4gIDxwPlxcbiAgICDigJxXZSBoYXZlIGFsd2F5cyBiZWVuIGNvbW1pdHRlZCB0byBvZmZlcmluZyBvdXIgY3VzdG9tZXJzIHRoZSBzb2x1dGlvbnMgdGhleVxcbiAgICBuZWVkIHRvIGFkdmFuY2UgdGhlIGdyb3d0aCBvZiBNYWxheXNpYW4gYnVzaW5lc3NlcyBvZiBhbGwgc2l6ZXMuIEkgYW1cXG4gICAgY29uZmlkZW50IHRoYXQgdGhpcyBwYXJ0bmVyc2hpcCB3aXRoIEtJQkIgd2lsbCBhbGxvdyB1cyB0byBncm93IGFzIGFuXFxuICAgIG9yZ2FuaXphdGlvbiBhbmQgYmV0dGVyIHNlcnZlIG91ciBjdXN0b21lcnMgYXMgd2UgaW52ZXN0IGluIG91clxcbiAgICBpbmZyYXN0cnVjdHVyZSBhbmQgc2VydmljZSBvZmZlcmluZyzigJ0gc2FpZCBBbmcgaW4gYSBzdGF0ZW1lbnQuXFxuICA8L3A+XFxuICA8cD5cXG4gICAgQ2FwQmF5IGNsYWltcyB0aGF0IHNpbmNlIDIwMTcsIGl0IGhhcyBmaW5hbmNlZCBtb3JlIHRoYW4gOSwwMDAgdHJhbnNhY3Rpb25zXFxuICAgIGFtb3VudGluZyB0byBtb3JlIHRoYW4gODAwIG1pbGxpb24gcmluZ2dpdCAoVVMkMTkyLjYgbWlsbGlvbikgYW5kIGhhcyBzZXJ2ZWRcXG4gICAgb3ZlciA1MDAgU01Fcy5cXG4gIDwvcD5cXG4gIDxwPlxcbiAgICBGb3JtZXJseSBrbm93biBhcyBDYXBpdGFsQmF5LCB0aGUgY29tcGFueSByYWlzZWQgVVMkNDc3LDAwMCBpbiBhIHNlZWQgcm91bmRcXG4gICAgbGVkIGJ5IEtLIEZ1bmQgaW4gMjAxNy5cXG4gIDwvcD5cXG48L3NlY3Rpb24+XFxuPHNlY3Rpb24gY2xhc3M9XFxcImFydGljbGUtc2VjdGlvblxcXCIgaWQ9XFxcInBoaWxpcHBpbmVzXFxcIj5cXG4gIDxoMT5BeWFubmFoIHJldmVhbHMgbWVyZ2VyOyBuZXcgZW50aXR5IHNlZWtzIHVwIHRvICQ1MG0gaW4gc2VyaWVzIEIgcm91bmQ8L2gxPlxcbiAgPGRpdiBpZD1cXFwic3ViaGVhZGluZ1xcXCI+XFxuICAgIDxzcGFuPk1pY2hhZWwgSm9yZGFuIHwgPC9zcGFuPlxcbiAgICA8c3Bhbj44IE1heSAyMDIwPC9zcGFuPlxcbiAgPC9kaXY+XFxuICA8cD5cXG4gICAgUGhpbGlwcGluZS1iYXNlZCBmaW50ZWNoIHN0YXJ0dXAgQXlhbm5haCBhbmQgSW5kaWFuIHBheW1lbnRzIGZpcm0gRWxlY3Ryb25pY1xcbiAgICBDYXNoIGFuZCBQYXltZW50IFNvbHV0aW9ucyAoRUNBUCkgc2FpZCB0aGV5IGhhdmUgbWVyZ2VkIHRvIGZvcm0gYSBQYW4tQXNpYW5cXG4gICAgY29tcGFueSB0aGF0IGFpbXMgdG8gcHJvdmlkZSBhY2Nlc3NpYmxlIGRpZ2l0YWwgZmluYW5jaWFsIHNlcnZpY2VzIHRvIHRoZVxcbiAgICByZWdpb27igJlzIG1pZGRsZSBjbGFzcy5cXG4gIDwvcD5cXG4gIDxmaWd1cmU+XFxuICAgIDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzRfX18gKyBcIlxcXCIgYWx0PVxcXCJOZXdzIHN0YW5kXFxcIiAvPlxcbiAgICA8ZmlnY2FwdGlvbj5QaG90byBjcmVkaXQ6IEF5YW5uYWggR2xvYmFsPC9maWdjYXB0aW9uPlxcbiAgPC9maWd1cmU+XFxuICA8cD5cXG4gICAgQ2FsbGVkIEF5YW5uYWggR2xvYmFsLCB0aGUgbmV3IGVudGl0eSB3aWxsIGJlIGhlYWRxdWFydGVyZWQgaW4gU2luZ2Fwb3JlLCBhXFxuICAgIHN0cmF0ZWdpYyBsb2NhdGlvbiBhbW9uZyBmYXN0LWdyb3dpbmcgbWFya2V0cyBpbiBTb3V0aGVhc3QgQXNpYS4gSXQgYWxzb1xcbiAgICBhaW1zIHRvIGRyYXcgZnJvbSB0aGUgY2l0eS1zdGF0ZeKAmXMgdGFsZW50IHBvb2wgYW5kIGZvcmdlIG5ldyBwYXJ0bmVyc2hpcHNcXG4gICAgd2l0aCBjb21wYW5pZXMgdGhlcmUuXFxuICA8L3A+XFxuICA8cD5cXG4gICAg4oCcQm90aCBjb21wYW5pZXMgc2F3IGh1Z2Ugb3BlcmF0aW9uYWwgYW5kIHRlY2hub2xvZ2ljYWwgc3luZXJnaWVzIGluIHRoZWlyXFxuICAgIHByb2R1Y3RzIGFuZCBncm93dGggc3RyYXRlZ3ksIGFuZCBhIG1lcmdlciB3aWxsIGVuYWJsZSB0aGUgZW5sYXJnZWQgZW50aXR5XFxuICAgIHRvIGJldHRlciByZWFjaCBjdXN0b21lcnMsIHNjYWxlIHVwIHByb2R1Y3QgZGV2ZWxvcG1lbnQsIGFuZCBleHBhbmQgdGhlaXJcXG4gICAgcmVhY2ggd2l0aGluIFNvdXRoZWFzdCBBc2lhLOKAnSBhIHNwb2tlc3BlcnNvbiBmb3IgQXlhbm5haCBHbG9iYWwgdG9sZCBUZWNoIGluXFxuICAgIEFzaWEuXFxuICA8L3A+XFxuICA8cD5cXG4gICAgVGhlIGNvbXBhbnkgYWxzbyBsb29rcyB0byBjYXBpdGFsaXplIG9uIHRoZSBncmVhdGVyIGRlbWFuZCBmb3Igb3BlbiBiYW5raW5nXFxuICAgIGFuZCBvbW5pY2hhbm5lbCBkaXN0cmlidXRpb24gcGxhdGZvcm1zIGRyaXZlbiBieSB0aGUgQ292aWQtMTkgcGFuZGVtaWMsIHRoZVxcbiAgICBzcG9rZXNwZXJzb24gYWRkZWQuXFxuICA8L3A+XFxuICA8cD5cXG4gICAgRm91bmRlZCBpbiAyMDEwLCBBeWFubmFoIGRldmVsb3BlZCBhbiBBSS1lbmFibGVkIHBsYXRmb3JtIHRvIGxhdW5jaCBhIHN1aXRlXFxuICAgIG9mIGZpbmFuY2lhbCBhbmQgbGlmZXN0eWxlIHByb2R1Y3RzIGFuZCBzZXJ2aWNlcyByYW5naW5nIGZyb20gcGF5bWVudHMsXFxuICAgIHJlbWl0dGFuY2VzLCBpbnN1cmFuY2UsIGFuZCB0ZWxlbWVkaWNpbmUuXFxuICA8L3A+XFxuICA8cD5cXG4gICAgTWVhbndoaWxlLCBCZW5nYWx1cnUtYmFzZWQgRUNBUFMgY2F0ZXJzIHRvIHRoZSBuZWVkcyBvZiBkb21lc3RpYyBtaWdyYW50c1xcbiAgICBhbmQgdGhlIHVuYmFua2VkIHBvcHVsYXRpb24gaW4gSW5kaWEuIEl0IGVuYWJsZXMgZG9tZXN0aWMgbW9uZXkgdHJhbnNmZXJzLFxcbiAgICB1dGlsaXR5IGJpbGwgcGF5bWVudHMsIHJlY2hhcmdlcywgYW5kIHRyYXZlbCB0aWNrZXRpbmcuXFxuICA8L3A+XFxuICA8cD5cXG4gICAgVG9nZXRoZXIsIEF5YW5uYWggYW5kIEVDQVBTIGhhdmUgb3BlcmF0aW9ucyBpbiBJbmRpYSwgSW5kb25lc2lhLCBhbmQgdGhlXFxuICAgIFBoaWxpcHBpbmVzLiBBZnRlciB0aGUgbWVyZ2VyLCBBeWFubmFoIEdsb2JhbCBsb29rcyB0byBleHRlbmQgaXRzIHJlYWNoIGludG9cXG4gICAgVmlldG5hbS4gSXQgZXhwZWN0cyB0byByZWFjaCBvdmVyIDEwIG1pbGxpb24gY3VzdG9tZXJzIGluIHRoZXNlIG1hcmtldHNcXG4gICAgdGhyb3VnaCBpdHMgbW9iaWxlIGFwcHMgYW5kIGEgZ3Jvd2luZyBuZXR3b3JrIG9mIG92ZXIgNjAsMDAwIG9mZmxpbmVcXG4gICAgdG91Y2hwb2ludHMsIHRoZSBuZXcgZW50aXR5IHNhaWQuXFxuICA8L3A+XFxuICA8cD5cXG4gICAgSW4gYWRkaXRpb24gdG8gdGhlIG1lcmdlciwgdGhlIGNvbXBhbnkgc2FpZCBpdCB3aWxsIHN0YXJ0IHJhaXNpbmcgbW9uZXkgZm9yXFxuICAgIGl0cyBzZXJpZXMgQiByb3VuZCBvbiBKdW5lIDE1LiBJdCBsb29rcyB0byBiYWcgVVMkMzAgbWlsbGlvbiB0byBVUyQ1MFxcbiAgICBtaWxsaW9uIHRocm91Z2ggdGhlIHJvdW5kLlxcbiAgPC9wPlxcbiAgPHA+XFxuICAgIEF5YW5uYWjigJlzIGV4aXN0aW5nIGJhY2tlcnMgZnJvbSBwcmV2aW91cyBmdW5kcmFpc2luZyByb3VuZHMgaW5jbHVkZVxcbiAgICBXYXZlbWFrZXIgUGFydG5lcnMsIEdvbGRlbiBHYXRlIFZlbnR1cmVzLCBhbmQgNTAwIFN0YXJ0dXBzLCBhcyB3ZWxsIGFzXFxuICAgIHNldmVyYWwgbGFyZ2UgZmFtaWx5IG9mZmljZXMgYWNyb3NzIEFzaWEuXFxuICA8L3A+XFxuPC9zZWN0aW9uPlxcbjxzZWN0aW9uIGNsYXNzPVxcXCJhcnRpY2xlLXNlY3Rpb25cXFwiIGlkPVxcXCJpbmRvbmVzaWFcXFwiPlxcbiAgPGgxPlxcbiAgICBJbmRvbmVzaWHigJlzIGlTZWxsZXIgYmFncyBzZXJpZXMgQSByb3VuZCBmcm9tIE9wZW5zcGFjZSBWZW50dXJlcywgTWFuZGlyaVxcbiAgICBDYXBpdGFsXFxuICA8L2gxPlxcbiAgPGRpdiBpZD1cXFwic3ViaGVhZGluZ1xcXCI+XFxuICAgIDxzcGFuPkNhcmlzIExlVmVydCB8IDwvc3Bhbj5cXG4gICAgPHNwYW4+MTkgSmFuIDIwMjE8L3NwYW4+XFxuICA8L2Rpdj5cXG4gIDxwPlxcbiAgICBJbmRvbmVzaWEtYmFzZWQgaVNlbGxlciwgYW4gb21uaWNoYW5uZWwgc2FsZXMgc29mdHdhcmUtYXMtYS1zZXJ2aWNlIHBsYXllcixcXG4gICAgYW5ub3VuY2VkIHRoYXQgaXQgaGFzIHNlY3VyZWQgYW4gdW5kaXNjbG9zZWQgYW1vdW50IGluIGl0cyBzZXJpZXMgQSByb3VuZCBvZlxcbiAgICBmdW5kaW5nIGxlZCBieSBTaW5nYXBvcmUtYmFzZWQgVkMgZmlybSBPcGVuc3BhY2UgVmVudHVyZXMgYW5kIE1hbmRpcmlcXG4gICAgQ2FwaXRhbCwgdGhlIFZDIGFybSBvZiBCYW5rIE1hbmRpcmkgaW4gSW5kb25lc2lhLlxcbiAgPC9wPlxcbiAgPGZpZ3VyZT5cXG4gICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNV9fXyArIFwiXFxcIiBhbHQ9XFxcIkNoZWNrb3V0XFxcIiAvPlxcbiAgICA8ZmlnY2FwdGlvbj5QaG90byBjcmVkaXQ6IGlTZWxsZXI8L2ZpZ2NhcHRpb24+XFxuICA8L2ZpZ3VyZT5cXG4gIDxwPlxcbiAgICBUaGUgY2FwaXRhbCBpbmplY3Rpb24gd2lsbCBnbyB0b3dhcmQgYnVzaW5lc3MgZXhwYW5zaW9uIGluY2x1ZGluZyB0aGVcXG4gICAgYWNjZWxlcmF0aW9uIG9mIG1lcmNoYW50IGFjcXVpc2l0aW9uIGFuZCBvbmJvYXJkaW5nLiBUaGUgY29tcGFueSBpcyBhbHNvXFxuICAgIGRvdWJsaW5nIGRvd24gb24gdGVjaG5vbG9neSBkZXZlbG9wbWVudCB0byBhZGQgYWRkaXRpb25hbCBvbW5pY2hhbm5lbFxcbiAgICBtZXJjaGFudCBzb2x1dGlvbnMgYW5kIGZlYXR1cmVzLCBpdCBzYWlkIGluIGEgc3RhdGVtZW50LlxcbiAgPC9wPlxcbiAgPHA+XFxuICAgIEZvdW5kZWQgaW4gMjAxNywgaVNlbGxlciBvZmZlcnMgYSBjbG91ZC1iYXNlZCBwbGF0Zm9ybSBmb3Igb21uaWNoYW5uZWxcXG4gICAgYnVzaW5lc3Nlcywgd2hpY2ggaW50ZWdyYXRlcyBpbi1zdG9yZSBwb2ludCBvZiBzYWxlLCBvbmxpbmUgc3RvcmVmcm9udCxcXG4gICAgcGF5bWVudCBwcm9jZXNzaW5nLCBvcmRlciBmdWxmaWxsbWVudCwgYW5kIGludmVudG9yeSBtYW5hZ2VtZW50IGludG8gYVxcbiAgICBzaW5nbGUgaW50ZXJmYWNlLlxcbiAgPC9wPlxcbiAgPHA+XFxuICAgIFdpdGggaW5jcmVhc2luZyBvbmxpbmUgZGlzdHJpYnV0aW9uIG1vZGVscyBhbmQgbXVsdGlwbGUgcGF5bWVudCBtZXRob2RzIGluXFxuICAgIEluZG9uZXNpYSwgc21hbGwgYW5kIG1lZGl1bS1zaXplZCBlbnRlcnByaXNlcyBhcmUgZmluZGluZyBpdCBoYXJkIHRvIGtlZXBcXG4gICAgdXAuXFxuICA8L3A+XFxuICA8cD5cXG4gICAgVGhlIGNvbXBhbnkgc2FpZCBpdCBhaW1zIHRvIGhlbHAgdGhlc2UgbWVyY2hhbnRzIHRha2UgYWR2YW50YWdlIG9mIHRoZVxcbiAgICBvbmxpbmUgZWNvc3lzdGVtIGJ5IHByb3ZpZGluZyBtb3JlIHdheXMgdG8gc2VsbCBhbmQgYWNjZXB0IHBheW1lbnQgYWNyb3NzXFxuICAgIG9ubGluZSBhbmQgb2ZmbGluZSBjaGFubmVscyAoaW4tc3RvcmUsIG9ubGluZSwgYXBwcywgYW5kIG1hcmtldHBsYWNlcykuXFxuICAgIE1lcmNoYW50cyBjYW4gYWxzbyBtYW5hZ2Ugc2FsZXMgYWNyb3NzIGJyYW5jaGVzLCBjb3ZlcmluZyBUb2tvcGVkaWEsIFNob3BlZSxcXG4gICAgTGF6YWRhLCBHb1BheSwgT3ZvLCBEYW5hLCBHb1NlbmQsIGFuZCBHcmFiRXhwcmVzcywgYW1vbmcgb3RoZXJzLlxcbiAgPC9wPlxcbiAgPHA+XFxuICAgIFdpdGggYSBwYXktYXMteW91LWdvIHN1YnNjcmlwdGlvbiBtb2RlbCwgaVNlbGxlciBzZXJ2ZXMgY29uc3VtZXIgYnVzaW5lc3Nlc1xcbiAgICBpbiBzZWN0b3JzIGluY2x1ZGluZyByZXRhaWwsIGZvb2QgYW5kIGJldmVyYWdlLCBhbmQgY29uc3VtZXIgc2VydmljZXMsXFxuICAgIGNhdGVyaW5nIHRvIGNsaWVudHMgbGlrZSBHZXByZWsgQmVuc3UsIEl4b2JveCwgQWd1bmcgU2VkYXl1IFJldGFpbCBJbmRvbmVzaWFcXG4gICAgKEFTUkkpLCBVbml0ZWQgQmlrZSwgYW5kIFlvZ3VydGxhbmQuXFxuICA8L3A+XFxuICA8cD5cXG4gICAgRGVzcGl0ZSBjdXJyZW50IGVjb25vbWljIGNvbmRpdGlvbnMsIHRoZSBjb21wYW55IGNsYWltcyB0aGF0IGl0IGhhcyBkb3VibGVkXFxuICAgIGl0cyByZXZlbnVlIGFuZCBpdHMgYWN0aXZlIG1lcmNoYW50IHBvb2wgeWVhciBvbiB5ZWFyIGFuZCBjdXJyZW50bHlcXG4gICAgcHJvY2Vzc2VzIG1vcmUgdGhhbiA1IG1pbGxpb24gdHJhbnNhY3Rpb25zIGEgbW9udGguIEluIGZhY3QsIGl0IGF0dHJpYnV0ZWRcXG4gICAgdGhpcyBncm93dGggdG8gdGhlIGhpZ2hlciBvbmxpbmUgdHJhbnNhY3Rpb24gdm9sdW1lIGFtb25nIGV4aXN0aW5nIGN1c3RvbWVyc1xcbiAgICBhbWlkIHRoZSBwYW5kZW1pY+KAmXMgbG9ja2Rvd24gcGVyaW9kLlxcbiAgPC9wPlxcbjwvc2VjdGlvbj5cXG48c2VjdGlvbiBjbGFzcz1cXFwiYXJ0aWNsZS1zZWN0aW9uXFxcIiBpZD1cXFwidmlldG5hbVxcXCI+XFxuICA8aDE+XFxuICAgIEhvdyBpbnN1cnRlY2ggc3RhcnR1cCBQYXBheWEgbG9va3MgdG8gZGlnaXRhbGl6ZSBWaWV0bmFt4oCZcyBvcGFxdWUgaW5zdXJhbmNlXFxuICAgIGluZHVzdHJ5XFxuICA8L2gxPlxcbiAgPGRpdiBpZD1cXFwic3ViaGVhZGluZ1xcXCI+XFxuICAgIDxzcGFuPlRodSBIdW9uZyBMZSB8IDwvc3Bhbj5cXG4gICAgPHNwYW4+MzAgRGVjIDIwMjA8L3NwYW4+XFxuICA8L2Rpdj5cXG4gIDxwPlxcbiAgICBDRU8gYW5kIGNvLWZvdW5kZXIgSHVuZyBQaGFuIGhhcyBsZWFybmVkIHR3byBpbXBvcnRhbnQgaW5zaWdodHMgZnJvbVxcbiAgICBidWlsZGluZyBoaXMgaW5zdXJ0ZWNoIHN0YXJ0dXAgUGFwYXlhLiBGaXJzdCwgZG9u4oCZdCBmb2xsb3cgdGhlIGFnZW50LWJhc2VkXFxuICAgIG1vZGVsIHdoaWNoIGp1c3QgZGlnaXRhbGl6ZXMgdGhlIHByb2Nlc3MgdGhhdCBvZmZsaW5lIGluc3VyYW5jZSBhZ2VudHNcXG4gICAgZm9sbG93LiBJdCB3aWxsIGJlIGV4dHJlbWVseSBjb3N0bHkgdG8gYWNxdWlyZSBhbmQgbWFuYWdlIHRoZXNlIGFnZW50cyBpblxcbiAgICB0aGUgbG9uZyB0ZXJtLlxcbiAgPC9wPlxcbiAgPHA+XFxuICAgIFNlY29uZCwgZG9u4oCZdCByZWx5IG9uIGFuIGV4aXN0aW5nIHBsYXRmb3JtIHRvIGRpc3RyaWJ1dGUgeW91ciBwcm9kdWN0cy4gSXRcXG4gICAgd2lsbCBzcXVlZXplIHlvdXIgbWFyZ2lucywgYW5kIHRoZSBwbGF0Zm9ybSB3aWxsIGV2ZW50dWFsbHkgZmlndXJlIG91dCBob3dcXG4gICAgdG8gc2VsbCBkaXJlY3RseSB0byBjdXN0b21lcnMuXFxuICA8L3A+XFxuICA8ZmlndXJlPlxcbiAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF82X19fICsgXCJcXFwiIGFsdD1cXFwiU3RhcnR1cCB0ZWFtXFxcIiAvPlxcbiAgICA8ZmlnY2FwdGlvbj5cXG4gICAgICBIbyBDaGkgTWluaCBDaXR5LWJhc2VkIGluc3VydGVjaCBzdGFydHVwIFBhcGF5YSB3YW50cyB0byBiZWNvbWUgYVxcbiAgICAgIGhlYWx0aGNhcmUgYW5kIHdlbGxuZXNzIHBsYXRmb3JtIGZvciBlbXBsb3llZXMuIC8gUGhvdG8gY3JlZGl0OiBQYXBheWFcXG4gICAgPC9maWdjYXB0aW9uPlxcbiAgPC9maWd1cmU+XFxuICA8cD5cXG4gICAgV2hlbiBQaGFuIGZvdW5kZWQgUGFwYXlhIGluIDIwMTgsIGl0IHRvb2sgYSB3aGlsZSBmb3IgaGlzIHRlYW0gdG8gZGVjaWRlIG9uXFxuICAgIHRoZSBzdGFydHVw4oCZcyBidXNpbmVzcyBtb2RlbC4gVGhlIGNvbXBhbnkgcHJldmlvdXNseSB0cmllZCBzZWxsaW5nIG1vdG9yYmlrZVxcbiAgICBpbnN1cmFuY2UgdG8gZHJpdmVycyBvbiBwb3B1bGFyIFZpZXRuYW1lc2Ugb24tZGVtYW5kIHBsYXRmb3JtcywgYnV0IHRoZVxcbiAgICBkZW1hbmQgd2FzIGp1c3Qgbm90IHRoZXJlLlxcbiAgPC9wPlxcbiAgPHA+XFxuICAgIFNvIHRoZSBzdGFydHVwIGRlY2lkZWQgdG8gc2V0dGxlIG9uIHNvbHZpbmcgYSBwYWluZnVsIGV4cGVyaWVuY2UgdGhhdCBtYW55XFxuICAgIHBlb3BsZSBpbiBWaWV0bmFtIGdvIHRocm91Z2g6IHRoZSBjbGFpbXMgcHJvY2VzcyBpbiBoZWFsdGggaW5zdXJhbmNlLiBWZXJ5XFxuICAgIG9mdGVuLCBjdXN0b21lcnMgZmVlbCBjaGVhdGVkIGJ5IGluc3VyYW5jZSBjb21wYW5pZXMgZHVlIHRvIHRoZSBjb25mdXNpb25cXG4gICAgc3Vycm91bmRpbmcgdGhlaXIgZXhjbHVzaW9uIHBvbGljaWVzLlxcbiAgPC9wPlxcbiAgPHA+XFxuICAgIEluIFZpZXRuYW0sIFBhcGF5YSBpcyBwYXJ0IG9mIGp1c3QgYSBoYW5kZnVsIG9mIGluc3VydGVjaCBzdGFydHVwcyBvcGVyYXRpbmdcXG4gICAgaW4gdGhlIGNvdW50cnksIHBhcnRseSBiZWNhdXNlIGluc3VyYW5jZSBpcyBhIHRyYWRpdGlvbmFsIGluZHVzdHJ5IHdpdGhcXG4gICAgbGFyZ2UgaW5jdW1iZW50IHBsYXllcnMuXFxuICA8L3A+XFxuICA8cD5cXG4gICAgTGFzdCBtb250aCwgdGhlIGNvbXBhbnkgd29uIHRoZSBUZWNoIGluIEFzaWEgU3RhcnR1cCBBcmVuYSBQaXRjaCBCYXR0bGVcXG4gICAgMjAyMC4gSXQgcHJldmlvdXNseSByYWlzZWQgcHJlLXNlZWQgbW9uZXkgYW5kIGlzIG5vdyBsb29raW5nIHRvIHJhaXNlIFVTJDFcXG4gICAgbWlsbGlvbiB0byBmdXJ0aGVyIGludmVzdCBpbiBhdXRvbWF0aW9uIHRlY2hub2xvZ3kgYW5kIGhpcmluZy5cXG4gIDwvcD5cXG4gIDxwPlxcbiAgICBUaGUgc2VjdG9y4oCZcyB0b3RhbCBhZGRyZXNzYWJsZSBtYXJrZXQgaGFzIGh1Z2UgcG90ZW50aWFsLiBUaGUgZ292ZXJubWVudFxcbiAgICBlc3RpbWF0ZXMgdGhhdCB0b3RhbCBwcmVtaXVtcyBjb2xsZWN0ZWQgYnkgaW5zdXJhbmNlIGNvbXBhbmllcyBpbiBWaWV0bmFtXFxuICAgIGxhc3QgeWVhciByZWFjaGVkIGFib3V0IDE2MC4yIHRyaWxsaW9uIFZpZXRuYW1lc2UgZG9uZyAoVVMkNS40IGJpbGxpb24pLCB1cFxcbiAgICAyMC41JSB5ZWFyIG9uIHllYXIuIFRoYXQgc2FpZCwgdGhlIHBlbmV0cmF0aW9uIHJhdGUgaXMgc3RpbGwgcmVsYXRpdmVseSBsb3csXFxuICAgIGFzIG9ubHkgYWJvdXQgOC41JSBvZiB0aGUgcG9wdWxhdGlvbiBoYXMgYSBsaWZlIGluc3VyYW5jZSBwb2xpY3ksIGFjY29yZGluZ1xcbiAgICB0byB0aGUgVmlldG5hbSBJbnN1cmFuY2UgQXNzb2NpYXRpb24uXFxuICA8L3A+XFxuICA8ZmlndXJlPlxcbiAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF83X19fICsgXCJcXFwiIGFsdD1cXFwiSG8gQ2hpIE1pbmhcXFwiIC8+XFxuICAgIDxmaWdjYXB0aW9uPlxcbiAgICAgIFBlb3BsZSBjcm93ZCBob3NwaXRhbHMgaW4gSG8gQ2hpIE1pbmggQ2l0eSwgVmlldG5hbS4gLyBQaG90byBjcmVkaXQ6IDEyM3JmXFxuICAgIDwvZmlnY2FwdGlvbj5cXG4gIDwvZmlndXJlPlxcbiAgPHA+XFxuICAgIFBoYW4sIHdobyBwcmV2aW91c2x5IHdvcmtlZCBmb3IgRldEIEluc3VyYW5jZSwgdW5kZXJzdGFuZHMgdGhlIHBhaW5zdGFraW5nXFxuICAgIHByb2Nlc3Mgb2YgY2xhaW1pbmcgaGVhbHRoIGluc3VyYW5jZSBmb3IgYm90aCBwYXRpZW50cyBhbmQgaW5zdXJhbmNlXFxuICAgIGNvbXBhbmllcy4gSXTigJlzIGxhcmdlbHkgYmFzZWQgb24gbWFudWFsIHByb2Nlc3NlcyBsaWtlIGZpbGxpbmcgb3V0IHBhcGVyd29ya1xcbiAgICBhbmQgc2VuZGluZyBiYWNrLWFuZC1mb3J0aCBlbWFpbHMsIGFuZCB0aGUgYXBwcm92YWwgcHJvY2VzcyBtaWdodCB0YWtlXFxuICAgIHNldmVyYWwgd2Vla3MuXFxuICA8L3A+XFxuICA8cD5cXG4gICAgRm9yIG5vdywgUGFwYXlhIG9ubHkgb3BlcmF0ZXMgaW4gdGhlIGJ1c2luZXNzLXRvLWJ1c2luZXNzIHNwYWNlLiBJdHNcXG4gICAgY3VzdG9tZXJzIGNvbnNpc3Qgb2YgaW5zdXJhbmNlIGNvbXBhbmllcyB3aGljaCBhbHNvIHNlZSB0aGUgYmVuZWZpdHMgb2ZcXG4gICAgc3BlZWRpbmcgdXAgdGhlaXIgb3duIGNsYWltaW5nIHByb2Nlc3MuIFNvIGZhciwgdGhlIHN0YXJ0dXAgaGFzIHNlY3VyZWRcXG4gICAgY29udHJhY3RzIHdpdGggdHdvIG1ham9yIGluc3VyYW5jZSBjb21wYW5pZXMgaW4gdGhlIGNvdW50cnkg4oCTIEZXRCBhbmQgQmFvXFxuICAgIE1pbmgg4oCTIHdoaWNoIGRlbGVnYXRlIGEgbnVtYmVyIG9mIHRoZWlyIHBvcnRmb2xpbyBjb21wYW5pZXMgZm9yIFBhcGF5YSB0b1xcbiAgICBtYW5hZ2UuXFxuICA8L3A+XFxuICA8cD5cXG4gICAgVGhlIGNvbXBhbnkgY3VycmVudGx5IHByb2Nlc3NlcyBoZWFsdGggaW5zdXJhbmNlIGNsYWltcyBmb3IgOCwwMDAgZW1wbG95ZWVzLFxcbiAgICB3aG8gY2FuIHVzZSBpdHMgbW9iaWxlIGFwcCB0byBkaWdpdGFsbHkgY2hlY2sgaW4gYXQgaG9zcGl0YWxzIGFuZCBjbGluaWNzXFxuICAgIHdpdGhpbiB0aGUgaW5zdXJhbmNlIGNvbXBhbmllc+KAmSBuZXR3b3JrLlxcbiAgPC9wPlxcbiAgPHA+XFxuICAgIEFjY29yZGluZyB0byBQaGFuLCB0aGlzIGFsbG93cyB0aGUgZW1wbG95ZWVzIHRvIGdldCB0aGVpciBjbGFpbXMgYXBwcm92ZWRcXG4gICAgd2l0aGluIDMwIG1pbnV0ZXMgKGZvciBjbGFpbXMgdW5kZXIgMyBtaWxsaW9uIGRvbmcgb3IgVVMkMTMwKS4gR2VuZXJhbGx5LFxcbiAgICBQYXBheWEgY2FuIGFwcHJvdmUgY2xhaW1zIHVuZGVyIDUgbWlsbGlvbiBkb25nIChVUyQyMTcpLiBUaG9zZSB0aGF0IGdvXFxuICAgIGJleW9uZCB0aGlzIHRocmVzaG9sZCByZXF1aXJlIGFkZGl0aW9uYWwgYXBwcm92YWwgZnJvbSBpbnN1cmFuY2UgY29tcGFuaWVzLlxcbiAgPC9wPlxcbiAgPHA+XFxuICAgIFRoZSBzdGFydHVwIGNoYXJnZXMgaW5zdXJhbmNlIGNvbXBhbmllcyA2JSBvZiB0aGUgYW5udWFsIGluc3VyYW5jZSBwcmVtaXVtXFxuICAgIGFuZCBhbm90aGVyIDIlIGZvciB1c2luZyBpdHMgbW9iaWxlIGFwcC4gRm9sbG93aW5nIHRoaXMgbW9kZWwsIFBhcGF5YVxcbiAgICBleHBlY3RzIGl0cyBhbm51YWwgcmVjdXJyaW5nIHJldmVudWUgd2lsbCByZWFjaCBVUyQyNTAsMDAwIHRoaXMgeWVhci5cXG4gIDwvcD5cXG4gIDxwPlxcbiAgICBCdXQgUGhhbiBpcyBrZWVubHkgYXdhcmUgb2YgdGhlIGNvbXBhbnnigJlzIGxpbWl0YXRpb25zLiBQYXBheWEgaGFzIGJlZW4gYWJsZVxcbiAgICB0byBhdXRvbWF0ZSBqdXN0IDEwJSBvZiB0aGUgY2xhaW1pbmcgcHJvY2VzcyDigJMgdGhlIHN0YXJ0dXDigJlzIG93biBvcGVyYXRpb25zXFxuICAgIHN0YWZmIG11c3QgY2hlY2sgdGhlIHN1Ym1pdHRlZCBkb2N1bWVudHMgbWFudWFsbHkuIFdpdGggb25seSBmb3VyIGVtcGxveWVlc1xcbiAgICBvbiB0aGUgdGFzaywgUGFwYXlhIGN1cnJlbnRseSBwcm9jZXNzZXMgYWJvdXQgMSwwMDAgY2xhaW1zIGluIGEgbW9udGguXFxuICA8L3A+XFxuICA8cD5cXG4gICAg4oCcSXTigJlzIGJlY2F1c2UgdGhlIG1lZGljYWwgZG9jdW1lbnRzIGluIFZpZXRuYW0gZG8gbm90IGZvbGxvdyBzdGFuZGFyZHMs4oCdIGhlXFxuICAgIHRlbGxzIFRlY2ggaW4gQXNpYS4g4oCcV2UgbmVlZCB0byBpbnZlc3QgaW4gYXV0b21hdGlvbiwgYnV0IGl04oCZcyBqdXN0IGdvaW5nIHRvXFxuICAgIHRha2UgdGltZS7igJ1cXG4gIDwvcD5cXG4gIDxwPlxcbiAgICBBZGRpdGlvbmFsbHksIFBoYW4gc2F5cyB0aGUgaW5zdXJ0ZWNoIHN0YXJ0dXAgZXZlbnR1YWxseSBuZWVkcyB0byBmaW5kIG90aGVyXFxuICAgIHNvdXJjZXMgb2YgcmV2ZW51ZS4g4oCcQ2xhaW1pbmcgaXMgc3RpbGwganVzdCBhIHNtYWxsIG1hcmtldCBiZWNhdXNlIHdlIGhhdmVcXG4gICAgdG8gZGVwZW5kIG9uIHRoZSBidWRnZXQgb2YgaW5zdXJhbmNlIGNvbXBhbmllcyzigJ0gaGUgYWRkcy5cXG4gIDwvcD5cXG48L3NlY3Rpb24+XFxuPHNlY3Rpb24gY2xhc3M9XFxcImFydGljbGUtc2VjdGlvblxcXCIgaWQ9XFxcInRoYWlsYW5kXFxcIj5cXG4gIDxoMT5cXG4gICAgTGluZeKAmXMgZGVsaXZlcnkgYXBwIGluIFRoYWlsYW5kIGJhbmtzICQxMTBtLCBtZXJnZXMgd2l0aCBsb2NhbCBmb29kIGFwcFxcbiAgPC9oMT5cXG4gIDxkaXYgaWQ9XFxcInN1YmhlYWRpbmdcXFwiPlxcbiAgICA8c3Bhbj5NYXJ5IFBvcHBpbnMgfCA8L3NwYW4+XFxuICAgIDxzcGFuPjMwIEp1biAyMDIwPC9zcGFuPlxcbiAgPC9kaXY+XFxuICA8cD5cXG4gICAgVGhhaWxhbmTigJlzIExpbmUgTWFuLCB0aGUgb24tZGVtYW5kIGFzc2lzdGFudCBwbGF0Zm9ybSBvZiBtZXNzYWdpbmcgYXBwIExpbmUsXFxuICAgIHNhaWQgaXQgaGFzIHJlYWNoZWQgYW4gYWdyZWVtZW50IHRvIHJlY2VpdmUgVVMkMTEwIG1pbGxpb24gaW4gaW52ZXN0bWVudFxcbiAgICBmcm9tIGdyb3d0aCBjYXBpdGFsIGZpcm0gQlJWIENhcGl0YWwgTWFuYWdlbWVudC5cXG4gIDwvcD5cXG4gIDxwPlxcbiAgICBBY2NvcmRpbmcgdG8gTGluZSwgdGhpcyBpcyB0aGUgZmlyc3QgdGltZSBvbmUgb2YgaXRzIGVudGl0aWVzIG92ZXJzZWFzIGhhc1xcbiAgICBzZWN1cmVkIGFuIGludmVzdG1lbnQgb2YgdGhpcyBzaXplLlxcbiAgPC9wPlxcbiAgPGZpZ3VyZT5cXG4gICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfOF9fXyArIFwiXFxcIiBhbHQ9XFxcIkxpbmUgbWFuXFxcIiAvPlxcbiAgICA8ZmlnY2FwdGlvbj5QaG90byBjcmVkaXQ6IExpbmUgTWFuPC9maWdjYXB0aW9uPlxcbiAgPC9maWd1cmU+XFxuICA8cD5cXG4gICAgVGhlIGRlYWwgY29tZXMgYXMgTGluZSBNYW4gaW5rZWQgYSBtZXJnZXIgd2l0aCBXb25nbmFpIE1lZGlhLCBhIHJlc3RhdXJhbnRcXG4gICAgcmV2aWV3IGFuZCBkaXNjb3ZlcnkgcGxhdGZvcm0gaW4gVGhhaWxhbmQuIEFjY29yZGluZyB0byBhIHN0YXRlbWVudCBmcm9tXFxuICAgIExpbmUsIHRoZSBjYXBpdGFsIGludmVzdG1lbnQgYWltcyB0byBzdHJlbmd0aGVuIHRoZSBuZXdseSBtZXJnZWQgZW50aXR5IGFuZFxcbiAgICBleHBhbmQgaXRzIGRldmVsb3BtZW50IGluIHRoZSBjb3VudHJ5LlxcbiAgPC9wPlxcbiAgPHA+XFxuICAgIFNpbmNlIGJlaW5nIGZvdW5kZWQgaW4gMjAxMCwgV29uZ25haSBjdXJyZW50bHkgaGFzIG1vcmUgdGhhbiAxMCBtaWxsaW9uXFxuICAgIG1vbnRobHkgdXNlcnMsIGNhcnJ5aW5nIHRoZSBsYXJnZXN0IHJlc3RhdXJhbnQgZGF0YWJhc2UgaW4gVGhhaWxhbmQgd2l0aFxcbiAgICBvdmVyIDQwMCwwMDAgZXN0YWJsaXNobWVudHMgaW4gaXRzIG5ldHdvcmsuIExpbmUgc2FpZCB0aGUgbWVyZ2VyIHdvdWxkIGhlbHBcXG4gICAgaXQgc3RyZW5ndGhlbiBpdHMgcG9zaXRpb24gYXMgdGhlIGNvdW50cnnigJlzIGxlYWRpbmcgZGFpbHkgYXNzaXN0YW50IGFwcC5cXG4gIDwvcD5cXG4gIDxwPlxcbiAgICBMaW5lIE1hbiB3YXMgbGF1bmNoZWQgaW4gMjAxNiBhcyBMaW5lIGZvcmF5ZWQgaW50byBsb2NhbCwgb24tZGVtYW5kIHNlcnZpY2VzXFxuICAgIGZvciB0aGUgZmlyc3QgdGltZS4gU2luY2UgdGhlbiwgaXQgaGFzIGFkZGVkIG92ZXIgMTAwLDAwMCByZXN0YXVyYW50cyB0byBpdHNcXG4gICAgcGxhdGZvcm0uXFxuICA8L3A+XFxuICA8cD5cXG4gICAgVGhlIGFwcCBvZmZlcnMgZGVsaXZlcmllcyBmb3IgZm9vZCwgZ3JvY2VyaWVzLCBjb252ZW5pZW5jZSBzdG9yZSBpdGVtcywgYW5kXFxuICAgIHBhcmNlbHMsIGFsb25nIHdpdGggbWVzc2VuZ2VyIGFuZCB0YXhpLWhhaWxpbmcgc2VydmljZXMuIEl0IGN1cnJlbnRseVxcbiAgICBvcGVyYXRlcyBpbiBCYW5na29rIGFuZCBzZXZlcmFsIG90aGVyIHByb3ZpbmNlcyBzdWNoIGFzIE5vbnRoYWJ1cmksXFxuICAgIFNhbXV0cHJha3JhbiwgYW5kIE5ha29ybnByYXRob20uXFxuICA8L3A+XFxuICA8cD5cXG4gICAgSmF5ZGVuIEthbmcsIGZvcm1lciBjaGllZiBzdHJhdGVneSBvZmZpY2VyIGF0IExpbmUgVGhhaWxhbmQsIHNhaWQgaW4gYW5cXG4gICAgaW50ZXJ2aWV3IHdpdGggS29yZWEgVGltZXMgbGFzdCB5ZWFyIHRoYXQgdGhlIGNvbXBhbnkgYWltcyB0byBleHRlbmQgaXRzXFxuICAgIHJlYWNoIGludG8gMTcgbW9yZSByZWdpb25zIGluIHRoZSBjb3VudHJ5IGluIHRoZSBjb21pbmcgeWVhcnMsIGFkZGluZyB0aGF0XFxuICAgIExpbmUgTWFuIHdvdWxkIGNvbnRpbnVlIHRvIGZvY3VzIG9uIHRoZSBsb2NhbCBtYXJrZXQgcmF0aGVyIHRoYW4gZXhwYW5kaW5nXFxuICAgIG92ZXJzZWFzLlxcbiAgPC9wPlxcbiAgPHA+XFxuICAgIEJSViBpcyBhIHJlZ2lvbmFsIGdyb3d0aCBjYXBpdGFsIGZpcm0gdGhhdCBsZWQgZWFybHkgcm91bmRzIGluIFBheVBhbCBhbmRcXG4gICAgV2F6ZS4gQWNjb3JkaW5nIHRvIHRoZSBzdGF0ZW1lbnQsIHRoZSBjb21wYW55IGRlY2lkZWQgdG8gaW52ZXN0IGluIExpbmUgTWFuXFxuICAgIGJlY2F1c2Ugb2YgdGhlIGFwcOKAmXMgc3VjY2VzcyBpbiBiZWNvbWluZyBhIOKAnGRhaWx5IGFzc2lzdGFudOKAnSB0byBsb2NhbCB1c2Vycy5cXG4gIDwvcD5cXG48L3NlY3Rpb24+XFxuXCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPHNlY3Rpb24gaWQ9XFxcImNvbnRhY3Qtc2VjdGlvblxcXCI+XFxuICA8ZGl2PlxcbiAgICA8aDE+V2FudCB0byBhZHZlcnRpc2U/IFNlbmQgdXMgYSBtZXNzYWdlIGhlcmUhPC9oMT5cXG4gICAgPGZvcm0gYWN0aW9uPVxcXCJcXFwiPlxcbiAgICAgIDxpbnB1dCBuYW1lPVxcXCJmaXJzdE5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJGaXJzdCBuYW1lXFxcIiByZXF1aXJlZCAvPlxcbiAgICAgIDxpbnB1dCBuYW1lPVxcXCJsYXN0TmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIkxhc3QgbmFtZVxcXCIgcmVxdWlyZWQgLz5cXG4gICAgICA8aW5wdXRcXG4gICAgICAgIGNsYXNzPVxcXCJmdWxsUm93XFxcIlxcbiAgICAgICAgbmFtZT1cXFwiZW1haWxcXFwiXFxuICAgICAgICB0eXBlPVxcXCJlbWFpbFxcXCJcXG4gICAgICAgIHBsYWNlaG9sZGVyPVxcXCJFbWFpbFxcXCJcXG4gICAgICAgIHJlcXVpcmVkXFxuICAgICAgLz5cXG4gICAgICA8aW5wdXQgbmFtZT1cXFwiY29tcGFueVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIkNvbXBhbnkgbmFtZVxcXCIgcmVxdWlyZWQgLz5cXG4gICAgICA8aW5wdXQgbmFtZT1cXFwiam9iXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiSm9iIHRpdGxlXFxcIiByZXF1aXJlZCAvPlxcbiAgICAgIDxpbnB1dFxcbiAgICAgICAgY2xhc3M9XFxcImZ1bGxSb3dcXFwiXFxuICAgICAgICBuYW1lPVxcXCJjb3VudHJ5XFxcIlxcbiAgICAgICAgdHlwZT1cXFwidGV4dFxcXCJcXG4gICAgICAgIHBsYWNlaG9sZGVyPVxcXCJDb3VudHJ5XFxcIlxcbiAgICAgICAgcmVxdWlyZWRcXG4gICAgICAvPlxcbiAgICAgIDx0ZXh0YXJlYVxcbiAgICAgICAgY2xhc3M9XFxcImZ1bGxSb3dcXFwiXFxuICAgICAgICBuYW1lPVxcXCJob3dIZWxwXFxcIlxcbiAgICAgICAgaWQ9XFxcIlxcXCJcXG4gICAgICAgIGNvbHM9XFxcIjMwXFxcIlxcbiAgICAgICAgcm93cz1cXFwiMTBcXFwiXFxuICAgICAgICBwbGFjZWhvbGRlcj1cXFwiSG93IGNhbiB3ZSBoZWxwP1xcXCJcXG4gICAgICAgIHJlcXVpcmVkXFxuICAgICAgPjwvdGV4dGFyZWE+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZnVsbFJvd1xcXCI+XFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJidWRnZXRcXFwiPkNhbXBhaWduIGJ1ZGdldCAoVVNEKTwvbGFiZWw+XFxuICAgICAgICA8c2VsZWN0IG5hbWU9XFxcImJ1ZGdldFxcXCIgaWQ9XFxcImJ1ZGdldFxcXCIgcmVxdWlyZWQ+XFxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIjBcXFwiPkxlc3MgdGhhbiAkMTAsMDAwPC9vcHRpb24+XFxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIjFcXFwiPiQxMCwwMDEgLSAkMjUsMDAwPC9vcHRpb24+XFxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIjJcXFwiPiQyNSwwMDEgLSAkNTAsMDAwPC9vcHRpb24+XFxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcIjNcXFwiPiQ1MCwwMDEgLSAkMTAwLDAwMDwvb3B0aW9uPlxcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCI0XFxcIj5Nb3JlIHRoYW4gJDEwMCwwMDA8L29wdGlvbj5cXG4gICAgICAgIDwvc2VsZWN0PlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImZ1bGxSb3dcXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCI+U3VibWl0PC9idXR0b24+XFxuICAgIDwvZm9ybT5cXG4gICAgPGRpdiBpZD1cXFwic3VibWl0dGVkXFxcIj5cXG4gICAgICBUaGFuayB5b3UgZm9yIHlvdXIgZW5xdWlyeS4gT25lIG9mIG91ciBjdXN0b21lciByZXByZXNlbnRhdGl2ZXMgd2lsbCByZWFjaFxcbiAgICAgIG91dCB0byB5b3Ugc2hvcnRseS5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L3NlY3Rpb24+XFxuXCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGZvb3Rlcj5Db3B5cmlnaHQgTWloYWlsIHRoZSBCdWlsZGVyPC9mb290ZXI+XFxuXCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGhlYWRlcj5cXG4gIDxuYXY+XFxuICAgIDxkaXYgaWQ9XFxcIm5hdi1sb2dvLXdyYXBwZXJcXFwiPlxcbiAgICAgIDxzcGFuPlRlY2ggTmV3czwvc3Bhbj5cXG4gICAgICA8c3BhbiBpZD1cXFwibmF2LWxvZ28tcmVkXFxcIj5Bc2lhPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICAgPHVsIGlkPVxcXCJyaWdodC1uYXYtd3JhcHBlclxcXCI+XFxuICAgICAgPGxpPkhvbWU8L2xpPlxcbiAgICAgIDxsaT5Db250YWN0PC9saT5cXG4gICAgPC91bD5cXG4gICAgPGRpdiBpZD1cXFwiZHJvcGRvd24tYnV0dG9uLXdyYXBwZXJcXFwiPjwvZGl2PlxcbiAgPC9uYXY+XFxuPC9oZWFkZXI+XFxuXCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGFzaWRlPlxcbiAgPHVsPlxcbiAgICA8bGkgY2xhc3M9XFxcImhpZGRlbi1uYXYgYXJ0aWNsZS1saW5rXFxcIiBsaW5rVG89XFxcImNoaW5hXFxcIj5Ib21lPC9saT5cXG4gICAgPGxpIGlkPVxcXCJjb250YWN0LWxpbmtcXFwiIGNsYXNzPVxcXCJoaWRkZW4tbmF2XFxcIj5Db250YWN0PC9saT5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaGlkZGVuLW5hdlxcXCI+LS0tLS08L2Rpdj5cXG4gICAgPGxpIGNsYXNzPVxcXCJhcnRpY2xlLWxpbmtcXFwiIGxpbmtUbz1cXFwiY2hpbmFcXFwiPkNoaW5hPC9saT5cXG4gICAgPGxpIGNsYXNzPVxcXCJhcnRpY2xlLWxpbmtcXFwiIGxpbmtUbz1cXFwiaW5kaWFcXFwiPkluZGlhPC9saT5cXG4gICAgPGxpIGNsYXNzPVxcXCJhcnRpY2xlLWxpbmtcXFwiIGxpbmtUbz1cXFwic2luZ2Fwb3JlXFxcIj5TaW5nYXBvcmU8L2xpPlxcbiAgICA8bGkgY2xhc3M9XFxcImFydGljbGUtbGlua1xcXCIgbGlua1RvPVxcXCJtYWxheXNpYVxcXCI+TWFsYXlzaWE8L2xpPlxcbiAgICA8bGkgY2xhc3M9XFxcImFydGljbGUtbGlua1xcXCIgbGlua1RvPVxcXCJwaGlsaXBwaW5lc1xcXCI+UGhpbGlwcGluZXM8L2xpPlxcbiAgICA8bGkgY2xhc3M9XFxcImFydGljbGUtbGlua1xcXCIgbGlua1RvPVxcXCJpbmRvbmVzaWFcXFwiPkluZG9uZXNpYTwvbGk+XFxuICAgIDxsaSBjbGFzcz1cXFwiYXJ0aWNsZS1saW5rXFxcIiBsaW5rVG89XFxcInZpZXRuYW1cXFwiPlZpZXRuYW08L2xpPlxcbiAgICA8bGkgY2xhc3M9XFxcImFydGljbGUtbGlua1xcXCIgbGlua1RvPVxcXCJ0aGFpbGFuZFxcXCI+VGhhaWxhbmQ8L2xpPlxcbiAgPC91bD5cXG48L2FzaWRlPlxcblwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIGlmIChvcHRpb25zLm1heWJlTmVlZFF1b3RlcyAmJiAvW1xcdFxcblxcZlxcciBcIic9PD5gXS8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwsIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsImV4cG9ydCBkZWZhdWx0IFwiPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJDYXBhXzFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIlxcclxcblxcdCB2aWV3Qm94PVxcXCIwIDAgNDQ3IDQ0N1xcXCIgc3R5bGU9XFxcImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDQ3IDQ0NztcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiPlxcclxcbjxnPlxcclxcblxcdDxwYXRoIGQ9XFxcIk00NDcsMzAzLjVjMC0xNy4zNjktMTQuMTMxLTMxLjUtMzEuNS0zMS41SDQwN3YtMjAuOTMxYzQuMjgtMi40MTEsOC44NDUtNC4wNjksMTYuNS00LjA2OWM0LjE0MiwwLDcuNS0zLjM1OCw3LjUtNy41XFxyXFxuXFx0XFx0cy0zLjM1OC03LjUtNy41LTcuNWMtNi44MjEsMC0xMi4xMDcsMS4wNTYtMTYuNSwyLjYxMXYtMTIuODQ2YzkuMjktMy4xMzgsMTYtMTEuOTMsMTYtMjIuMjY2di04Ljk5OFxcclxcblxcdFxcdGMwLTE2LjU1OS00LjMzOC0zMi41My0xMi41NDQtNDYuMTg1Yy0xNi4xMzgtMjYuODUyLTM5Ljg1Ni00My40NDQtNTYuOTEyLTUyLjYzNUMzMTkuNDU1LDczLjMxNCwyNzUuNzAyLDY0LDIyMy41LDY0XFxyXFxuXFx0XFx0Yy01Mi4yMDEsMC05NS45NTQsOS4zMTQtMTMwLjA0MywyNy42ODNjLTMwLjkwMSwxNi42NTEtNDguMDA1LDM3LjgxMy01Ni45MTIsNTIuNjM1QzI4LjMzOCwxNTcuOTczLDI0LDE3My45NDMsMjQsMTkwLjUwMnY4Ljk5OFxcclxcblxcdFxcdGMwLDEwLjMzNiw2LjcxLDE5LjEyOCwxNiwyMi4yNjZ2MTIuODUyQzM1LjYwOSwyMzMuMDU5LDMwLjMyMywyMzIsMjMuNSwyMzJjLTQuMTQyLDAtNy41LDMuMzU4LTcuNSw3LjVzMy4zNTgsNy41LDcuNSw3LjVcXHJcXG5cXHRcXHRjNy42NTgsMCwxMi4yMTksMS42NjUsMTYuNSw0LjA4M1YyNzJoLTguNUMxNC4xMzEsMjcyLDAsMjg2LjEzMSwwLDMwMy41YzAsMTQuNzg0LDEwLjI0MSwyNy4yMTYsMjQsMzAuNTl2OS40MVxcclxcblxcdFxcdGMwLDIxLjc4LDE3LjcyLDM5LjUsMzkuNSwzOS41aDMyMGMyMS43OCwwLDM5LjUtMTcuNzIsMzkuNS0zOS41di05LjQxQzQzNi43NiwzMzAuNzE2LDQ0NywzMTguMjg1LDQ0NywzMDMuNXogTTM5MiwyMjN2MTkuNzJcXHJcXG5cXHRcXHRjLTQuOTQxLDMuMDQ5LTkuNjY1LDUuMjgtMTguNTQ0LDUuMjhjLTEwLjMxOCwwLTE1LjAyNC0zLjAwOS0yMC45ODItNi44MTljLTYuNzMtNC4zMDMtMTQuMzU5LTkuMTgxLTI5LjA2My05LjE4MVxcclxcblxcdFxcdGMtMTQuNjk3LDAtMjIuMzIxLDQuODc4LTI5LjA0OCw5LjE4M2MtNS45NTMsMy44MDktMTAuNjU0LDYuODE3LTIwLjk2Miw2LjgxN2MtMTAuMjk2LDAtMTQuOTkzLTMuMDA4LTIwLjkzOC02LjgxNlxcclxcblxcdFxcdGMtNi43MjItNC4zMDUtMTQuMzQxLTkuMTg0LTI5LjAyOC05LjE4NGMtMTQuNjkzLDAtMjIuMzE1LDQuODc5LTI5LjA0LDkuMTgzYy01Ljk1LDMuODA5LTEwLjY1LDYuODE3LTIwLjk1NCw2LjgxN1xcclxcblxcdFxcdGMtMTAuMywwLTE0Ljk5OC0zLjAwOC0yMC45NDYtNi44MTZDMTQ1Ljc3MSwyMzYuODc5LDEzOC4xNSwyMzIsMTIzLjQ2LDIzMmMtMTQuNjksMC0yMi4zMTEsNC44NzktMjkuMDM0LDkuMTg0XFxyXFxuXFx0XFx0Qzg4LjQ3OCwyNDQuOTkyLDgzLjc4LDI0OCw3My40OCwyNDhjLTguODQ0LDAtMTMuNTU4LTIuMjItMTguNDgtNS4yNTlWMjIzSDM5MnogTTM5LDE5MC41MDJjMC0xMy44MzcsMy41OTctMjcuMTM2LDEwLjQwMS0zOC40NThcXHJcXG5cXHRcXHRjNy45NC0xMy4yMTIsMjMuMjY0LTMyLjExOSw1MS4xNzEtNDcuMTU2QzEzMi40NTEsODcuNzEsMTczLjgxLDc5LDIyMy41LDc5czkxLjA1LDguNzEsMTIyLjkyOCwyNS44ODhcXHJcXG5cXHRcXHRjMjcuOTA3LDE1LjAzOCw0My4yMywzMy45NDQsNTEuMTcxLDQ3LjE1NkM0MDQuNDA0LDE2My4zNjYsNDA4LDE3Ni42NjUsNDA4LDE5MC41MDJ2OC45OThjMCw0LjY4Ny0zLjgxMyw4LjUtOC41LDguNWgtMzUyXFxyXFxuXFx0XFx0Yy00LjY4NywwLTguNS0zLjgxMy04LjUtOC41VjE5MC41MDJ6IE01NSwyNTkuNjI0QzU5Ljc2NCwyNjEuNTksNjUuNiwyNjMsNzMuNDgsMjYzYzE0LjY5LDAsMjIuMzExLTQuODc5LDI5LjAzNC05LjE4NFxcclxcblxcdFxcdGM1Ljk0OC0zLjgwOSwxMC42NDYtNi44MTYsMjAuOTQ2LTYuODE2YzEwLjMsMCwxNC45OTksMy4wMDgsMjAuOTQ3LDYuODE2YzYuNzI0LDQuMzA1LDE0LjM0NCw5LjE4NCwyOS4wMzQsOS4xODRcXHJcXG5cXHRcXHRjMTQuNjkzLDAsMjIuMzE1LTQuODc5LDI5LjA0MS05LjE4M2M1Ljk1LTMuODA5LDEwLjY0OS02LjgxNywyMC45NTMtNi44MTdjMTAuMjk2LDAsMTQuOTkzLDMuMDA4LDIwLjkzOCw2LjgxNlxcclxcblxcdFxcdGM2LjcyMiw0LjMwNSwxNC4zNDEsOS4xODQsMjkuMDI4LDkuMTg0YzE0LjY5NiwwLDIyLjMyMS00Ljg3OCwyOS4wNDctOS4xODNjNS45NTMtMy44MDksMTAuNjU0LTYuODE3LDIwLjk2My02LjgxN1xcclxcblxcdFxcdGMxMC4zMTgsMCwxNS4wMjQsMy4wMDksMjAuOTgxLDYuODE4YzYuNzMsNC4zMDQsMTQuMzU5LDkuMTgyLDI5LjA2Myw5LjE4MmM3LjkxMywwLDEzLjc2Ny0xLjQxOCwxOC41NDQtMy4zOTRWMjcySDU1VjI1OS42MjR6XFxyXFxuXFx0XFx0IE0zODMuNSwzNjhoLTMyMEM0OS45OTEsMzY4LDM5LDM1Ny4wMSwzOSwzNDMuNVYzMzVoMzY5djguNUM0MDgsMzU3LjAxLDM5Ny4wMSwzNjgsMzgzLjUsMzY4eiBNNDE1LjUsMzIwSDI5MC4zMTlcXHJcXG5cXHRcXHRjMi45NjUtNC44MDIsNC42ODEtMTAuNDU0LDQuNjgxLTE2LjVjMC00LjE0Mi0zLjM1OC03LjUtNy41LTcuNXMtNy41LDMuMzU4LTcuNSw3LjVjMCw5LjA5OC03LjQwMiwxNi41LTE2LjUsMTYuNWgtMjMyXFxyXFxuXFx0XFx0Yy05LjA5OCwwLTE2LjUtNy40MDItMTYuNS0xNi41UzIyLjQwMiwyODcsMzEuNSwyODdoMTM2YzkuMDk4LDAsMTYuNSw3LjQwMiwxNi41LDE2LjVjMCw0LjE0MiwzLjM1OCw3LjUsNy41LDcuNVxcclxcblxcdFxcdHM3LjUtMy4zNTgsNy41LTcuNWMwLTYuMDQ2LTEuNzE2LTExLjY5OC00LjY4MS0xNi41SDQxNS41YzkuMDk4LDAsMTYuNSw3LjQwMiwxNi41LDE2LjVDNDMyLDMxMi41OTgsNDI0LjU5OSwzMjAsNDE1LjUsMzIwelxcXCIvPlxcclxcblxcdDxwYXRoIGQ9XFxcIk0xOTEuNSwxNjdjMS45MTksMCwzLjgzOS0wLjczMiw1LjMwMy0yLjE5N2w4LThjMi45MjktMi45MjksMi45MjktNy42NzgsMC0xMC42MDZjLTIuOTI5LTIuOTI5LTcuNjc4LTIuOTI5LTEwLjYwNiwwbC04LDhcXHJcXG5cXHRcXHRjLTIuOTI5LDIuOTI5LTIuOTI5LDcuNjc4LDAsMTAuNjA2QzE4Ny42NjEsMTY2LjI2OCwxODkuNTgxLDE2NywxOTEuNSwxNjd6XFxcIi8+XFxyXFxuXFx0PHBhdGggZD1cXFwiTTI2Ni4xOTcsMTU2LjgwM2MxLjQ2NCwxLjQ2NCwzLjM4NCwyLjE5Nyw1LjMwMywyLjE5N3MzLjgzOS0wLjczMiw1LjMwMy0yLjE5N2MyLjkyOS0yLjkyOSwyLjkyOS03LjY3OCwwLTEwLjYwNmwtOC04XFxyXFxuXFx0XFx0Yy0yLjkyOS0yLjkyOS03LjY3OC0yLjkyOS0xMC42MDYsMGMtMi45MjksMi45MjktMi45MjksNy42NzgsMCwxMC42MDZMMjY2LjE5NywxNTYuODAzelxcXCIvPlxcclxcblxcdDxwYXRoIGQ9XFxcIk0xMDMuNSwxNzVjMS45MTksMCwzLjgzOS0wLjczMiw1LjMwMy0yLjE5N2w4LThjMi45MjktMi45MjksMi45MjktNy42NzgsMC0xMC42MDZjLTIuOTI5LTIuOTI5LTcuNjc4LTIuOTI5LTEwLjYwNiwwbC04LDhcXHJcXG5cXHRcXHRjLTIuOTI5LDIuOTI5LTIuOTI5LDcuNjc4LDAsMTAuNjA2Qzk5LjY2MSwxNzQuMjY4LDEwMS41ODEsMTc1LDEwMy41LDE3NXpcXFwiLz5cXHJcXG5cXHQ8cGF0aCBkPVxcXCJNMTUxLjUsMTM1YzQuMTQyLDAsNy41LTMuMzU4LDcuNS03LjV2LThjMC00LjE0Mi0zLjM1OC03LjUtNy41LTcuNXMtNy41LDMuMzU4LTcuNSw3LjV2OFxcclxcblxcdFxcdEMxNDQsMTMxLjY0MiwxNDcuMzU4LDEzNSwxNTEuNSwxMzV6XFxcIi8+XFxyXFxuXFx0PHBhdGggZD1cXFwiTTIzOS41LDE5MWg4YzQuMTQyLDAsNy41LTMuMzU4LDcuNS03LjVzLTMuMzU4LTcuNS03LjUtNy41aC04Yy00LjE0MiwwLTcuNSwzLjM1OC03LjUsNy41UzIzNS4zNTgsMTkxLDIzOS41LDE5MXpcXFwiLz5cXHJcXG5cXHQ8cGF0aCBkPVxcXCJNMzExLjUsMTgzYzEuOTE5LDAsMy44MzktMC43MzIsNS4zMDMtMi4xOTdsOC04YzIuOTI5LTIuOTI5LDIuOTI5LTcuNjc4LDAtMTAuNjA2Yy0yLjkyOS0yLjkyOS03LjY3OC0yLjkyOS0xMC42MDYsMGwtOCw4XFxyXFxuXFx0XFx0Yy0yLjkyOSwyLjkyOS0yLjkyOSw3LjY3OCwwLDEwLjYwNkMzMDcuNjYyLDE4Mi4yNjgsMzA5LjU4MSwxODMsMzExLjUsMTgzelxcXCIvPlxcclxcblxcdDxwYXRoIGQ9XFxcIk0yMTguMTk3LDExNi44MDNjMS40NjQsMS40NjQsMy4zODQsMi4xOTcsNS4zMDMsMi4xOTdzMy44MzktMC43MzIsNS4zMDMtMi4xOTdjMi45MjktMi45MjksMi45MjktNy42NzgsMC0xMC42MDZsLTgtOFxcclxcblxcdFxcdGMtMi45MjktMi45MjktNy42NzgtMi45MjktMTAuNjA2LDBjLTIuOTI5LDIuOTI5LTIuOTI5LDcuNjc4LDAsMTAuNjA2TDIxOC4xOTcsMTE2LjgwM3pcXFwiLz5cXHJcXG5cXHQ8cGF0aCBkPVxcXCJNMTU0LjE5NywxODguODAzYzEuNDY0LDEuNDY0LDMuMzg0LDIuMTk3LDUuMzAzLDIuMTk3czMuODM5LTAuNzMyLDUuMzAzLTIuMTk3YzIuOTI5LTIuOTI5LDIuOTI5LTcuNjc4LDAtMTAuNjA2bC04LThcXHJcXG5cXHRcXHRjLTIuOTI5LTIuOTI5LTcuNjc4LTIuOTI5LTEwLjYwNiwwYy0yLjkyOSwyLjkyOS0yLjkyOSw3LjY3OCwwLDEwLjYwNkwxNTQuMTk3LDE4OC44MDN6XFxcIi8+XFxyXFxuXFx0PHBhdGggZD1cXFwiTTI3OC4xNywxMTUuNDkyYzUuMzExLDAuOTU4LDEwLjUxLDIuMDgzLDE1LjQ1MywzLjM0NGMwLjYyMiwwLjE1OCwxLjI0NSwwLjIzNCwxLjg1OSwwLjIzNFxcclxcblxcdFxcdGMzLjM0NywwLDYuMzk3LTIuMjU3LDcuMjYyLTUuNjQ4YzEuMDIzLTQuMDE0LTEuNC04LjA5Ny01LjQxNC05LjEyMWMtNS4yODctMS4zNDgtMTAuODM3LTIuNTQ5LTE2LjQ5Ni0zLjU3MVxcclxcblxcdFxcdGMtNC4wNzUtMC43MzItNy45NzgsMS45NzMtOC43MTMsNi4wNDlDMjcxLjM4NiwxMTAuODU1LDI3NC4wOTQsMTE0Ljc1NiwyNzguMTcsMTE1LjQ5MnpcXFwiLz5cXHJcXG5cXHQ8cGF0aCBkPVxcXCJNMzI0LjI5OSwxMjkuNjQ3YzI1LjkxOCwxMi4xNzUsMzkuMjUxLDI3Ljg2Myw0NS44NzIsMzguODhjMi44NDksNC43NCw0LjY3OSwxMC4xMDQsNS40NDEsMTUuOTQyXFxyXFxuXFx0XFx0YzAuNDkzLDMuNzc4LDMuNzE3LDYuNTMxLDcuNDI4LDYuNTMxYzAuMzIzLDAsMC42NS0wLjAyMSwwLjk3OS0wLjA2NGM0LjEwNy0wLjUzNiw3LjAwMi00LjMsNi40NjctOC40MDdcXHJcXG5cXHRcXHRjLTEuMDMtNy44OTctMy41NC0xNS4yMDgtNy40NTgtMjEuNzI5Yy03LjY5My0xMi44MDEtMjMuMDIxLTMwLjk1My01Mi4zNTEtNDQuNzMxYy0zLjc1LTEuNzU5LTguMjE1LTAuMTQ5LTkuOTc3LDMuNlxcclxcblxcdFxcdEMzMTguOTM5LDEyMy40MTksMzIwLjU1LDEyNy44ODYsMzI0LjI5OSwxMjkuNjQ3elxcXCIvPlxcclxcbjwvZz5cXHJcXG48Zz5cXHJcXG48L2c+XFxyXFxuPGc+XFxyXFxuPC9nPlxcclxcbjxnPlxcclxcbjwvZz5cXHJcXG48Zz5cXHJcXG48L2c+XFxyXFxuPGc+XFxyXFxuPC9nPlxcclxcbjxnPlxcclxcbjwvZz5cXHJcXG48Zz5cXHJcXG48L2c+XFxyXFxuPGc+XFxyXFxuPC9nPlxcclxcbjxnPlxcclxcbjwvZz5cXHJcXG48Zz5cXHJcXG48L2c+XFxyXFxuPGc+XFxyXFxuPC9nPlxcclxcbjxnPlxcclxcbjwvZz5cXHJcXG48Zz5cXHJcXG48L2c+XFxyXFxuPGc+XFxyXFxuPC9nPlxcclxcbjxnPlxcclxcbjwvZz5cXHJcXG48L3N2Zz5cXHJcXG5cIjsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzBdLnVzZVszXSEuL2FydGljbGVzLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzBdLnVzZVszXSEuL2NvbnRhY3Quc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1yZXNvdXJjZXMtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMF0udXNlWzNdIS4vZm9vdGVyLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzBdLnVzZVszXSEuL25hdmJhci5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLXJlc291cmNlcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1swXS51c2VbM10hLi9zaWRlYmFyLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtcmVzb3VyY2VzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzBdLnVzZVszXSEuL2luZGV4LnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCB7IHNpZGViYXJMb2FkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmpzXCI7XG5pbXBvcnQgeyBhcnRpY2xlTG9hZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2FydGljbGVzL2FydGljbGVzLmpzXCI7XG5cbmNvbnN0IGNsaWNrU3R5bGUgPSAoZWxlbWVudCwgc3R5bGUpID0+IHtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHN0eWxlKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoc3R5bGUpO1xuICB9LCAyMDApO1xufTtcblxuY29uc3QgbW92ZVRvcCA9ICgpID0+IHtcbiAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xufTtcblxuY29uc3QgaG9tZXBhZ2VMb2FkID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICBzaWRlYmFyTG9hZCgpO1xuICBhcnRpY2xlTG9hZCgpO1xufTtcblxuZXhwb3J0IHsgY2xpY2tTdHlsZSwgaG9tZXBhZ2VMb2FkLCBtb3ZlVG9wIH07XG4iLCJpbXBvcnQgXCIuL2FydGljbGVzLnNjc3NcIjtcbmltcG9ydCBodG1sIGZyb20gXCIuL2FydGljbGVzLmh0bWxcIjtcblxuaW1wb3J0IHsgbW92ZVRvcCB9IGZyb20gXCIuLi8uLi9jb21tb24vY29tbW9uLmpzXCI7XG5cbmNvbnN0IGFydGljbGVMb2FkID0gKGFydGljbGVJZCA9IFwiY2hpbmFcIikgPT4ge1xuICBsZXQgcHJldlNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpbj5zZWN0aW9uXCIpO1xuICBpZiAocHJldlNlY3Rpb24pIHtcbiAgICBwcmV2U2VjdGlvbi5yZW1vdmUoKTtcbiAgfVxuXG4gIGxldCBkb2MgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGh0bWwsIFwidGV4dC9odG1sXCIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKS5hcHBlbmRDaGlsZChkb2MuZ2V0RWxlbWVudEJ5SWQoYXJ0aWNsZUlkKSk7XG4gIG1vdmVUb3AoKTtcbn07XG5cbmV4cG9ydCB7IGFydGljbGVMb2FkIH07XG4iLCJpbXBvcnQgaHRtbCBmcm9tIFwiLi9jb250YWN0Lmh0bWxcIjtcbmltcG9ydCBcIi4vY29udGFjdC5zY3NzXCI7XG5cbmltcG9ydCB7IG1vdmVUb3AgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xuXG5jb25zdCBjb250YWN0TG9hZCA9ICgpID0+IHtcbiAgbGV0IG5ld0h0bWwgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKGh0bWwsIFwidGV4dC9odG1sXCIpO1xuXG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpXG4gICAgLnJlcGxhY2VDaGlsZChcbiAgICAgIG5ld0h0bWwuZG9jdW1lbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWN0aW9uXCIpLFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlY3Rpb25cIilcbiAgICApO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYXNpZGVcIilbMF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZm9ybVwiKVswXVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGV2ZW50LnRhcmdldC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGxldCBzdWJtaXR0ZWRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXR0ZWRcIik7XG4gICAgICAgIHN1Ym1pdHRlZEVsZW0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzdWJtaXR0ZWRFbGVtLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICAgICAgICB9LCAxMDApO1xuICAgICAgfSwgNTAwKTtcbiAgICB9KTtcblxuICBtb3ZlVG9wKCk7XG59O1xuXG5leHBvcnQgeyBjb250YWN0TG9hZCB9O1xuIiwiaW1wb3J0IGh0bWwgZnJvbSBcIi4vZm9vdGVyLmh0bWxcIjtcbmltcG9ydCBcIi4vZm9vdGVyLnNjc3NcIjtcblxuY29uc3QgZm9vdGVyTG9hZCA9ICgpID0+IHtcbiAgbGV0IGRvYyA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoaHRtbCwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoXG4gICAgZG9jLmRvY3VtZW50RWxlbWVudCxcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2NyaXB0XCIpXG4gICk7XG59O1xuXG5leHBvcnQgeyBmb290ZXJMb2FkIH07XG4iLCJpbXBvcnQgXCIuL25hdmJhci5zY3NzXCI7XG5pbXBvcnQgaHRtbCBmcm9tIFwiLi9uYXZiYXIuaHRtbFwiO1xuaW1wb3J0IHN2ZyBmcm9tIFwiLi9oYW1idXJnZXIuc3ZnXCI7XG5cbmltcG9ydCB7IGNsaWNrU3R5bGUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xuaW1wb3J0IHsgaG9tZXBhZ2VMb2FkIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21tb24uanNcIjtcblxuaW1wb3J0IHsgY29udGFjdExvYWQgfSBmcm9tIFwiLi4vY29udGFjdC9jb250YWN0LmpzXCI7XG5pbXBvcnQgeyBzaWRlYmFyTW9iaWxlU2hvdyB9IGZyb20gXCIuLi9zaWRlYmFyL3NpZGViYXIuanNcIjtcblxuY29uc3QgbmF2YmFyTG9hZCA9ICgpID0+IHtcbiAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGh0bWwpO1xuXG4gIGxldCBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJuYXYgbGlcIik7XG5cbiAgbmF2TGlua3MuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgIGxldCBjbGlja2VkRWxlbSA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGNsaWNrU3R5bGUoY2xpY2tlZEVsZW0sIFwibmF2LWxpLWNsaWNrZWRcIik7XG5cbiAgICAgIGluZGV4ID09IDAgPyBob21lcGFnZUxvYWQoKSA6IGNvbnRhY3RMb2FkKCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGxldCBkcm9wZG93bkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcGRvd24tYnV0dG9uLXdyYXBwZXJcIik7XG4gIGRyb3Bkb3duQnV0dG9uLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgc3ZnKTtcblxuICBkcm9wZG93bkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgZHJvcGRvd25CdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcIm5hdi1zZWxlY3RlZFwiKTtcbiAgICBzaWRlYmFyTW9iaWxlU2hvdygpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IG5hdmJhckxvYWQgfTtcbiIsImltcG9ydCBcIi4vc2lkZWJhci5zY3NzXCI7XG5pbXBvcnQgaHRtbCBmcm9tIFwiLi9zaWRlYmFyLmh0bWxcIjtcbmltcG9ydCB7IGNsaWNrU3R5bGUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbW1vbi5qc1wiO1xuaW1wb3J0IHsgYXJ0aWNsZUxvYWQgfSBmcm9tIFwiLi4vYXJ0aWNsZXMvYXJ0aWNsZXNcIjtcbmltcG9ydCB7IGNvbnRhY3RMb2FkIH0gZnJvbSBcIi4uL2NvbnRhY3QvY29udGFjdC5qc1wiO1xuXG5jb25zdCBzaWRlYmFyTG9hZCA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBodG1sKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYXNpZGUgbGlcIikuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgbGV0IGNsaWNrZWRFbGVtID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgICBjbGlja1N0eWxlKGNsaWNrZWRFbGVtLCBcInNpZGUtZGl2LWNsaWNrZWRcIik7XG5cbiAgICAgIGlmIChjbGlja2VkRWxlbS5oYXNBdHRyaWJ1dGUoXCJpZFwiKSkge1xuICAgICAgICBjb250YWN0TG9hZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJ0aWNsZUxvYWQoY2xpY2tlZEVsZW0uZ2V0QXR0cmlidXRlKFwibGlua1RvXCIpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNjcmVlbi53aWR0aCA8PSA3NjgpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhc2lkZVwiKVswXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9XG5cbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZChcImRyb3Bkb3duLWJ1dHRvbi13cmFwcGVyXCIpXG4gICAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwibmF2LXNlbGVjdGVkXCIpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHNpZGViYXJNb2JpbGVTaG93ID0gKCkgPT4ge1xuICBsZXQgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYXNpZGVcIilbMF07XG5cbiAgaWYgKFxuICAgIGRvY3VtZW50XG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJkcm9wZG93bi1idXR0b24td3JhcHBlclwiKVxuICAgICAgLmNsYXNzTGlzdC5jb250YWlucyhcIm5hdi1zZWxlY3RlZFwiKVxuICApIHtcbiAgICBzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH0gZWxzZSB7XG4gICAgc2lkZWJhci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cbn07XG5cbmV4cG9ydCB7IHNpZGViYXJMb2FkLCBzaWRlYmFyTW9iaWxlU2hvdyB9O1xuIiwiaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XG5cbmltcG9ydCB7IG5hdmJhckxvYWQgfSBmcm9tIFwiLi9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuanNcIjtcbmltcG9ydCB7IGhvbWVwYWdlTG9hZCB9IGZyb20gXCIuL2NvbW1vbi9jb21tb24uanNcIjtcbmltcG9ydCB7IGZvb3RlckxvYWQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanNcIjtcblxubmF2YmFyTG9hZCgpO1xuaG9tZXBhZ2VMb2FkKCk7XG5mb290ZXJMb2FkKCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==