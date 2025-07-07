//camel cases

let s1 = "kanna is a good";

let res = s1.toLowerCase().split(' '); // ['kanna', 'is', 'a', 'good']

let titleCase = "";

for (let i = 0; i < res.length; i++) {
  titleCase += res[i].charAt(0).toUpperCase() + res[i].slice(1) + " ";
}

console.log(titleCase.trim()); // "Kanna Is A Good"
