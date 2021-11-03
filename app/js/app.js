// MOBILE TOGGLE
document.querySelector(".mobile-toggle").addEventListener("click", () => {
  document.querySelector(".nav").classList.toggle("active");
});
// HEADER SCROLL
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("shrink", window.scrollY > 0);
});
// SLIDER HORIZONAL
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  speed: 500,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  paginations: {
    320: {
      slidePerView: 1,
      slidePerView: 20,
    },
    600: {
      slidePerView: 3,
    },
  },
});

//
const heroSection = document.querySelector(".hero");

heroSection.addEventListener("mousemove", (e) => {
  heroSection.querySelectorAll(".btn").forEach((btn) => {
    const speed = btn.getAttribute("data-speed");
    const percent = 300;
    const x = (window.innerWidth - e.pageX * speed) / percent;
    const y = (window.innerHeight - e.pageY * speed) / percent;
    btn.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});

// //VARIABLES FILTERS
let menuBtn = document.querySelector(".menu__filter").children;
let itemBtn = document.querySelector(".filter__item").children;
// funtion filters

for (let i = 0; i < menuBtn.length; i++) {
  menuBtn[i].addEventListener("click", function () {
    for (let j = 0; j < menuBtn.length; j++) {
      menuBtn[j].classList.remove("current");
    }
    this.classList.add("current");
    let targetData = this.getAttribute("data-target");
    for (let k = 0; k < itemBtn.length; k++) {
      itemBtn[k].classList.remove("active");
      itemBtn[k].classList.add("hidden");
      if (
        itemBtn[k].getAttribute("data-item") == targetData ||
        targetData == "all"
      ) {
        itemBtn[k].classList.remove("hidden");
        itemBtn[k].classList.add("active");
      }
    }
  });
}
