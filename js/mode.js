
let body = document.querySelector("body");
let DarkBtn = document.querySelector(".dark__mode");
let LightMode = document.querySelector(".light__mode");

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  DarkBtn.classList.add("hidden");
  LightMode.classList.remove("hidden");
}

DarkBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  LightMode.classList.toggle("hidden");
  DarkBtn.classList.toggle("hidden");
  localStorage.setItem("theme", "dark");
});

LightMode.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  LightMode.classList.toggle("hidden");
  DarkBtn.classList.toggle("hidden");
  localStorage.setItem("theme", "light");
});
