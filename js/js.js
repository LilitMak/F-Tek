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
var close1 = document.querySelector(".js-close-campaign");
var close = document.querySelector(".js-close-thank-you");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close1.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

close.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.remove("modal-show");
});


// Отправка заявки
$(document).ready(function() {
	$('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
		if (document.form.name.value == '' || document.form.phone.value == '' ) {
			valid = false;
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('.js-overlay-thank-you').fadeIn();
			$(this).find('input').val('');
			$('#form').trigger('reset');
		});
		return false;
	});
});

// Закрыть попап «спасибо»
$('.js-close-thank-you').click(function() { // по клику на крестик
	$('.js-overlay-thank-you').fadeOut();
});

$(document).mouseup(function (e) { // по клику вне попапа
    var popup = $('.popup');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay-thank-you').fadeOut();
    }
});

// Маска ввода номера телефона (плагин maskedinput)
$(function($){
	$('[name="phone"]').mask("+7(999) 999-9999");
});
