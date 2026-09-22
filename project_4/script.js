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
document.addEventListener("DOMContentLoaded", function () {
  // 1. أسكيما النشاط التجاري (LocalBusiness)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "مؤسسة المعتمد جروب لصيانة الأجهزة المنزلية",
    alternateName: "المعتمد جروب للصيانة",
    url: "https://almoatamed-group.com",
    logo: "https://almoatamed-group.com/images/logo.png",
    image: "https://almoatamed-group.com/images/store-front.jpg",
    description:
      "مؤسسة المعتمد جروب لصيانة الأجهزة المنزلية في مصر، نقدم خدمات صيانة فورية ومنزلية لجميع الماركات العالمية والمحلية مع ضمان معتمد.",
    currenciesAccepted: "EGP",
    paymentAccepted: "Cash, Credit Card",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "شارع الخدمة الرئيسي",
      addressLocality: "القاهرة",
      addressRegion: "محافظة القاهرة",
      postalCode: "12345",
      addressCountry: "EG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.0444,
      longitude: 31.2357,
    },
    telephone: "+201000000000",
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
      opens: "09:00",
      closes: "22:00",
    },
    areaServed: {
      "@type": "Country",
      name: "Egypt",
    },
    sameAs: [
      "https://www.facebook.com/your-page",
      "https://www.instagram.com/your-page",
    ],
  };

  // 2. أسكيما الخدمات (ItemList)
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "صيانة الغسالات",
          description:
            "خدمة صيانة وتصليح جميع أنواع الغسالات الأوتوماتيك والفوق أوتوماتيك بالمنزل.",
          provider: {
            "@type": "LocalBusiness",
            name: "مؤسسة المعتمد جروب لصيانة الأجهزة المنزلية",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "صيانة الثلاجات",
          description: "تصليح وصيانة الثلاجات والديب فريزر بقطع غيار أصلية.",
          provider: {
            "@type": "LocalBusiness",
            name: "مؤسسة المعتمد جروب لصيانة الأجهزة المنزلية",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "صيانة البوتاجازات والسخانات",
          description:
            "فحص وصيانة البوتاجازات، الأفران، والسخانات الكهربائية والغاز.",
          provider: {
            "@type": "LocalBusiness",
            name: "مؤسسة المعتمد جروب لصيانة الأجهزة المنزلية",
          },
        },
      },
    ],
  };

  // دالة حقن الأسكيما في الـ Head ديناميكياً
  function injectSchema(schemaObject) {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemaObject);
    document.head.appendChild(script);
  }

  // تنفيذ الحقن للنوعين
  injectSchema(localBusinessSchema);
  injectSchema(servicesSchema);
});
