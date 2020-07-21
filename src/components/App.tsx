import React from 'react'
import CurrencySelect from './CurrencySelect/CurrencySelect'
import CurrencyAmount from './CurrencyAmount/CurrencyAmount'
import Result from './Result/Result'
import './App.css'

function App() {
  const [selectedCurrency, setSelectedCurrency] = React.useState({ value: 'GBP', label: 'GBP', icon: 'gb' })
  const [amount, setAmount] = React.useState(1)
  const [results, setResults] = React.useState([])

  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log('handleSubmit -> selectedCurrency ', selectedCurrency)
    console.log('handleSubmit -> amount ', amount)
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit} className="container">
        <CurrencySelect selectedCurrency={selectedCurrency} handleOnChange={setSelectedCurrency} />
        <CurrencyAmount amount={amount} handleOnChange={setAmount} />
        <Result />
      </form>
    </div>
  )
}

export default App
