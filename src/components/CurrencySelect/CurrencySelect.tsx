import React from 'react'
import Select, { components } from 'react-select'
import 'flag-icon-css/css/flag-icon.min.css'
import './currencyselectstyle.css'

const { Option } = components
const options = [
  { value: 'EUR', label: 'EUR', icon: 'eu' },
  { value: 'GBP', label: 'GBP', icon: 'gb' },
  { value: 'USD', label: 'USD', icon: 'us' },
  { value: 'CAD', label: 'CAD', icon: 'ca' },
  { value: 'HKD', label: 'HKD', icon: 'hk' },
  { value: 'ISK', label: 'ISK', icon: 'is' },
  { value: 'PHP', label: 'PHP', icon: 'ph' },
  { value: 'DKK', label: 'DKK', icon: 'dk' },
  { value: 'HUF', label: 'HUF', icon: 'hu' },
  { value: 'CZK', label: 'CZK', icon: 'cz' },
  { value: 'AUD', label: 'AUD', icon: 'au' },
  { value: 'RON', label: 'RON', icon: 'ro' },
  { value: 'SEK', label: 'SEK', icon: 'se' },
  { value: 'IDR', label: 'IDR', icon: 'id' },
  { value: 'INR', label: 'INR', icon: 'in' },
  { value: 'BRL', label: 'BRL', icon: 'br' },
  { value: 'RUB', label: 'RUB', icon: 'ru' },
  { value: 'HRK', label: 'HRK', icon: 'hr' },
  { value: 'JPY', label: 'JPY', icon: 'jp' },
  { value: 'THB', label: 'THB', icon: 'th' },
  { value: 'CHF', label: 'CHF', icon: 'ch' },
  { value: 'SGD', label: 'SGD', icon: 'sg' },
  { value: 'PLN', label: 'PLN', icon: 'pl' },
  { value: 'BGN', label: 'BGN', icon: 'bg' },
  { value: 'TRY', label: 'TRY', icon: 'tr' },
  { value: 'CNY', label: 'CNY', icon: 'cn' },
  { value: 'NOK', label: 'NOK', icon: 'no' },
  { value: 'NZD', label: 'NZD', icon: 'nz' },
  { value: 'MXN', label: 'MXN', icon: 'mx' },
  { value: 'ILS', label: 'ILS', icon: 'il' },
  { value: 'KRW', label: 'KRW', icon: 'kr' },
  { value: 'MYR', label: 'MYR', icon: 'my' },
  { value: 'ZAR', label: 'ZAR', icon: 'za' },
]

const CustomSelectOption = (props) => (
  <Option {...props}>
    <i className={`flag-icon flag-icon-${props.data.icon} option-icon`} />
    {props.data.label}
  </Option>
)

const CustomSelectValue = (props) => (
  <div>
    <i className={`flag-icon flag-icon-${props.data.icon} option-icon`} />
    {props.data.label}
  </div>
)

export default function CurrencySelect(props) {
  return (
    <div className="currency-select-container">
      <label htmlFor="baseCurrency" className="currency-select-label">{`My currency:`}</label>
      <Select
        name="baseCurrency"
        placeholder="Please select a currency..."
        options={options}
        components={{ Option: CustomSelectOption, SingleValue: CustomSelectValue }}
        className="currency-select"
        value={props.currency}
        onChange={props.handleOnChange}
      />
    </div>
  )
}
