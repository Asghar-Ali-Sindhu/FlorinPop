// todo: The findIndex() method executes a function for each array element. The findIndex() method returns the index (position) of the first element that passes a test. The findIndex() method returns -1 if no match is found. The findIndex() method does not execute the function for empty array elements. The findIndex() method does not change the original array.
// ! Syntax: array.findIndex(function(currentValue, index, arr), thisValue)
//  ** Example: Find the index of first element with a value over 18:
// const ages = [3, 10, 18, 20];
// const adult = ages.findIndex(checkAge);
// function checkAge(age) {
//   return age > 18;
// }
// console.log(adult); // It returns the index of the over 18, the output is 3 because 20 is greater than 18 and its index is 3.

// ! Another way
// const ages = [3, 10, 18, 20];
// const adult = ages.findIndex((ele) => ele > 18);
// console.log(adult); // It returns the index of the over 18, the output is 3 because 20 is greater than 18 and its index is 3.

// ** Example: Find the index of the first number greater than 13
// const array1 = [5, 120, 8, 130, 44];
// const isLargeNumber = (element) => element > 13;
// console.log(array1.findIndex(isLargeNumber));
// ! Another way
// const array1 = [5, 120, 8, 130, 44];
// const isLargeNumber = array1.findIndex(element => element > 13)
// console.log(isLargeNumber);

// ** Example: Find the index of number 5
// const numbers = [2, 20, 5, 7, 19]
// const numFive = numbers.findIndex(number => number == 5)
// console.log(numFive); // index of 5 is 2.

// ! Another Way
// const numbers = [2, 20, 5, 7, 19]
// const reqNum = numbers.findIndex(findSeven)
// function findSeven(number) {
//     return number == 7
// }
// console.log(reqNum);