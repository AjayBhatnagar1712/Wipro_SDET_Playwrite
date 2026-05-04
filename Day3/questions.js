// Level 1: The Warm-up

// 1. Logging Names
const names = ["Alice", "Bob", "Charlie"];

names.forEach(name => {
    console.log(`Hello, ${name}`);
});

// 2. Temperature Conversion
const celsiusTemperatures = [0, 10, 20, 30];
const fahrenheitTemperatures = celsiusTemperatures.map(celsius => celsius * 1.8 + 32);

console.log("Fahrenheit Temperatures:", fahrenheitTemperatures);


// Level 2: Data Filtering

// 3. Finding Adults
const users = [
    { name: "Li", age: 16 },
    { name: "Dan", age: 22 },
    { name: "Sarah", age: 17 }
];

const adults = users.filter(user => user.age >= 18);
console.log("Adults:", adults);

// 4. String Lengths
const getLongStrings = (strings) => {
    return strings.filter(string => string.length > 5);
};

console.log("Long Strings:", getLongStrings(["apple", "banana", "orange", "grape"]));


// Level 3: The Power of Reduce

// 5. Total Cost
const prices = [19.99, 5.50, 3.99, 25.00];
const totalCost = prices.reduce((total, price) => total + price, 0);

console.log(`Total Cost: $${totalCost.toFixed(2)}`);

// 6. Counting Occurrences
const fruits = ["apple", "banana", "orange", "apple", "grape", "apple"];
const appleCount = fruits.reduce((count, fruit) => {
    return fruit === "apple" ? count + 1 : count;
}, 0);

console.log("Apple Count:", appleCount);


// Level 4: Advanced Scenarios

// 7. Array Transformation
const numbers = [1, 2, 3, 4, 5, 6];
const squaredEvenNumbers = numbers
    .filter(number => number % 2 === 0)
    .map(number => number * number);

console.log("Squared Even Numbers:", squaredEvenNumbers);

// 8. Object Extraction
const products = [
    { id: 1, title: "Laptop" },
    { id: 2, title: "Mouse" }
];

const productTitles = products.map(product => product.title);
console.log("Product Titles:", productTitles);


// Level 5: Logic Challenges

// 9. The Average
const scores = [80, 90, 70, 100];
const totalScore = scores.reduce((total, score) => total + score, 0);
const averageScore = totalScore / scores.length;

console.log("Average Score:", averageScore);

// 10. Flattening (The Bonus)
const nestedNumbers = [[1, 2], [3, 4], [5, 6]];
const flatNumbers = nestedNumbers.reduce((flatArray, currentArray) => {
    return flatArray.concat(currentArray);
}, []);

console.log("Flat Numbers:", flatNumbers);
