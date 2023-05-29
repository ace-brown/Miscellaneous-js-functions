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

function fibonacci(num) {
  let fibSeries = [0, 1];

  if (num <= 1) {
    return fibSeries.slice(0, n + 1);
  }

  for (let i = 1; i < num; i++) {
    let nextFib = fibSeries[i] + fibSeries[i - 1];
    fibSeries.push(nextFib);
  }

  return fibSeries;
}

// console.log(fibonacci(9));

// *************************************************************************

// Find the missing number in an array of consecutive numbers

// [1,2,4,8, x, 32]
function findMissingNumber(array) {
  // Calculate the expected sum of consecutive numbers
  const n = array.length + 1;
  const expectedSum = (n * (n + 1)) / 2;

  // Calculate the actual sum of the given array
  const actualSum = array.reduce((sum, num) => sum + num, 0);
  console.log(`acutal sum: ${actualSum}`);
  console.log(`acutal sum: ${expectedSum}`);

  // The missing number is the difference between the expected and actual sums
  const missingNumber = expectedSum - actualSum;

  return missingNumber;
}

// Example usage
// const numbers = [1, 2, 3, 5, 6, 7, 8];
// const missingNumber = findMissingNumber(numbers);
// console.log(missingNumber); // Output: 4

// *************************************************************************************

// Implement a function to rotate an array to the right by a given number of steps

// Example usage
// const array = [1, 2, 3, 4, 5];
// const steps = 2;
// Output: [4, 5, 1, 2, 3]
