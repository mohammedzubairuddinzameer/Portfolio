// ==============================
// contact.js
// ==============================

const contactForm =
document.querySelector("#contactForm");

contactForm.addEventListener(

"submit",

() => {

    setTimeout(() => {

        Swal.fire({

            icon: "success",

            title: "Message Sent!",

            text:
            "Thank you for contacting me.",

            confirmButtonColor:
            "#3B82F6"

        });

    }, 1000);

});
