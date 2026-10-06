// GongCodes Calculator
// Brought to you by GongCodes

// Stores successful calculations
const history = [];

// Add two numbers
function add(a, b) {
    const result = a + b;

    history.push({
        operation: "add",
        operands: [a, b],
        result: result
    });

    return result;
}

// Subtract the second number from the first
function subtract(a, b) {
    const result = a - b;

    history.push({
        operation: "subtract",
        operands: [a, b],
        result: result
    });

    return result;
}

// Multiply the two numbers
function multiply(a, b) {
    const result = a * b;

    history.push({
        operation: "multiply",
        operands: [a, b],
        result: result
    });

    return result;
}

// Checks for division by zero and returns an error message if attempted
function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }

    const result = a / b;

    history.push({
        operation: "divide",
        operands: [a, b],
        result: result
    });

    return result;
}

function displayHistory() {
    console.log(history);
}

console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));

// Display all stored calculations
displayHistory();