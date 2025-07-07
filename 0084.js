//largest consecutive sum

let arr = [1, -3, 2, 1, -1, 3, -2, 4];

let max = 0;
let sum = 0;

arr.forEach(ele => {
    sum += ele;
    if (sum < 0)
        sum = 0;
    max=Math.max(max,sum)
})

console.log(max);
