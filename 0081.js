//scope chaining

let c = 20;

function outer()
{
    let b = 10;
    function inner()
    {
        let a = 5;
        console.log(c);
        console.log(b);
        console.log(a);
        
        
        
    }
    inner()
}
outer()