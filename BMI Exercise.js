var weight = prompt("Your weight?")
var height = prompt("Your height?")

function calBmi (weight, height){
    var BMI = (weight / (height *= height)); 
    return Math.round(BMI);
}

console.log("You have a BMI of " + calBmi(weight, height))