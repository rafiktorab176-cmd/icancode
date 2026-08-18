document.addEventListener("DOMContentLoaded", () => {
  // 1. تحديد العناصر
  const menuBtn = document.querySelector("#mobile-menu-btn, .hamburger-btn");
  const mobileMenu = document.querySelector("#mobile-menu, .mobile-menu");

  const dropdownBtn = document.querySelector(
    "#mobile-dropdown-btn, .mobile-dropdown-btn",
  );
  const mobileDropdown = document.querySelector(
    "#mobile-dropdown, .mobile-dropdown-menu",
  );
  const dropdownIcon = document.querySelector(
    "#mobile-dropdown-icon, .dropdown-icon, .mobile-dropdown-btn svg",
  );

  // 2. فتح وإغلاق القائمة الرئيسية (الهامبرجر)
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle("active");

      // لو قفلنا الهامبرجر نقفل القائمة الفرعية معاها تلقائياً
      if (!mobileMenu.classList.contains("active") && mobileDropdown) {
        mobileDropdown.classList.remove("active");
        if (dropdownIcon) dropdownIcon.classList.remove("rotate-180");
      }
    });
  }

  // 3. فتح وإغلاق قائمة (خدماتنا)
  if (dropdownBtn && mobileDropdown) {
    dropdownBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      // تبديل حالة القائمة الفرعية
      mobileDropdown.classList.toggle("active");

      // تدوير أيقونة السهم
      if (dropdownIcon) {
        dropdownIcon.classList.toggle("rotate-180");
      }
    });
  }

  // 4. إغلاق القوائم عند الضغط في أي مكان خارج الـ Navbar
  document.addEventListener("click", (e) => {
    if (
      mobileMenu &&
      !mobileMenu.contains(e.target) &&
      !menuBtn.contains(e.target)
    ) {
      mobileMenu.classList.remove("active");
      if (mobileDropdown) mobileDropdown.classList.remove("active");
      if (dropdownIcon) dropdownIcon.classList.remove("rotate-180");
    }
  });
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
// Dynamic Schema Injection for JAC Maintenance Page
document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname;

  // يتم التفعيل إذا كان رابط الصفحة يحتوي على jac
  if (path.includes("jac")) {
    const jacSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": "https://hotline-19580.com/jac/#service",
          name: "المركز المعتمد لصيانة جاك في مصر",
          serviceType: "Appliance Repair Service",
          brand: {
            "@type": "Brand",
            name: "JAC",
            alternateName: "جاك",
          },
          provider: {
            "@type": "LocalBusiness",
            "@id": "https://hotline-19580.com/#organization",
            name: "المركز المعتمد لصيانة الأجهزة المنزلية",
            url: "https://hotline-19580.com/",
            telephone: ["19580", "17718", "15607"],
            image: "https://hotline-19580.com/images/og-image.jpg",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              addressCountry: "EG",
              addressLocality: "القاهرة",
              addressRegion: "جميع المحافظات",
            },
          },
          areaServed: [
            { "@type": "State", name: "القاهرة" },
            { "@type": "State", name: "الجيزة" },
            { "@type": "State", name: "الإسكندرية" },
            { "@type": "State", name: "البحيرة" },
            { "@type": "State", name: "الغربية" },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "خدمات صيانة أجهزة جاك",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "صيانة شاشات وميكروويف جاك بقطع غيار أصلية",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "إصلاح أعطال غسالات ومكانس وخلاطات جاك",
                },
              },
            ],
          },
        },
        {
          "@type": "WebPage",
          "@id": "https://hotline-19580.com/jac/#webpage",
          url: window.location.href,
          name: "المركز المعتمد لصيانة جاك | ارقام الخدمة 19580 - 17718 - 15607",
          inLanguage: "ar",
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(jacSchema);
    document.head.appendChild(script);
  }
});
