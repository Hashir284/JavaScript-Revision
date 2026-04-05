
//1. Global Scope
let a = 10; // global

function test() {
    console.log(a); // 10
}

console.log(a); // 10
test();

//2. Local / Function Scope
function greet() {
    let name = "Hashir"; // local
    console.log(name);
}

greet();       // Hashir
// console.log(name); // Error: name is not defined

//3. Block Scope
{
    let x = 5;
    const y = 10;
    console.log(x, y); // 5 10
}
// console.log(x, y); // Error