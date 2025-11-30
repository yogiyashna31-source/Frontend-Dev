$(document).ready(function() {
    // 1. Subscribe → enable notifications
    $("#subscribe").click(function() {
        $("#message").text("Notifications enabled!").css("color", "green").fadeIn().fadeOut(2000);
    });

    // 2. Unsubscribe → disable notifications
    $("#unsubscribe").click(function() {
        $("#message").text("Notifications disabled!").css("color", "red").fadeIn().fadeOut(2000);
    });

    // 3. Dynamically add new subscription topics → attach .on() click events
    $("#add-topic").click(function() {
        let topicName = $("#new-topic").val().trim();
        if(topicName !== "") {
            let newTopic = $("<li class='topic'>" + topicName + "</li>");
            $("#topics ul").append(newTopic);
            $("#new-topic").val("");

            // Attach click event to newly added topic
            newTopic.on("click", function() {
                $(this).toggleClass("selected");
                showSuccessMessage("Topic '" + $(this).text() + "' selected!");
            });
        }
    });

    // 4. Remove specific subscription → detach .off() event
    $(".topic").on("dblclick", function() {
        $(this).off("click"); // disable click event
        $(this).css("text-decoration", "line-through");
        showSuccessMessage("Topic '" + $(this).text() + "' unsubscribed!");
    });

    // 5. Show success message dynamically
    function showSuccessMessage(msg) {
        $("#message").text(msg).css("color", "blue").fadeIn().fadeOut(2000);
    }

    // Attach click event to existing topics
    $(".topic").on("click", function() {
        $(this).toggleClass("selected");
        showSuccessMessage("Topic '" + $(this).text() + "' selected!");
    });
});
