let user = {
    name: "Hashir",
    age: 20,
    city: "Karachi"
};
let keys = Object.keys(user);
console.log(keys);

Object.keys(user).forEach((v)=>{
    console.log(v);
})

let obj = {a:1, b:2, c:3};
console.log(Object.keys(obj).length);