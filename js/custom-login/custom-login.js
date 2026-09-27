/*global document, $, window*/
$(document).ready(function () {
  
  "use strict";
  
  // Show Box On Hover In "Why do i need to provide my date of birth?"
  var box = $(".sign-up-form .date .box");
  
  $(".sign-up-form .date span").on("mouseenter", function () {
    
    box.fadeIn(500);
    
  });
  
  // Close Box
  
  $(".sign-up-form .date .box button").on("click", function (e) {
    
    e.preventDefault();
    
    $(".sign-up-form .date .box").fadeOut();
    
  });
  
  // Latest news Animation 
  /*
  (function latestNews() {
    
    $(".header .latest-news ul li:first-child").animate({
      
      marginTop: "-=25px"
      
    }, 2500, function () {
      
      $(".header .latest-news ul li:first-child").delay(1000);
      
      if ($(".header .latest-news ul li:first-child").css("marginTop") === "-100px") {
        
        $(".header .latest-news ul li:first-child").delay(1500).css("marginTop", "0");
        
      }
      
      latestNews();
      
    });
    
  }());
  */
  
  // Trigger Typed.js Plugin
  var typed = new Typed(".latest-news p", {
    strings: ["تواصل مع الناس. ", "كون صداقات جديدة."],
    loop: true,
    typeSpeed: 55,
    backSpeed: 40,
    fadeOutDelay: 70,
    showCursor: true
  });

  // Show Loading Points
  $(".sign-up-form .submit input").on("click", function () {
    $(this).attr("value", "");
    $(".sign-up-form .loading ul").fadeIn(10, function () {
      
      $(this).css("z-index", "1");
      $(this).css({
        display: "flex",
        zIndex: 1
      });
      
    });
    
  });
  
  $(".sign-up-form .next-button button").on("click", function (e) {
    e.preventDefault();
    
    if ($(window).outerWidth() > 576) {
      
      $(".sign-up-form .forgit-password").show();
      $(".sign-up-form .email").show();
      $(".sign-up-form .password").show();
      
    } else {
      
      $(".sign-up-form .forgit-password").hide();
      $(".sign-up-form .email").hide();
      $(".sign-up-form .next-button").hide();
      $(".sign-up-form .password").show();
      $(".sign-up-form .submit").show()
      
    }

    $(window).on("resize", function () {
      
      if ($(window).outerWidth() > 576) {

        $(".sign-up-form .forgit-password").show();
        $(".sign-up-form .email").show();
        $(".sign-up-form .email input").val("");
        $(".sign-up-form .password").show();
        $(".sign-up-form .password input").val("");

      } else {

        $(".sign-up-form .forgit-password").hide();
        $(".sign-up-form .email").hide();
        $(".sign-up-form .password").show();
        $(".sign-up-form .next-button").hide();
        $(".sign-up-form .submit").show()

      }
      
    });
    
  });
  
  if ($(window).width() < 495) {
    
    $(".next-button").css("paddingLeft", $(window).width() - $(".sign-up-form .form-column").innerWidth() / 2 - 110)
    
  } else {
    
    return false
    
  }
  
  $(window).on("resize", function () {
    
    if ($(window).width() < 575) {

      $(".next-button").css("paddingLeft", $(window).width() - $(".sign-up-form .form-column").innerWidth() / 2 - 110)

    } else {

      return false

    }
    
  });
  
});