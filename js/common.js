document.addEventListener('DOMContentLoaded', function() {
	const showSlider = new Swiper('.showcase-carousel', {
		loop: true,
		slidesPerView: 3,
		speed: 1800,
		centeredSlides: true,
		navigation: {
			nextEl: '.showcase-navigation__prev',
			prevEl: '.showcase-navigation___next',
		}
	})
	document.querySelector('video').playbackRate = 2
})
