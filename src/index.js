import { converter } from './converter';
import { getWeather } from './getWeather';

const button = document.getElementById('converter');
const search = document.getElementById('search-button');
const cityInfo = document.getElementById('search').value;

button.addEventListener('click', () => {
  converter();
});

search.addEventListener('click', () => {
  getWeather(cityInfo);
  console.log('click');
});
