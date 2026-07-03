const user = {
  name: "Hashir"
};

Object.freeze(user);

user.name = "Ali";
user.age = 18;

console.log(user);