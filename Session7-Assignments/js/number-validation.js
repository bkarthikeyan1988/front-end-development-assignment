window.onload = function(){
  
  var numberInput = document.numberForm.numberinput;

  numberInput.onchange = function(){
    if (isNumber(numberInput.value)){ return;}
    numberInput.innerHTML = numberInput.value;
    disableFor(numberInput, 3000);
  }
}

function isNumber(value) {
    return !(isNaN(parseInt(value, 10)));
}

function disableFor(input, time){
  input.readOnly = true;
  setTimeout(function(){ input.readOnly = false;}, time);
}