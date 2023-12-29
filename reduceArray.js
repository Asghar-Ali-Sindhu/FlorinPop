// todo: The reduce() method executes a reducer function for array element. The reduce() method returns a single value: the function's accumulated result. The reduce() method does not execute the function for empty array elements. The reduce() method does not change the original array.
// !Syntax: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// ** Example: Round all the numbers and display the sum:
const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce(sum, 0)
function sum(accumulator, value) {  
  return accumulator + value; 
}
console.log(total);


//! Could not understand