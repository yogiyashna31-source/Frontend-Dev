$(document).ready(function() {
    function updateMatchCount(count) {
        $("#match-count").text(count);
    }

    // 1. Search input filters courses in real-time using .keyup()
    $("#search").keyup(function() {
        let query = $(this).val().toLowerCase();
        let matchCount = 0;

        $(".course").each(function() {
            let courseText = $(this).text();
            if(courseText.toLowerCase().includes(query) && query !== "") {
                $(this).show();
                // 2. Highlight matched text using .css()
                let regex = new RegExp('(' + query + ')', 'gi');
                $(this).html(courseText.replace(regex, '<span style="background-color: yellow;">$1</span>'));
                matchCount++;
            } else if(query === "") {
                $(this).show();
                $(this).html(courseText); // remove previous highlights
            } else {
                $(this).hide();
            }
        });

        // 4. Show count of matched courses dynamically
        updateMatchCount(matchCount);
    });

    // 5. Clear search → reset list to show all courses
    $("#clear-search").click(function() {
        $("#search").val("");
        $(".course").show().each(function() {
            $(this).html($(this).text());
        });
        updateMatchCount(0);
    });
});
