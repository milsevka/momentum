const setBtn = document.querySelector(".settingBtn");
const settingCont = document.querySelector(".setting");
const playCheck = document.querySelector(".play_check");
const weatherCheck = document.querySelector(".weather_check");
const greetСheck = document.querySelector(".greet_check");
const timeCheck = document.querySelector(".time_check");
const dataCheck = document.querySelector(".data_check");
const quotesCheck = document.querySelector(".quotes_check");
const greetingСontainer = document.querySelector(".greeting-container");
const time = document.querySelector(".time");
const dateMain = document.querySelector(".date");
const quoteContainer = document.querySelector(".quoteContainer");

const player = document.querySelector(".player");
const weather = document.querySelector(".weather");

export let settings = {
  playList: true,
  weather: true,
  greeting: true,
  time: true,
  date: true,
  quotes: true,
};

function checkSettingInStorage() {
  if (localStorage.getItem("settings")) {
    settings = JSON.parse(localStorage.getItem("settings"));
    console.log("settings: ", settings);
    playCheck.checked = settings.playList;
    console.log("settings.playList: ", settings.playList);
    console.log("playCheck.checked: ", playCheck.checked);
    weatherCheck.checked = settings.weather;
    greetСheck.checked = settings.greeting;
    timeCheck.checked = settings.time;
    dataCheck.checked = settings.date;
    quotesCheck.checked = settings.quotes;
    checkSetting();
  }
}

checkSettingInStorage();

export function settingMain() {
  settingCont.classList.toggle("hidden");
}

setBtn.addEventListener("click", settingMain);
export function checkSetting() {
  if (!playCheck.checked) {
    player.classList.add("checkPassive");
    settings.playList = false;
  } else {
    player.classList.remove("checkPassive");
    settings.playList = true;
  }
  if (!weatherCheck.checked) {
    weather.classList.add("checkPassive");
    settings.weather = false;
  } else {
    weather.classList.remove("checkPassive");
    settings.weather = true;
  }
  if (!greetСheck.checked) {
    greetingСontainer.classList.add("checkPassive");
    settings.greeting = false;
  } else {
    greetingСontainer.classList.remove("checkPassive");
    settings.greeting = true;
  }
  if (!timeCheck.checked) {
    time.classList.add("checkPassive");
    settings.time = false;
  } else {
    time.classList.remove("checkPassive");
    settings.time = true;
  }
  if (!dataCheck.checked) {
    dateMain.classList.add("checkPassive");
    settings.date = false;
  } else {
    dateMain.classList.remove("checkPassive");
    settings.date = true;
  }
  if (!quotesCheck.checked) {
    quoteContainer.classList.add("checkPassive");
    settings.quotes = false;
  } else {
    quoteContainer.classList.remove("checkPassive");
    settings.quotes = true;
  }
  localStorage.setItem("settings", JSON.stringify(settings));
}
playCheck.addEventListener("change", checkSetting);
weatherCheck.addEventListener("change", checkSetting);
greetСheck.addEventListener("change", checkSetting);
timeCheck.addEventListener("change", checkSetting);
dataCheck.addEventListener("change", checkSetting);
quotesCheck.addEventListener("change", checkSetting);
