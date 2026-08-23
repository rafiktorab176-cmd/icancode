document.addEventListener("DOMContentLoaded", function () {
  // 1. إدارة قائمة الموبايل والـ Dropdown
  var menuBtn = document.getElementById("mobile-menu-btn");
  var mobileMenu = document.getElementById("mobile-menu");
  var dropdownBtn = document.getElementById("mobile-dropdown-btn");
  var mobileDropdown = document.getElementById("mobile-dropdown");
  var dropdownIcon = document.getElementById("mobile-dropdown-icon");

  if (menuBtn && mobileMenu) {
    menuBtn.onclick = function (e) {
      e.stopPropagation();
      menuBtn.classList.toggle("active");
      mobileMenu.classList.toggle("active");
    };
  }

  if (dropdownBtn && mobileDropdown) {
    dropdownBtn.onclick = function (e) {
      e.stopPropagation();
      mobileDropdown.classList.toggle("active");
      if (dropdownIcon) {
        dropdownIcon.classList.toggle("rotate-180");
      }
    };
  }

  // إغلاق القائمة عند الضغط في أي مكان خارجي
  document.onclick = function (e) {
    if (
      mobileMenu &&
      !mobileMenu.contains(e.target) &&
      menuBtn &&
      !menuBtn.contains(e.target)
    ) {
      mobileMenu.classList.remove("active");
      menuBtn.classList.remove("active");
      if (mobileDropdown) mobileDropdown.classList.remove("active");
      if (dropdownIcon) dropdownIcon.classList.remove("rotate-180");
    }
  };

  // 2. التبديل بين ألسنة الشروط والسياسات (Legal Tabs)
  const tabButtons = document.querySelectorAll(".legal-tab-btn");
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", function (evt) {
      evt.preventDefault();
      const tabId = this.getAttribute("data-tab");
      const container = this.closest(".legal-section");

      if (!container || !tabId) return;

      const buttons = container.querySelectorAll(".legal-tab-btn");
      buttons.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });

      this.classList.add("active");
      this.setAttribute("aria-selected", "true");

      const contents = container.querySelectorAll(".legal-tab-content");
      contents.forEach((content) => {
        content.classList.remove("active");
        content.style.display = "none";
      });

      const targetContent = container.querySelector("#" + tabId);
      if (targetContent) {
        targetContent.classList.add("active");
        targetContent.style.display = "block";
      }
    });
  });

  // 3. حماية المحتوى لمنع النسخ والـ Right-Click وأدوات المطورين
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

  document.addEventListener("keydown", function (e) {
    if (
      e.ctrlKey &&
      (e.key === "c" ||
        e.key === "C" ||
        e.key === "x" ||
        e.key === "X" ||
        e.key === "u" ||
        e.key === "U" ||
        e.key === "s" ||
        e.key === "S")
    ) {
      e.preventDefault();
    }
    if (
      e.key === "F12" ||
      (e.ctrlKey &&
        e.shiftKey &&
        (e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j"))
    ) {
      e.preventDefault();
    }
  });
});
