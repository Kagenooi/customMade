import {
    adaptive,
} from '../adaptiveMode/adaptive.js';
window.zoom = adaptive;
adaptive();


import {
    modalToggle,
    modalRemove,
    burger,
    cons,
    acc
} from '../js/module.js';
window.burger = burger;
window.modalRemove = modalRemove;
window.cons = cons;
window.acc = acc;
window.modalToggle = modalToggle;

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

document.querySelector('#defaultEngin').click();

new Swiper("#countryProjects", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: "#countryProjectsNext",
        prevEl: "#countryProjectsPrev",
    },
});

function accardion() {
    if (document.body.clientWidth <= 480) {
        let btnsContent = document.querySelector('.engineering__btns');
        btnsContent.remove();

        let btns = document.querySelectorAll('.engineering__acc_item_title');
        for (let i = 0; i < btns.length; i++) {
            btns[i].classList.remove('active');
            btns[i].addEventListener('click', function () {
                if (!this.classList.contains('active')) {
                    this.classList.add('active');
                } else {
                    this.classList.remove('active');
                }
                let accs = btns[i].nextElementSibling;
                // let allaccs = document.querySelectorAll('.scrollHeight');
                // for (let x = 0; x < allaccs.length; x++) {
                //     allaccs[i].style.maxHeight = null;
                // }
                if (accs.style.maxHeight) {
                    accs.style.marginTop = 0 + 'px';
                    accs.style.maxHeight = null;
                } else {
                    accs.style.marginTop = 45 + 'px';
                    accs.style.maxHeight = accs.style.maxHeight + accs.scrollHeight + 'px';
                }
            })
        }
    }
}
accardion();

window.addEventListener('resize', function () {
    adaptive();
    accardion();
});