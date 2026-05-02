let prices = ["120", "250", "80", "50"];

prices.splice(prices.length - 1, 1);

const numberPrices = prices.map(price => Number(price));
const sumPrices = (total, price) => total + price;
const totalPrice = numberPrices.reduce(sumPrices, 0);

console.log(`Total Price: $${totalPrice}`);
