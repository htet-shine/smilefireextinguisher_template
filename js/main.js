$(document).ready( function () {

	if (window.matchMedia('(max-width: 991.8px)').matches) {
    $(".drop-item").click( function () {
    	$(".megamenu").addClass("mobile");
    	$(".megamenu.mobile", this).not(".in .megamenu.mobile").stop(true, true).slideToggle(300); 
    });
  } else {
    $(".drop-item").hover( function () {
    	$(".megamenu", this).not(".in .megamenu").stop(true, true).slideToggle(300);
    });
	}
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