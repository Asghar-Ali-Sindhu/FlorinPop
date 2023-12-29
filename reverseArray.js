// todo: The reverse() method reverses the order of the elements in an array. The reverse() method overwrites the original array. The reverse() method of Array instances reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.
// * Example:
// const array1 = ['one', 'two', 'three'];
// console.log('array1:', array1);
// const reversed = array1.reverse();
// console.log('reversed:', reversed);

// * Example:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// const reversed = fruits.reverse();
// console.log(reversed);
// * Example: Write the array in reverse order
// const array = [1, 2, 3, 4, 5]
// console.log(array);
// const reversed = array.reverse()
// console.log(reversed);
// console.log(array); // Original array is changed.
// * Example: If you dont want to change the original array
// const array = [1, 2, 3, 4, 5]
// console.log(array);
// const reversed = array.concat().reverse()
// console.log(reversed);
// console.log(array); // Original array is not changed.

// * Example: Another Method
// const array = [1, 2, 3, 4, 5]
// console.log(array);
// const reversed = [...array].reverse()
// console.log(reversed);
// console.log(array); // Original array is not changed.
// // * Example: Write a string in reverse order

// * Example: 
// const str = 'we are muslims'
// console.log(str);
// const reversed = str.split('')
// console.log(reversed);
// const reversed = str.split('').reverse()
// console.log(reversed);
// const reversed = str.split('').reverse().join('')
// console.log(reversed);
// * Example: