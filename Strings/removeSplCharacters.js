// remove a from the specified str
let str = "[kannane1234@#$%]";

function removeSpecialCharacters(str){
    console.log("Remove square brackets: ", str.replace(/[\[\]]/g, ''));
    console.log("Without Spl Characters: ",str.replace(/[^a-zA-Z0-9]/g,''));
    console.log("Only Alphabets: ",str.replace(/[^a-zA-Z]/g,''));
    console.log("Remove Vowels: ",str.replace(/[aeiou]/g, ''));
}


// without using in build
let b= 'aeiou'
let result = ''
for(let i=0; i<=str.length-1 ; i++){
result+= !(b.includes(str[i]))? str[i] : '';
}
console.log(result)


