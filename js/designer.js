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
    cons
} from '../js/module.js';
window.burger = burger;
window.modalRemove = modalRemove;
window.cons = cons;
window.modalToggle = modalToggle;