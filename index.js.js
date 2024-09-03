function getMilk(money) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveRight");
  console.log("buy " + calcBottles(money, 1.5) + " bottles of Milk");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("enterHouse");
  return calChange(money, 1.5);
}

function calcBottles(startingMoney, costPerBottle){
  var bottles = Math.floor(startingMoney / costPerBottle);
  return bottles;
}

function calChange (startingAmount, costPerBottle){
  var change = (startingAmount % costPerBottle);
  return change;
}

console.log("Hello, here is your " + getMilk(5) + " change");