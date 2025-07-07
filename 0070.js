//swap first and last

let n = "lion";
//lion -> niol

if (n.length > 1)
{
    n = n[n.length - 1] + n.slice(1, n.length - 1) + n[0];
}
console.log(n);

