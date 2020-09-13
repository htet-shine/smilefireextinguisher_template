$(document).ready( function () {

	if (window.matchMedia('(max-width: 991.8px)').matches) {
    $(".drop-item").click( function () {

    	var this_link = $(this);
    	this_link.children('.megamenu').slideToggle(400);
    	$(".drop-item").not(this_link).children('.megamenu').slideUp(400);
    	// $(".megamenu", this).not(".in .megamenu").stop(true, true).slideToggle(400); 

    });
  } else {

    $(".drop-item").hover( function () {
    	$(this).children('.megamenu').slideToggle(400);
    	$(".drop-item").not($(this)).children('.megamenu').slideUp(100);
    });

	}
	$(".nav-toggle").click(function () {
		$(".megamenu").slideUp(300);
	});
	$(".dimmer").click(function () {
		$(".megamenu").slideUp(300);
	});
});

const mainNavigation = () => {

	const navMobile = () => {

		const navToggle = document.querySelector('.nav-toggle');
		const navMenu = document.querySelector('ul.main-nav');
		const navDimmer = document.querySelector('.dimmer');

		navToggle.addEventListener('click', () => {

			navMenu.classList.toggle('mobile-active');

			navToggle.classList.toggle('active');

			navDimmer.classList.toggle('active');

		});

		navDimmer.addEventListener('click', () => {

			navMenu.classList.remove('mobile-active');

			navToggle.classList.remove('active');

			navDimmer.classList.remove('active');

		});

	}
	navMobile();
}
mainNavigation();