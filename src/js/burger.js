const headerBurger = document.querySelector('.header__burger');
const headerList = document.querySelector('.header__list');

headerBurger.addEventListener('click', () => {
  headerList.classList.toggle('show');
});
