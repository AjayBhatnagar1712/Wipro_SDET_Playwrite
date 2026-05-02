const getHighNumbers = (values) => {
    const threshold = Math.floor(Math.random() * 50) + 1;

    return values
        .filter(value => typeof value === "number")
        .filter(number => number > threshold);
};

const mixedValues = [10, "hello", 25, "30", 55, 3, "world", 48, 70];
console.log(getHighNumbers(mixedValues));
