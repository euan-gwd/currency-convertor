import React from 'react'
import './resultstyle.css'

type ResultProps = {
  results: []
  selectedCurrency: {
    label: string
    value: string
    icon: string
  }
}

type ResultObjectProps = {
  label: string
  value: string
  icon: string
}

export default function Result({ results, selectedCurrency }: ResultProps) {
  const displayResults = results.filter((result: ResultObjectProps) => result.label !== selectedCurrency.value)
  return (
    <div className="result-container">
      <p className="result-header">{`Result:`}</p>
      <ul className="result-list">
        {displayResults.map((result: ResultObjectProps) => (
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
