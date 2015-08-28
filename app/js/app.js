require.config({
	// Alwats make main.js the baseUrl
	paths: {
		jquery: '../src/jquery.min',
		swiper: '../src/swiper',
		button: './button',
		data: './data',
		show: './show',
	}
});

// Start the main app logic
require(['jquery', 'swiper', 'button', 'data', 'show'], function($, swiper, button, data, show) {
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

	button.switchPage();
	button.numControl();
	button.personalControl();
});
