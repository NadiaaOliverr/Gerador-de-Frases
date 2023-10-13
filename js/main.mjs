import quotes from '../db/frases.js';

console.log(quotes);

const quoteBtn = document.querySelector("#quoteBtn");
const quoteText = document.querySelector(".text");
const quoteAuthor = document.querySelector(".author");
const quoteCitation = document.querySelector("span");
const body = document.querySelector("body");


function getQuote(){
    const index = Math.floor(Math.random() * quotes.length);
    const quote = quotes[index].quote;

    quoteText.innerHTML = '';

    const quoteLeftIcon = document.createElement("i");
    quoteLeftIcon.className = "fa-solid fa-quote-left";
    quoteText.appendChild(quoteLeftIcon);
    
    const spanQuote = document.createElement("span");
    spanQuote.textContent = quote;
    spanQuote.style = "padding: 5px";
    quoteText.appendChild(spanQuote);
    
    const quoteRightIcon = document.createElement("i");
    quoteRightIcon.className = "fa-solid fa-quote-right";
    quoteText.appendChild(quoteRightIcon);

    quoteAuthor.textContent = " " + quotes[index].author + " ";
}

function generateColor(){
  
  let colors = []
  let color;

  for (let i = 0; i < 6; i++) {
    color = Math.floor(Math.random() * 10)
    colors.push(color);
  }

 return colors.map(String).join('');

}

function changeBackgroundColor(){

    body.style = `background-image: linear-gradient(to top right, #${generateColor()} 10%, #${generateColor()})`;

}

quoteBtn.addEventListener('click', getQuote);
quoteBtn.addEventListener('click', changeBackgroundColor);