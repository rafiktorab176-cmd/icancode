document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const dropdownBtn = document.getElementById("mobile-dropdown-btn");
  const mobileDropdown = document.getElementById("mobile-dropdown");
  const dropdownIcon = document.getElementById("mobile-dropdown-icon");

  // فتح وإغلاق قائمة الموبايل
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("active"); // تم التعديل من hidden إلى active
    });
  }

  // فتح وإغلاق قائمة الخدمات في الموبايل
  if (dropdownBtn && mobileDropdown) {
    dropdownBtn.addEventListener("click", () => {
      mobileDropdown.classList.toggle("active"); // تم التعديل من hidden إلى active
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
// Dynamic Schema Injection for Screens / TV Repair Page
document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname;

  // يتم التفعيل إذا كان رابط الصفحة يحتوي على screens أو tv أو screens-repair
  if (path.includes("screens") || path.includes("tv")) {
    const screensSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": "https://hotline-19580.com/screens-repair/#service",
          name: "المركز المعتمد لصيانة الشاشات والتلفزيونات بمصر",
          serviceType: "TV and Screen Repair Service",
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
            name: "خدمات صيانة أعطال الشاشات",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "إصلاح وتغيير اللدات وبنل الشاشات (LED / OLED / Smart)",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "صيانة كارتات الماين والباور للشاشات",
                },
              },
            ],
          },
        },
        {
          "@type": "WebPage",
          "@id": "https://hotline-19580.com/screens-repair/#webpage",
          url: window.location.href,
          name: "المركز المعتمد لصيانة الثلاجات والغسالات والديب فريزر | الشاشات | 19580 - 17718 - 15607",
          inLanguage: "ar",
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(screensSchema);
    document.head.appendChild(script);
  }
});
