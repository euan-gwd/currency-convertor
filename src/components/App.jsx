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

  const calculateCurrencyExchange = (newAmount) => {
    if (amount !== newAmount) {
      setAmount(newAmount)
      const resultsClone = [...results]
      const updatedResults = resultsClone.map((result) => {
        const value = Number.parseFloat(result.value)
        const newValue = (value * newAmount).toFixed(3)
        result.value = newValue
        return result
      })
      setResults(updatedResults)
    }
  }

  React.useEffect(() => {
    FetchData(selectedCurrency, setResults)
  }, [selectedCurrency])

  return (
    <div className="app">
      <div className="form">
        <div className="container">
          <CurrencySelect selectedCurrency={selectedCurrency} handleOnChange={setSelectedCurrency} />
          <CurrencyAmount amount={amount} calculateResult={calculateCurrencyExchange} />
          {results.length > 0 && <Result results={results} selectedCurrency={selectedCurrency} />}
        </div>
      </div>
    </div>
  )
}

export default App
