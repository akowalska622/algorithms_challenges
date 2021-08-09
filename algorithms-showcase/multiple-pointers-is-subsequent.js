function isSubsequence(str1, str2) {
  let newStr = '';
  let i = 0;
  let j = 0;

  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      newStr += str1[i];
      i++;
    }

    j++;
  }

  return newStr === str1;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'acb'));
console.log(isSubsequence('abc', 'abracadabra'));
