//You have an array cardPoints and an integer k. 
//Each move you take the leftmost or rightmost card
//you must take exactly k cards. Return the maximum sum of points obtainable.

let cardPoints = [1,2,3,4,5,6,1];
let k= 3;

//two pointer
function maxPoints(nums,k){
    let n= nums.length;

    if(k >= n) return nums.reduce((a,b) => a+b, 0);

    //take first 3
    let current = 0;
    for(let i=0; i < k; i++){
        current += nums[i];
    }
    let maxPoint = current;

    // i is how many cards we will take from the right instead of from the left
    for(i = 1; i <= k ; i++ ){

        // remove the (k-i)-th from left and add the (n-i)-th from right
        current = current - cardPoints[k-i] + cardPoints[n-i]
        if(maxPoint < current) maxPoint = current
    }

    return maxPoint

}

//Explanation

// take first 3 from left → sum = 1+2+3 = 6
// replace 1 from left with 1 from right → 6 - 3 + 1 = 4
// replace 2 from left with 6 from right → 4 - 2 + 6 = 8
// replace 3 from left with 5 from right → 8 - 1 + 5 = 12 → max is 12.

console.log(maxPoints(cardPoints,k))