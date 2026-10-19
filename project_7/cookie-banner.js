// إنشاء واستدعاء تنسيقات الكوكيز تلقائياً
const cookieStyle = document.createElement("style");
cookieStyle.innerHTML = `
  .cookie-banner {
    position: fixed;
    bottom: -100px;
    left: 0;
    right: 0;
    background-color: #1a1d20;
    color: #ffffff;
    padding: 12px 20px;
    box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.3);
    z-index: 99999;
    transition: bottom 0.4s ease-in-out;
    direction: rtl;
    font-family: inherit;
  }
  .cookie-banner.show { bottom: 0; }
  .cookie-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    flex-wrap: wrap;
  }
  .cookie-text { margin: 0; font-size: 14px; line-height: 1.5; flex: 1; }
  .cookie-buttons { display: flex; align-items: center; gap: 10px; }
  .cookie-btn {
    padding: 8px 22px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    border: none;
    transition: all 0.2s ease;
  }
  .accept-btn { background-color: #2563eb; color: #ffffff; }
  .accept-btn:hover { background-color: #1d4ed8; }
  .reject-btn { background-color: transparent; color: #d1d5db; border: 1px solid #4b5563; }
  .reject-btn:hover { background-color: rgba(255, 255, 255, 0.1); color: #ffffff; }
  @media (max-width: 640px) {
    .cookie-content { flex-direction: column; text-align: center; }
    .cookie-buttons { width: 100%; justify-content: center; }
    .cookie-btn { flex: 1; }
  }
`;
document.head.appendChild(cookieStyle);

// إنشاء عنصر الـ HTML الخاص بالشريط وإضافته للصفحة
document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("cookieConsent")) {
    const bannerHTML = `
      <div id="cookie-banner" class="cookie-banner">
        <div class="cookie-content">
          <p class="cookie-text">
            🍪 نستخدم ملفات تعريف الارتباط (الكوكيز) لتحسين تجربتك على موقعنا. باستمرارك في التصفح، فإنك توافق على استخدامنا لملفات الكوكيز.
          </p>
          <div class="cookie-buttons">
            <button id="accept-cookies" class="cookie-btn accept-btn">موافق</button>
            <button id="reject-cookies" class="cookie-btn reject-btn">رفض</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", bannerHTML);

    const cookieBanner = document.getElementById("cookie-banner");
    setTimeout(() => {
      cookieBanner.classList.add("show");
    }, 1000);

    document
      .getElementById("accept-cookies")
      .addEventListener("click", function () {
        localStorage.setItem("cookieConsent", "accepted");
        cookieBanner.classList.remove("show");
      });

    document
      .getElementById("reject-cookies")
      .addEventListener("click", function () {
        localStorage.setItem("cookieConsent", "rejected");
        cookieBanner.classList.remove("show");
      });
  }
});
