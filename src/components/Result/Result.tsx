import React from 'react'
import './resultstyle.css'

export default function Result({ results, selectedCurrency }) {
  const displayResults = results.filter((result) => result.label !== selectedCurrency.value)
  return (
    <div className="result-container">
      <p className="result-header">{`Result:`}</p>
      <ul className="result-list">
        {displayResults.map((result) => (
          <li key={result.label} className="result-line-item">
            <i className={`flag-icon flag-icon-${result.icon} result-icon`} />
            <p className="result-text">
              {`${result.label}: `} <span>{result.value}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
