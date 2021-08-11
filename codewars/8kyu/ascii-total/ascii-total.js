/*
You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

examples:

uniTotal("a") == 97 
uniTotal("aaa") == 291
*/

function uniTotal(s) {
  return [...s].map(x => (x = x.charCodeAt(0))).reduce((a, b) => a + b, 0);
}

module.exports = uniTotal;
