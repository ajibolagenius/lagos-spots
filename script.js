// Module 2: Variables, Types & Memory Allocation
// 1. const vs let vs var (Scope & Hoisting)

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

if (true) {
  var leakedVar = 'I leak into the outer scope!';
  let scopedLet = 'I only exist within these curly braces!';
  const scopedConst = 'I also only exist within these braces!';
}

console.log(leakedVar);
console.log(scopedLet);
console.log(scopedConst);

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
