let arr= [24,34,43,56,75,9,8]
//Second largest
function secondLargest(arr){
    return arr.sort((a,b)=> b-a)[1]
}
console.log(secondLargest(arr)) //56

//Second Largest optimised O(n)
function secondLargestOptimised(arr){
    let largest = Number.NEGATIVE_INFINITY ;// holds the least negative value
    let secondLargest = Number.NEGATIVE_INFINITY;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        }else if (arr[i] != largest && arr[i] > secondLargest){
            secondLargest = arr[i]
        }
    }
    return secondLargest
}
console.log(secondLargestOptimised(arr))
