import './styles.css';

const homeBtn = document.querySelector('.home');
const menuBtn = document.querySelector('.menu');
const contactBtn = document.querySelector('.contact');

homeBtn.addEventListener('click', () => {
    homeBtn.classList.add('selected');
    menuBtn.classList.remove('selected');
    contactBtn.classList.remove('selected');
});

menuBtn.addEventListener('click', () => {
    menuBtn.classList.add('selected');
    homeBtn.classList.remove('selected');
    contactBtn.classList.remove('selected');
});

contactBtn.addEventListener('click', () => {
    contactBtn.classList.add('selected');
    homeBtn.classList.remove('selected');
    menuBtn.classList.remove('selected');
});