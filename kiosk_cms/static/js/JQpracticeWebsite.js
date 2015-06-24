$(document).ready(function() {

  //Slide Out Navagation Menu Animation
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
  
  $(document).on( 'scroll', function(){
 
    if ($(window).scrollTop() > 1000) {
      $('.scroll-top-wrapper').addClass('show');
    } else {
      $('.scroll-top-wrapper').removeClass('show');
    }
  });
  $('.scroll-top-wrapper').on('click', scrollToTop);

  function scrollToTop() {
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $('body');
    offset = element.offset();
    offsetTop = offset.top;
    $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
  }

});
