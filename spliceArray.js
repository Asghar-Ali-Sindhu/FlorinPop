// todo: The splice() method adds and/or removes array elements. The splice() method overwrites the original array.
// ! Syntax: array.splice(index, howmany, item1, ....., itemX)
// *Example: At position 2, add 2 elements:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits);
// *Example: At position 2, remove 2 items:
// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// fruits.splice(2, 2);
// console.log(fruits);
// *Example: Insert one element at index 1
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// console.log(months); // ["Jan", "Feb", "March", "April", "June"]

// * Example: Replaces 1 element at index 4
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(4, 1, 'May');
// console.log(months); // ["Jan", "Feb", "March", "April", "May"]
// * Example: Replaces 1 element at index 3
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(3, 1, 'May');
// console.log(months); // ["Jan", "Feb", "March", "April", "May"]

// * Example: Remove the last three elements
// const numbers = [1, 2, 3, 4, 5]
// const res = numbers.splice(2, 3)
// console.log(numbers); // [1,2] is left in original array
// console.log(res); // [3,4,5] is the removed portion
// * Example: Replace some elements
// const numbers = [1, 2, 3, 4, 5]
// const res = numbers.splice(2, 3, 6, 7)
// console.log(numbers); // [1,2,6,7] 
// * Example: If we do not want to remove any element but want to add new elements.
// const numbers = [1, 2, 3, 4, 5]
// const res = numbers.splice(0, 0, 6, 7)
// console.log(numbers); // It will add 6,7 in the beginning.


