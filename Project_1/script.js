let currentLang = "ar";

// دالة التبديل بين العربي والإنجليزي
function toggleLanguage() {
  // تبديل اللغة الحالية
  currentLang = currentLang === "ar" ? "en" : "ar";

  // 1. تحديث جذر الـ HTML (بأمان)
  const htmlRoot =
    document.getElementById("html-root") || document.documentElement;
  htmlRoot.setAttribute("lang", currentLang);
  htmlRoot.setAttribute("dir", currentLang === "ar" ? "rtl" : "ltr");

  // 2. تحديث الـ Navbar (لو العنصر موجود)
  const navContainer = document.getElementById("nav-container");
  if (navContainer) {
    navContainer.style.flexDirection =
      currentLang === "ar" ? "row-reverse" : "row";
  }

  // 3. تحديث الـ Banner (لو العنصر موجود)
  const bannerBox = document.getElementById("hero");
  const bannerGradient = document.getElementById("banner-gradient");
  if (bannerBox) {
    bannerBox.style.textAlign = currentLang === "ar" ? "right" : "left";
  }
  if (bannerGradient) {
    bannerGradient.style.background =
      currentLang === "ar"
        ? "linear-gradient(to left, rgba(3, 7, 18, 0.9), rgba(15, 23, 42, 0.7), transparent)"
        : "linear-gradient(to right, rgba(3, 7, 18, 0.9), rgba(15, 23, 42, 0.7), transparent)";
  }

  // 4. تحديث نص زر اللغة (لو العنصر موجود)
  const langBtnText = document.getElementById("lang-btn-text");
  if (langBtnText) {
    langBtnText.innerText = currentLang === "ar" ? "English 🌐" : "عربي 🌐";
  }

  // 5. تحديث نصوص العناصر ذات attribute data-ar / data-en (المحافظات، الماركات، المدونة، وغيرها)
  document.querySelectorAll("[data-ar]").forEach((el) => {
    const text = el.getAttribute(`data-${currentLang}`);
    if (text) {
      el.innerHTML = text;
    }
  });
}

// تحديث الـ Placeholders
document.querySelectorAll("[data-ar-placeholder]").forEach((input) => {
  const placeholderText = input.getAttribute(`data-${currentLang}-placeholder`);
  if (placeholderText) input.setAttribute("placeholder", placeholderText);
});

// معالجة إرسال نموذج الحجز وإرساله مباشرة للواتساب
function handleBooking(event) {
  event.preventDefault();

  const name = document.getElementById("client-name").value;
  const phone = document.getElementById("client-phone").value;
  const appliance = document.getElementById("appliance-type").value;
  const address = document.getElementById("client-address").value;
  const description = document.getElementById("issue-description").value;

  const whatsappNumber = "201289966660";
  const message = `طلب حجز صيانة جديد:%0A- الاسم: ${name}%0A- الهاتف: ${phone}%0A- الجهاز: ${appliance}%0A- العنوان: ${address}%0A- التفاصيل: ${description || "لا يوجد"}`;

  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");

  alert(
    currentLang === "ar"
      ? "تم استلام طلبك بنجاح! جاري تحويلك للواتساب لتأكيد الموعد."
      : "Booking request received! Redirecting to WhatsApp for confirmation.",
  );
}

// الأحداث بعد تحميل الصفحة
document.addEventListener("DOMContentLoaded", function () {
  // 1. فتح وإغلاق قائمة الموبايل
  const hamburger = document.getElementById("hamburger-nav");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("open");
      navLinks.classList.toggle("active");
    });

    // إغلاق قائمة الموبايل عند الضغط على أي رابط
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("open");
        navLinks.classList.remove("active");
      });
    });
  }

  // 2. تفعيل الأسئلة الشائعة (FAQ Accordion)
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const faqItem = question.parentElement;
      faqItem.classList.toggle("active");
    });
  });

  // 3. تحديث رابط النافبار النشط (.active) أثناء التمرير
  const sections = document.querySelectorAll("section[id], footer[id]");
  const navItems = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 150) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href") === `#${current}`) {
        item.classList.add("active");
      }
    });
  });
});
// قاعدة البيانات الشاملة والموسعة لمقالات المدونة (25 ماركة)
const blogArticlesData = {
  kiriazi: {
    content: `
      <h2 class="article-full-title">دليل صيانة كريازي الشامل (Kiriazi Repair Guide)</h2>
      <p class="article-body-p">تعتبر أجهزة كريازي من الأجهزة الاعتمادية جدًا في السوق المصري، وتتطلب صيانة دقيقة عند ظهور أي أعطال.</p>
      <h3 class="article-section-title">🧺 1. غسالات ملابس كريازي:</h3>
      <p class="article-body-p"><strong>الأعطال:</strong> اهتزاز شديد، عدم تصريف المياه، أو توقف الحلة عن الدوران.</p>
      <ul class="article-list">
        <li><strong>الحل:</strong> تغيير رومان البلي والمساعدين، تنظيف فلتر طلمبة الطرد، وفحص كاباستور الموتور.</li>
      </ul>
      <h3 class="article-section-title">🍽️ 2. غسالات أطباق كريازي:</h3>
      <ul class="article-list">
        <li><strong>الحل:</strong> تنظيف الرشاشات العلوية والسفلية، فحص هيتر التسخين (Heater)، وتسليك مخرج الصرف.</li>
      </ul>
      <h3 class="article-section-title">❄️ 3. ثلاجات كريازي:</h3>
      <ul class="article-list">
        <li><strong>الحل:</strong> إصلاح انسداد مجرى الدرين، تغيير تايمر وسخان النوفروست عند تراكم الثلج في الفريزر.</li>
      </ul>
      <h3 class="article-section-title">🧊 4. ديب فريزر كريازي:</h3>
      <ul class="article-list">
        <li><strong>الحل:</strong> فحص تسريب فريون R134a، معالجة تلف جوان الباب، واستبدال الثرموديسك.</li>
      </ul>
    `,
  },
  lg: {
    content: `
      <h2 class="article-full-title">دليل صيانة ال جي الانفرتر (LG Repair Guide)</h2>
      <h3 class="article-section-title">🧺 1. غسالات ملابس LG (Direct Drive):</h3>
      <ul class="article-list">
        <li><strong>رموز الأعطال:</strong> OE (انسداد الصرف)، UE (عدم اتزان الغسيل)، LE (حمل زائد على الموتور/عطل Hall Sensor).</li>
      </ul>
      <h3 class="article-section-title">🍽️ 2. غسالات أطباق LG TrueSteam:</h3>
      <ul class="article-list">
        <li><strong>الحل:</strong> صيانة صمام مدخل المياه ومعالجة تسريبات البخار والجلب المطاطية.</li>
      </ul>
      <h3 class="article-section-title">❄️ 3. ثلاجات LG الانفرتر:</h3>
      <ul class="article-list">
        <li><strong>الحل:</strong> فحص مروحة الفريزر (Er IF)، ومعايرة كارتة الانفرتر وحساسات الحرارة.</li>
      </ul>
      <h3 class="article-section-title">🧊 4. ديب فريزر LG:</h3>
      <ul class="article-list">
        <li><strong>الحل:</strong> إعادة ضبط وظيفة Express Freeze واختبار سنسور درجة الحرارة الرقمي.</li>
      </ul>
    `,
  },
  samsung: {
    content: `
      <h2 class="article-full-title">دليل صيانة سامسونج الذكية (Samsung Guide)</h2>
      <h3 class="article-section-title">🧺 1. غسالات ملابس Samsung (EcoBubble):</h3>
      <ul class="article-list">
        <li><strong>الأكواد:</strong> 4E (مشكلة سحب المياه)، 5E (انسداد الصرف)، 8E (عطل حساس الاهتزاز).</li>
      </ul>
      <h3 class="article-section-title">🍽️ 2. غسالات أطباق Samsung:</h3>
      <ul class="article-list">
        <li><strong>الحل:</strong> معالجة كود OC (طفح المياه) وتنظيف حساس المنسوب.</li>
      </ul>
      <h3 class="article-section-title">❄️ 3. ثلاجات Samsung (Twin Cooling):</h3>
      <ul class="article-list">
        <li><strong>الحل:</strong> تغيير دامبر التوزيع الإلكتروني (Damper Valve) وسخان النوفروست.</li>
      </ul>
      <h3 class="article-section-title">🧊 4. ديب فريزر Samsung:</h3>
      <ul class="article-list">
        <li><strong>الحل:</strong> برمجيات لوحة التحكم واختبار كارتة الموتور الانفرتر.</li>
      </ul>
    `,
  },
  zanussi: {
    content: `
      <h2 class="article-full-title">دليل صيانة زانوسي وايديال زانوسي (Zanussi Guide)</h2>
      <h3 class="article-section-title">🧺 1. غسالات ملابس Zanussi:</h3>
      <ul class="article-list">
        <li><strong>الحل:</strong> استبدال مساعدين الحلة، تنظيف/تغيير شربات الموتور، وصيانة كارتة التشغيل.</li>
      </ul>
      <h3 class="article-section-title">🍽️ 2. غسالات أطباق Zanussi:</h3>
      <ul class="article-list">
        <li><strong>الحل:</strong> تنظيف طلمبة التصريف وفحص نظام منع الحريق وتدفق المياه AquaStop.</li>
      </ul>
      <h3 class="article-section-title">❄️ 3. ثلاجات Zanussi:</h3>
      <ul class="article-list">
        <li><strong>الحل:</strong> ضبط الثرموستات الميكانيكي ومعالجة ضعف الشحنة.</li>
      </ul>
      <h3 class="article-section-title">🧊 4. ديب فريزر Zanussi:</h3>
      <ul class="article-list">
        <li><strong>الحل:</strong> تغيير مروحة التوزيع وإصلاح انسداد الفلتر والمواسير.</li>
      </ul>
    `,
  },
  hitachi: {
    content: `
      <h2 class="article-full-title">دليل صيانة هيتاشي (Hitachi Guide)</h2>
      <h3 class="article-section-title">🧺 1. غسالات ملابس Hitachi:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> صيانة جيربوكس الدوران ونظام الشطف التلقائي.</li></ul>
      <h3 class="article-section-title">🍽️ 2. غسالات أطباق Hitachi:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> صيانة مضخة الضغط العالي وتسليك الفلاتر.</li></ul>
      <h3 class="article-section-title">❄️ 3. ثلاجات Hitachi:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> إصلاح نظام Dual Fan Cooling وصانع الثلج Auto Ice Maker.</li></ul>
      <h3 class="article-section-title">🧊 4. ديب فريزر Hitachi:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> معالجة سدد الكابيلاري وتنظيف المكثف الخارجي.</li></ul>
    `,
  },
  universal: {
    content: `
      <h2 class="article-full-title">دليل صيانة يونيفرسال (Universal Guide)</h2>
      <h3 class="article-section-title">🧺 1. غسالات ملابس Universal:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> ضبط مفتاح الاتزان (Safety Switch) وتغيير سير الموتور.</li></ul>
      <h3 class="article-section-title">🍽️ 2. غسالات أطباق Universal:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> تنظيف صمام السحب واختبار طلمبة الطرد.</li></ul>
      <h3 class="article-section-title">❄️ 3. ثلاجات Universal:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> استبدال قواعد الكمبروسر وتنظيف جلب المروحة.</li></ul>
      <h3 class="article-section-title">🧊 4. ديب فريزر Universal:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> إعادة شحن الفريون واستبدال الثرموستات الميكانيكي.</li></ul>
    `,
  },
  ariston: {
    content: `
      <h2 class="article-full-title">دليل صيانة اريستون (Ariston Guide)</h2>
      <h3 class="article-section-title">🧺 1. غسالات ملابس Ariston:</h3>
      <ul class="article-list"><li><strong>الأكواد:</strong> F05/F11 (مشكلة بطلمبة التصريف أو الكارتة البرمجية).</li></ul>
      <h3 class="article-section-title">🍽️ 2. غسالات أطباق Ariston:</h3>
      <ul class="article-list"><li><strong>الأكواد:</strong> A01/AL01 (تسريب مياه بالقاعدة وسويتش العوامة).</li></ul>
      <h3 class="article-section-title">❄️ 3. ثلاجات Ariston:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> شحن فريون R600a وضبط برمجيات اللوحة الذكية.</li></ul>
      <h3 class="article-section-title">🧊 4. ديب فريزر Ariston:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> تغيير حساس الحرارة الرقمي (NTC Sensor).</li></ul>
    `,
  },
  hoover: {
    content: `
      <h2 class="article-full-title">دليل صيانة هوفر (Hoover Guide)</h2>
      <h3 class="article-section-title">🧺 1. غسالات ملابس Hoover:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> فحص نظام One Touch/Wi-Fi وتغيير طقم رومان البلي وقفل الباب.</li></ul>
      <h3 class="article-section-title">🍽️ 2. غسالات أطباق Hoover:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> تسليك الرشاشات المزدوجة واختبار هيتر التسخين.</li></ul>
      <h3 class="article-section-title">❄️ 3. ثلاجات Hoover:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> ضبط التبريد الذكي وصيانة مروحة الكابينة.</li></ul>
      <h3 class="article-section-title">🧊 4. ديب فريزر Hoover:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> تغيير ثرموستات الديب فريزر وإعادة إحكام جوان الباب.</li></ul>
    `,
  },
  electrostar: {
    content: `
      <h2 class="article-full-title">دليل صيانة الكتروستار (Electrostar Guide)</h2>
      <h3 class="article-section-title">🧺 1. غسالات ملابس Electrostar:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> تغيير كاباستور الموتور وسويتش الاتزان.</li></ul>
      <h3 class="article-section-title">🍽️ 2. غسالات أطباق Electrostar:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> تسليك فلاتر القاع واختبار صمام الدخول.</li></ul>
      <h3 class="article-section-title">❄️ 3. ثلاجات Electrostar:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> شحن الفريون ومعالجة تكوين الثلج بالكابينة.</li></ul>
      <h3 class="article-section-title">🧊 4. ديب فريزر Electrostar:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> تغيير الثرموستات وتصليح لمبة الألارم الحمراء.</li></ul>
    `,
  },
  alaska: {
    content: `
      <h2 class="article-full-title">دليل صيانة ألاسكا (Alaska Guide)</h2>
      <h3 class="article-section-title">🧺 1. غسالات ملابس Alaska:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> تغيير طلمبة الطرد وسير المحرك.</li></ul>
      <h3 class="article-section-title">🍽️ 2. غسالات أطباق Alaska:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> تنظيف مجاري الصرف وتغيير مفتاح التشغيل.</li></ul>
      <h3 class="article-section-title">❄️ 3. ثلاجات Alaska:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> تنظيف شبكة المكثف الخلفية وتغيير الثرموستات.</li></ul>
      <h3 class="article-section-title">🧊 4. ديب فريزر Alaska (الأفقي والرأسي):</h3>
      <ul class="article-list"><li><strong>الحل:</strong> تغيير مفتاح السوبر والتأكد من كفاءة الكمبروسر.</li></ul>
    `,
  },
  sharp: {
    content: `
      <h2 class="article-full-title">دليل صيانة شارب (Sharp Guide)</h2>
      <h3 class="article-section-title">🧺 1. غسالات ملابس Sharp:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> صيانة كارتة التحكم وتغيير المساعدين عند الاهتزاز.</li></ul>
      <h3 class="article-section-title">🍽️ 2. غسالات أطباق Sharp:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> إصلاح كود F5 وتنظيف مضخة التدوير.</li></ul>
      <h3 class="article-section-title">❄️ 3. ثلاجات Sharp (Plasmacluster):</h3>
      <ul class="article-list"><li><strong>الحل:</strong> صيانة وحدة الأيونات وتسليك فتحات النوفروست.</li></ul>
      <h3 class="article-section-title">🧊 4. ديب فريزر Sharp:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> تغيير مروحة الفريزر النوفروست وحساس التذويب.</li></ul>
    `,
  },
  tornado: {
    content: `
      <h2 class="article-full-title">دليل صيانة تورنيدو (Tornado Guide)</h2>
      <h3 class="article-section-title">🧺 1. غسالات ملابس Tornado:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> فحص قفل الباب الإلكتروني (E01) وتغيير الطلمبة.</li></ul>
      <h3 class="article-section-title">🍽️ 2. غسالات أطباق Tornado:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> ضبط منسوب المياه واختبار هيتر التسخين.</li></ul>
      <h3 class="article-section-title">❄️ 3. ثلاجات Tornado:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> تغيير تايمر النوفروست وثرموديسك الفصل.</li></ul>
      <h3 class="article-section-title">🧊 4. ديب فريزر Tornado:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> معالجة انسداد مخرج المياه وتغيير جوان الباب.</li></ul>
    `,
  },
  whirlpool: {
    content: `
      <h2 class="article-full-title">دليل صيانة ويرلبول (Whirlpool Guide)</h2>
      <h3 class="article-section-title">🧺 1. غسالات ملابس Whirlpool:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> فحص تقنية 6th Sense وتغيير طقم البلي والمساعدين.</li></ul>
      <h3 class="article-section-title">🍽️ 2. غسالات أطباق Whirlpool:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> صيانة رشاشات PowerClean واختبار طلمبة الضغط.</li></ul>
      <h3 class="article-section-title">❄️ 3. ثلاجات Whirlpool:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> إصلاح كارتة الدامبر واختبار سخان الفريزر.</li></ul>
      <h3 class="article-section-title">🧊 4. ديب فريزر Whirlpool:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> شحن الفريون الأصلي وتغيير الثرموستات الرقمي.</li></ul>
    `,
  },
  toshiba: {
    content: `
      <h2 class="article-full-title">دليل صيانة توشيبا (Toshiba Guide)</h2>
      <h3 class="article-section-title">🧺 1. غسالات ملابس Toshiba (فوق أوتوماتيك والأوتوماتيك):</h3>
      <ul class="article-list"><li><strong>الحل:</strong> إصلاح كود E2/E3 (سويتش الباب/الاتزان) وتغيير الجيربوكس.</li></ul>
      <h3 class="article-section-title">🍽️ 2. غسالات أطباق Toshiba:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> اختبار عنصر التسخين وتغيير طلمبة سحب المياه.</li></ul>
      <h3 class="article-section-title">❄️ 3. ثلاجات Toshiba (2 و3 باب):</h3>
      <ul class="article-list"><li><strong>الحل:</strong> تغيير مجموعات النوفروست (تايمر + سخان ألومنيوم + ثرموديسك 15).</li></ul>
      <h3 class="article-section-title">🧊 4. ديب فريزر Toshiba:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> تسليك فتحات توزيع الهواء وتغيير حساس التذويب.</li></ul>
    `,
  },
  whitewhale: {
    content: `
      <h2 class="article-full-title">دليل صيانة وايت ويل (White Whale Guide)</h2>
      <h3 class="article-section-title">🧺 1. غسالات ملابس White Whale:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> تنظيف درج المسحوق وصيانة صمام المياه المزدوج.</li></ul>
      <h3 class="article-section-title">🍽️ 2. غسالات أطباق White Whale:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> صيانة كارتة البرامج الرئيسية وتغيير مكثف الموتور.</li></ul>
      <h3 class="article-section-title">❄️ 3. ثلاجات White Whale:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> تغيير الثرموديسك المزدوج وسخان أرضية الفريزر.</li></ul>
      <h3 class="article-section-title">🧊 4. ديب فريزر White Whale:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> استبدال الجوان المطاطي للباب وضبط المفصلات.</li></ul>
    `,
  },
  whitepoint: {
    content: `
      <h2 class="article-full-title">دليل صيانة وايت بوينت العبد (White Point Guide)</h2>
      <h3 class="article-section-title">🧺 1. غسالات ملابس White Point:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> إصلاح كود E01/E02 وفحص القفل الإلكتروني والصمام.</li></ul>
      <h3 class="article-section-title">🍽️ 2. غسالات أطباق White Point:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> تغيير ثرموستات التجفيف وضبط خزان الملمع.</li></ul>
      <h3 class="article-section-title">❄️ 3. ثلاجات White Point:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> تنظيف المكثف الجانبي وتنظيم تهوية الثلاجة.</li></ul>
      <h3 class="article-section-title">🧊 4. ديب فريزر White Point:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> صيانة دائرة التذويب وتغيير حساس النوفروست البرمجي.</li></ul>
    `,
  },
  beko: {
    content: `
      <h2 class="article-full-title">دليل صيانة بيكو (Beko Guide)</h2>
      <h3 class="article-section-title">🧺 1. غسالات ملابس Beko:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> إصلاح كود E08/E11 وفحص محرك ProSmart Inverter.</li></ul>
      <h3 class="article-section-title">🍽️ 2. غسالات أطباق Beko:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> معالجة البقع البيضاء بضبط صمام تنشيط عسر المياه.</li></ul>
      <h3 class="article-section-title">❄️ 3. ثلاجات Beko (NeoFrost):</h3>
      <ul class="article-list"><li><strong>الحل:</strong> صيانة مراوح التبريد المنفصلة وتغيير حساسات الكابينة.</li></ul>
      <h3 class="article-section-title">🧊 4. ديب فريزر Beko:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> شحن فريون الفحص واختبار كمبروسر الانفرتر.</li></ul>
    `,
  },
  whitewestinghouse: {
    content: `
      <h2 class="article-full-title">دليل صيانة وايت وستنجهاوس (White-Westinghouse Guide)</h2>
      <h3 class="article-section-title">🧺 1. غسالات ملابس White-Westinghouse:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> تغيير مساعدين الحلة الثقيلة واختبار مفتاح التوازن.</li></ul>
      <h3 class="article-section-title">🍽️ 2. غسالات أطباق White-Westinghouse:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> تنظيف طلمبة الضغط العالي وصيانة رشاشات التدوير.</li></ul>
      <h3 class="article-section-title">❄️ 3. ثلاجات White-Westinghouse:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> صيانة دامبر توزيع الهواء الإلكتروني وضبط الفريون.</li></ul>
      <h3 class="article-section-title">🧊 4. ديب فريزر White-Westinghouse:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> تغيير الثرموديسك وتصليح تسريب المواسير الداخلية.</li></ul>
    `,
  },
  daewoo: {
    content: `
      <h2 class="article-full-title">دليل صيانة دايو (Daewoo Guide)</h2>
      <h3 class="article-section-title">🧺 1. غسالات ملابس Daewoo:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> فحص كود LE/E9 وتغيير حساس الموتور أو طلمبة الصرف.</li></ul>
      <h3 class="article-section-title">🍽️ 2. غسالات أطباق Daewoo:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> تنظيف الفلاتر واختبار صمام دخول المياه.</li></ul>
      <h3 class="article-section-title">❄️ 3. ثلاجات Daewoo:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> صيانة مروحة الفريزر النوفروست وتغيير كارتة التحكم.</li></ul>
      <h3 class="article-section-title">🧊 4. ديب فريزر Daewoo:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> إعادة ضبط التبريد وشحن الفريون الأصلي.</li></ul>
    `,
  },
  fresh: {
    content: `
      <h2 class="article-full-title">دليل صيانة فريش (Fresh Guide)</h2>
      <h3 class="article-section-title">🧺 1. غسالات ملابس Fresh:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> تغيير جيربوكس الغسالة الفوق أوتوماتيك وسير الموتور.</li></ul>
      <h3 class="article-section-title">🍽️ 2. غسالات أطباق Fresh:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> تسليك الرشاشات وتغيير طلمبة الطرد.</li></ul>
      <h3 class="article-section-title">❄️ 3. ثلاجات Fresh:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> معالجة انسداد مجرى المياه وتغيير هيتر النوفروست.</li></ul>
      <h3 class="article-section-title">🧊 4. ديب فريزر Fresh:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> تغيير الثرموستات وثرموديسك التذويب عند تراكم الثلج.</li></ul>
    `,
  },
  unionaire: {
    content: `
      <h2 class="article-full-title">دليل صيانة يونيون اير (Unionaire Guide)</h2>
      <h3 class="article-section-title">🧺 1. غسالات ملابس Unionaire:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> صيانة كارتة الشاشة اللمسية وتغيير سويتش الباب.</li></ul>
      <h3 class="article-section-title">🍽️ 2. غسالات أطباق Unionaire:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> تسليك فلاتر الصرف وإعادة ضبط برنامج الغسيل.</li></ul>
      <h3 class="article-section-title">❄️ 3. ثلاجات Unionaire:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> معالجة تسريب الفريون وتغيير مروحة الكابينة.</li></ul>
      <h3 class="article-section-title">🧊 4. ديب فريزر Unionaire:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> صيانة اللوحة الرقمية وتغيير حساس الحرارة.</li></ul>
    `,
  },
  bosch: {
    content: `
      <h2 class="article-full-title">دليل صيانة بوش (Bosch Guide)</h2>
      <h3 class="article-section-title">🧺 1. غسالات ملابس Bosch:</h3>
      <ul class="article-list"><li><strong>الأكواد:</strong> E18 (عطل الصرف)، E16/E17 (مشكلة قفل الباب أو السحب).</li></ul>
      <h3 class="article-section-title">🍽️ 2. غسالات أطباق Bosch:</h3>
      <ul class="article-list"><li><strong>الأكواد:</strong> E15 (تسريب مياه في القاعدة)، E09 (عطل هيتر التسخين).</li></ul>
      <h3 class="article-section-title">❄️ 3. ثلاجات Bosch:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> صيانة نظام VitaFresh واختبار حساسات درجات الحرارة.</li></ul>
      <h3 class="article-section-title">🧊 4. ديب فريزر Bosch:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> صيانة دائرة التجميد السريع ومروحة الهواء النوفروست.</li></ul>
    `,
  },
  midea: {
    content: `
      <h2 class="article-full-title">دليل صيانة ميديا (Midea Guide)</h2>
      <h3 class="article-section-title">🧺 1. غسالات ملابس Midea:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> إصلاح أعطال كارتة التحكم وتغيير طلمبة التصريف.</li></ul>
      <h3 class="article-section-title">🍽️ 2. غسالات أطباق Midea:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> تنظيف فلاتر القاع واختبار صمام سحب المياه.</li></ul>
      <h3 class="article-section-title">❄️ 3. ثلاجات Midea:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> صيانة نظام التبريد المزدوج وتغيير التايمر.</li></ul>
      <h3 class="article-section-title">🧊 4. ديب فريزر Midea:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> فحص الشحنة واختبار كمبروسر الانفرتر.</li></ul>
    `,
  },
  indesit: {
    content: `
      <h2 class="article-full-title">دليل صيانة انديست (Indesit Guide)</h2>
      <h3 class="article-section-title">🧺 1. غسالات ملابس Indesit:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> إصلاح أكواد F01/F05 وتغيير طلمبة الطرد وشربات الموتور.</li></ul>
      <h3 class="article-section-title">🍽️ 2. غسالات أطباق Indesit:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> صيانة سويتش العوامة وتسليك خرطوم الصرف.</li></ul>
      <h3 class="article-section-title">❄️ 3. ثلاجات Indesit:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> تغيير الثرموستات وشحن فريون R600a.</li></ul>
      <h3 class="article-section-title">🧊 4. ديب فريزر Indesit:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> صيانة تايمر التذويب وإحكام إغلاق الجوان.</li></ul>
    `,
  },
  hisense: {
    content: `
      <h2 class="article-full-title">دليل صيانة هايسنس (Hisense Guide)</h2>
      <h3 class="article-section-title">🧺 1. غسالات ملابس Hisense:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> معايرة الشاشة الرقمية وتغيير صمام دخول المياه.</li></ul>
      <h3 class="article-section-title">🍽️ 2. غسالات أطباق Hisense:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> تنظيف الرشاشات واختبار مضخة ضغط المياه.</li></ul>
      <h3 class="article-section-title">❄️ 3. ثلاجات Hisense:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> صيانة نظام Multi Air Flow واختبار كارتة الموتور.</li></ul>
      <h3 class="article-section-title">🧊 4. ديب فريزر Hisense:</h3>
      <ul class="article-list"><li><strong>الحل:</strong> تغيير حساس النوفروست وإعادة ضبط التجميد.</li></ul>
    `,
  },
};

// وظائف فتح وغلق المودال
function openBlogModal(brandKey) {
  const modalOverlay = document.getElementById("blogModalOverlay");
  const modalBody = document.getElementById("modalArticleBody");
  const article = blogArticlesData[brandKey];

  if (article && modalOverlay && modalBody) {
    modalBody.innerHTML = article.content;
    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeBlogModal() {
  const modalOverlay = document.getElementById("blogModalOverlay");
  if (modalOverlay) {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

document.addEventListener("click", (e) => {
  const modalOverlay = document.getElementById("blogModalOverlay");
  if (e.target === modalOverlay) {
    closeBlogModal();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // التمرير الناعم عند الضغط على أزرار التنقل بين الماركات
  const brandLinks = document.querySelectorAll(".brand-link-pill");

  brandLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // تأثير إضاءة بسيط ومؤقت للبطاقة المستهدفة للتنبيه
        targetElement.style.transition =
          "box-shadow 0.4s ease, border-color 0.4s ease";
        targetElement.style.borderColor = "#0d6efd";
        targetElement.style.boxShadow = "0 0 15px rgba(13, 110, 253, 0.3)";

        setTimeout(() => {
          targetElement.style.borderColor = "";
          targetElement.style.boxShadow = "";
        }, 1500);
      }
    });
  });
});
