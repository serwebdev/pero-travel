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
