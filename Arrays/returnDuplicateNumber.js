let a= [1,2,3,4,3,2,3]

function returnDuplicatesWithoutInbuild(array){
    let freq={};
    for(const item of array){
        freq[item]= (freq[item] || 0)+1
    }
    console.log("Frequency",freq);
    return Object.keys(freq).filter((value)=> freq[value] > 1)
}

console.log(returnDuplicatesWithoutInbuild(a))