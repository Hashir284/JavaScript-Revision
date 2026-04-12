// filter() kya karta hai
// Condition true ho to element rakhta hai
// false ho to hata deta hai
// Result = new array

//Even
var arr = [1, 2, 3, 4, 5, 6];
var result = arr.filter(num => num % 2 === 0);
console.log(result);

var arr = [5, 12, 8, 20, 3];
var result = arr.filter(num => num > 10);
console.log(result);

var arr = [0, 1, false, 2, "", 3, null];
var result = arr.filter(Boolean);
console.log(result);

var names = ["Ali", "Ahmed", "Sara", "Alina"];
var result = names.filter(name => name.startsWith("Al"));
console.log(result);

var arr = [1, 2, 2,,453,534,2,2,2, 3, 3, 4,'num','num','','','']
var result = arr.filter((num, index) => {
    return arr.indexOf(num) === index;
});
console.log(result);