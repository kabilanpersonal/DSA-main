const numbers = [1, 3, 5, 10, 15, 20, 30, 45, 60];

let res1 = numbers.filter(num => num % 3==0 && num % 5==0)
console.log(res1.reduce((sum,acc)=>sum+acc,0));