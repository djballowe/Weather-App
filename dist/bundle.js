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
// eslint-disable-next-line import/no-cycle


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
/* eslint-disable import/no-cycle */
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

async function getWeather(cityInfo) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityInfo}&APPID=6d73026f9846ee18797b582be8d69941`,
  );
  const weatherData = await response.json();

  console.log(weatherData);

  if (weatherData.message === 'city not found') {
    alert('Error City Not Found');
  }

  const weather = new WeatherCreator(
    weatherData.weather[0].description.toUpperCase(),
    weatherData.name.toUpperCase(),
    Math.round((weatherData.main.temp - 273.15) * (9 / 5) + 32, 10),
    Math.round((weatherData.main.temp - 273.15) * (9 / 5) + 32, 10),
    `Wind: ${weatherData.wind.speed} MPH`,
    `Humidity: ${weatherData.main.humidity}%`,
  );

  if (info.length > 0) {
    info.splice(0);
  }
  (0,_converter__WEBPACK_IMPORTED_MODULE_0__.weatherDom)(weather);
  info.push(weather);
}

getWeather('san francisco');




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
const search = document.getElementById('search-button');
const cityInfo = document.getElementById('search');
const body = document.querySelector('body');

button.addEventListener('click', () => {
  (0,_converter__WEBPACK_IMPORTED_MODULE_0__.converter)();
});

search.addEventListener('click', () => {
  (0,_getWeather__WEBPACK_IMPORTED_MODULE_1__.getWeather)(cityInfo.value);
  cityInfo.value = '';
});

body.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && cityInfo.value !== '') {
    (0,_getWeather__WEBPACK_IMPORTED_MODULE_1__.getWeather)(cityInfo.value);
    cityInfo.value = '';
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGNBQWM7QUFDbkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isc0RBQWE7QUFDNUMsOEJBQThCLHFEQUFZO0FBQzFDO0FBQ0EsdUNBQXVDLE9BQU87QUFDOUMsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzREFBYTtBQUNoQyxrQkFBa0IscURBQVk7QUFDOUI7QUFDQSx1Q0FBdUMsT0FBTztBQUM5QztBQUNBOztBQUVBLFlBQVksNkNBQUk7O0FBRWlCOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVDakM7QUFDQTtBQUNBO0FBQ0E7QUFDeUM7O0FBRWxDOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3REFBd0QsU0FBUztBQUNqRTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx3QkFBd0I7QUFDckMsaUJBQWlCLDBCQUEwQjtBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHNEQUFVO0FBQ1o7QUFDQTs7QUFFQTs7QUFFc0I7Ozs7Ozs7VUNqRHRCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTndDO0FBQ0U7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxxREFBUztBQUNYLENBQUM7O0FBRUQ7QUFDQSxFQUFFLHVEQUFVO0FBQ1o7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLHVEQUFVO0FBQ2Q7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb252ZXJ0ZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZ2V0V2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcbmltcG9ydCB7IGluZm8gfSBmcm9tICcuL2dldFdlYXRoZXInO1xuXG5jb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpO1xuY29uc3QgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5Jyk7XG5jb25zdCB0ZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXAnKTtcbmNvbnN0IGZlZWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZWxzJyk7XG5jb25zdCB3aW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmQnKTtcbmNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWlkaXR5Jyk7XG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udmVydGVyJyk7XG5jb25zdCBDID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0MnKTtcbmNvbnN0IEYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRicpO1xuXG5mdW5jdGlvbiB3ZWF0aGVyRG9tKHdlYXRoZXIpIHtcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB3ZWF0aGVyLmRlc2NyaXB0aW9uO1xuICBjaXR5LnRleHRDb250ZW50ID0gd2VhdGhlci5jaXR5O1xuICB0ZW1wLnRleHRDb250ZW50ID0gd2VhdGhlci50ZW1wO1xuICBmZWVscy50ZXh0Q29udGVudCA9IGBGZWVscyBMaWtlOiAke3dlYXRoZXIuZmVlbHN9YDtcbiAgd2luZC50ZXh0Q29udGVudCA9IHdlYXRoZXIud2luZDtcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSB3ZWF0aGVyLmh1bWlkaXR5O1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0ZXIoKSB7XG4gIGlmIChidXR0b24udGV4dENvbnRlbnQgPT09ICdDJykge1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdGJztcbiAgICBDLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIEYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjb25zdCBuRmVlbHMgPSBNYXRoLnJvdW5kKChpbmZvWzBdLmZlZWxzIC0gMzIpICogKDUgLyA5KSk7XG4gICAgY29uc3QgblRlbXAgPSBNYXRoLnJvdW5kKChpbmZvWzBdLnRlbXAgLSAzMikgKiAoNSAvIDkpKTtcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gblRlbXA7XG4gICAgZmVlbHMudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZTogJHtuRmVlbHN9YDtcbiAgfSBlbHNlIGlmIChidXR0b24udGV4dENvbnRlbnQgPT09ICdGJykge1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdDJztcbiAgICBDLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgRi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBjb25zdCBuRmVlbHMgPSBpbmZvWzBdLmZlZWxzO1xuICAgIGNvbnN0IG5UZW1wID0gaW5mb1swXS50ZW1wO1xuICAgIHRlbXAudGV4dENvbnRlbnQgPSBuVGVtcDtcbiAgICBmZWVscy50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke25GZWVsc31gO1xuICB9XG59XG5cbmNvbnNvbGUubG9nKGluZm8pO1xuXG5leHBvcnQgeyBjb252ZXJ0ZXIsIHdlYXRoZXJEb20gfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0cyAqL1xuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWNvbnN0ICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuaW1wb3J0IHsgd2VhdGhlckRvbSB9IGZyb20gJy4vY29udmVydGVyJztcblxuZXhwb3J0IGxldCBpbmZvID0gW107XG5cbmNsYXNzIFdlYXRoZXJDcmVhdG9yIHtcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24sIGNpdHksIHRlbXAsIGZlZWxzLCB3aW5kLCBodW1pZGl0eSkge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmNpdHkgPSBjaXR5O1xuICAgIHRoaXMudGVtcCA9IHRlbXA7XG4gICAgdGhpcy5mZWVscyA9IGZlZWxzO1xuICAgIHRoaXMud2luZCA9IHdpbmQ7XG4gICAgdGhpcy5odW1pZGl0eSA9IGh1bWlkaXR5O1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoY2l0eUluZm8pIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eUluZm99JkFQUElEPTZkNzMwMjZmOTg0NmVlMTg3OTdiNTgyYmU4ZDY5OTQxYCxcbiAgKTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuXG4gIGlmICh3ZWF0aGVyRGF0YS5tZXNzYWdlID09PSAnY2l0eSBub3QgZm91bmQnKSB7XG4gICAgYWxlcnQoJ0Vycm9yIENpdHkgTm90IEZvdW5kJyk7XG4gIH1cblxuICBjb25zdCB3ZWF0aGVyID0gbmV3IFdlYXRoZXJDcmVhdG9yKFxuICAgIHdlYXRoZXJEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24udG9VcHBlckNhc2UoKSxcbiAgICB3ZWF0aGVyRGF0YS5uYW1lLnRvVXBwZXJDYXNlKCksXG4gICAgTWF0aC5yb3VuZCgod2VhdGhlckRhdGEubWFpbi50ZW1wIC0gMjczLjE1KSAqICg5IC8gNSkgKyAzMiwgMTApLFxuICAgIE1hdGgucm91bmQoKHdlYXRoZXJEYXRhLm1haW4udGVtcCAtIDI3My4xNSkgKiAoOSAvIDUpICsgMzIsIDEwKSxcbiAgICBgV2luZDogJHt3ZWF0aGVyRGF0YS53aW5kLnNwZWVkfSBNUEhgLFxuICAgIGBIdW1pZGl0eTogJHt3ZWF0aGVyRGF0YS5tYWluLmh1bWlkaXR5fSVgLFxuICApO1xuXG4gIGlmIChpbmZvLmxlbmd0aCA+IDApIHtcbiAgICBpbmZvLnNwbGljZSgwKTtcbiAgfVxuICB3ZWF0aGVyRG9tKHdlYXRoZXIpO1xuICBpbmZvLnB1c2god2VhdGhlcik7XG59XG5cbmdldFdlYXRoZXIoJ3NhbiBmcmFuY2lzY28nKTtcblxuZXhwb3J0IHsgZ2V0V2VhdGhlciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjb252ZXJ0ZXIgfSBmcm9tICcuL2NvbnZlcnRlcic7XG5pbXBvcnQgeyBnZXRXZWF0aGVyIH0gZnJvbSAnLi9nZXRXZWF0aGVyJztcblxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnZlcnRlcicpO1xuY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1idXR0b24nKTtcbmNvbnN0IGNpdHlJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb252ZXJ0ZXIoKTtcbn0pO1xuXG5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGdldFdlYXRoZXIoY2l0eUluZm8udmFsdWUpO1xuICBjaXR5SW5mby52YWx1ZSA9ICcnO1xufSk7XG5cbmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xuICBpZiAoZS5rZXkgPT09ICdFbnRlcicgJiYgY2l0eUluZm8udmFsdWUgIT09ICcnKSB7XG4gICAgZ2V0V2VhdGhlcihjaXR5SW5mby52YWx1ZSk7XG4gICAgY2l0eUluZm8udmFsdWUgPSAnJztcbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=