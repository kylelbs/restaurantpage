import { navloader } from "./navloader";

const pageloader = (() => {

const divContent = document.querySelector('#content');
navloader();
const mainTitle = document.createElement('h1');
mainTitle.innerText = 'Welcome to the Air restaurant';
divContent.append(mainTitle);

const mainParagraph = document.createElement('p');
mainParagraph.innerText = 'The Air restaurant is a gatronomic restaurant that serves mainly pure air dishes. From the vacuum.';
divContent.append(mainParagraph);

const reservationButton = document.createElement('button');
reservationButton.innerText = "Book a table (actually you can't)";
divContent.append(reservationButton);})();

export {pageloader};


