import { useState } from 'react'
import './App.css'


const quotes = [
  {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    author: 'Nelson Mandela'
  },
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney'
  },
  {
    quote: 'The future belongs to those who believe in the beauty of their dreams.',
    author: 'Eleanor Roosevelt'
  },
  {
    quote: 'You must be the change you wish to see in the world.',
    author: 'Mahatma Gandhi'
  },
  {
    quote: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
    author: 'Mother Theresa'
  },
  {
    quote: 'The only thing we have to fear is fear itself.',
    author: 'Franklin D. Roosevelt'
  },
  {
    quote: 'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.',
    author: 'Martin Luther King Jr.'
  }
];



function getRandomIndex() {
  return (
    Math.floor(Math.random() * quotes.length)
  );
};

function handleLoad() {
  const randomIndex = getRandomIndex();
  return (
    {
      quote: quotes[randomIndex].quote,
      author: quotes[randomIndex].author
    }
  )
}

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  return (
    <>
      <div id="quote-box" onLoad={this.handleLoad} style={styles.quoteBox}>
        <div id="text" style={styles.text}>{`"${this.state.quote}"`}</div>
        <div id="author" style={styles.author}>- {this.state.author}</div>
        <button id="new-quote" onClick={this.handleLoad} style={styles.button}>New Quote</button>
        <a href={`https://x.com/intent/post?text=${this.state.quote}${` `}-${this.state.author}`} id="tweet-quote" target="_blank" style={styles.tweetLink}>
          Tweet this Quote
        </a>
      </div>
    </>
  )
}

export default App
