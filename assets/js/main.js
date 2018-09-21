// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;
  var noop = function () { };
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
  if ($(window).width() < 992) {

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
    $(".main-nav").slideDown("slow", function () { });
    $state = true;
    $(".toggle-mobile-nav-btn").removeClass("collabsed").addClass("opend");

  } else {
    $(".main-nav").slideUp("slow", function () { });
    $state = false;
    $(".toggle-mobile-nav-btn").removeClass("opend").addClass("collabsed");
  }
});


// Testimonials Slider on home page
// ==========================================================

/*
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
    }, {
      breakpoint: 480,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        centerPadding: '35px',
      }
    }, {
      breakpoint: 444,
      settings: {
        centerMode: false,
        slidesToShow: 1,
      }
    }


  ]
});
*/



// ========================================================
//            For Service provider profile edit page 
// ========================================================



// Image upload
// ==========================================================

$(function () {
  // For image picker
  $("#image-picker").change(function () {

    var file = this.files[0],
      reader = new FileReader(),
      img = $(this).siblings('img.picked-image')
    reader.onload = function (e) {
      img.attr('src', e.target.result);
    }
    reader.readAsDataURL(file);
  });

  // For checking file size
  var fileInput = $('#image-picker');
  var maxSize = fileInput.data('max-size');
  var maxSizeInBytes = maxSize * 1000000;

  $('form').submit(function (e) {


    if ($('form').find('input[type="file"]').length > 0) {

      if (fileInput.get(0).files.length) {
        var fileSize = fileInput.get(0).files[0].size; // in bytes
        if (fileSize > maxSizeInBytes) {

          $('#image-picker+span').html('Your photo size is more than ' + maxSize + ' MB, please select another one');
          return false;
        } else {
          $('#image-picker+span').html('');

        }
      }
    }

  });
});



// Add new Equipment  Expand & Collapse 
// ==========================================================

$('button.expand').click(function (e) {
  e.preventDefault();
  $('div.collapse-container').css("max-height", "500px");
  $('button.collapse').show();
})

$('button.collapse').click(function (e) {
  e.preventDefault();
  $(this).hide();
  $('div.collapse-container').css("max-height", "0");
})



// Add new Equipment type ( free / paid )
// ==========================================================

$('.new-equipment-type input[type="radio"]').change(function () {

  if ($(this).val() == "Equipment has flat price") {
    $(".new-equipment-price-container").slideDown("fast").find('input').prop('disabled', false);

  } else {
    $(".new-equipment-price-container").slideUp("fast").find('input').prop('disabled', true);
  }
});



// Time Input field
// ==========================================================


var timePickers = document.getElementsByClassName('timepicker-work');

for (var i = 0; i < timePickers.length; i++) {
  var timeField = timePickers[i].dataset.time;
  if (!timeField) {
    timeField = '7:00am'
  } else {
    if (timeField == '') {
      timeField = '7:00am'
    }
  }
  $(timePickers[i]).timepicker({
    timeFormat: 'h:mm p',
    interval: 30,
    minTime: '7',
    maxTime: '10:00pm',
    defaultTime: timeField,
    startTime: '7:00am',
    dynamic: false,
    dropdown: true,
    scrollbar: true
  });
}



$('.day-working .day-off').change(function () {
  if ($(this).prop('checked')) {
    $(this).parent().parent().find('.timepicker-work').prop('disabled', true);
  } else {
    $(this).parent().parent().find('.timepicker-work').prop('disabled', false);
  }

})


// Add new credential 
// ==========================================================


$('.credential-option').change(function () {

  var chatchCheckBox = $(this).attr('id');
  var propertyContainer = '.new-' + chatchCheckBox + '-container';
  var chatchNewInputField = '.new-' + chatchCheckBox;

  if ($(this).prop('checked')) {

    $(propertyContainer).slideDown("fast");
    $(chatchNewInputField).prop('disabled', false);

  } else {

    $(propertyContainer).slideUp("fast");
    $(chatchNewInputField).prop('disabled', true);

  }
});


// Truck details 
// ==========================================================

$('#has-truck').change(function () {
  if ($(this).prop('checked')) {
    $(this).parent().parent().find('textarea').slideDown("fast").prop('disabled', false);
  } else {
    $(this).parent().parent().find('textarea').slideUp("fast").prop('disabled', true);
  }
})


// licenses select
// ==========================================================

$('select.licence-has-input').change(function () {

  if ($(this).val() == "yes") {
    $(this).next('input').slideDown('fast').prop('disabled', false);

  } else {
    $(this).next('input').slideUp('fast').prop('disabled', true);
  }

})



// ========================================================
//             For Progress bar with steps 
// ========================================================

// First check to start function
//===============================

var stepsContainer = $('#steps-container');

if (stepsContainer.length > 0) {
  stepsPlugin();
}

// Main plugin function
//===============================

function stepsPlugin() {

  var steps = stepsContainer.find('.step');
  window.stepsNumber = steps.length;

  var stepsProgress = $('#steps-progress'),
    stepsProgressBar = $('<div></div>').addClass('steps-progress-bar');

  stepsProgress.append(stepsProgressBar);
  console.log("Total Steps number : " + stepsNumber);
  stepsProgressBar = $('.steps-progress-bar');
  

  // For radio buttons
  //===============================
  for (var i = 1; stepsNumber >= i; i++) {
    var radio = $('<input type="radio" name="step-pointer" >').addClass('step-pointer').attr('id', 'step-pointer-' + i);
    var radioLabel = $('<label></label>').addClass('step-label-' + i);
    var radioLabelSpan = $('<span></span>');
    var radioBtn = $('<a></a>');


    $("#step-pointer-1").prop("checked", true);

    radioLabel.append(radio, radioLabelSpan, radioBtn);

    stepsProgressBar.append(radioLabel);

    var stepTitle = $('#step-' + i).find('.head h4').html();
    if (stepTitle) {

      $('.step-label-' + i + ' span').html($('.step-label-' + i + ' span').html() + stepTitle);

    }
  }

  $('.step-pointer').click(function () {
    var currentStepNumber = parseInt($(this).attr('id').replace('step-pointer-', ''));
    radioButtonClick(currentStepNumber);
  });


  // Next button
  //===============================
  $('.next-step').click(function (e) {
    var currentStep = $(this).parent('.step'),
      currentStepId = currentStep.attr('id'),
      currentStepNumber = parseInt(currentStepId.replace('step-', ''));
    e.preventDefault();
    nextStep(currentStepNumber);
  });


  // Previous button
  //===============================
  $('.previous-step').click(function (e) {
    var currentStep = $(this).parent('.step'),
      currentStepId = currentStep.attr('id'),
      currentStepNumber = parseInt(currentStepId.replace('step-', ''));
    e.preventDefault();
    previousStep(currentStepNumber);
  });

}


function nextStep(a) {

  smoothScrollToTop();

  setTimeout(function () {
    var currentStep = "#step-" + (a);
    var nextStep = "#step-" + (a + 1);

    progressBar(a, stepsNumber - 1);
    checkRadioButton(a + 1);


    $(currentStep).fadeOut('slow');

    setTimeout(function () {
      $(nextStep).fadeIn('slow');
    }, 550);



  }, 1000);




}
function previousStep(a) {

  smoothScrollToTop();

  setTimeout(function () {

    var currentStep = "#step-" + (a);
    var previousStep = "#step-" + (a - 1);

    progressBar(a - 2, stepsNumber - 1);
    checkRadioButton(a - 1);


    $(currentStep).fadeOut('slow');
    setTimeout(function () {
      $(previousStep).fadeIn('slow');
    }, 550);

  }, 1000);

}

function radioButtonClick(k) {
  var currentStep = "#step-" + (k);
  var allSteps = ".step";

  progressBar(k - 1, stepsNumber - 1);
  checkRadioButton(k);

  $(allSteps).fadeOut();
  $(currentStep).fadeIn('slow');

}


function checkRadioButton(j) {

  for (var i = 1; j >= i; i++) {
    $('label.step-label-' + i + ' > a').css("background-color", "#338bc6");
  }
  for (i; stepsNumber >= i; i++) {
    $('label.step-label-' + i + ' > a').css("background-color", "rgb(221,226,230)");
  }

}

function progressBar(x, y) {
  var progressBarwidth = x * (100 / (y));
  $('.actual-progress').css("width", progressBarwidth + "%");
}

function smoothScrollToTop() {
  $('html').animate({
    scrollTop: 100
  }, 1000);
}

