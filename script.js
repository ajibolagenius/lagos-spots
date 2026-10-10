// Module 2: Variables, Types & Memory Allocation
// 1. const vs let vs var (Scope & Hoisting)
/* 
let name; // undefined variable
let fname = null; // null variable

let firstName = "Opeyemi";
let lastName = "Akintunde";
let isMarried = false;
let age = 25;
const dateOfBirth = "1998-01-01";

const PI = 3.14; // constant variable
const GRAVITY = 9.81; // constant variable
const SPEED_OF_LIGHT = 299792458; // constant variable
const PLANCK_CONSTANT = 6.62607015e-34; // constant variable
const AVOGADRO_NUMBER = 6.02214076e23; // constant variable
const BOLTZMANN_CONSTANT = 1.380649e-23; // constant variable
const GAS_CONSTANT = 8.314462618; // constant variable

console.log(lastName);
console.log(dateOfBirth);

lastName = "Daniel"; // Reassigning a new value to the variable
console.log(lastName);
console.log(`------------------------------`);

// if (true) {
//   var leakedVar = 'I leak into the outer scope!';
//   let scopedLet = 'I only exist within these curly braces!';
//   const scopedConst = 'I also only exist within these braces!';
// }

// console.log(leakedVar);
// console.log(scopedLet);
// console.log(scopedConst);

// 2. Primitive Types vs. Reference Types: The Memory Model


let person = {
  firstName: "Opeyemi",
  lastName: "Akintunde",
  age: 25,
  isMarried: false,
  array: [1, 2, 3, 4, 5],
};

let numberBlock = [1, 2, 3, 4, 5, true, false, null, undefined, "Hello", { name: "Opeyemi" }];

let newName = "false";

0 == "" // true
0 === "" // false
false == "0" // true

// || — Logical OR operator
// && — Logical AND operator
// ! — Logical NOT operator
// ?? — Nullish Coalescing operator


// Scenario: A free Lagos spot with ticket price of 0 Naira
const admissionFee = 0;

const fallbackWithOR = admissionFee || 1500; // WRONG! 0 is falsy, returns 1500

const fallbackWithNullish = admissionFee ?? 1500; // CORRECT! 0 is valid, returns 0

console.log(fallbackWithOR);      // 1500 (Incorrectly charges free spots)
console.log(fallbackWithNullish); // 0    (Correctly preserves 0)
 */

/* console.log(`------------FUNCTIONS-------------`);

function sayHello() {
  return "Hello World";
}

let message = sayHello();
console.log(message);

console.log(`------------------------------`);

console.log(`------------FUNCTIONS WITH PARAMETERS-------------`);

// Creating a funtion that takes 2 parameters
function multiply(n1, n2) {
  return n1 * n2;
} */

// Calling the function with arguments
// console.log(multiply(20, 19), multiply(13, 181))
/* console.log(multiply(20, 19))
console.log(multiply(13, 181))

let goatName = "Messi";

function whoIsTheGOAT() {
  return goatName;
}

console.log(whoIsTheGOAT());
console.log(goatName); // ReferenceError: goatName is not defined */

// 1. Function Declaration (Hoisted to top of scope; has own 'this')
// function calculateDistance(x1, y1, x2, y2) {
//   return Math.hypot(x2 - x1, y2 - y1);
//   // return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
// }

// 2. Function Expression (Not hoisted; stored in variable)
// const calculateDistanceExp = function (x1, y1, x2, y2) {
//   return Math.hypot(x2 - x1, y2 - y1);
// };

// 3. Arrow Function (Concise syntax; lexically binds 'this'; modern standard)
// const calculateDistanceArrow = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1);

// arrow function anatomy
// function add(a, b) { return a + b; }
  // block body, explicit return

// const add = (a, b) => a + b; // concise body, implicit return

// (x, y) => {
//   x ** y;
// }; // an anonymous function OR instantly invoked function expression (IIFE)

// console.log((x, y) => {x ** y})

/* Fucntions: Meaning of Hoisting  */
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use functions and variables before they are declared in the code.


// footballLover(); // invoking a function before its declaration

// function footballLover() {
//   console.log("I love football");
// }

// CONDITIONAL STATEMENTS
// 1. if statement ✅
// 2. if...else statement ✅
// 3. if...else if...else statement
// 4. switch statement

// boolean: true and false

// let year = prompt("Enter the year Tinubu became Nigeria President:");
// let condition = year === "2023";

// if (condition) {
//   prompt("This is true. Presdient Tinubu became Nigeria President in 2023.");
// }


// if (condition) {
//   alert("This is true.");
// } else {
//   alert("This is false.");
// }

/* Ternary Operator */
// (condition) ? alert("This is true.") : alert("This is false.");

// && — ampersand operator (logical AND)
// || — pipe operator (logical OR)

// let age = prompt("Enter your age:");

// if (age < 18) {
//   alert("You are a minor.");
// } else if (age >= 18 && age < 65) {
//   alert("You are an adult.");
// } else if (age >= 65 && age < 120) {
//   alert("You are a senior citizen.");
// } else {
//   alert("Eyan Tinubu. ArugboSet");
// }

/* Switch Statement */

let dayOfWeek = new Date().getDay();
let day;

switch (dayOfWeek) {
  case 0:
    day = "Sunday";
    break; // break statement is used to exit the switch statement
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

alert(`Today is ${day}.`); // template literal (string interpolation) using backticks (``) and ${} to embed expressions