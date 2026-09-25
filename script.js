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
console.log(greet(`Rene`));

function mdas(num1, num2) {
    let mul = num1 * num2;
    let div = num1 / num2;
    let add = num1 + num2;
    let sub = num1 - num2;
    return { mul, div, add, sub };
}
console.log(mdas(5, 3));

// Query Selector
const heading = document.querySelector("h1");
console.log(heading);

const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);

const projectsHeading = document.querySelector("#projects h2");
console.log(projectsHeading);
const servicesHeading = document.querySelector("#services h2");
console.log(servicesHeading);

//text Content
heading.textContent = "My Portfolio";
contactHeading.textContent = "lets connect";
projectsHeading.textContent = "My Projects";
servicesHeading.textContent = "My Services";

//.style
heading.style.color = "purple";
heading.style.backgroundColor = "yellow";
contactHeading.style.color = "purple";
projectsHeading.style.color = "purple";
servicesHeading.style.color = "purple";


