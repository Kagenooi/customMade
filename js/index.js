import {
    adaptive,
} from '../adaptiveMode/adaptive.js';
window.zoom = adaptive;
adaptive();


import {
    acc,
    modalToggle,
    modalRemove,
    burger,
    cons
} from '../js/module.js';
window.acc = acc;
window.burger = burger;
window.modalRemove = modalRemove;
window.cons = cons;
window.modalToggle = modalToggle;

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

new Swiper("#headerSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    delay: 3000,
    pagination: {
        el: "#headerSwiperPagination",
        type: "fraction",
    },
    navigation: {
        nextEl: "#headerSwRBtn",
        prevEl: "#headerSwLBtn",
    },
});

function review() {
    if (document.body.clientWidth >= 480) {
        new Swiper("#review", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
            }
        });
    }
}
review();

window.addEventListener('resize', function () {
    adaptive();
    review();
});

document.querySelector('#portDefault').click();