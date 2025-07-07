//return index of target value

let arr = [1, 2, 3, 4, 5, 6];
let target = 6;

let res = arr.indexOf(target);
console.log(res + 1);

//findindex in object 

let obj = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

let tar = 2;
let ans = obj.findIndex(item => item.id == tar);
console.log(ans)
