$(document).ready(function() {

  //Vote Button display
  $('#voteButton').click(function() {
    var condition = true;
    if (condition === true){
      $('#filter-buttons').hide();
      $('#voteButton').addClass("highlight")
      $('#galleryButton').removeClass("highlight")
      $('#submitButton').removeClass("highlight")
      $('#aboutButton').removeClass("highlight")}
  }); 

  //Gallery Button Display
  $('#galleryButton').click(function() {
    var condition = true;
    if (condition === true){
      $('#filter-buttons').show();
      $('#voteButton').removeClass("highlight")
      $('#galleryButton').addClass("highlight")
      $('#submitButton').removeClass("highlight")
      $('#aboutButton').removeClass("highlight")}
  }); 

  //Submit Button Display
  $('#submitButton').click(function() {
    var condition = true;
    if (condition === true){
      $('#filter-buttons').hide();
      $('#voteButton').removeClass("highlight")
      $('#galleryButton').removeClass("highlight")
      $('#submitButton').addClass("highlight")
      $('#aboutButton').removeClass("highlight")}
  }); 

  //Submit 
  $('#submit-ribbon').click(function(){
    var condition = true;
    if (condition === true){
      $('#filter-buttons').hide();
      $('#voteButton').removeClass("highlight")
      $('#galleryButton').removeClass("highlight")
      $('#submitButton').addClass("highlight")
      $('#aboutButton').removeClass("highlight")}
  });

   //About Button Display
  $('#aboutButton').click(function() {
    var condition = true;
    if (condition === true){
      $('#filter-buttons').hide();
      $('#voteButton').removeClass("highlight")
      $('#galleryButton').removeClass("highlight")
      $('#submitButton').removeClass("highlight")
      $('#aboutButton').addClass("highlight")}
  }); 

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
