let numberCard = "4561-2612-1234-5464";
function validateCardNumber(cardNumber) {
    let cleanedCardNumber = cardNumber.replace(/-/g, "");
    let sum = 0;
    if (cleanedCardNumber.length !== 16) {
        return false;
    } else for (let i = 0; i < cleanedCardNumber.length; i++) {
        let digit = Number(cleanedCardNumber[i]);
        if (i % 2 === cleanedCardNumber.length % 2) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
    }
    return sum % 10 === 0;
}
console.log(validateCardNumber(numberCard))