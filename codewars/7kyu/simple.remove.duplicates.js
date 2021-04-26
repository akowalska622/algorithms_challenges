/*
In this Kata, you will remove the left-most duplicates from a list of integers and return the result.

// Remove the 3's at indices 0 and 3
// followed by removing a 4 at index 1
solve([3, 4, 4, 3, 6, 3]); // => [4, 6, 3]
More examples can be found in the test cases.

Good luck!

https://www.codewars.com/kata/5ba38ba180824a86850000f7/train/javascript
*/

const solve = arr => {
  return [...new Set(arr.reverse())].reverse();
};

console.log(solve([3, 4, 4, 3, 6, 3])); //[4,6,3]
console.log(solve([1, 2, 1, 2, 1, 2, 3])); //[1,2,3]
console.log(solve([1, 2, 3, 4])); //[1,2,3,4]
console.log(solve([1, 1, 4, 5, 1, 2, 1])); //[4,5,2,1]
console.log(solve([1, 2, 1, 2, 1, 1, 3])); //[2,1,3]
