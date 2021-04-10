function allLongestStrings(inputArray) {
	let longestLen = 0;
  
  inputArray.forEach(x => {
  	if (x.length > longestLen) longestLen = x.length
    })
  
  return inputArray.filter(x => x.length >= longestLen)

}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"])); // ["aba", "vcd", "aba"]