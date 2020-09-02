$(function() {

	let header = $("#header");
	let	introH = $("#intro").innerHeight();
	let	scrollOffset = $(window).scrollTop();
	let headerH = header.innerHeight();


	/* Fixed header */
	checkScroll(scrollOffset);

	$(window).on("scroll", function() {
		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);
	});

	function checkScroll(scrollOffset) {

		if (scrollOffset >= (introH - headerH)) {
			header.addClass("fixed");
		}	else {
			header.removeClass("fixed");
		}
	}

		/* Menu nav toggle open*/

	$("#nav_toggle").on("click", function(event){

		event.preventDefault();

		$(this).toggleClass("active")
		$("#nav").toggleClass("active").show;
	});

	/* Menu nav toggle close*/

	$("#nav").on("click", function(event){

		event.preventDefault();

		$("#nav_toggle").removeClass("active");
		$("#nav").removeClass("active");
	});


	/* Collapse */

	$("[data-collapse]").on("click", function(event) {

		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('collapse');

		$this.toggleClass("active");
	});


	/* Smooth scroll */ 

	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let $this = $(this);
			blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;

		$("#nav a").removeClass("active");
		$this.addClass("active");

		$("html, body").animate({
			scrollTop: blockOffset - headerH
		}, 500);
	});

});
