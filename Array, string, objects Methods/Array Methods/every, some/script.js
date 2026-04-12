//  some() ===> some sirf pehli true condition dekhta find ki tarah
//  every ===> every sari value ki condition dekhta filter ki tarah
let arr = [21, 12, 23];

let result = arr.some((num, i, arr, f)=>{
    // console.log(num);
    // console.log(i);
    // console.log(arr);
    console.log(f); // undefine
    return num>2
});
console.log(result);

result = arr.some(num => {
    if(num > 20){
        console.log("Big number found:", num);
        return true;
    } else {
        return false;
    }
});

console.log(result);

result = arr.every((num, i, arr)=>{
    console.log('//every');
    // console.log(num);
    // console.log(i);
    // console.log(arr);
    return num>29
});

console.log(result);

let studentmarks1 = [33,43,54,78,12]
let studentmarks2 = [33,43,54,78,82]
studentmarks2 = studentmarks2.every((num)=>{
    if(num >= 33){
        return true
    }else {
        return false
    }
})
if(studentmarks1) {
    result = 'pass'
    
} else {
    result = 'Fail'
    
}
console.log(result);

