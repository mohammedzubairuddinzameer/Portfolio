// ==============================
// mouseGlow.js
// ==============================

const mouseGlow = document.querySelector(".mouse-glow");

document.addEventListener("mousemove", (e) => {

    mouseGlow.style.left = e.clientX + "px";

    mouseGlow.style.top = e.clientY + "px";

});
