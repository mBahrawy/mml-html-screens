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
  
  function tabView(){
    $(".main-nav").css("display", "none");
    $state=false;
  
  }
  
  function pcView() {
    $(".main-nav").css("display", "block");
    $state=true;
  
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
  
  
  
  $( ".toggle-mobile-nav-btn" ).click(function() {
    
    if($state == false){
      $(".main-nav").slideDown( "slow", function() {});
  $state = true;
  $( ".toggle-mobile-nav-btn" ).removeClass( "collabsed" ).addClass( "opend" );
  
    }else{
      $(".main-nav").slideUp( "slow", function() {});
      $state = false;
      $( ".toggle-mobile-nav-btn" ).removeClass( "opend" ).addClass( "collabsed" );
  
  
  
    }
    
  
  
  });
  
  
  