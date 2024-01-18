// todo: The forEach() method calls a function for each element in an array. The forEach() method is not executed for empty elements. The forEach() method of Array instances executes a provided function once for each array element.

// ! Syntax: array.forEach(function(currentValue, index, arr), thisValue)
// ** Example:
const array1 = ['a', 'b', 'c'];
array1.forEach((element) => console.log(element));

//** Example */



// ** Find the sum of the numbers in an array
// const array = [1, 2, 3, 4, 5]
// let sum = 0;
// array.forEach(item => {
//     sum += item
//     // console.log(sum); //It will show sum on each step
// })
// console.log(sum); // It shows the combined sum

// ! How many times a letter appears in an array
const letters = ['a', 'b', 'a', 'b', 'c', 'd', 'a']
let count = {};
letters.forEach(item => {
    if (count[item]) {
        count[item]++;
    } else {
        count[item] = 1;
    }

});
console.log(count);

