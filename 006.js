let str = "kannan123@#$%";
let char = "",
  spec = "",
  num = "";

for (let i = 0; i < str.length; i++) {
  const ch = str[i];
  if (/[a-zA-Z]/.test(ch)) {
    char += ch;
  } else if (/[0-9]/.test(ch)) {
    num += ch;
  } else {
    spec += ch;
  }
}

console.log(`${char},....${num},.....${spec}`);


