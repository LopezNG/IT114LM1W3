/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// Call the 'greet' function with your name as the argument
greet("John");

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: Function declarations are hoisted, meaning they can be called before they are defined in the code, while function expressions are not hoisted. Function declarations also have a named identifier, while function expressions can be anonymous or have a name.

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
const calculateArea = function(length, width) {
    return length * width;
};

// Call the 'calculateArea' function with any length and width as arguments
const length = 5;
const width = 10;
const area = calculateArea(length, width);
console.log("Area:", area);

// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: A callback function is a function passed as an argument to another function, which is then invoked inside the outer function to complete some kind of routine or action. An example:

function processArray(array, callback) {
    return array.map(callback);
}

function doubleNumber(num) {
    return num * 2;
}

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = processArray(numbers, doubleNumber);
console.log("Doubled numbers:", doubledNumbers);

// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
function modifyArray(array, func) {
    return array.map(func);
}

// Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
const incrementedNumbers = modifyArray(numbers, num => num + 1);
console.log("Incremented numbers:", incrementedNumbers);

// Checkpoint 4.3 What does the require function and module.exports variable do?
// Answer: In Node.js, the `require` function is used to import modules, and `module.exports` is used to export variables, functions, or objects from a module to make them available to other modules. It allows for modularity and code reuse in Node.js applications.

// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: 
