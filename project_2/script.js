document.addEventListener("DOMContentLoaded", function () {
  var menuBtn = document.getElementById("mobile-menu-btn");
  var mobileMenu = document.getElementById("mobile-menu");
  var dropdownBtn = document.getElementById("mobile-dropdown-btn");
  var mobileDropdown = document.getElementById("mobile-dropdown");
  var dropdownIcon = document.getElementById("mobile-dropdown-icon");

  // 1. فتح وإغلاق قائمة الموبايل الرئيسية
  if (menuBtn && mobileMenu) {
    menuBtn.onclick = function (e) {
      e.stopPropagation();
      menuBtn.classList.toggle("active");
      mobileMenu.classList.toggle("active");
    };
  }

  // 2. فتح وإغلاق قائمة "خدماتنا" الفرعية
  if (dropdownBtn && mobileDropdown) {
    dropdownBtn.onclick = function (e) {
      e.stopPropagation();
      mobileDropdown.classList.toggle("active");
      if (dropdownIcon) {
        dropdownIcon.classList.toggle("rotate-180");
      }
    };
  }

  // 3. إغلاق القائمة عند الضغط في أي مكان خارجي
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
});
/**
 * دالة التبويبات (Legal Tabs)
 * @param {Event} evt - الحدث الخاص بالنقر
 * @param {string} tabId - معرف محتوى التبويب المطلوب تفعيله
 */
function switchLegalTab(evt, tabId) {
  if (!evt || !tabId) return;

  const currentBtn = evt.currentTarget;
  const container = currentBtn.closest(".legal-section");
  if (!container) return;

  // إلغاء تفعيل جميع الأزرار داخل الحاوية وتفعيل الزر الحالي
  const buttons = container.querySelectorAll(".legal-tab-btn");
  buttons.forEach((btn) => {
    btn.classList.remove("active");
    btn.setAttribute("aria-selected", "false");
  });

  currentBtn.classList.add("active");
  currentBtn.setAttribute("aria-selected", "true");

  // إخفاء جميع محتويات التبويبات وإظهار المحتوى المطلوب
  const contents = container.querySelectorAll(".legal-tab-content");
  contents.forEach((content) => {
    content.classList.remove("active");
    content.hidden = true;
  });

  const targetContent = container.querySelector("#" + tabId);
  if (targetContent) {
    targetContent.classList.add("active");
    targetContent.hidden = false;
  }
}
