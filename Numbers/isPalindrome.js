
function isPalidrome(n){
    return n < 0 ? false : (n === +String(n).split("").reverse().join(""))
}

console.log(isPalidrome(121)); //true