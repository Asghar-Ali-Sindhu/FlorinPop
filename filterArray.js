// todo: Description. The filter() method is an iterative method. It calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a truthy value. Array elements which do not pass the callbackFn test are not included in the new array.
// ! Example
// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter((word) => word.length < 6);
// console.log(result);

// ? Find an array of even numbers from a given array
// const numbers = [1, 2, 3, 4, 5, 6]
// let evenNumbers = numbers.filter(number => number % 2 == 0)
// console.log(evenNumbers);


// ! Find an array of objects of persons which are adult
// const people = [
//     {
//         name: 'Florin',
//         age: 26
//     },
//     {
//         name: 'Ivan',
//         age: 18
//     },
//     {
//         name: 'Jai',
//         age: 15
//     }
// ]
// let adult = people.filter(person => person.age >= 18); // This is an array
// console.log(adult[0].name);


// ! Use to remove duplicate elements. However this problem has better options
// const numbers = [1, 2, 3, 2, 1, 3, 3, 5, 4, 6]
// const removeDuplicate = numbers.filter((value, index, arr) => {
    
//     return arr.indexOf(value) === index
// }
// )
// console.log(removeDuplicate); // try to understand again