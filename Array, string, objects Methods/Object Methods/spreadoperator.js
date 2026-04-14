let user = { name: "Ali"};
let age = {age: 23, gender: 'Male'}
let newUser = { ...user, ...age};
console.log(newUser);

let user2 = { name: "Hashir" };

let updatedUser = { ...user2, age: 20 };
console.log(user2, 'haahah');

console.log(updatedUser);
