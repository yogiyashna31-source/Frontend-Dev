$(document).ready(function() {
    // Function to display greeting based on time
    function timeBasedGreeting() {
        let now = new Date();
        let hour = now.getHours();
        let greetingText = "Welcome!";
        if(hour >= 5 && hour < 12) {
            greetingText = "Good Morning!";
        } else if(hour >= 12 && hour < 18) {
            greetingText = "Good Afternoon!";
        } else {
            greetingText = "Good Evening!";
        }
        $("#greeting").text(greetingText);
    }

    // Call on page load
    timeBasedGreeting();

    // Change greeting to motivational quote on button click
    $("#change-greeting").click(function() {
        $("#greeting").text("Keep pushing forward! Success is near.");
    });

    // Toggle visibility of welcome message
    $("#toggle-message").click(function() {
        $("#welcome-message").toggle(); // jQuery toggle method
    });

    // Show alert when greeting is clicked
    $("#greeting").click(function() {
        alert("You clicked the greeting! Have a great day!");
    });
});
