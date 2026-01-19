let a= [1,2,3,4,3,2,3]

//Without Inbuild
function removeDuplicatesWithoutInbuild(array){
    let freq={};
    for(const item of array){
        freq[item]= (freq[item] || 0)+1
    }
    console.log("Frequency",freq);
    //Alternate
    let frquency = array.reduce((acc,cur)=>{
        acc[cur] = (acc[cur] || 0) + 1
        return acc;
    },{})
    console.log("Frequency using reduce",frquency);
    return Object.keys(freq)
}

//With inbuild
function removeDuplicatesWithInbuild(array){
    return [...new Set(array)];
}
console.log(removeDuplicatesWithoutInbuild(a))
console.log(removeDuplicatesWithInbuild(a))