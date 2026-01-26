
/**
 * 
 * Total no of Sub- Arrays whose sum is equal to k
 */


function subArraySum(arr, k){
    let hashMap = new Map();
    hashMap.set(0,1) //This handles subarrays that start from index 0.
    let count = 0;
    let sum = 0;
    for (let a of arr){
        sum += a;
        if(hashMap.has(sum - k)){  //currentSum - previousSum = k
            count += hashMap.get(sum - k)
        }
        hashMap.set(sum, (hashMap.get(sum) || 0) + 1)
    }
    return count;
}
console.log(subArraySum([3,6,7], 9)) //1