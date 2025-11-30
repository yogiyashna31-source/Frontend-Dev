$(document).ready(function() {
    // 1. Add New Post → append a new post to the list
    $("#add-post").click(function() {
        let postTitle = $("#new-post").val().trim();
        if(postTitle !== "") {
            $("#blog-posts ul").append("<li class='post'>" + postTitle + "</li>");
            $("#new-post").val("");
        }
    });

    // 2. Prepend Featured Post → add a post at the top
    $("#prepend-post").click(function() {
        let postTitle = $("#new-post").val().trim();
        if(postTitle !== "") {
            $("#blog-posts ul").prepend("<li class='post'>" + postTitle + "</li>");
            $("#new-post").val("");
        }
    });

    // 3. Remove Last Post → delete last element
    $("#remove-last").click(function() {
        $("#blog-posts ul li:last").remove();
    });

    // 4. Highlight posts with specific keywords dynamically
    $("#highlight-posts").click(function() {
        let keyword = $("#highlight-keyword").val().trim().toLowerCase();
        if(keyword !== "") {
            $(".post").each(function() {
                let text = $(this).text();
                if(text.toLowerCase().includes(keyword)) {
                    $(this).css("background-color", "yellow");
                } else {
                    $(this).css("background-color", "");
                }
            });
        }
    });
});
