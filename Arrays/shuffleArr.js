
let arr= [1,2,3,4];
function shuffleArray(arr){

    for(let i = arr.length - 1 ; i > 0; i--){

        let j = Math.floor(Math.random() * (i + 1));
        //Math.floor(Math.random() * (max - min + 1)) + min;     generate random no between max and min
        [arr[i],arr[j]] = [arr[j], arr[i]]
    }
    return arr
}
console.log(shuffleArray(arr))