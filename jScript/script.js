
	// СКРИПТ ПЛАВНОГО СКРОЛИНКА ПО ЯКОРЯМ
function slowScroll(id) {
	var offset = 0;
	$('html, body').animate ({ scrollTop: $(id).offset ().top - offset }, 700);
	return false;
};
	// СКРОЛИНГ НАВЕРХ
$(window).scroll(function(){
	if($(window).scrollTop() > 150){
		$('.topbtn').addClass('active');
	} 
	else {
		$('.topbtn').removeClass('active');
	}
});

	// СКРИПТ ОТПРАВКИ ФОРМЫ (АЯКС)
$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! В ближайшее времени с вами свяжусь.");
			$("#form").trigger("reset");
		});
		return false;
	});
	
});

	// ДОБАВЛЯЕТ/УДАЛЯЕТ КЛАСС ПРИ КЛИКЕ
/* 
	$(document).on('click', 'ul li', function() {
		$(this).addClass('active').siblings().removeClass('active')
	})
*/

$(window).scroll(function() {

	var scrolled = $(window).scrollTop();
			// main banner paralax
	$('.header-prlx').css(
		'backgroundPositionY',-(scrolled*.33) +'px');
});
