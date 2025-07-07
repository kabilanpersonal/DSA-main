let arr = [1, 2, 3, 4, 4,2];

let map = new Map();

for (const char of arr)
{
    map.set(char, (map.get(char) || 0) + 1)
    
}
console.log([...map]);

let res = '';
for (const [char, count] of map)
{
    if (count > 1)
    {
        res += char;
    }
}
console.log(res.split('').map(Number))