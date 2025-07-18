let a= [1,2,3,4,3,2,3]

//Without Inbuild
function removeDuplicatesWithoutInbuild(array){
    let freq={};
    for(const item of array){
        freq[item]= (freq[item] || 0)+1
    }
    console.log("Frequency",freq);
    return Object.keys(freq)
}

//With inbuild
function removeDuplicatesWithInbuild(array){
    return [...new Set(array)];
}
console.log(removeDuplicatesWithoutInbuild(a))
console.log(removeDuplicatesWithInbuild(a))