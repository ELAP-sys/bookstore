const toggle = document.getElementById("toggle");
const icon = document.getElementById("mode-icon");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    if (document.body.classList.contains("light")) {
        icon.textContent = "☀️";
    } else {
        icon.textContent = "🌙";
    }
});

const logoDropdown = document.getElementById("logoDropdown");
const dropdownMenu = document.getElementById("dropdownMenu");

logoDropdown.addEventListener("click" || "hover", (e) => {
    e.stopPropagation();
    const isOpen = dropdownMenu.style.display === "flex";
    dropdownMenu.style.display = isOpen ? "none" : "flex";
});

document.addEventListener("click", () => {
    dropdownMenu.style.display = "none";
});

document.getElementById("scrollBtn").addEventListener("click", () => {
    document.getElementById("targetSection").scrollIntoView({
        behavior: "smooth"
    });
});