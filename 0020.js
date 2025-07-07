//moving zeros to the end

let arr = [0,1, 2, 3, 0, 0, 5, 9];

let res = arr.filter(item => item > 0);
console.log(res)
let res1 = arr.filter(item => item == 0);
console.log(res1)
console.log(...res,...res1)