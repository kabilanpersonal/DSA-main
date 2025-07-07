let arr = [1, 2, 3, 4];

let target = 3;

for (let i = 0; i < arr.length; i++)
{
    for (let j = 0; i < arr.length; i++)
    {
        if (arr[i] + arr[j] == target)
        {
            console.log(arr[i] + " " + arr[j]);
        }
    }
}