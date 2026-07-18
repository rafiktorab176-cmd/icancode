// تحديد النموذج بالكامل لنراقب متى يتم إرساله
const editinput = document.getElementById("edit-id");
// تحديد الحقول المخفية والعادية لقراءة قيمها لاحقاً
const itemNameinput = document.getElementById("item-name");
const itemmImageinput = document.getElementById("item-image");
const itemDescinput = document.getElementById("item-desc");

function readAndsaveDate(event) {
  //منع الصفحة من اعااده التحميل وتصفير البيانات فورا عند الضغط علي الزر
  event.preventDufault();
}
// قراءة واستخراج القيم المكتوبة داخل الحقول
const itemId = editinput.value;
const itemName = itemNameinput.value;
const itemImage = itemmImageinput.value;
const itemDesc = itemDescinput.value;

//تجميع البيانات المقروءة في كائن (Object) واحد لتسهيل التعامل معها

const newItem = {
  id: itemId,
  name: itemName,
  imageUrl: itemImage,
  describtion: itemDesc,
};
// نربط النموذج بمستمع الأحداث
itemForm.addEventlistener("submit", readAndsaveDate);
