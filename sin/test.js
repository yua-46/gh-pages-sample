function slideSwitch() {
   var $active = $('#slideshow img.active');

   if ( $active.length == 0 ) $active = $('#slideshow img:last');

   var $next =  $active.next().length ? $active.next()
      : $('#slideshow img:first');

   $active.addClass('last-active');

   $next.css({opacity: 0.0})
      .addClass('active')
      .animate({opacity: 1.0}, 1000, function() {
           $active.removeClass('active last-active');
      });
}

$(function() {
   setInterval( "slideSwitch()", 4000 );

   $('.toTop').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });

    $('.social-icon').hover(
      function(){
      $(this).animate({
        'font-size': '22px'
      },300);
    },
      function(){
      $(this).animate({
        'font-size': '16px'
      },300);
    });
});

