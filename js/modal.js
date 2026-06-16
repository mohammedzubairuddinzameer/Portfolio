// ====================================
// AI Research Lab 2026
// modal.js
// ====================================

function openCertificate(pdfPath) {

    const modal =
        document.getElementById("certificateModal");

    const frame =
        document.getElementById("certificateFrame");

    frame.src = pdfPath;

    modal.classList.remove("hidden");

    document.body.style.overflow = "hidden";

}


function closeCertificate() {

    const modal =
        document.getElementById("certificateModal");

    const frame =
        document.getElementById("certificateFrame");

    modal.classList.add("hidden");

    frame.src = "";

    document.body.style.overflow = "auto";

}


// ESC key support

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        closeCertificate();

    }

});