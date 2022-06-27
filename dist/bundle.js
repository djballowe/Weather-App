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
  console.log(cityInfo);
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityInfo}&APPID=6d73026f9846ee18797b582be8d69941`,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGNBQWM7QUFDbkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isc0RBQWE7QUFDNUMsOEJBQThCLHFEQUFZO0FBQzFDO0FBQ0EsdUNBQXVDLE9BQU87QUFDOUMsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzREFBYTtBQUNoQyxrQkFBa0IscURBQVk7QUFDOUI7QUFDQSx1Q0FBdUMsT0FBTztBQUM5QztBQUNBOztBQUVBLFlBQVksNkNBQUk7O0FBRWlCOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVDakM7QUFDQTtBQUNBO0FBQ0E7QUFDeUM7O0FBRWxDOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxTQUFTO0FBQ2pFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsd0JBQXdCO0FBQ3JDLGlCQUFpQiwwQkFBMEI7QUFDM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxzREFBVTtBQUNaO0FBQ0E7O0FBRUE7O0FBRXNCOzs7Ozs7O1VDNUN0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ053QztBQUNFOztBQUUxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUscURBQVM7QUFDWCxDQUFDOztBQUVEO0FBQ0EsRUFBRSx1REFBVTtBQUNaO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsSUFBSSx1REFBVTtBQUNkO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29udmVydGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2dldFdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXG5pbXBvcnQgeyBpbmZvIH0gZnJvbSAnLi9nZXRXZWF0aGVyJztcblxuY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKTtcbmNvbnN0IGNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eScpO1xuY29uc3QgdGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wJyk7XG5jb25zdCBmZWVscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVscycpO1xuY29uc3Qgd2luZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kJyk7XG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1pZGl0eScpO1xuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnZlcnRlcicpO1xuY29uc3QgQyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdDJyk7XG5jb25zdCBGID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0YnKTtcblxuZnVuY3Rpb24gd2VhdGhlckRvbSh3ZWF0aGVyKSB7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gd2VhdGhlci5kZXNjcmlwdGlvbjtcbiAgY2l0eS50ZXh0Q29udGVudCA9IHdlYXRoZXIuY2l0eTtcbiAgdGVtcC50ZXh0Q29udGVudCA9IHdlYXRoZXIudGVtcDtcbiAgZmVlbHMudGV4dENvbnRlbnQgPSBgRmVlbHMgTGlrZTogJHt3ZWF0aGVyLmZlZWxzfWA7XG4gIHdpbmQudGV4dENvbnRlbnQgPSB3ZWF0aGVyLndpbmQ7XG4gIGh1bWlkaXR5LnRleHRDb250ZW50ID0gd2VhdGhlci5odW1pZGl0eTtcbn1cblxuZnVuY3Rpb24gY29udmVydGVyKCkge1xuICBpZiAoYnV0dG9uLnRleHRDb250ZW50ID09PSAnQycpIHtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnRic7XG4gICAgQy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBGLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY29uc3QgbkZlZWxzID0gTWF0aC5yb3VuZCgoaW5mb1swXS5mZWVscyAtIDMyKSAqICg1IC8gOSkpO1xuICAgIGNvbnN0IG5UZW1wID0gTWF0aC5yb3VuZCgoaW5mb1swXS50ZW1wIC0gMzIpICogKDUgLyA5KSk7XG4gICAgdGVtcC50ZXh0Q29udGVudCA9IG5UZW1wO1xuICAgIGZlZWxzLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2U6ICR7bkZlZWxzfWA7XG4gIH0gZWxzZSBpZiAoYnV0dG9uLnRleHRDb250ZW50ID09PSAnRicpIHtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQyc7XG4gICAgQy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIEYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgY29uc3QgbkZlZWxzID0gaW5mb1swXS5mZWVscztcbiAgICBjb25zdCBuVGVtcCA9IGluZm9bMF0udGVtcDtcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gblRlbXA7XG4gICAgZmVlbHMudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZTogJHtuRmVlbHN9YDtcbiAgfVxufVxuXG5jb25zb2xlLmxvZyhpbmZvKTtcblxuZXhwb3J0IHsgY29udmVydGVyLCB3ZWF0aGVyRG9tIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHMgKi9cbi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1jb25zdCAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmltcG9ydCB7IHdlYXRoZXJEb20gfSBmcm9tICcuL2NvbnZlcnRlcic7XG5cbmV4cG9ydCBsZXQgaW5mbyA9IFtdO1xuXG5jbGFzcyBXZWF0aGVyQ3JlYXRvciB7XG4gIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uLCBjaXR5LCB0ZW1wLCBmZWVscywgd2luZCwgaHVtaWRpdHkpIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5jaXR5ID0gY2l0eTtcbiAgICB0aGlzLnRlbXAgPSB0ZW1wO1xuICAgIHRoaXMuZmVlbHMgPSBmZWVscztcbiAgICB0aGlzLndpbmQgPSB3aW5kO1xuICAgIHRoaXMuaHVtaWRpdHkgPSBodW1pZGl0eTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGNpdHlJbmZvKSB7XG4gIGNvbnNvbGUubG9nKGNpdHlJbmZvKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eUluZm99JkFQUElEPTZkNzMwMjZmOTg0NmVlMTg3OTdiNTgyYmU4ZDY5OTQxYCxcbiAgKTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgY29uc3Qgd2VhdGhlciA9IG5ldyBXZWF0aGVyQ3JlYXRvcihcbiAgICB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLnRvVXBwZXJDYXNlKCksXG4gICAgd2VhdGhlckRhdGEubmFtZS50b1VwcGVyQ2FzZSgpLFxuICAgIE1hdGgucm91bmQoKHdlYXRoZXJEYXRhLm1haW4udGVtcCAtIDI3My4xNSkgKiAoOSAvIDUpICsgMzIsIDEwKSxcbiAgICBNYXRoLnJvdW5kKCh3ZWF0aGVyRGF0YS5tYWluLnRlbXAgLSAyNzMuMTUpICogKDkgLyA1KSArIDMyLCAxMCksXG4gICAgYFdpbmQ6ICR7d2VhdGhlckRhdGEud2luZC5zcGVlZH0gTVBIYCxcbiAgICBgSHVtaWRpdHk6ICR7d2VhdGhlckRhdGEubWFpbi5odW1pZGl0eX0lYCxcbiAgKTtcblxuICBpZiAoaW5mby5sZW5ndGggPiAwKSB7XG4gICAgaW5mby5zcGxpY2UoMCk7XG4gIH1cbiAgd2VhdGhlckRvbSh3ZWF0aGVyKTtcbiAgaW5mby5wdXNoKHdlYXRoZXIpO1xufVxuXG5nZXRXZWF0aGVyKCdzYW4gZnJhbmNpc2NvJyk7XG5cbmV4cG9ydCB7IGdldFdlYXRoZXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY29udmVydGVyIH0gZnJvbSAnLi9jb252ZXJ0ZXInO1xuaW1wb3J0IHsgZ2V0V2VhdGhlciB9IGZyb20gJy4vZ2V0V2VhdGhlcic7XG5cbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb252ZXJ0ZXInKTtcbmNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYnV0dG9uJyk7XG5jb25zdCBjaXR5SW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKTtcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29udmVydGVyKCk7XG59KTtcblxuc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBnZXRXZWF0aGVyKGNpdHlJbmZvLnZhbHVlKTtcbiAgY2l0eUluZm8udmFsdWUgPSAnJztcbn0pO1xuXG5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcbiAgaWYgKGUua2V5ID09PSAnRW50ZXInICYmIGNpdHlJbmZvLnZhbHVlICE9PSAnJykge1xuICAgIGdldFdlYXRoZXIoY2l0eUluZm8udmFsdWUpO1xuICAgIGNpdHlJbmZvLnZhbHVlID0gJyc7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9