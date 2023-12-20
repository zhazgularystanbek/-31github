const burger = document.querySelector(".burger-menu"),
  line1 = document.querySelector(".line1"),
  line2 = document.querySelector(".line2"),
  line3 = document.querySelector(".line3"),
  menu = document.querySelector(".menu");

// let bur = false;
// burger.addEventListener("click", () => {
//   bur = !bur;
//   line1.style.transform = bur ? "rotate(45deg)" : "";
//   line1.style.top = bur ? "10px" : "";
//   line2.style.opacity = bur ? "0" : "";
//   line3.style.transform = bur ? "rotate(-45deg)" : "";
//   line3.style.top = bur ? "-10px" : "";
//   menu.style.display = bur ? "block" : "none";
// });
burger.addEventListener("click", () => {
  menu.classList.toggle("show");
  line1.classList.toggle("linetr1");
  line2.classList.toggle("linetr2");
  line3.classList.toggle("linetr3");
});
