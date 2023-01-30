const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    header.classList.toggle('sticky', window.scrollY > 80);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
});

sr.reveal('.home__text', {delay:200});
sr.reveal('.home__img', {delay:300});
sr.reveal('.container', {delay:300});

sr.reveal('.about__img', {});
sr.reveal('.about__text', {delay:200});

sr.reveal('.shop__title', {});
sr.reveal('.row__btn, .shop__content', {delay:200});

sr.reveal('.review__content, .contact, .review__title', {delay:200});