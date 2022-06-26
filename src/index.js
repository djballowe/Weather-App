import { converter } from './converter';
import { weatherDom } from './Dom';
import { getWeather } from './getWeather';

const button = document.getElementById('converter');

button.addEventListener('click', () => {
  converter();
});

getWeather();
weatherDom();
