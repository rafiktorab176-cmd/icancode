document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("mobile-menu");
  const navMenu = document.getElementById("navbar-menu");
  const dropdown = document.querySelector(".dropdown");
  const dropdownToggle = document.getElementById("dropdown-toggle");

  // 1. فتح وإغلاق قائمة الهمبرجر الرئيسية في الموبايل
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active-mobile");

      const icon = menuToggle.querySelector("i");
      if (icon) {
        if (navMenu.classList.contains("active-mobile")) {
          icon.classList.remove("fa-bars");
          icon.classList.add("fa-xmark");
        } else {
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars");
        }
      }
    });
  }

  // 2. تشغيل وإغلاق قائمة "خدماتنا" بالتناوب (Toggle) عبر الزر
  if (dropdown && dropdownToggle) {
    dropdownToggle.addEventListener("click", () => {
      dropdown.classList.toggle("open");
    });
  }

  // 3. إغلاق القوائم تلقائياً عند الضغط في أي مكان خارجها
  document.addEventListener("click", (e) => {
    if (window.innerWidth <= 992) {
      if (
        navMenu &&
        !navMenu.contains(e.target) &&
        menuToggle &&
        !menuToggle.contains(e.target)
      ) {
        navMenu.classList.remove("active-mobile");
        const icon = menuToggle.querySelector("i");
        if (icon) {
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars");
        }
      }
      if (dropdown && !dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
      }
    }
  });
});
