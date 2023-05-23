let x = 6;
let y = 3;
console.log(x == 6);
console.log(x == "6");
console.log(x != 6);
console.log(x != "6");
console.log(x != 7);
console.log(x != "7");
console.log(x === 6);
console.log(x === "6");
console.log(x !== 6);
console.log(x !== "6");

console.log(x > 7);
console.log(x < 7);
console.log(x <= 7);
console.log(x >= 7);
console.log(x >= 6);
console.log(x <= 6);

let age = 18;
if (age >= 18) {
  console.log("You are adult!");
} else {
  console.log("You are so young");
}

if (x < 10 && y > 1) {
  console.log("This is true");
} else {
  ("this is not true");
}

if (age == 16 || age == 17 || age == 18) {
  console.log("This is ok");
} else {
  console.log("this is not ok");
}

console.log(age >= 18 ? "you ar young enough" : "you ar a little baby");

let title = "Sakib";
title = Number(title);

if (isNaN(title)) {
  console.log("Title is not a number");
} else {
  console.log(age == "Sakib" ? "I am Sakib" : "I dont know you");
}

let age2 = 38;

if (age2 < 18) {
  console.log("you are so young");
} else if (age2 == 18) {
  console.log("Welcome adult");
} else {
  console.log("You are old");
}

switch (new Date().getDay()) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Twesday");
    break;
  case 3:
    console.log("Wednessday");
    break;
  case 4:
    console.log("Thirsday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saterday");
    break;
  default:
    console.log("Wating for weekend");
}

// For Loop Start
const carsList = document.getElementById("cars");

var cars = ["Volvo", "Toyota", "Maruti", "Honda", "Mahindra", "BMW"];

for (let index = 0; index < cars.length; index++) {
  const element = cars[index];
  const list = document.createElement("li");
  list.innerText = element;
  carsList.appendChild(list);
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (let i = 10; i >= 1; i--) {
  console.log(i);
}
// For Loop Done
