function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

function formatCurrency(formater) {
    return function (value) {
        return formater(',', '$', true, value);
    }
}

let dollarCurrency = formatCurrency(currencyFormatter);
console.log(dollarCurrency(100));;