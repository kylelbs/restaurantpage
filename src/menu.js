import { navloader } from "./navloader";

const menu = () => {
    console.log('here');
    const divContent = document.querySelector('#content');
    navloader();
    const mainParagraph = document.createElement('p');
    mainParagraph.innerText = 'This is the menu page';
    divContent.append(mainParagraph);
};

export {menu};
    
    