const cards = new Swiper('.features__inner', {
  spaceBetween: 24,
  slidesPerView: 1,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    1150: {
      slidesPerView: 3
    },
    1300: {
      slidesPerView: 4
    }
  }
})
