

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

alert(convertCurrency(1000, "RUB", "USD"));
