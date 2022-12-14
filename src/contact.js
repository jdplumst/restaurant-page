import Sun from './sun.jpg';
import Moon from './moon.jpg';
import Pluto from './pluto.jpg';

export default function displayContact() {
    // Get content div from index.html
    const contentDiv = document.querySelector('#content');

    // Create title for contact page
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('container');
    const titleText = document.createElement('h1');
    titleText.innerText = 'Contact Us!';
    titleDiv.appendChild(titleText);
    contentDiv.appendChild(titleDiv);

    // Create sections for each person to contact
    const sunDiv = document.createElement('div');
    sunDiv.classList.add('worker');
    const sunContent = document.createElement('div');
    const sunTitle = document.createElement('h3');
    sunTitle.innerText = 'The Sun';
    sunContent.appendChild(sunTitle);
    const sunJob = document.createElement('p');
    sunJob.innerText = 'Chef';
    sunContent.appendChild(sunJob);
    const sunPhone = document.createElement('p');
    sunPhone.innerText = '222-222-2222';
    sunContent.appendChild(sunPhone);
    const sunEmail = document.createElement('p');
    sunEmail.innerText = 'thesun@solarsystem.com';
    sunContent.appendChild(sunEmail);
    sunDiv.appendChild(sunContent);
    const sunImgDiv = document.createElement('div');
    const sunImg = new Image();
    sunImg.src = Sun;
    sunImgDiv.appendChild(sunImg);
    sunDiv.appendChild(sunImgDiv);
    contentDiv.appendChild(sunDiv);

    const moonDiv = document.createElement('div');
    moonDiv.classList.add('worker');
    const moonContent = document.createElement('div');
    const moonTitle = document.createElement('h3');
    moonTitle.innerText = 'The Moon';
    moonContent.appendChild(moonTitle);
    const moonJob = document.createElement('p');
    moonJob.innerText = 'Manager';
    moonContent.appendChild(moonJob);
    const moonPhone = document.createElement('p');
    moonPhone.innerText = '333-333-3333';
    moonContent.appendChild(moonPhone);
    const moonEmail = document.createElement('p');
    moonEmail.innerText = 'themoon@solarsystem.com';
    moonContent.appendChild(moonEmail);
    moonDiv.appendChild(moonContent);
    const moonImgDiv = document.createElement('div');
    const moonImg = new Image();
    moonImg.src = Moon;
    moonImgDiv.appendChild(moonImg);
    moonDiv.appendChild(moonImgDiv);
    contentDiv.appendChild(moonDiv);

    const plutoDiv = document.createElement('div');
    plutoDiv.classList.add('worker');
    const plutoContent = document.createElement('div');
    const plutoTitle = document.createElement('h3');
    plutoTitle.innerText = 'Pluto';
    plutoContent.appendChild(plutoTitle);
    const plutoJob = document.createElement('p');
    plutoJob.innerText = 'Waiter';
    plutoContent.appendChild(plutoJob);
    const plutoPhone = document.createElement('p');
    plutoPhone.innerText = '444-444-4444';
    plutoContent.appendChild(plutoPhone);
    const plutoEmail = document.createElement('p');
    plutoEmail.innerText = 'pluto@solarsystem.com';
    plutoContent.appendChild(plutoEmail);
    plutoDiv.appendChild(plutoContent);
    const plutoImgDiv = document.createElement('div');
    const plutoImg = new Image();
    plutoImg.src = Pluto;
    plutoImgDiv.appendChild(plutoImg);
    plutoDiv.appendChild(plutoImgDiv);
    contentDiv.appendChild(plutoDiv);
};