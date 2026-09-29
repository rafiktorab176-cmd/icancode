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

  const menuIconPath = menuBtn ? menuBtn.querySelector("path") : null;

  // دالة لإعادة تعيين شكل زر الهامبرجر للوضع الافتراضي (3 خطوط)
  const resetMenuIcon = () => {
    if (menuIconPath) {
      menuIconPath.setAttribute("d", "M4 6h16M4 12h16M4 18h16");
    }
  };

  // 2. فتح وإغلاق القائمة الرئيسية (الهامبرجر)
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle("active");

      // تبديل الأيقونة بين الهامبرجر (خطوط) وعلامة (X)
      if (menuIconPath) {
        if (mobileMenu.classList.contains("active")) {
          menuIconPath.setAttribute("d", "M6 18L18 6M6 6l12 12");
        } else {
          resetMenuIcon();
        }
      }

      if (!mobileMenu.classList.contains("active") && mobileDropdown) {
        mobileDropdown.classList.remove("active");
        if (dropdownIcon) dropdownIcon.classList.remove("rotate-180");
      }
    });
  }

  // 3. فتح وإغلاق قائمة (خدماتنا الفرعية)
  if (dropdownBtn && mobileDropdown) {
    dropdownBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      mobileDropdown.classList.toggle("active");

      if (dropdownIcon) {
        dropdownIcon.classList.toggle("rotate-180");
      }
    });
  }

  // 4. إغلاق القوائم عند الضغط في أي مكان خارج الـ Navbar
  document.addEventListener("click", (e) => {
    if (
      mobileMenu &&
      !mobileMenu.contains(e.target) &&
      !menuBtn.contains(e.target)
    ) {
      mobileMenu.classList.remove("active");
      if (mobileDropdown) mobileDropdown.classList.remove("active");
      if (dropdownIcon) dropdownIcon.classList.remove("rotate-180");
      resetMenuIcon();
    }
  });

  // 5. إغلاق القائمة تلقائياً عند الضغط على أي رابط داخلها
  if (mobileMenu) {
    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        if (mobileDropdown) mobileDropdown.classList.remove("active");
        if (dropdownIcon) dropdownIcon.classList.remove("rotate-180");
        resetMenuIcon();
      });
    });
  }

  // 6. إدارة التبويبات (Legal Tabs)
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

// 7. الحماية والمنع (Right-Click & DevTools Shortcuts)
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
