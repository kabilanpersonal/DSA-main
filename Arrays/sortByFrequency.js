let arr= [1,2,3,2,1,3,2,1,2,4,1,3];

function sortByFreq(array){
    let freq={}
    for(item of array){
        freq[item]= (freq[item] || 0)+1
    }
    return array.sort((a,b)=>{
        if(freq[a]===freq[b]) return a-b  // Optional: secondary sort by value
        return freq[a]-freq[b]  // Primary sort by frequency
    })
}

console.log(sortByFreq(arr))