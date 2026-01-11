let nums = [4, 5, 8, 10]

function product(arr){
    let n = arr.length;
    let result = new Array(n);

    //Left product
    result[0] = 1;
    for(let i = 1; i < n; i++){
        result[i] = result[i-1] * nums[i-1]
    }

    //Right product
    let right = 1;
    for(let i = n-1; i >= 0; i--){
        result[i]= result[i] * right;
        right = right * nums[i]
    }
    return result;
}
console.log(product(nums))