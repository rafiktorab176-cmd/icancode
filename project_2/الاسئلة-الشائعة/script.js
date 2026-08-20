document.addEventListener("DOMContentLoaded", function () {
  // 1. القائمة الجانبية للموبايل (Mobile Menu)
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const dropdownBtn = document.getElementById("mobile-dropdown-btn");
  const mobileDropdown = document.getElementById("mobile-dropdown");
  const dropdownIcon = document.getElementById("mobile-dropdown-icon");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle("active");
    });
  }

  if (dropdownBtn && mobileDropdown) {
    dropdownBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileDropdown.classList.toggle("active");
      if (dropdownIcon) {
        dropdownIcon.classList.toggle("rotate-180");
      }
    });
  }

  // 2. القائمة الأكورديون للأسئلة الشائعة (FAQ Accordion)
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

  // 3. التبديل بين ألسنة الأسئلة (FAQ Tabs)
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

  // 4. التبديل بين ألسنة الشروط والسياسات (Legal Tabs)
  const tabButtons = document.querySelectorAll(".legal-tab-btn");
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", function (evt) {
      evt.preventDefault();
      const tabId = this.getAttribute("data-tab");
      const container = this.closest(".legal-section");

      if (!container || !tabId) return;

      container.querySelectorAll(".legal-tab-btn").forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });

      this.classList.add("active");
      this.setAttribute("aria-selected", "true");

      container.querySelectorAll(".legal-tab-content").forEach((content) => {
        content.classList.remove("active");
        content.style.display = "none";
      });

      const targetContent = container.querySelector("#" + tabId);
      if (targetContent) {
        targetContent.classList.add("active");
        targetContent.style.display = "block";
      }
    });
  });

  // 5. إضافة بيانات Schema تلقائياً للـ FAQ
  const path = window.location.pathname;
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
