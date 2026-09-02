document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".slider-track");
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".prev-btn");

  function getSlides() {
    return Array.from(track.querySelectorAll(".slide"));
  }

  nextBtn.addEventListener("click", () => {
    const slides = getSlides();
    slides.forEach((s) => s.classList.remove("active-slide", "side-slide"));
    track.appendChild(slides[0]);
    updateClasses();
  });

  prevBtn.addEventListener("click", () => {
    const slides = getSlides();
    slides.forEach((s) => s.classList.remove("active-slide", "side-slide"));
    track.insertBefore(slides[slides.length - 1], slides[0]);
    updateClasses();
  });

  function updateClasses() {
    const slides = getSlides();
    slides.forEach((slide, index) => {
      if (index === 1) {
        slide.className = "slide active-slide";
      } else {
        slide.className = "slide side-slide";
      }
    });
  }

  setInterval(() => {
    nextBtn.click();
  }, 3000);
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const icon = menuToggle.querySelector("i");
      if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
      } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }
    });
  }
});
document
  .getElementById("whatsappForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة

    // جلب البيانات المدخلة
    var name = document.getElementById("clientName").value;
    var phone = document.getElementById("clientPhone").value;
    var device = document.getElementById("deviceType").value;
    var address = document.getElementById("clientAddress").value;

    // رقم الواتساب الخاص بك (مضاف إليه كود الدولة 20 لمصر)
    var whatsappNumber = "201289966660";

    // تنسيق رسالة الواتساب بشكل احترافي ومرتب
    var message =
      "🔹 *طلب صيانة جديد من الموقع* 🔹\n\n" +
      "👤 *الاسم:* " +
      name +
      "\n" +
      "📞 *رقم الهاتف:* " +
      phone +
      "\n" +
      "🛠 *الجهاز:* " +
      device +
      "\n" +
      "📍 *العنوان:* " +
      address;

    // ترميز الرسالة لتتوافق مع الروابط
    var encodedMessage = encodeURIComponent(message);

    // فتح رابط الواتساب بالبيانات
    var whatsappURL =
      "https://wa.me/" + whatsappNumber + "?text=" + encodedMessage;
    window.open(whatsappURL, "_blank");
  });
