const setBtn = document.querySelector(".settingBtn");
const settingCont = document.querySelector(".setting");

export default function settingMain () {
    settingCont.classList.toggle("hidden")
}
setBtn.addEventListener("click", settingMain)