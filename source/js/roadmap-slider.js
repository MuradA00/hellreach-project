const roadmapSlider = new Swiper('.roadmap__wrapper', {
  spaceBetween: 24,
  autoplay: {
    delay: 6000,
    disableOnInteraction: true,
},
  breakpoints: {
    600: {
      slidesPerView: 2
    },
    798: {
      slidesPerView: 3
    },
    1366: {
      slidesPerView: 4
    }
  }
})
