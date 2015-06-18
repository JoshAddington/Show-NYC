$(document).ready(function() {

  //Vote Button display
  $('#voteButton').click(function() {
    var condition = true;
    if (condition === true){
      $('#vote').show();
      $('#gallery').hide();
      $('#submit').hide();
      $('#about').hide();
      $('#show-nyc-vg').show();
      $('#show-nyc-sa').hide();
      $('#filter').hide();}
  }); 

  //Gallery Button Display
  $('#galleryButton').click(function() {
    var condition = true;
    if (condition === true){
      $('#vote').hide();
      $('#gallery').show();
      $('#submit').hide();
      $('#about').hide();
      $('#show-nyc-vg').show();
      $('#show-nyc-sa').hide();
      $('#filter').show();}
  }); 

  //Submit Button Display
  $('#submitButton').click(function() {
    var condition = true;
    if (condition === true){
      $('#vote').hide();
      $('#gallery').hide();
      $('#submit').show();
      $('#about').hide();
      $('#show-nyc-vg').hide();
      $('#show-nyc-sa').show();
      $('#filter').hide();}
  }); 

   //About Button Display
  $('#aboutButton').click(function() {
    var condition = true;
    if (condition === true){
      $('#vote').hide();
      $('#gallery').hide();
      $('#submit').hide();
      $('#about').show();
      $('#show-nyc-vg').hide();
      $('#show-nyc-sa').show();
      $('#filter').hide();}
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

});
