import React, { useState, useEffect } from 'react';
import useGetCurrency from '../hooks/useGetCurrency';
import { getConvertedAmount } from '../helpers/getConvertedAmount';
import CurrencyResult from './CurrencyResult';

export const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('UAH');
  const [result, setResult] = useState(null);

  const { currencyRates } = useGetCurrency();

  useEffect(() => {
    setResult(getConvertedAmount(currencyRates, amount, fromCurrency, toCurrency));
  }, [amount, currencyRates, fromCurrency, toCurrency]);

  return (
    <div className="currency-converter">
      <div className="currency_input">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min='1'
          step='1'
        />
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          {currencyRates.map( (rate) => <option value={rate.code} key={rate.code}>{rate.code}</option> )}
        </select>
      </div>
      <div className="currency_input">
        <input
          type="number"
          value={result !== null ? result : '...'}
          disabled
        />
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          {currencyRates.map( (rate) => <option value={rate.code} key={rate.code}>{rate.code}</option> )}
        </select>
      </div>
      <CurrencyResult fromCurrency={fromCurrency} toCurrency={toCurrency} amount={amount} result={result}/>
    </div>
  );
}
