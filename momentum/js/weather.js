const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const weatherDescription = document.querySelector(".weather-description");
const city = document.querySelector(".city");

city.addEventListener("keydown", setCity);
getWeather();
getLocalStorageWeather()

export default async function getWeather() {

  let url;
  if (!city.value) {
    url = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=en&appid=13f3a0cc39cf73fb3e828a40d38dac5b&units=metric`;
  } else {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=13f3a0cc39cf73fb3e828a40d38dac5b&units=metric`;
  }

  try {
    const res = await fetch(url);
    const dataW = await res.json();
    weatherIcon.className = "weather-icon owf";
    weatherIcon.classList.add(`owf-${dataW.weather[0].id}`);
    temperature.textContent = `${Math.ceil(dataW.main.temp)}°C`;
    weatherDescription.textContent = dataW.weather[0].description;
    wind.textContent = `Wind speed: ${Math.ceil(dataW.wind.speed)} m/s`;
    humidity.textContent = `Humidity: ${dataW.main.humidity} %`;
  } catch (error) {
    city.value = "Minsk";
    alert("Wrong city");
    getWeather();
  }
}

function getLocalStorageWeather() {
  if (localStorage.getItem("city")) {
    city.value = localStorage.getItem("city");
  } else {
    city.value = "Minsk";
  }
}

function setCity(event) {
  if (event.code === "Enter") {
    getWeather();
    localStorage.setItem("city", city.value);
  }
}

