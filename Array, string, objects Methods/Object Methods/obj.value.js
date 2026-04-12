let user = {
    name: "Hashir",
    age: 20,
    city: "Karachi"
};
let values = Object.values(user);
console.log(values);
Object.values(user).forEach(value => {
    console.log(value);
});

let marks = {
    math: 80,
    eng: 70,
    sci: 90
};
console.log(Object.values(marks).reduce((acc, cur)=>{
    return acc + cur
}));
