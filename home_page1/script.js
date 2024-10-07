// JavaScript (using Bootstrap 5.3)
const cardSliderItems = document.querySelectorAll('.card-slider-item');
const cardSliderNav = document.querySelector('.card-slider-nav');
const cardSliderDots = document.querySelector('.card-slider-dots');

let currentSlide = 0;
let slideWidth = cardSliderItems[0].offsetWidth + 10; // add the gap width to the slide width
let slideCount = cardSliderItems.length;
let visibleSlides = 5;

cardSliderNav.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-prev')) {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slideCount - 1;
    }
  } else if (e.target.classList.contains('btn-next')) {
    currentSlide++;
    if (currentSlide >= slideCount) {
      currentSlide = 0;
    }
  }
  updateSlider();
});

cardSliderDots.addEventListener('click', (e) => {
  if (e.target.classList.contains('dot')) {
    currentSlide = parseInt(e.target.dataset.slideTo);
    updateSlider();
  }
});

function updateSlider() {
  const translateX = -currentSlide * slideWidth;
  cardSliderItems.forEach((item, index) => {
    item.style.transform = `translateX(${translateX}px)`;
    item.style.transition = 'transform 0.5s ease-in-out';
  });

  const activeDot = cardSliderDots.querySelector('.active');
  activeDot.classList.remove('active');
  const newActiveDot = cardSliderDots.querySelector(`button[data-slide-to="${currentSlide}"]`);
  newActiveDot.classList.add('active');
}

// Initialize slider
updateSlider();