$(document).ready(function(){
	//navbar on scroll
	$(function () {
		$(document).scroll(function () {
			var $nav = $("#myNav");
			$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
		});
	});
	
	//icons show when scroll
	window.sr = ScrollReveal();
	sr.reveal('.sr-icon',{
		duration: 600,
		scale: 0.3,
		distance: '0px'
	}, 200),
		sr.reveal('.sr-media',{
		duration: 600,
		scale: 0.3,
		distance: '0px'
	}, 200);
	
	
	(function($, win) {
  $.fn.inViewport = function(cb) {
     return this.each(function(i,el){
       function visPx(){
         var H = $(this).height(),
             r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
         return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
       		} visPx();
       	$(win).on("resize scroll", visPx);
     	});
  	};
	}(jQuery, window));

	$("#feature1").inViewport(function(px){
			if(px) {
				$("#left1").addClass("animateLeft"),
				$("#right1").addClass("animateRight");
			}
	});
	$("#feature2").inViewport(function(px){
			if(px) {
				$("#left2").addClass("animateLeft"),
				$("#right2").addClass("animateRight");
			}
	});
	$("#feature3").inViewport(function(px){
			if(px) {
				$("#left3").addClass("animateLeft"),
				$("#right3").addClass("animateRight");
			}
	});
	
	//icon show on scroll
//	function showImages(el) {
//        var windowHeight = jQuery( window ).height();
//        $(el).each(function(){
//            var thisPos = $(this).offset().top;
//
//            var topOfWindow = $(window).scrollTop();
//            if (topOfWindow + windowHeight - 200 > thisPos ) {
//                $(this).addClass("fadeIn");
//            }
//        });
//    }
//
//    // if the image in the window of browser when the page is loaded, show that image
//    $(document).ready(function(){
//            showImages('.sr-icon');
//    });
//
//    // if the image in the window of browser when scrolling the page, show that image
//    $(window).scroll(function() {
//            showImages('.sr-icon');
//    });
});