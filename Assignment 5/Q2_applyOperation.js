// File: applyOperation.js

// Function that accepts an array and a callback operation
function applyOperation(numbers, operationCallback) {
    let result = [];
    for (let num of numbers) {
        result.push(operationCallback(num));   // apply callback
    }
    return result;
}

// Callback function to double a number
function doubleNumber(n) {
    return n * 2;
}

// Callback function to square a number
function squareNumber(n) {
    return n * n;
}

// Given array
const numbers = [1, 2, 3, 4];

// Applying operations
console.log("Doubled:", applyOperation(numbers, doubleNumber));
console.log("Squared:", applyOperation(numbers, squareNumber));
