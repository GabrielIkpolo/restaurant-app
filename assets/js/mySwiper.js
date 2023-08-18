var swiper;

const initSwiper = () => {
  if (window.innerWidth <= 768) {
    swiper = new Swiper(".mySwiper", {
      slidesPerView: 2, // Set to 2 for mobile devices
      // centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else {
    swiper = new Swiper(".mySwiper", {
      slidesPerView: 6, // Default value
      // centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}

// Initialize Swiper on page load
initSwiper();

// Update Swiper on window resize
window.addEventListener("resize", initSwiper);
