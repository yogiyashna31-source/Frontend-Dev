// Q8 - Employee Salary Projection

let currentSalary = 40000;        // starting salary
let incrementRate = 10;           // yearly increment %
let salaryData = [];

for (let year = 1; year <= 5; year++) {
    currentSalary += currentSalary * (incrementRate / 100);
    salaryData.push({
        Year: year,
        Salary: Math.round(currentSalary)
    });
}

console.table(salaryData);
