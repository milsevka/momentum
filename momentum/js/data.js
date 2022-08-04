const dateMain = document.querySelector('.date');

export default function showDate() {
    const date = new Date();
    const options = {month: 'long', day: 'numeric'};
    const currentDate = date.toUTCString('en-US', options);
    dateMain.innerHTML = currentDate.slice(0,-12);
    setTimeout(showDate, 1000);
    }
    showDate()