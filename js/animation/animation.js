/*global $, window, document*/
$(document).ready(function () {
  
  "use strict";
  
  // Reaction Animation
  
    
  var time = 1000;

  (function reactionAnimation() {
    
    // Spaceman 1

    $(".sign-up-form .spaceman-1 img:first-child").animate({
      
      right: "50px",
      width: "45px",
      top: 0,
      opacity: 1
      
    }, time);
    $(".sign-up-form .spaceman-1 img:first-child").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-1 img:first-child").animate({

      top: "146px",
      right: "28px",
      width: 0

    }, time);

    $(".sign-up-form .spaceman-1 img:nth-child(2)").delay(900).animate({

      width: "45px",
      top: "15px",
      right: "-113px",
      opacity: 1

    }, time);
    $(".sign-up-form .spaceman-1 img:nth-child(2)").animate({
        
        opacity: 0
        
      });
    $(".sign-up-form .spaceman-1 img:nth-child(2)").animate({

      top: "146px",
      right: "28px",
      width: 0

    }, time);
    
    $(".sign-up-form .spaceman-1 img:nth-child(3)").delay(1300).animate({
      
      width: "45px",
      top: "15px",
      right: "147px",
      opacity: 1
      
    }, time);
    $(".sign-up-form .spaceman-1 img:nth-child(3)").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-1 img:nth-child(3)").animate({

      top: "146px",
      right: "28px",
      width: 0

    }, time);
    
    $(".sign-up-form .spaceman-1 img:nth-child(4)").delay(1700).animate({
      
      width: "45px",
      top: "-25px",
      right: "-100px",
      opacity: 1
      
    }, time);
    $(".sign-up-form .spaceman-1 img:nth-child(4)").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-1 img:nth-child(4)").animate({

      top: "146px",
      right: "28px",
      width: 0

    }, time);
    
    $(".sign-up-form .spaceman-1 img:last-child").delay(2100).animate({
      
      width: "45px",
      top: "-10px",
      right: "155px",
      opacity: 1
      
    }, time);
    $(".sign-up-form .spaceman-1 img:last-child").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-1 img:last-child").animate({

      top: "146px",
      right: "28px",
      width: 0

    }, time);
    
    /////////////// Space Man 2
    $(".sign-up-form .spaceman-2 img:first-child").delay(2500).animate({

      width: "45px",
      top: "-15px",
      right: "-105px",
      opacity: 1

    }, time);
    $(".sign-up-form .spaceman-2 img:first-child").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-2 img:first-child").animate({

      right: "-50px",
      width: 0,
      top: "124px"

    }, time);
    
    $(".sign-up-form .spaceman-2 img:nth-child(2)").delay(2900).animate({

      width: "45px",
      top: "-20px",
      right: "50px",
      opacity: 1

    }, time);
    $(".sign-up-form .spaceman-2 img:nth-child(2)").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-2 img:nth-child(2)").animate({

      right: "-50px",
      width: 0,
      top: "124px"

    }, time);
    
    $(".sign-up-form .spaceman-2 img:nth-child(3)").delay(3300).animate({
      
      width: "45px",
      top: "-41px",
      right: "11px",
      opacity: 1
      
    }, time);
    $(".sign-up-form .spaceman-2 img:nth-child(3)").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-2 img:nth-child(3)").animate({

      right: "-50px",
      width: 0,
      top: "124px"

    }, time);
    
    $(".sign-up-form .spaceman-2 img:nth-child(4)").delay(3700).animate({
      
      width: "45px",
      top: "-20px",
      right: "-50px",
      opacity: 1
      
    }, time);
    $(".sign-up-form .spaceman-2 img:nth-child(4)").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-2 img:nth-child(4)").animate({

      right: "-50px",
      width: 0,
      top: "124px"

    }, time);
    
    $(".sign-up-form .spaceman-2 img:last-child").delay(4100).animate({
      
      width: "45px",
      top: "0",
      right: "-210px",
      opacity: 1
      
    }, time);
    $(".sign-up-form .spaceman-2 img:last-child").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-2 img:last-child").animate({

      right: "-50px",
      width: 0,
      top: "124px"

    }, time);
    
    /////////////// Space Man 3
    
    $(".sign-up-form .spaceman-3 img:first-child").delay(4500).animate({
      
      right: "100px",
      width: "45px",
      top: "0",
      opacity: 1
      
    }, time);
    $(".sign-up-form .spaceman-3 img:first-child").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-3 img:first-child").animate({

      right: "15px",
      width: 0,
      top: "240px"

    }, time);
    
    $(".sign-up-form .spaceman-3 img:nth-child(2)").delay(4900).animate({

      width: "45px",
      top: "-25px",
      right: "-173px",
      opacity: 1

    }, time);
    $(".sign-up-form .spaceman-3 img:nth-child(2)").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-3 img:nth-child(2)").animate({

      right: "15px",
      width: 0,
      top: "240px"

    }, time);
    
    $(".sign-up-form .spaceman-3 img:nth-child(3)").delay(5300).animate({
      
      width: "45px",
      top: "20px",
      right: "50px",
      opacity: 1
      
    }, time);
    $(".sign-up-form .spaceman-3 img:nth-child(3)").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-3 img:nth-child(3)").animate({

      right: "15px",
      width: 0,
      top: "240px"

    }, time);
    
    $(".sign-up-form .spaceman-3 img:nth-child(4)").delay(5700).animate({
      
      width: "45px",
      top: "-20px",
      right: "80px",
      opacity: 1
      
    }, time);
    $(".sign-up-form .spaceman-3 img:nth-child(4)").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-3 img:nth-child(4)").animate({

      right: "15px",
      width: 0,
      top: "240px"

    }, time);
    
    $(".sign-up-form .spaceman-3 img:last-child").delay(6100).animate({

      width: "45px",
      top: "15px",
      right: "-18px",
      opacity: 1

    }, time);
    $(".sign-up-form .spaceman-3 img:last-child").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-3 img:last-child").animate({

      right: "15px",
      width: 0,
      top: "240px"

    }, time);
    
    /////////////// Space Man 4

    $(".sign-up-form .spaceman-4 img:first-child").delay(6500).animate({

      right: "90px",
      width: "45px",
      top: "10px",
      opacity: 1

    }, time);
    $(".sign-up-form .spaceman-4 img:first-child").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-4 img:first-child").animate({

      right: "-17px",
      width: 0,
      top: "265px"

    }, time);
    
    $(".sign-up-form .spaceman-4 img:nth-child(2)").delay(6900).animate({
      
      width: "45px",
      top: "30px",
      right: "130px",
      opacity: 1
      
    }, time);
    $(".sign-up-form .spaceman-4 img:nth-child(2)").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-4 img:nth-child(2)").animate({

      right: "-17px",
      width: 0,
      top: "265px"

    }, time);
    
    $(".sign-up-form .spaceman-4 img:nth-child(3)").delay(7300).animate({

      width: "45px",
      top: "10px",
      right: "-210px",
      opacity: 1

    }, time);
    $(".sign-up-form .spaceman-4 img:nth-child(3)").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-4 img:nth-child(3)").animate({

      right: "-17px",
      width: 0,
      top: "265px"

    }, time);
    
    $(".sign-up-form .spaceman-4 img:nth-child(4)").delay(7700).animate({
      
      width: "45px",
      top: "1px",
      right: "-90px",
      opacity: 1
      
    }, time);
    $(".sign-up-form .spaceman-4 img:nth-child(4)").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-4 img:nth-child(4)").animate({

      right: "-17px",
      width: 0,
      top: "265px"

    }, time);
    
    $(".sign-up-form .spaceman-4 img:last-child").delay(8100).animate({
      
      width: "45px",
      top: "-20px",
      right: "-35px",
      opacity: 1
      
    }, time);
    $(".sign-up-form .spaceman-4 img:last-child").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-4 img:last-child").animate({

      right: "-17px",
      width: 0,
      top: "265px"

    }, time);
    
    
    /////////////// Space Man 5
    
    $(".sign-up-form .spaceman-5 img:first-child").delay(8500).animate({

      width: "45px",
      top: "-30px",
      right: "180px",
      opacity: 1

    }, time);
    $(".sign-up-form .spaceman-5 img:first-child").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-5 img:first-child").animate({

      width: 0,
      top: "195px",
      right: "-85px"

    }, time);
    
    $(".sign-up-form .spaceman-5 img:nth-child(2)").delay(8900).animate({

      width: "45px",
      top: "-10px",
      right: "-105px",
      opacity: 1

    }, time);
    $(".sign-up-form .spaceman-5 img:nth-child(2)").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-5 img:nth-child(2)").animate({

      width: 0,
      top: "195px",
      right: "-85px"

    }, time);
    
    $(".sign-up-form .spaceman-5 img:nth-child(3)").delay(9300).animate({

      width: "45px",
      top: "5px",
      right: "151px",
      opacity: 1

    }, time);
    $(".sign-up-form .spaceman-5 img:nth-child(3)").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-5 img:nth-child(3)").animate({

      width: 0,
      top: "195px",
      right: "-85px"

    }, time);
    
    $(".sign-up-form .spaceman-5 img:nth-child(4)").delay(9700).animate({

      width: "45px",
      top: "10px",
      right: "-176px",
      opacity: 1

    }, time);
    $(".sign-up-form .spaceman-5 img:nth-child(4)").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-5 img:nth-child(4)").animate({

      width: 0,
      top: "195px",
      right: "-85px"

    }, time);
    
    $(".sign-up-form .spaceman-5 img:last-child").delay(10100).animate({

      width: "45px",
      top: "20px",
      right: "35px",
      opacity: 1

    }, time);
    $(".sign-up-form .spaceman-5 img:last-child").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-5 img:last-child").animate({

      width: 0,
      top: "195px",
      right: "-85px"

    }, time);
    
    /////////////// Space Man 6
    $(".sign-up-form .spaceman-6 img:first-child").delay(10500).animate({

      width: "45px",
      top: "-40px",
      right: "105px",
      opacity: 1

    }, time);
    $(".sign-up-form .spaceman-6 img:first-child").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-6 img:first-child").animate({

      width: 0,
      top: "205px",
      right: "167px"

    }, time);
    
    $(".sign-up-form .spaceman-6 img:nth-child(2)").delay(10900).animate({
      
      width: "45px",
      top: "-10px",
      right: "-150px",
      opacity: 1
      
    }, time);
    $(".sign-up-form .spaceman-6 img:nth-child(2)").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-6 img:nth-child(2)").animate({

      width: 0,
      top: "205px",
      right: "167px"

    }, time);
    
    $(".sign-up-form .spaceman-6 img:nth-child(3)").delay(11300).animate({

      width: "45px",
      top: "-30px",
      right: "-200px",
      opacity: 1

    }, time);
    $(".sign-up-form .spaceman-6 img:nth-child(3)").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-6 img:nth-child(3)").animate({

      width: 0,
      top: "205px",
      right: "167px"

    }, time);
    
    $(".sign-up-form .spaceman-6 img:nth-child(4)").delay(11700).animate({

      width: "45px",
      top: "-5px",
      right: "-173px",
      opacity: 1

    }, time);
    $(".sign-up-form .spaceman-6 img:nth-child(4)").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-6 img:nth-child(4)").animate({

      width: 0,
      top: "205px",
      right: "167px"

    }, time);
    
    $(".sign-up-form .spaceman-6 img:last-child").delay(12100).animate({

      width: "45px",
      top: "-35px",
      right: "-200px",
      opacity: 1

    }, time);
    $(".sign-up-form .spaceman-6 img:last-child").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-6 img:last-child").animate({

      width: 0,
      top: "205px",
      right: "167px"

    }, time);
    
    /////////////// Space Man 7

    $(".sign-up-form .spaceman-7 img:first-child").delay(12500).animate({

      width: "45px",
      top: "8px",
      right: "-64px",
      opacity: 1

    }, time);
    $(".sign-up-form .spaceman-7 img:first-child").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-7 img:first-child").animate({

      width: 0,
      top: "129px",
      right: "124px"

    }, time);
    
    $(".sign-up-form .spaceman-7 img:nth-child(2)").delay(12900).animate({
      
      width: "45px",
      top: "0",
      right: "150px",
      opacity: 1
      
    }, time);
    $(".sign-up-form .spaceman-7 img:nth-child(2)").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-7 img:nth-child(2)").animate({

      width: 0,
      top: "129px",
      right: "124px"

    }, time);
    
    $(".sign-up-form .spaceman-7 img:nth-child(3)").delay(13300).animate({
      
      width: "45px",
      top: "-5px",
      right: "101px",
      opacity: 1
      
    }, time);
    $(".sign-up-form .spaceman-7 img:nth-child(3)").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-7 img:nth-child(3)").animate({

      width: 0,
      top: "129px",
      right: "124px"

    }, time);
    
    $(".sign-up-form .spaceman-7 img:nth-child(4)").delay(13700).animate({
      
      width: "45px",
      top: "22px",
      right: "-200px",
      opacity: 1
      
    }, time);
    $(".sign-up-form .spaceman-7 img:nth-child(4)").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-7 img:nth-child(4)").animate({

      width: 0,
      top: "129px",
      right: "124px"

    }, time);
    
    $(".sign-up-form .spaceman-7 img:last-child").delay(14100).animate({

      width: "45px",
      top: "-35px",
      right: "-40px",
      opacity: 1

    }, time);
    $(".sign-up-form .spaceman-7 img:last-child").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-7 img:last-child").animate({

      width: 0,
      top: "129px",
      right: "124px"

    }, time);
    
    /////////////// Space Man 8

    $(".sign-up-form .spaceman-8 img:first-child").delay(14500).animate({

      width: "45px",
      top: "-40px",
      right: "150px",
      opacity: 1

    }, time);
    $(".sign-up-form .spaceman-8 img:first-child").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-8 img:first-child").animate({

      width: 0,
      top: "185px",
      right: "-158px"

    }, time);
    
    $(".sign-up-form .spaceman-8 img:nth-child(2)").delay(14900).animate({

      width: "45px",
      top: "-25px",
      right: "30px",
      opacity: 1

    }, time);
    $(".sign-up-form .spaceman-8 img:nth-child(2)").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-8 img:nth-child(2)").animate({

      width: 0,
      top: "185px",
      right: "-158px"

    }, time);
    
    $(".sign-up-form .spaceman-8 img:nth-child(3)").delay(15300).animate({
      
      width: "45px",
      top: "0",
      right: "-220px",
      opacity: 1
      
    }, time);
    $(".sign-up-form .spaceman-8 img:nth-child(3)").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-8 img:nth-child(3)").animate({

      width: 0,
      top: "185px",
      right: "-158px"

    }, time);
    
    $(".sign-up-form .spaceman-8 img:nth-child(4)").delay(15700).animate({

      width: "45px",
      top: "5px",
      right: "100px",
      opacity: 1

    }, time);
    $(".sign-up-form .spaceman-8 img:nth-child(4)").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-8 img:nth-child(4)").animate({

      width: 0,
      top: "185px",
      right: "-158px"

    }, time);
    
    $(".sign-up-form .spaceman-8 img:last-child").delay(16100).animate({
      
      width: "45px",
      top: "10px",
      right: "20px",
      opacity: 1
      
    }, time, function () {
      
      reactionAnimation();
      
    });
    $(".sign-up-form .spaceman-8 img:last-child").animate({

      opacity: 0

    });
    $(".sign-up-form .spaceman-8 img:last-child").animate({

      width: 0,
      top: "185px",
      right: "-158px"

    }, time);
    
  }());
  
});