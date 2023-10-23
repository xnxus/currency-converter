import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetCurrency = () => {
  const [currencyRates, setCurrencyRates] = useState([]);

  useEffect(() => {

    axios.get(`https://64a7e8d7dca581464b84fbcd.mockapi.io/items`)
      .then(response => {
        const rates = response.data;
        setCurrencyRates(rates);
      })
      .catch(error => {
        console.error('Помилка при отриманні курсів валют:', error);
      });
  }, []); 
  return { currencyRates };
};

export default useGetCurrency;
