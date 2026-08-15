document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const dropdownBtn = document.getElementById("mobile-dropdown-btn");
  const mobileDropdown = document.getElementById("mobile-dropdown");
  const dropdownIcon = document.getElementById("mobile-dropdown-icon");

  // فتح وإغلاق قائمة الموبايل
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // فتح وإغلاق قائمة الخدمات في الموبايل
  if (dropdownBtn && mobileDropdown) {
    dropdownBtn.addEventListener("click", () => {
      mobileDropdown.classList.toggle("hidden");
      if (dropdownIcon) {
        dropdownIcon.classList.toggle("rotate-180");
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".hamburger-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const dropdownBtn = document.getElementById("mobile-dropdown-btn");
  const dropdownMenu = document.getElementById("mobile-dropdown");
  const dropdownIcon = document.getElementById("mobile-dropdown-icon");

  // فتح وإغلاق قائمة الموبايل الرئيسية
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", function () {
      menuBtn.classList.toggle("active");
      mobileMenu.classList.toggle("hidden");
    });
  }

  // فتح وإغلاق القائمة الفرعية داخل الموبايل
  if (dropdownBtn && dropdownMenu) {
    dropdownBtn.addEventListener("click", function () {
      dropdownMenu.classList.toggle("hidden");
      if (dropdownIcon) {
        dropdownIcon.classList.toggle("rotate-180");
      }
    });
  }
});

function switchLegalTab(evt, tabId) {
  const container = evt.currentTarget.closest(".legal-section");

  // Toggle active tab buttons
  const buttons = container.querySelectorAll(".legal-tab-btn");
  buttons.forEach((btn) => btn.classList.remove("active"));
  evt.currentTarget.classList.add("active");

  // Toggle tab content visibility
  const contents = container.querySelectorAll(".legal-tab-content");
  contents.forEach((content) => content.classList.remove("active"));
  container.querySelector("#" + tabId).classList.add("active");
}
document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".seo-container .legal-tab-btn");
  const tabContents = document.querySelectorAll(
    ".seo-container .legal-tab-content",
  );

  tabButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const targetTabId = e.currentTarget.getAttribute("data-tab");

      // Remove active class from all buttons
      tabButtons.forEach((btn) => btn.classList.remove("active"));

      // Hide all tab contents
      tabContents.forEach((content) => content.classList.remove("active"));

      // Activate current button and matching tab content
      e.currentTarget.classList.add("active");
      const targetContent = document.getElementById(targetTabId);
      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });
});
