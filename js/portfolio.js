import {
    adaptive,
} from '../adaptiveMode/adaptive.js';
window.zoom = adaptive;
adaptive();


import {
    modalToggle,
    acc,
    modalRemove,
    burger,
    cons
} from '../js/module.js';
window.burger = burger;
window.modalRemove = modalRemove;
window.cons = cons;
window.acc = acc;
window.modalToggle = modalToggle;

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

new Swiper("#portfolioSwiper1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination1",
        type: "fraction",
    },
    navigation: {
        nextEl: "#portfolioSwRBtn1",
        prevEl: "#portfolioSwLBtn1",
    },
});
new Swiper("#portfolioSwiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination2",
        type: "fraction",
    },
    navigation: {
        nextEl: "#portfolioSwRBtn2",
        prevEl: "#portfolioSwLBtn2",
    },
});
new Swiper("#portfolioSwiper3", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination3",
        type: "fraction",
    },
    navigation: {
        nextEl: "#portfolioSwRBtn3",
        prevEl: "#portfolioSwLBtn3",
    },
});
document.querySelector('#portDefault').click();


function portfolio() {
    let acc = document.querySelectorAll('.portfolio__acc_item');
    let content = document.querySelectorAll('.portfolio__acc_item_container');
    for (let i = 0; i < acc.length; i++) {
        acc[i].innerHTML = '';
        acc[i].append(content[i]);
    }
}
if (document.body.clientWidth < 481) {
    portfolio();
}

window.addEventListener('resize', function () {
    adaptive();
    if (document.body.clientWidth < 481) {
        portfolio();
    }
});
