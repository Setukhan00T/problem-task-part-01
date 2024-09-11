// ### Task-4:
// Write a function to find the longest word in a given string.

// sample-input:
// I am learning Programming to become a programmer

// *** answer ***

function findLongestWord(string) {
  let words = string.split(" ");
  let longestWord = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

const str = "I am learning Programming to become a programmer";
const result = findLongestWord(str);
console.log("The longest word is :", result);
