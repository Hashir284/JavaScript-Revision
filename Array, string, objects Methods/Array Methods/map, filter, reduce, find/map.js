//map => array ki her value modify kerta
let arr = [2,3424,54,5,345,34,65,34]
// example 1
console.log(arr.map((v, i)=>{
    return v * i
}));

// example 2
let result = arr.map(num => "Number is " + num);
console.log(result);

// example 3
result = arr.map((value, index) => {
    return index + ": " + value;
});
console.log(result);

// example 4
result = arr.map(num => num + 10);
console.log(result);

// example 5
result = arr.map(num => num * num);
console.log(result);

// example 6
let names =["Ali", "Ahmed", "Sara"];
result = names.map(name => {
    return {
        userName: name,
        length: name.length
    };
});
console.log(result);