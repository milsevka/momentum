const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');


async function getWeather() { 
    let url = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=en&appid=4d15f3c7e3cf78bab2ecd92db3f8b6dc&units=metric`; 
    if (!city.value) {
      url = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=en&appid=4d15f3c7e3cf78bab2ecd92db3f8b6dc&units=metric`;
    } else {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=4d15f3c7e3cf78bab2ecd92db3f8b6dc&units=metric`;
    }
  
    const res = await fetch(url);
    const dataW = await res.json(); 
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${dataW.weather[0].id}`);
    temperature.textContent = `${Math.ceil(dataW.main.temp)}°C`;
    weatherDescription.textContent = dataW.weather[0].description;
    wind.textContent = `Wind speed: ${Math.ceil(dataW.wind.speed)} m/s`;
    humidity.textContent = `Humidity: ${dataW.main.humidity} %`;

    window.addEventListener('beforeunload', setLocalStorageWeather)
    window.addEventListener('load', getLocalStorageWeather)
    city.addEventListener('keydown', setCity);
  }
  
function setLocalStorageWeather() {
    localStorage.setItem('city', city.value);
  }
  
  function getLocalStorageWeather() {
    if(localStorage.getItem('city')) {
      city.value = localStorage.getItem('city');
    } else {
      city.value = 'Minsk';
    }
    getWeather()
  }
   function setCity(event) {
    if (event.code === 'Enter') {
      getWeather();
    }
   }
  
  
export default function mainWeather() {
    getWeather()
}