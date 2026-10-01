const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");
const servicesDropdown = document.getElementById("servicesDropdown");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// تفعيل القائمة المنسدلة بالضغط عليها في شاشات الموبايل
servicesDropdown.addEventListener("click", (e) => {
  if (window.innerWidth <= 992) {
    e.preventDefault();
    servicesDropdown.classList.toggle("active");
  }
});
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    const body = header.nextElementSibling;

    // تبديل حالة العنصر الحالي (فتح/غلق)
    item.classList.toggle("open");

    if (item.classList.contains("open")) {
      body.style.maxHeight = body.scrollHeight + "px";
    } else {
      body.style.maxHeight = null;
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("luxuryTrack");
  const cards = Array.from(track.children);
  const dotsContainer = document.getElementById("luxuryDots");

  let currentIndex = 0;

  function getVisibleCount() {
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 992) return 2;
    return 3;
  }

  function getMaxIndex() {
    return Math.max(0, cards.length - getVisibleCount());
  }

  function createDots() {
    dotsContainer.innerHTML = "";
    const totalDots = getMaxIndex() + 1;
    for (let i = 0; i < totalDots; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (i === currentIndex) dot.classList.add("active");
      dot.addEventListener("click", () => {
        currentIndex = i;
        updateSlider();
        resetTimer();
      });
      dotsContainer.dotsContainer = dot;
      dotsContainer.appendChild(dot);
    }
  }

  function updateSlider() {
    const maxIdx = getMaxIndex();
    if (currentIndex > maxIdx) {
      currentIndex = maxIdx;
    }

    const cardWidth = cards[0].getBoundingClientRect().width + 24; // عرض الكارت + الـ gap
    track.style.transform = `translateX(${currentIndex * cardWidth}px)`;

    const dots = dotsContainer.children;
    Array.from(dots).forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  // سلايدر تلقائي كل 5 ثوانٍ
  let slideTimer = setInterval(autoSlide, 5000);

  function autoSlide() {
    const maxIdx = getMaxIndex();
    if (currentIndex >= maxIdx) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    updateSlider();
  }

  function resetTimer() {
    clearInterval(slideTimer);
    slideTimer = setInterval(autoSlide, 5000);
  }

  window.addEventListener("resize", () => {
    createDots();
    updateSlider();
  });

  createDots();
});
