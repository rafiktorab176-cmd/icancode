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
  const tabButtons = document.querySelectorAll(".legal-tab-btn");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", function (evt) {
      evt.preventDefault();
      const tabId = this.getAttribute("data-tab");
      const container = this.closest(".legal-section");

      if (!container || !tabId) return;

      // 1. إلغاء تفعيل جميع الأزرار
      const buttons = container.querySelectorAll(".legal-tab-btn");
      buttons.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });

      // 2. تفعيل الزر الحالي
      this.classList.add("active");
      this.setAttribute("aria-selected", "true");

      // 3. إخفاء جميع التبويبات
      const contents = container.querySelectorAll(".legal-tab-content");
      contents.forEach((content) => {
        content.classList.remove("active");
        content.style.display = "none";
      });

      // 4. إظهار التبويب المطلوب
      const targetContent = container.querySelector("#" + tabId);
      if (targetContent) {
        targetContent.classList.add("active");
        targetContent.style.display = "block";
      }
    });
  });
});
// Dynamic Schema Injection for Contact Us Page
document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname;

  // يتم التفعيل إذا كان رابط الصفحة يحتوي على contact أو contact-us
  if (path.includes("contact") || path.includes("contact-us")) {
    const contactSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ContactPage",
          "@id": "https://hotline-19580.com/contact-us/#webpage",
          url: window.location.href,
          name: "المركز المعتمد لصيانة الثلاجات والغسالات والديب فريزر | تواصل بنا | 19580 - 17718 - 15607",
          inLanguage: "ar",
          isPartOf: {
            "@type": "WebSite",
            "@id": "https://hotline-19580.com/#website",
            name: "المركز المعتمد لصيانة الأجهزة المنزلية",
            url: "https://hotline-19580.com/",
          },
        },
        {
          "@type": "LocalBusiness",
          "@id": "https://hotline-19580.com/#organization",
          name: "المركز المعتمد لصيانة الأجهزة المنزلية",
          url: "https://hotline-19580.com/",
          telephone: ["19580", "17718", "15607"],
          priceRange: "$$",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "19580",
            contactType: "customer service",
            areaServed: "EG",
            availableLanguage: ["Arabic"],
          },
          address: {
            "@type": "PostalAddress",
            addressCountry: "EG",
            addressLocality: "القاهرة",
            addressRegion: "جميع المحافظات",
          },
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(contactSchema);
    document.head.appendChild(script);
  }
});
// 1. منع فتح قائمة الزر الأيمن (Right-Click)
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// 2. منع اختصارات لوحة التحكم الخاصة بالنسخ والقص وأدوات المطورين
document.addEventListener("keydown", function (e) {
  // منع Ctrl+C, Ctrl+X, Ctrl+U (عرض المصدر), Ctrl+S (حفظ الصفحة)
  if (
    e.ctrlKey &&
    (e.key === "c" ||
      e.key === "C" ||
      e.key === "x" ||
      e.key === "X" ||
      e.key === "u" ||
      e.key === "U" ||
      e.key === "s" ||
      e.key === "S")
  ) {
    e.preventDefault();
  }
  // منع F12 و Ctrl+Shift+I (فتح أدوات المطورين Inspect)
  if (
    e.key === "F12" ||
    (e.ctrlKey &&
      e.shiftKey &&
      (e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j"))
  ) {
    e.preventDefault();
  }
});
