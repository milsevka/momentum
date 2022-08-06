import playList from "./playList.js";

export default function music() {
  const buttonPlay = document.querySelector(".play");
  const playPrev = document.querySelector(".play-prev");
  const playNext = document.querySelector(".play-next");
  const player = document.querySelector(".player");
  const audio = new Audio();
  let playNum = 0;
  player.classList.add("meow");
  buttonPlay.addEventListener("click", toggleBtn);
  playNext.addEventListener("click", plNext);
  playPrev.addEventListener("click", plPrev);

  function updateCurrentSong() {
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    audio.play()
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
      playAudio();
    } else {
      pauseAudio();
    }
  });
}
music();
