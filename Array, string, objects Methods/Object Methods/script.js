let user = {
    name: "Hashir",
    address: { city: "Karachi" }
};
let { name } = user;

let updated = {
    ...user,
    age: 21,
    city: user?.address?.city
};
console.log(updated);