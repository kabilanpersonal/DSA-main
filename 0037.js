//print event digit
let nums = [12, 345, 2, 6, 7896];

let result = [];
for (let num of nums)
{
    let r = num.toString().length;
    console.log(r)
    if (r % 2 == 0)
    {
        result.push(num);
    }
}
console.log(result)