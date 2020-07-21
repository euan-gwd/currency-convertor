import React from 'react'
import './currencyamountstyle.css'

export default function CurrencyAmount() {
  return (
    <div className="currency-amount-container">
      <label htmlFor="currencyAmount" className="currency-amount-label">{`Amount:`}</label>
      <input name="currencyAmount" value={1} className="currency-amount-input" />
    </div>
  )
}
