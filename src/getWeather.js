/* eslint-disable no-alert */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable prefer-const */
// eslint-disable-next-line import/prefer-default-export
import { weatherDom } from './converter';

export let info = [];

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
  weatherDom(weather);
  info.push(weather);
}

getWeather('san francisco');

export { getWeather };
