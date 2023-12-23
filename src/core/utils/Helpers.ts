const getLocal = (currency: string) => {
  const currencyValue = currency.toUpperCase()
  switch (currencyValue) {
    case 'USD':
      return 'en-US'
    case 'EUR':
      return 'eu-EU'
    case 'RUR':
      return 'ru-RU'
    case 'BYR':
      return 'by-BY'
    default:
      return 'ru-RU'
  }
}
export const formatPriceCurrency = (currency: string, price: number = 0) => {
  const localeValue = getLocal(currency)

  return new Intl.NumberFormat(localeValue, {
    style: 'currency',
    currency: currency,
  }).format(price)
}
