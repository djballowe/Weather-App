/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const description = document.getElementById('description');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const feels = document.getElementById('feels');
const wind = document.getElementById('wind');
const humidity = document.getElementById('humidity');
const button = document.getElementById('converter');

async function getWeather(info) {
  const response = await fetch(
    'http://api.openweathermap.org/data/2.5/weather?q=san%20francisco&APPID=6d73026f9846ee18797b582be8d69941',
  );
  const weatherData = await response.json();
  console.log(weatherData);

  description.textContent = weatherData.weather[0].description.toUpperCase();
  city.textContent = weatherData.name.toUpperCase();
  temp.textContent = Math.round(
    (weatherData.main.temp - 273.15) * (9 / 5) + 32,
    10,
  );
  feels.textContent = `Feels Like: ${Math.round(
    (weatherData.main.feels_like - 273.15) * (9 / 5) + 32,
    10,
  )}`;
  wind.textContent = `Wind: ${weatherData.wind.speed} MPH`;
  humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;
}

getWeather();

function converter() {
  if (button.textContent === 'C') {
    button.textContent = 'F';
    temp.textContent = Math.round((temp.textContent - 32) * (5 / 9));
  } else if (button.textContent === 'F') {
    button.textContent = 'C';
    temp.textContent = Math.round(temp.textContent * (9 / 5) + 32);
  }
}

function search() {}

button.addEventListener('click', () => {
  converter();
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0EsSUFBSTtBQUNKLDhCQUE4Qix3QkFBd0I7QUFDdEQsc0NBQXNDLDBCQUEwQjtBQUNoRTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJyk7XG5jb25zdCBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHknKTtcbmNvbnN0IHRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcCcpO1xuY29uc3QgZmVlbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlbHMnKTtcbmNvbnN0IHdpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZCcpO1xuY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtaWRpdHknKTtcbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb252ZXJ0ZXInKTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihpbmZvKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgJ2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1zYW4lMjBmcmFuY2lzY28mQVBQSUQ9NmQ3MzAyNmY5ODQ2ZWUxODc5N2I1ODJiZThkNjk5NDEnLFxuICApO1xuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuXG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbi50b1VwcGVyQ2FzZSgpO1xuICBjaXR5LnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEubmFtZS50b1VwcGVyQ2FzZSgpO1xuICB0ZW1wLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChcbiAgICAod2VhdGhlckRhdGEubWFpbi50ZW1wIC0gMjczLjE1KSAqICg5IC8gNSkgKyAzMixcbiAgICAxMCxcbiAgKTtcbiAgZmVlbHMudGV4dENvbnRlbnQgPSBgRmVlbHMgTGlrZTogJHtNYXRoLnJvdW5kKFxuICAgICh3ZWF0aGVyRGF0YS5tYWluLmZlZWxzX2xpa2UgLSAyNzMuMTUpICogKDkgLyA1KSArIDMyLFxuICAgIDEwLFxuICApfWA7XG4gIHdpbmQudGV4dENvbnRlbnQgPSBgV2luZDogJHt3ZWF0aGVyRGF0YS53aW5kLnNwZWVkfSBNUEhgO1xuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHt3ZWF0aGVyRGF0YS5tYWluLmh1bWlkaXR5fSVgO1xufVxuXG5nZXRXZWF0aGVyKCk7XG5cbmZ1bmN0aW9uIGNvbnZlcnRlcigpIHtcbiAgaWYgKGJ1dHRvbi50ZXh0Q29udGVudCA9PT0gJ0MnKSB7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0YnO1xuICAgIHRlbXAudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKCh0ZW1wLnRleHRDb250ZW50IC0gMzIpICogKDUgLyA5KSk7XG4gIH0gZWxzZSBpZiAoYnV0dG9uLnRleHRDb250ZW50ID09PSAnRicpIHtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQyc7XG4gICAgdGVtcC50ZXh0Q29udGVudCA9IE1hdGgucm91bmQodGVtcC50ZXh0Q29udGVudCAqICg5IC8gNSkgKyAzMik7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2VhcmNoKCkge31cblxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb252ZXJ0ZXIoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9