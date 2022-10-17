const pageloader = (() => {const divContent = document.querySelector('#content');

const navBar = document.createElement('div');
navBar.classList.add('navbar');

const navList = document.createElement('ul');
const navListTexts = ['About','Menu','Contact'];
for (let i= 0; i < 3; i++){
    const liItem = document.createElement('li');
    liItem.innerText = navListTexts[i];
    navList.append(liItem);
}
navBar.append(navList);
divContent.append(navBar);

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


