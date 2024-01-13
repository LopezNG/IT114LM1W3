/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing

// TODO 2.1 Display "more than fifty" if randomNumber is more than fify
// Your code here
if (randomNumber > 50) {
    console.log(randomNumber+" is more than fifty")
}
else {
    console.log(randomNumber+" is not more than fifty")
}

// TODO 2.2 Display whether the random number is odd or even
// Your code here
if (randomNumber % 2 == 0) {
    console.log(randomNumber+ " is Even")
}
else {
    console.log(randomNumber+ " is Odd")
}

// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here
if (randomNumber % 3 == 0) {
    console.log("fizz")
}
else if (randomNumber % 5 == 0) {
    console.log("buzz")
}
else if (randomNumber % 3 == 0 && randomNumber % 5 == 0) {
    console.log("fizzbuzz")
}
else {
    console.log(randomNumber+ " is not multiple of 3 and 5.")
}

// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here
let toDisplay = randomNumber % 2 === 0? "Even" : "Odd";
console.log("toDisplay", toDisplay);

// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: A swtich statement first evaluates its expression. It lookes for the first case clause whose expression evaluates to the same value.
// I'ts better to use the switch statement in longer if else cases and to reduce typing.

// TODO 2.5 Use a for loop to print the numbers 1 to N
const n = 10
// Your code here
for (let i = 1; i <= n; i++) {
    console.log(i);
}

const list = ["apple", "banana", "cherry", "date", "elderberry"];
// TODO 2.6 Use a while loop to display all the values in the list
// Your code here
let i = 0;
while (i < list.length) {
    console.log(list[i])
    i++
}

// Checkpoint 2.3 What is the difference between do while and while loop?
// Answer: The while loop the condition is checked prior to executing any statements
// Do while statements are run at least once then the condition is verified

// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here
for (const i of list) {
    console.log(i);
}

// TODO 2.8 Use a for in loop to display all the values in the list
// Your code here
for (const i in list) {
    console.log(list[i]);
}

// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here
list.forEach(item => {
    console.log(item);
  });

// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: Use a for of loop when you want to iterate over the values in an array or any iterable object.
// Use a for in loop when you want to iterate over the properties of an object. 
// Use the forEach() method when you want to iterate over the elements of an array and perform a specific action on each element.

// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing


if(denominator === 0){
    throw new Error("Division by zero error")
} else {
    console.log(numerator / denominator);
}



