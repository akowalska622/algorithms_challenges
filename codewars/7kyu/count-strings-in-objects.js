/*
Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  })
  //returns 3

  https://www.codewars.com/kata/565b3542af398bfb50000003/train/javascript
  */

function strCount(obj) {
  let count = 0;
  for (let key in obj) {
    if (typeof obj[key] === 'object') count += strCount(obj[key]);
    if (typeof obj[key] === 'string') count++;
  }

  return count;
}

console.log(
  strCount({
    first: '1',
    second: '2',
    third: false,
    fourth: ['anytime', 2, 3, 4],
    fifth: null,
    sixth: undefined,
    seventh: {},
  })
); //3
