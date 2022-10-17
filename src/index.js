import { pageloader } from "./pageloader";

const aboutLink = document.querySelector('ul :nth-child(1)');
const menuLink = document.querySelector('ul :nth-child(2)');
const contactLink = document.querySelector('ul :nth-child(3)');

aboutLink.addEventListener('click', ()=> {
    aboutLink.innerHTML = 'clicked!';
});