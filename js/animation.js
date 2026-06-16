// ==============================
// animation.js
// ==============================

gsap.from(".hero-left", {

    x: -100,

    opacity: 0,

    duration: 1.2

});

gsap.from(".hero-right", {

    x: 100,

    opacity: 0,

    duration: 1.2

});

gsap.from(".section-title", {

    y: 50,

    opacity: 0,

    duration: 1,

    stagger: 0.2,

    scrollTrigger: ".section-title"

});

gsap.from(".project-card", {

    y: 80,

    opacity: 0,

    duration: 1,

    stagger: 0.2,

    scrollTrigger: ".projects"

});

gsap.from(".cert-card", {

    y: 80,

    opacity: 0,

    duration: 1,

    stagger: 0.2,

    scrollTrigger: ".certifications"

});
