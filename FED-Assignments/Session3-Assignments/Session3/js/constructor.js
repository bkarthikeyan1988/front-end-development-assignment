function Car(make,model,year,properities){
    this.make = make;
    this.model = model;
    this.year = year;
    this.properities = properities;
    this.carDetails = function(){
        alert("Name: "+this.make+"\nModel: "+this.model+"\nYear: "+this.year+"\nProperities: "+this.properities);
    }
}

//creating object of type Car
var obOne = new Car("Skoda","Rapid",2015,"Sedan");
var obTwo = new Car("Tata","Nano",2012,"Auto");
//calling the sayName function for obOne object
obOne.carDetails();
//calling the sayName function for obTwo object
obTwo.carDetails();