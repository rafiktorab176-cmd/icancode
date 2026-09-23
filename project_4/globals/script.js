// حل جذري ومضمون 100% لتشغيل الهامبرجر
window.addEventListener("DOMContentLoaded", () => {
  const hamburger =
    document.querySelector(".hamburger") ||
    document.getElementById("hamburger");
  const navLinks =
    document.querySelector(".nav-links") || document.getElementById("navLinks");

  if (!hamburger || !navLinks) {
    console.error(
      "عنصر الهامبرجر أو القائمة غير موجود في الصفحة تأكد من الـ HTML",
    );
    return;
  }

  // السماح بالضغط على الهامبرجر بوضوح
  hamburger.style.cursor = "pointer";
  hamburger.style.zIndex = "9999";

  hamburger.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    // تبديل الكلاسات
    this.classList.toggle("active");
    navLinks.classList.toggle("active");

    console.log("تم الضغط على الهامبرجر بنجاح!");
  });

  // إغلاق القائمة عند الضغط على أي لينكات جواها
  const links = navLinks.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  // إغلاق القائمة لو المستخدم ضغط في أي مكان تاني بره القائمة والهامبرجر
  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    }
  });
});

// تفعيل الأسئلة الشائعة (FAQ)
document.querySelectorAll(".faq-question-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const currentItem = button.parentElement;

    // إغلاق باقي الأسئلة المفتوحة وفتح السؤال الحالي فقط
    document.querySelectorAll(".faq-item").forEach((item) => {
      if (item !== currentItem) {
        item.classList.remove("active");
      }
    });

    // تبديل حالة الفتح والغلق للسؤال المضغوط
    currentItem.classList.toggle("active");
  });
});
function sendToWhatsApp(event) {
  event.preventDefault(); // منع إعادة تحميل الصفحة

  const phoneNumber = "201289966660";

  // سحب البيانات من الحقول
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // تنسيق رسالة واتساب
  const text =
    `*استفسار جديد من الموقع*%0A` +
    `----------------------------------%0A` +
    `*الاسم:* ${firstName} ${lastName}%0A` +
    `*البريد الإلكتروني:* ${email}%0A` +
    `*الموضوع:* ${subject}%0A` +
    `*الرسالة:* ${message}`;

  // فتح رابط واتساب
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;
  window.open(whatsappURL, "_blank");
}
function openPost(url) {
  // عند الضغط على الكارت، سينتقل لصفحة المقال المطلوبة
  window.location.href = url;
}
