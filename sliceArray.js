// todo: The slice() method returns selected elements in an array, as a new array. The slice() method selects from a given start, up to a (not inclusive) given end. The slice() method does not change the original array.
// ! Syntax: array.slice(start, end)
// *Example:
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// console.log(fruits);
// const citrus = fruits.slice(1, 3);
// console.log(citrus);
// console.log(fruits);
// *Example: Select elements using negative values:
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const myBest = fruits.slice(-3, -1);
// console.log(myBest);

// *Example:
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2)); // ["camel", "duck", "elephant"]

// *Example:
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2, 4)); // ["camel", "duck"]

// *Example:
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(1, 5)); // ["bison", "camel", "duck", "elephant"]

// *Example:
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(-2)); // ["duck", "elephant"]

// *Example:
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2, -1)); // ["camel", "duck"]
// *Example:
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice()); //["ant", "bison", "camel", "duck", "elephant"]


// ! Shallow and Deep Copy
/* In JavaScript, there are two ways to copy objects: shallow copy and deep copy. Shallow copying creates a new object with references to the same memory locations as the original object, while deep copying creates a new object with new memory locations for all of its properties and nested objects or arrays. */