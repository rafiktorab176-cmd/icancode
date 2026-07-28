const hamburger = document.getElementById("hamburger");
const linksContainer = document.getElementById("links-container");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    linksContainer.classList.toggle("active");
});

// const slider = document.getElementById('testimonialSlider');
// const slides = slider.querySelectorAll('.testimonial-slide');
// let currentSlide = 0;
// let slideInterval;

// // دالة لتغيير الشريحة المعروضة
// function showSlide(n) {
//     slides[currentSlide].classList.remove('active');
//     currentSlide = (n + slides.length) % slides.length;
//     slides[currentSlide].classList.add('active');
// }

// // الانتقال للشريحة التالية
// function nextSlide() {
//     showSlide(currentSlide + 1);
// }

// // بدء التقليب التلقائي (كل 4 ثوانٍ)
// function startAutoSlide() {
//     slideInterval = setInterval(nextSlide, 4000);
// }

// // إيقاف التقليب التلقائي
// function stopAutoSlide() {
//     clearInterval(slideInterval);
// }

// // تشغيل التقليب التلقائي أول ما الصفحة تحمل
// startAutoSlide();

// // التقليب وإيقافه مع الماوس
// slider.addEventListener('mouseover', stopAutoSlide); // يوقف لما تقف بالماوس
// slider.addEventListener('mouseout', startAutoSlide);  // يرجع يقلب لما تبعد الماوس