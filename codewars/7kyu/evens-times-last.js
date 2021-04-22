/*
Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

If the sequence is empty, you should return 0.
*/
function evenLast(numbers) {
  if (numbers.length < 1) return 0
  let last = numbers[numbers.length-1]
  let odd = numbers.filter((x, idx) => idx % 2 === 0)
  
  
  return odd.reduce((a, b) => a+b) * last
}
