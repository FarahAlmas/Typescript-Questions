"use strict";
/*/## Basic Functions Question:

Define a function called `greet` that takes a parameter `name` and
returns a greeting message including the provided `name`. Then, call
the `greet` function with the argument "John" and log the result to the console.*/
function greet(name) {
    return "Hello" + name;
}
console.log(greet("john")); // invoking the function
/*## Function Return Value Question:

Write a JavaScript function named `calculateArea` that takes two parameters: `length` and
`width`, representing the length and width of a rectangle respectively. The function
 should calculate the area of the rectangle and return the result.
Provide an example of calling this function with values `5` for length and `3` for width,
 and then print the result.*/
function calculateArea(length, width) {
    return length * width;
}
console.log(calculateArea(5, 3));
/*## Rest Parameter Question:

Explain the concept of a rest parameter in typescript. write a typeScript function named
`friend` that accepts any name of parameters and returns all name in array.

For example:
- If `name('taha', 'Ahmed', 'Ali'), it should return ['taha', 'Ahmed', 'Ali*/
function friend(...names) {
    return names;
}
console.log(friend(`dua`, `rina`, `sara`));
/*## Spread Operator:
Explain the concept of a spread operator in typescript. write a typeScript function named
 `friend` that accepts any name of parameters and returns all name in array.then make a
 copy of that name and pop last name form array. make sure your orignal array should not
 be change.

For example:## Spread Operator:

- If `name('taha', 'Ahmed', 'Ali'), it should return ['taha', 'Ahmed', 'Ali'].*/
let friend2 = (...name) => {
    return name;
};
console.log(friend('dua', 'sara', 'rina'));
let copy = friend('dua', 'sara', 'rina');
copy.pop();
console.log(copy);
