// JavaScript Document
let videoControls = document.querySelector(".video-control");
let video = document.querySelector("#myvideo");
let videoContainer = document.querySelector(".catalog-video--play");


videoControls.addEventListener("click" , function () {
	 console.log("yes");
	if (video.paused) {
      video.play();
	  videoControls.classList.add("played");
    } else {
		video.pause();
		videoControls.classList.remove("played");
	}
});