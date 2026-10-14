document.addEventListener("DOMContentLoaded", function () {
  // التحكم في فتح وإغلاق القائمة الجانبية للموبايل
  const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const overlay = document.getElementById("overlay");

  function openMenu(e) {
    e.stopPropagation();
    if (mobileDrawer && overlay) {
      mobileDrawer.classList.add("open");
      overlay.classList.add("active");
    }
  }

  function closeMenu() {
    if (mobileDrawer && overlay) {
      mobileDrawer.classList.remove("open");
      overlay.classList.remove("active");
    }
  }

  if (menuBtn) menuBtn.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  if (overlay) overlay.addEventListener("click", closeMenu);

  if (mobileDrawer) {
    mobileDrawer.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }

  // القوائم المنسدلة للموبايل
  const screensDropdownBtn = document.getElementById("screensDropdownBtn");
  const screensSubMenu = document.getElementById("screensSubMenu");
  const screensArrow = document.getElementById("screensArrow");

  if (screensDropdownBtn && screensSubMenu) {
    screensDropdownBtn.addEventListener("click", function () {
      screensSubMenu.classList.toggle("hidden");
      if (screensArrow) screensArrow.classList.toggle("rotate-180");
    });
  }

  const brandsDropdownBtn = document.getElementById("brandsDropdownBtn");
  const brandsSubMenu = document.getElementById("brandsSubMenu");
  const brandsArrow = document.getElementById("brandsArrow");

  if (brandsDropdownBtn && brandsSubMenu) {
    brandsDropdownBtn.addEventListener("click", function () {
      brandsSubMenu.classList.toggle("hidden");
      if (brandsArrow) brandsArrow.classList.toggle("rotate-180");
    });
  }
});
