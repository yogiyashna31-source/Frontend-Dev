$(document).ready(function() {
    // 1. Click a manager → highlight all direct reports
    $(".manager").click(function() {
        $(this).siblings("ul").children(".employee").css("background-color", "#ffe0b2")
               .siblings().css("background-color", ""); // remove highlight from others
    });

    // 2. Hover on an employee → show contact info using .next()
    $(".employee").hover(
        function() {
            $(this).after('<span class="contact-info"> (contact: ' + $(this).text().toLowerCase() + '@company.com)</span>');
        },
        function() {
            $(this).siblings(".contact-info").remove();
        }
    );

    // 3. Click on a department → change background of all members in that department using .children()
    $(".department-name").click(function() {
        $(this).siblings(".manager").css("background-color", "#d1ffd6");
        $(this).siblings("ul").children(".employee").css("background-color", "#d1ffd6");
    });

    // 4. Select a random employee → highlight sibling employees
    $("#random-employee").click(function() {
        let allEmployees = $(".employee");
        let randomIndex = Math.floor(Math.random() * allEmployees.length);
        let randomEmployee = $(allEmployees[randomIndex]);
        randomEmployee.siblings().css("background-color", "#ffd1d1");
    });

    // 5. Collapse/expand team using .parent() and .find()
    $("#toggle-team").click(function() {
        $(".department").each(function() {
            $(this).find("ul").slideToggle();
        });
    });
});
