$(document).ready(function(){
/* for the stocky navigation */
  $('.js--section-features').waypoint(function(direction){
      if (direction == "down") {
          $('nav').addClass('sticky');
      } else {
         $('nav').removeClass('sticky');
      }
  }, {
    offset: '60px;'
  });

/* scroll on buttons */
$('.js--scroll-to-plans').click(function () {
    $('html', 'body').animate({scrollTop: $('.js--section-plans').offset(.top), 1000})
});



})
