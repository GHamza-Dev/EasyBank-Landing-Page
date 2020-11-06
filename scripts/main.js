// DOM Elements
const openBtn = document.querySelector('.open');
const menu = document.querySelector('nav ul');

let path = "./images/icon-";

openBtn.addEventListener('click', () => {
    if (menu.classList.contains('show_menu')) {
        menu.classList.remove('show_menu');
        openBtn.setAttribute('src', `${path}hamburger.svg`);
        menu.classList.remove('opacity_1');
    } else {
        menu.classList.add('show_menu');
        openBtn.setAttribute('src', `${path}close.svg`);
        setTimeout(() => {
            menu.classList.add('opacity_1');
        }, 0);
    }
});