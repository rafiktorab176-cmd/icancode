document.addEventListener("DOMContentLoaded", function () {
  // 1. التحكم في فتح وإغلاق القائمة الجانبية للموبايل
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

  // ==========================================
  // 2. نظام زيادة الإحصائيات والأرقام تلقائياً لكل زائر
  // ==========================================
  function getDynamicStats() {
    // القيم الأساسية الابتدائية
    let baseCustomers = 50000;
    let baseTechnicians = 120;

    // التحقق مما إذا كانت هذه هي الزيارة الأولى للمتصفح
    let savedCustomers = localStorage.getItem("elmutamad_customers");
    let savedTechnicians = localStorage.getItem("elmutamad_technicians");

    if (!savedCustomers || !savedTechnicians) {
      // إذا لم تكن مخزنة، يتم حفظ القلفت الأساسية
      localStorage.setItem("elmutamad_customers", baseCustomers);
      localStorage.setItem("elmutamad_technicians", baseTechnicians);
    } else {
      // في كل مرة يفتح فيها العميل الموقع، نزيد الأرقام بشكل عشوائي واقعي
      // زيادة عدد العملاء بين 3 إلى 12 عميل جديد مع كل فتحة موقع
      let randomCustomerAdd = Math.floor(Math.random() * 10) + 3;
      baseCustomers = parseInt(savedCustomers) + randomCustomerAdd;
      localStorage.setItem("elmutamad_customers", baseCustomers);

      // أحياناً نزيد فني جديد (بنسبة بسيطة)
      if (Math.random() > 0.7) {
        baseTechnicians = parseInt(savedTechnicians) + 1;
        localStorage.setItem("elmutamad_technicians", baseTechnicians);
      } else {
        baseTechnicians = parseInt(savedTechnicians);
      }
    }

    return {
      customers: baseCustomers,
      technicians: baseTechnicians,
      experience: 15, // ثابتة أو قابلة للزيادة السنوية
      rating: 4.9, // ثابت
    };
  }

  // تطبيق الأرقام الديناميكية على عناصر الـ HTML
  const statsData = getDynamicStats();

  const customerEl = document.querySelector('[data-stat="customers"]');
  const technicianEl = document.querySelector('[data-stat="technicians"]');

  if (customerEl) customerEl.setAttribute("data-target", statsData.customers);
  if (technicianEl)
    technicianEl.setAttribute("data-target", statsData.technicians);

  // ==========================================
  // 3. أنيميشن العد التفاعلي عند ظهور القسم
  // ==========================================
  const counters = document.querySelectorAll(".stat-number");
  let animated = false;

  function runCounters() {
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      const plus = counter.getAttribute("data-plus") || "";
      let count = 0;
      const speed = target / 40;

      const updateCount = () => {
        count += speed;
        if (count < target) {
          if (target % 1 !== 0) {
            counter.innerText = count.toFixed(1);
          } else {
            counter.innerText = Math.floor(count).toLocaleString();
          }
          setTimeout(updateCount, 25);
        } else {
          counter.innerText = target.toLocaleString() + plus;
        }
      };

      updateCount();
    });
  }

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animated) {
          runCounters();
          animated = true;
        }
      });
    },
    { threshold: 0.3 },
  );

  const statsSection = document.querySelector(".stats-grid");
  if (statsSection) {
    observer.observe(statsSection);
  }
});
// التحكم في ظهور واختفاء زر الصعود للأعلى والوظيفة
const scrollTopBtn = document.getElementById("scrollTopBtn");

if (scrollTopBtn) {
  // مراقبة التمرير في الصفحة
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      // يظهر الزر إذا نزلت أسفل الصفحة أكثر من 300 بكسل
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });

  // عند الضغط على الزر، يتم الصعود لأعلى الصفحة بسلاسة
  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
// تشغيل سلايدر آراء العملاء
document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("testimonialsTrack");
  const cards = track ? track.children : [];
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const dotsContainer = document.getElementById("sliderDots");

  if (!track || cards.length === 0) return;

  let currentIndex = 0;

  // تحديد عدد الكروت الظاهرة حسب حجم الشاشة
  function getCardsPerView() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  const totalSlides = Math.max(0, cards.length - getCardsPerView() + 1);

  // إنشاء نقاط التنقل (Dots)
  function createDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = "";
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("button");
      dot.classList.add("slider-dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        moveToSlide(i);
      });
      dotsContainer.appendChild(dot);
    }
  }

  function updateDots() {
    if (!dotsContainer) return;
    const dots = dotsContainer.children;
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.toggle("active", i === currentIndex);
    }
  }

  function moveToSlide(index) {
    if (index < 0) {
      currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    const cardWidth = cards[0].offsetWidth + 24; // عرض الكارت + الـ gap
    track.style.transform = `translateX(${currentIndex * cardWidth}px)`;
    updateDots();
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      moveToSlide(currentIndex + 1);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      moveToSlide(currentIndex - 1);
    });
  }

  // التبديل التلقائي كل 4 ثوانٍ
  let autoSlide = setInterval(() => {
    moveToSlide(currentIndex + 1);
  }, 4000);

  // إيقاف التبديل التلقائي عند وضع الماوس على السلايدر
  const sliderContainer = document.querySelector(
    ".testimonials-slider-container",
  );
  if (sliderContainer) {
    sliderContainer.addEventListener("mouseenter", () =>
      clearInterval(autoSlide),
    );
    sliderContainer.addEventListener("mouseleave", () => {
      autoSlide = setInterval(() => {
        moveToSlide(currentIndex + 1);
      }, 4000);
    });
  }

  window.addEventListener("resize", () => {
    createDots();
    moveToSlide(0);
  });

  createDots();
});
// تفعيل الأكورديون (الفتح والإغلاق) للأسئلة الشائعة
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");

    questionBtn.addEventListener("click", () => {
      // إغلاق باقي الأسئلة المفتوحة (اختياري، لجعل واحدة فقط مفتوحة في نفس الوقت)
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });

      // تبديل حالة الفتح والإغلاق للسؤال الحالي
      item.classList.toggle("active");
    });
  });
});
