// ### Task-3:
// Write a function to count the number of vowels in a string.

// *** answer***

function findVowels(string) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      count++;
    }
  }
  return count;
}
const str = "how are YoU";
const result = findVowels(str);
console.log(result);
console.log(typeof str);      
