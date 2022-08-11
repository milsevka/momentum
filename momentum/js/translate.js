const langChec = document.querySelector(".checkLangBtn");
const quotez = document.querySelector('.quote');
const authorz = document.querySelector('.author');

import {getRandomNum} from './slider.js';
import getQuotes from './quotes.js';
import {weatherTranslate} from './translateWeather.js';
import getWeather from './weather.js'
import {showDate} from './data.js'
import {translateDate} from './data.js'
import {greetingTranslation} from './languages.js'
const playCheckP = document.querySelector(".settingTitllePlay");
const playCheckW = document.querySelector(".settingTitlleWeather");
const playCheckG = document.querySelector(".settingTitlleGreeting");
const playCheckT = document.querySelector(".settingTitlleTime");
const playCheckD = document.querySelector(".settingTitlleData");
const playCheckQ = document.querySelector(".settingTitlleQuotes");


export function checkTranslate () {
    if (!langChec.checked) {
        quoteTranslate()
        weatherTranslate()
        translateDate()
        playCheckP.innerHTML = greetingTranslation["play_check"]["be"]
        playCheckW.innerHTML = greetingTranslation["weather_check"]["be"]
        playCheckG.innerHTML = greetingTranslation["greet_check"]["be"]
        playCheckT.innerHTML = greetingTranslation["time_check"]["be"]
        playCheckD.innerHTML = greetingTranslation["data_check"]["be"]
        playCheckQ.innerHTML = greetingTranslation["quotes_check"]["be"]
     } else {
        getQuotes()
        getWeather()
        showDate()
        playCheckP.innerHTML = greetingTranslation["play_check"]["en"]
        playCheckW.innerHTML = greetingTranslation["weather_check"]["en"]
        playCheckG.innerHTML = greetingTranslation["greet_check"]["en"]
        playCheckT.innerHTML = greetingTranslation["time_check"]["en"]
        playCheckD.innerHTML = greetingTranslation["data_check"]["en"]
        playCheckQ.innerHTML = greetingTranslation["quotes_check"]["en"]
     }
}
     
langChec.addEventListener('change', checkTranslate);

 async function quoteTranslate () {  
    const quotesB = 'quotesBLR.json';
        const resB = await fetch(quotesB);
        const dataB = await resB.json(); 
        let randomNumQuote = getRandomNum(0, Object.keys(dataB.quotes).length-1); 
        authorz.textContent = dataB.quotes[randomNumQuote].author;
        quotez.textContent = dataB.quotes[randomNumQuote].text;
        // changeQuote.addEventListener('click', quoteTranslate);
  }
  
  
