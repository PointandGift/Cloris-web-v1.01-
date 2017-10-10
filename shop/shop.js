$(window).scroll(function(){
  var stickyheader = $('.sticky'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) stickyheader.addClass('fixed');
  else stickyheader.removeClass('fixed');

	 
	
});



