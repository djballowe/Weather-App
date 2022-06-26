const weatherStatus = document.querySelector('.text');
const description = document.getElementById('description');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const feels = document.getElementById('feels');
const wind = document.getElementById('wind');
const humidity = document.getElementById('humidity');

async function getWeather() {
  const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=san%20francisco&APPID=6d73026f9846ee18797b582be8d69941');
  const weatherData = await response.json();
  console.log(weatherData);

  description.textContent = weatherData.weather[0].description.toUpperCase();
  city.textContent = weatherData.name.toUpperCase();
}

getWeather();
