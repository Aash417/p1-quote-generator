const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// let apiQuotes = [];

// Show loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}
// Hide loading
function conmplete() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

// Show new Quote
function newQuote() {
//   loading();
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

  // check if author feild is blank and replace it with quote unknown
  !quote.author
    ? (authorText.textContent = 'Unknown')
    : (authorText.textContent = quote.author);

  quoteText.textContent = quote.text;

  // quote styling
  quote.text.length > 10
    ? quoteText.classList.add('long-quote')
    : quoteText.classList.remove('long-quote');

//   conmplete();
//   console.log(quote);
}

// Get Quotes from api
/*
async function getQuotes() {
	const apiURL = "https://type.fit/api/quotes";

	try {
		const response = await fetch(apiURL);
		apiQuotes = await response.json();
		console.log(apiQuotes);

		newQuote();
	} catch (error) {
		// handle error
	}
}
*/

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
}

// Event listenr
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On load
// getQuotes();

newQuote();
