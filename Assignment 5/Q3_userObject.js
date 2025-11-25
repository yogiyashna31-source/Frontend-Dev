// File: userObject.js

// ❌ Using arrow function inside object
const user = {
    name: "Yashna",
    showName: () => {
        console.log(this.name);  // this → undefined
    }
};

user.showName();   // Output: undefined
