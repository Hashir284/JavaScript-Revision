// trim 
// " Ali " → trim() → "Ali"
// " " → trim() → "" (empty)

// let username = input.value.trim();
let username = ''.trim()
if(username === ""){
    console.log("Empty username not allowed");
}
let name = "   Hashir   ";
console.log(name.trim());

// includes, indexOf, slice, split, toLowerCase, toLowerCase
let str = 'fsdgerfgsdv'
console.log(str.includes('f')); 
console.log(str.includes('l')); 
console.log(str.indexOf('f')); 
console.log(str.indexOf('l')); 
console.log(str[0]+str.slice(1).toLowerCase()); 
console.log(str[0].toUpperCase()+str.slice(1)); 
console.log(str.replace('f', 2), str)
console.log(str.replaceAll('f', 2), str)
console.log(str.split('f'))
 
