//  Primitive Data types

//1st ---> Number 123
//2nd ---> string ''
//3rd ---> boolean: true, false
//4th ---> undefined  jab value assign na ho
//5th ---> Null  khali   DOM me element na mile toh null aata
//  aur hum (developer) jaan bujh kar set karte he null
//6th ---> BigInt bade number unlimited
// let a = 12345678901234567890n;
// console.log(a, typeof a);
let b = BigInt("12345678901234567890");
// console.log(b, typeof b);
//7th ---> Symbol  unique value

//  Non-Primitive Data types
//1st ---> object  type -> object
//2nd ---> array  type -> object 
//3rd ---> function  type -> function
// function object bhi hota hai but typeof me 'function' aata hai

function greet() {
  console.log("Hello");
}
console.log(typeof greet);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof b);
console.log(typeof true);

