import getTimeOfDay from "./greeting.js";

const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');
let randomNum = getRandomNum(1, 20)

export  function setBg(){
const timeOfDay = getTimeOfDay('./greeting.js');
let bgNum = randomNum.toString().padStart(2, "0");
const img = new Image();
img.src = `https://raw.githubusercontent.com/milsevka/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
img.onload = () => {
  document.body.style.backgroundImage = `url(${img.src})`
}
slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);
}
setBg()
function getSlidePrev () {
    if (randomNum === 1) {
      randomNum = 20
    } else {
      randomNum = randomNum - 1
    }
    setBg()
    }
function getSlideNext () {
      if (randomNum === 20) {
        randomNum = 1
      } else {
        randomNum = randomNum + 1
      }
      setBg()
    }
   
export function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




