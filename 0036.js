//armstrong

let n = 153;

let r = n.toString().split('');
console.log(r.map(Number));
let ans = r.map(Number)
let power=ans.length
let sum = 0;
for (let i = 0; i < ans.length; i++)
{
    sum+=Math.pow(ans[i],power)
}
console.log(sum==n)
