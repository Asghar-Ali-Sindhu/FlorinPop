// todo: The some() method checks if any array elements pass a test (provided as a callback function). The some() method executes the callback function once for each array element. The some() method returns true (and stops) if the function returns true for one of the array elements. The some() method returns false if the function returns false for all of the array elements. The some() method does not execute the function for empty array elements. The some() method does not change the original array.
// !Syntax: array.some(function(value, index, arr), this)
// **** Example: Check if any values are over 18:
// const ages = [3, 10, 18, 20];
// const res = ages.some(checkAdult);
// function checkAdult(age) {
//   return age > 18;
// }
// console.log(res); //true
// **** Example: Check if any values are over 18:
// const ages = [3, 10, 18, 15];
// const res = ages.some(checkAdult);
// function checkAdult(age) {
//   return age > 18;
// }
// console.log(res); //false

// ***Example:  Check whether an element is even
// const array = [1, 2, 3, 4, 5];
// const even = (element) => element % 2 === 0;
// console.log(array.some(even)); // true

// ***Example:  Check whether a number is greater than 4
// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.some(graeterThanFour));
// function graeterThanFour(num)  {
//     return num > 4
//     }   // true
// ***Example:  Check whether a number is greater than 4
// const numbers = [1, 2, 3, 4]
// console.log(numbers.some(graeterThanFour));
// function graeterThanFour(num)  {
//     return num > 4
//     }   // false
// ***Example:  Check whether a person has age greter than or equal to 18.
const persons = [
    {
        name: "Haris",
        age:28
    },
    {
        name: 'Abdullah',
        age: 18
    },
    {
        name: "Azhar",
        age:16
    }
]
const res = persons.some(isAdult);
function isAdult(person) {
    return person.age >= 18;
}
console.log(res);