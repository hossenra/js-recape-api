let myVar = 5;
if (myVar) {
  myVar = myVar * 100;
} else {
  myVar = 0;
}

const money = 80;
let food;
if (money > 100) {
  food = "Biyarni";
} else {
  food = "Cha BISKUT";
}

// turnary operator
let food1 = money > 100 ? "Biyarni" : "Cha Biskut";

let drink = money > 100 && myVar > 100 ? "coke" : "water";
// console.log(drink);

//
const num1 = 52;
const numStr = num1 + "";

//
const input = "560";
const inputNum = +input;
// console.log(inputNum);

//
let isActive = true;
const showUser = () => console.log("display User");
const hideUser = () => console.log("hide User");

// isActive ? showUser() : hideUser();

// isActive && showUser();

isActive || hideUser();

// toggle
isActive = !isActive;
