var song = [];
var numberBottles = 99;

function beerBottles () {

while (numberBottles>1){
song.push(numberBottles + " Bottles of beer on the wall," + numberBottles + " bottles of beer");
numberBottles--;
song.push("Take one down and pass it around," + numberBottles + " bottles of beer on the wall");
}

song.push("1 bottle of beer on the wall, 1 bottle of beer.")
song.push("Take one down and pass it around, no more bottles of beer on the wall")
song.push("No more bottles of bee on the wall, no more bottles of beer")
song.push("Go to the store and buy some more, 99 bottles of beer on the wall")


console.log(song);    
}