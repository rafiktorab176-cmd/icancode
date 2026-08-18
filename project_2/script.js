document.addEventListener("DOMContentLoaded", function () {
  var menuBtn = document.getElementById("mobile-menu-btn");
  var mobileMenu = document.getElementById("mobile-menu");
  var dropdownBtn = document.getElementById("mobile-dropdown-btn");
  var mobileDropdown = document.getElementById("mobile-dropdown");
  var dropdownIcon = document.getElementById("mobile-dropdown-icon");

  // 1. فتح وإغلاق قائمة الموبايل الرئيسية
  if (menuBtn && mobileMenu) {
    menuBtn.onclick = function (e) {
      e.stopPropagation();
      menuBtn.classList.toggle("active");
      mobileMenu.classList.toggle("active");
    };
  }

  // 2. فتح وإغلاق قائمة "خدماتنا" الفرعية
  if (dropdownBtn && mobileDropdown) {
    dropdownBtn.onclick = function (e) {
      e.stopPropagation();
      mobileDropdown.classList.toggle("active");
      if (dropdownIcon) {
        dropdownIcon.classList.toggle("rotate-180");
      }
    };
  }

  // 3. إغلاق القائمة عند الضغط في أي مكان خارجي
  document.onclick = function (e) {
    if (
      mobileMenu &&
      !mobileMenu.contains(e.target) &&
      menuBtn &&
      !menuBtn.contains(e.target)
    ) {
      mobileMenu.classList.remove("active");
      menuBtn.classList.remove("active");
      if (mobileDropdown) mobileDropdown.classList.remove("active");
      if (dropdownIcon) dropdownIcon.classList.remove("rotate-180");
    }
  };
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
// Dynamic Schema Markup Injection for Homepage
document.addEventListener("DOMContentLoaded", function () {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://hotline-19580.com/#organization",
        name: "المركز المعتمد لصيانة الثلاجات الغسالات الديب فريزر غسالات الأطباق في مصر",
        url: "https://hotline-19580.com/",
        image: "https://hotline-19580.com/images/og-image.jpg",
        telephone: ["19580", "17718", "15607"],
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressCountry: "EG",
          addressLocality: "القاهرة",
          addressRegion: "جميع المحافظات",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 30.0444,
          longitude: 31.2357,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        areaServed: [
          { "@type": "State", name: "القاهرة" },
          { "@type": "State", name: "الجيزة" },
          { "@type": "State", name: "الإسكندرية" },
          { "@type": "State", name: "البحيرة" },
          { "@type": "State", name: "الغربية" },
          { "@type": "State", name: "الدقهلية" },
          { "@type": "State", name: "الشرقية" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://hotline-19580.com/#website",
        url: "https://hotline-19580.com/",
        name: "المركز المعتمد لصيانة الأجهزة المنزلية",
        inLanguage: "ar",
      },
      {
        "@type": "OfferCatalog",
        "@id": "https://hotline-19580.com/#services",
        name: "خدمات صيانة الأجهزة المنزلية",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "صيانة ثلاجات",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "صيانة غسالات ملابس",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "صيانة ديب فريزر",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "صيانة غسالات أطباق",
            },
          },
        ],
      },
    ],
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify(schemaData);
  document.head.appendChild(script);
});
