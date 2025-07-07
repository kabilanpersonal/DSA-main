//interaction

let arr1 = [1, 2, 3, 4, 5,4];
let arr2 = [2, 3, 4, 5, 4, 6];

let res = new Set(arr1);
console.log(res);

let res1 = new Set(arr2)
console.log(res1);

let ans = [...res].filter(item => res1.has(item));
console.log(ans)