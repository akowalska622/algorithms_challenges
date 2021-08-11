/*
  Title:
    Broken Counter
  Description:
    Our counter prototype is broken. Can you spot, what's wrong here?
  Kata Link:
    https://www.codewars.com/kata/broken-counter
  Discuss Link:
    https://www.codewars.com/kata/broken-counter/discuss
  Solutions Link:
    https://www.codewars.com/kata/broken-counter/solutions
*/

class Counter {
  constructor() {
    this.value = 0
  }
  
  increase() {
    return this.value++
  }
  
  getValue() {
    return this.value
  }
  
  reset() {
    return this.value = 0
  }
}

