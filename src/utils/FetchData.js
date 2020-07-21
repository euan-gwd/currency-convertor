import axios from 'axios'
const API = `https://api.exchangeratesapi.io/latest?base=`

const mockResults = {
  AUD: 1.7937926822,
  BGN: 2.1717839098,
  BRL: 6.7087890733,
  CAD: 1.7099550275,
  CHF: 1.1926045195,
  CNY: 8.8814613292,
  CZK: 29.3476208983,
  DKK: 8.2670590195,
  EUR: 1.1104325135,
  GBP: 1,
  HKD: 9.8499805674,
  HRK: 8.3615568264,
  HUF: 389.362056521,
  IDR: 18688.579201599,
  ILS: 4.3531175393,
  INR: 94.8092832158,
  ISK: 176.8918993948,
  JPY: 136.250069402,
  KRW: 1519.0272611182,
  MXN: 28.4170784521,
  MYR: 5.4149131087,
  NOK: 11.6521014935,
  NZD: 1.9216034645,
  PHP: 62.6894675476,
  PLN: 4.9261007162,
  RON: 5.3736050192,
  RUB: 90.037532619,
  SEK: 11.3697185054,
  SGD: 1.7645883071,
  THB: 40.1909943923,
  TRY: 8.7023485648,
  USD: 1.2706679252,
  ZAR: 20.9656321137,
}

export async function FetchData(base, updateResults) {
  // const response = await axios.get(`${API}${base}`)
  const response = mockResults
  const resultsArr = []
  for (const [key, value] of Object.entries(response)) {
    const icon = key.toLowerCase().slice(0, 2)
    const newItem = { value: Number.parseFloat(value).toFixed(3), label: key, icon: icon }
    resultsArr.push(newItem)
  }
  updateResults(resultsArr)
}
