//Remove the unneccessary space and count the words
let s = "  Kabilan   Kabilan has a good   Manner";

//using Obj
function getFrequency(words) {
    let cleaned = words.trim().replace(/\s+/g, " ").split(" ")
    console.log("Cleaned Array : ", cleaned)
    const freq = {};
    for (const item of cleaned) {
        freq[item] = (freq[item] || 0) + 1
    }
    return freq
}

console.log(getFrequency(s));