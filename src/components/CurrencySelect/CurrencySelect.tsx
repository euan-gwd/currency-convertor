import React from 'react'
import Select, { components } from 'react-select'
import 'flag-icon-css/css/flag-icon.min.css'
import './currencyselectstyle.css'

const { Option } = components
const options = [
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
  { value: 'ZAR', label: 'ZAR', icon: 'za' },
  { value: 'USD', label: 'USD', icon: 'us' },
  { value: 'MXN', label: 'MXN', icon: 'mx' },
  { value: 'ILS', label: 'ILS', icon: 'il' },
  { value: 'GBP', label: 'GBP', icon: 'gb' },
  { value: 'KRW', label: 'KRW', icon: 'kr' },
  { value: 'MYR', label: 'MYR', icon: 'my' },
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

export default function CurrencySelect() {
  return (
    <label htmlFor="baseCurrency">
      My currency
      <Select
        name="baseCurrency"
        placeholder="Please select a currency..."
        options={options}
        components={{ Option: CustomSelectOption, SingleValue: CustomSelectValue }}
      />
    </label>
  )
}
