function isprime(n)
{
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 == 0) return false;

    for (let i = 3; i <= Math.sqrt(n) ; i += 2)
    {
        if (n % i == 0) return false;
    }
    return true;
}
let[a,b,c]= [5,2,9]
console.log(`${a} isPrime : `,isprime(a));
console.log(`${b} isPrime : `,isprime(b));
console.log(`${c} isPrime : `,isprime(c));