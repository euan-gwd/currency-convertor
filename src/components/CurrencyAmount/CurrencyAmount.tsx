import React from 'react'
import './currencyamountstyle.css'

export default function CurrencyAmount(props) {
  return (
    <div className="currency-amount-container">
      <label htmlFor="currencyAmount" className="currency-amount-label">{`Amount:`}</label>
      <div className="currency-amount-input">
        <input
          name="currencyAmount"
          type="number"
          value={props.amount}
          className="currency-amount-input-value"
          onChange={(e) => props.handleOnChange(e.target.value)}
        />
        <div className="currency-amount-input-action">
          <input type="submit" value="Submit" />
        </div>
      </div>
    </div>
  )
}
