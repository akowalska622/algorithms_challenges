const binary = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) return mid;

    if (arr[mid] < target) start = mid + 1;
    if (arr[mid] > target) end = mid - 1;
  }

  return -1;
};

console.log(
  binary(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    1
  )
);
