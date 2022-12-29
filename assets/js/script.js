  function tabs(n)
{
  $('.tabs-nav a').removeClass('active');
  $('.tabs-nav a.t'+n).addClass('active');
  $('.tabs-block').fadeOut(0);
  $('.tabs-block.tab_'+n).fadeIn(222);
};

$(document).ready(function() {
  /*======Header__menu=============*/
  $(".burger").on("click", function() {
    $(this).toggleClass("active");
    $(".header__menu").toggleClass('active');
  });
  /*==========/header__menu=========*/
  /*=========Smooth scroll=============*/
  $("[data-scroll]").on("click", function(event) {
  event.preventDefault();
 
      blockID = $(this).data('scroll');
     
      blockOffset = $('#'+blockID).offset().top;
 
    $("html, body").animate ({
      scrollTop: blockOffset - 30
    }, 500);
  });
/*=========/smooth scroll=============*/

/*===============Popup=================*/
    $(".open-popup").on("click", function (event) {
        name_pop = $(this).attr('data-popup');
        event.preventDefault();
        $(".popup."+name_pop).fadeIn(111);
        $(".popup."+name_pop+" .popup__inner").fadeIn(111);
        $('body').addClass("hidden");
    });
    $(".popup__close,  .closex").on("click", function (event) {
        event.preventDefault();
        $(".popup").fadeOut('111');
        $(".popup__inner").fadeOut(111);
        $('body').removeClass("hidden");
    });
  /*==============/popup=================*/

	/*======Slider=============*/
	$('.about__slider-wrapper').slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		prevArrow: $('.about__slider .slider-arrow_prev'),
		  nextArrow: $('.about__slider .slider-arrow_next'),
	});

  $('.programm__slider-wrapper').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.programm__slider .slider-arrow_prev'),
      nextArrow: $('.programm__slider .slider-arrow_next'),
  });
	/*=============/slider==============*/

});
