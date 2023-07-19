const moreBtn = document.querySelector("#more");
const sidebar = document.querySelector(".sidebar");

moreBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show");
  moreBtn.classList.toggle("change");
  console.log("clicked");
});

function img(anything) {
  document.querySelector(".slide").src = anything;
}

ScrollReveal().reveal(".one", { delay: 200 });
ScrollReveal().reveal(".two", { delay: 800 });
ScrollReveal().reveal(".three", { delay: 1600 });
