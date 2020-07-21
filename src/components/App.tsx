import React from 'react'
import CurrencySelect from './CurrencySelect/CurrencySelect'
import CurrencyAmount from './CurrencyAmount/CurrencyAmount'
import Result from './Result/Result'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="container">
        <CurrencySelect />
        <CurrencyAmount />
        <Result />
      </div>
    </div>
  )
}

export default App
