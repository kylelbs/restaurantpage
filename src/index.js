import { pageloader } from "./pageloader";

const divContent = document.querySelector('#content');
const aboutLink = document.querySelector('ul :nth-child(1)');
const menuLink = document.querySelector('ul :nth-child(2)');
const contactLink = document.querySelector('ul :nth-child(3)');

aboutLink.addEventListener('click', ()=> {
    divContent.remove();

});

menuLink.addEventListener('click', ()=> {
    divContent.remove();

});

contactLink.addEventListener('click', ()=> {
    divContent.remove();
    
});


