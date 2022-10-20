var elBtn = document.querySelector(".header-burger");
var body = document.querySelector("body");
var theme = document.querySelector(".theme");
var darkMode = document.querySelector(".dark-mode");

elBtn.addEventListener("click", function () {
  elBtn.parentElement.classList.toggle("header-open");
  body.classList.toggle("scroll");  
})