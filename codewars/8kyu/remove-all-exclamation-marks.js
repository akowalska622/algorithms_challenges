/*Description:

Remove all exclamation marks from the end of sentence.
Examples

remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/

function remove(s){
	while (s[s.length-1] === "!") {
  	s = s.slice(0, s.length-1)
  }
	return s
}


console.log(remove("Hi!")) //"Hi"
console.log(remove("Hi!!!")) //"Hi"
console.log(remove("!Hi")) // "!Hi"
console.log(remove("!Hi!")) //"!Hi"
console.log(remove("Hi! Hi!")) //"Hi! Hi"
console.log(remove("Hi")) //"Hi"
