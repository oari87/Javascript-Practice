var yourName = prompt("What is your name?")
var guessList = ["Alex","Haley","Phil", "Cam", "Mitchell", "Jay", "Luke", "Claire"];

if (guessList.includes(yourName)){
    alert("Welcome " + yourName)
} else {
    alert("Your not in the guess list")
}
