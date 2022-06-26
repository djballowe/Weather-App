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

async function getWeather() {
  const response = await fetch(
    'http://api.openweathermap.org/data/2.5/weather?q=san%20francisco&APPID=6d73026f9846ee18797b582be8d69941',
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
  weatherDom(weather);
  info.push(weather);
}

getWeather();

export { getWeather };
