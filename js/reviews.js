import {
    adaptive,
} from '../adaptiveMode/adaptive.js';
window.zoom = adaptive;
adaptive();
window.addEventListener('resize', adaptive());


import {
    modalToggle,
    modalRemove,
    burger
} from '../js/module.js';
window.burger = burger;
window.modalRemove = modalRemove;
window.modalToggle = modalToggle;

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

new Swiper("#reviews", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: "#reviewsNextBtn",
        prevEl: "#reviewsPrevBtn",
    },
});