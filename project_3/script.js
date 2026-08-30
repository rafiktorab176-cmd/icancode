document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".slider-track");
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".prev-btn");

  function getSlides() {
    return Array.from(track.querySelectorAll(".slide"));
  }

  nextBtn.addEventListener("click", () => {
    const slides = getSlides();
    slides.forEach((s) => s.classList.remove("active-slide", "side-slide"));
    track.appendChild(slides[0]);
    updateClasses();
  });

  prevBtn.addEventListener("click", () => {
    const slides = getSlides();
    slides.forEach((s) => s.classList.remove("active-slide", "side-slide"));
    track.insertBefore(slides[slides.length - 1], slides[0]);
    updateClasses();
  });

  function updateClasses() {
    const slides = getSlides();
    slides.forEach((slide, index) => {
      if (index === 1) {
        slide.className = "slide active-slide";
      } else {
        slide.className = "slide side-slide";
      }
    });
  }

  setInterval(() => {
    nextBtn.click();
  }, 3000);
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const icon = menuToggle.querySelector("i");
      if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
      } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }
    });
  }
});
