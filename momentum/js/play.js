import playList from "./playList.js";
const audio = new Audio();
const progress = document.querySelector(".progress");
const progressCont = document.querySelector(".progress_container");
const playNow = document.querySelector(".playNow");
const timePlay = document.querySelector(".time_play");
const timeBit = document.querySelector(".currentPlay");
const timeAll = document.querySelector(".lengthPlay");
const volumeImg = document.querySelector(".volumeImg");
const volumeImgOff = document.querySelector(".volumeImgOff");
const volume = document.querySelector(".volume");
const buttonPlay = document.querySelector(".play");


export function music() {
  
  const playPrev = document.querySelector(".play-prev");
  const playNext = document.querySelector(".play-next");
  const player = document.querySelector(".player");
  const playItem = document.querySelectorAll(".play-item");
  
  let playNum = 0;
  player.classList.add("meow");
  buttonPlay.addEventListener("click", toggleBtn);
  playNext.addEventListener("click", plNext);
  playPrev.addEventListener("click", plPrev);
  audio.addEventListener('ended', plNext)
  // playItem[playNum].classList.add("item-active");
  function updateCurrentSong() {
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    audio.play()
    playNow.textContent = `${playList[playNum].title}`
    timeAll.textContent = `${playList[playNum].duration}`
    // playItem[playNum].classList.add("item-active");
  }
  
  function pauseAudio() {
    audio.pause();
    player.classList.add("meow");
    playItem[playNum].classList.remove("item-active");
  }
  function playAudio() {
    updateCurrentSong();
    audio.play();
    player.classList.remove("meow");
    playItem[playNum].classList.add("item-active");
    playItem[playNum-1].classList.remove("item-active");
    playItem[playNum+1].classList.remove("item-active");
  }

  function toggleBtn() {
    buttonPlay.classList.toggle("pause");
  }

  function plPrev() {
    playNum--;
    if (playNum < 0) {
      playNum = playList.length - 1;
    }
    playAudio();
    buttonPlay.classList.add("pause");
    // playItem[playNum+1].classList.remove("item-active");
  }

  function plNext() {
    playNum++;
    if (playNum > playList.length - 1) {
      playNum = 0;
    }
    playAudio();
    buttonPlay.classList.add("pause");
    // playItem[playNum-1].classList.remove("item-active");
  }

  buttonPlay.addEventListener("click", () => {
    progressCont.classList.toggle("passive");
    timePlay.classList.toggle("passive");
    const isPlay = player.classList.contains("meow");
    if (isPlay) {
      playAudio();
    } else {
      pauseAudio();
    }
  });
  volumeImg.addEventListener("mouseover", () => {
  volume.classList.toggle("active");
  })
  volumeImg.addEventListener("click", () => {
    volumeImgOff.classList.add("active");
    volumeImg.classList.add("passive");
    audio.volume = 0;
    })
  volumeImgOff.addEventListener("click", () => {
      volumeImgOff.classList.remove("active");
      volumeImg.classList.remove("passive");
      audio.volume = 0.5;
      })

  function audioValue() {
    let v = this.value;
    audio.volume = v /100;
  }
  document.querySelector('.volume').oninput = audioValue;

 
}
music();
export function updateProgress (e) {
  const {duration, currentTime} = e.srcElement;
  const progressPercent = (currentTime / duration) * 100
  progress.style.width = `${progressPercent}%`
  }
  audio.addEventListener('timeupdate', updateProgress)
  
  export function clickProgress (e) {
    const widthCont = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration
    audio.currentTime = (clickX / widthCont ) * duration
  }
  progressCont.addEventListener('click', clickProgress)

  export function setUpdate() {
    if (!isNaN(audio.duration)) {
      let curMin = Math.floor(audio.currentTime / 60);
      let curSec = Math.floor(audio.currentTime - curMin * 60);
      if (curSec<10){curSec = "0" + curSec;}
      if (curMin<10){curMin = "0" + curMin;}
      timeBit.textContent = curMin + ":" + curSec;
    }
    setTimeout(setUpdate, 1000);
  } 
  buttonPlay.addEventListener('click', setUpdate)


