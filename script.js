document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".services-slider");
    const images = slider.querySelectorAll("img");

    images.forEach(img => {
        const clone = img.cloneNode(true);
        slider.appendChild(clone);
    });

    const toggle = document.querySelector(".toggle");
    const menu = document.querySelector(".menu");

    toggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});
