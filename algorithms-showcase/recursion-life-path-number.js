/* 
A person's Life Path Number is calculated by adding each individual number in that 
person's date of birth, until it is reduced to a single digit number.

Complete the function that accepts a date of birth (as a string) in the following 
format: "yyyy-mm-dd". The function shall return a one digit integer between 
1 and 9 which represents the Life Path Number of the given date of birth.

You do not need to check that the input is correct format, you can assume that it will 
always be a valid date (as a string) with given format.

Example
For example, Albert Einstein's birthday is March 14, 1879 ("1879-03-14"). 
The calculation of his Life Path Number would look like this:
year  :  1 + 8 + 7 + 9 = 25  -->  2 + 5 = 7
month :  0 + 3 = 3
day   :  1 + 4 = 5
result:  7 + 3 + 5 = 15  -->  1 + 5 = 6
*/

function lifePath(date) {
  let wholeNum = Number(date.replaceAll('-', ''));

  //reduce a wholeNum date -> remember it's a string rn
  //check if result has 1 digit
  //if yes return
  //if no, reduce again -> remember you have a digit now

  const recursion = num => {
    if (num < 10) return num;

    numString = String(num);

    numArr = numString.split('');

    return recursion(numArr.reduce((a, b) => Number(a) + Number(b)));
  };

  return recursion(wholeNum);

  //         let step1 = wholeNum.reduce((a,b) => Number(a)+Number(b))
  //         console.log(step1)

  //         let step2 = String(step1)
  //         console.log(step2)

  //         let step3 = step2.split("")
  //         console.log(step3)

  //         let step4 = step3.reduce((a, b) => Number(a) + Number(b))
  //         console.log(step4)
}

console.log(lifePath('1879-03-14'));
console.log(lifePath('1815-12-10'));
