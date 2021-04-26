/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

// FIRST ATTEMPT
// function humanReadable(seconds) {
//   let hours = 0;
//   let minutes = 0;
//   let s = 0;

//   if (seconds < 60) s = seconds;

//   if (seconds < 3600) {
//     minutes = Math.floor(seconds / 60);
//     s = seconds - minutes * 60;
//   }

//   if (seconds >= 3600) {
//     hours = Math.floor(seconds / 3600);
//     let secondsLeft = seconds - hours * 3600;

//     minutes = Math.floor(secondsLeft / 60);

//     s = secondsLeft - minutes * 60;
//   }

//   return `${hours < 10 ? '0' + hours : hours}:${
//     minutes < 10 ? '0' + minutes : minutes
//   }:${s < 10 ? '0' + s : s}`;
// }

//SECOND ATTEMPT

const humanReadable = seconds => {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds / 60) % 60);
  let s = seconds % 60;

  return `${hours < 10 ? '0' + hours : hours}:${
    minutes < 10 ? '0' + minutes : minutes
  }:${s < 10 ? '0' + s : s}`;
};

console.log(humanReadable(0)); //'00:00:00',
console.log(humanReadable(5)); //'00:00:05',
console.log(humanReadable(60)); //'00:01:00'
console.log(humanReadable(3543));
console.log(humanReadable(86399)); //'23:59:59'
console.log(humanReadable(359999)); //'99:59:59'
