let data = [
  { name: "Alice", age: 25 },
  { name: "Bob", city: "NYC" },
  { name: "Charlie", age: 30, city: "LA" },
];

let frequency = {};

for (let obj of data) {
  for (let key in obj) {
    frequency[key] = (frequency[key] || 0) + 1;
  }
}

console.log(frequency);
