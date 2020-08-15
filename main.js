function clearButton() { // function for the button that clears the search bar
    $(".clear-btn").hide();
    $(".line").hide();

    $(".clear-btn").click(function() {
        $(".search-bar").val("");
        $(".clear-btn").hide();
        $(".line").hide();
    });

    $(".search-bar").keyup(function() {
        if ($(this).val() != "") {
            $(".clear-btn").show();
            $(".line").show();
        }

        else {
            $(".clear-btn").hide();
            $(".line").hide();
        }
    });
}

clearButton();