let arr = [1,2,3,4,5]
arr.forEach((v, i ,arr)=>{
    console.log(v+' at index of '+i);  
})

//concat
let arr2 = ['sd','ds']
let arr3 = ['trsd','5tds']
console.log('byconcat', arr.concat(arr2,arr3));

//by reduce the concat
let all = [arr,arr2,arr3]
let result = all.reduce(
    (acc, curr)=>{
        return acc.concat(curr)
    }
)
console.log('reduceconcate',result);