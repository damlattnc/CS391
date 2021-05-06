function DieRoll(){
   var dNumber=Number(document.getElementById("maxDice").value);
    if(dNumber <= 0){
        alert("Please type in a postive number.");
    }
   dNumber=Math.floor(dNumber);
   var result =  Math.floor(Math.random() * dNumber) + 1;
   document.getElementById("result").innerHTML = result;

}