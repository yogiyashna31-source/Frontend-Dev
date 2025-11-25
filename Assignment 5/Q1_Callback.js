// File: callbackExample.js

// Callback function
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Main function
function greetUser(userName, callbackFunction) {
    console.log("Hello " + userName);
    callbackFunction();   // Execute callback
}

// Function call
greetUser("Yashna", showEndMessage);
