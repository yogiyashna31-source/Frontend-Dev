$(document).ready(function() {
    // 1. Click on a product → highlight background
    $(".product").click(function() {
        $(this).css("background-color", "#ffe0b2") // highlight clicked product
               .siblings().css("background-color", ""); // remove highlight from others

        // Alert if product is out of stock
        if($(this).data("stock") === "out") {
            alert("This product is out of stock!");
        }
    });

    // 2. Hover over a product → show additional details
    $(".product").hover(
        function() {
            $(this).find(".details").fadeIn(); // show details
        },
        function() {
            $(this).find(".details").fadeOut(); // hide details
        }
    );

    // Initially hide all product details
    $(".details").hide();

    // 3. Click on "Favorite" icon → toggle "selected" class
    $(".favorite").click(function(e) {
        e.stopPropagation(); // prevent triggering product click
        $(this).toggleClass("selected");
        $(this).text($(this).hasClass("selected") ? "❤️" : "♡");
    });

    // 4. Apply different styles to products with discounts using attribute selector
    $("[data-discount]").css({
        "border": "2px dashed red",
        "padding": "10px"
    });

    // 5. Alert if product is out of stock (handled on product click above)
});
