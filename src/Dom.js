/* eslint-disable import/prefer-default-export */
import { info } from './getWeather';

const description = document.getElementById('description');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const feels = document.getElementById('feels');
const wind = document.getElementById('wind');
const humidity = document.getElementById('humidity');

function weatherDom() {
  description.textContent = info.description;
  city.textContent = info.city;
  temp.textContent = info.temp;
  feels.textContent = info.feels;
  wind.textContent = info.wind;
  humidity.textContent = info.humidity;
  console.log(info);
}

export { weatherDom };
