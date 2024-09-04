function bmiInterpretation () {
    return interpretation;
}

function bmiCalculator (weight, height) {
    return Math.round(weight / (height *= height)); 
}

var bmi = bmiCalculator(57,1.92);


if (bmi < 18.5){
    var interpretation = "Your BMI is " + bmi + ", so you are underweight.";
}

if (bmi >= 18.5 && bmi <= 24.9){
    var interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
}

if (bmi > 24.9){
    var interpretation = "Your BMI is " + bmi + ", so you are overweight.";
}

bmiInterpretation();