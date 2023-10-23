const CurrencyResult = ({ fromCurrency, toCurrency, amount, result }) => {
    return (
        <div id="result">
            {amount} {fromCurrency} = {result !== null ? result : '...'} {toCurrency}
        </div>
    )
    
};

export default CurrencyResult;