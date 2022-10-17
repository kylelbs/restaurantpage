import { pageloader } from "./pageloader";
import { about } from "./about";
import { menu } from "./menu";
import { contact } from "./contact";


const divContent = document.querySelector('#content');
const homepageLink = document.querySelector('ul :nth-child(1)');
const aboutLink = document.querySelector('ul :nth-child(2)');
const menuLink = document.querySelector('ul :nth-child(3)');
const contactLink = document.querySelector('ul :nth-child(4)');

homepageLink.addEventListener('click', ()=> {
    divContent.innerHTML = '';
    pageloader();
});

aboutLink.addEventListener('click', ()=> {
    divContent.innerHTML = '';
    about();
});

menuLink.addEventListener('click', ()=> {
    divContent.innerHTML = '';
    menu();
});

contactLink.addEventListener('click', ()=> {
    divContent.innerHTML = '';
    contact();
});


