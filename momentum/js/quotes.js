import {getRandomNum} from './slider.js';
const quotez = document.querySelector('.quote');
const authorz = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

export default async function getQuotes() {  
    const quotes = 'quotes.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    let randomNumQuote = getRandomNum(0, Object.keys(data.quotes).length-1); 
    authorz.textContent = data.quotes[randomNumQuote].author;
    quotez.textContent = data.quotes[randomNumQuote].quote
  }
  getQuotes();
  
  