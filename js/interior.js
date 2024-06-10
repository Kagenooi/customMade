import {
    adaptive,
} from '../adaptiveMode/adaptive.js';
window.zoom = adaptive;
adaptive();
window.addEventListener('resize', adaptive());


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

document.querySelector('#portDefault').click();

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'