$(document).ready(function() {
  $('.tabs').mouseenter(function() {
    $(this).animate({
      height: '+=10px'
    });
  });
  $('.tabs').mouseleave(function() {
    $(this).animate({
      height: '-=10px'
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

});