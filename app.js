// ? Task:Check if array is empty


// Solution 1

const isNotEmpty = arr => Array.isArray(arr) && arr.length > 0;

console.log(isNotEmpty([1, 2, 3]));
console.log(isNotEmpty([]));
console.log(isNotEmpty(2));
// Result: true

// ! Explanation: Simple one liner to check if an array is empty, will return true or false.