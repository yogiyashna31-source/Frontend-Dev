// Q10 - Citizen Eligibility Validator

let age = 19;
let isCitizen = true;
let result = "";

if (isCitizen && age >= 18) {
    if (age >= 21) {
        result = "Eligible for all services.";
    } else {
        result = "Eligible to vote only.";
    }
} 
else if (!isCitizen && age >= 18) {
    result = "Only age criteria met.";
}
else {
    result = "Not eligible yet.";
}

console.log("Age:", age);
console.log("Citizen:", isCitizen);
console.log("Result:", result);
