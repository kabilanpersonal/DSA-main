//tupescript fundamentals 
const add = (a: number, b: number): void => {
    let sum = a + b;
    console.log(sum)
}

add(2, 3)

//never data type

function throwerror(message: string):never
{
    throw new Error(message)
}
// Calling the function
throwerror("kannan");