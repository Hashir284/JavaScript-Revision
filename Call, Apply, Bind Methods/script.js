const person = {
  name: "Hashir",
};

function greet(city, country) {
  console.log(`My name is ${this.name}. I live in ${city}, ${country}.`);
}

// 1. call()
// this set karta hai.
// Function turant execute hota hai.
// Arguments comma separated hote hain.
greet.call(person, "Karachi", "Pakistan");

// 2. apply()
// this set karta hai.
// Function turant execute hota hai.
// Arguments array mein pass hote hain.
greet.apply(person, ["Karachi", "Pakistan"]);

// 3. bind()
// this set karta hai.
// Function turant execute nahi hota.
// Naya function return karta hai.
const newFunc = greet.bind(person, "Karachi", "Pakistan");
newFunc();