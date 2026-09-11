console.log("Hello World.");
console.log("first Javascript");

const myName = "Nicole De Leon";
myNumber = 09158484559,
    myAddress = "purok Humayan brgy luna cadiz city negros occidental";
let age = 20;

console.log("Name: " + myName);
console.log("Number: " + myNumber);
console.log("Address: " + myAddress);
console.log("Age: " + age);

//Functions
function greet(name) {
    return 'good morning, ${name}';

}
console.log(); // good morning, Nicole De Leon

function mdas(num1, num2) {
    let mul = num1 * num2;
    let div = num1 / num2;
    let add = num1 + num2;
    let sub = num1 - num2;
    return { mul, div, add, sub };
}
console.log(mdas(5, 3));

