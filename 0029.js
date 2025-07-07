//remove alterante number
let arr = [1, 2, 3, 4, 5];

let res = arr.filter((arr, index) => index % 2 == 0);
console.log(res);