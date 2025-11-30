// Q5 - Weather Activity Planner
// This program suggests an activity based on temperature, rain, and wind speed conditions.

// Weather conditions
let temperature = 12;      // in °C (change anytime)
let isRaining = false;     // true/false
let windSpeed = 25;        // in km/h

let activity = "";

// Conditions for activity
if (isRaining) {
    activity = "Stay indoors with hot coffee.";
} 
else if (temperature > 35) {
    activity = "Go swimming.";
} 
else if (temperature < 15 && windSpeed > 20) {
    activity = "Too cold and windy — stay home.";
} 
else {
    activity = "Perfect day for a walk.";
}

// Output
console.log("Weather Activity Planner");
console.log("------------------------");
console.log("Temperature:", temperature + "°C");
console.log("Raining:", isRaining);
console.log("Wind Speed:", windSpeed + " km/h");
console.log("Suggested Activity:", activity);
