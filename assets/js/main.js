// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.



/*================== SmartMenus jQuery init/*================== */

// SmartMenus init
$(function () {
  $('#main-menu').smartmenus({
    mainMenuSubOffsetX: -1,
    mainMenuSubOffsetY: 4,
    subMenusSubOffsetX: 6,
    subMenusSubOffsetY: -6
  });
});


var mainNavWrapper = document.querySelector('.main-nav');
var navContainerForMobile = document.querySelector('#nav-container-for-mobile');
var normalNavContainer = document.querySelector('#normal-nav-container');
var state = false;

function tabView() {
  $(".main-nav").css("display", "none");
  $state = false;

}

function pcView() {
  $(".main-nav").css("display", "block");
  $state = true;

}


function changeNavPosition() {
  if ($(window).width() < 1071) {

    //tab
    navContainerForMobile.appendChild(mainNavWrapper);
    tabView();
  } else {

    //pc
    normalNavContainer.appendChild(mainNavWrapper);
    pcView();
  }
}

changeNavPosition();

window.onresize = function () {
  changeNavPosition();

}



$(".toggle-mobile-nav-btn").click(function () {

  if ($state == false) {
    $(".main-nav").slideDown("slow", function () {});
    $state = true;
    $(".toggle-mobile-nav-btn").removeClass("collabsed").addClass("opend");

  } else {
    $(".main-nav").slideUp("slow", function () {});
    $state = false;
    $(".toggle-mobile-nav-btn").removeClass("opend").addClass("collabsed");



  }



});






// Testimonials Slider
// ==========================================================


$('#testimonials-slider').slick({
  dots: true,
  speed: 1000,
  slidesToShow: 3,
  adaptiveHeight: true,
  centerMode: true,
  centerPadding: '0px',
  autoplay: true,
  arrows: false,
  dotsClass: 'slider-dots',
  responsive: [{
    breakpoint: 768,
    settings: {
      centerMode: true,
      slidesToShow: 1,
      centerPadding: '50px',

    }
  }]
})

$('#service-provider-slider').slick({
  dots: false,
  speed: 1000,
  slidesToShow: 4,
  adaptiveHeight: true,
  centerMode: true,
  autoplay: true,
  arrows: true,
  responsive: [{
      breakpoint: 1000,
      settings: {
        centerMode: true,
        slidesToShow: 3,
        centerPadding: '40px',

      }
    },
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        centerPadding: '110px',
      }
    },
    {
      breakpoint: 700,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        centerPadding: '80px',
      }

    },
    {
      breakpoint: 640,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        centerPadding: '60px',
      }

    },
    {
      breakpoint: 590,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        centerPadding: '50px',
      }

    },
    {
      breakpoint: 530,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        centerPadding: '40px',
      }
    },{
      breakpoint: 480,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        centerPadding: '35px',
      }
    },{
      breakpoint: 444,
      settings: {
        centerMode: false,
        slidesToShow: 1,
      }
    }


  ]
})
