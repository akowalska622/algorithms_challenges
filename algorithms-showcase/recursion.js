/*
Every recursive function has to have base case (the condition when the recursion ends).

Each call needs different input!
*/

const countDown = num => {
  if (num <= 0) {
    console.log('All done!');
    return;
  }

  console.log(num);
  num--;
  countDown(num);
};

countDown(10);

const sumRange = num => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
};

console.log(sumRange(5));

const factorial = num => {
  if (num === 1) return 1;

  return num * factorial(num - 1);
};

console.log(factorial(5));

const colectOddValues = arr => {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
};

console.log(colectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
