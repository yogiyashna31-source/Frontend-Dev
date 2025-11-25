// ✔ Correct version using normal function
const userFixed = {
    name: "Yashna",
    showName: function () {
        console.log(this.name);  // this → refers to userFixed object
    }
};

userFixed.showName();   // Output: Yashna
