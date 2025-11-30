$(document).ready(function() {
    // Dummy array to simulate existing emails
    let existingEmails = ["test@example.com", "user@domain.com", "admin@site.com"];

    $("#registration-form").submit(function(e) {
        e.preventDefault(); // prevent default form submission
        let isValid = true;

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let password = $("#password").val().trim();

        // Clear previous errors
        $("input").removeClass("error");

        // 1. Check Name field → not empty
        if(name === "") {
            $("#name").addClass("error");
            isValid = false;
        }

        // 2. Check Email field → valid format and uniqueness
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(email === "" || !emailPattern.test(email) || existingEmails.includes(email)) {
            $("#email").addClass("error");
            isValid = false;
        }

        // 3. Check Password → minimum 8 characters
        if(password.length < 8) {
            $("#password").addClass("error");
            isValid = false;
        }

        // 4. Show success message if all fields valid
        if(isValid) {
            $("#message").text("Registration Successful!").addClass("success").fadeIn().fadeOut(3000);
            // Optionally, add email to existingEmails
            existingEmails.push(email);
            $("#registration-form")[0].reset();
        } else {
            $("#message").text("Please correct the highlighted fields.").removeClass("success").fadeIn().fadeOut(3000);
        }
    });
});
