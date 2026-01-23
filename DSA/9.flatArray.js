let input = [1,2,[7,[4,3],9],10];

function flatWithoutFlat(input){
    let result = []
    for(let item of input){
        if(Array.isArray(item)){
            result.push(...flatWithoutFlat(item))
        }else result.push(item)
    }
    return result;
}
console.log("Flattened Array : ",flatWithoutFlat(input))