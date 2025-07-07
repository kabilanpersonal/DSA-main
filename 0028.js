let arr1 = [1, 2, 3, 4]
let arr2 = [2, 3, 4, 5]

let ans = [...arr1, ...arr2]
console.log(ans.sort((a,b)=>a-b))


//unique
const a = [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
console.log(a); // [1, 2, 3, 4, 5]
