
// Method - 1
let str = 'Boom boom boomer'
let freq = {};
let duplicates = [];
str= str.toLowerCase().match(/[a-z]/g);
console.log("Updated String: ",str) // ["boom", 'boom', 'boomer']

//find frequency
str.forEach(element => {
    freq[element] = (freq[element] || 0)+1
});
console.log("Frequency : ",freq);

//filter duplicate
for(let value in freq){
    if (freq[value]>1) duplicates.push(value);
}

console.log("Method 1 : ",duplicates.join(''));

// Method - 2

const duplicateStrings = Object.keys(freq).filter((value)=> freq[value] > 1).join(' ')
console.log("Method 2 : ",duplicateStrings)

//Method-3

let result = str.filter((item,i, arr)=> arr.indexOf(item) !== i )
console.log("Method 3 : ",[...new Set(result)].join(' '))