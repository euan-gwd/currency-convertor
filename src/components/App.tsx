import React from 'react'

import CurrencySelect from './CurrencySelect/CurrencySelect'
import CurrencyAmount from './CurrencyAmount/CurrencyAmount'
import Result from './Result/Result'

import { FetchData } from '../utils/FetchData'

import 'flag-icon-css/css/flag-icon.min.css'
import './App.css'

function App() {
  const [selectedCurrency, setSelectedCurrency] = React.useState({ value: 'GBP', label: 'GBP', icon: 'gb' })
  const [amount, setAmount] = React.useState(1)
  const [results, setResults] = React.useState([])

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const base = selectedCurrency.value
    console.log('handleSubmit -> base', base)
    FetchData(base, setResults)
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit} className="form">
        <div className="container">
          <CurrencySelect selectedCurrency={selectedCurrency} handleOnChange={setSelectedCurrency} />
          <CurrencyAmount amount={amount} handleOnChange={setAmount} />
          <Result results={results} />
        </div>
      </form>
    </div>
  )
}

export default App
