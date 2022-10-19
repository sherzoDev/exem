var elBtn = document.querySelector(".header__btn");
var body = document.querySelector("body");

elBtn.addEventListener("click", function () {
  elBtn.parentElement.classList.toggle("show-bg");
  body.classList.toggle("scroll");
})