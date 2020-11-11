// Открытие меню

const menuBtn = document.querySelector('.header__btn')
const menu = document.querySelector('.nav')

menuBtn.addEventListener('click', function() {
  this.classList.toggle('_active')
  menu.classList.toggle('_active')
})


const swiper = new Swiper('.hero-slider', {
  slidesPerView: 1,
  speed: 700,
  allowTouchMove: false,
  mousewheel: true,

  pagination: {
    el: '.swiper-pagination',
  },
});