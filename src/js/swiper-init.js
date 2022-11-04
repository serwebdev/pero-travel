const swiper1 = new Swiper('.popular__slider', {
  // Optional parameters
  // Количество слайдов на просмотр (слайды, видимые одновременно в контейнере слайдера)
  slidesPerView: 3.41,

  // Установите количество слайдов, чтобы определить и включить групповое слайдирование. Полезно использовать со slidesPerView > 1
  slidesPerGroup: 1,

  // Расстояние между слайдами в px
  spaceBetween: 20,

  // Скорость перелистывания
  speed: 300,

  //   Установите, true чтобы включить режим непрерывного цикла
  // loop: true,

  // Автопрокрутка
  // autoplay: {
  // Задержка между переходами (в мс). Если этот параметр не указан, автовоспроизведение будет отключено.
  // delay: 1000,
  //Установите false и автовоспроизведение не будет отключено после взаимодействия с пользователем (пролистывания), оно будет перезапускаться каждый раз после взаимодействия
  // disableOnInteraction: false,
  // Когда включено, автовоспроизведение будет приостановлено при вводе мыши над контейнером Swiper. Если disableOnInteractionтакже включен, он остановит автовоспроизведение вместо паузы
  // pauseOnMouseEnter: true,
  // },

  // Брейкпоинты (точки останова)
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.415,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    500: {
      slidesPerView: 2.24,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    850: {
      slidesPerView: 2.7,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 3.41,
      spaceBetween: 20,
    },
  },

  // If we need pagination
  pagination: {
    el: '.popular-slider-control__pagination',
    // el: '.swiper-pagination-progressbar',
    clickable: true,
    // Строка с типом разбиения на страницы. Может быть 'bullets', 'fraction' или 'progressbar' 'custom'
    type: 'progressbar',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.popular-slider-control__navigation-next',
    prevEl: '.popular-slider-control__navigation-prev',
  },
});

// Slider reviews======================================================================
const swiper2 = new Swiper('.reviews__slider', {
  // Optional parameters
  // Количество слайдов на просмотр (слайды, видимые одновременно в контейнере слайдера)
  // slidesPerView: 1.71,

  // Установите количество слайдов, чтобы определить и включить групповое слайдирование. Полезно использовать со slidesPerView > 1
  slidesPerGroup: 1,

  // Расстояние между слайдами в px
  spaceBetween: 20,

  // Скорость перелистывания
  // speed: 300,

  //   Установите, true чтобы включить режим непрерывного цикла
  // loop: true,

  // Брейкпоинты (точки останова)
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    // // when window width is >= 480px
    400: {
      slidesPerView: 1.4,
      spaceBetween: 20,
    },
    // // when window width is >= 640px
    700: {
      slidesPerView: 1.35,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 1.71,
      spaceBetween: 20,
    },
  },

  // If we need pagination
  pagination: {
    el: '.reviews-slider-control .swiper-pagination',
    // el: '.swiper-pagination-progressbar',
    clickable: true,
    // Строка с типом разбиения на страницы. Может быть 'bullets', 'fraction' или 'progressbar' 'custom'
    type: 'progressbar',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider-control .swiper-button-next',
    prevEl: '.reviews-slider-control .swiper-button-prev',
  },
});

// tour-one slider 1 -------------------------------------------------------------------
const swiper3 = new Swiper('.route__slider', {
  // Optional parameters
  // Количество слайдов на просмотр (слайды, видимые одновременно в контейнере слайдера)
  slidesPerView: 1.5,

  // Установите количество слайдов, чтобы определить и включить групповое слайдирование. Полезно использовать со slidesPerView > 1
  slidesPerGroup: 1,

  // Расстояние между слайдами в px
  spaceBetween: 18,

  // Скорость перелистывания
  // speed: 300,

  //   Установите, true чтобы включить режим непрерывного цикла
  // loop: true,

  // Брейкпоинты (точки останова)
  breakpoints: {
    320: {
      slidesPerView: 1.4,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    500: {
      slidesPerView: 1.405,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    750: {
      slidesPerView: 1.625,
      spaceBetween: 18,
    },
    1000: {
      slidesPerView: 1.46,
      spaceBetween: 18,
    },
  },

  // If we need pagination
  pagination: {
    el: '.route-slider-control__pagination',
    // el: '.swiper-pagination-progressbar',
    // el: '.swiper-pagination-progressbar',
    clickable: true,
    // Строка с типом разбиения на страницы. Может быть 'bullets', 'fraction' или 'progressbar' 'custom'
    type: 'progressbar',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.route-slider-control__navigation-next',
    prevEl: '.route-slider-control__navigation-prev',
    // nextEl: '.swiper-button-next',
    // prevEl: '.swiper-button-prev',
  },
});
