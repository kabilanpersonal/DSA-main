/**
 * The majority element is the element that appears more than n/2 times.
 * 
 * Solution:
 *  
 * -Pick a candidate
 * -Increase count if same
 * -Decrease count if different
 * -When count becomes 0 → pick new candidate
 */


//Majority element
function majority(arr){
    let count = 0;
    let candidate = null;
    for(let a of arr){
        //When count becomes 0 → pick new candidate
        if(count === 0){
            candidate = a
        }

        if(candidate === a){
            count ++;
        }else count --;
    }
    return candidate;
}
console.log("Majority element",majority([2,2,1,1,1,2,2]))//2



//Find the element which has occured more time in an array
function maxOccurence(arr){
    let obj = {};
    for(let a of arr){
        obj[a] = (obj[a] || 0) + 1
    }
    return Object.keys(obj).reduce((a,b) => {
        if(obj[a] === obj [b]) return a < b ? a : b;
        return obj[a] > obj [b] ? a : b
    })
}
console.log("Max Occured element:",maxOccurence([1,2,4,9,4,2]))// 2