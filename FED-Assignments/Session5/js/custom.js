$(document).ready(function() {

    // For Session 5 Assignment 1 Starts

        $( "div" ).find( "h1" ).css( "background-color", "#ccc" );

    // For Session 5 Assignment 1 Ends

    // For Session 5 Assignment 2 Starts

        $( "form" ).find( "input" ).hide();

    // For Session 5 Assignment 2 Ends

    // For Session 5 Assignment 3 Starts

        $( "li" ).each(function(index) {
            $(this).prepend("<strong>"+index+":</strong>");
        });

    // For Session 5 Assignment 3 Ends

    // For Session 5 Assignment 2 Starts

        $("#acadgild").attr("href","http://www.google.com/").html("Google");

    // For Session 5 Assignment 2 Ends
});