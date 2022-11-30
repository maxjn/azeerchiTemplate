// *Hero Slider
var course = new Swiper(".main-slider", {
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});

// *Stores slider
var course = new Swiper(".stores-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    350: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    750: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
    },
    1290: {
      slidesPerView: 4,
    },
  },
});

// *Last products slider
var course = new Swiper(".last-products-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    350: {
      slidesPerView: 1,
    },
    540: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

// *Best products slider
var slider = new Swiper(".best-products-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    350: {
      slidesPerView: 1,
    },
    540: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

// *Brand products slider
var slider = new Swiper(".brand-products-slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1300: {
      slidesPerView: 5,
    },
  },
});

// *Suggested products slider
var slider = new Swiper(".suggested-products-slider", {
  spaceBetween: 3,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1300: {
      slidesPerView: 5,
    },
  },
});

// *Single products slider

var swiper = new Swiper(".product-thumb-swiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".main-thumb-swiper", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
