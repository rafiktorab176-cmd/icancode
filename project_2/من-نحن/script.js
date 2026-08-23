document.addEventListener("DOMContentLoaded", () => {
  // 1. تحديد عناصر القائمة والتنقيل
  const menuBtn = document.querySelector("#mobile-menu-btn, .hamburger-btn");
  const mobileMenu = document.querySelector("#mobile-menu, .mobile-menu");

  const dropdownBtn = document.querySelector(
    "#mobile-dropdown-btn, .mobile-dropdown-btn",
  );
  const mobileDropdown = document.querySelector(
    "#mobile-dropdown, .mobile-dropdown-menu",
  );
  const dropdownIcon = document.querySelector(
    "#mobile-dropdown-icon, .dropdown-icon, .mobile-dropdown-btn svg",
  );

  // 2. فتح وإغلاق القائمة الرئيسية (الهامبرجر)
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle("active");
      mobileMenu.classList.toggle("hidden");

      if (
        (mobileMenu.classList.contains("hidden") ||
          !mobileMenu.classList.contains("active")) &&
        mobileDropdown
      ) {
        mobileDropdown.classList.remove("active");
        mobileDropdown.classList.add("hidden");
        if (dropdownIcon) dropdownIcon.classList.remove("rotate-180");
      }
    });
  }

  // 3. فتح وإغلاق قائمة (خدماتنا)
  if (dropdownBtn && mobileDropdown) {
    dropdownBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      mobileDropdown.classList.toggle("active");
      mobileDropdown.classList.toggle("hidden");

      if (dropdownIcon) {
        dropdownIcon.classList.toggle("rotate-180");
      }
    });
  }

  // 4. إغلاق القوائم عند الضغط خارج الـ Navbar
  document.addEventListener("click", (e) => {
    if (
      mobileMenu &&
      !mobileMenu.contains(e.target) &&
      !menuBtn.contains(e.target)
    ) {
      mobileMenu.classList.remove("active");
      mobileMenu.classList.add("hidden");
      if (mobileDropdown) {
        mobileDropdown.classList.remove("active");
        mobileDropdown.classList.add("hidden");
      }
      if (dropdownIcon) dropdownIcon.classList.remove("rotate-180");
    }
  });

  // 5. التبديل بين ألسنة الشروط والسياسات (Legal Tabs)
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
});

// 6. الحماية والمنع (Right-Click & DevTools Shortcuts)
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
