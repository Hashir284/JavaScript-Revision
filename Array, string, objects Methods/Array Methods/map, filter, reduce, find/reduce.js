var arr = [1, 2, 3, 4];
var result = arr.reduce((acc, curr) => {
    return acc + curr;
}, 0);  // 0 is acc first value of acc
console.log(result);


var max = arr.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
}, arr[0]);
console.log(max);


arr = [[1, 2], [3, 4], [5]];
let flat = arr.reduce((acc, curr) => {
    return acc.concat(curr);
});// or let flat = arr.reduce((acc, curr) => {
// return acc.concat(curr);
// }, []);
console.log(flat);


arr = ["a", "b", "a", "c", "b", "a"];
let count = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;   // a:1 b:1 a:2 c:1 b:2 a:3
    return acc;
}, {});
console.log(count);


arr = [1, 2, 3, 4];
result = arr.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log(result);