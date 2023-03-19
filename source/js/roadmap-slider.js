const roadmapSlider = new Swiper('.roadmap__wrapper', {
  spaceBetween: 24,
  autoplay: {
    delay: 2500,
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
      slidesPerView: 5
    },
    1660: {
      slidesPerView: 6
    }
  }
})
