/*global $, document, Typed, window*/
$(document).ready(function () {

  "use strict";
  
  // Show Box On Hover In "Why do i need to provide my date of birth?"
  var box = $(".sign-up-form .date .box");
  
  $(".sign-up-form .date span").on("mouseenter", function () {
    
    box.fadeIn(500);
    
    $(".sign-up-form .date .info").css("zIndex", "99");
    
    $(".sign-up-form .next-button").css("zIndex", "-1");
    
  });
  
  // Close Box
  
  $(".sign-up-form .date .box button").on("click", function (e) {
    
    e.preventDefault();
    
    $(".sign-up-form .date .box").fadeOut(function () {
      
      $(".sign-up-form .date .info").css("zIndex", "0");

      $(".sign-up-form .next-button").css("zIndex", "999");
      
      $(".footer").css("zIndex", "-1");
      
    });
    
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
  

  
  // Next Button
  
  $(".sign-up-form .next-button button").on("click", function () {
    
    if ($(window).width() > 575) {
      
      $(".sign-up-form .user-name, .sign-up-form .password, .sign-up-form .email, .sign-up-form .user-birthday, .sign-up-form .user-gender, .sign-up-form .license, .sign-up-form .submit").css({transform: "translateY(0)", opacity: "1"});
      
      $(".sign-up-form .user-gender").css("display", "flex");
      
      $(".sign-up-form .next-button").hide();
      
      
    } else {
      // Remove
      $(".sign-up-form .user-name").css({transition: "all .7s ease-in-out", transform: "translateY(-50px)", opacity: "0", zIndex: "-1"});

      //Add
      $(".sign-up-form .email").css({transition: "all .7s ease-in-out", transform: "translateY(-50px)", opacity: "1", zIndex: 9});

      document.getElementById("next-button").addEventListener("click", function () {

      // Remove
        $(".sign-up-form .email").css({transition: "all .7s ease-in-out", transform: "translateY(-100px)", opacity: "0", zIndex: "-1"});

      //Add
        $(".sign-up-form .password").css({transition: "all .7s ease-in-out", transform: "translateY(-100px)", opacity: "1"});

        document.getElementById("next-button").addEventListener("click", function () {

        // Remove
          $(".sign-up-form .password").css({transition: "all .7s ease-in-out", transform: "translateY(-150px)", opacity: "0", zIndex: "-1"});

        //Add
          $(".sign-up-form .user-birthday").css({transition: "all .7s ease-in-out", transform: "translateY(-150px)", opacity: "1"});

          $(this).css("z-index", "-1");
          
          $(".sign-up-form .next-button").css("top", "260px");
          
          document.getElementById("next-button").addEventListener("click", function () {

          // Remove
            $(".sign-up-form .user-birthday").css({transition: "all .7s ease-in-out", transform: "translateY(-300px)", opacity: "0", zIndex: "-1"});

          //Add
            $(".sign-up-form .user-gender").css({transition: "all .7s ease-in-out", transform: "translateY(-320px)", opacity: "1", zIndex: 1});
            $(".sign-up-form .license").css({transition: "all .7s ease-in-out", transform: "translateY(-320px)", opacity: "1", zIndex: 1});

            $(this).hide();

            $(".sign-up-form .submit").css({transition: "all .7s ease-in-out", transform: "translateY(-320px)", opacity: "1", zIndex: 1});

          });

        });

      });
    }
    $(window).on("resize", function () {
      
      if ($(window).width() > 575) {
      
        $(".sign-up-form .user-name, .sign-up-form .password, .sign-up-form .email, .sign-up-form .user-birthday, .sign-up-form .user-gender, .sign-up-form .license, .sign-up-form .submit").css({transform: "translateY(0)", opacity: "1"});
      
        $(".sign-up-form .user-gender").css("display", "flex");
      
        $(".sign-up-form .next-button").hide();
      
      
      } else {
      // Remove
        $(".sign-up-form .user-name").css({transition: "all .7s ease-in-out", transform: "translateY(-50px)", opacity: "0", zIndex: "-1"});

      //Add
        $(".sign-up-form .email").css({transition: "all .7s ease-in-out", transform: "translateY(-50px)", opacity: "1", zIndex: 9});

        document.getElementById("next-button").addEventListener("click", function () {

      // Remove
          $(".sign-up-form .email").css({transition: "all .7s ease-in-out", transform: "translateY(-100px)", opacity: "0", zIndex: "-1"});

      //Add
          $(".sign-up-form .password").css({transition: "all .7s ease-in-out", transform: "translateY(-100px)", opacity: "1"});

          document.getElementById("next-button").addEventListener("click", function () {

        // Remove
            $(".sign-up-form .password").css({transition: "all .7s ease-in-out", transform: "translateY(-150px)", opacity: "0", zIndex: "-1"});

        //Add
            $(".sign-up-form .user-birthday").css({transition: "all .7s ease-in-out", transform: "translateY(-150px)", opacity: "1"});

            $(this).css("z-index", "-1");
          
            $(".sign-up-form .next-button").css("top", "260px");
          
            document.getElementById("next-button").addEventListener("click", function () {

          // Remove
              $(".sign-up-form .user-birthday").css({transition: "all .7s ease-in-out", transform: "translateY(-215px)", opacity: "0", zIndex: "-1"});

          //Add
              $(".sign-up-form .user-gender").css({transition: "all .7s ease-in-out", transform: "translateY(-220px)", opacity: "1", zIndex: 1});
              $(".sign-up-form .license").css({transition: "all .7s ease-in-out", transform: "translateY(-220px)", opacity: "1", zIndex: 1});

              $(this).hide();

              $(".sign-up-form .submit").css({transition: "all .7s ease-in-out", transform: "translateY(-220px)", opacity: "1", zIndex: 1});

            });

          });

        });
      }
    });
    
  });
  
  if ($(window).width() < 495) {
    
    $(".next-button").css("paddingLeft", $(window).width() - $(".sign-up-form .form-column").innerWidth() / 2 - 110);
    
  } else {
    
    return false;
    
  }
  
  $(window).on("resize", function () {
    
    if ($(window).width() < 575) {

      $(".next-button").css("paddingLeft", $(window).width() - $(".sign-up-form .form-column").innerWidth() / 2 - 110);

    } else {

      return false;

    }
    
  });
  
});
  
