const text = document.querySelector('#text > q');
const wrapper = document.getElementById('wrapper');
const author = document.getElementById('author');
const quoteAuthor = document.querySelector('.quote-author');
const newQuote = document.getElementById('new-quote');
const tweetQuote = document.getElementById('tweet-quote');
const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857',
];

async function fetchData() {
  const api = await fetch(
    'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
  );
  try {
    const response = await api.json();
    const data = response.quotes;
    const quote = data[Math.floor(Math.random() * data.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    wrapper.style.background = color;
    text.style.color = color;
    text.innerHTML = quote.quote;
    author.innerHTML = quote.author;
    tweetQuote.style.background = color;
    newQuote.style.background = color;
    quoteAuthor.style.color = color;

    tweetQuote.addEventListener('click', () => {
      tweetQuote.setAttribute(
        'href',
        'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
          encodeURIComponent('"' + text.innerHTML + '" ' + author.innerHTML)
      );
    });
  } catch (err) {
    console.log(err);
  }
}
fetchData();

newQuote.addEventListener('click', () => {
  fetchData();
});
