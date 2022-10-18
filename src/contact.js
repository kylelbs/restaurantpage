import { navloader } from ".";

const contact = () => {
    const divContent = document.querySelector('#content');
    navloader();
    const mainParagraph = document.createElement('p');
    mainParagraph.innerText = 'This is the contact page';
    divContent.append(mainParagraph);
};

export {contact};
    
    