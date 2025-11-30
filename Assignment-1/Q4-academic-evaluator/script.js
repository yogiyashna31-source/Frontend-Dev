// Q4 - Academic Performance Evaluator
// This program checks student promotion status based on subject marks.

// Step 1: Input marks of 5 subjects (use an array)
let marks = [85, 78, 92, 80, 88];  
// Example: You can change values anytime

// Step 2: Validation – if any subject < 35 → Detained
let detained = marks.some(mark => mark < 35);

// Step 3: Calculate total and percentage
let total = marks.reduce((sum, value) => sum + value, 0);
let average = total / marks.length;
let percentage = (total / 500) * 100;   // Since 5 subjects, each out of 100

// Step 4: Determine result using logical operators
let result = "";

if (detained) {
    result = "Detained (Failed in one or more subjects)";
} 
else if (percentage >= 85) {
    result = "Promoted with Distinction";
} 
else if (percentage >= 50 && percentage < 85) {
    result = "Promoted";
} 
else {
    result = "Detained";
}

// Step 5: Display Output
console.log("Academic Performance Report");
console.log("---------------------------");
console.log("Marks:", marks);
console.log("Average Marks:", average.toFixed(2));
console.log("Percentage:", percentage.toFixed(2) + "%");
console.log("Result:", result);
