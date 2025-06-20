// document.addEventListener('DOMContentLoaded', () => {
//   const sliderContainer = document.querySelector('.slider-container');
//   const slider = document.querySelector('.slider');

//   if (slider && sliderContainer) {
//     slider.addEventListener('input', (e) => {
//       sliderContainer.style.setProperty('--position', `${e.target.value}%`);
//     });
//   }
// });

// const sliderContainer = document.querySelector('.slider-container');
// const slider = document.querySelector('.slider');

// slider.addEventListener('input', (e) => {
//   sliderContainer.style.setProperty('--position', `${e.target.value}%`);
// });


document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.slider');

  sliders.forEach((slider) => {
    const container = slider.closest('.slider-container');
    if (!container) return;

    slider.addEventListener('input', (e) => {
      container.style.setProperty('--position', `${e.target.value}%`);
    });
  });
});
