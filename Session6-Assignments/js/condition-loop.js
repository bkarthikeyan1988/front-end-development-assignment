var text = "";
var i;
for (i = 1; i <= 100; i++) {
  var x = i%3;
  var y = i%5;
  if (x==0 && y!=0){text += i + " Fizz <br><br>";}
  else if (x!=0 && y==0){text += i + " Buzz <br><br>";}
  else if ((x==0) && (y==0)){text += i + " Fizz Buzz <br><br>";}
  else{text += i + "<br><br>";}
}

document.getElementById("iteration").innerHTML = text;