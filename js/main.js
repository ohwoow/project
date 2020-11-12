// Открытие меню

const menuBtn = document.querySelector('.header__btn')
const menu = document.querySelector('.nav')
const overlay = document.querySelector('.overlay')

menuBtn.addEventListener('click', function() {
  this.classList.toggle('_active')
  menu.classList.toggle('_active')
  overlay.classList.toggle('show')
})


const heroSlider = new Swiper('.hero-slider', {
  slidesPerView: 1,
  speed: 700,
  allowTouchMove: true,

  pagination: {
    el: '.hero-pag',
  },
  navigation: {
    nextEl: '.slide-right',
    prevEl: '.slide-left',
  },

  breakpoints: {
    1200: {
      allowTouchMove: false,
      mousewheel: true,
    }
  }
});

const aboutSlider = new Swiper('.about-slider', {
  slidesPerView: 1,
  speed: 800,
  allowTouchMove: false,
  mousewheel: true,

  pagination: {
    el: '.about-pag',
  },
  navigation: {
    nextEl: '.slide-right',
    prevEl: '.slide-left',
  },

});

const infoSlider = new Swiper('.info-slider', {
  slidesPerView: 1,
  speed: 800,
  allowTouchMove: false,
  mousewheel: true,

  pagination: {
    el: '.info-pag',
  },
  navigation: {
    nextEl: '.slide-right',
    prevEl: '.slide-left',
  },

});

// Добавляем пагинацию и меняем класс на последнем слайде
const heroSliders = document.querySelectorAll('.hero-slider .swiper-slide')
const aboutSliders = document.querySelectorAll('.about-slider .swiper-slide')
const infoSliders = document.querySelectorAll('.info-slider .swiper-slide')
const heroPag = document.querySelector('.hero-pag')
const aboutPag = document.querySelector('.about-pag')
const infoPag = document.querySelector('.info-pag')

heroSlider.on('slideChange', function () {

  if (heroSlider.activeIndex >= 1) {
    heroPag.style.display = 'block'
      if (heroSlider.activeIndex === heroSliders.length - 1) {
        heroPag.style.display = 'block'
        heroPag.classList.add('right')
      } else {
        heroPag.classList.remove('right')
      }
  } else {
    heroPag.style.display = 'none'
  }
});

aboutSlider.on('slideChange', function () {
  if (aboutSlider.activeIndex === aboutSliders.length - 1) {
    aboutPag.style.display = 'block'
    aboutPag.classList.add('right')
  } else {
    aboutPag.classList.remove('right')
  }
})

infoSlider.on('slideChange', function () {
  if (infoSlider.activeIndex === infoSliders.length - 1) {
    infoPag.style.display = 'block'
    infoPag.classList.add('right')
  } else {
    infoPag.classList.remove('right')
  }
})

// галлерея

const galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 12,
});
const galleryTop = new Swiper('.gallery-top', {
  effect: 'fade',
  navigation: {
    nextEl: '.gallery-button-next',
    prevEl: '.gallery-button-prev',
  },
  autoplay: {
    delay: 3500,
  },
  thumbs: {
    swiper: galleryThumbs
  }
});

// Команда

const teamThumbs = new Swiper('.team__bottom', {
  spaceBetween: 10,
  slidesPerView: 6,
});
const teamTop = new Swiper('.team__top', {
  spaceBetween: 50,
  navigation: {
    nextEl: '.team__top-btn_next',
    prevEl: '.team__top-btn_prev',
  },

  thumbs: {
    swiper: teamThumbs
  }
});