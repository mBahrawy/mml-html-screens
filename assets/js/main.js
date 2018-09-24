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
    $(".main-nav").slideDown("slow", function () {});
    $state = true;
    $(".toggle-mobile-nav-btn").removeClass("collabsed").addClass("opend");

  } else {
    $(".main-nav").slideUp("slow", function () {});
    $state = false;
    $(".toggle-mobile-nav-btn").removeClass("opend").addClass("collabsed");
  }
});

// Testimonials Slider on home page
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
  //console.log("Total Steps number : " + stepsNumber);
  stepsProgressBar = $('.steps-progress-bar');


  // For radio buttons
  //===============================
  for (var i = 1; stepsNumber >= i; i++) {
    var radio = $('<input type="radio" name="step-pointer" >').addClass('step-pointer').attr('id', 'step-pointer-' + i),
        radioLabel = $('<label></label>').addClass('step-label-' + i),
        radioLabelSpan = $('<span></span>'),
        radioBtn = $('<a></a>');

    $("#step-pointer-1").prop("checked", true);
    radioLabel.append(radio, radioLabelSpan, radioBtn);
    stepsProgressBar.append(radioLabel);
    var stepTitle = $('#step-' + i).find('.head h4').html();
    if (stepTitle) {

      $('.step-label-' + i + ' span').html($('.step-label-' + i + ' span').html() + stepTitle);

    }
  }

  // Radio button progress bar
  //=======================================

  $('.step-pointer').click(function () {

    if ($(this).closest('form').length == 0) {
     // console.log($(this).closest('form').length);
      var currentStepNumber = parseInt($(this).attr('id').replace('step-pointer-', '')),
        thisForm = '#' + $(this).closest('form').attr('id');
      radioButtonClick(currentStepNumber);

    } else {
      return false; // Will stop the submission of the form
    }
  });

  // Initiating  the first step
  //=======================================
  $('#step-1').show();

  // Next button
  //===============================
  $('.next-step').click(function (e) {

    var currentStep = $(this).parent('.step'),
      currentStepId = currentStep.attr('id'),
      currentStepNumber = parseInt(currentStepId.replace('step-', '')),
      thisForm = '#' + $(this).closest('form').attr('id');

    $.validate({
      form: thisForm,
      modules: 'security, date',
      onError: function ($form) {
       // console.log("Error");
        return false; // Will stop the submission of the form
      },
      onSuccess: function ($form) {
      //  console.log("Success");
        $("#sign-up-header").slideUp();
        nextStep(currentStepNumber);
        return false; // Will stop the submission of the form

      }
    });
  });


  // Previous button
  //===============================


  $('.previous-step').click(function (e) {
    var currentStep = $(this).parent('.step'),
      currentStepId = currentStep.attr('id'),
      currentStepNumber = parseInt(currentStepId.replace('step-', ''));
      
      previousStep(currentStepNumber);

  });
}

// All used functions
//===============================

function nextStep(a) {
 
  console.log("Current step : " + a);
  console.log("Total steps : " + stepsNumber);
  console.log("--------------------");

  // Check if we are in the final step
  if (stepsNumber === a+1) {

    smoothScrollToTop();

    // Hardik, use this function below for back-end integration
    // You will find this function below
    sendBackEndData();

  } else {
    nextStepFn(a);
  }
}

function nextStepFn(a){
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
    $('label.step-label-' + i + ' > a').css("background-color", $('.actual-progress').css('background-color'));
    $('label.step-label-' + i + ' > a').prev('span').css("color", "rgb(80, 80, 80)");
  }
  for (i; stepsNumber >= i; i++) {
    $('label.step-label-' + i + ' > a').css("background-color", "rgb(221,226,230)");
    $('label.step-label-' + i + ' > a').prev('span').css("color", "rgb(221,226,230)");

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

function showloader(){

  var svgLoader = 'assets/img/loader.svg';
  var gifLoader = 'assets/img/loader.gif';
 

      var ua = window.navigator.userAgent;
      var msie = ua.indexOf("MSIE ");
  
      if (msie > 0) // If Internet Explorer, return version number
      {
        $('body').prepend("<div id='loader-container'><div><img src='"+gifLoader+"'alt=' '></div></div>");
      }
      else  // If another browser, return 0
      {
        $('body').prepend("<div id='loader-container'><div><img src='"+svgLoader+"'alt=' '></div></div>");
         
      }
      setTimeout(function () {
    $("#loader-container").css("opacity", "1");
  }, 600);

}

function hideLoader(){
  $("#loader-container").css("opacity", "0");
  setTimeout(function () {
    $("#loader-container").remove();
  }, 800);
}

function formSubmitErrorMessage(x){
  if(x == "show"){
  $('body').prepend(
  "<div id='form-submit-error'>"+
   "<div>"+
    "<i class='fas fa-exclamation-triangle'></i>"+
    "<p>Error happened during submitting, please try again</p>"+
   "</div>"+
  "</div>");
  }else if(x == "hide"){
  $("#form-submit-error").remove();
  }
}

function sendBackEndData(){

  // Do your work here Hardik;
  // I will give you instructions follow my comments

  formSubmitErrorMessage("hide"); // Hide any previous error message to recheck it again
  showloader(); // show loader


  // Submit data to back-end 
  // you can remove this timer function

  setTimeout(function () { // This timer for testing , remove it 

    var submitError = false; // If error happened in back-end turn this to on to try again later;

    /*
        ----------------------------------------------------------------------
      ----------------------- ADD YOU BACK-END CODES HERE ----------------
     ----------------  CHECK FOR ERRORS, IF YES submitError = true-----
   -----------------------------------------------------------------

    */

    // To exit registration on completion process, you must increment lastStep value 

    if(submitError === false){  // checking error , this case no errors

       nextStepFn(stepsNumber-1);// this for getting out of registration if back-end done successfully 
       hideLoader(); // Hiding loader 

    }else{  // Error happened, show error msg, try again

      formSubmitErrorMessage("show");
      hideLoader();
      return false;
    }


  }, 4000);// This timer for testing , remove it 
}


// ========================================================
//             For animated input labels 
// ========================================================



var inputField = $('.input-field input, .input-field textarea');


$(inputField.prev('label')).click(function(){
  $(this).next().trigger("focus");
});

$(inputField).click(function(){
  activeField( $(this) );
});

$(inputField).focus(function(){
  activeField( $(this) );
});


$(inputField).blur(function(){
  blurField( $(this) );
})


function blurField(y){
  var inputLabel = y.prev('label');
  if( y.val() === "" ){
      y.removeClass("active-field");
      $(inputLabel).removeClass("active");  
  }
}

function activeField(x){
  var inputLabel = x.prev('label');
  x.addClass("active-field");
  $(inputLabel).addClass("active");
}


// ==========================================================
//     I            Form Validator
// ==========================================================

$.validate({
  
  form: '#service-provider-registration',
  modules: 'date, security'
});

// Add Custom validator 

checkRepeatPassword();
checkPasswordStrength();

// Reset form using jQuery
//$('#container form').get(0).reset();

$('#repeatpassword').keyup(function(){
  checkRepeatPasswordOnKeyPress();
})

// Check password strength
function checkPasswordStrength(){
  $.formUtils.addValidator({
    name : 'strongPassword',
    validatorFunction : function(value, $el, config, language, $form) {

      var password = $('input#password').val();
      var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-.!@#\$%\^&\*\>\<\=])(?=.{8,})");
      if(strongRegex.test(password)){
        return value;
      }else{
        return false;
      }

    },
    errorMessage : 'Please enter a strong password'
  });
}

// Check repeat password
function checkRepeatPassword(){
  $.formUtils.addValidator({
    name : 'repeatPassword',
    validatorFunction : function(value, $el, config, language, $form) {
      var password = $('input#password').val();
      return value  === password;
    },
    errorMessage : 'Repeat password didn\'t match'
  });
}

// change repeat password style on keypress if match password
function checkRepeatPasswordOnKeyPress(){
  var repeatPassword = $('#repeatpassword');
  var passowrd =$('#password'); 

  if( repeatPassword.val() === passowrd.val() ){
   $('#repeatpassword').removeClass('error').addClass('valid');
  }else{
    $('#repeatpassword').removeClass('valid').addClass('error');

  }
}

// ========================================================
//                 For input masks 
// ========================================================

// US phone number mask
//=========================
$('.us-phone-number-mask').keydown(function (e) {
  var key = e.which || e.charCode || e.keyCode || 0;
  $phone = $(this);

  // Don't let them remove the starting '('
  if ($phone.val().length === 1 && (key === 8 || key === 46)) {
      $phone.val('('); 
      return false;
  } 
  // Reset if they highlight and type over first char.
  else if ($phone.val().charAt(0) !== '(') {
      $phone.val('('+$phone.val()); 
  }

  // Auto-format- do not expose the mask as the user begins to type
  if (key !== 8 && key !== 9) {
      if ($phone.val().length === 4) {
          $phone.val($phone.val() + ')');
      }
      if ($phone.val().length === 5) {
          $phone.val($phone.val() + ' ');
      }           
      if ($phone.val().length === 9) {
          $phone.val($phone.val() + '-');
      }
  }

  // Allow numeric (and tab, backspace, delete) keys only
  return (key == 8 || 
          key == 9 ||
          key == 46 ||
          (key >= 48 && key <= 57) ||
          (key >= 96 && key <= 105)); 
})

.bind('focus click', function () {
  $phone = $(this);

  if ($phone.val().length === 0) {
      $phone.val('(');
  }
  else {
      var val = $phone.val();
      $phone.val('').val(val); // Ensure cursor remains at the end
  }
})

.blur(function () {
  $phone = $(this);

  if ($phone.val() === '(') {
      $phone.val('');
  }
});

// Integer input
//=========================

$(".integer-number-mask").keydown(function (e) {
  // Allow: backspace, delete, tab, escape, enter
  if ($.inArray(e.keyCode, [46, 8, 9, 27, 13]) !== -1 ||
       // Allow: Ctrl+A, Command+A
      (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
       // Allow: home, end, left, right, down, up
      (e.keyCode >= 35 && e.keyCode <= 40)) {
           // let it happen, don't do anything
           return;
  }
  // Ensure that it is a number and stop the keypress
  if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
  }
});

// No white spaces input
//=========================

$('.no-white-spaces-mask').keyup(function() {
  this.value = this.value.replace(/\s/g,'');
 });
 