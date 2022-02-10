let nav = document.querySelectorAll('.product__nav-btn');
nav.forEach((e) => {
    e.addEventListener('click', (j) => {
        j.preventDefault();
    }, false)
});

var swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".product__nav-btn_next",
      prevEl: ".product__nav-btn_prev",
    },
  });