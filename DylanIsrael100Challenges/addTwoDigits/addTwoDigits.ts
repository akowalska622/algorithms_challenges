//My solution:
function addTwoDigits(n: any): number {
	return n % 10 + Math.floor(n/10)
}

//console.log(addTwoDigits(26)); //8
//console.log(addTwoDigits(31)); //4


//Dylan's solution:
/*function addTwoDigits(n: any): number {
	const nums = n.toString().split('')
  
  return nums.reduce((a: string, b:string) => {
  	return parseInt(a) + parseInt(b)
  })
}*/

//In my opinion Dylan's solution has unnecessary type juggling.
