// Q7 - Smart Guessing Game

// Generate secret number 1–50
let secretNumber = Math.floor(Math.random() * 50) + 1;

// Test guess value (change anytime)
let userGuess = 22;

console.log("Secret Number:", secretNumber);
console.log("Your Guess:", userGuess);

if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else if (Math.abs(userGuess - secretNumber) <= 3) {
    console.log("Very close!");
} else {
    if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
}
