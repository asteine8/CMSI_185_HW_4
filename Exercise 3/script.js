
let changeValues = [2000, 1000, 500, 100, 50, 25, 10, 1]; // In cents
let valuesForEachChangeValue = new Array(changeValues.length);
let MonetaryValueGood = true;

// (monetary values should be sorted decending)
function GetOptimizedChange(monetaryValue, changeValues) {
    // changeValues = changeValues.sort(function(a,b){return b-a;}); // Sort decending
    monetaryValue = Math.round(monetaryValue * 100);
    if (monetaryValue < 0) { // Negative number, cannot work with this
        return "Impossible";
    }

    let numEachChange = new Array(changeValues.length); // Create empty array object
    for (let v in changeValues) { // Go through each change value
        let numThisChange = Math.floor(monetaryValue/changeValues[v]);
        monetaryValue -= numThisChange*changeValues[v];
        numEachChange[v] = numThisChange;
        console.log(monetaryValue);
    }
    if (monetaryValue >= 1e-9) { // Remainder, value is not creatable
        return "Impossible";
    }

    return numEachChange;
}

function UpdateChange() {
    let MonetaryValue = document.getElementById("MonetaryInput").value;
    MonetaryValue = (MonetaryValue.trim().charAt(0) === "$") ? MonetaryValue.trim().replace("$","") : MonetaryValue;
    if (MonetaryValue.search(/[^0-9.]/i) !== -1 || MonetaryValue.length === 0) {
        MonetaryValueGood = false;
    }
    else {
        MonetaryValueGood = true;
        valuesForEachChangeValue = GetOptimizedChange(parseFloat(MonetaryValue), changeValues);
        // console.log(valuesForEachChangeValue);
        if (valuesForEachChangeValue == "Impossible") MonetaryValueGood = false;
        let inputChangeValues = document.getElementById("ChangeInput").value;

        if (inputChangeValues.search(/[^0-9, .]/) !== -1 || inputChangeValues.length === 0) {
            MonetaryValueGood = false;
        }
        else {
            changeValues = inputChangeValues.split(/[ ,]+/).map(parseFloat);
            changeValues = changeValues.map(function(x){ return ((Number.isNaN(x)) ? 0 : x*100); });
        }
    }
    console.log(changeValues);
    UpdateFooter();
}

function UpdateFooter() {
    let footerOutput = document.getElementById("Output");
    if (MonetaryValueGood) {
        let output = "";
        for (let i in valuesForEachChangeValue) {
            if (valuesForEachChangeValue[i] > 0) {
                output += valuesForEachChangeValue[i] + " of denomination: ";
                output = output + ((changeValues[i]>=100) ? "$"+changeValues[i]/100 : changeValues[i]+"¢");
                output += "<br>";
            }
        }
        footerOutput.innerHTML = output;
    }
    else {
        footerOutput.innerHTML = "Conversion Impossible";
    }
}