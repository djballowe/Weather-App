async function getWeather() {
  const response = await fetch("http://api.openweathermap.org/data/2.5/weather?q=new%20york&APPID=6d73026f9846ee18797b582be8d69941");
  const weatherData = await response.json();
  console.log(weatherData.city);
}

getWeather();
