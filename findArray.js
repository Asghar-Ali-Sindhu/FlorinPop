// todo: The find() method returns the value of the first element that passes a test. The find() method executes a function for each array element. The find() method returns undefined if no elements are found. The find() method does not execute the function for empty elements. The find() method does not change the original array.
// ! Syntax: array.find(function(currentValue, index, arr),thisValue)
// ? Example:
// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find((element) => element > 10);
// console.log(found);

// todo: Example
// const names = ['Haris', "Danish", "Zain"]
// const res = names.find(item => item === "Danish")
// console.log(res);
// ? Another way
// const names = ['Haris', "Danish", "Zain"]
// const res = names.find(findHaris);
// function findHaris(item) {
//     return item === "Haris"
// }
// console.log(res);

// ? It gives undefined it the item is not present in the array.
// const names = ['Haris', "Danish", "Zain"]
// const res = names.find(findHaris);
// function findHaris(item) {
//     return item === "Fatima"
// }
// console.log(res);

// ! Use in objects
const persons = [
    {
        name: "Haris",
        age: 28
    },
    {
        name: "Danish",
        age: 25
    },
    {
        name: "Zain",
        age: 22
    }
]
const age = persons.find(findZain).age
function findZain(person) {
    return person.name === "Zain"
}
console.log(age);