/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const weatherStatus = document.querySelector('.text');
const description = document.getElementById('description');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const feels = document.getElementById('feels');
const wind = document.getElementById('wind');
const humidity = document.getElementById('humidity');

async function getWeather() {
  const response = await fetch(
    'http://api.openweathermap.org/data/2.5/weather?q=san%20francisco&APPID=6d73026f9846ee18797b582be8d69941',
  );
  const weatherData = await response.json();
  console.log(weatherData);

  description.textContent = weatherData.weather[0].description.toUpperCase();
  city.textContent = weatherData.name.toUpperCase();
  temp.textContent = parseInt((weatherData.main.temp - 273.15) * (9 / 5) + 32, 10);
  feels.textContent = `Feels Like: ${parseInt((weatherData.main.feels_like - 273.15) * (9 / 5) + 32, 10)}`;
  wind.textContent = `Wind: ${weatherData.wind.speed} MPH`;
  humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;
}

getWeather();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxvRUFBb0U7QUFDekcsOEJBQThCLHdCQUF3QjtBQUN0RCxzQ0FBc0MsMEJBQTBCO0FBQ2hFOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgd2VhdGhlclN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXh0Jyk7XG5jb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpO1xuY29uc3QgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5Jyk7XG5jb25zdCB0ZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXAnKTtcbmNvbnN0IGZlZWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZWxzJyk7XG5jb25zdCB3aW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmQnKTtcbmNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWlkaXR5Jyk7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgJ2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1zYW4lMjBmcmFuY2lzY28mQVBQSUQ9NmQ3MzAyNmY5ODQ2ZWUxODc5N2I1ODJiZThkNjk5NDEnLFxuICApO1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuXG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbi50b1VwcGVyQ2FzZSgpO1xuICBjaXR5LnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEubmFtZS50b1VwcGVyQ2FzZSgpO1xuICB0ZW1wLnRleHRDb250ZW50ID0gcGFyc2VJbnQoKHdlYXRoZXJEYXRhLm1haW4udGVtcCAtIDI3My4xNSkgKiAoOSAvIDUpICsgMzIsIDEwKTtcbiAgZmVlbHMudGV4dENvbnRlbnQgPSBgRmVlbHMgTGlrZTogJHtwYXJzZUludCgod2VhdGhlckRhdGEubWFpbi5mZWVsc19saWtlIC0gMjczLjE1KSAqICg5IC8gNSkgKyAzMiwgMTApfWA7XG4gIHdpbmQudGV4dENvbnRlbnQgPSBgV2luZDogJHt3ZWF0aGVyRGF0YS53aW5kLnNwZWVkfSBNUEhgO1xuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHt3ZWF0aGVyRGF0YS5tYWluLmh1bWlkaXR5fSVgO1xufVxuXG5nZXRXZWF0aGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=