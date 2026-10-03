const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");
const servicesDropdown = document.getElementById("servicesDropdown");

// تفعيل فتح وإغلاق القائمة الجانبية عبر زر الهمبرجر
if (hamburgerBtn && navMenu) {
  hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}

// تفعيل القائمة المنسدلة (خدماتنا) بالضغط عليها في شاشات الموبايل
if (servicesDropdown) {
  servicesDropdown.addEventListener("click", (e) => {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      servicesDropdown.classList.toggle("active");
    }
  });
}

// كود الأكورديون (Accordion) إن وجد بالصفحة
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    const body = header.nextElementSibling;

    item.classList.toggle("open");

    if (item.classList.contains("open")) {
      body.style.maxHeight = body.scrollHeight + "px";
    } else {
      body.style.maxHeight = null;
    }
  });
});
