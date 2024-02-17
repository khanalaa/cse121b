
const api_link = "https://api.quotable.io/random"
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getquote(url){
    const response = await fetch(url);
    const data = await response.json();

    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getquote(api_link)

function thread(){
    window.open("https://threads.net/intent/post?text=" + '"' +quote.innerHTML+ "\" ---- By " + author.innerHTML)
} 