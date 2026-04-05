// Normal function 
function greet(name) {
    console.log("Hello " + name);
}
greet("Hashir");

// Arrow Functions (ES6)
const greet2 = (name) => {
    console.log("Hello " + name);
};
greet2("Hashir");

// Default Parameters
function greet3(name = "Guest") {
    console.log("Hello " + name);
}
greet3();       
greet("Hashir");

// Rest Parameters
function sum(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num
    }
    return total;
}
console.log(sum(1,2,3,4)); 
console.log(sum(5,10));

const sum2 = (...nums) => nums.reduce((a,b)=> {return a+b})
const sum3 = (...nums) => nums.reduce((a,b)=> a+b)
console.log(sum2(5,10));
console.log(sum3(5,10));