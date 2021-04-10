/*Given a non-negative integer, return an array / a list of the individual digits in order.

Examples:

123 => [1,2,3]

1 => [1]

8675309 => [8,6,7,5,3,0,9]

*/

const digitize = n => {
  let arr = String(n).split('');

  return arr.map(x => Number(x));
};

console.log(digitize(123));
console.log(digitize(1));
console.log(digitize(8675309));
