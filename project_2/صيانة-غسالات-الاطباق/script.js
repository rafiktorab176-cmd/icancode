document.addEventListener("DOMContentLoaded", () => {
  // 1. عناصر القائمة الرئيسية والفرعية للموبايل
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const dropdownBtn = document.getElementById("mobile-dropdown-btn");
  const mobileDropdown = document.getElementById("mobile-dropdown");
  const dropdownIcon = document.getElementById("mobile-dropdown-icon");

  // فتح وإغلاق قائمة الموبايل
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
    });
  }

  // فتح وإغلاق القائمة الفرعية
  if (dropdownBtn && mobileDropdown) {
    dropdownBtn.addEventListener("click", () => {
      mobileDropdown.classList.toggle("active");
      if (dropdownIcon) {
        dropdownIcon.classList.toggle("rotate-180");
      }
    });
  }

  // 2. إدارة التبويبات (Legal Tabs)
  const tabButtons = document.querySelectorAll(".legal-tab-btn");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", function (evt) {
      evt.preventDefault();
      const tabId = this.getAttribute("data-tab");
      const container = this.closest(".legal-section");

      if (!container || !tabId) return;

      // إلغاء تفعيل جميع الأزرار
      const buttons = container.querySelectorAll(".legal-tab-btn");
      buttons.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });

      // تفعيل الزر الحالي
      this.classList.add("active");
      this.setAttribute("aria-selected", "true");

      // إخفاء جميع التبويبات
      const contents = container.querySelectorAll(".legal-tab-content");
      contents.forEach((content) => {
        content.classList.remove("active");
        content.style.display = "none";
      });

      // إظهار التبويب المطلوب
      const targetContent = container.querySelector("#" + tabId);
      if (targetContent) {
        targetContent.classList.add("active");
        targetContent.style.display = "block";
      }
    });
  });
});

// 3. الحماية والمنع (Right-Click & DevTools Shortcuts)
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.addEventListener("keydown", function (e) {
  // منع Ctrl+C, Ctrl+X, Ctrl+U, Ctrl+S
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
  // منع F12 و Ctrl+Shift+I / J
  if (
    e.key === "F12" ||
    (e.ctrlKey &&
      e.shiftKey &&
      (e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j"))
  ) {
    e.preventDefault();
  }
});
