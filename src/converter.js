const description = document.getElementById('description');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const feels = document.getElementById('feels');
const wind = document.getElementById('wind');
const humidity = document.getElementById('humidity');
const button = document.getElementById('converter');

function weatherDom(weather) {
  description.textContent = weather.description;
  city.textContent = weather.city;
  temp.textContent = weather.temp;
  feels.textContent = weather.feels;
  wind.textContent = weather.wind;
  humidity.textContent = weather.humidity;
}

function converter() {
  if (button.textContent === 'C') {
    button.textContent = 'F';
    temp.textContent = Math.round((temp.textContent - 32) * (5 / 9));
    feels.textContent = `Feels Like: ${Math.round((feels.textContent - 32) * (5 / 9))}`;
  } else if (button.textContent === 'F') {
    button.textContent = 'C';
    temp.textContent = Math.round(temp.textContent * (9 / 5) + 32);
    feels.textContent = `Feels Like: ${Math.round(((feels.textContent * (9 / 5)) + 32))}`;
  }
}

export { converter, weatherDom };
