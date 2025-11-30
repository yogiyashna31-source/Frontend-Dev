// Q1 - Personalized Login Greeting
// This program greets the user based on the current time of day.

// Declare user name
let userName = "Yashna";  // You can change this anytime

// Get current hour (0–23)
let currentHour = new Date().getHours();

// Decide greeting message
let greeting = "";

if (currentHour < 12) {
    greeting = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour < 17) {
    greeting = `Good Afternoon ${userName}!`;
} else {
    greeting = `Good Evening ${userName}!`;
}

// Print greeting
console.log(greeting);
