const time = document.querySelector('.time');

export default function showTime() {
    const date = new Date();
    time.innerHTML = date.toLocaleTimeString();
    setTimeout(showTime, 1000);
    }
    showTime()
    



