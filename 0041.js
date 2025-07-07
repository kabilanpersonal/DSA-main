let nums = [1, 2, 3, 4, 5, 6, 7]
let k = 4;
//Output: [5, 6, 7, 1, 2, 3, 4];

let n = nums.length;

k = k % n      // Handle k > length

let ans = nums.slice(-k).concat(nums.slice(0, -k));
console.log(ans)