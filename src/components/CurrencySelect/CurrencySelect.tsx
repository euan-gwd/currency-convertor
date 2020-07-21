import React from 'react'
import Select, { components } from 'react-select'
import { selectOptions } from './options'
import 'flag-icon-css/css/flag-icon.min.css'
import './currencyselectstyle.css'

const { Option } = components

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
        options={selectOptions}
        components={{ Option: CustomSelectOption, SingleValue: CustomSelectValue }}
        className="currency-select"
        value={props.selectedCurrency}
        onChange={props.handleOnChange}
      />
    </div>
  )
}
