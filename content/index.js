// ------------------ Theme Toggle ------------------
const toggle = document.getElementById("toggle");
const icon = document.getElementById("mode-icon");

toggle.addEventListener("click", () => {
    setTimeout(() => {
        document.body.classList.toggle("light");
        icon.textContent = document.body.classList.contains("light") ? "🌙" : "☀️";
    }, 800);
});

// ------------------ Scroll Button ------------------
document.getElementById("scrollBtn").addEventListener("click", () => {
    document.getElementById("targetSection").scrollIntoView({ behavior: "smooth" });
});

// ------------------ Infinite Auto Slider ------------------

function initCarousel(swiper) {
    const wrapper = swiper.querySelector('.swiper-wrapper');

    setInterval(() => {
        const first = wrapper.children[0];   // اولین اسلاید
        wrapper.appendChild(first);          // بفرستش آخر لیست

        wrapper.style.transition = "none";   // بدون انیمیشن جابه‌جا کن
        wrapper.style.transform = "translateX(0)";

        // بعد یک فریم، انیمیشن را فعال کن
        requestAnimationFrame(() => {
            wrapper.style.transition = "transform 0.4s ease";
            wrapper.style.transform = "translateX(-180px)"; // عرض اسلاید + فاصله
        });

        // وقتی انیمیشن تمام شد، ریست کن
        wrapper.addEventListener("transitionend", () => {
            wrapper.style.transition = "none";
            wrapper.style.transform = "translateX(0)";
        }, { once: true });

    }, 2000);
}

document.querySelectorAll('.swiper').forEach(initCarousel);