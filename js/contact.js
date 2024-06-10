import {
    adaptive,
} from '../adaptiveMode/adaptive.js';
window.zoom = adaptive;
adaptive();
window.addEventListener('resize', adaptive());


import {
    modalToggle,
    modalRemove,
    burger,
} from '../js/module.js';
window.burger = burger;
window.modalRemove = modalRemove;
window.modalToggle = modalToggle;