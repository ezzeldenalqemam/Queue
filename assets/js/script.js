function navigatePage() {
  const selectElement = document.getElementById("pageSelect");
  const selectedPage = selectElement.value;

  if (selectedPage) {
    window.location.href = selectedPage;
  }
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
const openChat = document.getElementById("open-chat-img");
const closeChat = document.getElementById("close-chat-img");
const closeChatIcon = document.getElementById("close-chat-message");
const removeChatMessage = document.getElementById("remove-chat-message");

closeChat.addEventListener("click", closeChatHandler);
closeChatIcon.addEventListener("click", closeChatHandler);

openChat.onclick = function () {
  document.querySelector(".chat-box .start-message").classList.add("d-none");
  document
    .querySelector(".chat-box .chat-container")
    .classList.remove("d-none");
  closeChat.classList.remove("d-none");
  openChat.classList.add("d-none");
};
removeChatMessage.onclick = function () {
  document.querySelector(".chat-box .start-message").classList.add("d-none");
};

function closeChatHandler() {
  document.querySelector(".chat-box .chat-container").classList.add("d-none");
  closeChat.classList.add("d-none");
  openChat.classList.remove("d-none");
}
