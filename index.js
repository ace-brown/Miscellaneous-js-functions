const readline = require("readline");

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

// Implement a function to find the longest word in a string

const string = "this is the longest word this string";

function longestWordFinder(str) {
  const words = str.split(" ");

  let longestWord = "";
  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
}

// console.log(longestWordFinder(string));

// ********************************************************************

// Reverse an array of strings

const str2 = "go to gym";

function wordReverser(str) {
  const tokens = str.split(" ");
  let newArr = [];
  for (let token = tokens.length - 1; token >= 0; token--) {
    newArr.push(tokens[token]);
  }

  const reversesdStr = newArr.join(" ");

  return reversesdStr;
}

// console.log(wordReverser(str2));

// ****************************************************************

// Implement a function to rotate an array to the right by a given number of steps

// Example usage
// const array = [1, 2, 3, 4, 5];
// const steps = 2;
// Output: [4, 5, 1, 2, 3]

function rotateArray(nums, k) {
  const n = nums.length;
  k %= n; // Ensure k is within the range of the array length

  // Reverse the whole array
  reverse(nums, 0, n - 1);

  // Reverse the first to the k element
  reverse(nums, 0, k - 1);

  // Reverse the rest of the array from k to the end
  reverse(nums, k, n - 1);

  return nums;
}

function reverse(nums, start, end) {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}

const nums = [1, 2, 3, 4, 5];
const k = 2;

// console.log(rotateArray(nums, k));

//********************************************************

// Implement a function to check if a given year is a leap year.

// there are two conditions for this:
// 1- if it is divisable by 4, it's a leap year no matter what
// 2- i.e if it's divisable by 4 and not by 100, then it's a leap year,
// but if it's divisable by 100 then it must also be divisable by 400
// in order to be a leap year, otherwise it's not a leap year.

function leapYearDeterminer() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter a year: ", function (year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          console.log(year + " is a leap year.");
        } else {
          console.log(year + " is not a leap year.");
        }
      } else {
        console.log(year + " is a leap year.");
      }
    } else {
      console.log(year + " is not a leap year.");
    }

    rl.close();
  });
}

// leapYearDeterminer();

// **********************************************************************
// We have two sheep that we want to calculate their Body Mass Indexes.

// Formula: BMI = mass / (height * height) (mass in kg and height in meters).

// tasks:

//  For each of them, create an object with properties for their full name, mass,
//  and height . Name these objects as sheepOne and sheepTwo. Create a method on each object to calculate
//  the BMI. Assign the BMI value to a property. Log to the console who has the higher BMI,
//  Example: "sheepOne's BMI is (28.3) is higher than sheepTwo's (23.9)".

//  The fitst sheeep weighs 59 kg and is 0.69 m tall and the second sheep weighs 55 kg and is 0.56 m tall.

const sheepOne = {
  fullName: "Sheep One",
  mass: 59,
  height: 0.69,
  calcBMI: function () {
    return (this.BMI = this.mass / (this.height * this.height));
  },
};

const sheepTwo = {
  fullName: "Sheep Two",
  mass: 55,
  height: 0.56,
  calcBMI: function () {
    return (this.BMI = this.mass / (this.height * this.height));
  },
};

// sheepOne.calcBMI();
// sheepTwo.calcBMI();

// if (sheepOne.BMI > sheepTwo.BMI) {
//   return console.log(
//     `${sheepOne.fullName}'s BMI (${sheepOne.BMI}) is higher than '${sheepTwo.fullName}s (${sheepTwo.BMI})`
//   );
// } else {
//   return console.log(
//     `${sheepTwo.fullName}'s BMI (${sheepTwo.BMI}) is higher than '${sheepOne.fullName}s (${sheepOne.BMI})`
//   );
// }

// *******************************************************************************************************
