// Parent class
class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log("Name:", this.name);
    }
}

// Child class
class Student extends Person {
    constructor(name, branch) {
        super(name);       // call parent constructor
        this.branch = branch;
    }

    showBranch() {
        console.log("Branch:", this.branch);
    }
}

const student = new Student("Yashna", "CSE");

student.showName();   // from Person class
student.showBranch(); // from Student class
