/*
Sort the Vowels!

In this kata, we want to sort the vowels in a special format.
Task

Write a function which takes a input string s and return a string in the following way:

   
                  C|                          R|
                  |O                          n|
                  D|                          d|
   "CODEWARS" =>  |E       "Rnd Te5T"  =>      |
                  W|                          T|
                  |A                          |e
                  R|                          5|
                  S|                          T|

Notes:

    List all the Vowels on the right side of |
    List every character except Vowels on the left side of |
    Return every character in its original case
    Each line is seperated with \n
    Invalid input ( undefined / null / integer ) should return an empty string

https://www.codewars.com/kata/59e49b2afc3c494d5d00002a/train/javascript
*/

function sortVowels(s){
  if (typeof s !== "string") return ""
  
  let arr = s.split("")
  const regex = /[aeiou]/i;

  const mapped = arr.map(letter => {
    if(regex.test(letter)) {
      return `|${letter}`
    } else {
      return `${letter}|`
    }
  })
  
  return mapped.join('\n')
}
