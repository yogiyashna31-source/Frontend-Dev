
// Array of expenses for 5 categories
let expenses = [5000, 1200, 8000, 1500, 2000]; 
// food, travel, rent, bills, leisure

// Calculate total using addition operators
let total = expenses[0] + expenses[1] + expenses[2] + expenses[3] + expenses[4];

// Calculate average
let average = total / expenses.length;

// Add 10% tax using assignment operator
let finalAmount = total;
finalAmount += finalAmount * 0.10; // Add 10%

// Round values using toFixed(2)
total = total.toFixed(2);
average = average.toFixed(2);
finalAmount = finalAmount.toFixed(2);

// Display results
console.log("Monthly Expense Report");
console.log("-----------------------");
console.log("Total Expense: ₹" + total);
console.log("Average Expense: ₹" + average);
console.log("Final Amount (after 10% tax): ₹" + finalAmount);
