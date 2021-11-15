document.addEventListener('DOMContentLoaded', function () {
	var splide = new Splide('.splide', {
		type: 'loop',
		padding: { left: 0, right: 52 },
		gap: '5px',
		autoplay: true,
		perPage: 1,
		autoWidth: true,
		arrows: false,
		interval: 3000,
		pagination: false,
	});

	splide.mount();
});
