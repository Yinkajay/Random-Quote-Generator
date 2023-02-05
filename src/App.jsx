import { useState } from 'react'
import './App.css'
import QuoteCard from './QuoteCard'

const quotesList = [
  'Yes you can',
  'The sky is the limit',
  "Impossible doesn't exist",
  'Believe in yourself'
]

function App() {
  const [quote, setQuote] = useState('Click the button to generate a quote')
  const [hasFetchedQuote, setHasFetchedQuote] = useState(false)

  function fetchQuoteHandler() {
    let randomQuoteIndex = Math.round((Math.random() * 3))
    console.log(randomQuoteIndex)
    setQuote(quotesList[randomQuoteIndex])
  }

  function fetchQuote() {
    fetch('https://quotes15.p.rapidapi.com/quotes/random/', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0595990c59msh29b635774afe3d4p15d893jsn4de1cd9544ec',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
      }
    }).then(response => response.json())
      .then(data => {
        console.log(data)
        let transformedQuote = [data].map(quote => {
          return {
            id: quote.id,
            quoteText: quote.content,
            quoteAuthor: quote.originator.name
          }
        })
        setQuote(transformedQuote)
        setHasFetchedQuote(true)
        console.log(quote)
      })
  }


  return (
    <div className="App">
      <h1>Stay Motivated!</h1>
      {!hasFetchedQuote && quote}
      {hasFetchedQuote && quote.map(quote => (
        <QuoteCard quoteText={quote.quoteText} quoteAuthor={quote.quoteAuthor} key={quote.id}/>
      ))}
      <button onClick={fetchQuote}>Get a quote</button>
    </div>

  )
}

export default App
