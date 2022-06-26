import { converter } from './converter';
import { weatherDom, getWeather } from './getWeather';

const button = document.getElementById('converter');

button.addEventListener('click', () => {
  converter();
});
