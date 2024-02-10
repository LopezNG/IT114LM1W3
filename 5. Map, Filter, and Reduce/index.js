/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
const squares = numbers.map(num => num * num);
console.log("Squares:", squares);

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum:", sum);

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
const uppercaseWords = words.map(word => word.toUpperCase());
console.log("Uppercase words:", uppercaseWords);

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
const longWords = words.filter(word => word.length > 4);
console.log("Words with more than four letters:", longWords);

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
const concatenatedString = words.reduce((accumulator, currentValue) => accumulator + currentValue, "");
console.log("Concatenated string:", concatenatedString);

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: map: Applies a function to each element in an array and returns a new array with the results.
// filter: Creates a new array containing only elements that pass a certain condition.
// reduce: Executes a reducer function on each element of the array, resulting in a single output value.