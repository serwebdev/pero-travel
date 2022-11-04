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
