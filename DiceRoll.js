function DieRoll() {
    var dNumber = Number(document.getElementById("maxDice").value);
    if (dNumber <= 0) {
        alert("Please type in a postive number.");
    }
    else {
        dNumber = Math.floor(dNumber);
        result = Math.floor(Math.random() * dNumber) + 1;
        document.getElementById("result").innerHTML = result;
    }


}