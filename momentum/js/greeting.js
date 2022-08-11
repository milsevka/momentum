const greeting = document.querySelector('.greeting');
const nameMain = document.querySelector('.name');

export default function getTimeOfDay() {
    window.addEventListener('beforeunload', setLocalStorage);
    window.addEventListener('load', getLocalStorage);
    
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
 

function getLocalStorage() {
    if(localStorage.getItem('nameMain')) {
      nameMain.value = localStorage.getItem('nameMain');
    }
  }

  