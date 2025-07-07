//reverse each word a string
let str = "i love you"
let output = str.split(" ").map((a) => a.split("").reverse().join("")).join(" ");
console.log("One line Solution : ",output)

