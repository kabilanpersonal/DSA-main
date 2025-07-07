// input : [1,2,3,4,5], number of rotation: 3
// step 3: [3,4,5,1,2]

let input = [1, 2, 3, 4, 5];

let k = 3;
let n = input.length;

k = k % n;

console.log(input.slice(-k).concat(input.slice(0, -k)));