import axios from 'axios'
// import { mockResults } from './mockResponse'
const API = `https://api.exchangeratesapi.io/latest?base=`

export async function FetchData(selectedCurrency, updateResults) {
  const base = selectedCurrency.value
  const response = await axios.get(`${API}${base}`)
  const results = response.data.rates
  // const results = mockResults.data.rates
  const resultsArr = []
  for (const [key, value] of Object.entries(results)) {
    const icon = key.toLowerCase().slice(0, 2)
    const newItem = { value: Number.parseFloat(value).toFixed(3), label: key, icon: icon }
    resultsArr.push(newItem)
  }

  updateResults(resultsArr)
}
