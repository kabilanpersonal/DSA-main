// 1. Using call() to set 'this'
function greet(greeting) {
    console.log(`${greeting}, my name is ${this.name}`);
  }
  const user1 = { name: "Alice" };
  greet.call(user1, "Hello"); 
  // Output: "Hello, my name is Alice"
  // Note: call() invokes immediately, first arg sets 'this', rest are passed individually.
  
  // 2. Using apply() to set 'this'
  const user2 = { name: "Bob" };
  greet.apply(user2, ["Hi"]); 
  // Output: "Hi, my name is Bob"
  // Note: apply() invokes immediately, arguments passed as an array.
  
  // 3. Using bind() to fix 'this'
  const user3 = { name: "Charlie" };
  const boundGreet = greet.bind(user3, "Hey");
  boundGreet(); 
  // Output: "Hey, my name is Charlie"
  // Note: bind() returns a new function with 'this' permanently bound.
  
  // 4. Borrowing array methods with call()
  const arrayLike = { 0: "a", 1: "b", length: 2 };
  console.log(Array.prototype.join.call(arrayLike, "-")); 
  // Output: "a-b"
  // Note: call() lets us use array methods on array-like objects.
  
  // 5. Borrowing array methods with apply()
  const numbers = [5, 6, 7];
  console.log(Math.max.apply(null, numbers)); 
  // Output: 7
  // Note: apply() spreads array into arguments for Math.max.
  
  // 6. Fixing 'this' in setTimeout with bind()
  const obj1 = {
    name: "David",
    greet() {
      setTimeout(function() {
        console.log("Without bind:", this.name);
      }, 500);
  
      setTimeout(function() {
        console.log("With bind:", this.name);
      }.bind(this), 1000);
    }
  };
  obj1.greet();
  // Output: "Without bind: undefined"
  //         "With bind: David"
  // Note: bind() ensures 'this' refers to obj1 inside callback.
  
  // 7. Fixing 'this' in setTimeout with arrow function
  const obj2 = {
    name: "Eve",
    greet() {
      setTimeout(() => {
        console.log("Arrow callback:", this.name);
      }, 500);
    }
  };
  obj2.greet();
  // Output: "Arrow callback: Eve"
  // Note: arrow functions inherit 'this' from enclosing scope.
  
  
  // 8. Partial application with bind()
  function multiply(a, b) { return a * b; }
  const double = multiply.bind(null, 2);
  console.log(double(5)); 
  // Output: 10
  // Note: bind() can pre-set arguments → partial application.
  
  // 10. Tricky puzzle with arguments and call
  var length = 10;
  function fn() { console.log(this.length); }
  const obj3 = {
    length: 5,
    method: function(fn) {
      fn();              // 10 → 'this' is global, length = 10
      arguments[0]();    // 2 → 'this' is arguments object, length = 2
    }
  };
  obj3.method(fn, 1);
  // Note: demonstrates how 'this' can change depending on call context.
  