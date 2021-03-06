/*
You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

    true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
    false otherwise.

For example, given the following input array:

var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
];

your function should return true as there is at least one developer from each age group.

Notes:

    The input array will always be valid and formatted as in the example above.
    Age is represented by a number which can be any positive integer up to 199.




This kata is part of the Coding Meetup series which includes a number of short and easy to follow katas which have been designed to allow mastering the use of higher-order functions. In JavaScript this includes methods like: forEach, filter, map, reduce, some, every, find, findIndex. Other approaches to solving the katas are of course possible.
*/

function isAgeDiverse(list) {
  let count = {};

  for (let dev of list) {
    if (Math.floor(dev.age / 10) === 1) count.teens = (count.teens || 0) + 1;
    if (Math.floor(dev.age / 10) === 2)
      count.twenties = (count.twenties || 0) + 1;
    if (Math.floor(dev.age / 10) === 3)
      count.thirties = (count.thirties || 0) + 1;
    if (Math.floor(dev.age / 10) === 4)
      count.forties = (count.forties || 0) + 1;
    if (Math.floor(dev.age / 10) === 5)
      count.fifties = (count.fifties || 0) + 1;
    if (Math.floor(dev.age / 10) === 6)
      count.sixties = (count.sixties || 0) + 1;
    if (Math.floor(dev.age / 10) === 7)
      count.seventies = (count.seventies || 0) + 1;
    if (Math.floor(dev.age / 10) === 8)
      count.eighties = (count.eighties || 0) + 1;
    if (Math.floor(dev.age / 10) === 9)
      count.nineties = (count.nineties || 0) + 1;
    if (dev.age > 100) count.centenarian = (count.centenarian || 0) + 1;
  }

  // let size = 0
  // for (let key in count) {
  //     if (count.hasOwnProperty(key)) size++;
  // }

  // using Map
  // let sizeMap = new Map(Object.entries(count));
  // console.log(sizeMap.size)

  let size = Object.keys(count).length;

  return size === 10;
}

console.log(
  isAgeDiverse([
    {
      firstName: 'Harry',
      lastName: 'K.',
      country: 'Brazil',
      continent: 'Americas',
      age: 19,
      language: 'Python',
    },
    {
      firstName: 'Kseniya',
      lastName: 'T.',
      country: 'Belarus',
      continent: 'Europe',
      age: 29,
      language: 'JavaScript',
    },
    {
      firstName: 'Jing',
      lastName: 'X.',
      country: 'China',
      continent: 'Asia',
      age: 39,
      language: 'Ruby',
    },
    {
      firstName: 'Noa',
      lastName: 'A.',
      country: 'Israel',
      continent: 'Asia',
      age: 40,
      language: 'Ruby',
    },
    {
      firstName: 'Andrei',
      lastName: 'E.',
      country: 'Romania',
      continent: 'Europe',
      age: 59,
      language: 'C',
    },
    {
      firstName: 'Maria',
      lastName: 'S.',
      country: 'Peru',
      continent: 'Americas',
      age: 60,
      language: 'C',
    },
    {
      firstName: 'Lukas',
      lastName: 'X.',
      country: 'Croatia',
      continent: 'Europe',
      age: 75,
      language: 'Python',
    },
    {
      firstName: 'Chloe',
      lastName: 'K.',
      country: 'Guernsey',
      continent: 'Europe',
      age: 88,
      language: 'Ruby',
    },
    {
      firstName: 'Viktoria',
      lastName: 'W.',
      country: 'Bulgaria',
      continent: 'Europe',
      age: 98,
      language: 'PHP',
    },
    {
      firstName: 'Piotr',
      lastName: 'B.',
      country: 'Poland',
      continent: 'Europe',
      age: 128,
      language: 'JavaScript',
    },
  ])
);
