const form = document.getElementById("myForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // جلوگیری از ارسال پیش‌فرض فرم

  // پاک کردن خطاهای قبلی
  clearError(emailInput);
  clearError(passwordInput);

  let isValid = true;

  // اعتبارسنجی ایمیل با Regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    setError(emailInput, "ایمیل معتبر نیست");
    isValid = false;
  }

  // اعتبارسنجی رمز عبور
  if (passwordInput.value.length < 6) {
    setError(passwordInput, "رمز عبور باید حداقل ۶ کاراکتر باشد");
    isValid = false;
  }

  // اگر همه چیز درست بود
  if (isValid) {
    alert("ورود موفقیت‌آمیز بود ✅");
    form.submit(); // ارسال فرم
  }
});

// توابع کمکی برای نمایش خطا
function setError(input, message) {
  let errorMsg = input.parentElement.querySelector("small");
  if (!errorMsg) {
    errorMsg = document.createElement("small");
    errorMsg.classList.add("error");
    input.parentElement.appendChild(errorMsg);
  }
  errorMsg.textContent = message;
  input.classList.add("error");
}

function clearError(input) {
  const errorMsg = input.parentElement.querySelector("small");
  if (errorMsg) errorMsg.textContent = "";
  input.classList.remove("error");
}