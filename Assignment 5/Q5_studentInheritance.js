// Parent constructor
function Person(name) {
    this.name = name;
}

// Parent method
Person.prototype.showName = function () {
    console.log("Name:", this.name);
};

// Child constructor
function Student(name, branch) {
    Person.call(this, name);  // inherit properties
    this.branch = branch;
}

// Inherit Person prototype
Student.prototype = Object.create(Person.prototype);

// Add Student method
Student.prototype.showBranch = function () {
    console.log("Branch:", this.branch);
};

const s1 = new Student("Yashna", "CSE");

s1.showName();    // inherited from Person
s1.showBranch();  // own method
