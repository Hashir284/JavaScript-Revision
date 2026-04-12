let user = { name: "Ali"};
let age = {age: 23, gender: 'Male'}
let newUser = { ...user, ...age};
console.log(newUser);
