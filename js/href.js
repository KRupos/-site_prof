$(document).ready(function () {
	if (window.screen.width < 768) {
		$('a[href^="#"]').click(function () {
			//Сохраняем значение атрибута href в переменной:
			var target = $(this).attr('href');
			$('html, body').animate({
				scrollTop: $(target).offset().top-50
			}, 500);
			return false;
		});
	} else {
		$('a[href^="#"]').click(function () {
			//Сохраняем значение атрибута href в переменной:
			var target = $(this).attr('href');
			$('html, body').animate({
				scrollTop: $(target).offset().top-80
			}, 500);
			return false;
		});
	}
});