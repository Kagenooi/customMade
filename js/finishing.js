import {
    adaptive,
} from '../adaptiveMode/adaptive.js';
window.zoom = adaptive;
adaptive();
window.addEventListener('resize', function() {
    adaptive()
});

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

import {
    burger,
    modalToggle,
    modalRemove,
    cons
} from '../js/module.js';
window.burger = burger;
window.burger = burger;
window.modalRemove = modalRemove;
window.cons = cons;
window.modalToggle = modalToggle;

new Swiper("#priceList", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".priceList-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: "#priceListSwRBtn",
        prevEl: "#priceListSwLBtn",
    },
});

new Swiper("#implemented", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".implemented-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: "#implementedSwRBtn",
        prevEl: "#implementedSwLBtn",
    },
});