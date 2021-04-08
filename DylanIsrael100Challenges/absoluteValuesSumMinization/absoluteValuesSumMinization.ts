function absoluteValuesSumMinimization(a: number[]): number {
    let middle = Math.floor(a.length/2)
    if(a.length % 2 === 0) middle -= 1
    return a[middle]
}

console.log(absoluteValuesSumMinimization([2, 4, 7])); //4
console.log(absoluteValuesSumMinimization([2, 4, 7, 6])); //4
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6])); //7 
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8])); //7
