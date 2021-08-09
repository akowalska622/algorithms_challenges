/*
---------- 1 ----------
Write a function called power which accepts a base and an exponent. 
The function should return the power of the base to the exponent.
This function should mimic the functionality of Math.pow().
Do not worry about negative bases and exponents.
*/

const power = (base, exponent) => {
  if (exponent === 0) return 1;

  return base * power(base, exponent - 1);
};

console.log(power(2, 0)); //1
console.log(power(2, 1)); //2
console.log(power(2, 2)); //4
console.log(power(2, 4)); //16

/*
---------- 2 ----------
Write a function called factorial which accepts a number and returns the factorial of that number.
Factorial 4! = 4 * 3 * 2 * 1 = 24
Factorial 0! is always 1
*/

const factorial = num => {
  if (num === 0) return 1;

  if (num === 1) return num;

  return num * factorial(num - 1);
};

console.log(factorial(0)); //1
console.log(factorial(1)); //1
console.log(factorial(4)); //24
console.log(factorial(7)); //5040

/*
---------- 3 ----------
Write a function called productOfArray which takes an array of numbers and returns
the product of them all
*/

const productOfArray = arr => {
  let result = 1;

  const helper = helperInput => {
    if (helperInput.length === 0) return;

    result *= helperInput[0];

    helper(helperInput.slice(1));
  };

  helper(arr);

  return result;
};

console.log(productOfArray([1, 2, 3])); //6
console.log(productOfArray([1, 2, 3, 10])); //60

// function productOfArray(arr) {
//     if(arr.length === 0) {
//         return 1;
//     }
//     return arr[0] * productOfArray(arr.slice(1));
// }

/*
---------- 4 ----------
Write a function called recursiveRange which accepts a number and adds up all the numbers
from 0 to the number passed to the function
*/

const recursiveRange = num => {
  if (num === 1) return num;

  return (num += recursiveRange(num - 1));
};

console.log(recursiveRange(6)); //21 (1+2+3+4+5+6 = 21)
console.log(recursiveRange(10)); //55 (1+2+3+4+5+6+7+8+9+10 = 55)

/*
---------- 5 ----------
Write a function called fib which accepts a number and returns the nth number in Fibonacci
sequence. Recall that the Fibonacci sequence is the sequence of whole numbers, which
starts with 1 and 1, and where every number thereafter is equal to the sum of the
previous 2 numbers.
*/

const fib = num => {
  let prevNum = 0;
  let currNum = 1;

  const helper = helperInput => {
    if (helperInput <= 1) return;

    let tempNum = currNum;
    currNum += prevNum;
    prevNum = tempNum;

    helper(helperInput - 1);
  };

  helper(num);
  return currNum;
};

console.log(fib(4)); //3 (1, 1, 2, 3)
console.log(fib(10)); //55 (1, 1, 2, 3, 5, 8, 13, 21, 24, 55)
console.log(fib(28)); //317811
console.log(fib(35)); //9227465

// function fib(n){
//     if (n <= 2) return 1;
//     return fib(n-1) + fib(n-2);
// }
