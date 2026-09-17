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
