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
