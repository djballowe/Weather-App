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

  console.log(response);
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
  console.log(info);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGNBQWM7QUFDbkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isc0RBQWE7QUFDNUMsOEJBQThCLHFEQUFZO0FBQzFDO0FBQ0EsdUNBQXVDLE9BQU87QUFDOUMsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzREFBYTtBQUNoQyxrQkFBa0IscURBQVk7QUFDOUI7QUFDQSx1Q0FBdUMsT0FBTztBQUM5QztBQUNBOztBQUVBLFlBQVksNkNBQUk7O0FBRWlCOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVDakM7QUFDQTtBQUNBO0FBQ0E7QUFDeUM7O0FBRWxDOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxTQUFTO0FBQ2pFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx3QkFBd0I7QUFDckMsaUJBQWlCLDBCQUEwQjtBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0RBQVU7QUFDWjtBQUNBOztBQUVBOztBQUVzQjs7Ozs7OztVQzlDdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOd0M7QUFDRTs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLHFEQUFTO0FBQ1gsQ0FBQzs7QUFFRDtBQUNBLEVBQUUsdURBQVU7QUFDWjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksdURBQVU7QUFDZDtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbnZlcnRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nZXRXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxuaW1wb3J0IHsgaW5mbyB9IGZyb20gJy4vZ2V0V2VhdGhlcic7XG5cbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJyk7XG5jb25zdCBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHknKTtcbmNvbnN0IHRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcCcpO1xuY29uc3QgZmVlbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlbHMnKTtcbmNvbnN0IHdpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZCcpO1xuY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtaWRpdHknKTtcbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb252ZXJ0ZXInKTtcbmNvbnN0IEMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQycpO1xuY29uc3QgRiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdGJyk7XG5cbmZ1bmN0aW9uIHdlYXRoZXJEb20od2VhdGhlcikge1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHdlYXRoZXIuZGVzY3JpcHRpb247XG4gIGNpdHkudGV4dENvbnRlbnQgPSB3ZWF0aGVyLmNpdHk7XG4gIHRlbXAudGV4dENvbnRlbnQgPSB3ZWF0aGVyLnRlbXA7XG4gIGZlZWxzLnRleHRDb250ZW50ID0gYEZlZWxzIExpa2U6ICR7d2VhdGhlci5mZWVsc31gO1xuICB3aW5kLnRleHRDb250ZW50ID0gd2VhdGhlci53aW5kO1xuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IHdlYXRoZXIuaHVtaWRpdHk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRlcigpIHtcbiAgaWYgKGJ1dHRvbi50ZXh0Q29udGVudCA9PT0gJ0MnKSB7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0YnO1xuICAgIEMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgRi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNvbnN0IG5GZWVscyA9IE1hdGgucm91bmQoKGluZm9bMF0uZmVlbHMgLSAzMikgKiAoNSAvIDkpKTtcbiAgICBjb25zdCBuVGVtcCA9IE1hdGgucm91bmQoKGluZm9bMF0udGVtcCAtIDMyKSAqICg1IC8gOSkpO1xuICAgIHRlbXAudGV4dENvbnRlbnQgPSBuVGVtcDtcbiAgICBmZWVscy50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke25GZWVsc31gO1xuICB9IGVsc2UgaWYgKGJ1dHRvbi50ZXh0Q29udGVudCA9PT0gJ0YnKSB7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0MnO1xuICAgIEMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBGLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGNvbnN0IG5GZWVscyA9IGluZm9bMF0uZmVlbHM7XG4gICAgY29uc3QgblRlbXAgPSBpbmZvWzBdLnRlbXA7XG4gICAgdGVtcC50ZXh0Q29udGVudCA9IG5UZW1wO1xuICAgIGZlZWxzLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2U6ICR7bkZlZWxzfWA7XG4gIH1cbn1cblxuY29uc29sZS5sb2coaW5mbyk7XG5cbmV4cG9ydCB7IGNvbnZlcnRlciwgd2VhdGhlckRvbSB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItY29uc3QgKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5pbXBvcnQgeyB3ZWF0aGVyRG9tIH0gZnJvbSAnLi9jb252ZXJ0ZXInO1xuXG5leHBvcnQgbGV0IGluZm8gPSBbXTtcblxuY2xhc3MgV2VhdGhlckNyZWF0b3Ige1xuICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbiwgY2l0eSwgdGVtcCwgZmVlbHMsIHdpbmQsIGh1bWlkaXR5KSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuY2l0eSA9IGNpdHk7XG4gICAgdGhpcy50ZW1wID0gdGVtcDtcbiAgICB0aGlzLmZlZWxzID0gZmVlbHM7XG4gICAgdGhpcy53aW5kID0gd2luZDtcbiAgICB0aGlzLmh1bWlkaXR5ID0gaHVtaWRpdHk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihjaXR5SW5mbykge1xuICBjb25zb2xlLmxvZyhjaXR5SW5mbyk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHlJbmZvfSZBUFBJRD02ZDczMDI2Zjk4NDZlZTE4Nzk3YjU4MmJlOGQ2OTk0MWAsXG4gICk7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgY29uc3Qgd2VhdGhlciA9IG5ldyBXZWF0aGVyQ3JlYXRvcihcbiAgICB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLnRvVXBwZXJDYXNlKCksXG4gICAgd2VhdGhlckRhdGEubmFtZS50b1VwcGVyQ2FzZSgpLFxuICAgIE1hdGgucm91bmQoKHdlYXRoZXJEYXRhLm1haW4udGVtcCAtIDI3My4xNSkgKiAoOSAvIDUpICsgMzIsIDEwKSxcbiAgICBNYXRoLnJvdW5kKCh3ZWF0aGVyRGF0YS5tYWluLnRlbXAgLSAyNzMuMTUpICogKDkgLyA1KSArIDMyLCAxMCksXG4gICAgYFdpbmQ6ICR7d2VhdGhlckRhdGEud2luZC5zcGVlZH0gTVBIYCxcbiAgICBgSHVtaWRpdHk6ICR7d2VhdGhlckRhdGEubWFpbi5odW1pZGl0eX0lYCxcbiAgKTtcblxuICBpZiAoaW5mby5sZW5ndGggPiAwKSB7XG4gICAgaW5mby5zcGxpY2UoMCk7XG4gIH1cbiAgY29uc29sZS5sb2coaW5mbyk7XG4gIHdlYXRoZXJEb20od2VhdGhlcik7XG4gIGluZm8ucHVzaCh3ZWF0aGVyKTtcbn1cblxuZ2V0V2VhdGhlcignc2FuIGZyYW5jaXNjbycpO1xuXG5leHBvcnQgeyBnZXRXZWF0aGVyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNvbnZlcnRlciB9IGZyb20gJy4vY29udmVydGVyJztcbmltcG9ydCB7IGdldFdlYXRoZXIgfSBmcm9tICcuL2dldFdlYXRoZXInO1xuXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udmVydGVyJyk7XG5jb25zdCBzZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJ1dHRvbicpO1xuY29uc3QgY2l0eUluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJyk7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnZlcnRlcigpO1xufSk7XG5cbnNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZ2V0V2VhdGhlcihjaXR5SW5mby52YWx1ZSk7XG4gIGNpdHlJbmZvLnZhbHVlID0gJyc7XG59KTtcblxuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XG4gIGlmIChlLmtleSA9PT0gJ0VudGVyJyAmJiBjaXR5SW5mby52YWx1ZSAhPT0gJycpIHtcbiAgICBnZXRXZWF0aGVyKGNpdHlJbmZvLnZhbHVlKTtcbiAgICBjaXR5SW5mby52YWx1ZSA9ICcnO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==