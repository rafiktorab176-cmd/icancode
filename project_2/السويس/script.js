document.addEventListener("DOMContentLoaded", () => {
  // --- العناصر الخاصة بـ Mobile Menu ---
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  // --- العناصر الخاصة بـ Mobile Dropdown ---
  const mobileDropdownBtn = document.getElementById("mobile-dropdown-btn");
  const mobileDropdown = document.getElementById("mobile-dropdown");
  const mobileDropdownIcon = document.getElementById("mobile-dropdown-icon");

  // 1. فتح وإغلاق قائمة الموبايل الرئيسية (Hamburger Menu)
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle("hidden");
    });
  }

  // 2. فتح وإغلاق القائمة الفرعية (Dropdown) داخل الموبايل
  if (mobileDropdownBtn && mobileDropdown) {
    mobileDropdownBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileDropdown.classList.toggle("hidden");

      // تدوير أيقونة السهم عند الفتح والإغلاق
      if (mobileDropdownIcon) {
        mobileDropdownIcon.style.transform = mobileDropdown.classList.contains(
          "hidden",
        )
          ? "rotate(0deg)"
          : "rotate(180deg)";
        mobileDropdownIcon.style.transition = "transform 0.3s ease";
      }
    });
  }

  // 3. إغلاق القوائم تلقائياً عند النقر في أي مكان خارجها
  document.addEventListener("click", (e) => {
    // إغلاق قائمة الموبايل
    if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.add("hidden");
      }
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
