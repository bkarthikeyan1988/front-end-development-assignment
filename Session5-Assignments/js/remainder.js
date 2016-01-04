function remainderOperation(x,y) {
   var z = x % y;
    return "Remainder = " + z; 
}
document.getElementById("remainder").innerHTML = remainderOperation(15,9);