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
/* harmony export */   "weatherDom": () => (/* binding */ weatherDom)
/* harmony export */ });
/* eslint-disable import/no-mutable-exports */
/* eslint-disable prefer-const */
// eslint-disable-next-line import/prefer-default-export

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

const description = document.getElementById('description');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const feels = document.getElementById('feels');
const wind = document.getElementById('wind');
const humidity = document.getElementById('humidity');

function weatherDom(weather) {
  description.textContent = weather.description;
  city.textContent = weather.city;
  temp.textContent = weather.temp;
  feels.textContent = weather.feels;
  wind.textContent = weather.wind;
  humidity.textContent = weather.humidity;

  console.log(info.length);
}

async function getWeather() {
  const response = await fetch(
    'http://api.openweathermap.org/data/2.5/weather?q=san%20francisco&APPID=6d73026f9846ee18797b582be8d69941',
  );
  const weatherData = await response.json();

  const weather = new WeatherCreator(
    weatherData.weather[0].description,
    weatherData.name.toUpperCase(),
    Math.round((weatherData.main.temp - 273.15) * (9 / 5) + 32, 10),
    Math.round((weatherData.main.temp - 273.15) * (9 / 5) + 32, 10),
    `Wind: ${weatherData.wind.speed} MPH`,
    `Humidity: ${weatherData.main.humidity}%`,
  );
  weatherDom(weather);
}

getWeather();
weatherDom();


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
/* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeather */ "./src/getWeather.js");



const button = document.getElementById('converter');

button.addEventListener('click', () => {
  (0,_converter__WEBPACK_IMPORTED_MODULE_0__.converter)();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsK0NBQStDO0FBQ3RGLElBQUk7QUFDSjtBQUNBO0FBQ0EsdUNBQXVDLGlEQUFpRDtBQUN4RjtBQUNBOztBQUVxQjs7Ozs7Ozs7Ozs7Ozs7OztBQ1pyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx3QkFBd0I7QUFDckMsaUJBQWlCLDBCQUEwQjtBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFa0M7QUFDbEM7Ozs7Ozs7VUN0REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOd0M7QUFDYzs7QUFFdEQ7O0FBRUE7QUFDQSxFQUFFLHFEQUFTO0FBQ1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbnZlcnRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nZXRXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY29udmVydGVyKCkge1xuICBpZiAoYnV0dG9uLnRleHRDb250ZW50ID09PSAnQycpIHtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnRic7XG4gICAgdGVtcC50ZXh0Q29udGVudCA9IE1hdGgucm91bmQoKHRlbXAudGV4dENvbnRlbnQgLSAzMikgKiAoNSAvIDkpKTtcbiAgICBmZWVscy50ZXh0Q29udGVudCA9IGBGZWVscyBMaWtlOiAke01hdGgucm91bmQoKGZlZWxzLnRleHRDb250ZW50IC0gMzIpICogKDUgLyA5KSl9YDtcbiAgfSBlbHNlIGlmIChidXR0b24udGV4dENvbnRlbnQgPT09ICdGJykge1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdDJztcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZCh0ZW1wLnRleHRDb250ZW50ICogKDkgLyA1KSArIDMyKTtcbiAgICBmZWVscy50ZXh0Q29udGVudCA9IGBGZWVscyBMaWtlOiAke01hdGgucm91bmQoKChmZWVscy50ZXh0Q29udGVudCAqICg5IC8gNSkpICsgMzIpKX1gO1xuICB9XG59XG5cbmV4cG9ydCB7IGNvbnZlcnRlciB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0cyAqL1xuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWNvbnN0ICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuXG5jbGFzcyBXZWF0aGVyQ3JlYXRvciB7XG4gIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uLCBjaXR5LCB0ZW1wLCBmZWVscywgd2luZCwgaHVtaWRpdHkpIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5jaXR5ID0gY2l0eTtcbiAgICB0aGlzLnRlbXAgPSB0ZW1wO1xuICAgIHRoaXMuZmVlbHMgPSBmZWVscztcbiAgICB0aGlzLndpbmQgPSB3aW5kO1xuICAgIHRoaXMuaHVtaWRpdHkgPSBodW1pZGl0eTtcbiAgfVxufVxuXG5jb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpO1xuY29uc3QgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5Jyk7XG5jb25zdCB0ZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXAnKTtcbmNvbnN0IGZlZWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZWxzJyk7XG5jb25zdCB3aW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmQnKTtcbmNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWlkaXR5Jyk7XG5cbmZ1bmN0aW9uIHdlYXRoZXJEb20od2VhdGhlcikge1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHdlYXRoZXIuZGVzY3JpcHRpb247XG4gIGNpdHkudGV4dENvbnRlbnQgPSB3ZWF0aGVyLmNpdHk7XG4gIHRlbXAudGV4dENvbnRlbnQgPSB3ZWF0aGVyLnRlbXA7XG4gIGZlZWxzLnRleHRDb250ZW50ID0gd2VhdGhlci5mZWVscztcbiAgd2luZC50ZXh0Q29udGVudCA9IHdlYXRoZXIud2luZDtcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSB3ZWF0aGVyLmh1bWlkaXR5O1xuXG4gIGNvbnNvbGUubG9nKGluZm8ubGVuZ3RoKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcigpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAnaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPXNhbiUyMGZyYW5jaXNjbyZBUFBJRD02ZDczMDI2Zjk4NDZlZTE4Nzk3YjU4MmJlOGQ2OTk0MScsXG4gICk7XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIGNvbnN0IHdlYXRoZXIgPSBuZXcgV2VhdGhlckNyZWF0b3IoXG4gICAgd2VhdGhlckRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgICB3ZWF0aGVyRGF0YS5uYW1lLnRvVXBwZXJDYXNlKCksXG4gICAgTWF0aC5yb3VuZCgod2VhdGhlckRhdGEubWFpbi50ZW1wIC0gMjczLjE1KSAqICg5IC8gNSkgKyAzMiwgMTApLFxuICAgIE1hdGgucm91bmQoKHdlYXRoZXJEYXRhLm1haW4udGVtcCAtIDI3My4xNSkgKiAoOSAvIDUpICsgMzIsIDEwKSxcbiAgICBgV2luZDogJHt3ZWF0aGVyRGF0YS53aW5kLnNwZWVkfSBNUEhgLFxuICAgIGBIdW1pZGl0eTogJHt3ZWF0aGVyRGF0YS5tYWluLmh1bWlkaXR5fSVgLFxuICApO1xuICB3ZWF0aGVyRG9tKHdlYXRoZXIpO1xufVxuXG5nZXRXZWF0aGVyKCk7XG53ZWF0aGVyRG9tKCk7XG5cbmV4cG9ydCB7IGdldFdlYXRoZXIsIHdlYXRoZXJEb20gfTtcbmNvbnNvbGUubG9nKGluZm8pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjb252ZXJ0ZXIgfSBmcm9tICcuL2NvbnZlcnRlcic7XG5pbXBvcnQgeyB3ZWF0aGVyRG9tLCBnZXRXZWF0aGVyIH0gZnJvbSAnLi9nZXRXZWF0aGVyJztcblxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnZlcnRlcicpO1xuXG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnZlcnRlcigpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=