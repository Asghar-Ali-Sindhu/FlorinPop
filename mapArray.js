// todo: map() creates a new array from calling a function for every array element. map() does not execute the function for empty elements. map() does not change the original array. The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
// ! Syntax: array.map(function(currentValue, index, arr), thisValue)
// * Example:
// const array1 = [1, 4, 9, 16];
// const map1 = array1.map((x) => x * 2);
// console.log(map1); // [2, 8, 18, 32]
// * Example: Return a new array with the square root of all element values:
// const numbers = [4, 9, 16, 25];
// const newArr = numbers.map(Math.sqrt)
// console.log(newArr);

// * Example:Multiply all the values in an array with 10:
// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction)
// console.log(newArr);
// function myFunction(num) {
//   return num * 10;
// }

// * Example: Double every element of an array
// const numbers = [1, 2, 3, 4, 5]
// const res = numbers.map(double)
// function double(value) {
//     return value * 2;
// }
// console.log(res);
// * Example: Get numbers multiply by index
// const numbers = [1, 2, 3, 4, 5]
// const multiples = numbers.map(multi)
// function multi(value, index) {
//     return value*index
// }
// console.log(multiples);
// * Example: What is the total worth of all the laptops
// const products = [
//     {
//         name: 'laptop',
//         price: 1000,
//         count: 5
//     },
//     {
//         name: 'desktop',
//         price: 1500,
//         count: 5
//     },
//     {
//         name: 'phone',
//         price: 500,
//         count: 10
//     }
// ]
// const totalProductsValue = products.map(item => item.price * item.count)
// console.log(totalProductsValue);
// * Example:
const products = [
    {
        name: 'laptop',
        price: 1000,
        count: 5
    },
    {
        name: 'desktop',
        price: 1500,
        count: 5
    },
    {
        name: 'phone',
        price: 500,
        count: 10
    }
]
const totalProductsValue = products.map(item => ({
    name: item.name,
    totalValue: item.price * item.count
}));
console.log(totalProductsValue);
// * Example: We want to convert an array of strings to an array of numbers.
const str = ['1', '2', '3', '4', '5']
const numbers = str.map(Number)
console.log(numbers);