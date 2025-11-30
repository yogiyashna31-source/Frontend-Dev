// Q6 - Progressive Discount System

let totalPurchase = 7500;  // Change the value to test

let discount = 0;

if (totalPurchase >= 10000) {
    discount = 25;
} else if (totalPurchase >= 5000) {
    discount = 15;
} else if (totalPurchase >= 2000) {
    discount = 5;
} else {
    discount = 0;
}

let discountAmount = (totalPurchase * discount) / 100;
let finalPrice = totalPurchase - discountAmount;

// Round using Math.round()
finalPrice = Math.round(finalPrice);

console.log("Original Total:", totalPurchase);
console.log("Discount Applied:", discount + "%");
console.log("Final Price After Discount:", finalPrice);
