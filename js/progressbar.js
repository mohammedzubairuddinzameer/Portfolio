// ====================================
// progressbar.js
// ====================================

window.addEventListener("scroll", () => {

    const totalHeight =

        document.documentElement.scrollHeight -

        document.documentElement.clientHeight;

    const progress =

        (window.scrollY / totalHeight) * 100;

    document.getElementById("progress-bar")

        .style.width = progress + "%";

});