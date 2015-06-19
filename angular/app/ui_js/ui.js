$('.slide').hover(
  function(){
    $(this).find('.caption').slideDown(250);
  },
  function(){
    $(this).find('.caption').slideUp(250);
  }
);


  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);
    $('.menu').css('left', '-300px');
   });


    $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-350px"
    }, 200);

    $('body').animate({
      left: "-350px"
    }, 200);
  });

// });
