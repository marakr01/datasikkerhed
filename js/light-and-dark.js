'use strict';

const btnDark = document.querySelector('#btn-dark');
const btnLight = document.querySelector('#btn-light');
const body = document.body;

const toggleMode = (isLight) => {
    body.classList.toggle('dark-mode', !isLight);
    body.classList.toggle('light-mode', isLight);
}

btnDark.addEventListener('click', () => toggleMode(false));
btnLight.addEventListener('click', () => toggleMode(true));