const numbers = [121, 343, 123, 456, 989, 1001, 234];

const palindromes = numbers.filter(num => {
  const str = num.toString();
  return str === str.split('').reverse().join('');
});

const nonPalindromes = numbers.filter(num => !palindromes.includes(num));

console.log(palindromes);       // [121, 343, 989, 1001]
console.log(nonPalindromes);    // [123, 456, 234]
