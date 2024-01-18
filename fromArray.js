// todo: The Array.from() method returns an array from any object with a length property. The Array.from() method returns an array from any iterable object. The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

// ! Syntax: Array.from(object, mapFunction, thisValue)
//** Example:  */
// console.log(Array.from('foo'));
// // Expected output: Array ["f", "o", "o"]
// console.log(Array.from([1, 2, 3], (x) => x + x));
// // Expected output: Array [2, 4, 6]

// ** Create an array from a given string
// console.log(Array.from("ABCDEFG"));

// ! Convert a string of numbers to an array.
// /

// ! Convert a string of numbers to an array of numbers.
// const str = '123456789';
// const arr = Array.from(str, mapFn)
// function mapFn(x) {
//     return Number(x);
// }
// console.log(arr);



// ? Another way, a simpler one
// const str = '123456789';
// const arr = Array.from(str, Number)
// console.log(arr);

// ! Remove duplicate values from an array
// const numbers = [1, 2, 3, 4, 5, 2, 4, 2, 6, 3, 1, 4]
// const res = new Set(numbers) // This is not an array. It is an object
// console.log(res);
// // console.log(typeof res);

// ! To make it an array
// const numbers = [1, 2, 3, 4, 5, 2, 4, 2, 6, 3, 1, 4]
// const res = Array.from(new Set(numbers))
// console.log(res);
// console.log(typeof res);

// ! Similary remove duplicte strigs
// const friends = ["Haris","Asghar","Danish","Haris","Zain","Haris","Zain",]
// const res = Array.from(new Set(friends)) 
// console.log(res);
// console.log(typeof res);

