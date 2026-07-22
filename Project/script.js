const hamburger = document.getElementById("hamburger");
const linksContainer = document.getElementById("links-container");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  linksContainer.classList.toggle("active");
});
