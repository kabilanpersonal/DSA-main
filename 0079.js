console.log('5' > '6');
console.log('apple' > 'banana'); // false (because 'a' < 'b')
console.log('cat' > 'bat');      // true (because 'c' > 'b')
function test() {
  console.log(arguments); 
}
test(1, 2, 3);  

//imediate involing function

(() => {
    console.log("hello");
})()