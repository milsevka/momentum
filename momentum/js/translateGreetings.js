const greeting = document.querySelector('.greeting');
const nameMain = document.querySelector('.name');

export default function getTimeOfDayBlr() {
    window.addEventListener('beforeunload', setLocalStorage);
    window.addEventListener('load', getLocalStorage);
    
    const date = new Date();
    const hour = date.getHours()
    const arrayDays = ['morning', 'afternoon', 'evening', 'night'];
    const arrayDaysBlr = ['ранiцы', 'дзень', 'вечар', 'Дабранач'];
    if (hour >=6 && hour < 12 )  {
      greeting.textContent = `Добрай ${arrayDaysBlr[0]},`;
      return arrayDays[0];
      } else if (hour >=12 && hour < 18) {
        greeting.textContent = `Добры ${arrayDaysBlr[1]},`;
        return arrayDays[1];
      } else if (hour >=18 && hour < 24) {
        greeting.textContent = `Добры ${arrayDaysBlr[2]},`;
        return arrayDays[2];
      } else if (hour >=0 && hour < 6) {
        greeting.textContent = `${arrayDaysBlr[3]},`; 
        return arrayDays[3]
      }
    
    }


function setLocalStorage() {
    localStorage.setItem('nameMain', nameMain.value);
  }
 

function getLocalStorage() {
    if(localStorage.getItem('nameMain')) {
      nameMain.value = localStorage.getItem('nameMain');
    }
  }

  