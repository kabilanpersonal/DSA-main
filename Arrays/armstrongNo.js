function armstrongCheck(num){
    let numArray= String(num).split('')
    let digit = numArray.length;
    let sum = 0
    numArray.forEach(num=> sum+=Math.pow(num,digit));
    console.log(sum)
    return sum===num ? true : false
}

console.log(armstrongCheck(153));