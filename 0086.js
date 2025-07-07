//max repeaee value in array;

let str= "kannan";

let res = str.split('');

let map = new Map();

for (const char of res) {
  map.set(char, (map.get(char) || 0) + 1);
}
let maxii=Math.max(...[...map.values()]);

let result=''
for (const [char, count] of map)
{
    if (count == maxii)
    {
        result = char;
        break;
    }
}
console.log(result);
