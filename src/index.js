const description = document.getElementById('description');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const feels = document.getElementById('feels');
const wind = document.getElementById('wind');
const humidity = document.getElementById('humidity');
const button = document.getElementById('converter');

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

function converter() {
  if (button.textContent === 'F') {
    button.textContent = 'C';
    temp.textContent = parseInt((temp.textContent - 32) * (5 / 9), 10);
  } if (button.textContent === 'C') {
    button.textContent = 'F';
    temp.textContent = parseInt((temp.textContent - 32) * (5 / 9), 10);
  }
}

button.addEventListener('click', () => {
  converter();
});
