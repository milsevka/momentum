const setBtn = document.querySelector(".settingBtn");
const settingCont = document.querySelector(".setting");
const playCheck = document.querySelector(".play_check");
const weatherCheck = document.querySelector(".weather_check");
const greetСheck = document.querySelector(".greet_check");
const timeCheck = document.querySelector(".time_check");
const dataCheck = document.querySelector(".data_check");
const quotesCheck = document.querySelector(".quotes_check");
const greetingСontainer = document.querySelector(".greeting-container");
const time = document.querySelector('.time');
const dateMain = document.querySelector('.date');
const quoteContainer = document.querySelector('.quoteContainer');

const player = document.querySelector(".player");
const weather = document.querySelector(".weather");

export function settingMain () {
    settingCont.classList.toggle("hidden")
}
setBtn.addEventListener("click", settingMain)

export function checkSetting () {
    if (!playCheck.checked) {
        player.classList.add("checkPassive")
    } else {
        player.classList.remove("checkPassive") 
    };
    if (!weatherCheck.checked) {
        weather.classList.add("checkPassive")
    } else {
        weather.classList.remove("checkPassive") 
    }
    if (!greetСheck.checked) {
        greetingСontainer.classList.add("checkPassive")
    } else {
        greetingСontainer.classList.remove("checkPassive") 
    }
    if (!timeCheck.checked) {
        time.classList.add("checkPassive")
    } else {
        time.classList.remove("checkPassive") 
    }
    if (!dataCheck.checked) {
        dateMain.classList.add("checkPassive")
    } else {
        dateMain.classList.remove("checkPassive") 
    }
    if (!quotesCheck.checked) {
        quoteContainer.classList.add("checkPassive")
    } else {
        quoteContainer.classList.remove("checkPassive") 
    }

}
playCheck.addEventListener('change', checkSetting);
weatherCheck.addEventListener('change', checkSetting);
greetСheck.addEventListener('change', checkSetting);
timeCheck.addEventListener('change', checkSetting);
dataCheck.addEventListener('change', checkSetting);
quotesCheck.addEventListener('change', checkSetting);

