// تفعيل قائمة الهامبرجر للموبايل
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// قفل القائمة تلقائياً لما تضغط علي أي لينك جوه الموبايل
document.querySelectorAll(".nav-links li a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});
