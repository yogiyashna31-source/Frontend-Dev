$(document).ready(function() {
    // 1. Hide specific banners
    $("#hide-banner").click(function() {
        $(".banner").hide();
    });

    // 2. Show hidden banners
    $("#show-banner").click(function() {
        $(".banner").show();
    });

    // 3. Slide Up/Down banners
    $("#slide-up").click(function() {
        $(".banner").slideUp();
    });

    $("#slide-down").click(function() {
        $(".banner").slideDown();
    });

    // 4. Fade In/Out banners gradually
    $("#fade-toggle").click(function() {
        $(".banner").fadeToggle();
    });

    // 5. Automatically rotate through banners every 5 seconds
    let banners = $(".banner");
    let index = 0;
    banners.hide(); // hide all initially
    $(banners[index]).fadeIn();

    setInterval(function() {
        $(banners[index]).fadeOut(1000, function() {
            index = (index + 1) % banners.length;
            $(banners[index]).fadeIn(1000);
        });
    }, 5000);
});
