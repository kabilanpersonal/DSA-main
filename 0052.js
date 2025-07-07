let cardNumber = "1234567812345678";

// Mask all but last 4 digits
let masked = cardNumber.slice(0, -4).replace(/./g, "*") + cardNumber.slice(-4);

console.log(masked); // ************5678
