// =======================================
// "this" in JavaScript
// =======================================

// 1. "this" in object methods
const obj1 = {
    name: "Alice",
    greet: function() {
      console.log("Object method:", this.name);
      // ✅ 'this' refers to obj1 because greet is called as obj1.greet()
    }
  };
  obj1.greet(); // "Alice"
  
  // 2. Losing "this" when assigning a method
  const greetFn = obj1.greet;
  greetFn(); 
  // ⚠️ 'this' is lost here. Called standalone, so 'this' refers to global object (window in browsers).
  // In strict mode, 'this' is undefined → "undefined"
  
  // 3. "this" inside a callback (classic pitfall)
  const obj2 = {
    name: "Bob",
    greet: function() {
      setTimeout(function() {
        console.log("Callback:", this.name);
        // ⚠️ 'this' here refers to global object, not obj2
      }, 500);
    }
  };
  obj2.greet(); // "undefined"
  
  // ✅ Fix with arrow function (lexical 'this')
  const obj3 = {
    name: "Charlie",
    greet: function() {
      setTimeout(() => {
        console.log("Arrow callback:", this.name);
        // ✅ Arrow functions inherit 'this' from enclosing scope (obj3)
      }, 500);
    }
  };
  obj3.greet(); // "Charlie"
  
  // 4. "this" in arrow functions inside objects
  const obj4 = {
    name: "Daisy",
    greet: () => {
      console.log("Arrow in object:", this.name);
      // ⚠️ Arrow functions don’t bind their own 'this'.
      // Here 'this' comes from outer/global scope → undefined
    }
  };
  obj4.greet(); // "undefined"
  
  // 5. "this" in classes
  class Person {
    constructor(name) {
      this.name = name;
    }
    greet() {
      console.log("Class method:", this.name);
    }
  }
  const p = new Person("Eve");
  p.greet(); // "Eve"
  
  // ⚠️ Problem: passing method as callback loses 'this'
  setTimeout(p.greet, 500); // "undefined"
  
  // ✅ Fix: bind 'this'
  setTimeout(p.greet.bind(p), 500); // "Eve"
  
  // 6. "this" in event handlers
  // (Run in browser environment with a button element)
  document.body.innerHTML = "<button id='btn'>Click me</button>";
  
  document.querySelector("#btn").addEventListener("click", function() {
    console.log("Event handler (function):", this);
    // ✅ 'this' refers to the button element
  });
  
  document.querySelector("#btn").addEventListener("click", () => {
    console.log("Event handler (arrow):", this);
    // ⚠️ Arrow inherits 'this' from outer scope (global), not the button
  });
  
  // 7. Tricky interview-style puzzle
  var length = 10;
  function fn() {
    console.log("Puzzle:", this.length);
  }
  
  const obj5 = {
    length: 5,
    method: function(fn) {
      fn();              // "10" → 'this' is global, so length = 10
      arguments[0]();    // "2" → 'this' is 'arguments' object, whose length = 2
    }
  };
  
  obj5.method(fn, 1);
  
  // =======================================
  // Notes//
  // =======================================
  // - 'this' is determined at CALL TIME, not at definition.
  // - In object methods: 'this' → the object.
  // - Standalone function calls: 'this' → global (or undefined in strict mode).
  // - Arrow functions: inherit 'this' from surrounding lexical scope.
  // - In classes: 'this' works like objects, but callbacks lose binding unless .bind() is used.
  // - Event handlers: regular functions bind 'this' to the element, arrows inherit outer scope.
  // - Special cases (like arguments object) can surprise you in puzzles.
  // =======================================
  