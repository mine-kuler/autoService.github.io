$(function() {

	// Custom JS

	$("a[href='#form-hidden']").click(function() {
		var attr = $(this).attr('data-name');
		var name = $(this).text();

		if(attr){
			$("#form-hidden h4").text(name);
			$("#form-hidden input[name='service']").val(attr);
		}
	});

	$("a[href='#form-hidden']").magnificPopup({
		mainClass: "my-mfp-zoom-in",
		removalDelay: 300,
		type: "inline",
	});

	$(".s-services .carousel").owlCarousel({
		loop: true,
		margin: 30,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		dots: true,
		responsive: {
			0:{
				items: 1,
			},
			800:{
				items: 2,
			},
			992:{
				items: 3,
			},
			1280:{
				items: 4,
			},
		},
	});

	function heights(){
		$(".s-advantages .item p").equalHeights();
	}
	heights();

	function wResize(){
		$(".header-screen").css("min-height", $(window).height() - ($(window).height()/100*14.9));
	};
	wResize();

	$(window).resize(function(){
		wResize();
		heights();
		if($(window).width() > 992){
			$(".main-menu .menu").show();
		}
	});

	$(".toggle-mnu").click(function() {
	  $(this).toggleClass("on");
	  $(".menu").slideToggle();
	  return false;
	});

});
