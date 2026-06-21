function greet(name = 'guest') {
  console.log("Hello " + name);
}

greet();
greet("Ali");

// 👉 "Ali" = argument
// 👉 name = parameter

const add = (a, b) => a + b;
console.log(add(2, 3));

function add2(a, b) {
  return a + b;
}
let result = add2(5, 3);
console.log(result);