// ===============================
// AI Research Lab 2026
// Particles Background
// ===============================

particlesJS("particles-js", {

    particles: {

        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 900
            }
        },

        color: {
            value: [
                "#3B82F6",
                "#8B5CF6",
                "#06B6D4"
            ]
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.4,
            random: true
        },

        size: {
            value: 3,
            random: true
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#3B82F6",
            opacity: 0.2,
            width: 1
        },

        move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce"
        }

    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {
                enable: true,
                mode: "grab"
            },

            onclick: {
                enable: true,
                mode: "push"
            },

            resize: true
        },

        modes: {

            grab: {
                distance: 180,
                line_linked: {
                    opacity: 0.7
                }
            },

            push: {
                particles_nb: 4
            }

        }

    },

    retina_detect: true

});