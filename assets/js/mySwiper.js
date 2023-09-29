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
      autoplay: {
        delay: 3000, // Delay in milliseconds (3 seconds)
        disableOnInteraction: false, // Allows manual navigation while autoplaying
      },
      loop: true,
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
      loop: true,
    });
  }
}

// Initialize Swiper on page load
initSwiper();

// Update Swiper on window resize
window.addEventListener("resize", initSwiper);




// const initSwiper = () => {
//   if (window.innerWidth <= 768) {
//     swiper = new Swiper(".mySwiper", {
//       slidesPerView: 2, // Set to 2 for mobile devices
//       // centeredSlides: true,
//       spaceBetween: 30,
//       pagination: {
//         el: ".swiper-pagination",
//         type: "fraction",
//       },
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//     });
//   } else {
//     swiper = new Swiper(".mySwiper", {
//       slidesPerView: 6, // Default value
//       // centeredSlides: true,
//       spaceBetween: 30,
//       pagination: {
//         el: ".swiper-pagination",
//         type: "fraction",
//       },
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//     });
//   }

//   // Add event listeners to the navigation buttons
//   const nextButton = document.querySelector(".swiper-button-next");
//   const prevButton = document.querySelector(".swiper-button-prev");

//   nextButton.addEventListener("click", () => {
//     if (!swiper.isEnd) {
//       swiper.slideNext();
//     }
//   });

//   prevButton.addEventListener("click", () => {
//     if (!swiper.isBeginning) {
//       swiper.slidePrev();
//     }
//   });
// };

// // Initialize Swiper on page load
// initSwiper();

// // Update Swiper on window resize
// window.addEventListener("resize", initSwiper);
