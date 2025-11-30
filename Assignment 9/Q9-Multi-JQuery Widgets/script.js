// Use noConflict to separate jQuery versions
var jq1 = jQuery.noConflict(true); // version 1.12.4 for carousel
var jq3 = jQuery;                  // version 3.6.0 for modal and tooltips

// Carousel Slider using jQuery v1
jq1(document).ready(function() {
    var slides = jq1(".carousel div");
    var index = 0;
    slides.hide();
    slides.eq(index).show();

    setInterval(function() {
        slides.eq(index).fadeOut(500, function() {
            index = (index + 1) % slides.length;
            slides.eq(index).fadeIn(500);
        });
    }, 3000); // rotate every 3 seconds
});

// Modal popups using jQuery v3
jq3(document).ready(function() {
    // Open modal
    jq3("#open-modal").click(function() {
        jq3("#modal-overlay, #modal").fadeIn();
    });

    // Close modal
    jq3("#close-modal, #modal-overlay").click(function() {
        jq3("#modal-overlay, #modal").fadeOut();
    });

    // Highlight active widget on click
    jq3(".widget").click(function() {
        jq3(this).addClass("active-widget").siblings(".widget").removeClass("active-widget");
    });

    // Tooltips on hover
    jq3(".widget").hover(
        function(e) {
            let tooltipText = jq3(this).attr("title");
            jq3("<div class='tooltip'></div>").text(tooltipText)
                .appendTo("body")
                .css({top: e.pageY + 10, left: e.pageX + 10})
                .fadeIn();
        },
        function() {
            jq3(".tooltip").remove();
        }
    ).mousemove(function(e) {
        jq3(".tooltip").css({top: e.pageY + 10, left: e.pageX + 10});
    });
});
