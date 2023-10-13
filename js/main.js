const quotes = [
    {
      quote: "A persistência é o caminho do êxito.",
      author: "Charles Chaplin",
    },
    {
      quote: "A única forma de fazer um grande trabalho é amar o que se faz.",
      author: "Steve Jobs",
    },
    {
      quote: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
      author: "Robert Collier",
    },
    {
      quote:
        "O fracasso é a oportunidade de começar de novo, com mais experiência.",
      author: "Henry Ford",
    },
    {
      quote: "Não espere por oportunidades, crie você mesmo as suas.",
      author: "Autor desconhecido",
    },
    {
      quote:
        "O verdadeiro sucesso não é o sucesso financeiro, mas sim o sucesso em ajudar outras pessoas.",
      author: "Zig Ziglar",
    },
    {
      quote:
        "O sucesso não é final, o fracasso não é fatal: o que importa é ter coragem para continuar.",
      author: "Winston Churchill",
    },
    {
      quote:
        "O sucesso consiste em ir de fracasso em fracasso sem perder o entusiasmo.",
      author: "Winston Churchill",
    },
    {
      quote: "Acredite em si próprio e todo o resto virá naturalmente.",
      author: "Elon Musk",
    },
    {
      quote:
        "O fracasso não significa que você não seja bom o suficiente, significa que você precisa se esforçar mais.",
      author: "Autor desconhecido",
    },
  ];

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