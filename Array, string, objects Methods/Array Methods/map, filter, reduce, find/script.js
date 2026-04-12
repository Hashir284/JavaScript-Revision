let greaterthen13 = (e) => {
    if (e > 13) {
        return true
    }
    return false
}
let arr = [21, 12, 23]
console.log(arr.map(greaterthen13));
console.log(arr.filter(greaterthen13));
console.log(arr.find(greaterthen13));
console.log(arr.reduce(greaterthen13));
 
let result = arr.reduce((acc, curr) => {
    if (curr > 13) {
        acc++
    }
    return acc
}, 0)
console.log(result); // 2 

arr.reduce((acc, curr, index, array) => {
    console.log('acc', acc);// acc = accumulator (result / value)
    console.log('curr', curr);// result = currentvalue
    return acc + curr
});


