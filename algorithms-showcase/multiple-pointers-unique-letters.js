const uniqueLetters = str => {
  let arr = str.split('');
  let i = 0;
  let j = 1;

  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    } else {
      i++;
      arr[i] = arr[j];
      j++;
    }
  }

  return arr.slice(0, i + 1).join('');
};

console.log(uniqueLetters('aaabbbcccaaaddd'));
