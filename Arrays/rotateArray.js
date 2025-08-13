let arr=  [2,3,4,5,7]
 
function rotateArray(arr,n){
  for (let i = 0; i < n; i++) {
    arr.unshift(arr.pop())
    console.log(`After ${i} th rotation: ${arr}`)
  }
}
rotateArray(arr,2);