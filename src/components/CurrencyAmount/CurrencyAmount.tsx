import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import * as yup from 'yup'

import './currencyamountstyle.css'

type CurrencyAmountProps = {
  amount: number
  calculateResult: (data: number) => void
}

type FormInputs = {
  amount: number
}

const schema = yup.object().shape({
  amount: yup.number().typeError('Amount must be a number').positive().required(),
})

export default function CurrencyAmount({ amount, calculateResult }: CurrencyAmountProps) {
  const { register, handleSubmit, errors } = useForm<FormInputs>({ resolver: yupResolver(schema) })
  const onSubmit = (data: FormInputs) => calculateResult(data.amount)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="currency-amount-container">
        <label htmlFor="amount" className="currency-amount-label">{`Amount:`}</label>
        <div className="currency-amount-input">
          <input name="amount" defaultValue={amount} className="currency-amount-input-value" ref={register} />
          <div className="currency-amount-input-action">
            <input type="submit" value="Submit" />
          </div>
        </div>
      </div>
      <p className="currency-amount-input-error">{errors.amount?.message}</p>
    </form>
  )
}
