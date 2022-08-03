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
const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');
const quotez = document.querySelector('.quote');
const authorz = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');
const buttonPlay = document.querySelector('.play');
const playPrev = document.querySelector('.play-prew');
const playNext = document.querySelector('.play-next');
const player = document.querySelector('.player');



// 1.Часы и календарь

function showTime() {
const date = new Date();
time.innerHTML = date.toLocaleTimeString();
setTimeout(showTime,showDate,getTimeOfDay, 1000);
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

function getTimeOfDay() {
    const date = new Date();
    const hour = date.getHours()
    const arrayDays = ['morning', 'afternoon', 'evening', 'night'];
    if (hour >=6 && hour < 12 )  {
      greeting.textContent = `Good ${arrayDays[0]},`;
      return arrayDays[0];
      } else if (hour >=12 && hour < 18) {
        greeting.textContent = `Good ${arrayDays[1]},`;
        return arrayDays[1];
      } else if (hour >=18 && hour < 24) {
        greeting.textContent = `Good ${arrayDays[2]},`;
        return arrayDays[2];
      } else if (hour >=0 && hour < 6) {
        greeting.textContent = `Good ${arrayDays[3]},`; 
        return arrayDays[3]
      }
    }
getTimeOfDay()

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

// Слайдер
function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setBg(){
const timeOfDay = getTimeOfDay();
const randomBgNum = getRandomNum(1, 20);
const bgNum = randomBgNum.toString().padStart(2, "0");
const img = new Image();
img.src = `https://raw.githubusercontent.com/milsevka/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
img.onload = () => {
  document.body.style.backgroundImage = `url(${img.src})`
}
}
setBg()

let randomNum = getRandomNum(1, 20)

function getSlidePrev () {
if (randomNum === 1) {
  randomNum = 20
} else {
  randomNum = randomNum - 1
}
setBg()
}
function getSlideNext () {
  if (randomNum === 20) {
    randomNum = 1
  } else {
    randomNum = randomNum + 1
  }
  setBg()
}

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);

// 4. Погода



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
}

window.addEventListener('beforeunload', setLocalStorageWeather)
window.addEventListener('load', getLocalStorageWeather)
city.addEventListener('keydown', setCity);

// 5. Виджет "цитата дня"
async function getQuotes() {  
  const quotes = 'quotes.json';
  const res = await fetch(quotes);
  const data = await res.json(); 
  let randomNumQuote = getRandomNum(0, Object.keys(data.quotes).length-1); 
  authorz.textContent = data.quotes[randomNumQuote].author;
  quotez.textContent = data.quotes[randomNumQuote].quote
}
getQuotes();

changeQuote.addEventListener('click', getQuotes);

// 6. Плейлист
 
import playList from './playList.js';
const audio = new Audio();
function playAudio() {
  audio.src = playList[playNum].src;
  audio.currentTime = 0;
  audio.play();
  player.classList.add('meow');
}

function pauseAudio() {
  audio.pause();
  player.classList.remove('meow');
}

function toggleBtn() {
  buttonPlay.classList.toggle('pause');
}

let playNum = 0
function plPrev () {
  playNum--
  if (playNum < 0 ) {
    playNum = playList.length -1
  }
  playAudio()
}

function plNext () {
playNum++
if (playNum > playList.length -1 ) {
  playNum = 0
}
playAudio()
buttonPlay.classList.add('pause');
}


buttonPlay.addEventListener('click', () => {
  const isPlay = player.classList.contains('meow')
  if (isPlay) {
    pauseAudio ()
  } else {
    playAudio()
  }
});


buttonPlay.addEventListener('click', toggleBtn);
playNext.addEventListener('click', plNext);
playPrev.addEventListener('click', plPrev);









