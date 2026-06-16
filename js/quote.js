// ==============================
// quote.js
// ==============================

const quotes = [

"Building intelligent systems that turn ideas into impactful digital experiences.",

"Transforming ideas into intelligent solutions.",

"Innovation begins where curiosity meets technology.",

"Creating solutions driven by data and powered by AI."

];

const quoteText =
document.querySelector(".quote-text");

let quoteIndex = 0;

setInterval(() => {

    quoteIndex++;

    if (quoteIndex >= quotes.length) {

        quoteIndex = 0;

    }

    quoteText.innerHTML = quotes[quoteIndex];

}, 5000);
