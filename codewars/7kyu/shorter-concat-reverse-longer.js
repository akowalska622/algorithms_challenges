/*
*/

const shorter_reverse_longer = (a,b) => {
  let longest = a.length >= b.length ? a : b;
  let shortest = a.length >= b.length ? b : a;
  return shortest + longest.split('').reverse().join('') + shortest;
}
