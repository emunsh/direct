var $ = jQuery;

$(window).on("load", function() {

  var reviewsSwiper = new Swiper ('.reviews-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 4,
    spaceBetween:20,
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    breakpoints: {
      500: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      992: {
        slidesPerView: 2,
      },
      1199: {
        slidesPerView: 3,
        arrows: false,
      }
    }
  });

  var newsSwiper = new Swiper ('.blog__news-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 4,
    spaceBetween:20,
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      600: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 2,
      },
      1199: {
        slidesPerView: 3,
        arrows: false,
      }
    }
  });

});

$('.submit-idea.btn--yellow').on('click', function(e) {
  e.stopPropagation();
  var $hideMenu = $(this).parent().find('.submit-idea--absolute');
  $hideMenu.toggleClass('showMenu');
  $hideMenu.click(function (e) {
    e.stopPropagation();
  });
  $(document.body).click(function () {
    $hideMenu.removeClass('showMenu');
  })
});


(function menuControl () {
  var $menu = $('.header .header__menu');
  var $header = $('.header');

  $(window).scroll( function() {
    if (screen.width > 1199) {
      $menu.addClass('fixed-menu');
      $header.css({'padding-top':'130px'});
      if ($menu.offset().top == 0) {
        $header.css({'padding-top':'50px'});
        $menu.removeClass('fixed-menu');
      }
    }
  });
  $(window).resize( function() {
    if (screen.width < 1200) {
      $header.css({'padding-top':'15px'});
      $menu.removeClass('fixed-menu');
      $(document.body).css({'margin':'5px'});
      setTimeout(function () {$(document.body).css({'margin':'0'});},10)
    }
  });
})();

(function showMobileMenu () {
  function toogle() {
    $('.mobile__menu').toggleClass('show-mobile-menu');
  }
  var $burger = $('.menu_burger');
  var $close = $('.menu_close');
  $burger.click(toogle);
  $close.click(toogle);
})();
