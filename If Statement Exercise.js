var yourName = prompt("Your Name");
var crushName = prompt("Your crush name");
var love = (Math.floor(Math.random() * 100) + 1);

if (love > 69) {
    alert("Your love score is " + love + "%" + " you two are perfect for each other.");
}

if (love > 30 && love < 70){
    alert("Your love score is " + love + "%");
} 

else {
    alert("Your love score is " + love + "% you better look for a new crush");
}

