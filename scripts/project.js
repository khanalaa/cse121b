const api_link = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const ratingContainer = document.getElementById("rating-container"); 

async function getquote(url){
    const response = await fetch(url);
    const data = await response.json();

    quote.innerHTML = data.content;
    author.innerHTML = data.author;

    ratingContainer.innerHTML = "";
    displayRatingOptions();
}

function thread() {
    if (quote.innerHTML) {
        window.open("https://threads.net/intent/post?text=" + '"' + quote.innerHTML + "\" ---- By " + author.innerHTML);
    } else {
        console.error("No quote available.");
    }
}

function displayRatingOptions() {
    const ratings = [1, 2, 3, 4, 5];

    ratings.forEach((rating) => {
        const ratingButton = document.createElement("button");
        ratingButton.innerText = rating;
        ratingButton.addEventListener("click", () => rateQuote(rating));
        ratingContainer.appendChild(ratingButton);
    });
}

function rateQuote(rating) {
    showThankYouMessage();
}

function showThankYouMessage() {
    const thankYouMessage = document.createElement("Ratings");
    thankYouMessage.innerText = "Thank you for your rating!";
    ratingContainer.innerHTML = ""; 
    ratingContainer.appendChild(thankYouMessage);
}

getquote(api_link);
displayRatingOptions();
