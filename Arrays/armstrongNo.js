function armstrongCheck(num){
    let numArray= String(num).split('')
    let digit = numArray.length;
    // numArray.forEach(num=> sum+=Math.pow(num,digit));
    let sum = numArray.reduce((sum,cur)=> sum + Math.pow(cur,digit),0)
    console.log(sum)
    return sum===num ? true : false
}

console.log(armstrongCheck(153));