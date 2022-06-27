import { converter } from './converter';
import { getWeather } from './getWeather';

const button = document.getElementById('converter');
const search = document.getElementById('search-button');
const cityInfo = document.getElementById('search');
const body = document.querySelector('body');

button.addEventListener('click', () => {
  converter();
});

search.addEventListener('click', () => {
  getWeather(cityInfo.value);
  cityInfo.value = '';
});

body.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && cityInfo.value !== '') {
    getWeather(cityInfo.value);
    cityInfo.value = '';
  }
});
