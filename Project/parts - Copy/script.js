// ==========================================
// 1. قواعد البيانات مقسمة لكل جهاز
// ==========================================

const fridgeParts = {
  category: "fridge",
  title: "❄️ قطع غيار الثلاجات (Refrigerators)",
  items: [
    "الضاغط (الكباس / Compressor)",
    "المكثف (السرپنتينة / Condenser)",
    "المبخر (الفريزر / Evaporator)",
    "ثرموستات التحكم في الحرارة (Thermostat)",
    "مروحة التبريد ومروحة الموزع (Evaporator Fan)",
    "سخان التذويب (Defrost Heater)",
    "ثرموديسك / ثرموفيلوز (Defrost Sensor & Fuse)",
    "تايمر النوفروست (Defrost Timer)",
    "كارتة التحكم الإلكترونية (Main Board)",
    "مكثف البدء (Capacitor) وأوفرلود الحماية (Overload Relay)",
    "جوان / كاوتش الباب (Door Gasket)",
    "فلتر دراير (Filter Drier)",
    "أنبوبة شعرية (Capillary Tube)",
  ],
};

const washerParts = {
  category: "washer",
  title: "🧺 قطع غيار غسالات الملابس (Washing Machines)",
  items: [
    "المحرك الرئيسي (Main Motor)",
    "طلمبة / طرمبة الطرد (Drain Pump)",
    "صمام دخول المياه (Water Inlet Valve)",
    "ميزان المياه / الحساس (Pressure Switch)",
    "سخان المياه (Heating Element)",
    "مساعدين وشفاطات الصدمات (Shock Absorbers)",
    "مساعدين السوست (Suspension Springs)",
    "سير الموتور (Drive Belt)",
    "مقبض وقفل الباب الإلكتروني (Door Lock Switch / Interlock)",
    "صليبة الرومان بلي والرولمان بلي (Bearing & Spider)",
    "كارتة التشغيل والبرامج (Main PCB)",
    "جوان الباب المطاطي (Door Seal Rubber)",
  ],
};

const dishwasherParts = {
  category: "dishwasher",
  title: "🍽️ قطع غيار غسالات الأطباق (Dishwashers)",
  items: [
    "موتور الدفع والغسيل (Circulation Pump / Wash Motor)",
    "موتور / طلمبة طرد المياه (Drain Pump)",
    "سخان المياه (Heater Assembly)",
    "رشاشات المياه العلوي والسفلي (Spray Arms)",
    "موزع الصابون والزيت (Detergent Dispenser)",
    "حساس مستوى المياه ومستشعر العكر (Pressure / Turbidity Sensor)",
    "صمام دخل المياه (Inlet Valve)",
    "مفتاح وقفل الباب (Safety Door Lock)",
    "فلتر تجميع الفضلات (Filter Assembly)",
    "كارتة التحكم البرمجية (Control Board)",
  ],
};

const tvParts = {
  category: "tv",
  title: "📺 قطع غيار الشاشات والتلفزيون (TVs & Displays)",
  items: [
    "مساطر الليد (LED Backlight Strips)",
    "كارتة الباور (Power Supply Board)",
    "الكارتة الرئيسية (Main Board / Motherboard)",
    "كارتة التيكون (T-Con Board)",
    "شريط التوصيل (COF / Flex Cable)",
    "السطح الخارجي للبانل (Panel / Display Glass)",
    "السماعات الصوتية (Speakers)",
    "مستقبل الريموت (IR Receiver Board)",
    "عدسة الشاشة وحوامل التثبيت",
  ],
};

const acParts = {
  category: "ac",
  title: "🌬️ قطع غيار التكييفات والمكيفات (Air Conditioners)",
  items: [
    "الضاغط / الكباس (Compressor)",
    "كاباستور / مكثف التشغيل والبدء (Run & Start Capacitor)",
    "موتور المروحة الداخلية (Indoor Blower Motor)",
    "موتور المروحة الخارجية (Outdoor Condenser Fan Motor)",
    "كارتة التحكم والريموت (Control PCB & Remote)",
    "سربنتينة الوحدة الداخلية والخارجية (Indoor & Outdoor Coils)",
    "موتور موزع الهواء (Swing Motor)",
    "حساسات الحرارة (Room & Pipe Temperature Sensors)",
    "محبس الخدمة وعكس الاتجاه (Service Valve & 4-Way Valve)",
    "مروحة بلاور التهوية (Blower Wheel)",
  ],
};

// تجميع كل البيانات في مصفوفة واحدة
const allCategories = [
  fridgeParts,
  washerParts,
  dishwasherParts,
  tvParts,
  acParts,
];

// ==========================================
// 2. دوال التعامل مع DOM وتوليد الأقسام
// ==========================================

function createSectionHTML(data) {
  const itemsList = data.items
    .map(
      (item) => `
    <div class="part-item">
      <span class="badge"></span>
      <span>${item}</span>
    </div>
  `,
    )
    .join("");

  return `
    <div class="section-card">
      <div class="section-header">
        <h2>${data.title}</h2>
        <span style="color: var(--text-muted); font-size: 0.9rem;">${data.items.length} قطع</span>
      </div>
      <div class="parts-grid">
        ${itemsList}
      </div>
    </div>
  `;
}

function initPage() {
  const allContainer = document.getElementById("allSectionsContainer");
  let allHTML = "";

  allCategories.forEach((catData) => {
    const sectionHTML = createSectionHTML(catData);
    allHTML += sectionHTML;

    const singleContainer = document.getElementById(
      `${catData.category}-content`,
    );
    if (singleContainer) {
      singleContainer.innerHTML = sectionHTML;
    }
  });

  if (allContainer) {
    allContainer.innerHTML = allHTML;
  }
}

// دالة التبديل بين التبويبات (Tabs)
function switchTab(tabId, event) {
  const buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach((btn) => btn.classList.remove("active"));
  event.currentTarget.classList.add("active");

  const contents = document.querySelectorAll(".tab-content");
  contents.forEach((content) => content.classList.remove("active"));

  const selectedContent = document.getElementById(`${tabId}-content`);
  if (selectedContent) {
    selectedContent.classList.add("active");
  }
}

// تشغيل الدالة تلقائياً أول ما الصفحة تحمل
document.addEventListener("DOMContentLoaded", initPage);
