// eslint-disable-next-line import/no-cycle
import { info } from './getWeather';

const description = document.getElementById('description');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const feels = document.getElementById('feels');
const wind = document.getElementById('wind');
const humidity = document.getElementById('humidity');
const button = document.getElementById('converter');
const C = document.getElementById('C');
const F = document.getElementById('F');

function weatherDom(weather) {
  description.textContent = weather.description;
  city.textContent = weather.city;
  temp.textContent = weather.temp;
  feels.textContent = `Feels Like: ${weather.feels}`;
  wind.textContent = weather.wind;
  humidity.textContent = weather.humidity;
}

function converter() {
  if (button.textContent === 'C') {
    button.textContent = 'F';
    C.style.display = 'block';
    F.style.display = 'none';
    const nFeels = Math.round((info[0].feels - 32) * (5 / 9));
    const nTemp = Math.round((info[0].temp - 32) * (5 / 9));
    temp.textContent = nTemp;
    feels.textContent = `Feels like: ${nFeels}`;
  } else if (button.textContent === 'F') {
    button.textContent = 'C';
    C.style.display = 'none';
    F.style.display = 'block';
    const nFeels = info[0].feels;
    const nTemp = info[0].temp;
    temp.textContent = nTemp;
    feels.textContent = `Feels like: ${nFeels}`;
  }
}

console.log(info);

export { converter, weatherDom };
