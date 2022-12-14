// Import images
import Mercury from './mercury.jpg';
// https://unsplash.com/photos/9Qs_9n2oSJo
import Venus from './venus.jpg';
// https://unsplash.com/photos/17ZU9BPy_Q4
import Earth from './earth.jpg';
// https://unsplash.com/photos/IGfIGP5ONV0
import Mars from './mars.jpg';
// https://unsplash.com/photos/DPNrBT1WCMs
import Jupiter from './jupiter.jpg';
// https://unsplash.com/photos/99muSP3cqhY
import Saturn from './saturn.jpg';
// https://unsplash.com/photos/4FO9vox0T7M
import Uranus from './uranus.jpg';
// https://unsplash.com/photos/X5u6snvBCf0
import Neptune from './neptune.jpg';
// https://unsplash.com/photos/TqOEGdRNowY

export default function displayMenu() {
    console.log("yo it's the menu function");

    // Get content div from index.html
    const contentDiv = document.querySelector('#content');

    // Create menu grid
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('grid');

    // Add menu items to grid
    const mercuryDiv = document.createElement('div');
    mercuryDiv.classList.add('container');
    const mercuryTitle = document.createElement('h3');
    mercuryTitle.innerText = 'Steak From Mercury';
    mercuryDiv.appendChild(mercuryTitle);
    const mercuryPrice = document.createElement('p');
    mercuryPrice.innerText = '$25';
    mercuryDiv.appendChild(mercuryPrice);
    const mercuryImg = new Image();
    mercuryImg.src = Mercury;
    mercuryDiv.appendChild(mercuryImg);
    gridDiv.appendChild(mercuryDiv);

    const venusDiv = document.createElement('div');
    venusDiv.classList.add('container');
    const venusTitle = document.createElement('h3');
    venusTitle.innerText = 'Spicy Pasta From Venus';
    venusDiv.appendChild(venusTitle);
    const venusPrice = document.createElement('p');
    venusPrice.innerText = '$22';
    venusDiv.appendChild(venusPrice);
    const venusImg = new Image();
    venusImg.src = Venus;
    venusDiv.appendChild(venusImg);
    gridDiv.appendChild(venusDiv);

    const earthDiv = document.createElement('div');
    earthDiv.classList.add('container');
    const earthTitle = document.createElement('h3');
    earthTitle.innerText = 'Salad From Earth';
    earthDiv.appendChild(earthTitle);
    const earthPrice = document.createElement('p');
    earthPrice.innerText = '$14';
    earthDiv.appendChild(earthPrice);
    const earthImg = new Image();
    earthImg.src = Earth;
    earthDiv.appendChild(earthImg);
    gridDiv.appendChild(earthDiv);

    const marsDiv = document.createElement('div');
    marsDiv.classList.add('container');
    const marsTitle = document.createElement('h3');
    marsTitle.innerText = 'Chocolate From Mars';
    marsDiv.appendChild(marsTitle);
    const marsPrice = document.createElement('p');
    marsPrice.innerText = '$10';
    marsDiv.appendChild(marsPrice);
    const marsImg = new Image();
    marsImg.src = Mars;
    marsDiv.appendChild(marsImg);
    gridDiv.appendChild(marsDiv);

    const jupiterDiv = document.createElement('div');
    jupiterDiv.classList.add('container');
    const jupiterTitle = document.createElement('h3');
    jupiterTitle.innerText = 'Eggs and Beans From Jupiter';
    jupiterDiv.appendChild(jupiterTitle);
    const jupiterPrice = document.createElement('p');
    jupiterPrice.innerText = '$12';
    jupiterDiv.appendChild(jupiterPrice);
    const jupiterImg = new Image();
    jupiterImg.src = Jupiter;
    jupiterDiv.appendChild(jupiterImg);
    gridDiv.appendChild(jupiterDiv);

    const saturnDiv = document.createElement('div');
    saturnDiv.classList.add('container');
    const saturnTitle = document.createElement('h3');
    saturnTitle.innerText = 'Onion Rings From Saturn';
    saturnDiv.appendChild(saturnTitle);
    const saturnPrice = document.createElement('p');
    saturnPrice.innerText = '$6';
    saturnDiv.appendChild(saturnPrice);
    const saturnImg = new Image();
    saturnImg.src = Saturn;
    saturnDiv.appendChild(saturnImg);
    gridDiv.appendChild(saturnDiv);

    const uranusDiv = document.createElement('div');
    uranusDiv.classList.add('container');
    const uranusTitle = document.createElement('h3');
    uranusTitle.innerText = 'Ice Cream From Uranus';
    uranusDiv.appendChild(uranusTitle);
    const uranusPrice = document.createElement('p');
    uranusPrice.innerText = '$8';
    uranusDiv.appendChild(uranusPrice);
    const uranusImg = new Image();
    uranusImg.src = Uranus;
    uranusDiv.appendChild(uranusImg);
    gridDiv.appendChild(uranusDiv);

    const neptuneDiv = document.createElement('div');
    neptuneDiv.classList.add('container');
    const neptuneTitle = document.createElement('h3');
    neptuneTitle.innerText = 'Seafood From Neptune';
    neptuneDiv.appendChild(neptuneTitle);
    const neptunePrice = document.createElement('p');
    neptunePrice.innerText = '$30';
    neptuneDiv.appendChild(neptunePrice);
    const neptuneImg = new Image();
    neptuneImg.src = Neptune;
    neptuneDiv.appendChild(neptuneImg);
    gridDiv.appendChild(neptuneDiv);

    contentDiv.appendChild(gridDiv);
};