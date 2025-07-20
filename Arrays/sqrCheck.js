const _ = require('lodash')
let a= [0,0,0,0,0,0,0]
let b= [9,4,16,25,63,9]

function checkFreq(arr){
    let freq={};
    for(const a of arr){
        freq[a]= (freq[a] || 0) + 1
    }
    return freq
}

//alternate check for flat obj
function checkObjectCompare(a,b){
    
    let keysA= Object.keys(a);
    let keysB = Object.keys(b)

    return (keysA.length === keysB.length) && (keysA.every(key => a[key]===b[key]))
}

function main(a,b){
    let sqrA= a.map(item=>item*item);
    let freqA= checkFreq(sqrA);
    let freqB= checkFreq(b);
    console.log(freqA);
    console.log(freqB);
    return (_.isEqual(freqA,freqB))
}

console.log("Main Func : ",main(a,b));