/*
Given an array of integers, find the contiguous subarray with the largest sum.
[-2,1,-3,4,-1,2,1,-5,4]
The best subarray is:
[4, -1, 2, 1] → Sum = 6

*/

function maxSubArray(array){
    let maxSum = array[0]
    let curSum = array[0];

    for(let i=1; i < array.length; i++){
        curSum = Math.max(array[i], curSum + array[i]);
        maxSum = Math.max(maxSum, curSum)
    }
    console.log("MaxSum: ", maxSum)
    return maxSum;
}
maxSubArray([-2,1,-3,4,-11,2,1,5,4]) // [2,1,5,4] -> 12