/*
A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the original number. 
If this seems confusing, refer to the example below.

Ex: 153, where n = 3 (number of digits in 153)
13 + 53 + 33 = 153

Write a method is_narcissistic(i) (in Haskell: isNarcissistic :: Integer -> Bool) which returns whether or not i is a Narcissistic Number.
*/

function isNarcissistic(n) {
  let str = String(n);

  let arr = str.split('');

  console.log(arr);

  let sum = 0;
  let powered = arr.forEach(x => {
    sum += Number(x) ** str.length;
  });

  return n === sum;
}

console.log(isNarcissistic(153)); //true

console.log(isNarcissistic(9800817)); //true
