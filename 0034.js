//odd even

let arr = [1, 2, 3, 4, 5, 5];

let odd = arr.filter(item => item % 2 !== 0);
console.log(odd)
let even = arr.filter((item) => item % 2 == 0);
console.log(even);



let arr1 = [1, 2, 3, 4, 5, 5, 0, -1, -2];

let neg = arr1.filter(item => item < 0)
console.log(neg)
let pos = arr1.filter((item) => item >= 0);
console.log(pos);

console.log(...neg,...pos)