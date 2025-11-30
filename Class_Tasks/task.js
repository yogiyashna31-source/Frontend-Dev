document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let contact = document.getElementById("contact").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    let contactError = document.getElementById("contactError");
    let passwordError = document.getElementById("passwordError");
    let confirmError = document.getElementById("confirmError");

    contactError.textContent = "";
    passwordError.textContent = "";
    confirmError.textContent = "";

    // Contact number regex (India)
    // Accepts: 9876543210 / +919876543210 / 09876543210
    let contactRegex = /^(?:\+91|0)?[6-9]\d{9}$/;

    if (!contactRegex.test(contact)) {
        contactError.textContent = "Enter a valid 10-digit Indian mobile number.";
        return;
    }

    // Strong Password Regex
    let passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
        passwordError.textContent =
            "Password must have: 8+ chars, 1 uppercase, 1 lowercase, 1 number & 1 special character.";
        return;
    }

    if (password !== confirmPassword) {
        confirmError.textContent = "Passwords do not match!";
        return;
    }

    alert("Registration Successful!");
});
