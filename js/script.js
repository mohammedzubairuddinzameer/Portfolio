// =============================
// AI Research Lab 2026
// Main Script
// Mohammed Zubair Uddin Zameer
// =============================


// ------------------------------
// AOS ANIMATION
// ------------------------------
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});


// ------------------------------
// FEATHER ICONS
// ------------------------------
feather.replace();


// ------------------------------
// SMOOTH SCROLLING
// ------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        document.querySelector(
            this.getAttribute('href')
        ).scrollIntoView({
            behavior: 'smooth'
        });

    });
});


// ------------------------------
// ACTIVE NAVBAR LINKS
// ------------------------------
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});


// ------------------------------
// SCROLL PROGRESS BAR
// ------------------------------
window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (window.pageYOffset / totalHeight) * 100;

    document.getElementById("progress-bar")
        .style.width = progress + "%";

});


// ------------------------------
// BACK TO TOP BUTTON
// ------------------------------
const backToTopBtn =
    document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTopBtn.classList.remove("hidden");

    } else {

        backToTopBtn.classList.add("hidden");

    }

});

backToTopBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ------------------------------
// PROJECT CARD TILT EFFECT
// ------------------------------
VanillaTilt.init(

    document.querySelectorAll(".project-card"),

    {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.2
    }

);


// ------------------------------
// STATS COUNTER ANIMATION
// ------------------------------
const counters =
    document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target =
            +counter.getAttribute("data-target");

        const c =
            +counter.innerText;

        const increment = target / 100;

        if (c < target) {

            counter.innerText =
                `${Math.ceil(c + increment)}`;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});


// ------------------------------
// LOADER SCREEN
// ------------------------------
window.addEventListener("load", () => {

    const loader =
        document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("fade-out");

        setTimeout(() => {

            loader.style.display = "none";

        }, 1000);

    }, 1500);

});


// ------------------------------
// MOUSE GLOW EFFECT
// ------------------------------
const glow =
    document.querySelector(".mouse-glow");

document.addEventListener("mousemove", e => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});


// ------------------------------
// THEME TOGGLE
// ------------------------------
const themeToggle =
    document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

});


// ------------------------------
// CERTIFICATE PDF MODAL
// ------------------------------
function openCertificate(pdfPath) {

    document.getElementById(
        "certificateFrame"
    ).src = pdfPath;

    document.getElementById(
        "certificateModal"
    ).classList.remove("hidden");

}


function closeCertificate() {

    document.getElementById(
        "certificateModal"
    ).classList.add("hidden");

    document.getElementById(
        "certificateFrame"
    ).src = "";

}


// ------------------------------
// UNDER CONSTRUCTION PROJECT
// ------------------------------
const comingSoon =
    document.querySelector(".coming-soon");

if (comingSoon) {

    setInterval(() => {

        comingSoon.classList.toggle("animate-pulse");

    }, 1500);

}