import playList from "./playList.js";
const buttonPlay = document.querySelector(".play");
const playPrev = document.querySelector(".play-prev");
const playNext = document.querySelector(".play-next");
const player = document.querySelector(".player");
const audio = new Audio();
let playNum = 0;
export default function playAudio() {
  player.classList.add("meow");
  buttonPlay.addEventListener("click", toggleBtn);
  playNext.addEventListener("click", plNext);
  playPrev.addEventListener("click", plPrev);
  audio.src = playList[playNum].src;
  audio.currentTime = 0;
  audio.play();
}
playAudio();

function pauseAudio() {
  audio.pause();
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
}

function plNext() {
  playNum++;
  if (playNum > playList.length - 1) {
    playNum = 0;
  }
  playAudio();
  buttonPlay.classList.add("pause");
}

buttonPlay.addEventListener("click", () => {
  const isPlay = player.classList.contains("meow");
  if (isPlay) {
    pauseAudio();
  } else {
    playAudio();
  }
});