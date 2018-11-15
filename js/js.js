$('.slider').slick({

  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: 'linear'
});
var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".close-popup");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
