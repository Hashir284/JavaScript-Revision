const user = {
  name: "Hashir"
};

Object.seal(user);
user.name = "Ali";
user.age = 12


console.log(user);
