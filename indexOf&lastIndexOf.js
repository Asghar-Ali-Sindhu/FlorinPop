// todo: The indexOf() method returns the position of the first occurrence of a value in a string. The indexOf() method returns -1 if the value is not found. The indexOf() method is case sensitive.
// todo: The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.

// !Syntax: string.indexOf(searchvalue, start)
// * Exmaple: Find the index of a word
// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("welcome");
// console.log(result);

// * Example of case sensitivity
// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("Welcome");
// console.log(result);

// * Example: Find the first occurence of letter 'e'
// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("e");
// console.log(result);

// * Example: Find the first occurrence of "e", starting at position 5:
// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("e", 5);
// console.log(result);

// ** Find the first occurrence of "a":
// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("a");
// console.log(result);

// ! Example
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));
// Expected output: 1
// /********************* */
// Start from index 2
console.log(beasts.indexOf('bison', 2));
// // Expected output: 4
// /***************** */
// console.log(beasts.indexOf('giraffe'));
// // Expected output: -1

// ? If we want to replace a particular element from an array.
// ! We want to replace Yaqoob by Fareeha, but we want know the postion of Fareeha because the length of customers array is large enough.
// const customers = ['Rashid', 'Yaqoob', 'Nabeela', 'Shagufta']
// const tobeReplaced = customers.indexOf('Yaqoob')
// customers[tobeReplaced]= "Fareeha"
// console.log(customers);

// * Short Way
// const customers = ['Rashid', 'Yaqoob', 'Nabeela', 'Shagufta']
// customers[customers.indexOf('Yaqoob')]= "Fareeha"
// console.log(customers);

//***************lastindexOf an Array ************** */
// todo: The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string. The lastIndexOf() method searches the string from the end to the beginning. The lastIndexOf() method returns the index from the beginning (position 0). The lastIndexOf() method returns -1 if the value is not found. The lastIndexOf() method is case sensitive.
// ! Syntax: string.lastIndexOf(searchvalue, start)
// * Example: Search for the last occurrence of "planet":
// let text = "Hello planet earth, you are a great planet.";
// let result = text.lastIndexOf("planet");
// console.log(result);
// * Example: Case Senstivity
// let text = "Hello planet earth, you are a great planet.";
// let result = text.lastIndexOf("Planet");
// console.log(result);
// * Example:
// const paragraph = "I think Ruth's dog is cuter than your dog!";
// const searchTerm = 'dog';
// console.log(
//   `Index of the last ${searchTerm} is ${paragraph.lastIndexOf(searchTerm)}`,
// );
// Expected output: "Index of the last "dog" is 38"
// * Example:
// * Example:
// * Example:
// * Example:
// * Example: