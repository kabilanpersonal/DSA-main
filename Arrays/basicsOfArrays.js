// ===============================
// Array & Object Practice Problems
// ===============================

// 1. Find MAX value in an array
const arr1 = [1, 2, 3, 4, 5];
console.log("Max (Math.max):", Math.max(...arr1));

let max = arr1.reduce((a, b) => (a > b ? a : b));
console.log("Max (reduce):", max);

// 2. Sum of all values in an array
const arr2 = [1, 2, 3, 4, 5];
let sum = arr2.reduce((a, b) => a + b, 0);
console.log("Sum:", sum);

// 3. Minimum value in an array
const arr3 = [10, 5, 8, 20];
console.log("Min (Math.min):", Math.min(...arr3));

let min = arr3.reduce((a, b) => (a < b ? a : b));
console.log("Min (reduce):", min);

// 4. Average of array values
const arr4 = [10, 20, 30, 40];
let avg = arr4.reduce((a, b) => a + b, 0) / arr4.length;
console.log("Average:", avg);

// 5. Get keys of an object with maximum value
const scores = { Alice: 85, Bob: 92, Charlie: 88 };
let maxScore = Math.max(...Object.values(scores));
let topStudent = Object.keys(scores).find(key => scores[key] === maxScore);
console.log("Top Student:", topStudent);

// Alternate solution
let maxVal = -Infinity;
let topKeys = [];

for (const k in scores) {
  const val = scores[k];
  if (val > maxVal) {
    maxVal = val;
    topKeys = [k];
  } else if (val === maxVal) {
    topKeys.push(k);
  }
}

console.log(maxVal, topKeys); // 92, ["Bob"]


// 6. Count occurrences of each element in an array
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
let counts = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log("Fruit counts:", counts);

// 7. Remove duplicates from an array
const arr5 = [1, 2, 2, 3, 4, 4, 5];
let unique = [...new Set(arr5)];
console.log("Unique values:", unique);

// 8. Find the longest string in an array
const words = ["cat", "elephant", "dog", "hippopotamus"];
let longest = words.reduce((a, b) => (a.length > b.length ? a : b));
console.log("Longest word:", longest);

// 9. Sort object by values
const obj = { a: 3, b: 1, c: 2 };
let sorted = Object.entries(obj).sort((a,b)=> a[1]-b[1]) //ascending

console.log("Object sorted by values:", Object.fromEntries(sorted));
