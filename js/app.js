var elBtn = document.querySelector(".header__btn");
var body = document.querySelector("body");
var theme = document.querySelector(".theme");
var darkMode = document.querySelector(".dark-mode");

elBtn.addEventListener("click", function () {
  elBtn.parentElement.classList.toggle("show-bg");
  body.classList.toggle("scroll");
})

// theme.addEventListener("click" , function(){
//     body.classList.toggle("dark-mode");
// })