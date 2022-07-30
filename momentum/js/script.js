const time = document.querySelector('.time');
const dateMain = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const nameMain = document.querySelector('.name');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');


// 1.Часы и календарь

function showTime() {
const date = new Date();
time.innerHTML = date.toLocaleTimeString();
setTimeout(showTime,showDate,showGreeting, 1000);
}
showTime()

function showDate() {
const date = new Date();
const options = {month: 'long', day: 'numeric'};
const currentDate = date.toUTCString('en-US', options);
dateMain.innerHTML = currentDate.slice(0,-12);
}
showDate()

// 2. Приветствие

function showGreeting() {
    const date = new Date();
    const hour = date.getHours()
    if (hour < 12) {
        greeting.innerHTML = 'Good morning, ';
      } else if (hour < 17) {
        greeting.innerHTML = 'Good afternoon, ';
      } else if (hour < 20) {
        greeting.innerHTML = 'Good evening, ';
      } else {
        greeting.innerHTML = 'Good night, ';
      }
    }
showGreeting()

function setLocalStorage() {
    localStorage.setItem('nameMain', nameMain.value);
  }
  window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if(localStorage.getItem('nameMain')) {
      nameMain.value = localStorage.getItem('nameMain');
    }
  }
window.addEventListener('load', getLocalStorage)
// 3. Слайдер


// 4. Погода

async function getWeather() {  
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
  wind.textContent = `Wind speed: ${dataW.wind.speed} m/s`;
  humidity.textContent = `Humidity: ${dataW.main.humidity} %`;
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

window.addEventListener('beforeunload', setLocalStorageWeather)
window.addEventListener('load', getLocalStorageWeather)
city.addEventListener('keydown', setCity);

// 5. Виджет "цитата дня"