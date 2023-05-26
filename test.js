// Flaten an array
function flatenArray(array) {
  let sum = 0;
  // 1= 0 + 1
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// const nestedArray = [1, 6, 3, 4];
// const flattenedArray = flatenArray(nestedArray);
// console.log(flattenedArray);

// ****************************************************************

// Check if a given number is a power of two

// For example:
// - 2^0 = 1 is a power of two.
// - 2^1 = 2 is a power of two.
// - 2^2 = 4 is a power of two.
// - 2^3 = 8 is a power of two.
// - 2^4 = 16 is a power of two.

function numIsPowerOfTwo(num) {
  for (let i = 0; i < num; i++) {
    if (2 * i === num) {
      return true;
    }
  }
  return false;
}

// console.log(numIsPowerOfTwo(5));

// *************************************************************

// Implement a function to generate Fibonacci series

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
