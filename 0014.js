//missing number
let arr = [1, 2, 3, 4, 5, 7];

let n = arr.length+1;
console.log(n);

let res = n * (n + 1) / 2;
console.log(res);

let totalarr = arr.reduce((sum, acc) => sum + acc, 0);
console.log(totalarr)
let miss = res - totalarr;
console.log(miss)

//missing numbers
const a =[1,2,4,6,8]
const max = Math.max(...a)
console.log("Max : ",max)
let b= new Set(a);
const missing = [];

for (let i = 1; i <= max; i++) {
  if (!b.has(i)) {
    missing.push(i);
  }
}
console.log(missing)