let str = "A man, a plan, a canal: Panama";

let res = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
console.log(res);

let ans = res.split('').reverse();
console.log(ans.join(''));
let ans1 = ans.join('');

console.log(res==ans1)

