let inputSum = prompt("Введите сумму в :");
let inputCurrency = prompt("Введите валюту из которой хотите конвертировать (USD, EUR, RUB):");
let outputCurrency = prompt("Введите валюту в которую хотите конвертировать (USD, EUR, RUB):");

function convertCurrency(amount, fromCurrency, toCurrency) {
    const exchangeRates = {
        USD: { EUR: 0.85, RUB: 74.57 },
        EUR: { USD: 1.18, RUB: 87.56 },
        RUB: { USD: 0.013, EUR: 0.011 }
    };
    if (exchangeRates[fromCurrency][toCurrency]) {
        return amount * exchangeRates[fromCurrency][toCurrency];
    } else {
        return null;
    }
};

alert(convertCurrency(inputSum, inputCurrency, outputCurrency));
