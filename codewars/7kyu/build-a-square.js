/*
I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++

https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/train/javascript
*/

// function generateShape(integer) {
//   let str = '';
//   for (let i = 0; i < integer; i++) {
//     str += '+'.repeat(integer) + '\n';
//   }

//   return str.slice(0, -1);
// }

function generateShape(integer) {
  return `${'+'.repeat(integer)}\n`.repeat(integer).slice(0, -1);
}
