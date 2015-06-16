$(document).ready(function() {
  $('#voteButton').click(function() {
    var condition = true;
    if (condition === true){
      $('#vote').show();
      $('#gallery').hide();
      $('#submit').hide();
      $('#about').hide();
      $('#show-nyc-always').show();
      $('#show-nyc-about').hide();
      $('#filter').hide();
    }
   }); 

  $('#galleryButton').click(function() {
    var condition = true;
    if (condition === true){
      $('#vote').hide();
      $('#gallery').show();
      $('#submit').hide();
      $('#about').hide();
      $('#show-nyc-always').show();
      $('#show-nyc-about').hide();
      $('#filter').show();
      }
   }); 

   $('#submitButton').click(function() {
    var condition = true;
    if (condition === true){
      $('#vote').hide();
      $('#gallery').hide();
      $('#submit').show();
      $('#about').hide();
      $('#show-nyc-always').show();
      $('#show-nyc-about').hide();
      $('#filter').hide();      
      }
   }); 

   $('#aboutButton').click(function() {
    var condition = true;
    if (condition === true){
      $('#vote').hide();
      $('#gallery').hide();
      $('#submit').hide();
      $('#about').show();
      $('#show-nyc-always').hide();
      $('#show-nyc-about').show();
      $('#filter').hide();      
      }
   }); 

  
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
