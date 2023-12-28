// todo:The every() method executes a function for each array element.

// ! The every() method returns true if the function returns true for all elements.
//! The every() method returns false if the function returns false for one element.
//! The every() method does not execute the function for empty elements.
//! The every() method does not change the original array
// ? Syntax: array.every(function(currentValue, index, arr), thisValue)
// ** The every() method is an iterative method. It calls a provided callbackFn function once for each element in an array, until the callbackFn returns a falsy value. If such an element is found, every() immediately returns false and stops iterating through the array.
// todo: Example:
// const numbers = [1, 2, 3, 4, 5]
// const res = numbers.every(isPositive)
// function isPositive(item) {
//     return item >0
// }
// console.log(res); // true

// ! Example
// const numbers = [-10, 1, 2, 3, 4, 5]
// const res = numbers.every(isPositive)
// function isPositive(item) {
//     return item >0
// }
// console.log(res); // false


// ? Use of every method on an array of objects. Check that every object has the property different from undefined
// const persons = [
//     {
//         name: "Haris"
//     },
//     {
//         name: "Danish"
//     },
//     {
//         name: "Zain"
//     },
//     {
//         surname: "Ali"
//     }
// ]
// const res = persons.every(person => person.name !== undefined)
// console.log(res); // false
// ! Example
// const persons = [
//     {
//         name: "Haris"
//     },
//     {
//         name: "Danish"
//     },
//     {
//         name: "Zain"
//     },
//     {
//         name: "Ali"
//     }
// ]
// const res = persons.every(person => person.name !== undefined)
// console.log(res); // true

// todo: To check that is it an array of arrays
// const arrays = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// const res = arrays.every(arr => Array.isArray(arr))
// console.log(res); //true

// ! Example
// const arrays = [
//     [1, 2, 3],
//     [4, 5, 6],
//     (7, 8, 9)
// ]
// const res = arrays.every(arr => Array.isArray(arr))
// console.log(res);// false

// ! Example
// const arrays = [
//     [1, 2, 3],
//     [4, 5, 6],
//     // "[7, 8, 9]"//
//     // "123"
//     123

// ]
// const res = arrays.every(arr => Array.isArray(arr))
// console.log(res);