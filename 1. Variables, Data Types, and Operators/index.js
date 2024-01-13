/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
var x = 5;
console.log(x);

// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let y = 1;
if (y === 1) {
  let y = 4;

  console.log(y);
}

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const m = 1;
if (m === 1) {
    const m = 3;

    console.log(m);
}

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: The var statement declares an interchangable variable, the let statement re-assignable variable,
//the const also can't be changed but if the constant is an object it can be changed.

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
const j = 2 + 9 * 2;
const a = j - 4;
const s = a / 2;
console.log(j,a,s)

// Checkpoint 1.2 What operators did you use?
// Answer: Addition Subtraction Multiplication Division

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
let v = "My";
v += " Lolipop";
console.log(v)

// Checkpoint 1.3 What operators did you use?
// Answer: I just used the simple shorthand assignment operator

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
const d1 = true && "Dubu";
const d2 = false || "Dubu";
const n3 = !"Dubu";
console.log(d1,d2)
console.log(n3)

// Checkpoint 1.4 What operators did you use?
// Answer: I used the logical operator OR(||) AND(&&) NOT(!)

// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
const cars = ["Nissan", "Ford", "Toyota", "Kia", "Mercedes"]
console.log(0 in cars ,cars[0])
console.log(5 in cars)

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: 
// Your code here
const emptyarray = [] 