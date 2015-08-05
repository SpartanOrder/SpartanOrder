require.config({
	// Alwats make main.js the baseUrl
	paths: {
		jquery: './jquery.min',
		swiper: './swiper',
		homepage: './homepage',
	}
});

// Start the main app logic
require(['jquery', 'swiper'], function($, swiper) {
	$(document).ready(function() {
		var mySwiper = new Swiper('.swiper-container', {
			direction: 'horizontal',
			autoplay: 3000,
			loop: true,
			pagination: '.swiper-pagination',
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
		});
	});
});