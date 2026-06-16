// ====================================
// loader.js
// ====================================

window.addEventListener("load", () => {

    const loader =
        document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("fade-out");

        setTimeout(() => {

            loader.style.display = "none";

        }, 1000);

    }, 1800);

});