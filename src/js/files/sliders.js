/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Grid } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
// import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
import '../../scss/libs/swiper.scss';
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.bathhouse__slider')) {
		// Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.bathhouse__slider', {
			// Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Grid],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			slidesPerGroup: 4,
			spaceBetween: 24,
			grid: {
				rows: 2,
				fill: 'row',
			},
			// autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация

			pagination: {
				el: '.bathhouse__pagination',
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.bathhouse__slide-left',
				nextEl: '.bathhouse__slide-right',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 9,
					slidesPerGroup: 2,
					grid: {
						rows: 2,
						fill: 'row',
					},
				},
				600: {
					slidesPerView: 3,
					spaceBetween: 15,
					slidesPerGroup: 2,
					grid: {
						rows: 2,
						fill: 'row',
					},
				},
				1090: {
					slidesPerView: 4,
					spaceBetween: 24,
					slidesPerGroup: 4,
					grid: {
						rows: 2,
						fill: 'row',
					},
				},
			},

			// События
			on: {},
		});
	}

	if (document.querySelector('.sauna__slider')) {
		// Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.sauna__slider', {
			// Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Grid],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			slidesPerGroup: 4,
			spaceBetween: 24,
			grid: {
				rows: 2,
				fill: 'row',
			},
			// autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация

			pagination: {
				el: '.sauna__pagination',
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.sauna__slide-left',
				nextEl: '.sauna__slide-right',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 9,
					slidesPerGroup: 2,
					grid: {
						rows: 2,
						fill: 'row',
					},
				},
				600: {
					slidesPerView: 3,
					spaceBetween: 15,
					slidesPerGroup: 2,
					grid: {
						rows: 2,
						fill: 'row',
					},
				},
				1090: {
					slidesPerView: 4,
					spaceBetween: 24,
					slidesPerGroup: 4,
					grid: {
						rows: 2,
						fill: 'row',
					},
				},
			},

			// События
			on: {},
		});
	}

	if (document.querySelector('.hamam__slider')) {
		// Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.hamam__slider', {
			// Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Grid],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			slidesPerGroup: 4,
			spaceBetween: 24,
			grid: {
				rows: 2,
				fill: 'row',
			},
			// autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация

			pagination: {
				el: '.hamam__pagination',
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.hamam__slide-left',
				nextEl: '.hamam__slide-right',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 9,
					slidesPerGroup: 2,
					grid: {
						rows: 2,
						fill: 'row',
					},
				},
				600: {
					slidesPerView: 3,
					spaceBetween: 15,
					slidesPerGroup: 2,
					grid: {
						rows: 2,
						fill: 'row',
					},
				},
				1090: {
					slidesPerView: 4,
					spaceBetween: 24,
					slidesPerGroup: 4,
					grid: {
						rows: 2,
						fill: 'row',
					},
				},
			},

			// События
			on: {},
		});
	}

	if (document.querySelector('.hamam-2__slider')) {
		// Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.hamam-2__slider', {
			// Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Grid],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			slidesPerGroup: 4,
			spaceBetween: 24,
			grid: {
				rows: 2,
				fill: 'row',
			},
			// autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация

			pagination: {
				el: '.hamam-2__pagination',
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.hamam-2__slide-left',
				nextEl: '.hamam-2__slide-right',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 9,
					slidesPerGroup: 2,
					grid: {
						rows: 2,
						fill: 'row',
					},
				},
				600: {
					slidesPerView: 3,
					spaceBetween: 15,
					slidesPerGroup: 2,
					grid: {
						rows: 2,
						fill: 'row',
					},
				},
				1090: {
					slidesPerView: 4,
					spaceBetween: 24,
					slidesPerGroup: 4,
					grid: {
						rows: 2,
						fill: 'row',
					},
				},
			},

			// События
			on: {},
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
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
					snapOnRelease: false,
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener('load', function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});
