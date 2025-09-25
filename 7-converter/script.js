

function convertCurrency(amount, fromCurrency, toCurrency) {
    const exchangeRates = {
        $: { EUR: 0.85, руб: 74.57 },
        EUR: { $: 1.18, руб: 87.56 },
        руб: { $: 0.013, EUR: 0.011 }
    };
    if (exchangeRates[fromCurrency][toCurrency]) {
        return amount * exchangeRates[fromCurrency][toCurrency];
    } else { if (fromCurrency === toCurrency){
        return amount;
    } else
        return null;
    }
};

alert(convertCurrency(1000, "руб", "$"));
