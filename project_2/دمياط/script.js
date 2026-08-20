document.addEventListener("DOMContentLoaded", () => {
  // 1. تحديد العناصر
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

      // لو قفلنا الهامبرجر نقفل القائمة الفرعية معاها تلقائياً
      if (!mobileMenu.classList.contains("active") && mobileDropdown) {
        mobileDropdown.classList.remove("active");
        if (dropdownIcon) dropdownIcon.classList.remove("rotate-180");
      }
    });
  }

  // 3. فتح وإغلاق قائمة (خدماتنا)
  if (dropdownBtn && mobileDropdown) {
    dropdownBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      // تبديل حالة القائمة الفرعية
      mobileDropdown.classList.toggle("active");

      // تدوير أيقونة السهم
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
    }
  });
});
// 2. منع اختصارات لوحة التحكم الخاصة بالنسخ والقص وأدوات المطورين
document.addEventListener("keydown", function (e) {
  // منع Ctrl+C, Ctrl+X, Ctrl+U (عرض المصدر), Ctrl+S (حفظ الصفحة)
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
  // منع F12 و Ctrl+Shift+I (فتح أدوات المطورين Inspect)
  if (
    e.key === "F12" ||
    (e.ctrlKey &&
      e.shiftKey &&
      (e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j"))
  ) {
    e.preventDefault();
  }
});
