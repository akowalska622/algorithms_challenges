/*
---------- 1 ----------
Write a function called reverse which accepts a string and returns a new string in reverse
*/

function reverse(str) {
  if (str.length <= 1) return str;

  return str[str.length - 1] + reverse(str.slice(0, -1));
}

// console.log(reverse("hello world"))

/*
  ---------- 2 ----------
  Write a function called isPalindrome which return true if the string is a palindrome.
  */

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
  let reversed = '';

  const helper = input => {
    if (input.length <= 1) {
      reversed += input;
      return;
    }

    reversed += input[input.length - 1];
    helper(input.slice(0, -1));
  };

  helper(str);

  return reversed === str;
}

/*
  ---------- 3 ----------
  Write a function called someRecursive which accepts an array and a callback. The function
  returns true if a single value in the array return true when passed to the callback.
  */

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(array, callback) {
  if (array.length <= 1) return callback(array[0]);

  return callback(array[0]) || someRecursive(array.slice(1), callback);
}

/*
  ---------- 4 ----------
  Write a function called flatten which accepts an array and returns a new array
  with all values flattened
  */

const flatten = arr => {
  if (arr.filter(Array.isArray).length === 0) return arr;

  return flatten(arr.flat());
};

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]

/*
  ---------- 5 ----------
  Write a function called capitalizeFirst. Given an array of strings, capitalize the first
  letter of each string in the array.
  */

// const capitalizeFirstNotRecursive = arr => {
//     return arr.map(word => word[0].toUpperCase() + word.slice(1))
// }

// console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']

/*
  ---------- 6 ----------
  Write a function called nestedEvenSum. Return the sum of all even numbers in an 
  object which may contain nested objects.
  */

function nestedEvenSum(obj) {
  let str = JSON.stringify(obj);

  let sum = 0;

  let helper = input => {
    if (input.length <= 1) return input;

    if (/[0-9]/.test(input[0]) && Number(input[0] % 2 === 0)) {
      sum += Number(input[0]);
    }

    helper(input.slice(1));
  };

  helper(str);

  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
};

// console.log(nestedEvenSum(obj1)); // 6
// console.log(nestedEvenSum(obj2)); // 10

/*
  ---------- 7 ----------
  Write a function called capitalizeWords. Given an array of words, return a new array
  containing each word capitalized
  */

function capitalizeWords(arr) {
  if (arr.length <= 1) return [array[0].toUpperCase];

  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

/*
  ---------- 8 ----------
  Write a function called stringifyNumbers which takes in an object and finds all the 
  values which are numbers and converts them to string
  */

/*
  let obj = {
      num: 1,
      test: [],
      data: {
          val: 4,
          info: {
              isRight: true,
              random: 66
          }
      }
  }
  /*
  
  stringifyNumbers(obj)
  
  /*
  {
      num: "1",
      test: [],
      data: {
          val: "4",
          info: {
              isRight: true,
              random: "66"
          }
      }
  }
  */
