/* eslint-disable no-var */
/* eslint-disable no-underscore-dangle */
/* eslint-disable spaced-comment */
/******/ (() => { // webpackBootstrap
/******/

  /******/ 	var __webpack_modules__ = ({

    /***/ './src/converter.js':
    /*!**************************!*\
  !*** ./src/converter.js ***!
  \**************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ converter: () => (/* binding */ converter),
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

    /***/ './src/getWeather.js':
    /*!***************************!*\
  !*** ./src/getWeather.js ***!
  \***************************/
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ getWeather: () => (/* binding */ getWeather),
        /* harmony export */ });
      const weather = [];

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
        weather.push(new WeatherCreator(
          weatherData.weather[0].description,
          weatherData.name.toUpperCase(),
          Math.round((weatherData.main.temp - 273.15) * (9 / 5) + 32, 10),
          Math.round((weatherData.main.temp - 273.15) * (9 / 5) + 32, 10),
          `Wind: ${weatherData.wind.speed} MPH`,
          `Humidity: ${weatherData.main.humidity}%`,
        ));
      }

      getWeather();
      console.log(weather);
      /***/ }),

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
      /******/ 			exports: {},
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
      /******/ 			for (var key in definition) {
        /******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /******/ 				}
        /******/ 			}
      /******/ 		};
    /******/ 	})();
  /******/
  /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
  /******/ 	(() => {
    /******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
    /******/ 	})();
  /******/
  /******/ 	/* webpack/runtime/make namespace object */
  /******/ 	(() => {
    /******/ 		// define __esModule on exports
    /******/ 		__webpack_require__.r = (exports) => {
      /******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
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
    /* harmony import */ var _converter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./converter */ './src/converter.js');
    /* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeather */ './src/getWeather.js');

    const button = document.getElementById('converter');

    button.addEventListener('click', () => {
      (0, _converter__WEBPACK_IMPORTED_MODULE_0__.converter)();
    });
  })();
/******/ })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsK0NBQStDO0FBQ3RGLElBQUk7QUFDSjtBQUNBO0FBQ0EsdUNBQXVDLGlEQUFpRDtBQUN4RjtBQUNBOztBQUVxQjs7Ozs7Ozs7Ozs7Ozs7O0FDWnJCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx3QkFBd0I7QUFDckMsaUJBQWlCLDBCQUEwQjtBQUMzQztBQUNBOztBQUVBO0FBQ0E7O0FBRXNCOzs7Ozs7O1VDL0J0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ053QztBQUNFOztBQUUxQzs7QUFFQTtBQUNBLEVBQUUscURBQVM7QUFDWCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29udmVydGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2dldFdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjb252ZXJ0ZXIoKSB7XG4gIGlmIChidXR0b24udGV4dENvbnRlbnQgPT09ICdDJykge1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdGJztcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZCgodGVtcC50ZXh0Q29udGVudCAtIDMyKSAqICg1IC8gOSkpO1xuICAgIGZlZWxzLnRleHRDb250ZW50ID0gYEZlZWxzIExpa2U6ICR7TWF0aC5yb3VuZCgoZmVlbHMudGV4dENvbnRlbnQgLSAzMikgKiAoNSAvIDkpKX1gO1xuICB9IGVsc2UgaWYgKGJ1dHRvbi50ZXh0Q29udGVudCA9PT0gJ0YnKSB7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0MnO1xuICAgIHRlbXAudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKHRlbXAudGV4dENvbnRlbnQgKiAoOSAvIDUpICsgMzIpO1xuICAgIGZlZWxzLnRleHRDb250ZW50ID0gYEZlZWxzIExpa2U6ICR7TWF0aC5yb3VuZCgoKGZlZWxzLnRleHRDb250ZW50ICogKDkgLyA1KSkgKyAzMikpfWA7XG4gIH1cbn1cblxuZXhwb3J0IHsgY29udmVydGVyIH07XG4iLCJjb25zdCB3ZWF0aGVyID0gW107XG5cbmNsYXNzIFdlYXRoZXJDcmVhdG9yIHtcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24sIGNpdHksIHRlbXAsIGZlZWxzLCB3aW5kLCBodW1pZGl0eSkge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmNpdHkgPSBjaXR5O1xuICAgIHRoaXMudGVtcCA9IHRlbXA7XG4gICAgdGhpcy5mZWVscyA9IGZlZWxzO1xuICAgIHRoaXMud2luZCA9IHdpbmQ7XG4gICAgdGhpcy5odW1pZGl0eSA9IGh1bWlkaXR5O1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgJ2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1zYW4lMjBmcmFuY2lzY28mQVBQSUQ9NmQ3MzAyNmY5ODQ2ZWUxODc5N2I1ODJiZThkNjk5NDEnLFxuICApO1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgd2VhdGhlci5wdXNoKG5ldyBXZWF0aGVyQ3JlYXRvcihcbiAgICB3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgIHdlYXRoZXJEYXRhLm5hbWUudG9VcHBlckNhc2UoKSxcbiAgICBNYXRoLnJvdW5kKCh3ZWF0aGVyRGF0YS5tYWluLnRlbXAgLSAyNzMuMTUpICogKDkgLyA1KSArIDMyLCAxMCksXG4gICAgTWF0aC5yb3VuZCgod2VhdGhlckRhdGEubWFpbi50ZW1wIC0gMjczLjE1KSAqICg5IC8gNSkgKyAzMiwgMTApLFxuICAgIGBXaW5kOiAke3dlYXRoZXJEYXRhLndpbmQuc3BlZWR9IE1QSGAsXG4gICAgYEh1bWlkaXR5OiAke3dlYXRoZXJEYXRhLm1haW4uaHVtaWRpdHl9JWAsXG4gICkpO1xufVxuXG5nZXRXZWF0aGVyKCk7XG5jb25zb2xlLmxvZyh3ZWF0aGVyKTtcblxuZXhwb3J0IHsgZ2V0V2VhdGhlciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjb252ZXJ0ZXIgfSBmcm9tICcuL2NvbnZlcnRlcic7XG5pbXBvcnQgeyBnZXRXZWF0aGVyIH0gZnJvbSAnLi9nZXRXZWF0aGVyJztcblxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnZlcnRlcicpO1xuXG5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnZlcnRlcigpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
