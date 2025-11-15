
let arr= [1,2,2,4,3,5,3,6,6,1];
//If any elementh occurs consecutively twice...delete that
function removeConsecutive(arr){
let result = [];
let i= 0;

while(i< arr.length){
    if((i+1 < arr.length) && (arr[i] === arr[i+1])){
        i+=2;
    }else{
        result.push(arr[i]);
        i++
    }
}
return result;
}

console.log(removeConsecutive(arr)) //[1,4,3,5,3,1]