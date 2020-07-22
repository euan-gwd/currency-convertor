import React from 'react'
import './resultstyle.css'

type Props = {
  results: []
  selectedCurrency: {
    label: string
    value: string
    icon: string
  }
}

type resultProps = {
  label: string
  value: string
  icon: string
}

export default function Result({ results, selectedCurrency }: Props) {
  const displayResults = results.filter((result: resultProps) => result.label !== selectedCurrency.value)
  return (
    <div className="result-container">
      <p className="result-header">{`Result:`}</p>
      <ul className="result-list">
        {displayResults.map((result: resultProps) => (
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
