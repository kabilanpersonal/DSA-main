 function fiboMoized(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
  
    memo[n] = fiboMoized(n - 1, memo) + fiboMoized(n - 2, memo); 
    return memo[n];
  }
 console.log(fiboMoized(10));