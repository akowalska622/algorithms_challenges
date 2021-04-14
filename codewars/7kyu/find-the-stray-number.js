/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)
Examples

[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

*/

function stray(numbers) {
  if (numbers.length === 1) return numbers[0]
  
  let counter = {}
  
  for (let num of numbers) {
    counter[num] = counter[num] ? counter[num] = counter[num] + 1 : 1  
  }
  
  return Number(Object.keys(counter).find(key => counter[key] === 1))
}
