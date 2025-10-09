//reverse each word a string
let str = "i love you"
let output = str.split(" ").map((a) => a.split("").reverse().join("")).join(" ");
console.log("One line Solution : ",output);

//reverse a string without reverse and extra space
function reverseString(str){
    return str.split('').reduce((acc,curr) =>curr + acc,"")
}
console.log(reverseString("login"));

