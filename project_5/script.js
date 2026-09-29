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
