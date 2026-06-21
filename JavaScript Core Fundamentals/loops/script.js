// for 
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// forOf
let arr = [
    'a', 'b', 'c'
]
for (const element of arr) {
    console.log(element);
}

// forin 
let obj = {
    a: 'a',
    b: 'b',
    c: 'c'
}
for (const key in obj) {
    const element = obj[key];
    console.log(element);
}

let i = 0
while (i < 5) {
    i++
    console.log(i)
}

do {
    i++
    console.log(i);    
} while (i < 10);


