// Hoisting = JavaScript automatically variables & functions ko top pe “lift” karta hai before execution

// Var Hoisting
console.log(a); // undefined
var a = 5;

//let/const hoisting
// console.log(b); // Error: Cannot access 'b' before initialization
// let b = 10;

// greet();
// function greet() {
//     console.log("Hello");
// }

// greet(); // not function
// var greet = () => console.log("Hello");

// greet(); // error
// let greet = () => console.log("Hello");

// greet(); // error
// const greet = () => console.log("Hello");