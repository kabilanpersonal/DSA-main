//first non repating character

let str = "kannan";

let r = str.split('');
let map = new Map();

for (const r of str)
{
    map.set(r,(map.get(r) || 0) + 1)
}
console.log(Object.fromEntries(map));
let ress = '';
for (const [word, count] of map)
{
    if (count == 1)
    {
        res = word
        break;
    }
}
console.log(res);

//max and min char

let maxkey=Math.max(...[...map.values()]);

let max = '';
for (const [word, count] of map) {
  if (count == maxkey) {
    max = word;
    break;
  }
}

console.log(max)