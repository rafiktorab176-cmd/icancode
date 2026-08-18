document.addEventListener("DOMContentLoaded", function () {
  // 1. Accordion Toggle (فتح وإغلاق الأسئلة الشائعة)
  const faqCards = document.querySelectorAll(".faq-card");

  faqCards.forEach((card) => {
    const btn = card.querySelector(".faq-header-btn");
    if (btn) {
      btn.addEventListener("click", () => {
        const isOpen = card.classList.contains("open");
        const currentGroup = card.closest(".faq-group");

        if (currentGroup) {
          currentGroup
            .querySelectorAll(".faq-card")
            .forEach((c) => c.classList.remove("open"));
        }

        if (!isOpen) {
          card.classList.add("open");
        }
      });
    }
  });

  // 2. Tabs Switcher (التبديل بين أقسام الأسئلة)
  const tabBtns = document.querySelectorAll(".tab-btn");
  const faqGroups = document.querySelectorAll(".faq-group");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const targetTab = btn.getAttribute("data-tab");

      faqGroups.forEach((group) => {
        group.classList.remove("active");
        if (group.id === targetTab) {
          group.classList.add("active");
        }
      });
    });
  });

  // 3. Mobile Navigation Menu (قائمة الموبايل)
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const dropdownBtn = document.getElementById("mobile-dropdown-btn");
  const mobileDropdown = document.getElementById("mobile-dropdown");
  const dropdownIcon = document.getElementById("mobile-dropdown-icon");

  // فتح وإغلاق قائمة الموبايل الرئيسية
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // فتح وإغلاق قائمة الخدمات الفرعية داخل الموبايل
  if (dropdownBtn && mobileDropdown) {
    dropdownBtn.addEventListener("click", () => {
      mobileDropdown.classList.toggle("hidden");
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
// Dynamic Schema Injection for FAQ Page
document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname;

  // يتم التفعيل إذا كان رابط الصفحة يحتوي على faq أو questions
  if (path.includes("faq") || path.includes("questions")) {
    const faqSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "@id": "https://hotline-19580.com/faq/#faqpage",
          mainEntity: [
            {
              "@type": "Question",
              name: "ما هي الخطوط الساخنة المعتمدة لصيانة الأجهزة المنزلية؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "يمكنك التواصل المباشر لحجز مواعيد الصيانة الفورية عبر الأرقام المعتمدة: 19580 أو 17718 أو 15607 على مدار 24 ساعة.",
              },
            },
            {
              "@type": "Question",
              name: "هل يتم إصلاح الأعطال في المنزل؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "نعم، يتم تقديم خدمات الصيانة والإصلاح الفوري بالمنزل لجميع الأجهزة (ثلاجات، غسالات، ديب فريزر، شاشات) دون الحاجة لنقل الجهاز إلا في الحالات الحرجة.",
              },
            },
            {
              "@type": "Question",
              name: "هل قطع الغيار المستخدمة أصلية ويكون عليها ضمان؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "جميع قطع الغيار المستخدمة أصلية 100% مع توفير شهادة ضمان معتمدة على الصيانة وقطع الغيار المستبدلة.",
              },
            },
            {
              "@type": "Question",
              name: "ما هي المحافظات التي تغطيها خدمة الصيانة؟",
              acceptedAnswer: {
                "@type": "Answer",
                text: "نغطي جميع المحافظات بما فيها القاهرة، الجيزة، الإسكندرية، البحيرة، الغربية، الدقهلية، والشرقية.",
              },
            },
          ],
        },
        {
          "@type": "WebPage",
          "@id": "https://hotline-19580.com/faq/#webpage",
          url: window.location.href,
          name: "المركز المعتمد لصيانة الثلاجات والغسالات والديب فريزر | الاسئلة الشائعة | 19580 - 17718 - 15607",
          inLanguage: "ar",
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);
  }
});
