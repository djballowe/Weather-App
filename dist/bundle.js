/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Dom.js":
/*!********************!*\
  !*** ./src/Dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weatherDom": () => (/* binding */ weatherDom)
/* harmony export */ });
/* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeather */ "./src/getWeather.js");
/* eslint-disable import/prefer-default-export */


const description = document.getElementById('description');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const feels = document.getElementById('feels');
const wind = document.getElementById('wind');
const humidity = document.getElementById('humidity');

function weatherDom() {
  description.textContent = _getWeather__WEBPACK_IMPORTED_MODULE_0__.info.description;
  city.textContent = _getWeather__WEBPACK_IMPORTED_MODULE_0__.info.city;
  temp.textContent = _getWeather__WEBPACK_IMPORTED_MODULE_0__.info.temp;
  feels.textContent = _getWeather__WEBPACK_IMPORTED_MODULE_0__.info.feels;
  wind.textContent = _getWeather__WEBPACK_IMPORTED_MODULE_0__.info.wind;
  humidity.textContent = _getWeather__WEBPACK_IMPORTED_MODULE_0__.info.humidity;
  console.log(_getWeather__WEBPACK_IMPORTED_MODULE_0__.info);
}




/***/ }),

/***/ "./src/converter.js":
/*!**************************!*\
  !*** ./src/converter.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "converter": () => (/* binding */ converter)
/* harmony export */ });
function converter() {
  if (button.textContent === 'C') {
    button.textContent = 'F';
    temp.textContent = Math.round((temp.textContent - 32) * (5 / 9));
    feels.textContent = `Feels Like: ${Math.round((feels.textContent - 32) * (5 / 9))}`;
  } else if (button.textContent === 'F') {
    button.textContent = 'C';
    temp.textContent = Math.round(temp.textContent * (9 / 5) + 32);
    feels.textContent = `Feels Like: ${Math.round(((feels.textContent * (9 / 5)) + 32))}`;
  }
}




/***/ }),

/***/ "./src/getWeather.js":
/*!***************************!*\
  !*** ./src/getWeather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeather": () => (/* binding */ getWeather),
/* harmony export */   "info": () => (/* binding */ info)
/* harmony export */ });
// eslint-disable-next-line import/prefer-default-export
const info = [];

class WeatherCreator {
  constructor(description, city, temp, feels, wind, humidity) {
    this.description = description;
    this.city = city;
    this.temp = temp;
    this.feels = feels;
    this.wind = wind;
    this.humidity = humidity;
  }
}

async function getWeather() {
  const response = await fetch(
    'http://api.openweathermap.org/data/2.5/weather?q=san%20francisco&APPID=6d73026f9846ee18797b582be8d69941',
  );
  const weatherData = await response.json();
  info.push(
    new WeatherCreator(
      weatherData.weather[0].description,
      weatherData.name.toUpperCase(),
      Math.round((weatherData.main.temp - 273.15) * (9 / 5) + 32, 10),
      Math.round((weatherData.main.temp - 273.15) * (9 / 5) + 32, 10),
      `Wind: ${weatherData.wind.speed} MPH`,
      `Humidity: ${weatherData.main.humidity}%`,
    ),
  );
}


console.log(info);


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _converter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./converter */ "./src/converter.js");
/* harmony import */ var _Dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dom */ "./src/Dom.js");
/* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWeather */ "./src/getWeather.js");




const button = document.getElementById('converter');

button.addEventListener('click', () => {
  (0,_converter__WEBPACK_IMPORTED_MODULE_0__.converter)();
});

(0,_getWeather__WEBPACK_IMPORTED_MODULE_2__.getWeather)();
(0,_Dom__WEBPACK_IMPORTED_MODULE_1__.weatherDom)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ29DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIseURBQWdCO0FBQzVDLHFCQUFxQixrREFBUztBQUM5QixxQkFBcUIsa0RBQVM7QUFDOUIsc0JBQXNCLG1EQUFVO0FBQ2hDLHFCQUFxQixrREFBUztBQUM5Qix5QkFBeUIsc0RBQWE7QUFDdEMsY0FBYyw2Q0FBSTtBQUNsQjs7QUFFc0I7Ozs7Ozs7Ozs7Ozs7OztBQ3BCdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsK0NBQStDO0FBQ3RGLElBQUk7QUFDSjtBQUNBO0FBQ0EsdUNBQXVDLGlEQUFpRDtBQUN4RjtBQUNBOztBQUVxQjs7Ozs7Ozs7Ozs7Ozs7OztBQ1pyQjtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHdCQUF3QjtBQUN2QyxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7QUFDQTs7QUFFc0I7QUFDdEI7Ozs7Ozs7VUNoQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTndDO0FBQ0w7QUFDTzs7QUFFMUM7O0FBRUE7QUFDQSxFQUFFLHFEQUFTO0FBQ1gsQ0FBQzs7QUFFRCx1REFBVTtBQUNWLGdEQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvRG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbnZlcnRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nZXRXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IHsgaW5mbyB9IGZyb20gJy4vZ2V0V2VhdGhlcic7XG5cbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJyk7XG5jb25zdCBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHknKTtcbmNvbnN0IHRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcCcpO1xuY29uc3QgZmVlbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlbHMnKTtcbmNvbnN0IHdpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZCcpO1xuY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtaWRpdHknKTtcblxuZnVuY3Rpb24gd2VhdGhlckRvbSgpIHtcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpbmZvLmRlc2NyaXB0aW9uO1xuICBjaXR5LnRleHRDb250ZW50ID0gaW5mby5jaXR5O1xuICB0ZW1wLnRleHRDb250ZW50ID0gaW5mby50ZW1wO1xuICBmZWVscy50ZXh0Q29udGVudCA9IGluZm8uZmVlbHM7XG4gIHdpbmQudGV4dENvbnRlbnQgPSBpbmZvLndpbmQ7XG4gIGh1bWlkaXR5LnRleHRDb250ZW50ID0gaW5mby5odW1pZGl0eTtcbiAgY29uc29sZS5sb2coaW5mbyk7XG59XG5cbmV4cG9ydCB7IHdlYXRoZXJEb20gfTtcbiIsImZ1bmN0aW9uIGNvbnZlcnRlcigpIHtcbiAgaWYgKGJ1dHRvbi50ZXh0Q29udGVudCA9PT0gJ0MnKSB7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0YnO1xuICAgIHRlbXAudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKCh0ZW1wLnRleHRDb250ZW50IC0gMzIpICogKDUgLyA5KSk7XG4gICAgZmVlbHMudGV4dENvbnRlbnQgPSBgRmVlbHMgTGlrZTogJHtNYXRoLnJvdW5kKChmZWVscy50ZXh0Q29udGVudCAtIDMyKSAqICg1IC8gOSkpfWA7XG4gIH0gZWxzZSBpZiAoYnV0dG9uLnRleHRDb250ZW50ID09PSAnRicpIHtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQyc7XG4gICAgdGVtcC50ZXh0Q29udGVudCA9IE1hdGgucm91bmQodGVtcC50ZXh0Q29udGVudCAqICg5IC8gNSkgKyAzMik7XG4gICAgZmVlbHMudGV4dENvbnRlbnQgPSBgRmVlbHMgTGlrZTogJHtNYXRoLnJvdW5kKCgoZmVlbHMudGV4dENvbnRlbnQgKiAoOSAvIDUpKSArIDMyKSl9YDtcbiAgfVxufVxuXG5leHBvcnQgeyBjb252ZXJ0ZXIgfTtcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgY29uc3QgaW5mbyA9IFtdO1xuXG5jbGFzcyBXZWF0aGVyQ3JlYXRvciB7XG4gIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uLCBjaXR5LCB0ZW1wLCBmZWVscywgd2luZCwgaHVtaWRpdHkpIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5jaXR5ID0gY2l0eTtcbiAgICB0aGlzLnRlbXAgPSB0ZW1wO1xuICAgIHRoaXMuZmVlbHMgPSBmZWVscztcbiAgICB0aGlzLndpbmQgPSB3aW5kO1xuICAgIHRoaXMuaHVtaWRpdHkgPSBodW1pZGl0eTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICdodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9c2FuJTIwZnJhbmNpc2NvJkFQUElEPTZkNzMwMjZmOTg0NmVlMTg3OTdiNTgyYmU4ZDY5OTQxJyxcbiAgKTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGluZm8ucHVzaChcbiAgICBuZXcgV2VhdGhlckNyZWF0b3IoXG4gICAgICB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgICAgd2VhdGhlckRhdGEubmFtZS50b1VwcGVyQ2FzZSgpLFxuICAgICAgTWF0aC5yb3VuZCgod2VhdGhlckRhdGEubWFpbi50ZW1wIC0gMjczLjE1KSAqICg5IC8gNSkgKyAzMiwgMTApLFxuICAgICAgTWF0aC5yb3VuZCgod2VhdGhlckRhdGEubWFpbi50ZW1wIC0gMjczLjE1KSAqICg5IC8gNSkgKyAzMiwgMTApLFxuICAgICAgYFdpbmQ6ICR7d2VhdGhlckRhdGEud2luZC5zcGVlZH0gTVBIYCxcbiAgICAgIGBIdW1pZGl0eTogJHt3ZWF0aGVyRGF0YS5tYWluLmh1bWlkaXR5fSVgLFxuICAgICksXG4gICk7XG59XG5cbmV4cG9ydCB7IGdldFdlYXRoZXIgfTtcbmNvbnNvbGUubG9nKGluZm8pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjb252ZXJ0ZXIgfSBmcm9tICcuL2NvbnZlcnRlcic7XG5pbXBvcnQgeyB3ZWF0aGVyRG9tIH0gZnJvbSAnLi9Eb20nO1xuaW1wb3J0IHsgZ2V0V2VhdGhlciB9IGZyb20gJy4vZ2V0V2VhdGhlcic7XG5cbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb252ZXJ0ZXInKTtcblxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb252ZXJ0ZXIoKTtcbn0pO1xuXG5nZXRXZWF0aGVyKCk7XG53ZWF0aGVyRG9tKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=