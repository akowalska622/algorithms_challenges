/*Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.*/

/* BEFORE ES6
function include(arr, item){
  return arr.indexOf(item) !== -1
}
*/


//ES6

const include = (arr, item) => arr.includes(item)
