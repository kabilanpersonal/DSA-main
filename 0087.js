// reverse a string
let s = "kannan";
let n = s.length;

let res = "";
for (let i = n - 1; i >= 0; i--) {
  res += s[i];
}
console.log(res); // Output: "nannak"
