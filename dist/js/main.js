const headerBurger = document.querySelector('.header__burger');
const headerList = document.querySelector('.header__list');

headerBurger.addEventListener('click', () => {
  headerList.classList.toggle('show');
});

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

(function () {
  const questionsForm = document.querySelector('.questions__form');
  const questionsInput = document.querySelectorAll('.questions__input');
  const questionsInputMail = document.querySelector('.questions__input-mail');

  if (questionsForm) {
    questionsForm.addEventListener('submit', function (e) {
      e.preventDefault();
      questionsInput.forEach(input => {
        if (!input.value) {
          input.classList.add('error');
        } else {
          input.classList.remove('error');
        }
      });
      validEmail();
    });

    questionsInputMail.addEventListener('input', function () {
      validEmail();
    });

    function validEmail() {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
      if (reg.test(questionsInputMail.value)) {
        console.log('Yes');
        questionsInputMail.classList.remove('error');
      } else {
        console.log('No');
        questionsInputMail.classList.add('error');
      }
    }

    // questionsInputMail.addEventListener('invalid', function (e) {
    //   e.preventDefault();
    // });
  }
})();

if (window.location.pathname.includes('excursions')) {
  // console.log('Yes');
  // Dropdown меню выбора города
  (function () {
    const select = document.querySelector(
      '.filter-top__body-place .filter-top__body-item-box'
    );
    const selectSpan = document.querySelector(
      '.filter-top__body-place .filter-top__body-item-box span'
    );
    const dropdown = document.querySelector(
      '.filter-top__body-place .filter-top__body-menu'
    );
    const menuItem = document.querySelectorAll(
      '.filter-top__body-place .filter-top__body-menu-item'
    );

    // Открывает меню по клику на select
    select.addEventListener('click', e => {
      // console.log(e.target.closest('.filter-top__body-place'));

      if (e.target.closest('.filter-top__body-place')) {
        if (dropdown.classList.contains('show')) {
          dropdown.classList.remove('show');
        } else {
          dropdown.classList.add('show');
        }
      }
    });

    // Закрывает меню по клику на меню и переносит текст в select
    menuItem.forEach(item => {
      item.addEventListener('click', () => {
        dropdown.classList.remove('show');
        // console.log(item.textContent);
        selectSpan.textContent = item.textContent;

        // Добавляем класс active к выбранному пункту меню
        // menuItem.forEach(item => {
        //   item.classList.remove('active');
        // });
        // item.classList.add('active');
      });
    });

    // Закрыть меню по клику за пределами меню
    window.addEventListener('click', e => {
      // console.log(
      //   e.target.closest('.filter-top__body-place .filter-top__body-menu')
      // );
      const clickOut =
        !e.target.closest('.filter-top__body-place') &&
        dropdown.classList.contains('show');

      if (clickOut) {
        dropdown.classList.remove('show');
      }
    });
  })();

  // Прогресс бар выбора тура
  (function () {
    const tours = document.querySelectorAll('.filter-top__heading-title');
    const progressbar = document.querySelector(
      '.filter-top__heading-progressbar-fill'
    );

    // Количество туров
    const quantityTour = tours.length;
    const step = 100 / quantityTour;
    let percentFill = 0;
    progressbar.style.transform = `scaleX(${step / 100})`;

    tours.forEach((item, i) => {
      item.addEventListener('click', () => {
        percentFill = ((i + 1) * step) / 100;
        progressbar.style.transform = `scaleX(${percentFill})`;
        tours.forEach(item => {
          item.classList.remove('filter-top__heading-title--active');
        });
        item.classList.add('filter-top__heading-title--active');
      });
    });
  })();

  (function () {
    const accordion = document.querySelectorAll('.accordion');
    const accordionTab = document.querySelectorAll('.accordion__tab');
    const accordionContent = document.querySelectorAll('.accordion__content');
    const accordionTitle = document.querySelectorAll('.accordion__title');

    accordionTab.forEach((tab, i) => {
      tab.addEventListener('click', () => {
        accordion[i].classList.toggle('show');
        if (accordion[i].classList.contains('show')) {
          accordionTitle[i].classList.add('active');
        } else {
          accordionTitle[i].classList.remove('active');
        }
      });
    });
  })();
}

(function () {
  const asidePersonItem = document.querySelectorAll('.aside__person-item');
  asidePersonItem.forEach(item => {
    item.addEventListener('click', () => {
      asidePersonItem.forEach(itemClear => {
        itemClear.classList.remove('active');
      });
      item.classList.add('active');
    });
  });
})();

// const accordBtn = document.querySelectorAll('.accord__btn');
// const accordContent = document.querySelectorAll('.accord__content');

// accordBtn.forEach((tab, i) => {
//   tab.addEventListener('click', () => {
//     // accordContent[i].classList.toggle('show');
//     if (accordContent[i].classList.contains('show')) {
//       accordContent[i].classList.remove('show');
//       accordContent[i].style.height = 0 + 'px';
//     } else {
//       accordContent[i].classList.add('show');
//       accordContent[i].style.height = accordContent[i].scrollHeight + 'px';
//     }

//     console.log('при клике', accordContent[i].scrollHeight);
//   });
// });

// accordBtn.forEach((tab, i) => {
//   tab.addEventListener('click', () => {
//     accordContent[i].classList.toggle('show');
//     if (accordContent[i].classList.contains('show')) {
//       accordContent[i].style.height = accordContent[i].scrollHeight + 'px';
//     } else {
//       accordContent[i].style.height = 0 + 'px';
//     }

//     console.log('при клике', accordContent[i].scrollHeight);
//   });
// });

// Адаптив для aside
// (function () {
//   const asideFlexContainer = document.querySelector('.aside__flex-container');
//   const asideFlexItem = document.querySelectorAll('.aside__flex-item');

//   let asideFlexColumn;

//   let isWidth = 0;

//   window.addEventListener('resize', () => {
//     let widthScreen = document.documentElement.clientWidth;
//     // const asideFlexColumn = document.querySelectorAll('.aside__flex-column');

//     console.log(isWidth);
//     if (widthScreen <= 768 && isWidth === 0) {
//       for (let i = 0; i < 2; i++) {
//         let div = document.createElement('div');
//         div.className = 'aside__flex-column';
//         asideFlexContainer.append(div);
//         // console.log(widthScreen);
//         asideFlexColumn = document.querySelectorAll('.aside__flex-column');
//       }

//       asideFlexColumn[0].append(asideFlexItem[0]);
//       asideFlexColumn[0].append(asideFlexItem[2]);
//       asideFlexColumn[0].append(asideFlexItem[4]);
//       asideFlexColumn[0].append(asideFlexItem[5]);

//       isWidth = 1;
//     } else if (widthScreen > 768 && isWidth === 1) {
//       console.log(asideFlexColumn);
//       asideFlexColumn.forEach(item => {
//         item.remove();
//       });

//       isWidth = 0;
//     }
//   });
// })();

// 'use strict';
// import AirDatepicker from 'air-datepicker';
// import 'air-datepicker/air-datepicker.css';
// new AirDatepicker('.filter-top__air-datepicker');

new AirDatepicker('.filter-top__input-air-datepicker', {
  autoClose: true,
  dateFormat: 'dd MMMM yyyy',
});

console.log(AirDatepicker);

// let navTitlesDefaults = {
//   days: 'MMMM, <i>yyyy</i>',
//   months: 'yyyy',
//   years: 'yyyy1 - yyyy2',
// };

new AirDatepicker('.travel-calendar__calendar', {
  // autoClose: true,
  // dateFormat: 'dd MMMM yyyy',
  // inline: true,
  // prevHtml: `<svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  // <path d="M10 1.5L1.5045 9.05155C1.23599 9.29023 1.23599 9.70977 1.5045 9.94845L10 17.5" stroke="#0499DD" stroke-width="2" stroke-linecap="round"/>
  // </svg>
  // `,
  // nextHtml: `<svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  // <path d="M0.999999 1.5L9.4955 9.05155C9.76401 9.29023 9.76401 9.70977 9.4955 9.94845L0.999999 17.5" stroke="#0499DD" stroke-width="2" stroke-linecap="round"/>
  // </svg>
  // `,
  // navTitles: {
  //   days: 'MMMM yyyy',
  // },
  // onRenderCell({ date, cellType }) {
  //   let dates = [1, 5, 7, 10, 15, 20, 25],
  //     emoji = ['💕', '😃', '🍙', '🍣', '🍻', '🎉', '🥁'],
  //     isDay = cellType === 'day',
  //     _date = date.getDate(),
  //     shouldChangeContent = isDay && dates.includes(_date),
  //     randomEmoji = emoji[Math.floor(Math.random() * emoji.length)];
  //   return {
  //     html: shouldChangeContent ? randomEmoji : false,
  //     classes: shouldChangeContent ? '-emoji-cell-' : false,
  //   };
  // },
});

if (window.location.pathname.includes('excursions')) {
  (function () {
    let slider = document.querySelector('.aside__price-nouislider');
    const input0 = document.querySelector('.aside__price-input--0');
    const input1 = document.querySelector('.aside__price-input--1');
    const inputs = [input0, input1];

    noUiSlider.create(slider, {
      start: [1600, 4000],
      connect: true,
      tooltips: [true, wNumb({ decimals: 1 })],
      range: {
        min: 0,
        max: 8000,
      },
    });

    slider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = values[handle];
    });
  })();
}





