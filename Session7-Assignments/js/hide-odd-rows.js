var tableRow = "";
var i;
for (i = 1; i <= 10; i++) {
  if((i%2)==0){
    tableRow += "<tr class='even-rows'><td>Row "+i + "</td></tr>";
  }
  else{
    tableRow += "<tr class='odd-rows'><td>Row "+i + "</td></tr>";
  }
}
document.getElementById("table").innerHTML = tableRow;
function hideRows(){
	//var elements = document.getElementsByClassName('odd-rows');
	document.getElementsByTagName('table').item(0).className = "table-block odd-rows-hidden";
  document.getElementById("hideRows").setAttribute("disabled", "disabled");
  document.getElementById("info").innerHTML = "Please refrest the Page again"
	return true;
}
document.getElementById('hideRows').onclick = hideRows;