function adjacentElementsProduct(inputArray: number[]): number {
	let maxProduct: number = 0;
  
  for (let i = 0; i < inputArray.length-1; i++) {
  	let sum = inputArray[i] * inputArray[i+1]
    if(maxProduct < sum) maxProduct = sum
  }
  
  return maxProduct
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); //21
