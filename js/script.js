'use strict'

const btns = document.querySelectorAll('.scenes button'); 
const divs = document.querySelectorAll('.scenes div'); 
let text; 
let paragraph; 
const choices = [];

const checkAnswer = (e) => {
    divs.forEach(div => {
        div.classList.add('hidden');
    })

    choices.push(e.target.id);
    console.log(choices);

    switch(e.target.id) {
        case 'b0': document.querySelector('#scene1').classList.remove('hidden'); //Klik til spørgsmål 1
        break;
        case 'b1': document.querySelector('#negativ').classList.remove('hidden'); //Negativ feedback
        break;
        case 'b2': document.querySelector('#scene2').classList.remove('hidden'); //Klik til spørgsmål 2
        break;
        case 'b3': document.querySelector('#positiv').classList.remove('hidden'); //Klik til positiv feedback
        break;
        case 'b4': document.querySelector('#neutral').classList.remove('hidden'); //Klik til neutral feedback
        break;
        case 'b5': document.querySelector('#scene1').classList.remove('hidden'); //Klik tilbage til spørgsmål 1
        break;
        case 'restart': document.querySelector('#scene1').classList.remove('hidden');//Start forfra
        break;
    }
}

btns.forEach(btn => {
    btn.addEventListener('click', checkAnswer);
})