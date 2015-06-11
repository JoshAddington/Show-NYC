$(document).ready(function() {
  
  $('.tabs').mouseenter(function() {
    $(this).animate({
      height: '+=0px'
    });
  });
  $('.tabs').mouseleave(function() {
    $(this).animate({
      height: '-=0px'
    }); 
  });

  $('#voteButton').click(function() {
    var condition = true;
    if (condition === true){
      $('#vote').show();
      $('#gallery').hide();
      $('#submit').hide();
      $('#about').hide();
    }
   }); 

  $('#galleryButton').click(function() {
    var condition = true;
    if (condition === true){
      $('#vote').hide();
      $('#gallery').show();
      $('#submit').hide();
      $('#about').hide();
      }
   }); 

   $('#submitButton').click(function() {
    var condition = true;
    if (condition === true){
      $('#vote').hide();
      $('#gallery').hide();
      $('#submit').show();
      $('#about').hide();
      }
   }); 

   $('#aboutButton').click(function() {
    var condition = true;
    if (condition === true){
      $('#vote').hide();
      $('#gallery').hide();
      $('#submit').hide();
      $('#about').show();
      }
   }); 

var main = function() {
//Push the body and the nav over by 285px over 
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "350px"
    }, 200);
  });

//Then push them back 
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-350px"
    }, 200);

    $('body').animate({
      left: "-350px"
    }, 200);
  });
//push back after clilcking elsewhere
}

$(document).ready(main);

});