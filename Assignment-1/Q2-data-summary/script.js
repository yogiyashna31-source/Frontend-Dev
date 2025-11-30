// Q2 - Multi-Type Data Summary
// This program simulates different types of data and displays them in a formatted console table.

// Declaring variables of different data types
let userName = "Yashna";               // string
let age = 21;                          // number
let isStudent = true;                  // boolean
let hobbies = ["coding", "music"];     // array
let userInfo = { city: "Allahabad" };  // object
let score = null;                      // null
let futureData;                        // undefined

// Preparing formatted summary for console.table
const summary = [
    { label: "Name", value: userName, type: typeof userName },
    { label: "Age", value: age, type: typeof age },
    { label: "Is Student", value: isStudent, type: typeof isStudent },
    { label: "Hobbies", value: hobbies, type: Array.isArray(hobbies) ? "array" : typeof hobbies },
    { label: "User Info", value: userInfo, type: typeof userInfo },
    { label: "Score", value: score, type: "null" }, // typeof null = "object", so handle manually
    { label: "Future Data", value: futureData, type: typeof futureData }
];

// Display all data in a single console.table
console.table(summary);
