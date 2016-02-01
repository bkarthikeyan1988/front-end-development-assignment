$(document).ready(function() {

    // For Session 6 Assignment 1 Starts

        $('.fed-session6-assingment1 p').click(function(){
            $(this).html("This is a click Event")
        });
        $('.fed-session6-assingment1 p').dblclick(function(){
            $(this).html("This is a double-click Event")
        });


    // For Session 6 Assignment 1 Ends

    // For Session 6 Assignment 2 Starts

        $("#field1").blur(function(){
            alert("This input field has lost its focus.");
        });

    // For Session 6 Assignment 2 Ends

    // For Session 6 Assignment 3 Starts

        $("input").focus(function(){
            $(this).css("background-color", "#e2e2e2");
        });
        $("input").blur(function(){
            $(this).css("background-color", "#ffffff");
        });
        $("input.fname").change(function(){
            $('.input-desc').html("You changed the First Name Input");
        });
        $("input.lname").change(function(){
            $('.input-desc').html("You changed the Last Name Input");
        });
        $(".demo_form").submit(function(){
            alert("you submmited form");
        });

    // For Session 6 Assignment 3 Ends

    // For Session 6 Assignment 4 Starts

        $(".fed-session6-assingment1 button").click(function(){
            $('.fed-session6-assingment1 div').css("background-color","#ccc");
        });

    // For Session 6 Assignment 4 Ends
});