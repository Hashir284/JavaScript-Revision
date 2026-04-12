let user = {
    name: "Hashir",
    age: 20
};
let entires = Object.entries(user)
console.log(entires);

entires.forEach(([key, value])=>{
 console.log(key, value);
})

let obj = {a: 1, b: 2};
let result = Object.entries(obj).map(([key, value])=>{
    return [key , value*2]
})
console.log(result);
obj = Object.fromEntries(result)
console.log(obj);

// Full combo (INTERVIEW LEVEL)
obj = {a: 1, b: 2};
result = Object.fromEntries(
    Object.entries(obj).map(([key, value])=>{
    return [key , value*2]
}))
console.log('best combo code', result);
