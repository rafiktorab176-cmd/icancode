document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.getElementById("navbar-menu");
  const dropdown = document.querySelector(".dropdown");
  const dropdownToggle = document.getElementById("dropdown-toggle");

  // 1. فتح وإغلاق قائمة الهمبرجر الرئيسية في الموبايل
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");

      const icon = menuToggle.querySelector("i");
      if (icon) {
        if (navMenu.classList.contains("active")) {
          icon.classList.remove("fa-bars");
          icon.classList.add("fa-xmark");
        } else {
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars");
        }
      }
    });
  }

  // 2. تشغيل وإغلاق القائمة المنسدلة للخدمات بالتناوب (Toggle) عند الضغط عليها في الموبايل
  if (dropdown && dropdownToggle) {
    dropdownToggle.addEventListener("click", (e) => {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        dropdown.classList.toggle("open");
      }
    });
  }

  // 3. إغلاق القوائم تلقائياً عند الضغط في أي مكان خارجها
  document.addEventListener("click", (e) => {
    if (window.innerWidth <= 992) {
      if (
        navMenu &&
        !navMenu.contains(e.target) &&
        menuToggle &&
        !menuToggle.contains(e.target)
      ) {
        navMenu.classList.remove("active");
        const icon = menuToggle.querySelector("i");
        if (icon) {
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars");
        }
      }
      if (dropdown && !dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
      }
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const hotlineFloatBtn = document.getElementById("hotlineFloatBtn");

  if (hotlineFloatBtn) {
    // بعد 5 ثواني من تحميل الصفحة، يظهر الكلمة لأول مرة
    setTimeout(() => {
      hotlineFloatBtn.classList.add("show-popup");
    }, 5000);

    // اختيارياً: لو حاببها تختفي بعد 4 ثواني وترجع تظهر تاني كل فترة
    setTimeout(() => {
      hotlineFloatBtn.classList.remove("show-popup");
    }, 9000);

    // تكرار ظهور النافذة كل 15 ثانية لجذب انتباه العميل
    setInterval(() => {
      hotlineFloatBtn.classList.add("show-popup");
      setTimeout(() => {
        hotlineFloatBtn.classList.remove("show-popup");
      }, 4000);
    }, 15000);
  }
});
// كود السلايدر الشامل (الهيرو سكشن)
let currentSlide = 0;
const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  if (!slides.length) return;

  slides.forEach((slide) => slide.classList.remove("active"));
  if (dots.length) {
    dots.forEach((dot) => dot.classList.remove("active"));
  }

  currentSlide = (index + slides.length) % slides.length;

  slides[currentSlide].classList.add("active");
  if (dots[dots.length ? currentSlide : 0]) {
    dots[currentSlide].classList.add("active");
  }
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

// التنقل التلقائي كل 5 ثواني
setInterval(() => {
  changeSlide(1);
}, 5000);
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".services-slider-container");
  const track = document.querySelector(".services-grid");
  const cards = document.querySelectorAll(".service-card");
  const nextBtn = document.querySelector(".next-service");
  const prevBtn = document.querySelector(".prev-service");

  if (track && cards.length && nextBtn && prevBtn) {
    let currentIndex = 0;
    let autoSlideInterval;

    function getVisibleCardsCount() {
      if (window.innerWidth <= 576) return 1;
      if (window.innerWidth <= 992) return 2;
      return 4;
    }

    function updateSliderPosition() {
      const cardWidth = cards[0].getBoundingClientRect().width + 20;
      track.style.transform = `translateX(${currentIndex * cardWidth}px)`;
    }

    function nextSlide() {
      const visibleCards = getVisibleCardsCount();
      const maxIndex = cards.length - visibleCards;

      if (currentIndex < maxIndex) {
        currentIndex++;
      } else {
        currentIndex = 0; // يرجع للبداية أوتوماتيك
      }
      updateSliderPosition();
    }

    function prevSlide() {
      const visibleCards = getVisibleCardsCount();
      const maxIndex = cards.length - visibleCards;

      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = maxIndex;
      }
      updateSliderPosition();
    }

    // تشغيل الحركة التلقائية (كل 3.5 ثانية)
    function startAutoSlide() {
      autoSlideInterval = setInterval(nextSlide, 3500);
    }

    function stopAutoSlide() {
      clearInterval(autoSlideInterval);
    }

    // ربط الأزرار
    nextBtn.addEventListener("click", () => {
      nextSlide();
      stopAutoSlide();
      startAutoSlide(); // إعادة تشغيل التايمر بعد الضغط
    });

    prevBtn.addEventListener("click", () => {
      prevSlide();
      stopAutoSlide();
      startAutoSlide();
    });

    // إيقاف الحركة التلقائية لما الماوس يكون فوق السلايدر عشان الزائر يعرف يقرا براحته
    if (container) {
      container.addEventListener("mouseenter", stopAutoSlide);
      container.addEventListener("mouseleave", startAutoSlide);
    }

    // بدء التشغيل التلقائي أول ما الصفحة تفتح
    startAutoSlide();
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("bookingModal");
  const openModalBtn = document.getElementById("openBookingModal");
  const closeModalBtn = document.getElementById("closeBookingModal");

  const steps = document.querySelectorAll(".wizard-step");
  const bullets = document.querySelectorAll(".step-bullet");
  const nextBtn = document.getElementById("nextStepBtn");
  const prevBtn = document.getElementById("prevStepBtn");

  let currentStep = 1;

  // تخزين الاختيارات
  let bookingData = {
    device: "",
    brand: "",
    name: "",
    phone: "",
    address: "",
  };

  if (modal && openModalBtn && closeModalBtn) {
    openModalBtn.addEventListener("click", () => modal.classList.add("active"));
    closeModalBtn.addEventListener("click", () =>
      modal.classList.remove("active"),
    );
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });
  }

  // اختيار الجهاز (خطوة 1)
  const deviceOptions = document.querySelectorAll(".device-option");
  deviceOptions.forEach((opt) => {
    opt.addEventListener("click", () => {
      deviceOptions.forEach((o) => o.classList.remove("active"));
      opt.classList.add("active");
      bookingData.device = opt.getAttribute("data-value");
    });
  });

  // اختيار الماركة (خطوة 2)
  const brandOptions = document.querySelectorAll(".brand-option");
  brandOptions.forEach((opt) => {
    opt.addEventListener("click", () => {
      brandOptions.forEach((o) => o.classList.remove("active"));
      opt.classList.add("active");
      bookingData.brand = opt.getAttribute("data-value");
    });
  });

  // زر التالي
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (currentStep === 1 && !bookingData.device) {
        alert("من فضلك اختر نوع الجهاز أولاً");
        return;
      }
      if (currentStep === 2 && !bookingData.brand) {
        alert("من فضلك اختر الماركة أولاً");
        return;
      }

      if (currentStep < 3) {
        currentStep++;
        updateWizardView();
      } else {
        // الخطوة الأخيرة (إرسال البيانات)
        const nameInput = document.querySelector(
          "#serviceBookingForm input:nth-of-type(1)",
        ).value;
        const phoneInput = document.querySelector(
          "#serviceBookingForm input:nth-of-type(2)",
        ).value;
        const addressInput = document.querySelector(
          "#serviceBookingForm input:nth-of-type(3)",
        ).value;

        if (!nameInput || !phoneInput || !addressInput) {
          alert("من فضلك أكمل بيانات التواصل");
          return;
        }

        alert("تم تسجيل طلبك بنجاح! سيتم التواصل معك في أقرب وقت.");
        modal.classList.remove("active");
      }
    });
  }

  // زر السابق
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentStep > 1) {
        currentStep--;
        updateWizardView();
      }
    });
  }

  // تحديث واجهة الخطوات والمؤشرات
  function updateWizardView() {
    steps.forEach((step) => {
      if (parseInt(step.getAttribute("data-step")) === currentStep) {
        step.classList.add("active");
      } else {
        step.classList.remove("active");
      }
    });

    bullets.forEach((bullet, index) => {
      if (index + 1 <= currentStep) {
        bullet.classList.add("active");
      } else {
        bullet.classList.remove("active");
      }
    });

    // إظهار وإخفاء زر السابق وتغيير نص زر التالي
    if (currentStep === 1) {
      prevBtn.style.display = "none";
      nextBtn.innerHTML = 'التالي <i class="fa-solid fa-arrow-left"></i>';
    } else if (currentStep === 2) {
      prevBtn.style.display = "inline-flex";
      nextBtn.innerHTML = 'التالي <i class="fa-solid fa-arrow-left"></i>';
    } else if (currentStep === 3) {
      prevBtn.style.display = "inline-flex";
      nextBtn.innerHTML = 'إرسال الطلب <i class="fa-solid fa-check"></i>';
    }
  }
});
const testimonialsSwiper = new Swiper(".testimonials-slider", {
  loop: true /* تكرار السلايد بشكل دائم */,
  speed: 600 /* سرعة الحركة والانتقال */,
  autoplay: {
    delay: 4000 /* الحركة التلقائية كل 4 ثواني */,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1 /* كارت واحد في الموبايل */,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2 /* كارتين في التابلت */,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3 /* 3 كارتات في شاشات الكمبيوتر */,
      spaceBetween: 30,
    },
  },
});
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const currentItem = button.parentElement;

    // إغلاق باقي الأسئلة (اختياري لو عايز سؤال واحد يفتح في نفس الوقت)
    document.querySelectorAll(".faq-item").forEach((item) => {
      if (item !== currentItem) {
        item.classList.remove("active");
      }
    });

    currentItem.classList.toggle("active");
  });
});
