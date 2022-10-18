import { navloader } from ".";

const menu = () => {
    const divContent = document.querySelector('#content');
    navloader();
    const mainParagraph = document.createElement('p');
    mainParagraph.innerText = 'This is the menu page';
    divContent.append(mainParagraph);
};

export {menu};
    
    