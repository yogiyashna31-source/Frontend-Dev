function Person(name) {
    this.name = name;
}
Person.prototype.showName = function () {
    console.log("Name:", this.name);
};

function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.showDepartment = function () {
    console.log("Department:", this.department);
};

function Professor(name, department, subject) {
    Faculty.call(this, name, department);
    this.subject = subject;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.showSubject = function () {
    console.log("Subject:", this.subject);
};

const p = new Professor("Dr. Aruna", "CSE", "AI");

p.showName();        // from Person prototype
p.showDepartment();  // from Faculty prototype
p.showSubject();     // from Professor prototype
