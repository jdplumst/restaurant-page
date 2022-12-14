export default function displayHome() {
    console.log('I got called from home.js!');

    // Get content div from index.html
    const contentDiv = document.querySelector('#content');

    // Create title for home page
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('container');
    const titleText = document.createElement('h1');
    titleText.innerText = 'Solar System Eatery!';
    titleDiv.appendChild(titleText);
    contentDiv.appendChild(titleDiv);

    // Create description for restaurant
    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('container');
    descriptionDiv.innerText = 'Solar System Eatery has foods from all over the solar system! \
        Whether you are craving some hot food from Mercury, or something nice and cool from Npetune, \
        Solar System Eatery has it all!';
    contentDiv.appendChild(descriptionDiv);

    // Create restaurant hours section
    const hoursDiv = document.createElement('div');
    hoursDiv.classList.add('container');
    const hoursHeader = document.createElement('h3');
    hoursHeader.innerText = 'Hours';
    hoursDiv.appendChild(hoursHeader);
    const hoursSunday = document.createElement('p');
    hoursSunday.innerText = 'Sunday: 9am to 5pm';
    hoursDiv.appendChild(hoursSunday);
    const hoursMonday = document.createElement('p');
    hoursMonday.innerText = 'Monday: 7am to 10pm';
    hoursDiv.appendChild(hoursMonday);
    const hoursTuesday = document.createElement('p');
    hoursTuesday.innerText = 'Tuesday: 7am to 10pm';
    hoursDiv.appendChild(hoursTuesday);
    const hoursWednesday = document.createElement('p');
    hoursWednesday.innerText = 'Wednesday: 8am to 10pm';
    hoursDiv.appendChild(hoursWednesday);
    const hoursThursday = document.createElement('p');
    hoursThursday.innerText = 'Thursday: 8am to 9pm';
    hoursDiv.appendChild(hoursThursday);
    const hoursFriday = document.createElement('p');
    hoursFriday.innerText = 'Friday: 8am to 8pm';
    hoursDiv.appendChild(hoursFriday);
    const hoursSaturday = document.createElement('p');
    hoursSaturday.innerText = 'Saturday: 9am to 6pm';
    hoursDiv.appendChild(hoursSaturday);
    contentDiv.appendChild(hoursDiv);

    // Create restaurant location section
    const locationDiv = document.createElement('div');
    locationDiv.classList.add('container');
    const locationHeader = document.createElement('h3');
    locationHeader.innerText = 'Location';
    locationDiv.appendChild(locationHeader);
    const locationText = document.createElement('p');
    locationText.innerText = 'Planet Earth';
    locationDiv.appendChild(locationText);
    contentDiv.appendChild(locationDiv);
};