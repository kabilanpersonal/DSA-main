//higher order function

function hoc(a, b, operation)
{
    return operation(a,b)
}

function add(a, b)
{
    return a + b;
}

console.log(hoc(5,3,add));

