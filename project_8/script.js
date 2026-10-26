document.addEventListener("DOMContentLoaded", () => {
  // 1. Current Year in Footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Mobile Menu Drawer Toggle (سحب من اليمين)
  const menuBtn = document.getElementById("menuBtn");
  const closeMenuBtn = document.getElementById("closeMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuOverlay = document.getElementById("menuOverlay");

  const openDrawer = () => {
    if (mobileMenu && menuOverlay && menuBtn) {
      mobileMenu.classList.add("active");
      menuOverlay.classList.add("active");
      menuBtn.classList.add("active");
      document.body.style.overflow = "hidden"; // منع التمرير أثناء فتح القائمة
    }
  };

  const closeDrawer = () => {
    if (mobileMenu && menuOverlay && menuBtn) {
      mobileMenu.classList.remove("active");
      menuOverlay.classList.remove("active");
      menuBtn.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  };

  if (menuBtn) menuBtn.addEventListener("click", openDrawer);
  if (closeMenuBtn) closeMenuBtn.addEventListener("click", closeDrawer);
  if (menuOverlay) menuOverlay.addEventListener("click", closeDrawer);

  // Close menu when clicking links
  if (mobileMenu) {
    const links = mobileMenu.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", closeDrawer);
    });
  }

  // 3. Forms Submission Handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(
      "تم استلام طلبك بنجاح! سيتم التواصل معك خلال دقائق من فريق الدعم الفني، أو يمكنك الاتصال مباشرة على الخط الساخن 19580.",
    );
    e.target.reset();
  };

  const heroForm = document.getElementById("heroForm");
  const mainBookingForm = document.getElementById("mainBookingForm");

  if (heroForm) heroForm.addEventListener("submit", handleFormSubmit);
  if (mainBookingForm)
    mainBookingForm.addEventListener("submit", handleFormSubmit);
});
// تفاعلية الأسئلة الشائعة (FAQ Accordion)
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.parentElement;
    const answer = item.querySelector(".faq-answer");

    // غلق باقي العناصر المفتوحة (اختياري)
    document.querySelectorAll(".faq-item").forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
        otherItem.querySelector(".faq-answer").style.maxHeight = null;
      }
    });

    // تبديل الحالة الحالية
    item.classList.toggle("active");
    if (item.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = null;
    }
  });
});
