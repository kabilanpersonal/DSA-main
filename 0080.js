function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}

module.exports = { add, sub, mul, div };

///
const { add, sub, mul, div } = require("./math");

describe("arithmetic operations", () => {
  test("add", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("sub", () => {
    expect(sub(2, 3)).toBe(-1);
  });

  test("mul", () => {
    expect(mul(2, 3)).toBe(6);
  });

  test("div", () => {
    expect(div(10, 2)).toBe(5);
  });
});

//////////////
function getUser() {
  return {
    name: "Alice",
    age: 25,
  };
}

test("returns correct user object", () => {
  expect(getUser()).toEqual({ name: "Alice", age: 25 });
});

function getNumbers() {
  return [1, 2, 3];
}

test("returns correct array", () => {
  expect(getNumbers()).toEqual([1, 2, 3]);
});
