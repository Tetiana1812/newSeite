// JavaScript Document
let navMain = document.querySelector(".main-nav");
let navToggle = document.querySelector(".main-nav__toggle");
let popupReviews = document.querySelector(".modal-content-reviews");
let link = document.querySelector(".reviews__button");
let close = document.querySelector(".reviews-write--close");
let name = popupReviews.querySelector("#name");
let btnClose = popupReviews.querySelector(".reviews-write__btn");

navToggle.addEventListener("click" ,function() {
	console.log("нажала");
	if(navMain.classList.contains("main-nav--closed")) {
		navMain.classList.remove("main-nav--closed");
		navMain.classList.add("main-nav--opened");
	} else {
		navMain.classList.add("main-nav--closed");
		navMain.classList.remove("main-nav--opened");
			}
});

link.addEventListener("click", function(event){
	popupReviews.classList.add("reviews-write--show");
	name.focus();
});

close.addEventListener("click", function(event){
	popupReviews.classList.remove("reviews-write--show");
})

btnClose.addEventListener("click", function(event) {
	popupReviews.classList.remove("reviews-write--show");
})
window.addEventListener("keydown", function(event){
		if(event.keyCode===27) {
			if(popupReviews.classList.contains("reviews-write--show")){
				popupReviews.classList.remove("reviews-write--show")
			}
		}
	});

