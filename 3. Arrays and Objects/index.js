/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
const firstItem = numbers[0];
const fifthItem = numbers[4];
const lastItem = numbers[numbers.length - 1];

console.log("First item:", firstItem);
console.log("Fifth item:", fifthItem);
console.log("Last item:", lastItem);

// Todo 3.2 calculate the min, max, and the average of the numbers array
const minNumber = Math.min(...numbers);
const maxNumber = Math.max(...numbers);
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const average = sum / numbers.length;

console.log("Min:", minNumber);
console.log("Max:", maxNumber);
console.log("Average:", average);

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: In Python, lists are a built-in data type, while arrays in JavaScript are a specific type of object used to store collections of data. JavaScript arrays are more flexible compared to Python lists and offer a wider range of methods for manipulation.

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
const IT114L = {
    courseCode: "IT114L",
    name: "Web Systems",
    units: 3,
    numberOfStudents: 50
};

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
IT114L.professorName = "Sir. Job";
console.log("Professor name:", IT114L.professorName);

// Todo 3.5 Declare an array of objects with information about the courses you are taking this term
const courses = [
    { courseCode: "IT114L", name: "Web Systems", units: 3 },
    { courseCode: "CS107L", name: "Information Management", units: 4 },
    { courseCode: "IT133", name: "Technoprenueship", units: 3 }
];

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
const totalUnits = courses.reduce((accumulator, course) => accumulator + course.units, 0);
console.log("Total units:", totalUnits);

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: In Python, the equivalent of objects would be dictionaries. Both objects in JavaScript and dictionaries in Python allow storing key-value pairs of data. However, JavaScript objects provide more functionality, such as object methods and inheritance, whereas Python dictionaries have specific methods like `.keys()`, `.values()`, and `.items()` for manipulation.

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
const copyOfNumbers = [...numbers, 100];
console.log("Copy of numbers:", copyOfNumbers);

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
const { courseCode: code, units } = IT114L;
console.log("Course code:", code);
console.log("Units:", units);