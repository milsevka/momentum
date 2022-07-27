const time = document.querySelector('.time');
const dateMain = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const nameMain = document.querySelector('.name');


// 1.Часы и календарь

function showTime() {
const date = new Date();
time.innerHTML = date.toLocaleTimeString();
setTimeout(showTime,showDate, 1000);
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
    if (hour <= 6) {
        greeting.innerHTML = 'Good night, ';
      } else if (hour <= 12) {
        greeting.innerHTML = 'Good morning, ';
      } else if (hour <= 18) {
        greeting.innerHTML = 'Good day, ';
      } else {
        greeting.innerHTML = 'Good evening, ';
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
