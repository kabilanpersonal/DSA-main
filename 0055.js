//closures

function outerfunction()
{
    let c = 0;
    function innerfunction()
    {
        c++;
        console.log(c);
        
    }
    return innerfunction;
}
let res = outerfunction();
res();
res();