/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}
// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	// Перечень слайдеров
	if (document.querySelector('.clients__slider')) {
		new Swiper('.clients__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			//modules: [Navigation, Pagination],
			modules: [Navigation],
			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			// slidesPerView: "auto",
			spaceBetween: 40,
			// autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			//pagination: {
			//	el: '.slider-quality__pagging',
			//	clickable: true,
			//},
			// Arrows
			navigation: {
				prevEl: '.clients__navigation .navigation-slider__button_prev',
				nextEl: '.clients__navigation .navigation-slider__button_next',
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 20,
					// autoHeight: true,
				},
				478: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
				},
				// 992: {
				// 	slidesPerView: 4,
				// },
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			on: {

			}
		});
	}

	if (document.querySelector('.certificates__slider')) {
		new Swiper('.certificates__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			//modules: [Navigation, Pagination],
			modules: [Navigation],
			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			observer: true,
			observeParents: true,
			// slidesPerView: 4,
			spaceBetween: 0,
			// autoHeight: true,
			speed: 800,
			loop: true,
			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			//pagination: {
			//	el: '.slider-quality__pagging',
			//	clickable: true,
			//},
			// Arrows
			navigation: {
				prevEl: '.certificates__navigation .navigation-slider__button_prev',
				nextEl: '.certificates__navigation .navigation-slider__button_next',
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 10,
					// autoHeight: true,
				},
				// 478: {
				// 	slidesPerView: 1,
				// 	spaceBetween: 10,
				// },
				595: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1330: {
					slidesPerView: 4,
				},
			},
			on: {

			}
		});
	}

	if (document.querySelector('.testimonials__slider')) {
		new Swiper('.testimonials__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			//modules: [Navigation, Pagination],
			modules: [Navigation],
			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 0,
			// autoHeight: true,
			speed: 800,
			loop: true,
			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			//pagination: {
			//	el: '.slider-quality__pagging',
			//	clickable: true,
			//},
			// Arrows
			navigation: {
				prevEl: '.testimonials__navigation .navigation-slider__button_prev',
				nextEl: '.testimonials__navigation .navigation-slider__button_next',
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 10,
					// autoHeight: true,
				},
				// 478: {
				// 	slidesPerView: 2,
				// 	spaceBetween: 10,
				// },
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				// 992: {
				// 	slidesPerView: 3,
				// 	spaceBetween: 20,
				// },
				1330: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},
			on: {

			}
		});
	}

	if (document.querySelector('.mb-of-interest__slider')) {
		new Swiper('.mb-of-interest__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			//modules: [Navigation, Pagination],
			modules: [Navigation],
			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 0,
			// autoHeight: true,
			speed: 800,
			loop: true,
			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			//pagination: {
			//	el: '.slider-quality__pagging',
			//	clickable: true,
			//},
			// Arrows
			navigation: {
				prevEl: '.mb-of-interest__navigation .navigation-slider__button_prev',
				nextEl: '.mb-of-interest__navigation .navigation-slider__button_next',
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 20,
					// autoHeight: true,
				},
				// 478: {
				// 	slidesPerView: 2,
				// 	spaceBetween: 10,
				// },
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				// 992: {
				// 	slidesPerView: 3,
				// 	spaceBetween: 20,
				// },
				1330: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},
			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});