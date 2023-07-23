const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "3ffb7dcadd73c0eaae2dfa89c7bc79ba";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} - ${data.main.temp}°C -`;
    });
}
function onGeoError() {
  alert("Can't find your location. No weather data available.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);