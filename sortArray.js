//  todo: The sort() method sorts an array alphabetically:
// ** Example:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits); // Unsorted
// const sortedFruits = fruits.sort();
// console.log(sortedFruits); // Sorted

// ** Example: By combining sort() and reverse(), you can sort an array in descending order:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits); //Original array
// const sortedFruits = fruits.sort();
// console.log(sortedFruits); //Sorted Alphabatically
// const reverseOrder = fruits.reverse();
// console.log(reverseOrder); //Sorted in descending order
// ** Example: ES2023 added the toSorted() method as a safe way to sort an array without altering the original array. The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.
// const months = ["Jan", "Feb", "Mar", "Apr"];
// const sorted = months.toSorted();
// console.log(sorted); // Sorted
// console.log(months); // Original is unchanged
// ** Example:
// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months); // ["Dec", "Feb", "Jan", "March"]
// ** Example: We can not sort the numbers directly
// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1); // [1, 100000, 21, 30, 4]

// * Method to arrange numbers in an array
// const numbers = [74, 18, 10, 5, 84, 24, 105]
// numbers.sort(compareFunction);
// console.log(numbers);
// function compareFunction(a, b) {
//     // 1. <0 ... a comes first
//     // 2. 0 ... nothing will be changed
//     // 3. >0 ... b comes first
//     return a - b;
// }


// ** Example: sort() method in array of objects.
// const products = [
//     {
//         name: "laptop",
//         price: 1000
//     },
//     {
//         name: 'desktop',
//         price: 1500
//     },
//     {
//         name: 'phone',
//         price: 500
//     }
// ];
// products.sort((a, b) => {
//     return a.price - b.price;
// })
// console.log(products); // The array remains unchanged.

// * Example: In order to arrange the prices in descending order
const products = [
    {
        name: "laptop",
        price: 1000
    },
    {
        name: 'desktop',
        price: 1500
    },
    {
        name: 'phone',
        price: 500
    }
];
products.sort((a, b) => {
    return b.price - a.price;
})
console.log(products); // The array remains unchanged.