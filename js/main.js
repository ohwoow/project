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
  mousewheel: true,

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
    }
  }
});

const aboutSlider = new Swiper('.about-slider', {
  slidesPerView: 1,
  speed: 800,
  allowTouchMove: true,
  mousewheel: true,

  pagination: {
    el: '.about-pag',
  },
  navigation: {
    nextEl: '.slide-right',
    prevEl: '.slide-left',
  },
  breakpoints: {
    1200: {
      allowTouchMove: false,
    }
  }
});

const infoSlider = new Swiper('.info-slider', {
  slidesPerView: 1,
  speed: 800,
  allowTouchMove: true,
  mousewheel: true,

  pagination: {
    el: '.info-pag',
  },
  navigation: {
    nextEl: '.slide-right',
    prevEl: '.slide-left',
  },
  breakpoints: {
    1200: {
      allowTouchMove: false,
    }
  }
});

// Добавляем пагинацию и меняем класс на последнем слайде
const heroSliders = document.querySelectorAll('.hero-slider .swiper-slide')
const aboutSliders = document.querySelectorAll('.about-slider  .about-slide')
const infoSliders = document.querySelectorAll('.info-slider .swiper-slide')
const heroPag = document.querySelector('.hero-pag')
const aboutPag = document.querySelector('.about-pag')
const infoPag = document.querySelector('.info-pag')

// Анимация

const featuresAnimatedUp = document.querySelectorAll('.animated-up')
const infoAnimatedDown = document.querySelectorAll('.animated-down_info')
const contactsAnimatedUp = document.querySelectorAll('.animated-up_contacts')
const benefitsAnimatedDown = document.querySelectorAll('.animated-down_benefits')
const teamAnimatedUp = document.querySelectorAll('.animated-up_team')
const feedbackAnimatedDown = document.querySelectorAll('.animated-down_feedback')
const statisticsAnimatedUp = document.querySelectorAll('.animated-down_statistics')
const instructionAnimatedUp  = document.querySelectorAll('.animated-up_instruction')
let animTime = 0.2

function anim(el, animClass) {
  el.classList.add('animate__animated', animClass)
  el.style.animationDelay = animTime + 's'
}

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

  if (heroSlider.activeIndex === 1) {
    featuresAnimatedUp.forEach(el => {
      anim(el, 'animate__fadeInUp')
    })
  } else if (heroSlider.activeIndex === 2) {
    infoAnimatedDown.forEach(el => {
      anim(el, 'animate__fadeInDown')
    })
  } else if (heroSlider.activeIndex === 3) {
    contactsAnimatedUp.forEach(el => {
      anim(el, 'animate__fadeInUp')
    })
  }

});



aboutSlider.on('slideChange', function () {
  if (aboutSlider.activeIndex === aboutSliders.length - 1) {
    aboutPag.style.display = 'block'
    aboutPag.classList.add('right')
  } else {
    aboutPag.classList.remove('right')
  }

  if (aboutSlider.activeIndex === 1) {
    benefitsAnimatedDown.forEach(el => {
      anim(el, 'animate__fadeInUp')
    })
  } else if (aboutSlider.activeIndex === 2) {
    teamAnimatedUp.forEach(el => {
      anim(el, 'animate__fadeInUp')
    })
  } else if (aboutSlider.activeIndex === 3) {
    feedbackAnimatedDown.forEach(el => {
      anim(el, 'animate__fadeInDown')
    })
  }
})

infoSlider.on('slideChange', function () {
  if (infoSlider.activeIndex === infoSliders.length - 1) {
    infoPag.style.display = 'block'
    infoPag.classList.add('right')
  } else {
    infoPag.classList.remove('right')
  }

  if (infoSlider.activeIndex === 1) {
    statisticsAnimatedUp.forEach(el => {
      anim(el, 'animate__fadeInUp')
    })
  } else if (infoSlider.activeIndex === 2) {
    instructionAnimatedUp.forEach(el => {
      anim(el, 'animate__fadeInUp')
    })
  }
})

// галлерея

const galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 2,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,

  breakpoints: {
    1200: {
      slidesPerView: 12,
    },
    850: {
      slidesPerView: 8,
    },
    550: {
      slidesPerView: 4,
    },
  }
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

// Команда слайдер

const teamThumbs = new Swiper('.team__bottom', {
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,

  breakpoints: {
    992: {
      slidesPerView: 6
    }
  }
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




// Модалка

const modal = new Modal({
	isOpen: (modal) => {
		console.log(modal);
		console.log('opened');
	},
	isClose: () => {
		console.log('closed');
	},
});
