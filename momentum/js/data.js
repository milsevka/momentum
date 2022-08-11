const dateMain = document.querySelector('.date');

export function showDate() {
    const date = new Date();
    const options = {month: 'long', day: 'numeric'};
    const currentDate = date.toUTCString('en-US', options);
    dateMain.innerHTML = currentDate.slice(0,-12);
    // setTimeout(showDate, 1000);
    }
    showDate()

export function translateDate() {
        const dateT = new Date();
        const optionsT = {weekday: 'long', month: 'long', day: 'numeric',  year: 'numeric'};
        const currentDateT = dateT.toLocaleString('be-BY', optionsT);
        dateMain.innerHTML = currentDateT
        // setTimeout(translateDate, 1000);
        }
        
        