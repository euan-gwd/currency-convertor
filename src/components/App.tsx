import React from 'react'
import CurrencySelect from './CurrencySelect/CurrencySelect'
import CurrencyAmount from './CurrencyAmount/CurrencyAmount'
import Result from './Result/Result'
import './App.css'

function App() {
  const [defaultCurrency, setDefaultCurrency] = React.useState({ value: 'GBP', label: 'GBP', icon: 'gb' })
  const [amount, setAmount] = React.useState(1)
  const [results, setResults] = React.useState([])

  const handleSubmit = (evt) => {
    evt.preventDefault()
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit} className="container">
        <CurrencySelect currency={defaultCurrency} handleOnChange={setDefaultCurrency} />
        <CurrencyAmount amount={amount} handleOnChange={setAmount} />
        <Result />
      </form>
    </div>
  )
}

export default App
