const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const weatherDescription = document.querySelector(".weather-description");
const city = document.querySelector(".city");

city.addEventListener("keydown", setCity);
getLocalStorageWeather();

export async function weatherTranslate() { 
    let urlW;
    if (!city.value) {
      urlW = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=be&appid=13f3a0cc39cf73fb3e828a40d38dac5b&units=metric`;
    } else {
      urlW = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=be&appid=13f3a0cc39cf73fb3e828a40d38dac5b&units=metric`;
    }
    try {
        let resW = await fetch(urlW);
        let dataWW = await resW.json();
        weatherIcon.className = "weather-icon owf";
        weatherIcon.classList.add(`owf-${dataWW.weather[0].id}`);
        temperature.textContent = `${Math.ceil(dataWW.main.temp)}°C`;
        weatherDescription.textContent = dataWW.weather[0].description;
        wind.textContent = `Хуткасць паветра: ${Math.ceil(dataWW.wind.speed)} m/s`;
        humidity.textContent = `Вільготнасць: ${dataWW.main.humidity} %`;
      } catch (error) {
        city.value = "Мiнск";
        alert("Няверны горад");
        getWeather();
      }
  }
  function getLocalStorageWeather() {
    if (localStorage.getItem("city")) {
      city.value = localStorage.getItem("city");
    } else {
      city.value = "Мiнск";
    }
  }
  
  function setCity(event) {
    if (event.code === "Enter") {
        weatherTranslate();
      localStorage.setItem("city", city.value);
    }
  }

