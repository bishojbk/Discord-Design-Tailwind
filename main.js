const toggleDark = document.querySelector(".toggle-dark");
const bgImg = document.querySelector(".big-image");
const smImg = document.querySelector(".small-image");

toggleDark.addEventListener("click", (e) => {
  e.preventDefault();
  document.documentElement.classList.toggle("dark");

  bgImg.classList.toggle("invisible");
  smImg.classList.toggle("opacity");
  toggleDark.classList.toggle("show");
});
