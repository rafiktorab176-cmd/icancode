document.addEventListener("DOMContentLoaded", function () {
  // 1. Accordion Toggle (فتح وإغلاق الأسئلة الشائعة)
  const faqCards = document.querySelectorAll(".faq-card");

  faqCards.forEach((card) => {
    const btn = card.querySelector(".faq-header-btn");
    if (btn) {
      btn.addEventListener("click", () => {
        const isOpen = card.classList.contains("open");
        const currentGroup = card.closest(".faq-group");

        if (currentGroup) {
          currentGroup
            .querySelectorAll(".faq-card")
            .forEach((c) => c.classList.remove("open"));
        }

        if (!isOpen) {
          card.classList.add("open");
        }
      });
    }
  });

  // 2. Tabs Switcher (التبديل بين أقسام الأسئلة)
  const tabBtns = document.querySelectorAll(".tab-btn");
  const faqGroups = document.querySelectorAll(".faq-group");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const targetTab = btn.getAttribute("data-tab");

      faqGroups.forEach((group) => {
        group.classList.remove("active");
        if (group.id === targetTab) {
          group.classList.add("active");
        }
      });
    });
  });

  // 3. Mobile Navigation Menu (قائمة الموبايل)
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const dropdownBtn = document.getElementById("mobile-dropdown-btn");
  const mobileDropdown = document.getElementById("mobile-dropdown");
  const dropdownIcon = document.getElementById("mobile-dropdown-icon");

  // فتح وإغلاق قائمة الموبايل الرئيسية
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // فتح وإغلاق قائمة الخدمات الفرعية داخل الموبايل
  if (dropdownBtn && mobileDropdown) {
    dropdownBtn.addEventListener("click", () => {
      mobileDropdown.classList.toggle("hidden");
      if (dropdownIcon) {
        dropdownIcon.classList.toggle("rotate-180");
      }
    });
  }
});
