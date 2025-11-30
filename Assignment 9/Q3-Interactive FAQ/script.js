$(document).ready(function() {
    // 1. Click on a question → toggle answer visibility
    $(".question").click(function() {
        $(this).next(".answer").slideToggle();
    });

    // 2. Hover → change question color
    $(".question").hover(
        function() {
            $(this).css("color", "blue");
        },
        function() {
            $(this).css("color", "");
        }
    );

    // 3. Double-click question → collapse all answers
    $(".question").dblclick(function() {
        $(".answer").slideUp();
    });

    // 4. Focus on answer input → highlight parent question
    $("input").focus(function() {
        $(this).closest(".faq-item").find(".question").css("background-color", "#d1ffd6");
    });

    // 5. Blur from input → reset question background
    $("input").blur(function() {
        $(this).closest(".faq-item").find(".question").css("background-color", "");
    });

    // Initially hide all answers
    $(".answer").hide();
});
