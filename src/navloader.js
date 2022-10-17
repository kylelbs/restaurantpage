const navloader = () => {
    const divContent = document.querySelector('#content');
    const navBar = document.createElement('div');
    navBar.classList.add('navbar');

    const navList = document.createElement('ul');
    const navListTexts = ['Homepage','About','Menu','Contact'];
    for (let i= 0; i < 4; i++){
        const liItem = document.createElement('li');
        liItem.innerText = navListTexts[i];
        navList.append(liItem);
    }
    navBar.append(navList);
    divContent.append(navBar);
};

export {navloader}