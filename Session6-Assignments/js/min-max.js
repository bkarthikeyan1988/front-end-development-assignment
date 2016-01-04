function minMax() {
    var x,y;

    x = document.getElementById("number1").value;
    y = document.getElementById("number2").value;

    if (x > y) {
        text = "Max value is X: " + x + "<br /><br />Min value is Y: " + y;
    } else if (x < y){
        text = "Min value is X: " + x + "<br /><br />Max value is Y: " + y;
    } else if (x = y){
        text = "X and Y Values are Equals: " + x + ", " + y;
    }
    else{
        text = "Error in Input";
    }
    document.getElementById("output").innerHTML = text;
}