/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Aayush Khanal';
const Year = new Date();
let currentYear = Year.getFullYear();
let profilePicture = ("images/IMG_1827.jpeg")


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */
imageElement.innerHTML = fullName
nameElement.innerHTML = `<strong>${fullName}</strong>`; 
imageElement.setAttribute('src',`${profilePicture}`)
yearElement.innerHTML = (`${currentYear}`);
imageElement.setAttribute('alt', `${fullName}`);

/* Step 5 - Array */

let favoriteFoods = ['Pizza', 'Sushi', 'Chocolate', 'Burgers', 'PaneerTikka', 'PaniPuri'];
foodElement.innerHTML += `<br>${favoriteFoods}`;
const singleFavoriteFood = 'Ice Cream';
favoriteFoods.push(singleFavoriteFood);

foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;