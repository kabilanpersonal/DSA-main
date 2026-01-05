// A Sentence that uses every letter of the alphabet at least once

let str = "The quick brown fox jumps over the lazy dog";

function checkPangram(str){
    let cleanedString = str.match(/[a-z]/ig).join('').toLowerCase();
    console.log(cleanedString)
    let freq = {}
    //frequency
    for(let s of cleanedString){
        freq[s] = (freq[s] || 0) + 1
    }
    console.log(Object.keys(freq).length)
    return (Object.keys(freq).length === 26)
}
checkPangram(str);