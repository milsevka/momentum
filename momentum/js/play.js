import playList from "./playList.js";
const audio = new Audio();
const progress = document.querySelector(".progress");
const progressCont = document.querySelector(".progress_container");
const playNow = document.querySelector(".playNow");
// const timeBit = document.querySelector(".currentPlay");
const timeAll = document.querySelector(".lengthPlay");
const volumeImg = document.querySelector(".volumeImg");
const volume = document.querySelector(".volume");



export function music() {
  const buttonPlay = document.querySelector(".play");
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
//  player.addEventListener("timeupdate", videoProgress)
  function updateCurrentSong() {
    playItem[playNum].classList.toggle("item-active");
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    audio.play()
    playNow.textContent = `${playList[playNum].title}`
    timeAll.textContent = `${playList[playNum].duration}`
  }
  function pauseAudio() {
    audio.pause();
    player.classList.add("meow");
  }
  function playAudio() {
    updateCurrentSong();
    audio.play();
    player.classList.remove("meow");
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
    playItem[playNum+1].classList.remove("item-active");
  }

  function plNext() {
    playNum++;
    if (playNum > playList.length - 1) {
      playNum = 0;
    }
    playAudio();
    buttonPlay.classList.add("pause");
    playItem[playNum-1].classList.remove("item-active");
  }

  buttonPlay.addEventListener("click", () => {
    const isPlay = player.classList.contains("meow");
    if (isPlay) {
      playAudio();
    } else {
      pauseAudio();
    }
    
  });
  volumeImg.addEventListener("click", () => {
  volume.classList.toggle("active");
  })
  volumeImg.addEventListener("mousedown", () => {
    audio.volume = 0;
    })

  function audioValue() {
    let v = this.value;
    audio.volume = v /100;
  }
  document.querySelector('.volume').oninput = audioValue;
  // function videoProgress() { //Отображаем время воспроизведения
  //   progress = (Math.floor(player.currentTime) / (Math.floor(player.duration) / 100));
  //   progressBar.value = progress;
  //   timeBit.innerHTML = videoTime(player.currentTime);
  //   }
 
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

//  function getTimeCodeFromNum(num) {
//     let seconds = parseInt(num);
//     let minutes = parseInt(seconds / 60);
//     seconds -= minutes * 60;
//     const hours = parseInt(minutes / 60);
//     minutes -= hours * 60;
  
//     if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
//     return `${String(hours).padStart(2, 0)}:${minutes}:${String(
//       seconds % 60
//     ).padStart(2, 0)}`;
//   }
 