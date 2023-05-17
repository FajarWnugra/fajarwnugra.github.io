"use strict";

/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("active");
});

/**
 * show go top btn when scroll window to 500px
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");
});

// const audio = new Audio();
// audio.src = "assets/audio/BATAS.mp3";
// audio.loop = true;
// audio.play();
// audio.pause();

var audio = document.getElementById("myAudio");

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

function replayAudio() {
  audio.currentTime = 0;
  audio.play();
}

// function mulaiaudio() {
//   var play = document.getElementById("btnplay");
//   var mute = document.getElementById("btnplay");

//   play.addEventListener("click", play);
//   mute.addEventListener("click", mute);
// }
