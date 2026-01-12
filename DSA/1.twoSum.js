//Brute-force Solution
function twoSum(arr, target){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === target) return [i,j]
        }
    }
}
console.log(twoSum([3,2,6], 9))

//using Object (Best and optimised solution)

function twoSum2(arr, target){
    let obj = {};
    for (let i = 0; i < arr.length; i++){
        let value = arr[i]
        if(obj[target - value] >= 0) {
            return [obj[target - value], i];
        }
        else obj[value] = i
    }
}
console.log(twoSum2([3,2,6], 9))