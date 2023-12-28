// todo: The fill() method fills (modifies) all the elements of an array from a start index (default zero) to an end index (default array length) with a static value. It returns the modified array.
//! Syntax: array.fill(value, start, end)
// ** Example:
// const numbers = [1, 2, 3, 4, 5]
// numbers.fill(5)
// console.log(numbers);

// ! Also it fills the new array with the same static number
// const numbers = [1, 2, 3, 4, 5]
// let res = numbers.fill(5)
// console.log(res);

// ? In the fill method, we can specify the start index and end index. By default start index is 0 and end index is this.length. The start and end index are optional.If start is negative, it is treated as length + start where length is the length of the array. If end is negative, it is treated as length + end.
// const numbers = [1, 2, 3, 4, 5]
// numbers.fill(100, 1, 4);
// console.log(numbers); // It fills first, second, third index with 100.




