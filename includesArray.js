// todo: The includes() method returns true if an array contains a specified value. The includes() method returns false if the value is not found. The includes() method is case sensitive.

// ! Syntax: array.includes(element, start)
// ** Example
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const include = fruits.includes("Mango");
// console.log(include);

// ** Example
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const include = fruits.includes("Banana", 3);
// console.log(include);

// *Example
// const array1 = [1, 2, 3];
// console.log(array1.includes(2));
// // Expected output: true


// *Example:
// const pets = ['cat', 'dog', 'bat'];
// console.log(pets.includes('cat'));
// // Expected output: true


// *Example:
// const pets = ['cat', 'dog', 'bat'];
// console.log(pets.includes('at'));
// // Expected output: false

// ! Real life example
// const fruits = ['Apple', 'Orange', 'Mango']
// const res = fruits.includes('Orange')
// if (res) {
//     console.log('Yuppy!');
// } else {
//     console.log("Sad... Let's buy an Orange.");
// }