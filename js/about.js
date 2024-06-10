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
    acc,
    team
} from '../js/module.js';
window.burger = burger;
window.modalRemove = modalRemove;
window.cons = cons;
window.modalToggle = modalToggle;
window.acc = acc;
window.team = team;

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

document.querySelector('#portDefault').click();
document.querySelector('#aboutDefault').click();

new Swiper("#achievements", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".achievements-pagination",
    },
    
    breakpoints: {
        769: {
            slidesPerView: 4,
            spaceBetween: 90,
            slideToClickedSlide: true,
            pagination: {
                el: ".achievements-pagination",
                type: "fraction",
            },
            navigation: {
                nextEl: "#achievementsNextBtn",
                prevEl: "#achievementsPrevBtn",
            }
        },
        481: { 
            slidesPerView: 4,
            spaceBetween: 90,
            navigation: {
                nextEl: "#achievementsNextBtn",
                prevEl: "#achievementsPrevBtn",
            },
            pagination: {
                el: ".achievements-pagination",
                type: "fraction",
            }
        }
    }
});

new Swiper("#articles", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".articles-pagination",
    },
    breakpoints: {
        769: {
            slidesPerView: 4,
            spaceBetween: 30,
            slideToClickedSlide: true,
            navigation: {
                nextEl: "#articlesNextBtn",
                prevEl: "#articlesPrevBtn",
            },
            pagination: {
                el: ".articles-pagination",
                type: "fraction",
            }
        },
        481: { 
            slidesPerView: 4,
            spaceBetween: 90,
            navigation: {
                nextEl: "#articlesNextBtn",
                prevEl: "#articlesPrevBtn",
            },
            pagination: {
                el: ".articles-pagination",
                type: "fraction",
            }
        }
    }
});


function review() {
    if (document.body.clientWidth >= 480) {
        new Swiper("#review", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: ".review-pagination",
            }
        });
    } else if (document.body.clientWidth < 480) {
        new Swiper("#review", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: ".review-pagination",
            }
        });
    }
}
review();

window.addEventListener('resize', function () {
    adaptive();
    review();
});