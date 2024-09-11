// ### Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.
// sample-input:
//** numbers = [5,6,11,12,98, 5]
//** find: 5
// output: 2
// <br/>
// sample-input:
// numbers = [5,6,11,12,98, 5]
// ** find: 25
// output: 0

// *** answer***

function countNumber(number, target) {
  let count = 0;
  for (let i = 0; i < number.length; i++) {
    if (number[i] === target) {
      count++;
    }
  }
  return count;
}

const numbers = [5, 6, 11, 12, 98, 5];
const find = 25;
const result = countNumber(numbers, find);
console.log(result);
