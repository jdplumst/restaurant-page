import displayHome from "./home";
import displayMenu from "./menu";

const contentDiv = document.querySelector('#content');
const homeBtn = document.querySelector('.home');
const menuBtn = document.querySelector('.menu');
const contactBtn = document.querySelector('.contact');

displayHome();

// Go to Home Page
homeBtn.addEventListener('click', () => {
    // Highlight Home tab
    homeBtn.classList.add('selected');
    menuBtn.classList.remove('selected');
    contactBtn.classList.remove('selected');

    // Display Home page
    contentDiv.innerHTML = '';
    displayHome();
});

// Go to Menu Page
menuBtn.addEventListener('click', () => {
    // Highlight Menu tab
    menuBtn.classList.add('selected');
    homeBtn.classList.remove('selected');
    contactBtn.classList.remove('selected');

    // Display Menu page
    contentDiv.innerHTML = '';
    displayMenu();
});

// Go to Contact Page
contactBtn.addEventListener('click', () => {
    // Highlight Contact tab
    contactBtn.classList.add('selected');
    homeBtn.classList.remove('selected');
    menuBtn.classList.remove('selected');

    // Display Contact page
    contentDiv.innerHTML = '';
});