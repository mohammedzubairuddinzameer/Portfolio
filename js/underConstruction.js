// ==============================
// underConstruction.js
// ==============================

const progressBar =
document.querySelector(".research-progress");

let width = 0;

setInterval(() => {

    width++;

    if (width > 75) {

        width = 60;

    }

    progressBar.style.width = width + "%";

}, 120);


const badge =
document.querySelector(".coming-soon");

setInterval(() => {

    badge.classList.toggle("animate-pulse");

}, 1200);
