const hamburger = document.getElementById("hamburger-nav");
const linksContainer = document.getElementById("links-container-nav");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  linksContainer.classList.toggle("active");
});
