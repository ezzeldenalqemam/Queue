const page_dir = document.querySelector("html").getAttribute("dir");

if (page_dir == "rtl") {
  var dir_lang = true;
} else {
  var dir_lang = false;
}
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
openMenu.onclick = function () {
  document.querySelector(".header-section .nav-box").classList.add("show-nav");
  document.querySelector(".body-class").classList.add("overflow-hidden");
  closeMenu.classList.add("d-block");
  closeMenu.classList.remove("d-none");
  openMenu.classList.add("d-none");
};

closeMenu.onclick = function () {
  document
    .querySelector(".header-section .nav-box")
    .classList.remove("show-nav");
  document.querySelector(".body-class").classList.remove("overflow-hidden");
  closeMenu.classList.remove("d-block");
  openMenu.classList.add("d-block");
  openMenu.classList.remove("d-none");
  closeMenu.classList.add("d-none");
};

const swiper_testimonial = new Swiper("#testimonial-slider", {
  loop: false,

  pagination: {
    el: ".testimonial-swiper-pagination",
  },

  navigation: {
    nextEl: ".testimonial-swiper-button-next",
    prevEl: ".testimonial-swiper-button-prev",
  },
});
const swiper_services = new Swiper("#services-slider", {
  loop: false,

  pagination: {
    el: ".services-swiper-pagination",
  },

  navigation: {
    nextEl: ".services-swiper-button-next",
    prevEl: ".services-swiper-button-prev",
  },
});
const swiper_features = new Swiper("#features-slider", {
  loop: false,

  pagination: {
    el: ".features-swiper-pagination",
  },

  navigation: {
    nextEl: ".features-swiper-button-next",
    prevEl: ".features-swiper-button-prev",
  },
});
