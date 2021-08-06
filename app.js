"strict mode";
const quote = document.getElementById("demo");
const btnId = document.getElementById("btn");
const author = document.getElementById("author");
const randomImg = document.querySelector(".img");

let bodyBg = document.body;

const bgColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const gFonts = [
  "Poppins",
  "Roboto",
  "Bodoni Moda",
  "Indie Flower",
  "Lobster",
  "WindSong",
];

const quotes = [
  {
    author: "Nelson Mandela",
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  },
  {
    author: "Walt Disney",
    quote: "The way to get started is to quit talking and begin doing.",
  },
  {
    author: "Eleanor Roosevelt",
    quote:
      "If life were predictable it would cease to be life, and be without flavor.",
  },
  {
    author: "Oprah Winfrey",
    quote:
      "If you look at what you have in life, you’ll always have more. If you look at what you don't have in life, you'll never have enough.",
  },
  {
    author: "James Cameron",
    quote:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
  },
  {
    author: "John Lennon",
    quote: "”Life is what happens when you’re busy making other plans.”",
  },
];

btnId.addEventListener("click", () => {
  let index = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[index].quote;
  let rnadomAuthor = quotes[index].author;
  quote.innerHTML = randomQuote;
  author.innerHTML = rnadomAuthor;
  randomColors();
});

function randomColors(colors) {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * bgColor.length); //1-15
    color += bgColor[randomNum];
    document.body.style.backgroundColor = color;
    document.body.style.transition = ".3s ease .5s";
    btnId.style.background = color;
    btnId.style.transition = ".3s ease .5s";
    quote.style.color = color;
  }
}
btnId.addEventListener("click", () => {
  var timestamp = new Date().getTime();
  let index = Math.floor(Math.random() * gFonts.length);
  let randomFonts = gFonts[index];
  quote.style.fontFamily = randomFonts;
  author.style.fontFamily = randomFonts;
  randomImg.src = "https://source.unsplash.com/1600x900/?nature=" + timestamp;
});
