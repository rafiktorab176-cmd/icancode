document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const dropdownBtn = document.getElementById("mobile-dropdown-btn");
  const mobileDropdown = document.getElementById("mobile-dropdown");
  const dropdownIcon = document.getElementById("mobile-dropdown-icon");

  // فتح وإغلاق قائمة الموبايل بمرونة
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
    });
  }

  // فتح وإغلاق القائمة الفرعية بمرونة
  if (dropdownBtn && mobileDropdown) {
    dropdownBtn.addEventListener("click", () => {
      mobileDropdown.classList.toggle("active");
      if (dropdownIcon) {
        dropdownIcon.classList.toggle("rotate-180");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const actionBtns = document.querySelectorAll(".action-btn");
  const closeBtns = document.querySelectorAll(".modal-close");
  const modals = document.querySelectorAll(".tech-modal");

  // فتح النافذة المحددة
  actionBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const targetModal = document.getElementById(targetId);
      if (targetModal) {
        targetModal.classList.add("active");
        document.body.style.overflow = "hidden"; // منع التمرير الخلفي
      }
    });
  });

  // إغلاق عند الضغط على زر الإغلاق
  closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".tech-modal");
      if (modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    });
  });

  // إغلاق عند الضغط في أي مكان خارج النافذة
  modals.forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    });
  });
});
