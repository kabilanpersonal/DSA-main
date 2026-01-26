/**
 * Given a string s, find the first character that does not repeat.
 * If no such character exists, return -1 (or index, depending on requirement).
 */

let input = 'Leetcode';

function firstNonRepeatChar(string){
    let freq = new Map();
    
    //frequency
    for(let char of string){
        freq.set(char,(freq.get(char) || 0) + 1);
    }

    // Find first character with frequency 1
    for(let i= 0; i < string.length; i++){
        if (freq.get(string[i]) === 1){
            return [string[i],i]
        }
    }
    return [-1,-1]//[char,index]
}
console.log(firstNonRepeatChar(input))
console.log(firstNonRepeatChar('aabb'))