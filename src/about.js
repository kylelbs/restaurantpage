import { navloader } from "./navloader";

const about = () => {
    console.log('here');
    const divContent = document.querySelector('#content');
    navloader();
    const mainParagraph = document.createElement('p');
    mainParagraph.innerText = 'This is the about page';
    divContent.append(mainParagraph);
};

export {about};
    
    
    