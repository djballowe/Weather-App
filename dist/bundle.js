/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/converter.js":
/*!**************************!*\
  !*** ./src/converter.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "converter": () => (/* binding */ converter),
/* harmony export */   "weatherDom": () => (/* binding */ weatherDom)
/* harmony export */ });
/* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeather */ "./src/getWeather.js");


const description = document.getElementById('description');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const feels = document.getElementById('feels');
const wind = document.getElementById('wind');
const humidity = document.getElementById('humidity');
const button = document.getElementById('converter');
const C = document.getElementById('C');
const F = document.getElementById('F');

function weatherDom(weather) {
  description.textContent = weather.description;
  city.textContent = weather.city;
  temp.textContent = weather.temp;
  feels.textContent = `Feels Like: ${weather.feels}`;
  wind.textContent = weather.wind;
  humidity.textContent = weather.humidity;
}

function converter() {
  if (button.textContent === 'C') {
    button.textContent = 'F';
    C.style.display = 'block';
    F.style.display = 'none';
    const nFeels = Math.round((_getWeather__WEBPACK_IMPORTED_MODULE_0__.info[0].feels - 32) * (5 / 9));
    const nTemp = Math.round((_getWeather__WEBPACK_IMPORTED_MODULE_0__.info[0].temp - 32) * (5 / 9));
    temp.textContent = nTemp;
    feels.textContent = `Feels like: ${nFeels}`;
  } else if (button.textContent === 'F') {
    button.textContent = 'C';
    C.style.display = 'none';
    F.style.display = 'block';
    const nFeels = _getWeather__WEBPACK_IMPORTED_MODULE_0__.info[0].feels;
    const nTemp = _getWeather__WEBPACK_IMPORTED_MODULE_0__.info[0].temp;
    temp.textContent = nTemp;
    feels.textContent = `Feels like: ${nFeels}`;
  }
}

console.log(_getWeather__WEBPACK_IMPORTED_MODULE_0__.info);




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
/* harmony import */ var _converter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./converter */ "./src/converter.js");
/* eslint-disable import/no-mutable-exports */
/* eslint-disable prefer-const */
// eslint-disable-next-line import/prefer-default-export


let info = [];

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

  const weather = new WeatherCreator(
    weatherData.weather[0].description.toUpperCase(),
    weatherData.name.toUpperCase(),
    Math.round((weatherData.main.temp - 273.15) * (9 / 5) + 32, 10),
    Math.round((weatherData.main.temp - 273.15) * (9 / 5) + 32, 10),
    `Wind: ${weatherData.wind.speed} MPH`,
    `Humidity: ${weatherData.main.humidity}%`,
  );
  (0,_converter__WEBPACK_IMPORTED_MODULE_0__.weatherDom)(weather);
  info.push(weather);
}

getWeather();




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
/* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeather */ "./src/getWeather.js");



const button = document.getElementById('converter');

button.addEventListener('click', () => {
  (0,_converter__WEBPACK_IMPORTED_MODULE_0__.converter)();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxjQUFjO0FBQ25EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHNEQUFhO0FBQzVDLDhCQUE4QixxREFBWTtBQUMxQztBQUNBLHVDQUF1QyxPQUFPO0FBQzlDLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0RBQWE7QUFDaEMsa0JBQWtCLHFEQUFZO0FBQzlCO0FBQ0EsdUNBQXVDLE9BQU87QUFDOUM7QUFDQTs7QUFFQSxZQUFZLDZDQUFJOztBQUVpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ2pDO0FBQ0E7QUFDQTtBQUN5Qzs7QUFFbEM7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx3QkFBd0I7QUFDckMsaUJBQWlCLDBCQUEwQjtBQUMzQztBQUNBLEVBQUUsc0RBQVU7QUFDWjtBQUNBOztBQUVBOztBQUVzQjs7Ozs7OztVQ3RDdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOd0M7QUFDYzs7QUFFdEQ7O0FBRUE7QUFDQSxFQUFFLHFEQUFTO0FBQ1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbnZlcnRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nZXRXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5mbyB9IGZyb20gJy4vZ2V0V2VhdGhlcic7XG5cbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJyk7XG5jb25zdCBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHknKTtcbmNvbnN0IHRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcCcpO1xuY29uc3QgZmVlbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlbHMnKTtcbmNvbnN0IHdpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZCcpO1xuY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtaWRpdHknKTtcbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb252ZXJ0ZXInKTtcbmNvbnN0IEMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQycpO1xuY29uc3QgRiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdGJyk7XG5cbmZ1bmN0aW9uIHdlYXRoZXJEb20od2VhdGhlcikge1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHdlYXRoZXIuZGVzY3JpcHRpb247XG4gIGNpdHkudGV4dENvbnRlbnQgPSB3ZWF0aGVyLmNpdHk7XG4gIHRlbXAudGV4dENvbnRlbnQgPSB3ZWF0aGVyLnRlbXA7XG4gIGZlZWxzLnRleHRDb250ZW50ID0gYEZlZWxzIExpa2U6ICR7d2VhdGhlci5mZWVsc31gO1xuICB3aW5kLnRleHRDb250ZW50ID0gd2VhdGhlci53aW5kO1xuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IHdlYXRoZXIuaHVtaWRpdHk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRlcigpIHtcbiAgaWYgKGJ1dHRvbi50ZXh0Q29udGVudCA9PT0gJ0MnKSB7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0YnO1xuICAgIEMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgRi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNvbnN0IG5GZWVscyA9IE1hdGgucm91bmQoKGluZm9bMF0uZmVlbHMgLSAzMikgKiAoNSAvIDkpKTtcbiAgICBjb25zdCBuVGVtcCA9IE1hdGgucm91bmQoKGluZm9bMF0udGVtcCAtIDMyKSAqICg1IC8gOSkpO1xuICAgIHRlbXAudGV4dENvbnRlbnQgPSBuVGVtcDtcbiAgICBmZWVscy50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke25GZWVsc31gO1xuICB9IGVsc2UgaWYgKGJ1dHRvbi50ZXh0Q29udGVudCA9PT0gJ0YnKSB7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0MnO1xuICAgIEMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBGLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGNvbnN0IG5GZWVscyA9IGluZm9bMF0uZmVlbHM7XG4gICAgY29uc3QgblRlbXAgPSBpbmZvWzBdLnRlbXA7XG4gICAgdGVtcC50ZXh0Q29udGVudCA9IG5UZW1wO1xuICAgIGZlZWxzLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2U6ICR7bkZlZWxzfWA7XG4gIH1cbn1cblxuY29uc29sZS5sb2coaW5mbyk7XG5cbmV4cG9ydCB7IGNvbnZlcnRlciwgd2VhdGhlckRvbSB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0cyAqL1xuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWNvbnN0ICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuaW1wb3J0IHsgd2VhdGhlckRvbSB9IGZyb20gJy4vY29udmVydGVyJztcblxuZXhwb3J0IGxldCBpbmZvID0gW107XG5cbmNsYXNzIFdlYXRoZXJDcmVhdG9yIHtcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24sIGNpdHksIHRlbXAsIGZlZWxzLCB3aW5kLCBodW1pZGl0eSkge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmNpdHkgPSBjaXR5O1xuICAgIHRoaXMudGVtcCA9IHRlbXA7XG4gICAgdGhpcy5mZWVscyA9IGZlZWxzO1xuICAgIHRoaXMud2luZCA9IHdpbmQ7XG4gICAgdGhpcy5odW1pZGl0eSA9IGh1bWlkaXR5O1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgJ2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1zYW4lMjBmcmFuY2lzY28mQVBQSUQ9NmQ3MzAyNmY5ODQ2ZWUxODc5N2I1ODJiZThkNjk5NDEnLFxuICApO1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICBjb25zdCB3ZWF0aGVyID0gbmV3IFdlYXRoZXJDcmVhdG9yKFxuICAgIHdlYXRoZXJEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24udG9VcHBlckNhc2UoKSxcbiAgICB3ZWF0aGVyRGF0YS5uYW1lLnRvVXBwZXJDYXNlKCksXG4gICAgTWF0aC5yb3VuZCgod2VhdGhlckRhdGEubWFpbi50ZW1wIC0gMjczLjE1KSAqICg5IC8gNSkgKyAzMiwgMTApLFxuICAgIE1hdGgucm91bmQoKHdlYXRoZXJEYXRhLm1haW4udGVtcCAtIDI3My4xNSkgKiAoOSAvIDUpICsgMzIsIDEwKSxcbiAgICBgV2luZDogJHt3ZWF0aGVyRGF0YS53aW5kLnNwZWVkfSBNUEhgLFxuICAgIGBIdW1pZGl0eTogJHt3ZWF0aGVyRGF0YS5tYWluLmh1bWlkaXR5fSVgLFxuICApO1xuICB3ZWF0aGVyRG9tKHdlYXRoZXIpO1xuICBpbmZvLnB1c2god2VhdGhlcik7XG59XG5cbmdldFdlYXRoZXIoKTtcblxuZXhwb3J0IHsgZ2V0V2VhdGhlciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjb252ZXJ0ZXIgfSBmcm9tICcuL2NvbnZlcnRlcic7XG5pbXBvcnQgeyB3ZWF0aGVyRG9tLCBnZXRXZWF0aGVyIH0gZnJvbSAnLi9nZXRXZWF0aGVyJztcblxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnZlcnRlcicpO1xuXG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnZlcnRlcigpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=