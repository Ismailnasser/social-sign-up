/*global $, document, Typed, window*/
$(document).ready(function () {

  "use strict";
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
  
});
  
