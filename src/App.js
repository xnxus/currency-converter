import React from 'react'; 
import { CurrencyConverter, CurrencyHeader } from './components';

function App() {
  return (
    <div className="App">
      <CurrencyHeader/>
      <CurrencyConverter/>
    </div>
  );
}

export default App;
