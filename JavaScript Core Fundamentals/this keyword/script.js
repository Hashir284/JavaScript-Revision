console.log(this);
function greet() {
    console.log(this);
}
greet();

//in normal function
const obj = {
    name: "Hashir",
    greet: function() {
        console.log(this.name);
    }
};

obj.greet(); // Hashir

//in arrow function
const obj2 = {
    name: "Hashir",
    greet2: () => {
        console.log(this.name);
        return this.name
    }
};
// Ye parent (lexical) scope ka this use karta hai
console.log(obj2.greet2()) // undefined

//in class
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("Hello " + this.name);
    }
}

const p1 = new Person("Hashir");
p1.greet(); // Hello Hashir