import { navloader } from "./navloader";

const contact = () => {
    console.log('here');
    const divContent = document.querySelector('#content');
    navloader();
    const mainParagraph = document.createElement('p');
    mainParagraph.innerText = 'This is the contact page';
    divContent.append(mainParagraph);
};

export {contact};
    
    