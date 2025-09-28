function fibonacciSeries(n){
  let arr= [0, 1]
  for(let i = 2; i <= n; i++){
      arr.push(arr[i-1] + arr[i-2])
  }
  console.log(arr);
  return arr[n]
}
fibonacciSeries(5); 
 
 
 
 function fiboMoized(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
  
    memo[n] = fiboMoized(n - 1, memo) + fiboMoized(n - 2, memo); 
    return memo[n];
  }
 console.log(fiboMoized(10));