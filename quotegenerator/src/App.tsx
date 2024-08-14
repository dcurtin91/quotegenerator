import { useState } from 'react'
import './App.css'
import quotes from './assets/quotes.json'
  

interface Quote {
  quote: string;
  author: string;
}




const getRandomIndex = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};



function App() {
  const [quote, setQuote] = useState<Quote>(getRandomIndex());
 
  const changeQuote = () => {
    setQuote(getRandomIndex());
  }

  return (
    <>
      <div id="quote-box">
        <div id="text">{quote.quote}</div>
        <div id="author">- {quote.author}</div>
        <button id="new-quote" onClick={changeQuote}>New Quote</button>
        <a href={`https://x.com/intent/post?text=${quote.quote}${` `}-${quote.author}`} id="tweet-quote" target="_blank" className='tweet-link'>
          Tweet this Quote
        </a>
      </div>
    </>
  )
  
}



export default App
