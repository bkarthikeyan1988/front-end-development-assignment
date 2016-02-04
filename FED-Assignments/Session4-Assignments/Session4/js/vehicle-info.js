
function vehName() {
	var vehicleName = document.getElementById('veh-name').value;
    document.getElementById("dsply-veh-name").innerHTML = vehicleName;   
}

function vehDesc(){
	var vehicleDesc = document.getElementById('veh-desc').value;
    document.getElementById("dsply-veh-desc").innerHTML = vehicleDesc; 
}
function vehCostPerKm(){
	var vehicleCostPerKM = document.getElementById('veh-cst-per-km').value;
    document.getElementById("dsply-veh-cst-per-km").innerHTML = vehicleCostPerKM; 
}
function vehicleSelection(){
	if(document.getElementById('veh-type-sel').value == "four-wheeler") {
	    document.getElementById("veh-fuel-type-list").style.display = "table-row";
	    var vehicleSelectn = document.getElementById('veh-type-sel').value;
    	document.getElementById("dsply-veh-type").innerHTML = vehicleSelectn;
	}
	else{
		document.getElementById("veh-fuel-type-list").style.display = "none";
		var vehicleSelectn = document.getElementById('veh-type-sel').value;
    	document.getElementById("dsply-veh-type").innerHTML = vehicleSelectn;
	}
}
function vehFuelType(){
    var vehicleFuelType = document.getElementById("veh-fuel-type-sel").value;
	document.getElementById("dsply-veh-fuel-type").innerHTML = vehicleFuelType;
}



function displayValue(){
	document.getElementById("vehicle-form").style.display = "none";
	document.getElementById("display-vehicle-form").style.display = "block";
	if(document.getElementById('veh-type-sel').value == "four-wheeler"){
		document.getElementById("dsply-fuel-type").style.display = "table-row";
	}
	else{
		document.getElementById("dsply-fuel-type").style.display = "none";
	}
}
function displayForm(){
	document.getElementById("vehicle-form").style.display = "block";
	document.getElementById("display-vehicle-form").style.display = "none";
}


