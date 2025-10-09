let str = "{]"
const myMap = {
    ')': '(',
    '}' : '{',
    ']': '['
};
let myStack =[];
function validParenthesis(str){
    for(let s of str){
        if( s === '(' || s === '{' || s === '[') myStack.push(s);
        else{
            if(myStack.pop() !== myMap[s]) return false;
        }
    }
    return myStack.length === 0;
}
console.log(validParenthesis(str))
