export function acc(cont, btn, btns) {
    let acc = document.querySelectorAll(`${cont} .acc`);
    for (let i = 0; i < acc.length; i++) {
        acc[i].classList.remove('active');
    }
    let allBtns = document.querySelectorAll(`${cont} ${btns}`);
    for (let x = 0; x < allBtns.length; x++) {
        allBtns[x].classList.remove('active');
    }
    btn.classList.add('active');
    document.querySelector(`#${btn.dataset.active}`).classList.add('active');
}


export function burger(btn) {
    document.querySelector(`${btn.dataset.active}`).classList.toggle('active');
    btn.classList.toggle('active');
}

export function team(btn, allBtns, allActivate, pics, activate) {
    let btns = document.querySelectorAll(`.${allBtns}`);
    let activated = document.querySelectorAll(`.${allActivate}`);
    let images = document.querySelectorAll(`.${pics}`);
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove('active');
        activated[i].classList.remove('active');
        images[i].classList.remove('active');
    }
    let active = document.querySelectorAll(`.${activate}`);
    for (let x = 0; x < active.length; x++) {
        active[x].classList.add('active');
    }
    btn.classList.add('active');
}


export function modalToggle(modal) {
    let modals = document.querySelectorAll('.modal');
    for (let i = 0; i < modals.length; i++) {
        modals[i].classList.remove('active');
    }
    document.querySelector(`${modal}`).classList.toggle('active');
}

export function modalRemove() {
    let modals = document.querySelectorAll('.modal');
    for (let i = 0; i < modals.length; i++) {
        modals[i].classList.remove('active');
    }
}

export function cons(consSuccess, cloeForm) {
    document.querySelector(`${consSuccess}`).classList.toggle('active');
    document.querySelector(`${cloeForm}`).classList.toggle('active');
}