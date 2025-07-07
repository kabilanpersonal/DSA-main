//short word in string
let str = "kanna";

let res= str.split(' ');
console.log(res);

let shortestWord = res[0];
for (let i = 0; i < res.length; i++)
{
    if (res[i].length < shortestWord.length) {
        shortestWord= res[i];
    }
}
console.log(shortestWord)


//First non repeating characte
// r in string
function check(str){
    let obj ={};
    for (let char of str){
        obj[char]= (obj[char] || 0)+1
    }
    console.log(obj);
    for(let char of str){
        if(obj[char] ===1)
            console.log(char)
            return char
    }
    return null;
}
check(str);
