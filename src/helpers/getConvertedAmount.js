export const getConvertedAmount = (rates, amount, fromCurrencyCode, toCurrencyCode) => {
  if (rates.length === 0) {
    return 0;
  }
  
  const fromCurrencyRate = rates.find((rate) => rate.code === fromCurrencyCode);
  const toCurrencyRate = rates.find((rate) => rate.code === toCurrencyCode);
  
  if (fromCurrencyRate.price < toCurrencyRate.price) {
    return amount / toCurrencyRate.price
  }

  return amount * fromCurrencyRate.price
};