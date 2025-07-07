//count of vowels in string

let str = "kannaneeiou";

let res = str.match(/[aeiou]/gi);
console.log(res);
let count = res ? res.length : 0;
console.log(count)

const s = "kannaneeiou";
const c = s.split('').filter(ch => 'aeiou'.includes(ch.toLowerCase())).length;
console.log(c); // 8
