function calcCircleArea(radius) {
    var area =Math.PI * radius * radius;
    return "Radius = " + radius + "; Area = " + area;
}
document.getElementById("radius1").innerHTML = calcCircleArea("7");
document.getElementById("radius2").innerHTML = calcCircleArea("1.5");
document.getElementById("radius3").innerHTML = calcCircleArea("20");