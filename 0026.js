let s = "kannan";

let res = new Set(s);
console.log([...res].join(''));

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 },
];

let ans = new Set(users.map(item=>item.age));
console.log([...ans])

const data = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 92 },
  { name: "David", score: 88 },
];

let ans1 = Math.max(...data.map(item => item.score));
let wholeobj=data.filter(item=>item.score==ans1)
console.log(ans1);
console.log(wholeobj)