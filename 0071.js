//rest opertion

function sum(...arr)
{
    let res = arr.reduce((sum, acc) => sum + acc, 0)
    return res
}
console.log(sum(1,2,3,4,5));
