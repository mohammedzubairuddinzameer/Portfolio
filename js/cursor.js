// ====================================
// AI Research Lab 2026
// cursor.js
// ====================================

const cursor = document.querySelector(".custom-cursor");
const cursorGlow = document.querySelector(".cursor-glow");

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";

    cursorGlow.style.left = mouseX + "px";
    cursorGlow.style.top = mouseY + "px";

});


// Hover effects

const hoverItems = document.querySelectorAll(

    "a, button, .project-card, .skill-card, .cert-card"

);

hoverItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

        cursor.classList.add("cursor-expand");
        cursorGlow.classList.add("glow-expand");

    });

    item.addEventListener("mouseleave", () => {

        cursor.classList.remove("cursor-expand");
        cursorGlow.classList.remove("glow-expand");

    });

});