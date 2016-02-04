function vehicleSelection(){
	if(document.getElementById('veh-type-sel').value == "four-wheeler") {
	    document.getElementById("veh-fuel-type-list").style.display = "block";
	}
	else{
		document.getElementById("veh-fuel-type-list").style.display = "none";
	}
}
if (!window.localStorage) {
    alert('Your browser does not support HTML5 localStorage. Try upgrading.');
} else {
	document.getElementById('submit-form').onclick = function() {
		var itemId, formSave;
	    itemId = "value";
	    if(document.getElementById('veh-type-sel').value == "four-wheeler") {
		    formSave = {
				vehName : document.getElementById('veh-name').value,
				vehDesc : document.getElementById('veh-desc').value,
				vehCostPerKm : document.getElementById('veh-cst-per-km').value,
				vehType : document.getElementById('veh-type-sel').value,
				vehFuelType : document.getElementById("veh-fuel-type-sel").value
			};
		}
		else{
			formSave = {
				vehName : document.getElementById('veh-name').value,
				vehDesc : document.getElementById('veh-desc').value,
				vehCostPerKm : document.getElementById('veh-cst-per-km').value,
				vehType : document.getElementById('veh-type-sel').value
			};
		} 
		
		localStorage.setItem( itemId, JSON.stringify(formSave));
	};
	getItems();
}
var getItems = function() {
	var timeLog, logLength, i;				
    i = 0;
    logLength = localStorage.length-1; //how many items are in the database starting with zero
	timeLog = '';

    //now we are going to loop through each item in the database
    for (i = 0; i <= logLength; i++) {
					var itemKey, value, values, firstname, lastname, email, phone, job, primeuse, cd_catalogue, papaer_catalogue, price_deals, industry_info;
        //lets setup some variables for the key and values
        itemKey = localStorage.key(i);
					
        value = localStorage.getItem(itemKey);
		values = JSON.parse(value);
        firstname = values.fname;
        lastname = values.lname;
        email = values.email;
		phone = values.phone;
		job = values.job;
		primeuse = values.primeuse;
		cd_catalogue = values.cd;
		paper_catalogue = values.paper;
		price_deals = values.priceDeals;
		industry_info = values.industryInfo;

        //now that we have the item, lets add it to the table
        timeLog += '<tr id="'+itemKey+'" class="tableRow"><td>'+firstname+'</td><td>'+lastname+'</td><td>'+email+'</td><td>'+phone+'</td><td>'+job+'</td><td>'+primeuse+'</td><td>'+cd_catalogue+'</td><td>'+paper_catalogue+'</td><td>'+price_deals+'</td><td>'+industry_info+'<a class="delete" title="Delete Entry" href="#"><img src="img/delete.png" width="24" height="24"></a></td></tr>';
    }

    $("#theLog").append(timeLog); //update the table with the list items
	
}

