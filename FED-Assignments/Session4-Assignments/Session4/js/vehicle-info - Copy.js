function vehicleSelection(){
	if(document.getElementById('veh-type-sel').value == "four-wheeler") {
	    document.getElementById("veh-fuel-type-list").style.display = "block";
	}
	else{
		document.getElementById("veh-fuel-type-list").style.display = "none";
	}
}
function vehicle(){
}
vehicle.prototype.name = document.getElementById('veh-name').value;
vehicle.prototype.desc = document.getElementById('veh-desc').value;
vehicle.prototype.vehType = document.getElementById('veh-type-sel').value;
vehicle.prototype.costPerKm = document.getElementById('veh-cst-per-km').value;
var vehicle = new vehicle();
function withVehicleType(){
}
withVehicleType.prototype = vehicle;
withVehicleType.prototype.fuelType = document.getElementById("veh-fuel-type-sel").value;
 var vehicleList = new withVehicleType();
function displayValue(){

	document.getElementById("dsply-veh-name").innerHTML = vehicle.name;
	document.getElementById("dsply-veh-desc").innerHTML = vehicle.desc;
	document.getElementById("dsply-veh-cst-per-km").innerHTML = vehicle.costPerKm;
	document.getElementById("dsply-veh-type").innerHTML = vehicle.vehType;
	document.getElementById("dsply-veh-fuel-type").innerHTML = vehicleList.fuelType;
}
//displayValue();

