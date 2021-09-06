/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles.scss?");

/***/ }),

/***/ "./src/Bump.ts":
/*!*********************!*\
  !*** ./src/Bump.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Bump\": () => (/* binding */ Bump)\n/* harmony export */ });\nfunction Bump(weight, HZ, rate) {\r\n    let damp = ((2 * weight * HZ) / 1000) * 2;\r\n    return damp * rate;\r\n}\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/Bump.ts?");

/***/ }),

/***/ "./src/SpringRate.ts":
/*!***************************!*\
  !*** ./src/SpringRate.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SpringRate\": () => (/* binding */ SpringRate)\n/* harmony export */ });\nfunction SpringRate(weight, HZ) {\r\n    let rate = (4 * Math.pow(Math.PI, 2));\r\n    rate *= (Math.pow(HZ, 2));\r\n    rate *= weight;\r\n    rate *= 0.0057101471627692; // Convert to N/m to lbs/in\r\n    return rate;\r\n}\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/SpringRate.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n/* harmony import */ var _Bump__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bump */ \"./src/Bump.ts\");\n/* harmony import */ var _SpringRate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpringRate */ \"./src/SpringRate.ts\");\n\r\n\r\n\r\n// class vehicle\r\n// {\r\n//     mass: number;\r\n//     distribution: number;\r\n//     front: number;\r\n//     rear: number;\r\n//     constructor(mass: number, distribution: number) \r\n//     {\r\n//         this.mass = mass * 0.453592370010035 // convert lbs to kg\r\n//         this.distribution = distribution\r\n//         this.front = this.mass * (distribution/100);\r\n//         this.rear = this.mass - this.front;\r\n//     }\r\n// }\r\n// let mass: number = Number((document.getElementById('mass') as HTMLInputElement).value) * 0.453592370010035\r\n// let dist: number = Number((document.getElementById('dist') as HTMLInputElement).value)\r\n// let front: number = mass * dist/100\r\n// let rear: number = mass - front\r\n// let fronthz: number = Number((document.getElementById('fronthz') as HTMLInputElement).value)\r\n// let rearhz: number = Number((document.getElementById('rearhz') as HTMLInputElement).value)\r\n// let frontSpringRate = SpringRate(front, fronthz)\r\n// let rearSpringRate = SpringRate(rear, rearhz)\r\n// let frontBump = Bump(front, fronthz)\r\n// let rearBump = Bump(rear, rearhz)\r\n// document.getElementById('frontspring').innerHTML = String(frontSpringRate)\r\n// document.getElementById('rearspring').innerHTML = String(rearSpringRate)\r\n// document.getElementById('frontbump').innerHTML = String(frontBump)\r\n// document.getElementById('rearbump').innerHTML = String(rearBump)\r\nfunction update() {\r\n    let mass = Number(document.getElementById('mass').value) * 0.453592370010035;\r\n    let pounds = Number(document.getElementById('mass').value);\r\n    let dist = Number(document.getElementById('dist').value);\r\n    let front = mass * dist / 100;\r\n    let rear = mass - front;\r\n    let fronthz = Number(document.getElementById('fronthz').value);\r\n    let rearhz = Number(document.getElementById('rearhz').value);\r\n    let frontSpringRate = (0,_SpringRate__WEBPACK_IMPORTED_MODULE_2__.SpringRate)(front, fronthz);\r\n    let rearSpringRate = (0,_SpringRate__WEBPACK_IMPORTED_MODULE_2__.SpringRate)(rear, rearhz);\r\n    let frontCrit = Number(document.getElementById('frontcrit').value);\r\n    let rearCrit = Number(document.getElementById('rearcrit').value);\r\n    let frontBump = (0,_Bump__WEBPACK_IMPORTED_MODULE_1__.Bump)(front, fronthz, frontCrit);\r\n    let rearBump = (0,_Bump__WEBPACK_IMPORTED_MODULE_1__.Bump)(rear, rearhz, rearCrit);\r\n    let frontRebound = frontBump / 0.45;\r\n    let rearRebound = rearBump / 0.45;\r\n    let arbcoef = Number(document.getElementById('arbcoef').value);\r\n    let arbstiff = ((pounds / 2) / (200 - 200 * arbcoef)) * 2;\r\n    let arbfront = 0;\r\n    let arbrear = 0;\r\n    if (dist > 50) {\r\n        arbfront = arbstiff * (((dist / 100 - 0.5) * 1.5) + 0.5);\r\n        arbrear = arbstiff - arbfront;\r\n    }\r\n    else {\r\n        arbrear = arbstiff * ((((100 - dist) / 100 - 0.5) * 1.5) + 0.5);\r\n        arbfront = arbstiff - arbrear;\r\n    }\r\n    document.getElementById('front').innerHTML = (pounds * (dist / 100)).toFixed(2);\r\n    document.getElementById('rear').innerHTML = (pounds - (pounds * (dist / 100))).toFixed(2);\r\n    document.getElementById('frontspring').innerHTML = frontSpringRate.toFixed(1);\r\n    document.getElementById('rearspring').innerHTML = rearSpringRate.toFixed(1);\r\n    document.getElementById('frontbump').innerHTML = frontBump.toFixed(1);\r\n    document.getElementById('rearbump').innerHTML = rearBump.toFixed(1);\r\n    document.getElementById('frontrebound').innerHTML = frontRebound.toFixed(1);\r\n    document.getElementById('rearrebound').innerHTML = rearRebound.toFixed(1);\r\n    document.getElementById('arbfront').innerHTML = arbfront.toFixed(2);\r\n    document.getElementById('arbrear').innerHTML = arbrear.toFixed(2);\r\n    document.getElementById('arbfrontbar').value = arbfront.toFixed(2);\r\n    document.getElementById('arbrearbar').value = arbrear.toFixed(2);\r\n}\r\ndocument.getElementById('mass').addEventListener(\"change\", update);\r\ndocument.getElementById('dist').addEventListener(\"change\", update);\r\ndocument.getElementById('fronthz').addEventListener(\"change\", update);\r\ndocument.getElementById('rearhz').addEventListener(\"change\", update);\r\ndocument.getElementById('frontcrit').addEventListener(\"change\", update);\r\ndocument.getElementById('rearcrit').addEventListener(\"change\", update);\r\ndocument.getElementById('arbcoef').addEventListener(\"change\", update);\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;