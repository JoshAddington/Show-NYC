$(document).ready(function() {
  // console.log("ready!");

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

  $('.ribbon').click(function() {
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


  // Fixing the highlight on the navigation section
  if(window.location.href.indexOf("vote") > -1) {
    $('#voteButton').trigger("click");
  };
  if(window.location.href.indexOf("gallery") > -1) {
    $('#galleryButton').trigger("click");
  };
  if(window.location.href.indexOf("submit") > -1) {
    $('#submitButton').trigger("click");
  };

  if(window.location.href.indexOf("about") > -1) {
    $('#aboutButton').trigger("click");
  };
  //Slide Out Navagation Menu Animation
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0%"
    }, 200);
    $('.menu').css('left', '-52%');
  });

  $('.icon-close').click(function() {
    $('.menu').animate({

      left: "-52%"
    }, 200);
    $('body').animate({
      left: "-52%"

      left: "-350px"
    }, 200);
    $('body').animate({
      left: "-350px"
    }, 200);
  });
  
  //Scroll to the top button
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
  };

  $('#photo').click(function(){
    $('#photo').addClass('.enlarged');
  })


});


