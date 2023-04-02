$(document).ready(function() {
    if (window.screen.width < 768) {
        $('.slider').slick({
            arrows:true,
            dots:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite:false,
            draggable:false,
        });
    }else if (window.screen.width < 1180){
        $('.slider').slick({
            arrows:true,
            dots:true,
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite:false,
            draggable:false,
        });
    } else {
        $('.slider').slick({
            arrows:true,
            dots:true,
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite:false,
            draggable:false,
        });
    }

    $('.header_burger').click(function(){
        $('.header_burger, .header_menu').toggleClass('active');
	    $('body').toggleClass('lock');
    });


    $('.header_menu').click(function(){
       $('.header_burger, .header_menu').removeClass('active');
       $('body').removeClass('lock');
    });
    $('a[href^="#"]').click(function () {
        $('.header_burger, .header_menu').removeClass('active');
        $('body').removeClass('lock');
    });
});
